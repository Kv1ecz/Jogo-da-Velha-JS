var jogador = true;
var partida = true;
var slot    = document.getElementsByClassName("slot");
var matriz  = [[0,0,0],[0,0,0],[0,0,0]];
var jogadas = 0;
var msg     ="";
var horizontal;
var vertical;
var diagonal1;
var diagonal2;

function insereJogada(valor,l,c){
   var index  = parseInt(valor); 
   var linha  = parseInt(l);
   var coluna = parseInt(c);
   
   
    jogadas+=1;
    if(partida==true){
        if(slot[index].value == ""){
            if(jogador){
                slot[index].value = "X";
                slot[index].setAttribute("jogada","3");
                document.getElementById("turn").textContent = "Jogando: Jogador O";
                jogador = !jogador;
            }else{
                slot[index].value = "O";
                slot[index].setAttribute("jogada","5");
                document.getElementById("turn").textContent = "Jogando: Jogador X";
                jogador = !jogador;
            }
            
        }
        atribui(index,linha,coluna);
        verifica();
    }
    
}

function atribui(index,l,c){
    matriz[l][c]=parseInt(slot[index].getAttribute("jogada"));
}

function verifica(){
    for(var i=0;i<3;i++){
        horizontal=0;
        vertical  =0;
        diagonal1 =0;
       
        for(var j=0;j<3;j++){
           horizontal+= matriz[i][j];
           vertical  += matriz[j][i];
           diagonal1 += matriz[j][j];
           diagonal2  = matriz[0][2] + matriz[1][1] + matriz[2][0];

           if(horizontal==9){
               msg = "O jogador X é o vencedor!";
               jogadas = 9;
           }else if(horizontal==15){
               msg = "O jogador O é o vencedor!"; 
               jogadas = 9;
           }

           if(vertical==9){
               msg = "O jogador X é o vencedor!";
               jogadas = 9;
           }else if(vertical==15){
               msg = "O jogador O é o vencedor!";
               jogadas = 9;
           }

           if(diagonal1==9){
               msg = "O jogador X é o vencedor!";
               jogadas = 9;
           }else if(diagonal1==15){
               msg = "O jogador O é o vencedor!";
               jogadas = 9;
           }

           if(diagonal2==9){
                msg = "O jogador X é o vencedor!";
                jogadas = 9;
            }else if(diagonal2==15){
                msg = "O jogador O é o vencedor!";                
                jogadas = 9;
            }
           
        }
    }

    if((jogadas==9)&&(msg!="")){
        document.getElementById("turn").textContent = msg;
        partida = false;
    }else if((jogadas==9)&&(msg=="")){
        document.getElementById("turn").textContent = "EMPATE!";
        partida = false;
    }
}

function reset(){
    window.location.reload();
}