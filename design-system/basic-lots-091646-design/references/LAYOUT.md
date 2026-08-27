# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 16, 20, 22, 24, 30, 40, 44, 48, 50` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `main.framer-1n1z6hi` | column | center | center | 10px | 7 |
| `nav.framer-HdeBz.framer-3C8PO` | column | center | center | 10px | 1 |
| `footer.framer-soKIl.framer-R6rCf` | row | center | center | 10px | 2 |
| `section.framer-lcc4ld` | column | center | center | 10px | 1 |
| `section#services.framer-1bgnipk` | row | center | center | 10px | 1 |
| `section.framer-1ut795m` | row | center | center | 10px | 1 |
| `section.framer-1nq91on` | row | center | center | 10px | 1 |
| `section.framer-141no99` | row | center | center | 10px | 1 |
| `section#contact.framer-9u1bc5` | row | center | center | 10px | 1 |
| `section#hero-section.framer-1dddyte` | row | center | center | 10px | 1 |
| `section#bio-section.framer-m00iei` | row | center | end | 10px | 1 |
| `div.framer-form-text-input.framer-form-input-wrapper` | row | — | center | — | 1 |
| `div.framer-form-text-input.framer-form-input-wrapper` | row | — | center | — | 1 |
| `div.framer-form-text-input.framer-form-input-wrapper` | row | — | center | — | 1 |

## Structural Containers

### `<main>` (`main.framer-1n1z6hi`)

```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
gap:              10px
children:         7
```

### `<nav>` (`nav.framer-HdeBz.framer-3C8PO`)

```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
gap:              10px
children:         1
```

### `<footer>` (`footer.framer-soKIl.framer-R6rCf`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
padding:          120px 0px 300px
children:         2
```

### `<section>` (`section.framer-lcc4ld`)

```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
gap:              10px
children:         1
```

### `<section>` (`section#services.framer-1bgnipk`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
children:         1
```

### `<section>` (`section.framer-1ut795m`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
padding:          120px 0px 0px
children:         1
```

### `<section>` (`section.framer-1nq91on`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
padding:          120px 0px 0px
children:         1
```

### `<section>` (`section.framer-141no99`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
padding:          120px 0px 0px
children:         1
```

### `<section>` (`section#contact.framer-9u1bc5`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
padding:          120px 0px
children:         1
```

### `<section>` (`section#hero-section.framer-1dddyte`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      center
gap:              10px
children:         1
```

### `<section>` (`section#bio-section.framer-m00iei`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      end
gap:              10px
children:         1
```

## Layout Rules

- **Container max-width:** `840px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

