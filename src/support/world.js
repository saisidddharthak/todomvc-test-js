const dotenv = require('dotenv');
const env = require('./environment');

function CustomWorld() {
    // Read configuration file or env vars
    dotenv.config({
        silent: true,
    });
    this.env = env;

    this.navigateToApp = () => {
        const fullurl = `${env.todo.url}`;
        return this.driver.get(fullurl);
    };
}

module.exports = function () {
    this.World = CustomWorld;
};