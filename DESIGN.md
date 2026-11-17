---
name: benhooper.org
description: A river meander survey sheet for a consultant who finds where systems stopped shipping.
colors:
  ground: "#eef3ea"
  ink: "#1d2b33"
  salmon: "#ef6f5e"
  teal: "#3fa596"
  ochre: "#f2c14e"
  river: "#7fb6d6"
typography:
  display:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "clamp(4rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
  lede:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, 'Arial Narrow', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
rounded:
  none: "0px"
spacing:
  gutter: "1.25rem"
  gutter-wide: "3rem"
  box: "1.25rem"
  box-wide: "2rem"
  section: "5rem"
  section-wide: "7rem"
components:
  key:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.1rem 0.6rem 0.75rem"
    height: "3rem"
  key-hover:
    backgroundColor: "{colors.river}"
    textColor: "{colors.ink}"
  key-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  cartouche:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 2rem"
  note:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
  nav-item:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  nav-item-hover:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
  nav-item-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  jam-control:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  jam-control-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
---

# Design System: benhooper.org

## Overview

**Creative North Star: "The Meander Survey"**

The site is a printed survey sheet of a river. A pale green-white sheet carries four flat ribbon fields (river blue, teal, salmon, ochre) that own whole regions of the page, separated by ink linework at a single 2px weight. Everything that is not a ribbon is a boxed label sitting on the sheet: a title cartouche, a legend, a note. There are no cards, no rounded corners, no shadows and no gradients. It reads as print, flat and overprinted.

The lettering is one family, Archivo, used across its width axis. Titles are condensed (68% width), heavy and in caps, like the title block on a map. Everything else is the same face at normal width, kept plain and fairly heavy so it holds against the saturated fields.

The sheet is still. The one thing that moves is the hero river: ink drops carried down a channel, piled behind a barrier until the visitor clears it. Elsewhere, state is shown by swapping one flat colour for another.

**Key Characteristics:**
- Flat ribbon fields that span full width and meet at a 2px ink line
- One line weight (2px ink) for every border, rule, bank and outline
- Boxed labels as the only containers; legend keys as the only action controls
- Condensed heavy caps for titles, one typeface throughout
- Square corners, no shadows, no gradients, no opacity tints
- Only the hero river animates

## Colors

Six flat colours: a sheet, an ink, and four ribbons. Every one is used at full strength; there are no tints, no transparency and no gradients anywhere in the build.

### Primary
- **Survey Ink** (`ink`): all text, every line, the footer field, the jam barrier and its control, the current nav item, and the pressed state of a key. Also stands in as the fifth swatch when a set has more than four members (the fifth focus area in the stream diagram).

### Secondary
- **River Blue** (`river`): the top ribbon of the hero (the channel the drops run in) and the default key swatch.
- **Bank Teal** (`teal`): the second ribbon; the "Working with Me" field.
- **Silt Salmon** (`salmon`): the third ribbon; the closing "Invite Me to Speak" field.
- **Sandbar Ochre** (`ochre`): the fourth ribbon; the note box, the nav hover, and the Sessionize field on the speaking page.

The four ribbons are peers. None is the brand colour; each owns a region, and each can be a key's swatch.

### Neutral
- **Sheet** (`ground`): the page, the inside of every box and key, text on ink, and the idle state of the stream diagram.

### Named Rules
**The Flat Field Rule.** A colour is either the whole background of a full-width region, the fill of a box, or a swatch. It is never a tint, a gradient, a glow, or a text colour. Text is ink, or sheet when it sits on ink.

**The Swatch Carries The Colour Rule.** Controls are sheet-coloured with an ink border; their colour lives in a small swatch. On hover the control takes the swatch colour and the swatch turns ink.

**The Different Swatch Rule.** A key placed on a ribbon field uses a swatch of a different ribbon colour (salmon key on teal, ochre key on salmon, teal key on ochre), so the swatch always reads against the field.

## Typography

**Display Font:** Archivo variable, width axis loaded (with Arial Narrow, Arial, sans-serif)
**Body Font:** Archivo, same family at normal width

**Character:** One grotesk doing two jobs. Squeezed to 68% width at weight 800 in caps it is map title lettering; at normal width it is a plain, sturdy text face. Numerals are tabular everywhere.

### Hierarchy
- **Display** (800, 68% width, caps, `clamp(4rem, 9vw, 6rem)`, line-height 0.9, -0.02em): the name in the hero cartouche. Set with `font-stretch: 68%`.
- **Headline** (same style, 3rem rising to 3.75rem from 768px): section titles. Inner page titles in their cartouche run 3rem to 4.5rem; the footer name and the split-field titles on the speaking page run 2.25rem to 3rem.
- **Title** (800, normal width, sentence case, 1.5rem to 1.875rem, tight leading): row titles in ruled lists. Talk titles on the speaking page go up to 2.25rem at line-height 1.1.
- **Lede** (600, 1.25rem): the sentence under a headline, max 60ch. The hero lede is the same weight at 1.25rem to 1.5rem with snug leading, max 32ch. The home intro statement is larger and lighter (500, 1.5rem to 1.75rem, max 58ch).
- **Body** (400, 1.125rem, line-height 1.55): running text, max 60 to 66ch. Descriptions that sit on a ribbon field go up to weight 500 or 600.
- **Label** (700, 0.875rem, caps, 0.05em tracking; the legend heading uses 0.1em): header nav, the legend heading and channel status, the jam control.
- **Key label** (700, body size, line-height 1.2, sentence case): the text of every legend key.

### Named Rules
**The Title Block Rule.** Condensed caps are for titles only: the name, page titles, section titles. Anything a visitor reads as a sentence is normal width and sentence case.

**The Heavy On Colour Rule.** Text on a ribbon field is weight 500 or above. Weight 400 is for long text on the sheet.

## Layout

Regions are full-bleed horizontal bands that stack down the page, each either sheet or one ribbon colour, divided by a 2px ink line. Content inside sits in a centred shell (max width 82rem; side gutter 1.25rem, 3rem from 768px). Content is left-aligned to the shell's left edge; nothing is centred.

Vertical rhythm is generous and varies by region: sheet sections on the home page take 5rem top and bottom (7rem from 768px), coloured fields take 4rem to 6rem, inner page sections take 4rem (6rem from 768px).

The home hero fills the viewport from 768px (`clamp(50rem, 100svh, 60rem)`) with the title cartouche top left, the river running through the open middle, and the legend and note boxes along the bottom. Below 768px it stacks: cartouche, a 19rem gap for the river, legend, note. The header is absolutely positioned over the top of the first band, so every page opens on colour.

Inner pages open with a page band: four ribbon fields with one repeated meander bank, in a different colour order per page, with the title boxed on top.

Lists are ruled rows: a 2px ink line above each row and one below the last, two columns from 768px (title and description, at 2:3 or 3:2), one column below. The speaking page ends on two fields side by side (ochre and salmon) split by an ink line, stacking below 768px.

The stream diagram is a wide-screen form only. Below 768px the same content is a plain ruled list with swatches.

## Elevation & Depth

None. There are no shadows, no blur, no translucent layers. Order is shown by overprinting: a box with a sheet fill and an ink border sits on top of a ribbon and covers it. The only stacking in the build is boxes over ribbons and the header over the first band.

### Named Rules
**The Overprint Rule.** Something is "above" something else only by being an opaque box drawn over it. If it needs a shadow to separate, it needs a border instead.

## Shapes

Every corner is square (0px). Every line is 2px ink: box borders, row rules, band dividers, ribbon banks, swatch outlines, link underlines. The only other stroke in the build is the focus outline (3px ink, 3px offset; sheet-coloured on ink).

Straight edges belong to boxes and rules. Curves belong to water: ribbon banks, the stream diagram's links, and the round ink drops in the river. The channel centreline is a 2px dotted line (round caps, 2 on, 10 off), the one dashed stroke in the system.

Swatches are small landscape rectangles (2.25rem by 1rem) with an ink outline.

## Components

### Legend Key (the action control)
Every action on the site is a legend key: a swatch and a label.
- **Shape:** square, 2px ink border, min height 3rem, swatch then label with a 0.75rem gap.
- **Default:** sheet fill, ink label at weight 700, swatch in one of the four ribbon colours (river by default).
- **Hover:** the key fills with its swatch colour and the swatch turns ink (colour swap over 0.25s).
- **Active:** ink fill, sheet text.
- **Row variant:** inside a legend box the key runs full width with only a top rule, so keys stack as ruled rows.
- Profile links (LinkedIn, GitHub, X) are keys too, each with a fixed swatch.

### Cartouche (the container)
A sheet-filled box with a 2px ink border, no radius, no shadow. Holds the hero title and lede, each inner page title, and the legend. Padding 1.25rem, rising to about 2rem from 640px. The note box is the same box filled ochre, holding one bold sentence.

### Navigation
- **Header:** a single boxed strip of caps labels, top right, cells divided by ink lines. Hover fills the cell ochre; the current page is ink with sheet text. On inner pages the name appears top left as its own small box in display lettering, inverting to ink on hover. No mobile menu: three items stay in the strip at all widths.
- **Legend:** the hero's "where next" navigation, a cartouche with a small caps heading, the channel status in words, and three row keys.
- **Footer:** an ink field with the name in display lettering and bold underlined text links that invert to sheet on hover.

### Text Link
Inline links are bold, ink, with a 2px underline offset 0.2em. Hover inverts to ink background with sheet text.

### Ruled List
Services and talks. Rows separated by 2px ink rules; a heavy title on the left, description on the right. No boxes around rows, no icons.

### River (signature)
The home hero. Four ribbons follow one meandering bank, the top one being the channel. Ink drops (d3-force) flow left to right and pile up behind a leaning ink barrier. An ink control box by the barrier ("Stopped shipping here. Clear the jam") swings the barrier flat with an expo ease-out over 0.9s and releases the pile; the legend status changes from "Channel blocked" to "Channel open" and a live region says so. The control is a toggle. The simulation pauses when off screen. With reduced motion the river is a still print that redraws for each state.

### Talk Streams
From 768px: three columns in one ruled frame. Focus areas on the left as swatch rows, talks on the right, and ribbons of constant thickness curving between them. Hover, focus or click on a focus area fills its row, its ribbons and the talks it feeds with its colour; the rest stay sheet with ink outlines. One area is always active and its description sits below. The fifth area uses ink, with sheet text.

### Page Band
The top of each inner page: the four ribbons in a per-page order (speaking, about, contact and not-found each differ), with the title cartouche on top. Static.

## Do's and Don'ts

### Do:
- **Do** give every border, rule and outline the same 2px ink line.
- **Do** make every action a legend key, and pick a swatch that differs from the field the key sits on.
- **Do** let a ribbon colour own a whole full-width region and close it with an ink line.
- **Do** put titles in condensed heavy caps (68% width, weight 800) and everything else in normal-width sentence case.
- **Do** show state by swapping flat colours: sheet to ribbon, ribbon to ink.
- **Do** keep text ink on the sheet and on all four ribbons, and sheet on ink.
- **Do** give anything with a wide-screen diagram a plain ruled-list form below 768px.
- **Do** keep a still version of the river for reduced motion.

### Don't:
- **Don't** round a corner or add a shadow.
- **Don't** use a tint, gradient or transparency of any colour.
- **Don't** add a second line weight for borders or rules.
- **Don't** set body text or labels in a ribbon colour.
- **Don't** introduce a filled-colour button; the swatch carries the colour until hover.
- **Don't** animate anything on scroll or on load outside the hero river.
- **Don't** add a second typeface.
