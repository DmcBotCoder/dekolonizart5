import Script from 'next/script';

interface WhyDonateWidgetProps {
  lang: 'en' | 'de' | 'fr';
  slug: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  buttonRadius: number;
  cardRadius: number;
  donationAmountSize: number;
  buttonTextSize: number;
}

export function WhyDonateWidget({ lang, slug, primaryColor, secondaryColor, fontFamily, buttonRadius, cardRadius, donationAmountSize, buttonTextSize }: WhyDonateWidgetProps) {
  return (
    <div className="v5-donation-widget">
      <link href="https://plugin.whydonate.com/wdplugin-style.css" rel="stylesheet" type="text/css" />
      <div id={`share-widget-${slug}`} className="share-widget" data-slug={slug} data-lang={lang} data-primary-color={primaryColor} data-secondary-color={secondaryColor} data-font-family={fontFamily} data-button-radius={buttonRadius} data-card-radius={cardRadius} data-donation-amount-size={donationAmountSize} data-button-text-size={buttonTextSize} data-card="show" data-form_mode="donation-form+widget" />
      <Script src="https://plugin.whydonate.com/wp_styling.js" strategy="afterInteractive" />
    </div>
  );
}
