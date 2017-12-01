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
var start = function() {
  this.data('origTransform', this.transform().local )
}
var stop = function() {
  this.undrag()
  console.log('finished dragging')
}

// create stuff
const createNode = (x, y, r) => {
  c = paper.circle(x, y, r)
  c.attr({ class:'node draggable', id: c.id}).drag(move, start, stop)
  $('.node').mouseup((e)=>{
    node = e.target
    radius = parseInt(node.getAttribute('r'))
    matrix = node
              .getAttribute('transform')
              .split('').slice(0, -1).join('').split(',').slice(-2)
              .map(i=> parseInt(i))

    x_pos_end = parseInt(node.getAttribute('cx')) + matrix[0]
    y_pos_end = parseInt(node.getAttribute('cy')) + matrix[1]

    // console.log(`start: ${x_pos_start} , ${y_pos_start}`)
    console.log(`start: ${x_pos_end} , ${y_pos_end}`)
    createNode(x_pos_end, y_pos_end + radius*2, radius/1.5)
  })
}

// test stuff
createNode(max_x/2, max_y/2, 100)