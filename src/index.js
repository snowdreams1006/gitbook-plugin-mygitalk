import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

module.exports = {
    hooks: {
        'page:before': function(page) {
            if (this.options.pluginsConfig['mygitalk']) {
                const clientID = this.options.pluginsConfig['mygitalk']['clientID'];
                const clientSecret = this.options.pluginsConfig['mygitalk']['clientSecret'];
                const repo = this.options.pluginsConfig['mygitalk']['repo'];
                const owner = this.options.pluginsConfig['mygitalk']['owner'];
                const admin = this.options.pluginsConfig['mygitalk']['admin'];

                const element = document.createElement('div');
                element.id = "gitalk-container";
                document.body.appendChild(component());

                const gitalk = new Gitalk({
                    "clientID": clientID,
                    "clientSecret": clientSecret,
                    "repo": repo,
                    "owner": owner,
                    "admin": admin,
                    "id": window.location.pathname,
                    "distractionFreeMode": false
                });
                gitalk.render("gitalk-container");
            }

            return page;
        }
    }
};
