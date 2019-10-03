Feature: Clean data

    Scenario: Get admin token
        Given that a secure endpoint is up at staging.tottus.cl
        Given I set Content-Type header to application/json
        Given I set the JSON body to 
        """
		{
			"email": "root.services@gmail.cl",
			"password": "Ss13as12+-"
			}
        """
        When I POST to /s/auth/v1/user/login
        Then response status code should be 200
        Then I keep the value of body path "$.token" as "userSessionToken"

    Scenario: Get user id for the automate user
        Given that a secure endpoint is up at staging.tottus.cl/s
        Given I set Content-Type header to application/json
		Given I set the bearer token with "userSessionToken"
        Given I set query parameter email to e2e.awdio@test.com	
        When I GET /customers/v1/
        Then response status code should be 200
		Then I keep the value of body path "$.results..id" as "userId"
		

	Scenario: Delete user created
        Given that a secure endpoint is up at staging.tottus.cl/s
		Given I set the bearer token with "userSessionToken"
        When  I perform DELETE to /customers/v1/{userId}
     	Then response status code should be 200
