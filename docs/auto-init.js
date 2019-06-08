var request = require("request");

var mygitalk = {
    "clientID": "21f570632b0be1a7f0eb",
    "clientSecret": "8a94b375c5d05d672393201c28d479a6f9f5a538",
    "username": "snowdreams1006",
    "token": "c0a97386c3feb56bde8736f7ac343319f6039fcb",
    "repo": "gitbook-plugin-mygitalk",
    "owner": "snowdreams1006",
    "admin": ["snowdreams1006"],
    "distractionFreeMode": false,
    "publicPath": "https://snowdreams1006.github.io/gitbook-plugin-mygitalk"
};

var pathName = "use/mygitalk-name.html";
var pathUrl = `https://snowdreams1006.github.io/gitbook-plugin-mygitalk/${pathName}`;
console.log("pathUrl", pathUrl);
var labelName = "mygitalk-name";





// request.get({
//     url: "https://api.github.com/search/issues",
//     qs: {
//         q: `${labelName}+repo:${mygitalk.username}/${mygitalk.repo}`
//     },
//     headers: {
//         "Accept": "application/vnd.github.symmetra-preview+json",
//         "Authorization": `token ${mygitalk.token}`,
//         "User-Agent": "gitbook-plugin-mygitalk"
//     }
// }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var total_count = JSON.parse(body).total_count;
//         if (total_count > 0) {
//             console.log(`已创建${total_count}条issue`);
//         } else {
//             console.log(`未创建${total_count}条issue,正在创建中...`);

//             request.post({
//                 url: `https://api.github.com/repos/${mygitalk.username}/${mygitalk.repo}/issues`,
//                 json: true,
//                 body: {
//                     "title": pathName,
//                     "body": pathUrl,
//                     "labels": [labelName, "Gitalk"]
//                 },
//                 headers: {
//                     "Accept": "application/vnd.github.symmetra-preview+json",
//                     "content-type": "application/json",
//                     "Authorization": `token ${mygitalk.token}`,
//                     "User-Agent": "gitbook-plugin-mygitalk"
//                 }
//             }, function(error, response, body) {
//                 if (!error && response.statusCode == 201) {

//                     console.log("body", body);
//                 } else {
//                     console.error("error", error);
//                 }
//             });
//         }
//     } else {
//         console.error("error", error);
//     }
// });

(async function() {

    try {

        var issues = await send({
            url: "https://api.github.com/search/issues",
            method: "GET",
            qs: {
                q: `${labelName}+repo:${mygitalk.username}/${mygitalk.repo}`
            },
            headers: {
                "Accept": "application/vnd.github.symmetra-preview+json",
                "Authorization": `token ${mygitalk.token}`,
                "User-Agent": "gitbook-plugin-mygitalk"
            }
        });
        issues = JSON.parse(issues);

        console.error(`一共搜索出${issues.total_count}条结果: ${JSON.stringify(issues)}`);

        var issue = await send({
            url: `https://api.github.com/repos/${mygitalk.username}/${mygitalk.repo}/issues`,
            method: "POST",
            json: true,
            body: {
                "title": pathName,
                "body": pathUrl,
                "labels": [labelName, "Gitalk"]
            },
            headers: {
                "Accept": "application/vnd.github.symmetra-preview+json",
                "content-type": "application/json",
                "Authorization": `token ${mygitalk.token}`,
                "User-Agent": "gitbook-plugin-mygitalk"
            }
        });

        console.error(`已经创建 issue: ${JSON.stringify(issue)}`);
    } catch (e) {
        console.error("初始化 issue 出错", e);
    } finally {

    }

    function send(options) {
        return new Promise(function(resolve, reject) {
            request(options, function(error, response, body) {
                if (!error) {
                    resolve(body);
                } else {
                    reject(error);
                }
            });
        });
    }
})();