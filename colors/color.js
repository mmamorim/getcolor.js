import colorPalette from "./color-palette.js"
const tones = ['_100', '_200', '_300', '_400', '_500', '_600', '_700', '_800', '_900']

const colorName = Object.keys(colorPalette);

function color(idx, tone = 4) {
    if(typeof(idx) == 'number') {
        let ridx = idx%18
        //console.log(ridx);
        let key = Object.keys(colorPalette)[ridx]
        //console.log(key);
        return colorPalette[key][tones[tone]]    
    } else {
        //console.log(idx);
        return colorPalette[idx][tones[tone]]
    }
}

export { color, colorName }