const btns = document.querySelectorAll("button");
const count = document.querySelector("#count");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(btn.classList.contains('add')){
            count.innerHTML++
        }else if(btn.classList.contains('sub')){
            count.innerHTML--
        }else{
            count.innerHTML=0;
        }
        applyColor()
    })
})
function applyColor(){
    if(count.innerHTML>0){
        count.style.color="green";
    }else if (count.innerHTML<0){
        count.style.color="orangered";
    }else{
        count.style.color="#000";
    }
}