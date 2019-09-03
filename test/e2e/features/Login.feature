Feature: Performing a login

    Background:
        Given I navigate to Tottus Website

    Scenario: Login with valide user
        When I log in with a valide user
        Then show the user name 'Gabriel' on the site

    Scenario: Login with invalide user
        When I log in with a invalide user
        Then show an error message saying 'Usuario y/o Contraseña incorrecta'

    Scenario: Recovery password
        When I want to recovery my password
        Then show a message saying 'Restablecimiento de contraseña'
    
    #Scenario: Register user


