import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const owner = "0x186a761645f2A264ad0A655Fb632Ca99150803A9";
  const name = "Abdulyekeen Lukman (Ibukun)";
  const r = "135";
  const g = "206";
  const b = "235";

  await deploy("Metadata", {
    from: deployer,
    args: [owner, name, r, g, b],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after CheckIn.
  const metadata = await hre.ethers.getContract<Contract>("Metadata", deployer);
  console.log("\nBatchRegistry deployed to:", await metadata.getAddress());
  console.log("Remember to update the allow list!\n");
};

export default deployYourContract;

deployYourContract.tags = ["BatchRegistry"];
