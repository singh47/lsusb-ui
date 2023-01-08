const { exec }  = require('child_process')
const { stdout, stderr, stdin } = require('process');

// on load function
async function listUsb() {
    exec('./lsusb/lsusb -v', (error, stdout, stderr) => {
    if (error){
        console.error("error executing command")
        return
    }
    document.getElementById("terminal").innerHTML = stdout;
    })
}

// on refresh
async function refresh() {
    exec('./lsusb/lsusb -v', (error, stdout, stderr) => {
    if (error){
        console.error("error executing command")
        return
    }
    document.getElementById("terminal").innerHTML = stdout;
    })
}

window.onload = listUsb
document.getElementById("refresh").addEventListener('click', refresh)
                                          