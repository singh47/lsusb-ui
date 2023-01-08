const { exec }  = require('child_process')
const { stdout, stderr, stdin } = require('process');


// execute command and update results
const executeCommand = (command) => {{
    exec(command, (error, stdout, stderr) => {
        if (error){
            console.error("error executing command")
            return
        }
        document.getElementById("terminal").innerHTML = stdout;
    })
}}

// on load function
async function listUsb() {
    executeCommand('./lsusb/lsusb -v')
}

// on refresh
async function refresh() {
    executeCommand('./lsusb/lsusb -v')
}

// vendors
async function vendors() {
    executeCommand('./lsusb/lsusb -p')
}

// tree view
async function treeView() {
    executeCommand('./lsusb/lsusb -t')
}

window.onload = listUsb
document.getElementById("refresh").addEventListener('click', refresh)
document.getElementById("vendors").addEventListener('click', vendors)
document.getElementById("treeView").addEventListener('click', treeView)
                                          