const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    initialisePuppeteer()

    return console.log(`Express is listening at http://localhost:${port}`)
})

// the URL we would like to visit with Puppeteer
const STUDIO_URL = 'gym_url_goes_here'

const initialisePuppeteer = async () => {
    const browser = await puppeteer.launch({
      headless: false
    })
  
    const page = await browser.newPage()
  
    await page.viewport({
      width: 1920,
      height: 1080
    })

    await page.goto(STUDIO_URL)

    await page.waitForSelector('a[id="cookie-accept"]')
    await page.click('a[id="cookie-accept"]')
    
    const CREDENTIALS_EMAIL = 'your_email_address'
    const CREDENTIALS_PASSWORD = 'your_password'
    await page.type('input[id="inputEmail"]', USERNAME)
    await page.type('input[id="inputPassword"]', PASSWORD)
    await page.click('button[type="submit"]')
    
    // Specify the time at which the button is supposed to be enabled
    // The value '1647084600' equals Saturday, March 12th, 2022 at 12:30:00 GMT+0100
    // Mind your timezones!
    const UNLOCK_TIME_IN_UNIX = 1647084600
    // Define the current time to compare with UNLOCK_TIME_IN_UNIX later
    const time = Math.round(Date.now() / 1000)
    // While the current time is before the moment of unlocking, the loop keeps running
    while (time < UNLOCK_TIME_IN_UNIX) {
        time = Math.round(Date.now() / 1000)
       // This log will be fired 1000 times per second unless we add a delay
        console.log('Waiting for registration')
        // That's why we add a little 1000ms (1 second) delay
        await delay(1000)
        if (time > UNLOCK_TIME_IN_UNIX) {
          console.log('Lets go!')
          break
        }
    }

    await page.evaluate(() => {
      location.reload()
    })

    await page.waitForSelector('button[data-tstart="1647084600"]')
    await page.click('button[data-tstart="1647111600"]')
}
// This optional function provides the time delay promise
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  })
}