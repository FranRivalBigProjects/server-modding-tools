const res=document.getElementById("res");

function run(){
 let b=base.value,p=patch.value;
 if(!b||!p){res.innerText="Enter values";return;}
 res.innerText=b===p?"Fully compatible":"Check patch notes";
}

