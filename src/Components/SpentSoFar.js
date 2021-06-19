import React from 'react'

export default function SpentSoFar({transactions}) {
    const total = transactions.reduce((a, b) => a + parseFloat(b.amount), 0)
    console.log(total)
    return (
        <div>
            total amount: ${total.toLocaleString()}
        </div>
    )
}
