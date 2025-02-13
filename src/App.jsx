import { useDispatch, useSelector } from "react-redux";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect, useCallback, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Profile from "../pages/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Memoized callback for auth state change
  const handleAuthStateChange = useCallback(
    (userAuth) => {
      if (userAuth) {
        console.log("User logged in", userAuth)
        console.log("Dispatching login action:", {
          uid: userAuth.uid,
          email: userAuth.email,
        });
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        console.log("Dispatching logout action");
        dispatch(logout());
      }
      setLoading(false);
      
    },
    [dispatch]
  );
  

  useEffect(() => {
    console.log("Setting up Firebase auth state listener...");
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      try {
        handleAuthStateChange(userAuth);
      } catch (error) {
        console.error("Error in onAuthStateChanged callback:", error);
        setLoading(false); // Fail-safe to prevent infinite loading
      }
    });

    return () => {
      console.log("Cleaning up Firebase auth state listener...");
      unsubscribe();
    };
  }, [handleAuthStateChange]);
    
  if (loading){
    return <div>Loading...</div>
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={user ? <Homepage /> : <LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
