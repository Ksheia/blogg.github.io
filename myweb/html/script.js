
    function addopinion()
{
  var opinion=document.getElementById("opinion");
if(opinion.value==""){
  alert("留言為空白");
}
else{
  var txtNode = document.createTextNode(opinion.value);
  var li = document.createElement("li");
  li.appendChild(txtNode);
  var list = document.getElementById("list");
  list.appendChild(li);
 document.getElementById("opinionCount").innerText=list.children.length;
}}
function Menu(number)
{
var menu=document.getElementById("menu-"+number);
menu.classList.toggle("hide");
}
function toggleMenu(){
  var menu=document.getElementById("menu");
  if(menu.style.display=="none"){menu.style.display="block";}else{menu.style.display="none";}
}