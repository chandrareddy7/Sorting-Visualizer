// disable sorting buttons during sorting
function disableSortingButtons() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
}

// enable sorting buttons after sorting
function enableSortingButtons() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
}

// disable size slider during sorting
function disableSize() {
  document.querySelector("#size").disabled = true;
}

// enable size slider after sorting
function enableSize() {
  document.querySelector("#size").disabled = false;
}

// disable new array button during sorting
function disableNewArrayButton() {
  document.querySelector(".newArray").disabled = true;
}

// disable new array button after sorting
function enableNewArrayButton() {
  document.querySelector(".newArray").disabled = false;
}

let arraysize = document.querySelector("#size");

let delay = 200;

const delayinput = document.querySelector("#speed");

delayinput.addEventListener('input',function(){
  delay = 320 - parseInt(delayinput.value);
})

let array = [];

function createNewArray(no_cols = 10) {
  deleteAllCols();
  array = [];
  for (let i = 0; i < no_cols; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  const cols = document.querySelector(".arrayrow");

  for (let i = 0; i < no_cols; i++) {
    const col = document.createElement("div");
    col.style.height = array[i] + "px";
    col.classList.add("array_col");
    col.classList.add("flex-item");
    col.classList.add("col_id" + i);
    col.innerHTML = array[i];
    cols.appendChild(col);
  }
}

function deleteAllCols() {
  const cols = document.querySelector(".arrayrow");
  cols.innerHTML = "";
  const arrelements = document.querySelector(".array");
  arrelements.innerHTML = "";
}

const newArray = document.querySelector(".newRandomArrayButton");
newArray.addEventListener("click", function () {
  disableadd();
  enableSortingButtons();
  enableSize();
  createNewArray(arraysize.value);
});

const newele = document.querySelector("#newele");
const allarray = document.querySelector(".array");
newele.addEventListener("click", function () {
  const ele = document.createElement("input");
  ele.id = array.length;
  ele.type = "text";
  ele.inputMode = "numeric";
  ele.classList.add("element");
  ele.addEventListener("change", onchange);
  allarray.appendChild(ele);
  ele.focus();
});

function onchange() {
  const cols = document.querySelector(".arrayrow");
  if (this.id < array.length) {
    array[this.id] = Number.parseInt(this.value);
    const ebar = document.getElementById("col_id" + this.id);
    ebar.style.height = array[this.id];
  } else {
    array[this.id] = Number.parseInt(this.value);
    const col = document.createElement("div");
    col.style.height = array[this.id] + "px";
    col.classList.add("array_col");
    col.classList.add("flex-item");
    col.classList.add("col_id" + this.id);
    col.innerHTML = this.value;
    cols.appendChild(col);
  }
}

const newArrayButton = document.querySelector("#newCustomArrayButton");

newArrayButton.addEventListener("click", function () {
  enableadd();
  deleteAllCols();
  disableSize();
});

function disableadd() {
  const add = document.querySelector("#newele");
  add.style.display = "none";
}

function enableadd() {
  const add = document.querySelector("#newele");
  add.style.display = "inline";
}

function swapelements(element_1,element_2){
  let temp = element_1.style.height;
  element_1.style.height = element_2.style.height;
  element_2.style.height = temp; 

  element_1.innerHTML = parseInt(element_1.style.height,10);
  element_2.innerHTML = parseInt(element_2.style.height,10);
}

function wait(time){
  return new Promise(e => {
    setTimeout(() => { e('')},time);
  })
}