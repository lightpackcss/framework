# Lightpack CSS Layout System

This file documents flex-based layout classes in Lightpack CSS.

---

## Layout System
- `.row`: Container for grid rows (flex, wrap)
- `.col`: Flexible column
- `.col-auto`: Auto-sized column
- `.col-1` to `.col-12`: Fixed-width columns (8.33% to 100%)
- Responsive columns: `.col-sm-*`, `.col-md-*`, `.col-lg-*`, `.col-xl-*`
- Offsets: `.offset-1` to `.offset-11` (and `.offset-sm-*`, `.offset-md-*`, etc.)

## Responsive Variants
- All columns and offsets have responsive variants for breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## Order Utilities
- (If present in code, document here)

## Vertical Alignment Helpers
- (If present in code, document here)

---

## Examples

### Basic Layout

<div class="demo-container">
  <div class="row">
    <div class="col"><div class="bg-muted p-2">.col</div></div>
    <div class="col"><div class="bg-muted p-2">.col</div></div>
    <div class="col"><div class="bg-muted p-2">.col</div></div>
  </div>
</div>

```html
<div class="row">
  <div class="col"><div class="bg-muted p-2">.col</div></div>
  <div class="col"><div class="bg-muted p-2">.col</div></div>
  <div class="col"><div class="bg-muted p-2">.col</div></div>
</div>
```

### Fixed Columns

<div class="demo-container">
  <div class="row">
    <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
    <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
    <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
  <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
  <div class="col-4">
    <div class="bg-muted p-2">.col-4</div>
  </div>
</div>
```

### Auto and Fixed Columns

<div class="demo-container">
  <div class="row">
    <div class="col-auto"><div class="bg-muted p-2">.col-auto</div></div>
    <div class="col"><div class="bg-muted p-2">.col</div></div>
    <div class="col-6"><div class="bg-muted p-2">.col-6</div></div>
  </div>
</div>

```html
<div class="row">
  <div class="col-auto"><div class="bg-muted p-2">.col-auto</div></div>
  <div class="col"><div class="bg-muted p-2">.col</div></div>
  <div class="col-6"><div class="bg-muted p-2">.col-6</div></div>
</div>
```

### Offsets

<div class="demo-container">
  <div class="row">
    <div class="col-4 offset-2"><div class="bg-muted p-2">.col-4 .offset-2</div></div>
    <div class="col-4"><div class="bg-muted p-2">.col-4</div></div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4 offset-2"><div class="bg-muted p-2">.col-4 .offset-2</div></div>
  <div class="col-4"><div class="bg-muted p-2">.col-4</div></div>
</div>
```

### Responsive Columns

<div class="demo-container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="bg-muted p-2">.col-12 .col-md-6 .col-lg-3</div>
  </div>
</div>
```