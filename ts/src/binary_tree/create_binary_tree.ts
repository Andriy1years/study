class CreateObj {
    private left: null | object;
    private right: null | object;

    constructor(public value: number) {
        this.value = value
        this.left = null
        this.right = null
    }

}


class CreateBinaryTree {
    private main: null | object = null;

    private curentObj: any

    add(value: number) {
        let newObj: CreateObj = new CreateObj(value)
        if (!this.main) {
            return this.main = newObj;
        }

        this.curentObj = this.main

        while (this.curentObj) {
            if (newObj.value < this.curentObj.value) {
                if (!this.curentObj.left) {
                    return this.curentObj.left = newObj;
                }
                this.curentObj = this.curentObj.left;
            } else {
                if (!this.curentObj.right) {
                    return this.curentObj.right = newObj;
                }
                this.curentObj = this.curentObj.right;
            }
        }
    }
}

const createTree = new CreateBinaryTree()

createTree.add(4)
createTree.add(7)
createTree.add(6)


console.log(createTree)
console.log()