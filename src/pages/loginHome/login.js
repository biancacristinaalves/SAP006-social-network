// MANIPULAÇÃO DO DOM DO LOGIN

import { loginWithRegister, loginWithGoogle } from '../../services/index.js';

export const loginMainScreen = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const loginPage = document.createElement('div');
  loginPage.setAttribute('class', 'teste');
  loginPage.innerHTML = `
    
    <section id="login" class="container-login">
        <h2 class="login">Login</h2>
        <div> 
            <img src="img/icone-cadastro.png" class="btn-cadastrar" id="cadastro" type="button">
        </div> 
        <form class="container-form" id="form-login">
            <fieldset class="icons-login">
              <input class="text-field" id="email" type="e-mail" placeholder="Insira seu e-mail"/>
                <i class="far fa-envelope"></i>
            </fieldset>
            <fieldset class="icons-login">
              <input class="text-field" id="password" type="password" placeholder="Insira sua senha"/>
                <i class="fas fa-lock-open"></i>
                <i class="fas fa-lock"></i>
            </fieldset>
            <button class="btn" type="button" id="btn-login">Entrar</button>
            <span class="pswd-recover"> Esqueceu a senha? Recupere-a <a id="recover" href="#">Aqui</a></span>
            <div>
                <img src="img/icone-google.png" class="btn-google" id="google" type="button">
            </div>
            <p class="phrase-google">Login com o Google</p>
        </form>
    </section> 
    `;

  const btnLogin = loginPage.querySelector('#btn-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginPage.querySelector('#email').value;
    const password = loginPage.querySelector('#password').value;
    loginWithRegister(email, password);
    // console.log(email, password);
  });

  const btnLoginWithGoogle = loginPage.querySelector('#google');
  btnLoginWithGoogle.addEventListener('click', loginWithGoogle);

  const imgBtnRegister = loginPage.querySelector('#cadastro');
  imgBtnRegister.addEventListener('click', () => {
    window.history.pushState({}, '', '/cadastro');
    const popStateEvent = new PopStateEvent('popstate', { state: {} });
    dispatchEvent(popStateEvent);
  });

  const btnLink = loginPage.querySelector('#recover'); // btnAquiRecover
  btnLink.addEventListener('click', () => {
    window.history.pushState({}, '', '/recuperar');
    const popStateEvent = new PopStateEvent('popstate', { state: {} });
    dispatchEvent(popStateEvent);
  });

  return main.appendChild(loginPage);
};

// JULIANA
/* function mostrarSenha() {
  const senha = document.getElementById('password');
  if (senha.type === 'password') {
    senha.type = 'text';
} else {
    senha.type = 'password';
  }
  senha.addEventListener('click', mostrarSenha());
} */
