import app from 'firebase/app';
import 'firebase/auth';

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
          }
            doCreateUserWithEmailAndPassword = (email, password) =>
                this.auth.createUserWithEmailAndPassword(email, password);

                doSignInWithEmailAndPassword = (email, password) =>
                    this.auth.signInWithEmailAndPassword(email, password);

                    doSignOut = () => this.auth.signOut();

                    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
                    doPasswordUpdate = password =>
                    this.auth.currentUser.updatePassword(password);
          
            }
            export default Firebase;