import React from 'react';
import { navItem } from '../../utils/navItem';
import NavTab from '../NavTab';
import styles from './styles.module.css';

const Navbar = (props) => {
  return (
    <nav className={`${styles.navbar} ${props.className}`}>
      <ul>
        {navItem.map((item) => {
          return <NavTab data={item} key={item.id} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
