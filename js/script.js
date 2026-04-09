/**
 * RoadBeginner — script.js
 *
 * Responsabilidades:
 *  1. Navbar: adicionar classe "scrolled" ao rolar a página
 *  2. Menu hamburger: toggle nativo (independente do Bootstrap JS)
 *  3. Smooth scroll para links âncora do navbar
 *  4. Validação do formulário de captação de leads
 *     - Campos obrigatórios (nome + email)
 *     - Formato de email via regex
 *     - Feedback visual via classes Bootstrap: .is-valid / .is-invalid
 *  5. Redirect para obrigado.html apenas após validação positiva
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1. NAVBAR — classe "scrolled" para intensificar o blur ao rolar      */
  /* ------------------------------------------------------------------ */
  const navbar = document.querySelector('.rb-navbar');

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ------------------------------------------------------------------ */
  /* 2. MENU HAMBURGER — toggle nativo, sem depender do Bootstrap JS      */
  /*                                                                      */
  /* Motivo: ao abrir a página via file:// em mobile, alguns navegadores  */
  /* bloqueiam silenciosamente scripts CDN com atributo integrity/        */
  /* crossorigin, quebrando o data-bs-toggle. A lógica nativa garante     */
  /* funcionamento em qualquer ambiente (local, servidor, file://).       */
  /* ------------------------------------------------------------------ */
  const toggler = document.getElementById('navToggler');
  const navMenu = document.getElementById('navMenu');

  function openMenu() {
    navMenu.classList.add('show');
    toggler.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navMenu.classList.remove('show');
    toggler.setAttribute('aria-expanded', 'false');
  }

  if (toggler && navMenu) {
    // Abre/fecha ao clicar no botão
    toggler.addEventListener('click', function (e) {
      e.stopPropagation();
      navMenu.classList.contains('show') ? closeMenu() : openMenu();
    });

    // Fecha ao clicar fora do navbar
    document.addEventListener('click', function (e) {
      if (navbar && !navbar.contains(e.target) && navMenu.classList.contains('show')) {
        closeMenu();
      }
    });

    // Fecha ao pressionar Escape (acessibilidade)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('show')) {
        closeMenu();
        toggler.focus();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. SMOOTH SCROLL para links âncora do navbar                         */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      // Fecha o menu mobile ao clicar em um link âncora
      if (navMenu && navMenu.classList.contains('show')) {
        closeMenu();
      }

      // Offset pelo header fixo
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------------------------------ */
  /* 3. VALIDAÇÃO DO FORMULÁRIO                                            */
  /* ------------------------------------------------------------------ */

  /**
   * Valida o formato de e-mail.
   * Regex cobrindo o formato padrão: local@domínio.tld
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).trim().toLowerCase());
  }

  /**
   * Aplica estado de erro em um campo.
   * @param {HTMLInputElement} input
   * @param {string} message - mensagem de erro a exibir
   */
  function setInvalid(input, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');

    const errorEl = document.getElementById(input.getAttribute('aria-describedby'));
    if (errorEl) errorEl.textContent = message;
  }

  /**
   * Aplica estado de sucesso em um campo.
   * @param {HTMLInputElement} input
   */
  function setValid(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

  /**
   * Remove todos os estados de validação de um campo.
   * @param {HTMLInputElement} input
   */
  function clearValidation(input) {
    input.classList.remove('is-valid', 'is-invalid');
  }

  /**
   * Valida um único campo e retorna true se válido.
   * @param {HTMLInputElement} input
   * @returns {boolean}
   */
  function validateField(input) {
    const name  = input.getAttribute('name');
    const value = input.value.trim();

    if (name === 'nome') {
      if (!value) {
        setInvalid(input, 'Por favor, informe seu nome completo.');
        return false;
      }
      if (value.length < 3) {
        setInvalid(input, 'O nome deve ter ao menos 3 caracteres.');
        return false;
      }
      setValid(input);
      return true;
    }

    if (name === 'email') {
      if (!value) {
        setInvalid(input, 'Por favor, informe seu e-mail.');
        return false;
      }
      if (!isValidEmail(value)) {
        setInvalid(input, 'Informe um endereço de e-mail válido (ex: nome@email.com).');
        return false;
      }
      setValid(input);
      return true;
    }

    return true;
  }

  /* Validação em tempo real ao sair do campo (on blur) */
  const leadsForm = document.getElementById('leadsForm');

  if (leadsForm) {
    const inputs = leadsForm.querySelectorAll('input[name]');

    inputs.forEach(function (input) {
      // Limpa erros ao começar a digitar
      input.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
          clearValidation(this);
        }
      });

      // Valida ao perder foco
      input.addEventListener('blur', function () {
        if (this.value.trim()) {
          validateField(this);
        }
      });
    });

    /* ---------------------------------------------------------------- */
    /* 4. SUBMIT — validação completa + redirect para obrigado.html       */
    /* ---------------------------------------------------------------- */
    leadsForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputNome  = document.getElementById('inputNome');
      const inputEmail = document.getElementById('inputEmail');
      const btnSubmit  = document.getElementById('btnSubmit');
      const btnText    = btnSubmit.querySelector('.rb-btn-text');
      const btnLoading = btnSubmit.querySelector('.rb-btn-loading');

      // Valida todos os campos
      const nomeValido  = validateField(inputNome);
      const emailValido = validateField(inputEmail);

      // Move o foco para o primeiro campo inválido (acessibilidade)
      if (!nomeValido) {
        inputNome.focus();
        return;
      }
      if (!emailValido) {
        inputEmail.focus();
        return;
      }

      // --- Tudo válido: simular envio e redirecionar ---

      // Mostra estado de carregamento no botão
      btnSubmit.disabled = true;
      btnText.classList.add('d-none');
      btnLoading.classList.remove('d-none');

      // Simula um breve delay de "envio" antes do redirect
      setTimeout(function () {
        window.location.href = 'obrigado.html';
      }, 1200);
    });
  }
})();
