require([
  "gitbook"
], function(gitbook, $) {
  var mygitalk = {};

  gitbook.events.bind("start", function(e, config) {
    mygitalk = config.mygitalk || {};
    mygitalk["id"] = window.location.pathname;

    initMygitalk();
  });

  gitbook.events.bind("page.change", initMygitalk);

  function initMygitalk() {
    const gitalk = new Gitalk(mygitalk);
    gitalk.render("gitalk-container");
  }
});
