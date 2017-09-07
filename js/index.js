new iSlider({
        wrap:'.wrap',
        item:'.item',
        playClass:'play',
        onslide:function (index) {
            console.info(index); 
            if (index == 3){
            	$('#leafContainer').removeClass('hide');
            	const NUMBER_OF_LEAVES = 2;
			    var container = document.getElementById('leafContainer');
			    for (var i = 0; i < NUMBER_OF_LEAVES; i++){
			        container.appendChild(createALeaf());
			    }
			
				function randomInteger(low, high){
				    return low + Math.floor(Math.random() * (high - low));
				}
			
				function randomFloat(low, high){
				    return low + Math.random() * (high - low);
				}
				function pixelValue(value){
				    return value + 'px';
				}
				function durationValue(value){
				    return value + 's';
				}
		
				function createALeaf()
				{
				    /* Start by creating a wrapper div, and an empty img element */
				    var leafDiv = document.createElement('div');
				    var image = document.createElement('img');
				    
				    /* Randomly choose a leaf image and assign it to the newly created element */
				    image.src = 'img/leave' + randomInteger(2, 4) + '.png';
				    
				    leafDiv.style.top = "-100px";
				
				    /* Position the leaf at a random location along the screen */
				    leafDiv.style.left = pixelValue(randomInteger(0, 500));
				    
				    /* Randomly choose a spin animation */
				    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
				    
				    /* Set the -webkit-animation-name property with these values */
				    leafDiv.style.webkitAnimationName = 'fade, drop';
				    image.style.webkitAnimationName = spinAnimationName;
				    
				    /* Figure out a random duration for the fade and drop animations */
				    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
				    
				    /* Figure out another random duration for the spin animation */
				    var spinDuration = durationValue(randomFloat(4, 8));
				    /* Set the -webkit-animation-duration property with these values */
				    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
				
				    var leafDelay = durationValue(randomFloat(0, 2));
				    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
				
				    image.style.webkitAnimationDuration = spinDuration;
				
				    // add the <img> to the <div>
				    leafDiv.appendChild(image);
				
				    /* Return this img element so it can be added to the document */
				    return leafDiv;
				}
				createALeaf();
            }else{
            	$('#leafContainer').addClass('hide');
            }
        }
   }); 
   

	//音乐播放控制
	var music_on = document.getElementById("music_on");
	var audio = document.getElementsByTagName("audio")[0];
	music_on.onclick = function(){
		var classVal = document.getElementById("music_on").getAttribute("class");
		if(audio.paused){
			audio.play();
			classVal = classVal.concat("music_mark");
			document.getElementById("music_on").setAttribute("class",classVal);
		}
		else{
			audio.pause();
			classVal = classVal.replace("music_mark"," ");
			document.getElementById("music_on").setAttribute("class",classVal);
		}
	}
