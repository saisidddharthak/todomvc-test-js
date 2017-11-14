## Install Prerequisites
These prerequisites must be installed first. 
1. [Node.js](https://nodejs.org/en/download/) Version 7+
2. [ChromeDriver](https://chromedriver.storage.googleapis.com/index.html?path=2.33/) 2.33 [Note: Configure the PATH variable]

## Install todomvc-test-js
From your project root folder, run the below command,
```bash
npm install
```

## Running Tests
From your project root folder, run the below command,

On Linux or Mac-OSX
```bash
npm run test_OSX_Linux
```

On Windows
```cmd
npm run test_Windows
```

## Running Test on multiple browser (e.g., Firefox)
Set the environment variable **SELENIUM_BROWSER** as firefox 

e.g., command to run from bash terminal

```bash
env SELENIUM_BROWSER=firefox npm run test_OSX_Linux
```

## Reports
Default location of formatted HTML report are stored in **./report** directory

