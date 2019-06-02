require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    if (config.mygitalk) {
      // 初始化 gitalk
      const gitalk = new Gitalk(config.mygitalk);
      gitalk.render("gitalk-container");

      // 添加刷新按钮
      gitbook.toolbar.createButton({
        icon: "fa fa-refresh",
        label: "mygitalk",
        position: "right",
        onClick: function() {
          window.location.reload(true);
        }
      });
    }
  });
});
