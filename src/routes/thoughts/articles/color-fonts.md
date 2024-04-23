---
title: Color fonts for the web
description: For years we've been typesetting text in a single solid color. This article explores color-font technology, various formats, and their usage.
date: 2021-02-12
slug: color-fonts
---

For years we've been typesetting text in a single solid color like black, white... well, with the help of gradient and transparency, we can kind of imitate multicolor font to an extent, but there is no native color font where, the type designer has the liberty to pack colors within the font file, enter color font.

If you were not aware, you've already been using color fonts in emojis for years. Apple, Google, Microsoft have long had their own proprietary color-font formats, and there is also the fourth one by Adobe & Mozilla. All four color-font formats have been adopted by the OpenType standard. Thus now it's in the hand of browser makers to support them.

|           |                 |                                         |
| --------- | --------------- | --------------------------------------- |
| SBIX      | Apple           | PNG/JPEG/TIFF stored in the font.       |
| CBDT/CBLC | Google          | PNG stored in the font.                 |
| COLR/CPAL | Microsoft       | Overlapping layers with color palettes. |
| SVG       | Adobe & Mozilla | SVG stored in the font.                 |

The SBIX from Apple and CBDT from google are image-based. The image is embedded inside the font, like bitmap font, so the same font scaling problem exists. The font works well for the font size that matches the original resolution of the images, but the text may get blurry as soon as the font size varies.

Microsoft's format is based on layering, stacking layers one over another, and giving each layer a color. Though this approach sounds great, it has some drawbacks like gradients and transparency aren't supported, and it's difficult to decompose drawing into layers. On the other hand, the SVG format by Adobe & Mozilla embeds the SVG file inside a font, so all the cool features of SVG like colors, gradient, transparency are supported.

Among these four font formats, type designers seem to prefer OpenType-SVG over others. There are already several commercial color-fonts are available.

<figure>
  <a href="https://blog.typekit.com/2016/11/17/introducing-trajan-color-concept-a-new-opentype-svg-font-by-adobe/" target="_blank">
    <img src="/asset/color-fonts/trajan_color.png" alt="Trajan Color by Adobe Originals">
  </a>

  <figcaption>Trajan Color by Adobe Originals</figcaption>
</figure>

<figure>
  <a href="https://www.typewithpride.com/" class="plain" target="_blank"><img src="/asset/color-fonts/gilbert.gif" alt="Gilbert from TypeWithPride"></a>
  <figcaption>Gilbert from TypeWithPride</figcaption>
</figure>

<figure>
  <a href="https://bixacolor.com/" class="plain" target="_blank"><img src="/asset/color-fonts/bixa.png" alt="Bixa Color by Novo Typo"></a>
  <figcaption>Bixa Color by Novo Typo</figcaption>
</figure>

<figure>
 <a href="https://djr.com/bungee/" target="_blank"><img src="/asset/color-fonts/bungee.png" alt="Bungee by David Jonathan Ross"></a>
 <figcaption>Bungee by David Jonathan Ross</figcaption>
</figure>

The browser support has improved over the recent years. As I'm writing this article, Chrome hasn't supported the SVG format yet. But, apart from Chrome, all the major browsers have supported the SVG format.

| Web Browsers | Supported Formats                       |
| ------------ | --------------------------------------- |
| Safari       | SVG &#124; SBIX &#124; COLR             |
| Chrome       | COLR &#124; CBDT                        |
| Firefox      | SVG &#124; COLR                         |
| Edge         | SVG &#124; SBIX &#124; COLR &#124; CBDT |

If you're designing with the color font on the web, you can use this [handy little library](https://github.com/RoelN/ChromaCheck) to check the browser support for all four font formats.
