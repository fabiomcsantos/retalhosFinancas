import React, {useEffect, useState, useRef} from 'react';
import styles from './atendimento.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom';
import Atendimentos from '../../components/atendimentos';



function Atendimento() {

  return (

    <div>
        <div className={styles.Root}>
          <Header/>
          <div className={styles.Conteudo}>
            <div className={styles.Titulo}>Atendimento</div>
            <div className={styles.Form}>
              <div className={styles.LinhaCabecalho}>
                <h2>Serviço</h2>
                <h2>Data de Inicio</h2>
                <h2>Data de Término</h2>
                <h2>Pagamento</h2>
                <h2>Forma de Pagamento</h2>
              </div>
              <div className={styles.LinhaForm}>
                <Atendimentos/>
                <Atendimentos/>
                <Atendimentos/>  
              </div>
            </div>
            <div className={styles.Botoes}>
              <Link to="/NovoAtendimento"><button className={styles.Botao}>Novo</button></Link>
              <button className={styles.Botao}>Visualizar</button>
            </div>
          </div>
        </div>
    </div>
 )
}

export default Atendimento