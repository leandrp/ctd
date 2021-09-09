let json = {
  "nome" : "Leandro",
  "sobrenome" : "Ferreira",
  "idade" : 25,
}

console.log(json);

let jsonX = 
{
  "nome":"Christopher",
  "profissao":"Programador",
  "idade":25,
  "linguagens":["PHP","Javascript","Dart"],
  "disponibilidadeParaViajar":true,
  "ramoProfissional": {
      "anosDeExperiencia": 12,
      "nivel": "Senior"
  }
}

console.log(jsonX);


let redesSociais = 
{
  "nome":"Leandro",
  "apelido":"Ferreira",
  "idade":32,
  "usuario":"leandr:p",
  "email":"ferreira.leandro.p@gmail.com",
}

console.log(redesSociais);


let carro = 
{
  cor:"Branco",
  andar: function(velocidade) {
    return "Andando na velocidade "+velocidade;
  }
}

console.log(carro.andar("130k"));


let computador = 
{
  hardware:"i7 oitava geração",
  rodar: function(aplicativo) {
    return "Sim ele consergue rodar o aplicativo "+aplicativo;
  }
}

console.log(computador.rodar("Visual Studio Code"));


let PessoaHumana=
{
  nome:"Janaina",
  idade:30,
  sexo:"feminino",
  altura:1.80,
  peso:80,
  imc: function(peso,altura){
    return  peso / (altura * altura);
  }
}

console.log(PessoaHumana.imc(80,1.80));


let PessoaHumana = 
{
  nome:"Janaina",
  idade:30,
  sexo:"feminino",
  imc: function(){
      return  this.peso / (this.altura * this.altura);
  }
}

PessoaHumana.peso = 90;
PessoaHumana.altura = 1.80;

console.log(PessoaHumana.imc());

let statusCarro = 
{
  marca:"Ferrari",
  tipo: function(){
      return  "Esta é uma "+this.marca+" "+this.cor;
  }
}

statusCarro.cor = "Vermelha";

console.log(statusCarro.tipo());
