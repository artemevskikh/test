class Options {
    constructor (height, width, background, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.background = background;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    getCreateDiv() {
        var div = document.createElement('circle'),
        button = document.getElementsByTagName('button')[0];

        document.body.insertBefore(div, button);
        this.cssText = "height: 250px; width: 250px; background: 'red'; fontSize: 10px; text-align: center;";

        // document.body.appendChild(div);
    }
}

let elem = new Options ("150px", "200px", "blue", "5px", "right");
elem.getCreateDiv();

console.log(elem);