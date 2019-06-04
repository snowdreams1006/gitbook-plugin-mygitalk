const request = require("request");
const fs = require("fs");
const path = require("path");
const url = require("url");
const xmlParser = require("xml-parser");
const cheerio = require("cheerio");

// 根据自己的情况进行配置
const config = {
  username: "snowdreams1006", // GitHub 用户名
  token: "fe1303c7a212d191aefe0ae2dd899aed84b2ca90", // GitHub Token
  repo: "gitbook-plugin-mygitalk", // 存放 issues的git仓库
  // sitemap.xml的路径，commit.js放置在根目录下，无需修改，其他情况自行处理
  sitemapUrl: path.resolve(__dirname, "./sitemap.xml"),
  kind: "Gitalk", // "Gitalk" or "Gitment"
};
let issuesUrl = `https://api.github.com/repos/${config.username}/${config.repo}/issues?access_token=${config.token}`;

let requestGetOpt = {
  url: `${issuesUrl}&page=1&per_page=1000`,
  json: true,
  headers: {
    "User-Agent": "github-user"
  }
};
let requestPostOpt = {
  ...requestGetOpt,
  url: issuesUrl,
  method: "POST",
  form: ""
};

console.log("开始初始化评论...");

(async function() {

  try {

    console.log("开始检索链接，请稍等...");
    let urls = sitemapXmlReader(config.sitemapUrl);
    console.log(`共检索到${urls.length}个链接`);

    console.log("开始获取已经初始化的issues");
    let issues = await send(requestGetOpt);
    console.log("issues", JSON.stringify(issues));


    console.log(`已经存在${issues.length}个issues`);

    console.log("开始获取尚未初始化的issues");
    let notInitIssueLinks = urls.filter((link) => {
      return !issues.find((item) => {
        link = removeProtocol(link);
        return item.body.includes(link);
      });
    });
    console.log(`尚未初始化${notInitIssueLinks.length}个issues`);

    if (notInitIssueLinks.length > 0) {
      console.log(`本次有${notInitIssueLinks.length}个链接需要初始化issue：`);
      console.log(notInitIssueLinks);
      console.log("开始提交初始化请求, 大约需要40秒...");

      /**
       * 部署好网站后，直接执行start，新增文章并不会生成评论
       * 经测试，最少需要等待40秒，才可以正确生成， 怀疑跟github的api有关系，没有找到实锤
       */
      setTimeout(async () => {
        let initRet = await notInitIssueLinks.map(async (item) => {
          let html = await send({ ...requestGetOpt, url: item });
          let title = cheerio.load(html)("title").text();
          let pathLabel = url.parse(item).path;

          let body = `${item}<br><br>描述`;
          let form = JSON.stringify({ body, labels: [config.kind, pathLabel], title });

          console.log("正在初始化 issue" + form);

          return send({ ...requestPostOpt, form });
        });

        console.log(`已完成${initRet.length}个！`);
        console.log("可以愉快的发表评论了！");
      }, 40000);
    } else {
      console.log("本次发布无新增页面，无需初始化issue!");
    }
  } catch (e) {
    console.log(`初始化issue出错，错误如下：`);
    console.log(e);
  } finally {

  }
})();

function sitemapXmlReader(file) {
  let data = fs.readFileSync(file, "utf8");
  let sitemap = xmlParser(data);
  return sitemap.root.children.map(function(url) {
    let loc = url.children.filter(function(item) {
      return item.name === "loc";
    })[0];
    return loc.content;
  });
}

function removeProtocol(url) {
  return url.substr(url.indexOf(":"));
}

function send(options) {
  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      if (!error) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}
