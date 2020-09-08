# toggle-clean #

A simple html and javascript toggle element.

## Installation ##

**npm**

```
$ npm install --save toggle-clean 
```

## Importing ##

``` javascript 
const createToggle = require('toggle-clean')

// Using ES6 imports
import createToggle from 'toggle-clean'
```

## Overview ##

First, we need to define two div elements, one parent element and one child element. The parent div should contain a class with the name
"switch-track", while the child div should contain a class with the name "switch-thumb"

``` html
<!-- Parent div -->
<div class="switch-track">
     <div class="switch-thumb"> </div> 
</div> 
```


### Add class 'switch-track' to a parent div element and 'switch-thumb' to a child div element
