// A queue is also a data structure, but you can remove only the first added element . This is a principle known as first in, first out (FIFO). A queue is also great
//     because of the constant time in its operations. Similar to a stack, it has limitations
//     because only one item can be accessed at a time. Queues should be used over arrays
//     when you need to work with data in the FIFO form where the algorithm only needs to
//     access the first added element.

//  Adding to a queue is commonly
// known as enqueuing, and removing from a queue is known as dequeuing. shift() can be
// used for the dequeue, and .push() can be used for the enqueue.

// QUEUE USAGE
// 1. printers
// 2.CPU task scheduling
// 3. Callback queue in JS runtime


// class Queue{
//     constructor(){
//         this.dataItem = [];
//         this.top = 0
//     }

//     enqueue(element){
//         this.dataItem[this.top] = element;
//         ++this.top;
//     }

//     isEmpty(){
//         if(this.dataItem.length > 0){
//             return false
//         }
//         return true
//     }
    

//     deQueue(){
//         if(!this.isEmpty()){
//             return this.dataItem.shift()
//         }
//         return null
//     }

//     peek(){
//         return this.dataItem[0]
//     }
// }
// const queue = new Queue()


// console.log(queue.deQueue())
// console.log(queue.peek())


// OPTIMISING QUEUE DATA STRUCTUREA

//  the shift() implementation removes the element at zero indexes and
// then shifts remaining indexes down consecutively, all other elements in the array need
// to have their indexes altered, and this takes O(n).

// class Queue{
//     constructor(){
//         this.dataItem = {};
//         this.front = 0
//         this.back = 0
//     }

//     enqueue(element){
//         this.dataItem[this.back] = element;
//         ++this.back;
//     }

//     isEmpty(){
//         if(this.front - this.back === 0){
//             return true
//         }
//         return false
//     }
    

//     deQueue(){
//         if(!this.isEmpty()){
//             const item = this.dataItem[this.front]
//             ++this.front;
//             return item;
//         }
//         return null
//     }

//     peek(){
//         return this.dataItem[0]
//     }
// }

// const queue = new Queue()
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// console.log(queue.isEmpty())
// console.log(queue.deQueue())
// console.log(queue.deQueue())

// console.log(queue)


class Queue{
    constructor(){
        this.dataItem = [];
        this.top = 0
    }


    isBuffer(){
        return this.dataItem.splice()
    }


    enqueue(element){
        this.dataItem[this.top] = element;
        ++this.top;
    }

    isEmpty(){
        if(this.dataItem.length > 0){
            return false
        }
        return true
    }
    

    deQueue(){
        if(!this.isEmpty()){
            return this.dataItem.shift()
        }
        return null
    }

    peek(){
        return this.dataItem[0]
    }

    
}
const queue = new Queue()

queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(6)
// console.log(queue)

// learn about searching through a queue and accessing 
