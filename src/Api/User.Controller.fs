module UserController

open Suave
open Suave.Filters
open Suave.Operators
open Suave.Successful
open Suave.ServerErrors
open Suave.Writers
open Newtonsoft.Json

open UserRepository
open Auth
    
//low level functions
let getString (rawForm: byte[]) =
    System.Text.Encoding.UTF8.GetString(rawForm)

let fromJson<'a> json =
    JsonConvert.DeserializeObject(json, typeof<'a>) :?> 'a

let getUser id =
    UserRepository.readOnId
    |> JsonConvert.SerializeObject
    |> OK
    >=> setMimeType "application/json"

let createUser =
    request (fun r ->
    r.rawForm
    |> getString
    |> fromJson<UserRepository.User>
    |> UserRepository.create
    |> JsonConvert.SerializeObject
    |> CREATED )
    >=> setMimeType "application/json"

let updateUser =
    request (fun r ->
    r.rawForm
    |> getString
    |> fromJson<UserRepository.User>
    |> UserRepository.updateOneOnEmail
    |> JsonConvert.SerializeObject
    |> OK )
    >=> setMimeType "application/json"

let deleteUser id =
    UserRepository.deleteOnId
    |> JsonConvert.SerializeObject
    |> OK
    >=> setMimeType "application/json"

let login =
    request (fun r ->
    r.rawForm
    |> getString
    |> fromJson<Login>
    |> Auth.hash
    // TODO: Get user from User repository
    |> JsonConvert.SerializeObject
    |> OK)
    >=> setMimeType "application/json"

let handlers =
    choose [ 
        GET >=> choose
            [ pathScan "/user/%d" getUser ]

        POST >=> choose
            [ path "/user" >=> createUser
              path "/login" >=> login ]

        PUT >=> choose
            [ path "/user" >=> updateUser ]

        DELETE >=> choose
            [ pathScan "/user/%d" deleteUser ]
        ]