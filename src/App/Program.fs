open System
open Api

[<EntryPoint>]
let main argv =
    Api.main argv |> ignore

    0