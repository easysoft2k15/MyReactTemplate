const path=require("path");

module.exports=
{
    entry:  path.resolve("dev","index.jsx"),
    output: 
    {
        path: path.resolve("output"),
        filename: "bundle.js"
    },
    module:
    {
        loaders:
        [
            {
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    }
}