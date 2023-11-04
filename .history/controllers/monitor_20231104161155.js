
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const frontRefresh = async (req, res) => {
        const scriptPath = './scripts/front_refresh.sh';
        const logFilePath = '../refresh_front_react_app.log';

        const filePath = '/home/.data';

        fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                        console.error(`Error reading file: ${err}`);
                        return;
                }

                // Execute the .sh script and append the output to a log file
                const scriptExecution = exec(`sh ${scriptPath} ${data}> ${logFilePath} 2>&1`, (error, stdout, stderr) => {
                        if (error) {
                                console.error(`Error executing script: ${error}`);
                                return;
                        }
                        console.log(`Script output:\n${stdout}`);
                });

                // Log the start time of script execution
                fs.appendFileSync(logFilePath, `Script started at ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}\n`);

                // Handle script exit
                scriptExecution.on('exit', (code) => {
                        fs.appendFileSync(logFilePath, `Script exited with code ${code}\n`);
                        console.log(`Script exited with code ${code}`);
                });

                // Handle errors
                scriptExecution.on('error', (error) => {
                        fs.appendFileSync(logFilePath, `Error executing script: ${error}\n`);
                });

        });
}


const backRefresh = async (req, res) => {
        const scriptPath = './scripts/refresh_mysql_connector_server.sh';
        const logFilePath = '../refresh_mysql_connector_server.log';

        const filePath = '/home/.data'; // Replace with the actual absolute path to your .data file

        fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                        console.error(`Error reading file: ${err}`);
                        return;
                }

                // Execute the .sh script and append the output to a log file
                const scriptExecution = exec(`sh ${scriptPath} ${data}> ${logFilePath} 2>&1`, (error, stdout, stderr) => {
                        if (error) {
                                console.error(`Error executing script: ${error}`);
                                return;
                        }
                        console.log(`Script output:\n${stdout}`);
                });

                // Log the start time of script execution
                fs.appendFileSync(logFilePath, `Script started at ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}\n`);

                // Handle script exit
                scriptExecution.on('exit', (code) => {
                        fs.appendFileSync(logFilePath, `Script exited with code ${code}\n`);
                        console.log(`Script exited with code ${code}`);
                });

                // Handle errors
                scriptExecution.on('error', (error) => {
                        fs.appendFileSync(logFilePath, `Error executing script: ${error}\n`);
                });

        });
}



module.exports = {
        backRefresh,
        frontRefresh
};