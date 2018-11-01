Install project:
- Install NodeJs if not installed
- Install truffle if not installed `npm install -g truffle`
- Run `npm install`

Interaction with Example contract:
- Run truffle developer console by using command `truffle develop` 
- Execute in command line `migrate --reset`
- Get contract instance `Example.deployed().then(i => example = i)`
- Then you can call contract functions using 'example' object. Available functions is `example.number()` to receive current number value and `example.setNumber(yourNumber)` to set number value
- To recompile contracts code use `compile` command in truffle developer console or `truffle compile` in project root
- If new functions was added to Example contract, you will need to redeploy contract by using `migrate --reset` command

Deploying on test net:
- Create account in 'https://infura.io/register'
- Receive api key from infura, and paste it into truffle-config.js 
- Create ethereum account and paste it private key into truffle-config.js
- To deploy on Ropsten test net: run in project root `truffle migrate --network ropsten`
- To deploy on Kovan test net: run in project root `truffle migrate --network kovan`