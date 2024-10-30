import React, {useEffect, useState, useRef} from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';


function Login() {
  
  return (
    <div className={styles.Root}>
      <main className={styles.Conteudo}>
        <div className={styles.logo}><img className={styles.foto} src=".././public/images/retalhosFinancas.png" alt="" /></div>
        <form className={styles.Form} onSubmit={validarLogin}>
          <input className={styles.usuario} type="text" id="usuario" placeholder="Usuário" required />
          <input className={styles.senha} type="password" id="senha" placeholder="Senha" required />
          <div className={styles.BotaoContainer}>
            <Link to="/Menu"><button type="submit" className={styles.Botao}>Entrar</button></Link>
          </div>
          <div id="mensagemErro" className={styles.Erro} style={{ display: 'none' }}>
            Usuário ou senha incorretos!
          </div>
        </form>
      </main>
    </div>
  );
}

const validarLogin = (event) => {
  event.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const mensagemErro = document.getElementById('mensagemErro');

  if (usuario !== 'admin' || senha !== '1234') {
    mensagemErro.style.display = 'block';
    setTimeout(() => {
      mensagemErro.style.display = 'none';
    }, 2000); // Esconde a mensagem de erro após 2 segundos
  } else {
    mensagemErro.style.display = 'none';
    // Redireciona para a página de menu 
    // history.push('/menu');
  }
};

export default Login;