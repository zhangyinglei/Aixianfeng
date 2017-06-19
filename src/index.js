
import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import Home from "./routers/Home";
import store from "./config/store"
import {Router,Route,hashHistory} from "react-router";
import Money from "./routers/Money"
import Foot from "./routers/Foot"
import minePage from "./routers/mine"
import SitePage from "./routers/Site"
import AboutUs from "./routers/AboutUs"
import integralPage from "./routers/integral"
import servicelPage from "./routers/Service";
import  Cook from "./routers/Cook";
import  Cart from "./routers/Cart";
import List from "./routers/List";
import Settle from "./routers/Settle";
import Detail from "./routers/Detail";
import CollectPage from "./routers/collect";

const App=()=>{
    return <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/money" component={Money}/>
            <Route path="/foot" component={Foot}/>
            <Route path="/mine" component={minePage}/>
            <Route path="/site" component={SitePage}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/integral" component={integralPage}/>
            <Route path="/service" component={servicelPage}/>
            <Route path="/cook" component={Cook}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/list" component={List}/>
            <Route path="/settle" component={Settle}/>
            <Route path="/detail(/:id)" component={Detail} />
            <Route path="/collect" component={CollectPage} />
        </Router>
    </Provider>
}

render (<App />,document.querySelector('#root'))






render (<App />,document.querySelector('#root'))




