const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click',async function(){
    let element = document.querySelectorAll(".array_col");
    let left = 0,right = parseInt(element.length)-1;
    disableSortingButtons();
    disableSize();
    disableadd();
    await mergeSort(element,left,right);
    enableSortingButtons();
    enableSize();
});

async function mergeSort(element,left,right){
    if(left>=right){
        return ;
    }
    const mid = left + Math.floor((right-left)/2);
    await mergeSort(element,left,mid);
    await mergeSort(element,mid+1,right);
    await merge(element,left,mid,right);
}

async function merge(element,left,mid,right){
    const n1 = mid-left+1;
    const n2 = right-mid;
    let leftArray = new Array(n1);
    let rightArray = new Array(n2);
    for(let i= 0;i<n1;i++){
        await wait(delay);
        element[left+i].style.background = 'orange';
        leftArray[i] = element[left+i].style.height;
    }
    for(let i = 0;i<n2;i++){
        await wait(delay);
        element[mid+1+i].style.background = 'yellow';
        rightArray[i] = element[mid+i+1].style.height;
    }
    await wait(delay);
    let i = 0,j = 0,k = left;
    while(i<n1 && j<n2){
        await wait(delay);
        if(parseInt(leftArray[i])<=parseInt(rightArray[j])){
            if((n1+n2)===element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = leftArray[i];
            element[k].innerHTML = parseInt(element[k].style.height,10);
            i++;
            k++;
        }
        else{
            if((n1+n2)===element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = rightArray[j];
            element[k].innerHTML = parseInt(element[k].style.height,10);
            j++;
            k++;
        }
    }
    while(i<n1){
        await wait(delay);
        if((n1+n2)===element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = leftArray[i];
        element[k].innerHTML = parseInt(element[k].style.height,10);
        i++;
        k++;
    }
    while(j<n2){
        await wait(delay);
        if((n1+n2)===element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = rightArray[i];
        element[k].innerHTML = parseInt(element[k].style.height,10);
        j++;
        k++;
    }
}