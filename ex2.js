var total = prompt("Valor total da conta:");
var pessoas = prompt("Quantas pessoas vão pagar?");
total = parseFloat(total);
pessoas = parseInt(pessoas);
var porPessoa = total / pessoas;
alert("Cada pessoa vai pagar: R$ " + porPessoa);
