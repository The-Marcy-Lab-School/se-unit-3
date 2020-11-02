console.log('App is loading...');

const runApp = () => {
  const number = getRandomNumber();
  const message = getMessage(number);

  alert(message);
}

runApp();

const getRandomNumber = () => {
  return Math.flour(Math.rand() * 100) + 1;
}

const getMessage = (num) => {
  if(num > 100){
    throw new Error('Number must be less than 100')
  return `Welcome to the number drawing! Today's number is ${num}`;
}