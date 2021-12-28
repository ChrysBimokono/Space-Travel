
This is a solution to building a space travel site

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

After completing the site, 
users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot
I added a screenshot of my solution here.

![](./assets/mobileView.jpeg)
![](./assets/moonPageView.jpeg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

I Used this section to recap over some of my major learnings while working through this project. Writing these out and providing code samples of areas i wanted to highlight.

Doing this project:

* I learned to design a web responsive site
* I learned to design a website accessible to different types of users.
* I used intensively CSS GRID LAYOUT.
* I learned how to build multiples pages website and connect them using JavaScript



```html
<h1>Some HTML code I'm proud of</h1>
```
```css
/* for someone who is visually impaired */
Made sure to implement this content for only screen readers to help users without vision.
.sr-only{
    position: absolute;
    width:1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
}

.skip-to-content{
    position: absolute;
    z-index: 1000;
  background-color: hsl(var(--clr-white));
  color:hsl(var(--clr-dark));
  padding: .5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;
}
```
```js
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
```

### Continued development
However, I need to focus on how to use lesser and clearer codes.
I need to learn how to build the same site using frameworks such as: React


### Useful resources

- [Example resource 1](https://www.youtube.com/kepowob) - This helped me learn how to better use CSS GRID. I really liked this pattern and will use it going forward.

## Author

- Website - [Chrys-Bimokono](https://chrysbim.com/index.html)

- Twitter - [@EnockBim](https://twitter.com/home)


## Acknowledgments
I really give thanks to the frontend community for their support and encouragement.


