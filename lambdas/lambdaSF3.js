module.exports.lambdaSF3 = async (event, context) => {
  console.log('event:::', event);

  return {
    ...event,
    lambdaSF3: true
  };
};
