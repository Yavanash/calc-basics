let weight = document.querySelector(".w")
let height = document.querySelector(".h")
let display = document.querySelector(".display_bmi")
let range = document.querySelector(".range")

let css = ``;
let calc_bmi = () => {
    let bmi = 0;
    try{
        bmi = weight.value/(height.value*height.value);
        display.value = bmi;
        if(bmi<18.5){
            range.value = "Underweight";
        }
        if(bmi>=18.5 && bmi <=24.9){
            range.value = "Healthy Weight";
        }
        if(bmi>=25.0 && bmi<=29.9){
            range.value = "Overweight";
        }
        if(bmi>=30.0){
            range.value = "Obese";
        }
        if(bmi>=35.0){
            range.value = "Extremely Obese";
        }
    }
    catch{
        display.value = "Error";
    }
}

let clear_display = () => {
    display.value = "";
    range.value = "";
}