import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
// import PostCreateForm from "./pages/posts/PostCreateForm";
// import PostPage from "./pages/posts/PostPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
// import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactForm from "./pages/contactform/ContactForm"
import NotFound from "./components/NotFound";
import NotesAll from "./pages/notes/NotesAll"
import NotesAllLike from "./pages/notes/NotesAllLike"
import EditNote from "./pages/notes/EditNote"
import CreateArea from "./pages/notes/CreateArea"
// import Test from "./pages/Test"
import React, { useEffect, useState } from "react";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (currentUser !== undefined) {
      setIsLoading(false);
    }
  }, [currentUser]);

  if (isLoading) {
    return <div>Loading...</div>; // Or replace with a loading spinner
  }
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              currentUser ? <NotesAll message="Yo results found. Adjust the search keyword or like a post."/> : <SignInForm />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/contact" render={() => <ContactForm />} />

          <Route
            exact
            path="/notes"
            render={() => (
              <NotesAll
                message="No results found. Adjust the search keyword or like a post."

              />
            )}
          />

          <Route
            exact
            path="/important"
            render={() => (
              <NotesAllLike
                message="No important notes found. Mark the note as important or adjust a search"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />

S
          <Route exact path="/note/create" render={() => <CreateArea />} />
          <Route exact path="/note/:id/edit" render={() => <EditNote />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/test" render={() => <NotesAll
                message="No important notes found. Mark the note as important or adjust a search"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
          />} />
          <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;