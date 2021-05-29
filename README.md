# WEEK 15 - SAUCEDEMO

**Version 1.0.0**

Automation test for https://www.saucedemo.com/ website with WDIO. 
The tests were divided into 4 sections: 
Login, Inventory, Cart and Checkout.
The tests show the process of logging in, adding products to the cart and complete the purchase of the products.

---

## INSTALLING DEPENDENCIES.

npm install @wdio/cli
npx wdio config (local machine, Jasmine, sync, crhomedriver)
npm install @wdio/sync

---

## LOGIN SECTION TESTS.

In this section the users provided by the saucedemo website were tested.
The testing in this section focuses on making sure that the users are able
to log in or not and, in case the credentials are incorrect, informing the user
through the correct message.

---

## INVENTORY SECTION TESTS.

Once the user has successfully logged in, the Inventory page is displayed.
Here testing focuses on adding and removing items from the cart, checking menu
functionality, resetting added items to start a new cycle, and social media links.

---

## CART SECTION TESTS.

In this section the tests focus on reviewing the items added to the cart.
Attempt to remove an item, try to go back to inventory and
add more items and then move on to the next section.

---

## CHECKOUT SECTION TESTS.

Finally in this section, the tests focus on receiving the user's personal data, checking
if the amount to be paid is correct, the option to cancel the purchase and
the option to return to the inventory page once the purchase is completed.

---

## Contributors

- Vicenzo Mantilla <vicenzomantilla94@gmail.com>

---

## License & Copyright

© Vicenzo Mantilla, Radium Rocket Course.