// Cloudflare Pages Function: /api/projects
// Handles CRUD operations with Cloudflare D1 Database

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 Database binding not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { results } = await env.DB.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
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
    const id = data.id || `proj-${Date.now()}`;

    await env.DB.prepare(
      `INSERT INTO projects (id, title, category, tech_stack, description_th, demo_url, image_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      data.title,
      data.category || 'Full-Stack',
      data.tech || '',
      data.desc || '',
      data.link || '',
      data.image || ''
    ).run();

    return new Response(JSON.stringify({ success: true, id, message: "Project created" }), {
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

export async function onRequestPut(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    if (!data.id) {
      return new Response(JSON.stringify({ error: "Missing project id" }), { status: 400 });
    }

    await env.DB.prepare(
      `UPDATE projects 
       SET title = ?, category = ?, tech_stack = ?, description_th = ?, demo_url = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`
    ).bind(
      data.title,
      data.category,
      data.tech,
      data.desc,
      data.link,
      data.image,
      data.id
    ).run();

    return new Response(JSON.stringify({ success: true, message: "Project updated" }), {
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
      return new Response(JSON.stringify({ error: "Missing project id param" }), { status: 400 });
    }

    await env.DB.prepare("DELETE FROM projects WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true, message: "Project deleted" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
