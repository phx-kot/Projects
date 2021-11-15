function calculate(){
    var cost = document.getElementById('price').value;
    var service = document.getElementById('tip').value;
    var numberof = document.getElementById('numppl').value;
    if (cost === "" || isNaN(cost) || cost < 1){
    alert("Please enter a proper price for your bill");
    return;
    }
    if (service === "0"){
    alert("Enter a tip amount");
    return;
    }
    if (numberof === "" || isNaN(numberof) || numberof < 1){
        alert("Please enter a proper number of ways for the bill to be split")
        return;
     }
     var finalAmount = ((cost * service)/numberof);
     finalAmount = Math.round(finalAmount*100)/100;
     finalAmount = finalAmount.toFixed(2);
     finalAmount = "$" + finalAmount;
     document.getElementById("output").innerHTML = finalAmount
    }

document.getElementById("calculate").onclick = function() {
    calculate();
}