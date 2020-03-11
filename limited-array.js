/////////////////////////////////////////////////////////////
class limitedArray {
    constructor(size) {
        this.arr = [];
        this.size = size;
        this.last = 0;
        this.first = 0;
        this.counter = 0;
    }
    //ok
    insert(data) {
        this.arr[this.last++ % this.size] = data;
        this.last = this.last % this.size;
        if (this.counter === this.size) {
            this.first++;
            this.first = this.last % this.size;
        }else{
            this.counter++;
        }
    }
    //ok
    insertAtIndex(index, value) {
        this.arr.splice(index, 1, value);
    }
    //ok
    clear() {
        this.arr.length = 0;
    }
    //onprocess
    remove(){

    }
    //ok
    print() {
        var tempArr = [];
        for (var i = 0; i < this.counter; i++) {
            tempArr.push(this.arr[(i + this.first)% this.size]);
        }
        return tempArr;
        // return tempArr.filter(item => item !== undefined);
    }
    //ok
    getFirst() {
        // console.log(this.counter-this.arr.length);
        // console.log(this.arr.length);
        this.arr.filter(item => item !== undefined);
        return this.arr[this.counter % this.arr.length];
    }
    //ok
    getLast() {
        return this.arr[this.arr.length-1];
    }
    //ok
    sizestorage() {
        return this.arr.length;
    }
}

var myArr = new limitedArray(2);
myArr.insert(1);
myArr.insert(2);
myArr.insert(3);

// console.log("The Array : " + myArr.print());
// console.log("Actual: " + myArr.arr + "\n");

myArr.insert(4);

console.log("The first : " + myArr.getFirst());
console.log("The last : " + myArr.getLast());
console.log("The Array : " + myArr.print());
console.log("Actual: " + myArr.arr + "\n");

myArr.insert(5);
myArr.insert(6);
myArr.insert(7);

console.log("The first : " + myArr.getFirst());
console.log("The last : " + myArr.getLast());
console.log("The Array : " + myArr.print());
console.log("Actual: " + myArr.arr + "\n");
myArr.insert(8);
myArr.insert(9);
myArr.insert(10);
myArr.insert(10);

console.log("The first : " + myArr.getFirst());
console.log("The last : " + myArr.getLast());
console.log("The Array : " + myArr.print());
console.log("Actual: " + myArr.arr + "\n");





// var myArr = new LimitedArray(10);
// - insert
// - insertAtIndex
// - clear
// - getFirst
// - getLast
// - size
// - print() *this should be in order

/**
 *  const myArr = new LimitedArr(3);
 *  myArr.insert(1);   // [ 1 ]       first = 0 last = 0
 *  myArr.insert(2);   // [ 1 , 2]    first = 0 last = 1
 *  myArr.insert(3);   // [ 1 , 2, 5 ]  first = 0 last = 2
 *  myArr.insert(4);   // [ 4 , 2, 5 ]  first = 1 last = 0
 *  myArr.print()      //  [2, 5, 4]
 *  myArr.getFirst()      //  2
 *  myArr.getLast()      //  4
 *  myArr.getSize()      //  3
 *  myArr.insert(5);   // [ 4 , 5, 3 ]  first = 2 last = 1
 *
 *
 *
 * LimitedArr{
 * var arr=[];
 * var size=0;
 *
 * constructor(size){
 *  size=size;
 * }
 * public method insert(number){
 *      if size = arr.size(){
 *          rotate logic
 *          push sa ato head
 * }
 *      else{
 *      push in back
 * }
 *      return arr
 * }
 * }
 */