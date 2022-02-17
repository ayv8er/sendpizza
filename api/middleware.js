const checkForNYC = (req, res, next) => {
  const { city, countryCode, country, region } = req.body.visitor;
  console.log(req.body);
  if (
    city === "New York" &&
    countryCode === "US" &&
    country === "United State" &&
    region === "NY"
  ) {
    next();
  } else {
    return next({ status: 200, message: "customer not located in NYC" });
  }
};

const checkContactInfoExist = (req, res, next) => {
  const { emailAddress, phoneNumber } = req.body.visitor;
  if (!emailAddress || !phoneNumber) {
    return next({
      status: 200,
      message:
        "will not be able to triangulate without an email address and phone number",
    });
  } else {
    next();
  }
};

const checkForPizza = (req, res, next) => {
  let pizzaMentioned = false;
  const messages = req.body.items;
  messages.map((msg) => {
    if (msg.kind === "MessageToOperator") {
      const sentence = msg.body.trim();
      const words = sentence.split(/\W+/);
      words.map((word, index) => {
        if (word.toLowerCase() === "pizza") {
          if (!words[index + 1] || words[index + 1].toLowerCase() !== "bike") {
            pizzaMentioned = true;
          }
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

module.exports = {
  checkForPizza,
  checkForNYC,
  checkContactInfoExist,
};
