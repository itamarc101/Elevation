class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
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

    findNode(val) {
        if (this.value === val) return true;
        else if (val < this.value && this.leftChild) {
            return this.leftChild.findNode(val);
        }
        else if (val > this.value && this.rightChild) {
            return this.rightChild.findNode(val);
        }
        return false;
    }

    findCommonParent(val1, val2) {
        if (!this.value) return null;

        if (val1 < this.value && val2 < this.value && this.leftChild) {
            return this.leftChild.findCommonParent(val1, val2);
        }
        if (val1 > this.value && val2 > this.value && this.rightChild) {
            return this.rightChild.findCommonParent(val1, val2);
        }

        return this.value;
    }

}


//insert nodes (same as in lesson)
const ex1 = ["H", "E", "S", "G", "L", "Y", "I"]
const ex2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

let bSTree = new BSNode()

ex2.forEach(l => bSTree.insertNode(l))

console.log(bSTree)

    
//Use the following to test
// console.log(bSTree.findNode("H")) // should print true
// console.log(bSTree.findNode("G")) // should print true
// console.log(bSTree.findNode("Z")) // should print false
// console.log(bSTree.findNode("F")) // should print false
// console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!


console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"