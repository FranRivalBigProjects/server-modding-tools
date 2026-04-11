const res=document.getElementById("res");

function run(){
 let errors=(log.value.match(/error/gi)||[]).length;
 res.innerText=errors?`Errors found: ${errors}`:"No errors detected";
}

