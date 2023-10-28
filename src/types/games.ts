export type Category = 'mmorpg' | 'shooter' | 'strategy' | 'moba' | "racing" | 'sports' | 'social'
export type GameParams = {
    category: Category
}

export type GameResponse = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}
