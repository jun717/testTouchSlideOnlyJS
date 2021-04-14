        //touch events - touchstart, touchend, touchmove, touchcancel
        //There is NO tap, doubletap, swipe, swipeleft, swiperight, rotate, pinch, or zoom
        //You would have to create those events yourself by connecting to the touch events.
        //work on devices that are touch capable
        //No error on other devices because 'touchstart' is just a name like winlottery
        //The event will probably just never happen on my laptop 
document.querySelector('.list').addEventListener('touchstart', f)
document.querySelector('.list').addEventListener('touchmove', f)
document.querySelector('.list').addEventListener('touchend', f)

let startPlace, lastPlace, moveAmountX
let list = document.querySelector('.list')
let items = document.querySelectorAll('.item')
let slideIndex = 0

function f(event){
    // console.log(event.touches, event.type)
    if(event.type==='touchstart'){
        startPlace = event.touches[0].pageX
        console.log('touchstart:'+startPlace)
    }
    if(event.type==='touchmove'){
        lastPlace = event.touches[0].pageX;
    }
    if(event.type==='touchend'){
        console.log('touchend:'+lastPlace)
        moveAmountX = startPlace - lastPlace
        console.log(moveAmountX)
        if(moveAmountX>=40){
            toRight(slideIndex+1)
        }
        if(moveAmountX<=-40){
            toLeft(slideIndex-1)
        }
    }
}

function toRight(parameter) {
    if(parameter==items.length){
        return false
    }else{
        list.style.left = parameter * (-100) + '%'
        slideIndex=parameter
    }
        
}

function toLeft(parameter) {
    if(parameter<0){
        return false
    }else{
        list.style.left = parameter * (-100) + '%'
        slideIndex=parameter
    }
}