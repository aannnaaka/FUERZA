class Suelo{
constructor(x, y, w, h){
let opciones = {
  isStatic: true
}


this.body = Bodies.rectangle(x,y,w,h,opciones);
this.w= w;
this.h= h;
World.add(world,this.body);
}

mostrar(){
var pos= this.body.position;
push();
rectMode(CENTER);
stroke(255);
fill(127);
rect(pos.x,pos.y,this.w,this.h)
pop();
}


}

