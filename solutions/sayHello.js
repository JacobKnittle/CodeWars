function sayHello(name, city, state) {
  const fullName = name.join(' ');
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

const result = sayHello(['John', 'Smith'], 'Los Angeles', 'CA');
