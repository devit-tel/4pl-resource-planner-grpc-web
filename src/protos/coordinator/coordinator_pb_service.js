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

Coordinator.SetScoutRule = {
  methodName: "SetScoutRule",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: google_protobuf_empty_pb.Empty
};

Coordinator.ListScoutRule = {
  methodName: "ListScoutRule",
  service: Coordinator,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: protos_coordinator_coordinator_pb.Rule
};

Coordinator.DeleteScoutRule = {
  methodName: "DeleteScoutRule",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: google_protobuf_empty_pb.Empty
};

Coordinator.Scout = {
  methodName: "Scout",
  service: Coordinator,
  requestStream: false,
  responseStream: false,
  requestType: protos_coordinator_coordinator_pb.Rule,
  responseType: protos_coordinator_coordinator_pb.Candidates
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

CoordinatorClient.prototype.setScoutRule = function setScoutRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.SetScoutRule, {
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

CoordinatorClient.prototype.listScoutRule = function listScoutRule(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Coordinator.ListScoutRule, {
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

CoordinatorClient.prototype.deleteScoutRule = function deleteScoutRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.DeleteScoutRule, {
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

CoordinatorClient.prototype.scout = function scout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Coordinator.Scout, {
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

