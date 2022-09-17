function disableAll(value) {
    document.getElementById("resetBtn").disabled = value;
    document.getElementById("bubbleSort").disabled = value;
    document.getElementById("selectionSort").disabled = value;
    document.getElementById("insertionSort").disabled = value;
    document.getElementById("mergeSort").disabled = value;
    document.getElementById("quickSort").disabled = value;
    document.getElementById("maxSpeed").disabled = value;
    document.getElementById("maxSize").disabled = value;
}

export { disableAll }