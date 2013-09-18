
describe('visit(node, fn)', function(){

  var visit = require('visit-nodes');
  var assert = require('assert');
  var domify = require('domify');

  var node = domify('<li>a</li><a>b<i>c<b>d</b></i></a><b>ef</b>');

  it('should work', function(){
    var str = '';

    visit(node, function(node, next){
      if (3 != node.nodeType) return next();
      str += node.textContent;
      next();
    });

    assert('abcdef' == str);
  })

  it('should not continue unless next() is called', function(){
    var i = 0;

    visit(node, function(n, next){
      node = n;
    });

    assert('LI' == node.tagName);
  })
})
