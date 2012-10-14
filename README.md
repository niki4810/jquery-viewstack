# viewstack


A minimalistic implementation of viewstack in javascript. Viewstack converts a collection of containers such that only one container is visible at a time.

#Dependencies

jquery-viewstack depends on

* jQuery &
* jQuery-ui

# How to use


To convert a html container as shown below into a viewstack

```html
<div id="myViewStack">
	<div> container 1 </div>
	<div> container 2 </div>
	<div> container 3 </div>
</div>
```


## Creating a view stack: 

```javascript
//creating a view stack (defaults the view index to 0)
$("#myViewStack").viewstack();
```

## Setting the selected index property:

```javascript
//passing the selectedIndex as a param
$("#myViewStack").viewstack({
	selectedIndex : 1
});

//or use the options param
$("#myViewStack").viewstack("option", "selectedIndex", 1);
```

## Listening for a creation complete event

```javascript
$("#myViewStack").viewstack({
	creationComplete : function(e, data) {
		console.log(data.selectedIndex);
	}
})
```

## Listening for selected index change event

```javascript
$("#myViewStack").viewstack({
	selectedIndexChange : function( e, data ){
		console.log(data.selectedIndex);
	}
});
```

## Get the total number of view stack children

```javascript
$(".myViewStack").viewstack("getChildrenCount");
```

## Get the viewstack's selectedIndex

```javascript
 $(".myViewStack").viewstack("getSelectedIndex");
```


# License

The MIT License (MIT)

Copyright (c) 2012 Nikhilesh Katakam

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
