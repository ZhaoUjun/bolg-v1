
export function applyRoute (routes,app) {
    return Object.keys(routes).map(key=>{
        app.use('/'+key,routes[key])
    })
}

export function startServer(config,app) {
    const server=app.listen(config,function () {
        const host = server.address().address;
        const port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
    return server
}

export function applyMiddleWares(...args) {
    const [app,...middleWares]=args;
    app.use.apply(app,middleWares)
}
