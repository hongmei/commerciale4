import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./index.css";

const menus = [
    { id: 1, title: "log in", link: "/login" },
    { id: 2, title: "register", link: "/register" }
];

export default class Header extends Component {
    state = {
        isExpanded: false
    };

    handleClickExpand = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    };

    handleClickMenu = menu => {
        window.location.href = menu.link;
    };

    render() {
        const { isExpanded } = this.state;

        const sideBar = (
            <div className={`sidebar ${isExpanded ? "expanded" : "normal"}`}>
                <div>
                    {menus.map(menu => (
                        <div
                            key={menu.id}
                            className="item"
                            onClick={this.handleClickMenu.bind(this, menu)}
                        >
                            {menu.title}
                        </div>
                    ))}
                </div>
                <div
                    className="hidden-area"
                    onClick={this.handleClickExpand}
                ></div>
            </div>
        );

        return (
            <div>
                <div className="header">
                    <Row>
                        <Col className="item title" sm={4}>
                            <a href="/">Commerciale 4.0</a>
                        </Col>
                        <Col className="item search" sm={3}>
                            <span>
                                <i className="fa fa-search"></i>
                            </span>
                            <input type="text" placeholder="Company search" />
                        </Col>
                        <Col className="item user" sm={3}>
                            <button>
                                useremail@gmail.com
                                <i className="fa fa-angle-down"></i>
                            </button>
                        </Col>
                        <Col className="item lang" sm={2}>
                            <a href="/">
                                <img src="images/flag/italy.png" alt="" />
                            </a>
                            <a href="/">
                                <img src="images/flag/uk.png" alt="" />
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className="header-mobile">
                    <div className="lang">
                        <a href="/">
                            <img src="images/flag/italy.png" alt="" />
                        </a>
                        <a href="/">
                            <img src="images/flag/uk.png" alt="" />
                        </a>
                    </div>
                    <div className="title">
                        <a href="/">Commerciale 4.0</a>
                    </div>
                    <div>
                        <button
                            className="expand"
                            onClick={this.handleClickExpand}
                        >
                            <i
                                className={`fa ${
                                    isExpanded ? "fa-close" : "fa-bars"
                                }`}
                            />
                        </button>
                    </div>
                </div>
                {sideBar}
            </div>
        );
    }
}
