const promises = (products, setMessage, setIsSuccess, setIsLoading, setIsFinished, setCurrentProduct) => {
    const productsResponse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 300);
    });

    productsResponse
        .then((result) => {
            console.log(result)
            setIsSuccess(true)
            setMessage(`Result is correct ${JSON.stringify(result)}`)
            setCurrentProduct(result)
        })
        .catch((err) => {
            setMessage(`Error: ${err}`)
            setIsSuccess(false)
        })
        .finally(() => {
            setIsFinished(true)
            setIsLoading(false)
        })
}

export default promises
