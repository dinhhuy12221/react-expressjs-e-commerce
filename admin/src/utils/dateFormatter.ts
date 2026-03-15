const dateFormatter = (date: Date) => {
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}

export default dateFormatter;