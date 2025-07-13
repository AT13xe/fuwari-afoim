---
category: 记录
description: Serverless服务有很多，静态托管就是重中之重，来看看谁最稳定快速
draft: false
image: https://sb-r2.afo.im/fuwari-blog/img/2024-11-28-08-37-49-image.png
lang: ''
published: 2025-06-29
tags:
- Vercel
- Cloudflare
- Netlify
- EdgeOne
- Github
- Render
title: N款CDN服务商的优缺点比较
---

# [Netlify](https://www.netlify.com)

注册门槛高，需要使用谷歌邮箱注册。支持IPv6回源。用量限制较宽松，仅有带宽和构建时间限制。 **我认为是免费计划里最快的CDN！并且限制很少！**

![](https://sb-r2.afo.im/myblog/img/282ad19c-f971-4f92-9096-6e75308205c5.webp)

因为节点禁Ping，所以这里用Tcping结果展示

**推荐CNAME：** apex-loadbalancer.netlify.com

![](https://sb-r2.afo.im/myblog/img/e11f4d07-4135-411e-943e-cf27690bc9c7.webp)

# [Vercel](https://vercel.com)

零成本用上。注册无门槛，延迟良好。用量限制较严格。仅支持IPv4回源。默认的 `*.vercel.app` 在国内会被SNI阻断，需要绑定自己的域名

**推荐IP：** 76.76.21.21

![](https://sb-r2.afo.im/myblog/img/14654577-5c25-4136-bb06-9e10d1945ae2.webp)

![](https://sb-r2.afo.im/myblog/img/eb1ef62c-f50c-4f89-a287-c74e18353b9c.webp)

# [EdgeOne CDN](https://edgeone.ai)

目前处于内测，需要兑换码。获取方式前往 [腾讯云EdgeOne免费计划兑换码 - 立即体验](https://edgeone.ai/zh/redemption) 。无流量和请求数限制。

![](https://sb-r2.afo.im/myblog/img/ed25c33f-5719-44b5-844e-62ac73eadfef.webp)

支持**高级回源设置**

![](https://sb-r2.afo.im/myblog/img/a1517d8e-1664-4819-ba08-d78ae13299a4.webp)

## 全球可用区（不含中国大陆）

> 本人博客目前使用的CDN

默认提供的CNAME延迟一般。下图是使用了本人的HK优选： eo.072103.xyz（注： EdgeOne Page不可用）

![](https://sb-r2.afo.im/myblog/img/b2937ed2-0f8d-4179-a9b5-b465902ca9ab.webp)

## EdgeOne CDN 中国大陆可用区

需要**实名认证**，需要**域名备案**

默认CNAME可用

![](https://sb-r2.afo.im/myblog/img/c44674d3-d37e-4f00-a7ee-cdac7798b293.webp)

# [Cloudflare](https://www.cloudflare.com/)

无流量和请求数限制。**无法被打死**

[戳我查看优选域名](/posts/record/#cloudflare-%E4%BC%98%E9%80%89%E5%9F%9F%E5%90%8D)

下图使用本人的分流优选： fenliu.072103.xyz

![](https://sb-r2.afo.im/myblog/img/f0785c5d-b31a-40d1-9da9-ac50a94f6b0a.webp)

# [Render](https://render.com)

注册简单，具有严格的用量限制

![](https://sb-r2.afo.im/myblog/img/0bccb1b9-3fe1-49f0-a255-0805fc0ee35c.webp)

![](https://sb-r2.afo.im/myblog/img/2b6104d5-9cee-4e2b-adb5-9aefe02240d2.webp)

# [Github Page](https://pages.github.com/)

需要使用Github Action发布。**中国大陆大部分地区会间歇性阻断**，不推荐使用

![](https://sb-r2.afo.im/myblog/img/efccadbf-bc70-4444-bb48-8399cf881617.webp)
