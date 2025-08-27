# Stepper Component

**Classes:** `.stepper`, `.step`, `.step-label`, `.step-active`, `.step-completed`, `.step-icon`

**Features:**
- Horizontal or vertical step progress indicators
- Active and completed states
- Number, icon, or custom content in steps

**Example**

<div class="demo-container">
  <div class="stepper">
    <div class="step step-active">
      <div class="step-circle">1</div>
      <div class="step-label">Start</div>
    </div>
    <div class="step-line"></div>
    <div class="step">
      <div class="step-circle">2</div>
      <div class="step-label">Middle</div>
    </div>
    <div class="step-line"></div>
    <div class="step">
      <div class="step-circle">3</div>
      <div class="step-label">End</div>
    </div>
  </div>
</div>

**Usage:**
```html
<div class="stepper">
  <div class="step step-active">
    <div class="step-circle">1</div>
    <div class="step-label">Start</div>
  </div>

  <div class="step-line"></div>

  <div class="step">
    <div class="step-circle">2</div>
    <div class="step-label">Middle</div>
  </div>

  <div class="step-line"></div>

  <div class="step">
    <div class="step-circle">3</div>
    <div class="step-label">End</div>
  </div>
</div>
```

**Customization:**
- Use utility classes for layout, color, or spacing

---
