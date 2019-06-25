import graphGenerator from '../src/generator';
import render from '../src/render/fabric';
let nodes = [];
let links = [];
var graphData = graphGenerator.complete(8);
var graphData1 = graphGenerator.ladder(10)
var myrender = render(graphData);
myrender.run();

