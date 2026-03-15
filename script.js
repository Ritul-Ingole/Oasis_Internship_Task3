const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const outputValue = document.getElementById('outputValue');

function convertTemprature(value,from,to){
    if(from===to) return value;
     
    let celsius;

    if(from==='celsius'){
        celsius=value;
    }else if(from==='fahrenheit'){
        celsius=(value-32)*5/9;
    }else if(from==='kelvin'){
        celsius=value-273.15;
    }

    if(to==='celsius'){
        return celsius;
    }else if(to==='fahrenheit'){
        return(celsius*9/5)+32;
    }else if(to==='kelvin'){
        return celsius+273.15;
    }
}
function updateConversion(){
    const value=parseFloat(tempInput.value) || 0;
    const result=convertTemprature(value,fromUnit.value,toUnit.value);
    outputValue.textContent = result.toFixed(2);
}
tempInput.addEventListener('input', updateConversion);
fromUnit.addEventListener('change', updateConversion);
toUnit.addEventListener('change', updateConversion);
updateConversion();
