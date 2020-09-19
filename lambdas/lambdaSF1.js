module.exports.lambdaSF1 = async (event, context) => {
  console.log('event:::', event);

  return {
    ...event,
    lambdaSF1: true
  };
};

// try {
//   await Promise.reject({ myMessage: 'manual promise rejection from lambdaSF1' });
// } catch (error) {
//   console.log('errrorr lambdaSF1:::', error);
//   throw JSON.stringify(error);
// }
