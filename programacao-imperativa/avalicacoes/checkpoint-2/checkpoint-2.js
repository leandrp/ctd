console.log('------ Exercício 01 ------ Loop de Números Pares com For');
function loopDePares(numero){
  for(let i = 0; i<=100; ++i){
      if((numero+i)%2==0){
          console.log("O número "+(numero+i)+" é par")
      }else{
    };
  };

};

loopDePares(1);

console.log('------ Exercício 02 ------ Loop de Números Impares com For');
function loopDeImpares(numero, palavra){
  for(let i = 0; i<=100; ++i){
      if((numero+i)%2!=0){
          console.log(palavra);
      };
  };

};
loopDeImpares(12, "Eu sou umas string, pois a soma dos numero é impar");

console.log('------ Exercício 03 ------ Função Soma com Reduce');
let numbers = [5, 2, 18, 3, 7]
let soma = numbers.reduce(function (acumulador, numbers) {
  console.log(acumulador, numbers)
  return acumulador + numbers
})
console.log('Soma de todos os valores acumulados = ' + soma)

console.log('------ Exercício 04 ------ Função newArray');
function newArray(tamanho){
  let array = [];
  for(let i = 1; i<=tamanho; ++i){
      array.push(i);
  };
  return array;
};

let auxliar = newArray(5);
console.log(auxliar);


console.log('------ Exercício 05 ------ Função Split');
function split(string){
  let array2 = [];
  for(let i = 0; i<string.length; ++i){
      array2.push(string[i]);
  };
  return array2;
};

let valor = split("SEPARAR");
console.log(valor);


console.log('------ Exercício 06 ------ Movendo os Zeros para o final');
const arr = ["false", 5, 0, 1, 0, -3, "pipoca", 0, 4, 6];
const moveAllZero = (arr = []) => {
   const res = [];
   let currIndex = 0;
   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      if(el === 0){
         res.push(0);
      }else{
         res.splice(currIndex, undefined, el);
         currIndex++;
      };
   };
   return res;
};
console.log(moveAllZero(arr));

console.log('------ Exercício 07 ------ Lidando com dois arrays');
function arrayHandler(arr1, arr2) {
   for(i in arr1) {
       console.log(`Saiba que ${arr1[i]} ${arr2[i]}`);
   }
}

let arr1 = ['Eu sou 1', 'Você é o 1'];
let arr2 = ['Você é o 2', 'Eu sou 2'];

arrayHandler(arr1, arr2)

console.log('------ Exercício 08 ------ Arrays de objetos');
function arrayObjects(num) {
   let arr = [];
   for(let i = 1; i <= num; i++) {
       arr.push({valor: i});
   }
   console.log(arr);    
}

arrayObjects(10);

console.log('------ Exercício 09 ------ Arrays de objetos 2');
function arrayObjectsTwo(num, palavra) {
   let arr = [];
   for(let i = 1; i <= num; i++) {
       arr.push({[palavra]: i})
   }
   console.log(arr);       
}

arrayObjectsTwo(5, 'olá');
arrayObjectsTwo(3, 'tchau');
