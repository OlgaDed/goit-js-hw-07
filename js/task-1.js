function logToConsoleAndPage(message) {
  console.log(message);
  const output = document.getElementById('console-output');
  output.textContent += message + '\n';
}

const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

logToConsoleAndPage(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('ul li');
  const elementsCount = categoryElements.length;

  logToConsoleAndPage(`Category: ${categoryTitle}`);
  logToConsoleAndPage(`Elements: ${elementsCount}`);
});
