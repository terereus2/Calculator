function getClear(){
const data = document.getElementById('data')
data.value = ''
}

function getNumber(element){
const input = document.getElementById('data')
   if(input.value === '0'){
    input.value += ''
   } else{
     input.value += element
     }
}

function action(operator){
const data = document.getElementById('data').value
      if (data&&data[data.length-1] !== operator){                                       
      let elem = operator
      elem.value = operator
      let input = document.getElementById('data')
      input.value += operator
      } 
}

function getEquals(){
const data = document.getElementById('data').value  
let operator                                      
for(i=0; i<data.length; i++){
        if(isNaN(data[i])){
        operator = data[i]
        } 
}
let position = data.indexOf(operator)               
let x = Number(data.slice(0,position))              
let y = Number(data.slice(position+1,data.length)) 
if(operator == '+'){
document.getElementById('data').value = x+y
} else if(operator === '-'){
  document.getElementById('data').value = x-y
  } else if(operator === '*'){
    document.getElementById('data').value = x*y
    } else if(operator ==='/'){
      document.getElementById('data').value = x/y
      } 
}


