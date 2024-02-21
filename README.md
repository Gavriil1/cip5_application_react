**Developer: Gavriil Spyropoulos**

# Note Application: "Le Note"


💻 [Visit live website](https://ci-p5-react-part-9d6b24103236.herokuapp.com/)

![Mockup image](docs/amiresponsive/amiresponsive.png)


## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Experience](#user-experience)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Agile Design](#agile-design)
    - [CRUD Functionality](#crud-functionality)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
    - [Tools & Programs](#tools--programs)
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
  - [Features](#features)
  - [Future features / improvements](#future-features--improvements)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual testing of user stories](#manual-testing-of-user-stories)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Config](#config)
  - [Credits](#credits)


## About

"Le Note” is a note application. Customers may use this application to organize their day-to-day life. They may create a note, like it, delete it, or update it. The application provides a view for important notes. Customers may send feedback to the website developer.


## Project Goals

The objective for this project was to develop an application that allows users to manage their notes in various ways such as creating, liking, deleting, or updating them. The concept was to keep the application user-friendly and for the purpose of enhancing productivity.

The key functionality aspects:
- Simple and intuitive navigation across all notes
- User authentication
- User interaction via creating, liking, deleting, and updating notes
- User profiles with their description and images
- CRUD functionality for notes
- Notes filtering by liked notes
- Search field, which allows user to search for notes by using keywords.
- Responsiveness to allow users to use the app on various devices

## User Experience

### Target Audience

- Individuals seeking assistance in organiz their notes.
- Individuals aiming to monitor their pending tasks effectively.


### User Requirements and Expectations
- Interactive, high-quality website.
- Links and functions work as expected.
- Notifications to assist users in tracking all tasks.
- Simple, intuitive application.
- Responsive website, which allows users to use it from various devices

##### Back to [top](#table-of-contents)

## User Stories

### First sprint


#### Authentication 

1. As a new user, I can create a new account.
2. As a user who has an account, I want to be able to log in to my account.
3. As a user, I can use links to navigate from the login page to the sign-up page and back.
4. As a login user I want to log out from my account

#### Navigation 


5. As a user, I can access a navigation bar on all pages, allowing me to conveniently navigate back to the main page or visit my profile page.

 
### Second sprint

#### Note Page/Important page

6. As a user, I can create notes to organize my thoughts and tasks.
7. As a user, I can view the details of a single note to see its title and content.
8. I can use the “Delete” button to delete a note.
9. I can use the like/unlike button to mark a note as important.
10. I can identify if the note is liked by the modal title or icon which appears on the “Like/Unlike” button.
11. I can use the search field to search for a note according to keywords in the title.
12. I can edit the content of a note by clicking the “Edit” option on each note.
13. I want to see only important notes on the “Important” page.

#### Edit page
14. I want to return from the “Edit Note” page to the “Note” page without modifying the content of the note.

### Third sprint

#### Contact Form

15. I want to be able to send feedback email to owner of the site.


#### User Profile Page 

16. As a user, I can update my profile picture.
17. As a user, I can change my username.
18. As a user, I can update my password.

#### Site owner stories

19. As a site owner of the application, I would like user to see ReactBootstrap alerts after completing different actions, for example: creating a note, deleting a note, liking a note, editing a note, changing the password, changing the username, changing the profile picture, etc.

20. As a site owner, I would like a user to see a footer on each page. On the footer, they can see copyright information and links to social media.

21. As a site owner, I want a user to see a 404 page when he enters an incorrect URL or a URL which he is not authorized to use.
22. As an owner of a website, I would like profile picture on navbar to have predefined size.
23. As a site owner, I would like to display an icon on the subject line of NotesAll and NotesAllLike pages



##### Back to [top](#table-of-contents)


## Design

### Agile Design
This app was developed using an Agile methodology. We utilized GitHub’s projects to manage user stories and prioritize the implementation of features based on their significance, ensuring the app’s functionality and user experience remained uncompromised.

Three categories were created indicating their level of importance, those were:

MUST HAVE
SHOULD HAVE
COULD HAVE

In addition, the user stories were divided according to their purpose:

EPIC1: Authentication
EPIC2: List-Create-Add-Delete-Tasks
EPIC3: Contact Form
EPIC4: Profile Edit
EPIC5: Other

The application of the AGILE methodology in this project enabled me to deliver a site that not only met all the necessary functionalities but also offered additional features. The time constraint on this project prevented the incorporation of all initially listed features, which is where the AGILE approach shines in app design. This is evident in the project, with completed User stories marked as ‘Done’ and those earmarked for future implementation listed under the ‘Future Implementations’ section of the readme.

The GitHub Agile Project can be found here: https://github.com/users/Gavriil1/projects/6

### CRUD Functionality
Tick It handles data with full CRUD Functionality:

Create - Users can create, an account, profile, note, feedback message
Read - Users can view the notes, profile settings.
Update - Users can update their profile setting: password, username, avatar.
User can update notes
Delete - Users can delete notes

### Colours

The application employs a palette of bright yet neutral and warm colours, designed to evoke a sense of calm and allow users to focus on their notes without being distracted by other graphical elements. The background of the application is a light grey, complemented by a matching navigation bar. The main content is housed within white containers. Action buttons, text highlights, and the search bar are rendered in a contrasting darker shade. This colour scheme is consistently applied across all pages to ensure sufficient contrast and enhance user experience.

### Fonts

The website has been designed using Google Fonts. The “Poppins” font, with sans-serif as a fallback, was utilized across the site to guarantee the content’s readability.


### Wireframes

<details><summary>Sign In Page</summary>
    <img src="docs/wireframes/signin.png">
</details>
<details><summary>Sign Up Page</summary>
    <img src="docs/wireframes/register.png">
</details>
<details><summary>Contact Form</summary>
    <img src="docs/wireframes/contactform.png">
</details>
<details><summary>Main Note Page</summary>
    <img src="docs/wireframes/notes.png">
</details>
<details><summary>Important Note Page</summary>
    <img src="docs/wireframes/important.png">
</details>
<details><summary>Edit Form Page</summary>
    <img src="docs/wireframes/editform.png">
</details>
<details><summary>User Page</summary>
    <img src="docs/wireframes/user.png">
</details>
<details><summary>404 Page</summary>
    <img src="docs/wireframes/404.png">
</details>


##### Back to [top](#table-of-contents)

##### Back to [top](#table-of-contents)

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React 

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - Axios was employed as a promise-based HTTP client in the project. It was used to  send API requests from the React application to the API, effectively preventing any CORS errors during the transmission of cookies.
- [ClassNames](https://www.npmjs.com/package/classnames/) - ClassNames were used as "class" in standard css.
- [JWT](https://jwt.io/) - The utilization of JSON Web Tokens (JWT) was instrumental in precluding unauthenticated users from initiating superfluous network requests for access token renewal. Furthermore, it facilitated the elimination of the timestamp from the browser in instances where the token expired upon user refresh or the user opted to log out
- [React](https://17.reactjs.org/) - JavaScript library for building front end of the application. 
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) -  The Bootstrap React library was employed to construct the user interface on the front-end.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - This component was employed to enable the automatic loading of content to avoid pagination, so the user could see the content without distruptions
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - This library was used for dynamic routing. 

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) Was used to verify if the site is responsive.
- [Balsamiq](https://balsamiq.com/) was used as wireframes creation tool.
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for code debugging and for checking the responsivenes of a website.
- [Cloudinary](https://cloudinary.com/) It was used to store static files and images.
- [Font Awesome](https://fontawesome.com/) - Icons sourced from Font Awesome were extensively incorporated across the website.
- [MUI](https://mui.com/material-ui/material-icons/) - Icons from Material UI were used in parallel to Font Awesome.
- [Google Fonts](https://fonts.google.com/) - Was used for font input.
- [GitHub](https://github.com/) Was used as a code repository.
- [Gitpod](https://gitpod.io) was used as IDE development tool
- [Heroku](https://heroku.com) was used to deploy the project into live environment
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) It was employed to verifying the performance, accessibility, adherence to best practices, and Search Engine Optimization (SEO) of the application.
  - [Wave](https://wave.webaim.org/) - It was employed to assess the accessibility of the application



##### Back to [top](#table-of-contents)

## Front-End

### React

React.js, an open-source JavaScript library, was developed by Jordan Walke, a software engineer at Meta (formerly Facebook). It serves as a powerful framework for creating interactive user interfaces and web applications more efficiently than using vanilla JavaScript. React’s focus on components allows developers to build reusable UI elements, making it a popular choice for single-page applications and beyond

I used React for this application for several reasons:

Flexibility: React’s modular structure makes its code easier to maintain compared to other front-end frameworks. 

Speed: When building sites or apps with React, the page loading speed significantly improves because the entire page doesn’t need to refresh and reload all components. Instead, components are updated dynamically, reducing wait times and enhancing the overall user experience.

React Bootstrap is an excellent choice for styling and ensuring responsiveness. It provides a collection of ready-to-use React components, significantly reducing the need to create commonly used code from scratch. With React Bootstrap, you can streamline your development process and enhance the user experience. 

React is the go-to library for developing social networking and media content applications. Notably, major platforms like Meta (formerly Facebook), Instagram, Netflix, and Airbnb have all been built using React1. Its versatility and robustness make it a top choice for creating dynamic and interactive web experiences.

Reusability of components – Components can be created and re used throughout the app with no need to re write code for the same features.

  - `<NavBar />` - This is a reusable component that generates a navigation bar. It displays different options for logged-in and logged-out users. For logged-out users, it shows ‘Sign In’ and ‘Sign Up’ options. For logged-in users, it displays ‘Notes’, ‘Important’, ‘Contact Page’, ‘Profile Page’, and ‘Sign Out’ options.
  - User stories covered: 4, 5

- `<Footer />` - This is a reusable component that generates a footer for the page. It includes copyright information and social media links.
  - User stories covered: 20

- `<NotFount />` - This is a reusable component that generates 404 error when the user tries to visit incorrect page. 
  - User stories covered: 21


- `<Avatar />` - This component reusable componentis designed for configuring the profile picture size in the user interface (UI). 
  - User stories covered: 22

- `<SignInForm>` - This is a component designed to allow the user to log in to their account..
  - User stories covered: 2, 3

- `<SignUpForm>` - This is a component designed to allow the user to register a new account.
  - User stories covered: 1, 3 

- `<ContactForm>` - This is a component designed to allow the user to send a feedback to application owner.
  - User stories covered: 15

- `<CrateArea />` - This is a reusable component used to create a new note. This component is assigned to NotesAll and NotesAllLike pages.
  - User stories covered: 6

- `<EditNote />` - This is a reusable component used to modify the note’s content, title, and like status. 
  - User stories covered: 7, 9, 10, 12, 14

- `<Header />` - This is a reusable component used to create a subject line with an icon on the NotesAll and NotesAllLike pages
  - User stories covered: 23

- `<NotesAll />` - This component is used to list all the notes of the user. It  allows user to search for the notes, create notes, like, delete and edit notes.
  - User stories covered: 6, 7, 8, 9, 10, 11, 12, 19

- `<NotesAllLike />` - This component is used to list "Important/Liked"  notes of the user. It  allows user to search for the notes,  like, delete and edit notes.
  - User stories covered: 7, 8, 9, 10, 11, 12, 13 

- `<ProfilePage />` - This is a component which embeds ProfileEditForm, UserNameForm, and UserPasswordForm. It allows the user to change Avatar, username, and password.
  - User stories covered: 16, 17, 18, 19

- `<ProfileEditForm />` - This is a reusable component, which allows the user to change the profile picture.
  - User stories covered: 16

- `<UsernameForm />` - This is a reusable component, which allows the user to change the username.
  - User stories covered: 17

- `<UserPasswordForm />` - This is a reusable component, which allows the user to change the password.
  - User stories covered: 18


##### Back to [top](#table-of-contents)

## Back-End API

### Django REST Framework

The Application Programming Interface (API) for this front-end application was constructed utilizing the Django REST Framework. For more information on DRF, you may click here. [here](https://www.django-rest-framework.org/).




## Features


### Login Form
- It is used for a user to log in to their account. The user must have an account to log in.
- To log in, the user needs to add a username and password. Both fields are mandatory for logging in.
- Once a user logs in, they are navigated to the notes page.
- A warning message is displayed for incorrect input.
- User stories covered: 2, 3

<details><summary>See feature screenshot</summary>
<img src="docs/features/login.png">
</details>

### Sign up form
- A new user can create a new account by using this form.
- To create an account, a user needs to provide a nickname, password, and password validation.
- A user cannot use a duplicate username to register the account.
- Once registered, the user is redirected to the login page.
- User stories covered: 1, 3

<details><summary>See feature screenshots</summary>
<img src="docs/features/signupform.png">
</details>


### Footer
- A footer is displayed at the bottom of each page.
- It contains copyright info and links to social media.
- User stories covered: 20

<details><summary>See feature screenshot</summary>
    <img src="docs/userstories/user_story_20_footer.png">
</details>

### Logo and Navigation Bar
- The Navbar is present on each page at the top of the screen.
- We have two navbar variants:
    The navbar for new or not logged-in users will display the Logo, Sign up, and Log in icons - options to either register or log in.
    The navbar for logged-in users displays the Logo, Notes, Important, Contact, Avatar/User, and Sign out icons.
- The navbar is responsive and becomes a hamburger menu on small screens.
- By clicking on the logo icon, the user can navigate to the landing page, which is either the sign-in form or the notes page.
- User stories covered: 4, 5

<details><summary>See feature screenshots</summary>
<img src="docs/features/navbar1.png">
<img src="docs/features/navbar2.png">
</details>

### Contact Form
- Enables users to contact the admin/site owner to share feedback.
  -user stories: 15
<details><summary>See feature screenshots</summary>
  <img src="docs/userstories/user_story_14_sendfeedback.png">
</details>


### Main notes page
- Main notes page is displayed for logged-in users 
- Contains :
  - Search Bar.
  - Create Note field
  - Notes created by sign in user.
- Displays all notes ordered by the most recent one
- User stories covered: 6, 7, 8, 9, 10, 11, 23, 12

<details><summary>See feature screenshot</summary>
<img src="docs/features/notesmainpage.png">
</details>

### Important notes page
- Main notes page is displayed for logged-in users 
- Contains :
  - Search Bar.
  - Create Note field
  - Notes created by sign in user.
- Displays only important notes which were liked by a user.
- User stories covered: 7, 8, 9, 10, 23, 13, 12

<details><summary>See feature screenshot</summary>
<img src="docs/features/important.png">
</details>




### Notes create form

- Contains Note title and note description
- Description field is optional
- Allows a user to create notes
- User stories covered: 6

<details><summary>See feature screenshots</summary>
<img src="docs/features/notescreateform.png">
</details>

### Note Update form

- Contains Note title and note description
- User may modify the note and click on "Save Changes"
- He may like/unlike note. 
- If he clicks cancel he redirected to homepage.
- User stories covered: 7, 8, 9, 10, 14, 12

### Note Footer

- Contains information on copyright
- Contains links to social media
- User stories covered: 20

<details><summary>See feature screenshots</summary>
<img src="docs/userstories/user_story_20_footer.png">
</details>

### Note Update settings on Main page

- Contains Note title and note description
- Each Note has "Like/Unlick", Delete and Edit Note button.
<details>
<summary>See feature screenshots</summary>
<img src="docs/features/updatesettingsmainpage.png">
</details>

### Likes
- Allow user to mark his note as important.
- Liked  notes are marked yellow  if user likes the post
- No Liked notes are market as green.
- User can see and therefore can like only his own notes.
- Allow user to seperate important notes from not important notes.
- User stories covered: 9

<details><summary>See feature screenshots</summary>
  <img src="docs/features/likes1.png">
  <img src="docs/features/likes2.png">
</details>



### Profile page
- Displays profile information if it was provided by the profile owner
- Allows user to change his profile Avatar, password, username
- User stories covered:16, 17, 18

<details><summary>See feature screenshot</summary>
<img src="docs/features/profilepage.png">
</details>


### Profile avatar
- Permit users to replace their default profile picture with a personal avatar or photo.
- The updated avatar is visible in the navigation bar, on the user's profile page, 
- User stories covered: 22

<details><summary>See feature screenshot</summary>
<img src="docs/features/avatar.png">
</details>

### Username change form
- Allows user to change their profile username.
- User stories covered: 17

<details><summary>See feature screenshots</summary>
<img src="docs/features/username.png">
</details>


### Password change form
- Allows user to change their profile password.
- User stories covered: 18

<details><summary>See feature screenshots</summary>
<img src="docs/features/resetpassword.png">
</details>


### Search bar
- Users may find the desired note by entering a keyword in the search bar.
- It allows users to search through all note titles.
- It enables searching through liked notes on the "Important" page.
- User stories covered: 11

<details><summary>See feature screenshots</summary>
<img src="docs/features/searchbar.png">

</details>


### 404 error page
- This is displayed when the user attempts to access an incorrect or unauthorized URL.
- It contains text indicating that the page does not exist, along with a link to the homepage.
- User stories covered: 21

<details><summary>See feature screenshot</summary>
<img src="docs/features/404.png">
</details>


### Feedback messages
- User is provided with feedback message about the action their performed such as edited/deleted comment, updated profile or password, deleted a post
- User stories covered: 19

<details><summary>See feature screenshot</summary>
<img src="docs/userstories/user_story_19_alerts.png">
</details>




## Future features / improvements

Examples of potential improvements for future versions of the project:

- Authentication
  - Allow users to create an account and authenticate by using email, Gmail/Apple/Microsoft/SSO.
  - Add password receovery through email.
- Profile
  - Provide an option to share a note with another user, or with a non-registered user by sharing a note link.
- Notes
  - Improve the design of the note.
  - Add an option to include pictures in the note.
- Search Bar
  - Add additional filters to the search bar.
- Profile Page
  - Add PayPal as a payment method to allow users to pay for extra features on the app.
  - Create a log page where users can monitor their actions.
- User Account
  - Allow users to delete their account.

##### Back to [top](#table-of-contents)


## Validation 

### HTML
The W3C Markup Validation Service was used to validate the HTML of the website. No errors were identified.

On all pages, we have the following error, which is related to the bug in FontAwesome library. Since we cannot adjust and change the FontAwesome library, I treat the error as a false positive:

"CSS: transform: var(--fa-rotate-angle, none) is not a transform value.
ate-angle,none))}.fa-stack{dis"

<details><summary>Login page</summary> 
<img src="docs/validation/html/loginpagehtmcheck.png"> 
</details>

<details><summary>Signup page</summary> 
<img src="docs/validation/html/signuppagehtmlcheck.png"> 
</details>

<details><summary>Contact Form</summary> 
<img src="docs/validation/html/contactformpagehtmlpage.png"> 
</details> 

<details><summary>Profile Page</summary>
<img src="docs/validation/html/userprofilehtmlcheck.png">
</details>

<details><summary>Notes Page</summary>
<img src="docs/validation/html/notepagehtmlcheck.png">
</details>

<details><summary>Important Page</summary>
<img src="docs/validation/html/importantpagehtmlcheck.png">
</details>

<details><summary>Note Edit Page</summary>
<img src="docs/validation/html/noteedithtmlcheck.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/html/404htmlcheck.png">
</details>

### CSS

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors. 

<details><summary>Avatar.module.css.module.css</summary> 
<img src="docs/validation/css/avatarmodulecsscheck.png"> 
</details> 

<details><summary>Button.module.css</summary> 
<img src="docs/validation/css/buttonmodulecsscheck.png"> 
</details> 

<details><summary>Navbar.module.css</summary> 
<img src="docs/validation/css/navbarmodulecss.png"> 
</details> 

<details><summary>NotesPage.module.css</summary> 
<img src="docs/validation/css/notespagemodulecsscheck.png"> 
</details> 

<details><summary>Contact.module.css</summary> 
<img src="docs/validation/css/contactmodulecsscheck.png"> 
</details> 




### JSX
The JSX code was validated using the ESLint utility.

Installed ESLint by using npm init @eslint/config according to the page https://eslint.org/

I took ESLint configuration from the general chat of Code Institute. Configuration settings are saved in .eslintrc.json


<details><summary>Eslint validation for components</summary> 
<img src="docs/validation/jsx/componentjsxcheck.png"> 
</details> 

<details><summary>Eslint validation for context</summary> 
<img src="docs/validation/jsx/contextjsxcheck.png"> 
</details> 

<details><summary>Eslint validation for hooks</summary> 
<img src="docs/validation/jsx/hooksjsxcheck.png"> 
</details> 

<details><summary>Eslint validation for SignIn/SignOut pages</summary> 
<img src="docs/validation/jsx/authjsxcheck.png"> 
</details> 

<details><summary>Eslint validation for notes pages.</summary> 
<img src="docs/validation/jsx/notesjsxcheck.png"> 
</details> 

<details><summary>Eslint validation for Contact Form page.</summary> 
<img src="docs/validation/jsx/contactformjsxcheck.png"> 
</details> 


<details><summary>Eslint validation for Profile Page</summary> 
<img src="docs/validation/jsx/profilepagejsxcheck.png"> 
</details> 





### Chrome Dev Tools Lighthouse 

I used Lighthouse to test the performance, accessibility, best practices, and SEO of the site. Unfortunately, the performance is low.

This occurs because when React requests the user’s status, the API responds with a delay. As a result, even if the user is authenticated, the system initially loads the sign-in page and only then starts loading the notes page.

I confirmed that the cookies are configured as described in the walkthrough. I compressed the login image to 7 MB, but this did not improve the speed. I attempted to use this image from Cloudinary or directly from the React application, but the performance did not improve.

The issue could be related to the speed of the HEROKU student account. For this reason, I am ignoring  this error for the time being
 and reporting it as a bug


#### Desktop 

<details><summary>Sign In</summary> 
<img src="docs/performance/1_sign_in_desktop.png"> 
</details> 

<details><summary>Sign Up</summary> 
<img src="docs/performance/2_sign_up_desktop.png"> 
</details> 

<details><summary>Notes</summary> 
<img src="docs/performance/3_notes_desktop.png"> 
</details> 

<details><summary>Important</summary> 
<img src="docs/performance/4_important_desktop.png"> 
</details> 

<details><summary>Contact</summary> 
<img src="docs/performance/5_contact_desktop.png"> 
</details> 

<details><summary>Profile</summary> 
<img src="docs/performance/6_profile_desktop.png"> 
</details> 



#### Mobile 

<details><summary>Sign In</summary> 
<img src="docs/performance/1_sign_in_mobile.png"> 
</details> 

<details><summary>Sign Up</summary> 
<img src="docs/performance/2_sign_up_mobile.png"> 
</details> 

<details><summary>Notes</summary> 
<img src="docs/performance/3_notes_mobile.png"> 
</details> 

<details><summary>Important</summary> 
<img src="docs/performance/4_important_mobile.png"> 
</details> 

<details><summary>Contact</summary> 
<img src="docs/performance/5_contact_mobile.png"> 
</details> 

<details><summary>Profile</summary> 
<img src="docs/performance/6_profile_mobile.png"> 
</details> 



### Wave
The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.
There were a few errors related to "Redunnt link" and "NonScript" element. I verified that I can ignore these two errors.

<img src="docs/validation/wave/allowtonotfix.png">

<details><summary>Log in page</summary>
<img src="docs/validation/wave/signinwave.png">
</details>

<details><summary>Sign up page</summary>
<img src="docs/validation/wave/signupwave.png">
</details>


<details><summary>Note page</summary>
<img src="docs/validation/wave/notewaive.png">
</details>

<details><summary>Important page</summary>
<img src="docs/validation/wave/importantwave.png">
</details>

<details><summary>Profile Page</summary>
<img src="docs/validation/wave/userprofilewave.png">
</details>

<details><summary>Contact Form</summary>
<img src="docs/validation/wave/feedbackwave.png">
</details>

<details><summary>Edit Page</summary>
<img src="docs/validation/wave/editpagewave.png">
</details>


<details><summary>404 error page</summary>
<img src="docs/validation/wave/404wavecheck.png">
</details>

##### Back to [top](#table-of-contents)


## Testing
 
### Manual testing of user stories

1. As a new user, I can create a new account.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Open Application Web Site, Click on "Sign Up". COmplete username and password fields and click "Sign up" | New account is created and the user redirected to sign in page. | Works as expected |
 
<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_1.png">
</details>

<br/>



2.  As a user who has an account, I want to be able to log in to my account.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Sign In" use correct password and username and click "Log In" button| User signed in sucesfully to his account. | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_2.png">
</details>

<br/>

3. As a user, I can use links to navigate from the login page to the sign-up page and back.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On Sign in page I see hyperlink "Already have an account?Register". When I click on it navigate to sign up page. On sign up page I see "Already have an account? Login" When I click on it I navigate to login page. | By clicking on the links I navigate to "sign in" and "sign up" pages | Works as expected |
 
<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_3_signin_signout.png">
</details>

<br/>

4. As a login user I want to log out from my account

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As logged in user I click on "sign out" option on Navbar | User logged out | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_18_sign_out.png">
</details>

<br/>

5. As a user, I can access a navigation bar on all pages, allowing me to conveniently navigate back to the main page or visit my profile page.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to application website. After sing sign in to your ccount  | As not autorized user I can see "Sign in", "Sign Up" options on Navmbar. As logged in user I can see and navigate to "Notes", "Important", "Contact", "User Profile"  | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_4_navbar.png">
</details>

<br/>

6. As a user, I can create notes to organize my thoughts and tasks.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As a logged in user, I am on "Note" page. I complete fields "Title", "Content" and click "create" | New Note is created | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_5_create_note.png">
</details>

<br/>

7. As a user, I can view the details of a single note to see its title and content.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As a user I navigate to "Notes page" after I click on Pensic button on the note| When I am on "Notes page" I see title and content for all notes. When I click on pencil I navigate to page, where I see the content of a single note but in bigger windows | Works as expected |
 
 <details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_6a-view_note_content.png">
<img src="docs/userstories/user_story_6b-view_note_content.png">
</details>

<br/>

8. I can use the “Delete” button to delete a note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As logged in user I navigate to "Note" or "Import" page and click on bin icon | the note is deleted | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_7a-deletenote.png">
<img src="docs/userstories/user_story_7b-deletenote.png">

</details>

<br/>

9. I can use the like/unlike button to mark a note as important.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Note", "Important" or "Edit" page I click on "Like/Unlike" button | Title of note change color, in addition icon of like/unlike button changes  | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/usere_story_8a_like.png">
<img src="docs/userstories/usere_story_8b_like.png">
<img src="docs/userstories/usere_story_8c_like.png">
</details>

<br/>

10. I can identify if the note is liked by the modal title or icon which appears on the “Like/Unlike” button.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
I navigate to "Important" page. After I navigate to "Note" page, finaly I click on "Penscil" icon | I  see all important notes on "Important" page. On "Note", "Edit" page I can see liked notes with yello colour and start icon on "Like/Unlike" button | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_9a_seelike.png">
<img src="docs/userstories/user_story_9b_seelike.png">
<img src="docs/userstories/user_story_9c_seelike.png">
</details>

<br/>

11. I can use the search field to search for a note according to keywords in the title.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to "Note" or "Important" page. Enter keyword in search field| All notes with required keyword are shown | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_10a_searchfield.png">
<img src="docs/userstories/user_story_10b_searchfield.png">
</details>

<br/>

12. I can edit the content of a note by clicking the “Edit” option on each note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Note" or "Important page click on Edit Icon. On Edit page edit content and title and click "SaveChanges"  | The changes are saved and the user sees a note with updated information | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_11_edit.png">

</details>

<br/>

13. I want to see only important notes on the “Important” page.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to Important page | User sees  only important notes | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_12_important.png">

</details>

<br/>

14. I want to return from the “Edit Note” page to the “Note” page without modifying the content of the note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Edit" page click cancel. | User click on cancel, all changes in title and content are not saved | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_13_canceledit.png">
</details>

<br/>


15. I want to be able to send feedback email to owner of the site.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to Contact  page. Complete all the fields and click "Send Feedback" | The message is sent to a site owner. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_14_sendfeedback.png">

</details>

<br/>

16. As a user, I can update my profile picture.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page, click on "choose file", "upload image", save  | the users profile picture updated | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_15_update_image.png">
</details>

<br/>

17. As a user, I can change my username.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page. Under "username" edit a username, click "Save | The profile of the user is udpated.  | Works as expected |



<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_16_edit_username.png">

</details>

<br/>

18. As a user, I can update my password.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page. In "New Password" and "Confirm new password" type a new password, click "Save | Password Updated  | Works as expected |


<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_17_update_password.png">

</details>

<br/>

19.  As a user of the application, I can see ReactBootstrap alerts after completing different actions, for example: creating a note, deleting a note, liking a note, editing a note, changing the password, changing the username, changing the profile picture, etc.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Complete any action on the page, for example: create note, edit note etc | See alert which informs you about the action which was done by the user. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_19_alerts.png">
</details>

<br/>

20. As a site owner, I would like a user to see a footer on each page. On the footer, they can see copyright information and links to social media.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Find on the buttom of the page a footer. | User sees copyrigh information and links to social media.| Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_20_footer.png">
</details>

<br/>

21. As a site owner, I want a user to see a 404 page when he enters an incorrect URL or a URL which he is not authorized to use.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
User enters incorrect URL  | 404 page is shown to the user | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_21_404.png">
</details>

<br/>

22. As an owner of a website, I would like profile picture on navbar to have predefined size.
**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Change Avatar picture for the user | Vwerify that this picture fits into Navbar Size | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_22_avatar.png">
</details>

23. As a site owner, I would like to display an icon on the subject line of NotesAll and NotesAllLike pages.
 Find Subject line on NotesAll and NotesAllLike pages| Vwerify that subject line has icon | Works as expected |

 <details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_23a_header.png">
<img src="docs/userstories/user_story_23b_header.png">
</details>

### Device Testing & Browser compatibility

###  Performing tests on various devices

Testing of the website was conducted on the following devices:

- Latitude 5520

- Redmi Note 10

- Samsung Tablet A10.1

Furthermore, the website underwent testing using the Device Toggling feature of Google Chrome Developer Tools, which includes all available device options.

###  Browser compatability

The following browsers were used to test the website:

- Google Chrome

- Mozilla Firefox

- Microsoft Egde


##### Back to [top](#table-of-contents)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| When the React Front End sends a request to the API backend to query the authenticated user, the backend replies with a delay. This causes multiple issues. Performance issue: The page loads content for the unauthenticated user first and then for the authenticated user. This delay does not allow me to block unauthorized users from accessing the “Notes”, “Important”, and “Contact Page”. This happens because even if the user is authenticated, a 404 page is loaded since the frontend receives the authenticated user details with a significant delay.Private information is not exposed, as I block the loading of notes for unauthorized users from the API." | The issue cannot be resolved. It could be due to the speed of the Heroku Student Account, or it could be a result of the design of the Code Institute walkthrough. I’ve opened multiple cases with tutors, but we have been unable to solve the issue. |
| Lighthouse validation: Poor performance of the landing page | Resized (compressed) the landing image |
| Wave validator: Empty link | Add 'aria-label'|
| Wave validator: Footer has low contrast | Changed color to dark blue |
| Clicking on Logo image does not redirect the user to homepage | connected home url to Logo |
| The filter was not working on "Important" page | fixed typo in filter's url |
| Footer cover's page content on smaller screens | fixed it by adding style={{ marginBottom:  }} on each affected page. |



##### Back to [top](#table-of-contents)

## Deployment

The application has been launched at. [Heroku](https://heroku.com). You can access the live version of the application at. https://ci-p5-react-part-9d6b24103236.herokuapp.com/

Kindly proceed with the following steps to launch the application:

1. Deploy your own version of the [Le Note](https://github.com/Gavriil1/CI-PP5-API) by following the [deployment instructions for the Note Explorers API](https://github.com/Gavriil1/CI-PP5-API#deployment).

2. Duplicate or create a fork of this repository. To fork it, navigate to https://github.com/Gavriil1/cip5_application_react , click on `Fork` and follow the instructions. To Clone the repository, run `gh repo clone Gavriil1/cip5_application_react` in  terminal.

    <details>

    <summary>Show image</summary>

    ![Clone or fork repository](docs/deployment/clonefork.png)

    </hr>

3. Navigate to the repository folder and modify the file. `src/api/axiosDefaults.js`. In the file, change the value of `axios.defaults.baseURL` to the URL of your launched API. The URL can be located by selecting your API app from the Heroku dashboard and then copying the URL from the `Open app` button. 

4. If you haven’t already, sign in to your Heroku account at https://heroku.com. Initiate a new app from the Heroku dashboard by selecting New and then `Create new app`.

    <details>

    <summary>Show image</summary>

    ![Create Heroku app](docs/deployment/createnewapp.png)

    </details>

5. Assign an available name to your app and select your region (US or Europe).



6. Select the *Deploy* tab and link the Heroku app to your GitHub repository.

    <details>

    <summary>Show image</summary>

    ![Connect Heroku app to GitHub repository](docs/deployment/connectgithub.png)

    </details>

7. Scroll down and select the branch you want to deploy in the *Manual deploy* section. Now click on `Deploy Branch` for the first deployment of the application.

    <details>

    <summary>Show image</summary>

    ![Deploy branch](docs/deployment/maindeploy.png)

    </details>

8. In case of unsuccessful deployment, you may resolve the issue by checking the deployment logs. Click on `More`, then `View logs` You may also check the Activity tab for more information. 


    <details>

    <summary>Show image</summary>

    ![Debugging](docs/deployment/viewlogs.png)

    </details>

9. After successful deployment, click on `View` to open the app.

    <details>

    <summary>Show image</summary>

    ![Open app](docs/deployment/successfuldeploy.png)

    </details>

   If the application was successful, you should see the `Note Application` sign-in page. If you can see the landing page but cannot log in, double-check the `CLIENT_ORIGIN` config variable on your API project as described here. If you still can’t see the content, verify that the provided URL to the API is correct



## Config

### Forking the GitHub Repository
1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
   
### Making a Local Clone
Follow these steps to clone the repository:
1. Go to the GitHub repository 
2. Find the "Code" button located above the file list and click on it.
3. Choose whether you prefer to clone via HTTPS, SSH, or Github CLI, and then click on the copy button to copy the URL to your clipboard.
4. Open Git Bash
5. Navigate to the directory where you would like to clone the directory and set it as the current working directory.
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Hit the Enter key to create your local clone.

Please check the following link for more information: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

##### Back to [top](#table-of-contents)


## Credits
- Download the Logo Image from [here](https://commons.m.wikimedia.org/wiki/File:OutlineApp_Logo.png)
- The login and log out page was taken from  [here](https://mdbootstrap.com/docs/react/extended/login-form/)


### Code

This project was inspired by the ['Moments'](https://github.com/Code-Institute-Solutions/moments) social media platform which was a final walk-through project with Code Institute. I took many components from "Moments" to build my own Productivity App .
