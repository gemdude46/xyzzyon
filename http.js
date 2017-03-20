function HTTP(m, u, c, d, f, t) {
    c=c||{};
    
    return AJAX('POST', 'http://hapi.gq/httpjson', JSON.stringify({
        dst: u,
        method: m,
        cookies: c,
        body: d||'',
        content_type: t||'application/x-www-form-urlencoded'
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
    return HTTP('GET', u, c, null, f);
}

function POST(u, d, c, f, t) {
    return HTTP('POST', u, c, d, f, t);
}
