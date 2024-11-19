FROM oven/bun AS bun
WORKDIR /app

FROM oven/bun:distroless AS bun-distroless
WORKDIR /app

# =============== INSTALL & BUILD =================

FROM bun AS builder
ARG BUN_PKG_MANAGER
COPY . .

RUN bun install --production
RUN bunx clean-modules -y "**/*.ts" "**/@types/**"
RUN bunx turbo build --filter="@request/gasi"

# ================== RELEASE ======================

FROM bun-distroless AS release
COPY --from=builder /app .
EXPOSE 8080/tcp
WORKDIR /app/apps/gasi
ENTRYPOINT [ "bun", "dist/index.js" ]