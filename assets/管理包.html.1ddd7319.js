import{c as a}from"./app.a4413a59.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";var n="/blog-data/assets/_show_insta_1539260796_10436.893c98ad.png";const s={},r=a(`<h1 id="\u7BA1\u7406\u5305" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5305" aria-hidden="true">#</a> \u7BA1\u7406\u5305</h1><ul><li><strong>\u5305\u7BA1\u7406\u5668</strong>\u662F\u7528\u4E8E\u5728\u8BA1\u7B97\u673A\u4E0A\u5B89\u88C5<strong>\u5E93\u548C\u5176\u4ED6\u8F6F\u4EF6</strong>\u3002python \u5E93\u7684\u9ED8\u8BA4\u5305\u7BA1\u7406\u5668\u662F<code>pip</code>\uFF08\u4F7F\u7528 <code>conda</code>\u7684\u540C\u65F6\u4E5F\u53EF\u4F7F\u7528<code>pip</code>)</li><li><code>conda</code>\u652F\u6301\u4EFB\u4F55\u8F6F\u4EF6\u7684\u5305\u7BA1\u7406\u5668\uFF0C\u5373\u652F\u6301\u5B89\u88C5<strong>\u975E python \u7684\u5305</strong></li><li><code>conda</code>\u5B89\u88C5<strong>\u9884\u7F16\u8BD1</strong>\u7684\u5305\uFF0C\u52A0\u5FEB\u8FD0\u7B97\u901F\u5EA6</li></ul><h2 id="\u67E5\u8BE2\u5DF2\u5B89\u88C5\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5DF2\u5B89\u88C5\u7684\u5305" aria-hidden="true">#</a> \u67E5\u8BE2\u5DF2\u5B89\u88C5\u7684\u5305</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda <span class="token builtin">list</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="`+n+`" alt="show_installed_packages"></p><h2 id="\u67E5\u627E\u5305" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u5305" aria-hidden="true">#</a> \u67E5\u627E\u5305</h2><p>\u67E5\u627E\u5305\u7684<strong>\u7CBE\u786E\u540D\u79F0</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda search search_term
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD4\u56DE\u53EF\u7528\u7684\u5305\u7684\u5217\u8868\uFF08\u7248\u672C\u53F7\uFF09\uFF0C\u5E76\u5217\u51FA\u4E86\u76F8\u5E94\u7684\u5305\u540D\u79F0</p><h2 id="\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5305</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda install package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Conda \u8FD8\u4F1A\u81EA\u52A8\u5B89\u88C5<strong>\u4F9D\u8D56\u9879</strong></p><h3 id="\u5355\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u5305" aria-hidden="true">#</a> \u5355\u4E2A\u5305</h3><p>\u5982\u9700\u8981\u5B89\u88C5<code>numpy</code>\u5305</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda install numpy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53EF\u6307\u5B9A<strong>\u5B89\u88C5\u7684\u7248\u672C\u53F7</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5B89\u88C5\u7248\u672C\u53F7\u4E3A1.10\u7684 numpy \u5305</span>
conda install numpy<span class="token operator">=</span><span class="token number">1.10</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u591A\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u5305" aria-hidden="true">#</a> \u591A\u4E2A\u5305</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda install numpy scipy pandas
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u540C\u65F6\u5B89\u88C5\u6240\u6709\u8FD9\u4E9B\u5305</p><h2 id="\u5378\u8F7D\u5305" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u5305" aria-hidden="true">#</a> \u5378\u8F7D\u5305</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda remove package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u66F4\u65B0\u5305" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u5305" aria-hidden="true">#</a> \u66F4\u65B0\u5305</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda update package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u66F4\u65B0<strong>\u6240\u6709\u5305</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>conda update <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">all</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,26);function d(p,l){return r}var i=e(s,[["render",d]]);export{i as default};
