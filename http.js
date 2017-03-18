function HTTP(m, u, c, d, f) {
    c=c||{};
    
    AJAX('POST', 'http://hapi.gq/httpjson', JSON.stringify({
        dst: u,
        method: m,
        cookies: c,
        body: d||''
    }), function(x) {
        var r = JSON.parse(x.responseText);
        if (r.status == 'success') {
            f(r);
        } else if (r.status == 'fail') {
            throw Error(r.error);
        } else throw Error('WTF');
    });
    
}

function GET(u, c, f) {
    HTTP('GET', u, c, null, f);
}
