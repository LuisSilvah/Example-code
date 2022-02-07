

export function configureFakeBackend() {
    const users = [
        {
            id: 1,
            username: 'Fucksay',
            userName: 'Fuck_Say',
            userImage: 'https://randomuser.me/api/portraits/med/women/70.jpg',
            password: 'Fucksay'
        },
        {
            id: 2,
            username: 'Beekpoort',
            userName: 'goldenkoala647',
            userImage: 'https://randomuser.me/api/portraits/med/women/49.jpg',
            password: 'Beekpoort'
        },
        {
            id: 3,
            username: 'Hisame',
            userName: 'rpierlot',
            userImage: 'https://randomuser.me/api/portraits/med/women/74.jpg',
            password: 'Hisame'
        },
        {
            id: 4,
            username: 'postcode',
            userName: 'postcode',
            userImage: 'https://randomuser.me/api/portraits/med/men/23.jpg',
            password: 'postcode'
        },
        {
            id: 5,
            username: 'Albert',
            userName: 'Alberting',
            userImage: 'https://randomuser.me/api/portraits/med/men/74.jpg',
            password: 'Albert'
        },
        {
            id: 6,
            username: 'LuisSilvah',
            userName: 'Luis Silvah',
            userImage: 'https://github.com/LuisSilvah.png',
            password: 'LuisSilvah'
        },
        {
            id: 7,
            username: 'test',
            password: 'test',
        },
    ]


    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate - public
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.username === params.username && x.password === params.password);
                    if (!user) return error('username or password is incorrect');
                    return ok({
                        id: user.id,
                        username: user.username,
                        userimage: user.userImage,
                        token: 'fake-jwt-token'
                    });
                }

                // get users - secure
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok(users);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}

