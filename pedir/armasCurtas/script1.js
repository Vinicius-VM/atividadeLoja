function enviar(){
    var mensagem = "Olá, sou seu cliente e resolvi fazer a aquisição da berretta M9. Me mande a chave pix para efeturar a compra.";


    var custo = 750.00;

    var numeroTel = "5541997637207";
    var linkWhatsapp = "https://wa.me/" + numeroTel + "?text= " + mensagem;
    window.open(linkWhatsapp, "_blank");
}

