# Quick Reference Guide - IT Department GFM System

## File Linking Guide

Copy this into the `<head>` of every page:

```html
<!-- Unified Design System -->
<link rel="stylesheet" href="shared-styles.css">
<link rel="stylesheet" href="animations.css">
<link rel="stylesheet" href="navbar.css">
<link rel="stylesheet" href="footer.css">

<!-- Page-Specific Styles -->
<link rel="stylesheet" href="[page-name].css">

<!-- Font Awesome for Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

---

## Common Components

### Navigation Bar
```html
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="nav-back">← Back</a>
        <h1 class="nav-title">Page Title</h1>
        <div></div>
    </div>
</nav>
```

### Hero Section
```html
<header class="hero-section">
    <img class="hero-banner" src="banner.png" alt="Banner">
</header>

<section class="hero-text">
    <h1>Hero Title</h1>
    <p>Subtitle text</p>
</section>
```

### Footer
```html
<footer class="footer">
    <div class="footer-top">
        © Copyright 2026 | NMIET Institute | All Rights Reserved | Credits
    </div>
    <div class="footer-bottom">
        <p>Our Team</p>
        <div class="team-social">
            <div class="member">
                <span>Name</span>
                <a href="github-url" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="linkedin-url" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    <button class="scroll-top" onclick="scrollToTop()" aria-label="Scroll to top">↑</button>
</footer>
<script src="scroll-to-top.js"></script>
```

---

## Button Styles

### Primary (Blue)
```html
<button class="btn-primary">Click Me</button>
<a href="#" class="btn-primary">Link Button</a>
```

### Secondary (Cyan)
```html
<button class="btn-secondary">Click Me</button>
```

### Ghost (Outlined)
```html
<button class="btn-ghost">Click Me</button>
```

---

## Card Layouts

### Basic Card
```html
<div class="card">
    <div class="card-header">
        <h2>Card Title</h2>
    </div>
    <div class="card-body">
        Content goes here
    </div>
    <div class="card-footer">
        Footer content
    </div>
</div>
```

### Grid of Cards
```html
<div class="grid-auto-fit">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

### 2-Column Grid
```html
<div class="grid-cols-2">
    <div class="card">Column 1</div>
    <div class="card">Column 2</div>
</div>
```

---

## Layout Utilities

### Flexbox Layouts
```html
<!-- Centered -->
<div class="flex-center">
    <p>Centered content</p>
</div>

<!-- Space Between -->
<div class="flex-between">
    <span>Left</span>
    <span>Right</span>
</div>

<!-- Column Direction -->
<div class="flex flex-col gap-lg">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### Spacing
```html
<!-- Padding -->
<div class="p-lg">Content with padding</div>

<!-- Margin -->
<div class="m-xl">Content with margin</div>

<!-- Gap (in flex/grid) -->
<div class="flex gap-md">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

---

## Text Utilities

### Alignment
```html
<p class="text-center">Centered text</p>
<p class="text-left">Left aligned text</p>
<p class="text-right">Right aligned text</p>
```

### Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text (green)</p>
<p class="text-warning">Warning text (amber)</p>
<p class="text-error">Error text (red)</p>
<p class="text-light">Light gray text</p>
```

### Font Sizes
```html
<p class="text-sm">Small text (14px)</p>
<p class="text-base">Base text (16px)</p>
<p class="text-lg">Large text (18px)</p>
<p class="text-xl">XL text (20px)</p>
<p class="text-2xl">2XL text (24px)</p>
```

### Font Weights
```html
<p class="font-bold">Bold text (700)</p>
<p class="font-semibold">Semibold text (600)</p>
<p class="font-medium">Medium text (500)</p>
```

---

## Animations

### On Load Animations
```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-fade-in-up">Fade in from bottom</div>
<div class="animate-fade-in-down">Fade in from top</div>
<div class="animate-slide-in-down">Slide in from top</div>
<div class="animate-scale-in">Scale in</div>
```

### Continuous Animations
```html
<div class="animate-bounce">Bouncing element</div>
<div class="animate-pulse">Pulsing element</div>
<div class="animate-float">Floating element</div>
<div class="animate-spin">Spinning element</div>
<div class="animate-glow">Glowing text</div>
```

### With Delays
```html
<div class="animate-fade-in-up delay-200">Delayed 200ms</div>
<div class="animate-fade-in-up delay-400">Delayed 400ms</div>
```

---

## Color Palette

```
Primary Blue:        #0077b6  (Main brand color)
Primary Dark:        #005a8d  (Hover state)
Primary Light:       #0096c7  (Accent)
Secondary Cyan:      #00b4d8  (Highlights)

Success (Green):     #10b981
Warning (Amber):     #f59e0b
Error (Red):         #ef4444
Info (Blue):         #3b82f6

White:               #ffffff
Light Background:    #f0f9ff
Light Bg 2:          #e0f7ff
Text Dark:           #1a1a1a
Text Light:          #666666
Border:              #e0e7ff
```

---

## Spacing Scale

```
Extra Small:   4px   (.spacing-xs)
Small:         8px   (.spacing-sm)
Medium:        12px  (.spacing-md)
Large:         16px  (.spacing-lg)
XLarge:        24px  (.spacing-xl)
2XLarge:       32px  (.spacing-2xl)
3XLarge:       48px  (.spacing-3xl)
```

---

## Responsive Breakpoints

```
Mobile:   0px - 480px    (Small phones)
Tablet:   481px - 768px  (Tablets)
Desktop:  769px+         (Desktops & laptops)
```

### Using Media Queries
```css
/* Default: Mobile first */
.element {
    font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .element {
        font-size: 16px;
    }
}

/* Desktop and up */
@media (min-width: 1200px) {
    .element {
        font-size: 18px;
    }
}
```

---

## Common Patterns

### Profile Card
```html
<div class="card">
    <img src="profile.jpg" alt="Person" class="profile-image">
    <h2>John Doe</h2>
    <p class="text-light">Job Title</p>
</div>
```

### Stat Card
```html
<div class="card">
    <div class="stat-icon">📊</div>
    <h3>Stat Label</h3>
    <p class="stat-number">1,234</p>
</div>
```

### Feature Grid
```html
<div class="grid-auto-fit">
    <div class="card">
        <div class="card-icon">🎯</div>
        <h3>Feature</h3>
        <p>Description</p>
    </div>
    <!-- Repeat for more cards -->
</div>
```

### Navigation List
```html
<nav class="flex flex-col gap-lg">
    <a href="#" class="text-primary">Link 1</a>
    <a href="#" class="text-primary">Link 2</a>
    <a href="#" class="text-primary">Link 3</a>
</nav>
```

---

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Headings are in proper order (h1 → h6)
- [ ] Interactive elements have focus states
- [ ] Color not the only way to convey information
- [ ] Minimum 44px touch targets on mobile
- [ ] Links have descriptive text
- [ ] Form labels associated with inputs
- [ ] ARIA labels on custom components

---

## Performance Tips

1. **Use Shared Styles** - Always link shared-styles.css
2. **Minimize Custom CSS** - Use utility classes instead
3. **Optimize Images** - Compress before uploading
4. **Lazy Load Images** - Use loading="lazy" attribute
5. **Defer Non-Critical CSS** - Load animations.css with preload
6. **Cache Static Files** - Browser caching for CSS/JS
7. **Minify Production CSS** - Remove comments and whitespace
8. **Use CSS Variables** - Single update affects all pages

---

## Troubleshooting

### Styles Not Applying?
```html
<!-- Check order - shared styles FIRST -->
<link rel="stylesheet" href="shared-styles.css">
<link rel="stylesheet" href="animations.css">
<link rel="stylesheet" href="navbar.css">
<link rel="stylesheet" href="[page].css">
```

### Colors Looks Different?
- Check if correct color variable is used
- Verify browser zoom is at 100%
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different browser

### Animations Not Smooth?
- Check if GPU acceleration properties used (transform, opacity)
- Avoid animating width/height directly
- Use will-change sparingly
- Test on target devices

### Not Responsive?
- Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test with browser dev tools device emulation
- Check media query breakpoints are correct
- Ensure images are responsive (max-width: 100%)

---

## Useful Links

- **Font Awesome Icons**: https://fontawesome.com/icons
- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Web Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/
- **Google Fonts**: https://fonts.google.com

---

## Contact & Support

For questions about the design system:
1. Check PROJECT_DOCUMENTATION.md
2. Review CSS_GUIDE.md for variables
3. See INTEGRATION_SUMMARY.md for overview
4. Check specific page CSS files for implementations

---

**Last Updated:** February 2026
**Version:** 1.0
**Status:** Production Ready
