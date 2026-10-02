export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.send('Hello World!')
  });
  
  fastify.get("/hello", async (req, res) => {
  // const name = req.query.name;
  // return name ? `Hello, ${name}!` : "Hello, World!";
  console.log(req.query);
});

}
