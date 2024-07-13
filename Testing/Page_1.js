const {Builder, By, until}=require("selenium-webdriver");
const{Browser}=require("selenium-webdriver");

(async function homePage(){
  let driver;
  try{
    driver=await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.thesparksfoundationsingapore.org/');

    //Title of the page
    let title=await driver.getTitle();
    console.log("Title of main page: ",title);

    //Logo
    let logo=await driver.findElement(By.xpath('//*[@id="home"]/div/div[1]/h1/a/img'));
    let displayedLogo=await logo.isDisplayed();
    if(displayedLogo){
      console.log("Logo is displayed!");
    }
    else{
      console.log("Logo is NOT displayed!");
    }

  }

  catch(error){
    console.log("Error found! \n", error);
  }
  await driver.quit();
}())