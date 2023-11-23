import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

import SignupFormUser from "./features/signup/SignupFormUser";
import DetailsForm from "./features/Login/DetailsForm";
import HomepageService from "./serviceProvider/HomepageService";
import Homepageuser from "./user/Homepageuser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import SignupForm from "./features/signup/SignupForm";
import Profile from "./serviceProvider/Profile";

import Login from "./features/Login/Login";
// import { CardDetails } from "./user/CardDetails";
import { CardDetails } from "./user/CardDetails";
import GoogleCalendar from "./serviceProvider/GoogleCalendar";
import LoginService from "./features/Login/Loginservice";
import Dashboard from "./serviceProvider/Dashboard";
import Seetings from "./serviceProvider/Seetings";
import Customers from "./serviceProvider/Customers";
import VideoCall from "./user/VideoCall";
import ProfileDetails from "./features/signup/ProfileDetails";
import ProfileDetailsService from "./features/signup/ProfileDetailsService";
// import ServiceForm from "./features/Login/ServiceForm";

// import ProtectedRoute from "./ui/ProtectedRoute"
// import HomeComp1 from "./components/HomeComp1"
// import NavBar from "./components/NavBar"

function App() {
  // const queryClinet= new QueryClinet();

  const queryClinet = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            {/* <Prote></Prote> */}
            <Route index element={<HomePage />} />

            <Route path="login" element={<Login />}></Route>
            <Route path="loginservice" element={<LoginService />}></Route>
            {/* <Route path="bussinessfrom" element={<BussinessForm/>} /> */}
            <Route path="detailsform" element={<DetailsForm />} />
            {/* <Route path="serviceform" element={<ServiceForm />} /> */}

            <Route path="signupformuser" element={<SignupFormUser />} />
            <Route
              path="homepageservice"
              element={
                <ProtectedRoute>
                  <HomepageService />
                </ProtectedRoute>
              }
            >
              <Route index element={  <ProtectedRoute> <GoogleCalendar /> </ProtectedRoute>} />
              <Route path="profile" element={ <ProtectedRoute><Profile /> </ProtectedRoute>} />
              <Route path="dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
              <Route path="seetings" element={<Seetings />} />
              <Route path="customers" element={<Customers />} />
            </Route>

            <Route path="homepageuser" element={<ProtectedRoute><Homepageuser /> </ProtectedRoute>} />

            <Route path="homepageuser/:id" element={<ProtectedRoute> <CardDetails /> </ProtectedRoute>} />
            <Route path="facecall/:id" element={ <ProtectedRoute><VideoCall /> </ProtectedRoute>} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="profile" element={<ProtectedRoute> <ProfileDetails /> </ProtectedRoute>} />
            <Route path="profileservice" element={ <ProtectedRoute> <ProfileDetailsService /> </ProtectedRoute>} />
            <Route path="signupuser" element={<SignupFormUser />} />
            {/* <Route path="facecall/:id" element={<VideoCall />}> */}
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              promise:{
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                // backgroundColor: "var(--color-grey-0)",
                backgroundColor:"#3b82f6",
                // color: "var(--color-grey-700)",
                // color:"#ffff",
                color:"black",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
