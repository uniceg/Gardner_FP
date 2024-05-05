function clearResult() {
  document.getElementById('result').innerText = '0';
}

function appendToResult(value) {
  const resultElement = document.getElementById('result');
  if (resultElement.innerText === '0') {
    resultElement.innerText = value;
  } else {
    resultElement.innerText += value;
  }
}

function calculate() {
  const resultElement = document.getElementById('result');
  const result = eval(resultElement.innerText);
  resultElement.innerText = result;
}
