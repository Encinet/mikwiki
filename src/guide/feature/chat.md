---
title: 聊天
prev: skin
next: lock
---

## 前缀后缀

> 设置入口在[菜单](../command/#mik)的玩家头里

记得用`&`来替换`§`

**支持格式化代码和HEX**

::: tip 有用的链接
格式化代码 https://wiki.biligame.com/mc/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81
:::

::: info 例子
HEX使用例子: &#FFAA00 (这个相当于&6)

比如ObcbO的前缀是`&#FF0000R&#00FF00G&#0000FFB`
:::

## @功能

> 示例: @ObcbO你好啊

- 格式: @玩家ID

可以和其它消息无空格间隔

## 展示

### 手上物品

|%i%|%i|%item%|%item|[i]|[item]|
|---|---|---|---|---|---|

聊天中的以上文本，均会被替换为**主手上**的物品

### 背包

|[inv]|[inventory]|
|---|---|

聊天中的以上文本，均会被替换为自己的背包

### 末影箱

|[ender]|[enderchest]|
|---|---|

聊天中的以上文本，均会被替换为自己的末影箱

## 颜色

> 可以在聊天中使用

### 普通颜色

> 格式: & + (0-9 or a-f)
>
> 示例: &atext

::: tip 有用的链接
格式化代码 https://wiki.biligame.com/mc/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81
:::

|代码|名称|英文名|
|---|---|---|
|&0|黑色|black|
|&1|深蓝色|dark_blue|
|&2|深绿色|dark_green|
|&3|湖蓝色|dark_aqua|
|&4|深红色|dark_red|
|&5|紫色|dark_purple|
|&6|金色|gold|
|&7|灰色|gray|
|&8|深灰色|dark_gray|
|&9|蓝色|blue|
|&a|绿色|green|
|&b|天蓝色|aqua|
|&c|红色|red|
|&d|粉红色|light_purple|
|&e|黄色|yellow|
|&f|白色|white|

|代码|格式效果|
|---|---|
|§k|随机字符|
|§l|粗体|
|§m|删除线|
|§n|下划线|
|§o|斜体|
|§r|重置文字样式|

### HEX

> 格式: & + HEX
>
> 示例: &#FFAA00 (这个相当于&6)

### 渐变色

> 格式: `<g(or 'gradient')#<speed(ignorable)>:<hex range>>test<loop(or 'l')>`
>
> 示例: `<g#2:#ffffff:#bbbbbb:#cccccc:#777777>text<l> and <g:#ffffff:#bbbbbb>text`

### 彩虹色

> 格式: `<r(or 'rainbow')#<speed(ignorable)>:<saturation(ignorable)>:<brightness(ignorable)>>test<loop(or 'l')>`
>
> 示例: `<r:0.4>text`
