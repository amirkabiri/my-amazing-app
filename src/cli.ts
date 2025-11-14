// #!/usr/bin/env node
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

console.log('hello world')
