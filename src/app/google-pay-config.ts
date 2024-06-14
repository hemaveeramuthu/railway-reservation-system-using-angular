// src/app/google-pay-config.ts
export const googlePayConfig = {
    environment: 'TEST', // Change to 'PRODUCTION' for live transactions
    merchantInfo: {
      merchantId: 'your-merchant-id', // Replace with your merchant ID
      merchantName: 'Your Merchant Name',
    },
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example', // Replace with your gateway
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
  };
  