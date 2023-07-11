import React from 'react';
import PrimaryAccordion from '../../components/Accordion';

const defaultFAQValue = {
  concept: false,
  start: false,
  whowork: false,
  notprovide: false,
  browsersupport: false,
  bugreport: false,
};

const faqdata = [
  {
    target: 'concept',
    title: 'What is the Flipr Design System?',
    content:
      'The Flipr Design System is a collection of brand guidelines, components, and resource that was created to help us build products for our customers more efficiently. It is intended to be the single source of the truth for product teams working on Flipr products across the company to ensure we&apos; re designing and developing consistently, and collaboratively.',
  },
  {
    target: 'start',
    title: 'How do I start using the Flipr Design System?',
    content:
      'Getting Started Guides are available for both <a href="/?path=/story/getting-started--designer">Designers</a> and <a href="/?path=/story/getting-started--developers">Developers</a>. Please of these of of these pages to find out more information about how to get up and running with the with the Audi Design System. If further assistance is required, please refer to the page.',
  },
  {
    target: 'whowork',
    title: 'Who works on the Flipr Design System?',
    content:
      'The Flipr Design System is a collection of brand guidelines, components, and resource that was created to help us build products for our customers more efficiently. It is intended to be the single source of the truth for product teams working on Flipr products across the company to ensure we&apos; re designing and developing consistently, and collaboratively.',
  },
  {
    target: 'notprovide',
    title: "What do I do if the Component Library doesn't provide the components I need?",
    content:
      'New components are being developed each Sprint. Please see the <a href="/?path=/story/roadmap">Roadmap</a> to see which components are next to be developed. If you have a special requirement, contact us using the email address included on the <a href="/?path=/story/contact-us">Contact Us</a>page. If the the the the <a href="/?path=/story/roadmap">Roadmap</a> does not incorporate a need that a team has, they are free to develop their own React components, which at a later stage could potentially be added to the Design System. If developing a new component, please ensure it adheres to Flipr&apos;s Brand and User Interface guidelines.',
  },
  {
    target: 'browsersupport',
    title: 'Which browsers the Flipr Design System supports?',
    content:
      'Please visit the <a href="/?path=/story/guidelines--browser-support">Browser Support page</a> to see which browsers the Flipr Design System supports.',
  },
  {
    target: 'bugreport',
    title: 'How do I report a bug?',
    content:
      'Our team is working on a process to formalize bug submission at the moment. Until that process is established, please email te team with the following information: <Text font="body_sm" color="text_secondary"> &#x2022; Component name </Text> <Text font="body_sm" color="text_secondary">&#x2022;Steps to reproduce </Text><Text font="body_sm" color="text_secondary">&#x2022;Browser</Text><Text font="body_sm" color="text_secondary">&#x2022;Operating System</Text><Text font="body_sm" color="text_secondary">&#x2022;Supporting materials (e.g. a video oro screenshot)</Text>',
  },
];

export const faqs = () => {
  return (
    <>
      <PrimaryAccordion data={faqdata} initialData={defaultFAQValue} style={{ width: 'inherit' }} />
    </>
  );
};
export default {
  title: 'Frequently Asked Questions',
  argTypes: {},
};
