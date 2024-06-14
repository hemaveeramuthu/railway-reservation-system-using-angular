// src/app/google-pay-config.ts
export const googlePayConfig = {
    environment: 'TEST', // Change to 'PRODUCTION' for live transactions
    merchantInfo: {
      merchantId: '5383899838', // Replace with your merchant ID
      merchantName: 'hema',
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
  