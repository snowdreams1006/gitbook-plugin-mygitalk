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
            this.log.debug.ln('init', this.options.pluginsConfig.mygitalk);

            mygitalkConfig = this.options.pluginsConfig["mygitalk"];
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.path);

            if (mygitalkConfig) {
                var str = '<div id="gitalk-container" class="gitbook-plugin-mygitalk"></div>';

                page.content = page.content + str;
            }

            return page;
        }
    },
    blocks: {
        vip: {
            process: function(block) {
                this.log.debug.ln('process', block.body);

                return "**VIP**" + block.body;
            }
        }
    }
};