require([
    "gitbook"
], function(gitbook, $) {
    var mygitalk = {};

    gitbook.events.bind("start", function(e, config) {
        mygitalk = config.mygitalk || {};

        initMygitalk();
    });

    gitbook.events.bind("page.change", initMygitalk);

    function initMygitalk() {
        mygitalk.id = window.location.pathname;

        const gitalk = new Gitalk(mygitalk);
        gitalk.render("gitalk-container");
<<<<<<< HEAD

        // const btw = new BTWPlugin();
        // btw.init({
        //     id: 'gitalk-container',
        //     blogId: mygitalk.blogId,
        //     name: mygitalk.name,
        //     qrcode: mygitalk.qrcode,
        //     keyword: mygitalk.keyword
        // });
=======
>>>>>>> 4a463b206b2d75f7bcf228a6d6473762ea1f6ad5
    }
});