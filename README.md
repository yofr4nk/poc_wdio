
Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)
- Selenium Server: Here's how to set up a server: [Selenium HQ](https://github.com/SeleniumHQ/docker-selenium)

- Docker 

Getting Started
---------------

Install the dependencies:

```bash
yarn install
```

Start a Selenium Server:

 ```bash
docker-compose up -d
```

In wdio.conf.js file configure the host of the Selenium Server `hostname` (default: localhost).  

If you don't want to start a Selenium Server, you can use Selenium Standalone from wdio (if you have JDK installed).  
So, you should uncomment the line 58 on `wdio.conf.js`.  
Then the tests run on your machine without a docker selenium.

Run e2e tests:

```bash
yarn tests:e2e
```

Reports
---------------

![alt text](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/blob/master/images/allure-report.png)

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

Also, you can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline`

Eslint and Prettier
---------------

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
