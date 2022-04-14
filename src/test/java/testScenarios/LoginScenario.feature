Feature: Adding product to cart by logging in

  @QuickTest
  Scenario: Adding product to cart by logging in
  Given I am on the www.hepsiburada.com
    Then I'm verifying the "hepsiburada"
    When I login to Hepsiburada site.
  Then I confirm that the user login is done on the homepage after the redirect
  And Here I search for the product I want to buy.
 And I choose a product from the product list (or a single result may also be returned) that appears on the screen as a result of the search.
  Then For the product I chose, I select products from 2 different vendors and add them to the cart.
  And I verify on the 'My Cart' page that the selected product has been added correctly
