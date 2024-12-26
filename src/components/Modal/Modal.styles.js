// src/components/Modal/Modal.styles.js

import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;

export const VideoContainer = styled.div`
  margin-top: 20px;
`;






