## darkOrLight.js

Check element background, this script will determines the element is dark, or light. And it will gives dark, or light class; or your custom class.

<1KB, no jQuery-needed.

### Usage

```js
darkOrLight(selector, dark, light);
```

- **selector:** (Required) Checked element.
- **dark:** (Optional) Default: *dark*. Custom class for dark element(s).
- **light:** (Optional) Default: *light*. Custom class for light element(s).

#### Example
```html
<script src="path/to/darkOrLight.min.js"></script>
<script>
    darkOrLight(document.getElementById('nav-bar'));
</script>
```

Resulting `<div id="nav-bar" class="dark">` if dark, or `<div id="nav-bar" class="light">` if light.

NodeList selector? No problem.

```js
darkOrLight(document.querySelectorAll('div, span'));
```

You can also give custom class:
```js
darkOrLight(document.getElementById('nav-bar'), null, 'hide')
```

This will gives `<div id="nav-bar" class="hide">` if its background is light, and default `dark` class if dark.