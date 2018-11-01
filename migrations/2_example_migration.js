var Example = artifacts.require("./Example.sol");

var number = 999;

module.exports = function(deployer) {
    deployer.deploy(Example, number);
};
