const res=document.getElementById("res");

function run(){
 let list=order.value.split("\n").filter(x=>x.trim());
 res.innerText=list.length>0?"Load order valid (manual review recommended)":"Enter data";
}

