import sql from "mssql";
import { NextApiHandler } from "next";

const sqlConfig = {
  database: "strapi",
  user: "strapi",
  password: "strapiP@ssw0rd",
  port: 1433,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
const handler: NextApiHandler = async (req, res) => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    const connect = new sql.ConnectionPool(sqlConfig);
    await connect.connect();
    const request = new sql.Request(connect);
    const result = await request.query`SELECT Name from sys.databases;`;
    console.dir(result);
    res.status(200).json(result);
  } catch (err) {
    // ... error checks
    console.error(err);
  }
};

export default handler;
