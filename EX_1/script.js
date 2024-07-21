
let firstnumber=document.getElementById("firstnumber");
let secondnumber=document.getElementById("secondnumber");
let Resulte=document.getElementById("Resulte");

function one(){

Resulte.innerText=parseInt(firstnumber.value)+parseInt(secondnumber.value);

}


function two(){

    Resulte.innerText=parseInt(firstnumber.value)-parseInt(secondnumber.value);
    
    }

    function tree(){

        Resulte.innerText=parseInt(firstnumber.value)*parseInt(secondnumber.value);
        
        }

    function four(){
            Resulte.innerText=parseInt(firstnumber.value)/parseInt(secondnumber.value);            
    }


