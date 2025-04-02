"use client";

import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { DatabasePropertyConfigResponse } from "./types/types";

export default function App({
  listOfHeadings,
  values,
}: {
  listOfHeadings: string[];
  values: Array<DatabasePropertyConfigResponse>;
}) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <table className="w-full text-left">
        <thead>
          <tr>
            {listOfHeadings.map((item, index) => {
              return (
                <th key={index} className="p-2 border border-white">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {values.map((item, index) => {
              const type = item.type;

              if (type === "rich_text") {
                const richText = item.rich_text as TextRichTextItemResponse[];
                return (
                  <td key={index} className="p-2 border border-white">
                    {richText[0].plain_text}
                  </td>
                );
              }
            })}
          </tr>
        </tbody>
      </table>
    </main>
  );
}
