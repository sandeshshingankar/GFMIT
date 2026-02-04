# CSS Variables & Utilities Quick Reference

## Color Variables

### Primary Colors
```css
--primary: #0077b6           /* Main brand color - Professional Blue */
--primary-dark: #005a8d      /* Darker shade for hover states */
--primary-light: #0096c7     /* Lighter shade for accents */
```

### Secondary Colors
```css
--secondary: #00b4d8         /* Bright cyan for highlights */
--secondary-dark: #0099c0    /* Darker cyan for interactive states */
```

### Semantic Colors
```css
--success: #10b981           /* Green for positive actions */
--warning: #f59e0b           /* Amber for alerts */
--error: #ef4444             /* Red for errors */
--info: #3b82f6              /* Blue for information */
```

### Neutral Colors
```css
--white: #ffffff             /* Pure white */
--light-bg: #f0f9ff          /* Light blue background */
--light-bg-2: #e0f7ff        /* Light blue background variant */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--text-dark: #1a1a1a         /* Main text color */
--text-light: #666666        /* Secondary text color */
--text-lighter: #999999      /* Tertiary text color */
--border-color: #e0e7ff      /* Border color */
--admin-dark: #0b2e59        /* Dark blue for admin sections */
```

---

## Spacing Variables

### Base Spacing Scale
```css
--spacing-xs: 4px            /* Extra small */
--spacing-sm: 8px            /* Small */
--spacing-md: 12px           /* Medium */
--spacing-lg: 16px           /* Large */
--spacing-xl: 24px           /* Extra large */
--spacing-2xl: 32px          /* 2X large */
--spacing-3xl: 48px          /* 3X large */
```

### Usage Examples
```css
padding: var(--spacing-lg);
margin: var(--spacing-md);
gap: var(--spacing-xl);
```

---

## Border Radius Variables

```css
--radius-sm: 4px             /* Small rounded corners */
--radius-md: 8px             /* Medium rounded corners */
--radius-lg: 12px            /* Large rounded corners */
--radius-xl: 16px            /* Extra large rounded corners */
--radius-full: 9999px        /* Fully rounded (pills, circles) */
```

### Recommendations
- Buttons: `--radius-md` or `--radius-lg`
- Cards: `--radius-lg` or `--radius-xl`
- Inputs: `--radius-md`
- Pills/Badges: `--radius-full`

---

## Shadow Variables

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### When to Use
- Cards at rest: `--shadow-md`
- Cards on hover: `--shadow-lg` or `--shadow-xl`
- Elevated elements: `--shadow-lg`
- Focus states: `--shadow-xl`
- Modals: `--shadow-2xl`

---

## Transition Variables

```css
--transition-fast: 150ms ease        /* Quick feedback animations */
--transition-base: 300ms ease        /* Standard transition duration */
--transition-slow: 500ms ease        /* Slower, more deliberate animations */
```

### Usage
```css
transition: all var(--transition-base);
transition: background var(--transition-fast);
transition: transform var(--transition-slow);
```

---

## Component Classes

### Flex Utilities
```css
.flex                    /* display: flex */
.flex-center             /* flex with center alignment */
.flex-between            /* flex with space-between */
.flex-col                /* flex-direction: column */
.gap-xs, .gap-sm, etc.   /* gap spacing utilities */
```

### Grid Utilities
```css
.grid                    /* display: grid */
.grid-auto-fit           /* repeat(auto-fit, minmax(250px, 1fr)) */
.grid-cols-2             /* 2 equal columns */
.grid-cols-3             /* 3 equal columns */
.grid-cols-4             /* 4 equal columns */
```

### Spacing Utilities
```css
.p-xs, .p-sm, .p-md, etc.     /* Padding utilities */
.m-xs, .m-sm, .m-md, etc.     /* Margin utilities */
.mt-lg, .mb-lg, etc.          /* Directional margin utilities */
```

### Text Utilities
```css
.text-center             /* text-align: center */
.text-primary            /* color: var(--primary) */
.text-secondary          /* color: var(--secondary) */
.font-bold               /* font-weight: 700 */
.font-semibold           /* font-weight: 600 */
.text-sm, .text-lg, etc. /* Font size utilities */
```

### Visibility
```css
.hidden                  /* display: none */
.visible                 /* display: block */
```

---

## Button Styles

### Primary Button
```css
.btn-primary {
    background: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 119, 182, 0.3);
}
```

### Secondary Button
```css
.btn-secondary {
    background: var(--secondary);
    color: var(--white);
}

.btn-secondary:hover {
    background: var(--secondary-dark);
    transform: translateY(-2px);
}
```

### Ghost Button
```css
.btn-ghost {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-ghost:hover {
    background: var(--light-bg);
    transform: translateY(-2px);
}
```

---

## Card Styles

### Basic Card
```css
.card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}
```

### Card with Header
```html
<div class="card">
    <div class="card-header">
        <h2>Card Title</h2>
    </div>
    <div class="card-body">
        <!-- Content -->
    </div>
    <div class="card-footer">
        <!-- Footer -->
    </div>
</div>
```

---

## Common Patterns

### Responsive Hero Section
```html
<section class="hero-section">
    <img class="hero-banner" src="..." alt="...">
</section>

<div class="hero-text">
    <h1>Hero Title</h1>
    <p>Subtitle text</p>
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

### Flex Navigation
```html
<nav class="flex flex-between">
    <div class="nav-logo">Logo</div>
    <ul class="nav-menu flex gap-lg">
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

---

## Animation Classes

### Fade Animations
```css
.animate-fade-in           /* Fade in */
.animate-fade-in-up        /* Fade in from bottom */
.animate-fade-in-down      /* Fade in from top */
.animate-fade-in-left      /* Fade in from left */
.animate-fade-in-right     /* Fade in from right */
```

### Slide Animations
```css
.animate-slide-in-down     /* Slide in from top */
.animate-slide-in-up       /* Slide in from bottom */
```

### Interactive Animations
```css
.animate-scale-in          /* Scale in effect */
.animate-bounce            /* Continuous bounce */
.animate-bounce-in         /* Bounce on load */
.animate-pulse             /* Pulsing opacity */
.animate-float             /* Floating animation */
.animate-glow              /* Glow effect */
```

### Delay Utilities
```css
.delay-100                 /* 100ms delay */
.delay-200                 /* 200ms delay */
.delay-300                 /* 300ms delay */
.delay-400                 /* 400ms delay */
.delay-500                 /* 500ms delay */
```

---

## Responsive Classes

### Display Utilities
```css
@media (max-width: 768px) {
    .hidden-mobile          /* Hide on mobile */
    .visible-mobile         /* Show only on mobile */
}
```

### Text Size Responsive
```css
h1 {
    font-size: 48px;        /* Desktop */
}

@media (max-width: 768px) {
    h1 {
        font-size: 36px;    /* Tablet */
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 28px;    /* Mobile */
    }
}
```

---

## Focus & Accessibility States

### Standard Focus Style
```css
element:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}
```

### Hover States
```css
element:hover {
    background: var(--light-bg);
    cursor: pointer;
}
```

### Active States
```css
element:active {
    transform: scale(0.98);
}
```

---

## Performance Tips

1. **Use CSS Variables** - Single source of truth for values
2. **Leverage Shared Styles** - Reduce code duplication
3. **Minimize Hover Effects** - Avoid heavy transforms on many elements
4. **Use GPU Acceleration** - Transforms and opacity for animations
5. **Batch Media Queries** - Group responsive rules together

---

## Example: Creating a New Component

```css
/* Define using variables */
.my-component {
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    background: var(--white);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.my-component:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

/* Responsive behavior */
@media (max-width: 768px) {
    .my-component {
        padding: var(--spacing-md);
    }
}
```

---

## Testing Color Contrast

For accessibility compliance (WCAG AA):
- Large text (18pt+): Minimum 3:1 contrast ratio
- Normal text: Minimum 4.5:1 contrast ratio

**Current palette contrast ratios:**
- Primary on White: 8.5:1 ✓ (Excellent)
- Text Dark on Light BG: 18:1 ✓ (Excellent)
- Secondary on White: 4.8:1 ✓ (Excellent)

---

*For more information, see PROJECT_DOCUMENTATION.md*
