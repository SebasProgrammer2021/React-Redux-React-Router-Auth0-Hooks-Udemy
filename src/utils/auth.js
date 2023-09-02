import auth0 from 'auth0-js'


export default class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'dev-x2hjj4381tsz4l2y.us.auth0.com',
        clientID: 'Htdrxu2fjWoOMEt4aZmRCU6zvaAvOb9b',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email '
    })

    login = () => {
        // redirije al usuario a la página de logueo
        this.auth0.authorize()
    }

    // este metodo nos permite extraer la respuesta que nos da auth0
    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)

                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expiresAt', expiresAt)
            } else {
                console.log(err, "error at handle login");
            }
        })
    }

    logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
    }
}
