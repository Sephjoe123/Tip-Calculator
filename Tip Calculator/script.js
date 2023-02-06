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
// calcBtn.addEventListener("click",errorCheck);
 

function showResult (){

//  resultTimeout =   setTimeout(function(){
//         results.style.display = "none"
//         },3000);

//         // clearTimeout(resultTimeout);
        // billInput.value !== "" && shareInput.value !== "" && select.value !== ""

    if(billInput.value == "" && shareInput.value == "" && select.value == "" ){
        errorContainer.style.backgroundColor = "#ffc2c2"
        errorContainer.innerHTML = ` <br> Bill Amount Cannot Be Blank
         <br><br>
        Numbers Of Users Must Be Greater Than Zero
        <br><br>
        You Must Select a Service
        <br><br>
        `

        results.innerHTML = "";
}

else if(billInput.value !== "" && shareInput.value == "" && select.value == "" ){
errorContainer.style.backgroundColor = "#ffc2c2"
errorContainer.innerHTML = ` <br>
Numbers Of Users Must Be Greater Than Zero
<br><br>
You Must Select a Service
<br><br>
`
results.innerHTML = "";
}
else if(billInput.value !== "" && shareInput.value !== "" && select.value == "" ){
errorContainer.style.backgroundColor = "#ffc2c2"
errorContainer.innerHTML = ` <br>
You Must Select a Service
<br><br>
`

results.innerHTML = "";
}
else if (billInput.value == "" && shareInput.value !== "" && select.value !== "" ){
errorContainer.style.backgroundColor = "#ffc2c2"
errorContainer.innerHTML = ` <br>
Bill Amount Cannot Be Blank
<br><br>
`
results.innerHTML = "";
}
else{
 return results.innerHTML = `<h3> Tip Amount   $ ${( +billInput.value / 100) * select.value } 
<h3> Total Amount   $   ${( +billInput.value / 100) * select.value + +billInput.value} 
<h3> Each Person Owes   $  ${( +billInput.value / 100) * select.value + +billInput.value / shareInput.value}
`
}


// clearTimeout(errorTimeout,5000)

}
