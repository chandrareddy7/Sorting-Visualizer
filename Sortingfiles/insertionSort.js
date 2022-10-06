async function insertionSort(){
    const element = document.querySelectorAll(".array_col");
    element[0].style.background = 'green';
    for(let i = 1;i<element.length;i++){
        let j = i-1;
        let key = element[i].style.height;
        element[i].style.background = 'blue';
        await wait(delay);
        while(j>=0 && (parseInt(element[j].style.height) > parseInt(key))){
            element[j].style.background = 'blue';
            element[j+1].style.height = element[j].style.height;
            element[j+1].innerHTML = parseInt(element[j+1].style.height,10);
            j--;

            await wait(delay);

            for(let k = i;k>=0;k--){
                element[k].style.background = 'green';
            }
        }
        element[j+1].style.height = key;
        element[j+1].innerHTML = parseInt(element[j+1].style.height,10);

        element[i].style.background = 'green';
    }
}

const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click',async function(){
    disableSortingButtons();
    disableSize();
    disableadd();
    await insertionSort();
    enableSize();
    enableSortingButtons();
});