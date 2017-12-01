var paper = Snap()

x = window.innerWidth
y = window.innerHeight

var l1 = paper.line(x, y, x, y);
var l2 = paper.line(x, y-50, x, y-50)


function animateL1() {
  l1.attr({
    stroke: 'blue',
    strokeWidth: 3,
    strokeDasharray: 400
  })

  l1.animate({x2: 0, y2: 0, strokeDasharray: '0px'}, 3000, mina.easein, animateL1)
}

function animateL2() {
  l2.attr({
    stroke: 'red',
    strokeWidth: 3,
    strokeDasharray: 0
  })

  l2.animate({x2: 0, y2: -50, strokeDasharray: '400px'}, 3000, mina.easeout, animateL2)
}

animateL1()
animateL2()