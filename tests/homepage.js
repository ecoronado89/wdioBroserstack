var assert = require('assert');
var expect = require('chai').expect;
var request = require('request');
var path = require('path');
var fs = require('fs');
var file = path.join(__dirname, '../data/jsondata.json');

var json = JSON.parse(fs.readFileSync(file, 'utf8'));

	var total = json.length;
	


function iterate(pageUrl){

var runTest = true, setRun = true;

	describe('Page - ' +pageUrl+ ': ecwebd02.llbean.com',function(){

		console.log(pageUrl);
		
		 before(function(){
		 browser.url(pageUrl);
		 })

		 //before(function())

		it('Verify page is available',function(){
			var title = browser.getTitle();
			console.log(title);
			expect(title).to.not.equal('L.L.Bean: Page Not Available');
		});
		it('Verify item is available',function(){
			var unavailable = browser.isExisting('div.alert-warning');
			console.log(unavailable)
			expect(unavailable).to.be.equal(false);
		});	
		//console.log(setRun);
		//console.log(runTest);
		// if(runTest){
		// 	it('Validate Size Chart',function(){
		// 		browser.url(pageUrl);
		// 		var pdpJsonVar = browser.execute('return pdpJson.displaySizeChart');
		// 		console.log(pdpJsonVar);
		// 		if(pdpJsonVar){
		// 			var hasSizeChart = browser.isExisting('=View Size Chart')
		// 			assert(hasSizeChart);
		// 		}
		
		// 	});
		// 	it.only('validate Swatches',function(){
		// 		browser.url(pageUrl);
		// 		var imgUrl = browser.getCssProperty('span.swatch-bg-0', 'background-image');
		// 		imgUrl.replace('defaultImage','Hola')
		// 		console.log(imgUrl.value);
		// 	});
		// }
		
	});
}

for(var i= 0; i < total; i++){
iterate('https://ecwebs01.llbean.com/llb/shop/'+json[i].WEB_PAGE_ID);
}

// describe('WebdriverIO - Home page',function(){
	
// 	it('Verify page title',function(){
// 		browser.url('/llb/shop/' + pageId);
// 		var title = browser.getTitle();
// 		assert.equal(title,'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
// 	})
	// it('Verify API link is visible',function(){
	// 	browser.url('/');
	// 	var hasApiLink = browser.isExisting('=API');

	// 	assert(hasApiLink);
	// })
	// it('Verify section rulethemall',function(){
	// 	browser.url('/');
	// 	var ruleThemDiv = browser.getText('div.rulethemall h2');
	// 	assert.equal(ruleThemDiv,'One Tool To Rule Them All:');

	// 	var divContainer = browser.getAttribute('div.rulethemall a', 'href');
	// 	for(var urlImg = 0; urlImg < divContainer.length; urlImg++){
	// 		request(divContainer[urlImg]),function(error, response, body){
	// 			expect(response.statusCode).to.be.equal(200);
	// 		}
	// 	}
	// })
	// it('Verify How does it work link destination',function(){
	// 	var wdioLink = browser.getAttribute('body > section > div > div:nth-child(13) > article:nth-child(1) > p:nth-child(3) > a', 'href');
	// 	expect(wdioLink).to.be.equal('https://www.w3.org/TR/webdriver/');
	// })
// });