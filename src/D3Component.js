import * as d3 from "d3";
import { svg } from "d3";
import React, { useEffect } from "react";

function D3Component() {
    const width = 500;
    const height = 500;
    const radius = 6;
    const step = radius * 2;
    const theta = Math.PI * (3 - Math.sqrt(5));
    const data = Array.from({ length: 2000 }, (_, i) => {
        const radius = step * Math.sqrt(i += 0.5), a = theta * i;
        return {
            x: width / 2 + radius * Math.cos(a),
            y: height / 2 + radius * Math.sin(a)
        };
    })

    const svgRef = React.useRef(null);
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const g = svg.append("g")
            .attr("cursor", "grab");

        g.selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", ({ x }) => x)
            .attr("cy", ({ y }) => y)
            .attr("r", radius)
            .attr("fill", (d, i) => d3.interpolateRainbow(i / 360))
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        svg.call(d3.zoom()
            .extent([[0, 0], [width, height]])
            .scaleExtent([1, 8])
            .on("zoom", zoomed));

        function dragstarted() {
            console.log("AAAAAAAAAAA")
            d3.select(this).raise();
            g.attr("cursor", "grabbing");
        }

        function dragged(event, d) {
            d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
        }

        function dragended() {
            g.attr("cursor", "grab");
        }

        function zoomed({ transform }) {
            console.log("ZOOM AND DRAG?")
            g.attr("transform", transform);
        }

        return svg.node();
    }, [data])
    return (
        <svg ref={svgRef} width={window.innerWidth} height={window.innerHeight} />
    )
}

export default D3Component;