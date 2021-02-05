import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root'); 

export default function Portal({ children }) {
    const [el] = useState(document.createElement('div'))
    
    useEffect(()=>{
        modalRoot.appendChild(el);
        return ()=> {
            modalRoot.removeChild(el)
        };
    }, [el])

    return createPortal(
        children,
        el
      );
}
