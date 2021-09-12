Feature: Air quality

  Scenario: Core behaviour
    Given I am using a browser which does not run JS
    When I visit the page
    Then I should see all static text
    And the language switcher
    And the interactive buttons
    And the animation toggle
    And a message alerting the user to update their browser to use the interactive content

  Scenario: Slow connection
    Given I am on a slow connection
    Then I should see the article text loaded

  Scenario: Entering the page (full experience)
    Given I navigate to the page
    Then I should see a hero section with an image
    And headline text
    And I should see the language switcher
    And article text
    And I should see an animation toggle
    And I should see a cloud of buttons

    Scenario: Language switcher
      Given I click on the language switcher
      Then I should be presented with the list of available languages (English and Hindi)
      When I click on a language
      Then the content of the page should be updated to the selected language
#     Note that if a city is already selected and the language is changed, then the city name will be updated after a city button is clicked

  Scenario: Animation toggle
    Given I click the animation toggle
    Then the text should update to say 'Animation off'
    And animations should be turned off for the all animated elements of the page
    When I click it again
    Then the text should update to indicate animations have been enabled
    And animations should be turned on for the rest of the page

  Scenario: City button click
    Given I click on a city name button
    Then I should see the name of the city
    And the number of cigarettes
    And the same number of image cigarettes
    And the PM2.5 indicator
    And gauge indicating the level of smoked cigarettes compared to other cities

