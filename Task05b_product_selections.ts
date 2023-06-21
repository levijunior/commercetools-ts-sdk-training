import { getProductsInStore, addProductSelectionToStore } from "./handson/store";
import {
    getProductSelectionByKey,
    createProductSelection,
    addProductsToProductSelection,
    getProductsInProductSelection
} from "./handson/productSelections";

import { log } from "./utils/logger";

const productSelectionKey = "ll-munich-store-selection";

// createProductSelection(productSelectionKey, "LL Munich Store Selection").then(log).catch(log);

// getProductSelectionByKey(productSelectionKey).then(log).catch(log);

// addProductsToProductSelection(productSelectionKey, ['tulip-seed-product']).then(log).catch(log);

// getProductsInProductSelection(productSelectionKey).then(log).catch(log);

addProductSelectionToStore("munich-store", productSelectionKey).then(log).catch(log);

// getProductsInStore("munich-store").then(log).catch(log);