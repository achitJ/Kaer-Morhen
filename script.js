import appDirs from "./files.js";

console.log(appDirs);

const appList = document.querySelector("#app-list");

console.log(appList)

appDirs.forEach((app) => {
  const appItem = document.createElement("li");
  appItem.classList.add("app-item");
  const appLink = document.createElement("a");
  appLink.classList.add("app-link");
  appLink.href = app.location;
  appLink.innerText = app.name;
  appItem.appendChild(appLink);
  appList.appendChild(appItem);
});
