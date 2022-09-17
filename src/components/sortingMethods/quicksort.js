import { disableAll } from "../visualizer";

function quickSortAnimation(array,maxSpeed) {  
    disableAll(true);  
    let time = 1; 
    let speed = 1000 - maxSpeed;
    const arrayItem = document.getElementsByClassName('array-item');

    let animationArray = [];
    let animationOp = [];
    
    console.log(array)
    
    quickSort(array, 0, array.length - 1, animationArray,animationOp);
    
    console.log(animationArray);
    console.log(animationOp)
    
    let k=0;
    for(let i=0;i<animationOp.length;i++){
        if(animationOp[i][0]===1){            
            const fi = animationArray[k][0];
            const si = animationArray[k][1];
            console.log(i,k,fi,si);
            k++;
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "red";
                arrayItem[si].style.backgroundColor = "red";
            },time+(speed*0));
            i++;
        }
        if(animationOp[i][0]===2){
            const fi = animationArray[k][0];
            console.log(i,k,fi);
            k++;
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "Green";
            },time+(speed*1));
            i++;
        }
        if(animationOp[i][0]===3){
            i++;
            for(let j =0;j<animationOp[i][0]-1;j++){
                const fi = animationArray[k][0];
                const si = animationArray[k][1];
                console.log(i,k,fi,si);
                k++;
                setTimeout(()=>{
                    arrayItem[fi].style.backgroundColor = "red";
                    arrayItem[si].style.backgroundColor = "red";
                },time+(speed*2));
                setTimeout(()=>{
                    arrayItem[fi].style.backgroundColor = "cyan";
                    arrayItem[si].style.backgroundColor = "cyan";                    
                },time+(speed*3))
                time+=speed*4;
            }
        }
        if(animationOp[i][0]===4){
            const fi = animationArray[k][0];
            const si = animationArray[k][1];
            const fh = animationArray[k][2];
            const sh = animationArray[k][3];
            console.log(i,k,fi,si,fh,sh);
            k++;
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "purple";
                arrayItem[si].style.backgroundColor = "purple";                    
            },time+(speed*6))
            setTimeout(()=>{
                arrayItem[fi].style.height = `${fh}px`;
                arrayItem[si].style.height = `${sh}px`;
            },time+(speed*7))
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "cyan";
                arrayItem[si].style.backgroundColor = "cyan";                    
            },time+(speed*8))
            i++;
        }
        if(animationOp[i][0]===5){
            const fi = animationArray[k][0];
            const si = animationArray[k][1];
            const fh = animationArray[k][2];
            const sh = animationArray[k][3];
            console.log(i,k,fi,si,fh,sh);
            k++;
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "green";
                arrayItem[si].style.backgroundColor = "green";                    
            },time+(speed*9))
            setTimeout(()=>{
                arrayItem[fi].style.height = `${fh}px`;
                arrayItem[si].style.height = `${sh}px`;
            },time+(speed*10))
            setTimeout(()=>{
                arrayItem[fi].style.backgroundColor = "cyan";
                arrayItem[si].style.backgroundColor = "cyan";                    
            },time+(speed*11))
        }
        time+=speed*12;
    }


    disableAll(false);
}

function partition(array, l, r, animationArray,animationOp) {   
    let pivot = r;
    let i = l;
    let j = r;    
    animationOp.push([2]);
    animationArray.push([pivot]);
    while (i < j) {
        let cnt=0;
        while (i<=j && array[i] < array[pivot]){
            cnt++;
            animationArray.push([i,pivot])
            i++;
        }
        animationOp.push([3]);
        animationOp.push([cnt]);
        cnt=0;
        while (j>=i && array[j] >= array[pivot]){
            cnt++;
            animationArray.push([j,pivot])
            j--;
        }
        animationOp.push([3]);
        animationOp.push([cnt]);
        if (i < j) {
            let tmp = array[i]
            array[i] = array[j];
            array[j] = tmp;
            animationOp.push([4]);
            animationArray.push([i,j,array[i],array[j]]);
        }
    }
    let tmp = array[pivot];
    array[pivot] = array[i];
    array[i] = tmp;
    animationOp.push([5]);
    animationArray.push([i,j,array[i],array[pivot]]);
    return i;
}

function quickSort(array, left, right, animationArray,animationOp) {
    if (left < right) {
        animationOp.push([1]);
        animationArray.push([left,right]);
        let part = partition(array, left, right, animationArray,animationOp);
        quickSort(array, left, part-1, animationArray,animationOp);
        quickSort(array, part + 1, right, animationArray,animationOp);
    } 
}
export { quickSortAnimation }