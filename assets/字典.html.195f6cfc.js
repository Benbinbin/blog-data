import{r as o,a as c,b as n,d as e,w as p,F as l,e as s,c as a,o as u}from"./app.a4413a59.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=n("h1",{id:"\u5B57\u5178",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B57\u5178","aria-hidden":"true"},"#"),s(" \u5B57\u5178")],-1),d=n("h2",{id:"\u5B57\u5178\u5B9A\u4E49",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B57\u5178\u5B9A\u4E49","aria-hidden":"true"},"#"),s(" \u5B57\u5178\u5B9A\u4E49")],-1),g=a("<li>\u4F7F\u7528 <strong>\u82B1\u62EC\u53F7 <code>{}</code></strong> \u521B\u5EFA\u5B57\u5178</li><li>\u96C6\u5408\u662F\u5B58\u50A8<strong>\u552F\u4E00</strong>\u952E <code>key</code> \u5230\u503C <code>value</code> \u7684\u6620\u5C04\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u662F<strong>\u53EF\u53D8\u65E0\u5E8F</strong>\u7684\u6570\u636E\u7C7B\u578B</li>",2),h=n("strong",null,"\u952E",-1),b=s("\u7684\u7C7B\u578B\u4E3A\u4EFB\u4F55 "),m=s("\u4E0D\u53EF\u53D8\u7C7B\u578B"),_=s("\uFF0C\u53EF\u4EE5\u662F"),y=n("strong",null,"\u5B57\u7B26\u4E32",-1),q=s("\u3001"),v=n("strong",null,"\u6574\u6570",-1),f=s("\u6216"),w=n("strong",null,"\u5143\u7EC4",-1),x=s("\u7B49"),B=n("li",null,[s("\u952E\u4E0E\u503C\u4F7F\u7528\u5192\u53F7 "),n("code",null,":"),s(" \u5206\u9694\uFF0C\u6BCF\u4E00\u5BF9\u5143\u7D20\u4F7F\u7528\u9017\u53F7 "),n("code",null,","),s(" \u5206\u9694")],-1),E=n("li",null,"\u503C\u53EF\u4EE5\u4F7F\u7528\u5D4C\u5957\uFF0C\u6784\u5EFA\u51FA\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784",-1),N=a(`<h2 id="\u5B57\u5178\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B57\u5178\u5C5E\u6027" aria-hidden="true">#</a> \u5B57\u5178\u5C5E\u6027</h2><h3 id="\u8FD4\u56DE\u952E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u952E" aria-hidden="true">#</a> \u8FD4\u56DE\u952E</h3><p>\u65B9\u6CD5 <code>keys()</code> \u8FD4\u56DE\u5B57\u5178\u7684\u952E</p><h2 id="\u4F7F\u7528\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B57\u5178" aria-hidden="true">#</a> \u4F7F\u7528\u5B57\u5178</h2><h3 id="\u67E5\u8BE2\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5143\u7D20" aria-hidden="true">#</a> \u67E5\u8BE2\u5143\u7D20</h3><ul><li>\u4F7F\u7528 \u65B9\u62EC\u53F7 <code>[]</code> \u67E5\u8BE2\u5B57\u5178\u4E2D\u8BE5\u952E\u5BF9\u5E94\u7684\u503C\uFF0C\u5F62\u5F0F\u4E3A <code>dic_name[&quot;key_name&quot;]</code></li><li><code>in</code> \u8FD0\u7B97\u7B26\u68C0\u67E5<strong>\u7279\u5B9A\u952E</strong>\u662F\u5426\u5728\u5B57\u5178\u4E2D\uFF0C\u7C7B\u4F3C\u7684\u8FD8\u6709 <code>not in</code> \u8FD0\u7B97\u7B26</li><li><code>get</code> \u65B9\u6CD5\u67E5\u627E\u5B57\u5178\u4E2D\u662F\u5426\u6709<strong>\u7279\u5B9A\u952E</strong>\uFF0C\u5F53<strong>\u4E0D\u5B58\u5728</strong>\u65F6\uFF0C\u8FD4\u56DE <code>None</code>\uFF08\u6216\u7528\u6237\u8BBE\u7F6E\u7684<strong>\u9ED8\u8BA4\u503C</strong>\uFF09\uFF1B\u5B58\u5728\u65F6\u8FD4\u56DE<strong>\u7279\u5B9A\u503C</strong></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>elements <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hydrogen&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;helium&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;carbon&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">}</span>
<span class="token comment"># \u8BBE\u5B9A\u5F53 get \u65B9\u6CD5\u65E0\u6CD5\u67E5\u627E\u5230\u7279\u5B9A\u952E\u65F6\uFF0C\u8FD4\u56DE\u7684\u63D0\u793A\u8BED\uFF0C\u4F7F\u7528\u6237\u66F4\u5BB9\u6613\u7406\u89E3</span>
result <span class="token operator">=</span> elements<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;kryptonite&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;There\\&#39;s no such element!&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u{1F528}</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;There&#39;s no such element!&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u904D\u5386\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u5143\u7D20" aria-hidden="true">#</a> \u904D\u5386\u5143\u7D20</h3><p>\u7C7B\u4F3C\u4E8E\u5217\u8868\uFF0C\u5B57\u5178\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>for</code> \u5FAA\u73AF\u904D\u5386\u5176\u5143\u7D20</p><ul><li>\u9ED8\u8BA4\u662F\u5BF9\u4E8E\u5B57\u5178\u91CC\u7684<strong>\u952E</strong>\u8FDB\u884C\u904D\u5386\uFF0C\u76F8\u5F53\u4E8E\u904D\u5386 <code>dic.keys()</code></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> key <span class="token keyword">in</span> dic<span class="token punctuation">:</span>
    code<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">for</span> key <span class="token keyword">in</span> dic<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    code<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u904D\u5386 <code>dic.values()</code> \u8FD4\u56DE\u5B57\u5178\u7684\u503C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> value <span class="token keyword">in</span> dic<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    code<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),V=s("\u904D\u5386 "),H=n("code",null,"dic.items()",-1),T=s(" \u4EE5"),j=n("strong",null,"\u5143\u7EC4",-1),A=s("\u7684\u5F62\u5F0F\u8FD4\u56DE\u5B57\u5178\u7684\u5B8C\u6574\u6761\u76EE\uFF0C\u53EF\u4EE5\u5C06\u6574\u4E2A\u6761\u76EE\u8D4B\u503C\u7ED9\u5FAA\u73AF\u53D8\u91CF\uFF1B\u4E5F\u53EF\u4EE5\u5C06"),C=s("\u5143\u7EC4\u89E3\u5305"),F=s("\uFF0C\u5373\u952E\u548C\u503C\u5206\u522B\u8D4B\u503C\u7ED9\u5404\u81EA\u7684\u53D8\u91CF\u3002"),L=a(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> favorites <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;purple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&#39;animal&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;turtle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;language&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> entry <span class="token keyword">in</span> dic<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
<span class="token comment"># \u8F93\u51FA\u952E\u503C\u5BF9\u7684\u5143\u7EC4\u5F62\u5F0F\u8F93\u51FA\u6BCF\u4E2A\u6761\u76EE\uFF0C\u5176\u4E2D\u5E76\u4EE5\u9017\u53F7\u5206\u9694</span>
<span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;purple&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&#39;animal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;turtle&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token string">&#39;language&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> favorites<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u63D2\u5165\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u5143\u7D20" aria-hidden="true">#</a> \u63D2\u5165\u5143\u7D20</h3><p>\u4F7F\u7528<strong>\u65B9\u62EC\u53F7 <code>[]</code></strong> \u5F62\u5F0F\u4E3A <code>dic_name[&quot;new_key&quot;] = new_value</code> \u5411\u5B57\u5178\u63D2\u5165\u65B0\u7684\u5143\u7D20</p><ul><li>\u7531\u4E8E\u5B57\u5178\u662F<strong>\u65E0\u5E8F</strong>\u7684\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F7F\u7528\u65B9\u6CD5 <code>append()</code></li></ul><h3 id="\u4FEE\u6539\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5143\u7D20" aria-hidden="true">#</a> \u4FEE\u6539\u5143\u7D20</h3><p>\u901A\u8FC7\u8D4B\u503C\u7B26\u53F7\uFF0C\u5C06\u503C\u8D4B\u4E88\u5DF2\u6709\u7684\u952E\u6807\u8BB0\u7684\u5B57\u5178\uFF0C\u5982 <code>dic[&quot;key_name&quot;] = new_value</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5728\u539F\u6709\u5B57\u7B26\u4E32\u540E\u589E\u6DFB</span>
d<span class="token punctuation">[</span><span class="token string">&quot;squid&quot;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token string">&quot; that eats fish, crabs, and wayward elephants.&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5220\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a> \u5220\u9664\u5143\u7D20</h3><p>\u4F7F\u7528\u8BED\u53E5 <code>del dic[&#39;key_name]</code> \u5220\u9664\u5B57\u5178\u4E2D\u7684\u5143\u7D20</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;fish&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;salmon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cat&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lion&#39;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">del</span> d<span class="token punctuation">[</span><span class="token string">&#39;fish&#39;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;lion&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u590D\u5408\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u6570\u636E" aria-hidden="true">#</a> \u590D\u5408\u6570\u636E</h3><p>\u4F7F\u7528<strong>\u5D4C\u5957</strong>\u5F62\u5F0F \uFF0C\u4EE5<strong>\u5B57\u5178</strong>\u4F5C\u4E3A\u503C value \u5219\u53EF\u4EE5\u589E\u52A0\u5B58\u50A8\u5185\u5BB9\u7684\u590D\u6742\u5EA6</p><p>\u7D22\u5F15\u590D\u5408\u6570\u636E\u53EF\u4EE5\u901A\u8FC7\u7C7B\u4F3C\u7684\u67E5\u8BE2\u65B9\u5F0F</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>elements <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hydrogen&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;number&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                         <span class="token string">&quot;weight&quot;</span><span class="token punctuation">:</span> <span class="token number">1.00794</span><span class="token punctuation">,</span>
                         <span class="token string">&quot;symbol&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;H&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token string">&quot;helium&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;number&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                         <span class="token string">&quot;weight&quot;</span><span class="token punctuation">:</span> <span class="token number">4.002602</span><span class="token punctuation">,</span>
                         <span class="token string">&quot;symbol&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;He&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

helium <span class="token operator">=</span> elements<span class="token punctuation">[</span><span class="token string">&quot;helium&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># get the helium dictionary</span>
hydrogen_weight <span class="token operator">=</span> elements<span class="token punctuation">[</span><span class="token string">&quot;hydrogen&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;weight&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># get hydrogen&#39;s weight</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>helium<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hydrogen<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u{1F528}</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">&quot;number&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>, <span class="token string">&quot;weight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4.002602</span>, <span class="token string">&quot;symbol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;He&quot;</span><span class="token punctuation">}</span>
<span class="token number">4.002602</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,16);function R(S,z){const t=o("RouterLink");return u(),c(l,null,[k,d,n("ul",null,[g,n("li",null,[h,b,n("strong",null,[e(t,{to:"/python/%E5%88%97%E8%A1%A8.html"},{default:p(()=>[m]),_:1})]),_,y,q,v,f,w,x]),B,E]),N,n("ul",null,[n("li",null,[V,H,T,j,A,e(t,{to:"/python/%E5%85%83%E7%BB%84.html"},{default:p(()=>[C]),_:1}),F])]),L],64)}var I=i(r,[["render",R]]);export{I as default};
