
import chalk from 'chalk';
import cli from '@lib/cli'
import inquirer from 'inquirer';
import readline from 'readline';
import os from 'os'
import util from 'util';

const eol = os.EOL;


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); 

function awaitKeypress() {
    const promise = new Promise<string>( (resolve, reject) => {

        const listener = (str, key) => {
            console.log('Keypress<<')
            // readline.emitKeypressEvents(undefined);
            process.stdin.setRawMode(false); 
            resolve('--key-pressed--')
            process.stdin.removeListener('keypress', listener)
        }

        process.stdin.on('keypress', listener )
    } )
    return promise
}

async function main() {
    console.log('Press a key');
    const response = await awaitKeypress()
    console.log("Flow resumed, response is:", response)
}

main()




// const rl = readline.s

// const readline = require('readline');

// async function main(){
//     cli.header( chalk.red("🅲 🅻 🅸") )
//     cli.banner("BANNER")
//     cli.display("Display Banner - Show the CLI Header and Banner Components")
//     await cli.run()

//     const pressAnyKey = require('press-any-key');
    
//     try {
//         await pressAnyKey("Press any key to continue")
//         console.log("JUICE, SQUEEZE")
//     }
//     catch {
//         console.log("JUICE, CANCELLED")
//     }

// }

// main()

// const keyMap = new Map();
// keyMap.set('a', 'AAPL');
// keyMap.set('b', 'BA');
// keyMap.set('c', 'CSCO');
// keyMap.set('d', 'DD');
// keyMap.set('e', 'XOM');
// keyMap.set('f', 'FB');
// keyMap.set('g', 'GOOGL');
// keyMap.set('m', 'MSFT');

// function listKeys() {

//   console.log(`${eol}keys`);

//   keyMap.forEach((value, key) => {
//     console.log(`${key} - ${value}`);
//   });

//   console.log();
// }


// process.stdin.on('keypress', (str, key) => {

//   if (key.ctrl && key.name === 'c') {
//     process.exit(); // eslint-disable-line no-process-exit
//   } 

//   else if (key.name === 'l') {
//     listKeys();
//   } 

//   else {
//     if ( keyMap.has(str )) {
//         const symbol = keyMap.get(str)
//         console.log(`${symbol} astock price is yaddda yadda yadda`)
//     } 
//     else {
//       console.log(`No symbol defined for "${str}" key.`);
//     }
//   }

// });


