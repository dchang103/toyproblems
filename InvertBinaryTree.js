// 1) Invert a binary tree.
// Input:
//          4
//       /   \
//       2     7
//      / \   / \
//     1   3 6   9

// Output:
//          4
//       /   \
//       7     2
//      / \   / \
//     9   6 3   1

const binaryReverse = (root) => {
  
  const flipNode = (node) => {
    if (node.left) { flipNode(node.left) }
    if (node.right) { flipNode(node.right) }
    let temp = node.left
    node.left = node.right
    node.right = temp
  }

  flipNode(root)
}