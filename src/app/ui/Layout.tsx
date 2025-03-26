import React from 'react';
import styled from 'styled-components';
import { useStore } from '../providers/ThemeProvider/themeStore';

const LayoutContainer = styled.div<{ theme: 'light' | 'dark' }>`
  text-align: center;
  background-color: ${(props) => (props.theme === 'light' ? '#f0f0f0' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  padding: 20px;

  a {
    color: ${(props) => (props.theme === 'light' ? '#007bff' : '#66b3ff')};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useStore((state) => state.theme);
  return <LayoutContainer theme={theme}>{children}</LayoutContainer>;
};

export default Layout;
