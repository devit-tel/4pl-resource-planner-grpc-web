```sh
curl -o /usr/local/bin/protoc-gen-grpc-web -L https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64
chmod 755 /usr/local/bin/protoc-gen-grpc-web
```

```sh
# Directory to write generated code to (.js and .d.ts files)
# OUT_DIR="./src/grpc-web"

protoc coordinator.proto \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs:"./src/grpc-node" \
    --ts_out="./src/grpc-node"

protoc coordinator.proto \
    --js_out=import_style=commonjs:"./src/grpc-web" \
    --grpc-web_out=import_style=typescript,mode=grpcweb:"./src/grpc-web"

```
