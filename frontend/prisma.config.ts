import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: process.env.DATABASE_URL ?? "postgresql://temp:temp@localhost:5432/temp"
    }
});
