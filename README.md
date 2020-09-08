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
    <!-- Child div -->
     <div class="switch-thumb"> </div> 
</div> 
```

Import the package and initialize the function **createToggle** with an empty object if you want to keep the default toggle.

```javascript 
createToggle({})
```
Congratulations! You created a simple toggle element with just one line of code.

## Options ##

You can pass options to the **createToggle** method.

### Option list ##

``` 
width | Defines the width of the toggle.
backgroundColor | Defines the background color of the toggle track.
```


### Add class 'switch-track' to a parent div element and 'switch-thumb' to a child div element
