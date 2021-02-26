/*******************************************************************************
 * @param {Object} adjacencyList - An object that has at least two keys, those
 * being the values of startName and endName. The values of all keys in the
 * adjacencyList are guaranteed to be arrays.
 *
 * @param {string} startName - The name (node) at which you'll start your
 * search.
 *
 * @param {string} endName - The name (node) you're trying to find when starting
 * your search from startName.
 *
 *
 * RETURN a set containing all nodes visited in Breadth-First order if a valid
 * path from startName to endName is found
 *
 * RETURN `null` if no path is found.
 *
 * See Open for instructions
 */

// Traverse the graph in Breadth-First Order
function areTheyConnected(adjacencyList, startName, endName) {
  const visited = new Set();
  const queue = [ startName ];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      adjacencyList[currentNode].forEach(neighbor => {
        queue.push(neighbor);
      });
    }
    if (visited.has(endName)) {
      return visited;
    }
  } 
  return null;
}




/*******************************************************************************
 * Do not change the code after this line.
 */
try {
  exports.areTheyConnected = areTheyConnected;
} catch(e) {
  module.exports = null;
}
