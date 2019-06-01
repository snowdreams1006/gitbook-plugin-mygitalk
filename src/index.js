import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

function component() {
    var element = document.createElement('div');

    element.id = "gitalk-container";

    return element;
}

document.body.appendChild(component());

const gitalk = new Gitalk({
    "clientID": "3f62415a283d19cbd696",
    "clientSecret": "aed0e1db0620bf5d0e3a3f0225f801997ad74e58",
    "repo": "snowdreams1006.github.io",
    "owner": "snowdreams1006",
    "admin": ["snowdreams1006"],
    "id": window.location.pathname,
    "distractionFreeMode": false
});
gitalk.render("gitalk-container");