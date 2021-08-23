import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
// import { BasicAccordianItem } from './AccordionItem.stories';

export default {
  title: 'components/Accordion',
  component: Accordion,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Qyfj8WERcUzRaLpci6o2sB/Netflix-FAQ-Copy?node-id=0%3A62',
    },
  },
};

const Template = args => <Accordion {...args}/>;

export const Basic = Template.bind({});

Basic.args = {
  // children: [<AccordionItem />]
};