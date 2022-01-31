import React, { useEffect, useState } from 'react'

import {
    TransactionStatusType,
    subscribeTransactionStatus,
    ApplicationErrors,
    niceError
} from 'businessobjects/TransactionStatus'

export { TransactionStatusType }

export default function ShowTransactionStatus(props: { onError?: (status: TransactionStatusType) => JSX.Element }) {
    const [status, set_status] = useState<TransactionStatusType>()

    useEffect(() => {
        const subcription = subscribeTransactionStatus(set_status)
        return () => subcription.unsubscribe()
    }, [])

    if (status != undefined && status?.code != ApplicationErrors.None) {
        return <div style={{ padding: 10 }}>
            <div style={{
                fontSize: 14,
                color: 'red',
                textAlign: 'center',
            }}>{status.message} {niceError(status?.code)}</div>
            {props.onError != undefined && props.onError(status)}
        </div>
    }
    else {
        return null
    }
}