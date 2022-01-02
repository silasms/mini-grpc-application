const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')


const protoObject = protoLoader.loadSync(path.resolve(__dirname, 'pb', 'lion.proto'))
const userClient = grpc.loadPackageDefinition(protoObject)

module.exports.client = new userClient.LoginService('localhost:50051', grpc.credentials.createInsecure())
