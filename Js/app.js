
function Show() {
    var value = parseInt(document.getElementById("amount").value);
    var x = value;
    var value = parseInt(document.getElementById("percentage").value);
    var y = value;
    var value = parseInt(document.getElementById("tme").value);
    var z = value;
    var count = 0;
    var text = document.getElementById("msg")
   if (y*=x) {
       y/=100
       y+=x
       y/=z
        text.innerHTML = `Amount to be paid monthly:${Math.floor(y)}USD `
   }
}