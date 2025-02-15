let result = document.getElementById('result')
let currentInput = '' // Текущий ввод
let previousInput = '' // Предыдущий ввод
let operator = '' // Текущий оператор

// Функция для обновления отображаемого результата
function updateResult() {
	result.textContent = currentInput || '0' // Если currentInput пуст, отображаем "0"
}

// Функция для обработки нажатий на цифровые кнопки
function handleNumberClick(number) {
	if (currentInput === '0' && number === '0') return // Не добавлять лишние нули
	currentInput += number
	updateResult()
}

// Функция для обработки нажатий на операторы
function handleOperatorClick(op) {
	if (currentInput === '') return // Если нет текущего ввода, ничего не делать
	if (previousInput !== '') {
		calculateResult() // Если есть предыдущий ввод, вычислить результат
	}
	operator = op
	previousInput = currentInput
	currentInput = ''
}

// Функция для вычисления результата
function calculateResult() {
	if (previousInput === '' || currentInput === '') return // Если нет данных, ничего не делать

	let num1 = parseFloat(previousInput)
	let num2 = parseFloat(currentInput)
	let calculationResult

	switch (operator) {
		case '+':
			calculationResult = num1 + num2
			break
		case '-':
			calculationResult = num1 - num2
			break
		case '*':
			calculationResult = num1 * num2
			break
		case '/':
			calculationResult = num1 / num2
			break
		default:
			return
	}

	currentInput = calculationResult.toString()
	previousInput = ''
	operator = ''
	updateResult()
}

// Функция для очистки всего результата
function clearInput() {
	currentInput = '' // Очищаем текущий ввод
	previousInput = '' // Очищаем предыдущий ввод
	operator = '' // Сбрасываем оператор
	updateResult() // Обновляем отображение результата
}

// Назначение обработчиков событий для кнопок
document.getElementById('zero').onclick = () => handleNumberClick('0')
document.getElementById('one').onclick = () => handleNumberClick('1')
document.getElementById('two').onclick = () => handleNumberClick('2')
document.getElementById('three').onclick = () => handleNumberClick('3')
document.getElementById('four').onclick = () => handleNumberClick('4')
document.getElementById('five').onclick = () => handleNumberClick('5')
document.getElementById('six').onclick = () => handleNumberClick('6')
document.getElementById('seven').onclick = () => handleNumberClick('7')
document.getElementById('eight').onclick = () => handleNumberClick('8')
document.getElementById('nine').onclick = () => handleNumberClick('9')

document.getElementById('plus').onclick = () => handleOperatorClick('+')
document.getElementById('minus').onclick = () => handleOperatorClick('-')
document.getElementById('multiply').onclick = () => handleOperatorClick('*')
document.getElementById('share').onclick = () => handleOperatorClick('/')

document.getElementById('submit').onclick = calculateResult
document.getElementById('clear').onclick = clearInput

// Обработчик для кнопки "C" (очистка всего результата)
