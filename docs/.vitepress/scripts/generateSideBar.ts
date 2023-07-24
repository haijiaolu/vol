import fs from "fs";
import path from "path";

export default function generateSideBar() {
  const baseDir = "wiki";
  const fullPath = fs.readdirSync(path.resolve(__dirname, `../../${baseDir}`));

  const sidebarList = fullPath.map((article) => {
    const title = article.replace(/\.md$/, "");
    return {
      text: title,
      link: `/${baseDir}/${title}`,
    };
  });

  return sidebarList;
}
