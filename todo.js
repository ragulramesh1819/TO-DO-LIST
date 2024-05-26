document.getElementById('imgchange').addEventListener("click",tochange)
let c=1
function tochange()
{
  if(c==1)
    {
      document.getElementById('imgchange').src="bxs-moon.svg"
      document.getElementById('top').style.backgroundImage ="url('./bg-desktop-light.jpg')"
      c=0
    }
    else{
      document.getElementById('imgchange').src="bx-sun.svg"
      document.getElementById('top').style.backgroundImage ="url('./bg-desktop-dark.jpg')"
      c=1
    }
}
function fun(){
    let inf =document.getElementById("userdata")
    let old=document.getElementById("unorderlist")
    if(inf.value!=""){
    let tot = document.createElement("tot-box")
    let ne = document.createElement("new-box")
    let del = document.createElement("del-box")
    ne.appendChild(document.createTextNode(inf.value))

    tot.appendChild(ne)
    tot.appendChild(del)
    unorderlist.appendChild(tot)
    inf.value=""
    del.onclick = function(){
        var parent = this.parentNode
        parent.remove();
      }
    ne.onclick = function(){
        this.style.textDecoration = "line-through"
      }
    }
    else
    {
        alert("plz add a value to item")
    }
}
