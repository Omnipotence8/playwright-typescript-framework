# playwright-typescript-framework
What Microsoft Playwright JS is and how it works
Node.js. npm -v node -v 
Updating Globally-Installed Packages npm update -g

https://playwright.dev/ npm init playwright@latest

Running the Example Test npx playwright test


**!!! Fix**  "LF Will Be Replaced by CRLF Warning in Git"
One way to fix the warning is to make changes in config files located in the path where git is installed. 
The value of code.autocrlf is stored in gitconfig file located at %ProgramFiles(x86)%\git\etc\gitconfig or

ProgramFiles\git\etc\gitconfig and in /etc/gitconfig in Linux/Unix based operating systems. However, we can fix the issue in different situations:

If you wish to use the project on Unix based OS, you should set the value of core.autocrlf to true

If you wish to use the project under Windows only, the flag should be set to false.

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

-- Pre-requirements:
1. Node JS
2. VS Code Editor
