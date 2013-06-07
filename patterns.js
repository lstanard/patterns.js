// http://www.impressivewebs.com/my-current-javascript-design-pattern/#comment-32835 
// http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/#comment-259905

(function ($, MyObject, undefined) {
  MyObject.publicFunction = function() {
      console.log("This is a public function!");
  };
  var privateFunction = function() {
    console.log("This is a private function!");
  };
  
  MyObject.sayStuff = function() {
    this.publicFunction();
    privateFunction();
    privateNumber++;
    console.log(privateNumber);
  };
  var privateNumber = 0;
}(jQuery, window.MyObject = window.MyObject || {}));

MyObject.sayStuff();
MyObject.sayStuff();
MyObject.publicFunction();
MyObject.privateFunction(); // Returns error
privateFunction(); // Returns error




// The module pattern with methods available as feedback3.methodTest();
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

var feedback3 = (function(){

	var someOtherVar = "make money, get bitches";
	var someOtherVar2 = "i let my tape rock til my tape popped";
	var i = 0;

	return {

		methodTest: function() {
			console.log(someOtherVar);
		},
		methodTest2: function() {
			console.log(someOtherVar2);
		},
		methodTest3: function() {
			console.log(i++);
		}

	}

}());


// Anonymous IIFE with methods available as feedback2.testMethod();
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/

(function(window) {

	var someVar = "make money, get bitches";

	return feedback2 = {
		testMethod: function(passedInVar) {
			console.log(passedInVar);
		},
		testMethod2: function() {
			console.log(someVar);
		}
	}

})(window);


// CSS Tricks module pattern (not IIFE, called later at page level)
// http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/

var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list"),
    moreButton: $("#more-button")
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.moreButton.on("click", function() {
      NewsWidget.getMoreArticles(s.numArticles);
    });
  },

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

};

(function() {
  NewsWidget.init();
})();





/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 */
var someFunction = new(function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption": "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function () {
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function () {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function () {
        //some code
        console.log("somePublicMethod");
    }

})();

//declaration and initialization of someFunction
someFunction.init();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"


