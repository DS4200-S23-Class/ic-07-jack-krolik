/*
D3 Class Demo 1
Prof. Mosca 
Modified: 02/13/2023
*/

const FRAME_HEIGHT = 1000;
const FRAME_WIDTH = 1000;
const MARGINS = {left: 100, right: 100, top: 100, bottom: 100};


const data2 = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis3")
    .append("svg")
    .attr("height", FRAME_HEIGHT)
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame");

// Scaling functions
const MAX_Y = d3.max(data2, (d) => {
    return d;
})

// scale function
const Y_SCALE = d3.scaleLinear()
    .domain([0, (MAX_Y + 10000)])
    .range([0, VIS_HEIGHT]);

FRAME3.selectAll("points")
    .data(data2)
    .enter()
    .append("circle")
    .attr("cx", MARGINS.left)
    .attr("cy", (d) => {
        return (Y_SCALE(d) + MARGINS.top)})
    .attr("r", 20)
    .attr("class", "point");

// add an axis
FRAME3.append("g")
    .attr("transform", "translate(" + MARGINS.left + "," + (VIS_HEIGHT + MARGINS.top + ")"))
    .call(d3.axisBottom(Y_SCALE).ticks(4))
    .attr("font-size", "20px");


















































