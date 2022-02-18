const puppeteer = require('puppeteer')

 

async function scrape() {

   const browser = await puppeteer.launch({})

   const page = await browser.newPage()

 

   await page.goto('https://time.com/')

   var array = ['https://time.com/6148528/russian-skater-kamila-valieva-contamination/','https://time.com/6148270/covid-19-pandemic-far-from-over/','https://time.com/6147088/inventing-anna-true-story/','https://time.com/6146419/inventing-anna-rachel-williams-anna-delvey/','https://time.com/6148040/google-maps-influences-international-affairs/'];

 

   var iterator = array.values();

   for (let elements of iterator) {

    console.log(elements);

    var element = await page.waitFor("#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(" + elements + ") > a")

    var text = await page.evaluate(element => element.textContent, element)

    console.log(text)

  }

 

   browser.close()

}

scrape()