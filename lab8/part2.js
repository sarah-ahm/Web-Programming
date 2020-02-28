export class Node {
    constructor (val) { 
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

export class BinarySearchTree {

    constructor (){
        this.root = null;
    }

    insert (val) {
        if(!this.root) {
            this.root = new Node(val);
            return;
        }

        // root exists - not null
        var curr = this.root;

        while (curr) {
            if (val < curr.val) {
                if (!curr.left) {
                    curr.left = new Node(val);
                    break;
                }
                else
                    curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = new Node(val);
                    break;
                }
                else
                    curr = curr.right;
            }
        }
    }

    search (val) {
        if (val) {
            var curr = this.root;
            while(curr) {
                if (val == curr.val) 
                    return true;
                else if (val < curr.val)
                    curr = curr.left;
                else
                    curr = curr.right;
            }
        }
        return false;
    }

    inorder (fn) {
        var curr = this.root;
        var stack = [];

        while (curr || stack.length > 0) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                fn(curr.val);
                curr = curr.right;
            }	
        }
    }
}
