
class Nodes {
    private left: any;
    private right: any;

    constructor(public value: number) {
        this.value = value
        this.left = null
        this.right = null
    }

}

class BinaryTree {
    public root: any;

    constructor() {
        this.root = null;
    }
    private curentNode: any;
    add(value: number) {
       let newNode:Nodes = new Nodes(value)
        if (!this.root) {
            this.root = newNode;
            return;
        }
       this.curentNode = this.root;
        while (this.curentNode) {
            if (newNode.value < this.curentNode.value) {
                if (!this.curentNode.left) {
                    this.curentNode.left = newNode;
                    return;
                }

                this.curentNode = this.curentNode.left;
            }
            else {
                if (!this.curentNode.right) {
                    this.curentNode.right = newNode;
                    return;
                }

                this.curentNode = this.curentNode.right;
            }
        }
    }
}

const mytree: BinaryTree = new BinaryTree();
mytree.add(8);
mytree.add(7);
mytree.add(9);
mytree.add(5);
mytree.add(10);
mytree.add(20);
mytree.add(6);
mytree.add(2);
mytree.add(11);


console.log(mytree);