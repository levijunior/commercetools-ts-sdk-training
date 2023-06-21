import { CustomerSignin } from "@commercetools/platform-sdk";
import * as checkout from "./handson/order";
import { log } from "./utils/logger";

const customerKey = "levi-lessa-1-customer";

const mergingProcessTest = async () => {
    let anonymousCart = await checkout.createAnonymousCart();

    let customerCart = await checkout.createCart(customerKey);

    anonymousCart = await checkout.addLineItemsToCart(anonymousCart.body.id, ['tulip-seed-box', 'tulip-seed-box', 'tulip-seed-box']);

    customerCart = await checkout.addLineItemsToCart(customerCart.body.id, ['tulip-seed-box', 'tulip-seed-sack', 'tulip-seed-package']);

    log("Anonymous Cart: " + anonymousCart.body.id);
    log("Customer Cart: " + customerCart.body.id);

    const customerDetails: CustomerSignin = {
        email: "levi@test.com",
        password: "123456",
        anonymousCartId: anonymousCart.body.id,
        anonymousCartSignInMode: "MergeWithExistingCustomerCart", // try switching to UseAsNewActiveCustomerCart
        // anonymousCartSignInMode: "UseAsNewActiveCustomerCart", // try switching to MergeWithExistingCustomerCart
    };

    let result = await checkout.customerSignIn(customerDetails);
    return result.body.cart;
};

mergingProcessTest()
    .then((cart) => {
        log("Active cart: " + cart!.id);
        cart!.lineItems.forEach(item => {
            log(item.variant.sku + " :" + item.quantity);
        });
    })
    .catch(log);
