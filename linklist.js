//   a linked list is a linear data structure that includes a series of connected nodes
// benefit of linked list over Array is that in linklist the list element can be easily inserted or removed without reallocation or reorganization of the entire structure

// draw back is that random access of element is not feasible and accessing an element has linear time complexity.

// APPLICATION OF LINKED LIST
// (1)all application of stacks and queue 
// (2)image viewer

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    getSize (){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head 
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty', this.isEmpty())
        }else{
            let curr = this.head
            let listValues;
            while(curr){
                listValues += ` ${curr.value} `
                curr = curr.next
            }
            console.log(listValues)

        }
    }
}
const list = new LinkedList()
console.log(list)
list.print()


list.append(10)
list.print()


list.append(20)
list.append(30)
list.print()

console.log(list)
