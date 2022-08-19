class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//QUEUES
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        //add to end
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode; 
        } this.size++;
    }
    dequeue(){
        //remove and return first item
        if(this.size === 0) throw new Error("Queue is empty!"); //throw error if empty

        let yes = this.first; //initialize a variable with the val of this.first so we can keep track and not accidentally reassign
        if(this.first === this.last) this.last = null; //if first and last are equal new last is now null bc queue now empty
        this.first = this.first.next; //update first to be next val
        this.size--; //update size of queue
        return yes.val; //return val of removed first item
    }
    peek(){
        //return first item
        return this.first.val;
    }
    isEmpty(){
        if(this.size === 0){
            return true;
        } return false;
    }
}

//STACKS
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        //add to TOP of stack
        let newNode = new Node(val);

        if(!this.first){
            //if empty, set newly added node to be both the first and last val
            this.first = newNode;
            this.last = newNode;
        } else {
            //if not empty
            let yup = this.first; //initialize first with variable to keep track of it
            this.first = newNode; // set new first to newly created node
            this.first.next = yup; //update next to be initial first node val
        } this.size++; //update size of stack
    }
    pop(){
        //remove and return TOP
        if(this.size === 0) throw new Error("Stack is empty!");

        let yup = this.first;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return yup.val;
    }
    peek(){
        return this.first.val;
    }
    isEmpty(){
        if(this.size === 0) return true
        return false
    }
}

const bugs = new Queue()
bugs.enqueue("beetle");
bugs.enqueue("worm");
bugs.enqueue("wasp");
console.log(bugs);
console.log(bugs.dequeue());
console.log(bugs.isEmpty());

const moreBugs = new Stack()

