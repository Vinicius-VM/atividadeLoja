function enviar(){
    var mensagem = "Olá, sou seu cliente e resolvi fazer a aquisição da Benelli M4. Me mande a chave pix para efeturar a compra.";


    let dataAtual = new Date();
    var custo = "São R$ 2500.00 ao todo";

    var numeroTel = "5541997637207";
    var linkWhatsapp = "https://wa.me/" + numeroTel + "?text= " + mensagem + " - " + "Data de solicitação: " + dataAtual + " - "  + custo;
    window.open(linkWhatsapp, "_blank");
}

