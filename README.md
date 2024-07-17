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

## 1. Setting up the project
To set up the project, you have to ensure that you have the following installed on your machine:
- Node.js
- npm
- Selenium WebDriver
- Chrome browser

## 2. Create the project 
To create the project, you have to run the following commands in the terminal:
- `npm init -y`
- `npm install selenium-webdriver` <br />

Create a javascript file in a new folder for writing the test script. 

## 3. Tests
### 1. First Test
The first test will check the main page for the following:
- Title of the page
- Logo of the website <br/>

The title of the page is displayed in the console. <br/>
Presence of the logo is checked using `isDisplayed()` which returns a boolean value.

### 2. Second Test
The second test will check:
- The navigation bar
- The "Advisors and Patrons" page <br/>

The navigation bar displays the list of links on the section. The test will click on the "Advisors and Patrons" link found in the "About Us" section.<br />
Upon navigating to the page, the url of the page and all the advisors and patrons are displayed in the console.

### 3. Third Test
The third test will check:
- The "Programs" link
- The "Workshops" page <br/>

The test will click on the "Workshops" link found in the "Programs" section.<br />
Upon navigating to the page, all the upcoming workshops are displayed in the console.

### 4. Fourth Test
The fourth test will check:
- The footer of the page 
- The Social Media links <br/>

The footer of the page is checked for its presence in the "Internship Positions" page whose link in "Join Us" section.<br/>
The test will display a boolean value to confirm if it is displayed. <br/>
The social media links in the footer are displayed in the console.
