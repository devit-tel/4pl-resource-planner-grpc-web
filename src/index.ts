import * as grpc from "@grpc/grpc-js";
import * as coordinatorService from "./protos/coordinator/coordinator_pb_service";

export const newCoordinatorClient = (host: string) => {
  return new coordinatorService.CoordinatorClient(
    host,
    grpc.credentials.createInsecure()
  );
};
