const _ = require('lodash');
const cheerio = require('cheerio');
const request = require('request-promise-native');
var tough = require('tough-cookie');

function get_alumni() {
    let cookie1 = new tough.Cookie({
        key: "CFID",
        value: '1610740',
        domain: 'www2.scvanguard.org',
        httpOnly: true,
    });
    let cookie2 = new tough.Cookie({
        key: "CFTOKEN",
        value: '32f923e5df787069-94B8C67F-155D-01C5-02CC6163F335D763',
        domain: 'www2.scvanguard.org',
        httpOnly: true,
    });
    let cookie3 = new tough.Cookie({
        key: "_ga",
        value: 'GA1.2.228637024.1544290725',
        domain: '.scvanguard.org',
        httpOnly: false,
    });
    let cookie4 = new tough.Cookie({
        key: "_gid",
        value: 'GA1.2.695922208.1544290725',
        domain: '.scvanguard.org',
        httpOnly: false,
    });
    let cookie5 = new tough.Cookie({
        key: "mfesecure_visit",
        value: '1',
        domain: 'www2.scvanguard.org',
        httpOnly: false,
    });
    const cookiejar = request.jar()
    cookiejar.setCookie(cookie1, 'https://www2.scvanguard.org')
    cookiejar.setCookie(cookie2, 'https://www2.scvanguard.org')
    cookiejar.setCookie(cookie3, 'https://www2.scvanguard.org')
    cookiejar.setCookie(cookie4, 'https://www2.scvanguard.org')
    cookiejar.setCookie(cookie5, 'https://www2.scvanguard.org')

    const options = {
        method: 'GET',
        url: 'https://www2.scvanguard.org/alumni/directory/_alumni_detail.cfm?pid=100002',
        jar: cookiejar,
    };

    return request(options)
        .then(response => {
            const $ = cheerio.load(response);
            console.log(response)
        })
}

get_alumni()