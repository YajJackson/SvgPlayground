const paper = Snap()

const max_x = window.innerWidth
const max_y = window.innerHeight

// move stuff
const move = function(dx,dy) {
  this.attr
  ({
      transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
  });
}
const moveBack = (target) => {
  target.attr
  ({
      transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [150, 150]
  });
}
const start = function() {
  this.data('origTransform', this.transform().local )
}
const stop = function() {
  console.log('finished dragging')
}
const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
}

//check click type
const isRightClick = function(e){
  e = e || window.event;
  return 'which' in e ? e.which == 3 : 'button' in e ? e.button == 2 : false
}

// create stuff
const createNode = (x, y, r) => {
  c = paper.circle(x, y, r)
  c.attr({ class:'node draggable', id: c.id}).drag(move, start, stop)
}

$('body').bind('mouseup', '.node', (e)=>{ 
  node = e.target
  radius = parseInt(node.getAttribute('r'))
  matrix = node.getAttribute('transform').split('').slice(0, -1).join('').split(',').slice(-2).map(i=> parseInt(i));
    
  x_pos_start = parseInt(node.getAttribute('cx'))
  y_pos_start = parseInt(node.getAttribute('cy'))

  x_pos_end = parseInt(node.getAttribute('cx')) + matrix[0]
  y_pos_end = parseInt(node.getAttribute('cy')) + matrix[1]

  isRightClick(e) ? createNode(x_pos_end, y_pos_end + radius*2, radius/1.5) : null
  
})

// test stuff
createNode(max_x/2, 100, 100)