const istatus=document.querySelector('h5');
const btn=document.querySelector('#add');
var check=0;

btn.addEventListener("click",()=>{
    if(check==0){
        istatus.innerHTML="Petted"
        istatus.style.color="Green"
        btn.innerHTML="Don't"
        check=1
    }else{
        istatus.innerHTML="Not Petted"
        istatus.style.color="Red" 
        btn.innerHTML="Pet"
        check=0  
    }
})
