const usrInput = document.getElementById("usrinput");

const crrentcalculationOutput = document.getElementById("crrentcalculation");
const currentresultOutput = document.getElementById("currentresult");


const addBtn = document.getElementById("addbtn");
const subtractBtn = document.getElementById("subtractbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const divideBtn = document.getElementById("dividebtn");

function finalResult(equation, result){
  
    crrentcalculationOutput.textContent = equation;
    currentresultOutput.textContent = result;
}
 
    
    let currentresul = [0];
    let logEntris =[] 
    
    

     function getuserinput() {
         return parseFloat(usrInput.value);
     }
    


     function creatAndWriteOutput(operator, resultBeforecal, calcNumber){
      const crrentcalculat =`${operator} ${resultBeforecal} ${calcNumber}`;
      finalResult(crrentcalculat, currentresul) ;                                        
     }
    function add(){
     const enterdnumber =  getuserinput(); 
     const initialresult = currentresul;
     currentresul = currentresul +  enterdnumber;
     creatAndWriteOutput(initialresult,'+' ,enterdnumber);
     const logEntry = {
       operation: 'Add',
       prevResult: initialresult,
       number:enterdnumber,
       result:currentresul,
     } 
     logEntris.push(enterdnumber);
     console.log(logEntry);
     console.log(logEntris);
    }


    function subtract(){
        const enterdnumber =  getuserinput(); 
        const initialresult = currentresul;
        currentresul =  currentresul - enterdnumber;
        creatAndWriteOutput(initialresult,'-',enterdnumber); 
        const logEntry = {
            operation: "Subtract",
            prevResult: initialresult,
            number:enterdnumber,
            result:currentresul,
          }
          logEntris.push(enterdnumber);
          console.log(logEntry);
          console.log(logEntris); 
         }



    function multipiy (){ const enterdnumber =  getuserinput(); 
        const initialresult = currentresul;
        currentresul = currentresul * enterdnumber;
        creatAndWriteOutput(initialresult ,'*', enterdnumber); 
        const logEntry = {
            operation: "Multiply",
            prevResult: initialresult,
            number:enterdnumber,
            result:currentresul,
          } 
          
    logEntris.push(enterdnumber);
     console.log(logEntry);
     console.log(logEntris);  
    }  
     

    function divide (){
        const enterdnumber =  getuserinput(); 
        const initialresult = currentresul;
        currentresul = currentresul / enterdnumber;
        creatAndWriteOutput(initialresult,'/',enterdnumber);  
        const logEntry = {
            operation: "Divide",
            prevResult: initialresult,
            number:enterdnumber,
            result:currentresul,
          } 
          logEntris.push(enterdnumber);
          console.log(logEntry);
          console.log(logEntris);
    } 

    
    addBtn.addEventListener('click', add);
    subtractBtn.addEventListener('click', subtract);
    multiplyBtn.addEventListener('click', multipiy);
    divideBtn.addEventListener('click', divide);