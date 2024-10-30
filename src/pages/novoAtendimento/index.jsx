import React, {useEffect, useState, useRef} from 'react';
import styles from './novoAtendimento.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom';



function NovoAtendimento() {

  return (

    <div>
        <div className={styles.Root}>
          <Header/>
          <div className={styles.Conteudo}>
            <div className={styles.Titulo}>Ficha de Serviço</div>
              <div className={styles.Alinhamento}>
              <div className={styles.LinhaForm}>
                <input className={styles.Servico} type="text" id="servico" name="servico" placeholder='Serviço' />
                <input className={styles.DataI} type="text" id="datai" name="datai" placeholder='Data Inicio'/>
                <input className={styles.DataF} type="text" id="dataf" name="dataf" placeholder='Data Final'/>
              </div>
              <div className={styles.LinhaFormCheck}>
                <input className={styles.Descricao} type="text" id="descricao" name="descricao" placeholder='Descrição'/>
                <div className={styles.Ckecks}>
                    <div className={styles.caixa}>
                    <div className={styles.Cabecalho}>
                        <h2>Status Pagamento</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="pago" name="pago" />
                        <h2>Pago</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="apagar" name="apagar" />                            
                        <h2>Á pagar</h2>
                    </div>
                    </div>
                    <div className={styles.caixa}>
                    <div className={styles.Cabecalho}>
                        <h2>Forma de Pagamento</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="pix" name="pix" />
                        <h2>Pix</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="debito" name="debito" />                            
                        <h2>Débito</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="credito" name="credito" />                            
                        <h2>Crédito</h2>
                    </div>
                    <div className={styles.lista}>
                        <input className={styles.checkbox} type="checkbox" id="dinheiro" name="dinheiro" />                            
                        <h2>Dinheiro</h2>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.Botoes}>
                <button className={styles.Botao}>Salvar</button>
            </div>
          </div>
        </div>
    </div>
 )
}

export default NovoAtendimento