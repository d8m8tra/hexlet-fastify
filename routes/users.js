export default async (fastify, opts) => {
  fastify.get('/users', () => {
    return 'GET /users'
  });
  fastify.post('/users', () => {
    return 'POST /users'
  });
};
