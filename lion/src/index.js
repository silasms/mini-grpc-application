const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')
const implementations = require('./implementations/implementations')

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'messages.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)
const proto = grpc.loadPackageDefinition(packageDefinition)
const server = new grpc.Server()
server.addService(proto.LoginService.service, implementations)



server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log('Server running 127.0.0.1:50051')
    server.start()
})

