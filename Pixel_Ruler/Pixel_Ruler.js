var ourStyleSheet = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(ourStyleSheet);

ourStyleSheet.innerText = '.pixelContainer:hover span {visibility: visible !important;} .y-ruler { text-align: left; }';
var Ruler = function(orientation) { //? creates something and all the rules inside of this are applied to everything you created
        var self = this; //?? does this name the general ruler to which all the following rules are applied. What does the self and this actually refer to that I can see? 

        this.ruler = document.createElement('div'); //?? why am I not naming the div, obviously I need this step but what is it actually creating
        if (orientation === 'vertical') {
            this.ruler.addEventListener('dblclick', function(eventInfo) {
                var leftPosition = self.ruler.style.left;
                var currentLeft = parseInt(leftPosition); 

                var vRuler = new Ruler('vertical');
                vRuler.ruler.style.position = "absolute";
                // vRuler.ruler.style.left = Math.random()*90 + '%'; // '160px';
                vRuler.ruler.style.left = currentLeft + 160 + 'px';
                vRuler.ruler.classList.add('y-ruler');
                // vRulers.push(vRuler);
            });

            // add the dblclick event listener
            console.log("Making the vertical ruler"); //? Why do I need this, I am obviously creating a ruler?
            this.ruler.classList.add('y-ruler'); //???how did this.ruler become a classList and what does a class list look like on the screen????
            this.ruler.style.height = '100%';
            this.ruler.style.width = '50px';
        }
        if (orientation === 'horizontal') {
            this.ruler.addEventListener('dblclick', function(eventInfo) {
                var topPosition = self.ruler.style.top;
                var currentTop = parseInt(topPosition);
                var hRuler = new Ruler('horizontal');
                hRuler.ruler.style.position = "absolute";
                hRuler.ruler.style.top = currentTop + 160 + 'px';
                // TODO; What about adding a ID and not a class name. 
                hRuler.ruler.classList.add('x-ruler');
                // hRulers.push(hRuler);
            });

            console.log("Making the horizontal ruler"); //? Why do I need this, I am obviously creating a ruler?
            this.ruler.classList.add('x-ruler'); //???how did this.ruler become a classList and what does a class list look like on the screen????          
            this.ruler.style.width = '100%';
            this.ruler.style.height = '50px';
        }

        //_____.style.designattributeyouwanttochange= assigns an attribute to the box 
        this.ruler.style.position = 'fixed';
        this.ruler.style.left = '0px';
        this.ruler.style.top = '0px';
        console.log("Finished styling the ruler");

        // for loop will loop through the equation assigned to the _____

        if (orientation === 'vertical') {
            var tickMax = screen.height;
        }
        if (orientation === 'horizontal') {
            var tickMax = screen.width;
        }
        for (var tick = 0; tick < tickMax; tick = tick + 1) {
            // console.log("Adding a pixel", tick);
            var pixelContainer = document.createElement('div');
            pixelContainer.classList.add('pixelContainer'); //?? classList??
            pixelContainer.style.position = 'absolute';
            if (orientation === 'vertical') {
                pixelContainer.style.height = '1px';
                pixelContainer.style.width = '100%';
                pixelContainer.style.left = '0px';
                pixelContainer.style.top = tick + 'px';
            }
            if (orientation === 'horizontal') {
                pixelContainer.style.height = '100%';
                pixelContainer.style.width = '1px';
                pixelContainer.style.top = '0px';
                pixelContainer.style.left = tick + 'px';
            }
            var pixel = document.createElement('div');

            // the var ____is now creating a box in the first _____
            pixel.classList.add('pixel');
            //??are all these creations being added to the self? and are the classes inside the self or inside the this?

            if (orientation === 'vertical') {
                pixel.style.height = '1px';
                if (tick % 10 == 0) {
                    pixel.style.width = '50px';
                } else if (tick % 10 == 5) {
                    pixel.style.width = '40px';
                } else {
                    pixel.style.width = '25px';
                };
            }
            if (orientation === 'horizontal') {
                pixel.style.width = '1px';
                if (tick % 10 == 0) {
                    pixel.style.height = '50px';
                } else if (tick % 10 == 5) {
                    pixel.style.height = '40px';
                } else {
                    pixel.style.height = '25px';
                };
            }
            var tickm = tick % 10; 
            var hue = 20 * tickm + 10; //??if I want grey scale how do I do it? and whatis the difference between grey and gray??
            pixel.style.backgroundColor = 'hsla(' + hue + ',20%,50%,0.375)';

            var span = document.createElement('span'); //?? How does the span know what I want it to do??
            span.innerHTML = tick; //??if innerHTML is this then what is outerHTML?

            span.style.position = 'absolute'; //google style.positions for visual of style.position options 
            if (orientation === 'vertical') {
                span.style.left = 'calc(100% + 5px)'; //places the pixil # outside the container plus 5 pixels to make sure this shows up clearly off the pixel line
            }
            if (orientation === 'horizontal') {
                span.style.top = 'calc(100% + 5px)'; //places the pixil # outside the container plus 5 pixels to make sure this shows up clearly off the pixel line
            }
            span.style.visibility = 'hidden'; //??why is anything hidden?? I want to see it wait unless this means it's hidden until I tell it to do something but then why wouldn't I tell it to do something right here??
            span.style.fontFamily = 'Georgia';
            span.style.fontSize = '10px';


            pixel.appendChild(span); //??how is pixel and pixelContainer both children and are they the child of the same parent?
            pixelContainer.appendChild(pixel); //??what does append mean??

            this.ruler.appendChild(pixelContainer); // the now defined pixel is being applied to the ruler, work on % opacity to make ruler more translucent while floating on the page. 
            //full opacity for top and left ruler
            //when hovering over a pixel on your document the pixel line will turn on to a bright color not found on the ruler in general and will also display the pixel number

        }

        console.log("About to add the ruler to the body");
        var myBody = document.body;
        myBody.appendChild(this.ruler); //the ruler is now being applied to the body aka webpage

        console.log("done");
    }

    // var ______ = document.createElement('div') will create a box on the webpage that javascript will recognize as ______
    // var VRuler = function() { //? creates something and all the rules inside of this are applied to everything you created
    //     var self = this; //?? does this name the general ruler to which all the following rules are applied. What does the self and this actually refer to that I can see? 
    //     console.log("Making the vertical ruler"); //? Why do I need this, I am obviously creating a ruler?
    //     this.ruler = document.createElement('div'); //?? why am I not naming the div, obviously I need this step but what is it actually creating
    //     this.ruler.classList.add('y-ruler'); //???how did this.ruler become a classList and what does a class list look like on the screen????
    //     //_____.style.designattributeyouwanttochange= assigns an attribute to the box 
    //     this.ruler.style.height = '100%';
    //     this.ruler.style.width = '50px';
    //     this.ruler.style.position = 'fixed';
    //     this.ruler.style.left = '0px';
    //     this.ruler.style.top = '0px';
    //     console.log("Finished styling the ruler");

    //     // for loop will loop through the equation assigned to the _____

    //     for (var py = 0; py < screen.height; py = py + 1) {
    //         console.log("Adding a pixel", py);
    //         var pixelContainer = document.createElement('div');
    //         pixelContainer.classList.add('pixelContainer'); //?? classList??
    //         pixelContainer.style.height = '1px';
    //         pixelContainer.style.width = '100%';
    //         pixelContainer.style.position = 'absolute';
    //         pixelContainer.style.left = '0px';
    //         pixelContainer.style.top = py + 'px';

    //         var pixel = document.createElement('div');

    //         // the var ____is now creating a box in the first _____
    //         pixel.classList.add('pixel');
    //         //??are all these creations being added to the self? and are the classes inside the self or inside the this?

    //         pixel.style.height = '1px';
    //         if (py % 10 == 0) {
    //             pixel.style.width = '50px'; //???what does px mean? I guess why does px mean pixel and a pixel = a pixel? did I name something to cause this confusion?
    //         } else if (py % 10 == 5) {
    //             pixel.style.width = '45px';
    //         } else {
    //             pixel.style.width = '40px';
    //         };

    //         var pym = py % 10; //??how do I know what pxm is or where it is on the screen?
    //         var hue = 10 * pym + 10; //??if I want grey scale how do I do it? and whatis the difference between grey and gray??
    //         pixel.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';

    //         var span = document.createElement('span'); //?? How does the span know what I want it to do??
    //         span.innerHTML = py; //??if innerHTML is this then what is outerHTML?

    //         span.style.position = 'absolute'; //google style.positions for visual of style.position options 
    //         span.style.left = 'calc(100% + 5px)'; //places the pixil # outside the container plus 5 pixels to make sure this shows up clearly off the pixel line
    //         span.style.visibility = 'hidden'; //??why is anything hidden?? I want to see it wait unless this means it's hidden until I tell it to do something but then why wouldn't I tell it to do something right here??
    //         span.style.fontFamily = 'Georgia';
    //         span.style.fontSize = '10px';


    //         pixel.appendChild(span); //??how is pixel and pixelContainer both children and are they the child of the same parent?
    //         pixelContainer.appendChild(pixel); //??what does append mean??

    //         this.ruler.appendChild(pixelContainer); // the now defined pixel is being applied to the ruler, work on % opacity to make ruler more translucent while floating on the page. 
    //         //full opacity for top and left ruler
    //         //when hovering over a pixel on your document the pixel line will turn on to a bright color not found on the ruler in general and will also display the pixel number

    //     }

    //     console.log("About to add the ruler to the body");
    //     var myBody = document.body;
    //     myBody.appendChild(this.ruler); //the ruler is now being applied to the body aka webpage

    //     console.log("done");
    // }

    // var HRuler = function() { //? creates something and all the rules inside of this are applied to everything you created
    //     var self = this; //?? does this name the general ruler to which all the following rules are applied. What does the self and this actually refer to that I can see? 
    //     console.log("Making the horizontal ruler"); //? Why do I need this, I am obviously creating a ruler?
    //     this.ruler = document.createElement('div'); //?? why am I not naming the div, obviously I need this step but what is it actually creating
    //     this.ruler.classList.add('x-ruler'); //???how did this.ruler become a classList and what does a class list look like on the screen????
    //     //_____.style.designattributeyouwanttochange= assigns an attribute to the box 
    //     this.ruler.style.width = '100%';
    //     this.ruler.style.height = '50px';
    //     this.ruler.style.position = 'fixed';
    //     this.ruler.style.left = '0px';
    //     this.ruler.style.top = '0px';
    //     console.log("Finished styling the horizontal ruler");

    //     // for loop will loop through the equation assigned to the _____

    //     for (var px = 0; px < screen.width; px = px + 1) {
    //         console.log("Adding a pixel", px);
    //         var pixelContainer = document.createElement('div');
    //         pixelContainer.classList.add('pixelContainer'); //?? classList??
    //         pixelContainer.style.width = '1px';
    //         pixelContainer.style.height = '100%';
    //         pixelContainer.style.position = 'absolute';
    //         pixelContainer.style.top = '0px';
    //         pixelContainer.style.left = px + 'px';

    //         var pixel = document.createElement('div');

    //         // the var ____is now creating a box in the first _____
    //         pixel.classList.add('pixel');
    //         //??are all these creations being added to the self? and are the classes inside the self or inside the this?

    //         pixel.style.width = '1px';
    //         if (px % 10 == 0) {
    //             pixel.style.height = '50px';
    //         } else if (px % 10 == 5) {
    //             pixel.style.height = '45px';
    //         } else {
    //             pixel.style.height = '40px';
    //         };

    //         var pxm = px % 10; //??how do I know what pxm is or where it is on the screen?
    //         var hue = 10 * pxm + 10; //??if I want grey scale how do I do it? and whatis the difference between grey and gray??
    //         pixel.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';

    //         var span = document.createElement('span'); //?? How does the span know what I want it to do??
    //         span.innerHTML = px; //??if innerHTML is this then what is outerHTML?

    //         span.style.position = 'absolute'; //google style.positions for visual of style.position options 
    //         span.style.top = 'calc(100% + 5px)'; //places the pixil # outside the container plus 5 pixels to make sure this shows up clearly off the pixel line
    //         span.style.visibility = 'hidden'; //??why is anything hidden?? I want to see it wait unless this means it's hidden until I tell it to do something but then why wouldn't I tell it to do something right here??
    //         span.style.fontFamily = 'Georgia';
    //         span.style.fontSize = '10px';


    //         pixel.appendChild(span); //??how is pixel and pixelContainer both children and are they the child of the same parent?
    //         pixelContainer.appendChild(pixel); //??what does append mean??

    //         this.ruler.appendChild(pixelContainer); // the now defined pixel is being applied to the ruler, work on % opacity to make ruler more translucent while floating on the page. 
    //         //full opacity for top and left ruler
    //         //when hovering over a pixel on your document the pixel line will turn on to a bright color not found on the ruler in general and will also display the pixel number

    //     }

    //     console.log("About to add the ruler to the body");
    //     var myBody = document.body;
    //     myBody.appendChild(this.ruler); //the ruler is now being applied to the body aka webpage


    //     console.log("done");
    // }

    var mouseDownPosition = {
        'x': null,
        'y': null
    };

    var mousePosition = {
        'x': null,
        'y': null
    };
    window.addEventListener('mousemove', function(eventInfo) {
        mousePosition.x = eventInfo.x;
        mousePosition.y = eventInfo.y;
        if (isMouseDown && !null) {
            clickedRuler.style.left = mousePosition.x - mouseDownPosition.x + 'px';
            clickedRuler.style.top = mousePosition.y - mouseDownPosition.y + 'px';

        }
    });

    var isMouseDown = false; // ?
    var clickedRuler = null;
    window.addEventListener('mousedown', function(eventInfo) {
        mouseDownPosition.x = eventInfo.x;
        mouseDownPosition.y = eventInfo.y;
        var maybeRuler = eventInfo.target.parentNode.parentNode;
        if (maybeRuler.classList.contains('x-ruler') || maybeRuler.classList.contains('y-ruler')) {
            clickedRuler = maybeRuler;
        }
        isMouseDown = true;
    });
    window.addEventListener('mouseup', function(eventInfo) {
        isMouseDown = false;
        clickedRuler = null;
    });

    // var vRulers = [];
    // var hRulers = [];

    // var vRulerNumber = 0;
    // var hRulerNumber = 0;

    // // TODO: make sure any ruler can be double-clicked to get a new copy
    // vRulers[0] = new Ruler('vertical');
    new Ruler('vertical');
    // vRulers[0].ruler.addEventListener('dblclick', function(eventInfo) {
    //     var vRuler = new Ruler('vertical');
    //     vRulerNumber = vRulerNumber + 1;
    //     vRuler.ruler.style.left = '160px';
    //     vRuler.ruler.classList.add('y-ruler-' + vRulerNumber);
    //     vRulers.push(vRuler);
    // });

    // // TODO: make sure any ruler can be double-clicked to get a new copy
    // hRulers[0] = new Ruler('horizontal');
    new Ruler('horizontal');

    // hRulers[0].ruler.addEventListener('dblclick', function(eventInfo) {
    //     var hRuler = new Ruler('horizontal');
    //     hRulerNumber = hRulerNumber + 1;
    //     hRuler.ruler.style.top = '160px';
    //     // TODO; What about adding a ID and not a class name. 
    //     hRuler.ruler.classList.add('x-ruler-' + hRulerNumber);
    //     hRulers.push(hRuler);
    // });

    // TODO: Style var pixel length
    // TODO: Style var tick color saturation for grayscale 
    // TODO: Style var tick opacity become more of an overlay
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO: Script Ability to delete specific rulers?
    // TODO: But way out there, ability to  use in other programs i.e. Photoshop
    // TODO: Also way out, change the measure 
    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO: 