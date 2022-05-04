import Tree from 'react-d3-tree'
import root from './tree/root'
import { useState } from 'react'
import AddChildren from './AddChildren'
import { Stack } from '@chakra-ui/react'
import { v4 } from 'uuid'
import CustomNode from './CustomNode'
import CustomLink from './CustomLink'

function App() {
  const [tree, setTree] = useState(root);
  const [node, setNode] = useState(undefined);
  const [linked, setLinked] = useState(false);

  const handleCheck = () => {
    setLinked(!linked)
  }

  const handleNodeClick = (clickedNode) => {
    console.log(clickedNode)
    const { name, attributes, children } = clickedNode
    const myNode = {
      name, attributes, children
    }
    setNode(myNode)
  };

  const addNode = (newNode) => {
    const queue = [];
    queue.unshift(tree);
    while (!!queue.length) {
      let element = queue.pop();
      // eslint-disable-next-line eqeqeq      
      if (element.attributes?.id == node.attributes?.id) {
        element.children.push(newNode);
        return { ...tree }
      }

      const len = element.children?.length;

      for (let i = 0; i < len; i++) {
        queue.unshift(element.children[i]);
      }
    }

  }

  const handleSubmit = (name) => {
    const newNode = {
      name,
      attributes: {
        link: linked,
        id: v4()
      },
      children: []
    };
    const newTree = addNode(newNode);
    setTree(newTree);
    setLinked(false);
    setNode(undefined);

  }
  return (
    <Stack direction="row" spacing="md">
      <div style={{ width: '100vw', height: '100vh' }}>
        <Tree data={tree}
          pathFunc={CustomLink}
          renderCustomNodeElement={(nodeInfo) => CustomNode(nodeInfo, handleNodeClick)}
          translate = {{
            x: 50,
            y: 50
          }}
        />
      </div>
      <AddChildren node={node}
        handleCheck={handleCheck}
        handleSubmit={handleSubmit} />
    </ Stack>
  );
}

export default App;
