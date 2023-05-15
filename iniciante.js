/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ] A soma dos dois números;
- [ ] A subtração dos dois números;
- [ ] A multiplicação dos dois números;
- [ ] A divisão dos dois números;
- [ ] O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ] Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ] Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

  */

alert('Olá, vamos fazer cáculos para você!')

let numberOne = prompt('Insira um número.')
let numberTwo = prompt('Insira o segundo número.')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A divisão dos dois números é: ' + div)
alert('O Resto da divisão dos dois números é: ' + restDiv)

if (sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
}

if (numberOne === numberTwo) {
  alert(
    `Os dois números inseridos são iguais.Número ${numberOne} e ${numberTwo}.`
  )
} else {
  alert(
    `Os dois números inseridos são diferentes.Número ${numberOne} e ${numberTwo}.`
  )
}
