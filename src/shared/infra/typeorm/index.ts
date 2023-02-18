import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultoptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultoptions, {
      datebase:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultoptions.database,
    })
  );
};
