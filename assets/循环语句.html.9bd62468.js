import{c as n}from"./app.a4413a59.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u8BED\u53E5</h1><ul><li>\u53EF\u8FED\u4EE3\u5BF9\u8C61</li></ul><p>\u5FAA\u73AF\u662F\u9488\u5BF9<strong>\u53EF\u8FED\u4EE3\u5BF9\u8C61</strong>\u7684\u64CD\u4F5C\uFF0C\u53EF\u8FED\u4EE3\u5BF9\u8C61\u6307<strong>\u6BCF\u6B21\u53EF\u4EE5\u8FD4\u56DE\u5176\u4E2D\u4E00\u4E2A\u5143\u7D20</strong>\u7684\u5BF9\u8C61\uFF0C\u5305\u62EC\u5B57\u7B26\u4E32\u3001\u5217\u8868\u548C\u5143\u7EC4\u7B49<strong>\u5E8F\u5217\u7C7B\u578B</strong>\uFF0C\u5B57\u5178\u548C\u6587\u4EF6\u7B49<strong>\u975E\u5E8F\u5217\u7C7B\u578B</strong>\u3002\u53EF\u4EE5\u4F7F\u7528<a href="https://anandology.com/python-practice-book/iterators.html" target="_blank" rel="noopener noreferrer"><strong>\u8FED\u4EE3\u5668</strong>\u548C<strong>\u751F\u6210\u5668</strong></a>\u5B9A\u4E49\u53EF\u8FED\u4EE3\u5BF9\u8C61</p><ul><li>\u8FED\u4EE3\u53D8\u91CF</li></ul><p><strong>\u8FED\u4EE3\u53D8\u91CF\u547D\u540D</strong>\u6A21\u5F0F\u5EFA\u8BAE\u4F7F\u7528\u8FED\u4EE3\u53D8\u91CF\u548C\u53EF\u8FED\u4EE3\u5BF9\u8C61\u6307\u5B9A<strong>\u76F8\u540C\u7684\u540D\u79F0</strong>\uFF0C\u4F46\u662F\u5206\u522B\u4F7F\u7528<strong>\u5355\u590D\u6570\u5F62\u5F0F</strong>\uFF08\u8FED\u4EE3\u53D8\u91CF\u4F7F\u7528\u5355\u6570\uFF0C\u53EF\u8FED\u4EE3\u5BF9\u8C61\u4F7F\u7528\u590D\u6570\uFF09</p><h2 id="for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for-\u5FAA\u73AF" aria-hidden="true">#</a> for \u5FAA\u73AF</h2><p><code>for</code> \u5FAA\u73AF\u7528\u6765<strong>\u904D\u5386</strong>\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u5982\u5217\u8868\u3001\u5B57\u5178\uFF0C\u5373\u4F7F\u7528<strong>\u8FED\u4EE3\u53D8\u91CF</strong>\u4F9D\u6B21\u8BBF\u95EE\u8FED\u4EE3\u5BF9\u8C61\u4E2D\u7684\u5143\u7D20\uFF0C\u4E00\u822C\u5C06\u5176\u5E26\u5165\u5230<strong>\u7F29\u8FDB\u4EE3\u7801</strong>\u91CC\u8FDB\u884C\u5904\u7406\u3002</p><p><code>for</code> \u5FAA\u73AF\u662F\u4E00\u79CD<strong>\u6709\u9650\u8FED\u4EE3</strong>\uFF0C\u5373\u5FAA\u73AF\u4E3B\u4F53\u7684<strong>\u8FD0\u884C\u6B21\u6570\u5DF2\u63D0\u524D\u5B9A\u4E49\u597D</strong>\uFF08\u5BF9\u8FED\u4EE3\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8FD0\u884C\u4E3B\u4F53\u4E00\u6B21\uFF09\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># iterable of cities</span>
cities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;new york city&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mountain view&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;chicago&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;los angeles&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># for loop that iterates over the cities list</span>
<span class="token keyword">for</span> city <span class="token keyword">in</span> cities<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>city<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u4EE5\u5173\u952E\u5B57 <code>for</code> \u5F00\u59CB</li><li><code>iteration_variable in iterable</code>\uFF0C\u5176\u4E2D <code>iterable</code> \u8868\u793A\u88AB\u904D\u5386\u7684\u662F<strong>\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61</strong>\uFF0C<code>literation_variable</code> \u8868\u793A<strong>\u8FED\u4EE3\u53D8\u91CF</strong>\uFF08\u5373\u5F53\u524D\u6B63\u5728\u88AB\u5904\u7406\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5143\u7D20\uFF09\uFF0C\u4F7F\u7528\u5173\u952E\u5B57 <code>in</code> \u8FED\u4EE3\u53D8\u91CF\u4ECE\u53EF\u8FED\u4EE3\u5BF9\u8C61\u4E2D\u53D6\u51FA\u5143\u7D20</li><li>\u4EE5\u5192\u53F7 <code>:</code> \u7ED3\u5C3E</li></ul><h2 id="while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#while-\u5FAA\u73AF" aria-hidden="true">#</a> while \u5FAA\u73AF</h2><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p><code>while</code> \u5FAA\u73AF\u662F\u4E00\u79CD<strong>\u65E0\u9650\u8FED\u4EE3</strong>\uFF0C\u5373\u5FAA\u73AF\u91CD\u590D\u6B21\u6570\u8FD0\u884C\u524D\u672A\u77E5\uFF08\u4F46\u5E76\u4E0D\u662F\u65E0\u6CD5\u7EC8\u6B62\u5FAA\u73AF\u7684\u300C\u6B7B\u5FAA\u73AF\u300D\uFF09\uFF0C\u5E76\u5728<strong>\u6EE1\u8DB3\u67D0\u4E2A\u6761\u4EF6\u65F6\u7ED3\u675F\u5FAA\u73AF</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>card_deck <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
hand <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># adds the last element of the card_deck list to the hand list</span>
<span class="token comment"># until the values in hand add up to 17 or more</span>
<span class="token comment"># pop is the list method to remove the last element of it and get this element</span>
<span class="token keyword">while</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>hand<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">17</span><span class="token punctuation">:</span>
    hand<span class="token punctuation">.</span>append<span class="token punctuation">(</span>card_deck<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u4EE5\u5173\u952E\u5B57 <code>while</code> \u5F00\u59CB</li><li>\u540E\u9762\u662F\u4E00\u4E2A<strong>\u5E03\u5C14\u8868\u8FBE\u5F0F</strong>\u68C0\u67E5\u6761\u4EF6\uFF0C\u6839\u636E<strong>\u5E03\u5C14\u503C\u662F\u5426\u4E3A <code>true</code></strong> \u51B3\u5B9A\u662F\u5426\u8FD0\u884C\u5FAA\u73AF\u4E3B\u4F53</li><li>\u4EE5\u5192\u53F7 <code>:</code> \u7ED3\u5C3E</li><li>\u6BCF\u6B21\u8FDB\u884C\u5FAA\u73AF\u524D\u5148\u8981\u8FDB\u884C<strong>\u6761\u4EF6\u8BC4\u4F30</strong>\uFF0C\u4E3A\u4E86<strong>\u907F\u514D\u8FDB\u884C\u300C\u6B7B\u300D\u5FAA\u73AF</strong>\uFF0C\u9700\u8981\u5728<strong>\u7F29\u8FDB\u4E3B\u4F53\u4E2D\u81F3\u5C11\u4FEE\u6539\u6D4B\u8BD5\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\u7684\u4E00\u4E2A\u53D8\u91CF</strong></li></ul><h2 id="\u4E2D\u65AD\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u65AD\u8BED\u53E5" aria-hidden="true">#</a> \u4E2D\u65AD\u8BED\u53E5</h2><p>\u63A7\u5236\u4F55\u65F6\u5FAA\u73AF\u5E94\u8BE5<strong>\u7ED3\u675F</strong>\uFF0C\u6216\u8005<strong>\u8DF3\u8FC7</strong>\u67D0\u4E2A\u8FED\u4EE3\u3002\u4F7F\u7528\u5173\u952E\u5B57 <code>break</code> \u548C <code>continue</code> \u5B9E\u73B0\u3002</p><h3 id="break-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#break-\u8BED\u53E5" aria-hidden="true">#</a> break \u8BED\u53E5</h3><p><code>break</code> \u8BED\u53E5\u4F7F<strong>\u5FAA\u73AF\u7EC8\u6B62</strong>\uFF0C\u8DF3\u51FA\u6574\u4E2A\u5FAA\u73AF\uFF0C\u6267\u884C\u4E0B\u4E00\u884C\u4EE3\u7801\u3002</p><h3 id="continue-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#continue-\u8BED\u53E5" aria-hidden="true">#</a> continue \u8BED\u53E5</h3><p><code>continue</code> \u8BED\u53E5<strong>\u8DF3\u8FC7\u5F53\u524D\u5FAA\u73AF\u7684\u8FD9\u4E00\u6B21\u8FED\u4EE3</strong>\uFF0C\u4ECE\u5934\u6267\u884C<strong>\u4E0B\u4E00\u6B21</strong>\u5FAA\u73AF</p><h2 id="\u8FED\u4EE3\u5668-literator" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668-literator" aria-hidden="true">#</a> \u8FED\u4EE3\u5668 literator</h2><p>\u8FED\u4EE3\u5668\u662F\u4E00\u79CD<strong>\u8868\u793A\u6570\u636E\u6D41\u7684\u5BF9\u8C61</strong>\uFF0C\u53EF\u4F7F\u7528<strong>\u751F\u6210\u5668</strong>\u521B\u5EFA\u8FED\u4EE3\u5668\u3002</p><h3 id="\u751F\u6210\u5668-generator" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668-generator" aria-hidden="true">#</a> \u751F\u6210\u5668 generator</h3><p>\u751F\u6210\u5668\u4E00\u822C\u6307\u751F\u6210\u5668\u51FD\u6570\uFF08\u4E5F\u53EF\u6307\u51FD\u6570\u751F\u6210\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u5373\u8FED\u4EE3\u5668\uFF09\uFF0C\u5373\u4F7F\u7528<strong>\u51FD\u6570\u521B\u5EFA\u8FED\u4EE3\u5668</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_range</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u751F\u6210\u5668\u51FD\u6570\uFF0C\u751F\u6210\u4E00\u4E2A\u4ECE0\u5230 x-1 \u7684\u6570\u5B57\u6D41</span>
    i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> i
        i <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u26A0\uFE0F</p><ul><li>\u5173\u952E\u5B57 <code>yield</code>\uFF08\u800C\u975E <code>return</code>\uFF09\u4F7F\u51FD\u6570\u80FD\u591F<strong>\u6BCF\u4E00\u6B21\u8FD4\u56DE\u4E00\u4E2A\u503C</strong></li><li>\u5173\u952E\u5B57 <code>yield</code> \u4F7F\u51FD\u6570\u6BCF\u6B21\u88AB\u8C03\u7528\u65F6\u90FD\u4ECE<strong>\u505C\u4E0B\u7684\u4F4D\u7F6E\u7EE7\u7EED</strong></li><li>\u5173\u952E\u5B57 <code>yield</code> \u5C06<strong>\u751F\u6210\u5668\u51FD\u6570</strong>\u4E0E\u666E\u901A\u51FD\u6570\u533A\u5206\u5F00\u6765</li></ul><p>\u8C03\u7528\u751F\u6210\u5668\u51FD\u6570</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>my_range<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u{1F528}</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5370\u51FA\u5B58\u50A8\u8FED\u4EE3\u5668\u7684\u5185\u5B58\u5730\u5740</span>
<span class="token operator">&lt;</span>generator object my_range at 0x111a2d93<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u51FA\u6570\u636E\u6D41\u7684\u503C\u4F7F\u7528<code>for</code>\u5FAA\u73AF</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> n <span class="token keyword">in</span> my_range<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u{1F528}</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4" aria-hidden="true">#</a> \u5BF9\u6BD4</h3><ul><li><strong>\u53EF\u8FED\u4EE3\u5BF9\u8C61</strong>\uFF08\u5982\u5217\u8868\uFF09\uFF0C\u662F\u53EF\u8FED\u4EE3\uFF08\u6BCF\u6B21\u53D6\u51FA\u4E00\u4E2A\u5143\u7D20\uFF09\u4F46<strong>\u4E0D\u662F\u6570\u636E\u6D41</strong></li><li>\u8FED\u4EE3\u5668\u5219\u662F\u4E00\u4E2A<strong>\u6570\u636E\u6D41\u5BF9\u8C61</strong></li></ul><h3 id="\u751F\u6210\u5668\u7684\u6709\u70B9" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668\u7684\u6709\u70B9" aria-hidden="true">#</a> \u751F\u6210\u5668\u7684\u6709\u70B9</h3><blockquote><p>\u751F\u6210\u5668\u662F\u6784\u5EFA\u8FED\u4EE3\u5668\u7684 \u201C\u61D2\u60F0\u201D \u65B9\u5F0F\u3002\u5F53\u5185\u5B58\u4E0D\u591F\u5B58\u50A8\u5B8C\u6574\u5B9E\u73B0\u7684\u5217\u8868\u65F6\uFF0C\u6216\u8005\u8BA1\u7B97\u6BCF\u4E2A\u5217\u8868\u5143\u7D20\u7684\u4EE3\u4EF7\u5F88\u9AD8\uFF0C\u4F60\u5E0C\u671B\u5C3D\u91CF\u63A8\u8FDF\u8BA1\u7B97\u65F6\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u751F\u6210\u5668\u3002\u4F46\u662F\u8FD9\u4E9B\u5143\u7D20\u53EA\u80FD\u904D\u5386\u4E00\u6B21\u3002</p></blockquote><p>\u6458\u81EA https://softwareengineering.stackexchange.com/questions/290231/when-should-i-use-a-generator-and-when-a-list-in-python/290235</p><blockquote><p>\u7531\u4E8E\u4F7F\u7528\u751F\u6210\u5668\u662F\u4E00\u6B21\u5904\u7406\u4E00\u4E2A\u6570\u636E\uFF0C\u5728\u5185\u5B58\u548C\u5B58\u50A8\u7684\u9700\u6C42\u4E0A\u4F1A\u6BD4\u4F7F\u7528list\u65B9\u5F0F\u76F4\u63A5\u5168\u90E8\u751F\u6210\u518D\u5B58\u50A8\u8282\u7701\u5F88\u591A\u8D44\u6E90\u3002</p></blockquote><p>\u6458\u81EA https://softwareengineering.stackexchange.com/questions/273551/should-i-prefer-python-generators-to-lists</p>`,43);function t(o,p){return e}var l=s(a,[["render",t]]);export{l as default};
