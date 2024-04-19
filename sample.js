import { createSVGWindow } from 'svgdom'
import { SVG, registerWindow } from '@svgdotjs/svg.js'
import fs from 'node:fs';
import { color, colorName } from "./colors/color.js"

// returns a window with a document and an svg root node
const window = createSVGWindow()
const document = window.document

// register window and document
registerWindow(window, document)

// create canvas
const draw = SVG(document.documentElement)
draw.viewbox(0, 0, 1000, 1000)
draw.rect(1000, 1000).attr({ x: 0, y: 0, fill: 'white', stroke: "black" })

let top = 60
draw.text("COLOR").attr({ x: 30, y: 30 })
draw.text("TONE").attr({ x: 500, y: 30 })

for(let idx=0; idx < 18; idx++) {
    draw.text(idx+" - "+colorName[idx]).attr({ x: 10, y: top+40+idx*50 })
    draw.rect(45, 40).attr({ x: 150, y: top+10+idx*50, fill: color(idx,4) })
    for(let tone=0; tone < 9; tone++) {
        draw.text(tone).attr({ x: 250+tone*60, y: top+24+idx*50 })
        draw.rect(50, 25).attr({ x: 250+tone*60, y: top+26+idx*50, fill: color(idx,tone) })
    }
}

let output = draw.svg()
console.log(output);

try {
  fs.writeFileSync('./sample.svg', output);
  // file written successfully
} catch (err) {
  console.error(err);
}