---
title: Problems with color-model conversion
description: Lately, I've stumbled on an issue while converting color from HEX to the HSL color model in Figma. This article explores the problem and its consequence.
date: 2021-01-03
slug: color-model-conversion
---


Lately, I'm stumbled on an issue while converting color from HEX to HSL color-model in Figma; two different HEX ends up in the same HSL value. Other design tools and online converters also have a similar issue. So I dug deep into this issue and found that the problems occur because of rounding values. If you're in a creative field, understanding these quirks may help you while you're working with colors.

Let's recreate this issue and try to make sense of this problem. Take a look at this image.

![comparing HEX with HSL](/asset/color-model-conversion/img1.png)

From the image, it's obvious that these three colors have different HEX values but have the same HSL value, so why does it happen? Let's convert the HEX (RGB color model) to the HSL model. Before our conversion, we must be aware that here we are using 8bit color depth. If you're using higher color depth (say 16 bit or 32bit), this problem's severity will get amplified drastically; I'll get to this topic later in this article.

The color-model conversion is a relatively simple process. First, we need to convert our hexadecimal (HEX) value to decimal (RGB), then we can map RGB to HSL by using this logic.

![RGB to HSL Logic](/asset/color-model-conversion/img2.png)

When we feed our HEX into [this](https://gist.github.com/imohanvadivel/d8a149d4b102343f7d0a86041e997fa4) logic, we get three unique HSL values. Since the design tools don't allow fractions in HSL, these values get rounded to the same value.

![screenshot of js console result](/asset/color-model-conversion/img3.png)

Suppose you're wondering why people are using HSL and HSV color-model instead of RGB. Because the RGB model is very hardware-oriented, and it is not intuitive for humans to think in the RGB model (try guessing this color R=34, B=48, G=92); for this reason, people developed alternative models like HSL, HSV, CMYK, and so on, each has its purpose. The HSL and HSV are very intuitive models, making it easy for us to describe a color. For example, let's say Hue = 220, Saturation = 80, Lightness = 80; we can easily guess that this is a saturated blue color by looking at the hue and saturation value (H=220, S =80), and it is of a lighter shade (L =80). Note that the HSL and HSV are not the same; sometimes, people refer to HSV as HSB.

In 8-bit color depth, each R, G, B channel can take a value anywhere between 0 to 255; thus, 16.5 million color combinations are possible. Whereas in the HSL case, only 3.6 million color combinations are possible if the value gets rounded.

![RGB vs HSL difference](/asset/color-model-conversion/img4.png)

If you're a photographer or creative artist working in a color space (say, AdobeRGB) with higher bit depth. In that case, this rounding effect gets amplified drastically, a 16-bit color depth has 281 Trillion colors, and 32-bit has (4,294,967,296)³ possible combinations.

Furthermore, there is no one-on-one relationship between the color model, meaning if you take a HEX and convert it into an HSL model, and then if you try to restore the HSL model to HEX, you may end up with a different HEX.

![one-to-one issue](/asset/color-model-conversion/img5.png)

In general, if you work on a project that demands color accuracy, the RGB model is the most suitable option for storing, documenting, and communicating colors with others.
