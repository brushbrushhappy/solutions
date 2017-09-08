class Node {
    constructor (left = null, right = null, data = null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }   
}

class BinarySearchTree {
    constructor (node = null) {
        this.root = node;
    }
    traverseInOrderRecursively (process) {
        let inOrderHelper = (node) => {
            if (node.left !== null) {
                inOrderHelper(node.left);
            }
            process(node);
            if (node.right !== null) {
                inOrderHelper(node.right);
            }
        };
        inOrderHelper(this.root);
    }
    traversePreOrderRecursively (process) {
        let inOrderHelper = (node) => {
            process(node);
            if (node.left !== null) {
                inOrderHelper(node.left);
            }            
            if (node.right !== null) {
                inOrderHelper(node.right);
            }
        };
        inOrderHelper(this.root);
    }
    traversePostOrderRecursively (process) {
        let inOrderHelper = (node) => {            
            if (node.left !== null) {
                inOrderHelper(node.left);
            }            
            if (node.right !== null) {
                inOrderHelper(node.right);
            }
            process(node);
        };
        inOrderHelper(this.root);
    }
    insertRecursively (data) {
        let recurse = (currentParent, newNode) => {
            if (currentParent === null) {
                return newNode;
            } else if (newNode.data > currentParent.data) {
                currentParent.right = recurse(currentParent.right, newNode);
            } else {
                currentParent.left = recurse(currentParent.left, newNode);
            }
            return currentParent;
        };
        let recurse2 = (currentParent, node) => {
            if (node.data > currentParent.data) {
                if (currentParent.right !== null) {
                    recurse2(currentParent.right, node);
                } else {
                    currentParent.right = node;
                }
            } else {
                if (currentParent.left !== null) {
                    recurse2(currentParent.left, node);
                } else {
                    currentParent.left = node;
                }
            }
        };
        //recurse(this.root, new Node(null, null, data));
        recurse2(this.root, new Node(null, null, data));
    }
}

let root = new Node(null, null, 3);
let bst = new BinarySearchTree(root);
bst.insertRecursively(2);
bst.insertRecursively(1);
bst.insertRecursively(7);
bst.insertRecursively(5);
bst.insertRecursively(4);
bst.insertRecursively(6);
bst.insertRecursively(8);
const logger = (node) => {
    console.log(node.data);
};
bst.traversePreOrderRecursively(logger);
console.log("\n");
bst.traverseInOrderRecursively(logger);
console.log("\n");
bst.traversePostOrderRecursively(logger);