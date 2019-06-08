const url = require("url");
const request = require("request");
const fs = require("fs");
const path = require("path");
// const url = require("url");
// const cheerio = require("cheerio");


var mygitalkConfig = {};
var urls = [];

module.exports = {
  book: {
    assets: "./assets",
    css: [
      "https://unpkg.com/gitalk/dist/gitalk.css",
      "mygitalk.css"
    ],
    js: [
      "https://unpkg.com/gitalk/dist/gitalk.min.js",
      "mygitalk.js"
    ]
  },
  hooks: {
    "init": function() {
      mygitalkConfig = this.options.pluginsConfig["mygitalk"];
      console.log("mygitalkConfig", JSON.stringify(mygitalkConfig));

      var issuesUrl = `https://api.github.com/repos/${mygitalkConfig.username}/${mygitalkConfig.repo}/issues?access_token=${mygitalkConfig.token}`;
      console.log("issuesUrl", issuesUrl);

      mygitalkConfig["issuesUrl"] = issuesUrl;
      mygitalkConfig["kind"] = "Gitalk";
    },
    "page:before": function(page) {
      if (mygitalkConfig) {
        var str = '<div id="gitalk-container" class="gitbook-plugin-mygitalk"></div>';

        page.content = page.content + str;
      }

      return page;
    },
    "page": function(page) {
      if (this.output.name !== "website") {
        return page;
      }

      var lang = this.isLanguageBook() ? this.config.values.language : "";
      if (lang) {
        lang = lang + "/";
      }

      var prefix = mygitalkConfig["prefix"];
      console.log("page 链接前缀", prefix);

      var pageURL = this.output.toURL(lang + page.path);
      pageURL = url.resolve(prefix, pageURL);
      console.log("page 访问链接", pageURL);

      urls.push(pageURL);

      return page;
    },
    "finish": function() {


      (async function() {
        // get 请求参数
        let requestGetOpt = {
          url: `${mygitalkConfig.issuesUrl}&page=1&per_page=1000`,
          json: true,
          headers: {
            "User-Agent": "github-user"
          }
        };

        // post 请求参数
        let requestPostOpt = {
          ...requestGetOpt,
          url: `${mygitalkConfig.issuesUrl}`,
          method: "POST",
          form: ""
        };

        console.log("开始初始化评论...");

        console.log("开始检索链接，请稍等...");
        console.log(`共检索到${urls.length}个链接`);

        try {
          // console.log("开始获取已经初始化的issues");
          // let issues = await send(requestGetOpt);
          // console.log(`已经存在${issues.length}个issues`);

          let issues = ["https://snowdreams1006.github.io/gitbook-plugin-mygitalk/"];


          // console.log("开始获取尚未初始化的issues");
          // let notInitIssueLinks = urls.filter((link) => {
          //   console.log("正在检索"+link);

          //   return !issues.find((item) => {
          //     link = removeProtocol(link);
          //     return item.body.includes(link);
          //   });
          // });
          // console.log(`尚未初始化${notInitIssueLinks.length}个issues`);

        } catch (e) {
          console.log(`初始化issue出错，错误如下：`);
          console.log(e);
        } finally {

        }







      })();

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



    }
  }
};
