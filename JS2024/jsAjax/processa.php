<?php

    //pegando os parametros por get (pela url)
    $conteudo1 = $_GET['t1']; 
    $conteudo2 = $_GET['t2'];


    $resposta = $conteudo1 . " -- " . $conteudo2; //concatenando o termo 1 e 2 com "--"
    print $resposta; //printando a resposta

?>