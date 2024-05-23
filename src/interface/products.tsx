export interface data {
    page: number
    limit: number
    name?: string
}

export interface Request {
    get_products: (data: data) => any
}

export interface ProductStore {
    data:any[],
    getProducts: (data: data) => void
}