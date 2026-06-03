---
title: GenC似乎又落入绝赞的电赛中了>.<
date: 2026-06-03
lastMod: 2026-06-03T18:26:20.758Z
summary: 实时记录电赛的过程
category: 比赛
tags: [competition, electricity, nuedc]
---

## TI杯全国大学生电子设计竞赛

由TI赞助的含金量非常高的比赛，时长四天三晚，考察的往往是赛前的准备

> 奇数年有国赛，偶数年只有省赛

## LHZ队伍

### 队伍成员：

- 视觉(队长) `electr1c`
- 硬件 `瓜ash`
- 软件 `genc`

## 赛前准备

### 硬件准备

常用模块准备好，比赛时只做组合，修改协议和调参

### 软件准备

- **创建github仓库**
- 配置开发环境
- Agent
- 逐飞库+修改库函数
- 准备底层软件
- 了解觉所M0芯片的方法

#### 必备知识Github团队协作工作流

![图片描述](/nuedc/GIT工作流.jpg '基础GIT工作流')

上传前记得**pull+merge**,这样上传代码可以避免与队友的代码冲突

[github工作流](https://www.bilibili.com/video/BV19e4y1q7JJ/?spm_id_from=333.337.search-card.all.click&vd_source=0c6556f00d4c6d1a537b6b57612d11a6)

#### 底层软件

外设驱动：PWM ADC 定时器 中断 编码器读取

通信协议(_掌握初始化，收发，调试打印_)：UART IIC **SPI**

模块联调：小车循迹 陀螺仪融合 屏幕显示 无线透传 视觉串口结果

运动控制：PID 速度环 位置环 差速/麦轮/云台控制

#### 开发环境

代码调试部分：Keil CCS CANMV IDE

Agent； Claude code VSCODE插件

#### Agent使用

1. 建立资料库
2. 正确投喂 _把原理图，说明书，示例工程，串口协议一起给Agent_
3. 编译与烧录验证 _每次只更改一个功能点，保留旧版本，大改后记得上传github_

---

# 总结
