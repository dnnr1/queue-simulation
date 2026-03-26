import { startEmailConsumer } from "./workers/email/worker";
import { startPaymentConsumer } from "./workers/payment/worker";
import { startShippingConsumer } from "./workers/shipping/worker";

startEmailConsumer();
startPaymentConsumer();
startShippingConsumer();
