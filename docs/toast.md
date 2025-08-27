# Toast Component

Lightpack Toasts provide temporary, stackable notification popups with color variants, close buttons, auto-dismiss, sticky support, and multi-positioning.

**Classes:**
- `.toast` (base)
- `.toast-success`, `.toast-warning`, `.toast-danger`, `.toast-info` (color variants)
- `.toast-close` (dismiss button)
- `.toast-bottom-right`, `.toast-bottom-left`, `.toast-top-right`, `.toast-top-left` (container positions)

**JS API:**
- `Lightpack.showToast(message, variant, sticky, position)`
  - `message` (string): Toast content
  - `variant` (string): `info`, `success`, `danger`, `warning` (optional, default: `info`)
  - `sticky` (bool): If `true`, does not auto-dismiss (optional, default: `false`)
  - `position` (string): `bottom-right`, `bottom-left`, `top-right`, `top-left` (optional, default: `bottom-right`)

---

## Features
- **Color Variants:** Info, Success, Warning, Danger
- **Positions:** Bottom Right, Bottom Left, Top Right, Top Left
- **Sticky Toasts:** Don't auto-dismiss, require manual close
- **Dismiss Button:** `.toast-close` for manual dismiss
- **Stacking:** Multiple toasts stack per position

---

## JS Usage

**Show Info Toast (default position):**
```js
Lightpack.showToast('This is an info toast');
```

**Show Success Toast (top-right):**
```js
Lightpack.showToast('Operation successful!', 'success', false, 'top-right');
```

**Show Error Toast (bottom-left):**
```js
Lightpack.showToast('Something went wrong', 'danger', false, 'bottom-left');
```

**Show Warning Toast (top-left):**
```js
Lightpack.showToast('Check your input', 'warning', false, 'top-left');
```

**Show Sticky Toast (must be closed manually):**
```js
Lightpack.showToast('Sticky toast!', 'info', true, 'bottom-right');
```

---

## Examples

<div class="demo-container">
  <div style="display: flex; flex-wrap: wrap; gap: 1em; margin-bottom: 1em;">
    <div>
      <strong>Bottom Right</strong><br>
      <button class="btn btn-info" onclick="Lightpack.showToast('BR info toast', 'info', false, 'bottom-right')">Info</button>
      <button class="btn btn-success" onclick="Lightpack.showToast('BR success toast', 'success', false, 'bottom-right')">Success</button>
      <button class="btn btn-danger" onclick="Lightpack.showToast('BR error toast', 'danger', false, 'bottom-right')">Error</button>
      <button class="btn btn-warning" onclick="Lightpack.showToast('BR warning toast', 'warning', false, 'bottom-right')">Warning</button>
      <button class="btn btn-dark" onclick="Lightpack.showToast('BR sticky toast', 'info', true, 'bottom-right')">Sticky</button>
    </div>
    <div>
      <strong>Bottom Left</strong><br>
      <button class="btn btn-info" onclick="Lightpack.showToast('BL info toast', 'info', false, 'bottom-left')">Info</button>
      <button class="btn btn-success" onclick="Lightpack.showToast('BL success toast', 'success', false, 'bottom-left')">Success</button>
      <button class="btn btn-danger" onclick="Lightpack.showToast('BL error toast', 'danger', false, 'bottom-left')">Error</button>
      <button class="btn btn-warning" onclick="Lightpack.showToast('BL warning toast', 'warning', false, 'bottom-left')">Warning</button>
      <button class="btn btn-dark" onclick="Lightpack.showToast('BL sticky toast', 'info', true, 'bottom-left')">Sticky</button>
    </div>
    <div>
      <strong>Top Right</strong><br>
      <button class="btn btn-info" onclick="Lightpack.showToast('TR info toast', 'info', false, 'top-right')">Info</button>
      <button class="btn btn-success" onclick="Lightpack.showToast('TR success toast', 'success', false, 'top-right')">Success</button>
      <button class="btn btn-danger" onclick="Lightpack.showToast('TR error toast', 'danger', false, 'top-right')">Error</button>
      <button class="btn btn-warning" onclick="Lightpack.showToast('TR warning toast', 'warning', false, 'top-right')">Warning</button>
      <button class="btn btn-dark" onclick="Lightpack.showToast('TR sticky toast', 'info', true, 'top-right')">Sticky</button>
    </div>
    <div>
      <strong>Top Left</strong><br>
      <button class="btn btn-info" onclick="Lightpack.showToast('TL info toast', 'info', false, 'top-left')">Info</button>
      <button class="btn btn-success" onclick="Lightpack.showToast('TL success toast', 'success', false, 'top-left')">Success</button>
      <button class="btn btn-danger" onclick="Lightpack.showToast('TL error toast', 'danger', false, 'top-left')">Error</button>
      <button class="btn btn-warning" onclick="Lightpack.showToast('TL warning toast', 'warning', false, 'top-left')">Warning</button>
      <button class="btn btn-dark" onclick="Lightpack.showToast('TL sticky toast', 'info', true, 'top-left')">Sticky</button>
    </div>
  </div>

  <div id="toast-container-bottom-right" class="toast-bottom-right"></div>
  <div id="toast-container-bottom-left" class="toast-bottom-left"></div>
  <div id="toast-container-top-right" class="toast-top-right"></div>
  <div id="toast-container-top-left" class="toast-top-left"></div>
</div>

**Usage**
```html
<!-- Bottom right -->
<div id="toast-container-bottom-right" class="toast-bottom-right"></div>
<strong>Bottom Right</strong><br>
<button class="btn btn-info" onclick="Lightpack.showToast('BR info toast', 'info', false, 'bottom-right')">Info</button>
<button class="btn btn-success" onclick="Lightpack.showToast('BR success toast', 'success', false, 'bottom-right')">Success</button>
<button class="btn btn-danger" onclick="Lightpack.showToast('BR error toast', 'danger', false, 'bottom-right')">Error</button>
<button class="btn btn-warning" onclick="Lightpack.showToast('BR warning toast', 'warning', false, 'bottom-right')">Warning</button>
<button class="btn btn-dark" onclick="Lightpack.showToast('BR sticky toast', 'info', true, 'bottom-right')">Sticky</button>

<!-- Bottom left -->
<div id="toast-container-bottom-left" class="toast-bottom-left"></div>
<strong>Bottom Left</strong><br>
<button class="btn btn-info" onclick="Lightpack.showToast('BL info toast', 'info', false, 'bottom-left')">Info</button>
<button class="btn btn-success" onclick="Lightpack.showToast('BL success toast', 'success', false, 'bottom-left')">Success</button>
<button class="btn btn-danger" onclick="Lightpack.showToast('BL error toast', 'danger', false, 'bottom-left')">Error</button>
<button class="btn btn-warning" onclick="Lightpack.showToast('BL warning toast', 'warning', false, 'bottom-left')">Warning</button>
<button class="btn btn-dark" onclick="Lightpack.showToast('BL sticky toast', 'info', true, 'bottom-left')">Sticky</button>

<!-- Top right -->
<div id="toast-container-top-right" class="toast-top-right"></div>
<strong>Top Right</strong><br>
<button class="btn btn-info" onclick="Lightpack.showToast('TR info toast', 'info', false, 'top-right')">Info</button>
<button class="btn btn-success" onclick="Lightpack.showToast('TR success toast', 'success', false, 'top-right')">Success</button>
<button class="btn btn-danger" onclick="Lightpack.showToast('TR error toast', 'danger', false, 'top-right')">Error</button>
<button class="btn btn-warning" onclick="Lightpack.showToast('TR warning toast', 'warning', false, 'top-right')">Warning</button>
<button class="btn btn-dark" onclick="Lightpack.showToast('TR sticky toast', 'info', true, 'top-right')">Sticky</button>

<!-- Top left -->
<div id="toast-container-top-left" class="toast-top-left"></div>
<strong>Top Left</strong><br>
<button class="btn btn-info" onclick="Lightpack.showToast('TL info toast', 'info', false, 'top-left')">Info</button>
<button class="btn btn-success" onclick="Lightpack.showToast('TL success toast', 'success', false, 'top-left')">Success</button>
<button class="btn btn-danger" onclick="Lightpack.showToast('TL error toast', 'danger', false, 'top-left')">Error</button>
<button class="btn btn-warning" onclick="Lightpack.showToast('TL warning toast', 'warning', false, 'top-left')">Warning</button>
<button class="btn btn-dark" onclick="Lightpack.showToast('TL sticky toast', 'info', true, 'top-left')">Sticky</button>
```

---