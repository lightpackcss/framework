# Alert Component

**Classes:** `.alert`, `.alert-close`, `.alert-sm`, `.alert-success`, `.alert-warning`, `.alert-danger`, `.alert-info`

**Features:**
- Dismissible alerts
- Color/status variants: success, warning, danger, info
- Small size modifier: `.alert-sm`
- Includes close button: `.alert-close`
- Accessible markup

**Example**

<div class="demo-container">
  <div class="alert alert-success">
    <span>Success message!</span>
    <button class="alert-close">&times;</button>
  </div>
  <div class="alert alert-danger">
    <span>Danger message!</span>
    <button class="alert-close">&times;</button>
  </div>
  <div class="alert alert-warning">
    <span>Warning message!</span>
    <button class="alert-close">&times;</button>
  </div>
  <div class="alert alert-info">
    <span>Info message!</span>
    <button class="alert-close">&times;</button>
  </div>
</div>

**Usage:**
```html
<div class="alert alert-success">
  <span>Success message!</span>
  <button class="alert-close">&times;</button>
</div>

<div class="alert alert-danger">
  <span>Danger message!</span>
  <button class="alert-close">&times;</button>
</div>

<div class="alert alert-warning">
  <span>Warning message!</span>
  <button class="alert-close">&times;</button>
</div>

<div class="alert alert-info">
  <span>Info message!</span>
  <button class="alert-close">&times;</button>
</div>
```

**JS Interactivity:**
- Clicking `.alert-close` removes the alert

**Customization:**
- Override colors via variables or utility classes
- Add icons or extra content as needed

---