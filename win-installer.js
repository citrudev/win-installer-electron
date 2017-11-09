var appName = process.argv[2]
var appDirectory = process.argv[3]
var outputDirectory = process.argv[4]
var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: appDirectory,
    outputDirectory: outputDirectory,
    authors: 'citrudev',
    exe: appName +`.exe`
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));