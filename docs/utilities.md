# Lightpack CSS Utilities

This file lists **every available utility class** in Lightpack CSS, grouped by category. All utilities are defined in `/src/css/_utilities.css`.

---

## Spacing Utilities
- `.gap-0` ... `.gap-9`
- `.gap-x-0` ... `.gap-x-9`
- `.gap-y-0` ... `.gap-y-9`
- `.m-0` ... `.m-9`, `.mt-0` ... `.mt-9`, `.mr-0` ... `.mr-9`, `.mb-0` ... `.mb-9`, `.ml-0` ... `.ml-9`, `.mx-auto`
- `.p-0` ... `.p-9`, `.pt-0` ... `.pt-9`, `.pr-0` ... `.pr-9`, `.pb-0` ... `.pb-9`, `.pl-0` ... `.pl-9`
- `.px-0` ... `.px-9`, `.py-0` ... `.py-9`

## Offset Utilities
- `.top-0` ... `.top-9`, `.right-0` ... `.right-9`, `.bottom-0` ... `.bottom-9`, `.left-0` ... `.left-9`

## Layout Utilities
- `.d-block`, `.d-inline`, `.d-inline-block`, `.d-none`
- `.visibility-hidden`, `.visibility-visible`
- `.static`, `.relative`, `.absolute`, `.fixed`, `.sticky`
- `.overflow-auto`, `.overflow-scroll`, `.overflow-hidden`, `.overflow-x-auto`, `.overflow-x-scroll`, `.overflow-x-hidden`, `.overflow-y-auto`, `.overflow-y-scroll`, `.overflow-y-hidden`
- `.scroll-smooth`
- `.flex`, `.inline-flex`, `.flex-row`, `.flex-row-reverse`, `.flex-col`, `.flex-col-reverse`, `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse`, `.flex-1`, `.flex-auto`, `.flex-initial`, `.flex-none`, `.grow`, `.grow-0`, `.shrink`, `.shrink-0`
- `.justify-start`, `.justify-center`, `.justify-between`, `.justify-end`, `.justify-around`, `.justify-evenly`
- `.items-start`, `.items-center`, `.items-end`, `.items-baseline`, `.items-stretch`
- `.content-start`, `.content-center`, `.content-end`, `.content-between`, `.content-around`, `.content-evenly`
- `.self-auto`, `.self-start`, `.self-center`, `.self-end`, `.self-stretch`, `.self-baseline`

## Content Utilities
- `.truncate`, `.text-ellipsis`, `.whitespace-nowrap`, `.break-words`

## Filter Utilities
- `.blur-sm`, `.brightness-110`

## Backdrop Filter Utilities
- `.backdrop-blur`, `.backdrop-brightness-125`

## Object Fit/Position Utilities
- `.object-cover`, `.object-contain`, `.object-center`

## Animation Utilities
- `.animate-spin`, `.animate-fade-in`, `.animate-fade-out`, `.animate-slide-up`, `.animate-bounce`
- `.duration-200`, `.duration-500`, `.duration-1000`, `.delay-100`, `.delay-300`, `.ease-in-out`

## Grid Utilities
- `.grid`, `.grid-cols-1` ... `.grid-cols-6`, `.grid-cols-none`, `.grid-rows-1` ... `.grid-rows-6`, `.grid-rows-none`
- `.grid-flow-row`, `.grid-flow-col`, `.grid-flow-dense`
- `.grid-rows-min`, `.grid-rows-max`, `.grid-rows-auto`, `.grid-cols-min`, `.grid-cols-max`, `.grid-cols-auto`

## Typography Utilities
- `.fs-xs`, `.fs-sm`, `.fs-base`, `.fs-lg`, `.fs-xl`, `.fs-2xl`, `.fs-3xl`
- `.fw-100`, `.fw-200`, `.fw-300`, `.fw-400`, `.fw-500`, `.fw-600`, `.fw-700`
- `.text-left`, `.text-center`, `.text-right`, `.text-justify`
- `.lh-base`

## Color Utilities
- `.bg-[color]`, `.text-[color]` for every color in variables
- `.bg-muted`, `.text-muted`, `.bg-white`, `.bg-black`, etc.

## Border Utilities
- `.border`, `.border-red`, `.border-green`, `.border-blue`, `.border-gray`, `.border-black`, `.border-white`
- `.radius-sm`, `.radius-md`, `.radius-lg`

## Shadow Utilities
- `.shadow-sm`, `.shadow-md`, `.shadow-lg`

## Width/Height Utilities
- `.w-100`, `.w-xs`, `.w-sm`, `.w-md`, `.w-lg`
- `.min-w-xs`, `.min-w-sm`, `.min-w-md`, `.min-w-lg`
- `.max-w-xs`, `.max-w-sm`, `.max-w-md`, `.max-w-lg`
- `.h-100`, `.h-100vh`, `.min-h-100vh`, `.max-h-50`, `.max-h-75`

## Opacity Utilities
- `.opacity-100`, `.opacity-80`, `.opacity-50`, `.opacity-25`, `.opacity-disabled`, `.opacity-overlay`

## Z-Index Utilities
- `.z-0`, `.z-10`, `.z-20`, `.z-30`, `.z-40`, `.z-50`

## Transition Utilities
- `.transition-fast`, `.transition-base`, `.transition-slow`

## Container Width Utilities
- `.container-xs`, `.container-sm`, `.container-md`, `.container-lg`, `.container-xl`

## Accessibility Utilities
- `.sr-only`

## Cursor Utilities
- `.cursor-pointer`, `.cursor-disabled`, `.cursor-default`, `.cursor-text`, `.cursor-move`, `.cursor-grab`, `.cursor-grabbing`, `.cursor-wait`, `.cursor-crosshair`, `.cursor-zoom-in`, `.cursor-zoom-out`, `.cursor-help`, `.pointer-events-none`, `.pointer-events-auto`, `.select-none`, `.select-text`, `.select-all`, `.select-auto`

## Scroll Snap Utilities
- `.snap-x`, `.snap-y`, `.snap-mandatory`, `.snap-proximity`, `.snap-start`, `.snap-center`, `.snap-end`

## Aspect Ratio Utilities
- `.aspect-1-1`, `.aspect-16-9`, `.aspect-4-3`

## Text Decoration & Transform Utilities
- `.underline`, `.line-through`, `.uppercase`, `.lowercase`, `.capitalize`

## List Style Utilities
- `.list-none`, `.list-disc`, `.list-decimal`

---

## Usage Examples

### Spacing Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <div class="bg-muted p-3 m-2">.p-3 .m-2</div>
  <div class="bg-muted p-1 m-4">.p-1 .m-4</div>
</div>

```html
<div class="bg-muted p-3 m-2">.p-3 .m-2</div>
<div class="bg-muted p-1 m-4">.p-1 .m-4</div>
```

### Layout Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <div class="d-inline bg-muted p-2">.d-inline</div>
  <div class="d-block bg-muted p-2">.d-block</div>
  <div class="d-none bg-muted p-2">.d-none (hidden)</div>
</div>

```html
<div class="d-inline bg-muted p-2">.d-inline</div>
<div class="d-block bg-muted p-2">.d-block</div>
<div class="d-none bg-muted p-2">.d-none (hidden)</div>
```

### Flex Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <div class="flex flex-row gap-2 p-2">
    <div class="bg-muted p-2">A</div>
    <div class="bg-muted p-2">B</div>
    <div class="bg-muted p-2">C</div>
  </div>
</div>

```html
<div class="flex flex-row gap-2 bg-muted p-2">
  <span class="bg-indigo p-1">1</span>
  <span class="bg-green p-1">2</span>
  <span class="bg-red p-1">3</span>
</div>
```

### Grid Utilities

<div class="demo-container">
  <div class="grid grid-cols-3 gap-2">
    <div class="bg-muted p-2">A</div>
    <div class="bg-muted p-2">B</div>
    <div class="bg-muted p-2">C</div>
  </div>
</div>

```html
<div class="grid grid-cols-3 gap-2">
  <div class="bg-muted p-2">A</div>
  <div class="bg-muted p-2">B</div>
  <div class="bg-muted p-2">C</div>
</div>
```

### Typography Utilities

<div class="demo-container" style="display:flex; flex-direction:column; gap:0.5rem;">
  <span class="fs-xs">.fs-xs</span>
  <span class="fs-lg">.fs-lg</span>
  <span class="fw-700">.fw-700</span>
  <span class="text-center">.text-center (centered text)</span>
</div>

```html
<span class="fs-xs">.fs-xs</span>
<span class="fs-lg">.fs-lg</span>
<span class="fw-700">.fw-700</span>
<span class="text-center">.text-center (centered text)</span>
```

### Color Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <span class="bg-indigo text-white p-2">.bg-indigo .text-white</span>
  <span class="bg-green text-white p-2">.bg-green .text-white</span>
  <span class="bg-red text-white p-2">.bg-red .text-white</span>
</div>

```html
<span class="bg-indigo text-white p-2">.bg-indigo .text-white</span>
<span class="bg-green text-white p-2">.bg-green .text-white</span>
<span class="bg-red text-white p-2">.bg-red .text-white</span>
```

### Border & Radius Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <span class="border border-indigo radius-sm p-2">.border .border-indigo .radius-sm</span>
  <span class="border border-red radius-lg p-2">.border .border-red .radius-lg</span>
</div>

```html
<span class="border border-indigo radius-sm p-2">.border .border-indigo .radius-sm</span>
<span class="border border-red radius-lg p-2">.border .border-red .radius-lg</span>
```

### Shadow Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <span class="shadow-sm p-2">.shadow-sm</span>
  <span class="shadow-md p-2">.shadow-md</span>
  <span class="shadow-lg p-2">.shadow-lg</span>
</div>

```html
<span class="shadow-sm p-2">.shadow-sm</span>
<span class="shadow-md p-2">.shadow-md</span>
<span class="shadow-lg p-2">.shadow-lg</span>
```

### Width/Height Utilities

<div class="demo-container" style="display:flex; gap:1rem; align-items:center;">
  <div class="bg-muted w-xs h-100 p-2">.w-xs .h-100</div>
  <div class="bg-muted w-md h-100 p-2">.w-md .h-100</div>
  <div class="bg-muted w-lg h-100 p-2">.w-lg .h-100</div>
</div>

```html
<div class="bg-muted w-xs h-100 p-2">.w-xs .h-100</div>
<div class="bg-muted w-md h-100 p-2">.w-md .h-100</div>
<div class="bg-muted w-lg h-100 p-2">.w-lg .h-100</div>
```

### Opacity Utilities

<div class="demo-container" style="display:flex; gap:1rem;">
  <span class="bg-indigo text-white p-2 opacity-100">.opacity-100</span>
  <span class="bg-indigo text-white p-2 opacity-50">.opacity-50</span>
  <span class="bg-indigo text-white p-2 opacity-25">.opacity-25</span>
</div>

```html
<span class="bg-indigo text-white p-2 opacity-100">.opacity-100</span>
<span class="bg-indigo text-white p-2 opacity-50">.opacity-50</span>
<span class="bg-indigo text-white p-2 opacity-25">.opacity-25</span>
```

### Animation Utilities

<div class="demo-container" style="display:flex; gap:1rem; align-items:center;">
  <span class="animate-spin bg-indigo text-white p-2">spin</span>
  <span class="animate-bounce bg-green text-white p-2">bounce</span>
</div>

```html
<span class="animate-spin bg-indigo text-white p-2">spin</span>
<span class="animate-bounce bg-green text-white p-2">bounce</span>
```

---
