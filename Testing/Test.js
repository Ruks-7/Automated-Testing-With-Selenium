const {Builder, By, until}=require("selenium-webdriver");
const assert=require("assert");
const{Browser}=require("selenium-webdriver");

(async function testing(){
  let driver;
  try{
    driver=await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.thesparksfoundationsingapore.org/');

    //Title of the page
    let title=await driver.getTitle();
    console.log("Title of main page: ",title,"\n");

    //Logo
    let logo=await driver.findElement(By.xpath('//*[@id="home"]/div/div[1]/h1/a/img'));
    let displayedLogo=await logo.isDisplayed();
    if(displayedLogo){
      console.log("Logo is displayed! \n");
    }
    else{
      console.log("Logo is NOT displayed! \n");
    }

    // Find and log navbar text
    let navBarText = await driver.findElement(By.className("navbar")).getText();
    console.log(navBarText+"\n");

    // About Us
    let aboutUsLink = await driver.findElement(By.linkText("About Us"));
    await driver.wait(until.elementIsVisible(aboutUsLink), 5000); // Ensure the link is visible
    await aboutUsLink.click();

    // Advisors and Patrons Page
    let personnel = await driver.findElement(By.linkText("Advisors and Patrons"));
    await driver.wait(until.elementIsVisible(personnel), 5000);
    await personnel.click();

    let advisors = await driver.findElements(By.css(".media-body h4"));
    await driver.wait(until.elementIsVisible(advisors[0]), 5000);

    let advisorsTexts = "";
    for (let advisor of advisors) { 
      let text = await advisor.getText();
      advisorsTexts +="\n\t"+ text; 
    }

    let currentURL = await driver.getCurrentUrl();
    console.log("Current URL: ", currentURL+"\n");
    console.log("Advisors and Patrons:", advisorsTexts+"\n");

    // Programs
    let programs=await driver.findElement(By.linkText("Programs"));
    await driver.wait(until.elementIsVisible(programs),5000);
    await programs.click();

    let workshops=await driver.findElement(By.linkText("Workshops"));
    await driver.wait(until.elementIsVisible(workshops),5000);
    await workshops.click();
    
    // Get the text of the upcoming workshops from workshops page
    let workshopTexts=await driver.findElements(By.css(".blog-info h4"));
    await driver.wait(until.elementIsVisible(workshopTexts[0]), 5000); 

    let upcomingWorkshops = [];
    for (let workshopText of workshopTexts) { 
      let text = await workshopText.getText();
      upcomingWorkshops.push(text);
    }
    console.log("Upcoming Workshops: ",upcomingWorkshops.join(", ")+"\n");

  } 
  catch (error) {
    console.log("Error found! \n", error);
  }
    await driver.quit();
}())