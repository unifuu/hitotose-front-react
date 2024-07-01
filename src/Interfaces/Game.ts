export interface Game {
    id: string,
    title: string,
    genres: string[],
    platform: string,
    developer_id: string,
    publisher_id: string,
    status: string,
    played_time: number,
    how_long_to_beat: number,
    ranking: number,
    rating: number,
    developer: string,
    publisher: string
}