/** External destinations remain null until the owner supplies real invite URLs. */
export const supportConfig = {
  donationProvider: 'WhyDonate',
  donationUrl: null as `https://${string}` | null,
  donationWidget: {
    slug: 'dekolonizart',
    primaryColor: '#135406',
    secondaryColor: '#9a391b',
    fontFamily: 'Source Sans Pro',
    buttonRadius: 27,
    cardRadius: 21,
    donationAmountSize: 16,
    buttonTextSize: 20,
  },
  community: {
    whatsappUrl: 'https://chat.whatsapp.com/K1Fn4F3TM6Y7RNrRGaLsKk' as `https://${string}`,
    signupEmail: 'info@dekolonizart.com',
  },
  brevo: {
    apiKeyEnv: 'BREVO_API_KEY',
    listIdEnv: 'BREVO_LIST_ID',
    communityListIdEnv: 'BREVO_COMMUNITY_LIST_ID',
  },
} as const;
