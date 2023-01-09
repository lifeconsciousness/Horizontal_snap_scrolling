const sections = document.querySelectorAll(`.section`)
let index = 0
let previousIndex

let lastTop = 0
const height = document.body.scrollHeight
// window.scrollTo(0, height/3.9) 
let canSwipe = true



window.addEventListener(`scroll`, (e)=>{
    let top = document.documentElement.scrollTop

    if(canSwipe){ 

        if(top > lastTop){
            //scrolling down
    
            if(canSwipe){
                console.log("down")
                canSwipe = false
                setTimeout(delay, 300) //resetting delay boolean variable

                previousIndex = index
                index++
                checkIndex()

                swipe(0)
            }
        } 
        else{
            //scrolling up
    
            if(canSwipe){
                console.log("up")
                canSwipe = false
                setTimeout(delay, 300)

                previousIndex = index
                index--
                checkIndex()

                swipe(1)
            }
        }
    
        console.log(index,previousIndex)
    }
    lastTop = top <= 0 ? 0 : top
    // resetScrollbar()
    


    
    
    function swipe(leftOrRight){
    
        sections[index].classList.add(`active`)
        sections[previousIndex].classList.add(`last-active`)

        for (let i = 0; i < sections.length; i++){
            if(i != previousIndex){
                sections[i].classList.remove(`last-active`)
            }
            if(i != index){
                sections[i].classList.remove(`active`)

                sections[i].classList.remove(`appear-left`)
                sections[i].classList.remove(`appear-right`)
            }
        }
        
        //down
        if(leftOrRight == 0){
            sections[index].classList.add(`appear-left`)
        }
        //up
        if(leftOrRight == 1){
            sections[index].classList.add(`appear-right`)
        }
    }

    
    
    function checkIndex(){
        if(index >= sections.length) {index = sections.length-1}
        if(index < 0) {index = 0;}
    }
    
    function delay(){
        canSwipe = true
    }
    function resetScrollbar(){
        window.scrollTo(0, height/2) 
    }
})



