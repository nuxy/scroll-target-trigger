# Scroll Target Trigger

[![npm version](https://badge.fury.io/js/scroll-target-trigger.svg)](https://badge.fury.io/js/scroll-target-trigger) [![](https://img.shields.io/npm/dm/scroll-target-trigger)](https://www.npmjs.com/package/scroll-target-trigger) [![Build Status](https://img.shields.io/github/actions/workflow/status/nuxy/scroll-target-trigger/.github%2Fworkflows%2Fci.yml)](https://github.com/nuxy/scroll-target-trigger/actions) [![Install size](https://packagephobia.com/badge?p=scroll-target-trigger)](https://packagephobia.com/result?p=scroll-target-trigger) [![](https://img.shields.io/github/v/release/nuxy/scroll-target-trigger)](https://github.com/nuxy/scroll-target-trigger/releases) [![NO AI](https://raw.githubusercontent.com/nuxy/no-ai-badge/master/badge.svg)](https://github.com/nuxy/no-ai-badge)

Lightweight, dependency free, scroll event methods.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Install the package into your project using [NPM](https://npmjs.com), or download the [sources](https://github.com/nuxy/scroll-target-trigger/archive/master.zip).

    $ npm install scroll-target-trigger

## Usage

There are two ways you can use this package.  One is by including the JavaScript source directly.  The other is by importing the module into your component.

### Script include

After you [build the distribution sources](#cli-options) the set-up is fairly simple..

```html
<script type="text/javascript" src="path/to/scroll-target-trigger.min.js"></script>

<script type="text/javascript">
  scrollTargetTrigger(element | position, callback).trigger(threshold);
</script>
```

### Module import

If your using a modern framework like [Aurelia](https://aurelia.io), [Angular](https://angular.io), [React](https://reactjs.org), or [Vue](https://vuejs.org)

```javascript
import ScrollTargetTrigger from 'scroll-target-trigger';

const scroll = new ScrollTargetTrigger(element | position, callback);
scroll.target(behavior);
```

## Methods

The following methods are supported by this package:

| Method    | Description                                                       | Argument (optional)   |
|-----------|-------------------------------------------------------------------|-----------------------|
| `target`  | Scroll to an `Element` or `document` position _when executed_.    | auto, instant, smooth |
| `trigger` | Run callback _when scrolled_ to `Element` or `document` position. | `Number` default: 100 |
| `destroy` | Removes registered scroll event listener.                         |                       |

### Examples

Add a class name to an `Element` when scrolled to position.

```javascript
const elm = document.getElementById('target');

scrollTargetTrigger(elm, function(active) {
  if (active) {
    elm.classList.add('triggered');
  } else {

    // Remove at 100px above 'target'
    elm.classList.remove('triggered');
  }
}).trigger(100);
```

Scroll to an `Element` position instantly in a single jump.

```javascript
const elm = document.getElementById('target');

const scroll = new ScrollTargetTrigger(elm);
scroll.target('instant');
```

Scroll to `document` position in a smooth animation.

```javascript
const scroll = new ScrollTargetTrigger(500); // Y: 500px
scroll.target('smooth');
```

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

Run [WebdriverIO](https://webdriver.io) E2E tests:

    $ npm run test

## Motivation

In the sea of NPM [packages related to scroll events](https://www.npmjs.com/search?q=scroll-event), many of the packages I evaluated are..

- Unsupported, or have been completely abandoned.
- Tightly coupled with the [jQuery](https://jquery.com) or `<insert SPA framework here>`.
- Contain unnecessary usage of 3rd-party dependencies.
- Rich with features, but limited callback support.

In the end, I wanted a single library, no dependencies, with a simple interface (no bells and whistles) that provides `target` and `trigger` event handlers with callback support.

My search fell short so I created this package.

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_scroll-target-trigger_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
