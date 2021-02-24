// package: coordinator
// file: protos/coordinator/coordinator.proto

import * as protos_coordinator_coordinator_pb from "../../protos/coordinator/coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CoordinatorSetScoutRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoordinatorListScoutRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof protos_coordinator_coordinator_pb.Rule;
};

type CoordinatorDeleteScoutRule = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoordinatorScout = {
  readonly methodName: string;
  readonly service: typeof Coordinator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_coordinator_coordinator_pb.Rule;
  readonly responseType: typeof protos_coordinator_coordinator_pb.Candidates;
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
  static readonly SetScoutRule: CoordinatorSetScoutRule;
  static readonly ListScoutRule: CoordinatorListScoutRule;
  static readonly DeleteScoutRule: CoordinatorDeleteScoutRule;
  static readonly Scout: CoordinatorScout;
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
  setScoutRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setScoutRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listScoutRule(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<protos_coordinator_coordinator_pb.Rule>;
  deleteScoutRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteScoutRule(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  scout(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.Candidates|null) => void
  ): UnaryResponse;
  scout(
    requestMessage: protos_coordinator_coordinator_pb.Rule,
    callback: (error: ServiceError|null, responseMessage: protos_coordinator_coordinator_pb.Candidates|null) => void
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

