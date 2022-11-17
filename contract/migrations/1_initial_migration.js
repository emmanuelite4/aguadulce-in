const Migrations = artifacts.require("Migrations");
const MemberRole = artifacts.require("MemberRole")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MemberRole);
};
