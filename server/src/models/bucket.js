const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    region: "",
    credentials: {
        accessKeyId: "",
        secretAccessKey: ""
    }
})
module.exports = s3;