function HTTP(m, u, c, d, f) {
    c=c||{};
    
    AJAX('POST', 'http://hapi.gq/httpjson', JSON.stringify({
        dst: u,
        method: m,
        cookies: c,
        body: d||''
    }), function(x){f(JSON.parse(x.responseText));});
    
}

function GET(u, c, f) {
    HTTP('GET', u, c, null, f);
}
