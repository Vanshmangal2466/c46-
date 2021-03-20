class FORM {
    constructor(easyarray,easyanswers) {
   this.button=createButton(' PLAY');
   this.EASY=createButton(' EASY');
   this.MEDIUM=createButton('MEDIUM');
   this.HARD=createButton(' HARD');
   this.SUBMIT=createButton('SUBMIT');
   this.easyarray=easyarray;
   this.easyanswers=easyanswers;
   this.input1=createInput("answer");
   this.input2=createInput("answer");
   this.input3=createInput("answer");
   this.input4=createInput("answer");
   this.input5=createInput("answer");}
    display(){
        this.Hide();
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.button.mousePressed(()=>{
         gamestate=1;   
         
        })

    }

displayoption(){
 this.EASY.show();
 this.MEDIUM.show();
 this.HARD.show();

    this.EASY.position(displayWidth/2,200);
 this.MEDIUM.position(displayWidth/2,300);
 this.HARD.position(displayWidth/2,400);
 this.button.hide();
 this.EASY.mousePressed(()=>{
gamestate=2;
 })
}
easymodule(){
this.EASY.hide();
this.MEDIUM.hide();
this.HARD.hide();
this.button.hide();
    this.input1.show();
    this.input2.show();
    this.input3.show();
    this.input4.show();
    this.input5.show();
    this.SUBMIT.show();
var dp=100;
for(var i in this.easyarray){
    image(this.easyarray[i],dp,300,150,150);
    dp=dp+200;


}
this.input1.position(100,500);
this.input2.position(300,500);
this.input3.position(500,500);
this.input4.position(700,500);
this.input5.position(900,500);
this.SUBMIT.position(550,550);
}
Hide(){
    this.EASY.hide();
    this.MEDIUM.hide();
    this.HARD.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.input5.hide();
    this.SUBMIT.hide();
}
}