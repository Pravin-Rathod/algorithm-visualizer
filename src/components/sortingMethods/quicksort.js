function quickSortAnimation(array,maxSpeed) {
    let arr = array;
    arr.sort((a,b)=>a-b);
    const animationArray = [];
    console.log(array)
    quickSort(array, 0, array.length - 1, animationArray);
    console.log(arr===array);
}

function partition(array, l, r, animationArray) {
    let pivot = r;
    let i = l;
    let j = r;
    console.log(pivot,i,r);
    while (i < j) {
        console.log(array)
        while (i<=j && array[i] < array[pivot]){
            i++;
            console.log("in i....",i);
        }
        while (j>=i && array[j] >= array[pivot]){
            j--;
            console.log("in j....",j);
        }
        if (i < j) {
            let tmp = array[i]
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    console.log(pivot,i,r);
    console.log(array)
    let tmp = array[pivot];
    array[pivot] = array[i];
    array[i] = tmp;

    return i;
}

function quickSort(array, left, right, animationArray) {
    if (left < right) {
        console.log(left,right)
        let part = partition(array, left, right, animationArray);
        quickSort(array, left, part-1, animationArray);
        quickSort(array, part + 1, right, animationArray);
    } 
}
export { quickSortAnimation }