documentready.js
================

It's just same as jQuery's `$(document).ready(init)`.

#### usage

```html
<script type="text/javascript" src="path/to/documentready.js"></script>
```

```javascript
documentReady(function () {
    /* some initializations */
});
```

It's intended to be a part of a large application which is sensitive about script size and doesn't want to include jQuery or Zepto in it.
