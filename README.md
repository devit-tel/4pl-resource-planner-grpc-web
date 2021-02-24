```sh

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:./src" --ts_out="service=grpc-node:./src" protos/coordinator/coordinator.proto

```
