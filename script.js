const display1=document.querySelector(".firstop");
const display2=document.querySelector(".secondop");
const tempr=document.querySelector(".temp");
const clearAll=document.querySelector(".ac");
const clearLast=document.querySelector(".ce");
const operand=document.querySelectorAll(".operand");
const operator=document.querySelectorAll(".operator");
const equal=document.querySelector(".equal");


let lastoperation='';
let result;
let disp1='';
let disp2='';
let haveDot=false;

operand.forEach(op=>
    {
        op.addEventListener('click',(e)=>
        {
            if(e.target.innerText==='.' && !haveDot)
            {
                haveDot=true;
            }
            else if(e.target.innerText==='.' && haveDot)
            {
                return;
            }
        
            disp2 += e.target.innerText;
            display2.innerText =disp2;
        })
    });
operator.forEach( op1 =>
    {
        op1.addEventListener('click',(e)=>
        {
            if(!disp2)
                return;
                haveDot=false;
                const operationname=e.target.innerText;
            if(disp1 && disp2 && lastoperation)
            {
                mathOperation();
            }
            else{
                result=parseFloat(disp2);
                
            }
            clearvar(operationname);
            lastoperation=operationname;
        })
    });
function clearvar(name='')
{
    disp1 +=disp2 + ' '+name+' ';
    display1.innerText=disp1;
    display2.innerText='';
    disp2='';
    tempr.textContent=parseFloat(result);    
}

function mathOperation()
{
    if(lastoperation==='%')
    {
        result= parseFloat(result) % parseFloat(disp2);
    }
    else if(lastoperation==='/')
    {
        result= parseFloat(result) / parseFloat(disp2);
    }
    else if(lastoperation==='x')
    {
        result= parseFloat(result) * parseFloat(disp2);
    }
    else if(lastoperation==='+')
    {
        result= parseFloat(result) + parseFloat(disp2);
    }
    else if(lastoperation==='-')
    {
        result= parseFloat(result) - parseFloat(disp2);
    }
    
}
equal.addEventListener('click',(e)=>
{
    if(!disp1 || !disp2)
    return;
    haveDot=false;
    mathOperation();
    clearvar();
    display2.innerText=result;
    tempr.innerText='';
    disp2=result;
    disp1='';
});
clearAll.addEventListener('click',(e)=>
{
    disp1=disp2='';
    display1.innerText='';
    display2.innerText='';
    tempr.innerText='';
    result='';
})

clearLast.addEventListener('click',(e)=>
{
    display2.innerText='';
    disp2='';
})
window.addEventListener('keydown',(e)=>
{
    if(e.key==='0' ||
    e.key==='1' ||
    e.key==='2' ||
    e.key==='3' ||
    e.key==='4' ||
    e.key==='5' ||
    e.key==='6' ||
    e.key==='7' ||
    e.key==='8' ||
    e.key==='9' ||
    e.key==='.' )
    
    {
        clickOperand(e.key);
    }
    else if(
    e.key==='/' ||
    e.key==='%' ||
    e.key==='+' ||
    e.key==='-' )
    {
        clickOperator(e.key);
    }
    else if(e.key==='*')
    {
        clickOperator('x');
    }
    else if(e.key==='Enter'||
    e.key==='=')
    {
        clickEqual();
    }
})

function clickOperand(key)
{
    operand.forEach(_op2 =>
        {
            if(_op2.innerText=== key)
            {
                _op2.click();
            }
        })
}

function clickOperator(key)
{
    operator.forEach(_op3 =>
    {
            if(_op3.innerText === key)
            {
                _op3.click();
            } 
    })
}

function clickEqual()
{
    equal.click();
}




