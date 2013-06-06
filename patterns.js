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


