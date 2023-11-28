// Function to generate an array with each element
function nextNumber(arr) {
  // Checks if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }

  // Checks if the array is empty
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  // Creates a array with each element incremented by 1
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}

// Function to handle the button click and calculate the next numbers
function calculateNextNumber() {
  // Get the input array from the HTML input element and convert it to an array of numbers
  const inputArray = document.getElementById('inputArray').value.split(',').map(Number);

  try {
    // Call the nextNumber function and get the result array
    const resultArray = nextNumber(inputArray);
    
    // Display the result array in the HTML element with id 'result'
    document.getElementById('result').innerHTML = `Result: [${resultArray.join(', ')}]`;
  } catch (error) {
    // Handle any errors that may occur and display the error message in the HTML element with id 'result'
    document.getElementById('result').innerHTML = `Error: ${error.message}`;
  }
}
