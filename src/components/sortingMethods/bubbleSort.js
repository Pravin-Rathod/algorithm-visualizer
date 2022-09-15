import { disableAll } from "../visualizer";

function bubbleSort(array) {
    let animationArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            animationArray.push([j, j + 1, array[j], array[j + 1]]);
        }
    }
    return animationArray;
}

function bubbleSortAnimation(ar, maxSpeed,) {

    disableAll(true);

    let time = 1;
    let speed = 1000 - maxSpeed;
    const animationArray = bubbleSort(ar);
    const arrayItem = document.getElementsByClassName('array-item');

    for (let i = 0; i < animationArray.length; i++) {
        const fi = animationArray[i][0];
        const si = animationArray[i][1];
        const fh = animationArray[i][2];
        const sh = animationArray[i][3];

        setTimeout(() => {
            arrayItem[fi].style.backgroundColor = "red";
            arrayItem[si].style.backgroundColor = "red";
        }, time + (speed * 0));
        setTimeout(() => {
            arrayItem[fi].style.height = `${fh}px`;
            arrayItem[si].style.height = `${sh}px`;
        }, time + (speed * 1));
        setTimeout(() => {
            arrayItem[fi].style.backgroundColor = "cyan";
            arrayItem[si].style.backgroundColor = "cyan";
        }, time + (speed * 2));
        time = time + (speed * 3);
    }
    setTimeout(() => { disableAll(false) }, time + (speed * 2))
}

export { bubbleSortAnimation }


/*

setTimeout(()=>{
            arrayItem[fi].style.backgroundColor = "yellow";
        },time+(speed*0))
        i++; 
        for(let j=0;j<fi;j++,i++){
            const fi = animationArray[i][0];
            const si = animationArray[i][1];
            const fh = animationArray[i][2];
            const sh = animationArray[i][3];

            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "red";
                arrayItem[si].style.backgroundColor = "red";
            },time+(speed*1));
            setTimeout(()=>{
                arrayItem[fi].style.height = `${fh}px`;
                arrayItem[si].style.height = `${sh}px`;
            },time+(speed*2));
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "cyan";
                arrayItem[si].style.backgroundColor = "cyan";
            },time+(speed*3));
        }
        setTimeout(()=>{
            arrayItem[fi].style.backgroundColor = "cyan";
        },time+(speed*4))
        time = time + (speed*5);

*/