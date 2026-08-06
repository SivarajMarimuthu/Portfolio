# Portfolio Testing Checklist

Use this checklist during the first bug-review pass.

## Desktop

- Header remains visible while scrolling.
- Every navigation link reaches the correct section.
- All four project cards open their matching case studies.
- LinkedIn and GitHub open in a new tab.
- Resume downloads as a DOCX file.
- No text overlaps or horizontal scrolling.

## Mobile

Test at approximately 375 px and 430 px widths.

- Menu opens and every link is usable.
- Hero text does not overlap the diagonal illustration.
- Buttons use the full available width.
- Project cards appear in one column.
- Service rows, experience and skills remain readable.
- Case-study contents and outcome blocks stack cleanly.

## Routes

- `/`
- `/work/retail-in-shop-platform`
- `/work/game-center-pos`
- `/work/python-business-automation`
- `/work/grocery-ecommerce-marketplace`

## Quality commands

```cmd
npm run lint
npm run build
```

## Bug report format

When reporting a bug, send:

1. Page or route
2. Desktop or mobile
3. Browser and approximate screen width
4. What you expected
5. What happened
6. Screenshot and terminal error, if available

