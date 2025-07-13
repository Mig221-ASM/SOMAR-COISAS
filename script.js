function calcular(){
   let num1 = document.getElementById('num1')
   let num2 = document.getElementById('num2')

   let n1 = Number(num1.value)
   let n2 = Number(num2.value)

   let soma = n1 + n2

   let res = document.getElementById('res')

   res.innerHTML = `O resultado do seu cálculo foi de ${soma}`
}