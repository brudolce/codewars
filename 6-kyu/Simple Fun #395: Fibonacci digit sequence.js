function find(a,b,n){
  let str = a + '' + b;
  
  //aí Henrique, sua solução ta provavelmente suave. Aqui ta o pulo do macaco loco.
  let fdp = +(n+'').slice(-4);
  //Essa pirok aí em cima é reduz o numero de iterações pro loop, pega só os ultimos digitos de n.
  //n de 10^10 é impossiburu de sair rapido. Fui tentando slice de -3, -7, -5 e -4 saiu.
  //Normalmente kata de 5 kyu em JS que é kata de filho da puta, não katinha de 6kyu, tem sempre mutreta nos testes
  //ou caralhas matematicas que nao são de deus.
  //Já passei por outras situações que nem essa. É kata novo, se existir explicação matematica pra n
  //devem aumentar o kyu desse kata.
  
  while(str.length <= fdp) {
    str += +str.charAt(str.length-2) + +str.charAt(str.length-1);
  }
  return +str[fdp]
}
