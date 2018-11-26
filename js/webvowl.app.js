webvowl.app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(315);
	__webpack_require__(317);
	
	module.exports = __webpack_require__(318);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = d3;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(88),
	    getRawTag = __webpack_require__(91),
	    objectToString = __webpack_require__(92);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(89);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(90);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(88);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(87),
	    isObjectLike = __webpack_require__(100);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(216);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(88),
	    arrayMap = __webpack_require__(150),
	    isArray = __webpack_require__(108),
	    isSymbol = __webpack_require__(99);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),

/***/ 315:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/* Taken from here: http://stackoverflow.com/a/17907562 */
	function getInternetExplorerVersion() {
		var ua,
			re,
			rv = -1;
	
		// check for edge
		var isEdge=/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent);
		if (isEdge){
			rv  = parseInt("12");
			return rv;
		}
	
		var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
		if (isIE11){
			rv  = parseInt("11");
			return rv;
		}
		if (navigator.appName === "Microsoft Internet Explorer") {
			ua = navigator.userAgent;
			re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		} else if (navigator.appName === "Netscape") {
			ua = navigator.userAgent;
			re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	}
	
	function showBrowserWarningIfRequired() {
		var version = getInternetExplorerVersion();
		console.log("Browser Version ="+version);
	    if (version > 0 && version <= 11) {
	        d3.select("#browserCheck").classed("hidden", false);
	        d3.select("#killWarning" ).classed("hidden", true);
	        d3.select("#optionsArea" ).classed("hidden", true);
	        d3.select("#logo").classed("hidden", true);
	    }
		if (version == 12 ) {
	        d3.select("#logo").classed("hidden", false);
	        d3.select("#browserCheck").classed("hidden",false);
	        // connect the button;
			var pb_kill=d3.select("#killWarning");
			pb_kill.on("click",function(){
				console.log("hide the warning please");
	            d3.select("#browserCheck").classed("hidden",true);
	            d3.select("#logo").style("padding", "10px");
			});
		}
		else{
	        d3.select("#logo").classed("hidden", false);
	        d3.select("#browserCheck").classed("hidden",true);
		}
	
	}
	
	module.exports = showBrowserWarningIfRequired;
	showBrowserWarningIfRequired();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {module.exports = function () {
	
		var app = {},
			graph = webvowl.graph(),
			options = graph.graphOptions(),
			languageTools = webvowl.util.languageTools(),
			GRAPH_SELECTOR = "#graph",
		// Modules for the webvowl app
			exportMenu     = __webpack_require__(319)     (graph),
			filterMenu     = __webpack_require__(320)     (graph),
			gravityMenu    = __webpack_require__(321)    (graph),
			modeMenu       = __webpack_require__(322)       (graph),
			ontologyMenu   = __webpack_require__(323)   (graph),
			pauseMenu      = __webpack_require__(327)      (graph),
			resetMenu      = __webpack_require__(328)      (graph),
			searchMenu     = __webpack_require__(329)     (graph),
			navigationMenu = __webpack_require__(330) (graph),
	        zoomSlider     = __webpack_require__(331)     (graph),
			sidebar        = __webpack_require__(332)             (graph),
	        configMenu     = __webpack_require__(333)     (graph),
			loadingModule  = __webpack_require__(334)       (graph),
	
	
		// Graph modules
			colorExternalsSwitch 	 = webvowl.modules.colorExternalsSwitch(graph),
			compactNotationSwitch 	 = webvowl.modules.compactNotationSwitch(graph),
			datatypeFilter 			 = webvowl.modules.datatypeFilter(),
			disjointFilter 			 = webvowl.modules.disjointFilter(),
			focuser 				 = webvowl.modules.focuser(),
			emptyLiteralFilter		 = webvowl.modules.emptyLiteralFilter(),
			nodeDegreeFilter 		 = webvowl.modules.nodeDegreeFilter(filterMenu),
			nodeScalingSwitch 		 = webvowl.modules.nodeScalingSwitch(graph),
			objectPropertyFilter 	 = webvowl.modules.objectPropertyFilter(),
			levelFilter				 = webvowl.modules.levelFilter(filterMenu),
			pickAndPin 				 = webvowl.modules.pickAndPin(),
			selectionDetailDisplayer = webvowl.modules.selectionDetailsDisplayer(sidebar.updateSelectionInformation),
			statistics 				 = webvowl.modules.statistics(),
			subclassFilter 			 = webvowl.modules.subclassFilter(),
			setOperatorFilter 		 = webvowl.modules.setOperatorFilter();
	
		app.initialize = function () {
	        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){return setTimeout(f, 1000/60);}; // simulate calling code 60
	        window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(requestID){clearTimeout(requestID);}; //fall back
	
	        options.graphContainerSelector(GRAPH_SELECTOR);
			options.selectionModules().push(focuser);
			options.selectionModules().push(selectionDetailDisplayer );
			options.selectionModules().push(pickAndPin);
	
			options.filterModules().push(emptyLiteralFilter);
			options.filterModules().push(statistics);
			options.filterModules().push(datatypeFilter);
			options.filterModules().push(objectPropertyFilter);
			options.filterModules().push(subclassFilter);
			options.filterModules().push(disjointFilter);
			options.filterModules().push(setOperatorFilter);
			options.filterModules().push(nodeScalingSwitch);
			options.filterModules().push(nodeDegreeFilter);
			options.filterModules().push(levelFilter);
			options.filterModules().push(compactNotationSwitch);
			options.filterModules().push(colorExternalsSwitch);
	
	
			d3.select(window).on("resize", adjustSize);
	
			exportMenu.setup();
			gravityMenu.setup();
			filterMenu.setup(datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter,levelFilter);
			modeMenu.setup(pickAndPin, nodeScalingSwitch, compactNotationSwitch, colorExternalsSwitch);
			pauseMenu.setup();
			sidebar.setup();
			loadingModule.setup();
	
	        var agentVersion=getInternetExplorerVersion();
	       	if (agentVersion> 0 && agentVersion<= 11) {
	            console.log("Agent version "+agentVersion);
	        	console.log("This agent is not supported");
				d3.select("#browserCheck").classed("hidden", false);
				d3.select("#killWarning" ).classed("hidden", true);
				d3.select("#optionsArea" ).classed("hidden", true);
				d3.select("#logo").classed("hidden", true);
	        } else {
				d3.select("#logo").classed("hidden", false);
				if (agentVersion===12) {
					// allow Mircosoft Edge Browser but with warning
	                d3.select("#browserCheck").classed("hidden", false);
	                d3.select("#killWarning").classed("hidden", false);
	            } else {
	                d3.select("#browserCheck").classed("hidden", true);
				}
	
	            resetMenu.setup([gravityMenu, filterMenu, modeMenu, focuser, selectionDetailDisplayer, pauseMenu]);
				searchMenu.setup();
				navigationMenu.setup();
				zoomSlider.setup();
	
				// give the options the pointer to the some menus for import and export
				options.literalFilter(emptyLiteralFilter);
				options.loadingModule(loadingModule);
				options.filterMenu(filterMenu);
				options.modeMenu(modeMenu);
				options.gravityMenu(gravityMenu);
				options.pausedMenu(pauseMenu);
				options.pickAndPinModule(pickAndPin);
				options.resetMenu(resetMenu);
				options.searchMenu(searchMenu);
				options.ontologyMenu(ontologyMenu);
				options.navigationMenu(navigationMenu);
				options.sidebar(sidebar);
				options.exportMenu(exportMenu);
				options.graphObject(graph);
				options.zoomSlider(zoomSlider);
	            ontologyMenu.setup(loadOntologyFromText);
	            configMenu.setup();
				graph.start();
				adjustSize();
	
				var defZoom;
				var w = graph.options().width();
				var h = graph.options().height();
				defZoom = Math.min(w, h) / 1000;
				graph.setDefaultZoom(defZoom);
	
				// prevent backspace reloading event
	            var htmlBody=d3.select("body");
	            d3.select(document).on("keydown", function (e) {
	                if (d3.event.keyCode === 8 && d3.event.target===htmlBody.node() ) {
	                	// we could add here an alert
	                    d3.event.preventDefault();
	                }
	            });
				loadingModule.parseUrlAndLoadOntology(); // loads automatically the ontology provided by the parameters
	        }
		};
	
		function loadOntologyFromText(jsonText, filename, alternativeFilename) {
			pauseMenu.reset();
			graph.options().navigationMenu().hideAllMenus();
	
			if ((jsonText===undefined && filename===undefined) || (jsonText.length===0)){
	            loadingModule.notValidJsonFile();
				return;
			}
	
			var data;
			if (jsonText) {
				// validate JSON FILE
				var validJSON;
				try {
					data =JSON.parse(jsonText);
					validJSON=true;
				} catch (e){
					validJSON=false;
				}
				if (validJSON===false){
					// the server output is not a valid json file
	                loadingModule.notValidJsonFile();
					return;
				}
	
				if (!filename) {
					// First look if an ontology title exists, otherwise take the alternative filename
					var ontologyNames = data.header ? data.header.title : undefined;
					var ontologyName = languageTools.textInLanguage(ontologyNames);
	
					if (ontologyName) {
						filename = ontologyName;
					} else {
						filename = alternativeFilename;
					}
				}
			}
	
	
			// check if we have graph data
	        var classCount =0;
			if (data.class!==undefined){
				classCount=data.class.length;
			}
	
			if (classCount === 0 ){
				// generate message for the user;
				loadingModule.emptyGraphContentError();
			}else {
	            loadingModule.validJsonFile();
	            ontologyMenu.setCachedOntology(filename, jsonText);
	            exportMenu.setJsonText(jsonText);
	            options.data(data);
	            graph.options().loadingModule().setPercentMode();
	            graph.load();
	            sidebar.updateOntologyInformation(data, statistics);
	            exportMenu.setFilename(filename);
	            graph.updateZoomSliderValueFromOutside();
	            adjustSize();
	        }
		}
	
		function adjustSize() {
			var graphContainer = d3.select(GRAPH_SELECTOR),
				svg = graphContainer.select("svg"),
				height = window.innerHeight - 40,
				width = window.innerWidth - (window.innerWidth * 0.22);
	
			if (sidebar.getSidebarVisibility()==="0"){
	            height = window.innerHeight - 40 ;
	            width = window.innerWidth;
	        }
	
	        graph.adjustingGraphSize(true);
			graphContainer.style("height", height + "px");
			svg.attr("width", width)
				.attr("height", height);
	
			options.width ( width  )
				   .height( height );
	
			graph.updateStyle();
	        adjustSliderSize();
	
	        d3.select("#loadingInfo-container").style("height",0.5*(height-80)+"px");
	        loadingModule.checkForScreenSize();
	
			// update also the padding options of loading and the logo positions;
			var warningDiv=d3.select("#browserCheck");
			if (warningDiv.classed("hidden")===false ) {
	            var offset=10+warningDiv.node().getBoundingClientRect().height;
	            d3.select("#logo").style("padding", offset+"px 10px");
	        }else {
				// remove the dynamic padding from the logo element;
	            d3.select("#logo").style("padding", "10px");
	        }
	
	        // scrollbar tests;
			var element =d3.select("#menuElementContainer").node();
	        var maxScrollLeft = element.scrollWidth - element.clientWidth;
	        var leftButton=d3.select("#scrollLeftButton");
	        var rightButton=d3.select("#scrollRightButton");
	        if (maxScrollLeft>0){
	        	// show both and then check how far is bar;
	         	rightButton.classed("hidden",false);
	            leftButton.classed("hidden",false);
	            navigationMenu.updateScrollButtonVisibility();
	         }else{
	        	// hide both;
	            rightButton.classed("hidden",true);
	            leftButton.classed("hidden",true);
			}
	
		}
	
	    function adjustSliderSize(){
			// TODO: refactor and put this into the slider it self
	        var height = window.innerHeight - 40;
	        var fullHeight=height;
	        var zoomOutPos=height-30;
	        var sliderHeight=150;
	        if (fullHeight<150) {
	            // hide the slider button;
	            d3.select("#zoomSliderParagraph").classed("hidden", true);
	            d3.select("#zoomOutButton").classed("hidden", true);
	            d3.select("#zoomInButton").classed("hidden", true);
	            d3.select("#centerGraphButton").classed("hidden", true);
	            return;
	        }
	        d3.select("#zoomSliderParagraph").classed("hidden",false);
	        d3.select("#zoomOutButton").classed("hidden",false);
	        d3.select("#zoomInButton").classed("hidden",false);
	        d3.select("#centerGraphButton").classed("hidden",false);
	
	        var zoomInPos=zoomOutPos-20;
	        var centerPos=zoomInPos-20;
	        if (fullHeight<280){
	            // hide the slider button;
	            d3.select("#zoomSliderParagraph").classed("hidden",true);
	            d3.select("#zoomOutButton").style("top",zoomOutPos+"px");
	            d3.select("#zoomInButton").style("top",zoomInPos+"px");
	            d3.select("#centerGraphButton").style("top",centerPos+"px");
	            return;
	        }
	
	        var sliderPos=zoomOutPos-sliderHeight;
	        zoomInPos=sliderPos-20;
	        centerPos=zoomInPos-20;
	        d3.select("#zoomSliderParagraph").classed("hidden",false);
	        d3.select("#zoomOutButton").style("top",zoomOutPos+"px");
	        d3.select("#zoomInButton").style("top",zoomInPos+"px");
	        d3.select("#centerGraphButton").style("top",centerPos+"px");
	        d3.select("#zoomSliderParagraph").style("top",sliderPos+"px");
	    }
	
		function getInternetExplorerVersion(){
	        var ua,
	            re,
	            rv = -1;
	
	        // check for edge
	        var isEdge=/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent);
	        if (isEdge){
	            rv  = parseInt("12");
	            return rv;
	        }
	
	        var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
	        if (isIE11){
	            rv  = parseInt("11");
	            return rv;
	        }
	        if (navigator.appName === "Microsoft Internet Explorer") {
	            ua = navigator.userAgent;
	            re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
	            if (re.exec(ua) !== null) {
	                rv = parseFloat(RegExp.$1);
	            }
	        } else if (navigator.appName === "Netscape") {
	            ua = navigator.userAgent;
	            re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
	            if (re.exec(ua) !== null) {
	                rv = parseFloat(RegExp.$1);
	            }
	        }
	        return rv;
		}
	
		return app;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the export button.
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var exportMenu = {},
			exportSvgButton,
			exportFilename,
			exportJsonButton,
			copyButton,
			exportableJsonText;
	
	
	
	
	
	    /**
		 * Adds the export button to the website.
		 */
		exportMenu.setup = function () {
			exportSvgButton = d3.select("#exportSvg")
				.on("click", exportSvg);
			exportJsonButton = d3.select("#exportJson")
				.on("click", exportJson);
	
			copyButton=d3.select("#copyBt")
	            .on("click", copyUrl);
	
	
	        var menuEntry= d3.select("#m_export");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
	            exportMenu.exportAsUrl();
			});
		};
	
		exportMenu.setFilename = function (filename) {
			exportFilename = filename || "export";
		};
	
		exportMenu.setJsonText = function (jsonText) {
			exportableJsonText = jsonText;
		};
	
		function copyUrl(){
	        d3.select("#exportedUrl").node().focus();
	        d3.select("#exportedUrl").node().select();
	        document.execCommand("copy");
	        graph.options().navigationMenu().hideAllMenus();
		}
	
		function prepareOptionString(defOpts,currOpts){
			var setOptions=0;
	        var optsString="opts=";
	
			for (var name in defOpts) {
				// define key and value ;
				if (defOpts.hasOwnProperty(name)) {// for travis warning
					var def_value = defOpts[name];
					var cur_value = currOpts[name];
					if (def_value !== cur_value) {
						optsString += name + "=" + cur_value + ";";
						setOptions++;
					}
				}
			}
			optsString+="";
			if (setOptions===0){ return "";}
			return optsString;
		}
	
		 exportMenu.exportAsUrl=function(){
	
	        var currObj={};
	        currObj.sidebar=graph.options().sidebar().getSidebarVisibility();
	
	        // identify default value given by ontology;
			var defOntValue=graph.options().filterMenu().getDefaultDegreeValue();
			var currentValue=graph.options().filterMenu().getDegreeSliderValue();
			
			if (parseInt(defOntValue)===parseInt(currentValue)) {
				currObj.doc=-1;
			}else{ currObj.doc=currentValue;}
	
	        currObj.cd=graph.options().classDistance();
	        currObj.dd=graph.options().datatypeDistance();
	        currObj.filter_datatypes=String(graph.options().filterMenu().getCheckBoxValue("datatypeFilterCheckbox"));
	        currObj.filter_sco=String(graph.options().filterMenu().getCheckBoxValue("subclassFilterCheckbox"));
	        currObj.filter_disjoint=String(graph.options().filterMenu().getCheckBoxValue("disjointFilterCheckbox"));
	        currObj.filter_setOperator=String(graph.options().filterMenu().getCheckBoxValue("setoperatorFilterCheckbox"));
	        currObj.filter_objectProperties=String(graph.options().filterMenu().getCheckBoxValue("objectPropertyFilterCheckbox"));
	        currObj.mode_dynamic=String(graph.options().dynamicLabelWidth());
	        currObj.mode_scaling=String(graph.options().modeMenu().getCheckBoxValue("nodescalingModuleCheckbox"));
	        currObj.mode_compact=String(graph.options().modeMenu().getCheckBoxValue("compactnotationModuleCheckbox"));
	        currObj.mode_colorExt=String(graph.options().modeMenu().getCheckBoxValue("colorexternalsModuleCheckbox"));
	        currObj.mode_multiColor=String(graph.options().modeMenu().colorModeState());
	        currObj.rect=0;
	
			var defObj=graph.options().defaultConfig();
	        var optsString=prepareOptionString(defObj,currObj);
	        var urlString=String(location);
	        var htmlElement;
	        // when everything is default then there is nothing to write
			if (optsString.length===0){
	            // building up parameter list;
	            htmlElement=d3.select("#exportedUrl").node();
	            htmlElement.value=urlString;
	            // ** -- removed for touch devices : otherwise this will call the mobile-keyboard -- ** //
	            // htmlElement.focus();
	            // htmlElement.select();
	            htmlElement.title=urlString;
	            return ;
			}
	
	        // generate the options string;
	        var numParameters=(urlString.match(/#/g) || []).length;
	        var newUrlString;
	        if (numParameters===undefined || numParameters===0){
	            newUrlString=urlString+"#"+optsString;
			}
	        if (numParameters>0) {
	            var tokens = urlString.split("#");
	            var i;
	            if (tokens[1].indexOf("opts=")>=0){
					tokens[1]=optsString;
	                newUrlString=tokens[0];
				}else{
	                newUrlString=tokens[0]+"#";
	                newUrlString+=optsString;
				}
				// append parameters
	            for (i=1;i<tokens.length;i++){
	            	if (tokens[i].length>0) {
	                    newUrlString += "#" + tokens[i];
	                }
	            }
	        }
	        // building up parameter list;
	        htmlElement=d3.select("#exportedUrl").node();
	        htmlElement.value=newUrlString;
	        htmlElement.focus();
	        htmlElement.select();
	        htmlElement.title=newUrlString;
		};
	
		function exportSvg() {
	        graph.options().navigationMenu().hideAllMenus();
			// Get the d3js SVG element
			var graphSvg = d3.select(graph.options().graphContainerSelector()).select("svg"),
				graphSvgCode,
				escapedGraphSvgCode,
				dataURI;
	
			// inline the styles, so that the exported svg code contains the css rules
			inlineVowlStyles();
			hideNonExportableElements();
	
			graphSvgCode = graphSvg.attr("version", 1.1)
				.attr("xmlns", "http://www.w3.org/2000/svg")
				.node().parentNode.innerHTML;
	
			// Insert the reference to VOWL
			graphSvgCode = "<!-- Created with WebVOWL (version " + webvowl.version + ")" +
			               ", http://vowl.visualdataweb.org -->\n" + graphSvgCode;
	
			escapedGraphSvgCode = escapeUnicodeCharacters(graphSvgCode);
			//btoa(); Creates a base-64 encoded ASCII string from a "string" of binary data.
			dataURI = "data:image/svg+xml;base64," + btoa(escapedGraphSvgCode);
	
			exportSvgButton.attr("href", dataURI)
				.attr("download", exportFilename + ".svg");
	
			// remove graphic styles for interaction to go back to normal
			removeVowlInlineStyles();
			showNonExportableElements();
		}
	
		function escapeUnicodeCharacters(text) {
			var textSnippets = [],
				i, textLength = text.length,
				character,
				charCode;
	
			for (i = 0; i < textLength; i++) {
				character = text.charAt(i);
				charCode = character.charCodeAt(0);
	
				if (charCode < 128) {
					textSnippets.push(character);
				} else {
					textSnippets.push("&#" + charCode + ";");
				}
			}
	
			return textSnippets.join("");
		}
	
		function inlineVowlStyles() {
			setStyleSensitively(".text", [{name: "font-family", value: "Helvetica, Arial, sans-serif"}, {name: "font-size", value: "12px"}]);
			setStyleSensitively(".subtext", [{name: "font-size", value: "9px"}]);
			setStyleSensitively(".text.instance-count", [{name: "fill", value: "#666"}]);
			setStyleSensitively(".external + text .instance-count", [{name: "fill", value: "#aaa"}]);
			setStyleSensitively(".cardinality", [{name: "font-size", value: "10px"}]);
			setStyleSensitively(".text, .embedded", [{name: "pointer-events", value: "none"}]);
			setStyleSensitively(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{name: "fill", value: "#acf"}]);
			setStyleSensitively(".label .datatype, .datatypeproperty", [{name: "fill", value: "#9c6"}]);
			setStyleSensitively(".rdf, .rdfproperty", [{name: "fill", value: "#c9c"}]);
			setStyleSensitively(".literal, .node .datatype", [{name: "fill", value: "#fc3"}]);
			setStyleSensitively(".deprecated, .deprecatedproperty", [{name: "fill", value: "#ccc"}]);
			setStyleSensitively(".external, .externalproperty", [{name: "fill", value: "#36c"}]);
			setStyleSensitively("path, .nofill", [{name: "fill", value: "none"}]);
			setStyleSensitively("marker path", [{name: "fill", value: "#000"}]);
			setStyleSensitively(".class, path, line, .fineline", [{name: "stroke", value: "#000"}]);
			setStyleSensitively(".white, .subclass, .subclassproperty, .external + text", [{name: "fill", value: "#fff"}]);
			setStyleSensitively(".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{name: "fill", value: "#f00"}, {name: "cursor", value: "pointer"}]);
			setStyleSensitively(".focused, path.hovered", [{name: "stroke", value: "#f00"}]);
			setStyleSensitively(".indirect-highlighting, .feature:hover", [{name: "fill", value: "#f90"}]);
			setStyleSensitively(".values-from", [{name: "stroke", value: "#69c"}]);
			setStyleSensitively(".symbol, .values-from.filled", [{name: "fill", value: "#69c"}]);
			setStyleSensitively(".class, path, line", [{name: "stroke-width", value: "2"}]);
			setStyleSensitively(".fineline", [{name: "stroke-width", value: "1"}]);
			setStyleSensitively(".dashed, .anonymous", [{name: "stroke-dasharray", value: "8"}]);
			setStyleSensitively(".dotted", [{name: "stroke-dasharray", value: "3"}]);
			setStyleSensitively("rect.focused, circle.focused", [{name: "stroke-width", value: "4px"}]);
			setStyleSensitively(".nostroke", [{name: "stroke", value: "none"}]);
			setStyleSensitively("marker path", [{name: "stroke-dasharray", value: "100"}]);
		}
	
		function setStyleSensitively(selector, styles) {
			var elements = d3.selectAll(selector);
			if (elements.empty()) {
				return;
			}
	
			styles.forEach(function (style) {
				elements.each(function () {
					var element = d3.select(this);
					if (!shouldntChangeInlineCss(element, style.name)) {
						element.style(style.name, style.value);
					}
				});
			});
		}
	
		function shouldntChangeInlineCss(element, style) {
			return style === "fill" && hasBackgroundColorSet(element);
		}
	
		function hasBackgroundColorSet(element) {
			var data = element.datum();
			if (data===undefined) { return false; }
			return data.backgroundColor && !!data.backgroundColor();
		}
	
		/**
		 * For example the pin of the pick&pin module should be invisible in the exported graphic.
		 */
		function hideNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", "none");
		}
	
		function removeVowlInlineStyles() {
			d3.selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path")
				.each(function () {
					var element = d3.select(this);
	
					var inlineStyles = element.node().style;
					for (var styleName in inlineStyles) {
						if (inlineStyles.hasOwnProperty(styleName)) {
							if (shouldntChangeInlineCss(element, styleName)) {
								continue;
							}
							element.style(styleName, null);
						}
					}
					if (element.datum && element.datum()!==undefined && element.datum().type){
						if (element.datum().type()==="rdfs:subClassOf") {
							element.style("fill", null);
						}
					}
				});
	
			// repair svg icons in the menu;
	        var scrollContainer = d3.select("#menuElementContainer").node();
	        var controlElements=scrollContainer.children;
	        var numEntries = controlElements.length;
	
	        for (var  i = 0; i < numEntries; i++) {
	            var currentMenu=controlElements[i].id;
	            d3.select("#" + currentMenu).select("path").style("stroke-width", "0");
	            d3.select("#" + currentMenu).select("path").style("fill", "#fff");
	        }
	
	        d3.select("#magnifyingGlass").style("stroke-width","0");
	        d3.select("#magnifyingGlass").style("fill","#666");
	
	    }
	
		function showNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", null);
		}
	
		function exportJson() {
	        graph.options().navigationMenu().hideAllMenus();
			/**  check if there is data **/
			if (!exportableJsonText) {
				alert("No graph data available.");
				// Stop the redirection to the path of the href attribute
				d3.event.preventDefault();
				return;
			}
	
			var i; // an index variable for the for-loops
	
			/** get data for exporter **/
			var nodeElements = graph.graphNodeElements();  // get visible nodes
			var propElements = graph.graphLabelElements(); // get visible labels
			var jsonObj = JSON.parse(exportableJsonText);	   // reparse the original input json
	
			/** modify comment **/
			var comment = jsonObj._comment;
			var additionalString = " [Additional Information added by WebVOWL Exporter Version: " + "1.1.2" + "]";
			// adding new string to comment only if it does not exist
			if (comment.indexOf(additionalString) === -1) {
				jsonObj._comment = comment + " [Additional Information added by WebVOWL Exporter Version: " + "1.1.2" + "]";
			}
	
			var classAttribute = jsonObj.classAttribute;
			var propAttribute = jsonObj.propertyAttribute;
			/**  remove previously stored variables **/
			for (i = 0; i < classAttribute.length; i++) {
				var classObj = classAttribute[i];
				delete classObj.pos;
				delete classObj.pinned;
			}
			var propertyObj;
			for (i = 0; i < propAttribute.length; i++) {
				propertyObj = propAttribute[i];
				delete propertyObj.pos;
				delete propertyObj.pinned;
			}
			/**  add new variables to jsonObj  **/
			// class attribute variables
			nodeElements.each(function (node) {
				var nodeId = node.id();
				for (i = 0; i < classAttribute.length; i++) {
					var classObj = classAttribute[i];
					if (classObj.id === nodeId) {
						// store relative positions
						classObj.pos = [node.x, node.y];
						if (node.pinned())
							classObj.pinned = true;
						break;
					}
				}
			});
			// property attribute variables
			for (var j = 0; j < propElements.length; j++) {
				var correspondingProp = propElements[j].property();
				for (i = 0; i < propAttribute.length; i++) {
					propertyObj = propAttribute[i];
					if (propertyObj.id === correspondingProp.id()) {
						propertyObj.pos = [propElements[j].x, propElements[j].y];
						if (propElements[j].pinned())
							propertyObj.pinned = true;
						break;
					}
				}
			}
			/** create the variable for settings and set their values **/
			jsonObj.settings = {};
	
			// Global Settings
			var zoom = graph.scaleFactor();
			var paused = graph.paused();
			var translation = graph.translation();
			jsonObj.settings.global = {};
			jsonObj.settings.global.zoom = zoom;
			jsonObj.settings.global.translation = translation;
			jsonObj.settings.global.paused = paused;
	
			// shared variable declaration
			var cb_text;
			var isEnabled;
			var cb_obj;
	
			// Gravity Settings
			var classDistance = graph.options().classDistance();
			var datatypeDistance = graph.options().datatypeDistance();
			jsonObj.settings.gravity = {};
			jsonObj.settings.gravity.classDistance = classDistance;
			jsonObj.settings.gravity.datatypeDistance = datatypeDistance;
	
			// Filter Settings
			var fMenu = graph.options().filterMenu();
			var fContainer = fMenu.getCheckBoxContainer();
			var cbCont = [];
			for (i = 0; i < fContainer.length; i++) {
				cb_text = fContainer[i].checkbox.attr("id");
				isEnabled = fContainer[i].checkbox.property("checked");
				cb_obj = {};
				cb_obj.id = cb_text;
				cb_obj.checked = isEnabled;
				cbCont.push(cb_obj);
			}
			var degreeSliderVal = fMenu.getDegreeSliderValue();
			jsonObj.settings.filter = {};
			jsonObj.settings.filter.checkBox = cbCont;
			jsonObj.settings.filter.degreeSliderValue = degreeSliderVal;
	
			//level
			var levelSliderVal = fMenu.getLevelSliderValue();
			jsonObj.settings.filter = {};
			jsonObj.settings.filter.levelSliderValue = levelSliderVal;
	
			// Modes Settings
			var mMenu = graph.options().modeMenu();
			var mContainer = mMenu.getCheckBoxContainer();
			var cb_modes = [];
			for (i = 0; i < mContainer.length; i++) {
				cb_text = mContainer[i].attr("id");
				isEnabled = mContainer[i].property("checked");
				cb_obj = {};
				cb_obj.id = cb_text;
				cb_obj.checked = isEnabled;
				cb_modes.push(cb_obj);
			}
			var colorSwitchState = mMenu.colorModeState();
			jsonObj.settings.modes = {};
			jsonObj.settings.modes.checkBox = cb_modes;
			jsonObj.settings.modes.colorSwitchState = colorSwitchState;
	
			var exportObj = {};
			// todo: [ ] find better way for ordering the objects
			// hack for ordering of objects, so settings is after metrics
			exportObj._comment = jsonObj._comment;
			exportObj.header = jsonObj.header;
			exportObj.namespace = jsonObj.namespace;
			exportObj.metrics = jsonObj.metrics;
			exportObj.settings = jsonObj.settings;
			exportObj.class = jsonObj.class;
			exportObj.classAttribute = jsonObj.classAttribute;
			exportObj.property = jsonObj.property;
			exportObj.propertyAttribute = jsonObj.propertyAttribute;
	
	
			// make a string again;
			var exportText = JSON.stringify(exportObj, null, '  ');
			// write the data
			var dataURI = "data:text/json;charset=utf-8," + encodeURIComponent(exportText);
			exportJsonButton.attr("href", dataURI)
				.attr("download", exportFilename + ".json");
		}
	
		return exportMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the filters with the website.
	 *
	 * @param graph required for calling a refresh after a filter change
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var filterMenu = {},
			checkboxData = [],
			menuElement = d3.select("#m_filter"),
	        menuControl= d3.select("#c_filter a"),
			nodeDegreeContainer = d3.select("#nodeDegreeFilteringOption"),
			levelContainer = d3.select("#levelFilteringOption"),
			graphDegreeLevel,
			graphLevelLevel,
			defaultDegreeValue=0,
			defaultLevelValue=0,
			levelSlider,
			degreeSlider;
	
	    filterMenu.setDefaultDegreeValue=function(val){defaultDegreeValue=val;};
	    filterMenu.getDefaultDegreeValue=function(){return defaultDegreeValue;};
	
	    filterMenu.setDefaultLevelValue=function(val){
	    	defaultLevelValue=val;
	    };
	    filterMenu.getDefaultLevelValue=function(){
	    	return defaultLevelValue;
	    };
	
		filterMenu.getGraphObject=function(){
			return graph;
		};
		/** some getter function  **/
		filterMenu.getCheckBoxContainer = function () {
			return checkboxData;
		};
	
		/**
		 * Connects the website with graph filters.
		 * @param datatypeFilter filter for all datatypes
		 * @param objectPropertyFilter filter for all object properties
		 * @param subclassFilter filter for all subclasses
		 * @param disjointFilter filter for all disjoint with properties
		 * @param setOperatorFilter filter for all set operators with properties
		 * @param nodeDegreeFilter filters nodes by their degree
		 */
		filterMenu.setup = function (datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter, levelFilter) {
			// TODO: is this here really necessarry? << new menu visualization style?
	        menuControl.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
	        menuControl.on("mouseleave", function () {
				filterMenu.highlightForDegreeSlider(false);
			});
	
	//		addFilterItem(datatypeFilter, "datatype", "Datatype properties", "#datatypeFilteringOption");
	//		addFilterItem(objectPropertyFilter, "objectProperty", "Object properties", "#objectPropertyFilteringOption");
	//		addFilterItem(subclassFilter, "subclass", "Solitary subclasses", "#subclassFilteringOption");
	//		addFilterItem(disjointFilter, "disjoint", "Class disjointness", "#disjointFilteringOption");
			addFilterItem(setOperatorFilter, "setoperator", "Set operators", "#setOperatorFilteringOption");
	
			addNodeDegreeFilter(nodeDegreeFilter, nodeDegreeContainer);
			addLevelFilter(levelFilter,levelContainer);
	        addAnimationFinishedListener();
		};
	
	
		function addFilterItem(filter, identifier, pluralNameOfFilteredItems, selector) {
			var filterContainer,
				filterCheckbox;
	
			filterContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true);
	
			filterCheckbox = filterContainer.append("input")
				.classed("filterCheckbox", true)
				.attr("id", identifier + "FilterCheckbox")
				.attr("type", "checkbox")
				.property("checked", filter.enabled());
	
			// Store for easier resetting
			checkboxData.push({checkbox: filterCheckbox, defaultState: filter.enabled()});
	
			filterCheckbox.on("click", function (silent) {
				// There might be no parameters passed because of a manual
				// invocation when resetting the filters
				var isEnabled = filterCheckbox.property("checked");
				filter.enabled(isEnabled);
				if (silent !== true) {
					// updating graph when silent is false or the parameter is not given.
					graph.update();
				}
			});
	
			filterContainer.append("label")
				.attr("for", identifier + "FilterCheckbox")
				.text(pluralNameOfFilteredItems);
		}
	
		function addNodeDegreeFilter(nodeDegreeFilter, container) {
			nodeDegreeFilter.setMaxDegreeSetter(function (maxDegree) {
				degreeSlider.attr("max", 1);
				setSliderValue(degreeSlider, Math.min(maxDegree, degreeSlider.property("value")));
			});
	
			nodeDegreeFilter.setDegreeGetter(function () {
				return +degreeSlider.property("value");
			});
	
			nodeDegreeFilter.setDegreeSetter(function (value) {
				setSliderValue(degreeSlider, value);
			});
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = container.append("div")
				.classed("distanceSliderContainer", true);
	
			degreeSlider = sliderContainer.append("input")
				.attr("id", "nodeDegreeDistanceSlider")
				.attr("type", "range")
				.attr("min", 0)
				.attr("step", 1);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text("塌陷度");
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text(0);
	
	
	
			degreeSlider.on("change", function (silent) {
				if (silent !== true) {
					graph.update();
					graphDegreeLevel=degreeSlider.property("value");
				}
			});
	
	
			degreeSlider.on("input", function () {
				var degree = degreeSlider.property("value");
				sliderValueLabel.text(degree);
			});
	
	
			// adding wheel events
			degreeSlider.on("wheel",handleWheelEvent);
			degreeSlider.on("focusout",function(){
				if (degreeSlider.property("value")!==graphDegreeLevel) {
					graph.update();
				}
			});
		}
	
		function addLevelFilter(levelFilter, container) {
			levelFilter.setMaxLevelSetter(function (maxLevel) {
				levelSlider.attr("max", maxLevel);
				setSliderValue(levelSlider, Math.min(maxLevel, levelSlider.property("value")));
			});
	
			levelFilter.setLevelGetter(function () {
				return +levelSlider.property("value");
			});
	
			levelFilter.setLevelSetter(function (value) {
				setSliderValue(levelSlider, value);
			});
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = container.append("div")
				.classed("distanceSliderContainer", true);
	
			levelSlider = sliderContainer.append("input")
				.attr("id", "levelDistanceSlider")
				.attr("type", "range")
				.attr("min", 1)
				.attr("step", 1);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", "levelDistanceSlider")
				.text("显示层级");
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", "levelDistanceSlider")
				.text(0);
	
	
			levelSlider.on("change", function (silent) {
				if (silent !== true) {
					graph.update();
					graphLevelLevel=levelSlider.property("value");
				}
			});
	
	
			levelSlider.on("input", function () {
				var degree = levelSlider.property("value");
				sliderValueLabel.text(degree);
			});
	
	
			// adding wheel events
			levelSlider.on("wheel",handleWheelEvent);
			levelSlider.on("focusout",function(){
				if (levelSlider.property("value")!==graphLevelLevel) {
					graph.update();
				}
			});
		}
	
		function handleWheelEvent(){
			var wheelEvent=d3.event;
	
			var offset;
			if (wheelEvent.deltaY<0) offset=1;
			if (wheelEvent.deltaY>0) offset=-1;
	
			var oldVal=parseInt(degreeSlider.property("value"));
			var newSliderValue=oldVal+offset;
			if (oldVal!==newSliderValue) {
				// only update when they are different [reducing redundant updates]
				// set the new value and emit an update signal
				degreeSlider.property("value", newSliderValue);
				degreeSlider.on("input")();// <<-- sets the text value
				graph.update();
			}
			d3.event.preventDefault();
		}
		
		function setSliderValue(slider, value) {
			slider.property("value", value).on("input")();
		}
	
		/**
		 * Resets the filters (and also filtered elements) to their default.
		 */
		filterMenu.reset = function () {
			checkboxData.forEach(function (checkboxData) {
				var checkbox = checkboxData.checkbox,
					enabledByDefault = checkboxData.defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== enabledByDefault) {
					checkbox.property("checked", enabledByDefault);
					// Call onclick event handlers programmatically
					checkbox.on("click")();
				}
			});
	
			setSliderValue(degreeSlider, degreeSlider.property("max"));
			setSliderValue(levelSlider, levelSlider.property("max"));
			degreeSlider.on("change")();
			levelSlider.on("change")();
		};
	
		function addAnimationFinishedListener() {
	        menuControl.node().addEventListener("animationend", function () {
	            menuControl.classed("buttonPulse", false);
	            menuControl.classed("filterMenuButtonHighlight", true);
	
	        });
	    }
	
	    filterMenu.killButtonAnimation=function(){
	        menuControl.classed("buttonPulse", false);
	        menuControl.classed("filterMenuButtonHighlight", false);
		};
	
		filterMenu.highlightForDegreeSlider = function (enable) {
			if (!arguments.length) {
				enable = true;
			}
	        menuControl.classed("highlighted", enable);
			nodeDegreeContainer.classed("highlighted", enable);
			// pulse button handling
			if (menuControl.classed("buttonPulse")===true && enable===true){
	            menuControl.classed("buttonPulse", false);
				var timer= setTimeout(function() {
	                menuControl.classed("buttonPulse", enable);
					clearTimeout(timer);
					// after the time is done, remove the pulse but stay highlighted
				}, 100);
			}else {
	            menuControl.classed("buttonPulse", enable);
	            menuControl.classed("filterMenuButtonHighlight", enable);
			}
		};
	
	
		/** importer functions **/
		// setting manually the values of the filter
		// no update of the gui settings, these are updated in updateSettings
		filterMenu.setCheckBoxValue = function (id, checked) {
	
		};
	
		filterMenu.getCheckBoxValue=function(id){
			
		};
		// set the value of the slider
		filterMenu.setDegreeSliderValue = function (val) {
			degreeSlider.property("value", val);
		};
	
		filterMenu.getDegreeSliderValue = function(){
			return degreeSlider.property("value");
		};
	
		// set the value of the slider
		filterMenu.setLevelSliderValue = function (val) {
			levelSlider.property("value", val);
		};
	
		filterMenu.getLevelSliderValue = function(){
			var level = levelSlider.property("value");
			return level;
		};
	
		// update the gui without invoking graph update (calling silent onclick function)
		filterMenu.updateSettings = function () {
	
			var silent = true;
			var sliderValue = degreeSlider.property("value");
			if (sliderValue > 0) {
				filterMenu.highlightForDegreeSlider(true);
			} else{
				filterMenu.highlightForDegreeSlider(false);
			}
	
			var levelSliderValue = levelSlider.property("value");
			if (levelSliderValue > 0) {
				filterMenu.highlightForDegreeSlider(true);
			} else{
				filterMenu.highlightForDegreeSlider(false);
			}
	
			checkboxData.forEach(function (checkboxData) {
				var checkbox = checkboxData.checkbox;
			});
	
			degreeSlider.on("input")();
			degreeSlider.on("change")(silent);
			levelSlider.on("input")();
			levelSlider.on("change")(silent);
		};
	
		return filterMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for setting up the gravity sliders.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var gravityMenu = {},
			sliders = [],
			options = graph.graphOptions(),
			defaultCharge = options.charge();
	
	
		/**
		 * Adds the gravity sliders to the website.
		 */
		gravityMenu.setup = function () {
			var menuEntry= d3.select("#m_gravity");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			addDistanceSlider("#classSliderOption", "class", "节点间距", options.classDistance);
			addDistanceSlider("#datatypeSliderOption", "datatype", "连线长度", options.datatypeDistance);
		};
	
		function addDistanceSlider(selector, identifier, label, distanceFunction) {
			var defaultLinkDistance = distanceFunction();
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = d3.select(selector)
				.append("div")
				.datum({distanceFunction: distanceFunction}) // connect the options-function with the slider
				.classed("distanceSliderContainer", true);
	
			var slider = sliderContainer.append("input")
				.attr("id", identifier + "DistanceSlider")
				.attr("type", "range")
				.attr("min", 10)
				.attr("max", 600)
				.attr("value", distanceFunction())
				.attr("step", 10);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", identifier + "DistanceSlider")
				.text(label);
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", identifier + "DistanceSlider")
				.text(distanceFunction());
	
			// Store slider for easier resetting
			sliders.push(slider);
	
			slider.on("focusout",function(){
				graph.updateStyle();
			});
	
			slider.on("input", function () {
				var distance = slider.property("value");
				distanceFunction(distance);
				adjustCharge(defaultLinkDistance);
				sliderValueLabel.text(distance);
				graph.updateStyle();
			});
	
			// add wheel event to the slider
			slider.on("wheel",function(){
				var wheelEvent=d3.event;
				var offset;
				if (wheelEvent.deltaY<0) offset=10;
				if (wheelEvent.deltaY>0) offset=-10;
				var oldVal=parseInt(slider.property("value"));
				var newSliderValue=oldVal+offset;
				if (newSliderValue!==oldVal){
					slider.property("value",newSliderValue);
					distanceFunction(newSliderValue);
					slider.on("input")(); // << set text and update the graphStyles
				}
	            d3.event.preventDefault();
			});
		}
	
		function adjustCharge(defaultLinkDistance) {
			var greaterDistance = Math.max(options.classDistance(), options.datatypeDistance()),
				ratio = greaterDistance / defaultLinkDistance,
				newCharge = defaultCharge * ratio;
	
			options.charge(newCharge);
		}
	
		/**
		 * Resets the gravity sliders to their default.
		 */
		gravityMenu.reset = function () {
			sliders.forEach(function (slider) {
				slider.property("value", function (d) {
					// Simply reload the distance from the options
					return d.distanceFunction();
				});
				slider.on("input")();
			});
		};
	
	
		return gravityMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the modes with the website.
	 *
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var SAME_COLOR_MODE = {text: "彩色", type: "same"};
		var GRADIENT_COLOR_MODE = {text: "彩色", type: "gradient"};
	
		var modeMenu = {},
			checkboxes = [],
			colorModeSwitch;
	
		var dynamicLabelWidthCheckBox;
		// getter and setter for the state of color modes
		modeMenu.colorModeState = function (s) {
			if (!arguments.length) return colorModeSwitch.datum().active;
			colorModeSwitch.datum().active = s;
			return modeMenu;
		};
	
	
		modeMenu.setDynamicLabelWidth=function(val){
	        dynamicLabelWidthCheckBox.property("checked",val);
		};
		// getter for checkboxes
		modeMenu.getCheckBoxContainer = function () {
			return checkboxes;
		};
		// getter for the color switch [needed? ]
		modeMenu.colorModeSwitch = function () {
			return colorModeSwitch;
		};
	
		/**
		 * Connects the website with the available graph modes.
		 */
		modeMenu.setup = function (pickAndPin, nodeScaling, compactNotation, colorExternals) {
			var menuEntry= d3.select("#m_modes");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
	    addCheckBox("labelWidth","动态标签宽度","#dynamicLabelWidth",graph.options().dynamicLabelWidth,1);
			addModeItem(pickAndPin, "pickandpin", "挑选 & 抓取", "#pickAndPinOption", false);
			addModeItem(nodeScaling, "nodescaling", "节点缩放", "#nodeScalingOption", true);
			addModeItem(compactNotation, "compactnotation", "紧缩技法", "#compactNotationOption", true);
			var container = addModeItem(colorExternals, "colorexternals", "颜色拓展", "#colorExternalsOption", true);
			colorModeSwitch = addExternalModeSelection(container, colorExternals);
		};
	    function addCheckBox(identifier, modeName, selector,onChangeFunc,updateLvl) {
	        var moduleOptionContainer = d3.select(selector)
	            .append("div")
	            .classed("checkboxContainer", true);
	
	        var moduleCheckbox = moduleOptionContainer.append("input")
	            .classed("moduleCheckbox", true)
	            .attr("id", identifier + "ModuleCheckbox")
	            .attr("type", "checkbox")
	            .property("checked", onChangeFunc());
	
	        moduleCheckbox.on("click", function (d) {
	            var isEnabled = moduleCheckbox.property("checked");
	            onChangeFunc(isEnabled);
	            d3.select("#maxLabelWidthSliderOption").classed("hidden",!isEnabled);
	            if (updateLvl>0){
	                graph.lazyRefresh(); // maybe to much of an update
	            }
	        });
	        moduleOptionContainer.append("label")
	            .attr("for", identifier + "ModuleCheckbox")
	            .text(modeName);
	        dynamicLabelWidthCheckBox=moduleCheckbox;
	    }
	
		function addModeItem(module, identifier, modeName, selector, updateGraphOnClick) {
			var moduleOptionContainer,
				moduleCheckbox;
	
			moduleOptionContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true)
				.datum({module: module, defaultState: module.enabled()});
	
			moduleCheckbox = moduleOptionContainer.append("input")
				.classed("moduleCheckbox", true)
				.attr("id", identifier + "ModuleCheckbox")
				.attr("type", "checkbox")
				.property("checked", module.enabled());
	
			// Store for easier resetting all modes
			checkboxes.push(moduleCheckbox);
	
			moduleCheckbox.on("click", function (d, silent) {
				var isEnabled = moduleCheckbox.property("checked");
				d.module.enabled(isEnabled);
				if (updateGraphOnClick && silent !== true) {
					graph.update();
				}
			});
	
			moduleOptionContainer.append("label")
				.attr("for", identifier + "ModuleCheckbox")
				.text(modeName);
	
			return moduleOptionContainer;
		}
	
		function addExternalModeSelection(container, colorExternalsMode) {
			var button = container.append("button").datum({active: false}).classed("color-mode-switch", true);
			applyColorModeSwitchState(button, colorExternalsMode);
	
			button.on("click", function (silent) {
				var data = button.datum();
				data.active = !data.active;
				applyColorModeSwitchState(button, colorExternalsMode);
				if (colorExternalsMode.enabled() && silent !== true) {
					graph.update();
				}
			});
	
			return button;
		}
	
		function applyColorModeSwitchState(element, colorExternalsMode) {
			var isActive = element.datum().active;
			var activeColorMode = getColorModeByState(isActive);
	
			element.classed("active", isActive)
				.text(activeColorMode.text);
	
			if (colorExternalsMode) {
				colorExternalsMode.colorModeType(activeColorMode.type);
			}
		}
	
		function getColorModeByState(isActive) {
			return isActive ? GRADIENT_COLOR_MODE : SAME_COLOR_MODE;
		}
	
		/**
		 * Resets the modes to their default.
		 */
		modeMenu.reset = function () {
			checkboxes.forEach(function (checkbox) {
				var defaultState = checkbox.datum().defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== defaultState) {
					checkbox.property("checked", defaultState);
					// Call onclick event handlers programmatically
					checkbox.on("click")(checkbox.datum());
				}
	
				// Reset the module that is connected with the checkbox
				checkbox.datum().module.reset();
			});
	
			// set the switch to active and simulate disabling
			colorModeSwitch.datum().active = true;
			colorModeSwitch.on("click")();
		};
	
		/** importer functions **/
		// setting manually the values of the filter
		// no update of the gui settings, these are updated in updateSettings
		modeMenu.setCheckBoxValue = function (id, checked) {
			for (var i = 0; i < checkboxes.length; i++) {
				var cbdId = checkboxes[i].attr("id");
	
				if (cbdId === id) {
					checkboxes[i].property("checked", checked);
					break;
				}
			}
		};
	    modeMenu.getCheckBoxValue = function (id) {
	        for (var i = 0; i < checkboxes.length; i++) {
	            var cbdId = checkboxes[i].attr("id");
	            if (cbdId === id) {
	                return checkboxes[i].property("checked");
	            }
	        }
	    };
	
		modeMenu.setColorSwitchState = function (state) {
			// need the !state because we simulate later a click
			modeMenu.colorModeState(!state);
		};
	    modeMenu.setColorSwitchStateUsingURL = function (state) {
	        // need the !state because we simulate later a click
	        modeMenu.colorModeState(!state);
	        colorModeSwitch.on("click")(true);
	    };
	
	
	    modeMenu.updateSettingsUsingURL = function () {
	        var silent = true;
	        checkboxes.forEach(function (checkbox) {
	            checkbox.on("click")(checkbox.datum(), silent);
	        });
	    };
	
		modeMenu.updateSettings = function () {
			var silent = true;
			checkboxes.forEach(function (checkbox) {
				checkbox.on("click")(checkbox.datum(), silent);
			});
			// this simulates onclick and inverts its state
			colorModeSwitch.on("click")(silent);
		};
		return modeMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {var unescape = __webpack_require__(324);
	
	module.exports = function (graph) {
	
		var ontologyMenu = {},
			loadingInfo = d3.select("#loading-info"),
			loadingProgress = d3.select("#loading-progress"),
	
			ontologyMenuTimeout,
			fileToLoad,
	        stopTimer=false,
			loadingError=false,
	        loadingStatusTimer,
	        conversion_sessionId,
			cachedConversions = {},
			loadingModule,
			loadOntologyFromText;
	
		String.prototype.beginsWith = function (string) {
			return(this.indexOf(string) === 0);
		};
	
		ontologyMenu.getLoadingFunction=function(){
			return loadOntologyFromText;
		};
	
		ontologyMenu.cachedOntology=function(ontoName){
			return cachedConversions[ontoName];
		};
	    ontologyMenu.setCachedOntology=function(ontoName, ontoContent){
	        cachedConversions[ontoName]=ontoContent;
	    };
	
	    ontologyMenu.getErrorStatus=function(){
	    	return loadingError;
	    };
	
		ontologyMenu.setup = function (_loadOntologyFromText) {
			loadOntologyFromText = _loadOntologyFromText;
			loadingModule=graph.options().loadingModule();
			var menuEntry= d3.select("#m_select");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
	
			setupConverterButtons();
			setupUploadButton();
			setupUriListener();
		    loadingModule.setOntologyMenu(ontologyMenu);
		};
	
		function setupUriListener() {
			// reload ontology when hash parameter gets changed manually
			d3.select(window).on("hashchange", function () {
				var oldURL = d3.event.oldURL, newURL = d3.event.newURL;
				if (oldURL !== newURL) {
					// don't reload when just the hash parameter gets appended
					if (newURL === oldURL + "#") {
						return;
					}
					updateNavigationHrefs();
					loadingModule.parseUrlAndLoadOntology();
				}
			});
			updateNavigationHrefs();
		}
	
		ontologyMenu.stopLoadingTimer=function(){
	        stopTimer=true;
	        clearTimeout(loadingStatusTimer);
		};
	
		/**
		 * Quick fix: update all anchor tags that are used as buttons because a click on them
		 * changes the url and this will load an other ontology.
		 */
		function updateNavigationHrefs() {
			d3.selectAll("#menuElementContainer > li > a").attr("href", location.hash || "#");
		}
	
		ontologyMenu.setIriText=function(text){
			d3.select("#iri-converter-input").node().value=text;
			d3.select("#iri-converter-button").attr("disabled", false);
			d3.select("#iri-converter-form").on("submit")();
		};
	
	    ontologyMenu.clearDetailInformation=function(){
	        var bpContainer=d3.select("#bulletPoint_container");
	        var htmlCollection = bpContainer.node().children;
	        var numEntries = htmlCollection.length;
	
	        for (var i = 0; i < numEntries; i++) {
	            htmlCollection[0].remove();
	        }
		};
	    ontologyMenu.append_message=function(msg){
	        // forward call
	        append_message(msg);
	    };
	    function append_message(msg){
	        var bpContainer=d3.select("#bulletPoint_container");
	        var div=bpContainer.append("div");
			div.node().innerHTML=msg;
	        loadingModule.scrollDownDetails();
	    }
		ontologyMenu.append_message_toLastBulletPoint=function(msg){
			// forward call
			append_message_toLastBulletPoint(msg);
		};
	
	    ontologyMenu.append_bulletPoint=function(msg){
	        // forward call
	        append_bulletPoint(msg);
	    };
	    function append_message_toLastBulletPoint(msg){
	        var bpContainer=d3.select("#bulletPoint_container");
	        var htmlCollection = bpContainer.node().getElementsByTagName("LI");
	        var lastItem= htmlCollection.length-1;
	        if (lastItem>=0){
	            var oldText=htmlCollection[lastItem].innerHTML;
	            htmlCollection[lastItem].innerHTML=oldText+msg;
	        }
	        loadingModule.scrollDownDetails();
	    }
	
	    function append_bulletPoint(msg){
	        var bp_container=d3.select("#bulletPoint_container");
	        var bp=bp_container.append("li");
	        bp.node().innerHTML=msg;
	        d3.select("#currentLoadingStep").node().innerHTML=msg;
	        loadingModule.scrollDownDetails();
	    }
	
	
		function setupConverterButtons() {
			var iriConverterButton = d3.select("#iri-converter-button");
			var iriConverterInput = d3.select("#iri-converter-input");
	
			iriConverterInput.on("input", function () {
				keepOntologySelectionOpenShortly();
	
				var inputIsEmpty = iriConverterInput.property("value") === "";
				iriConverterButton.attr("disabled", inputIsEmpty || undefined);
			}).on("click", function () {
				keepOntologySelectionOpenShortly();
			});
	
			d3.select("#iri-converter-form").on("submit", function () {
				var inputName=iriConverterInput.property("value");
	
				// remove first spaces
				var clearedName=inputName.replace(/%20/g," ");
				while (clearedName.beginsWith(" ")){
					clearedName=clearedName.substr(1,clearedName.length);
				}
				// remove ending spaces
				while (clearedName.endsWith(" ")){
					clearedName=clearedName.substr(0,clearedName.length-1);
				}
				// check if iri is actually an url for a json file (ends with .json)
				// create lowercase filenames;
				inputName=clearedName;
				var lc_iri=inputName.toLowerCase();
				if (lc_iri.endsWith(".json")) {
					location.hash = "url=" + inputName;
					iriConverterInput.property("value", "");
					iriConverterInput.on("input")();
				} else {
					location.hash = "iri=" + inputName;
					iriConverterInput.property("value", "");
					iriConverterInput.on("input")();
				}
				d3.event.preventDefault();
				return false;
			});
		}
	
		function setupUploadButton() {
			var input = d3.select("#file-converter-input"),
				inputLabel = d3.select("#file-converter-label"),
				uploadButton = d3.select("#file-converter-button");
	
			input.on("change", function () {
				var selectedFiles = input.property("files");
				if (selectedFiles.length <= 0) {
					inputLabel.text("Select ontology file");
					uploadButton.property("disabled", true);
				} else {
					inputLabel.text(selectedFiles[0].name);
	                fileToLoad=selectedFiles[0].name;
					uploadButton.property("disabled", false);
					uploadButton.node().click();
					// close menu;
	                graph.options().navigationMenu().hideAllMenus();
	            }
			});
	
			uploadButton.on("click", function () {
				var selectedFile = input.property("files")[0];
				if (!selectedFile) {
					return false;
				}
				var newHashParameter = "file=" + selectedFile.name;
				// Trigger the reupload manually, because the iri is not changing
				if (location.hash === "#" + newHashParameter) {
					loadingModule.parseUrlAndLoadOntology();
				} else {
					location.hash = newHashParameter;
				}
			});
		}
	
		function setLoadingStatusInfo(message){
			// check if there is a owl2vowl li item;
			var o2vConverterContainer=d3.select("#o2vConverterContainer");
			if (!o2vConverterContainer.node()){
	            var bp_container=d3.select("#bulletPoint_container");
	            var div=bp_container.append("div");
				o2vConverterContainer=div.append("ul");
				o2vConverterContainer.attr("id","o2vConverterContainer");
				o2vConverterContainer.style("margin-left","-25px");
			}
			// clear o2vConverterContainer;
	        var htmlCollection = o2vConverterContainer.node().children;
			var numEntries = htmlCollection.length;
	        for (var i = 0; i < numEntries; i++) {
	                htmlCollection[0].remove();
	        }
			// split tokens provided by o2v messages
			var tokens=message.split("* ");
	        var liForToken;
			for (var t=0;t<tokens.length;t++) {
	            var tokenMessage = tokens[t];
	            // create li for tokens;
	            if (tokenMessage.length > 0) {
	                liForToken = o2vConverterContainer.append("li");
	            	liForToken.attr("type", "disc");
	            	liForToken.node().innerHTML = tokenMessage.replace(/\n/g,"<br>");
	        	}
			}
			if (liForToken)
				liForToken.node().innerHTML+="<br>";
	
	        loadingModule.scrollDownDetails();
		}
	
		ontologyMenu.setLoadingStatusInfo=function(message){
			// forward call
	        setLoadingStatusInfo(message);
	    };
	
	    function getLoadingStatusOnceCallBacked(callback,parameter){
	        d3.xhr("loadingStatus?sessionId="+conversion_sessionId, "application/text", function (error, request) {
	            if (error){
	                console.log("ontologyMenu getLoadingStatusOnceCallBacked throws error");
	                console.log("---------Error -----------");
	                console.log(error);
	                console.log("---------Request -----------");
	                console.log(request);
	            }
	            setLoadingStatusInfo(request.responseText);
	            callback(parameter);
	        });
	    }
	
		function getLoadingStatusTimeLooped(){
	        d3.xhr("loadingStatus?sessionId="+conversion_sessionId, "application/text", function (error, request) {
	        	if (error){
	                console.log("ontologyMenu getLoadingStatusTimeLooped throws error");
	                console.log("---------Error -----------");
	                console.log(error);
	                console.log("---------Request -----------");
	                console.log(request);
				}
	            if (stopTimer===false) {
	                setLoadingStatusInfo(request.responseText);
	                timedLoadingStatusLogger();
	            }
	    	});
		}
	
		function timedLoadingStatusLogger(){
	        clearTimeout(loadingStatusTimer);
	        if (stopTimer===false) {
	            loadingStatusTimer = setTimeout(function () {
	                getLoadingStatusTimeLooped();
	            }, 1000);
	        }
		}
	
		function callbackUpdateLoadingMessage(msg){
	        d3.xhr("loadingStatus", "application/text", function (error, request) {
	        	if (request!==undefined){
	    	        setLoadingStatusInfo(request.responseText+ "<br>"+msg);
	        	}else{
	        		append_message(msg);
				}
	        });
		}
	
		ontologyMenu.setConversionID=function (id){
			conversion_sessionId=id;
		};
	
		ontologyMenu.callbackLoad_Ontology_FromIRI=function(parameter){
	        var relativePath=parameter[0];
	        var ontoName=parameter[1];
	        var localThreadId=parameter[2];
	        stopTimer=false;
	        timedLoadingStatusLogger();
	        d3.xhr(relativePath, "application/json", function (error, request) {
	            var loadingSuccessful = !error;
	            // check if error occurred or responseText is empty
	            if ((error!==null && error.status === 500) || (request && request.responseText.length===0)) {
	     			clearTimeout(loadingStatusTimer);
	                stopTimer=true;
	                getLoadingStatusOnceCallBacked(callbackFromIRI_URL_ERROR,[error,request,localThreadId]);
	            }
	            var jsonText;
	            if (loadingSuccessful) {
	                clearTimeout(loadingStatusTimer);
	                stopTimer=true;
	                jsonText = request.responseText;
	                getLoadingStatusOnceCallBacked(callbackFromIRI_Success,[jsonText,ontoName,localThreadId]);
	            }
	        });
		};
	
		function callbackFromIRI_Success(parameter){
	        var local_conversionId=parameter[2];
	        if (local_conversionId!==conversion_sessionId){
	            console.log("The conversion process for file:"+parameter[1]+" has been canceled!");
	            ontologyMenu.conversionFinished(local_conversionId);
	            return;
	        }
	        loadingModule.loadFromOWL2VOWL(parameter[0],parameter[1]);
	        ontologyMenu.conversionFinished();
	
	    }
	
	    ontologyMenu.getConversionId=function(){return conversion_sessionId;};
	
		ontologyMenu.callbackLoad_JSON_FromURL=function(parameter){
			var relativePath=parameter[0];
			var ontoName=parameter[1];
			var local_conversionId=parameter[2];
	        stopTimer=false;
	        timedLoadingStatusLogger();
	        d3.xhr(relativePath, "application/json", function (error, request) {
	            var loadingSuccessful = !error;
	            // check if error occurred or responseText is empty
	            if ((error!==null && error.status === 500) || (request && request.responseText.length===0)) {
	                clearTimeout(loadingStatusTimer);
	                stopTimer=true;
	                loadingSuccessful=false;
	                console.log(request);
	                console.log(request.responseText.length);
	                getLoadingStatusOnceCallBacked(callbackFromJSON_URL_ERROR,[error,request,local_conversionId]);
	            }
	            if (loadingSuccessful) {
	                clearTimeout(loadingStatusTimer);
	                stopTimer=true;
	                var jsonText = request.responseText;
	                getLoadingStatusOnceCallBacked(callbackFromJSON_Success,[jsonText,ontoName,local_conversionId]);
	            }
	        });
		};
	
		function callbackFromJSON_Success(parameter){
	        var local_conversionId=parameter[2];
	        if (local_conversionId!==conversion_sessionId){
	            console.log("The conversion process for file:"+parameter[1]+" has been canceled!");
	            return;
	        }
	        loadingModule.loadFromOWL2VOWL(parameter[0],parameter[1]);
		}
	
		function callbackFromIRI_URL_ERROR(parameter){
	        var error=parameter[0];
	        var request=parameter[1];
	        var local_conversionId=parameter[2];
	        if (local_conversionId!==conversion_sessionId){
	            console.log("This thread has been canceled!!");
	            ontologyMenu.conversionFinished(local_conversionId);
	            return;
	        }
	        callbackUpdateLoadingMessage("<br><span style='color:red'> Failed to convert the file.</span> "+
	            " Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target=\"_blank\"" +
	            "href=\"http://visualdataweb.de/validator/\">OWL Validator</a>");
	
	        if (error!==null && error.status === 500){
	            append_message("<span style='color:red'>Could not find ontology  at the URL</span>");
	        }
	        if (request && request.responseText.length===0){
	            append_message("<span style='color:red'>Received empty graph</span>");
	        }
	        graph.handleOnLoadingError();
	        ontologyMenu.conversionFinished();
	    }
		function callbackFromJSON_URL_ERROR(parameter){
	
			var error=parameter[0];
			var request=parameter[1];
			var local_conversionId=parameter[2];
			if (local_conversionId!==conversion_sessionId){
	            console.log("The loading process of JSON_URL has been canceled!");
				return;
			}
	        // callbackUpdateLoadingMessage("<br> <span style='color:red'> Failed to convert the file.</span> "+
	        //     "Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target=\"_blank\"" +
	        //     "href=\"http://visualdataweb.de/validator/\">OWL Validator</a>");
	        if (error!==null && error.status === 500){
	            append_message("<span style='color:red'>Could not find json at the URL</span>");
	        }
	        if (request && request.responseText.length===0){
	            append_message("<span style='color:red'>Received empty graph</span>");
	        }
	
	        graph.handleOnLoadingError();
	        ontologyMenu.conversionFinished();
		}
	
		ontologyMenu.callbackLoadFromOntology=function(selectedFile,filename,local_threadId){
	    	callbackLoadFromOntology(selectedFile,filename,local_threadId);
		};
	
	    function callbackLoadFromOntology(selectedFile, filename, local_threadId){
	    	stopTimer=false;
	        timedLoadingStatusLogger();
	
	        var formData = new FormData();
	        formData.append("ontology" , selectedFile);
	        formData.append("sessionId", local_threadId);
	        var xhr = new XMLHttpRequest();
	
	        xhr.open("POST", "convert", true);
	        xhr.onload = function () {
	            clearTimeout(loadingStatusTimer);
	            stopTimer=true;
	            getLoadingStatusOnceCallBacked(callbackForConvert,[xhr, filename,local_threadId]);
	        };
	        timedLoadingStatusLogger();
	        xhr.send(formData);
		}
	
		function callbackForConvert(parameter){
	    	var xhr=parameter[0];
	    	var filename=parameter[1];
	    	var local_threadId=parameter[2];
	    	if (local_threadId!==conversion_sessionId){
	    		console.log("The conversion process for file:"+filename+" has been canceled!");
	            ontologyMenu.conversionFinished(local_threadId);
	    		return;
			}
	        if (xhr.status === 200) {
	            loadingModule.loadFromOWL2VOWL(xhr.responseText,filename);
	            ontologyMenu.conversionFinished();
	        } else {
	            callbackUpdateLoadingMessage("Failed to convert the file. "+
	                "Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target=\"_blank\"" +
	                "href=\"http://visualdataweb.de/validator/\">OWL Validator</a>");
	            graph.handleOnLoadingError();
	            ontologyMenu.conversionFinished();
			}
		}
	
	    ontologyMenu.conversionFinished=function(id){
			var local_id=conversion_sessionId;
			if (id){
	            local_id=id;
			}
	        d3.xhr("conversionDone?sessionId="+local_id, "application/text", function (error, request) {
	            if (error){
	                console.log("ontologyMenu conversionFinished throws error");
	                console.log("---------Error -----------");
	                console.log(error);
	                console.log("---------Request -----------");
	                console.log(request);
	            }
	        });
		};
	
		function keepOntologySelectionOpenShortly() {
			// Events in the menu should not be considered
			var ontologySelection = d3.select("#select .toolTipMenu");
			ontologySelection.on("click", function () {
				d3.event.stopPropagation();
			}).on("keydown", function () {
				d3.event.stopPropagation();
			});
	
			ontologySelection.style("display", "block");
	
			function disableKeepingOpen() {
				ontologySelection.style("display", undefined);
	
				clearTimeout(ontologyMenuTimeout);
				d3.select(window).on("click", undefined).on("keydown", undefined);
				ontologySelection.on("mouseover", undefined);
			}
	
			// Clear the timeout to handle fast calls of this function
			clearTimeout(ontologyMenuTimeout);
			ontologyMenuTimeout = setTimeout(function () {
				disableKeepingOpen();
			}, 3000);
	
			// Disable forced open selection on interaction
			d3.select(window).on("click", function () {
				disableKeepingOpen();
			}).on("keydown", function () {
				disableKeepingOpen();
			});
	
			ontologySelection.on("mouseover", function () {
				disableKeepingOpen();
			});
		}
	
	    ontologyMenu.showLoadingStatus=function (visible){
			if (visible===true){
				displayLoadingIndicators();
			}
			else {
				hideLoadingInformations();
			}
		};
	
		function displayLoadingIndicators() {
	        d3.select("#layoutLoadingProgressBarContainer").classed("hidden",false);
	        loadingInfo.classed("hidden",false);
			loadingProgress.classed("hidden", false);
		}
	
		function hideLoadingInformations() {
	        loadingInfo.classed("hidden",true);
		}
	
		return ontologyMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(215),
	    unescapeHtmlChar = __webpack_require__(325);
	
	/** Used to match HTML entities and HTML characters. */
	var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	    reHasEscapedHtml = RegExp(reEscapedHtml.source);
	
	/**
	 * The inverse of `_.escape`; this method converts the HTML entities
	 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	 * their corresponding characters.
	 *
	 * **Note:** No other HTML entities are unescaped. To unescape additional
	 * HTML entities use a third-party library like [_he_](https://mths.be/he).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.6.0
	 * @category String
	 * @param {string} [string=''] The string to unescape.
	 * @returns {string} Returns the unescaped string.
	 * @example
	 *
	 * _.unescape('fred, barney, &amp; pebbles');
	 * // => 'fred, barney, & pebbles'
	 */
	function unescape(string) {
	  string = toString(string);
	  return (string && reHasEscapedHtml.test(string))
	    ? string.replace(reEscapedHtml, unescapeHtmlChar)
	    : string;
	}
	
	module.exports = unescape;


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(326);
	
	/** Used to map HTML entities to characters. */
	var htmlUnescapes = {
	  '&amp;': '&',
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&#39;': "'"
	};
	
	/**
	 * Used by `_.unescape` to convert HTML entities to characters.
	 *
	 * @private
	 * @param {string} chr The matched character to unescape.
	 * @returns {string} Returns the unescaped character.
	 */
	var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
	
	module.exports = unescapeHtmlChar;


/***/ }),

/***/ 326:
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = basePropertyOf;


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the pause and resume button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var pauseMenu = {},
			pauseButton;
	
	
		/**
		 * Adds the pause button to the website.
		 */
		pauseMenu.setup = function () {
			var menuEntry = d3.select("#pauseOption");
			menuEntry.on("mouseover", function () {
				var searchMenu = graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			pauseButton = d3.select("#pause-button")
				.datum({paused: false})
				.on("click", function (d) {
					graph.paused(!d.paused);
					d.paused = !d.paused;
					updatePauseButton();
					pauseButton.classed("highlighted", d.paused);
				});
			// Set these properties the first time manually
			updatePauseButton();
		};
	
		pauseMenu.setPauseValue = function (value) {
			pauseButton.datum().paused = value;
			graph.paused(value);
			pauseButton.classed("highlighted", value);
			updatePauseButton();
		};
	
		function updatePauseButton() {
			updatePauseButtonClass();
			updatePauseButtonText();
		}
	
		function updatePauseButtonClass() {
			pauseButton.classed("paused", function (d) {
				return d.paused;
			});
		}
	
		function updatePauseButtonText() {
			if (pauseButton.datum().paused) {
				pauseButton.text("动态");
			} else {
				pauseButton.text("静态");
			}
		}
	
		pauseMenu.reset = function () {
			// resuming
			pauseMenu.setPauseValue(false);
		};
	
	
		return pauseMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the reset button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var resetMenu = {},
			options = graph.graphOptions(),
			resettableModules,
			untouchedOptions = webvowl.options();
	
	
		/**
		 * Adds the reset button to the website.
		 * @param _resettableModules modules that can be resetted
		 */
		resetMenu.setup = function (_resettableModules) {
			resettableModules = _resettableModules;
			d3.select("#reset-button").on("click", resetGraph);
			var menuEntry= d3.select("#resetOption");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
		};
	
		function resetGraph() {
			graph.resetSearchHighlight();
			graph.options().searchMenu().clearText();
			options.classDistance(untouchedOptions.classDistance());
			options.datatypeDistance(untouchedOptions.datatypeDistance());
			options.charge(untouchedOptions.charge());
			options.gravity(untouchedOptions.gravity());
			options.linkStrength(untouchedOptions.linkStrength());
			graph.reset();
	
			resettableModules.forEach(function (module) {
				module.reset();
			});
	
			graph.updateStyle();
		}
	
	
		return resetMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the search "engine"
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
		var searchMenu = {},
			dictionary = [],
			entryNames = [],
			searchLineEdit,
			mergedStringsList,
			mergedIdList,
			maxEntries = 6,
			dictionaryUpdateRequired = true,
			labelDictionary,
			inputText,
			viewStatusOfSearchEntries = false;
	
	
			var c_locate=d3.select("#locateSearchResult");
			var c_search=d3.select("#c_search");
			var m_search=d3.select("#m_search"); // << dropdown container;
	
	
		String.prototype.beginsWith = function (string) {
			return(this.indexOf(string) === 0);
		};
	
		searchMenu.requestDictionaryUpdate = function () {
			dictionaryUpdateRequired = true;
			// clear possible pre searched entries
			var htmlCollection = m_search.node().children;
			var numEntries = htmlCollection.length;
	
			for (var i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
			searchLineEdit.node().value = "";
		};
	
	
		function updateSearchDictionary() {
			labelDictionary = graph.getUpdateDictionary();
			dictionaryUpdateRequired = false;
			dictionary = [];
			entryNames = [];
			var idList = [];
			var stringList = [];
	
			var i;
			for (i = 0; i < labelDictionary.length; i++) {
				var lEntry = labelDictionary[i].labelForCurrentLanguage();
				idList.push(labelDictionary[i].id());
				stringList.push(lEntry);
				// add all equivalents to the search space;
				if (labelDictionary[i].equivalents && labelDictionary[i].equivalents().length>0){
					var eqs=labelDictionary[i].equivalentsString();
					var eqsLabels=eqs.split(", ");
					for (var e=0;e<eqsLabels.length;e++){
	                    idList.push(labelDictionary[i].id());
	                    stringList.push(eqsLabels[e]);
					}
				}
			}
	
			mergedStringsList = [];
			mergedIdList = [];
			var indexInStringList=-1;
			var currentString;
			var currentObjectId;
	
			for (i = 0; i < stringList.length; i++) {
				if (i === 0) {
					// just add the elements
					mergedStringsList.push(stringList[i]);
					mergedIdList.push([]);
					mergedIdList[0].push(idList[i]);
					continue;
				}
				else {
					currentString = stringList[i];
					currentObjectId = idList[i];
					indexInStringList = mergedStringsList.indexOf(currentString);
				}
				if (indexInStringList === -1) {
					mergedStringsList.push(stringList[i]);
					mergedIdList.push([]);
					var lastEntry = mergedIdList.length;
					mergedIdList[lastEntry - 1].push(currentObjectId);
				} else {
					mergedIdList[indexInStringList].push(currentObjectId);
				}
			}
	
			for (i = 0; i < mergedStringsList.length; i++) {
				var aString = mergedStringsList[i];
				var correspondingIdList = mergedIdList[i];
				var idListResult = "[ ";
				for (var j = 0; j < correspondingIdList.length; j++) {
					idListResult = idListResult + correspondingIdList[j].toString();
					idListResult = idListResult + ", ";
				}
				idListResult = idListResult.substring(0, idListResult.length - 2);
				idListResult = idListResult + " ]";
	
				var firstVal=correspondingIdList[0];
	
				if (correspondingIdList.length > 1 ){
					// we have several ids for a search entry;
					// we check if they are allSame meaning that we are searching for an equivalent property;
					var allSame=true;
					// using simple for-loop since id list should be small
					for (var x=0;x<correspondingIdList.length;x++){
						if (correspondingIdList[x]!==firstVal){
							allSame=false;
						}
					}
					if (allSame===true)
	                    dictionary.push(aString);
					else
	                dictionary.push(aString + " (" + correspondingIdList.length + ")");
	            }
				else
					dictionary.push(aString);
				entryNames.push(aString);
			}
		}
	
		searchMenu.setup = function () {
			// clear dictionary;
			dictionary = [];
			searchLineEdit = d3.select("#search-input-text");
			searchLineEdit.on("input", userInput);
			searchLineEdit.on("keydown", userNavigation);
			searchLineEdit.on("click", toggleSearchEntryView);
			searchLineEdit.on("mouseover", hoverSearchEntryView);
	
	        c_locate.on("click",function(){
	            graph.locateSearchResult();
	        });
	
	        c_locate.on("mouseover",function(){
	            searchMenu.hideSearchEntries();
	        });
	
	    };
	
		function hoverSearchEntryView() {
			searchMenu.showSearchEntries();
		}
	
		function toggleSearchEntryView() {
			if (viewStatusOfSearchEntries) {
				searchMenu.hideSearchEntries();
			} else {
				searchMenu.showSearchEntries();
			}
		}
	
		searchMenu.hideSearchEntries = function () {
	        m_search.style("display", "none");
			viewStatusOfSearchEntries = false;
		};
	
		searchMenu.showSearchEntries = function () {
	        m_search.style("display", "block");
			viewStatusOfSearchEntries = true;
		};
	
		function ValidURL(str) {
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			return urlregex.test(str);
	
		}
	
	
		function userNavigation() {
			if (dictionaryUpdateRequired) {
				updateSearchDictionary();
			}
	
			var htmlCollection = m_search.node().children;
			var numEntries = htmlCollection.length;
	
	
			var move = 0;
			var i;
			var selectedEntry = -1;
			for (i = 0; i < numEntries; i++) {
				var atr = htmlCollection[i].getAttribute('class');
				if (atr === "dbEntrySelected") {
					selectedEntry = i;
				}
			}
			if (d3.event.keyCode === 13) {
				if (selectedEntry >= 0 && selectedEntry < numEntries) {
					// simulate onClick event
					htmlCollection[selectedEntry].onclick();
					searchMenu.hideSearchEntries();
				}
				else if (numEntries===0){
					inputText = searchLineEdit.node().value;
					// check if input text ends or begins with with space
					// remove first spaces
					var clearedText=inputText.replace(/%20/g," ");
					while (clearedText.beginsWith(" ")){
						clearedText=clearedText.substr(1,clearedText.length);
					}
					// remove ending spaces
					while (clearedText.endsWith(" ")){
						clearedText=clearedText.substr(0,clearedText.length-1);
					}
					var iri=clearedText.replace(/ /g,"%20");
	
					var valid=ValidURL(iri);
					// validate url:
					if (valid){
						var ontM=graph.options().ontologyMenu();
						ontM.setIriText(iri);
						searchLineEdit.node().value="";
					}
					else{
						console.log(iri+" is not a valid URL!");
					}
				}
			}
			if (d3.event.keyCode === 38) {
				move = -1;
				searchMenu.showSearchEntries();
			}
			if (d3.event.keyCode === 40) {
				move = +1;
				searchMenu.showSearchEntries();
			}
	
			var newSelection = selectedEntry + move;
			if (newSelection !== selectedEntry) {
	
				if (newSelection < 0 && selectedEntry <= 0) {
					htmlCollection[0].setAttribute('class', "dbEntrySelected");
				}
	
				if (newSelection >= numEntries) {
					htmlCollection[selectedEntry].setAttribute('class', "dbEntrySelected");
				}
				if (newSelection >= 0 && newSelection < numEntries) {
					htmlCollection[newSelection].setAttribute('class', "dbEntrySelected");
					if (selectedEntry >= 0)
						htmlCollection[selectedEntry].setAttribute('class', "dbEntry");
				}
			}
		}
		searchMenu.getSearchString=function (){return searchLineEdit.node().value;};
		function handleAutoCompletion() {
			/**  pre condition: autoCompletion has already a valid text**/
			var htmlCollection;
			var numEntries;
			inputText = searchLineEdit.node().value;
	
			var results = [];
			var resultID = [];
			var i;
			var lc_text = inputText.toLowerCase();
			var token;
	
			for (i = 0; i < dictionary.length; i++) {
				var tokenElement = dictionary[i];
				if (tokenElement === undefined){
					//@WORKAROUND : nodes with undefined labels are skipped
					//@FIX: these nodes are now not added to the dictionary
					continue;
				}
				token = dictionary[i].toLowerCase();
				if (token.indexOf(lc_text) > -1) {
					results.push(dictionary[i]);
					resultID.push(i);
				}
			}
	
			// update the entries in the gui
			htmlCollection = m_search.node().children;
			numEntries = htmlCollection.length;
			for (i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
	
	
			// reorder the results and its ids
			//******************************************
			// create a copy of results;;
			var copyRes = results;
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
	
			var newResults = [];
			var newResultsIds = [];
	
			for (i = 0; i < numEntries; i++) {
				// search for the best entry
				var indexElement  = 1000000;
				var lengthElement = 1000000;
				var bestElement = -1;
				for (var j = 0; j < copyRes.length; j++) {
					token = copyRes[j].toLowerCase();
					var tIe = token.indexOf(lc_text);
					var tLe = token.length;
					if (tIe > -1 && tIe <= indexElement && tLe <= lengthElement) {
						bestElement = j;
						indexElement = tIe;
						lengthElement = tLe;
					}
				}
				newResults.push(copyRes[bestElement]);
				newResultsIds.push(resultID[bestElement]);
				copyRes[bestElement] = "";
			}
	
			// add the results to the entry menu
			//******************************************
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
			for (i = 0; i < numEntries; i++) {
				//add results to the dropdown menu
				var testEntry = document.createElement('li');
				testEntry.setAttribute('elementID', newResultsIds[i]);
				testEntry.onclick= handleClick (newResultsIds[i]);
				testEntry.setAttribute('class', "dbEntry");
				var createAText = document.createTextNode(newResults[i]);
				testEntry.appendChild(createAText);
	            m_search.node().appendChild(testEntry);
			}
		}
	
		function userInput() {
	
			if (dictionaryUpdateRequired) {
				updateSearchDictionary();
			}
			graph.resetSearchHighlight();
	
			if (dictionary.length === 0) {
				console.log("dictionary is empty");
				return;
			}
			var i;
			var htmlCollection = m_search.node().children;
			var numEntries = htmlCollection.length;
			inputText = searchLineEdit.node().value;
			c_locate.classed("highlighted", false);
	        c_locate.node().title="Nothing to locate, enter search term.";
			if (inputText.length === 0) {
				for (i = 0; i < numEntries; i++)
					htmlCollection[0].remove();
	
				return;
			}
			// search in list
			var results = [];
			var resultID = [];
	
			var lc_text = inputText.toLowerCase();
			var token;
	
			for (i = 0; i < dictionary.length; i++) {
				var tokenElement = dictionary[i];
				if (tokenElement === undefined){
					//@WORKAROUND : nodes with undefined labels are skipped
					//@FIX: these nodes are now not added to the dictionary
					continue;
				}
				token = dictionary[i].toLowerCase();
				if (token.indexOf(lc_text) > -1) {
					results.push(dictionary[i]);
					resultID.push(i);
				}
			}
	
			//clear the list;
			htmlCollection = m_search.node().children;
			numEntries = htmlCollection.length;
			for (i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
	
			// reorder the results and its ids
			//******************************************
			// create a copy of results;;
			var copyRes = results;
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
	
			var newResults = [];
			var newResultsIds = [];
	
			for (i = 0; i < numEntries; i++) {
				// search for the best entry
				var indexElement  = 100000000;
				var lengthElement = 100000000;
				var bestElement = -1;
				for (var j = 0; j < copyRes.length; j++) {
					token = copyRes[j].toLowerCase();
					var tIe = token.indexOf(lc_text);
					var tLe = token.length;
					if (tIe > -1 && tIe <= indexElement && tLe <= lengthElement) {
						bestElement = j;
						indexElement = tIe;
						lengthElement = tLe;
					}
				}
				newResults.push(copyRes[bestElement]);
				newResultsIds.push(resultID[bestElement]);
				copyRes[bestElement] = "";
			}
	
			// add the results to the entry menu
			//******************************************
			for (i = 0; i < numEntries; i++) {
				//add results to the dropdown menu
				var testEntry;
				testEntry= document.createElement('li');
				testEntry.setAttribute('elementID', newResultsIds[i]);
				testEntry.setAttribute('class', "dbEntry");
				testEntry.onclick= handleClick (newResultsIds[i]);
				var createAText = document.createTextNode(newResults[i]);
				testEntry.appendChild(createAText);
	            m_search.node().appendChild(testEntry);
			}
			searchMenu.showSearchEntries();
		}
	
		function handleClick(elementId){
	
			return function(){
				var id = elementId;
				var correspondingIds = mergedIdList[id];
	
				// autoComplete the text for the user
				var autoComStr = entryNames[id];
				searchLineEdit.node().value = autoComStr;
	
				graph.resetSearchHighlight();
				graph.highLightNodes(correspondingIds);
	            c_locate.node().title="Locate search term";
				if (autoComStr !== inputText) {
					handleAutoCompletion();
				}
				searchMenu.hideSearchEntries();
			};
		}
	
		searchMenu.clearText=function(){
			searchLineEdit.node().value="";
	        c_locate.classed("highlighted", false);
	        c_locate.node().title="Nothing to locate, enter search term.";
			var htmlCollection = m_search.node().children;
			var numEntries = htmlCollection.length;
			for (var i = 0; i < numEntries; i++){
				htmlCollection[0].remove();
			}
		};
	
		return searchMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the navigation "engine"
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
		var navigationMenu  = {},
	        scrollContainer = d3.select("#menuElementContainer").node(),
	        menuContainer   = d3.select("#menuContainer").node(),
	        leftButton=d3.select("#scrollLeftButton"),
	        rightButton=d3.select("#scrollRightButton"),
	        scrolLeftValue,
	        scrollMax,
	        currentlyVisibleMenu,
	        currentlyHoveredEntry,
	        touchedElement=false,
	        t_scrollLeft,
	        t_scrollRight,
	        c_select=[],
	        m_select=[];
	
	
	    function clearAllTimers(){
	        cancelAnimationFrame(t_scrollLeft);
	        cancelAnimationFrame(t_scrollRight);
	    }
	
	    function timed_scrollRight(){
	        scrolLeftValue+=5;
	        scrollContainer.scrollLeft=scrolLeftValue;
	        navigationMenu.updateScrollButtonVisibility();
	        if (scrolLeftValue>=scrollMax){
	            clearAllTimers();
	            return;
	        }
	        t_scrollRight=requestAnimationFrame(timed_scrollRight);
	
	    }
	    function timed_scrollLeft(){
	        scrolLeftValue-=5;
	        scrollContainer.scrollLeft=scrolLeftValue;
	        navigationMenu.updateScrollButtonVisibility();
	        if (scrolLeftValue<=0){
	            clearAllTimers();
	            return;
	        }
	        t_scrollRight=requestAnimationFrame(timed_scrollLeft);
	    }
	    // collect all menu entries and stuff;
	    function setupControlsAndMenus(){
	        // HEURISTIC : to match the menus and their controllers we remove the first 2 letters and match
	        c_select=[];
	        m_select=[];
	
	        var c_temp=[];
	        var m_temp=[];
	        var i;
	        var controlElements=scrollContainer.children;
	        var numEntries = controlElements.length;
	
	        for ( i = 0; i < numEntries; i++) {
	            c_temp.push(controlElements[i].id.slice(2));
	        }
	
	        var menuElements=menuContainer.children;
	        numEntries = menuElements.length;
	        for ( i = 0; i < numEntries; i++) {
	            m_temp.push(menuElements[i].id.slice(2));
	        }
	
	        numEntries=controlElements.length;
	        for ( i = 0; i < numEntries; i++) {
	            c_select[i]="c_"+c_temp[i];
	            if (m_temp.indexOf(c_temp[i])>-1){
	                m_select[i]="m_"+c_temp[i];
	            } else{
	                m_select[i]=undefined;
	            }
	            // create custom behavior for click, touch, and hover
	            d3.select("#"+c_select[i]).on("mouseover",menuElementOnHovered);
	            d3.select("#"+c_select[i]).on("mouseout",menuElementOutHovered);
	
	            d3.select("#"+c_select[i]).on("click",menuElementClicked);
	            d3.select("#"+c_select[i]).on("touchstart",menuElementTouched);
	
	        }
	
	        // connect to mouseWheel
	        d3.select("#menuElementContainer").on("wheel",function() {
	            var wheelEvent = d3.event;
	            var offset;
	            if (wheelEvent.deltaY < 0) offset =  20;
	            if (wheelEvent.deltaY > 0) offset = -20;
	            scrollContainer.scrollLeft+=offset;
	            navigationMenu.hideAllMenus();
	            navigationMenu.updateScrollButtonVisibility();
	        });
	
	        // connect scrollIndicator Buttons;
	        d3.select("#scrollRightButton").on("mousedown",function(){
	            scrolLeftValue=scrollContainer.scrollLeft;
	            navigationMenu.hideAllMenus();
	            t_scrollRight=requestAnimationFrame(timed_scrollRight);
	
	        }).on("touchstart",function(){
	            scrolLeftValue=scrollContainer.scrollLeft;
	            navigationMenu.hideAllMenus();
	            t_scrollRight=requestAnimationFrame(timed_scrollRight);
	        }).on("mouseup",clearAllTimers)
	          .on("touchend",clearAllTimers)
	          .on("touchcancel",clearAllTimers);
	
	        d3.select("#scrollLeftButton").on("mousedown",function(){
	            scrolLeftValue=scrollContainer.scrollLeft;
	            navigationMenu.hideAllMenus();
	            t_scrollLeft=requestAnimationFrame(timed_scrollLeft);
	        }).on("touchstart",function(){
	            scrolLeftValue=scrollContainer.scrollLeft;
	            navigationMenu.hideAllMenus();
	            t_scrollLeft=requestAnimationFrame(timed_scrollLeft);
	        }).on("mouseup",clearAllTimers)
	          .on("touchend",clearAllTimers)
	          .on("touchcancel",clearAllTimers);
	
	        // connect the scroll functionality;
	        d3.select("#menuElementContainer").on("scroll",function(){
	            navigationMenu.updateScrollButtonVisibility();
	            navigationMenu.hideAllMenus();
	        });
	    }
	
	    function menuElementOnHovered(){
	        navigationMenu.hideAllMenus();
	        if  (touchedElement){ return; }
	        showSingleMenu( this.id );
	    }
	
	    function menuElementOutHovered(){
	        hoveroutedControMenu( this.id );
	    }
	
	    function menuElementClicked() {
	        var m_element=m_select[c_select.indexOf(this.id)];
	        if (m_element) {
	            var menuElement = d3.select("#" + m_element);
	            if (menuElement) {
	                if (menuElement.style("display") === "block") {
	                    menuElement.style("display", "none");// hide it
	                }else {
	                    showSingleMenu(this.id);
	                }
	            }
	        }
	    }
	
	    function menuElementTouched(){
	        // it sets a flag that we have touched it,
	        // since d3. propagates the event for touch as hover and then click, we block the hover event
	        touchedElement=true;
	    }
	
	
	    function hoveroutedControMenu( controllerID ){
	        currentlyHoveredEntry=d3.select("#"+controllerID);
	        if (controllerID !== "c_search") {
	                d3.select("#" + controllerID).select("path").style("stroke-width", "0");
	                d3.select("#" + controllerID).select("path").style("fill", "#fff");
	            }
	
	    }
	
	    function showSingleMenu( controllerID ){
	        currentlyHoveredEntry=d3.select("#"+controllerID).node();
	        // get the corresponding menu element for this controller
	        var m_element=m_select[c_select.indexOf(controllerID)];
	        if (m_element) {
	            if (controllerID !== "c_search") {
	
	            d3.select("#" + controllerID).select("path").style("stroke-width", "0");
	            d3.select("#" + controllerID).select("path").style("fill", "#bdc3c7");
	        }
	            // show it if we have a menu
	            currentlyVisibleMenu=d3.select("#"+m_element);
	            currentlyVisibleMenu.style("display","block");
	            if (m_element==="m_export")
	                graph.options().exportMenu().exportAsUrl();
	            updateMenuPosition();
	        }
	    }
	
	    function updateMenuPosition(){
	        if (currentlyHoveredEntry) {
	            var leftOffset = currentlyHoveredEntry.offsetLeft;
	            var scrollOffset = scrollContainer.scrollLeft;
	            var totalOffset = leftOffset - scrollOffset;
	            var finalOffset = Math.max(0, totalOffset);
	            var fullContainer_width = scrollContainer.getBoundingClientRect().width;
	            var elementWidth = currentlyVisibleMenu.node().getBoundingClientRect().width;
	            // make priority > first check if we are right
	            if (finalOffset + elementWidth > fullContainer_width) {
	                finalOffset = fullContainer_width - elementWidth;
	            }
	            // fix priority;
	            finalOffset = Math.max(0, finalOffset);
	            currentlyVisibleMenu.style("left", finalOffset + "px");
	
	            // // check if outside the viewport
	            // var menuWidth=currentlyHoveredEntry.getBoundingClientRect().width;
	            // var bt_width=36;
	            // if (totalOffset+menuWidth<bt_width || totalOffset+bt_width>fullContainer_width){
	            //     navigationMenu.hideAllMenus();
	            //     currentlyHoveredEntry=undefined;
	            // }
	        }
	    }
	
	    navigationMenu.hideAllMenus=function(){
	        d3.selectAll(".toolTipMenu").style("display","none"); // hiding all menus
	    };
	
	    navigationMenu.updateScrollButtonVisibility=function(){
	        scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth -2;
	        if ( scrollContainer.scrollLeft === 0){
	               leftButton.classed("hidden",true);
	        }else{ leftButton.classed("hidden",false);}
	
	        if ( scrollContainer.scrollLeft > scrollMax){
	               rightButton.classed("hidden",true);
	        }else{ rightButton.classed("hidden",false); }
	
	    };
	
		navigationMenu.setup = function () {
	        setupControlsAndMenus();
	        // make sure that the menu elements follow their controller and also their restrictions
	        // some hovering behavior -- lets the menu disappear when hovered in graph or sidebar;
	        d3.select("#graph")         .on("mouseover",function(){ navigationMenu.hideAllMenus(); });
	        d3.select("#generalDetails").on("mouseover",function(){ navigationMenu.hideAllMenus(); });
	    };
	
	    return navigationMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/** The zoom Slider **/
	module.exports = function (graph) {
	    var zoomSlider  = {};
	    var minMag=graph.options().minMagnification(),
	        maxMag=graph.options().maxMagnification(),
	        defZoom,
	        t_zoomOut,
	        t_zoomIn,
	        zoomValue,
	        showSlider=true,
	        w = graph.options().width(),
	        h = graph.options().height(),
	        slider;
	
	    defZoom = Math.min(w, h) / 1000;
	
	    function clearAllTimers() {
	        cancelAnimationFrame(t_zoomOut);
	        cancelAnimationFrame(t_zoomIn);
	    }
	
	    function timed_zoomOut(){
	        zoomValue=0.98*zoomValue;
	        // fail saves
	        if (zoomValue < minMag) {
	            zoomValue = minMag;
	        }
	        graph.setSliderZoom(zoomValue);
	        t_zoomOut=requestAnimationFrame(timed_zoomOut);
	    }
	
	    function timed_zoomIn(){
	        zoomValue=1.02*zoomValue;
	        // fail saves
	        if (zoomValue > maxMag) {
	            zoomValue = maxMag;
	        }
	        graph.setSliderZoom(zoomValue);
	        t_zoomIn=requestAnimationFrame(timed_zoomIn);
	    }
	
	    zoomSlider.setup = function () {
	        slider= d3.select("#zoomSliderParagraph").append("input")
	            .datum({})
	            .attr("id","zoomSliderElement")
	            .attr("type", "range")
	            .attr("value", defZoom)
	            .attr("min", minMag)
	            .attr("max", maxMag)
	            .attr("step", (maxMag - minMag) / 40)
	            .attr("title","zoom factor")
	            .on("input", function(){
	            zoomSlider.zooming();});
	
	        d3.select("#zoomOutButton").on("mousedown",function(){
	            graph.options().navigationMenu().hideAllMenus();
	            zoomValue=graph.scaleFactor();
	            t_zoomOut = requestAnimationFrame(timed_zoomOut);
	        })
	            .on("touchstart",function(){
	                graph.options().navigationMenu().hideAllMenus();
	                zoomValue=graph.scaleFactor();
	                t_zoomOut = requestAnimationFrame(timed_zoomOut);
	            })
	            .on("mouseup",clearAllTimers)
	            .on("touchend",clearAllTimers)
	            .on("touchcancel",clearAllTimers)
	            .attr("title","zoom out");
	
	        d3.select("#zoomInButton").on("mousedown",function(){
	            graph.options().navigationMenu().hideAllMenus();
	            zoomValue=graph.scaleFactor();
	            t_zoomIn = requestAnimationFrame(timed_zoomIn);
	          })
	            .on("touchstart",function(){
	                graph.options().navigationMenu().hideAllMenus();
	                zoomValue=graph.scaleFactor();
	                t_zoomIn = requestAnimationFrame(timed_zoomIn);
	            })
	            .on("mouseup",clearAllTimers)
	            .on("touchend",clearAllTimers)
	            .on("touchcancel",clearAllTimers)
	            .attr("title","zoom in");
	
	        d3.select("#centerGraphButton").on("click",function(){
	                graph.options().navigationMenu().hideAllMenus();
	                graph.forceRelocationEvent();
	        }).attr("title","center graph");
	
	    };
	
	    zoomSlider.showSlider=function(val){
	        if (!arguments.length) return showSlider;
	        d3.select("#zoomSlider").classed("hidden",!val);
	        showSlider=val;
	    };
	
	    zoomSlider.zooming=function(){
	        graph.options().navigationMenu().hideAllMenus();
	        var zoomValue=slider.property("value");
	        slider.attr("value", zoomValue);
	        graph.setSliderZoom(zoomValue);
	    };
	
	    zoomSlider.updateZoomSliderValue=function(val){
	        if(slider){
	            slider.attr("value",val);
	            slider.property("value",val);
	        }
	    };
	
	    return zoomSlider;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the sidebar.
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var sidebar = {},
			languageTools = webvowl.util.languageTools(),
			elementTools = webvowl.util.elementTools(),
		// Required for reloading when the language changes
			ontologyInfo,
	        visibleSidebar=1,
			lastSelectedElement,
	
		    detailArea     = d3.select("#detailsArea"),
		    graphArea      = d3.select("#canvasArea"),
		    menuArea       = d3.select("#swipeBarContainer"),
		    collapseButton = d3.select("#sidebarExpandButton");
	
		function setupCollapsing() {
			// adapted version of this example: http://www.normansblog.de/simple-jquery-accordion/
			function collapseContainers(containers) {
				containers.classed("hidden", true);
			}
	
			function expandContainers(containers) {
				containers.classed("hidden", false);
			}
	
			var triggers = d3.selectAll(".accordion-trigger");
	
			// Collapse all inactive triggers on startup
			collapseContainers(d3.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div"));
	
			triggers.on("click", function () {
				var selectedTrigger = d3.select(this),
					activeTriggers = d3.selectAll(".accordion-trigger-active");
	
				if (selectedTrigger.classed("accordion-trigger-active")) {
					// Collapse the active (which is also the selected) trigger
					collapseContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", false);
				} else {
					// Collapse the other trigger ...
					collapseContainers(d3.selectAll(".accordion-trigger-active + div"));
					activeTriggers.classed("accordion-trigger-active", false);
					// ... and expand the selected one
					expandContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", true);
				}
			});
		}
	
		sidebar.clearOntologyInformation= function(){
	
			d3.select("#title").text("No title available");
			d3.select("#about").attr("href", "#").attr("target", "_blank").text("not given");
			d3.select("#version").text("--");
			d3.select("#authors").text("--");
			d3.select("#description").text("No description available.");
			var container = d3.select("#ontology-metadata");
			container.selectAll("*").remove();
			d3.select("#classCount")
				.text("0");
			d3.select("#objectPropertyCount")
				.text("0");
			d3.select("#datatypePropertyCount")
				.text("0");
			d3.select("#individualCount")
				.text("0");
			d3.select("#nodeCount")
				.text("0");
			d3.select("#edgeCount")
				.text("0");
	
			// clear selectedNode info
			var isTriggerActive = d3.select("#selection-details-trigger").classed("accordion-trigger-active");
			if (isTriggerActive){
				// close accordion
				d3.select("#selection-details-trigger").node().click();
			}
			showSelectionAdvice();
	
		};
	
		/**
		 * Updates the information of the passed ontology.
		 * @param data the graph data
		 * @param statistics the statistics module
		 */
		sidebar.updateOntologyInformation = function (data, statistics) {
			data = data || {};
			ontologyInfo = data.header || {};
	
			updateGraphInformation();
			displayGraphStatistics(undefined, statistics);
			displayMetadata(ontologyInfo.other);
	
			// Reset the sidebar selection
			sidebar.updateSelectionInformation(undefined);
	
			setLanguages(ontologyInfo.languages);
		};
	
		function setLanguages(languages) {
			languages = languages || [];
	
			// Put the default and unset label on top of the selection labels
			languages.sort(function (a, b) {
				if (a === webvowl.util.constants().LANG_IRIBASED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_IRIBASED) {
					return 1;
				}
				if (a === webvowl.util.constants().LANG_UNDEFINED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_UNDEFINED) {
					return 1;
				}
				return a.localeCompare(b);
			});
	
			var languageSelection = d3.select("#language")
				.on("change", function () {
					graph.language(d3.event.target.value);
					updateGraphInformation();
					sidebar.updateSelectionInformation(lastSelectedElement);
				});
	
			languageSelection.selectAll("option").remove();
			languageSelection.selectAll("option")
				.data(languages)
				.enter().append("option")
				.attr("value", function (d) {
					return d;
				})
				.text(function (d) {
					return d;
				});
	
			if (!trySelectDefaultLanguage(languageSelection, languages, "en")) {
				if (!trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_UNDEFINED)) {
					trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_IRIBASED);
				}
			}
		}
	
		function trySelectDefaultLanguage(selection, languages, language) {
			var langIndex = languages.indexOf(language);
			if (langIndex >= 0) {
				selection.property("selectedIndex", langIndex);
				graph.language(language);
				return true;
			}
	
			return false;
		}
	
		function updateGraphInformation() {
			var title = languageTools.textInLanguage(ontologyInfo.title, graph.language());
			d3.select("#title").text(title || "No title available");
			d3.select("#about").attr("href", ontologyInfo.iri).attr("target", "_blank").text(ontologyInfo.iri);
			d3.select("#version").text(ontologyInfo.version || "--");
			var authors = ontologyInfo.author;
			if (typeof authors === "string") {
				// Stay compatible with author info as strings after change in january 2015
				d3.select("#authors").text(authors);
			} else if (authors instanceof Array) {
				d3.select("#authors").text(authors.join(", "));
			} else {
				d3.select("#authors").text("--");
			}
	
			var description = languageTools.textInLanguage(ontologyInfo.description, graph.language());
			d3.select("#description").text(description || "No description available.");
		}
	
		function displayGraphStatistics(deliveredMetrics, statistics) {
			// Metrics are optional and may be undefined
			deliveredMetrics = deliveredMetrics || {};
	
			d3.select("#classCount")
				.text(deliveredMetrics.classCount || statistics.classCount());
			d3.select("#objectPropertyCount")
				.text(deliveredMetrics.objectPropertyCount || statistics.objectPropertyCount());
			d3.select("#datatypePropertyCount")
				.text(deliveredMetrics.datatypePropertyCount || statistics.datatypePropertyCount());
			d3.select("#individualCount")
				.text(deliveredMetrics.totalIndividualCount || statistics.totalIndividualCount());
			d3.select("#nodeCount")
				.text(statistics.nodeCount());
			d3.select("#edgeCount")
				.text(statistics.edgeCount());
		}
	
		function displayMetadata(metadata) {
			var container = d3.select("#ontology-metadata");
			container.selectAll("*").remove();
	
			listAnnotations(container, metadata);
	
			if (container.selectAll(".annotation").size() <= 0) {
				container.append("p").text("No annotations available.");
			}
		}
	
		function listAnnotations(container, annotationObject) {
			annotationObject = annotationObject || {};  //todo
	
			// Collect the annotations in an array for simpler processing
			var annotations = [];
			for (var annotation in annotationObject) {
				if (annotationObject.hasOwnProperty(annotation)) {
					annotations.push(annotationObject[annotation][0]);
				}
			}
	
			container.selectAll(".annotation").remove();
			container.selectAll(".annotation").data(annotations).enter().append("p")
				.classed("annotation", true)
				.classed("statisticDetails", true)
				.text(function (d) {
					return d.identifier + ":";
				})
				.append("span")
				.each(function (d) {
					appendIriLabel(d3.select(this), d.value, d.type === "iri" ? d.value : undefined);
				});
		}
	
		/**
		 * Update the information of the selected node.
		 * @param selectedElement the selection or null if nothing is selected
		 */
		sidebar.updateSelectionInformation = function (selectedElement) {
			// 单个节点的点击事件
			lastSelectedElement = selectedElement;
	
			// Click event was prevented when dragging
			if (d3.event && d3.event.defaultPrevented) {
				return;
			}
	
			var isTriggerActive = d3.select("#selection-details-trigger").classed("accordion-trigger-active");
			if (selectedElement && !isTriggerActive) {
				d3.select("#selection-details-trigger").node().click();
			} else if (!selectedElement && isTriggerActive) {
				showSelectionAdvice();
				return;
			}
	
			if (elementTools.isProperty(selectedElement)) {
				displayPropertyInformation(selectedElement);
			} else if (elementTools.isNode(selectedElement)) {
				displayNodeInformation(selectedElement);
			}
		};
	
		function showSelectionAdvice() {
			setSelectionInformationVisibility(false, false, true);
		}
	
		function setSelectionInformationVisibility(showClasses, showProperties, showAdvice) {
			d3.select("#classSelectionInformation").classed("hidden", !showClasses);
			d3.select("#propertySelectionInformation").classed("hidden", !showProperties);
			d3.select("#noSelectionInformation").classed("hidden", !showAdvice);
		}
	
		function displayPropertyInformation(property) {
			showPropertyInformations();
	
			setIriLabel(d3.select("#propname"), property.labelForCurrentLanguage(), property.iri());
			d3.select("#typeProp").text(property.type());
	
			if (property.inverse() !== undefined) {
				d3.select("#inverse").classed("hidden", false);
				setIriLabel(d3.select("#inverse span"), property.inverse().labelForCurrentLanguage(), property.inverse().iri());
			} else {
				d3.select("#inverse").classed("hidden", true);
			}
	
			var equivalentIriSpan = d3.select("#propEquivUri");
			listNodeArray(equivalentIriSpan, property.equivalents());
	
			listNodeArray(d3.select("#subproperties"), property.subproperties());
			listNodeArray(d3.select("#superproperties"), property.superproperties());
	
			if (property.minCardinality() !== undefined) {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", false);
				d3.select("#minCardinality span").text(property.minCardinality());
				d3.select("#maxCardinality").classed("hidden", false);
	
				if (property.maxCardinality() !== undefined) {
					d3.select("#maxCardinality span").text(property.maxCardinality());
				} else {
					d3.select("#maxCardinality span").text("*");
				}
	
			} else if (property.cardinality() !== undefined) {
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
				d3.select("#infoCardinality").classed("hidden", false);
				d3.select("#infoCardinality span").text(property.cardinality());
			} else {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
			}
	
			setIriLabel(d3.select("#domain"), property.domain().labelForCurrentLanguage(), property.domain().iri());
			setIriLabel(d3.select("#range"), property.range().labelForCurrentLanguage(), property.range().iri());
	
			displayAttributes(property.attributes(), d3.select("#propAttributes"));
	
			setTextAndVisibility(d3.select("#propDescription"), property.descriptionForCurrentLanguage());
			setTextAndVisibility(d3.select("#propComment"), property.commentForCurrentLanguage());
	
			listAnnotations(d3.select("#propertySelectionInformation"), property.annotations());
		}
	
		function showPropertyInformations() {
			setSelectionInformationVisibility(false, true, false);
		}
	
		function setIriLabel(element, name, iri) {
			var parent = d3.select(element.node().parentNode);
	
			if (name) {
				element.selectAll("*").remove();
				appendIriLabel(element, name, iri);
				parent.classed("hidden", false);
			} else {
				parent.classed("hidden", true);
			}
		}
	
		function appendIriLabel(element, name, iri) {
			var tag;
	
			if (iri) {
				tag = element.append("a")
					.attr("href", iri)
					.attr("title", iri)
					.attr("target", "_blank");
			} else {
				tag = element.append("span");
			}
			tag.text(name);
		}
	
		function displayAttributes(attributes, textSpan) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (attributes && attributes.length > 0) {
				// Remove redundant redundant attributes for sidebar
				removeElementFromArray("object", attributes);
				removeElementFromArray("datatype", attributes);
				removeElementFromArray("rdf", attributes);
			}
	
			if (attributes && attributes.length > 0) {
				textSpan.text(attributes.join(", "));
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function removeElementFromArray(element, array) {
			var index = array.indexOf(element);
			if (index > -1) {
				array.splice(index, 1);
			}
		}
	
		function displayNodeInformation(node) {
			showClassInformations();
			d3.select("#name").text(node.labelForCurrentLanguage()).attr("title",node.labelForCurrentLanguage());
			// 20181113 将 其类型修改成 => 根 册 章 节 知识点 
			// 20181113 将 其类型修改成 => 根 章 节 知识点 1 2 3 4 去掉了册信息
			switch (node.level()){
				case 1:
					d3.select(".mainTitle").text("学科概况");
					d3.select("#nodeNameTitle").text("学科名称: ");
					d3.select("#typeNode").text("根");
					break;
	//			case 2:
	//				d3.select(".mainTitle").text("教材概况");
	//				d3.select("#nodeNameTitle").text("教材/册: ");
	//				d3.select("#typeNode").text("册");
	//				break;
				case 2:
					d3.select(".mainTitle").text("章概况");
					d3.select("#nodeNameTitle").text("章名称: ");
					d3.select("#typeNode").text("章");
					break;
				case 3:
					d3.select(".mainTitle").text("节概况");
					d3.select("#nodeNameTitle").text("节名称: ");
					d3.select("#typeNode").text("节");
					break;
				case 4:
					d3.select(".mainTitle").text("知识点概况");
					d3.select("#nodeNameTitle").text("知识点名称: ");
					d3.select("#typeNode").text("知识点");
					break;
				default:
					break;
			}
	
			// 单个节点的点击事件
			// setHtmlAndVisibility(d3.select("#nodeComment"), node.commentForCurrentLanguage());
			setHtmlAndVisibility(d3.select("#nodeComment"), node.comment(), node.level());
			
			// 绘制饼状图开始
			// 在 #nodeComment 墨迹节点内append 一个元素, 如果 => 优 良 中 差 四个数值都为0 则圆形不进行绘制
			// if (d3.select("#goodScore").text() == 0 && d3.select("#satisScore").text() == 0 && d3.select("#mediumScore").text() == 0 && d3.select("#badScore").text() == 0) {
			// 	return false;
			// } else {
			// 	var width = 150;
			// 	var height =150;
			// 	var dataset = [ 
			// 		Number(d3.select("#goodScore").text()), 
			// 		Number(d3.select("#satisScore").text()), 
			// 		Number(d3.select("#mediumScore").text()), 
			// 		Number(d3.select("#badScore").text())
			// 	];
			// 	var svg = d3.select("#nodeComment").attr("style","display: block;position: relative;min-height: 420px;").append("svg")
			// 							.attr("style","width: 180px; min-height:180px !important; position: absolute; bottom: 0; left:0; right:0; margin: 30px auto 0px; text-align: center;")
			// 	// 定义饼图
			// 	var pie = d3.layout.pie().sort(null);
				
			// 	var outerRadius = width / 2;
			// 	var innerRadius = width / 1000000;
			// 	var arc = d3.svg.arc()
			// 					.innerRadius(innerRadius)
			// 					.outerRadius(outerRadius);
			// 	var color = [ "#54BA78", "#5A78C3", "#9B6DC3", "#FAC842" ];
			// 	var arcs = svg.selectAll("g")
			// 					.data(pie(dataset))
			// 					.enter()
			// 					.append("g")
			// 					.attr("transform","translate("+outerRadius+","+outerRadius+")");
			// 	arcs.append("path")
			// 		.attr("fill",function(d,i){
			// 			return color[i];
			// 		})
			// 		.attr("d",function(d){
			// 			return arc(d);
			// 		});
			// 	var numFlag = 0;
			// 	arcs.append("text")
			// 		.attr("transform",function(d){
			// 			return "translate(" + arc.centroid(d) + ")";
			// 		})
			// 		.attr("text-anchor","middle")
			// 		.attr("style","font-size: 12px; font-style: normal; font-family: 'microsoft yahei'; fill: #ffffff !important;")
			// 		.text(function(d){
			// 			numFlag ++;
			// 			const dValue = changeTextInside(d,numFlag);
			// 			if(numFlag == 5){
			// 				numFlag = 0;
			// 			}
			// 			return dValue;
			// 		});
			// 		// 绘制饼状图结束
			// 	listAnnotations(d3.select("#classSelectionInformation"), node.annotations());
			// }
	
			// 20181122 绘制饼状图 => 优良中差信息显示在线外边
			if (d3.select("#goodScore").text() == 0 && d3.select("#satisScore").text() == 0 && d3.select("#mediumScore").text() == 0 && d3.select("#badScore").text() == 0) {
				return false;
			} else { 
				var box = document.getElementById("detailsArea")
				var contentWidth = box.offsetWidth;
				var width  = contentWidth - 80;
				var height = contentWidth - 80;
				var goodScore = Number(d3.select("#goodScore").text()) == 0 ? "" : "优：" + d3.select("#goodScore").text() + "%";
				var satisScore = Number(d3.select("#satisScore").text()) == 0 ? "" : "良：" + d3.select("#satisScore").text() + "%";
				var mediumScore = Number(d3.select("#mediumScore").text()) == 0 ? "" : "中：" + d3.select("#mediumScore").text() + "%";
				var badScore = Number(d3.select("#badScore").text()) == 0 ? "" : "差：" + d3.select("#badScore").text() + "%";
				var dataset = [ 
					[ goodScore, Number(d3.select("#goodScore").text()) ], 
					[ satisScore, Number(d3.select("#satisScore").text()) ], 
					[ mediumScore, Number(d3.select("#mediumScore").text()) ], 
					[ badScore, Number(d3.select("#badScore").text()) ], 
				];
				var svg = d3.select("#nodeComment")
						.attr("style", "display: block;position: relative;min-height: " +(210+contentWidth)+ "px;")
						.append("svg")
						.attr("style","width: "+(contentWidth-80)+"px; height:"+(contentWidth)+"px !important; position: absolute; bottom: 0; left:0; right:0; margin: 30px auto 0px; text-align: center; overflow: visible;")
	
				//转换数据, 不按照比例大小进行排序, 默认 "优良中差"
				var pie = d3.layout.pie().sort(null)
					.value(function (d) {
						return d[1];
					});
				//dataset为转换前的数据 piedata为转换后的数据
				var piedata = pie(dataset);
				var outerRadius = width / 3;
				var innerRadius = 0; 
				var arc = d3.svg.arc()
					.innerRadius(innerRadius)
					.outerRadius(outerRadius);
				var color = [ "#54BA78", "#5A78C3", "#9B6DC3", "#FAC842" ];
				var arcs = svg.selectAll("g")
					.data(piedata)
					.enter()
					.append("g")
					.attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");
				arcs.append("path")
					.attr("fill", function (d, i) {
						return color[i];
					})
					.attr("d", function (d) {
						return arc(d);
					});
				//添加连接弧外文字的直线元素
				arcs.append("line")
					.attr("stroke", "black")
					.attr("x1", function (d) {
						if (d.value == 0) {
							return 0;
						} else {
							return arc.centroid(d)[0] * 2;
						}
					})
					.attr("y1", function (d) {
						if (d.value == 0) {
							return 0;
						} else {
							return arc.centroid(d)[1] * 2;
						}
					})
					.attr("x2", function (d) {
						if (d.value == 0) {
							return 0;
						} else {
							return arc.centroid(d)[0] * 2.2;
						}
					})
					.attr("y2", function (d) {
						if (d.value == 0) {
							return 0;
						} else {
							return arc.centroid(d)[1] * 2.2;
						}
					});
				var fontsize = 12;
				arcs.append("line")
					.style("stroke", "#979797")
					.each(function (d) {
						if (d.value !== 0) {
							d.textLine = {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 0
							};
						} else {
							d.textLine = {
								x1: "",
								y1: "",
								x2: "",
								y2: ""
							};;
						}
					})
					.attr("x1", function (d) {
						if (d.value !== 0) {
							d.textLine.x1 = arc.centroid(d)[0] * 2.2;
						}
						return d.textLine.x1;
					})
					.attr("y1", function (d) {
						if (d.value !== 0) {
							d.textLine.y1 = arc.centroid(d)[1] * 2.2;
						}
						return d.textLine.y1;
					})
					.attr("x2", function (d) {
						if (d.value !== 0) {
							var strLen = getPixelLength(d.data[0], fontsize) * 1.5;
							var bx = arc.centroid(d)[0] * 2.2;
							d.textLine.x2 = bx >= 0 ? bx + strLen : bx - strLen;
						}
						return d.textLine.x2;
					})
					.attr("y2", function (d) {
						if (d.value !== 0) {
							d.textLine.y2 = arc.centroid(d)[1] * 2.2;
						}
						return d.textLine.y2;
					});
				//添加弧外的文字元素
				arcs.append("text")
					.attr("transform", function (d) {
						var x = 0;
						var y = 0;
						x = (d.textLine.x1 + d.textLine.x2) / 2;
						y = d.textLine.y1;
						y = y > 0 ? y + fontsize * 1.1 : y - fontsize * 0.4;
						return "translate(" + x + "," + y + ")";
					})
					.style("text-anchor", "middle")
					.style("font-size", fontsize)
					.text(function (d) {
						return d.data[0];
					});
				function getPixelLength(str, fontsize) {
					var curLen = 0;
					for (var i = 0; i < str.length; i++) {
						var code = str.charCodeAt(i);
						var pixelLen = code > 255 ? fontsize : fontsize / 2;
						curLen += pixelLen;
					}
					return curLen;
				}
			}
		}
		
		// 饼状图 内部 text 文本处理
		function changeTextInside(d,num){
			if(d.value == 0){
				return ""
			}else{
				switch (num){
					case 1:
						return "优"
						break;
					case 2:
						return "良"
						break;
					case 3:
						return "中"
						break;
					case 4:
						return "差"
						break;
					case 5:
						return "未知"
						break;
					default:
						break;
				}
			}
		}
	
		function showClassInformations() {
			setSelectionInformationVisibility(true, false, false);
		}
	
		function listNodeArray(textSpan, nodes) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (nodes && nodes.length) {
				textSpan.selectAll("*").remove();
				nodes.forEach(function (element, index) {
					if (index > 0) {
						textSpan.append("span").text(", ");
					}
					appendIriLabel(textSpan, element.labelForCurrentLanguage(), element.iri());
				});
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function setTextAndVisibility(label, value) {
			var parentNode = d3.select(label.node().parentNode);
			var hasValue = !!value;
			if (value) {
				label.text(value);
			}
			parentNode.classed("hidden", !hasValue);
		}
		
		// 添加针对  节点  内部元素 span#nodeComment 内部填充 HTML 格式方法
		function setHtmlAndVisibility(label, value, level) {
			var valueStr = ""
			if (level == 1) {
				// level == 1 => value中为空对象
				return;
			} else {
				d3.select("#nodeDetailTitle").attr("style", "clear: both; display: block; ");
				// level == 2 3 4 => value 除了difficulty是多少就是多少 其他字段为百分率%
				valueStr += "<p>难度值：" +value.difficulty+ "</p>"
									+ "<p>考频值：" +value.frequency+ "</p>"
									+ "<p>完成率：" +(value.compRate*100).toFixed(0)+ "%</p>"
									+ "<p>优秀率：" +(value.goods*100).toFixed(0)+ "%</p>"
									+ '<p>优：<span id="goodScore" style="color: #333333; font-family: microsoft yahei;">' +(value.aRate*100).toFixed(0)+ '</span>%<span 		style="display:inline-block; float: right; height: 14px; width: 50px; margin-right: 3em; background: #54BA78;"></span></p>'
									+ '<p>良：<span id="satisScore" style="color: #333333; font-family: microsoft yahei;">' +(value.bRate*100).toFixed(0)+ '</span>%<span style="display:inline-block; float: right; height: 14px; width: 50px; margin-right: 3em; background: #5A78C3;"></span></p>'
									+ '<p>中：<span id="mediumScore" style="color: #333333; font-family: microsoft yahei;">' +(value.cRate*100).toFixed(0)+ '</span>%<span style="display:inline-block; float: right; height: 14px; width: 50px; margin-right: 3em; background: #9B6DC3;"></span></p>'
									+ '<p>差：<span id="badScore" style="color: #333333; font-family: microsoft yahei;">' +(value.dRate*100).toFixed(0)+ '</span>%<span style="display:inline-block; float: right; height: 14px; width: 50px; margin-right: 3em; background: #FAC842;"></span></p>';
				
				label.html(valueStr);
			}
		}
	
		/** Collapsible Sidebar functions; **/
	
	    sidebar.showSidebar=function(val,init){
	        // make val to bool
	        if (val===1) {
	            visibleSidebar=true;
	            collapseButton.node().innerHTML=">";
	            detailArea.classed("hidden",true);
	            if (init===true) {
	                detailArea.classed("hidden",!visibleSidebar);
	                graphArea.style("width","78%");
	                graphArea.style("-webkit-animation-name","none");
	                 menuArea.style("width","78%");
	                 menuArea.style("-webkit-animation-name","none");
	            } else {
	                graphArea.style("width","78%");
	                graphArea.style("-webkit-animation-name","sbCollapseAnimation");
	                graphArea.style("-webkit-animation-duration","0.5s");
	                 menuArea.style("width","78%");
	                 menuArea.style("-webkit-animation-name","sbCollapseAnimation");
	                 menuArea.style("-webkit-animation-duration","0.5s");
	            }
	            graph.options().width(window.innerWidth - (window.innerWidth * 0.22));
	            graph.options().navigationMenu().updateScrollButtonVisibility();
	        }
	        if (val===0){
	            visibleSidebar=false;
	            detailArea.classed("hidden",true);
	
	            collapseButton.node().innerHTML="<";
	            // adjust the layout
	            if (init===true) {
	                graphArea.style("width","100%");
	                graphArea.style("-webkit-animation-name","none");
	                 menuArea.style("width","100%");
	                 menuArea.style("-webkit-animation-name","none");
	            }else {
	                graphArea.style("width","100%");
	                graphArea.style("-webkit-animation-name","sbExpandAnimation");
	                graphArea.style("-webkit-animation-duration","0.5s");
	
	                 menuArea.style("width","100%");
	                 menuArea.style("-webkit-animation-name","sbExpandAnimation");
	                 menuArea.style("-webkit-animation-duration","0.5s");
	            }
	            graph.options().width(window.innerWidth);
	            graph.updateCanvasContainerSize();
	            graph.options().navigationMenu().updateScrollButtonVisibility();
	        }
	        // finalize steps
	        // graph.updateCanvasContainerSize();
	        // graph.options().navigationMenu().updateScrollButtonVisibility();
	    };
	
	    sidebar.isSidebarVisible=function(){return visibleSidebar;};
	
	    sidebar.updateSideBarVis=function(init){
	        var vis=sidebar.getSidebarVisibility();
	        sidebar.showSidebar(parseInt(vis),init);
	    };
	
	    sidebar.getSidebarVisibility=function(){
	        var isHidden=detailArea.classed("hidden");
	        if (isHidden===false) return String(1);
	        if (isHidden===true) return String(0);
		};
	
	    sidebar.initSideBarAnimation=function(){
	        graphArea.node().addEventListener("animationend", function() {
	            detailArea.classed("hidden", !visibleSidebar);
	            // if (visibleSidebar === true){
	             //    graph.options().width(window.innerWidth - (window.innerWidth * 0.22));
	            // }
	            // else{
	             //    graph.options().width(window.innerWidth);
				// }
	            graph.updateCanvasContainerSize();
	            graph.options().navigationMenu().updateScrollButtonVisibility();
	        });
	    };
	
	    sidebar.setup = function () {
	        setupCollapsing();
	        sidebar.initSideBarAnimation();
	
	        collapseButton.on("click",function(){
	            graph.options().navigationMenu().hideAllMenus();
	            var settingValue=parseInt(sidebar.getSidebarVisibility());
	            if (settingValue===1) sidebar.showSidebar(0);
	            else                  sidebar.showSidebar(1);
	        });
	    };
	
		return sidebar;
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {module.exports = function (graph) {
	    var configMenu = {},
	        checkboxes = [];
	
	
	    configMenu.setup = function () {
	        var menuEntry= d3.select("#m_modes");
	        menuEntry.on("mouseover",function(){
	            var searchMenu=graph.options().searchMenu();
	            searchMenu.hideSearchEntries();
	        });
	        addCheckBox("showZoomSlider","缩放控件","#zoomSliderOption",graph.options().zoomSlider().showSlider,0);
	        // addLabelWidthSlider("#maxLabelWidthSliderOption","maxLabelWidth","Max label width", graph.options().maxLabelWidth);
	    };
	
	
	    function addLabelWidthSlider(selector, identifier, label, onChangeFunction) {
	        var sliderContainer,
	            sliderValueLabel;
	
	        sliderContainer = d3.select(selector)
	            .append("div")
	            .classed("distanceSliderContainer", true);
	
	        var slider = sliderContainer.append("input")
	            .attr("id", identifier + "Slider")
	            .attr("type", "range")
	            .attr("min", 20)
	            .attr("max", 600)
	            .attr("value", onChangeFunction())
	            .attr("step", 10);
	        sliderContainer.append("label")
	            .classed("description", true)
	            .attr("for", identifier + "Slider")
	            .text(label);
	        sliderValueLabel = sliderContainer.append("label")
	            .classed("value", true)
	            .attr("for", identifier + "Slider")
	            .text(onChangeFunction());
	
	        slider.on("input", function () {
	            var value = slider.property("value");
	            onChangeFunction(value);
	            sliderValueLabel.text(value);
	            if (graph.options().dynamicLabelWidth()===true)
	                graph.animateDynamicLabelWidth();
	        });
	
	        // add wheel event to the slider
	        slider.on("wheel",function(){
	            var wheelEvent=d3.event;
	            var offset;
	            if (wheelEvent.deltaY<0) offset=10;
	            if (wheelEvent.deltaY>0) offset=-10;
	            var oldVal=parseInt(slider.property("value"));
	            var newSliderValue=oldVal+offset;
	            if (newSliderValue!==oldVal){
	                slider.property("value",newSliderValue);
	                onChangeFunction(newSliderValue);
	                slider.on("input")(); // << set text and update the graphStyles
	            }
	            d3.event.preventDefault();
	        });
	    }
	
	    function addCheckBox(identifier, modeName, selector,onChangeFunc,updateLvl) {
	        var configOptionContainer = d3.select(selector)
	            .append("div")
	            .classed("checkboxContainer", true);
	        var configCheckbox = configOptionContainer.append("input")
	            .classed("moduleCheckbox", true)
	            .attr("id", identifier + "ConfigCheckbox")
	            .attr("type", "checkbox")
	            .property("checked", onChangeFunc());
	
	
	        configCheckbox.on("click", function (silent) {
	            var isEnabled = configCheckbox.property("checked");
	            onChangeFunc(isEnabled);
	            if (silent !== true) {
	                // updating graph when silent is false or the parameter is not given.
	                if (updateLvl===1) {
	                    graph.lazyRefresh();
	                }
	                if (updateLvl===2){
	                    graph.update();
	                }
	            }
	
	        });
	        checkboxes.push(configCheckbox);
	        configOptionContainer.append("label")
	            .attr("for", identifier + "ConfigCheckbox")
	            .text(modeName);
	    }
	
	    configMenu.setCheckBoxValue=function(identifier,value){
	        for (var i = 0; i < checkboxes.length; i++) {
	            var cbdId = checkboxes[i].attr("id");
	            if (cbdId === identifier) {
	                checkboxes[i].property("checked", value);
	                break;
	            }
	        }
	    };
	
	    configMenu.getCheckBoxValue = function (id) {
	        for (var i = 0; i < checkboxes.length; i++) {
	            var cbdId = checkboxes[i].attr("id");
	            if (cbdId === id) {
	                return checkboxes[i].property("checked");
	            }
	        }
	    };
	
	    configMenu.updateSettings = function () {
	        var silent = true;
	        checkboxes.forEach(function (checkbox) {
	            checkbox.on("click")(silent);
	        });
	    };
	
	    return configMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {module.exports =  function (graph) {
	    /** some constants **/
	    var PREDEFINED  = 0,
	        FILE_UPLOAD = 1,
	        JSON_URL    = 2,
	        IRI_URL     = 3;
	
	    var PROGRESS_BAR_ERROR=0,
	        PROGRESS_BAR_BUSY=1,
	        PROGRESS_BAR_PERCENT=2,
	        progressBarMode=1;
	
	    var loadingWasSuccessFul=false;
	    var missingImportsWarning=false;
	    var showLoadingDetails=false;
	    var visibilityStatus=true;
	
	    var DEFAULT_JSON_NAME = "foaf_one"; // This file is loaded by default
	    var conversion_sessionId;
	
	    /** variable defs **/
	    var loadingModule={},
	        menuContainer=d3.select("#loading-info"),
	        loadingInfoContainer=d3.select("#loadingInfo-container"),
	        detailsButton=d3.select("#show-loadingInfo-button"),
	        closeButton= d3.select("#loadingIndicator_closeButton"),
	        ontologyMenu,
	        ontologyIdentifierFromURL;
	
	    /** functon defs **/
	    loadingModule.checkForScreenSize=function(){
	        // checks for window size and adjusts the loading indicator
	        var w=graph.options().width(),
	        h=graph.options().height();
	
	        if (w<270){
	            d3.select("#loading-info").classed("hidden",true);
	        } else {
	            // check if it should be visible
	            if (visibilityStatus===true){
	              d3.select("#loading-info").classed("hidden",false);
	            } else{
	              d3.select("#loading-info").classed("hidden",true);
	            }
	        }
	        if (h<150) {
	            d3.select("#loadingInfo_msgBox").classed("hidden", true);
	        }else {
	            d3.select("#loadingInfo_msgBox").classed("hidden", false);
	        }
	        if (h<80) {
	            d3.select("#progressBarContext").classed("hidden", true);
	            d3.select("#layoutLoadingProgressBarContainer").style("height","20px");
	        }else {
	            d3.select("#progressBarContext").classed("hidden", false);
	            d3.select("#layoutLoadingProgressBarContainer").style("height","50px");
	        }
	    };
	
	    loadingModule.getProgressBarMode=function(){
	        return progressBarMode;
	    };
	
	    loadingModule.successfullyLoadedOntology=function(){
	        return loadingWasSuccessFul;
	    };
	
	    loadingModule.missingImportsWarning=function(){
	        return missingImportsWarning;
	    };
	
	    loadingModule.setOntologyMenu=function(m){
	        ontologyMenu=m;
	    };
	
	    loadingModule.showErrorDetailsMessage=function(){
	        loadingModule.showLoadingIndicator();
	        loadingModule.expandDetails();
	        d3.select("#loadingIndicator_closeButton").classed("hidden",true);
	        loadingModule.scrollDownDetails();
	    };
	
	    loadingModule.showWarningDetailsMessage=function(){
	        d3.select("#currentLoadingStep").style("color","#ff0");
	        loadingModule.showLoadingIndicator();
	        loadingModule.expandDetails();
	        d3.select("#loadingIndicator_closeButton").classed("hidden",false);
	        loadingModule.scrollDownDetails();
	    };
	
	    loadingModule.scrollDownDetails=function(){
	        var scrollingElement=d3.select("#loadingInfo-container").node();
	        scrollingElement.scrollTop = scrollingElement.scrollHeight;
	    };
	
	    loadingModule.hideLoadingIndicator=function(){
	        d3.select("#loading-info").classed("hidden",true);
	        visibilityStatus=false;
	    };
	
	    loadingModule.showLoadingIndicator=function(){
	        d3.select("#loading-info").classed("hidden",false);
	        visibilityStatus=true;
	
	    };
	
	    /** -- SETUP -- **/
	    loadingModule.setup=function(){
	        // create connections for close and details button;
	        loadingInfoContainer.classed("hidden",!showLoadingDetails);
	        detailsButton.on("click",function(){
	            showLoadingDetails=!showLoadingDetails;
	            loadingInfoContainer.classed("hidden",!showLoadingDetails);
	            detailsButton.classed("accordion-trigger-active",showLoadingDetails);
	        });
	
	        closeButton.on("click",function(){
	            menuContainer.classed("hidden",true);
	        });
	        loadingModule.setBusyMode();
	    };
	
	    loadingModule.updateSize=function(){
	        showLoadingDetails=!(loadingInfoContainer.classed("hidden"));
	        loadingInfoContainer.classed("hidden",!showLoadingDetails);
	        detailsButton.classed("accordion-trigger-active",showLoadingDetails);
	    };
	
	    loadingModule.getDetailsState=function(){
	        return showLoadingDetails;
	    };
	
	    loadingModule.expandDetails=function(){
	        showLoadingDetails=true;
	        loadingInfoContainer.classed("hidden",!showLoadingDetails);
	        detailsButton.classed("accordion-trigger-active",showLoadingDetails);
	    };
	
	    loadingModule.collapseDetails=function(){
	        showLoadingDetails=false;
	        loadingInfoContainer.classed("hidden",!showLoadingDetails);
	        detailsButton.classed("accordion-trigger-active",showLoadingDetails);
	    };
	
	    loadingModule.setBusyMode=function(){
	        d3.select("#currentLoadingStep").style("color","#fff");
	        d3.select("#progressBarValue").node().innherHTML="";
	        d3.select("#progressBarValue").style("width","20%");
	        d3.select("#progressBarValue").classed("busyProgressBar",true);
	        progressBarMode=PROGRESS_BAR_BUSY;
	    };
	
	    loadingModule.setSuccessful=function(){
	        d3.select("#currentLoadingStep").style("color","#0f0");
	    };
	
	    loadingModule.setErrorMode=function(){
	        d3.select("#currentLoadingStep").style("color","#f00");
	        d3.select("#progressBarValue").style("width","0%");
	        d3.select("#progressBarValue").classed("busyProgressBar",false);
	        d3.select("#progressBarValue").node().innherHTML="";
	        progressBarMode=PROGRESS_BAR_ERROR;
	    };
	
	    loadingModule.setPercentMode=function(){
	        d3.select("#currentLoadingStep").style("color","#fff");
	        d3.select("#progressBarValue").classed("busyProgressBar",false);
	        d3.select("#progressBarValue").node().innherHTML="0%";
	        d3.select("#progressBarValue").style("width","0%");
	        progressBarMode=PROGRESS_BAR_PERCENT;
	    };
	
	    loadingModule.setPercentValue=function(val){
	        d3.select("#progressBarValue").node().innherHTML=val;
	    };
	
	    loadingModule.emptyGraphContentError=function(){
	        graph.clearGraphData();
	        ontologyMenu.append_message_toLastBulletPoint("<span style='color:red;'>failed</span>");
	        ontologyMenu.append_message_toLastBulletPoint("<br><span style=\"color:red;\">Error: Received empty graph</span>");
	        loadingWasSuccessFul=false;
	        graph.handleOnLoadingError();
	        loadingModule.setErrorMode();
	    };
	
	    loadingModule.isThreadCanceled=function(){
	
	    };
	    /** ------------------ URL Interpreter -------------- **/
	    loadingModule.parseUrlAndLoadOntology=function() {
	        conversion_sessionId=-10000;
	        ontologyMenu.setConversionID(conversion_sessionId);
	        ontologyMenu.stopLoadingTimer();
	        graph.clearGraphData();
	        loadingModule.setBusyMode();
	        loadingModule.showLoadingIndicator();
	        loadingModule.collapseDetails();
	        missingImportsWarning=false;
	        d3.select("#loadingIndicator_closeButton").classed("hidden",true);
	        ontologyMenu.clearDetailInformation();
	
	        var urlString = String(location);
	        var parameterArray=identifyParameter(urlString);
	        ontologyIdentifierFromURL=DEFAULT_JSON_NAME;
	        loadGraphOptions(parameterArray); // identifies and loads configuration values
	        var loadingMethod= identifyOntologyLoadingMethod(ontologyIdentifierFromURL);
	        d3.select("#progressBarValue").node().innerHTML=" ";
	        switch (loadingMethod){
	            case 0:
	                loadingModule.from_presetOntology(ontologyIdentifierFromURL); break;
	            case 1:
	                loadingModule.from_FileUpload(ontologyIdentifierFromURL); break;
	            case 2:
	                loadingModule.from_JSON_URL(ontologyIdentifierFromURL); break;
	            case 3:
	                loadingModule.from_IRI_URL(ontologyIdentifierFromURL); break;
	            default:
	                console.log("Could not identify loading method , or not IMPLEMENTED YET");
	        }
	    };
	
	    /** ------------------- LOADING --------------------- **/
	    // the loading module splits into 3 branches
	    // 1] PresetOntology Loading
	    // 2] File Upload
	    // 3] Load From URL / IRI
	
	    loadingModule.from_JSON_URL=function(fileName){
	        var filename = decodeURIComponent(fileName.slice("url=".length));
	        ontologyIdentifierFromURL=filename;
	
	        var ontologyContent="";
	        if (ontologyMenu.cachedOntology(filename)) {
	            ontologyMenu.append_bulletPoint("Loading already cached ontology: " + filename);
	            ontologyContent = ontologyMenu.cachedOntology(filename);
	            loadingWasSuccessFul = true; // cached Ontology should be true;
	            parseOntologyContent(ontologyContent);
	        }else{
	            // involve the o2v conveter;
	            ontologyMenu.append_message("Retrieving ontology from JSON URL " + filename);
	            requestServerTimeStampForJSON_URL(ontologyMenu.callbackLoad_JSON_FromURL,["read?json="+filename,filename]);
	        }
	    };
	
	    function requestServerTimeStampForJSON_URL(callback,parameter){
	        d3.xhr("serverTimeStamp", "application/text", function (error, request) {
	            if (error){
	                // could not get server timestamp -> no connection to owl2vowl
	                ontologyMenu.append_bulletPoint("Could not establish connection to OWL2VOWL service");
	                fallbackForJSON_URL(callback,parameter);
	            }else {
	                conversion_sessionId = request.responseText;
	                ontologyMenu.setConversionID(conversion_sessionId);
	                parameter.push(conversion_sessionId);
	                callback(parameter);
	            }
	        });
	
	    }
	
	    loadingModule.from_IRI_URL=function(fileName){
	        // owl2vowl converters the given ontology url and returns json file;
	        var filename = decodeURIComponent(fileName.slice("iri=".length));
	        ontologyIdentifierFromURL=filename;
	
	        var ontologyContent="";
	        if (ontologyMenu.cachedOntology(filename)) {
	            ontologyMenu.append_bulletPoint("Loading already cached ontology: " + filename);
	            ontologyContent = ontologyMenu.cachedOntology(filename);
	            loadingWasSuccessFul = true; // cached Ontology should be true;
	            parseOntologyContent(ontologyContent);
	        }else{
	            // involve the o2v conveter;
	            var encoded=encodeURIComponent(filename);
	            ontologyMenu.append_bulletPoint("Retrieving ontology from IRI: " + filename);
	            requestServerTimeStampForIRI_Converte(ontologyMenu.callbackLoad_Ontology_FromIRI,["convert?iri="+encoded,filename]);
	        }
	    };
	
	    loadingModule.from_FileUpload=function(fileName){
	        loadingModule.setBusyMode();
	        var filename = decodeURIComponent(fileName.slice("file=".length));
	        ontologyIdentifierFromURL=filename;
	        var ontologyContent="";
	        if (ontologyMenu.cachedOntology(filename)) {
	            ontologyMenu.append_bulletPoint("Loading already cached ontology: " + filename);
	            ontologyContent = ontologyMenu.cachedOntology(filename);
	            loadingWasSuccessFul = true; // cached Ontology should be true;
	            parseOntologyContent(ontologyContent);
	
	        }else{
	            // d3.select("#currentLoadingStep").node().innerHTML="Loading ontology from file "+ filename;
	            ontologyMenu.append_bulletPoint("Retrieving ontology from file: "+ filename);
	            // get the file
	            var selectedFile = d3.select("#file-converter-input").property("files")[0];
	            // No selection -> this was triggered by the iri. Unequal names -> reuploading another file
	            if (!selectedFile || (filename && (filename !== selectedFile.name))) {
	                ontologyMenu.append_message_toLastBulletPoint("<br><span style=\"color:red;\">No cached version of \"" + filename + "\" was found.</span><br>Please reupload the file.");
	                loadingModule.setErrorMode();
	                d3.select("#progressBarValue").classed("busyProgressBar",false);
	                graph.handleOnLoadingError();
	                return;
	            } else {
	                filename = selectedFile.name;
	            }
	
	
	// two options here
	//1] Direct Json Upload
	            if (filename.match(/\.json$/)) {
	                ontologyMenu.setConversionID(-10000);
	                var reader = new FileReader();
	                reader.readAsText(selectedFile);
	                reader.onload = function () {
	                    ontologyContent=reader.result;
	                    ontologyIdentifierFromURL=filename;
	                    parseOntologyContent(ontologyContent);
	                };
	            }else{
	//2] File Upload to OWL2VOWL Converter
	                // 1) check if we can get a timeStamp;
	                var parameterArray=[selectedFile,filename];
	                requestServerTimeStamp(ontologyMenu.callbackLoadFromOntology,parameterArray);
	            }
	        }
	    };
	
	    function fallbackForJSON_URL(callback,parameter){
	        ontologyMenu.append_message_toLastBulletPoint("<br>Trying to convert with other communication protocol.");
	        callback(parameter);
	
	    }
	
	    function fallbackConversion(parameter){
	        ontologyMenu.append_message_toLastBulletPoint("<br>Trying to convert with other communication protocol.");
	        var file=parameter[0];
	        var name=parameter[1];
	        var formData = new FormData();
	        formData.append("ontology" , file);
	
	        var xhr = new XMLHttpRequest();
	        xhr.open("POST", "convert", true);
	        var ontologyContent="";
	        xhr.onload = function () {
	            if (xhr.status === 200) {
	                ontologyContent=xhr.responseText;
	                ontologyMenu.setCachedOntology(name,ontologyContent);
	                ontologyIdentifierFromURL=name;
	                missingImportsWarning=true; // using this variable for warnings
	                ontologyMenu.append_message_toLastBulletPoint("<br>Success, <span style='color:yellow'>but you are using a deprecated OWL2VOWL service!<span>");
	                parseOntologyContent(ontologyContent);
	            }
	        };
	
	        // check what this thing is doing;
	        xhr.onreadystatechange = function(){
	            if (xhr.readyState===4 && xhr.status===0) {
	                ontologyMenu.append_message_toLastBulletPoint("<br>Old protocol also failed to establish connection to OWL2VOWL service!");
	                loadingModule.setErrorMode();
	                ontologyMenu.append_bulletPoint("Failed to load ontology");
	                ontologyMenu.append_message_toLastBulletPoint("<br><span style='color:red'>Could not connect to OWL2VOWL service </span>");
	                loadingModule.showErrorDetailsMessage();
	            }
	        };
	        xhr.send(formData);
	    }
	
	    function requestServerTimeStampForIRI_Converte(callback,parameterArray){
	        d3.xhr("serverTimeStamp", "application/text", function (error, request) {
	            loadingModule.setBusyMode();
	            if (error){
	                // could not get server timestamp -> no connection to owl2vowl
	                ontologyMenu.append_bulletPoint("Could not establish connection to OWL2VOWL service");
	                loadingModule.setErrorMode();
	                ontologyMenu.append_bulletPoint("Failed to load ontology");
	                ontologyMenu.append_message_toLastBulletPoint("<br><span style='color:red'>Could not connect to OWL2VOWL service </span>");
	                loadingModule.showErrorDetailsMessage();
	            }else {
	                conversion_sessionId = request.responseText;
	                ontologyMenu.setConversionID(conversion_sessionId);
	                // update paramater for new communication paradigm
	                parameterArray[0]=parameterArray[0]+"&sessionId="+conversion_sessionId;
	                parameterArray.push(conversion_sessionId);
	                callback(parameterArray);
	            }
	        });
	    }
	
	    function requestServerTimeStamp(callback,parameterArray){
	        d3.xhr("serverTimeStamp", "application/text", function (error, request) {
	            if (error){
	                // could not get server timestamp -> no connection to owl2vowl
	                ontologyMenu.append_bulletPoint("Could not establish connection to OWL2VOWL service");
	                fallbackConversion(parameterArray); // tries o2v version0.3.4 communication
	            }else {
	                conversion_sessionId = request.responseText;
	                ontologyMenu.setConversionID(conversion_sessionId);
	                console.log("Request Session ID:"+ conversion_sessionId);
	                callback(parameterArray[0],parameterArray[1],conversion_sessionId);
	            }
	        });
	    }
	
	    loadingModule.loadFromOWL2VOWL=function(ontoContent,filename){
	        loadingWasSuccessFul=false;
	
	        var old=d3.select("#bulletPoint_container").node().innerHTML;
	        if (old.indexOf("(with warnings)")!==-1 ) { missingImportsWarning=true;}
	
	        if (ontologyMenu.cachedOntology(ontoContent)) {
	            ontologyMenu.append_bulletPoint("Loading already cached ontology: " + filename);
	            parseOntologyContent(ontoContent);
	        }else{ // set parse the ontology content;
	            parseOntologyContent(ontoContent);
	        }
	    };
	
	    loadingModule.from_presetOntology=function(selectedOntology) {
	        ontologyMenu.append_bulletPoint("Retrieving ontology: " + selectedOntology );
	        loadPresetOntology(selectedOntology);
	    };
	
	    function loadPresetOntology(ontology){
	        // check if already cached in ontology menu?
	        loadingWasSuccessFul=false;
	        var ontologyContent="";
	        if (ontologyMenu.cachedOntology(ontology)){
	            ontologyMenu.append_bulletPoint("Loading already cached ontology: "+ ontology);
	            ontologyContent=ontologyMenu.cachedOntology(ontology);
	            loadingWasSuccessFul=true; // cached Ontology should be true;
	            parseOntologyContent(ontologyContent);
	        }else {
	            // read the file name
	            var fileToRead="./data/"+ontology+".json";
	            // read file
	            d3.xhr(fileToRead, "application/json", function (error, request) {
	                var loadingSuccessful = !error;
	                if (loadingSuccessful) {
	                    ontologyContent= request.responseText;
	                    parseOntologyContent(ontologyContent);
	                } else {
	                    // some error occurred
	                    ontologyMenu.append_bulletPoint("Failed to load: "+ ontology);
	                    ontologyMenu.append_message_toLastBulletPoint("<span style='color: red'>ERROR STATUS:</span> "+ error.status);
	                    graph.handleOnLoadingError();
	                    loadingModule.setErrorMode();
	                }
	            });
	        }
	    }
	
	
	
	    /** -- PARSE JSON CONTENT -- **/
	    function parseOntologyContent(content){
	        ontologyMenu.append_bulletPoint("Reading ontology graph ... ");
	        var _loader=ontologyMenu.getLoadingFunction();
	        _loader(content,ontologyIdentifierFromURL,"noAlternativeNameYet");
	    }
	
	    loadingModule.notValidJsonFile=function(){
	        graph.clearGraphData();
	        ontologyMenu.append_message_toLastBulletPoint("<span style='color:red;'>failed</span>");
	        ontologyMenu.append_message_toLastBulletPoint("<br><span style='color:red;'>Error: Received empty graph</span>");
	        loadingWasSuccessFul=false;
	        graph.handleOnLoadingError();
	
	    };
	
	    loadingModule.validJsonFile=function(){
	        ontologyMenu.append_message_toLastBulletPoint("done");
	        loadingWasSuccessFul=true;
	    };
	
	
	
	    /** --- HELPER FUNCTIONS **/
	
	    function identifyParameter(url){
	        var numParameters = (url.match(/#/g) || []).length;
	        // create parameters array
	        var paramArray = [];
	        if (numParameters > 0) {
	            var tokens = url.split("#");
	            // skip the first token since it is the address of the server
	            for (var i = 1; i < tokens.length; i++) {
	                if (tokens[i].length === 0) {
	                    // this token belongs actually to the last paramArray
	                    paramArray[paramArray.length - 1] = paramArray[paramArray.length - 1] + "#";
	                } else {
	                    paramArray.push(tokens[i]);
	                }
	            }
	        }
	        return paramArray;
	    }
	
	
	    function loadGraphOptions(parameterArray){
	        var optString="opts=";
	        function loadDefaultConfig(){
	            graph.options().setOptionsFromURL(graph.options().defaultConfig());
	        }
	        function loadCustomConfig(opts){
	            // console.log("Loading custom config!");
	            // console.log(opts);
	            var defObj=graph.options().defaultConfig();
	            for (var i=0;i<opts.length;i++){
	                var keyVal=opts[i].split('=');
	                defObj[keyVal[0]]=keyVal[1];
	            }
	            graph.options().setOptionsFromURL(defObj);
	        }
	
	        function identifyOptions(paramArray){
	            if(paramArray[0].indexOf(optString)>=0){
	                // parse the parameters;
	                var parameterLength=paramArray[0].length;
	                var givenOptionsStr=paramArray[0].substr(5,parameterLength-6);
	                var optionsArray=givenOptionsStr.split(';');
	                loadCustomConfig(optionsArray);
	            }else{
	                ontologyIdentifierFromURL=paramArray[0];
	                loadDefaultConfig();
	            }
	        }
	
	        function identifyOptionsAndOntology(paramArray){
	            if(paramArray[0].indexOf(optString)>=0) {
	                // parse the parameters;
	                var parameterLength = paramArray[0].length;
	                var givenOptionsStr = paramArray[0].substr(5, parameterLength - 6);
	                var optionsArray = givenOptionsStr.split(';');
	                loadCustomConfig(optionsArray);
	            }else{
	                loadDefaultConfig();
	            }
	            ontologyIdentifierFromURL=paramArray[1];
	        }
	
	        switch (parameterArray.length){
	            case 0: loadDefaultConfig(); break;
	            case 1: identifyOptions(parameterArray); break;
	            case 2: identifyOptionsAndOntology(parameterArray); break;
	            default :
	                console.log("To many input parameters , loading default config");
	                loadDefaultConfig();
	                ontologyIdentifierFromURL="ERROR_TO_MANY_INPUT_PARAMETERS";
	        }
	    }
	
	
	    function identifyOntologyLoadingMethod(url){
	        var iriKey = "iri=";
	        var urlKey = "url=";
	        var fileKey = "file=";
	
	        var method=-1;
	        if (url.substr(0, fileKey.length) === fileKey) {
	            method=FILE_UPLOAD;
	        }else if (url.substr(0, urlKey.length) === urlKey){
	            method=JSON_URL;
	        }else if (url.substr(0, iriKey.length) === iriKey){
	            method=IRI_URL;
	        }else {
	            method=PREDEFINED;
	        }
	        return method;
	    }
	
	    return loadingModule;
	};
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

/******/ });
//# sourceMappingURL=webvowl.app.js.map