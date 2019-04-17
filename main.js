// play sound first 

// this console logs the key that is being pressed and all the
//attributes assosiated with it, u can get the keycode from here

// you can do keyup, or keypress

//keycodes are codes assosiated with the keywords on the keybord, every keyword has a specific keycode
//which can help u change the attributes of the keycode.

// window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode)
    
    //console logs the keybord event has a list of all attributes, but we are looking for specific keycode not the rest

// from this we know that there is a keycode assosiated with a key
// now we need to match that key code with audio code using the data-key
//when we press a key sends us a keycode, we need to assosiate KC with sound, relase the sound

// });

  // if so

  window.addEventListener('keydown', playSound)
  function playSound(e) {

    //is there an audio element on the page that has a data-key of 65{or anykeycode}
    //we are looking for one, so queryselector to choose one, and listen for an element tag of audio and a dynamic-data-key
   //we want to select it were there is a data-key because there is no class
   // we are going to use an atribute selector and use back tiks to get it dynamic
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   // you add back tiks to the entire selctor that you want to choose not just the dynamic part
   console.log(audio)
   //console logging the audio tag that exist in the html 
   // we will get null if we press an element that doesn't have a audio element on the html

   // since we know that if we click on a none existant key it will return null
   //what we want to do is that if there is no key assosiation we use this function 
   // from running all together by using this funtion all together
   if (!audio) return;
   

   // now since we have an audio element we can play it
   audio.play();

   // when u go on the browser and try to play this multple times
   // it won't let you until the first one finish playing 

   //The currentTime property sets or returns the current position (in seconds) of the audio playback.
// When setting this property, the playback will jump to the specified position.
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_currenttime

audio.currentTime = 0; //rewind to the start 

//this currentTime is a JS property that helps u return to the position u specufy in seconds. So 0 rewinds to start


// So we were focusing on the audio atribute/ tag. now we want to connect the audio tag to the 
//corosponding div key to add effects on the divs 

const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//we are trying to select the div that has a class key with a attribute data-key that is dynamic to the keys

console.log(key)
// ok great now we have been able to select each particular div when we click on a key. 
// inorder to get the animation effects we need to add the playing class to the pressed key 
// in the css what matters is the Transition: all 0.07s in the Key attribute
// when u add playing class, we are going to scale it up, we are going to change the border color, & add shadow

key.classList.add('playing')
// this is how u add a class in JS. 
//we also have .remove and .toggle
// so now it is adding the playing class on every key that we press but it is not going away
// this is because we are adding the class but not removing it. 

// we can use setTimeOut but if we have a timeout in css and JS  they start to get out to sync. Becasue soemone might
// change it in the css and forget to change it in the JS. So What we can do is 

// use a transiton end event that will fire when thing has stoped animating itself 

// TransitionEnd event what is it? lets start with understanding click events
// a click event is when u click something and it fire off the event saying "hey somebody clicked me"

// in JS. we also have events that will say, "I wasn't clicked but I was transitioned,  
// I transitioned myself from scale 1, border black to scale 1.1 to border yellow  "

// So what we can do is listen on each key, when the trasition end event happens 

     }
   

     // I need to select every single key, on the page, becasue we want to listen for it on each one

     const keys = document.querySelectorAll('.key');
     console.log(keys) // gives me an array of every single div with class of div 

// we want to listen to an event called transition end on each one 
// we are not using add event listener and using forEach instead becasue when you have an array of items you can
//not listen on each one of them, and here(keys) we have an array of divs so we use forEach key do this 
// we must explicitly loop through each element 
// we are looping through array of divs, getting one div adding an event listener to one key
// the event listener waits for the transition to end and runs the removeTransition function 
   keys.forEach(key => key.addEventListener('transitionend', removeTransition))

   // we need to create the removeTransition function. 

   function removeTransition(e) {
// console.log(e)// this is just to see what it is removing we should see the transition 

// we have 5 lines of Transition events for one transition event because a whole lot of things transitioned here
// all of the borders have transitioned, box shadow, the transform 

// we really don't care about all of those, we just care about one of it usually the longest one 
// because when the longest transition ends is when we want the function to run

if(e.propertyName !== 'transform') return; //skip it if it is not a transform

// console.log(e.propertyName);
// when its done moving itself in we just want to reverse everything that we know 
// inorder to know what this is u can console log it 
//console.log(this) => the key div specific one u clicked on 
//the add event listenr was called on to the key above that's why 
this.classList.remove('playing');
   } 





//    This is the cleaner version of the code. Everything up there can be reduced to this.


//    function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
        //     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        //     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        //     if (!audio) return;
        //     key.classList.add('playing');
        //     audio.currentTime = 0;
        //     audio.play();
    //   }
    
//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);
