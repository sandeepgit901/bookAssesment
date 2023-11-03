1) For add the book    POST https://bookapp-7i1v.onrender.com/api/createbook          
2) Get all books details  GET  https://bookapp-7i1v.onrender.com/api/                            
3) Get any single book details by its ID GET  https://bookapp-7i1v.onrender.com/api/:id  
4) For update bookdetail by its id PUT https://bookapp-7i1v.onrender.com/api/updatebook/:id
5) For delete bookdetail by its id  DELETE https://bookapp-7i1v.onrender.com/api/:id 

Deployment process

Step 1: Sign Up for Render

Step 2: Create a New Web Service

Step 3 : Log in to your Render account, select ,Web Service,choose a name for your service.

Step 4: Configure Build Settings

In the Build and Run Settings section, set the build command to install dependencies and start your api's or application. 
 and then , choose the Node.js version that matches your app or api's requirements.

Step 5:Set up your environment variables in the Render dashboard, including your MongoDB connection string and any other configuration details.

Step :6  Set up your database ( MongoDB) on Render. 

Step 8: You have to deploy your service then ,configured your service, after that Render will deploy your api's specified environment.

Step 9: Monitor and Debug

Step 10: Access Your API

After  deployment, Render will provide  URL where your all API's are accessible.
