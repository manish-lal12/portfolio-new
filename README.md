# Portfolio

A modern, responsive personal portfolio built with **Vite** and **Tailwind CSS**.

---

## Features

- Fully responsive design
- Optimized images via Cloudinary
- Secure HTTPS setup with Let's Encrypt
- Dockerized for easy deployment

---

## Tech Stack

- Next.js | Tailwind CSS | Cloudinary
- Docker | Nginx | Certbot / Let's Encrypt

---

## Setup

### Build & Run

```bash
docker build -t portfolio-app .
docker run -d \
  -p 80:80 -p 443:443 \
  -v /path/to/letsencrypt:/etc/letsencrypt \
  -v /path/to/cloudflare:/etc/ssl/cloudflare \
  --name portfolio-app \
  portfolio-app
```
