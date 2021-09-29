class End{
    constructor(){
        this.logoImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjpp13kBq1EEHY4hS-9PVwE1EAoH2WU2e_w&usqp=CAU";
        this.logo=createImg(this.logoImg);
        //this.playButton=createButton("Jugar");
        this.historia=createElement('h1');
    }
    hideElements(){
        this.logo.hide();
       // this.playButton.hide();
        this.historia.hide();
    }
    setElementPosition(){
        this.historia.position(width/2.3-200,height/2-100);
        this.historia.html("Lugar "+player.rank);
        this.logo.position(width/1.9,170);
    // this.playButton
       // this.playButton.position(width/2.3,height/2+100);
        //this.playButton.class("playButton");
    }
    
    display(){
        this.setElementPosition();
       
    } 
}