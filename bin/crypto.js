#!/usr/bin/env node

const {program} = require('commander');
const pkg=require('../package.json');

program
    .version(pkg.version)
    .description('A command-line app using commander')
    .command('key','Manage API Key -- https://pro.coinmarketcap.com/')
    .parse(process.argv);
