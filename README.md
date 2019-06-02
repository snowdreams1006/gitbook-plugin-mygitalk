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

## License

`https://github.com/snowdreams1006/gitbook-plugin-mygitalk` is licensed under MIT License


