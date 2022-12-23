---
title: 机器人
icon: fas fa-robot
prev: command
next: ./feature/skin
---

## 互通

服务器或QQ群内，消息前加上 `#` 即可发送到对面

::: tip @额外功能
在服务器里发送到QQ群里的消息可以@在线玩家

> 例:
>
> 在服务器里发送 `#ObcbO 你好啊` 或 `#@ObcbO 你好啊`
>
> 发到QQ群里的消息会自动@指定人的QQ
:::

## 命令

目前可用指令前缀 [`!`, `！`, `.`]

可用命令列表(非实时更新, 详情请去QQ群) ` 也可在QQ群可用发送 .help 来获得`

::: info 规则

`<>` 为**可选**参数

`[]` 为**必选**参数

:::

```
banlist,封禁列表 - 列出封禁玩家
bind,绑定 验证码 - 绑定账号
channel,频道 - 获取频道邀请
coin,抛硬币 <正/反> <赌注> - 对了得错了扣
help,帮助 - 查看帮助
info,状态 - 查看服务器信息
list,在线 - 列出在线玩家
ot,在线排行榜 [页码] - 列出在线排行榜
py,支付 <玩家名/QQ> <米币> - 支付米币给指定人
sign,签到 [口令] - 签到
whois,查 <玩家名/QQ> - 查询信息
```

::: tip 示例
比如我要支付给 `Aeolic` 100米币
首先找到命令

```
py,支付 <玩家名/QQ> <米币> - 支付米币给指定人
```

然后随便从其中选择一个前缀
```
[!, ！, .]
```

所以说以下几种都是可以的
`2704804982` 是Aeolic绑定的QQ
```
!py Aeolic 100
！py Aeolic 100
.py Aeolic 100
!py 2704804982 100
！py 2704804982 100
.py 2704804982 100
```
:::