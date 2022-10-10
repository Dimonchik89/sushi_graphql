const stream = require("stream");
const s3 = require("./bucket");

const createUploadStream = (key) => {
    const pass = new stream.PassThrough()
    return {
        writeStream: pass,
        promise: s3
            .upload({
                Bucket: "",
                Key: key,
                Body: pass
            })
            .promise()
    }
}
module.exports = createUploadStream