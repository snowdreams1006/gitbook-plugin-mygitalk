# how to dev

## 有趣的模板变量

我的名字是{{name}}，很高兴见到你

- 多语言书的当前语言

{{book.language}}

- 当前时间

{{gitbook.time}}

- 原始页面的路径

{{file.path}}

- 页面标题

{{page.title}}

- 内容列表

{{summary.parts}}

- 本书的语言环境列表

{{languages.list}}

- 输出生成器的名称

{{output.name}}

- 自述文件的路径

{{readme.path}}

- 词汇表的路径

{{glossary.path}}

{% set softwareVersion = "1.0.0" %}

Current version is {{ softwareVersion }}.
[Download it](website.com/download/{{ softwareVersion }})

{% raw %}
  this will {{ not be processed }}
{% endraw %}


remote: Repository not found.
fatal: repository 'https://github.com/snowdreams1006/snowdreams1006.git/' not found

remote: Repository not found.
fatal: repository 'https://snowdreams1006@github.com/snowdreams1006/snowdreams1006.git/' not found

https://github.com/snowdreams1006/snowdreams1006.github.io.git

remote: Repository not found.
fatal: repository 'https://github.com/snowdreams1006/snowdreams1006.git/' not found






git+https://github.com/snowdreams1006/snowdreams1006.github.io/git/base/about.md

git+https://snowdreams1006@github.com/snowdreams1006/snowdreams1006.github.io.git/README.md

git+https://user@hostname/owner/project.git/file#commit-ish