# Auxiliary Userscript Library

This is an auxiliary library designed to be used with other userscripts. It provides various utility functions to enhance and simplify the development of userscripts.

## Installation

To use this library, include it in your userscript by adding the following lines to your script's metadata:

```javascript
// @require  https://raw.githubusercontent.com/supermarsx/userscript-master/main/dist/userscript-master.js
```

## Usage Examples

Here are some examples of how to use the functions provided by this library:

### Example 1: Checking if in an iframe
```javascript
if (checkIsIframe()) {
    console.log('This script is running inside an iframe');
}
```

### Example 2: Cloning an element
```javascript
const element = document.getElementById('example');
const clone = elementClone(element);
document.body.appendChild(clone);
```

## Documentation
Detailed documentation of the available functions can be found in the functions.md file.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Warranty
This software is provided "as-is," without any express or implied warranty. In no event shall the authors be held liable for any damages arising from the use of this software.
