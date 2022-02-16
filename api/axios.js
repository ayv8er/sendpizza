const axios = require("axios");

const orderPizza = (req, res, next) => {
  const { emailAddress, phoneNumber } = req.body.visitor;
  data = {
    email: emailAddress,
    phone: phoneNumber,
    "pizza-size": "small",
    topping: "cheese",
  };
  axios
    .post("https://young-robust-angolatitan.glitch.me/olark", data)
    .then((res) => {
      return next({ status: 200, message: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  orderPizza,
};
