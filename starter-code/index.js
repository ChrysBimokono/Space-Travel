var menuButton= document.getElementsByClassName('mobile-nav-toggle')[0];
var PrimaryNav= document.getElementsByClassName('primary-navigation')[0]
console.log(menuButton)
menuButton.addEventListener('click',function(){
    console.log('clicked')
    var visibility=  PrimaryNav.getAttribute('data-visible');
    console.log(visibility)
    if(visibility === 'false'){
        PrimaryNav.setAttribute("data-visible",true);
        PrimaryNav.setAttribute("aria-expanded", true)
         PrimaryNav.style.transform='none'
    } else{
        PrimaryNav.setAttribute("data-visible",false);
        PrimaryNav.setAttribute("aria-expanded", false)
         PrimaryNav.style.transform='translateX(100%)'
    }

    console.log(PrimaryNav.getAttribute('aria-expanded'))
    
})
