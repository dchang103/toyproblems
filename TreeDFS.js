// 3) Write an iterative function to implement preorder traversal on a given binary tree
// (note that recursion algorithm is not used here), and return the node values in an array.

const preorderFlatten = (root) => {
  var treeVals = []
  
  const dfTraversal = (node) => {
    treeVals.push(node.value)
    if (node.left) { dfTraversal(node.left) }
    if (node.right) { dfTraversal(node.right) }
  }

  dfTraversal(root)

  return treeVals
}