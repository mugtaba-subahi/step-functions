module.exports.lambdaSF2 = async (event, context) => {
  console.log('event:::', event);

  return {
    ...event,
    lambdaSF2: true
  };
};
