import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import styles from './itemEstoque.module.css';

function itemEstoque() {

    return (

        <div className={styles.LinhaList}>
            <input className={styles.Selecao} type="checkbox" id="selecao" name="selecao"/>
            <div className={styles.Produto}><h3>Ziper</h3></div>
            <div className={styles.Quantidade}><h3>10</h3></div>
        </div>

)
}

export default itemEstoque