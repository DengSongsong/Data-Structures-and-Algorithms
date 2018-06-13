function BinaryTree() {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = right
  }
  var root = null
  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  this.insert = function(key) {
    var node = new Node(key)
    if (root === null) {
      root = node
    } else {
      insertNode(root, newNode)
    }
  }
}