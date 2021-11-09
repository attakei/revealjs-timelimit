# revealjs-timelimit デモ

[EN](./index-en.html) / **JA**



## 注意書き

5分経過すると強制的に `TIME IS OVER!!` とだけ表示されたセクションに強制ジャンプします。

それまでの間、のんびりプラグインの紹介を読んでください。



## 概要

`revealjs-timelimit` について


### revealjs-timelimitとは

プレゼンテーションライブラリ `Reveal.js` のプラグイン
（サードパーティ製の拡張機能）

簡単に説明すると

> 制限時間が来るとプレゼンテーションを強制終了させる

機能を提供します。


### 具体的には...

このプラグインを有効にすると、次の振る舞いを追加します。

1. 最初のスライド移動をトリガーにタイマー起動
1. スライドの進行状況に関わらず、タイマー起動から指定時間経過で機能発動
1. 機能発動すると、「強制終了」を示すスライドを用意して、強制移動


### 仕様の補足として

* 本来の最終スライドに到達した場合は、機能は発動しません
* 機能が発動しても、通常の操作でスライドの移動は可能です


### どんなシーンに使うか

* 「時間制限」を、よりストイックに体感したいとき
* やや緩めのLT会などで、自発的に制限時間によるシャットアウトをしたいとき

= 緊張感のあるトークをしてみたい方向け



## 実際の使い方

ここからは、どうやって使うかの説明をします


### プラグインの場所

現時点では、GitHub Pagesにバンドル済みのものが存在するため、これを直接利用するのが簡単です。

[こちらのページ](https://github.com/attakei/revealjs-timelimit/tree/gh-pages)を参照してください。

※以降は、ホスティングされたURLで説明します


### クラシックなスタイルでの利用法

```html
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.min.js"></script>
<script src="https://attakei.github.io/revealjs-timelimit/timelimit.min.js"></script>
<script>
Reveal.initialize({
  plugins: [ RevealTimelimit ],
});
</script>
```


### ESModuleベースの利用法

```html
<script type="module">
import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.min.js";
import RevealTimelimit from "https://attakei.github.io/revealjs-timelimit/timelimit.js";

Reveal.initialize({
  plugins: [ RevealTimelimit ],
});
</script>
```


### 設定

`Reveal.initialize`時に、`timelimit`というオプションで設定を変更できます。

```javascript
Reveal.initialize({
  plugins: [ RevealTimelimit ],
  timelimit: {
    // 強制終了になった際に、表示するメッセージ
    // デフォルトでは、"TIME IS OVER!!"という内容になっています
    content: "強制終了！",
    // 強制終了までの時間を秒単位で設定できます
    // デフォルトでは、 300 = 5分が設定されています
    timeout: 600,
  },
});
```


## まとめ


### プラグインの紹介・デモをお送りしています

※このスライドの次が最終スライドです。次に進むと機能は発動しません

このスライドを利用することで、タイマーなどがない環境でも容赦のないLTを再現できます。
自主的にLTへの緊張感を持たせたい方は、ぜひ使ってみてください


### おわり

https://github.com/attakei/revealjs-timelimit

https://attakei.net
