"use strict";
const fs = require('fs');
const axios = require('axios');
const color = require('kleur')

async function checkusername(username) {
    const url = `https://github.com/${username}`;
    try {
        const response = await axios.get(url);
        if (response.status === 404) { return true; }
         else { return false;
          }
    } catch (error) {
        if (error.response && error.response.status === 404) {return true; } 
        else { return false;
         }
    }
}

(async () => {
    const platform = process.platform;
    if (platform === 'win32') { process.title = 'github.com/infallibless' }

    try {
        const data = fs.readFileSync('usernames.txt', 'utf-8');
        const usernames = data.split('\n').map(line => line.trim());

        const done = [];
        for (const username of usernames) {
            const succ = await checkusername(username);
            if (succ) {
                done.push(username);
                console.log(color.green(`username '${username}' is available.`));
                fs.appendFileSync('available.txt', username + '\n');
            } else {
                console.log(color.red(`username '${username}' is not available.`));
            }
        }

        console.log(`\n${done.length} usernames are available.`);
    } catch (err) {console.error(err);
    }
})();
