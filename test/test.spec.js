var meAreaHeaderButton = element(by.id('meAreaHeaderButton'));
var signOut = element(by.id('logoutBtn'));
var okBtn = element(by.id('__mbox-btn-0'));

describe('test', function() {

  it('Start FLP', function() {

    expect(meAreaHeaderButton.isPresent()).toBeTruthy();
    meAreaHeaderButton.click();
    signOut.click();
    
    console.log("Logging Out...");
		okBtn.click();
    browser.sleep(2000);
    
  });

});