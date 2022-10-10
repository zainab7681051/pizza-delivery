# Pizza Delievry
Vuejs 3 web application for pizzerias. The graphic designs on the frontend are in  HTML/CSS with vue framework, and Google's firebase cloud services were used. Cloud firestore and authentication tools were used for getting/putting data to/from the cloud and registering and logging in the users.
## NOTE: Google sign-in provider was enabled for this project, though firebase offers many more providers, e.g., facebook, twitter, anonymous user(users who choose to create account), etc... 
# 
# Preview
![caption](screenshot/pizza-resturant.gif)
# 
# tools & frameworks
the following `stack` of tools and frameworks were used in this project

* backend & databse:
   * firebase 
   * cloud firestore 
   * firebase authentication(google sign-in)

* frontend:
   * vuejs 3
   * HTML/CSS/SCSS/Javascript 
   * vue-router for route navigation
   * vuex for state management
# how to run
install the dependencies on the frontend
```
npm install --save
```
then, to run the vue app, type the below code
```
vue serve
```
and click or copy the pagelink in the vue CLI prompt/git window and head towards the browser to see the app.

***Note: you can host and deploy your app with firebase, for free. The docs for that are found at https://firebase.google.com/docs/hosting/quickstart***
