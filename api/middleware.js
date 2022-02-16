const checkForNY = (req, res, next) => {
  const { city, countryCode, country, region } = req.body.visitor;
  if (
    city === "New York" &&
    countryCode === "US" &&
    country === "United State" &&
    region === "NY"
  ) {
    next();
  } else {
    return next({ status: 200, message: "not in NYC" });
  }
};

const checkForPizza = (req, res, next) => {
  let pizzaMentioned = false;
  const messages = req.body.items;
  messages.map((msg) => {
    if (msg.kind === "MessageToOperator") {
      const sentence = msg.body.trim();
      sentence.split(/\W+/).map((word) => {
        if (word.toLowerCase() === "pizza") {
          pizzaMentioned = true;
        }
      });
    }
  });
  if (pizzaMentioned) {
    next();
  } else {
    return next({ status: 200, message: "didn't mention pizza" });
  }
};

const checkContactInfoExist = (req, res, next) => {
  const { emailAddress, phoneNumber } = req.body.visitor;
  if (!emailAddress || !phoneNumber) {
    return next({ status: 200, message: "cannot triangulate" });
  } else {
    next();
  }
};

module.exports = {
  checkForPizza,
  checkForNY,
  checkContactInfoExist,
};
