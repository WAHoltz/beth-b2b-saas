import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const tickets = sqliteTable("tickets", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  assinged_employee_id: text("assigned_employee_id"),
  subject: text("subject").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
});
