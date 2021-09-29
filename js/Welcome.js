class Welcome{
    constructor(){
        this.logoImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjpp13kBq1EEHY4hS-9PVwE1EAoH2WU2e_w&usqp=CAU";
        this.logo=createImg(this.logoImg);
        this.playButton=createButton("Jugar");
        this.historia=createElement('h3');
    }
    hideElements(){
        this.logo.hide();
        this.playButton.hide();
        this.historia.hide();
    }
    setElementPosition(){
        this.historia.position(width/8,height/2-20);
        this.historia.html("habia una vez un señor que se murio su papa y le dejo todas sus cosas y entre esas cosas habia un carro y se llamba'    ',y como eran muy pobres el muchacho y fua a competir en carreras para ganar dinero");
        this.logo.position(width/1.9,170);
    // this.playButton
        this.playButton.position(width/2.3,height/2+100);
        this.playButton.class("playButton");
    }
    onPress(){
        this.playButton.mousePressed(()=>{
            this.hideElements();
            forms=new Forms()
            forms.display();
        });
    }
    display(){
        this.setElementPosition();
        this.onPress();
    }
}