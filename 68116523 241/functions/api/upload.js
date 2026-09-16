// Cloudflare Pages Function: /api/upload
// Handles direct upload of project images and certificate PDFs into Cloudflare R2 Bucket

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    if (!env.R2_BUCKET) {
      return new Response(JSON.stringify({ error: "Cloudflare R2 Bucket binding not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided in form-data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const key = `uploads/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    // Put object into R2
    await env.R2_BUCKET.put(key, file.stream(), {
      httpMetadata: {
        contentType: file.type,
      }
    });

    const publicUrl = `https://assets.your-portfolio-domain.com/${key}`;

    return new Response(JSON.stringify({
      success: true,
      key,
      url: publicUrl,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
