import React from 'react'
import Portal from './Portal'
import styled from 'styled-components'

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
`

export default function Modal({ text, onClose, isOpen }) {
    if(!isOpen) return null

    return (
        <Portal>
          <StyledModalContainer>
            <h2>Modal {text}</h2>
            <button onClick={onClose}>Close modal</button>
          </StyledModalContainer>
        </Portal>
    )
}
