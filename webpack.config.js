const path=require("path");

module.exports=
{
    entry:  path.resolve("dev_js","index.jsx"),
    output: 
    {
        path: path.resolve(__dirname, "output"),
        publicPath: "/output",
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