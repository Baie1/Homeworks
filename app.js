// let a = 0;

// const func = () => {
//     a += 15;
//     console.log(a);
//     if(a <500) {
//         func ();
//     }
//     func ();
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// setztimeout(() => {
//     concole.log("hi");
// }, 1000);

// console.log("ok")

// const hi = () => {
//     console.log("hi");
// }

// setTimeout (hi,2000);

// setTimeout(() => {
//     console.log(0);
// }, 0);

// setTimeout(() => {
//     console.log(1);
// });

// setTimeout(() => {
//     console.log(2);
// });

// setTimeout(() => {
//     console.log(3);
// });

// console.log("a");
// console.log("b");
// console.log("c");



// const interval = setInterval(()=>{
//     console.log("interval");
// }, 1000);

// setTimeout(() => {
//     clearInterval (interval);
// }, 6000);

// const block = document.querySelector(".block");

// let positionX = 0
// let positionY = 0

 
   
// const move = () => {
//         if (positionX <= 444) {
//             positionX += 10;
//             block.style.left = `${positionX}px`;
//             setTimeout(move,110);
//         }  else if (positionX >= 444 && positionY <= 444) {
//             positionY += 10;
//             block.style.top = `${positionY}px`;
//             setTimeout(move, 110);
//         }   
//     };

// move();

let btn = document.querySelector('button');
let box = document.getElementById('box');
 
function myAnimation() { 
    let down = 0;
    let right = 444;
    let up = 444; 
    let left = 0;

    let iq = setInterval(frame, 10); 
    
    function frame() { 
        if(down < 450) {  
            down++;  
            box.style.top = down + 'px';
        } 
        else if(left < 450) {  
            left++;
            box.style.left = left + 'px'; 
        } 
        else if(up > 0) {  
            up--; 
            box.style.top = up + 'px'; 
        } 
        else if(right > 0) {  
            right--; 
            box.style.left = right + 'px';
    }
  } 
}
btn.addEventListener('click', myAnimation);




class Timer { 
    constructor () { 
        this.isRunning = false; 
        this.startTime = 0; 
        this.overallTime = 0; 
    } 
    _getTimeElapsedSinceLastStart () { 
        if (!this.startTime) { 
            return 0; 
        } 
        return Date.now() - this.startTime; 
    } 
    start () { 
        if (this.isRunning) { 
            return console.error('Timer is already running'); 
        } 
        this.isRunning = true; 
        
        this.startTime = Date.now(); 
    } 
    stop () { 
        if (!this.isRunning) { 
            return console.error('Timer is already stopped'); 
        } 
        
        this.isRunning = false; 
        
        this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart(); 
    } 
    
    reset () { 
        this.overallTime = 0; 
        
        if (this.isRunning) { 
            this.startTime = Date.now(); 
            return; 
        } 
        
        this.startTime = 0; 
    } 
    
    getTime () { 
        if (!this.startTime) { 
            return 0; 
        } 
        
        if (this.isRunning) { 
            return this.overallTime + this._getTimeElapsedSinceLastStart(); 
        } 
        
        return this.overallTime; 
    } 
    
} 

const timer = new Timer(); 
timer.start(); 
setInterval(() => { 
    const timeInSeconds = Math.round(timer.getTime() / 1000); 
    document.getElementById('time').innerText = timeInSeconds; 
}, 100)









// const doHomework = (subject , callback) => {
//     alert(`starting my $ {subject} homework`);
//     callback();
// };

// const alertFinish = () => {
//     alert ("Done");
// };

// doHomework("math", alertFinish);

// const arr = [1,2,3,4,5];

// arr.map((item) => {
//     let element = item + "33421847";
//     console.log(element);
// });

// console.log(arr);

// const arr = [1,2,3,4,5];

// arr.reduce((prev, curr) => {
//     console.log(prev * curr);
//     return prev * curr;
// }, 10);

// const fruits = ["apple","banana","watermelon","peach"];

// const result = fruits.filter((item) => {
//     return  item.tength > 5;
// });

// console.log(result);
// console.log(fruits);


// const func = (num) => {
//     console.log(num, "orig");
//     const culk = () => {
//         let newNum = num * 8;
//         console.log(newNum,"new");
//     };
//     culk();
// };

// func(59);


