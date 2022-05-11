import Tree from 'react-d3-tree'
import root from './tree/root'
import { useEffect, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { v4 } from 'uuid'
import CustomNode from './CustomNode'
import CustomLink from './CustomLink'

function App() {
  const [tree, setTree] = useState(root);

  useEffect( () => {
    console.log();
  }, [])

  const handleNodeClick = (clickedNode) => {
    console.log("Before", clickedNode.__rd3t.collapsed)
    clickedNode.__rd3t.collapsed = !clickedNode.__rd3t.collapsed;
    console.log("After", clickedNode.__rd3t.collapsed)
  };

  const handleLinkMouseOver = (source, target, ev) => {
    source.ancestors().slice(-1);

    if (ev.target.classList.contains('rd3t-link')) {
      ev.target.classList.remove('rd3t-link');
    } else {
      ev.target.classList.add('rd3t-link');
    }

    if (ev.target.classList.contains('selected')) {
      ev.target.classList.remove('selected');
    } else {
      ev.target.classList.add('selected');
    }

  }
  return (
    <Stack direction="row" spacing="md">
      <div style={{ width: '100vw', height: '100vh' }}>
        <Tree data={tree}
          hasInteractiveNodes={true}
          // separation={{ siblings: 0.5, nonSiblings: 1 }}
          // dimensions={{ height: window.innerHeight, width: window.innerWidth }}
          pathFunc={CustomLink}
          depthFactor={200}
          pathClassFunc={() => { }}
          // onLinkMouseOver={handleLinkMouseOver}
          renderCustomNodeElement={(nodeInfo) => {    
        
            return CustomNode(nodeInfo);
          }
          }
          translate={{
            x: 50,
            y: 50
          }}
        />
      </div>
    </ Stack>
  );
}

export default App;
