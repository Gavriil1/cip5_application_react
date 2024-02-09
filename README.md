# SnapFood <img src="src/assets/SnapFood-logo.png" style="width: 85px; height:60px;">

**Developer: Aleksandra Haniok**

💻 [Visit live website](https://ci-pp5-snapfood.onrender.com/)

![Mockup image](docs/amiresponsive/amiresponsive.png)


## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design](#design)
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
  - [Config](#config)
  - [Credits](#credits)


## About

"Le Note” is a note application. Customers may use this application to organize their day-to-day life. They may create a note, like it, delete it, or update it. The application provides a view for important notes. Customers may send feedback to the website developer to share feedback.


## Project Goals

The objective for this project was to develop an application that allows users to manage their notes in various ways such as creating, liking, deleting, or updating them. The concept was to keep the application user-friendly and for the purpose of enhancing productivity.e.

The key functionality aspects:
- Simple and intuitive navigation across all notes
- User authentication
- User interaction via creating, liking, deleting, and updating notes
- User profiles with their description and images
- CRUD functionality for notes
- Notes filtering by liked notes
- Search field, which allows user to search for notes by using keywords.
- Responsiveness to allow users to use the app on various devices


## User Stories

### First sprint


#### Authentication 

1. As a new user, I can create a new account.
2. As a user who has an account, I want to be able to log in to my account.
3. As a user, I can use links to navigate from the login page to the sign-up page and back.

#### Navigation 

4. As a user, I can view the home page that describes the application, enabling me to understand its purpose.
5. As a user, I can access a navigation bar on all pages, allowing me to conveniently navigate back to the main page or visit my profile page.
6. As a user who is not logged in, I can see options to log in or sign up, providing me the ability to access my account or create a new one.
 
### Second sprint

#### Note Page/Important page

7. As a user, I can create notes to organize my thoughts and tasks.
8. As a user, I can view the details of a single note to see its title and content.
9. I can use the “Delete” button to delete a note.
10. I can use the like/unlike button to mark a note as important.
11. I can identify if the note is liked by the modal title or icon which appears on the “Like/Unlike” button.
12. I can use the search field to search for a note according to keywords in the title.
13. I can create a note using the form at the top of the page.
14. I can edit the content of a note by clicking the “Edit” option on each note.
15. I want to see only important notes on the “Important” page.

#### Edit page
16. As a user, I want to edit the “title” and “content” of a note.
17. I want to return from the “Edit Note” page to the “Note” page without modifying the content of the note.

### Third sprint

#### Contact Form

18. I want to be able to send feedback email to owner of the site.


#### User Profile Page 

19. As a user, I can update my profile picture.
20. As a user, I can change my username.
21. As a user, I can update my password.

#### General

22. As a user of the application, I can see ReactBootstrap alerts after completing different actions, for example: creating a note, deleting a note, liking a note, editing a note, changing the password, changing the username, changing the profile picture, etc.
23. As an application owner, I want my application to be fully responsive so that users can use it on various devices.
24. As an application owner, I want users to be directed to an error page if they try to access a note that does not exist, preventing the need to use the browser’s back button.



##### Back to [top](#table-of-contents)


## Design

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


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React 

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - Axios was employed as a promise-based HTTP client in the project. It was instrumental in sending API requests from the React application to the API, effectively preventing any CORS errors during the transmission of cookies.
- [ClassNames](https://www.npmjs.com/package/classnames/) -   This utility facilitates the modification of the website’s aesthetic elements contingent upon specific conditions. The rationale behind its implementation was to dynamically alter the visual representation of components in accordance with the required stylistic parameters, and to concurrently apply multiple styles to these components
- [JWT](https://jwt.io/) - The utilization of JSON Web Tokens (JWT) was instrumental in precluding unauthenticated users from initiating superfluous network requests for access token renewal. Furthermore, it facilitated the elimination of the timestamp from the browser in instances where the token expired upon user refresh or the user opted to log out
- [React](https://17.reactjs.org/) - JavaScript library for building front end of the application. 
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) -  The Bootstrap React library was employed to construct the user interface on the front-end, encompassing both stylistic elements and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - This component was employed to facilitate the automatic loading of content, for instance, notes, as the user scrolls down the page. This effectively obviates the necessity for the user to manually navigate to subsequent or preceding pages.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - This library was leveraged for dynamic routing. It was instrumental in managing the transition between various component views and dictating the content visible to the user, contingent on the URL accessed in the browser.

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) Was used to check the responsiveness of a website.
- [Balsamiq](https://balsamiq.com/) wireframes creation tool
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for code debugging and for checking the responsiveness of a website
- [Cloudinary](https://cloudinary.com/) was used to store static files and images.
- [Font Awesome](https://fontawesome.com/) - Icons sourced from Font Awesome were incorporated extensively across the website
- [MUI](https://mui.com/material-ui/material-icons/) - Icons from material UI were used in parallel to fontawesome.
- [Google Fonts](https://fonts.google.com/) - Was used for font input.
- [GitHub](https://github.com/) It served as a remote repository for the preservation of project code
- [Gitpod](https://gitpod.io) was used to develop the application.
- [Heroku](https://heroku.com) was used to deploy the project into live environment
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) It was employed to ascertain the performance, accessibility, adherence to best practices, and Search Engine Optimization (SEO) of the application.
  - [Wave](https://wave.webaim.org/) - It was employed to assess the accessibility of the application

##### Back to [top](#table-of-contents)


## Front-End

### React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of independent and reusable components ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).

I used React for this application for several reasons:
- Speed - applying React significantly increases the page loading speed and reducing the wait, which affects user experience and satisfaction
- Flexibility - the React code is easier to maintain and is flexible due to its modular structure, compared to other front-end frameworks
- React Bootstrap - excellent choice for improving user experience, used for styling and responsiveness. It comes with ready-to-use React built components. They are implemented with accessibility in mind, which is a vital factor when creating a front-end application. I used plain Bootstrap in my previous projects, so it was an easy choice to use React Bootstrap in this app.
- Most used library for developing social networking and media content applications - e.g. Meta (formerly Facebook), Instagram, Netflix, Airbnb, etc.
- Reusability of components - no need to write various codes for the same features

There were various components created and reused across this application.

- `<NavBar />` - This is a reusable component that generates a navigation bar. It displays different options for logged-in and logged-out users. For logged-out users, it shows ‘Sign In’ and ‘Sign Up’ options. For logged-in users, it displays ‘Notes’, ‘Important’, ‘Contact Page’, ‘Profile Page’, and ‘Sign Out’ options
  - User stories covered: 

- `<Footer />` - This is a reusable component that generates a footer of the page. It has copyright information and social media links.
  - User stories covered: 

- `<NotFount />` - This is a reusable component that generates 404 error when the user tries to visit incorrect page. 
  - User stories covered: 


- `<Avatar />` - This is a reusable component used to configure the profile picture size in the UI.
  - User stories covered: 

- `<CrateArea />` - This is a reusable component used to create a new notes. This component is assigned to Notesall page.
  - User stories covered: 

- `<EditNote />` - This is a reusable component used to modify the note: content, title, like status. T
  - User stories covered: 


- `<FeedbackMsg />` - component for displaying feedback messages to the user upon editing/deleting comments, deleting post, updating profile information or a password.
  - User stories covered: 35

- `<Landing />` - specific component for displaying a landing page for new / not logged-in users, which contains links to sign up and log in, in addition to the navbar.
  - User stories covered: 1

- `<LikeFeedAddPost />` - reusable component containing 3 icons to add a post, show liked post or show posts by profiles the users follows. Displayed on various pages of the app.
  - User stories covered: 7, 21, 22

- `<NavBar />` - reusable component with the content depending on the login status of the user. For logged in user it shows icon link to the main posts page and user avatar/picture. For those who are not logged in, it displays icon links to sign up or log in instead of the avatar. The component is used on each page of the app.
  - User stories covered: 2, 3

- `<PageNotFound />` - specific component for displaying a 404 graphic error message with a return to menu button when user enters the url which does not exist.
  - User stories covered: 34

- `<PasswordCriteria />` - reusable component containing password criteria which are displayed on button hover or focus. Used on sign up page and profile password change page.
  - User stories covered: 4, 28

- `<PopularProfiles />` - reusable component showing first three most followed profiles in the app. The component displays user avatar, name and follow/unfollow button. These buttons are hidden on medium screen size devices. The component is used across the app together with the `<LikeFeedAddPost />` component and post categories badges on relevant pages.
  - User stories covered: 32


## Back-End API

### Django REST Framework

The Application Programming Interface (API) for this front-end application was constructed utilizing the Django REST Framework. For more information DRF you may click here. [here]https://www.django-rest-framework.org/).

##### Back to [top](#table-of-contents)


## Features


### Login Form
- Is used for a use to login to his account. User must have an account to login.
- To login user needs to add username and password. Both fields are mandatory to login
- Once a user loggs in he is navigated to notes page. 
- Warning message is displayed on incorrect input
- User stories covered: 

<details><summary>See feature screenshot</summary>
<img src="docs/features/login.png">
</details>

### Sign up form
- A new user can create a new account by using this form.
- To create an account, a user needs to provide a nickname, password, and password validation.
- A user cannot use a duplicate username to register the account.
- Once registered, the user is redirected to the login page.
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/signupform.png">
</details>


### Footer
- A footer is displayed at the bottom of a each page.
- Contains copyrights info and links to social media
- User stories:

<details><summary>See feature screenshot</summary>
    <img src="docs/features/footer.png">
</details>

### Logo and Navigation Bar
- The Navbar is present on each page at the top of the screen.
- We have two navbar variants:
    The navbar for new or not logged-in users will display the Logo, Sign up, and Log in icons - options to either register or log in.
    The navbar for logged-in users displays the Logo, Notes, Important, Contact, Avatar/User, and Sign out icons.
- The navbar is responsive and becomes a hamburger menu on small screens.
- By clicking on the logo icon, the user can navigate to the landing page, which is either the sign-in form or the notes page.
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/navbar1.png">
<img src="docs/features/navbar2.png">
</details>

### Contact Form
- Enables users to contact the admin/site owner to share feedback.
<details><summary>See feature screenshots</summary>
  <img src="docs/features/feedbackform.png">
</details>


### Main notes page
- Main notes page is displayed for logged-in users 
- Contains :
  - Search Bar.
  - Create Note field
  - Notes created by sign in user.
- Displays all notes ordered by the most recent one
- User stories covered: 

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
- User stories covered: 

<details><summary>See feature screenshot</summary>
<img src="docs/features/important.png">
</details>

### User Settings page
On thsi page user may change or modify his/her:
  - Picture
  - Username
  - Reset Password

<details><summary>See feature screenshot</summary>
<img src="docs/features/usersettingpage.png">
</details>


### Notes create form

- Contains Note title and note description
- Description field is optional
- Allows a user to create notes
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/notescreateform.png">
</details>

### Note Update form

- Contains Note title and note description
- User may modify the note and click on "Save Changes"
- He may like/unlike note. 
- If he clicks cancel he redirected to homepage.
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/noteupdateform.png">
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
- User stories covered: 

<details><summary>See feature screenshots</summary>
  <img src="docs/features/likes1.png">
  <img src="docs/features/likes2.png">
</details>



### Profile page
- Displays profile information if it was provided by the profile owner
- Allows user to change his profile Avatar, password, username
- User stories covered:

<details><summary>See feature screenshot</summary>
<img src="docs/features/profilepage.png">
</details>


### Profile avatar
- Permit users to replace their default profile picture with a personal avatar or photo.
- The updated avatar is visible in the navigation bar, on the user's profile page, 
- User stories covered: 

<details><summary>See feature screenshot</summary>
<img src="docs/features/avatar.png">
</details>

### Username change form
- Allows user to change their profile username
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/username.png">
</details>


### Password change form
- Allows user to change their profile password
- User stories covered: 

<details><summary>See feature screenshots</summary>
<img src="docs/features/resetpassword.png">
</details>


### Infinite scroll
- Allows user to scroll through the content without having to select the next/previous page
- Used for the notes
- Improves general user experience and user engagement
- User stories covered: 



### Search bar
- Users may find the desired note by entering a keyword in the search bar.
- It allows users to search through all note titles.
- It enables searching through liked notes on the "Important" page.
- User stories covered:

<details><summary>See feature screenshots</summary>
<img src="docs/features/searchbar.png">

</details>


### 404 error page
- This is displayed when the user attempts to access an incorrect or unauthorized URL.
- It contains text indicating that the page does not exist, along with a link to the homepage.
- User stories covered:

<details><summary>See feature screenshot</summary>
<img src="docs/features/404.png">
</details>


### Feedback messages
- User is provided with feedback message about the action their performed such as edited/deleted comment, updated profile or password, deleted a post
- User stories covered: 35

<details><summary>See feature screenshot</summary>
<img src="docs/features/feature-feedback-messages.png">
</details>


## Future features / improvements

Examples of potential improvements for future versions of the project:

- Authentication
  - Allow users to sign up for the app using email, Gmail/Apple/Microsoft/SSO authentication.
  - Include a functionality to recover passwords through email.
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

On all pages we have the following error, which is related to  fontawesome library. Since we cannot adjust and change fontawesome library I treat the error as false positive:

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

I took ESLint configuration from the general chat of Slack. Configuration settings are saved in .eslintrc.json


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

Lighthouse was used to test the performance, accessibility, best practice and SEO of the site. The validation was done for both desktop & mobile.  

#### Desktop 

<details><summary>Landing page</summary> 
<img src="docs/validation/lighthouse-landing-desktop.png "> 
</details> 

<details><summary>Main posts page</summary> 
<img src="docs/validation/lighthouse-mainpage-desktop.png "> 
</details> 

#### Mobile 

<details><summary>Landing page</summary> 
<img src="docs/validation/lighthouse-landing-mobile.png "> 
</details> 

<details><summary>Main posts page</summary> 
<img src="docs/validation/lighthouse-mainpage-mobile.png "> 
</details> 


### Wave
The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.
There were a few errors related to "Redunnt link" and "NonScript" element. I verified that I can ignore these two errors.

<img src="docs/validation/wave/allowto not fix.png">

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

4. As a user, I can access a navigation bar on all pages, allowing me to conveniently navigate back to the main page or visit my profile page.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to application website. After sing sign in to your ccount  | As not autorized user I can see "Sign in", "Sign Up" options on Navmbar. As logged in user I can see and navigate to "Notes", "Important", "Contact", "User Profile"  | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_4_navbar.png">
</details>

<br/>

5. As a user, I can create notes to organize my thoughts and tasks.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As a logged in user, I am on "Note" page. I complete fields "Title", "Content" and click "create" | New Note is created | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_5_create_note.png">
</details>

<br/>

6. As a user, I can view the details of a single note to see its title and content.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As a user I navigate to "Notes page" after I click on Pensic button on the note| When I am on "Notes page" I see title and content for all notes. When I click on pencil I navigate to page, where I see the content of a single note but in bigger windows | Works as expected |
 
 <details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_6a-view_note_content.png">
<img src="docs/userstories/user_story_6b-view_note_content.png">
</details>

<br/>

7. I can use the “Delete” button to delete a note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As logged in user I navigate to "Note" or "Import" page and click on bin icon | the note is deleted | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_7a-deletenote.png">
<img src="docs/userstories/user_story_7b-deletenote.png">

</details>

<br/>

8. I can use the like/unlike button to mark a note as important.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Note", "Important" or "Edit" page I click on "Like/Unlike" button | Title of note change color, in addition icon of like/unlike button changes  | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/userstories/usere_story_8a_like.png">
<img src="docs/userstories/usere_story_8b_like.png">
<img src="docs/userstories/usere_story_8c_like.png">
</details>

<br/>

9. I can identify if the note is liked by the modal title or icon which appears on the “Like/Unlike” button.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
I navigate to "Important" page. After I navigate to "Note" page, finaly I click on "Penscil" icon | I  see all important notes on "Important" page. On "Note", "Edit" page I can see liked notes with yello colour and start icon on "Like/Unlike" button | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_9a_seelike.png">
<img src="docs/userstories/user_story_9b_seelike.png">
<img src="docs/userstories/user_story_9c_seelike.png">
</details>

<br/>

10. I can use the search field to search for a note according to keywords in the title.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to "Note" or "Important" page. Enter keyword in search field| All notes with required keyword are shown | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_10a_searchfield.png">
<img src="docs/userstories/user_story_10b_searchfield.png">
</details>

<br/>

11. I can edit the content of a note by clicking the “Edit” option on each note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Note" or "Important page click on Edit Icon. On Edit page edit content and title and click "SaveChanges"  | The changes are saved and the user sees a note with updated information | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_11_edit.png">

</details>

<br/>

12. I want to see only important notes on the “Important” page.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to Important page | User sees  only important notes | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_12_important.png">

</details>

<br/>

13. I want to return from the “Edit Note” page to the “Note” page without modifying the content of the note.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On "Edit" page click cancel. | User click on cancel, all changes in title and content are not saved | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_13_canceledit.png">
</details>

<br/>


14. I want to be able to send feedback email to owner of the site.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to Contact  page. Complete all the fields and click "Send Feedback" | The message is sent to a site owner. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_14_sendfeedback.png">

</details>

<br/>

15. As a user, I can update my profile picture.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page, click on "choose file", "upload image", save  | the users profile picture updated | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/userstories/user_story_15_update_image.png">
</details>

<br/>

16. As a user, I can change my username.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page. Under "username" edit a username, click "Save | The profile of the user is udpated.  | Works as expected |



<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_16_edit_username.png">

</details>

<br/>

17. As a user, I can update my password.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to user profile page. In "New Password" and "Confirm new password" type a new password, click "Save | Password Updated  | Works as expected |


<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_17_update_password.png">

</details>

<br/>

18. As a login user I want to log out from my account

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As logged in user I click on "sign out" option on Navbar | User logged out | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/userstories/user_story_18_sign_out.png">
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

20. As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the main posts page and scroll to the bottom of the page | Loads new content and moves the scroll bar. Displays a spinning icon before the posts have been loaded | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-20-a.png">
<img src="docs/testing/user-stories-testing/user-story-20-b.png">
</details>


21. As a user, I can see the posts I liked so that I can find the posts I enjoy the most

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main posts page click on the 'Liked posts' icon/text | Loads all liked posts | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-21-a.png">
<img src="docs/testing/user-stories-testing/user-story-21-b.png">
<img src="docs/testing/user-stories-testing/user-story-21-c.png">
</details>


22. As a user, I can view posts from users I followed, so I can follow their activity

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main posts page click on the 'Feed' icon/text | Loads all posts from followed users | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-22-a.png">
<img src="docs/testing/user-stories-testing/user-story-22-b.png">
</details>


23. As a user, I can view posts category tags, so that I choose posts to display that I’m particularly interested in

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main posts page click on the category badge of posts you'd like to view | Loads all posts with the selected category | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-23-a.png">
<img src="docs/testing/user-stories-testing/user-story-23-b.png">
<img src="docs/testing/user-stories-testing/user-story-23-c.png">
<img src="docs/testing/user-stories-testing/user-story-23-d.png">
</details>


24. As a user, I can search for posts with keywords so that I can find the posts I am interested in

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main posts page click on the search bar and type a phrase | Searches through all posts, users and post categories and displays posts containing searched words in their title, username or category | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-24-a.png">
<img src="docs/testing/user-stories-testing/user-story-24-b.png">
<img src="docs/testing/user-stories-testing/user-story-24-c.png">
<img src="docs/testing/user-stories-testing/user-story-24-d.png">
</details>


25. As a user, I can add my profile avatar so that other users can easily identify me

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Each user has a default avatar upon signing up to the app. Click on the profile avatar/user name in the navbar and select the 'Profile' from the dropdown | Redirects to the profile page | Works as expected |
Click on the dropdown menu and 'edit' icon | Redirects to the edit profile page | Works as expected |
Upload a profile avatar and click 'Save' | Saves user profile, displays a feedback message to the user, redirects to user profile page and displays updated user avatar and info | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-25-a.png">
<img src="docs/testing/user-stories-testing/user-story-25-b.png">
<img src="docs/testing/user-stories-testing/user-story-25-c.png">
<img src="docs/testing/user-stories-testing/user-story-25-d.png">
</details>


26. As a user, I can view user's avatars so that I can easily identify other users of the app

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the main page or specific post page | User avatars are displayed next to username in top users, by each post or user comment | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-26-a.png">
<img src="docs/testing/user-stories-testing/user-story-26-b.png">
<img src="docs/testing/user-stories-testing/user-story-26-c.png">
</details>


27. As a user, I can update the picture and description of my profile on the profile page so that other users view up to date info about me

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the user profile page and click on the dropdown menu and 'edit' icon | Redirects to the profile page | Works as expected |
Add profile description and click 'Save' button | Saves user profile information, displays a feedback message to the user, redirects to user profile page and displays updated user info | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-27-a.png">
<img src="docs/testing/user-stories-testing/user-story-27-b.png">
<img src="docs/testing/user-stories-testing/user-story-27-c.png">
<img src="docs/testing/user-stories-testing/user-story-27-d.png">
</details>


28. As a user, I can change password to my account so that I can keep my profile secure

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the user profile page and click on the dropdown menu and the key icon | Redirects to the password change page | Works as expected |
Input password in the 'new password' and 'confirm password' fields | Displays warning massage if password criteria are not met. Otherwise, saves a new password, displays a feedback message and redirects user to the profile page after a short delay | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-28-a.png">
<img src="docs/testing/user-stories-testing/user-story-28-b.png">
<img src="docs/testing/user-stories-testing/user-story-28-c.png">
<img src="docs/testing/user-stories-testing/user-story-28-d.png">
</details>


29. As a user, I can view all the posts by a specific user so that I can see their latest activity

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the user avatar or name | Redirects to the chosen user profile page and displays all their posts within the profile page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-29-a.png">
<img src="docs/testing/user-stories-testing/user-story-29-b.png">
<img src="docs/testing/user-stories-testing/user-story-29-c.png">
</details>


30. As a user, I can view other users’ profiles with their profile description, number of posts, followers and users followed so that I can learn more about them

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the user avatar or name | Redirects to the chosen user profile page and displays user avatar, number of followers, number of users followed, number of posts, user profile description (if added by the user) and user posts | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-30-a.png">
<img src="docs/testing/user-stories-testing/user-story-30-b.png">
</details>


31. As a user, I can follow and unfollow other users so that I can get specific users’ posts in my posts feed

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the 'follow' button within the user profile page or by the username in 'Top Users' menu | Follows the user, increases the 'following' number on current profile and increases the number of followers on followed user's profile | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-31-a.png">
<img src="docs/testing/user-stories-testing/user-story-31-b.png">
<img src="docs/testing/user-stories-testing/user-story-31-c.png">
<img src="docs/testing/user-stories-testing/user-story-31-d.png">
</details>


32. As a user, I can see a list of the most followed profiles so that I can see which profiles are popular

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
(no specific step to follow) | The small navigation menu with top most followed profiles is displayed on the main page, specific post page and profile page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-32-a.png">
<img src="docs/testing/user-stories-testing/user-story-32-b.png">
<img src="docs/testing/user-stories-testing/user-story-32-c.png">
</details>


33. As a site owner I want my site to be fully responsive so that users can you use it on different devices

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Change device screen size using chrome dev tools | The web functionality remains the same on various screen sizes | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-33-a.png">
<img src="docs/testing/user-stories-testing/user-story-33-b.png">
<img src="docs/testing/user-stories-testing/user-story-33-c.png">
<img src="docs/testing/user-stories-testing/user-story-33-d.png">
<img src="docs/testing/user-stories-testing/user-story-33-e.png">
<img src="docs/testing/user-stories-testing/user-story-33-f.png">
</details>


34. As a site owner, I want users to come to a 404 error page so that they don't have to user the browser back button if they enter a URL that does not exist

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Type the wrong page in the www address (e.g. https://ci-pp5-snapfood.onrender.com/xyz) | Reroutes to a customised 404 page | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-34.png">
</details>


35. As a site user, I can view feedback messages, so that I know if my comment/profile/post has been updated

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
In the post page comments section click on the dropdown menu and 'edit' icon to edit your existing comment. Make changes to your comment and click 'Update' | Saves the comment, changes time display to 'now' and displays the feedback message to the user | Works as expected |
In the post page comments section click on the dropdown menu and 'bin' icon to delete your existing comment | Deletes the comment and displays the feedback message in its place | Works as expected |
In the profile page click on the dropdown menu and 'edit' icon to edit user profile. Make desired changes and click 'Save' | Updates the profile, displays the feedback message and redirects the user to their profile page after a short delay | Works as expected |
In the profile page click on the dropdown menu and the key icon to change user password. Update the password and click 'Save' | Updates the password, displays the feedback message and redirects the user to their profile page after a short delay | Works as expected |
Within the post page click on the dropdown menu and 'bin' icon to delete the post | Deletes the post, displays the feedback message and redirects the user to the main posts page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-35-a.png">
<img src="docs/testing/user-stories-testing/user-story-35-b.png">
<img src="docs/testing/user-stories-testing/user-story-35-c.png">
<img src="docs/testing/user-stories-testing/user-story-35-d.png">
<img src="docs/testing/user-stories-testing/user-story-35-e.png">
<img src="docs/testing/user-stories-testing/user-story-35-f.png">
<img src="docs/testing/user-stories-testing/user-story-35-g.png">
<img src="docs/testing/user-stories-testing/user-story-35-h.png">
<img src="docs/testing/user-stories-testing/user-story-35-i.png">
<img src="docs/testing/user-stories-testing/user-story-35-j.png">
</details>


### Performing tests on various devices

The website was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate viewports of different devices.

The website was tested on the following devices:
- ASUS ZenBook (laptop screen)
- Samsung Galaxy Tab A (tablet screen)
- Samsung S7 (mobile screen)


### Browser compatibility

Testing has been carried out on the following browsers:
- Googe Chrome, version 104.0.5112.79 (Official Build) (64-bit)
- Firefox Browser, version 103.0.2 (64-bit)
- Microsoft Edge, version 104.0.1293.54 (Official build) (64-bit)

##### Back to [top](#table-of-contents)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| Dropdown menu three dots going off the container on smaller screens | Changed grid-template-columns: from ‘60px auto 200px’ to ‘60px auto 60px’ |
| User was redirected to 404 page after signing up and logging in | Changed history.goBack(); to history.push("/") |
| Lighthouse validation: Poor performance of the landing page | Resized (compressed) the landing image |
| Lighthouse validation: Image not displayed with the correct image ratio | Resized the site logo image with to correct dimensions and ratio |
| Console warning: Please use ```require("react-router-dom").NavLink``` instead of ```require("react-router-dom/NavLink")```. Support for the latter will be removed in the next major release. | Changed import { NavLink } from "react-router-dom" to import { NavLink } from "react-router-dom" |
| On small screens, clicking on the hamburger menu and then on user avatar/ user name was not displaying the dropdown menu with ‘Profile’ & ‘Logout’ options | Added a class to the Avatar component, and a div in the ‘loggedInNavBar’ dropdown. In the ‘useClickOutsideToggle’ hook added a check to see if element is the one we don’t want to cause the collapse of navbar |
| The time under the post was displayed in UTC instead of the local time post was added | Unsuccessful fix. Added 'USE_TZ = True' in back-end settings but it didn't work as expected. Time fix is a future improvement |
| Wave validator: Empty link | Add 'aria-label'|
| Wave validator: Contrast errors | Change shade of initially set color 'salmon' and change font color from white to 'dark-slate-grey' on buttons |

##### Back to [top](#table-of-contents)


## Config

### Forking the GitHub Repository
1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
   
### Making a Local Clone
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open commandline interface on your computer
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard 
  ```
  $ git clone https://github.com/aleksandracodes/ci_pp5_snapfood.git
  ```
7. Press Enter to create your local clone

##### Back to [top](#table-of-contents)


## Credits

### Images

- 404 picture tweaked using Paint taken from [here](https://www.istockphoto.com/pl/wektor/broken-danie-gm1132925979-300527202)
- No results found picture taken from [here](https://www.vecteezy.com/vector-art/7104553-search-no-result-not-found-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon)
- Speech bubble image on comments page with no comments was taken from [here](https://www.freepik.com/free-vector/illustration-speech-bubble_2606145.htm#query=chat&position=17&from_view=search)
- The lading page image of hands holding smartphone and taking photo of food comes from [here](https://media.istockphoto.com/vectors/hands-holding-smartphone-and-capture-photo-of-healthy-food-in-modern-vector-id1263096919?k=20&m=1263096919&s=612x612&w=0&h=YQ70hwbYb1LcCl16TvpzVv03lIVfiQ848fLhFCvW4BY=)
- The thumb-up icon for like/unlike was taken from [here](https://image.shutterstock.com/shutterstock/photos/1391842757/display_1500/stock-vector-vector-hand-like-icon-template-good-food-logo-illustration-with-fork-sign-line-symbol-for-farmers-1391842757.jpg) and tweaked using Paint
- Site logo was created with [Fiverr Logo Maker](https://www.fiverr.com/logo-maker/brief/logo_name?brief_id=0d212c49-2416-401d-99a5-780b9b233ff7)
- Upload image icon taken from [here](https://static.thenounproject.com/png/741679-200.png) combining [this](https://cdn-icons-png.flaticon.com/512/80/80320.png) image using Paint
- Admin user avatar found [here](https://us.123rf.com/450wm/yupiramos/yupiramos1704/yupiramos170412377/75993207-businesswoman-avatar-character-icon-vector-illustration-design.jpg?ver=6)
- Loading gif (spinner) taken from [here](https://icon-library.com/icon/loading-icon-animated-gif-17.html)
- This application was created for the education purpose only. A majority of food photographs added as posts were found via Google Search Engine or added directly by each user testing the app. Due to extensive testing of this app, I'm not able to provide the sources of all of the pictures found via search engine. Please do not repost the images without crediting the source.


### Code

This project was inspired by the ['Moments'](https://github.com/Code-Institute-Solutions/moments) social media platform which was a final walk-through project with Code Institute. I took many components from "Moments" to build my own Productivity App .
