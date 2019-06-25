import { fabric } from 'fabric';
export default function createCanvas(settings, domContainer) {
  if (settings.canvas) {
    return settings.canvas;
  }
  if (typeof document !== 'undefined') {
    // we are in the browser:
    return createDomCanvas(settings, domContainer);
  }

  return ;
}

var lastDomId = 0;

function createDomCanvas(settings, domContainer) {
  if (typeof settings.canvasId === 'string') {
    // if user already has a DOM canvas element, use it:
    return createDomCanvasWithId(settings.canvasId);
  }

  // Otherwise create new and append it to DOM container:
  var canvas = document.createElement('canvas');
  canvas.id = 'ngraph_fabric_' + (lastDomId++);
  canvas.width = domContainer.clientWidth;
  canvas.height = domContainer.clientHeight;
  domContainer.appendChild(canvas);

  return createDomCanvasWithId(canvas.id);
}

function createDomCanvasWithId(id) {
  return new fabric.StaticCanvas(id, {
    renderOnAddRemove: false
  });
}