Mask AST Manipulation
----

<div>
	<a href='http://travis-ci.org/tenbits/mask-j'>
		<img src='https://secure.travis-ci.org/tenbits/mask-j.png'/>
	</a>
</div>

####MaskJS AST with jQuery syntax

Performance comparison [jsperf](http://jsperf.com/dom-builder-mask-vs-jquery/4).
_But jmask is not here to replace jQuery. It only handles maskDOM Building and node manipulations before dom insert._
````javascript
jmask("\
h1 > 'Header' \
div > ul { li > '1' li > '2' }")

  .eq(1)
  .attr('name', 'divname')
  .find('ul')
  .addClass('list-container')
  .end()
  .end()
  .children('div')
  .append("span > 'additional info'")
  .end()
  .appendTo(document.body);
````

Methods (each method is from jQuery counterpart):
<code>mix</code> - Mask Markup, or Mask Dom
````javascript
jmask(mix)
 .add(mix)
 .toArray()
 .end()

 .append(mix)
 .prepend(mix)
 .clone()
 .wrap(mix)
 .wrapAll(mix)
 .empty()
 .remove()

 .mask(?mix) // jQuery ~ .html(?html)

// add TEXTNODE(s) to child elements in SET
 .text(string)
// resolve text from all TEXTNODES, if there are inerpolation parts,
// you can pass model, cntx and controller to this function
 .text(?model, ?cntx, ?controller)


 .eq(index)
 .get(index)
 .slice(from,to)

 .addClass(string)
 .removeClass(?string)
 .toggelClass(string)
 .hasClass()

 .attr
 .removeAttr
 .prop
 .removeProp
 .css

// selector: tagName, #id, .class, [attr=value]: 'div', '#perid', '.perclass', 'div[name=any]'
 .find(selector)
 .closest(selector)
 .parent(?selector)


 .filter(selector)
 .children(?selector)
 .first(?selector)
 .last(?selector)

// mask render
 .render(?model, ?cntx, ?container) //-> HTMLNode | DocumentFragment
 .appendTo(HTMLNode, ?model, ?cntx)

````
