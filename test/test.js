
describe ("0+1", function (){
    it("be equal to 1", function (){
        expect(0+1).toBe(1);
    });
    });
    
    
describe ("0+1", function (){
it("be equal to 1", function (){
    calculator.clearAll();
   calculator.onBtn('0');
   calculator.onBtn('+');
   calculator.onBtn('1');
    expect(calculator.evaluate()).toEqual('1');
});
});  

describe ("1+1", function (){
    it("be equal to 2", function (){
        calculator.clearAll();
       calculator.onBtn('1');
       calculator.onBtn('+');
       calculator.onBtn('1');
        expect(calculator.evaluate()).toEqual('2');
    });
    });  
 
describe ("4-1", function (){
    it("be equal to 3", function (){
        calculator.clearAll();
       calculator.onBtn('4');
       calculator.onBtn('-');
       calculator.onBtn('1');
        expect(calculator.evaluate()).toEqual('3');
    });
    }); 

describe ("3-1", function (){
    it("be equal to 2", function (){
        calculator.clearAll();
       calculator.onBtn('3');
       calculator.onBtn('-');
       calculator.onBtn('1');
        expect(calculator.evaluate()).toEqual('2');
    });
    }); 

    describe ("undefined", function (){                        // When an empty uptut is evaluated the result is undefined.
    it("be equal to 0", function (){                           // So the evaluated function have to make it 0
        calculator.clearAll();                          
        expect(calculator.evaluate()).toEqual('0');     
    });
    }); 


    describe ("deleting the last digit", function (){
        it("be 12", function (){
            calculator.clearAll();
           calculator.onBtn('1');
           calculator.onBtn('2');
           calculator.onBtn('3');
            expect(calculator.delLast()).toEqual('12');
        });
        }); 


    describe ("negative numbers", function (){
    it("be equal to -3", function (){
        calculator.clearAll();
       calculator.onBtn('3');
       calculator.onBtn('*');
       calculator.onBtn('-');
       calculator.onBtn('1');
        expect(calculator.evaluate()).toEqual('-3');
    });
    }); 


    describe ("faractions", function (){
        it("be 1.52", function (){
            calculator.clearAll();
           calculator.onBtn('1');
           calculator.onBtn('.');
           calculator.onBtn('5');
           calculator.onBtn('.');     //this dot should not be accepted
           calculator.onBtn('2');
            expect(calculator.evaluate()).toEqual('1.52');   
        });
        }); 

    describe ("faractions", function (){
        it("be 0.4", function (){
            calculator.clearAll();
           calculator.onBtn('.');           //any symbol exept " - " generates a "0" before it if the output is empty
           calculator.onBtn('2');
           calculator.onBtn('*');
           calculator.onBtn('2');    
            expect(calculator.evaluate()).toEqual('0.4');   
        });
        }); 

    
 


 


       


        


function createCalculator()
{
    var expression = {value: '', isResult: false, allowDot: true}


   return {
    

    //write nuber or symbol from the calculator interface keyboard
    onBtn(b){

        if (expression.value =='' && !/([\d|-])/.test(b))        //When the screan is empty put a zero if u press a symbol(exept for -)
        {
            var result =  (expression.value = '0'+b)
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
            var result =  (expression.value += ' -')
            expression = {value: result, isResult: false, allowDot: true}  
            return  result
        }
          else if ( (expression.value != "" && !/([\d])/.test(expression.value.charAt(expression.value.length-1)) && !/([\d])/.test(b))  //no 2 simbols next to each other
          || b == '.' && expression.allowDot == false)      // not allowing dot when already used in a number (till adding operator)
        {
            var result =  (expression.value = expression.value)
            expression.value = result
            expression.isResult = false
            return  result
        } 

         else {
    
            var result =  (expression.value += b)
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
       
        var result = new String( eval(expression.value))
        
        if (result == 'undefined')                          //An if statement is added and now the test passes
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
            var removed = expression.value.charAt(expression.value.length-1)
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

