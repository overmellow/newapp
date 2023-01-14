import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import AuthProvider, { RequireAuth } from "./AuthProvider";
import LoginPage from "./Login";
import Canvas from "./pages/Canvas";
import HomePage from "./pages/Home";
import Human, { action as deleteAction } from "./pages/human/Human";
import HumanDetail, { action as removeAction }  from "./pages/human/HumanDetail";
import Humans from "./pages/human/Humans";
import NewHuman, { action as newHumanAction} from "./pages/human/NewHuman";
import Layout from "./pages/Layout";
import Persons from "./pages/Persons";
import ProtectedPage from "./pages/Protected";
import PublicPage from "./pages/Public";

// export default function App() {
//   return (

//     <AuthProvider>
//       <h1>Auth Example</h1>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/public" element={<PublicPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             path="/protected"
//             element={
//               <RequireAuth>
//                 <ProtectedPage />
//               </RequireAuth>
//             }
//           />

//           <Route
//             path="/persons" 
//             element={
//               <RequireAuth>
//                 <Persons />
//               </RequireAuth>
//             }
//           />
//           <Route path="/humans" element={<RequireAuth><Humans /></RequireAuth>}>
//             <Route path="new" element={<NewHuman />} />
//             <Route path=":humanId" element={<Human />} />
//             <Route path=":humanId/detail" element={<HumanDetail />} />
//           </Route>                      
//         </Route>
//       </Routes>
//     </AuthProvider>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'public',
        element: <PublicPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'canvas',
        element: <Canvas />
      },
      {
        path: 'protected',
        element: <RequireAuth><ProtectedPage /></RequireAuth>
      },
      {
        path: 'persons',
        element: <RequireAuth><Persons /></RequireAuth>
      },
      {
        path: 'humans',
        element: <RequireAuth><Humans /></RequireAuth>,
        children: [
          {
            path: 'new',
            element: <NewHuman />,
            action: newHumanAction
          },
          {
            path: ':humanId',
            element: <Human />,
            loader: async ({ params }) => {
              return fetch(`http://localhost:8080/persons/${params.humanId}`)
            },
            action: deleteAction
          },
          {
            path: ':humanId/detail',
            element: <HumanDetail />,
            action: removeAction
          },
        ]
      }
    ]
  },
]);

function App() {
  return <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  ;
}

export default App;
