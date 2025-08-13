# Stage 1: Build
FROM node:24.5.0-alpine AS builder
WORKDIR /app 

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Stage 2: Production Image
FROM nginx:stable-alpine AS production

RUN apk add --no-cache curl

RUN rm -f /etc/nginx/conf.d/default.conf && rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf

EXPOSE 80

USER root

CMD ["nginx", "-g", "daemon off;"]
