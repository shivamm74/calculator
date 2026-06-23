let savedresult = JSON.parse(localStorage.getItem('calculation'));
if(savedresult !== null) {
    document.getelementbyid('input').placeholder = savedresult;
}


function appendToDisplay(value) {
    const input = document.getElementById('input');
    if (input.placeholder === 'error'){
        input.placeholder = value;
    } else if (input.placeholder === '0' ){
        input.placeholder = value;
    } else {
        input.placeholder += value
    }
}
   
function calculate() {
    
    const input = document.getElementById('input');
    let expression = input.placeholder;
    try {
        let result = eval(expression);
        console.log(`result : ${result}`);
        input.placeholder = result;
        localStorage.setItem('calculation',JSON.stringify(result));
    } catch (e) {
        input.placeholder = 'error';
        console.log('some error occured')

    }

}

function clearDisplay() {
    const input = document.getElementById('input');
    console.log("cleared !");
    input.placeholder = 0;
    localStorage.removeItem('calculation');


}


