const faker = require('faker');

const text = faker.name.findName();

console.log(text);

fixture('test')

    test('jee', async () => {
        console.log(text)
    })