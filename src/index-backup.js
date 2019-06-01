// import 'gitalk/dist/gitalk.css';
// import Gitalk from 'gitalk';

// const clientID = "3f62415a283d19cbd696";
// const clientSecret = "aed0e1db0620bf5d0e3a3f0225f801997ad74e58";
// const repo = "snowdreams1006.github.io";
// const owner = "snowdreams1006";
// const admin = ["snowdreams1006"];

// const element = document.createElement('div');
// element.id = "gitalk-container";
// document.body.appendChild(element);

// const gitalk = new Gitalk({
//   "clientID": clientID,
//   "clientSecret": clientSecret,
//   "repo": repo,
//   "owner": owner,
//   "admin": admin,
//   "id": window.location.pathname,
//   "distractionFreeMode": false
// });
// gitalk.render("gitalk-container");

module.exports = {
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = 'powered by Gitbook'
      if(this.options.pluginsConfig['tbfed-pagefooter']) {
        _label = this.options.pluginsConfig['tbfed-pagefooter']['modify_label'] || _label;
        _format = this.options.pluginsConfig['tbfed-pagefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter']['copyright'];
        _copy = _c ? _c + ' test，' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var str = ' \n\n<footer class="page-footer">' + _copy +
        '<span class="footer-modification">' +
        _label +
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>'
      page.content = page.content + str;
      return page;
    }
  }
};



// module.exports = {
//   hooks: {
//     init() {
//       const site = this.config.get('pluginsConfig.rss');
//       console.log(site);

//       const mygitalk = this.options.pluginsConfig['mygitalk']
//       console.log(mygitalk);
//     },
//     'page:before': function(page) {
//       if (this.options.pluginsConfig['mygitalk']) {
//         const clientID = this.options.pluginsConfig['mygitalk']['clientID'];
//         const clientSecret = this.options.pluginsConfig['mygitalk']['clientSecret'];
//         const repo = this.options.pluginsConfig['mygitalk']['repo'];
//         const owner = this.options.pluginsConfig['mygitalk']['owner'];
//         const admin = this.options.pluginsConfig['mygitalk']['admin'];

//         const element = document.createElement('div');
//         element.id = "gitalk-container";
//         document.body.appendChild(component());

//         const gitalk = new Gitalk({
//           "clientID": clientID,
//           "clientSecret": clientSecret,
//           "repo": repo,
//           "owner": owner,
//           "admin": admin,
//           "id": window.location.pathname,
//           "distractionFreeMode": false
//         });
//         gitalk.render("gitalk-container");
//       }

//       return page;
//     }
//   }
// };
