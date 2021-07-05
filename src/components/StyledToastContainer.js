import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const StyledToastContainer = ({
  className,
  ...rest
}) => (
  <div className={className}>
    <ToastContainer {...rest} newestOnTop />
  </div>
);

export const StyledToast = styled(StyledToastContainer)`
  .Toastify__toast--error {
    background: ${props => props.theme.colors.error} !important;
  }
  .Toastify__toast--warning {
    background: ${props => props.theme.colors.textPrimary} !important;
  }
  .Toastify__toast--success {
    background: ${props => props.theme.colors.primary} !important;
  }
  .Toastify__toast-body {
    font-family: 'Poppins', sans-serif;
  }
`;