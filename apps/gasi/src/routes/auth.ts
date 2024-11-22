import { z } from "zod";
import { kakaoAuthorize } from "../auth/providers.js";
import { p } from "../trpc.js";

export const kakao = p
  .input(z.object({ code: z.string(), redirectUrl: z.string().optional() }))
  .query(async ({ input, ctx }) => {
    return await kakaoAuthorize(input.redirectUrl ?? `${ctx.baseUrl}/callback`, input.code);
  });
