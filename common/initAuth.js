import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAuthEmulatorHost: '',
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'connectmap-96c57',
        clientEmail: 'firebase-adminsdk-cpm2c@connectmap-96c57.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://connectmap-96c57-default-rtdb.asia-southeast1.firebasedatabase.app/',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyAF_IF0XS4RCbB2FqtH3Y_4wbJ6gPfUDDQ', // required
      authDomain: 'connectmap-96c57.firebaseapp.com',
      databaseURL: 'https://connectmap-96c57-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'connectmap-96c57',
    },
    cookies: {
      name: 'ConnectApp', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth