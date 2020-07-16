// ======> BEFORE

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

// ======> AFTER

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const chargePerUnit = pricingPlan.unit;
let charge;