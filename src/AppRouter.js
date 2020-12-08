import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // withRouter,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
import Main from './Page/main';
import Promo from './Page/promo'
import Blog from './Page/blog'
import Package from './Page/package'
import { Navbar } from './Components/navbar';

const Routes = [
    {
        path: '/package',
        component: Package,
        // isExact: true,
    },
    {
        path: '/promo',
        component: Promo,
        // isExact: true,
    },
    {
        path: '/blog',
        component: Blog,
        // isExact: true,
    },
    {
        path: '/',
        component: Main,
        // isExact: true,
    },
]

class AppRouter extends React.Component {
    constructor() {
        super();
        this.state = {
            Routes,
        }
    }
    changeView = (e) => {
        // const j = i===0?1:0;
        console.log(e.target.checked);
        this.setState({
            ...this.state,
        });
    }
    render() {
        // const layoutConfigLocal = new layoutConfig();
        // console.log(this.state)
        // console.log(this.props.layoutConfig.getImgSrc())
        return(
            <div className='font-all'>
                <Router>
                    <Navbar/>
                    <Switch>
                        {this.state.Routes.map((route, i) => {
                        // const changeImage = route.path==='/newblog' && this.changeImage
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.isExact}
                                render={props => {
                                // console.log(route)
                                // console.log(window.location.pathname)
                                // console.log(route.path)
                                // const props2 = route.path==='/newblog' ? {...props} : {...props, ...this.changeImage}
                                return (
                                    // pass the sub-routes down to keep nesting
                                    <route.component {...props} routes={route.routes} />
                                )}}
                            />
                        )})}
                    </Switch>
                    <div className='mt-5 card-body container'>
                        <div className='row m-0'>
                            <div className='col-lg-2 col-md-3'>
                                <h6><b>About Us</b></h6>
                                <ul className="list-unstyled pt-1">
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Our Story</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Our Service</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Our Project</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-3'>
                                <h6><b>Careers</b></h6>
                                <ul className="list-unstyled pt-1">
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Culture and Values</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">International Careers</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Inclusion, Diversity, and Equity</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-3'>
                                <h6><b>Social Impact</b></h6>
                                <ul className="list-unstyled pt-1">
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Suppliers</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Corporate Gift Card</Link></li>
                                    <li className='my-2'><Link to="/" className="text-decoration-none text-dark">Office and Foodservice</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </Router>
            </div>
        );
    }
}

export default AppRouter