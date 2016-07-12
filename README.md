# Proposal: The CSS `:=` reference selector
This is a proposal for CSS attribute selectors that reference other elements.
Here's the proposed form:

```
[attr:=selector]
```

where `attr` is an attribute name, and `selector` is a [simple selector].
Here are some examples:

```css
/* any <label> that references a <select> */
[for:=select] { }

/* any element that controls a menu */
[aria-controls:=menu] {}

/* any element labeled by a tooltip role */
[aria-labelledby:=[role=tooltip]] { }
```

## Rationale
Here's why this is useful:

1. Styling accessible forms that use `<label>` elements and the `for`
   attribute would be much more straightforward, because styles could be
   tailored for labels of different types of inputs without the need for any
   additional markup or classes. E.g.:

   ```html
   <label for="name-input">What is your name?</label>
   <input id="name-input" name="name">
   
   <label for="color-input">What is your favorite color?</label>
   <select id="color-input" name="color">
     <option>Green</option>
     <option>Blue</option>
     <option>Yellow</option>
   </select>
   ```
   
1. When using [ARIA attributes][ARIA] such as `aria-controls` and
   `aria-labelledby`, it would be nice to be able to style those elements
   that reference **specific types of other elements**, so that you could
   apply styles to, say:

  * any `<button>` that [controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls) a `<menu>`
  * any element that is [labeled by](https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby) an element with `aria-role="tooltip"`

If you have thoughts or can help me articulate situations in which this
would be useful, please [file an issue](issues/).

[ARIA]: https://www.w3.org/TR/wai-aria/
[simple selector]: https://www.w3.org/TR/selectors/#simple-selectors
