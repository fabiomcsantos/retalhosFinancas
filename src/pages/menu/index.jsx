import React, {useEffect, useState, useRef} from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';



function Menu() {
  
  return (
    <div>
    <div className={styles.Root}>
      <main className={styles.Conteudo}>
        <div className={styles.logo}><img className={styles.foto} src=".././public/images/retalhosFinancas.png" alt="" /></div>
          <div className={styles.BotaoContainer}>
            <Link to="/Cliente"><button className={styles.Botao}>Clientes</button></Link>
            <Link to="/Estoque"><button className={styles.Botao}>Estoque</button></Link>
          </div>
      </main>
    </div>
    </div>
  )
}

export default Menu;