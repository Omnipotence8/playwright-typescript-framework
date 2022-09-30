# playwright-typescript-framework
What Microsoft Playwright is and how it works.

![image](https://user-images.githubusercontent.com/45335405/189474858-92afe997-0f98-48f7-8a9e-91d696d8ef3a.png)


Playwright by Microsoft did start as a fork of Puppeteer. Puppeteer is a node library to automate the chromium browsers with the JavaScript API

--Capabilities:
* It spans multiple pages, domains, and iframes
* Intercept network activity for stubbing and mocking network requests
* Emulate mobile devices, geolocation, permissions
* Native input events for mouse and keyboard
* Upload & download support

Playwright enables fast, reliable, and capable automation across all modern browsers

-- Support for all browsers
* Test on Chromium, Firefox, and WebKit
* Test for mobile (device emulation)
* Headless and headful

-- Fast and reliable execution
* Auto-wait APIs (clicks, types, etc)
* Timeout-free automation
* Lean parallelization with browser contexts
* Wide variety of selectors (locators) & shadow-dom support
* Can handle single page application

Like any other automation, tool playwright needs prerequisites and requirements before it can be run in an environment. 

**System Requirements**
The browser binaries work across three platforms Windows, macOS, and Linux.

* Windows: Works perfectly fine with windows 10 or above or on the windows subsystem for Linux.
* Mac OS: It needs 10.14 Mojave or above.
* Linux: Depending on the version of Linux, additional dependencies are needed to run the browsers. Only Ubuntu 18.04 and 20.04 are officially supported.

**Prerequisites**
* Node JS: Playwright requires a node.js version that is 14 or above.
* Visual Studio Code: This is the best IDE to work with Playwright. 

* Node.js. npm -v node -v 
* Updating Globally-Installed Packages npm update -g

     ***Install and Setup New Playwright Project***

* https://playwright.dev/ 

npm init playwright@latest new-project

**Step 1:** Go to the desired location and create a new folder where you want to set up the Playwright.

**Step 2:** In the VS Code IDE, open the newly created folder, one way of opening it is, Go to File -> Open Folder.

open existing playwright project in VS code

**Step 3:** Open VS Code Terminal from Terminal -> New Terminal

open visual studio code terminal

**Step 4:** Open the terminal and type the below command to install playwright  

$ npm init playwright@latest
Here, @latest will install the latest stable release.

**Step 5:** Press down arrow to Select JavaScript. By default TypeScript will be selected. Press Enter after selection.

install playwright using terminal

**Step 6:** Press Enter to put your tests in the tests folder

? Where to put your end-to-end tests? › tests

**Step 7:** Press y for GitHub basic setup

? Add a GitHub Actions workflow? (y/N) › false
It will start downloading browser binaries to your system. For Mac OS, it will install in ~/Library/Caches/ms-playwright directory

Install playwright on Mac OS

Once installation is done successfully. It will show a success message and suggest several commands, and a few files will be created on your system.

Running the Example Test npx playwright test

***Specifying dependencies and devDependencies in a package.json file***

*"dependencies": Packages required by your application in production.
  **npm install <package-name> [--save-prod]**
    
*"devDependencies": Packages that are only needed for local development and testing.
  **npm install <package-name> --save-dev**


## Run Your Playwright test
 
By default Playwright test runs in headless mode for 3 browsers chromium, firefox and webkit.
Running all tests

**npx playwright test**

Running a single test file

**npx playwright test landing-page.spec.ts**   
    
To run test in visual mode add --headed.
** npx playwright test --headed

***View Playwright Test Report***
We can view the reports of the last ran test case by using this command.

* npx playwright show-report

## Frequently occurring problems and their solutions.

1) **"LF Will Be Replaced by CRLF Warning in Git"**
One way to fix the warning is to make changes in config files located in the path where git is installed. 
The value of code.autocrlf is stored in gitconfig file located at %ProgramFiles(x86)%\git\etc\gitconfig or

ProgramFiles\git\etc\gitconfig and in /etc/gitconfig in Linux/Unix based operating systems. However, we can fix the issue in different situations:

If you wish to use the project on Unix based OS, you should set the value of core.autocrlf to true

If you wish to use the project under Windows only, the flag should be set to false.

2) **Node / Express: EADDRINUSE, Address already in use - Kill server**
![image](https://user-images.githubusercontent.com/45335405/188330684-31610a52-3938-4ca1-b068-76452c781a64.png)

C:\Windows\System32>taskkill /F /IM node.exe
SUCCESS: The process "node.exe" with PID 11008 has been terminated.


***Configuring Test Runs***
The framework's getting started guide contains a standard configuration file.
![image](https://user-images.githubusercontent.com/45335405/185723009-e7a68e91-a849-4f7b-b7a0-63d471c1d74b.png)

https://playwright.dev/docs/test-configuration

See the list of supported devices for emulation here: https://github.com/microsoft/playwright/blob/bdfe92f8a7499644c431c5c05de17d71e6006084/packages/playwright-core/src/server/deviceDescriptorsSource.json

   {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

![image](https://user-images.githubusercontent.com/45335405/185733869-71e8e9e9-3f2e-4aed-b1de-471550093e34.png)
![image](https://user-images.githubusercontent.com/45335405/185733882-872303fb-21fd-4fb1-9b17-b0c4d83553fc.png)
![image](https://user-images.githubusercontent.com/45335405/185733888-34f78ace-1e90-47b0-b85b-961b44047d7b.png)
![image](https://user-images.githubusercontent.com/45335405/185733904-2a501cad-1bc3-4d4e-a8c1-c51c39063d75.png)
![image](https://user-images.githubusercontent.com/45335405/185733915-2a5090fa-340a-44aa-860b-c900dce3aee6.png)

Granular Configuration:**france.spec.ts**

●Per-file configuration 
●Per-suite configuration

![image](https://user-images.githubusercontent.com/45335405/185734543-88d88cfb-2143-4727-9d8d-f5e542e0080b.png)

**Configuration Options**
https://aka.ms/playwright/fixtures
![image](https://user-images.githubusercontent.com/45335405/185734967-2c07886d-2cd0-46e3-adc5-1ad05531e912.png)

**Configuration: Data-Driven Tests**

![image](https://user-images.githubusercontent.com/45335405/185735332-54f6334c-56df-4f50-b42e-1abd85d0919f.png)

   ***Reports***
   ![image](https://user-images.githubusercontent.com/45335405/185735387-a35e9e66-3dba-43e1-8d88-3647e22db933.png)

# Env Variables
 install locally (recommended)
**npm install dotenv --save**

Vite uses dotenv to load additional environment variables from the following files in your environment directory:

**.env**               # loaded in all cases

**.env.local**         # loaded in all cases, ignored by git
  
**.env.[mode]**        # only loaded in specified mode
  
**.env.[mode].local**  # only loaded in specified mode, ignored by git
![image](https://user-images.githubusercontent.com/45335405/185778887-70fcfd45-68dd-4a5a-8173-68a302702f55.png)

***Playwright API Testing***
https://playwright.dev/docs/api/class-page#page-wait-for-response
![image](https://user-images.githubusercontent.com/45335405/186271395-c01a9304-0cd5-4c12-b8d6-36eb5d29f44b.png)

***toBe(true) vs toBeTruthy() vs toBeTrue()***
toBe(<value>) - The returned value is the same as <value>

toBeTrue() - Checks if the returned value is true

toBeTruthy() - Check if the value, when cast to a boolean, will be a truthy value

Truthy values are all values that aren't 0, '' (empty string), false, null, NaN, undefined or [] (empty array)*.

* Notice that when you run !![], it returns true, but when you run [] == false it also returns true. It depends on how it is implemented. In other words: (!![]) === ([] == false)
    
![image](https://user-images.githubusercontent.com/45335405/188291489-b8ad86dd-5d39-4db3-bbce-d433cba01850.png)

***Playwright Allure Report***

# https://www.npmjs.com/package/allure-playwright
npm i allure-playwright

![image](https://user-images.githubusercontent.com/45335405/192069362-e2328dae-4940-40b1-bf7a-0e99b94804b4.png)

![image](https://user-images.githubusercontent.com/45335405/192069657-f08dc87f-bdc0-48aa-866d-34af44226288.png)

# https://www.npmjs.com/package/allure-commandline
npm i allure-commandline
**For Open**

![image](https://user-images.githubusercontent.com/45335405/192069979-aa99eedd-1b9a-4da2-af4f-f5be51a0811e.png)

![image](https://user-images.githubusercontent.com/45335405/192069857-12651355-3d29-4e7b-a47d-a223f77f15e7.png)
![image](https://user-images.githubusercontent.com/45335405/192070181-e88bd8da-bba0-4aae-ad2f-28de7e5668bf.png)

## Fixtures ##
Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else.

Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test. Values prepared by the fixtures are merged into a single object that is available to the test, hooks, annotations and other fixtures as a first parameter.

test('my test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
  
 The {page} argument provided in the test is an example of a test fixture. We will talk about fixtures in the next section.

For now, you can look at the documentation for the page class and see that it provides methods for interacting with a single browser tab and handling various events. For example:

the page.locator() method is a representation of the element(s) on the page with fixed logic for retrieving it at the right moment in time;

page.goto() - go to any page in the browser;

page.click() - click on an element on the page that matches the selector.

** Why fixture? Because they create a consistent environment (test repeatability) and provide effective isolation for the test being run, with the following benefits:**

**Efficiency.** Run multiple tests in parallel, faster and with less memory usage.

**Targeting.** Retry the tests that just failed without rerunning the entire suite.

**Grouping.** Group tests are conducted on the basis of common sense, and not just a given setting.

### Playwright comes with a number of built-in fixtures that you can customize.

fixtures.browser - generic browser instance (for worker);

fixtures.browserName - current launch (chromium, firefox or webkit);

fixtures.context - isolates the browser context (for test);

fixtures.page - Isolates the page (per test).

You can use Test Fixtures in the drill down phase of testing, or Worker Fixtures to apply them at the workflow level (in all controlled tests).

In this way, fixtures contribute to the provision of consistent and isolated testing environments in Playwright with inherent flexibility and amenity for customization.
