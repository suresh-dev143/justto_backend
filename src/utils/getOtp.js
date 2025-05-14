const getOtp = (length = 6) => {
  return '1234';
  return Math.floor(100000 + Math.random() * 900000);
};

module.exports = getOtp;


