function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [];
    let dfs = [];
    stack.push(rootNode);
    dfs.push(rootNode);
    while (stack && stack.length) {
        let currentNode = stack.pop();
        if (!currentNode.discovered) {
            currentNode.discovered = true;
            findAdjacentVertices(currentNode.name, vertices, edges).forEach(vertice => {
                stack.push(vertice);
                dfs.push(vertice);
            });
        }
    }
    return dfs;
}

function findAdjacentVertices(currentNode, vertices, edges) {
    let adjacentEdges = [];
    let adjacentVertices = [];
    edges.forEach(edgePairs => {
        edgePairs.forEach(edge => {
            if (edge === currentNode) {
                adjacentEdges.push(...edgePairs);
            }
        });
    });
    adjacentEdges = adjacentEdges.filter(edge => edge !== currentNode);
    adjacentEdges.forEach(edge => {
        vertices.forEach(vertice =>{
            if (vertice.name === edge && vertice.discovered === null) {
                adjacentVertices.push(vertice); 
            }
        })
    });
    return adjacentVertices;
} 