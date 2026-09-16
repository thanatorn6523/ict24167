// Cloudflare Pages Function: /api/certificates
// Handles CRUD operations for Certifications with Cloudflare D1

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 Database binding not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { results } = await env.DB.prepare("SELECT * FROM certifications ORDER BY created_at DESC").all();
    return new Response(JSON.stringify({ success: true, data: results }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const id = data.id || `cert-${Date.now()}`;

    await env.DB.prepare(
      `INSERT INTO certifications (id, title, issuer, issue_date, description_th, pdf_url, pdf_filename) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      data.title,
      data.issuer,
      data.date || '',
      data.desc || '',
      data.pdf || '',
      data.pdfName || ''
    ).run();

    return new Response(JSON.stringify({ success: true, id, message: "Certificate created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestDelete(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing certificate id param" }), { status: 400 });
    }

    await env.DB.prepare("DELETE FROM certifications WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true, message: "Certificate deleted" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
