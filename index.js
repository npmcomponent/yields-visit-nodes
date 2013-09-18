
/**
 * Export `visit`
 */

module.exports = visit;

/**
 * Visit all nodes within `node`.
 *
 * @param {Node|Element} node
 * @param {Function} fn
 * @api public
 */

function visit(node, fn){
  var nodes = node.childNodes
    , at = 0;

  function next(){
    node = nodes[at++];
    if (!node) return;
    fn(node, function(){
      visit(node, fn);
      next();
    });
  }

  next();
}
