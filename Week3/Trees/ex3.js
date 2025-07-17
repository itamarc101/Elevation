class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findMax() {
        let current = this;
        while (current.rightChild !== null) {
        current = current.rightChild;
        }
        return current.value;
    }

    removeNode(node, value, parent=null) {
        if (!node) return false;
        if (value < node.value) {
            if (node.leftChild !== null) {
                return this.removeNode(node.leftChild, value, node);
            }
            else {
                return false;
            }
        }
        else if (value > node.value) {
            if (node.rightChild !== null) {
                return this.removeNode(node.rightChild, value, node);
            }
            else {
                return false;
            }
        }

        else {
            // Node found
            if (node.leftChild !== null && node.rightChild !== null) {
                let maxLeft = node.leftChild.findMax();
                node.value = maxLeft;
                this.removeNode(node.leftChild, maxLeft, node);
            } else if (parent === null) {
                // Removing root node with 0 or 1 child
                if (node.leftChild !== null) {
                    node.value = node.leftChild.value;
                    node.rightChild = node.leftChild.rightChild;
                    node.leftChild = node.leftChild.leftChild;
                } else if (node.rightChild !== null) {
                    node.value = node.rightChild.value;
                    node.leftChild = node.rightChild.leftChild;
                    node.rightChild = node.rightChild.rightChild;
                } else {
                    node.value = null;
                }
            } else if (parent.leftChild === node) {
                parent.leftChild = node.leftChild !== null ? node.leftChild : node.rightChild;
            } else if (parent.rightChild === node) {
                parent.rightChild = node.leftChild !== null ? node.leftChild : node.rightChild;
            }
            return true;
        }
    }
}


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 


let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
