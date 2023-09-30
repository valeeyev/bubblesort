function bubbleSortAsc(arr) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function bubbleSortDesc(arr) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap the elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function sortNumbers(order) {
    const inputNumbers = document.getElementById("inputNumbers").value;
    const numbersArray = inputNumbers.split(',').map(Number);

    let sortedArray;

    if (order === 'asc') {
        sortedArray = bubbleSortAsc(numbersArray);
    } else if (order === 'desc') {
        sortedArray = bubbleSortDesc(numbersArray);
    }

    const outputElement = document.getElementById("output");
    outputElement.textContent = "tartiblangan array: " + sortedArray.join(', ');
}
