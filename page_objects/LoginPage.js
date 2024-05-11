class LoginPage {
    visit() {
      cy.visit('https://beta.argxp.com/access');
    }
  
    clickGoogleButton() {
      cy.contains('Google').click();
    }
  
    acceptTerms() {
      cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').wait(3000).click();
      cy.contains('Acepto').wait(3000).click();
    }
  }
  
  export default new LoginPage();

  <input type="email" name="loginfmt" id="i0116" maxlength="113" class="form-control ltr_override input ext-input text-box ext-text-box" aria-required="true" data-report-event="Signin_Email_Phone_Skype" data-report-trigger="click" data-report-value="Email_Phone_Skype_Entry" data-bind="
                    attr: { lang: svr.fApplyAsciiRegexOnInput ? null : 'en',
                            autocomplete: svr.fIsUpdatedAutocompleteEnabled ? 'username' : null },
                    externalCss: {
                        'input': true,
                        'text-box': true,
                        'has-error': usernameTextbox.error },
                    ariaLabel: tenantBranding.unsafe_userIdLabel || str['CT_PWD_STR_Username_AriaLabel'],
                    ariaDescribedBy: 'loginHeader' + (pageDescription &amp;&amp; !svr.fHideLoginDesc ? ' loginDescription usernameError' : ' usernameError'),
                    textInput: usernameTextbox.value,
                    hasFocusEx: usernameTextbox.focused,
                    placeholder: $placeholderText" autocomplete="username" aria-label="Escriba su correo electrónico, teléfono o Skype." aria-describedby="loginHeader usernameError" placeholder="Correo electrónico, teléfono o Skype"></input>