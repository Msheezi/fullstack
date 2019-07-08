// "plugins": ["@babel/plugin-transform-runtime"]

export default async demoLogin=>(e) => {
    e.preventDefault();

    const demoUser = {
        username: 'demouser',
        password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('username').focus();
    for (let i = 1; i <= demoUser.email.length; i++) {
        this.setState({ username: demoUser.username.substr(0, i) });
        await sleep(50);
    }

    await sleep(250);

    document.getElementById('password').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
        this.setState({ password: demoUser.password.substr(0, i) });
        await sleep(50);
    }

    await sleep(250);

    document.getElementById('session-submit-btn').click();
    document.getElementById('password').blur();
};