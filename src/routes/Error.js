import React from 'react'
import { useParams } from 'react-router-dom'

export default function Error() {
    const { error, status = '404' } = useParams()
    return (
        <div>
            <h1>{status === '404' ? 'Not found' : 'Something went wrong...' }</h1>
            {
                error && <p>Reason: {error}</p>
            }
        </div>
    )
}
