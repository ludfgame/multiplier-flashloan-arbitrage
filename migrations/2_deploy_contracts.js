const Flashswap = artifacts.require("FlashLoan");

module.exports = function (deployer) {
  deployer.deploy(Flashswap);
};
