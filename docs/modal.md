# Modal Component

**Classes:** `.modal-backdrop`, `.modal`, `.modal-header`, `.modal-title`, `.modal-close`, `.modal-body`, `.modal-footer`

**Features:**
- Responsive, accessible modal dialog
- Overlay, header, body, footer, and close button

**Example**

<div class="demo-container">
  <button class="btn btn-primary" data-modal-open="show-modal">Show Modal</button>
  <div class="modal-backdrop" data-modal="show-modal" style="display:none;">
    <div class="modal max-w-md">
      <div class="modal-header">
        <h3 class="modal-title">Demo Modal Title</h3>
        <button class="modal-close" data-modal-close>×</button>
      </div>
      <div class="modal-body">
        <p>You can open and close multiple modals independently on the same page.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-modal-cancel>Cancel</button>
        <button class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>

**Usage:**
```html
<button class="btn btn-primary" data-modal-open="show-modal">Show Modal</button>

<!-- Modal -->
<div class="modal-backdrop" data-modal="show-modal" style="display:none;">
  <div class="modal max-w-md">
    <div class="modal-header">
      <h3 class="modal-title">Demo Modal Title</h3>
      <button class="modal-close" data-modal-close>×</button>
    </div>
    <div class="modal-body">
      <p>You can open and close multiple modals independently on the same page.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-modal-cancel>Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

**JS Interactivity:**
- Use <code>[data-modal]</code> attribute to target a specific modal.

---