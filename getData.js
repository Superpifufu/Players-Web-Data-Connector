import fetch from "node-fetch" 
import { cleanData } from './cleanData.js'
  

const getData = async (pageCount = 10) => {  

  // fetch team data for Manchester united (id is 14)
  let url = new URL('https://api.sportmonks.com/v3/football/teams/14') 
  url.searchParams.append('api_token', process.env['TOKEN'] ) 
  url.searchParams.append('include', 'venue;league') 
  let response = await fetch(url.href ) 
  let json = await response.json() 

  // fetch all players for Manchester united
  let players = json.data.players.map(async player =>{
    let playerId = player.player_id
    let url = new URL('https://api.sportmonks.com/v3/football/players/'+playerId)
    url.searchParams.append('api_token', process.env.TOKEN) 
    let response = await fetch(url.href)
    let json = await response.json() 
    return cleanData(json.data )
  })
  
  return await Promise.all(players)  
    
}

export { getData } 