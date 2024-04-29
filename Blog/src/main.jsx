import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {AuthLayout, Login} from './components/index.js'
import Home from './pages/Home.jsx'

import AllPosts from './pages/AllPosts.jsx'
import SignUP from './pages/SignUP.jsx'
import Addpost from './pages/Addpost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={true}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <SignUP/>
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts/>
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <Addpost/>
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post/>
    },
    ]
  }
 

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
