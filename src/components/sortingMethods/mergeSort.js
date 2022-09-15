function mergeSortAnimation(array,maxSpeed){
    let time = 1;
    let Speed = 1000 - maxSpeed;

    let animationArray=[];
    mergeSort(array,0,array.length-1,animationArray)

    console.log(animationArray,array)
}

function mergeSort(array,l,r,animationArray){
    if(l<r){    
        let mid = l + parseInt((r-l)/2);
        animationArray.push([mid]);
        mergeSort(array,l,mid,animationArray);
        mergeSort(array,mid+1,r,animationArray);
        merge(array,l,mid,r,animationArray);
    }
}

function merge(array , l , mid , r , animationArray){
    let size1 = mid-l+1;
    let size2 = r-mid;
    
    let ar1=[],ar2=[];
    for(let i=0;i<size1;i++){
        ar1.push(array[l+i]);        
    }
    
    for(let i=0;i<size2;i++){
        ar2.push(array[mid+1+i]);
    }

    let i=0,j=0,k=l;
    while(i<size1 && j<size2){
        if(ar1[i]<=ar2[j]){
            array[k]=ar1[i];
            i++;
            animationArray.push([l+i,mid+1+j,array[k],ar2[j]]);
        }
        else{
            array[k]=ar2[j];
            j++;
            animationArray.push([l+i,mid+1+j,ar1[i],array[k]]);
        }
        k++;
    }

    while(i<size1){
        array[k]=ar1[i];
        k++;
        i++;
        animationArray.push([i,k,ar1[i],array[k]])
    }
    while(j<size2){
        array[k]=ar2[j];
        k++;
        j++;
        animationArray.push([j,k,ar2[j],array[k]])
    }
}

export {mergeSortAnimation}