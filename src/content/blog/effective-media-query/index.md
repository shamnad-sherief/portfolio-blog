---
title: "Flutter Responsiveness: Stop Overusing MediaQuery"
description: "Why constraints and built-in widgets are often better than MediaQuery for a natural, responsive UI."
date: "Sep 02 2024"
---

Responsiveness in Flutter is often misunderstood. Many developers immediately reach for `MediaQuery` or fractional scaling packages (like `sizer`) to make their apps "responsive." In reality, this often leads to UI that looks bloated on tablets and breaks the natural feel of the platform.

### The Fractional Scaling Trap

Fractional scaling attempts to keep everything the same relative size across all devices. On a tablet, this results in massive text, giant buttons, and huge app bars. It ignores the fact that bigger displays are meant to show **more content**, not the same content larger.

### Flutter’s Secret: Logical Pixels

Flutter (and native platforms) use **logical pixels**. A 14px font or a 16px padding will have a similar physical size regardless of whether it's on an iPhone 13 or an iPad Pro. Trust the framework; it handles the base scaling for you.

### Build with Constraints, Not Screen Sizes

Most "overflow" errors aren't caused by static sizes, but by a lack of constraints. Instead of calculating widths with `MediaQuery.of(context).size.width * 0.8`, use the built-in layout protocol:

1.  **`Flexible` and `Expanded`**: Wrap your `Row` or `Column` children. This tells Flutter how to distribute remaining space without hardcoding percentages.
2.  **`LayoutBuilder`**: If you need to change your layout based on available space (e.g., showing a sidebar only on wide screens), use `LayoutBuilder`. It child-sizes based on **parent constraints**, making your widgets truly modular.
3.  **`Wrap`**: Instead of a Row that overflows, use `Wrap` to automatically flow items to the next line.
4.  **`AspectRatio`**: Prevent images or containers from being "smushed" by fixing their ratio, not their hardcoded height.

### When to actually use MediaQuery?

`MediaQuery` is still useful for top-level decisions:
*   Deciding between a `MobileLayout` and a `TabletLayout`.
*   Accessing system `viewPadding` (Safe Area) or `viewInsets` (Keyboard).
*   Checking for system-wide text scaling or dark mode.

Stop trying to force your UI into percentages. **Constraints are king.**

---

*Shamnad Sherief - Product Engineer*