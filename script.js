'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function(){

    let elem,
    newElem;
    if (this.selector[0] === '.') {
        elem = 'div';
        newElem = document.createElement(elem);
        newElem.className = 'block';
    }   else if (this.selector[0] === '#') {
        elem = 'p';
        newElem = document.createElement(elem);
        newElem.id = 'best';
    }

    newElem.innerHTML = 'памагити(help)';
    newElem.style.cssText = ` height: ${this.height};
    background-color: ${this.bg};
    width: ${this.width};
    font-size: ${this.fontSize};
    `;
    document.body.append(newElem);

};

const FirstElem = new DomElement('.selector', '100px', '100px', 'blue', '1rem');

FirstElem.createElement();

