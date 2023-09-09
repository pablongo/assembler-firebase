# Firebase Workshop

## Table of Contents

1. [Introduction](#introduction)
   1. [Why use Firebase?](#why-use-firebase)
   2. [Firebase Services Overview](#firebase-services-overview)
      1. [Firebase Authentication](#firebase-authentication)
      2. [Firebase Realtime Database](#firebase-realtime-database)
      3. [Firestore](#firestore)
      4. [When should i use Realtime Database vs Firestore?](#when-should-i-use-realtime-database-vs-firestore)
2. [Installation](#installation)
3. [Firebase Setup](#firebase-setup)
4. [Firebase Authentication](#firebase-authentication)
   1. [Email and Password Authentication](#email-and-password-authentication)
   2. [Google Authentication](#google-authentication)
   3. [Checking if the user is logged in](#checking-if-the-user-is-logged-in)

## Introduction

Firebase, a brainchild of Google, offers a holistic approach to app development, eliminating the complexities traditionally associated with backend infrastructure. Whether you're nurturing an idea for a transformative web application or a breakthrough mobile app, Firebase brings a suite of tools that accelerate the development process, ensuring you can focus on what truly matters - creating an unforgettable user experience.

Get started with Firebase by creating a free account at [firebase.google.com](https://firebase.google.com/). Once you've created an account, you can access the Firebase console at [console.firebase.google.com](https://console.firebase.google.com/).

### Why use Firebase?

Firebase offers a variety of services tailored to assist developers in building scalable and robust applications with ease. There are numerous reasons why developers might choose to use Firebase services:

- **Integrated Cloud Solutions:** Firebase provides a suite of integrated tools and services that cover the entire app development lifecycle, from user authentication to database storage, from hosting to cloud functions.

- **Real-time Database:** One of Firebase's standout features is its real-time database that allows for instantaneous data synchronization across all clients. This is particularly beneficial for apps that require real-time interaction among users, such as chat apps or collaborative platforms.

- **Authentication Made Easy:** Firebase Authentication abstracts away the complexities of user authentication, offering built-in solutions for email & password, social media, and even phone number authentication.

- **Cost Effective:** Firebase has a generous free tier (Firebase Spark Plan) that allows startups and individual developers to get started without incurring initial costs. As the app scales, Firebase offers a pay-as-you-go model, so you're only charged for what you use.

- **Scalability:** Being backed by Google Cloud, Firebase services are inherently scalable. Developers don't have to worry about server management, infrastructure, or scaling issues.

- **Serverless Capabilities:** With Firebase Cloud Functions, developers can run backend code without needing to manage server infrastructure. This is particularly useful for lightweight applications that don't require a full-blown backend.

- **Easy Integration with Google Services:** Firebase seamlessly integrates with other Google Cloud services, making it easier for developers to incorporate machine learning capabilities, storage, and analytics.

- **Hosting & Storage:** Firebase Hosting offers fast and secure web hosting, while Firebase Cloud Storage provides scalable object storage, ideal for storing images, videos, and other user-generated content.

- **Powerful Analytics:** Firebase integrates with Google Analytics, giving developers detailed insights into app usage, user behavior, and performance.

- **Cross-Platform SDK:** Firebase provides SDKs for various platforms including iOS, Android, and web, ensuring a consistent experience across different devices and platforms.

- **Enhanced App Quality:** Tools like Firebase Crashlytics provide real-time crash reporting, helping developers identify and fix issues faster.

- **Engagement and Growth Tools:** Firebase includes services like Cloud Messaging, In-App Messaging, and Remote Config, aiding developers in user engagement, retention, and app testing.

In conclusion, Firebase offers an all-in-one cloud-based solution that simplifies many of the challenges faced by developers, from backend infrastructure management to user engagement. Its wide range of tools and services cater to both novice developers and large-scale enterprises, making it a popular choice in the app development ecosystem.

### Firebase Services Overview

#### Firebase Authentication

Firebase Authentication provides a comprehensive and secure **_identity solution_**, enabling easy authentication of users to your app. It supports various **_authentication methods_**, including email and password, third-party providers (like Google, Facebook, and Twitter), and phone number authentication. With Firebase Auth, developers can integrate user sign-up and login functionality with minimal coding, while benefiting from Firebase's built-in security features. Firebase Auth also seamlessly integrates with other Firebase services, making it a go-to solution for ensuring a user-authenticated experience in your applications.

#### Firebase Realtime Database

Firebase Realtime Database is a **_cloud-hosted NoSQL database_** that allows you to store and sync data in real-time across all connected clients. With its instantaneous data synchronization, any changes made to the data are immediately reflected on all devices, be it web or mobile. Structured as JSON and accessible directly from client applications, it provides developers with flexible, scalable, and efficient solutions for building collaborative and interactive applications without the need for complex backend infrastructure.

- **Real-time Syncing:** If your app heavily relies on real-time data synchronization (e.g., a live chat application), then Realtime Database is inherently designed for such functionalities.
- **Data Structure:** Realtime Database uses a large JSON tree, which can be simpler for certain applications but may not scale well for complex data models.
- **Pricing:** Realtime Database's pricing is based on the amount of data stored and the amount of data transferred. This could be more cost-effective for apps with smaller datasets but frequent updates.
- **Latency:** It offers lower latency due to its real-time nature, which can be crucial for apps requiring instant data updates.
- **Presence:** It supports presence – the ability to detect when a user is online or offline.

#### Firestore

Cloud Firestore is a flexible, scalable database for mobile, web, and server applications from Firebase and Google Cloud. It offers rich querying capabilities and real-time data synchronization, while automatically handling data storage and synchronization to support offline access. Organized into collections and documents with a hierarchical data structure, Firestore is designed for efficient data retrieval, automatic multi-region data replication, and strong consistency, making it an optimal choice for building collaborative and sophisticated applications in the modern app development landscape.

- **Richer Data Model:** Firestore supports more complex hierarchical data structures with collections and documents, making it more suitable for scalable applications.
- **Advanced Queries:** Firestore provides advanced querying capabilities that can be more efficient and flexible for complex applications.
- **Offline Support:** Firestore has robust offline support for mobile platforms, allowing for offline data access and synchronization when back online.
- **Scalability:** Designed from the ground up to scale automatically, Firestore can handle large amounts of data and high concurrency without the need for sharding.
- **Pricing:** Firestore's pricing is based on the number of reads, writes, and deletes. This may benefit apps with large datasets but fewer transactions.
- **Multi-Region Deployment:** Firestore data can be automatically replicated across multiple regions, ensuring better reliability and disaster recovery.

#### When should i use Realtime Database vs Firestore?

- Use **_Realtime Database_** if your app's primary requirement is real-time data syncing with a relatively simple data structure, and you anticipate high frequency of data updates with smaller datasets.

- Opt for **_Cloud Firestore_** if you foresee complex data structures, need scalability, require advanced querying capabilities, and want robust offline support, especially if you anticipate large datasets with varying transaction frequencies.

However, it's worth noting that Firebase allows you to use both databases simultaneously in a single project. This gives you the flexibility to leverage the strengths of each based on different parts or features of your app.

## Installation

We'll use firebase in our **_React.js_** project. So, we need to install firebase in our project.

```bash
npm install firebase
```

## Firebase Setup

1. Before starting the configuration, we need to create a project in firebase console. To create a project, go to [firebase console](https://console.firebase.google.com/) and click on **_Add Project_** button as shown in the picture.
   ![Step-1](img-1.png)

2. Introduce the project name and click on **_Continue_** button.
   ![Step-2](img-2.png)

3. Since we won't use analytics we disable it and click on **_Create Project_** button.
   ![Step-3](img-3.png)

4. Click on the Settings icon and choose **Project settings**. Once inside the settings, click on **_Add app_** button and choose the app you want to add. In our case, we choose **_Web_**.

   ![Step-4](img-4.png)
   ![Step-5](img-5.png)

5. Register your app and create a **_firebase.js_** file and paste the secrets in there.

   ![Step-6](img-6.png)
   ![Step-7](img-7.png)

   ```javascript
   # src/firebase.js
   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID'
   };

   firebase.initializeApp(firebaseConfig);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   ```

6. Now, we can use firebase in our project.

## Firebase Authentication

### Email and Password Authentication

1. Click on the **_Build tab_** and choose **Authentication**. Then, click on **_Get Started_** button.
   ![Step-8](img-8.png)

2. Choose **_Email/Password_** and click on **_Enable_** button.
   ![Step-9](img-9.png)

3. Now, we can use firebase authentication in our project. In our firebase configuration file **_src/firebase/index.js_**, we import **_auth_** from firebase and use it in our project.

   ```javascript
   # src/firebase/index.js
   import * as firebase from 'firebase/app';
   import { GoogleAuthProvider, getAuth } from 'firebase/auth';

   const firebaseConfig = {
     apiKey: 'AIzaSyA8g1yMjGVCMK7BFmpAzXEREtlyQRRXNlE',
     authDomain: 'fir-demo-f00f5.firebaseapp.com',
     projectId: 'fir-demo-f00f5',
     storageBucket: 'fir-demo-f00f5.appspot.com',
     messagingSenderId: 426740211095,
     appId: '1:426740211095:web:67ebb30f7115c41fd238d2'
   };

   const app = firebase.initializeApp(firebaseConfig);
   const auth = getAuth(app);

   export { app, googleProvider, auth };
   ```

4. In the SignUp page we are going to import **_createUserWithEmailAndPassword_** from firebase/auth to create users and **_auth_** provider from our firebase config. On our **_onSubmit_** function we are going to call **_createUserWithEmailAndPassword_** and pass the email and password as arguments. If the user is created successfully, we are going to redirect the user to the login page.

   ```javascript
   # src/pages/Signup.js
   import React, { useState } from 'react';
   import { NavLink, useNavigate } from 'react-router-dom';
   import { createUserWithEmailAndPassword } from 'firebase/auth';
   import { auth } from '../firebase';

   const Signup = () => {
     const navigate = useNavigate();

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const onSubmit = async (e) => {
       e.preventDefault();

       await createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log(user);
           navigate('/login');
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode, errorMessage);
         });
     };
     // ...
   };
   ```

### Google authentication

1. Click on the **_Build tab_** and choose **Authentication**. Then, click on **_Get Started_** button.
   ![Step-8](img-8.png)

2. Choose **_Google_** and click on **_Enable_** button.
   ![Step-9](img-9.png)

3. Now, we can use firebase authentication in our project. In our firebase configuration file **_src/firebase/index.js_**, we import **_googleProvider_** from firebase and use it in our project.

   ```javascript
   # src/firebase/index.js
   import * as firebase from 'firebase/app';
   import { GoogleAuthProvider, getAuth } from 'firebase/auth';

   const firebaseConfig = {
     apiKey: 'AIzaSyA8g1yMjGVCMK7BFmpAzXEREtlyQRRXNlE',
     authDomain: 'fir-demo-f00f5.firebaseapp.com',
     projectId: 'fir-demo-f00f5',
     storageBucket: 'fir-demo-f00f5.appspot.com',
     messagingSenderId: 426740211095,
     appId: '1:426740211095:web:67ebb30f7115c41fd238d2'
   };

   const app = firebase.initializeApp(firebaseConfig);
   // Adding google provider
   const googleProvider = new GoogleAuthProvider();
   const auth = getAuth(app);

   export { app, googleProvider, auth };
   ```

4. In the SignUp page we are going to import **_signInWithPopup_** from firebase/auth to create users and **_auth_** provider from our firebase config. On our code we'll add the possibility to Sin in with google and if the user is created successfully, we are going to redirect the user to the login page.

   ```javascript
   # src/pages/Signup.js
   import React, { useState } from 'react';
   import { NavLink, useNavigate } from 'react-router-dom';
   import { createUserWithEmailAndPassword } from 'firebase/auth';
   import { auth } from '../firebase';

   const Signup = () => {
     const navigate = useNavigate();

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

      const loginWithPopup = async () => {
      const response = await signInWithPopup(auth, googleProvider);
         if (response) {
            navigate('/home');
         }
      };

     return (
      <main>
         <section>
         <div>
            <div>
               <h1> FocusApp </h1>
               <form>
               <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                     type="email"
                     label="Email address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     placeholder="Email address"
                  />
               </div>

               <div>
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     label="Create password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     placeholder="Password"
                  />
               </div>

               <button type="submit" onClick={onSubmit}>
                  Sign up
               </button>
               </form>
               // Adding Google login
               <button onClick={loginWithPopup}>Sign in with Google</button>
               <p>
               Already have an account? <NavLink to="/login">Sign in</NavLink>
               </p>
            </div>
         </div>
         </section>
      </main>
   );
     // ...
   };
   ```

### Checking if the user is logged in

1. To check if the user is logged in we'll use **_onAuthStateChanged_** inside a useEffect so each time the user gets to '/home' page we'll get the **_auth_** provider from our configuration and check if the user is logged in. If the user is logged in we'll set the user in the state and if not we'll redirect the user to the login page.

   ```javascript
   # src/pages/Home.js
   import React, { useEffect, useState } from 'react';
   import { useNavigate } from 'react-router-dom';
   import { auth } from '../firebase';

   const Home = () => {
     const navigate = useNavigate();
     const [user, setUser] = useState(null);

     useEffect(() => {
       auth.onAuthStateChanged((user) => {
         if (user) {
           setUser(user);
         } else {
           navigate('/login');
         }
       });
     }, []);

     return (
       <div>
         <h1>Home</h1>
       </div>
     );
   };

   export default Home;
   ```
