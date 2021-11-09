# Demo of revealjs-timelimit

**EN** / [JA](./index-ja.html)



## Important

When 5 minutes advance from you showing this section, this moves forcely to special section displaying "TIME IS OVER!!".



## Overview

Description about `revealjs-timelimit`


### What is `revealjs-timelimit`?

A plugin for Reveal.js (HTML5 Presentation framework)

It provides only one feature:

> when it arrived time limit, shut out presentation forcely


### Details

Whe you use this plugin, it add these behaviors for reveal.js.

1. Catch about moving section as start presentation, and start timer.
1. When it arrived specified time, call one function.
1. Function creates special section about shutdown and move to it forcely.


### Supplement

* If you arrive last of slides by yourself, function is not called.
* If function is called, you can move other section by regular operations.


### Use case?

* You want to experience about time limit of lightning-talks.
* You want to performance about presentation having time limit and shutdown.



## Usage

About using revealjs-timelimit


### Hosting about

Currently, bundled-style files are hosting only in GitHub and GitHub Pages.
You can use it directly.

Please see [this page](https://github.com/attakei/revealjs-timelimit/tree/gh-pages).



### Standard usage

```html
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.min.js"></script>
<script src="https://attakei.github.io/revealjs-timelimit/timelimit.min.js"></script>
<script>
Reveal.initialize({
  plugins: [ RevealTimelimit ],
});
</script>
```


### ES Module styled usage

```html
<script type="module">
import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.min.js";
import RevealTimelimit from "https://attakei.github.io/revealjs-timelimit/timelimit.js";

Reveal.initialize({
  plugins: [ RevealTimelimit ],
});
</script>
```


### Configuration

This is under construction.

You will be able to use `timelimit` key in calling `Reveal.initialize`.



## Conclusion

> Info: Next slide is last of presentation. After going next, you don't see "TIME IS OVER!!"

You can get means about actings having time limit in Reveal.js.

Please use your presentation!



### Finishsed

https://github.com/attakei/revealjs-timelimit

https://attakei.net
