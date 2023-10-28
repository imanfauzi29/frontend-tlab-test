import React, { useEffect } from "react";
import { useState } from "react";
import List from "./components/List"
import Layout from "./components/layout/Index"
import type { Category, GameParams, GameResponse } from "./types/games";
import type { OptionsType} from "./types/options";
import { getListGames } from "./services/games";
import Select from 'react-select'
import {filterListOptions} from "./utils/options"

function App() {
  const [data, setData] = useState<GameResponse[]>([]);
  const [params, setParams] = useState<string>();
  
  
  useEffect(() => {
    getDataGames()
  }, []);
  
  const getDataGames = async (params?: GameParams) => {
    await getListGames(params).then(res => {
      const response = res.data
      setData(response)
    })
  }

  const handleChangeFilter = async (value: OptionsType<Category> | null) => {
    if (!value) return;

    const params = {
      category: value.value
    }
    await getDataGames(params)
    setParams(value.value)
  }
  return (
    <>
    <Layout>
      <div className="flex flex-col bg-blue-400 py-[58px] pb-52">
        <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <h1 className="text-2xl font-bold w-44">Pilih Game Favorite Kalian</h1>
            <p className="w-full">Shortbread cookie tootsie roll sugar plum cheesecake pudding croissant apple pie. Lollipop macaroon lollipop croissant chocolate cake croissant fruitcake brownie jelly-o.</p>
        </div>
        <hr className="mt-10 text-white" />
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg -mt-44">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-white">Daftar Game</h2>
          <Select options={filterListOptions} onChange={handleChangeFilter} className="min-w-[200px]" placeholder="Filter game..." defaultValue={filterListOptions.filter(list => list.value === params)} />
        </div>
        <List data={data} />
      </div>
    </Layout>
    </>
  )
}

export default App
