import React, { useEffect } from 'react'
import Portal from './Portal'
import styled, { createGlobalStyle } from 'styled-components'
import BodyOverflowControl from './BodyOverflowControl'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const StyledBackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.25);
    z-index: 998
`

const StyledModal = styled.div` 
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999
`

const StyledModalContainer = styled.div`
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme, bgColor })=> bgColor ?? theme.colors.background.primary };
`

export default function Modal({ text, onClose, isOpen, bgColor, setBgColor }) {
    // useEffect(()=>{
    //     const openedModals = document.getElementById('modal-root')
    //     const body = document.getElementsByTagName('body')[0];
    //     if(isOpen){
    //         body.style = "overflow: hidden;"
    //     }

    //     return ()=>{
    //         if(isOpen && openedModals.children.length === 0){
    //             console.log(isOpen, openedModals, openedModals.children)
    //             body.style = '';
    //         }
    //     }
    // }, [isOpen])
    
    if(!isOpen) return null
   
    return (
        <Portal>
            {/* <GlobalStyle/> */}
            <BodyOverflowControl>
                <StyledBackDrop/>
                <StyledModal>
                    <StyledModalContainer bgColor={bgColor}>
                    <h2>Modal {text}</h2>
                    <button onClick={onClose}>Close modal</button>
                    <button onClick={()=>setBgColor('green')}>CHANGE COLOR</button>
                    </StyledModalContainer>
                </StyledModal>
          </BodyOverflowControl>
        </Portal>
    )
}
