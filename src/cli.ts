#!/usr/bin/env node
//
// import { Command } from 'commander';
// import packageJson from '../package.json';
// import { exampleCommand } from './commands/example-command';
//
// const program = new Command();
//
// program
//   .name('my-awesome-npm-cmd')
//   .description(
//     'My Awesome CLI App'
//   )
//   .version(packageJson.version);
//
// program
//   .command('help', { isDefault: false })
//   .description('Show help information')
//   .action(() => {
//     program.outputHelp();
//   });
//
// program
//   .command('example')
//   .description('This is the example command')
//   .action(exampleCommand);
//
// // Show help if no command provided
// if (process.argv.length === 2) {
//   program.outputHelp();
//   process.exit(0);
// }
//
// program.parse();

const { execSync } = require('child_process');

const port = process.argv.slice(-1)[0];

try{
    console.log(execSync(`lsof -i :${port} | grep -v "COMMAND" | awk '{print $2}' | xargs kill -9`).toString());
}catch(e){
    console.log('no app running on this port')
}
