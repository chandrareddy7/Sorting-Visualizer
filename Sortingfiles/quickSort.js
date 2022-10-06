async function quickSort(element, left, right){
    if(left<right){
        let pivot = await partition(element,left,right);
        await quickSort(element,left,pivot-1);
        await quickSort(element,pivot+1,right);
    }
    else{
        if(left>=0 && right>=0 && left<element.length && right<element.length){
            element[left].style.background = 'green';
            element[right].style.background = 'green';
        }
    }
}

async function partition(element,left,right){
    let i = left-1;
    element[right].style.background = 'red';
    for(let j = left;j<=right-1;j++){
        element[j].style.background = 'yellow';
        await wait(delay);
        if(parseInt(element[j].style.height)<parseInt(element[right].style.height)){
            i++;
            swapelements(element[i],element[j]);
            element[i].style.background = 'orange';
            if(i!=j){
                element[j].style.background = 'orange';
            }
            await wait(delay);
        }
        else{
            element[j].style.background = 'pink';
        }
    }
    i++;
    await wait(delay);
    swapelements(element[i],element[right]);
    element[right].style.background = 'pink';
    element[i].style.background  = 'green';
    await wait(delay);
    for(let k = 0 ;k<element.length;k++){
        if(element[k].style.background!='green'){
            element[k].style.background = 'cyan';
        }
    }
    return i;
}

const quickSortBtn = document.querySelector(".quickSort");
quickSortBtn.addEventListener('click',async function(){
    let element = document.querySelectorAll(".array_col");
    let left = 0 ;
    let right = element.length-1;
    disableSortingButtons();
    disableSize();
    disableadd();
    await quickSort(element,left,right);
    enableSortingButtons();
    enableSize();
})