import { disableAll } from "../visualizer"

function insertionSort(array){
    let animationArray = [];
    console.log(array)
    for(let i=1;i<array.length;i++){
        let j=i;
        animationArray.push([i]);
        while(j>0){            
            if(array[j]<array[j-1]){
                let tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
            }
            animationArray.push([j-1,j,array[j-1],array[j]]);
            j--;
        }
    }
    console.log(animationArray);
    return animationArray;
}

function insertionSortAnimation(ar,maxSpeed){
    disableAll(true);
    let time =1;
    let speed = 1000 - maxSpeed;
    let animationArray = insertionSort(ar);
    const arrayItem = document.getElementsByClassName('array-item');

    for(let i=0;i<animationArray.length;){
        const fi = animationArray[i][0];
        setTimeout(()=>{
            arrayItem[fi].style.backgroundColor = "yellow";
        },time+(speed*0))
        i++;

        for(let j=0;j<fi;j++,i++){  
            const Fi = animationArray[i][0];
            const Si = animationArray[i][1];
            const Fh = animationArray[i][2];
            const Sh = animationArray[i][3];

            setTimeout(()=>{
                arrayItem[Fi].style.backgroundColor = "red";
                arrayItem[Si].style.backgroundColor = "red";
            },time+(speed*1));
            setTimeout(()=>{
                arrayItem[Fi].style.height = `${Fh}px`;
                arrayItem[Si].style.height = `${Sh}px`;
            },time+(speed*2));
            setTimeout(()=>{
                arrayItem[Fi].style.backgroundColor = "cyan";
                arrayItem[Si].style.backgroundColor = "cyan";
            },time+(speed*3));
            time = time + (speed * 4);
        }
        setTimeout(()=>{
            arrayItem[fi].style.backgroundColor = "cyan";
        },time+(speed*5))
        time = time + (speed*6);
    }
    setTimeout(() => { disableAll(false) }, time + (speed * 7));
}

export {insertionSortAnimation}