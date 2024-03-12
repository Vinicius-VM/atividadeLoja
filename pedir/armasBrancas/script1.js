function enviar(){
    var mensagem = "Olá, sou seu cliente e resolvi fazer a aquisição do bastão tático. Me mande a chave pix para efeturar a compra.";


    var custo = "São R$ 102.00 ao todo";

    var numeroTel = "5541997637207";
    var linkWhatsapp = "https://wa.me/" + numeroTel + "?text= " + mensagem + " - " + custo;
    window.open(linkWhatsapp, "_blank");
}

