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
    
    // Upcoming workshops
    let workshopTexts=await driver.findElements(By.css(".blog-info h4"));
    await driver.wait(until.elementIsVisible(workshopTexts[0]), 5000); 

    let upcomingWorkshops = [];
    for (let workshopText of workshopTexts) { 
      let text = await workshopText.getText();
      upcomingWorkshops.push(text);
    }
    console.log("Upcoming Workshops: ",upcomingWorkshops.join(", ")+"\n");

    async function joinUs(){
    let joinUs=await driver.findElement(By.linkText("Join Us"));
    await driver.wait(until.elementIsVisible(joinUs),5000);
    await joinUs.click();
    }
    await joinUs();

    // Internships and Positions
    let internship=await driver.findElement(By.linkText("Internship Positions"));
    await driver.wait(until.elementIsVisible(internship),5000);
    await internship.click();
    let url=await driver.getCurrentUrl();
    assert.equal(url, "https://www.thesparksfoundationsingapore.org/join-us/internship-positions/");
    console.log("Successfully navigated to the Internships and Positions page! \n");

    //Footer
    let footer=await driver.findElement(By.className("footer"));
    let footerAssert=await footer.isDisplayed();
    console.log("Footer is displayed: ", footerAssert+"\n");
    
    // Social Media Info in the footer
    let socialMedia = await driver.findElements(By.css(".top-header-agile-right ul li a"));
    let socialMediaLinks = " ";
    for (let i = 0; i < socialMedia.length; i++) {
      let link = await socialMedia[i].getAttribute("href");
      socialMediaLinks += "\n\t" + link;
    }
    console.log("Social Media Links: ", socialMediaLinks+"\n");

    //LINKS Page
    let links=await driver.findElement(By.linkText("LINKS"));
    await driver.wait(until.elementIsVisible(links),5000);
    await links.click();

    let software=await driver.findElement(By.linkText("Software & App"));
    await driver.wait(until.elementIsVisible(software), 5000);
    await software.click();

    let heading=await driver.findElement(By.css("h3 span"));
    await driver.wait(until.elementIsVisible(heading), 5000);
    let headingText=await heading.getText();
    console.log("Heading for Software & App page: ",headingText+"\n");

    //Form
    await joinUs();
    let ambassadors=await driver.findElement(By.linkText("Brand Ambassador"));
    await driver.wait(until.elementIsVisible(ambassadors), 5000);
    await ambassadors.click();

    let form=await driver.findElement(By.css("form"));
    await driver.wait(until.elementIsVisible(form),5000);
    let formAssert=await form.isDisplayed();
    assert.equal(formAssert, true);
    console.log("Form is displayed!");


  } 
  catch (error) {
    console.log("Error found! \n", error);
  }
    await driver.quit();
}())
