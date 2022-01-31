 
  random = (min, max)=> Math.random() * (max - min) + min;
  
  
  class Droplet{
    
    constructor(w, h){
      this.init();
      this.w = w;
      this.h = h;
    }
    
    init(){
      this.x = random(0, this.w);
      this.y = random(-100, -10);
      this.speed = random(0.5, 8);
      this.width = random(0.5, 2);
      this.height = random(5, 15);
      
    }
    
    
    update(){
      this.y += this.speed;
      
      if (this.y > this.h){
        this.init();
      }
    }
    
  };
  
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  
  const drops_count = 100;
  var drops = []
  
  // initilize drops
  for(let i = 0; i < drops_count; i++){
    drops[i] = new Droplet(600, 1000);
  }
  
  // draw elements on canvas
  draw = () => {
    
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // fill canvas with black color from top-left to bottom-right
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // color of drops
    context.fillStyle = "white"
    
    // create element of each droplet data
    for(let i = 0; i < drops_count; i++){ 
          context.fillRect(drops[i].x, drops[i].y, drops[i].width, drops[i].height);
     }
    context.fill();
    
  }
  
  // update canvas every 10 millisecond
  setInterval(()=>{
    draw();
    
    // update every drop
     for(let i = 0; i < drops_count; i++){
       drops[i].update()
      }
  }, 10)
  