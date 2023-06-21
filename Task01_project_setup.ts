import { log } from "./utils/logger";
import { apiRoot } from "./handson/client";

// TODO: Complete the functions in
// ./handson/client.ts

// So this code displays the project configuration
// https://docs.commercetools.com/api/projects/project#get-project

// TODO: Get project settings
apiRoot
  .get() // construct a get request on the project endpoint
  .execute() // execute the request
  .then(log)
  .catch(log);

// TODO: Get shipping method by id
apiRoot
  .shippingMethods()
  .withId({ ID: "$ID" })
  .get()
  .execute()
  .then(log)
  .catch(log);


// TODO: Get standard tax category by key
apiRoot
  .taxCategories()
  .withKey({ key: "standard-tax" })
  .get()
  .execute()
  .then(log)
  .catch(log);
