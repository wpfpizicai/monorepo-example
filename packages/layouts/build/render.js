/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/render/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_add-event-listener@0.0.1@add-event-listener/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_add-event-listener@0.0.1@add-event-listener/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

addEventListener.removeEventListener = removeEventListener;
addEventListener.addEventListener = addEventListener;
module.exports = addEventListener;
var Events = null;

function addEventListener(el, eventName, listener, useCapture) {
  Events = Events || (document.addEventListener ? {
    add: stdAttach,
    rm: stdDetach
  } : {
    add: oldIEAttach,
    rm: oldIEDetach
  });
  return Events.add(el, eventName, listener, useCapture);
}

function removeEventListener(el, eventName, listener, useCapture) {
  Events = Events || (document.addEventListener ? {
    add: stdAttach,
    rm: stdDetach
  } : {
    add: oldIEAttach,
    rm: oldIEDetach
  });
  return Events.rm(el, eventName, listener, useCapture);
}

function stdAttach(el, eventName, listener, useCapture) {
  el.addEventListener(eventName, listener, useCapture);
}

function stdDetach(el, eventName, listener, useCapture) {
  el.removeEventListener(eventName, listener, useCapture);
}

function oldIEAttach(el, eventName, listener, useCapture) {
  if (useCapture) {
    throw new Error('cannot useCapture in oldIE');
  }

  el.attachEvent('on' + eventName, listener);
}

function oldIEDetach(el, eventName, listener, useCapture) {
  el.detachEvent('on' + eventName, listener);
}

/***/ }),

/***/ "./node_modules/_simplesvg@0.1.1@simplesvg/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_simplesvg@0.1.1@simplesvg/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = svg;
svg.compile = __webpack_require__(/*! ./lib/compile */ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile.js");

var compileTemplate = svg.compileTemplate = __webpack_require__(/*! ./lib/compile_template */ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile_template.js");

var domEvents = __webpack_require__(/*! add-event-listener */ "./node_modules/_add-event-listener@0.0.1@add-event-listener/index.js");

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function svg(element, attrBag) {
  var svgElement = augment(element);

  if (attrBag === undefined) {
    return svgElement;
  }

  svgElement.attr(attrBag);
  return svgElement;
}

function augment(element) {
  var svgElement = element;

  if (typeof element === "string") {
    svgElement = window.document.createElementNS(svgns, element);
  } else if (element.simplesvg) {
    return element;
  }

  var compiledTempalte;
  svgElement.simplesvg = true; // this is not good, since we are monkey patching svg

  svgElement.attr = attr;
  svgElement.append = append;
  svgElement.link = link;
  svgElement.text = text; // add easy eventing

  svgElement.on = on;
  svgElement.off = off; // data binding:

  svgElement.dataSource = dataSource;
  return svgElement;

  function dataSource(model) {
    if (!compiledTempalte) compiledTempalte = compileTemplate(svgElement);
    compiledTempalte.link(model);
    return svgElement;
  }

  function on(name, cb, useCapture) {
    domEvents.addEventListener(svgElement, name, cb, useCapture);
    return svgElement;
  }

  function off(name, cb, useCapture) {
    domEvents.removeEventListener(svgElement, name, cb, useCapture);
    return svgElement;
  }

  function append(content) {
    var child = svg(content);
    svgElement.appendChild(child);
    return child;
  }

  function attr(name, value) {
    if (arguments.length === 2) {
      if (value !== null) {
        svgElement.setAttributeNS(null, name, value);
      } else {
        svgElement.removeAttributeNS(null, name);
      }

      return svgElement;
    }

    if (typeof name === 'string') {
      // someone wants to get value of an attribute:
      return svgElement.getAttributeNS(null, name);
    }

    if (typeof name !== 'object') throw new Error('attr() expects to have either string or object as first argument');
    var attrBag = name;
    var attributes = Object.keys(attrBag);

    for (var i = 0; i < attributes.length; ++i) {
      var attributeName = attributes[i];
      var value = attrBag[attributeName];

      if (attributeName === 'link') {
        svgElement.link(value);
      } else {
        svgElement.attr(attributeName, value);
      }
    }

    return svgElement;
  }

  function link(target) {
    if (arguments.length) {
      svgElement.setAttributeNS(xlinkns, "xlink:href", target);
      return svgElement;
    }

    return svgElement.getAttributeNS(xlinkns, "xlink:href");
  }

  function text(textContent) {
    if (textContent !== undefined) {
      svgElement.textContent = textContent;
      return svgElement;
    }

    return svgElement.textContent;
  }
}

/***/ }),

/***/ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile.js":
/*!****************************************************************!*\
  !*** ./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! ./domparser.js */ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/domparser.js");

var svg = __webpack_require__(/*! ../ */ "./node_modules/_simplesvg@0.1.1@simplesvg/index.js");

module.exports = compile;

function compile(svgText) {
  try {
    svgText = addNamespaces(svgText);
    return svg(parser.parseFromString(svgText, "text/xml").documentElement);
  } catch (e) {
    throw e;
  }
}

function addNamespaces(text) {
  if (!text) return;
  var namespaces = 'xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"';
  var match = text.match(/^<\w+/);

  if (match) {
    var tagLength = match[0].length;
    return text.substr(0, tagLength) + ' ' + namespaces + ' ' + text.substr(tagLength);
  } else {
    throw new Error('Cannot parse input text: invalid xml?');
  }
}

/***/ }),

/***/ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile_template.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_simplesvg@0.1.1@simplesvg/lib/compile_template.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = template;
var BINDING_EXPR = /{{(.+?)}}/;

function template(domNode) {
  var allBindings = Object.create(null);
  extractAllBindings(domNode, allBindings);
  return {
    link: function (model) {
      Object.keys(allBindings).forEach(function (key) {
        var setter = allBindings[key];
        setter.forEach(changeModel);
      });

      function changeModel(setter) {
        setter(model);
      }
    }
  };
}

function extractAllBindings(domNode, allBindings) {
  var nodeType = domNode.nodeType;
  var typeSupported = nodeType === 1 || nodeType === 3;
  if (!typeSupported) return;
  var i;

  if (domNode.hasChildNodes()) {
    var domChildren = domNode.childNodes;

    for (i = 0; i < domChildren.length; ++i) {
      extractAllBindings(domChildren[i], allBindings);
    }
  }

  if (nodeType === 3) {
    // text:
    bindTextContent(domNode, allBindings);
  }

  if (!domNode.attributes) return; // this might be a text. Need to figure out what to do in that case

  var attrs = domNode.attributes;

  for (i = 0; i < attrs.length; ++i) {
    bindDomAttribute(attrs[i], domNode, allBindings);
  }
}

function bindDomAttribute(domAttribute, element, allBindings) {
  var value = domAttribute.value;
  if (!value) return; // unary attribute?

  var modelNameMatch = value.match(BINDING_EXPR);
  if (!modelNameMatch) return; // does not look like a binding

  var attrName = domAttribute.localName;
  var modelPropertyName = modelNameMatch[1];
  var isSimpleValue = modelPropertyName.indexOf('.') < 0;
  if (!isSimpleValue) throw new Error('simplesvg currently does not support nested bindings');
  var propertyBindings = allBindings[modelPropertyName];

  if (!propertyBindings) {
    propertyBindings = allBindings[modelPropertyName] = [attributeSetter];
  } else {
    propertyBindings.push(attributeSetter);
  }

  function attributeSetter(model) {
    element.setAttributeNS(null, attrName, model[modelPropertyName]);
  }
}

function bindTextContent(element, allBindings) {
  // todo reduce duplication
  var value = element.nodeValue;
  if (!value) return; // unary attribute?

  var modelNameMatch = value.match(BINDING_EXPR);
  if (!modelNameMatch) return; // does not look like a binding

  var modelPropertyName = modelNameMatch[1];
  var isSimpleValue = modelPropertyName.indexOf('.') < 0;
  var propertyBindings = allBindings[modelPropertyName];

  if (!propertyBindings) {
    propertyBindings = allBindings[modelPropertyName] = [textSetter];
  } else {
    propertyBindings.push(textSetter);
  }

  function textSetter(model) {
    element.nodeValue = model[modelPropertyName];
  }
}

/***/ }),

/***/ "./node_modules/_simplesvg@0.1.1@simplesvg/lib/domparser.js":
/*!******************************************************************!*\
  !*** ./node_modules/_simplesvg@0.1.1@simplesvg/lib/domparser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = createDomparser();

function createDomparser() {
  if (typeof DOMParser === 'undefined') {
    return {
      parseFromString: fail
    };
  }

  return new DOMParser();
}

function fail() {
  throw new Error('DOMParser is not supported by this platform. Please open issue here https://github.com/anvaka/simplesvg');
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/forcelayout/index.js":
/*!**********************************!*\
  !*** ./src/forcelayout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createLayout; });
/* harmony import */ var _utils_eventify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventify */ "./src/utils/eventify.js");
/* harmony import */ var _simulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simulator */ "./src/simulator/index.js");


/**
 * Creates force based layout for a given graph.
 *
 * @param {ngraph.graph} graph which needs to be laid out
 * @param {object} physicsSettings if you need custom settings
 * for physics simulator you can pass your own settings here. If it's not passed
 * a default one will be created.
 */

function createLayout(graph, physicsSettings) {
  if (!graph) {
    throw new Error('Graph structure cannot be undefined');
  }

  var physicsSimulator = Object(_simulator__WEBPACK_IMPORTED_MODULE_1__["default"])(physicsSettings);
  var nodeMass = defaultNodeMass;

  if (physicsSettings && typeof physicsSettings.nodeMass === 'function') {
    nodeMass = physicsSettings.nodeMass;
  }

  var nodeBodies = Object.create(null);
  var springs = {};
  var bodiesCount = 0;
  var springTransform = physicsSimulator.settings.springTransform || noop; // Initialize physics with what we have in the graph:

  initPhysics();
  listenToEvents();
  var wasStable = false;
  var api = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function () {
      if (bodiesCount === 0) return true; // TODO: This will never fire 'stable'

      var lastMove = physicsSimulator.step(); // Save the movement in case if someone wants to query it in the step
      // callback.

      api.lastMove = lastMove; // Allow listeners to perform low-level actions after nodes are updated.

      api.fire('step');
      var ratio = lastMove / bodiesCount;
      var isStableNow = ratio <= 0.01; // TODO: The number is somewhat arbitrary...

      if (wasStable !== isStableNow) {
        wasStable = isStableNow;
        onStableChanged(isStableNow);
      }

      return isStableNow;
    },

    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function (nodeId) {
      return getInitializedBody(nodeId).pos;
    },

    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function (nodeId) {
      var body = getInitializedBody(nodeId);
      body.setPosition.apply(body, Array.prototype.slice.call(arguments, 1));
      physicsSimulator.invalidateBBox();
    },

    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function (linkId) {
      var spring = springs[linkId];

      if (spring) {
        return {
          from: spring.from.pos,
          to: spring.to.pos
        };
      }
    },

    /**
     * @returns {Object} area required to fit in the graph. Object contains
     * `x1`, `y1` - top left coordinates
     * `x2`, `y2` - bottom right coordinates
     */
    getGraphRect: function () {
      return physicsSimulator.getBBox();
    },

    /**
     * Iterates over each body in the layout simulator and performs a callback(body, nodeId)
     */
    forEachBody: forEachBody,

    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function (node, isPinned) {
      var body = getInitializedBody(node.id);
      body.isPinned = !!isPinned;
    },

    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function (node) {
      return getInitializedBody(node.id).isPinned;
    },

    /**
     * Request to release all resources
     */
    dispose: function () {
      graph.off('changed', onGraphChanged);
      api.fire('disposed');
    },

    /**
     * Gets physical body for a given node id. If node is not found undefined
     * value is returned.
     */
    getBody: getBody,

    /**
     * Gets spring for a given edge.
     *
     * @param {string} linkId link identifer. If two arguments are passed then
     * this argument is treated as formNodeId
     * @param {string=} toId when defined this parameter denotes head of the link
     * and first argument is treated as tail of the link (fromId)
     */
    getSpring: getSpring,

    /**
     * [Read only] Gets current physics simulator
     */
    simulator: physicsSimulator,

    /**
     * Gets the graph that was used for layout
     */
    graph: graph,

    /**
     * Gets amount of movement performed during last step operation
     */
    lastMove: 0
  };
  Object(_utils_eventify__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
  return api;

  function forEachBody(cb) {
    Object.keys(nodeBodies).forEach(function (bodyId) {
      cb(nodeBodies[bodyId], bodyId);
    });
  }

  function getSpring(fromId, toId) {
    var linkId;

    if (toId === undefined) {
      if (typeof fromId !== 'object') {
        // assume fromId as a linkId:
        linkId = fromId;
      } else {
        // assume fromId to be a link object:
        linkId = fromId.id;
      }
    } else {
      // toId is defined, should grab link:
      var link = graph.hasLink(fromId, toId);
      if (!link) return;
      linkId = link.id;
    }

    return springs[linkId];
  }

  function getBody(nodeId) {
    return nodeBodies[nodeId];
  }

  function listenToEvents() {
    graph.on('changed', onGraphChanged);
  }

  function onStableChanged(isStable) {
    api.fire('stable', isStable);
  }

  function onGraphChanged(changes) {
    for (var i = 0; i < changes.length; ++i) {
      var change = changes[i];

      if (change.changeType === 'add') {
        if (change.node) {
          initBody(change.node.id);
        }

        if (change.link) {
          initLink(change.link);
        }
      } else if (change.changeType === 'remove') {
        if (change.node) {
          releaseNode(change.node);
        }

        if (change.link) {
          releaseLink(change.link);
        }
      }
    }

    bodiesCount = graph.getNodesCount();
  }

  function initPhysics() {
    bodiesCount = 0;
    graph.forEachNode(function (node) {
      initBody(node.id);
      bodiesCount += 1;
    });
    graph.forEachLink(initLink);
  }

  function initBody(nodeId) {
    var body = nodeBodies[nodeId];

    if (!body) {
      var node = graph.getNode(nodeId);

      if (!node) {
        throw new Error('initBody() was called with unknown node id');
      }

      var pos = node.position;

      if (!pos) {
        var neighbors = getNeighborBodies(node);
        pos = physicsSimulator.getBestNewBodyPosition(neighbors);
      }

      body = physicsSimulator.addBodyAt(pos);
      body.id = nodeId;
      nodeBodies[nodeId] = body;
      updateBodyMass(nodeId);

      if (isNodeOriginallyPinned(node)) {
        body.isPinned = true;
      }
    }
  }

  function releaseNode(node) {
    var nodeId = node.id;
    var body = nodeBodies[nodeId];

    if (body) {
      nodeBodies[nodeId] = null;
      delete nodeBodies[nodeId];
      physicsSimulator.removeBody(body);
    }
  }

  function initLink(link) {
    updateBodyMass(link.fromId);
    updateBodyMass(link.toId);
    var fromBody = nodeBodies[link.fromId],
        toBody = nodeBodies[link.toId],
        spring = physicsSimulator.addSpring(fromBody, toBody, link.length);
    springTransform(link, spring);
    springs[link.id] = spring;
  }

  function releaseLink(link) {
    var spring = springs[link.id];

    if (spring) {
      var from = graph.getNode(link.fromId),
          to = graph.getNode(link.toId);
      if (from) updateBodyMass(from.id);
      if (to) updateBodyMass(to.id);
      delete springs[link.id];
      physicsSimulator.removeSpring(spring);
    }
  }

  function getNeighborBodies(node) {
    // TODO: Could probably be done better on memory
    var neighbors = [];

    if (!node.links) {
      return neighbors;
    }

    var maxNeighbors = Math.min(node.links.length, 2);

    for (var i = 0; i < maxNeighbors; ++i) {
      var link = node.links[i];
      var otherBody = link.fromId !== node.id ? nodeBodies[link.fromId] : nodeBodies[link.toId];

      if (otherBody && otherBody.pos) {
        neighbors.push(otherBody);
      }
    }

    return neighbors;
  }

  function updateBodyMass(nodeId) {
    var body = nodeBodies[nodeId];
    body.mass = nodeMass(nodeId);

    if (Number.isNaN(body.mass)) {
      throw new Error('Node mass should be a number');
    }
  }
  /**
   * Checks whether graph node has in its settings pinned attribute,
   * which means layout algorithm cannot move it. Node can be marked
   * as pinned, if it has "isPinned" attribute, or when node.data has it.
   *
   * @param {Object} node a graph node to check
   * @return {Boolean} true if node should be treated as pinned; false otherwise.
   */


  function isNodeOriginallyPinned(node) {
    return node && (node.isPinned || node.data && node.data.isPinned);
  }

  function getInitializedBody(nodeId) {
    var body = nodeBodies[nodeId];

    if (!body) {
      initBody(nodeId);
      body = nodeBodies[nodeId];
    }

    return body;
  }
  /**
   * Calculates mass of a body, which corresponds to node with given id.
   *
   * @param {String|Number} nodeId identifier of a node, for which body mass needs to be calculated
   * @returns {Number} recommended mass of the body;
   */


  function defaultNodeMass(nodeId) {
    var links = graph.getLinks(nodeId);
    if (!links) return 1;
    return 1 + links.length / 3.0;
  }
}

function noop() {}

/***/ }),

/***/ "./src/quadtree/index.js":
/*!*******************************!*\
  !*** ./src/quadtree/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/quadtree/node.js");
/* harmony import */ var _insertStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertStack */ "./src/quadtree/insertStack.js");
/* harmony import */ var _isSamePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSamePosition */ "./src/quadtree/isSamePosition.js");
/**
 * This is Barnes Hut simulation algorithm for 2d case. Implementation
 * is highly optimized (avoids recusion and gc pressure)
 *
 * http://www.cs.princeton.edu/courses/archive/fall03/cs126/assignments/barnes-hut.html
 */




/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8; // we require deterministic randomness here

  var random = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandom"])(1984);
  var gravity = options.gravity,
      updateQueue = [],
      insertStack = new _insertStack__WEBPACK_IMPORTED_MODULE_2__["default"](),
      theta = options.theta,
      nodesCache = [],
      currentInCache = 0,
      root = newNode();
  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if its present
     */
    getRoot: function () {
      return root;
    },
    updateBodyForce: update,
    options: function (newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }

        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];

    if (node) {
      node.quad0 = null;
      node.quad1 = null;
      node.quad2 = null;
      node.quad3 = null;
      node.body = null;
      node.mass = node.massX = node.massY = 0;
      node.left = node.right = node.top = node.bottom = 0;
    } else {
      node = new _node__WEBPACK_IMPORTED_MODULE_1__["default"]();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue,
        v,
        dx,
        dy,
        r,
        fx = 0,
        fy = 0,
        queueLength = 1,
        shiftIdx = 0,
        pushIdx = 1;
    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx],
          body = node.body;
      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = body !== sourceBody;

      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        dx = body.pos.x - sourceBody.pos.x;
        dy = body.pos.y - sourceBody.pos.y;
        r = Math.sqrt(dx * dx + dy * dy);

        if (r === 0) {
          // Poor man's protection against zero distance.
          dx = (random.nextDouble() - 0.5) / 50;
          dy = (random.nextDouble() - 0.5) / 50;
          r = Math.sqrt(dx * dx + dy * dy);
        } // This is standard gravition force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.


        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        fx += v * dx;
        fy += v * dy;
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        dx = node.massX / node.mass - sourceBody.pos.x;
        dy = node.massY / node.mass - sourceBody.pos.y;
        r = Math.sqrt(dx * dx + dy * dy);

        if (r === 0) {
          // Sorry about code duplucation. I don't want to create many functions
          // right away. Just want to see performance first.
          dx = (random.nextDouble() - 0.5) / 50;
          dy = (random.nextDouble() - 0.5) / 50;
          r = Math.sqrt(dx * dx + dy * dy);
        } // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.


        if ((node.right - node.left) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was squarified during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          fx += v * dx;
          fy += v * dy;
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.
          // I intentionally unfolded this loop, to save several CPU cycles.
          if (node.quad0) {
            queue[pushIdx] = node.quad0;
            queueLength += 1;
            pushIdx += 1;
          }

          if (node.quad1) {
            queue[pushIdx] = node.quad1;
            queueLength += 1;
            pushIdx += 1;
          }

          if (node.quad2) {
            queue[pushIdx] = node.quad2;
            queueLength += 1;
            pushIdx += 1;
          }

          if (node.quad3) {
            queue[pushIdx] = node.quad3;
            queueLength += 1;
            pushIdx += 1;
          }
        }
      }
    }

    sourceBody.force.x += fx;
    sourceBody.force.y += fy;
  }

  function insertBodies(bodies) {
    var x1 = Number.MAX_VALUE,
        y1 = Number.MAX_VALUE,
        x2 = Number.MIN_VALUE,
        y2 = Number.MIN_VALUE,
        i,
        max = bodies.length; // To reduce quad tree depth we are looking for exact bounding box of all particles.

    i = max;

    while (i--) {
      var x = bodies[i].pos.x;
      var y = bodies[i].pos.y;

      if (x < x1) {
        x1 = x;
      }

      if (x > x2) {
        x2 = x;
      }

      if (y < y1) {
        y1 = y;
      }

      if (y > y2) {
        y2 = y;
      }
    } // Squarify the bounds.


    var dx = x2 - x1,
        dy = y2 - y1;

    if (dx > dy) {
      y2 = y1 + dx;
    } else {
      x2 = x1 + dy;
    }

    currentInCache = 0;
    root = newNode();
    root.left = x1;
    root.right = x2;
    root.top = y1;
    root.bottom = y2;
    i = max - 1;

    if (i >= 0) {
      root.body = bodies[i];
    }

    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop(),
          node = stackItem.node,
          body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        var x = body.pos.x;
        var y = body.pos.y;
        node.mass = node.mass + body.mass;
        node.massX = node.massX + body.mass * x;
        node.massY = node.massY + body.mass * y; // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.

        var quadIdx = 0,
            // Assume we are in the 0's quad.
        left = node.left,
            right = (node.right + left) / 2,
            top = node.top,
            bottom = (node.bottom + top) / 2;

        if (x > right) {
          // somewhere in the eastern part.
          quadIdx = quadIdx + 1;
          left = right;
          right = node.right;
        }

        if (y > bottom) {
          // and in south.
          quadIdx = quadIdx + 2;
          top = bottom;
          bottom = node.bottom;
        }

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          child.left = left;
          child.top = top;
          child.right = right;
          child.bottom = bottom;
          child.body = body;
          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (Object(_isSamePosition__WEBPACK_IMPORTED_MODULE_3__["default"])(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;

          do {
            var offset = random.nextDouble();
            var dx = (node.right - node.left) * offset;
            var dy = (node.bottom - node.top) * offset;
            oldBody.pos.x = node.left + dx;
            oldBody.pos.y = node.top + dy;
            retriesCount -= 1; // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && Object(_isSamePosition__WEBPACK_IMPORTED_MODULE_3__["default"])(oldBody.pos, body.pos));

          if (retriesCount === 0 && Object(_isSamePosition__WEBPACK_IMPORTED_MODULE_3__["default"])(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        } // Next iteration should subdivide node further.


        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
});
;

function getChild(node, idx) {
  if (idx === 0) return node.quad0;
  if (idx === 1) return node.quad1;
  if (idx === 2) return node.quad2;
  if (idx === 3) return node.quad3;
  return null;
}

function setChild(node, idx, child) {
  if (idx === 0) node.quad0 = child;else if (idx === 1) node.quad1 = child;else if (idx === 2) node.quad2 = child;else if (idx === 3) node.quad3 = child;
}

/***/ }),

/***/ "./src/quadtree/insertStack.js":
/*!*************************************!*\
  !*** ./src/quadtree/insertStack.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InsertStack; });
/**
 * Our implmentation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack() {
  this.stack = [];
  this.popIdx = 0;
}
InsertStack.prototype = {
  isEmpty: function () {
    return this.popIdx === 0;
  },
  push: function (node, body) {
    var item = this.stack[this.popIdx];

    if (!item) {
      // we are trying to avoid memory pressue: create new element
      // only when absolutely necessary
      this.stack[this.popIdx] = new InsertStackElement(node, body);
    } else {
      item.node = node;
      item.body = body;
    }

    ++this.popIdx;
  },
  pop: function () {
    if (this.popIdx > 0) {
      return this.stack[--this.popIdx];
    }
  },
  reset: function () {
    this.popIdx = 0;
  }
};

function InsertStackElement(node, body) {
  this.node = node; // QuadTree node

  this.body = body; // physical body which needs to be inserted to node
}

/***/ }),

/***/ "./src/quadtree/isSamePosition.js":
/*!****************************************!*\
  !*** ./src/quadtree/isSamePosition.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSamePosition; });
function isSamePosition(point1, point2) {
  var dx = Math.abs(point1.x - point2.x);
  var dy = Math.abs(point1.y - point2.y);
  return dx < 1e-8 && dy < 1e-8;
}
;

/***/ }),

/***/ "./src/quadtree/node.js":
/*!******************************!*\
  !*** ./src/quadtree/node.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
/**
 * Internal data structure to represent 2D QuadTree node
 */
function Node() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain boides:
  this.body = null; // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3

  this.quad0 = null;
  this.quad1 = null;
  this.quad2 = null;
  this.quad3 = null; // Total mass of current node

  this.mass = 0; // Center of mass coordinates

  this.massX = 0;
  this.massY = 0; // bounding box coordinates

  this.left = 0;
  this.top = 0;
  this.bottom = 0;
  this.right = 0;
}
;

/***/ }),

/***/ "./src/render/domInputManager.js":
/*!***************************************!*\
  !*** ./src/render/domInputManager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return domInputManager; });
/* harmony import */ var _dragndrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragndrop */ "./src/render/dragndrop.js");
/**
 * @author Andrei Kashcha (aka anvaka) / https://github.com/anvaka
 */

function domInputManager(graph, graphics) {
  var nodeEvents = {};
  return {
    /**
     * Called by renderer to listen to drag-n-drop events from node. E.g. for SVG
     * graphics we may listen to DOM events, whereas for WebGL the graphics
     * should provide custom eventing mechanism.
     *
     * @param node - to be monitored.
     * @param handlers - object with set of three callbacks:
     *   onStart: function(),
     *   onDrag: function(e, offset),
     *   onStop: function()
     */
    bindDragNDrop: bindDragNDrop
  };

  function bindDragNDrop(node, handlers) {
    var events;

    if (handlers) {
      var nodeUI = graphics.getNodeUI(node.id);
      events = Object(_dragndrop__WEBPACK_IMPORTED_MODULE_0__["default"])(nodeUI);

      if (typeof handlers.onStart === 'function') {
        events.onStart(handlers.onStart);
      }

      if (typeof handlers.onDrag === 'function') {
        events.onDrag(handlers.onDrag);
      }

      if (typeof handlers.onStop === 'function') {
        events.onStop(handlers.onStop);
      }

      nodeEvents[node.id] = events;
    } else if (events = nodeEvents[node.id]) {
      events.release();
      delete nodeEvents[node.id];
    }
  }
}

/***/ }),

/***/ "./src/render/dragndrop.js":
/*!*********************************!*\
  !*** ./src/render/dragndrop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dragndrop; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/**
 * @author Andrei Kashcha (aka anvaka) / https://github.com/anvaka
 */
 // TODO: Move to input namespace
// TODO: Methods should be extracted into the prototype. This class
// does not need to consume so much memory for every tracked element

function dragndrop(element) {
  var start,
      drag,
      end,
      scroll,
      prevSelectStart,
      prevDragStart,
      startX = 0,
      startY = 0,
      dragObject,
      touchInProgress = false,
      pinchZoomLength = 0,
      getMousePos = function (e) {
    var posx = 0,
        posy = 0;
    e = e || window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + window.document.body.scrollLeft + window.document.documentElement.scrollLeft;
      posy = e.clientY + window.document.body.scrollTop + window.document.documentElement.scrollTop;
    }

    return [posx, posy];
  },
      move = function (e, clientX, clientY) {
    if (drag) {
      drag(e, {
        x: clientX - startX,
        y: clientY - startY
      });
    }

    startX = clientX;
    startY = clientY;
  },
      stopPropagation = function (e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },
      preventDefault = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  },
      handleDisabledEvent = function (e) {
    stopPropagation(e);
    return false;
  },
      handleMouseMove = function (e) {
    e = e || window.event;
    move(e, e.clientX, e.clientY);
  },
      handleMouseDown = function (e) {
    e = e || window.event;

    if (touchInProgress) {
      // modern browsers will fire mousedown for touch events too
      // we do not want this, since touch is handled separately.
      stopPropagation(e);
      return false;
    } // for IE, left click == 1
    // for Firefox, left click == 0


    var isLeftButton = e.button === 1 && window.event !== null || e.button === 0;

    if (isLeftButton) {
      startX = e.clientX;
      startY = e.clientY; // TODO: bump zIndex?

      dragObject = e.target || e.srcElement;

      if (start) {
        start(e, {
          x: startX,
          y: startY
        });
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      stopPropagation(e); // TODO: What if event already there? Not bullet proof:

      prevSelectStart = window.document.onselectstart;
      prevDragStart = window.document.ondragstart;
      window.document.onselectstart = handleDisabledEvent;
      dragObject.ondragstart = handleDisabledEvent; // prevent text selection (except IE)

      return false;
    }
  },
      handleMouseUp = function (e) {
    e = e || window.event;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    window.document.onselectstart = prevSelectStart;
    dragObject.ondragstart = prevDragStart;
    dragObject = null;

    if (end) {
      end(e);
    }
  },
      handleMouseWheel = function (e) {
    if (typeof scroll !== 'function') {
      return;
    }

    e = e || window.event;

    if (e.preventDefault) {
      e.preventDefault();
    }

    e.returnValue = false;
    var delta,
        mousePos = getMousePos(e),
        elementOffset = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["findElementPosition"])(element),
        relMousePos = {
      x: mousePos[0] - elementOffset[0],
      y: mousePos[1] - elementOffset[1]
    };

    if (e.wheelDelta) {
      delta = e.wheelDelta / 360; // Chrome/Safari
    } else {
      delta = e.detail / -9; // Mozilla
    }

    scroll(e, delta, relMousePos);
  },
      updateScrollEvents = function (scrollCallback) {
    if (!scroll && scrollCallback) {
      // client is interested in scrolling. Start listening to events:
      element.addEventListener('mousewheel', handleMouseWheel, false); // Chrome/Safari 
    } else if (scroll && !scrollCallback) {
      element.removeEventListener('mousewheel', handleMouseWheel, false); // Chrome/Safari
    }

    scroll = scrollCallback;
  },
      getPinchZoomLength = function (finger1, finger2) {
    return (finger1.clientX - finger2.clientX) * (finger1.clientX - finger2.clientX) + (finger1.clientY - finger2.clientY) * (finger1.clientY - finger2.clientY);
  },
      handleTouchMove = function (e) {
    if (e.touches.length === 1) {
      stopPropagation(e);
      var touch = e.touches[0];
      move(e, touch.clientX, touch.clientY);
    } else if (e.touches.length === 2) {
      // it's a zoom:
      var currentPinchLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      var delta = 0;

      if (currentPinchLength < pinchZoomLength) {
        delta = -1;
      } else if (currentPinchLength > pinchZoomLength) {
        delta = 1;
      }

      scroll(e, delta, {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      pinchZoomLength = currentPinchLength;
      stopPropagation(e);
      preventDefault(e);
    }
  },
      handleTouchEnd = function (e) {
    touchInProgress = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchcancel', handleTouchEnd);
    dragObject = null;

    if (end) {
      end(e);
    }
  },
      handleSignleFingerTouch = function (e, touch) {
    stopPropagation(e);
    preventDefault(e);
    startX = touch.clientX;
    startY = touch.clientY;
    dragObject = e.target || e.srcElement;

    if (start) {
      start(e, {
        x: startX,
        y: startY
      });
    } // TODO: can I enter into the state when touch is in progress
    // but it's still a single finger touch?


    if (!touchInProgress) {
      touchInProgress = true;
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd);
    }
  },
      handleTouchStart = function (e) {
    if (e.touches.length === 1) {
      return handleSignleFingerTouch(e, e.touches[0]);
    } else if (e.touches.length === 2) {
      // handleTouchMove() will care about pinch zoom.
      stopPropagation(e);
      preventDefault(e);
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
    } // don't care about the rest.

  };

  element.addEventListener('mousedown', handleMouseDown);
  element.addEventListener('touchstart', handleTouchStart);
  return {
    onStart: function (callback) {
      start = callback;
      return this;
    },
    onDrag: function (callback) {
      drag = callback;
      return this;
    },
    onStop: function (callback) {
      end = callback;
      return this;
    },

    /**
     * Occurs when mouse wheel event happens. callback = function(e, scrollDelta, scrollPoint);
     */
    onScroll: function (callback) {
      updateScrollEvents(callback);
      return this;
    },
    release: function () {
      // TODO: could be unsafe. We might wanna release dragObject, etc.
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
      updateScrollEvents(null);
    }
  };
}

/***/ }),

/***/ "./src/render/index.js":
/*!*****************************!*\
  !*** ./src/render/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderer; });
/* harmony import */ var _utils_eventify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventify */ "./src/utils/eventify.js");
/* harmony import */ var _forcelayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forcelayout */ "./src/forcelayout/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/render/svg.js");
/* harmony import */ var _domInputManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domInputManager */ "./src/render/domInputManager.js");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/timer */ "./src/utils/timer.js");
/* harmony import */ var _dragndrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragndrop */ "./src/render/dragndrop.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");







/**
 * This is heart of the rendering. Class accepts graph to be rendered and rendering settings.
 * It monitors graph changes and depicts them accordingly.
 *
 * @param graph - Viva.Graph.graph() object to be rendered.
 * @param settings - rendering settings, composed from the following parts (with their defaults shown):
 *   settings = {
 *     // Represents a module that is capable of displaying graph nodes and links.
 *     // all graphics has to correspond to defined interface and can be later easily
 *     // replaced for specific needs (e.g. adding WebGL should be piece of cake as long
 *     // as WebGL has implemented required interface). See svgGraphics for example.
 *     graphics : Viva.Graph.View.svgGraphics(),
 *
 *     // Where the renderer should draw graph. Container size matters, because
 *     // renderer will attempt center graph to that size. Also graphics modules
 *     // might depend on it.
 *     container : document.body,
 *
 *     // Defines whether graph can respond to use input
 *     interactive: true,
 *
 *     // Layout algorithm to be used. The algorithm is expected to comply with defined
 *     // interface and is expected to be iterative. Renderer will use it then to calculate
 *     // graph's layout. For examples of the interface refer to Viva.Graph.Layout.forceDirected()
 *     layout : Viva.Graph.Layout.forceDirected(),
 *
 *     // Directs renderer to display links. Usually rendering links is the slowest part of this
 *     // library. So if you don't need to display links, consider settings this property to false.
 *     renderLinks : true,
 *
 *     // Number of layout iterations to run before displaying the graph. The bigger you set this number
 *     // the closer to ideal position graph will appear first time. But be careful: for large graphs
 *     // it can freeze the browser.
 *     prerender : 0
 *   }
 */

function renderer(graph, settings) {
  // TODO: This class is getting hard to understand. Consider refactoring.
  // TODO: I have a technical debt here: fix scaling/recentering! Currently it's a total mess.
  var FRAME_INTERVAL = 30;
  settings = settings || {};
  var layout = settings.layout,
      graphics = settings.graphics,
      container = settings.container,
      interactive = settings.interactive !== undefined ? settings.interactive : true,
      inputManager,
      animationTimer,
      rendererInitialized = false,
      updateCenterRequired = true,
      isStable = false,
      userInteraction = false,
      isPaused = false,
      transform = {
    offsetX: 0,
    offsetY: 0,
    scale: 1
  },
      publicEvents = Object(_utils_eventify__WEBPACK_IMPORTED_MODULE_0__["default"])({}),
      containerDrag;
  return {
    /**
     * Performs rendering of the graph.
     *
     * @param iterationsCount if specified renderer will run only given number of iterations
     * and then stop. Otherwise graph rendering is performed indefinitely.
     *
     * Note: if rendering stopped by used started dragging nodes or new nodes were added to the
     * graph renderer will give run more iterations to reflect changes.
     */
    run: function (iterationsCount) {
      if (!rendererInitialized) {
        prepareSettings();
        prerender();
        initDom();
        updateCenter();
        listenToEvents();
        rendererInitialized = true;
      }

      renderIterations(iterationsCount);
      return this;
    },
    reset: function () {
      graphics.resetScale();
      updateCenter();
      transform.scale = 1;
    },
    pause: function () {
      isPaused = true;
      animationTimer.stop();
    },
    resume: function () {
      isPaused = false;
      animationTimer.restart();
    },
    rerender: function () {
      renderGraph();
      return this;
    },
    zoomOut: function () {
      return scale(true);
    },
    zoomIn: function () {
      return scale(false);
    },

    /**
     * Returns current transformation matrix.
     */
    getTransform: function () {
      return transform;
    },

    /**
     * Centers renderer at x,y graph's coordinates
     */
    moveTo: function (x, y) {
      graphics.graphCenterChanged(transform.offsetX - x * transform.scale, transform.offsetY - y * transform.scale);
      renderGraph();
    },

    /**
     * Gets current graphics object
     */
    getGraphics: function () {
      return graphics;
    },

    /**
     * Gets current layout.
     */
    getLayout: function () {
      return layout;
    },

    /**
     * Removes this renderer and deallocates all resources/timers
     */
    dispose: function () {
      stopListenToEvents(); // I quit!
    },
    on: function (eventName, callback) {
      publicEvents.on(eventName, callback);
      return this;
    },
    off: function (eventName, callback) {
      publicEvents.off(eventName, callback);
      return this;
    }
  };
  /**
   * Checks whether given interaction (node/scroll) is enabled
   */

  function isInteractive(interactionName) {
    if (typeof interactive === 'string') {
      return interactive.indexOf(interactionName) >= 0;
    } else if (typeof interactive === 'boolean') {
      return interactive;
    }

    return true; // default setting
  }

  function prepareSettings() {
    container = container || window.document.body;
    layout = layout || Object(_forcelayout__WEBPACK_IMPORTED_MODULE_1__["default"])(graph, {
      springLength: 80,
      springCoeff: 0.0002
    });
    graphics = graphics || Object(_svg__WEBPACK_IMPORTED_MODULE_2__["default"])(graph, {
      container: container
    });

    if (!settings.hasOwnProperty('renderLinks')) {
      settings.renderLinks = true;
    }

    settings.prerender = settings.prerender || 0;
    inputManager = (graphics.inputManager || _domInputManager__WEBPACK_IMPORTED_MODULE_3__["default"])(graph, graphics);
  }

  function renderGraph() {
    graphics.beginRender(); // todo: move this check graphics

    if (settings.renderLinks) {
      graphics.renderLinks();
    }

    graphics.renderNodes();
    graphics.endRender();
  }

  function onRenderFrame() {
    isStable = layout.step() && !userInteraction;
    renderGraph();
    return !isStable;
  }

  function renderIterations(iterationsCount) {
    if (animationTimer) {
      return;
    }

    if (iterationsCount !== undefined) {
      animationTimer = Object(_utils_timer__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        iterationsCount -= 1;

        if (iterationsCount < 0) {
          var needMoreFrames = false;
          return needMoreFrames;
        }

        return onRenderFrame();
      }, FRAME_INTERVAL);
    } else {
      animationTimer = Object(_utils_timer__WEBPACK_IMPORTED_MODULE_4__["default"])(onRenderFrame, FRAME_INTERVAL);
    }
  }

  function resetStable() {
    if (isPaused) {
      return;
    }

    isStable = false;
    animationTimer.restart();
  }

  function prerender() {
    // To get good initial positions for the graph
    // perform several prerender steps in background.
    if (typeof settings.prerender === 'number' && settings.prerender > 0) {
      for (var i = 0; i < settings.prerender; i += 1) {
        layout.step();
      }
    }
  }

  function updateCenter() {
    var graphRect = layout.getGraphRect(),
        containerSize = Object(_utils_util__WEBPACK_IMPORTED_MODULE_6__["getDimension"])(container);
    var cx = (graphRect.x2 + graphRect.x1) / 2;
    var cy = (graphRect.y2 + graphRect.y1) / 2;
    transform.offsetX = containerSize.width / 2 - (cx * transform.scale - cx);
    transform.offsetY = containerSize.height / 2 - (cy * transform.scale - cy);
    graphics.graphCenterChanged(transform.offsetX, transform.offsetY);
    updateCenterRequired = false;
  }

  function createNodeUi(node) {
    var nodePosition = layout.getNodePosition(node.id);
    graphics.addNode(node, nodePosition);
  }

  function removeNodeUi(node) {
    graphics.releaseNode(node);
  }

  function createLinkUi(link) {
    var linkPosition = layout.getLinkPosition(link.id);
    graphics.addLink(link, linkPosition);
  }

  function removeLinkUi(link) {
    graphics.releaseLink(link);
  }

  function listenNodeEvents(node) {
    if (!isInteractive('node')) {
      return;
    }

    var wasPinned = false; // TODO: This may not be memory efficient. Consider reusing handlers object.

    inputManager.bindDragNDrop(node, {
      onStart: function () {
        wasPinned = layout.isNodePinned(node);
        layout.pinNode(node, true);
        userInteraction = true;
        resetStable();
      },
      onDrag: function (e, offset) {
        var oldPos = layout.getNodePosition(node.id);
        layout.setNodePosition(node.id, oldPos.x + offset.x / transform.scale, oldPos.y + offset.y / transform.scale);
        userInteraction = true;
        renderGraph();
      },
      onStop: function () {
        layout.pinNode(node, wasPinned);
        userInteraction = false;
      }
    });
  }

  function releaseNodeEvents(node) {
    inputManager.bindDragNDrop(node, null);
  }

  function initDom() {
    graphics.init(container);
    graph.forEachNode(createNodeUi);

    if (settings.renderLinks) {
      graph.forEachLink(createLinkUi);
    }
  }

  function releaseDom() {
    graphics.release(container);
  }

  function processNodeChange(change) {
    var node = change.node;

    if (change.changeType === 'add') {
      createNodeUi(node);
      listenNodeEvents(node);

      if (updateCenterRequired) {
        updateCenter();
      }
    } else if (change.changeType === 'remove') {
      releaseNodeEvents(node);
      removeNodeUi(node);

      if (graph.getNodesCount() === 0) {
        updateCenterRequired = true; // Next time when node is added - center the graph.
      }
    } else if (change.changeType === 'update') {
      releaseNodeEvents(node);
      removeNodeUi(node);
      createNodeUi(node);
      listenNodeEvents(node);
    }
  }

  function processLinkChange(change) {
    var link = change.link;

    if (change.changeType === 'add') {
      if (settings.renderLinks) {
        createLinkUi(link);
      }
    } else if (change.changeType === 'remove') {
      if (settings.renderLinks) {
        removeLinkUi(link);
      }
    } else if (change.changeType === 'update') {
      throw 'Update type is not implemented. TODO: Implement me!';
    }
  }

  function onGraphChanged(changes) {
    var i, change;

    for (i = 0; i < changes.length; i += 1) {
      change = changes[i];

      if (change.node) {
        processNodeChange(change);
      } else if (change.link) {
        processLinkChange(change);
      }
    }

    resetStable();
  }

  function onWindowResized() {
    updateCenter();
    onRenderFrame();
  }

  function releaseContainerDragManager() {
    if (containerDrag) {
      containerDrag.release();
      containerDrag = null;
    }
  }

  function releaseGraphEvents() {
    graph.off('changed', onGraphChanged);
  }

  function scale(out, scrollPoint) {
    if (!scrollPoint) {
      var containerSize = Object(_utils_util__WEBPACK_IMPORTED_MODULE_6__["getDimension"])(container);
      scrollPoint = {
        x: containerSize.width / 2,
        y: containerSize.height / 2
      };
    }

    var scaleFactor = Math.pow(1 + 0.4, out ? -0.2 : 0.2);
    transform.scale = graphics.scale(scaleFactor, scrollPoint);
    renderGraph();
    publicEvents.fire('scale', transform.scale);
    return transform.scale;
  }

  function listenToEvents() {
    window.addEventListener('resize', onWindowResized);
    releaseContainerDragManager();

    if (isInteractive('drag')) {
      containerDrag = Object(_dragndrop__WEBPACK_IMPORTED_MODULE_5__["default"])(container);
      containerDrag.onDrag(function (e, offset) {
        graphics.translateRel(offset.x, offset.y);
        renderGraph();
        publicEvents.fire('drag', offset);
      });
    }

    if (isInteractive('scroll')) {
      if (!containerDrag) {
        containerDrag = Object(_dragndrop__WEBPACK_IMPORTED_MODULE_5__["default"])(container);
      }

      containerDrag.onScroll(function (e, scaleOffset, scrollPoint) {
        scale(scaleOffset < 0, scrollPoint);
      });
    }

    graph.forEachNode(listenNodeEvents);
    releaseGraphEvents();
    graph.on('changed', onGraphChanged);
  }

  function stopListenToEvents() {
    rendererInitialized = false;
    releaseGraphEvents();
    releaseContainerDragManager();
    window.removeEventListener('resize', onWindowResized);
    publicEvents.off();
    animationTimer.stop();
    graph.forEachLink(function (link) {
      if (settings.renderLinks) {
        removeLinkUi(link);
      }
    });
    graph.forEachNode(function (node) {
      releaseNodeEvents(node);
      removeNodeUi(node);
    });
    layout.dispose();
    releaseDom();
  }
}

/***/ }),

/***/ "./src/render/svg.js":
/*!***************************!*\
  !*** ./src/render/svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return svgGraphics; });
/* harmony import */ var simplesvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplesvg */ "./node_modules/_simplesvg@0.1.1@simplesvg/index.js");
/* harmony import */ var simplesvg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplesvg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_eventify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/eventify */ "./src/utils/eventify.js");
/* harmony import */ var _domInputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domInputManager */ "./src/render/domInputManager.js");
/**
 * @fileOverview Defines a graph renderer that uses SVG based drawings.
 *
 * @author Andrei Kashcha (aka anvaka) / https://github.com/anvaka
 */



/**
 * Performs svg-based graph rendering. This module does not perform
 * layout, but only visualizes nodes and edges of the graph.
 */

function svgGraphics() {
  var svgContainer,
      svgRoot,
      offsetX = 0,
      offsetY = 0,
      initCallback,
      actualScale = 1,
      allNodes = {},
      allLinks = {},

  /*jshint unused: false */
  nodeBuilder = function (node) {
    return simplesvg__WEBPACK_IMPORTED_MODULE_0___default()("rect").attr("width", 10).attr("height", 10).attr("fill", "#00a2e8");
  },
      nodePositionCallback = function (nodeUI, pos) {
    // TODO: Remove magic 5. It should be half of the width or height of the node.
    nodeUI.attr("x", pos.x - 5).attr("y", pos.y - 5);
  },
      linkBuilder = function (link) {
    return simplesvg__WEBPACK_IMPORTED_MODULE_0___default()("line").attr("stroke", "#999");
  },
      linkPositionCallback = function (linkUI, fromPos, toPos) {
    linkUI.attr("x1", fromPos.x).attr("y1", fromPos.y).attr("x2", toPos.x).attr("y2", toPos.y);
  },
      fireRescaled = function (graphics) {
    // TODO: maybe we shall copy changes?
    graphics.fire("rescaled");
  },
      cachedPos = {
    x: 0,
    y: 0
  },
      cachedFromPos = {
    x: 0,
    y: 0
  },
      cachedToPos = {
    x: 0,
    y: 0
  },
      updateTransform = function () {
    if (svgContainer) {
      var transform = "matrix(" + actualScale + ", 0, 0," + actualScale + "," + offsetX + "," + offsetY + ")";
      svgContainer.attr("transform", transform);
    }
  };

  svgRoot = createSvgRoot();
  var graphics = {
    getNodeUI: function (nodeId) {
      return allNodes[nodeId];
    },
    getLinkUI: function (linkId) {
      return allLinks[linkId];
    },

    /**
     * Sets the callback that creates node representation.
     *
     * @param builderCallback a callback function that accepts graph node
     * as a parameter and must return an element representing this node.
     *
     * @returns If builderCallbackOrNode is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned
     */
    node: function (builderCallback) {
      if (typeof builderCallback !== "function") {
        return; // todo: throw? This is not compatible with old versions
      }

      nodeBuilder = builderCallback;
      return this;
    },

    /**
     * Sets the callback that creates link representation
     *
     * @param builderCallback a callback function that accepts graph link
     * as a parameter and must return an element representing this link.
     *
     * @returns If builderCallback is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned.
     */
    link: function (builderCallback) {
      if (typeof builderCallback !== "function") {
        return; // todo: throw? This is not compatible with old versions
      }

      linkBuilder = builderCallback;
      return this;
    },

    /**
     * Allows to override default position setter for the node with a new
     * function. newPlaceCallback(nodeUI, position, node) is function which
     * is used by updateNodePosition().
     */
    placeNode: function (newPlaceCallback) {
      nodePositionCallback = newPlaceCallback;
      return this;
    },
    placeLink: function (newPlaceLinkCallback) {
      linkPositionCallback = newPlaceLinkCallback;
      return this;
    },

    /**
     * Called every before renderer starts rendering.
     */
    beginRender: function () {},

    /**
     * Called every time when renderer finishes one step of rendering.
     */
    endRender: function () {},

    /**
     * Sets translate operation that should be applied to all nodes and links.
     */
    graphCenterChanged: function (x, y) {
      offsetX = x;
      offsetY = y;
      updateTransform();
    },

    /**
     * Default input manager listens to DOM events to process nodes drag-n-drop
     */
    inputManager: _domInputManager__WEBPACK_IMPORTED_MODULE_2__["default"],
    translateRel: function (dx, dy) {
      var p = svgRoot.createSVGPoint(),
          t = svgContainer.getCTM(),
          origin = svgRoot.createSVGPoint().matrixTransform(t.inverse());
      p.x = dx;
      p.y = dy;
      p = p.matrixTransform(t.inverse());
      p.x = (p.x - origin.x) * t.a;
      p.y = (p.y - origin.y) * t.d;
      t.e += p.x;
      t.f += p.y;
      var transform = "matrix(" + t.a + ", 0, 0," + t.d + "," + t.e + "," + t.f + ")";
      svgContainer.attr("transform", transform);
    },
    scale: function (scaleFactor, scrollPoint) {
      var p = svgRoot.createSVGPoint();
      p.x = scrollPoint.x;
      p.y = scrollPoint.y;
      p = p.matrixTransform(svgContainer.getCTM().inverse()); // translate to SVG coordinates
      // Compute new scale matrix in current mouse position

      var k = svgRoot.createSVGMatrix().translate(p.x, p.y).scale(scaleFactor).translate(-p.x, -p.y),
          t = svgContainer.getCTM().multiply(k);
      actualScale = t.a;
      offsetX = t.e;
      offsetY = t.f;
      var transform = "matrix(" + t.a + ", 0, 0," + t.d + "," + t.e + "," + t.f + ")";
      svgContainer.attr("transform", transform);
      fireRescaled(this);
      return actualScale;
    },
    resetScale: function () {
      actualScale = 1;
      var transform = "matrix(1, 0, 0, 1, 0, 0)";
      svgContainer.attr("transform", transform);
      fireRescaled(this);
      return this;
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render.
     */
    init: function (container) {
      container.appendChild(svgRoot);
      updateTransform(); // Notify the world if someone waited for update. TODO: should send an event

      if (typeof initCallback === "function") {
        initCallback(svgRoot);
      }
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider release occupied resources.
     */
    release: function (container) {
      if (svgRoot && container) {
        container.removeChild(svgRoot);
      }
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given link of the graph
     *
     * @param link - model of a link
     */
    addLink: function (link, pos) {
      var linkUI = linkBuilder(link);

      if (!linkUI) {
        return;
      }

      linkUI.position = pos;
      linkUI.link = link;
      allLinks[link.id] = linkUI;

      if (svgContainer.childElementCount > 0) {
        svgContainer.insertBefore(linkUI, svgContainer.firstChild);
      } else {
        svgContainer.appendChild(linkUI);
      }

      return linkUI;
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove link from rendering surface.
     *
     * @param linkUI visual representation of the link created by link() execution.
     **/
    releaseLink: function (link) {
      var linkUI = allLinks[link.id];

      if (linkUI) {
        svgContainer.removeChild(linkUI);
        delete allLinks[link.id];
      }
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given node of the graph.
     *
     * @param nodeUI visual representation of the node created by node() execution.
     **/
    addNode: function (node, pos) {
      var nodeUI = nodeBuilder(node);

      if (!nodeUI) {
        return;
      }

      nodeUI.position = pos;
      nodeUI.node = node;
      allNodes[node.id] = nodeUI;
      svgContainer.appendChild(nodeUI);
      return nodeUI;
    },

    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove node from rendering surface.
     *
     * @param node graph's node
     **/
    releaseNode: function (node) {
      var nodeUI = allNodes[node.id];

      if (nodeUI) {
        svgContainer.removeChild(nodeUI);
        delete allNodes[node.id];
      }
    },
    renderNodes: function () {
      for (var key in allNodes) {
        if (allNodes.hasOwnProperty(key)) {
          var nodeUI = allNodes[key];
          cachedPos.x = nodeUI.position.x;
          cachedPos.y = nodeUI.position.y;
          nodePositionCallback(nodeUI, cachedPos, nodeUI.node);
        }
      }
    },
    renderLinks: function () {
      for (var key in allLinks) {
        if (allLinks.hasOwnProperty(key)) {
          var linkUI = allLinks[key];
          cachedFromPos.x = linkUI.position.from.x;
          cachedFromPos.y = linkUI.position.from.y;
          cachedToPos.x = linkUI.position.to.x;
          cachedToPos.y = linkUI.position.to.y;
          linkPositionCallback(linkUI, cachedFromPos, cachedToPos, linkUI.link);
        }
      }
    },

    /**
     * Returns root element which hosts graphics.
     */
    getGraphicsRoot: function (callbackWhenReady) {
      // todo: should fire an event, instead of having this context.
      if (typeof callbackWhenReady === "function") {
        if (svgRoot) {
          callbackWhenReady(svgRoot);
        } else {
          initCallback = callbackWhenReady;
        }
      }

      return svgRoot;
    },

    /**
     * Returns root SVG element.
     *
     * Note: This is internal method specific to this renderer
     */
    getSvgRoot: function () {
      return svgRoot;
    }
  }; // Let graphics fire events before we return it to the caller.

  Object(_utils_eventify__WEBPACK_IMPORTED_MODULE_1__["default"])(graphics);
  return graphics;

  function createSvgRoot() {
    var svgRoot = simplesvg__WEBPACK_IMPORTED_MODULE_0___default()("svg");
    svgContainer = simplesvg__WEBPACK_IMPORTED_MODULE_0___default()("g").attr("buffered-rendering", "dynamic");
    svgRoot.appendChild(svgContainer);
    return svgRoot;
  }
}

/***/ }),

/***/ "./src/simulator/bounds.js":
/*!*********************************!*\
  !*** ./src/simulator/bounds.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");

/* harmony default export */ __webpack_exports__["default"] = (function (bodies, settings) {
  var random = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandom"])(42);
  var boundingBox = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };
  return {
    box: boundingBox,
    update: updateBoundingBox,
    reset: function () {
      boundingBox.x1 = boundingBox.y1 = 0;
      boundingBox.x2 = boundingBox.y2 = 0;
    },
    getBestNewPosition: function (neighbors) {
      var graphRect = boundingBox;
      var baseX = 0,
          baseY = 0;

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          baseX += neighbors[i].pos.x;
          baseY += neighbors[i].pos.y;
        }

        baseX /= neighbors.length;
        baseY /= neighbors.length;
      } else {
        baseX = (graphRect.x1 + graphRect.x2) / 2;
        baseY = (graphRect.y1 + graphRect.y2) / 2;
      }

      var springLength = settings.springLength;
      return {
        x: baseX + random.next(springLength) - springLength / 2,
        y: baseY + random.next(springLength) - springLength / 2
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;

    if (i === 0) {
      return;
    } // don't have to wory here.


    var x1 = Number.MAX_VALUE,
        y1 = Number.MAX_VALUE,
        x2 = Number.MIN_VALUE,
        y2 = Number.MIN_VALUE;

    while (i--) {
      // this is O(n), could it be done faster with quadtree?
      // how about pinned nodes?
      var body = bodies[i];

      if (body.isPinned) {
        body.pos.x = body.prevPos.x;
        body.pos.y = body.prevPos.y;
      } else {
        body.prevPos.x = body.pos.x;
        body.prevPos.y = body.pos.y;
      }

      if (body.pos.x < x1) {
        x1 = body.pos.x;
      }

      if (body.pos.x > x2) {
        x2 = body.pos.x;
      }

      if (body.pos.y < y1) {
        y1 = body.pos.y;
      }

      if (body.pos.y > y2) {
        y2 = body.pos.y;
      }
    }

    boundingBox.x1 = x1;
    boundingBox.x2 = x2;
    boundingBox.y1 = y1;
    boundingBox.y2 = y2;
  }
});

/***/ }),

/***/ "./src/simulator/createbody.js":
/*!*************************************!*\
  !*** ./src/simulator/createbody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primitives */ "./src/simulator/primitives.js");

/* harmony default export */ __webpack_exports__["default"] = (function (pos) {
  return new _primitives__WEBPACK_IMPORTED_MODULE_0__["default"].Body(pos);
});

/***/ }),

/***/ "./src/simulator/dragForce.js":
/*!************************************!*\
  !*** ./src/simulator/dragForce.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var _utils_expose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expose */ "./src/utils/expose.js");
/**
 * Represents drag force, which reduces force value on each step by given
 * coefficient.
 *
 * @param {Object} options for the drag force
 * @param {Number=} options.dragCoeff drag force coefficient. 0.1 by default
 */


/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  options = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_0__["default"])(options, {
    dragCoeff: 0.02
  });
  var api = {
    update: function (body) {
      body.force.x -= options.dragCoeff * body.velocity.x;
      body.force.y -= options.dragCoeff * body.velocity.y;
    }
  }; // let easy access to dragCoeff:

  Object(_utils_expose__WEBPACK_IMPORTED_MODULE_1__["default"])(options, api, ['dragCoeff']);
  return api;
});
;

/***/ }),

/***/ "./src/simulator/eulerIntegrator.js":
/*!******************************************!*\
  !*** ./src/simulator/eulerIntegrator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return integrate; });
/**
 * Performs forces integration, using given timestep. Uses Euler method to solve
 * differential equation (http://en.wikipedia.org/wiki/Euler_method ).
 *
 * @returns {Number} squared distance of total position updates.
 */
function integrate(bodies, timeStep) {
  var dx = 0,
      tx = 0,
      dy = 0,
      ty = 0,
      i,
      max = bodies.length;

  if (max === 0) {
    return 0;
  }

  for (i = 0; i < max; ++i) {
    var body = bodies[i],
        coeff = timeStep / body.mass;
    body.velocity.x += coeff * body.force.x;
    body.velocity.y += coeff * body.force.y;
    var vx = body.velocity.x,
        vy = body.velocity.y,
        v = Math.sqrt(vx * vx + vy * vy);

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      body.velocity.x = vx / v;
      body.velocity.y = vy / v;
    }

    dx = timeStep * body.velocity.x;
    dy = timeStep * body.velocity.y;
    body.pos.x += dx;
    body.pos.y += dy;
    tx += Math.abs(dx);
    ty += Math.abs(dy);
  }

  return (tx * tx + ty * ty) / max;
}

/***/ }),

/***/ "./src/simulator/index.js":
/*!********************************!*\
  !*** ./src/simulator/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return physicsSimulator; });
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spring */ "./src/simulator/spring.js");
/* harmony import */ var _utils_expose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expose */ "./src/utils/expose.js");
/* harmony import */ var _utils_eventify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventify */ "./src/utils/eventify.js");
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bounds */ "./src/simulator/bounds.js");
/* harmony import */ var _dragForce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragForce */ "./src/simulator/dragForce.js");
/* harmony import */ var _springForce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./springForce */ "./src/simulator/springForce.js");
/* harmony import */ var _eulerIntegrator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eulerIntegrator */ "./src/simulator/eulerIntegrator.js");
/* harmony import */ var _createbody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createbody */ "./src/simulator/createbody.js");
/* harmony import */ var _quadtree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quadtree */ "./src/quadtree/index.js");










function physicsSimulator(settings) {
  settings = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_3__["default"])(settings, {
    /**
     * Ideal length for links (springs in physical model).
     */
    springLength: 30,

    /**
     * Hook's law coefficient. 1 - solid spring.
     */
    springCoeff: 0.0008,

    /**
     * Coulomb's law coefficient. It's used to repel nodes thus should be negative
     * if you make it positive nodes start attract each other :).
     */
    gravity: -1.2,

    /**
     * Theta coefficient from Barnes Hut simulation. Ranged between (0, 1).
     * The closer it's to 1 the more nodes algorithm will have to go through.
     * Setting it to one makes Barnes Hut simulation no different from
     * brute-force forces calculation (each node is considered).
     */
    theta: 0.8,

    /**
     * Drag force coefficient. Used to slow down system, thus should be less than 1.
     * The closer it is to 0 the less tight system will be.
     */
    dragCoeff: 0.02,

    /**
     * Default time step (dt) for forces integration
     */
    timeStep: 20
  }); // We allow clients to override basic factory methods:

  var createQuadTree = settings.createQuadTree || _quadtree__WEBPACK_IMPORTED_MODULE_9__["default"];
  var createBounds = settings.createBounds || _bounds__WEBPACK_IMPORTED_MODULE_4__["default"];
  var createDragForce = settings.createDragForce || _dragForce__WEBPACK_IMPORTED_MODULE_5__["default"];
  var createSpringForce = settings.createSpringForce || _springForce__WEBPACK_IMPORTED_MODULE_6__["default"];
  var integrate = settings.integrator || _eulerIntegrator__WEBPACK_IMPORTED_MODULE_7__["default"];
  var createBody = settings.createBody || _createbody__WEBPACK_IMPORTED_MODULE_8__["default"];
  var bodies = [],
      // Bodies in this simulation.
  springs = [],
      // Springs in this simulation.
  quadTree = createQuadTree(settings),
      bounds = createBounds(bodies, settings),
      springForce = createSpringForce(settings),
      dragForce = createDragForce(settings);
  var bboxNeedsUpdate = true;
  var totalMovement = 0; // how much movement we made on last step

  var publicApi = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: bodies,
    quadTree: quadTree,

    /**
     * Array of springs, registered with current simulator
     *
     * Note: To add new spring, use addSpring() method. This property is only
     * exposed for testing/performance purposes.
     */
    springs: springs,

    /**
     * Returns settings with which current simulator was initialized
     */
    settings: settings,

    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: function () {
      accumulateForces();
      var movement = integrate(bodies, settings.timeStep);
      bounds.update();
      return movement;
    },

    /**
     * Adds body to the system
     *
     * @param {ngraph.physics.primitives.Body} body physical body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBody: function (body) {
      if (!body) {
        throw new Error('Body is required');
      }

      bodies.push(body);
      return body;
    },

    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: function (pos) {
      if (!pos) {
        throw new Error('Body position is required');
      }

      var body = createBody(pos);
      bodies.push(body);
      return body;
    },

    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: function (body) {
      if (!body) {
        return;
      }

      var idx = bodies.indexOf(body);

      if (idx < 0) {
        return;
      }

      bodies.splice(idx, 1);

      if (bodies.length === 0) {
        bounds.reset();
      }

      return true;
    },

    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function (body1, body2, springLength, springWeight, springCoefficient) {
      if (!body1 || !body2) {
        throw new Error('Cannot add null spring to force simulator');
      }

      if (typeof springLength !== 'number') {
        springLength = -1; // assume global configuration
      }

      var spring = new _spring__WEBPACK_IMPORTED_MODULE_0__["default"](body1, body2, springLength, springCoefficient >= 0 ? springCoefficient : -1, springWeight);
      springs.push(spring); // TODO: could mark simulator as dirty.

      return spring;
    },

    /**
     * Returns amount of movement performed on last step() call
     */
    getTotalMovement: function () {
      return totalMovement;
    },

    /**
     * Removes spring from the system
     *
     * @param {Object} spring to remove. Spring is an object returned by addSpring
     *
     * @returns {Boolean} true if spring found and removed. falsy otherwise;
     */
    removeSpring: function (spring) {
      if (!spring) {
        return;
      }

      var idx = springs.indexOf(spring);

      if (idx > -1) {
        springs.splice(idx, 1);
        return true;
      }
    },
    getBestNewBodyPosition: function (neighbors) {
      return bounds.getBestNewPosition(neighbors);
    },

    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: function () {
      if (bboxNeedsUpdate) {
        bounds.update();
        bboxNeedsUpdate = false;
      }

      return bounds.box;
    },
    invalidateBBox: function () {
      bboxNeedsUpdate = true;
    },
    gravity: function (value) {
      if (value !== undefined) {
        settings.gravity = value;
        quadTree.options({
          gravity: value
        });
        return this;
      } else {
        return settings.gravity;
      }
    },
    theta: function (value) {
      if (value !== undefined) {
        settings.theta = value;
        quadTree.options({
          theta: value
        });
        return this;
      } else {
        return settings.theta;
      }
    }
  }; // allow settings modification via public API:

  Object(_utils_expose__WEBPACK_IMPORTED_MODULE_1__["default"])(settings, publicApi);
  Object(_utils_eventify__WEBPACK_IMPORTED_MODULE_2__["default"])(publicApi);
  return publicApi;

  function accumulateForces() {
    // Accumulate forces acting on bodies.
    var body,
        i = bodies.length;

    if (i) {
      // only add bodies if there the array is not empty:
      quadTree.insertBodies(bodies); // performance: O(n * log n)

      while (i--) {
        body = bodies[i]; // If body is pinned there is no point updating its forces - it should
        // never move:

        if (!body.isPinned) {
          body.force.reset();
          quadTree.updateBodyForce(body);
          dragForce.update(body);
        }
      }
    }

    i = springs.length;

    while (i--) {
      springForce.update(springs[i]);
    }
  }
}
;

/***/ }),

/***/ "./src/simulator/primitives.js":
/*!*************************************!*\
  !*** ./src/simulator/primitives.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Body(x, y) {
  this.pos = new Vector2d(x, y);
  this.prevPos = new Vector2d(x, y);
  this.force = new Vector2d();
  this.velocity = new Vector2d();
  this.mass = 1;
}

Body.prototype.setPosition = function (x, y) {
  this.prevPos.x = this.pos.x = x;
  this.prevPos.y = this.pos.y = y;
};

function Vector2d(x, y) {
  if (x && typeof x !== 'number') {
    // could be another vector
    this.x = typeof x.x === 'number' ? x.x : 0;
    this.y = typeof x.y === 'number' ? x.y : 0;
  } else {
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;
  }
}

Vector2d.prototype.reset = function () {
  this.x = this.y = 0;
};

function Body3d(x, y, z) {
  this.pos = new Vector3d(x, y, z);
  this.prevPos = new Vector3d(x, y, z);
  this.force = new Vector3d();
  this.velocity = new Vector3d();
  this.mass = 1;
}

Body3d.prototype.setPosition = function (x, y, z) {
  this.prevPos.x = this.pos.x = x;
  this.prevPos.y = this.pos.y = y;
  this.prevPos.z = this.pos.z = z;
};

function Vector3d(x, y, z) {
  if (x && typeof x !== 'number') {
    // could be another vector
    this.x = typeof x.x === 'number' ? x.x : 0;
    this.y = typeof x.y === 'number' ? x.y : 0;
    this.z = typeof x.z === 'number' ? x.z : 0;
  } else {
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;
    this.z = typeof z === 'number' ? z : 0;
  }
}

;

Vector3d.prototype.reset = function () {
  this.x = this.y = this.z = 0;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Body: Body,
  Vector2d: Vector2d,
  Body3d: Body3d,
  Vector3d: Vector3d
});

/***/ }),

/***/ "./src/simulator/spring.js":
/*!*********************************!*\
  !*** ./src/simulator/spring.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spring; });
/**
 * Represents a physical spring. Spring connects two bodies, has rest length
 * stiffness coefficient and optional weight
 */
function Spring(fromBody, toBody, length, coeff, weight) {
  this.from = fromBody;
  this.to = toBody;
  this.length = length;
  this.coeff = coeff;
  this.weight = typeof weight === 'number' ? weight : 1;
}
;

/***/ }),

/***/ "./src/simulator/springForce.js":
/*!**************************************!*\
  !*** ./src/simulator/springForce.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge */ "./src/utils/merge.js");
/* harmony import */ var _utils_expose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expose */ "./src/utils/expose.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/**
 * Represents spring force, which updates forces acting on two bodies, conntected
 * by a spring.
 *
 * @param {Object} options for the spring force
 * @param {Number=} options.springCoeff spring force coefficient.
 * @param {Number=} options.springLength desired length of a spring at rest.
 */



/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var random = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(42);
  options = Object(_utils_merge__WEBPACK_IMPORTED_MODULE_0__["default"])(options, {
    springCoeff: 0.0002,
    springLength: 80
  });
  var api = {
    /**
     * Upsates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from,
          body2 = spring.to,
          length = spring.length < 0 ? options.springLength : spring.length,
          dx = body2.pos.x - body1.pos.x,
          dy = body2.pos.y - body1.pos.y,
          r = Math.sqrt(dx * dx + dy * dy);

      if (r === 0) {
        dx = (random.nextDouble() - 0.5) / 50;
        dy = (random.nextDouble() - 0.5) / 50;
        r = Math.sqrt(dx * dx + dy * dy);
      }

      var d = r - length;
      var coeff = (!spring.coeff || spring.coeff < 0 ? options.springCoeff : spring.coeff) * d / r * spring.weight;
      body1.force.x += coeff * dx;
      body1.force.y += coeff * dy;
      body2.force.x -= coeff * dx;
      body2.force.y -= coeff * dy;
    }
  };
  Object(_utils_expose__WEBPACK_IMPORTED_MODULE_1__["default"])(options, api, ['springCoeff', 'springLength']);
  return api;
});

/***/ }),

/***/ "./src/utils/eventify.js":
/*!*******************************!*\
  !*** ./src/utils/eventify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eventify; });
function eventify(subject) {
  validateSubject(subject);
  var eventsStorage = createEventsStorage(subject);
  subject.on = eventsStorage.on;
  subject.off = eventsStorage.off;
  subject.fire = eventsStorage.fire;
  return subject;
}
;

function createEventsStorage(subject) {
  // Store all event listeners to this hash. Key is event name, value is array
  // of callback records.
  //
  // A callback record consists of callback function and its optional context:
  // { 'eventName' => [{callback: function, ctx: object}] }
  var registeredEvents = Object.create(null);
  return {
    on: function (eventName, callback, ctx) {
      if (typeof callback !== 'function') {
        throw new Error('callback is expected to be a function');
      }

      var handlers = registeredEvents[eventName];

      if (!handlers) {
        handlers = registeredEvents[eventName] = [];
      }

      handlers.push({
        callback: callback,
        ctx: ctx
      });
      return subject;
    },
    off: function (eventName, callback) {
      var wantToRemoveAll = typeof eventName === 'undefined';

      if (wantToRemoveAll) {
        // Killing old events storage should be enough in this case:
        registeredEvents = Object.create(null);
        return subject;
      }

      if (registeredEvents[eventName]) {
        var deleteAllCallbacksForEvent = typeof callback !== 'function';

        if (deleteAllCallbacksForEvent) {
          delete registeredEvents[eventName];
        } else {
          var callbacks = registeredEvents[eventName];

          for (var i = 0; i < callbacks.length; ++i) {
            if (callbacks[i].callback === callback) {
              callbacks.splice(i, 1);
            }
          }
        }
      }

      return subject;
    },
    fire: function (eventName) {
      var callbacks = registeredEvents[eventName];

      if (!callbacks) {
        return subject;
      }

      var fireArguments;

      if (arguments.length > 1) {
        fireArguments = Array.prototype.splice.call(arguments, 1);
      }

      for (var i = 0; i < callbacks.length; ++i) {
        var callbackInfo = callbacks[i];
        callbackInfo.callback.apply(callbackInfo.ctx, fireArguments);
      }

      return subject;
    }
  };
}

function validateSubject(subject) {
  if (!subject) {
    throw new Error('Eventify cannot use falsy object as events subject');
  }

  var reservedWords = ['on', 'fire', 'off'];

  for (var i = 0; i < reservedWords.length; ++i) {
    if (subject.hasOwnProperty(reservedWords[i])) {
      throw new Error("Subject cannot be eventified, since it already has property '" + reservedWords[i] + "'");
    }
  }
}

/***/ }),

/***/ "./src/utils/expose.js":
/*!*****************************!*\
  !*** ./src/utils/expose.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exposeProperties; });
/**
 * Augments `target` object with getter/setter functions, which modify settings
 *
 * @example
 *  var target = {};
 *  exposeProperties({ age: 42}, target);
 *  target.age(); // returns 42
 *  target.age(24); // make age 24;
 *
 *  var filteredTarget = {};
 *  exposeProperties({ age: 42, name: 'John'}, filteredTarget, ['name']);
 *  filteredTarget.name(); // returns 'John'
 *  filteredTarget.age === undefined; // true
 */
function exposeProperties(settings, target, filter) {
  var needsFilter = Object.prototype.toString.call(filter) === '[object Array]';

  if (needsFilter) {
    for (var i = 0; i < filter.length; ++i) {
      augment(settings, target, filter[i]);
    }
  } else {
    for (var key in settings) {
      augment(settings, target, key);
    }
  }
}

function augment(source, target, key) {
  if (source.hasOwnProperty(key)) {
    if (typeof target[key] === 'function') {
      // this accessor is already defined. Ignore it
      return;
    }

    target[key] = function (value) {
      if (value !== undefined) {
        source[key] = value;
        return target;
      }

      return source[key];
    };
  }
}

/***/ }),

/***/ "./src/utils/merge.js":
/*!****************************!*\
  !*** ./src/utils/merge.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
/**
 * Augments `target` with properties in `options`. Does not override
 * target's properties if they are defined and matches expected type in 
 * options
 *
 * @returns {Object} merged object
 */
function merge(target, options) {
  var key;

  if (!target) {
    target = {};
  }

  if (options) {
    for (key in options) {
      if (options.hasOwnProperty(key)) {
        var targetHasIt = target.hasOwnProperty(key),
            optionsValueType = typeof options[key],
            shouldReplace = !targetHasIt || typeof target[key] !== optionsValueType;

        if (shouldReplace) {
          target[key] = options[key];
        } else if (optionsValueType === 'object') {
          // go deep, don't care about loops here, we are simple API!:
          target[key] = merge(target[key], options[key]);
        }
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/*! exports provided: getRandom, randomIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomIterator", function() { return randomIterator; });
/**
 * Creates seeded PRNG with two methods:
 *   next() and nextDouble()
 */
function getRandom(inputSeed) {
  var seed = typeof inputSeed === 'number' ? inputSeed : +new Date();
  return new Generator(seed);
}

function Generator(seed) {
  this.seed = seed;
}
/**
  * Generates random integer number in the range from 0 (inclusive) to maxValue (exclusive)
  *
  * @param maxValue Number REQUIRED. Omitting this number will result in NaN values from PRNG.
  */


Generator.prototype.next = next;
/**
  * Generates random double number in the range from 0 (inclusive) to 1 (exclusive)
  * This function is the same as Math.random() (except that it could be seeded)
  */

Generator.prototype.nextDouble = nextDouble;
/**
 * Returns a random real number uniformly in [0, 1)
 */

Generator.prototype.uniform = nextDouble;
Generator.prototype.gaussian = gaussian;

function gaussian() {
  // use the polar form of the Box-Muller transform
  // based on https://introcs.cs.princeton.edu/java/23recursion/StdRandom.java
  var r, x, y;

  do {
    x = this.nextDouble() * 2 - 1;
    y = this.nextDouble() * 2 - 1;
    r = x * x + y * y;
  } while (r >= 1 || r === 0);

  return x * Math.sqrt(-2 * Math.log(r) / r);
}

function nextDouble() {
  var seed = this.seed; // Robert Jenkins' 32 bit integer hash function.

  seed = seed + 0x7ed55d16 + (seed << 12) & 0xffffffff;
  seed = (seed ^ 0xc761c23c ^ seed >>> 19) & 0xffffffff;
  seed = seed + 0x165667b1 + (seed << 5) & 0xffffffff;
  seed = (seed + 0xd3a2646c ^ seed << 9) & 0xffffffff;
  seed = seed + 0xfd7046c5 + (seed << 3) & 0xffffffff;
  seed = (seed ^ 0xb55a4f09 ^ seed >>> 16) & 0xffffffff;
  this.seed = seed;
  return (seed & 0xfffffff) / 0x10000000;
}

function next(maxValue) {
  return Math.floor(this.nextDouble() * maxValue);
}
/*
 * Creates iterator over array, which returns items of array in random order
 * Time complexity is guaranteed to be O(n);
 */


function randomIterator(array, customRandom) {
  var localRandom = customRandom || random();

  if (typeof localRandom.next !== 'function') {
    throw new Error('customRandom does not match expected API: next() function is missing');
  }

  return {
    forEach: forEach,

    /**
     * Shuffles array randomly, in place.
     */
    shuffle: shuffle
  };

  function shuffle() {
    var i, j, t;

    for (i = array.length - 1; i > 0; --i) {
      j = localRandom.next(i + 1); // i inclusive

      t = array[j];
      array[j] = array[i];
      array[i] = t;
    }

    return array;
  }

  function forEach(callback) {
    var i, j, t;

    for (i = array.length - 1; i > 0; --i) {
      j = localRandom.next(i + 1); // i inclusive

      t = array[j];
      array[j] = array[i];
      array[i] = t;
      callback(t);
    }

    if (array.length) {
      callback(array[0]);
    }
  }
}

/***/ }),

/***/ "./src/utils/timer.js":
/*!****************************!*\
  !*** ./src/utils/timer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * @author Andrei Kashcha (aka anvaka) / https://github.com/anvaka
 */
var alltimer = createTimer();

function createTimer() {
  var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      i,
      scope;

  if (typeof window !== 'undefined') {
    scope = window;
  } else if (typeof global !== 'undefined') {
    scope = global;
  } else {
    scope = {
      setTimeout: noop,
      clearTimeout: noop
    };
  }

  for (i = 0; i < vendors.length && !scope.requestAnimationFrame; ++i) {
    var vendorPrefix = vendors[i];
    scope.requestAnimationFrame = scope[vendorPrefix + 'RequestAnimationFrame'];
    scope.cancelAnimationFrame = scope[vendorPrefix + 'CancelAnimationFrame'] || scope[vendorPrefix + 'CancelRequestAnimationFrame'];
  }

  if (!scope.requestAnimationFrame) {
    scope.requestAnimationFrame = rafPolyfill;
  }

  if (!scope.cancelAnimationFrame) {
    scope.cancelAnimationFrame = cancelRafPolyfill;
  }

  return timer;
  /**
   * Timer that fires callback with given interval (in ms) until
   * callback returns true;
   */

  function timer(callback) {
    var intervalId;
    startTimer(); // start it right away.

    return {
      /**
       * Stops execution of the callback
       */
      stop: stopTimer,
      restart: restart
    };

    function startTimer() {
      intervalId = scope.requestAnimationFrame(startTimer);

      if (!callback()) {
        stopTimer();
      }
    }

    function stopTimer() {
      scope.cancelAnimationFrame(intervalId);
      intervalId = 0;
    }

    function restart() {
      if (!intervalId) {
        startTimer();
      }
    }
  }

  function rafPolyfill(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = scope.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  }

  function cancelRafPolyfill(id) {
    scope.clearTimeout(id);
  }
}

function noop() {}

/* harmony default export */ __webpack_exports__["default"] = (alltimer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: findElementPosition, getDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementPosition", function() { return findElementPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimension", function() { return getDimension; });
function findElementPosition(obj) {
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
function getDimension(container) {
  if (!container) {
    throw {
      message: 'Cannot get dimensions of undefined container'
    };
  } // TODO: Potential cross browser bug.


  var width = container.clientWidth;
  var height = container.clientHeight;
  return {
    left: 0,
    top: 0,
    width: width,
    height: height
  };
}

/***/ })

/******/ });
//# sourceMappingURL=render.js.map