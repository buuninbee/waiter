const fetchProdutos = async (query) => {
    const API = ''
    const response = await fetch(`API${query}`)
    const data = await response.json()

    return data
}

export default fetchProdutos