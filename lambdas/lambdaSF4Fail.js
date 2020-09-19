module.exports.lambdaSF4Fail = async (event, context) => {
  console.log('event:::', JSON.stringify(event, null, 2));

  return {
    ...event,
    lambdaSF4Fail: true
  };
};
