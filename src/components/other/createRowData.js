import faker from "faker";

function createFakeRow(index) {
  return {
    id: index,
    county: faker.address.county(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode()
  };
}

export default function createRowData(count) {
  return [...Array(count).keys()].map(i => createFakeRow(i));
}
