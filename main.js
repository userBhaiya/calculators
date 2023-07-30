let display = document.getElementById('display');

let btns = document.querySelectorAll('button');

display.value = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    let targetValue = e.target.textContent;
    if (e.target.textContent === 'AC') {
      display.value = '';
    }
    else if (targetValue === 'C') {
      display.value = display.value.substring(display.value.length - 1, -1);
    }
    /*else if(targetValue === '+'){
      display.value += targetValue;
    }*/
    else if (targetValue === '=') {
      let result = eval(display.value);
      display.value = result;
      console.log(result);
    }
    
    else {
      display.value += e.target.textContent;
    }
  })
})