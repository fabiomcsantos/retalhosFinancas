import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import styles from './atendimentos.module.css';

function Atendimentos() {

    return (

        <div className={styles.LinhaList}>
            <input className={styles.Selecao} type="checkbox" id="selecao" name="selecao"/>
            <div className={styles.Servico}><h3>troca de ziper</h3></div>
            <div className={styles.DataI}><h3>12/03/24</h3></div>
            <div className={styles.DataF}><h3>20/03/24</h3></div>
            <div className={styles.Status}><div className={styles.Pagamento}></div></div>
            <div className={styles.Pag}><h3>crédito</h3></div>
        </div>

)
}

export default Atendimentos