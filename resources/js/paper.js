//Init Function
var paper = function() {
  var vwtWidth = window.innerWidth;
  var vwtHeight = window.innerHeight;
  var cns = document.createElement("canvas");
  cns.width = vwtWidth;
  cns.height = vwtHeight;
  document.body.appendChild(cns);
  var ctx = cns.getContext("2d");
  var angle = 0;
  var direction = "clockwise";
  
  window.onmousemove = function(ev) {
    if (ev.clientX < vwtWidth / 2) {
      direction = "clockwise";
    } else if (ev.clientX > vwtWidth / 2) {
      direction = "anticlockwise";
    }
  };
  
  var gesture = function() {
    if (direction == "clockwise") {
      angle++;
    } else if (direction == "anticlockwise") {
      angle--;
    }
  };

  //Particles Constructor
  var particles = new Array();
  var Particle = function(pathRadius, particleRadius) {
    this.pathRadius = Math.round(Math.random() * 500);
    this.particleRadius = Math.round(Math.random() * 2);
    this.pathX = Math.round(Math.random() * vwtWidth);
    this.pathY = Math.round(Math.random() * vwtHeight);
    this.hue = "rgba(255,255,255," + Math.random().toFixed(1) + ")";
  };
  for (var i = 0; i < 1500; i++) {
    particles[i] = new Particle();
  }

  //Paint the Canvas
  function paint(param) {
    var x =
      particles[param].pathX +
      particles[param].pathRadius * Math.cos(angle / 180 * Math.PI) -
      particles[param].pathRadius / 2;
	  
    var y =
      particles[param].pathY +
      particles[param].pathRadius * Math.sin(angle / 180 * Math.PI) -
      particles[param].pathRadius / 2;
	  
    ctx.beginPath();
    ctx.arc(x, y, particles[param].particleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = particles[param].hue;
    ctx.closePath();
    ctx.fill();
  }

  //Generating Frames
  var animate = function() {
    ctx.fillStyle = "#030121";
    ctx.fillRect(0, 0, vwtWidth, vwtHeight);
    
	for (var j = 0; j < 1500; j++) {
      paint(j);
    }
    
	window.requestAnimationFrame(animate);
    gesture();
  };
  
  animate();
};

//Initialization
window.addEventListener("load", paper);
