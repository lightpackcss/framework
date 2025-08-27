# Accordion Component

**Classes:** `.accordion`, `.accordion-item`, `.accordion-header`, `.accordion-panel`, `.open`

**Features:**
- Minimal, modern accordion UI
- Border, shadow, and smooth transitions
- Only one panel open at a time (by default)
- Keyboard accessible

**Example**

<div class="demo-container">
  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header">Section 1</button>
      <div class="accordion-panel">Content 1</div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">Section 2</button>
      <div class="accordion-panel">Content 2</div>
    </div>
  </div>
</div>

**Usage**
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-panel open">Content 1</div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">Section 2</button>
    <div class="accordion-panel">Content 2</div>
  </div>
</div>
```

**JS Interactivity:**
- Clicking a header toggles its panel
- Only one panel can be open at a time

**Customization:**
- Override border, shadow, or transition using CSS variables or utility classes

---