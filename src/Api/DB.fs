module DB

open MongoDB.Bson
open MongoDB.Driver
open MongoDB.FSharp

[<Literal>]
let ConnectionString = "mongodb://localhost:27017/fantasy-beer-league"

[<Literal>]
let DbName = "fantasyBeerLeague"

let client         = MongoClient(ConnectionString)
let db             = client.GetDatabase(DbName)