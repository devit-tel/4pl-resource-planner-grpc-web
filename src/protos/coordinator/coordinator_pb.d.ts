// package: coordinator
// file: protos/coordinator/coordinator.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Rule extends jspb.Message {
  hasInput(): boolean;
  clearInput(): void;
  getInput(): google_protobuf_struct_pb.Struct | undefined;
  setInput(value?: google_protobuf_struct_pb.Struct): void;

  getScript(): string;
  setScript(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    input?: google_protobuf_struct_pb.Struct.AsObject,
    script: string,
    name: string,
  }
}

export class OptimizeRule extends jspb.Message {
  hasInput(): boolean;
  clearInput(): void;
  getInput(): google_protobuf_struct_pb.Struct | undefined;
  setInput(value?: google_protobuf_struct_pb.Struct): void;

  getGetvehiclesscript(): string;
  setGetvehiclesscript(value: string): void;

  getGetcustomersscript(): string;
  setGetcustomersscript(value: string): void;

  getGetvehicleslatlngsscript(): string;
  setGetvehicleslatlngsscript(value: string): void;

  getGetcustomerslatlngsscript(): string;
  setGetcustomerslatlngsscript(value: string): void;

  getGetvehiclesidscript(): string;
  setGetvehiclesidscript(value: string): void;

  getGetcustomersidscript(): string;
  setGetcustomersidscript(value: string): void;

  getMatrixtype(): MatrixTypeMap[keyof MatrixTypeMap];
  setMatrixtype(value: MatrixTypeMap[keyof MatrixTypeMap]): void;

  clearGetconstraintarrayList(): void;
  getGetconstraintarrayList(): Array<GetConstraint>;
  setGetconstraintarrayList(value: Array<GetConstraint>): void;
  addGetconstraintarray(value?: GetConstraint, index?: number): GetConstraint;

  getMaxprocesstime(): number;
  setMaxprocesstime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptimizeRule.AsObject;
  static toObject(includeInstance: boolean, msg: OptimizeRule): OptimizeRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptimizeRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptimizeRule;
  static deserializeBinaryFromReader(message: OptimizeRule, reader: jspb.BinaryReader): OptimizeRule;
}

export namespace OptimizeRule {
  export type AsObject = {
    input?: google_protobuf_struct_pb.Struct.AsObject,
    getvehiclesscript: string,
    getcustomersscript: string,
    getvehicleslatlngsscript: string,
    getcustomerslatlngsscript: string,
    getvehiclesidscript: string,
    getcustomersidscript: string,
    matrixtype: MatrixTypeMap[keyof MatrixTypeMap],
    getconstraintarrayList: Array<GetConstraint.AsObject>,
    maxprocesstime: number,
  }
}

export class GetConstraint extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddtoresult(): boolean;
  setAddtoresult(value: boolean): void;

  hasCapacityconstraint(): boolean;
  clearCapacityconstraint(): void;
  getCapacityconstraint(): GetCapacityConstraint | undefined;
  setCapacityconstraint(value?: GetCapacityConstraint): void;

  hasRangeconstraint(): boolean;
  clearRangeconstraint(): void;
  getRangeconstraint(): GetRangeConstraint | undefined;
  setRangeconstraint(value?: GetRangeConstraint): void;

  hasDependentconstraint(): boolean;
  clearDependentconstraint(): void;
  getDependentconstraint(): GetDependentConstraint | undefined;
  setDependentconstraint(value?: GetDependentConstraint): void;

  hasDiscriminationconstraint(): boolean;
  clearDiscriminationconstraint(): void;
  getDiscriminationconstraint(): GetDiscriminationConstraint | undefined;
  setDiscriminationconstraint(value?: GetDiscriminationConstraint): void;

  getConstraintCase(): GetConstraint.ConstraintCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetConstraint): GetConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConstraint;
  static deserializeBinaryFromReader(message: GetConstraint, reader: jspb.BinaryReader): GetConstraint;
}

export namespace GetConstraint {
  export type AsObject = {
    name: string,
    addtoresult: boolean,
    capacityconstraint?: GetCapacityConstraint.AsObject,
    rangeconstraint?: GetRangeConstraint.AsObject,
    dependentconstraint?: GetDependentConstraint.AsObject,
    discriminationconstraint?: GetDiscriminationConstraint.AsObject,
  }

  export enum ConstraintCase {
    CONSTRAINT_NOT_SET = 0,
    CAPACITYCONSTRAINT = 3,
    RANGECONSTRAINT = 4,
    DEPENDENTCONSTRAINT = 5,
    DISCRIMINATIONCONSTRAINT = 6,
  }
}

export class GetCapacityConstraint extends jspb.Message {
  getTransitcostmatrix(): string;
  setTransitcostmatrix(value: string): void;

  getCapacities(): string;
  setCapacities(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCapacityConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetCapacityConstraint): GetCapacityConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCapacityConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCapacityConstraint;
  static deserializeBinaryFromReader(message: GetCapacityConstraint, reader: jspb.BinaryReader): GetCapacityConstraint;
}

export namespace GetCapacityConstraint {
  export type AsObject = {
    transitcostmatrix: string,
    capacities: string,
  }
}

export class GetRangeConstraint extends jspb.Message {
  getTransitcostmatrix(): string;
  setTransitcostmatrix(value: string): void;

  getPairslist(): string;
  setPairslist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeConstraint): GetRangeConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRangeConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeConstraint;
  static deserializeBinaryFromReader(message: GetRangeConstraint, reader: jspb.BinaryReader): GetRangeConstraint;
}

export namespace GetRangeConstraint {
  export type AsObject = {
    transitcostmatrix: string,
    pairslist: string,
  }
}

export class GetDependentConstraint extends jspb.Message {
  getDependents(): string;
  setDependents(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDependentConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetDependentConstraint): GetDependentConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDependentConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDependentConstraint;
  static deserializeBinaryFromReader(message: GetDependentConstraint, reader: jspb.BinaryReader): GetDependentConstraint;
}

export namespace GetDependentConstraint {
  export type AsObject = {
    dependents: string,
  }
}

export class GetDiscriminationConstraint extends jspb.Message {
  getClasses(): string;
  setClasses(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiscriminationConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiscriminationConstraint): GetDiscriminationConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDiscriminationConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiscriminationConstraint;
  static deserializeBinaryFromReader(message: GetDiscriminationConstraint, reader: jspb.BinaryReader): GetDiscriminationConstraint;
}

export namespace GetDiscriminationConstraint {
  export type AsObject = {
    classes: string,
  }
}

export class RoutingArguments extends jspb.Message {
  hasMatrix(): boolean;
  clearMatrix(): void;
  getMatrix(): Int2dList | undefined;
  setMatrix(value?: Int2dList): void;

  clearVehicleidsList(): void;
  getVehicleidsList(): Array<string>;
  setVehicleidsList(value: Array<string>): void;
  addVehicleids(value: string, index?: number): string;

  clearConsumeridsList(): void;
  getConsumeridsList(): Array<string>;
  setConsumeridsList(value: Array<string>): void;
  addConsumerids(value: string, index?: number): string;

  clearConstraintresourcearrayList(): void;
  getConstraintresourcearrayList(): Array<IntList>;
  setConstraintresourcearrayList(value: Array<IntList>): void;
  addConstraintresourcearray(value?: IntList, index?: number): IntList;

  clearConstraintresource2darrayList(): void;
  getConstraintresource2darrayList(): Array<Int2dList>;
  setConstraintresource2darrayList(value: Array<Int2dList>): void;
  addConstraintresource2darray(value?: Int2dList, index?: number): Int2dList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutingArguments.AsObject;
  static toObject(includeInstance: boolean, msg: RoutingArguments): RoutingArguments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutingArguments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutingArguments;
  static deserializeBinaryFromReader(message: RoutingArguments, reader: jspb.BinaryReader): RoutingArguments;
}

export namespace RoutingArguments {
  export type AsObject = {
    matrix?: Int2dList.AsObject,
    vehicleidsList: Array<string>,
    consumeridsList: Array<string>,
    constraintresourcearrayList: Array<IntList.AsObject>,
    constraintresource2darrayList: Array<Int2dList.AsObject>,
  }
}

export class IntList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntList.AsObject;
  static toObject(includeInstance: boolean, msg: IntList): IntList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntList;
  static deserializeBinaryFromReader(message: IntList, reader: jspb.BinaryReader): IntList;
}

export namespace IntList {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class Int2dList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<IntList>;
  setValuesList(value: Array<IntList>): void;
  addValues(value?: IntList, index?: number): IntList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int2dList.AsObject;
  static toObject(includeInstance: boolean, msg: Int2dList): Int2dList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int2dList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int2dList;
  static deserializeBinaryFromReader(message: Int2dList, reader: jspb.BinaryReader): Int2dList;
}

export namespace Int2dList {
  export type AsObject = {
    valuesList: Array<IntList.AsObject>,
  }
}

export class Candidates extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<google_protobuf_struct_pb.Struct>;
  setResultList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addResult(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candidates.AsObject;
  static toObject(includeInstance: boolean, msg: Candidates): Candidates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Candidates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candidates;
  static deserializeBinaryFromReader(message: Candidates, reader: jspb.BinaryReader): Candidates;
}

export namespace Candidates {
  export type AsObject = {
    resultList: Array<google_protobuf_struct_pb.Struct.AsObject>,
  }
}

export interface MatrixTypeMap {
  DISTANCE: 0;
  DURATION: 1;
}

export const MatrixType: MatrixTypeMap;

