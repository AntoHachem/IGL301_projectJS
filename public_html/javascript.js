function validateAmount(e) {
    var key = e.keyCode;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        return true;
    }
    else {
        return false;
    }
}

function validateRate(e) {
    var key = e.keyCode;
    var value = document.getElementById("rateTxt").value;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        
       
            return true;
        
        }
        else {
            return false;
        }
        
       


    }



function validateMonths(e) {
    var key = e.keyCode;
    var value = document.getElementById("monthsTxt").value;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        return true;
    }
    else {
        return false;
    }
}
function myFunction(id,min,max) {
    
    var value = id.value;
    value = parseInt(value, 10) ;
     
    if(value > max)
    {
    id.value = max;
    }
    if(value < min)
    {
    id.value = min;
    }
   
}

function calculate() {
    var amount = document.getElementById("amountTxt").value;
    var rate = document.getElementById("rateTxt").value;
    var months = document.getElementById("monthsTxt").value;
    document.getElementById("interest").value = amount * rate * months / 100;
}