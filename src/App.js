import root from './tree/root';
import { useEffect, useState } from 'react';
import React from 'react'
import * as d3 from "d3";

const treeData = {
  "name": "NEW YORK NY-May-04",
  "children": [
    {
      "name": "PHILADELPHIA PA-May-05",
      "children": [
        {
          "name": "MINNEAPOLIS MN-May-06",
          "children": [

            {
              "name": "SEATTLE WA-May-09",
              "children": [
                {
                  "name": "SEATTLE WA-May-12",
                  "children": []
                },
                {
                  "name": "MINNEAPOLIS MN-May-12",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-12",
                  "children": []
                },
                {
                  "name": "PHILADELPHIA PA-May-12",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-12",
                  "children": []
                }
              ]
            },
            {
              "name": "SAN FRANCISCO CA-May-09",
              "children": []
            },
            {
              "name": "LAS VEGAS NV-May-09",
              "children": [
                {
                  "name": "MINNEAPOLIS MN-May-12",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-12",
                  "children": []
                },
                {
                  "name": "SEATTLE WA-May-12",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-12",
                  "children": []
                },
                {
                  "name": "PHILADELPHIA PA-May-12",
                  "children": []
                }
              ]
            },
            {
              "name": "PHILADELPHIA PA-May-09",
              "children": [
                {
                  "name": "SEATTLE WA-May-11",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-11",
                  "children": []
                },
                {
                  "name": "MINNEAPOLIS MN-May-11",
                  "children": []
                },
                {
                  "name": "PHILADELPHIA PA-May-11",
                  "children": [
                    {
                      "name": "PHILADELPHIA PA-May-12",
                      "children": []
                    },
                    {
                      "name": "SEATTLE WA-May-12",
                      "children": []
                    },
                    {
                      "name": "MINNEAPOLIS MN-May-12",
                      "children": []
                    },
                    {
                      "name": "LAS VEGAS NV-May-12",
                      "children": []
                    },
                    {
                      "name": "SAN FRANCISCO CA-May-12",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "SAN FRANCISCO CA-May-11",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "SEATTLE WA-May-05",
      "children": [
        {
          "name": "PHILADELPHIA PA-May-10",
          "children": []
        },
        {
          "name": "MINNEAPOLIS MN-May-10",
          "children": [
            {
              "name": "SAN FRANCISCO CA-May-13",
              "children": []
            },
            {
              "name": "SEATTLE WA-May-13",
              "children": []
            },
            {
              "name": "PHILADELPHIA PA-May-13",
              "children": []
            },
            {
              "name": "LAS VEGAS NV-May-13",
              "children": []
            },
            {
              "name": "MINNEAPOLIS MN-May-13",
              "children": []
            }
          ]
        },
        {
          "name": "LAS VEGAS NV-May-10",
          "children": [
            {
              "name": "MINNEAPOLIS MN-May-13",
              "children": []
            },
            {
              "name": "SEATTLE WA-May-13",
              "children": []
            },
            {
              "name": "LAS VEGAS NV-May-13",
              "children": []
            },
            {
              "name": "SAN FRANCISCO CA-May-13",
              "children": []
            }
          ]
        },
        {
          "name": "SAN FRANCISCO CA-May-10",
          "children": [
            {
              "name": "LAS VEGAS NV-May-12",
              "children": [
                {
                  "name": "MINNEAPOLIS MN-May-13",
                  "children": []
                },
                {
                  "name": "SEATTLE WA-May-13",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-13",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-13",
                  "children": []
                }
              ]
            },
            {
              "name": "SEATTLE WA-May-12",
              "children": []
            },
            {
              "name": "PHILADELPHIA PA-May-12",
              "children": []
            },
            {
              "name": "MINNEAPOLIS MN-May-12",
              "children": []
            },
            {
              "name": "SAN FRANCISCO CA-May-12",
              "children": [
                {
                  "name": "LAS VEGAS NV-May-13",
                  "children": []
                },
                {
                  "name": "SEATTLE WA-May-13",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-13",
                  "children": []
                },
                {
                  "name": "MINNEAPOLIS MN-May-13",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "LAS VEGAS NV-May-05",
      "children": [
        {
          "name": "PHILADELPHIA PA-May-10",
          "children": []
        },
        {
          "name": "MINNEAPOLIS MN-May-10",
          "children": [
            {
              "name": "SAN FRANCISCO CA-May-13",
              "children": []
            },
            {
              "name": "SEATTLE WA-May-13",
              "children": []
            },
            {
              "name": "PHILADELPHIA PA-May-13",
              "children": []
            },
            {
              "name": "LAS VEGAS NV-May-13",
              "children": []
            },
            {
              "name": "MINNEAPOLIS MN-May-13",
              "children": []
            }
          ]
        },
        {
          "name": "SEATTLE WA-May-10",
          "children": [
            {
              "name": "PHILADELPHIA PA-May-12",
              "children": []
            },
            {
              "name": "MINNEAPOLIS MN-May-12",
              "children": []
            },
            {
              "name": "SEATTLE WA-May-12",
              "children": [
                {
                  "name": "SEATTLE WA-May-13",
                  "children": []
                },
                {
                  "name": "MINNEAPOLIS MN-May-13",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-13",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-13",
                  "children": []
                }
              ]
            },
            {
              "name": "LAS VEGAS NV-May-12",
              "children": []
            },
            {
              "name": "SAN FRANCISCO CA-May-12",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "SAN FRANCISCO CA-May-05",
      "children": [
        {
          "name": "SEATTLE WA-May-10",
          "children": [
            {
              "name": "PHILADELPHIA PA-May-12",
              "children": []
            },
            {
              "name": "MINNEAPOLIS MN-May-12",
              "children": []
            },
            {
              "name": "SEATTLE WA-May-12",
              "children": [
                {
                  "name": "SEATTLE WA-May-13",
                  "children": []
                },
                {
                  "name": "MINNEAPOLIS MN-May-13",
                  "children": []
                },
                {
                  "name": "SAN FRANCISCO CA-May-13",
                  "children": []
                },
                {
                  "name": "LAS VEGAS NV-May-13",
                  "children": []
                }
              ]
            },
            {
              "name": "LAS VEGAS NV-May-12",
              "children": []
            },
            {
              "name": "SAN FRANCISCO CA-May-12",
              "children": []
            }
          ]
        },
        {
          "name": "PHILADELPHIA PA-May-10",
          "children": []
        },
        {
          "name": "MINNEAPOLIS MN-May-10",
          "children": []
        }
      ]
    }
  ]
}

function App() {
  const [tree, setTree] = useState(treeData);
  const [buttonFlag, setFlag] = useState(false)
  const svgRef = React.useRef(null);

  var width, height;  
  const handleClick = () => {
      setFlag(!buttonFlag);
  }

  useEffect(() => {

    const treeDataBU = {
      name: '36-36-Thu, 05 May',
      children: [
        {
          name: '36-32-Fri, 06 May',
          children: [
            {
              name: '32-38-Mon, 09 May',
              children: [

                {
                  name: '38-36-Tue, 10 May',
                  children: [

                  ]
                },
                {
                  name: '38-32-Tue, 10 May',
                  children: [

                  ]
                },
                {
                  name: '38-39-Tue, 10 May',
                  children: [

                  ]
                },
                {
                  name: '38-69-Tue, 10 May',
                  children: [
                    {
                      name: '69-32-Thu, 12 May',
                      children: []
                    },
                    {
                      name: '69-69-Thu, 12 May',
                      children: []
                    },
                  ]
                },
              ]
            },
            {
              name: '32-69-Mon, 09 May',
              children: [
                {
                  name: '69-32-Tue, 10 May',
                  children: []
                },
                {
                  name: '69-36-Tue, 10 May',
                  children: []
                },
                {
                  name: '69-38-Tue, 10 May',
                  children: []
                },

              ]
            },
            {
              name: '32-39-Mon, 09 May',
              children: [
                {
                  name: '39-38-Tue, 10 May',
                  children: []
                },
                {
                  name: '39-36-Tue, 10 May',
                  children: [
                    {
                      name: '36-39-Wed, 11 May',
                      children: [

                      ]
                    },
                  ]
                },
                {
                  name: '39-32-Tue, 10 May',
                  children: []
                },
              ]
            },
            {
              name: '32-36-Mon, 09 May',
              children: [

                {
                  name: '36-69-Wed, 11 May',
                  children: [
                    {
                      name: '69-38-Thu, 12 May',
                      children: [

                      ],
                    },
                    {
                      name: '69-39-Thu, 12 May',
                      children: [

                      ],
                    },
                    {
                      name: '69-36-Thu, 12 May',
                      children: [

                      ],
                    },
                  ]
                },
                {
                  name: '36-32-Wed, 11 May',
                  children: []
                },
                {
                  name: '36-38-Wed, 11 May',
                  children: [
                    {
                      name: '38-38-Thu, 12 May',
                      children: [

                      ]
                    },
                    {
                      name: '38-69-Thu, 12 May',
                      children: [

                      ],
                    },
                    {
                      name: '38-36-Thu, 12 May',
                      children: [

                      ],
                    },
                    {
                      name: '38-32-Thu, 12 May',
                      children: [

                      ],
                    },
                    {
                      name: '38-39-Thu, 12 May',
                      children: [

                        {
                          name: '39-36-Thu, 12 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-69-Thu, 12 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-38-Thu, 12 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-39-Thu, 12 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-32-Thu, 12 May',
                          children: [

                          ],
                        },
                      ],
                    },

                  ]
                },
                {
                  name: '36-36-Wed, 11 May',
                  children: [
                    {
                      name: '36-38-Thu, 12 May',
                      children: [
                        {
                          name: '38-32-Fri, 13 May',
                          children: [],
                        },
                        {
                          name: '38-39-Fri, 13 May',
                          children: [],
                        },
                        {
                          name: '38-38-Fri, 13 May',
                          children: [],
                        },
                        {
                          name: '38-69-Fri, 13 May',
                          children: [],
                        },
                      ],
                    },
                    {
                      name: '36-32-Thu, 12 May',
                      children: [
                        {
                          name: '32-32-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '32-69-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '32-39-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '32-38-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '32-36-Fri, 13 May',
                          children: [

                          ],
                        },
                      ],
                    },
                    {
                      name: '36-69-Thu, 12 May',
                      children: [
                        {
                          name: '69-39-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '69-32-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '69-69-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '69-38-Fri, 13 May',
                          children: [

                          ],
                        },

                      ],
                    },
                    {
                      name: '36-39-Thu, 12 May',
                      children: [
                        {
                          name: '39-39-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-69-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-32-Fri, 13 May',
                          children: [

                          ],
                        },
                        {
                          name: '39-38-Fri, 13 May',
                          children: [

                          ],
                        },

                      ],
                    },
                  ]
                },
                {
                  name: '36-36-Thu, 12 May',
                  children: []
                },

              ]
            },
          ]
        },
        {
          name: '36-69-Thu, 05 May',
          children: [

          ]
        },
        {
          name: '36-39-Thu, 05 May',
          children: [

          ]
        },
        {
          name: '36-38-Thu, 05 May',
          children: [

          ]
        },
      ]
    }










    // Set the dimensions and margins of the diagram
    var margin = { top: 20, right: 120, bottom: 30, left: -120 },
      width = window.innerWidth - margin.left - margin.right,
      height = window.innerHeight - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(svgRef.current)
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)

    // const g = svg.append("g")
    //   .attr("cursor", "grab")
    //   .attr("transform", "translate("
    //     + margin.left + "," + margin.top + ")");

    // ZOOM AND DRAG
    svg.call(d3.zoom()
      .extent([[0, 0], [width, height]])
      .scaleExtent([1, 8])
      .on("zoom", zoomed));

    function zoomed({ transform }) {
      svg.attr("transform", transform);
    }

    var i = 0,
      duration = 750,
      root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(tree, function (d) { return d.children; });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second name
    if(buttonFlag){
      root.children.forEach(expand)
      // setFlag(false)
    } else {
      root.children.forEach(collapse);
    }

    update(root);

    // Collapse the node and all it's children
    function collapse(d) {
      if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
      }
    }

    function expand(d) {      
      if(d._children) {
      d.children = d._children
        d.children.forEach(expand)
        d._children = null
      }
    }

    function update(source) {

      // Assigns the x and y position for the nodes
      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);


      // Normalize for fixed-depth.
      const rootNode = nodes[0]
      const getDayNumber = node => node.data.name.split('-').slice(-1)[0]
      nodes.forEach(function (d) { d.y = (getDayNumber(d) - getDayNumber(rootNode)) * 100 + 180 });
      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node')
        .data(nodes, function (d) { return d.id || (d.id = ++i); })

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function (d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', click)

      // Add Circle for the nodes
      nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      // Add labels for the nodes
      nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function (d) {
          // return d.children || d._children ? -13 : 13;
          return -13;
        })
        .attr("text-anchor", function (d) {
          // return d.children || d._children ? "end" : "start";
          return "end";
        })
        .text(function (d) { return d.data.name; });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = svg.selectAll('path.link')
        .data(links, function (d) { return d.id; });

      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function (d) {
          var o = { x: source.x0, y: source.y0 }
          return diagonal(o, o)
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(duration)
        .attr('d', function (d) { return diagonal(d, d.parent) });

      // Remove any exiting links
      var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function (d) {
          var o = { x: source.x, y: source.y }
          return diagonal(o, o)
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {

        // path2 = `M${s.y},${s.x}L${d.y},${d.x}`  <- Lineas rectas

        const path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`

        return path
      }

      // Toggle children on click.
      function click(ev) {
        const d = ev.target.__data__;
        console.log("CLICK NODE")
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }

  }, [tree, buttonFlag])

  return (
    <div>
      <svg ref={svgRef} width={width} height={height} />    
      <button onClick={handleClick}> aaa </button>
    </div>
  )
}

export default App;
