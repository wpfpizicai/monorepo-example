import graphGenerator from '../src/generator';
import render from '../src/render';
const ITERATIONS_COUNT = 10000;
let nodes = [];
let links = [];
var graphData = graphGenerator.complete(10);
var graphData1 = graphGenerator.ladder(20)
var myrender = render(graphData1);
myrender.run();


// var layout = forcelayout(graph);
// for (var i = 0; i < ITERATIONS_COUNT; ++i) {
//   layout.step();
// }
// graph.forEachNode(function(node) {
//   console.log(layout.getNodePosition(node.id));
//   // Node position is pair of x,y coordinates:
//   // {x: ... , y: ... }
// });
