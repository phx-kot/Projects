var counter  = 0;
document.getElementById("countnum").innerHTML = counter;
document.getElementById("add1").onclick = function() {
    add();
}
document.getElementById("rem1").onclick = function() {
    remove();
}
function add(){
    counter = counter + 1;
    document.getElementById("countnum").innerHTML = counter;
    return;
}
function remove(){
    counter = counter - 1;
    document.getElementById("countnum").innerHTML = counter;
    return;
}
document.getElementById("Reset").onclick = function() {
    window.counter = 0;
    document.getElementById("countnum").innerHTML = counter;
    return;
}