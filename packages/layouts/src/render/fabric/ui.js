/**
 * This module provides default settings for fabric graphics. There are a lot
 * of possible configuration parameters, and this file provides reasonable defaults
 */



import { fabric } from 'fabric';
var NODE_SIZE = 10; // default size of a node square


export function CreateNodeUI(node) {
  return new fabric.Rect({
              fill: '#0033DD',
              width: NODE_SIZE,
              height: NODE_SIZE
            });
}

export function CreateLinkUI(link) {
  return new SimpleLine([0, 0, 0, 0], {
    stroke: '#cccccc',
    strokeWidth: 1
  });
}

export function NodeRenderer(node) {
  node.left = node.pos.x - NODE_SIZE/2;
  node.top = node.pos.y - NODE_SIZE/2;
}

export function LinkRenderer(link) {
  link.x1 = link.from.x;
  link.y1 = link.from.y;
  link.x2 = link.to.x;
  link.y2 = link.to.y;
}

var SimpleLine = fabric.util.createClass(fabric.Object, {
  /**
   * Type of an object
   * @type String
   * @default
   */
  type: 'simpleline',

  /**
   * Constructor
   * @param {Array} [points] Array of points
   * @param {Object} [options] Options object
   * @return {fabric.Line} thisArg
   */
  initialize: function(points, options) {
    options = options || { };

    if (!points) {
      points = [0, 0, 0, 0];
    }

    this.callSuper('initialize', options);

    this.x1 = points[0];
    this.y1 = points[1];
    this.x2 = points[2];
    this.y2 = points[3];
  },

  /**
   * @private
   * @param {CanvasRenderingContext2D} ctx Context to render on
   */
  render: function(ctx) {
    ctx.beginPath();

    ctx.moveTo(this.x1, this.y1);

    ctx.lineTo(this.x2, this.y2);
    ctx.lineWidth = this.strokeWidth;

    var origStrokeStyle = ctx.strokeStyle;
    ctx.strokeStyle = this.stroke || ctx.fillStyle;
    ctx.stroke();
    ctx.strokeStyle = origStrokeStyle;
  },


  /**
   * Returns complexity of an instance
   * @return {Number} complexity
   */
  complexity: function() {
    return 1;
  }
});
