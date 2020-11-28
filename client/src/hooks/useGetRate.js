import React from 'react'
import api from '../utils/api'

export const useGetRate = () => {
    const [rates, setRates] = React.useState()

    React.useEffect(() => {
        api.get('/api/rate').then((res) => setRates(res.data.Valute))
    }, [])

    const getRate = (dollars, toVal) => {
        if (rates) {
            const inRub = dollars * rates.USD.Value * rates.USD.Nominal
            if (!rates[toVal]) {
                return Number(inRub.toFixed(2)).toLocaleString()
            } else {
                const res = ((inRub / rates[toVal].Value) * rates[toVal].Nominal).toFixed(2)
                return Number(res).toLocaleString()
            }
        }
    }

    return [getRate]
}
