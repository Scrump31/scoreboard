Feature: Scoreboard

  Scenario: The banner is "Scoreboard"
    Given The scoreboard is loaded
    Then The banner text is "Scoreboard"

  Scenario: A newly added player increases total players
    Given A new player is added to the board with 3 current players
    When the "Players" total is viewed
    Then "Players" has increased to 4

  Scenario: Clicking + button adds 1 to player points
    Given a player with 31 points
    When the + button is clicked
    Then the total points is increased to 32

  Scenario: Clicking the + button increases total points by 1
    Given a scoreboard with 108 points
    When a player + button is clicked
    Then the total points is increased to 109
