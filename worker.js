export default { fetch: async (request, env) => {
  const xml = await fetch("https://wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.com/sitemap.xml")
    .then(async (response) => {
      const text = await response.text();
      return text.replace(/\.html/g, "").replace(/seanbehan\.ca/g, new URL(request.url).hostname);
    });
    return new Response(
      xml,
      { headers: request.headers }
    );
  }
}
