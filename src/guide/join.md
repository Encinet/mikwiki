---
title: 如何进服
icon: fas fa-hand-pointer
prev: false
next: command
---

::: details 流程
```mermaid
graph TD;
    进入Q群-->进入服务器获得验证码;
    进入服务器获得验证码-->根据服务器给出的提示在Q群发送信息;
    根据服务器给出的提示在Q群发送信息-->QQ机器人返回成功;
    根据服务器给出的提示在Q群发送信息-->QQ机器人返回失败;
    QQ机器人返回成功-->绑定成功;
    subgraph 失败类型
    已经绑定了
    错误验证码
    验证码超时
    end
    QQ机器人返回失败-->已经绑定了-->你不能再绑定账号了;
    QQ机器人返回失败-->错误验证码-->好好用眼睛看看哪里写错了;
    QQ机器人返回失败-->验证码超时-->进入服务器获得验证码;
```
:::

## 加入Q群

本服务器使用了 `一Q一号` 的绑定制度，你要进服首先就进入[QQ群](https://jq.qq.com/?_wv=1027&k=HSSe2Rxe)。

## 进入服务器

::: tip 推荐使用

启动器: [PCL2](https://afdian.net/p/0164034c016c11ebafcb52540025c377)

整合包: Fabulously Optimized (在PCL2里可以下到，优化挺好的)

:::

请使用 Minecraft Java版 `1.16.5~1.19.2` 版本进服，我们推荐使用 `1.19.1及以上` 版本进服，将会有更完整的游戏体验。

服务器地址:

::: code-tabs

@tab 主线

```IP
ddns.hentai.net.cn:19747
```

@tab 备用

```IP
mc.myf.world:19747
```

:::

然后根据屏幕上的提示，在Q群中发送指定文本，你就可以进服游玩啦