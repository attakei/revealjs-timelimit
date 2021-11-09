# revealjs-timelimit

## Overview

This is Reveal.js plugin to interrupt presentations forcely when time is over.

This is possible to jump for special section if you are arrived time-limit in speaking at "lightning-talks".

## Demo

Hosing at GitHub Pages

* [English](https://attakei.github.io/revealjs-timelimit/index-en.html)
* [Japanese](https://attakei.github.io/revealjs-timelimit/index-ja.html)

## Usage

Currently, there are bundled files hosted in GitHub Pages.

When your presentation showing progress 5 minutes, move for special section displaying "TIME IS OVER!!".

### Simple style

```html
  <script src="https://attakei.github.io/revealjs-timelimit/timelimit.min.js"></script>
  <script>
    Reveal.initialize({
      plugins: [ RevealTimelimit ]
    });
  </script>
```

### ES Module style

```html
  <script type="module">
    import Reveal from "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.2/reveal.esm.min.js";
    import Timelimit from "https://attakei.github.io/revealjs-timelimit/timelimit.esm.js";
    Reveal.initialize({
      plugins: [ Timelimit ]
    });
  </script>
```


## License

Apache-2.0 license. Please see [LICENSE](./LICENSE).
