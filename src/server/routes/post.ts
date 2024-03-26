export default function postRoutes(server: any) {
  server.get('/api/posts', (schema: any, request: any) => {
    const page = parseInt(request.queryParams.page || '1', 10);
    const perPage = parseInt(request.queryParams.perPage || '8', 10);

    const allPosts = schema.db.posts
      .map((post: any) => {
        post.date = new Date(post.date);
        return post;
      })
      .sort((a, b) => b.date - a.date)
      .map((post: any) => {
        post.date = post.date.toISOString();
        return post;
      });

    const total = allPosts.length;
    const pageStart = (page - 1) * perPage;
    const pageEnd = pageStart + perPage;
    const posts = allPosts.slice(pageStart, pageEnd);

    return {
      posts,
      total: total,
      currentPage: page,
      perPage: perPage,
      totalPages: Math.ceil(total / perPage)
    };
  });
}
