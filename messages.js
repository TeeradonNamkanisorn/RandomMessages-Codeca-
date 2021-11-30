let topics = ['Zodiacs','Friends','Personality'];
let randTopIndex = Math.floor((topics.length-1)*Math.random());

function getARandomWord(topic) {
    switch (topic) {
        case 'Zodiacs': 
            const zodiacList = ['Aries','Leo','Sagittarius','Taurus','Virgo','Capricorn','Geminu','Libra','Aquarius','Cancer','Scorpio','Pices'];
            let zodInd = Math.floor((zodiacList.length)*Math.random());
            return zodiacList[zodInd];
            break;
        case 'Friends':
            const friendNumList = ['few (1-5)','some (6-15)', '16-30', 'a lot of (31+)']
            let friInd = Math.floor(Math.random()*(friendNumList.length));
            return friendNumList[friInd]; break;
        case 'Personality':
            const perList = ['Easy-going','Confident','Ambitious','Adaptable','Courteous','Frank','Depressing','Shy'];
            let perInd = Math.floor(Math.random()*(perList.length));
            return perList[perInd].toLowerCase(); break;
    }
}

function printRandomMessages() {
    let word1 = 'Your zodiac sign is '+ getARandomWord('Zodiacs')+'.\n';
    let word2 = 'You have '+ getARandomWord('Friends') +' friends.\n';
    let word3 = 'You are a(n) '+getARandomWord('Personality')+ ' person.'
return word1+word2+word3;
}

console.log(printRandomMessages());