window.answer = ""; 
document.getElementById("answer").innerHTML = answer;
window.calcNumbers = [];
window.equation = 0;
document.getElementById("clear").onclick = function() {
    window.answer = "";
    document.getElementById("answer").innerHTML = answer;
    calcNumbers = [];
    window.equation = 0;
}
document.getElementById("one").onclick = function() {
    window.answer = window.answer + 1;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("two").onclick = function() {
    window.answer = window.answer + 2;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("three").onclick = function() {
    window.answer = window.answer + 3;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("four").onclick = function() {
    window.answer = window.answer + 4;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("five").onclick = function() {
    window.answer = window.answer + 5;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("six").onclick = function() {
    window.answer = window.answer + 6;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("seven").onclick = function() {
    window.answer = window.answer + 7;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("eight").onclick = function() {
    window.answer = window.answer + 8;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("nine").onclick = function() {
    window.answer = window.answer + 9;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("zero").onclick = function() {
    window.zero = 0;
    window.answer = window.answer + 0;
    document.getElementById("answer").innerHTML = answer;
}
document.getElementById("decimal").onclick = function() {
        window.decimal = '.';
        window.answer = window.answer + ".";
        document.getElementById("answer").innerHTML = answer;  
}    
document.getElementById("plus").onclick = function() {
    if (answer.includes('+','x','/','-')){
        return;
    } else {
        calcNumbers.push(answer);
        console.log(calcNumbers);
        window.plus = '+';
        window.answer = window.answer + "+";
        document.getElementById("answer").innerHTML = answer;
        equation = equation + 1;

    }    
}
document.getElementById("minus").onclick = function() {
    if (answer.includes('+','x','/','-')){
        return;
    } else {
        calcNumbers.push(answer);
        console.log(calcNumbers);
        window.minus = '-';
        window.answer = window.answer + "-";
        document.getElementById("answer").innerHTML = answer;
        equation = equation + 2;

    }    
}
document.getElementById("times").onclick = function() {
    if (answer.includes('+','x','/','-')){
        return;
    } else {
        calcNumbers.push(answer);
        console.log(calcNumbers);
        window.minus = 'x';
        window.answer = window.answer + "x";
        document.getElementById("answer").innerHTML = answer;
        equation = equation + 3;    
    }
}
document.getElementById("divide").onclick = function() {
    if (answer.includes('+','x','/','-')){
        return;
    } else {
        calcNumbers.push(answer);
        console.log(calcNumbers);
        window.minus = '/';
        window.answer = window.answer + "/";
        document.getElementById("answer").innerHTML = answer;
        equation = equation + 4;    
    }
}
document.getElementById('calculate').onclick = function(){
    answer = answer.replace('+','');
    answer = answer.replace('-','');
    answer = answer.replace('x','');
    answer = answer.replace('/','');
    answer = answer.replace(calcNumbers[0],'');
    calcNumbers.push(answer);
    calcNumbers[0] = calcNumbers[0] * 1;
    calcNumbers[1] = calcNumbers[1] * 1;
    console.log(equation);
    if (equation === 1){
    answer = calcNumbers[0] + calcNumbers[1];
    document.getElementById("answer").innerHTML = answer;
    } 
    if (equation === 2){
        answer = calcNumbers[0] - calcNumbers[1];
        document.getElementById("answer").innerHTML = answer;
    }
    if (equation === 3){
        answer = calcNumbers[0] * calcNumbers[1];
        document.getElementById("answer").innerHTML = answer;
    } 
    if (equation === 4){    
        answer = calcNumbers[0] / calcNumbers[1];
        document.getElementById("answer").innerHTML = answer;
    }   
    window.equation = 0;
}