export function findElementPosition(obj) {
  var curleft = 0,
      curtop = 0;
  if (obj.offsetParent) {
      do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent) !== null);
  }

  return [curleft, curtop];
}

export function getDimension(container) {
  if (!container) {
      throw {
          message : 'Cannot get dimensions of undefined container'
      };
  }

  // TODO: Potential cross browser bug.
  var width = container.clientWidth;
  var height = container.clientHeight;

  return {
      left : 0,
      top : 0,
      width : width,
      height : height
  };
}

