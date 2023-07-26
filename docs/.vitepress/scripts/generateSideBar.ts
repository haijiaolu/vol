import fs from "fs";
import path from "path";

import { readFileSync } from "fs";
import { join } from "path";

export default function generateSideBar2(baseDir, isRename) {
  const fullPath = fs.readdirSync(path.resolve(__dirname, `../../${baseDir}`));

  const sidebarList = fullPath.map((article) => {
    const title = article.replace(/\.md$/, "");
    const contents = readFileSync(
      join(__dirname, `../../${baseDir}/${article}`),
      "utf-8"
    );
    var name = title;
    if (isRename === 1) {
      try {
        name = contents
          .split(/\r?\n/)[1]
          .split(": ")[1]
          .replace(/"/gi, "")
          .trim();
      } catch (error) {}
    }
    return {
      text: name,
      link: `/${baseDir}/${title}`,
    };
  });

  return sidebarList;
}
