// package: coordinator
// file: coordinator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as coordinator_pb from "./coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICoordinatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setExecRule: ICoordinatorService_ISetExecRule;
    getExecRuleByName: ICoordinatorService_IGetExecRuleByName;
    listExecRule: ICoordinatorService_IListExecRule;
    deleteExecRule: ICoordinatorService_IDeleteExecRule;
    exec: ICoordinatorService_IExec;
    scoutThenOptimize: ICoordinatorService_IScoutThenOptimize;
}

interface ICoordinatorService_ISetExecRule extends grpc.MethodDefinition<coordinator_pb.Rule, google_protobuf_empty_pb.Empty> {
    path: "/coordinator.Coordinator/SetExecRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coordinator_pb.Rule>;
    requestDeserialize: grpc.deserialize<coordinator_pb.Rule>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICoordinatorService_IGetExecRuleByName extends grpc.MethodDefinition<coordinator_pb.Rule, coordinator_pb.Rule> {
    path: "/coordinator.Coordinator/GetExecRuleByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coordinator_pb.Rule>;
    requestDeserialize: grpc.deserialize<coordinator_pb.Rule>;
    responseSerialize: grpc.serialize<coordinator_pb.Rule>;
    responseDeserialize: grpc.deserialize<coordinator_pb.Rule>;
}
interface ICoordinatorService_IListExecRule extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, coordinator_pb.RulesList> {
    path: "/coordinator.Coordinator/ListExecRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<coordinator_pb.RulesList>;
    responseDeserialize: grpc.deserialize<coordinator_pb.RulesList>;
}
interface ICoordinatorService_IDeleteExecRule extends grpc.MethodDefinition<coordinator_pb.Rule, google_protobuf_empty_pb.Empty> {
    path: "/coordinator.Coordinator/DeleteExecRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coordinator_pb.Rule>;
    requestDeserialize: grpc.deserialize<coordinator_pb.Rule>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICoordinatorService_IExec extends grpc.MethodDefinition<coordinator_pb.Rule, coordinator_pb.ExecResult> {
    path: "/coordinator.Coordinator/Exec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coordinator_pb.Rule>;
    requestDeserialize: grpc.deserialize<coordinator_pb.Rule>;
    responseSerialize: grpc.serialize<coordinator_pb.ExecResult>;
    responseDeserialize: grpc.deserialize<coordinator_pb.ExecResult>;
}
interface ICoordinatorService_IScoutThenOptimize extends grpc.MethodDefinition<coordinator_pb.OptimizeRule, coordinator_pb.IntList> {
    path: "/coordinator.Coordinator/ScoutThenOptimize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coordinator_pb.OptimizeRule>;
    requestDeserialize: grpc.deserialize<coordinator_pb.OptimizeRule>;
    responseSerialize: grpc.serialize<coordinator_pb.IntList>;
    responseDeserialize: grpc.deserialize<coordinator_pb.IntList>;
}

export const CoordinatorService: ICoordinatorService;

export interface ICoordinatorServer {
    setExecRule: grpc.handleUnaryCall<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
    getExecRuleByName: grpc.handleUnaryCall<coordinator_pb.Rule, coordinator_pb.Rule>;
    listExecRule: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, coordinator_pb.RulesList>;
    deleteExecRule: grpc.handleUnaryCall<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
    exec: grpc.handleUnaryCall<coordinator_pb.Rule, coordinator_pb.ExecResult>;
    scoutThenOptimize: grpc.handleUnaryCall<coordinator_pb.OptimizeRule, coordinator_pb.IntList>;
}

export interface ICoordinatorClient {
    setExecRule(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getExecRuleByName(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    getExecRuleByName(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    getExecRuleByName(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    listExecRule(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    listExecRule(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    listExecRule(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    deleteExecRule(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    exec(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    exec(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    exec(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    scoutThenOptimize(request: coordinator_pb.OptimizeRule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
    scoutThenOptimize(request: coordinator_pb.OptimizeRule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
    scoutThenOptimize(request: coordinator_pb.OptimizeRule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
}

export class CoordinatorClient extends grpc.Client implements ICoordinatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setExecRule(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getExecRuleByName(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    public getExecRuleByName(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    public getExecRuleByName(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.Rule) => void): grpc.ClientUnaryCall;
    public listExecRule(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    public listExecRule(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    public listExecRule(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.RulesList) => void): grpc.ClientUnaryCall;
    public deleteExecRule(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteExecRule(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public exec(request: coordinator_pb.Rule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    public exec(request: coordinator_pb.Rule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    public exec(request: coordinator_pb.Rule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.ExecResult) => void): grpc.ClientUnaryCall;
    public scoutThenOptimize(request: coordinator_pb.OptimizeRule, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
    public scoutThenOptimize(request: coordinator_pb.OptimizeRule, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
    public scoutThenOptimize(request: coordinator_pb.OptimizeRule, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coordinator_pb.IntList) => void): grpc.ClientUnaryCall;
}
