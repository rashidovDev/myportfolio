import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap"
import Link from 'next/link';
import { navbar } from '../Data/navbar';

const NavSec = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false)
   
    const handleScroll = () => {
      const offset = window.scrollY;
  
      if(offset > 200){
          setScrolled(true)
      }else{
          setScrolled(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    })

    return (
      <>
      <Navbar className="navn" light expand="md">
          <Link  href="/" >
              <b className="brand">Portfolio</b>
          </Link>
      <NavbarToggler style={{background : "#FF7F50", color : "#fff"}} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              <Nav className='items' navbar>
                {navbar.map((item,idx) => (
                   <NavItem key={idx}>
                      <Link href={item.href}><a className='links'>{item.name}</a></Link>
                   </NavItem>
                ))}  
              </Nav>
          </Collapse>
      </Navbar>
      </>
    );
}

export default NavSec;