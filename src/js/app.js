

function createCalculator()
{
    let expression = {value: '', isResult: false, allowDot: true}


   return {
    

    //write nuber or symbol from the calculator interface keyboard
    onBtn(b){

        if (expression.value =='' && !/([\d|-])/.test(b))        //When the screan is empty put a zero if u press a symbol(exept for -)
        {
             let result =  (expression.value = '0'+b)
             if (result == '0.')
             {
                 expression.allowDot = false
             }
             expression.value = result
             expression.isResult = false
             return  result
        }

        else if (/([-|+|*|/])/.test(expression.value.charAt(expression.value.length-1)) 
        && /([\d])/.test(expression.value.charAt(expression.value.length-2))
        && b == "-")
        {                                                                               //using the minus for negative numbers
            let result =  (expression.value += ' -')
            expression = {value: result, isResult: false, allowDot: true}  
            return  result
        }
          else if ( (expression.value != "" && !/([\d])/.test(expression.value.charAt(expression.value.length-1)) && !/([\d])/.test(b))  //no 2 simbols next to each other
          || b == '.' && expression.allowDot == false)      // not allowing dot when already used in a number (till adding operator)
        {
            let result =  (expression.value = expression.value)
            expression.value = result
            expression.isResult = false
            return  result
        } 

         else {
    
            let result =  (expression.value += b)
            expression.value = result
            expression.isResult = false
             if (b== "."){
                expression.allowDot = false
            } else if (/([-|+|*|/])/.test(b)) {
                expression.allowDot = true
            } 
            
            return  result 
         } 

      


    },
    

    //=
    evaluate() {

        let result = new String( eval(expression.value))          

        if (result == 'undefined')                        
        {
            result = '0'
        }

        expression.value = result
        expression.isResult = true
        if (/([\\.])/.test(result))
        {
            expression.allowDot = false
        } else {
            expression.allowDot = true
        }

        return result


    },

    //AC
    clearAll(){
      expression = {value: '', isResult: false, allowDot: true}   

      return ''

    },

    //CE
    delLast(){
       
        
        if (!expression.isResult) {
            let removed = expression.value.charAt(expression.value.length-1)
            expression.value = expression.value.slice(0, -1)

            if (removed == '.'){
                expression.allowDot = true
            } else if ( /([-|+|*|/])/.test(removed) && /([\\.])/.test(expression.value)  && !/([-|+|*|/])/.test(expression.value))
            {
               
                expression.allowDot = false
            }
        }

        return expression.value
    }
   };
}

/* There is a bug i don't know how to fix. If you delete operator after the second number or above, you can add extra dots
    And if you remove the nagetive symbol on Row 100's statement  !/([-|+|*|/])/.test(expression.value) ,
    it only buggs the first number.

*/


let calculator = createCalculator();


