//Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ["red", "blue", "green", "yellow", "orange"];

// colors.reverse();

for (let i = colors.length - 1, j = 0; i >= colors.length / 2; i--, j++) {
  let color = colors[j];
  colors[j] = colors[i];
  colors[i] = color;
}

console.log(colors);
