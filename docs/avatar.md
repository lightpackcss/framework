# Avatar Component

**Classes:** `.avatar`, `.avatar-sm`, `.avatar-lg`, `.avatar-square`

**Features:**
- Circular or square avatars
- Size variants: `.avatar-sm`, `.avatar-lg`
- Supports inline images or text initials

**Example**

<div class="demo-container">
  <span class="avatar avatar-sm">AB</span>
  <span class="avatar">AB</span>
  <span class="avatar avatar-lg">AB</span>
</div>

<div class="demo-container">
  <span class="avatar avatar-sm avatar-square">AB</span>
  <span class="avatar avatar-square">AB</span>
  <span class="avatar avatar-lg avatar-square">AB</span>
</div>

<div class="demo-container">
  <span class="avatar avatar-sm">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
  <span class="avatar">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
  <span class="avatar avatar-lg">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
</div>

<div class="demo-container">
  <span class="avatar avatar-sm avatar-square">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
  <span class="avatar avatar-square">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
  <span class="avatar avatar-lg avatar-square">
    <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
  </span>
</div>

**Usage:**
```html
<span class="avatar avatar-sm">AB</span>
<span class="avatar avatar">AB</span>
<span class="avatar avatar-lg">AB</span>

<span class="avatar avatar-sm avatar-square">AB</span>
<span class="avatar avatar-square">AB</span>
<span class="avatar avatar-lg avatar-square">AB</span>

<span class="avatar avatar-sm">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>
<span class="avatar">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>

<span class="avatar avatar-lg">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>

<span class="avatar avatar-sm avatar-square">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>

<span class="avatar avatar-square">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>

<span class="avatar avatar-lg avatar-square">
  <img src="https://api.dicebear.com/7.x/personas/svg?seed=AB" />
</span>
```

**Customization:**
- Override size, border, or shape using utility classes

---
