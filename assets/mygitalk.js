require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    const gitalk = new Gitalk(config.mygitalk);
    gitalk.render("gitalk-container");
  });

  gitbook.events.bind("page.change", function() {
    const gitalk = new Gitalk(config.mygitalk);
    gitalk.render("gitalk-container");
  });
});
