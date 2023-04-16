# CarSite Backend #
You'll need these packages to get started:
**jsonwebtoken**
**bcrypt**
**dotenv**
**multer**
**mongodb**
**mongoose**

## Authentication ##

Authentication here is done very simply and just with JWT (jsonwebtokens), since this is a very small project and will most likely not go into production, I didn't use any other auth method which is easier for managing users.
When the user requests a sign up, here the JWT token is everything is alright will sign the user and return a token string which we will store in front end and use it to sign up the user. 
Here I've added a protection measure that verifies tokens when someone tries to make a post request in admin dashboard.
Bcrypt encrypts the password for database and when signing up, we'll have to convert that password to bcrypt hashed password.

## Database ##
Here we have three database entries only:

## Creating a post ##

To create a car post, we'll have to just get the data from front in **routes** then from there we'll connect the **car.routes.js** with **car.controllers.js** and request the form body **req.body**.
To return a proper format to front always, I've made a helper.js file which will make sure my **res.json** is always in correct format.

## Uploading images ##

Here I have a file called multer.js which accepts only 3 formats of images, JPEG, JPG and PNG. This file can be called in a route by specifying what we wanna upload by using **upload.single()** and then **req.file** in routes.

## The backend for this part is simple ## 
If I wanted to include node mailer and send mails to users, here I would install nodemailer which would auto mail users depending on how I set up it to work. If they subscribe or not, but due to the fact that this isn't a live production I didn't add it.

## If you want to see how to do it, check my repository https://github.com/EgzonBajrami/conad-back/blob/main/services/email.service.js ##

Ignore the emails there, since those are testing emails and weren't used in production.