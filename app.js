let display = document.querySelector('.output')

let todisplay = (input) =>{
    display.value += input;
}

let clear_display = () =>{
    display.value = "";
}

let calc = () =>{
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

let delete_keys = ()=>{
    if((display.value=='Infinity') || (display.value=='Error')){
        clear_display();
    }
    else{
        display.value = display.value.slice(0,-1);
    }
}