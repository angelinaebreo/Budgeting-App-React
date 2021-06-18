import React from 'react'

export default function TotalAmount({transactions}) {
    const total = transactions.reduce((a, b) => a + b.amount, 0)
    console.log(total)
    return (
        <div>
            total amount: ${total.toLocaleString()}
        </div>
    )
}
