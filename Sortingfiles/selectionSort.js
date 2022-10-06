async function selectionSort(){
    const element = document.querySelectorAll(".array_col");
    for(let i = 0 ; i<element.length;i++){
        let minimum = i;
        element[i].style.background = 'blue';
        for(let j = i+1;j<element.length;j++){
            element[j].style.background = 'red';

            await wait(delay);
            if(parseInt(element[j].style.height)<parseInt(element[minimum].style.height)){
                if(minimum!==i){
                    element[minimum].style.background = 'cyan';
                }
                minimum = j;
            }
            else{
                element[j].style.background = 'cyan';
            }
        }
        await wait(delay);
        swapelements(element[minimum],element[i]);
        element[minimum].style.background = 'cyan';
        element[i].style.background = 'green';
    }
}

const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click',async function(){
    disableSortingButtons();
    disableSize();
    disableadd();
    await selectionSort();
    enableSize();
    enableSortingButtons();
});