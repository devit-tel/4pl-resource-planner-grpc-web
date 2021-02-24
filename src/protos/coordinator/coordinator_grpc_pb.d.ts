// GENERATED CODE -- DO NOT EDIT!

// package: coordinator
// file: protos/coordinator/coordinator.proto

import * as protos_coordinator_coordinator_pb from "../../protos/coordinator/coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICoordinatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setScoutRule: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  listScoutRule: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, protos_coordinator_coordinator_pb.Rule>;
  deleteScoutRule: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  scout: grpc.MethodDefinition<protos_coordinator_coordinator_pb.Rule, protos_coordinator_coordinator_pb.Candidates>;
  scoutThenOptimize: grpc.MethodDefinition<protos_coordinator_coordinator_pb.OptimizeRule, protos_coordinator_coordinator_pb.IntList>;
}

export const CoordinatorService: ICoordinatorService;

export interface ICoordinatorServer extends grpc.UntypedServiceImplementation {
  setScoutRule: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  listScoutRule: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, protos_coordinator_coordinator_pb.Rule>;
  deleteScoutRule: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  scout: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.Rule, protos_coordinator_coordinator_pb.Candidates>;
  scoutThenOptimize: grpc.handleUnaryCall<protos_coordinator_coordinator_pb.OptimizeRule, protos_coordinator_coordinator_pb.IntList>;
}

export class CoordinatorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setScoutRule(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setScoutRule(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setScoutRule(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listScoutRule(argument: google_protobuf_empty_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<protos_coordinator_coordinator_pb.Rule>;
  listScoutRule(argument: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<protos_coordinator_coordinator_pb.Rule>;
  deleteScoutRule(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteScoutRule(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteScoutRule(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  scout(argument: protos_coordinator_coordinator_pb.Rule, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.Candidates>): grpc.ClientUnaryCall;
  scout(argument: protos_coordinator_coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.Candidates>): grpc.ClientUnaryCall;
  scout(argument: protos_coordinator_coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.Candidates>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: protos_coordinator_coordinator_pb.OptimizeRule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_coordinator_coordinator_pb.IntList>): grpc.ClientUnaryCall;
}
