import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Rule extends jspb.Message {
  getInput(): string;
  setInput(value: string): Rule;

  getScript(): string;
  setScript(value: string): Rule;

  getName(): string;
  setName(value: string): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    input: string,
    script: string,
    name: string,
  }
}

export class OptimizeRule extends jspb.Message {
  getInput(): string;
  setInput(value: string): OptimizeRule;

  getGetvehiclesscript(): string;
  setGetvehiclesscript(value: string): OptimizeRule;

  getGetcustomersscript(): string;
  setGetcustomersscript(value: string): OptimizeRule;

  getGetvehicleslatlngsscript(): string;
  setGetvehicleslatlngsscript(value: string): OptimizeRule;

  getGetcustomerslatlngsscript(): string;
  setGetcustomerslatlngsscript(value: string): OptimizeRule;

  getGetvehiclesidscript(): string;
  setGetvehiclesidscript(value: string): OptimizeRule;

  getGetcustomersidscript(): string;
  setGetcustomersidscript(value: string): OptimizeRule;

  getMatrixtype(): MatrixType;
  setMatrixtype(value: MatrixType): OptimizeRule;

  getGetconstraintarrayList(): Array<GetConstraint>;
  setGetconstraintarrayList(value: Array<GetConstraint>): OptimizeRule;
  clearGetconstraintarrayList(): OptimizeRule;
  addGetconstraintarray(value?: GetConstraint, index?: number): GetConstraint;

  getMaxprocesstime(): number;
  setMaxprocesstime(value: number): OptimizeRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptimizeRule.AsObject;
  static toObject(includeInstance: boolean, msg: OptimizeRule): OptimizeRule.AsObject;
  static serializeBinaryToWriter(message: OptimizeRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptimizeRule;
  static deserializeBinaryFromReader(message: OptimizeRule, reader: jspb.BinaryReader): OptimizeRule;
}

export namespace OptimizeRule {
  export type AsObject = {
    input: string,
    getvehiclesscript: string,
    getcustomersscript: string,
    getvehicleslatlngsscript: string,
    getcustomerslatlngsscript: string,
    getvehiclesidscript: string,
    getcustomersidscript: string,
    matrixtype: MatrixType,
    getconstraintarrayList: Array<GetConstraint.AsObject>,
    maxprocesstime: number,
  }
}

export class GetConstraint extends jspb.Message {
  getName(): string;
  setName(value: string): GetConstraint;

  getAddtoresult(): boolean;
  setAddtoresult(value: boolean): GetConstraint;

  getCapacityconstraint(): GetCapacityConstraint | undefined;
  setCapacityconstraint(value?: GetCapacityConstraint): GetConstraint;
  hasCapacityconstraint(): boolean;
  clearCapacityconstraint(): GetConstraint;

  getRangeconstraint(): GetRangeConstraint | undefined;
  setRangeconstraint(value?: GetRangeConstraint): GetConstraint;
  hasRangeconstraint(): boolean;
  clearRangeconstraint(): GetConstraint;

  getDependentconstraint(): GetDependentConstraint | undefined;
  setDependentconstraint(value?: GetDependentConstraint): GetConstraint;
  hasDependentconstraint(): boolean;
  clearDependentconstraint(): GetConstraint;

  getDiscriminationconstraint(): GetDiscriminationConstraint | undefined;
  setDiscriminationconstraint(value?: GetDiscriminationConstraint): GetConstraint;
  hasDiscriminationconstraint(): boolean;
  clearDiscriminationconstraint(): GetConstraint;

  getConstraintCase(): GetConstraint.ConstraintCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetConstraint): GetConstraint.AsObject;
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
  setTransitcostmatrix(value: string): GetCapacityConstraint;

  getCapacities(): string;
  setCapacities(value: string): GetCapacityConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCapacityConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetCapacityConstraint): GetCapacityConstraint.AsObject;
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
  setTransitcostmatrix(value: string): GetRangeConstraint;

  getPairslist(): string;
  setPairslist(value: string): GetRangeConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeConstraint): GetRangeConstraint.AsObject;
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
  setDependents(value: string): GetDependentConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDependentConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetDependentConstraint): GetDependentConstraint.AsObject;
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
  setClasses(value: string): GetDiscriminationConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiscriminationConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiscriminationConstraint): GetDiscriminationConstraint.AsObject;
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
  getMatrix(): Int2dList | undefined;
  setMatrix(value?: Int2dList): RoutingArguments;
  hasMatrix(): boolean;
  clearMatrix(): RoutingArguments;

  getVehicleidsList(): Array<string>;
  setVehicleidsList(value: Array<string>): RoutingArguments;
  clearVehicleidsList(): RoutingArguments;
  addVehicleids(value: string, index?: number): RoutingArguments;

  getConsumeridsList(): Array<string>;
  setConsumeridsList(value: Array<string>): RoutingArguments;
  clearConsumeridsList(): RoutingArguments;
  addConsumerids(value: string, index?: number): RoutingArguments;

  getConstraintresourcearrayList(): Array<IntList>;
  setConstraintresourcearrayList(value: Array<IntList>): RoutingArguments;
  clearConstraintresourcearrayList(): RoutingArguments;
  addConstraintresourcearray(value?: IntList, index?: number): IntList;

  getConstraintresource2darrayList(): Array<Int2dList>;
  setConstraintresource2darrayList(value: Array<Int2dList>): RoutingArguments;
  clearConstraintresource2darrayList(): RoutingArguments;
  addConstraintresource2darray(value?: Int2dList, index?: number): Int2dList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutingArguments.AsObject;
  static toObject(includeInstance: boolean, msg: RoutingArguments): RoutingArguments.AsObject;
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
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): IntList;
  clearValuesList(): IntList;
  addValues(value: number, index?: number): IntList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntList.AsObject;
  static toObject(includeInstance: boolean, msg: IntList): IntList.AsObject;
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
  getValuesList(): Array<IntList>;
  setValuesList(value: Array<IntList>): Int2dList;
  clearValuesList(): Int2dList;
  addValues(value?: IntList, index?: number): IntList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int2dList.AsObject;
  static toObject(includeInstance: boolean, msg: Int2dList): Int2dList.AsObject;
  static serializeBinaryToWriter(message: Int2dList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int2dList;
  static deserializeBinaryFromReader(message: Int2dList, reader: jspb.BinaryReader): Int2dList;
}

export namespace Int2dList {
  export type AsObject = {
    valuesList: Array<IntList.AsObject>,
  }
}

export class ExecResult extends jspb.Message {
  getResult(): string;
  setResult(value: string): ExecResult;

  getLogs(): string;
  setLogs(value: string): ExecResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecResult.AsObject;
  static toObject(includeInstance: boolean, msg: ExecResult): ExecResult.AsObject;
  static serializeBinaryToWriter(message: ExecResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecResult;
  static deserializeBinaryFromReader(message: ExecResult, reader: jspb.BinaryReader): ExecResult;
}

export namespace ExecResult {
  export type AsObject = {
    result: string,
    logs: string,
  }
}

export class RulesList extends jspb.Message {
  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): RulesList;
  clearRulesList(): RulesList;
  addRules(value?: Rule, index?: number): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RulesList.AsObject;
  static toObject(includeInstance: boolean, msg: RulesList): RulesList.AsObject;
  static serializeBinaryToWriter(message: RulesList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RulesList;
  static deserializeBinaryFromReader(message: RulesList, reader: jspb.BinaryReader): RulesList;
}

export namespace RulesList {
  export type AsObject = {
    rulesList: Array<Rule.AsObject>,
  }
}

export enum MatrixType { 
  DISTANCE = 0,
  DURATION = 1,
}
