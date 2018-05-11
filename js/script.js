 $(window).load(function () {      
        $(".loader").delay(1500).fadeOut("slow"); //retire o delay quando for copiar!       
       
        $("#tudo_page").toggle("fast");
        });

        $(document).ready(function() {
            // Exibe ou oculta o botão
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.voltar-ao-topo').fadeIn(200);
                } else {
                    $('.voltar-ao-topo').fadeOut(200);
                }
            });
            
            // Faz animação para subir
            $('.voltar-ao-topo').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, 300);
            })
        });