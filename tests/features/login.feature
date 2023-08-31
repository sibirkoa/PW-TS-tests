Feature: Login

    Background:
        Given Go to the main page
        And Click the login link

    Scenario:  Successfull login
        When Enter the username "testUser"
        And Enter the password "Password1!"
        And Click the login button
        Then User "testUser" logged in

    Scenario:  Unsuccessfull login
        When Enter the username "testUser"
        And Enter the password "incorrectPassword1!"
        And Click the login button
        Then User "testUser" has not logged in