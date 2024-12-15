const protocolsList = [
    'stargate',
    'aptos-bridge',
    'btc.b',
    'coredao',
    'harmony',
    'testnet-bridge',
    'merkly',
    'zerius',
    'l2pass',
    'l2telegraph',
    'whale',
]

const args = process.argv.slice(2)
if (args[1] === 'refresh') {
    cleanByChecker('layerzero')
}

let jsonData = []
let p
let csvWriter
let wallets = readWallets(config.modules.layerzero.addresses)
let iterations = wallets.length
let iteration = 1
let csvData = []
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
