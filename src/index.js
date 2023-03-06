import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./app-routing";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
