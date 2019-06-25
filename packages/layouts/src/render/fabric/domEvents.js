import eventify from '../../utils/eventify';
import  addWheelListner from 'wheel';
export default function(domContainer) {
  var emitter = eventify({});

  if (!domContainer) {
    return emitter;
  }


  addWheelListner(domContainer, function(e){
    emitter.fire('wheel', e);
  });

  var prefix = '', _addEventListener;

  // detect event model
  if (window.addEventListener) {
    _addEventListener = 'addEventListener';
  } else {
    _addEventListener = 'attachEvent';
    prefix = 'on';
  }

  ['mousedown', 'mousemove', 'mouseup'].forEach(proxyEvent);
  return emitter;

  function proxyEvent(eventName) {
    domContainer[_addEventListener](prefix + eventName, function (e) {
      emitter.fire(eventName, e);
    })
  }
}
