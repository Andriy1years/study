class CreateObj {
    public left: null | CreateObj;
    public right: null | CreateObj;

    constructor(public value: number) {
        this.value = value
        this.left = null
        this.right = null
    }

}


class CreateBinaryTree {
    private main: null | CreateObj = null;



    add(value: number) {
        let newObj = new CreateObj(value)
        if (!this.main) {
            return this.main = newObj;

        }
            let curentObj: null | CreateObj = this.main;

        while (curentObj) {
            if (newObj.value < curentObj.value) {
                if (!curentObj.left) {
                    return curentObj.left = newObj;
                }
                curentObj = curentObj.left;
            } else {
                if (!curentObj.right) {
                    return curentObj.right = newObj;
                }
                curentObj = curentObj.right;
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