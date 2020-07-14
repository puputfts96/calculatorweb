let prevNumber='';
let calculationOperator='';
let currentNumber='0';
const calculatorScreen =document.getElementById("screen-calculator");
const numbers=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equalSign =document.getElementById("equalSign");
const clearBtn=document.getElementById("clear");
const decimal=document.getElementById("decimal");
const percentage =document.getElementById("percentage");

const calculate=()=>{
	let result=''
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber)+parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber-currentNumber
			break
		case "*":
			result = prevNumber*currentNumber
			break
		case "/":
			result = prevNumber/currentNumber
			break
		default:
			return
	}
	currentNumber=result
	calculationOperator=''
}

const updateScreen=(number)=>{
	calculatorScreen.value=number
}

const percentageNumber=()=>{
	currentNumber=currentNumber/100;
}

const inputDecimal=(dot)=>{
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber+=dot;
}

const inputNumber=(number)=>{
	if (currentNumber=='0') {
		currentNumber=number;
	}else{
		currentNumber+=number;
	}
}

const inputOperator=(operator)=>{
	if (calculationOperator==='') {
		prevNumber=currentNumber;
	}
	if (currentNumber!='0') {
		calculate();
		prevNumber=currentNumber;
		updateScreen(currentNumber);
	}
	calculationOperator=operator;
	currentNumber='0';
}

const clearAll=()=>{
	prevNumber='';
	calculationOperator='';
	currentNumber='0';
}

numbers.forEach((number) => {
	number.addEventListener("click", (event)=>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
});

operators.forEach((operator) => {
	operator.addEventListener("click", (event)=>{
		inputOperator(event.target.value);
	})
});

equalSign.addEventListener("click", ()=>{
	calculate();
	updateScreen(currentNumber);
});

clearBtn.addEventListener("click", ()=>{
	clearAll();
	updateScreen(currentNumber);
});

percentage.addEventListener("click", ()=>{
	percentageNumber();
	updateScreen(currentNumber);
});

decimal.addEventListener("click", (event)=>{
	// console.log(event.target.value);
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});