import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getSightings = () => 
  db.any("SELECT sightings.*, individuals.nickname FROM sightings LEFT OUTER JOIN individuals on individuals.id=sightings.individual_id");
export const postSighting = ({ date, indId, location, health, email, timestamp }) => 
  db.one("INSERT INTO sightings(date_time, individual_id, location, health_status, email, record_timestamp) VALUES(${date}, ${indId}, ${location}, ${health}, ${email}, ${timestamp}) RETURNING *", { date, indId, location, health, email, timestamp }) 
export const getIndividuals = () => 
  db.any("SELECT individuals.*, species.common_name FROM individuals LEFT OUTER JOIN species on individuals.species_id=species.id")
export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

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
