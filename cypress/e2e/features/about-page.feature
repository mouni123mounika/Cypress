Feature: Home Page

Scenario: Verify the display of Facts & Figures in About Page
    When I visit the About Page
    Then I should see Facts & Figures at the bottom of About Page
    And I should see Facts & Figures in a table format