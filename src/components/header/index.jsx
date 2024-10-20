import React from 'react'
import styles from './header.module.css'
import {Link} from 'react-router-dom'

function Header() {

  return (
    <div className={styles.Root}>
        <header className={styles.Header}>
            <Link to={"/Menu"}><img className={styles.Logo} src="../public/images/retalhosFinancas.png" /> </Link>
        </header>
    </div>
   )
  }


export default Header;