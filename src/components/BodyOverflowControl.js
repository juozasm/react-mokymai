import { useEffect } from 'react'

export default function BodyOverflowControl({ children }) {
    useEffect(()=>{
        const openedModals = document.getElementById('modal-root')
        const body = document.getElementsByTagName('body')[0];
        body.style = "overflow: hidden;"

        return ()=>{
            if(openedModals.children.length === 0){
                body.style = '';
            }
        }
    }, [])

    return children
}
