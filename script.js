// let button  = document.querySelector(".tasdiqlash")
// let input = document.querySelector("#format")
// button.addEventListener("click", function(){
//     let input = document.querySelector("input").value
// })
function func(){
    let input = document.querySelector("input")
    let select = document.querySelector("select")
    input.value = select.value
}
 let button = document.querySelector(".zxc")
 button.addEventListener("click", function(){
   let input = document.querySelector(".input2").value
   button = document.querySelector("button")
 let h3  =document.createElement("h3")
 h3.innerHTML = input
 document.querySelector("h3").appendChild(h3)
 h3.value = ""
 
 
 })
 function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

 









 