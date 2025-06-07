
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
        let newNode: Nodes = new Nodes(value)
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
            } else {
                if (!this.curentNode.right) {
                    this.curentNode.right = newNode;
                    return;
                }

                this.curentNode = this.curentNode.right;
            }
        }
    }

    traverseDFS(callback: any, method: string) {
        if (method === 'preorder') {
            return this.preorder(this.root, callback)
        }
        if (method === 'inorder') {
            return this.inorder(this.root, callback)
        }

        return this.postorder(this.root, callback)


    }

    preorder(node: any, callback: any) {
        if (!node) {
            return;
        }
        if (callback) {
            callback(node);
        }
        this.preorder(node.left, callback);
        this.preorder(node.right, callback);
    }

    inorder(node: any, callback: any) {
        if (!node) {
            return;
        }

        this.inorder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inorder(node.right, callback);
    }

    postorder(node: any, callback: any) {
        if (!node) {

            return;
        }``

        this.postorder(node.left, callback);
        this.postorder(node.right, callback);
        if (callback) {
            callback(node);
        }
    }

    traversBFS(callback:any) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
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

 // mytree.traverseDFS((node:any) => {console.log(node.value);}, "");
//mytree.traversBFS((node:any) => {console.log(node.value);});

console.log(mytree);

