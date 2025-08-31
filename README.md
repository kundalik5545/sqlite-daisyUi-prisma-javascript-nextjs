# Steps to follow

## Commands to follow

#### NextJs Project Setup command

```npm
pnpx create-next-app@latest
```

#### Now add shadcn components

```npm
pnpm dlx shadcn@latest add select label input textarea sonner card checkbox dropdown-menu badge button
```

### Now add Prisma with sqlite

#### Prisma

```npm
pnpm add -D prisma
```

#### To create Prisma folder with .env file

```pnpm
pnpm prisma init
```

#### @Prisma/Client

```pnpm
pnpm add @prisma/client
```

### Now add this to prisma file and create models

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

### Now create Prisma models

```npm
model Users {
  id        String     @id @unique @default(cuid())
  firstName String?
  lastName  String?
  email     String?    @unique
  comments  Comments[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt

  @@index([email], name: "idx_users_email")
}
```

Use https://www.prismabuilder.io/

#### Now migrate the models created

```npm
pnpm prisma migrate dev
```

Give name to migrations

#### Now generate prisma

```npm
pnpm prisma generate
```

This helps to generate types in prisma

##### ⚡ When to run pnpm prisma generate?

1. After you install Prisma for the first time.
2. After you change your schema.prisma (new model, new field, etc.)
3. After running a migration (pnpm prisma migrate dev).

#### Now run Prisma Studio - Frontend & Backend for database

```npm
pnpm prisma studio
```

### Add Daisy Ui

```npm
pnpm add -D daisyui@latest
```

#### Now add this to global.css file

```css
@plugin "daisyui";
```
