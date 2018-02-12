
export const signalWhiteList=[
    '/home'
];

export const serverConfig={
    port: 3030,
    host: '0.0.0.0',
};

export const QUERY_CONFIG={
    PAGE_SIZE:10,
};

export const SESSION_CONFIG={
    secret: 'blog',
    key:'sid',
    // store:
    cookie: ('name', 'value', { path: '/login', httpOnly: true,secure: false, maxAge:  60000 }),
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: true,
    //强制“未初始化”的会话保存到存储。
    saveUninitialized: false,
};

export const TOKEN_CONFIG={
    APP_KEY:"ASDA43454asd545",
    SALT:"xiaoru",
}