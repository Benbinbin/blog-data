import{r as p,a as t,b as s,d as e,w as o,F as c,e as n,c as u,o as l}from"./app.a4413a59.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=s("h1",{id:"\u5BFC\u5165\u672C\u5730\u811A\u672C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5BFC\u5165\u672C\u5730\u811A\u672C","aria-hidden":"true"},"#"),n(" \u5BFC\u5165\u672C\u5730\u811A\u672C")],-1),m=n("\u811A\u672C\u662F\u4E00\u6BB5\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u529F\u80FD\u7684\u4EE3\u7801\u5757\uFF0C\u901A\u8FC7\u5C01\u88C5\u4EE3\u7801\u65B9\u4FBF\u8C03\u7528\uFF0C\u4EE5\u89E3\u51B3\u4E00\u7C7B\u95EE\u9898\u3002\u4E00\u822C\u8FD9\u7C7B\u811A\u672C\u4E5F\u79F0\u4E3A"),d=s("strong",null,"\u6A21\u5757",-1),_=n("\uFF0C\u5982 Python \u5185\u7F6E\u7684\u6807\u51C6\u5E93\u6A21\u5757\u3002\u6A21\u5757\u7684\u5BFC\u5165\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53EF\u53C2\u89C1 "),b=n("\u5BFC\u5165\u6A21\u5757"),g=n("\u3002"),f=u(`<p>\u4E00\u822C\u662F\u5BFC\u5165\u7684\u811A\u672C\u4E0E\u5F53\u524D\u811A\u672C\u4F4D\u4E8E<strong>\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B</strong>\uFF0C\u5728\u5173\u952E\u5B57 <code>import</code> \u540E\u53EA\u9700\u586B\u5165<strong>\u6587\u4EF6\u540D</strong>\uFF0C\u65E0\u9700\u6269\u5C55\u540D <code>.py</code></p><p><strong>\u811A\u672C</strong>\uFF1A\u5C06\u4EE3\u7801\u6574\u7406\u6210\u540E\u7F00\u4E3A <code>.py</code> \u7684\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7\u5BFC\u5165<strong>\u91CD\u590D\u5229\u7528\u8FD9\u4E9B\u7684\u4EE3\u7801</strong>\u4EE5\u63D0\u9AD8\u6548\u7387</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> useful_functions <span class="token keyword">as</span> uf
<span class="token comment"># \u8BBF\u95EE\u5BFC\u5165\u6A21\u5757\u7684\u5BF9\u8C61</span>
uf<span class="token punctuation">.</span>add_five<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>import</code> \u8BED\u53E5\u5199\u5728\u4EE3\u7801\u5757<strong>\u6700\u9876\u90E8</strong>\uFF0C\u6BCF\u4E2A\u5BFC\u5165\u8BED\u53E5<strong>\u5404\u5360\u4E00\u884C</strong>\u3002<code>import</code> \u8BED\u53E5\u4F1A<strong>\u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u5BF9\u8C61</strong>\uFF0C\u5305\u542B\u5B9A\u4E49\u548C\u8BED\u53E5\u7684 Python \u6587\u4EF6\u3002</li><li>\u53EF\u901A\u8FC7\u5173\u952E\u5B57 <code>as</code> \u4E3A<strong>\u5BFC\u5165\u6A21\u5757\u6DFB\u52A0\u522B\u540D</strong>\uFF0C\u540E\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u7528\u522B\u540D\u5F15\u7528\u5B83\u3002</li><li>\u8981\u8BBF\u95EE\u5BFC\u5165<strong>\u6A21\u5757\u4E2D\u7684\u5BF9\u8C61</strong>\uFF0C\u9700\u8981\u4F7F\u7528<strong>\u70B9\u8BB0\u6CD5</strong>\u3002</li></ul><h2 id="if-main\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#if-main\u8BED\u53E5" aria-hidden="true">#</a> if main\u8BED\u53E5</h2><p><strong><code>if __name__ == &#39;__main__&#39;</code> \u8BED\u53E5</strong>\u53EF\u4EE5\u63A7\u5236\u811A\u672C\u533A\u5206\u5BFC\u5165\u548C\u8FD0\u884C\u7684\u60C5\u51B5\uFF0C\u4F9D\u636E\u6240\u9700\u6267\u884C\u811A\u672C\u4E2D\u7684\u4EE3\u7801\u3002</p><p>\u8BE5\u8BED\u53E5\u4F7F\u7528\u4E86\u4E00\u4E2A\u7279\u6B8A\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u540D\u79F0\u4EE5<strong>\u4E24\u4E2A\u4E0B\u5212\u7EBF\u5B57\u7B26 <code>__</code> \u5F00\u5934\u548C\u7ED3\u5C3E</strong>\uFF0C\u4E00\u822C\u79F0\u8FD9\u79CD\u53D8\u91CF\u4E3A <strong>Dunder \u53D8\u91CF</strong> \u8868\u793A\u53CC\u4E0B\u5212\u7EBF</p><p>\u5F53\u811A\u672C\u4E2D\u4E2D<strong>\u542B\u6709\u53EF\u6267\u884C</strong>\u7684\u8BED\u53E5\u65F6\uFF0C\uFF08\u5B9E\u9645\u4E0A\u5F53\u811A\u672C\u5BFC\u5165\u5230 Python \u65F6\uFF0C\u8BE5\u811A\u672C\u9ED8\u8BA4\u6267\u884C\uFF0C\u800C\u5BFC\u5165\u811A\u672C\u662F\u4E3A\u4E86\u53EF\u4EE5\u5728\u540E\u9762\u7684\u4EE3\u7801\u4E2D\u5F15\u7528\u811A\u672C\u4E2D\u7684\u51FD\u6570\uFF09\u4E3A\u4E86\u907F\u514D\u5BFC\u5165\u65F6\u4E5F\u8FD0\u884C\u811A\u672C\u4E2D\u7684\u4E00\u4E9B\u53EF\u6267\u884C\u8BED\u53E5\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>if main</code> \u5757\u5C06\u8FD9\u4E9B\u53EF\u6267\u884C\u7684\u8BED\u53E5\uFF08\u7F29\u8FDB\uFF09\u5C01\u88C5\u5728 <code>if __name__ == &quot;__main__&quot;</code> \u5757\u4E2D\uFF08\u6216\u5C06\u4EE3\u7801<strong>\u5305\u542B\u5728\u51FD\u6570 <code>main()</code> \u4E2D</strong>\u518D\u5C01\u88C5\u5728 <code>if __name__ == &quot;__main__&quot;</code> \u5757\u4E2D)</p><p><strong>\u811A\u672C <code>useful_functions.py</code></strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5B9A\u4E49\u4E86\u4E24\u4E2A\u51FD\u6570</span>
<span class="token keyword">def</span> <span class="token function">mean</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">add_five</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">5</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> num_list<span class="token punctuation">]</span>

<span class="token comment"># \u5C06\u7528\u4E8E\u6D4B\u8BD5\u7684\u53EF\u6267\u884C\u8BED\u53E5\u653E\u5728 main() \u51FD\u6570\u4E2D</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Testing mean function&quot;</span><span class="token punctuation">)</span>
    n_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>
    correct_mean <span class="token operator">=</span> <span class="token number">30.5</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>mean<span class="token punctuation">(</span>n_list<span class="token punctuation">)</span> <span class="token operator">==</span> correct_mean<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Testing add_five function&quot;</span><span class="token punctuation">)</span>
    correct_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>add_five<span class="token punctuation">(</span>n_list<span class="token punctuation">)</span> <span class="token operator">==</span> correct_list<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;All tests passed!&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 if main \u5757\u63A7\u5236\u4E3B\u7A0B\u5E8F\u4E2D\u7684\u53EF\u6267\u884C\u8BED\u53E5\u7684\u8FD0\u884C</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><strong>\u7A0B\u5E8F <code>demo.py</code></strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5BFC\u5165 useful_functions \u811A\u672C</span>
<span class="token keyword">import</span> useful_functions <span class="token keyword">as</span> uf

scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span>
mean <span class="token operator">=</span> uf<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>scores<span class="token punctuation">)</span>
curved <span class="token operator">=</span> uf<span class="token punctuation">.</span>add_five<span class="token punctuation">(</span>scores<span class="token punctuation">)</span>
mean_c <span class="token operator">=</span> uf<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>curved<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Scores:&quot;</span><span class="token punctuation">,</span> scores<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Original Mean:&quot;</span><span class="token punctuation">,</span> mean<span class="token punctuation">,</span> <span class="token string">&quot; New Mean:&quot;</span><span class="token punctuation">,</span> mean_c<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>uf<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>if main</code> \u5757\u53EF\u4EE5\u63A7\u5236\u811A\u672C\u4EE3\u7801\u4E2D\u53EF\u6267\u884C\u8BED\u53E5\u7684<strong>\u8FD0\u884C\u60C5\u51B5</strong></p><ul><li>\u6BCF\u5F53\u4F7F\u7528\u811A\u672C\u65F6\uFF0CPython \u4F1A\u4E3A\u6240\u6709\u6A21\u5757\u8BBE\u7F6E\u4E00\u4E2A<strong>\u7279\u6B8A\u7684\u5185\u7F6E\u53D8\u91CF <code>__name__</code></strong></li><li>\u5F53<strong>\u8FD0\u884C\u811A\u672C</strong>\u65F6\uFF08\u5982\u5728\u4EA4\u4E92\u6A21\u5F0F\u4E0B\u8F93\u5165 <code>&gt;&gt;&gt; python useful_functions.py</code>\uFF09\uFF0CPython \u4F1A\u5C06\u6B64\u6A21\u5757<strong>\u8BC6\u522B\u4E3A\u4E3B\u7A0B\u5E8F</strong>\uFF0C\u5E76\u5C06\u6B64\u6A21\u5757\u7684 <strong><code>__name__</code> \u8BBE\u4E3A\u5B57\u7B26\u4E32 <code>&quot;__main__&quot;</code></strong>\uFF0C\u5219\u6B64\u65F6 if \u8BED\u53E5\u4E3A <code>True</code> \u800C\u8FD0\u884C\u8BE5\u4EE3\u7801\u5757\u4E2D\u7684\u53EF\u6267\u884C\u8BED\u53E5</li><li>\u5F53<strong>\u5BFC\u5165\u811A\u672C</strong>\u65F6\uFF08\u5982\u4EE5\u5BFC\u5165\u6A21\u5757\u7684\u65B9\u5F0F\u4F7F\u7528 <code>import useful_functions</code>\uFF09\uFF0CPython \u4F1A\u5C06\u6B64\u8FD9\u4E2ADunder\u53D8\u91CF <strong><code>__name__</code> \u8BBE\u4E3A\u8BE5\u6A21\u5757\u540D\u79F0</strong>\uFF08\u800C\u975E <code>&quot;__main__&quot;</code>)\uFF0C\u7531\u4E8E if \u8BED\u53E5\u4E3A <code>False</code> \u4E0D\u8FD0\u884C\u8BE5\u4EE3\u7801\u5757\u4E2D\u7684\u53EF\u6267\u884C\u8BED\u53E5</li><li>\u901A\u8FC7\u6761\u4EF6\u8BED\u53E5 <code>if __name__ == &quot;__main__&quot;</code> \u4F1A\u68C0\u67E5\u8BE5\u6A21\u5757\u662F\u5426\u4E3A\u4E3B\u7A0B\u5E8F\uFF0C\u4EE5\u5224\u65AD\u662F\u5426\u8FD0\u884C\u4EE3\u7801\u4E2D\u7684\u53EF\u6267\u884C\u8BED\u53E5\u3002</li></ul>`,14);function y(h,w){const a=p("RouterLink");return l(),t(c,null,[k,s("p",null,[m,d,_,e(a,{to:"/python/%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97.html"},{default:o(()=>[b]),_:1}),g]),f],64)}var x=r(i,[["render",y]]);export{x as default};
