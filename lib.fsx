#r "node_modules/fable-core/fable.core.dll"

open Fable.Core
open Fable.Import.Browser

let getData()=
    seq { for i=0 to 30 do yield i}
    |> Seq.toArray
