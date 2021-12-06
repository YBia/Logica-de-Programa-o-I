<script>
{
    var x = 20;
    var y = 150;
    var igual = 192;
    var zero = 0;
    var linha1 = 237;
    var linha2 = 123;
    var luaGrande = 160;
    var xPos = 500;
    var yPos =-100;
    var xPos2 = xPos;
    var yPos2 = yPos;
    var starWidth = 12;
    var starHeight = 12;
    var comprimentoC= 66;
    var comprimentoC2 = comprimentoC/3;
    var comprimentoC3 = comprimentoC;
    var xPos2b = xPos;
    var yPos2b = yPos;
    var xPos3 = -1000;
    var yPos3 =-1000; 

  draw= function() {
    { background( 13, 9, 59);
       // Estrelas
       noStroke(); // Lado:esquerdo para direito
     fill(255, 255, 255);
  ellipse(x+54,x+27,7,2);
  ellipse(x-212,x+33,7,2);
  ellipse( x-157, x+47,7,2);
  ellipse( x-79,x+60,7,2);
  ellipse(x-14,x+22,7,2);
  ellipse(x- 117,x-59,7,2);
  ellipse( x-1,x-20,7,2);
  ellipse( x-140,x+20,7,2);
  
  // Lado: direito para esquerdo
  ellipse(364,x+48,7,2);
  ellipse(329,x+22,7,2);
  ellipse(314,x+67,7,2);
  ellipse(329,x+116,7,2);
  ellipse(234,x+88,7,2);
  ellipse(381,x+166,7,2);
  ellipse(375,x+130,7,2);
  ellipse(206,x+28,7,2);
  ellipse(428,x+88,7,2);
  ellipse(430,x+166,7,2);
  ellipse(500,x+130,7,2);
  ellipse(510,x+28,7,2);
     // Mais
      ellipse(y+36,x+10,7,2);
      ellipse(y-10,x-9,7,2);
      ellipse(x+58,x-9,7,2);
      ellipse(y+64,x-13,7,2);
      ellipse(y+95,x+8,7,2);
      ellipse(y+64,x+28,7,2);
      ellipse(y+95,x-15,7,2);
      ellipse(y+95,x+7,7,2);
      ellipse(y+161,x-6,7,2);
   
    x = x+0.500;
    y = y+0.500 ;}
   
    xPos-=3;
    yPos+=3;
    xPos2-=2.7;
    yPos2+=2.7;
    xPos2b -=2.6;
    yPos2b +=2.6;
    xPos3 += 4;
    yPos3 += 4;
    starHeight=starHeight*0.888;
    starWidth= starWidth*0.888;
    comprimentoC += 0.25;
    comprimentoC2 += 0.5;
    comprimentoC3 += 0.15;
 
   //Lua
 {fill(201, 201, 201);
  ellipse(luaGrande +33, luaGrande -50, luaGrande + 69, luaGrande+74);
 fill(232, 232, 225);
    ellipse(luaGrande +48,luaGrande - 53, luaGrande +88,luaGrande+66);
 fill(135, 133, 127);
   {ellipse(277,32,6,8);
    ellipse(305,63,6,8);
    ellipse(318,110,6,8);
    ellipse(318,82,6,8);
    ellipse(262,145,6,8);
    ellipse(301,93,6,8);
    ellipse(262,116,6,8);
    ellipse(289,168,6,8);
    ellipse(256,93,6,8);
    ellipse(248,192,6,8);
    ellipse(244,0,6,8);
    ellipse(262,205,6,8);
    ellipse(289,134,6,8);
    ellipse(115,179,6,8);
    ellipse(133,144,6,8);
    ellipse(141,171,6,8);
    ellipse(179,211,6,8);
    ellipse(84,109,6,8);
    ellipse(103,150,6,8);
    ellipse(181,152,6,8);
    ellipse(204,171,6,8);
    ellipse(220,211,6,8);}
    
 fill(13,9,59);
    ellipse(luaGrande +3, luaGrande -75,luaGrande +13, luaGrande-21);}
      //Estrelas C.
    fill(255,246,125);
 {
   ellipse(xPos,yPos, starWidth,starHeight); 
   triangle(xPos+2,yPos+2,xPos-2,yPos-2,xPos+comprimentoC,yPos-comprimentoC);//Estrela Cadente 01
   
   ellipse(xPos+200,yPos-300, starWidth,starHeight); 
   triangle(xPos+202,yPos-298,xPos+198,yPos-302,xPos+200+comprimentoC2,yPos-300-comprimentoC2);//Estrela Cadente 02
   
   ellipse(xPos2+150,yPos2-275, starWidth,starHeight); 
   triangle(xPos2+152,yPos2-273,xPos2+148,yPos2-277,xPos2+150+comprimentoC2,yPos2-275-comprimentoC2);//Estrela Cadente 03
   
   ellipse(xPos2b+250,yPos2b-280,starWidth,starHeight);
   triangle(xPos2b+252,yPos2b-278,xPos2b+248,yPos2b-282,xPos2b+250+comprimentoC2,yPos2b-280-comprimentoC2); //Estrela Cadente 04
   
   ellipse(xPos3,yPos3,starWidth,starHeight);
   triangle(xPos3-3,yPos3+3,xPos3+3,yPos3-3,xPos3-comprimentoC3,yPos3-comprimentoC3);//Estrela Cadente 05
 }
   
   fill(zero);
    //Base_Chão
   rect(1,355,396,43,-7);
   
   // Casa
 fill(zero);
  rect(74,187,248,170,62);
  rect(263,185,48,-61,48);
  triangle(42,igual,200,122,354,igual);
  
   //Telhado
 fill(zero);
 rect(59,183,48,20,48);
 rect(292,183,48,20,48);
   
    //Janela
 { //Janela Esquerda
   fill(173,130,10);
   rect(95,212,54,68,16);
   strokeWeight(5);
   stroke(zero);
   line(linha2,280,linha2,214);
   line(97,linha1+10,150,linha1+10);
   
  //Janela Direita
   fill(173,130,10);
   rect(252,210,57,73,16);
   strokeWeight(5);
   stroke(zero);
   line(linha1+45,279,linha1+45,215);
   line (311,linha1+10, 253,linha1+10);}
   
   strokeWeight(10);
   stroke(zero);
   line(5,327,398,327);
   line(5,347,398,347);
   
   noStroke();
   fill(zero);
   rect(-8,309,15,63,96);
   rect(15,309,15,63,96);
   rect(41,309,15,63,96);
   rect(65,309,15,63,96);
   rect(92,337,13,21,96);
   
   rect(379,309,15,63,96);
   rect(354,309,15,63,96);
   rect(328,309,15,63,96);
   rect(298,337,13,21,96);
 }

</script>