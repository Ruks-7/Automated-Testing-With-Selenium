<h1 align="center">Automated Testing using Selenium</h1>

## Overview 
This project is a simple example of how to use Selenium to automate testing of a web application. <br /> The project uses the Selenium WebDriver to automate the testing of the [The Sparks Foundation](https://www.thesparksfoundationsingapore.org/) page. The project is written in javascript.
The test script has to check atleast five pages for the following:
1. The title of the page 
2. The logo on the page
3. The navigation bar on the page
4. If a footer exists on the page
5. If the page has a form
6. The contact information
7. If the page has any images
8. If the page has any videos
9. Conduct and policy section
10. Internship programs

### 1. Setting up the project
To set up the project, you have to ensure that you have the following installed on your machine:
- Node.js
- npm
- Selenium WebDriver
- Chrome browser

### 2. Create the project 
To create the project, you have to run the following commands in the terminal:
- `npm init -y`
- `npm install selenium-webdriver` <br />

Create a javascript file in a new folder for writing the test script. 

### 3. Tests
#### i. First Test
The first test will check the main page for the following:
- Title of the page
- Logo of the website <br/>

The title of the page is displayed in the console.
Presence of the logo is checked using `isDisplayed()` which returns a boolean value.
