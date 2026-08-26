# Screenshot slots

Drop PNG files here and the site picks them up automatically — no HTML changes needed.

## "See it on a real phone" section (bottom of the page)

| File | Caption on the page |
|------|---------------------|
| `screen-1.png` | Swipe through infinite wallpapers |
| `screen-2.png` | Browse 110+ patterns |
| `screen-3.png` | Pick styles & build palettes |

Portrait phone screenshots, any modern resolution (e.g. 1080×2400 or 1290×2796).
Until a file exists, its frame shows a dashed "Screenshot coming soon" placeholder.

## Story phone overrides (optional)

The scrolling phone in the middle of the page renders live generative art by
default. To show a real app screenshot during a specific story step instead,
add:

| File | Story step |
|------|-----------|
| `step-0.png` | Created, not downloaded |
| `step-1.png` | 110+ patterns |
| `step-2.png` | 14 styles · 1000+ palettes |
| `step-3.png` | Gestures |
| `step-4.png` | Automatic / AMOLED |
| `step-5.png` | Private by design |

Missing files are simply skipped (the generative art stays).
