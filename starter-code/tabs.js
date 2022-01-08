//How to deal with tabs so that when clicked 
//it guides you to another content

const tabList= document.querySelector('[role="tablist"]')
console.log(tabList)

const tabs= tabList.querySelectorAll('[role="tab"]');
console.log(tabs)

tabs.forEach((tab) =>{
    tab.addEventListener('click',changeTabcontent)
})


let tabFocus=0;
tabList.addEventListener('keydown', changingMyTabFocus);
//our function
function changingMyTabFocus(e){
    const keydownLeft= 37;
    const keydownRight= 39;
    console.log(e )

    //change the tabindex of the current tab -1
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[tabFocus].setAttribute("tabindex",-1);
        console.log(e.target)
    }

    //if the right key is pushed, move to the next tab on the right
    if(e.keyCode === keydownRight){
        tabFocus++;
        console.log(tabFocus)
        console.log(tabs.length)
        if(tabFocus >= tabs.length){
         tabFocus=0;
        }
    
       
    }
    //if the left key is pushed, move to the next tab on the left
    if(e.keyCode === keydownLeft){
        tabFocus--
        if(tabFocus < 0){
            tabFocus= tabs.length-1;
           }
    }
    tabs[tabFocus].setAttribute('tabindex',0);
    tabs[tabFocus].focus();
}

function changeTabcontent(e){
    const targetTab= e.target;
    const targetContent= targetTab.getAttribute('aria-controls')
    const targetPicture= targetTab.getAttribute('data-image')

    const tabContainer= targetTab.parentNode;
    const mainContainer= tabContainer.parentNode;


   console.log(targetPicture)
   console.log(mainContainer.querySelectorAll('picture'))
    console.log(targetContent)
    console.log(mainContainer.querySelector([`#${targetContent}`]))
    console.log(tabContainer)

    //am moving the underline highligth to the selected content
    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
    targetTab.setAttribute('aria-selected', true)

    //am adding a hidden attribute to all content
    mainContainer.querySelectorAll('[role="tabContent"]').forEach((content)=> content.setAttribute('hidden', true))

//am removing the hidden attribute to the selected content
    mainContainer.querySelector([`#${targetContent}`]).removeAttribute('hidden');

// am adding a hidden attributes to all my picturess
mainContainer
.querySelectorAll('.img')
.forEach((img) => img.setAttribute('hidden', true));

mainContainer.querySelector([`#${targetPicture}`]).removeAttribute('hidden');

}
