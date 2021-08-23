import { Accordian } from './Accordion';

export default {
  title: 'components/Accordian',
  component: Accordian,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Qyfj8WERcUzRaLpci6o2sB/Netflix-FAQ-Copy?node-id=0%3A62',
    },
  },
};

const Template = args => <Accordian {...args}/>;

export const Basic = Template.bind({});

Basic.args = {
  
};
