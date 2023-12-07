import Fastify from "fastify";
const app = Fastify();

app.get('/', () => {
    return 'Hello'
});

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(() => {
    console.log('🚀 HTTP Server running on http://localhost:3333')
});
