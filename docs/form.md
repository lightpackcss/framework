# Form Component

**Classes:** `.form`, `.input`, `.label`, `.textarea`, `.select`, `.switch`, `.slider`, `.input-group`, `.form-inline`, `.required`

**Features:**
- Modern, accessible form controls
- Supports text inputs, selects, checkboxes, radios, switches, range sliders, file inputs
- Grouped controls and inline forms
- Responsive layout

**Example**

<div class="demo-container">
  <form class="card p-5">
    <div class="mb-4">
      <label for="name" class="required">Name</label>
      <input type="text" id="name" name="name" placeholder="Your full name" required>
    </div>
    <div class="mb-4">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com">
    </div>
    <div class="mb-4">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="••••••••">
    </div>
    <div class="mb-4">
      <label for="bio">Bio</label>
      <textarea id="bio" name="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
    </div>
    <div class="mb-4">
      <label for="role">Role</label>
      <select id="role" name="role">
        <option value="">Select role...</option>
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
        <option value="pm">Product Manager</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="">Preferences</label>
      <div class="form-inline">
        <label class=""><input type="checkbox" name="newsletter"> Subscribe to newsletter</label>
        <label class=""><input type="checkbox" name="updates" checked> Product updates</label>
      </div>
    </div>
    <div class="mb-4">
      <label class="">Account Type</label>
      <div class="form-inline">
        <label class=""><input type="radio" name="account" value="personal" checked> Personal</label>
        <label class=""><input type="radio" name="account" value="business"> Business</label>
      </div>
    </div>
    <div class="mb-4">
      <label class="switch">
        <input type="checkbox" name="notifications" checked>
        <span class="slider"></span>
        Enable Notifications
      </label>
    </div>
    <div class="mb-4">
      <label for="volume">Volume</label>
      <input type="range" id="volume" name="volume" min="0" max="100" value="50">
    </div>
    <div class="mb-4">
      <label for="avatar">Avatar</label>
      <input type="file" id="avatar" name="avatar">
    </div>
    <div class="mb-4">
      <label for="address">Address (Disabled)</label>
      <input type="text" id="address" name="address" value="123 Demo St" disabled>
    </div>
    <div class="form-inline">
        <div class="mb-4">
          <label for="Inline1">Inline1</label>
          <input type="text" id="Inline1" name="Inline1">
        </div>
        <div class="mb-4">
          <label for="Inline2">Inline2</label>
          <input type="text" id="Inline2" name="Inline2">
        </div>
    </div>
    <div class="mb-4">
      <label for="search-group">Input Group</label>
      <div class="input-group">
        <input type="text" id="search-group" placeholder="Search...">
        <button type="button" class="btn btn-primary">Go</button>
      </div>
    </div>
    <div class="mb-4">
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-secondary">Reset</button>
    </div>
  </form>
</div>

**Usage:**
```html
<form class="card p-5">
  <div class="mb-4">
    <label for="name" class="required">Name</label>
    <input type="text" id="name" name="name" placeholder="Your full name" required>
  </div>

  <div class="mb-4">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="you@example.com">
  </div>

  <div class="mb-4">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="••••••••">
  </div>

  <div class="mb-4">
    <label for="bio">Bio</label>
    <textarea id="bio" name="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
  </div>

  <div class="mb-4">
    <label for="role">Role</label>
    <select id="role" name="role">
      <option value="">Select role...</option>
      <option value="designer">Designer</option>
      <option value="developer">Developer</option>
      <option value="pm">Product Manager</option>
    </select>
  </div>

  <div class="mb-4">
    <label class="">Preferences</label>
    <div class="form-inline">
      <label class=""><input type="checkbox" name="newsletter"> Subscribe to newsletter</label>
      <label class=""><input type="checkbox" name="updates" checked> Product updates</label>
    </div>
  </div>

  <div class="mb-4">
    <label class="">Account Type</label>
    <div class="form-inline">
      <label class=""><input type="radio" name="account" value="personal" checked> Personal</label>
      <label class=""><input type="radio" name="account" value="business"> Business</label>
    </div>
  </div>

  <div class="mb-4">
    <label class="switch">
      <input type="checkbox" name="notifications" checked>
      <span class="slider"></span>
      Enable Notifications
    </label>
  </div>

  <div class="mb-4">
    <label for="volume">Volume</label>
    <input type="range" id="volume" name="volume" min="0" max="100" value="50">
  </div>

  <div class="mb-4">
    <label for="avatar">Avatar</label>
    <input type="file" id="avatar" name="avatar">
  </div>

  <div class="mb-4">
    <label for="address">Address (Disabled)</label>
    <input type="text" id="address" name="address" value="123 Demo St" disabled>
  </div>

  <div class="form-inline">
      <div class="mb-4">
        <label for="Inline1">Inline1</label>
        <input type="text" id="Inline1" name="Inline1">
      </div>
      <div class="mb-4">
        <label for="Inline2">Inline2</label>
        <input type="text" id="Inline2" name="Inline2">
      </div>
  </div>

  <div class="mb-4">
    <label for="search-group">Input Group</label>
    <div class="input-group">
      <input type="text" id="search-group" placeholder="Search...">
      <button type="button" class="btn btn-primary">Go</button>
    </div>
  </div>

  <div class="mb-4">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="reset" class="btn btn-secondary">Reset</button>
  </div>
</form>
```

**Customization:**
- Style with utility classes or override variables

---