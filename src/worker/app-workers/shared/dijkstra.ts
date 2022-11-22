export interface Vertex {
    nominal: string,
    edges: Edge[]
}

export interface Edge {
    terminal: Vertex,
    distance: number;
}

export class Graph {
  public vertices: Vertex[];

  constructor() {
      this.vertices = [];
  }

  /**
   * Returns the graphs vertices
   */
  getVerticies(): Vertex[] {
      return this.vertices;
  }

  /**
   * Returns the vertex instance in the graph
   * @param {number} vertex 
   * @return {Vertex}
   */
  getVertex(nominal: string): Vertex {
      return this.vertices.find(v => v.nominal === nominal);
  }

  /**
   * Adds a vertex with an empty array of edges to the graph
   * @param {number} nominal 
   * @return {void}
   */
  addVertex(nominal: string): void {
      this.vertices.push({
          nominal: nominal,
          edges: []
      });
  }

  /**
   * Creates an edge between two verticies
   * @param {number} nominal1 
   * @param {number} nominal2 
   * @param {number} distance 
   */
  addEdge(nominal_from: string, nominal_to: string, distance: number): void {
      let vertex_from =  this.vertices.find(v => v.nominal === nominal_from);
      let vertex_to =  this.vertices.find(v => v.nominal === nominal_to);
      vertex_from.edges.push({
          terminal: vertex_to,
          distance: distance
      });
      // vertex2.edges.push({
      //     terminal: vertex1,
      //     distance: distance
      // });
  }

  /**
   * Get full shortest path from previous vertices in vertex's shortest path
   * @param prev 
   * @param source 
   */
  deriveShortestPaths(prev: number[], source: number): number[][] {
      let getPrev = (path, v) => {
          let next = prev[v]
          if (next) {
              path.push(next);
              return getPrev(path, next);
          } else {
              path.push(source);
              path.reverse()
              return path;
          }
      }
      return prev.map((v, i) => getPrev([i], i) );
  }

  deleteUselessVertices(targetToIgnore:string) {
    let ArrayVertex:string[] = [];
    let pastLength:number = this.vertices.length;
    this.vertices = this.vertices.filter(vertex => (vertex.edges.length !== 0) || (vertex.nominal === targetToIgnore) );
    while(pastLength !== this.vertices.length) {
      pastLength = this.vertices.length;
      ArrayVertex = [];
      for(let vertex of this.vertices) {
        ArrayVertex.push(vertex.nominal);
      }
      for(let vertex of this.vertices) {
        vertex.edges = vertex.edges.filter(edge => ArrayVertex.some(x => x == edge.terminal.nominal));
      }
      this.vertices = this.vertices.filter(vertex => (vertex.edges.length !== 0) || (vertex.nominal === targetToIgnore) );
    }
  }

  getDijstraShortestPath(source:string, target:string) {
    if(this.getVertex(source) === undefined) {
      console.log("Error: Source vertex does not exists");
      return [];
    }
    if(this.getVertex(target) === undefined) {
      console.log("Error: Target vertex does not exists");
      return [];
    }
    let tempNominal:string;
    let shortestPath:string[] = [];
    let resDijstra = this.Dijkstra(this.getVertex(source));
    if(!Number.isFinite(resDijstra.dist[target])) {
      return [];
    }
    shortestPath.push(target);
    while(shortestPath[0] !== source) {
      tempNominal = resDijstra.prev[shortestPath[0]];
      shortestPath.unshift(tempNominal);
    }
    return shortestPath;
  }


  Dijkstra(source: Vertex) {
    let Q: Vertex[] = [];
    let dist:{[nominal:string]:number} = {};
    let prev:{[nominal:string]:string} = {};
    let u: Vertex;
    let alt: number;

    for (let vertex of this.vertices) {
        /**
         * Initialize distance between source 
         * and all nodes to Infinity,
         * and all shortest paths to undefined
         */
        dist[vertex.nominal] = Infinity;
        prev[vertex.nominal] = undefined;
        Q.push(vertex);
    }
    /**
     * Path to source from source is zero
     */
    dist[source.nominal] = 0;

    while (Q.length > 0) {
        /**
         * Get the vertext with the shortest distance to
         * the source that has not yet been visited
         */
        u = Q.reduce((min, next): Vertex => {
            if (dist[next.nominal] < dist[min.nominal]) {
                min = next;
            }
            return min;
        });
        Q = Q.filter(v => v !== u);

        /**
         * Get neighbors of u that are still unvisited
         */
        let neighbors: Vertex[] = u.edges
            .map(e => e.terminal)
            .filter(t => ~Q.indexOf(t));

        for (let v of neighbors) {
            /**
             * Add the source->u distance to the u->v distance
             */
            alt = dist[u.nominal] + u.edges.find(e => e.terminal === v).distance;

            if (alt < dist[v.nominal]) {
                /**
                 * If the current source->v distance is 
                 * further than the source->u + u->v distance, 
                 * then set the new source->v distance 
                 * to source->u + u->v
                 */
                dist[v.nominal] = alt;

                /**
                 * Set the previous vertex in the shortest 
                 * path from source->v to u
                 */
                prev[v.nominal] = u.nominal;
            }
        }
    }
    return {dist: dist, prev: prev};
  }

}



