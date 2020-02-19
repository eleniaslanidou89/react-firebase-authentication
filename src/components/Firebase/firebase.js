import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAZVQudt3LTVvOEYZW7NjRyq7t7i8shS6Y",
    authDomain:  "my-firebase-project-d9bc1.firebaseapp.com",
    databaseURL:"https://my-firebase-project-d9bc1.firebaseio.com",
    projectId: "my-firebase-project-d9bc1",
    storageBucket: "my-firebase-project-d9bc1.appspot.com",
    messagingSenderId: "677086894359",
    };

    class Firebase {
        constructor() {
            app.initializeApp(config);
            this.auth = app.auth();
            this.db = app.database();
          }
            doCreateUserWithEmailAndPassword = (email, password) =>
                this.auth.createUserWithEmailAndPassword(email, password);

                doSignInWithEmailAndPassword = (email, password) =>
                    this.auth.signInWithEmailAndPassword(email, password);

                    doSignOut = () => this.auth.signOut();

                    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
                    doPasswordUpdate = password =>
                    this.auth.currentUser.updatePassword(password);

                    // *** Merge Auth and DB User API *** //
onAuthUserListener = (next, fallback) =>
this.auth.onAuthStateChanged(authUser => {
if (authUser) {
this.user(authUser.uid)
.once('value')
.then(snapshot => {
const dbUser = snapshot.val();
// default empty roles
if (!dbUser.roles) {
dbUser.roles = [];
}
// merge auth and db user
authUser = {
uid: authUser.uid,
email: authUser.email,
...dbUser,
};
next(authUser);
});
} else {
fallback();
}
});

                    // *** User API ***
                    user = uid => this.db.ref(`users/${uid}`);
                    users = () => this.db.ref('users');
          
            }
            export default Firebase;