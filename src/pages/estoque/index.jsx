import React, {useEffect, useState, useRef} from 'react';
import styles from './estoque.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom';
import ItemEstoque from '../../components/itemEstoque';



function Estoque() {

  return (

    <div>
        <div className={styles.Root}>
          <Header/>
          <div className={styles.Conteudo}>
            <div className={styles.Titulo}>Estoque</div>
            <div className={styles.Form}>
              <div className={styles.LinhaCabecalho}>
                <h2>Produto</h2>
                <h2>Quantidade</h2>
              </div>
              <div className={styles.LinhaForm}>
                <ItemEstoque/>
                <ItemEstoque/>
                <ItemEstoque/>
                <ItemEstoque/>
              </div>
            </div>
            <div className={styles.Botoes}>
              <button className={styles.Botao}>Cadastrar</button>
              <button className={styles.Botao}>Editar</button>
              <button className={styles.Botao}>Excluir</button>
            </div>
          </div>
        </div>
    </div>
 )
}

export default Estoque