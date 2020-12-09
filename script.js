'use strict';

const DomElement = function (height, width, bg, position, top, left) {
    // this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    // this.fontSize = fontSize;
    this.position = position;
    this.top = top;
    this.left = left;
};

// DomElement.prototype.createElement = function(){

//     let elem,
//     newElem;
//     if (this.selector[0] === '.') {
//         elem = 'div';
//         newElem = document.createElement(elem);
//         newElem.className = 'block';
//     }   else if (this.selector[0] === '#') {
//         elem = 'p';
//         newElem = document.createElement(elem);
//         newElem.id = 'best';
//     }

//     newElem.innerHTML = 'памагити(help)';
//     newElem.style.cssText = ` height: ${this.height};
//     background-color: ${this.bg};
//     width: ${this.width};
//     font-size: ${this.fontSize};
//     position: ${this.position};
//     top: ${this.top};
//     left: ${this.left};
//     `;
//     document.body.append(newElem);

// };

// const FirstElem = new DomElement('.selector', '100px', '100px', 'blue', '1rem', 'absolute', '0px', '0px');

// FirstElem.createElement();

DomElement.prototype.square = function () {

    let square,
        cSquare = 'div';
        square = document.createElement(cSquare);
        square.className = 'block';
        square.style.cssText = `
        height: ${this.height};
        background-color: ${this.bg};
        width: ${this.width};
        position: ${this.position};
        top: ${this.top};
        left: ${this.left};
        `;
    document.body.append(square);
};

const square = new DomElement('100px', '100px', 'red', 'absolute', '100px', '100px');

DomElement.prototype.move  = function (event) {
    event.preventDefault();
    let block = document.querySelector('.block');
    let left = Number(parseInt(block.style.left));
    let top = Number(parseInt(block.style.top));
    if (event.keyCode === 37) { 
        left = left - 10;
      }
      if (event.keyCode === 38) { 
        top = top - 10;
      }
      if (event.keyCode === 39) { 
        left = left + 10;
      }
      if (event.keyCode === 40) { 
       top = top + 10;
      }
      block.style.left = left + 'px';
      block.style.top = top + 'px';

};

DomElement.prototype.listener = function () {
    document.body.addEventListener('keydown', this.move.bind(this));

};
square.square();
square.listener();
