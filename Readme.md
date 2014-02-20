*This repository is a mirror of the [component](http://component.io) module [yields/visit-nodes](http://github.com/yields/visit-nodes). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-visit-nodes`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# visit-nodes

  Visit all nodes under the given node.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/visit-nodes

## Example

```js
visit(node, function(node, next){});
```

## TreeWalker

TreeWalker is slower than this implementation for some reason (at least on my machine).

## Tests

```bash
$ make test
```

## License

  MIT
