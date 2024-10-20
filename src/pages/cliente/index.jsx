import React, {useEffect, useState, useRef} from 'react';
import styles from './cliente.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom';



function Cliente() {

  return (

    <div>
        <div className={styles.Root}>
          <Header/>
          <div className={styles.Conteudo}>
            <div className={styles.Titulo}>Cliente</div>
            <div className={styles.Form}>
              <div className={styles.LinhaForm}>
                <input className={styles.Nome} type="text" id="nome" name="nome" placeholder='nome' />
                <input className={styles.Cpf} type="text" id="cpf" name="cpf" placeholder='cpf'/>
              </div>
              <div className={styles.LinhaForm}>
                <input className={styles.Endereco} type="text" id="endereco" name="endereco" placeholder='endereço'/>
                <input className={styles.Numero} type="text" id="numero" name="numero" placeholder='número'/>
                <input className={styles.Cep} type="text" id="cep" name="cep" placeholder='cep'/>
              </div>
              <div className={styles.LinhaForm}>
                <input className={styles.Bairro} type="text" id="bairro" name="bairro" placeholder='bairro'/>
                <input className={styles.Cidade} type="text" id="cidade" name="cidade" placeholder='cidade'/>
                <input className={styles.Estado} type="text" id="estado" name="estado" placeholder='estado'/>
              </div>
              <div className={styles.LinhaForm}>
                <input className={styles.Email} type="text" id="email" name="email" placeholder='e-mail'/>
                <input className={styles.Contato} type="text" id="contato" name="contato" placeholder='contato'/>
              </div>
            </div>
            <div className={styles.Botoes}>
              <Link to="/"><button className={styles.Botao}>Pesquisar</button></Link>
              <button className={styles.Botao}>Cadastrar</button>
              <button className={styles.Botao}>Editar</button>
              <button className={styles.Botao}>Excluir</button>
              <Link to="/Atendimento"><button className={styles.Botao}>Atendimento</button></Link>
            </div>
          </div>
        </div>
    </div>
 )
}

export default Cliente