window.onload=function(){
  var h1_1=document.querySelector("#h1_1");
  h1_1.onmouseover=function(){
    h1_1.style.color='blue';
  }
  h1_1.onmouseout=function(){
    h1_1.style.color='black';
  }
  var h1_2=document.querySelector("#h1_2");
  function fundo(){
    h1_2.style.backgroundColor="green";
  }
  h1_2.onclick=fundo;
}