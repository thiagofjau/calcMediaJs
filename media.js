

function calcular() {

    let notaUm = parseFloat(document.getElementById("primeiraNota").value);
    let notaDois = parseFloat(document.getElementById("segundaNota").value);

    let media = (notaUm + notaDois) / 2;

    if (media < 6) {
        document.getElementById("resultado").innerHTML = "Reprovado! Sua média é " + media;
    } else {
        if (media >= 7 && media <= 8) {
            document.getElementById("resultado").innerHTML = "7/8 aprovado " + media;
        } else {
            if (media === 9) {
                document.getElementById("resultado").innerHTML = "9 aprovado Sua média é " + media;
            } else {
                if (media === 10) {
                    document.getElementById("resultado").innerHTML = "10 aprovado Sua média é " + media;
                } else {
                    if (media > 10) {
                        document.getElementById("resultado").innerHTML = "Valor inválido";
                    }
                }
            }
        }
    }
}

