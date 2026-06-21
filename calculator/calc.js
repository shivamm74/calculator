JSON.parse(localStorage.getItem(result))

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
    } catch (e) {
        input.placeholder = string(error)
        console.log('some error occured')

    }
}

function clearDisplay() {
    console.log("cleared !");
    input.placeholder = 0;


}


localStorage.setItem('calculation',JSON.stringify(result))