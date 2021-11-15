var opponentSign = 0;
var compSign = 0;
var opponentThrow = "";
var compThrow = "";
var winOrLose = "";
var opponentScore = 0;
var compScore = 0;
document.getElementById("compScore").innerHTML = compScore;
document.getElementById("opponentScore").innerHTML = opponentScore;
document.getElementById('Reset').onclick=function(){
    opponentSign = 0;
    compSign = 0;
    opponentThrow = "";
    compThrow = "";
    winOrLose = "";
    document.getElementById("compThrow").innerHTML = compThrow;
    document.getElementById("opponentThrow").innerHTML = opponentThrow;
    document.getElementById("winOrLose").innerHTML = winOrLose;
}
document.getElementById('Clear').onclick=function(){
    opponentScore = 0;
    compScore = 0;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById("opponentScore").innerHTML = opponentScore;
}
document.getElementById('Rock').onclick=function() {
    if(opponentSign !== 0 || compSign !== 0){
        return;
    }
    opponentSign = 0;
    opponentSign = opponentSign + 1;
    opponentThrow = 'Rock';
    compSign = Math.floor((Math.random()*3) + 1);
}
document.getElementById('Paper').onclick=function() {
    if(opponentSign !== 0 || compSign !== 0){
        return;
    }
    opponentSign = 0;
    opponentSign = opponentSign + 2;
    compSign = Math.floor((Math.random()*3) + 1);
    opponentThrow = 'Paper';
}
document.getElementById('Scissors').onclick=function() {
    if(opponentSign !== 0 || compSign !== 0){
        return;
    }
    opponentSign = 0;
    opponentSign = opponentSign + 3;
    compSign = Math.floor((Math.random()*3) + 1);
    opponentThrow = 'Scissors';
}
document.getElementById('Send').onclick=function() {
    if(opponentSign === 0 || compSign === 0){
        return;
    }
    document.getElementById("opponentThrow").innerHTML = opponentThrow;
    if(compSign === 1){
        compThrow = 'Rock';
        document.getElementById("compThrow").innerHTML = compThrow;
    }
    if(compSign === 2){
        compThrow = 'Paper';
        document.getElementById("compThrow").innerHTML = compThrow;
    }
    if(compSign === 3){
        compThrow = 'Scissors';
        document.getElementById("compThrow").innerHTML = compThrow;
    }
    if(opponentSign === 1){
        if(compSign === 3){
            winOrLose = "You Win!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            opponentScore = opponentScore + 1;
            document.getElementById("opponentScore").innerHTML = opponentScore;
            return;
        }
        if(compSign === 2){
            winOrLose = "You Lose :(";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            compScore = compScore + 1;
            document.getElementById("compScore").innerHTML = compScore;
            return;
        }
        if(compSign === 1){
            winOrLose = "Tie!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            return;
        }
    }
    if(opponentSign === 2){
        if(compSign === 1){
            winOrLose = "You Win!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            opponentScore = opponentScore + 1;
            document.getElementById("opponentScore").innerHTML = opponentScore;
            return;
        }
        if(compSign === 3){
            winOrLose = "You Lose :(";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            compScore = compScore + 1;
            document.getElementById("compScore").innerHTML = compScore;
            return;
        }
        if(compSign === 2){
            winOrLose = "Tie!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            return;
        }
    }
    if(opponentSign === 3){
        if(compSign === 2){
            winOrLose = "You Win!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            opponentScore = opponentScore + 1;
            document.getElementById("opponentScore").innerHTML = opponentScore;
            return;
        }
        if(compSign === 1){
            winOrLose = "You Lose :(";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            compScore = compScore + 1;
            document.getElementById("compScore").innerHTML = compScore;
            return;
        }
        if(compSign === 3){
            winOrLose = "Tie!";
            document.getElementById("winOrLose").innerHTML = winOrLose;
            return;
        }
    }
}