module Auth

open System.Security.Cryptography
open System.Text

type Login =
    {
        email: string
        password: string
    }

let hash (input : Login) =
    input.password
    |> Encoding.UTF8.GetBytes
    |> SHA256Managed.Create().ComputeHash
    |> Array.map (fun (x : byte) -> System.String.Format("{0:X2}", x))
    |> String.concat System.String.Empty
    |> fun p -> { email=input.email; password=p}