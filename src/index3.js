import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

const clientID = "3f62415a283d19cbd696";
const clientSecret = "aed0e1db0620bf5d0e3a3f0225f801997ad74e58";
const repo = "snowdreams1006.github.io";
const owner = "snowdreams1006";
const admin = ["snowdreams1006"];

const element = document.createElement("div");
element.id = "gitalk-container";
document.body.appendChild(element);

const gitalk = new Gitalk({
  "clientID": clientID,
  "clientSecret": clientSecret,
  "repo": repo,
  "owner": owner,
  "admin": admin,
  "id": window.location.pathname,
  "distractionFreeMode": false
});
gitalk.render("gitalk-container");



