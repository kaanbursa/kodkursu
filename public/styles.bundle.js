webpackJsonp([3,5],{

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(696);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(744)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js?{\"sourceMap\":false}!./../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js?{\"sourceMap\":false}!./../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(697)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.row {\n\theight: 600px;\n\twidth: 100%;\n\n}\n\n.row#first {\n\tbackground-size: cover;\n\theight: 418px;\n}\n\n.row#second {\n\tbackground-color: #273043;\n}\n\n.row#third {\n\tbackground-color: #FCFCFC;\n}\n\n.row#fourth {\n\theight: 300px;\n\n}\n\n.errorMessage{\n\tbackground-color: #F21B3F;\n\ttext-align: center;\n\tleft: 50%;\n\tcolor: white;\n\theight: 40px;\n\tline-height: 40px;\n\tborder-radius: 5px;\n\tfont-family: 'Raleway', sans-serif;\n\tpadding-top: 20px;\n\n}\n\n.demo-card-square{\n\theight: 400px;\n}\n\n.successMessage{\n\tbackground-color: #3DDC97;\n\ttext-align: center;\n\tleft: 50%;\n\tcolor: white;\n\theight: 40px;\n\tline-height: 40px;\n\tborder-radius: 5px;\n\tfont-family: 'Raleway', sans-serif;\n\tpadding-top: 20px;\n\n}\n\n/* sign up login design */\n.signUp{\n\twidth: 100%;\n\ttext-align: center;\n\tcolor: white !important;\n\tbackground-color: #5E807F;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n.signUp:hover{\n\tbackground-color:  #8EB897;\n}\n\n.rowHeader {\n\ttext-align: center;\n\tvertical-align: middle;\n\tcolor: #5E807F;\n\tpadding-top: 200px;\n\tfont-size: 70px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n.contentDesc{\n\ttext-align: center;\n\tvertical-align: middle;\n\tcolor: #5E807F;\n\tpadding-top: 10px;\n\tfont-size: 20px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n.rowWriting{\n\tmargin-top: 60px;\n\ttext-align: center;\n\tfont-size: 20px;\n\tcolor: #535657;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n#column2{\n\tmargin-top: 20px;\n\tcolor: white;\n}\n\n#column2head {\n\tmargin-top: 0px;\n}\n\n.lowerHeader{\n\tcolor: white;\n\ttext-align: center;\n\tpadding-top: 5px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n#courses{\n\tcolor: white;\n}\n\n.courseImages{\n\theight: 230px;\n}\n\n.homeImage{\n\theight: 550px;\n\twidth: 550px;\n\tpadding-top: 20px;\n}\n\n.roundImage{\n\theight: 190px;\n\twidth: 240px;\n\tmargin-left: 39%;\n\tpadding-top: 80px;\n}\n\n.pageHeader{\n\ttext-align: center;\n\tcolor: #5E807F;\n\tpadding-top: 20px;\n\tfont-size: 70px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n.getStarted{\n\tbackground: #44A08D; /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(to left, #44A08D , #093637); /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: -webkit-linear-gradient(right, #44A08D , #093637);\n\tbackground: linear-gradient(to left, #44A08D , #093637); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\tmargin-left: 15%;\n\tmargin-top: 100px;\n\twidth: 70%;\n\theight: 200px;\n\t/*box-shadow: -2px 2px 0px gray;*/\n\tborder-radius: 3px;\n}\n\n.getStartedWriting{\n\tpadding-top: 7%;\n\tpadding-left: 55px;\n}\n\n.pContent{\n\tcolor: white;\n\tfont-size: 20px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n.pButton{\n\tcolor: white;\n\tmargin-left: 250px;\n\tbackground-color: rgb(255, 250, 250, 0.1);\n}\n\n\n\n/* home pageHeader */\n\n.homeSignUp{\n\tfont-size: 20px;\n\tmargin-top: 70px;\n\theight: 50px;\n\twidth: 30%;\n\ttext-align: center;\n\tleft: 35%;\n\tcolor: white !important;\n\tbackground-color: #8AA399;\n\tborder-radius: 8px;\n\tfont-family: 'Roboto', sans-serif;\n}\n\n.homeSignUp:hover{\n\tbackground-color: #8EB897;\n}\n\n/* Profile css */\n\n.userName{\n\ttext-align: left;\n\tpadding-left: 10px;\n\tvertical-align: middle;\n\tcolor: #5E807F;\n\tpadding-top: 80px;\n\tfont-size: 40px;\n\tfont-family: 'Dosis', sans-serif;\n}\n\n#dashboardHeader{\n\tmargin-bottom: 30px;\n\tfont-size: 40px;\n}\n\n#dashboard {\n\theight: auto;\n}\n\n.profilePic{\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 30px;\n\tfloat: right;\n\tpadding-top: 60px;\n\tmargin-left: 10px;\n}\n\n/*.coverImage {\n\theight: 550px;\n\twidth: 70%;\n\tmargin-left: 15%;\n\tmargin-top: 80px;\n\topacity: 0.3;\n  filter: alpha(opacity=50);\n\tborder-radius: 5px;\n\t-webkit-box-shadow: -10px 10px 5px 0px rgba(0,0,0,0.75);\n\t-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n\tbox-shadow: -10px 10px 5px -10px rgba(0,0,0,0.75);\n\tz-index: -1 !important;\n\n\n}*/\n\n\n.demo-card-wide{\n\twidth: 50%;\n\tmin-height: 100px;\n\tmargin-left: 25%;\n\tmargin-top: 50px;\n}\n\n#courseDesc{\n\tmargin-top: -700px;\n\tz-index: 9999 !important;\n}\n\n#syllabusImage{\n\theight: 400px;\n}\n\n#syllabusRow{\n\theight: auto;\n}\n\n.syllabusDesc {\n\tmargin: 80px;\n\tcolor: white;\n\tfont-size: 18px;\n\ttext-align: center;\n\tline-height: 34px;\n\tfont-family: 'Roboto', sans-serif;\n}\n\n.mdl-card__title-text {\n\ttext-align: center;\n\twidth: 100%;\n\tfont-size: 25px;\n\tfont-family: 'Raleway', sans-serif;\n}\n\n#sixt{\n\theight: 450px;\n}\n\n#fifth {\n\tbackground-color: #36494E;\n\theight: 400px;\n}\n\n.profileRow{\n\theight: auto;\n}\n\n\n.course{\n\tpadding-top: 50px;\n\theight: 700px;\n}\n\n.ace_editor{\n\theight: 700px;\n box-shadow:         3px 3px 5px 6px #ccc;\n}\n\n\n.terminal{\n box-shadow:         3px 3px 5px 6px #ccc;\n\theight: 600px;\n\n}\n\n.courseContent{\n box-shadow:         3px 3px 5px 6px #ccc;\n\theight: 600px;\n}\n\n.submitBtn{\n\tbackground-color: white !important;\n\tcolor: #4A525A !important;\n\tborder-color: #8BA6A9 !important;\n  bottom: 0;\n\tmargin-bottom: 53px;\n\twidth: 200px;\n\theight: 60px;\n\tposition: relative;\n\tfont-size: 16px;\n\tfont-family: 'Raleway', sans-serif;\n\tborder-style: solid;\n  border-width: 0.3px;\n}\n\n.submitBtn:hover{\n box-shadow:         1px 1px 1px 1px #ccc;\n}\n.submitBtn:disabled{\n\tcolor: gray;\n\tborder-color: gray !important;\n}\n\n.courseBar{\n\tmargin-top: -50px;\n\tbackground-color: #4A525A;\n}\n\n.backBtn{\n\ttext-decoration: none;\n\tcolor: white;\n\tfont-size: 25px;\n\n}\n\n\n\n\n/* navbar */\n.demo-layout-transparent .mdl-layout__header,\n.demo-layout-transparent .mdl-layout__drawer-button {\n  /* This background is dark, so we set text to white. Use 87% black instead if\n     your background is light. */\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 697:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 744:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[749]);
//# sourceMappingURL=styles.bundle.map