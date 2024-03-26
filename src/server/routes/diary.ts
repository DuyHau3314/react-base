export default function diaryRoutes(server: any) {
  server.get('/api/diaries', (schema: any, request: any) => {
    const page = parseInt(request.queryParams.page || '1', 10);
    const perPage = parseInt(request.queryParams.perPage || '8', 10);

    const allDiaries = schema.db.diaries
      .map((diary: any) => {
        diary.date = new Date(diary.date);
        return diary;
      })
      .sort((a, b) => b.date - a.date)
      .map((diary: any) => {
        diary.date = diary.date.toISOString();
        return diary;
      });

    const total = allDiaries.length;
    const pageStart = (page - 1) * perPage;
    const pageEnd = pageStart + perPage;
    const diaries = allDiaries.slice(pageStart, pageEnd);

    return {
      diaries,
      total: total,
      currentPage: page,
      perPage: perPage,
      totalPages: Math.ceil(total / perPage)
    };
  });
}
