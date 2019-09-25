var mygitalkConfig = {};

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

            if (page.content) {
                var lines = page.content.split('\n');
                var nonvipContainer = lines[0].concat(lines.length / 2);;
                var vipContainer = lines[lines.length / 2].concat(lines.length - 1);;
                vipContainer = '<div id="vip-container">' + vipContainer + '</div>';
                page.content = nonvipContainer + vipContainer;
            }

            return page;
        }
    }
};