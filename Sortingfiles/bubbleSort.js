 async function bubbleSort() {
    const element = document.querySelectorAll(".array_col");
    for (let i = 0; i < element.length - 1; i++) {
        for (let j = 0; j < element.length - i - 1; j++) {
            element[j].style.background = "blue";
            element[j+1].style.background = "blue";
            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                await wait(delay);
                swapelements(element[j], element[j + 1]);
            }
            element[j].style.background = 'cyan';
            element[j + 1].style.background = 'cyan';
        }
        element[element.length - 1 - i].style.background = 'green';
    }
    element[0].style.background = 'green';
}

const bubbleSortBtn = document.querySelector(".bubbleSort");
bubbleSortBtn.addEventListener('click',async function(){
    disableSortingButtons();
    disableSize();
    disableadd();
    await bubbleSort();
    enableSortingButtons();
    enableSize();
});