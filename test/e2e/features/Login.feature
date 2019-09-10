Feature: Performing a login

    Background:
        Given The user navigates to Tottus Website

    Scenario: Login with valide user
        When The user logs in with a valide user
        Then show the users name 'Gabriel' on the site

    Scenario: Login with invalide user
        When The user logs in with an invalide user
        Then show an error message saying 'Usuario y/o Contraseña incorrecta'

    Scenario: Recovery password
        When The user wants to recovery his password
        Then show a message saying 'Restablecimiento de contraseña'
    


