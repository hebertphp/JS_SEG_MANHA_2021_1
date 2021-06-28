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
  function centro(){
    h1_2.style.textAlign="center";
  }
  function tira_centro(){
    h1_2.removeEventListener('click', centro);  
  }
  h1_2.addEventListener('click', fundo);
  h1_2.addEventListener('click', centro);
  document.querySelector("#tf").addEventListener('click', tira_centro);
}
/*


*/