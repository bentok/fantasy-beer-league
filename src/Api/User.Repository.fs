module UserRepository

open MongoDB.Bson
open MongoDB.Driver
open MongoDB.FSharp

open DB

type User =
    {
        _id: BsonObjectId option
        FirstName: string
        LastName: string
        Email: string
        Nickname: string
    }

let CollectionName = "User"

let Collection = db.GetCollection<User>(CollectionName)

// Create 

// Single Creation
let create ( user : User ) = 
    Collection.InsertOne( user )

// Multiple Creation
let createMany ( users : User list ) =
    Collection.InsertMany( users )

// Read 

// Read Based On Id 
let readOnId ( id : BsonObjectId option ) = 
    Collection.Find(fun x -> x._id = id).ToEnumerable() 

// Read Based On Name 
let readOnEmail ( email : string ) = 
    Collection.Find(fun x -> x.Email = email).ToEnumerable() 

// Read Based On Name and Id
let readOnEmailAndId ( id : BsonObjectId option ) ( email : string ) =
    Collection.Find(fun x -> x._id = id && x.Email = email).ToEnumerable() 

// Read All 
let readAll =
    Collection.Find(Builders.Filter.Empty).ToEnumerable()

// Update

// Update One On Name
let updateOneOnEmail updated = 
    let filter           = 
        Builders<User>.Filter.Eq((fun x -> x.Email), updated.Email)
    let updateDefinition = 
        Builders<User>.Update.Set((fun x -> x), updated)
        
    Collection.UpdateOne(filter, updateDefinition)

// Update Many On Email
let updateManyOnEmail updated = 
    let filter           = 
        Builders<User>.Filter.Eq((fun x -> x.Email), updated.Email)
    let updateDefinition = 
        Builders<User>.Update.Set((fun x -> x), updated)
        
    Collection.UpdateMany(filter, updateDefinition)

// Delete

// Delete One On Id
let deleteOnId ( id : BsonObjectId option) =
    Collection.DeleteOne(fun x -> x._id = id)

// Delete Many on _i
let deleteManyOnId ( id : BsonObjectId option) = 
    Collection.DeleteMany(fun x -> x._id = id)

// Delete All 
let deleteAll = 
    Collection.DeleteMany(Builders.Filter.Empty)