# Theming

Lightpack CSS supports full theming using CSS custom properties without any need to depend on tools like Less, Sass, PostCSS, etc.

## Default Theme
All colors, typography, spacing, etc. use variables from `:root`.

## Dark Mode
- Activated by adding `.theme-dark` to `<body>`.
- All semantic color variables are overridden for dark backgrounds, text, and UI.
- See `/src/css/_variables.css` for exact overrides.

## Theme Switching (JS)
- Use `Lightpack.toggleTheme()` in JS to switch themes and persist preference.

<div class="demo-container">
  <button class="btn btn-primary btn-outline" onclick="Lightpack.toggleTheme()">Toggle</button>
</div>

**Usage**
```html
  <button onclick="Lightpack.toggleTheme()">Toggle</button>
```

## Custom Themes
- Create your own theme class (e.g. `.theme-brand`) and override semantic variables.

```css
.theme-brand {
  --color-primary: #FF5722;
  --color-background: #1a1a1a;
  --color-text: #fff;
}
```

## Usage
```html
<body class="theme-dark">
  ...
</body>
``` 

---