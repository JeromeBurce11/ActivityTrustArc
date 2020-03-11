class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // list must not have values yet;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        try {
            var node = new Node(value);
            if (this.head == null)
                this.head = node;
            else {
                var current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        } catch (error) {
            console.log(error);
        }
    }
    removeAnIndex(index) {
        try {
            var nodes = this.head;
            if (index > 0 && nodes === null) {
                return -1;
            } else {
                var size = 0;

                var prev = nodes;
                // deleting first element 
                if (index == 0) {
                    this.head = nodes.next;
                } else {
                    while (size < index) {
                        size++;
                        prev = nodes;
                        nodes = nodes.next;
                    }
                    prev.next = nodes.next;
                }
                this.size--;

                return nodes.value;
            }
        } catch (error) {
            console.error(error);
        }

    }
    retrieve() {
        try {
            var nodes = this.head;
            while (nodes != null) {
                console.log(nodes.value);
                nodes = nodes.next;
            }
            console.log("\n");
        } catch (error) {
            console.error(error);
        }

    }


    get(index) {
        //Todo
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === 0) {
            return this.head;//return the first node if there is a value in it
        }
        var newnodes = this.head;
        var counter = 0;

        while (newnodes) {
            if (counter == index) {
                break;
            } else {
                newnodes = newnodes.next;
                counter++;
            }
        }
        return newnodes;
    }

    updateTheDataInIndex(index, value) {
        const currentNode = this.get(index);
        if (currentNode) {
            currentNode.value = value;
            return currentNode;
        } else {
            return null;
        }
    }
}
var list = new LinkedList();
// insert;
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
//show;
list.retrieve();
//remove a data in an index in linklist;
list.removeAnIndex(0);
list.retrieve();
list.updateTheDataInIndex(2, 145);

console.log(list.get(2).value);
list.retrieve();
// list.updateDataInIndex(2,13);