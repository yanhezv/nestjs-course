# DATABASE

## PostgresSQL using Neon Console
1. Sing in or sing up in [Neon Console](https://console.neon.tech/)
2. Create new database with name `nestjscoursedb`
3. Copy credencials for Prisma environment.

## Prisma configuration
1. Agregate [Prisma](https://www.prisma.io/) to NodeJs project:
    ```
    npm install prisma --save-dev
    ```

2. Initialize prisma configuration
    ```
    npx prisma init
    ```

3. Paste database credentials copied in `.env` file generate by previous command.

4. Added **models** in `prisma/schema.prisma` file generate by previous command.

5. Running first migration
    ```
    npx prisma migrate dev --name init
    ```

6. Look, prisma client has been added to `package.json` or use:
    ```
    npx prisma generate
    ```
