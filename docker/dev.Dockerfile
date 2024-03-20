# docker/dev.Dockerfile

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx prisma migrate dev --name init

# RUN npx prisma generate

# RUN npm run seed

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time

ENV NEXT_TELEMETRY_DISABLED 1

# for deploying the build version with 

CMD ["npm", "run", "dev"]

# Note: Don't expose ports here, Compose will handle that for us
