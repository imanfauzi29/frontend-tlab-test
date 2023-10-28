import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { GameParams, GameResponse } from '../types/games'

const baseURL = 'https://free-to-play-games-database.p.rapidapi.com/api'

const headers = {
    'X-RapidAPI-Key': '6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

}

export const getListGames = async (params?: GameParams): Promise<AxiosResponse<GameResponse[]>> => {
    return await axios.get(`${baseURL}/games`, {
        params, headers
    })
}