import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database_ignite"): Promise<Connection> => {
  const defaultoptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultoptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      datebase:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultoptions.database,
    })
  );
};
