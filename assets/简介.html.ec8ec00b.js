import{c as n}from"./app.a4413a59.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const o={},e=n(`<h1 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h1><p><a href="https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/" target="_blank" rel="noopener noreferrer">\u6709\u5173 conda \u7684\u8FF7\u601D\u548C\u8BEF\u89E3</a></p><ul><li><a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer">Anaconda</a> <strong>\u5305\u542B\u5927\u91CF\u9488\u5BF9\u6570\u636E\u79D1\u5B66\u7684\u5305\u7684 Python \u5206\u53D1\u7248\u672C</strong>\uFF08\u5373\u76F8\u5F53\u4E8E\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF09</li><li>\u57FA\u4E8E conda \uFF08\u4E00\u4E2A<strong>\u5305\u548C\u73AF\u5883</strong>\u7BA1\u7406\u5668\uFF09\u884D\u751F\u800C\u6765\uFF0C\u5E94\u7528\u7A0B\u5E8F conda \u662F\u5305\u548C\u73AF\u5883\u7BA1\u7406\u5668\uFF0C\u53EA\u80FD\u901A\u8FC7<strong>\u547D\u4EE4\u884C</strong>\u6765\u4F7F\u7528\u3002</li><li>\u5229\u7528 Anaconda \u53EF\u4EE5<strong>\u521B\u5EFA\u7F6E\u4E0D\u540C\u7684\u73AF\u5883</strong>\uFF08\u4EE5\u5206\u9694\u4E0D\u540C\u7684\u9879\u76EE\uFF09</li><li>\u5229\u7528 Anaconda \u53EF\u65B9\u4FBF\u5730\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u5B89\u88C5\u3001\u5378\u8F7D\u548C\u66F4\u65B0\u5305\uFF08\u4F7F\u7528<strong>\u4E0D\u540C\u7248\u672C</strong>\u7684 Python \u548C\u8F6F\u4EF6\u5305\uFF09</li><li>\u82E5\u4E0D\u9700\u8981\u9884\u5148\u4E0B\u8F7D\u5305\uFF0C\u53EF\u4F7F\u7528 <a href="https://conda.io/miniconda.html" target="_blank" rel="noopener noreferrer">Miniconda</a> \u8FD9\u4E2A\u8F83\u5C0F\u7684\u53D1\u884C\u7248\uFF08\u4EC5\u5305\u542B conda \u548C Python\uFF09\u3002</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5728<a href="https://www.anaconda.com/download/" target="_blank" rel="noopener noreferrer">\u8BE5\u9875\u9762</a>\u9009\u62E9\u9002\u5408\u7684\u7248\u672C\u4E0B\u8F7D\u5E76\u5B89\u88C5</p><ul><li>\u8BA1\u7B97\u673A\u5DF2\u88C5 Python\u5E76\u4E0D\u5F71\u54CD\u3002\u5B9E\u9645\u4E0A\uFF0C\u811A\u672C\u548C\u7A0B\u5E8F<strong>\u4F7F\u7528\u7684\u9ED8\u8BA4 Python \u662F Anaconda \u9644\u5E26\u7684 Python</strong></li><li>\u9ED8\u8BA4\u5B89\u88C5 Anaconda \u4E2D\u6240\u6709\u5305\uFF0C\u5E76\u7ED3\u675F\u5B89\u88C5\u540E\u8FDB\u5165<code>conda</code>\u73AF\u5883</li></ul><h2 id="\u8FDB\u5165conda\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165conda\u73AF\u5883" aria-hidden="true">#</a> \u8FDB\u5165conda\u73AF\u5883</h2><p>\u5728 Windows \u4E0A\uFF0C\u4F1A\u968F Anaconda \u4E00\u8D77\u5B89\u88C5\u4E00\u6279\u5E94\u7528\u7A0B\u5E8F\uFF1A</p><ul><li><code>Anaconda Navigator</code>\u7528\u4E8E\u7BA1\u7406\u73AF\u5883\u548C\u5305\u7684 <strong>GUI</strong></li><li><code>Anaconda Prompt</code><strong>\u7EC8\u7AEF</strong>\u4F7F\u7528\u547D\u4EE4\u884C\u754C\u9762\u6765\u7BA1\u7406\u73AF\u5883\u548C\u5305</li><li><code>Spyder</code>\u5B83\u662F\u9762\u5411\u79D1\u5B66\u5F00\u53D1\u7684 <strong>IDE</strong></li></ul><p><strong>\u6CE8\u610F</strong>\uFF1A \u4E3A\u907F\u514D\u62A5\u9519\uFF0C\u63A8\u8350\u5728<strong>\u9ED8\u8BA4\u73AF\u5883\u4E0B\u66F4\u65B0\u6240\u6709\u5305</strong>\uFF0C\u6253\u5F00<code>Anaconda Prompt</code>\uFF08\u6216 Mac \u4E0B\u7684\u7EC8\u7AEF\uFF09\u952E\u5165</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda upgrade <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">all</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,11);function r(t,s){return e}var i=a(o,[["render",r]]);export{i as default};
