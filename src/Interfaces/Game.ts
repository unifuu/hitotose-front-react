export interface Game {
    id: string,
    title: string,
    genres: string[],
    platform: string,
    developer_id: string,
    publisher_id: string,
    status: string,
    played_time: number,
    beat_time: number,
    ranking: number,
    rating: string,
    developer: string,
    publisher: string
}