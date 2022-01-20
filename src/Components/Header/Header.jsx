import { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';
import './Header.css';

const NavComponent = () => {
    let {auth, dispatch} = useContext(AuthContext);

    function onClickSignOut(_e) {
        dispatch({type: 'LOGOUT'});
        localStorage.setItem('auth', null);
    }

    return (
        <Navbar className='Header'>
            <Container>
                <Navbar.Brand href="/">dylanops.com</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/about">{auth.userName}</a>
                    </Navbar.Text>
                    <Navbar.Text className='SignOut'>
                        <Button  onClick={onClickSignOut} variant="light">Signout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const Header = () => {
    return (
        <div className='Header'>
            <NavComponent />
        </div>
    );
}

export default Header;