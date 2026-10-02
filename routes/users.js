export default async (fastify, opts) => {
  fastify.get('/users', (req, res) => {
    const page = req.query.page;
    return page
  });
  fastify.post('/users', () => {
    return 'POST /users'
  });
};
