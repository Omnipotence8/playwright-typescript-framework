# playwright-typescript-framework
What Microsoft Playwright JS is and how it works.

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
Step 7: Press y for GitHub basic setup

? Add a GitHub Actions workflow? (y/N) › false
It will start downloading browser binaries to your system. For Mac OS, it will install in ~/Library/Caches/ms-playwright directory

Install playwright on Mac OS

Once installation is done successfully. It will show a success message and suggest several commands, and a few files will be created on your system.

Running the Example Test npx playwright test


**!!! Fix**  "LF Will Be Replaced by CRLF Warning in Git"
One way to fix the warning is to make changes in config files located in the path where git is installed. 
The value of code.autocrlf is stored in gitconfig file located at %ProgramFiles(x86)%\git\etc\gitconfig or

ProgramFiles\git\etc\gitconfig and in /etc/gitconfig in Linux/Unix based operating systems. However, we can fix the issue in different situations:

If you wish to use the project on Unix based OS, you should set the value of core.autocrlf to true

If you wish to use the project under Windows only, the flag should be set to false.

 ***Run Your Playwright test***
 
By default Playwright test runs in headless mode for 3 browsers chromium, firefox and webkit.
To run test in visual mode add --headed.
* npx playwright test --headed

***View Playwright Test Report***
We can view the reports of the last ran test case by using this command.

* npx playwright show-report

***Configuring Test Runs***
The framework's getting started guide contains a standard configuration file.
![image](https://user-images.githubusercontent.com/45335405/185723009-e7a68e91-a849-4f7b-b7a0-63d471c1d74b.png)

https://playwright.dev/docs/test-configuration

See the list of supported devices for emulation here: https://github.com/microsoft/playwright/blob/bdfe92f8a7499644c431c5c05de17d71e6006084/packages/playwright-core/src/server/deviceDescriptorsSource.json

{
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },


