import { CustomerDraft } from "@commercetools/platform-sdk";
import {
    createCustomer,
    getCustomerById,
    getCustomerByKey,
    createCustomerToken,
    confirmCustomerEmail,
    assignCustomerToCustomerGroup,
} from "./handson/customer";
import { log } from "./utils/logger";

const customerDraft: CustomerDraft = {
    firstName: "Levi",
    lastName: "Lessa",
    email: "levi@test.com",
    password: "123456",
    key: "levi-lessa-1-customer",
    addresses: [
        {
            country: "DE",
            key: "ll-customer-address"
        }
    ],
    defaultBillingAddress: 0,
    defaultShippingAddress: 0,
    // stores: [
    //     {
    //         typeId: "store",
    //         key: "munich-store"
    //     }
    // ]
};

// createCustomer(customerDraft).then(log).catch(log);

// getCustomerByKey(customerDraft.key!).then(log).catch(log);

// getCustomerByKey(customerDraft.key!)
//     .then(createCustomerToken)
//     .then(confirmCustomerEmail)
//     .then(log)
//     .catch(log);

// assignCustomerToCustomerGroup(customerDraft.key!, "indoor-customers")
//     .then(log)
//     .catch(log);
