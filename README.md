# ReactDjango_JWT_StarterCode

Starter code for full stack React + Django applications using JWT for authentication/authorization and a fully working register/login system on the React side

## NOTE

"cars" app in Django backend for example purposes only. Study it closely and review provided resources to understand how to properly create protected endpoints that require a JWT token for authorization.

## For implementing user roles

- see comments in the following files in the order they are listed
  - backend/authentication/models.py
  - backend/authentication/serializers.py (note that there are several places needing modification in that file)
- If modifying the User class in authentication/models.py, make sure to drop your existing database,
  create it, and run migrations from scratch
- for a great reference, see the following article: https://simpleisbetterthancomplex.com/tutorial/2018/01/18/how-to-implement-multiple-user-types-with-django.html
  - note that this article is from 2018 and dealing with a full stack Django application scenario with HTML/CSS templates. The principles of setting up the backend portion for User roles is still valid!
- once user roles are set up on your backend, you can now utilize them on the frontend. Recommend reviewing the React Router slideshow for ideas on how to use descendant routes and conditional rendering to control who can access what parts of your application based on a role!

## User Stories

Features: 

(5 points): As a Customer, Engineer, and Ticket Moderator (admin), I want to be able to register/login an account with the application. <FOR MULTI ROLE REGISTRATIONS> 

(10 points): As a developer, I want to have an aesthetically pleasing and intuitive user interface/user experience (UI/UX) with all features of the application stylized. 

(2.5 points) As a Customer, I want to be able to submit a ticket for an issue with the product using a structured form that includes a priority, description, and hard deadline for a fix. 

(2.5 points) As a Customer, I want to be able to see a list of active and completed tickets from my submission history so that I can see if my problem(s) are currently being dealt with or have been resolved. 

(2.5 points) As a Customer, I want to be able to filter the list of tickets to see the resulting bugs' details. 

(10 points) As an Engineer, I want to be able to see a main dashboard with all of the tickets currently assigned to me, along with data visualizations showing statistics on the following: 

    Percentage of tickets past hard deadline for a fix 

    Tickets by priority 

    Percentage of tickets completed on time historically 

(5 points) As an Engineer, I want to be able to edit a single ticket in order to assign current status and a brief description of the work being done to the ticket so that the Customer can see their ticket is being handled and any progress on the ticket. 

(5 points) As a Moderator, I want to be able to see a listing of submitted tickets and assign tickets to Engineers, as well as delete tickets if needed 

(7.5 points) As a Moderator, I want to be able to see a listing of all Engineers in the system and what tickets are assigned to them, so I can balance workload accordingly 
