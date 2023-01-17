const { exec }  = require('child_process')
const { stdout, stderr, stdin } = require('process');
const rootPath = require('electron-root-path').rootPath;

// execute command and update results
const executeCommand = (command) => {{
    exec(command, (error, stdout, stderr) => {
        if (error){
            console.error("error executing command")
            return ;
        }
        document.getElementById("terminal").innerHTML = stdout;
    })
}}

// on load function
async function listUsb() {
    executeCommand(rootPath.concat("/lsusb -v"))
}

// on refresh
async function refresh() {
    executeCommand(rootPath.concat("/lsusb -v"))
}

// vendors
async function vendors() {
    executeCommand(rootPath.concat("/lsusb -p"))
}

// tree view
async function treeView() {
    executeCommand(rootPath.concat("/lsusb -t"))
}

window.onload = listUsb
document.getElementById("refresh").addEventListener('click', refresh)
document.getElementById("vendors").addEventListener('click', vendors)
document.getElementById("treeView").addEventListener('click', treeView)
                                          