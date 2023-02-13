let calcBtn = document.getElementById("calcBtn");
let shareInput = document.getElementById("share");
let billInput = document.getElementById("bill");
let select = document.getElementById("select");
let greatPercentage = document.getElementById("great");
let goodPercentage = document.getElementById("good");
let badPercentage = document.getElementById("bad");
let results = document.getElementById("result-container")
let errorContainer = document.getElementsByClassName("error-container")[0];
let addGif = document.getElementsByClassName("result-text")[0];




calcBtn.addEventListener("click",checkForErrors);
calcBtn.addEventListener("click",computeResult);

function checkForErrors (){   

    results.innerHTML = "";
    errorContainer.style.backgroundColor = "#ffc2c2";
    errorContainer.style.transition = 
    errorContainer.innerHTML = "";
      if (shareInput.value == 0 && billInput.value == 0 && 
    select.value == "" ){

    errorContainer.innerHTML = `<br> Bill Amount Cannot Be Blank
    <br><br>
    Numbers Of Users Must Be Greater Than Zero
    <br><br>
    You Must Select a Service
    <br><br>
        `
    }
  
    else if (shareInput.value === "" && billInput.value !== "" &&
    select.value === ""){
    errorContainer.innerHTML = `<br>  Numbers Of Users Must Be Greater Than Zero
    <br><br>
    You Must Select a Service
    <br><br>
        `
      }
  
    else if (shareInput.value === "" && billInput.value !== "" &&
    select.value !== ""){
    errorContainer.innerHTML = `<br>  Numbers Of Users Must Be Greater Than Zero
    <br><br>
    You Must Select a Service
    <br><br>
        `
      }
  
      else if (shareInput.value !== "" && billInput.value !== "" &&
      select.value === ""){
      errorContainer.innerHTML = `
      <br>
      You Must Select a Service
      <br><br>
          `
        }


     else if (shareInput.value !== "" && billInput.value === "" &&
  select.value === ""){
  errorContainer.innerHTML = `<br> Bill Amount Cannot Be Blank
  <br><br>
  You Must Select a Service
  <br><br>
      `
    }

     else if (shareInput.value == "" && billInput.value == "" &&
  select.value !== "" ){
    errorContainer.innerHTML = `<br> Bill Amount Cannot Be Blank
    <br><br>
    Numbers Of Users Must Be Greater Than Zero
    <br><br>
        `
  }

  else if (shareInput.value !== "" && billInput.value == "" &&
  select.value !== "" ){
    errorContainer.innerHTML = `<br> Bill Amount Cannot Be Blank
    <br><br>
        `
  }
  else{
    return;
  }

  setTimeout(function(){
    errorContainer.innerHTML = "";
    errorContainer.className = "error-container";
  },5000);

}


function computeResult (){

 
  results.style.textAlign = "center";
  
  if (shareInput.value !== "" && billInput.value !== "" && select.value !== "" ){
  return results.innerHTML =
   `<h3> Tip Amount   $ ${(Math.round(+billInput.value / 100)) * select.value } 
  <h3> Total Amount   $   ${(Math.round(+billInput.value / 100)) * select.value + +billInput.value} 
  <h3> Each Person Owes   $  ${(Math.round(+billInput.value / 100)) * select.value + +billInput.value / shareInput.value}
  `
  }



 

}


// let roundResult = computeResult();
// let roundedValue = Math.round(roundResult * 100) / 100;


