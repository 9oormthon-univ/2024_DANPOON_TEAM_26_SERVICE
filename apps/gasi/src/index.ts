import fastifyCors from "@fastify/cors";
import { initTRPC } from "@trpc/server";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import Fastify from "fastify";
import z from "zod";

const t = initTRPC.create();
const p = t.procedure;

const appRouter = t.router({
  v1: {
    test: p.query(() => "test"),
    mutation: p
      .input(
        z.object({
          name: z.string(),
        }),
      )
      .mutation((opts) => opts.input.name),
  },
});

export type AppRouter = typeof appRouter;

const server = Fastify({
  logger: true,
});

await server.register(fastifyCors);

await server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter },
});

const start = async () => {
  try {
    await server.listen({ port: 8080 });
    console.log("Server is running on port 8080");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
