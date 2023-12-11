document.addEventListener('DOMContentLoaded', function () {
  
 
console.log('its main')
const navMenu = document.getElementById('nav--menu');
      navToggle = document.getElementById('nav--toggle');
      navClose = document.getElementById('nav--close');

      if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
      }
      if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
      }
  
/*==========Remove menu mobile=========*/

   const navLink = document.querySelectorAll('.nav__link');
   const linkAction =() =>{
    const navMenu = document.getElementById('nav--menu')
       navMenu.classList.remove('show-menu')
   }
   navLink.forEach(n=>n.addEventListener('click',linkAction));
 
/*==================change background header===============*/

   const scrollHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY>= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
   }
   window.addEventListener('scroll',scrollHeader);

   /*=================show scroll up==========*/
   const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY>=350 ?
        scrollUp.classList.add('show-scroll')
        :scrollUp.classList.remove('show-scroll')
   }
   window.addEventListener('scroll',scrollUp)
 
   /*==========scroll section active link===========*/
   const sections = document.querySelectorAll('section[id]')

     const scrollActive=()=>{
        const scrollY = window.pageYOffset
        sections.forEach(current=>{
            const sectionHeight = current.offsetHeight,
                  sectionTop =current.offsetTop-58,
                  sectionId = current.getAttribute('id'),
                  sectionClass=document.querySelector('.nav__menu a[href*= '+sectionId);

            if(scrollY>sectionTop && scrollY<= sectionTop + sectionHeight)
            {
               sectionClass.classList.add('active-link')
            }
            else
            {
                sectionClass.classList.remove('active-link')
            }
        })
     }
  
     window.addEventListener('scroll',scrollActive);
     window.addEventListener('scroll', function () {
        console.log('Scrolling is working!');
    });
     /*=============PARALLAX================*/

     const rellax = new Rellax('.home__moon');

     // Application de l'effet de parallaxe à l'élément spécifié
     rellax.to('.home__moon', {
       x: "-50px",
       duration: 1000,
     });
      

   

     /*=============GSAP ANIMATION==============*/
     gsap.from('.home__village',1.2,{opacity:5 ,y:100 , delay: .1});
     gsap.from('.home_pine',1.2,{opacity:0 ,y:150 , delay: .3});
     gsap.from('.home__mountain-2',1.2,{opacity:0 ,x:150 , delay: .5});
     gsap.from('.home__mountain-3',1.2,{opacity:0 ,x:-150 , delay: .6});
     gsap.from('.home__mountain-1',1.2,{opacity:0 ,x:250 , delay: .7});
     gsap.from('.home__moon',1.2,{opacity:0 ,x:200 , delay: .8});
     gsap.from('.home__trineo',1.2,{opacity:0 ,x:-200 , delay: .8});
     gsap.from('.home__title',1.2,{opacity:0 ,y:-60 , delay: 1});

     /*============scroll reveal animation=========*/

     const sr = ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:2500,
        delay:400
     })
     sr.reveal(`.about__data, .celebrate__img`,{origin:'right'})
     sr.reveal(`.about__img, .celebrate__data`,{origin:'left'})
     sr.reveal(`.send__card`,{interval:100})
     sr.reveal(`.footer`);
});
