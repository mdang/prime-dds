import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import InputBox from '../../components/input/index';
import PreviewIcon from '../../components/icon'
import Menu from '../menu/index';
import Image from '../../components/image/index';
import logo from '../../assets/images/Logo.png';
import { Title } from '../../components/title/index';
import Login from './login';
import { user, search, x } from 'react-icons-kit/feather'
import './navbar.scss';


function Navbar() {
    const [activeClass, setactiveClass] = useState(false);
    const [searchValue, setSearch] = useState(false);
    const [login, setLogin] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                let scoll = null
                if (window.scrollY === 0) {
                    scoll = false
                } else {
                    scoll = true
                }
                setactiveClass(scoll)
            });
        }
    }, [])

    const searchClick = () => {
        setSearch(!searchValue)
    }
    const loginClick = () => {
        setLogin(!login)
    }

    return (
        <div className="App-header">
            <header className={`header-sticky ${activeClass ? 'sticky' : ''}`}>
                <Container>
                    <Row>
                        <Col sm={6} className="left-block">
                            <div className="logo-wrapper">
                                <a href="/">
                                    <Image Path={logo} Class="logo-img" />
                                </a>
                            </div>
                        </Col>
                        <Col sm={6} className="right-block">
                            <div className="search-menu-account-wrapper">
                                <Menu />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Navbar;
