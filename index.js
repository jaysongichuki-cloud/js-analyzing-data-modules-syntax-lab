


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  args.forEach(arr => {
    combinedObject.users = [...combinedObject.users, ...arr];
  });

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}