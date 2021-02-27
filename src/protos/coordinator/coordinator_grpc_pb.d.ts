// GENERATED CODE -- DO NOT EDIT!

// package: coordinator
// file: protos/coordinator/coordinator.proto

import * as protos_coordinator_coordinator_pb from "../../protos/coordinator/coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICoordinatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setExecRule: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  listExecRule: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, protos_coordinator_coordinator_pb.Rule>;
  deleteExecRule: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  exec: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, protos_coordinator_coordinator_pb.ExecResult>;
  scoutThenOptimize: grpc.MethodDefinition<protos_coordinator_coordinator_pb.OptimizeRule, protos_coordinator_coordinator_pb.IntList>;
}

export const CoordinatorService: ICoordinatorService;

export interface ICoordinatorServer extends grpc.UntypedServiceImplementation {
  setExecRule: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  listExecRule: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, protos_coordinator_coordinator_pb.Rule>;
  deleteExecRule: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  exec: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, protos_coordinator_coordinator_pb.ExecResult>;
  scoutThenOptimize: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.OptimizeRule, protos_coordinator_coordinator_pb.IntList>;
}

export class CoordinatorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setExecRule(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setExecRule(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setExecRule(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listExecRule(argument: google_protobuf_empty_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<protos_coordinator_coordinator_pb.Rule>;
  listExecRule(argument: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<protos_coordinator_coordinator_pb.Rule>;
  deleteExecRule(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExecRule(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExecRule(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  exec(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  exec(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  exec(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
}
