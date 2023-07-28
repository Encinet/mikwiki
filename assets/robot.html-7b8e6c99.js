import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as d}from"./app-c9ba9c1c.js";const t={},s=d(`<div class="hint-container warning"><p class="hint-container-title">此项失效</p><p>机器人暂时关闭</p></div><h2 id="互通" tabindex="-1"><a class="header-anchor" href="#互通" aria-hidden="true">#</a> 互通</h2><p>服务器或QQ群内，消息前加上 <code>#</code> 即可发送到对面</p><div class="hint-container tip"><p class="hint-container-title">@额外功能</p><p>在服务器里发送到QQ群里的消息可以@在线玩家</p><blockquote><p>例:</p><p>在服务器里发送 <code>#ObcbO 你好啊</code> 或 <code>#@ObcbO 你好啊</code></p><p>发到QQ群里的消息会自动@指定人的QQ</p></blockquote></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>目前可用指令前缀 [<code>!</code>, <code>！</code>, <code>.</code>]</p><p>可用命令列表(非实时更新, 详情请去QQ群) <code> 也可在QQ群可用发送 .help 来获得</code></p><div class="hint-container info"><p class="hint-container-title">规则</p><p><code>&lt;&gt;</code> 为<strong>可选</strong>参数</p><p><code>[]</code> 为<strong>必选</strong>参数</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>banlist,封禁列表 - 列出封禁玩家
bind,绑定 验证码 - 绑定账号
channel,频道 - 获取频道邀请
coin,抛硬币 &lt;正/反&gt; &lt;赌注&gt; - 对了得错了扣
help,帮助 - 查看帮助
info,状态 - 查看服务器信息
list,在线 - 列出在线玩家
ot,在线排行榜 [页码] - 列出在线排行榜
py,支付 &lt;玩家名/QQ&gt; &lt;米币&gt; - 支付米币给指定人
sign,签到 [口令] - 签到
whois,查 &lt;玩家名/QQ&gt; - 查询信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">示例</p><p>比如要支付给 <code>Aeolic</code> 100米币<br> 首先找到命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>py,支付 &lt;玩家名/QQ&gt; &lt;米币&gt; - 支付米币给指定人
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后随便从其中选择一个前缀</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[!, ！, .]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以说以下几种都是可以的</p><p><code>2704804982</code> 是Aeolic绑定的QQ</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!py Aeolic 100
！py Aeolic 100
.py Aeolic 100
!py 2704804982 100
！py 2704804982 100
.py 2704804982 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,10),a=[s];function c(l,o){return i(),n("div",null,a)}const p=e(t,[["render",c],["__file","robot.html.vue"]]);export{p as default};
