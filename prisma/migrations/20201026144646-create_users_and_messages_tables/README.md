# Migration `20201026144646-create_users_and_messages_tables`

This migration has been generated at 10/26/2020, 3:46:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."messages" (
"id" SERIAL,
"user_id" integer   NOT NULL ,
"content" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."users" (
"id" SERIAL,
"email" text   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."messages" ADD FOREIGN KEY ("user_id")REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201026144646-create_users_and_messages_tables
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model messages {
+  id      Int    @id @default(autoincrement())
+  user_id Int
+  content String
+  users   users  @relation(fields: [user_id], references: [id])
+}
+
+model users {
+  id       Int        @id @default(autoincrement())
+  email    String
+  messages messages[]
+}
```


