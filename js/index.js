// Your code goes here

const Button = document.querySelectorAll('.btn');



//1. Just a simple mouse click for the buttons -vvv

Button[0].addEventListener('click', e => {
    Button[0].style.color = 'green';
})

 Button[1].addEventListener('click', e => {
     Button[1].style.color = 'red';
 })

Button[2].addEventListener('click', e => {
    Button[2].style.color = 'blue';
})

//2. Double click for background color -vvv

Button[0].addEventListener('dblclick', e => {
    Button[0].style.backgroundColor = ('purple');
})

Button[1].addEventListener('dblclick', e => {
    Button[1].style.backgroundColor = ('purple');
})

Button[2].addEventListener('dblclick', e => {
    Button[2].style.backgroundColor = ('purple');
})

//3. Simple mouseover to change padding -vvv

Button[0].addEventListener('mouseover', e => {
    Button[0].style.padding = ('50px');
})

//4. Mouseleave for when the pointer comes off -vvv

Button[0].addEventListener('mouseleave', e => {
    Button[0].style.padding = ('20px');
})


// Created a typer in the HTML so i have more to do

const typer = document.querySelector('form');

//5. Every time I push a key it logs somthing

typer.addEventListener('keydown', e => {
    console.log(`key is down`);
  });

typer.addEventListener('keyup', e => {
    console.log(`key is up`);
  });
  
//7. Everytime I select it logs somthing

  typer.addEventListener('select', e => {
    console.log(`It Selected`);
  });


