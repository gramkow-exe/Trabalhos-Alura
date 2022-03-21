tamanho = int(input("Digite o numero de linhas: "));

x = "x";
o = "o";

for i in range(tamanho):
    print((o * i) + x + (o * (tamanho-(i+1))));  