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

//6. Every time I release a key it logs somthing

typer.addEventListener('keyup', e => {
    console.log(`key is up`);
  });
  
//7. Everytime I select it logs somthing

  typer.addEventListener('select', e => {
    console.log(`It Selected`);
  });


//8. If key is held it gets logged

  typer.addEventListener('keypress', e => {
    console.log(`key is being pressed`);
  });


//9. This is getting tedious..

Button[1].addEventListener('mousemove', e => {
   console.log('running out of events to use...');
})

//10. Logs `It Reset!` when reset is clicked

const Reset = document.querySelector('.form');

  Reset.addEventListener('reset', e => {
    console.log(`It Reset!`);
  });


//Most of these arent practical but at least I did 10 


// vvv - Introheader is nested inside Intro
// vvv - Click Introheader and only it changes instead of both (comment out stopPropagation(); to see difference)

const IntroHeader = document.querySelector(".home .intro h2");

IntroHeader.addEventListener('click', e => {
    IntroHeader.style.backgroundColor = 'red';
    e.stopPropagation();
});

const Intro = document.querySelector(".intro");

Intro.addEventListener('click', e => {
    Intro.style.backgroundColor = 'blue';
});

// vvv - navs no longer reset the page :)

let NavLinks = document.querySelectorAll(".nav-link");

NavLinks.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    })
});

//  ======================================================