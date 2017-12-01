const paper = Snap()

const max_x = window.innerWidth
const max_y = window.innerHeight

const createNode = (x, y, r) => {
  c = paper.circle(x, y, r)
  c
    .attr({ class:'node draggable', id: c.id })
    .drag(move, start, stop)
}

const move = function(dx,dy) {
  this.attr
  ({
      transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
  });
}
var start = function() {
  this.data('origTransform', this.transform().local )
}
var stop = function() {
  // this.undrag()
  console.log('finished dragging')
}

createNode(max_x/2, max_y/2, 100)
createNode(150, 150, 50)

$('.node').click((e)=>{
  node = e.target
  x_pos = node.getAttribute('cx')
  y_pos = node.getAttribute('cy')

})