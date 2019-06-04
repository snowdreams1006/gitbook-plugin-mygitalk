require([
  "gitbook"
], function(gitbook, $) {
  // mygitalk 配置对象
  var mygitalk = {};

  gitbook.events.bind("start", function(e, config) {
    // 初始化 gitalk
    mygitalk = config.mygitalk || {};
    mygitalk["id"] = window.location.pathname;

    // 初始化 gitalk
    initMygitalk();
  });

  gitbook.events.bind("page.change", initMygitalk);

  // 初始化 gitalk
  function initMygitalk() {
    const gitalk = new Gitalk(mygitalk);
    gitalk.render("gitalk-container");
  }
});
