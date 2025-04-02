import { Client } from "@notionhq/client";

const { NEXT_PUBLIC_NOTION_ID, NEXT_PUBLIC_DATABASE_ID } = process.env;

// Initializing a client
const notion = new Client({
  auth: NEXT_PUBLIC_NOTION_ID,
});

async function retrieveNotionDatabase() {
  const notionDatabase = await notion.databases.retrieve({ database_id: NEXT_PUBLIC_DATABASE_ID as string });
  // const queryId = await notion.databases.query({ database_id: NEXT_PUBLIC_DATABASE_ID as string });

  return notionDatabase;
}

async function queryNotionDatabase() {
  const queryDatabase = await notion.databases.query({ database_id: NEXT_PUBLIC_DATABASE_ID as string });

  return queryDatabase;
}

export { retrieveNotionDatabase, queryNotionDatabase };
