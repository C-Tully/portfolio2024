import React from 'react';
import Header from './Header'; // Ensure this path is correct

// Default export for the story
export default {
  title: 'Components/Header', // This organizes the component under the "Components" category in Storybook
  component: Header,
};

// Template for rendering the Header component
const Template = (args) => <Header {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Storybook',
};

// Additional stories can be added below, using Template.bind({}) for different variations

// Example with a custom title
export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Header Title',
};
