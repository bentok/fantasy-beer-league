module Api

open Suave
open UserController
        

//setup app routes
let app =
    choose [
      UserController.handlers ]
        

[<EntryPoint>]
let main argv =
    startWebServer defaultConfig app
    0
