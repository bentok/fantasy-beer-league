module App

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Import.Browser
open Fable.Import.React
open Fable.Helpers.React
open Fable.Helpers.React.Props

// -- [BEGIN] part to replace
let init() =
    let element = str "Hello 🌍"
    ReactDom.render(element, document.getElementById("elmish-app"))
// -- [END] part to replace

init()