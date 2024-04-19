import { color, colorName } from "./colors/color.js"

let value = color(3,4)
console.log('value',value);

let value2 = color("amber")
console.log('value2',value2);

let name = colorName[3]
console.log('name',name);
