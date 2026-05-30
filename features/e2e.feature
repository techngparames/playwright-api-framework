Feature: E-commerce End to End Flow (SauceDemo)

  Scenario: User completes full e-commerce flow

    Given User is on login page
    When User logs in with valid credentials
    Then User should be navigated to products page

    When User applies filter high to low
    And User adds two products to cart

    When User opens cart
    Then Cart should have 2 products
    And User clicks checkout

    When User enters checkout details "John" "Doe" "600001"
    And User continues checkout
    And User finishes order
    And User goes back to home
    And User logs out