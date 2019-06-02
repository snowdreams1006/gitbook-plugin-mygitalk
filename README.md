# gitbook-plugin-mygitalk

gitbook plugin using gitalk to discuss with others.

please visit [https://snowdreams1006.github.io](https://snowdreams1006.github.io) to learn more knowledge.

if you have any quesition,please dont hesitate to [contact me](snowdreams1006@163.com)

## Install

You can install this plugin via npm:

```bash
$ npm install gitbook-plugin-mygitalk
```

Be sure to activate the option from the `book.json` file:

```json
{
    "plugins" : ["mygitalk"]
}
```

Then run `gitbook install` followed by either `gitbook serve` or `gitbook build`

## Usage

Add it to your `book.json` with a basic configuration:

```json
{
  "plugins": [ "mygitalk" ],
  "pluginsConfig": {
    "mygitalk": {
        "clientID": "GitHub Application Client ID",
        "clientSecret": "GitHub Application Client Secret",
        "repo": "GitHub repo",
        "owner": "GitHub repo owner",
        "admin": ["GitHub repo owner and collaborators, only these guys can initialize github issues"],
        "distractionFreeMode": false
    }
  }
}
```


### change logs

#### version 0.0.6 (2016-12-06T16:54:38)

* fix: Fixed not to do anything when the width of the screen size was 600px or less (#6) 
* fix: changed the position of the bar position from "localStorage" to "sessiongStorage" (#10)

#### version 0.0.6 (2015-11-06T16:54:38)

* supported Gitbook v3

#### version 0.0.5 (2015-11-06T16:54:38)

* fixed don't work toggle button of summary view display from Gitbook V2.5.x

This software is released under the MIT License, see LICENSE.txt.

## License

`https://github.com/snowdreams1006/gitbook-plugin-mygitalk` is licensed under MIT License


