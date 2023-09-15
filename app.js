function load() {
    var btns = document.querySelectorAll('#calculator span');
    console.log(btns);
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for (var i = 0; i < btns.length; i++) {
        var decimalAdded = false;
        btns[i].addEventListener('click', function () {
            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;
            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':
                    var lastChar = input[input.length - 1];
                    input = input.replace("x", "*").replace("÷", "/"); //Replace signs with signs that computer understand
                    if (operators.includes(lastChar) || lastChar == '.') {
                        break;
                    }
                    else {
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false;
                    break;
                case '.':
                    if (!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    var lastChar = input[input.length - 1]
                    if (input != '' && !operators.includes(lastChar)) {
                        inputScreen.innerHTML += btnValue;
                    }
                    else {
                        if (input == '' && btnValue == '-') {
                            inputScreen.innerHTML += btnValue;
                        }
                    }
                    if (operators.includes(lastChar) && input.length > 1) {
                        inputScreen.innerHTML = input.replace(lastChar, btnValue);
                    }
                    break;

                default:
                    inputScreen.innerHTML += btnValue;
            }
        });
    }
}