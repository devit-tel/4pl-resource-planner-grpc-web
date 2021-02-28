/**
 * @fileoverview gRPC-Web generated client stub for coordinator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as coordinator_pb from './coordinator_pb';


export class CoordinatorClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSetExecRule = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: coordinator_pb.Rule) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/SetExecRule',
        request,
        metadata || {},
        this.methodInfoSetExecRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/SetExecRule',
    request,
    metadata || {},
    this.methodInfoSetExecRule);
  }

  methodInfoGetExecRuleByName = new grpcWeb.AbstractClientBase.MethodInfo(
    coordinator_pb.Rule,
    (request: coordinator_pb.Rule) => {
      return request.serializeBinary();
    },
    coordinator_pb.Rule.deserializeBinary
  );

  getExecRuleByName(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null): Promise<coordinator_pb.Rule>;

  getExecRuleByName(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: coordinator_pb.Rule) => void): grpcWeb.ClientReadableStream<coordinator_pb.Rule>;

  getExecRuleByName(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: coordinator_pb.Rule) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/GetExecRuleByName',
        request,
        metadata || {},
        this.methodInfoGetExecRuleByName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/GetExecRuleByName',
    request,
    metadata || {},
    this.methodInfoGetExecRuleByName);
  }

  methodInfoListExecRule = new grpcWeb.AbstractClientBase.MethodInfo(
    coordinator_pb.RulesList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    coordinator_pb.RulesList.deserializeBinary
  );

  listExecRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<coordinator_pb.RulesList>;

  listExecRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: coordinator_pb.RulesList) => void): grpcWeb.ClientReadableStream<coordinator_pb.RulesList>;

  listExecRule(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: coordinator_pb.RulesList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/ListExecRule',
        request,
        metadata || {},
        this.methodInfoListExecRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/ListExecRule',
    request,
    metadata || {},
    this.methodInfoListExecRule);
  }

  methodInfoDeleteExecRule = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: coordinator_pb.Rule) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteExecRule(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/DeleteExecRule',
        request,
        metadata || {},
        this.methodInfoDeleteExecRule,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/DeleteExecRule',
    request,
    metadata || {},
    this.methodInfoDeleteExecRule);
  }

  methodInfoExec = new grpcWeb.AbstractClientBase.MethodInfo(
    coordinator_pb.ExecResult,
    (request: coordinator_pb.Rule) => {
      return request.serializeBinary();
    },
    coordinator_pb.ExecResult.deserializeBinary
  );

  exec(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null): Promise<coordinator_pb.ExecResult>;

  exec(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: coordinator_pb.ExecResult) => void): grpcWeb.ClientReadableStream<coordinator_pb.ExecResult>;

  exec(
    request: coordinator_pb.Rule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: coordinator_pb.ExecResult) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/Exec',
        request,
        metadata || {},
        this.methodInfoExec,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/Exec',
    request,
    metadata || {},
    this.methodInfoExec);
  }

  methodInfoScoutThenOptimize = new grpcWeb.AbstractClientBase.MethodInfo(
    coordinator_pb.IntList,
    (request: coordinator_pb.OptimizeRule) => {
      return request.serializeBinary();
    },
    coordinator_pb.IntList.deserializeBinary
  );

  scoutThenOptimize(
    request: coordinator_pb.OptimizeRule,
    metadata: grpcWeb.Metadata | null): Promise<coordinator_pb.IntList>;

  scoutThenOptimize(
    request: coordinator_pb.OptimizeRule,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: coordinator_pb.IntList) => void): grpcWeb.ClientReadableStream<coordinator_pb.IntList>;

  scoutThenOptimize(
    request: coordinator_pb.OptimizeRule,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: coordinator_pb.IntList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/coordinator.Coordinator/ScoutThenOptimize',
        request,
        metadata || {},
        this.methodInfoScoutThenOptimize,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/coordinator.Coordinator/ScoutThenOptimize',
    request,
    metadata || {},
    this.methodInfoScoutThenOptimize);
  }

}

