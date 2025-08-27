# Drawer Component

**Classes:** `.drawer`, `.drawer.open`, `.drawer-backdrop`, `.drawer-panel`, `.drawer-left`, `.drawer-left.open`

**Features:**
- Slide-in drawer from right or left
- Backdrop and responsive width

**Example**

<div class="demo-container">
  <button class="btn btn-primary" data-drawer-open="left-drawer">Left Drawer</button>
  <div class="drawer drawer-left" id="left-drawer">
    <div class="drawer-backdrop"></div>
    <div class="drawer-panel">Drawer content here</div>
  </div>
</div>

**Usage:**
```html
<button class="drawer-toggle">Left Drawer</button>
<div class="drawer drawer-left" id="drawer">
  <div class="drawer-backdrop"></div>
  <div class="drawer-panel">Drawer content here</div>
</div>
```

**Example**

<div class="demo-container">
  <button class="btn btn-primary" data-drawer-open="right-drawer">Right Drawer</button>
  <div class="drawer drawer-right" id="right-drawer">
    <div class="drawer-backdrop"></div>
    <div class="drawer-panel">Drawer content here</div>
  </div>
</div>

**Usage:**
```html
<button class="drawer-toggle">Right Drawer</button>
<div class="drawer drawer-right" id="drawer">
  <div class="drawer-backdrop"></div>
  <div class="drawer-panel">Drawer content here</div>
</div>
```

**JS Interactivity:**
- Supports left and right drawers and triggers

---
