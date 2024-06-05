var add=document.getElementById("add");
var remove=document.getElementById("remove");
let msg=document.getElementById("msg");

add.addEventListener("click",function ()
{
    if(msg.innerHTML==="Friend")
        {
            alert("Already Friend");
        }
    else {
        msg.innerHTML="Friend";
        msg.style.color='royalblue';
    }
})

remove.addEventListener("click",function()
{
    if(msg.innerHTML==="Stranger")
        {
            alert("Already  Not A Friend");
        }
    else {
        msg.innerHTML="Stranger";
        msg.style.color='red';
        
    }
})

