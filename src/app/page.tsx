import * as React from "react";
import { DatabasePropertyConfigResponse } from "@/app/types/types";
import App from "./App";
import {
  GetDatabaseResponse,
  PartialDatabaseObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const { NOTION_ID, DATABASE_ID, API_BASE_URL } = process.env;

const queryDatabase = async () => {
  const fetchData = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${NOTION_ID}`,
      "Notion-Version": "2022-06-28",
    },
    cache: "no-store",
  });
  const response: QueryDatabaseResponse = await fetchData.json();

  return response;
};

const retrieveDatabase = async () => {
  const notionDatabase = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${NOTION_ID}`,
      "Notion-Version": "2022-06-28",
    },
    cache: "no-store",
  });
  const response: GetDatabaseResponse = await notionDatabase.json();

  return response;
};

async function getFoo() {
  const req = await fetch(`${API_BASE_URL}/api/notion-webhook`, { method: "GET" });
  const res = await req.json();
  console.log(res);
}

export default async function Home() {
  await getFoo();
  const allDatabaseResult = await Promise.all([queryDatabase(), retrieveDatabase()]);
  const listOfHeadings: string[] = [];
  const listOfValues: Array<DatabasePropertyConfigResponse[]> = [];

  allDatabaseResult.map((item) => {
    if (item.object === "database") {
      const headings = Object.keys(item.properties);
      headings.map((item) => {
        listOfHeadings.push(item);
      });
    } else if (item.object === "list") {
      const results = item.results as PartialDatabaseObjectResponse[];
      results.map((item) => {
        const values = Object.values(item.properties);

        listOfValues.push(values);
      });
    }
  });

  const values: DatabasePropertyConfigResponse[] = [];

  for (let i = 0; i < 4; i++) {
    const item = listOfValues[i];
    values.push(item[i]);

    // terminate when item is undefined
    if (item[i] === undefined) {
      break;
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <App listOfHeadings={listOfHeadings} values={values} />
    </div>
  );
}
