require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    // gitalk 默认配置
    const mygitalk = config.mygitalk;
    
    if (mygitalk) {
      // 初始化 gitalk
      mygitalk.id = window.location.pathname;

      const gitalk = new Gitalk(mygitalk);
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
