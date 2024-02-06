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

#### Navigation 

1. As a user, I can view the home page that describes the application, enabling me to understand its purpose.
2. As a user, I can access a navigation bar on all pages, allowing me to conveniently navigate back to the main page or visit my profile page.
3. As a user who is not logged in, I can see options to log in or sign up, providing me the ability to access my account or create a new one.
 
#### Authentication 

4. As a newcomer, I have the ability to set up a new account, enabling me to utilize the application.
5. As a user who has used the app before, I can enter my existing login details to gain access to the application.
6. As a user, I can stay logged in until I decide to log out, ensuring uninterrupted use of the application.

### Second sprint

#### Notes

7. As a user, I can create notes so that I can organize my thoughts and tasks.
10. As a user, I can view the details of a single note so that I can see its full content and any associated reminders or tasks.
11. As a user, I can mark a specific note as important so that I can easily access it later.

#### The Note Page 

12. As a user, I can view the details of a single note so that I can understand its content fully.
14. As a user, I can add remarks to a note so that I can record my thoughts about the note.
17. As the author of a remark, I can delete my remark from the note.
18. As the owner of a note, I can edit my note's title and content so that I can make corrections or updates after it was created.
19. As an owner I can like the note, to increase its importance.

### Third sprint

#### Main page 

19. As a user, I can view notes ordered by the most recently added/updated so that I am up to date with the latest notes.
20. As a user, I can keep scrolling through the notes so that they are loaded automatically and I don't have to select the next page.
21. As a user, I can see the notes I marked as important so that I can find the notes I need the most.
23. As a user, I can view Important page, so that I can choose notes to display that I’m particularly interested in.
24. As a user, I can search for notes with keywords so that I can find the notes I am interested in.

#### User Profile Page 

25. As a user, I can upload a profile picture to make it easier for others to recognize me.
27. As a user, I can modify my username
28. As a user, I can update my account password to maintain the security of my profile.

#### General

33. As an application owner, I want my application to be fully responsive so that users can use it on various devices.
34. As an application owner, I want users to be directed to an error page if they try to access a note that does not exist, preventing the need to use the browser's back button.
35. As a user of the application, I can view feedback messages, so that I know if my note or profile has been updated.


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

<!-- ### React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of independent and reusable components ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).

I used React for this application for several reasons:
- Speed - applying React significantly increases the page loading speed and reducing the wait, which affects user experience and satisfaction
- Flexibility - the React code is easier to maintain and is flexible due to its modular structure, compared to other front-end frameworks
- React Bootstrap - excellent choice for improving user experience, used for styling and responsiveness. It comes with ready-to-use React built components. They are implemented with accessibility in mind, which is a vital factor when creating a front-end application. I used plain Bootstrap in my previous projects, so it was an easy choice to use React Bootstrap in this app.
- Most used library for developing social networking and media content applications - e.g. Meta (formerly Facebook), Instagram, Netflix, Airbnb, etc.
- Reusability of components - no need to write various codes for the same features

There were various components created and reused across this application.

- `<Asset />` - multipurpose reusable compontent which displays different versions of the component depending on the props we pass to it:
  - loading gif (spinner) when content is being loaded
  - image with src and alt attribute
  - paragraph with a message

  - User stories covered: 20

- `<Avatar />` - resuable component, used to render profile images in the UI. Passed props allow for setting image source and size and adjust image dimensions depending on where the component is rendered. Example of use include the `<NavBar />` component, Post page or the Profile page. On mobile screens Avatar component within the Profile Page will be significantly bigger than on other screen sizes.
  - User stories covered: 25, 26

- `<DropdownMenu />` - reusable component, used to render the dropdown menu which allows user to edit or delete their own posts orcomments, and also edit their profile or change profile password.
  - User stories covered: 16, 17, 27, 28

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
  - User stories covered: 32 -->


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

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors. There are a few warnings: 'Due to their dynamic nature, CSS variables are currently not statically checked'

<details><summary>App.module.css</summary> 
<img src="docs/validation/css-validation-app.png"> 
</details> 

<details><summary>Asset.module.css</summary> 
<img src="docs/validation/css-validation-asset.png"> 
</details> 

<details><summary>Avatar.module.css</summary> 
<img src="docs/validation/css-validation-avatar.png"> 
</details> 

<details><summary>Comment.module.css</summary> 
<img src="docs/validation/css-validation-comment.png"> 
</details> 

<details><summary>CommentCreateEditForm.module.css</summary> 
<img src="docs/validation/css-validation-comment-create-edit-form.png"> 
</details> 

<details><summary>DropdownMenu.module.css</summary> 
<img src="docs/validation/css-validation-dropdown-menu.png"> 
</details> 

<details><summary>FeedbackMsg.module.css</summary> 
<img src="docs/validation/css-validation-feedback-msg.png"> 
</details> 

<details><summary>FollowButtons.module.css</summary> 
<img src="docs/validation/css-validation-follow-buttons.png"> 
</details> 

<details><summary>Landing.module.css</summary> 
<img src="docs/validation/css-validation-landing.png"> 
</details> 

<details><summary>LoginSignUpForm.module.css</summary> 
<img src="docs/validation/css-validation-login-sign-up-form.png"> 
</details> 

<details><summary>MainPostsPage.module.css</summary> 
<img src="docs/validation/css-validation-main-posts-page.png"> 
</details> 

<details><summary>NavBar.module.css</summary> 
<img src="docs/validation/css-validation-navbar.png"> 
</details> 

<details><summary>Post.module.css</summary> 
<img src="docs/validation/css-validation-post.png"> 
</details> 

<details><summary>PostCreateEditForm.module.css</summary> 
<img src="docs/validation/css-validation-post-create-edit-form.png"> 
</details> 

<details><summary>Profile.module.css</summary> 
<img src="docs/validation/css-validation-profile.png"> 
</details> 

<details><summary>ProfilePage.module.css</summary> 
<img src="docs/validation/css-validation-profile-page.png"> 
</details> 

<details><summary>SmallMenuContainer.module.css</summary> 
<img src="docs/validation/css-validation-small-menu-container.png"> 
</details> 


### JSX
The JSX code was validated using the ESLint utility.
When initially installed and run on Gitpod, there were a few errors to address such as escaping a single quotes using ```&lsquo;``` and correcting empty block statements. After I've done the testing when I tried to run my project again with 'npm start' I encountered issues with version compatibility and settings (recorded in [here](docs/validation/eslint-issue.jpg)). I followed the instructions and deleted package-lock.json and removed eslint from dependencies.

As I didn't document the conducted tests, I decided to download my project and run it locally in Visual Studio Code editor. I installed the eslint package again and tested all js modules using command ```npx eslint yourfile.js```. See evidence of no errors shown below. Note: there were no feedback messages for no errors/warnings found.

<details><summary>Eslint validation for components</summary> 
<img src="docs/validation/eslint-components.png"> 
</details> 

<details><summary>Eslint validation for contexts</summary> 
<img src="docs/validation/eslint-contexts.png"> 
</details> 

<details><summary>Eslint validation for hooks</summary> 
<img src="docs/validation/eslint-hooks.png"> 
</details> 

<details><summary>Eslint validation for all pages</summary> 
<img src="docs/validation/eslint-pages.png"> 
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
There were a few errors related to missing labels and contrast issues on buttons. These errors were rectified.

<details><summary>Landing page</summary>
<img src="docs/validation/wave-landing-page.png">
</details>

<details><summary>Sign up page</summary>
<img src="docs/validation/wave-sign-up.png">
</details>

<details><summary>Log in page</summary>
<img src="docs/validation/wave-log-in.png">
</details>

<details><summary>Main posts page</summary>
<img src="docs/validation/wave-main-posts-page.png">
</details>

<details><summary>Post page</summary>
<img src="docs/validation/wave-post-page.png">
</details>

<details><summary>Post create page</summary>
<img src="docs/validation/wave-post-create-page.png">
</details>

<details><summary>Post edit page</summary>
<img src="docs/validation/wave-post-edit-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/wave-profile-page.png">
</details>

<details><summary>Profile edit page</summary>
<img src="docs/validation/wave-profile-edit-page.png">
</details>

<details><summary>Password change page</summary>
<img src="docs/validation/wave-password-change-page.png">
</details>

<details><summary>404 error page</summary>
<img src="docs/validation/wave-404-page.png">
</details>

##### Back to [top](#table-of-contents)


## Testing
 
### Manual testing of user stories

1. As a user, I can see the home page with explanation of the portal, so that I know what the app is about

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to https://ci-pp5-snapfood.onrender.com/ | Landing page loads with application description | Works as expected |
 
<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-01.png">
</details>


2. As a user, I can see a navbar on every page, so that I can easily return to main page and access my profile page

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Load any page of the application| Navbar with different links is displayed on top of each page | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-02-a.png">
<img src="docs/testing/user-stories-testing/user-story-02-b.png">
<img src="docs/testing/user-stories-testing/user-story-02-c.png">
<img src="docs/testing/user-stories-testing/user-story-02-d.png">
</details>


3. As a logged-out user, I can see log in and sign up options so that I can log in or sign up

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to the main page and ensure you are logged out. If logged in, click on the profile avatar in the navbar and select ‘logout’ from the dropdown menu | Redirects to the landing page and displays options to log in or sign up | Works as expected |
 
<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-03.png">
</details>


4. As a new user, I can create a new account so that I can access the app

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to https://ci-pp5-snapfood.onrender.com/, click ‘sign up’ icon in the navbar or ‘Happy to join!’ button. Type username, password and confirm the password | Redirects user to login page and on successful login with created credentials the user is logged in and this is indicated by display of their username and default avatar in the navbar | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-04-a.png">
<img src="docs/testing/user-stories-testing/user-story-04-b.png">
<img src="docs/testing/user-stories-testing/user-story-04-c.png">
<img src="docs/testing/user-stories-testing/user-story-04-d.png">
</details>


5. As a returning user, I can log in with my existing credentials so that I can access the app

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
If logged out, on the landing page click on the ‘log in’ icon in the navbar or ‘I’m already a member, log me in!’ button. Type your existing username and password | Logs user in and displays the main posts page. Displays username and default avatar/profile picture in the navbar | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-05-a.png">
<img src="docs/testing/user-stories-testing/user-story-05-b.png">
<img src="docs/testing/user-stories-testing/user-story-05-c.png">
</details>


6.	As a user, I can maintain my logged-in status until I choose to log out so that my use of app is not compromised

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Log in to the application and do not log out within the 24 hours | Users stay logged in for 24 hours unless choosing to log out themselves | Works as expected |
 

7. As a user, I can create posts so that I can share my food images with the community

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the ‘Add post’ in the left-hand side small menu and the posts create page will be shown | Add the post title, select the category and upload image (post description is optional) and click ‘create’ button. The post will appear in the main posts page | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-07-a.png">
<img src="docs/testing/user-stories-testing/user-story-07-b.png">
<img src="docs/testing/user-stories-testing/user-story-07-c.png">
</details>


8.	As a user, I can categorise my post so that other users can find it by its tag

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the ‘Add post’ in the left-hand side small menu and the posts create page will be shown. Add posts details and select a category of the post (mandatory field) | Post is added and a category badge (type of cuisine) is displayed within the post under its title and description | Works as expected |
 
<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-08-a.png">
<img src="docs/testing/user-stories-testing/user-story-08-b.png">
<img src="docs/testing/user-stories-testing/user-story-08-c.png">
</details>


9. As a user, I can view other people’s posts so that I can get inspired by their images 

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
As a logged in user navigate to the main page by clicking on the 'Home' icon in the navbar | All posts will be displayed on the page | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-09-a.png">
</details>


10. As a user, I can view the details of a single post so that I can see its full description and other users’ comments

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main post page click on the post image | Redirects to a specific post page and displays post details | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-10-a.png">
<img src="docs/testing/user-stories-testing/user-story-10-b.png">
</details>


11. As user, I can like a specific post so that I can show my interest

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
On the main page or within specific profile page, click on the like icon under the post | Post is liked and like icon is marked green. Post is added to liked post page (/liked) | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-11-a.png">
<img src="docs/testing/user-stories-testing/user-story-11-b.png">
<img src="docs/testing/user-stories-testing/user-story-11-c.png">

</details>


12. As a user, I can view the details of a single post so that I can read other users’ comments and know what they think about it

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the post image | Redirects to a chosen post page and displays post details with comments below | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-12-a.png">
<img src="docs/testing/user-stories-testing/user-story-12-b.png">
</details>


13. As a user, I can view a category for the post so that I know what cuisine the food image relates to

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
(no specific step to follow) | Once the post has been created by the user, a category is displayed within each post | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-13.png">
</details>


14. As user, I can add comments to a post so that I can share my thoughts about the post with the community

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Within the post page (click on the post image to navigate to) under the post write your comment in the comment box and click 'Add' | Adds a comment to the comments list and increments the number of likes by 1 | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-14-a.png">
<img src="docs/testing/user-stories-testing/user-story-14-b.png">
</details>


15. As a user, I can see when the comments were created so that I know how old a comment is

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on a post image to navigate to the post page  | All comments with the creation date are displayed under the post | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-15.png">
</details>


16. As an owner of a comment, I can edit my comment so that I can update my existing comment

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
In the post page, click on the dropdown icon on the right hand side of your comment and click edit icon | Opens the edit post box | Works as expected |
Update the comment and click 'Update' button | Updates the comment, displays updated date to 'now' and displays a feedback message to the user | Works as expected |

Note: editing of other users' comments is not possible

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-16-a.png">
<img src="docs/testing/user-stories-testing/user-story-16-b.png">
<img src="docs/testing/user-stories-testing/user-story-16-b.png">
</details>


17. As an owner of a comment, I can delete my comment from the post

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
In the post page, click on the dropdown icon on the right hand side of your comment and click delete (bin) icon | Removes the comment from all comments, displays a feedback message to the user in place of the comment and decrements the number of likes by 1 once the message has disappeared after a delay | Works as expected |

Note: deleting other users' comments is not possible

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-17-a.png">
<img src="docs/testing/user-stories-testing/user-story-17-b.png">
<img src="docs/testing/user-stories-testing/user-story-17-c.png">
</details>


18. As a post owner, I can edit my post title and description so that I can make corrections or update my post after it was created

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Click on the post you have added and within the post page click on the dropdown menu and then edit post icon | Redirects to the edit post page | Works as expected |
In the edit post page update details of your post and click 'Save' button | Updates post details and redirects to the post page | Works as expected |

Note: editing of other users' post is not possible

<details><summary>Screenshots</summary>
<img src="docs/testing/user-stories-testing/user-story-18-a.png">
<img src="docs/testing/user-stories-testing/user-story-18-b.png">
<img src="docs/testing/user-stories-testing/user-story-18-c.png">
<img src="docs/testing/user-stories-testing/user-story-18-d.png">
</details>


19. As a user, I can view posts ordered by most recently added so that I am up to date with the newest content

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Add a new post and navigate to the main posts page | Adds post on top of the other posts and displays a date when it was added | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-19.png">
</details>

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

This project was inspired by the ['Moments'](https://github.com/Code-Institute-Solutions/moments) social media platform which was a final walk-through project with Code Institute. I have built my own styles and added extra functionality, such as filtering of posts based on their category. The SnapFood application can be expanded on and include the potential improvements mentioned in the 'Future features / improvements' section.


### Acknowledgements

I would like to thank everyone who supported me in the development of this project:
- My mentor Mo for professional guidance and helpful feedback
- Tutors (Sean, Alan & John) at Code Institute for help on sorting various issues and sharing their knowledge
- Code Institute community on Slack for their support