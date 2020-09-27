import styled from 'styled-components';
import slideTop from '../generic';

const ModalDiv = styled.div`
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

/* Modal Content/Box */
const ModalContent = styled.div`
  background-color: #fefefe;
  border: 1px solid #888;
  width: 100%;
`

const ModalTitle = styled.h3`
  color: #ddd;
  text-align: center;
`

const ModalImage = styled.img`
  margin: 0 auto;
  width: 100%;e
  animation: ${slideTop} 5s 1;
`

/* The Close Button */
const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`

/* .close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
} */

export { ModalDiv, ModalTitle, ModalContent, ModalImage, Close }