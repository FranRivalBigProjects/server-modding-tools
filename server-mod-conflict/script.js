const res=document.getElementById("res");

function run(){
 let list=mods.value.split("\n").filter(x=>x.trim());
 let duplicates=list.filter((item,index)=>list.indexOf(item)!==index);
 res.innerText=duplicates.length?`Conflicts: ${[...new Set(duplicates)].join(", ")}`:"No conflicts";
}

