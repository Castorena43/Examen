'use strict'
const Client = require('node-rest-client').Client;
class MarvelController {
  async consumir({ response }) {
    const client = new Client()
    // const dataa = [];
    // client.get(`https://gateway.marvel.com/v1/public/characters?ts=1&
    // apikey=4c74856234b09b8624d5a120acfef8de&hash=f82b5f7b53e3730c5098a424ca19675e`, function(data, response){
    //   dataa = data
    // })
    const hash = "f82b5f7b53e3730c5098a424ca19675e"
    const api = "4c74856234b09b8624d5a120acfef8de"
    let enviorequest = function(){
      return new Promise(function(resolve, reject){
          client.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey="+ api +"&hash="+hash,function(data, res){
              resolve(data);
          });
      });
    };
    let result = await enviorequest()
    return response.status(200).json(result)
  }
}

module.exports = MarvelController
