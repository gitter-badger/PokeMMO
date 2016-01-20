"use strict";

window.rAF = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame
  );
})();

/**
 * @param {Boolean} value
 */
CanvasRenderingContext2D.prototype.setImageSmoothing = function(value) {

  this.imageSmoothingEnabled  = value;
  this.oImageSmoothingEnabled  = value;
  this.msImageSmoothingEnabled  = value;
  this.mozImageSmoothingEnabled  = value;
  this.webkitImageSmoothingEnabled = value;

  return void 0;

};