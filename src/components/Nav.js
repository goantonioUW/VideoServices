import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import classes from './nav.module.css';

function Nav(props) {
  return (
    <Navbar className={classes.nav}>
      <Container>
        <Navbar.Brand href="#">
            <p className={classes.navText}>
                @CORDELLUXE Providing SUPERIOR Sports Media coverage. Videos to Photos I’ve got you covered! IF IT AINT DELLUXE, IT JUST AINT ENOUGH!
            </p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
