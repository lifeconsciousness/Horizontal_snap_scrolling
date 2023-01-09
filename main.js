const sections = document.querySelectorAll(`.section`)

let lastTop = 0
const height = window.innerHeight 
let canSwipe = true



window.addEventListener(`scroll`, (e)=>{

    let top = window.pageYOffset || document.documentElement.scrollTop

    if(top > lastTop){
        //scrolling down

        if(canSwipe){
            console.log("down")
            canSwipe = false
            setTimeout(delay, 1000)
        }
    } 
    else{
        //scrolling up

        if(canSwipe){
            console.log("up")
            canSwipe = false
            setTimeout(delay, 1000)
        }
    }

    lastTop = top <= 0 ? 0 : top
    

    function swipeLeft(){
        
    }
    function swipeRight(){
        
    }




    function delay(){
        canSwipe = true
    }
    function resetScrollbar(){
        window.scrollTo(0, height/2) 
    }
})



