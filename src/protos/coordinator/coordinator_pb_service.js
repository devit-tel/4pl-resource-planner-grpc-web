// package: coordinator
// file: protos/coordinator/coordinator.proto

var protos_coordinator_coordinator_pb = require("../../protos/coordinator/coordinator_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Coordinator = (function () {
  function Coordinator() {}
  Coordinator.serviceName = "coordinator.Coordinator";
  return Coordinator;
}());

Coordinator.SetExecRule = {
  methodName: "SetExecRule",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: google_protobuf_empty_pb.Empty
};

Coordinator.ListExecRule = {
  methodName: "ListExecRule",
  service: Coordinator,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: protos_coordinator_coordinator_pb.Rule
};

Coordinator.DeleteExecRule = {
  methodName: "DeleteExecRule",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: google_protobuf_empty_pb.Empty
};

Coordinator.Exec = {
  methodName: "Exec",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: protos_coordinator_coordinator_pb.ExecResult
};

Coordinator.ScoutThenOptimize = {
  methodName: "ScoutThenOptimize",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.OptimizeRule,
  responseType: protos_coordinator_coordinator_pb.IntList
};

exports.Coordinator = Coordinator;

function CoordinatorClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CoordinatorClient.prototype.setExecRule = function setExecRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.SetExecRule, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CoordinatorClient.prototype.listExecRule = function listExecRule(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Coordinator.ListExecRule, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

CoordinatorClient.prototype.deleteExecRule = function deleteExecRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.DeleteExecRule, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CoordinatorClient.prototype.exec = function exec(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.Exec, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CoordinatorClient.prototype.scoutThenOptimize = function scoutThenOptimize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.ScoutThenOptimize, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CoordinatorClient = CoordinatorClient;

