const {program} = require('commander');
const methods=require('../commands/key.js');
program
    .command('set') 
    .description('Set the API Key -- Get at https://pro.coinmarketcap.com/')
    .action(methods.set);

program
    .command('show') 
    .description('Show the API Key ')
    .action(methods.show);
    

program
    .command('remove') 
    .description('Remove the API Key')
    .action(() => console.log('Hello from remove'));
program.parse(methods.remove);