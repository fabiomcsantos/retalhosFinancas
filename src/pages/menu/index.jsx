import React, {useEffect, useState, useRef} from 'react';
import styles from './menu.module.css';
import Header from '../../components/header/index';




function Menu() {

  return (

    <div>
        <Header/>
        <div className={styles.Root}>
        </div>
    </div>
 )
}

export default Menu