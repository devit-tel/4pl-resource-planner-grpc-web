// package: coordinator
// file: protos/coordinator/coordinator.proto

import * as protos_coordinator_coordinator_pb from "../../protos/coordinator/coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CoordinatorSetExecRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoordinatorListExecRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof protos_coordinator_coordinator_pb.Rule;
};

type CoordinatorDeleteExecRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoordinatorExec = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof protos_coordinator_coordinator_pb.ExecResult;
};

type CoordinatorScoutThenOptimize = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.OptimizeRule;
  readonly responseType: typeof protos_coordinator_coordinator_pb.IntList;
};

export class Coordinator {
  static readonly serviceName: string;
  static readonly SetExecRule: CoordinatorSetExecRule;
  static readonly ListExecRule: CoordinatorListExecRule;
  static readonly DeleteExecRule: CoordinatorDeleteExecRule;
  static readonly Exec: CoordinatorExec;
  static readonly ScoutThenOptimize: CoordinatorScoutThenOptimize;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CoordinatorClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setExecRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setExecRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listExecRule(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<protos_coordinator_coordinator_pb.Rule>;
  deleteExecRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteExecRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.ExecResult|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.ExecResult|null) => void
  ): UnaryResponse;
  scoutThenOptimize(
    requestMessage: protos_coordinator_coordinator_pb.OptimizeRule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.IntList|null) => void
  ): UnaryResponse;
  scoutThenOptimize(
    requestMessage: protos_coordinator_coordinator_pb.OptimizeRule,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.IntList|null) => void
  ): UnaryResponse;
}

