import React, {Component} from 'react';
import "./headerNav.css";
import Button from '../button.jsx';

class HeaderNav extends Component {

    renderList() {
        // pass links={true} in parent component to show all links
        if (this.props.links) {
            return (
                <ul>
                    <li><a href="/auth/slack" className="nav-link">Login</a></li>
                    <li><a href="/auth/slack">
                        <Button className={"ui primary button"} msg={"Signup"}/>
                    </a></li>
                    <li><a href="" className="nav-link">Contact</a></li>
                    <li><a href="" className="nav-link">About</a></li>
                    <li><a href="" className="nav-link">Demo</a></li>
                </ul>
            )
        }
    }

    render() {
        return(
            <div className="header-nav">
                <div className="nav-logo">
                    <ul>
                        <li><a href="">Tags</a></li>
                    </ul>
                </div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }

};

export default HeaderNav;
