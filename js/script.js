// Function defination

function startFan(speed){
    // function body
    if(speed == 0){
        // object.method()
        // alert('hello')
        document.querySelector('.FanBox').style.animationPlayState = 'Paused';
    }else if(speed == 1){
        // Object.Method()
        // alert(20)
        document.querySelector('.FanBox').style.animationPlayState = 'running';
        document.querySelector('.FanBox').style.animationDuration = '0.6s';
    }else if(speed == 2){
        // Object.Method()
        document.querySelector('.FanBox').style.animationPlayState = 'running';
        document.querySelector('.FanBox').style.animationDuration = '0.4s';
    }else{
         // Object.Method()
         document.querySelector('.FanBox').style.animationPlayState = 'running';
         document.querySelector('.FanBox').style.animationDuration = '0.3s';
    }
}