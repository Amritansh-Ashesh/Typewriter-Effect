window.addEventListener('load',()=>{
    const texts = ['SOME_TEXT1','SOME_TEXT2']; //Change texts here
   let count= 0;
   let index = 0;
   let currentText = ' ';
   let letter =' ';
   
   //Self-Invoked Function
   (function type (){
   
       // if(count ===texts.length){                   //Remove Comment to make it go infinitely
       //     count =0;
       // } 
       currentText = texts[count];
       letter = currentText.slice(0, ++index);
   
       document.querySelector('.typing').textContent = letter;  //Add Typing Class to text for effect
   
       if(letter.length === currentText.length){
           count++;
           index =0;
       }
       setTimeout(type,200); // Second parameter is time in ms // Change value to increase or decrease speed
   }());
   });
   
   