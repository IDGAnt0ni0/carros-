class Forms{
  constructor(){
    
   // this.input=createInput("carros"); 
    this.button1=createButton("Toreto");
    this.button2=createButton("Daniel");
    this.button3=createButton("La roca");
    this.button4=createButton("Joncina");
    this.greeting= createElement('h1');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
  }  
  hide(){
    this.greeting.hide();
    //this.input.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.title.hide();
  }
  display(){
   this.title.html("Juego de Carreras");
   this.title.position(displayWidth/2-50,0);

    this.button1.position(displayWidth/2-20,displayHeight/2-150); 
   this.button2.position(displayWidth/2-20,displayHeight/2-80); 
   this.button3.position(displayWidth/2-20,displayHeight/2-10); 
   this.button4.position(displayWidth/2-20,displayHeight/2+60); 

   this.button1.class("playButton");
   this.button2.class("playButton");
   this.button3.class("playButton");
   this.button4.class("playButton");

   this.reset.position(displayWidth-100,20);

  // this.historia.html("Un dia señor pierde a su papa y le deja sus cosas y ese señor se llama "/n);
//this.historia.position(displayWidth/2-35,0);

 //  this.input.position(displayWidth/2-40,displayHeight/2-80);
  
  
   
   this.button1.mousePressed(()=>{
  // this.input.hide();
   this.button1.hide();
   this.button2.hide();
   this.button3.hide();
   this.button4.hide();
   player.name = "Toreto";
   playerCount+= 1 
   player.index=playerCount;
   player.update();
   player.updateCount(playerCount);
   this.greeting.html("Hola "+player.name+" ( ͠❛ ͜ʖ ͡❛)✊");
   this.greeting.position(displayWidth/2-70,displayHeight/4);  
   //gameState=1;
   }) 
   this.button2.mousePressed(()=>{
    // this.input.hide();
     this.button1.hide();
     this.button2.hide();
     this.button3.hide();
     this.button4.hide();
     player.name ="Daniel";
     playerCount+= 1 
     player.index=playerCount;
     player.update();
     player.updateCount(playerCount);
     this.greeting.html("Hola "+player.name+"( ͠❛ ͜ʖ ͡❛)✊");
     this.greeting.position(displayWidth/2-70,displayHeight/4);  
     }) 
     this.button3.mousePressed(()=>{
      // this.input.hide();
       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       player.name = "La roca";
       playerCount+= 1 
       player.index=playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hola "+player.name+"( ͠❛ ͜ʖ ͡❛)✊");
       this.greeting.position(displayWidth/2-70,displayHeight/4);  
       }) 
       this.button4.mousePressed(()=>{
        // this.input.hide();
         this.button1.hide();
         this.button2.hide();
         this.button3.hide();
         this.button4.hide();
         player.name = "Joncina";
         playerCount+= 1 
         player.index=playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Hola "+player.name+"( ͠❛ ͜ʖ ͡❛)✊");
         this.greeting.position(displayWidth/2-70,displayHeight/4);  
         }) 
        

   this.reset.mousePressed(()=>{
     player.updateCount(0);
     game.update(0);
     Player.updateCarsAtEnd(0);
   })  
  }
}