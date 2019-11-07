Feature: Searching Products
    
    Background:
        Given The user navigates to Home Page

    Scenario: Searching a product
        When The user enter 'Doritos' in search component
        Then show the search preview
        Then should be located into products page
        Then the user could see the product name 'Doritos' before get it


