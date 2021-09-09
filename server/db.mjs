import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getUsers = async () => db.any("SELECT * FROM users");

export const addUser = async (user) =>
  await db.one(
    "INSERT INTO users(username, email) VALUES(${username}, ${email}) RETURNING id, username, email",
    user,
  );

export const deleteUser = async (userId) =>
  await db.none("DELETE FROM users WHERE id = ${userId}", { userId });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
