var websiteNumber = $('.website').text();
var clientNumber = $('.client').text();
var developerNumber = $('.developer').text();
var awardsNumber = $('.awards').text();

$({numberValue: websiteNumber}).animate({numberValue: 150}, {
    duration: 3000,
    easing: 'linear',
    step: function() { 
        $('.website').text(Math.ceil(this.numberValue)); 
    }
});

$({numberValue: clientNumber}).animate({numberValue: 250}, {
    duration: 3000,
    easing: 'linear',
    step: function() { 
        $('.client').text(Math.ceil(this.numberValue)); 
    }
});

$({numberValue: developerNumber}).animate({numberValue: 24}, {
    duration: 3000,
    easing: 'linear',
    step: function() { 
        $('.developer').text(Math.ceil(this.numberValue)); 
    }
});

$({numberValue: awardsNumber}).animate({numberValue: 260}, {
    duration: 3000,
    easing: 'linear',
    step: function() { 
        $('.awards').text(Math.ceil(this.numberValue)); 
    }
});