# rainbow

:rainbow: :rainbow: 2020-09-08 Upleveled Rainbow Color Generator :rainbow: :rainbow:

Great Way to generate randomly colored squares in the console.
Github repository: https://github.com/thorinaboenke/rainbow
Repl Link:
[![Run on Repl.it](https://repl.it/badge/github/thorinaboenke/rainbow)](https://repl.it/@thorinaboenke/rainbow-2#.replit)

TO RUN:

```sh
$ node index.js
```

will generate a square of a random color labelled with the colors hex code.

Accepts the following user arguments

```sh
$ node index.js <color> <hue>
```

{color:['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']
hue: ['light', 'dark']}

```sh
$ node index.js ask
```

prompts the user to enter hue and color.

Dimensions of the square can optionally be enteres as a first argument in the format
Width x Height <WWxHH>

```sh
$ node index.js <WWxHH>
```
