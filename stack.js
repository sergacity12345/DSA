// Stacks are efficient data structures because data can be added or removed only from the
// top of a stack, making these procedures fast and easy to implement. Stacks are used
// extensively in programming language implementations for everything from expression
// evaluation to handling function calls

// The stack is known as
// a last-in, first-out (LIFO) data structure

// The two primary operations of a stack are adding elements to a stack and taking elements
// off a stack. Elements are added to a stack using the push operation. Elements are taken
// off a stack using the pop operation. 

// . The peek operation returns the value stored at the top of a stack without
// removing it from the stack.

// The top variable keeps track of the top of the stack and is initially set
// to 0 by the constructor, indicating that the 0 position of the array is the top of the stack,
// at least until an element is pushed onto the stack.



// class Stack{
//      constructor(){
//           this.items =[];
//           this.top = 0;
//      }

//      push(element){
//           this.items[this.top] = element;
//           this.top ++;
//           // this.items.push(element)
//      }

//      pop(){
          
//           return this.items[--this.top]
//           return this.items.pop()
//      }

//      peek(){
//           return this.items[this.items.length - 1]
//      }

//      isEmpty(){
//           return this.items.length === 0
//      }

//      size(){
//           return this.items.length
//      }

//      print(){
//           console.log(this.items.toString())
//      }
//      clear(){
//           return this.items = []
//      }
// }

// const stack = new Stack()
// console.log(stack.push(2))
// console.log(stack.push(3))
// console.log(stack.push(1))
// console.log(stack.push(5))
// console.log(stack.push(4))
// console.log(stack)

//USING THE STACK CLASS

//(1) Multiple Base conversions

// class Stacks{
//      constructor(){
//           this.dataStore = [];
//           this.top = 0
//      }
//      push(element){
//           // this.items[this.top] = element;
//           // this.top ++;
//           this.dataStore.push(element)
//                }
//      pop(){
//           return this.dataStore.pop()
//      }
//      length(){
//           return this.dataStore.length
//      }
//      mulBase(num,base){
//           let s = new Stacks()
//           do{
//                s.push(num % base)
//                num = Math.floor(num / base)
//           }while(num > 0)
//                let converted = ''
//           while(s.length() > 0){
//                converted += s.pop()
//           }
//           return converted
//      }
// } 
// const stack = new Stacks()
// let num = 125
// let base = 2
// console.log(stack.mulBase(num,base))

//(2) Palindromes
// A palindrome is a word, phrase, or number that is spelled the same forward and back‐
// ward. For example, “dad” is a palindrome; “racecar” is a palindrome; 
// class Stacks{
//      constructor(){
//           this.dataStore = []
//      }
//      push(element){
//           // this.items[this.top] = element;
//           // this.top ++;
//           this.dataStore.push(element)
//                }
//      pop(){
//           return this.dataStore.pop()
//      }
//      length(){
//           return this.dataStore.length
//      }
//      palindrome(word){
//           let s = new Stacks()
//           for(let i = 0; i < word.length; i++){
//                s.push(word[i])
//           }
//           let converted = '';
//           while(s.length() > 0){
//                 converted += s.pop()
//           }
//           return converted
          
//      }
// } 
// const stack = new Stacks()
// let word = "Panama"
// let base = 2
// // console.log(stack.mulBase(num))

// if(stack.mulBase(num)== "racecar"){
//      console.log(`${num} is a palindrome`)
// }else{
//      console.log(`${num} is not a palindrome`)
//      console.log(stack.mulBase(num))
// }


// (3)RECURSION
// class Stacks{
//      constructor(){
//           this.dataStore = []
//      }
//      push(element){
//           // this.items[this.top] = element;
//           // this.top ++;
//           this.dataStore.push(element)
//                }
//      pop(){
//           return this.dataStore.pop()
//      }
//      length(){
//           return this.dataStore.length
//      }
//      mulBase(num){
//           let s = new Stacks()
//           while(num >1 ){
//                s.push(num)
//                num--
//           }
//           let converted = 1;
//           while(s.length() > 0){
//                 converted *= s.pop()
//           }
//           return converted
          
//      }
// } 

// const stack = new Stacks()

// console.log(stack.mulBase(5))