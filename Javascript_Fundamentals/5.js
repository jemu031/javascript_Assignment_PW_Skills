function getDeliverytime(typeofPackege) {
  let estimatedDeliveryTime;
  switch (typeofPackege) {
    case "standard":
      estimatedDeliveryTime = "3-5 days";
      break;
    case "express":
      estimatedDeliveryTime = "1-1 days";
      break;
    case "overnight":
      estimatedDeliveryTime = "next day";
      break;
    default:
      estimatedDeliveryTime = "not available";
      break;
  }
  return estimatedDeliveryTime;
}

const deliverytype = "standard";
const deliverytime = getDeliverytime(deliverytype);
console.log(`The Item Will be delevered in ${deliverytime}`);
