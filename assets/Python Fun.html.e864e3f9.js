import{c as n}from"./app.a4413a59.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<p>Python Fun</p><h2 id="\u6709\u8DA3\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6709\u8DA3\u7684\u6A21\u5757" aria-hidden="true">#</a> \u6709\u8DA3\u7684\u6A21\u5757</h2><h3 id="turtle" tabindex="-1"><a class="header-anchor" href="#turtle" aria-hidden="true">#</a> turtle</h3><p><code>turtle</code> \u5E93\u662F Python 2.6 \u7248\u672C\u540E\u5F15\u5165\u7684\u4E00\u4E2A\u7B80\u5355\u7684\u7ED8\u56FE\u5DE5\u5177\uFF0C\u4F7F\u7528<a href="https://docs.python.org/zh-cn/3.7/library/turtle.html" target="_blank" rel="noopener noreferrer">\u6D77\u9F9F\u7ED8\u56FE</a>\u53EF\u4EE5\u5B9E\u73B0\u4EE3\u7801\u7684\u6709\u8DA3\u53EF\u89C6\u5316\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> turtle

<span class="token comment"># \u521B\u5EFA\u6D77\u5F52</span>
t <span class="token operator">=</span> turtle<span class="token punctuation">.</span>Turtle<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u5411\u524D\u79FB\u52A8</span>
t<span class="token punctuation">.</span>forward<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment"># \u53F3\u8F6C 90\xB0</span>
t<span class="token punctuation">.</span>right<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="unicodedata" tabindex="-1"><a class="header-anchor" href="#unicodedata" aria-hidden="true">#</a> unicodedata</h3><p><code>unicodedata</code> \u6A21\u5757\u53EF\u4EE5\u6839\u636E\u540D\u79F0\u67E5\u8BE2\u5B57\u7B26\uFF0C\u5305\u62EC<strong>\u8868\u60C5\u7B26\u53F7</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> unicodedata
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> unicodedata<span class="token punctuation">.</span>lookup<span class="token punctuation">(</span><span class="token string">&quot;snake&quot;</span><span class="token punctuation">)</span>
<span class="token string">&#39;\u{1F40D}&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> unicodedata<span class="token punctuation">.</span>lookup<span class="token punctuation">(</span><span class="token string">&quot;airplane&quot;</span><span class="token punctuation">)</span>
<span class="token string">&#39;\u2708&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8868\u60C5\u7B26\u53F7\u5728<strong>\u5C4F\u5E55</strong>\u4E0A\u7684\u5360\u636E\u7A7A\u95F4\u901A\u5E38\u6BD4\u5B57\u6BCD\u6216\u6570\u5B57\u66F4\u5BBD\uFF1B\u5728\u7B49\u5BBD\u5B57\u4F53\u4E2D\uFF0C\u5B83\u4EEC\u901A\u5E38\u5360\u636E\u4E24\u4E2A\u5B57\u7B26\u3002\u5E76\u4E14\u5360\u636E\u66F4\u591A\u8BA1\u7B97\u673A\u5185\u5B58\u3002<strong>\u4F46\u662F Python \u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u4EC5\u53D6\u51B3\u4E8E\u5176\u4E2D\u7684\u5B57\u7B26\u6570\u91CF\uFF0C\u800C\u4E0D\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u5B57\u7B26</strong>\u3002</p>`,9);function t(p,o){return e}var l=a(s,[["render",t]]);export{l as default};
