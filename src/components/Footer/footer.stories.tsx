import React from 'react';
import Footer from './index';

export default {
  title: 'Components/Footer',
  argTypes: {},
};

const headerSectionData = [
  {
    image: './branding/svg/footer-envelop.svg',
    content: 'ContactUs@flipr.com',
    subcontent: '',
  },
  {
    image: './branding/svg/footer-phone.svg',
    content: '1-800-555-5555',
    subcontent: 'Everyday, 9am-8pm EST',
  },
  {
    image: './branding/svg/footer-livechat.svg',
    content: 'Live Chat',
    subcontent: 'Mon-Fri, 5am-10pm EST',
    subsubcontent: 'Sat-Sun, 6am-9pm EST',
  },
];

const innerSiteNavigationData = [
  {
    title: 'Support',
    case: [
      {
        titlecase: 'Contact us',
        link: 'Contact-us',
      },
      {
        titlecase: 'FAQ',
        link: 'FAQ',
      },
      {
        titlecase: 'Affilitate Partners Program',
        link: 'Affilitate-Partners-Program',
      },
      {
        titlecase: 'Wholesale Partners',
        link: 'Wholesale-Partners',
      },
    ],
  },
  {
    title: 'About',
    case: [
      {
        titlecase: 'Our Story',
        link: 'Our-Story',
      },
      {
        titlecase: 'Awards & Partnerships',
        link: 'Awards-Partnerships',
      },
      {
        titlecase: 'Affilitate Partners Program',
        link: 'Affilitate-Partners-Program',
      },
      {
        titlecase: 'Blog',
        link: 'Blog',
      },
      {
        titlecase: 'Press',
        link: 'Press',
      },
      {
        titlecase: 'Careers',
        link: 'Careers',
      },
    ],
  },
  {
    title: 'Sell or Trade-In',
    case: [
      {
        titlecase: 'Start your Trade-In',
        link: 'Start-your-Trade-In',
      },
      {
        titlecase: 'Track your Trade-In',
        link: 'Track-your-Trade-In',
      },
      {
        titlecase: 'Advantages',
        link: 'Advantages',
      },
      {
        titlecase: 'How It Works',
        link: 'How-It-Works',
      },
      {
        titlecase: 'Prepare Your Phone',
        link: 'Prepare-Your-Phone',
      },
      {
        titlecase: 'Environment',
        link: 'Environment',
      },
    ],
  },
  {
    title: 'Buy',
    case: [
      {
        titlecase: 'Find the perfect device',
        link: 'Find-the-perfect-device',
      },
      {
        titlecase: 'Advantages',
        link: 'Advantages',
      },
      {
        titlecase: 'Track your order',
        link: 'Track-your-order',
      },
      {
        titlecase: 'Shipping',
        link: 'Shipping',
      },
      {
        titlecase: 'Returns',
        link: 'Returns',
      },
    ],
  },
];

const innerSitePopularSearchesData = [
  {
    title: '',
    case: [
      {
        titlecase: 'Sell My Cell Phone',
        link: 'Sell-My-Cell-Phone',
      },
      {
        titlecase: 'Sell Your iPhone',
        link: 'Sell-Your-iPhone',
      },
      {
        titlecase: 'Sell Samsung Galaxy',
        link: 'Sell-Samsung-Galaxy',
      },
      {
        titlecase: 'Buy iPhone 11 Pro Max',
        link: 'Buy-iPhone-11-Pro-Max',
      },
      {
        titlecase: 'Sell iPhone XS Max',
        link: 'Sell-iPhone-XS-Max',
      },
      {
        titlecase: 'Sell iPhone 11',
        link: 'Sell-iPhone-11',
      },
    ],
  },
  {
    title: '',
    case: [
      {
        titlecase: 'Sell Samsung Phone',
        link: 'Sell-Samsung-Phone',
      },
      {
        titlecase: 'Sell iPhone 7',
        link: 'Sell-iPhone-7',
      },
      {
        titlecase: 'Sell iPhone XS',
        link: 'Sell-iPhone-XS',
      },
      {
        titlecase: 'Sell iPad',
        link: 'Sell-iPad',
      },
      {
        titlecase: 'Sell iPhone X',
        link: 'Sell-iPhone-X',
      },
      {
        titlecase: 'Buy iPhone 11',
        link: 'Buy-iPhone-11',
      },
    ],
  },
  {
    title: '',
    case: [
      {
        titlecase: 'Buy iPhone XS Max',
        link: 'Buy-iPhone-XS-Max',
      },
      {
        titlecase: 'Sell iPhone 7 Plus',
        link: 'Sell-iPhone-7-Plus',
      },
      {
        titlecase: 'Buy iPhone',
        link: 'Buy-iPhone',
      },
      {
        titlecase: 'Buy iPhone XR',
        link: 'Buy-iPhone-XR',
      },
      {
        titlecase: 'Flipr.com Reviews',
        link: 'Flipr-com-Reviews',
      },
      {
        titlecase: 'Sell iPhone 11 Pro',
        link: 'Sell-iPhone-11-Pro',
      },
    ],
  },
  {
    title: '',
    case: [
      {
        titlecase: 'Buy Used iPhone',
        link: 'Buy-Used-iPhone',
      },
      {
        titlecase: 'Buy Used Cell Phones',
        link: 'Buy-Used-Cell-Phones',
      },
      {
        titlecase: 'Buy iPhone 8 Plus',
        link: 'Buy-iPhone-8-Plus',
      },
      {
        titlecase: 'Trade-in iPhone',
        link: 'Trade-in-iPhone',
      },
      {
        titlecase: 'Sell iPhone 11 Pro Max',
        link: 'Sell-iPhone-11-Pro-Max',
      },
      {
        titlecase: 'Buy Used iPhone X',
        link: 'Buy-Used-iPhone-X',
      },
    ],
  },
];

const bottomSectionData = [
  'Disclaimer',
  'Terms & Conditions',
  'Accessibility',
  'Law Enforcement',
  'Privacy Policy',
  'CA Do Not Sell',
];

const termsConditionDesk =
  ' ©2014 - 2022 Flipr, LLC. All Rights Reserved, Patents Pending. Flipr is not affiliated with nor has it been authorized, sponsored, or otherwise approved by the manufacturers of the items available for trade-in or purchase. Flipr and the Flipr logo are trademarks of Flipr, LLC, registered in the U.S. All other trademarks, logos and brands are the property of their respective owners. Flipr, LLC CA DOJ #3711-2068';

const termsConditionMobile = ' 2022 Flipr, Inc. All Rights Reserved';

export const Story = () => {
  return (
    <>
      <Footer
        headerSectionData={headerSectionData}
        innerSiteNavigationData={innerSiteNavigationData}
        innerSitePopularSearchesData={innerSitePopularSearchesData}
        bottomSectionData={bottomSectionData}
        termsConditionDesk={termsConditionDesk}
        termsConditionMobile={termsConditionMobile}
      />
    </>
  );
};
