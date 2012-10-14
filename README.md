# viewstack


A minimalistic implementation of viewstack in javascript. Viewstack is a collection of containers, where only one container is visible at a time.

# How to use


To convert a html container as shown below into a viewstack

```
<div id="myViewStack">
	<div> container 1 </div>
	<div> container 2 </div>
	<div> container 3 </div>
</div>
```


1. Creating a view stack: 
```

//creating a view stack (defaults the view index to 0)
$("#myViewStack").viewstack();

```

2. Setting the selected index property:

```

//passing the selectedIndex as a param
$("#myViewStack").viewstack({
	selectedIndex : 1
});

```

or
```

$("#myViewStack").viewstack("option", "selectedIndex", 1);

```

3. Listening for a creation complete event

```

$("#myViewStack").viewstack({
	creationComplete : function(e, data) {
		console.log(data.selectedIndex);
	}
})
```

4. Listening for selected index change event

```

$("#myViewStack").viewstack({
	selectedIndexChange : function( e, data ){
		console.log(data.selectedIndex);
	}
});

```

5. Get the total number of view stack children

```

$(".myViewStack").viewstack("getChildrenCount");

```

6. Get the viewstack's selectedIndex

```

 $(".myViewStack").viewstack("getSelectedIndex");

```


# License

The MIT License (MIT)

Copyright (c) 2012 Nikhilesh Katakam

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
