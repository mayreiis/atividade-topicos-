var preco = prompt("Digite o preço do produto:");
preco = parseFloat(preco);
var avista = preco * 0.9;
var parcelado = preco / 3;
alert("À vista: R$ " + avista + "\nOu 3x de R$ " + parcelado);
