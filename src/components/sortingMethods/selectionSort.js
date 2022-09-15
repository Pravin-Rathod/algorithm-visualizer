import { disableAll } from "../visualizer";

function selectionSortAnimation(ar, maxSpeed){
    disableAll(true);
    let time=1;
    let speed = 1000-maxSpeed;
    const animationArray = selectionSort(ar, maxSpeed);
    const arrayItem = document.getElementsByClassName('array-item');

    let k=1;
    for(let i=0;i<animationArray.length;i++){
        for(let j=0;j<ar.length-k;j++,i++){
            const fi = animationArray[i][0];
            const si = animationArray[i][1];

            setTimeout(() => {
                arrayItem[fi].style.backgroundColor = "yellow";
                arrayItem[si].style.backgroundColor = "red";
            }, time + (speed * 0));
            setTimeout(() => {
                arrayItem[fi].style.backgroundColor = "cyan";
                arrayItem[si].style.backgroundColor = "cyan";
            }, time + (speed * 1));
            time = time + (speed * 2);
        }
        const fi = animationArray[i][0];
        const si = animationArray[i][1];
        const fh = animationArray[i][2];
        const sh = animationArray[i][3];

        setTimeout(() => {
            arrayItem[fi].style.backgroundColor = "red";
            arrayItem[si].style.backgroundColor = "red";
        }, time + (speed * 2));
        setTimeout(() => {
            arrayItem[fi].style.height = `${sh}px`;
            arrayItem[si].style.height = `${fh}px`;
        }, time + (speed * 3));
        setTimeout(() => {
            arrayItem[fi].style.backgroundColor = "cyan";
            arrayItem[si].style.backgroundColor = "cyan";
        }, time + (speed * 4));
        time = time + (speed * 5);
        k++;
    }
    setTimeout(() => { disableAll(false) }, time + (speed * 6))
}

function selectionSort(array) {
    let animationArray = [];
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            animationArray.push([min, j]);
            if (array[min] > array[j]) {
                min = j;
            }
        }
        animationArray.push([i, min,array[i], array[min]]);
        let tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
    }
    console.log(animationArray);
    return animationArray;
}

export { selectionSortAnimation }