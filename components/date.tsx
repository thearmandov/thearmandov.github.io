import React from 'react'
import { parseISO, format } from 'date-fns'

interface DateProps {
    dateString: string
}

const DateComponent: React.FC<DateProps> = ({ dateString}) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{ format(date, 'LLL d, yyy')}</time>
}

export default DateComponent