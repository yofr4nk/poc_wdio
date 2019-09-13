@register
Feature: Performing a user register

Background:
    Given The user navigates to Tottus Website

Scenario: Verify the Registration functionality
   When The user clicks on to registers button
   Then shows a modal to enter and confirm the name and accepts the privacy policies 
   Then the user enters the email and confirm it
   Then set a password for the account and accepts the terms and conditions
   Then show the successfull registration message 'Gracias por registrarte Automate User'