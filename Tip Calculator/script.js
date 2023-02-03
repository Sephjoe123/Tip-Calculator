let calcBtn = document.getElementById("calcBtn");
let shareInput = document.getElementById("share");
let billInput = document.getElementById("bill");
let select = document.getElementById("select");
let greatPercentage = document.getElementById("great");
let goodPercentage = document.getElementById("good");
let badPercentage = document.getElementById("bad");
let results = document.getElementById("result-container")
let errorContainer = document.getElementsByClassName("error-container")[0];

calcBtn.addEventListener("click",showResult);
calcBtn.addEventListener("click",errorCheck);
 

function showResult (){

    setTimeout(function(){
        results.style.display = "none"
        },10000);

    if(billInput.value !== "" && shareInput.value !== "" && select.value !== ""){
        return results.innerHTML = `<h3> Tip Amount   $ ${( +billInput.value / 100) * select.value } 
        <h3> Total Amount   $   ${( +billInput.value / 100) * select.value + +billInput.value} 
        <h3> Each Person Owes   $  ${( +billInput.value / 100) * select.value + +billInput.value / shareInput.value}
        `
    }
 else{
    return results.innerHTML = ""

 }
 
}
   function errorCheck(){

   if(billInput.value == "" && shareInput.value == "" && select.value == "" ){
            errorContainer.style.backgroundColor = "#ffc2c2"
            errorContainer.innerHTML = ` <br> Bill Amount Cannot Be Blank
             <br><br>
            Numbers Of Users Must Be Greater Than Zero
            <br><br>
            You Must Select a Service
            <br><br>
            `
   }

else if(billInput.value !== "" && shareInput.value == "" && select.value == "" ){
    errorContainer.style.backgroundColor = "#ffc2c2"
    errorContainer.innerHTML = ` <br>
    Numbers Of Users Must Be Greater Than Zero
    <br><br>
    You Must Select a Service
    <br><br>
    `
}
else if(billInput.value !== "" && shareInput.value !== "" && select.value == "" ){
    errorContainer.style.backgroundColor = "#ffc2c2"
    errorContainer.innerHTML = ` <br>
    You Must Select a Service
    <br><br>
    `
}
else{
    return errorContainer.innerHTML = "";
}

setTimeout(function(){
    errorContainer.style.display = "none"
    },10000);
  
   }