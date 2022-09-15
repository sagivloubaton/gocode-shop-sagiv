export type productType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: ratingType
}
type ratingType = {
    rate: string,
    count: number
}