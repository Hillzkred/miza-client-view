import { Client } from "@notionhq/client";
import { NextApiResponse } from "next/types";
const { NEXT_PUBLIC_NOTION_ID, NEXT_PUBLIC_DATABASE_ID } = process.env;

export default async function handler(res: NextApiResponse) {
  const notion = new Client({ auth: NEXT_PUBLIC_NOTION_ID as string });

  const queryDatabase = async () => {
    const database = await notion.databases.query({ database_id: NEXT_PUBLIC_DATABASE_ID as string });

    return database;
  };

  const retrieveDatabase = async () => {
    const database = await notion.databases.retrieve({ database_id: NEXT_PUBLIC_DATABASE_ID as string });

    return database;
  };

  const allDatabaseResult = await Promise.all([queryDatabase(), retrieveDatabase()]);

  return res.status(200).json(allDatabaseResult);
}
