
import { AButton } from '.';

import styled from 'styled-components';

export default {
  title: 'Button',
  component: AButton,
  parameters: {
    docs: {
      description: {
        component:
          'Use as variations of the <strong>Button</strong> component in modals, forms, etc. This component has different styles and variations.',
      },
    },
  },
};

const ComponentContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

export const Button= ({ type, size, disabled, width }) => (
  <ComponentContainer>
    <AButton
      size={size}
      disabled={disabled}
      type={type}
      width={width}
      key={Math.random()}
      clickCb={() => alert('Botão foi clicado')}
    >
      Botão
    </AButton>
  </ComponentContainer>
);

Button.args = {
  type: 'default',
  size: 'medium',
  disabled: false,
  width: 'children',
};

export const Colors = () => (
  <ComponentContainer>
    <AButton>Default</AButton>
    <AButton type="warning">Warning</AButton>
    <AButton type="black">Black</AButton>
    <AButton type="outlined">Outlined</AButton>
  </ComponentContainer>
);

export const Disabled = () => (
  <ComponentContainer>
    <AButton disabled>Disabled</AButton>
  </ComponentContainer>
);

export const Size = () => (
  <ComponentContainer>
    <AButton size="small">Small</AButton>
    <AButton size="medium">Medium</AButton>
    <AButton size="large">Large</AButton>
  </ComponentContainer>
);

export const Width = () => (
  <ComponentContainer>
    <AButton width="children">Children</AButton>
    <AButton width="block">Block</AButton>
  </ComponentContainer>
);