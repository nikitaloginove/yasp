fetch('https://rcslabs.ru/ttrp1.json')
  .then(response => response.json())
  .then(data => {
  
    document.querySelector('.title').textContent = 'Количество пройденных тестов '+ data.title;
    document.querySelector('.dev-front').textContent = data.dev.front;
    document.querySelector('.dev-back').textContent = data.dev.back;
    document.querySelector('.dev-db').textContent = data.dev.db;
    document.querySelector('.test-front').textContent = data.test.front;
    document.querySelector('.test-back').textContent = data.test.back;
    document.querySelector('.test-db').textContent = data.test.db;
    document.querySelector('.prod-front').textContent = data.prod.front;
    document.querySelector('.prod-back').textContent = data.prod.back;
    document.querySelector('.prod-db').textContent = data.prod.db;
    document.querySelector('.norm').textContent = data.norm;

    const total = data.dev.front + data.test.front + data.prod.front;
    document.documentElement.style.setProperty('--total', `${total}`);
    document.documentElement.style.setProperty('--dev-front', `${data.dev.front / total * 100}%`);
    document.documentElement.style.setProperty('--test-front', `${data.test.front / total * 100}%`);
    document.documentElement.style.setProperty('--prod-front', `${data.prod.front / total * 100}%`);

    const columnsHeight = document.querySelector('.columns').offsetHeight / 2;
    document.querySelector('.dev-front').style.height = `${data.dev.front / total * columnsHeight}px`;
    document.querySelector('.dev-back').style.height = `${data.dev.back / total * columnsHeight}px`;
    document.querySelector('.dev-db').style.height = `${data.dev.db / total * columnsHeight}px`;
    document.querySelector('.test-front').style.height = `${data.test.front / total * columnsHeight}px`;
    document.querySelector('.test-back').style.height = `${data.test.back / total * columnsHeight}px`;
    document.querySelector('.test-db').style.height = `${data.test.db / total * columnsHeight}px`;
    document.querySelector('.prod-front').style.height = `${data.prod.front / total * columnsHeight}px`;
    document.querySelector('.prod-back').style.height = `${data.prod.back / total * columnsHeight}px`;
    document.querySelector('.prod-db').style.height = `${data.prod.db / total * columnsHeight}px`;
    document.querySelector('.norm').style.height = `${data.norm / total * columnsHeight}px`;
  })
  .catch(error => console.error('Error:', error));