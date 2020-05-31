class Graph {
  constructor () {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge (vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("SanFrancisco");
g.addVertex("NewDelhi");
g.addVertex("Mumbai");
g.addEdge("Tokyo", "SanFrancisco");
g.addEdge("Tokyo", "NewDelhi");
g.addEdge("Mumbai", "NewDelhi");
g.addEdge("SanFrancisco", "NewDelhi");
console.log(g);
// g.removeEdge("Tokyo", "NewDelhi");
// console.log(g);
g.removeVertex("Tokyo");
console.log(g);