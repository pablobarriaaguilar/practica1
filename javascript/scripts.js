function closeCookie(element){
    element.closest('.cookieContainer').remove();
    
}

function changeTemp(element){

    if(element.value === "F"){
    let temps = document.querySelectorAll('.max > span, .min > span' )
    for (i = 0; i< temps.length; i++ ){
        
        let temp =  temps[i].innerText;
        let finalTemp = (temp * 1.8) + 32;
        temps[i].innerText = finalTemp.toFixed();
    }
}else{
    let temps = document.querySelectorAll('.max > span, .min > span' )
    for (i = 0; i< temps.length; i++ ){
        
        let temp =  temps[i].innerText;
        let finalTemp = (temp - 32 ) /1.8;
        temps[i].innerText = finalTemp.toFixed();
    }

}

}


function showMessage(){
    alert("Loading weather report...");
}

