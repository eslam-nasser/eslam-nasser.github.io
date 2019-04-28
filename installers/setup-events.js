/* eslint-disable import/no-extraneous-dependencies */
const { app } = require('electron');

const ChildProcess = require('child_process');
const path = require('path');

// check out https://github.com/electron/windows-installer#handling-squirrel-events
// for more information on squirrel events for windows

module.exports = {
    handleSquirrelEvent() {
        if (process.argv.length === 1) {
            return false;
        }

        const appFolder = path.resolve(process.execPath, '..');
        const rootAtomFolder = path.resolve(appFolder, '..');
        const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
        const exeName = path.basename(process.execPath);

        const spawn = (command, args) => {
            let spawnedProcess;

            try {
                spawnedProcess = ChildProcess.spawn(command, args, { detached: true });
            } catch (error) {
                console.warn(error);
            }

            return spawnedProcess;
        };

        const spawnUpdate = args => spawn(updateDotExe, args);

        const squirrelEvent = process.argv[1];
        switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName]);

            setTimeout(app.quit, 1000);
            break;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(app.quit, 1000);
            break;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            app.quit();
            break;
        default:
            return true;
        }
        return true;
    },
};
