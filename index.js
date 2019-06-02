let mygitalkConfig = {};

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
    },
    "page:before": function(page) {
      if (mygitalkConfig) {
        var str = '<div id="gitalk-container" class="gitbook-plugin-mygitalk"></div>';
        page.content = page.content + str;
      }

      return page;
    }
  }
};
