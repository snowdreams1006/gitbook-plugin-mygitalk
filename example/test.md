# test

下面您只需要在公众号和博客中做如下设置，然后就等着来自博客的自然增长吧！

第一步：公众号设置

登录要增粉的微信公众号，按如下规则设置关键词回复

关键词，设置为：vip
回复内容，设置为如下文本内容：
                        
<a href="https://my.openwrite.cn/code/generate?blogId=15702-1569305559839-744">点击该链接，获取博客解锁验证码</a>

第二步：博客设置

在您博客的文章页面的末尾，增加如下js代码。

```js                        
<script src="https://my.openwrite.cn/js/readmore.js" type="text/javascript"></script>
<script>
    const btw = new BTWPlugin();
    btw.init({
        id: 'vip-container',
        blogId: '15702-1569305559839-744',
        name: '雪之梦技术驿站',
        qrcode: 'https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg',
        keyword: 'vip',
    });
</script>
```
                    
其中id中设置的container需要用户根据文章页面中的文章容器来调整，或者直接将文章最外面的容器设置为该id。