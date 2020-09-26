class Box {
    constructor (x, y, width, height) {
        this.Body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        fill('red')
        stroke('red')
        rect(0,0, this.width , this.height);
            
   }
};