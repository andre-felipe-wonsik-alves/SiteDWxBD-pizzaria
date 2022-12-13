function deslizar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("menu_icon").classList.toggle("active");
}
function deslizar2(){
    document.getElementById("contato").classList.toggle("active")
}

function calculaTotal(){
    let qnt_pizza1 = Number(document.getElementById("pizza1").value)
    let qnt_pizza2 = Number(document.getElementById("pizza2").value)
    let qnt_pizza3 = Number(document.getElementById("pizza3").value)

    let total = document.getElementById("resultado")

    let soma = qnt_pizza1*10 + qnt_pizza2*20 + qnt_pizza3*30

    total.innerHTML = "O valor total é: " + soma
}
