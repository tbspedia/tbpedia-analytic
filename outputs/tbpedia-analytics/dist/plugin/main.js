/*! unicode-segmenter
MIT License

Copyright (c) 2024 Hyeseong Kim <hey@hyeseong.kim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugin/main.ts
var main_exports = {};
__export(main_exports, {
  GatewayError: () => GatewayError,
  default: () => TbpediaAnalytics
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  CONSTANT_CATCH: () => CONSTANT_CATCH,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  attachSchema: () => attachSchema,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  codePointLength: () => codePointLength,
  constantCatch: () => constantCatch,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  defineLazyInternal: () => defineLazyInternal,
  derived: () => derived,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  hide: () => hide,
  installLazyProp: () => installLazyProp,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  members: () => members,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  own: () => own,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  rawShape: () => rawShape,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  sizeCaps: () => sizeCaps,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  toZod: () => toZod,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function toZod() {
  return (schema) => schema;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
var Cached = class {
  constructor(getter) {
    this._getter = getter;
    this._value = void 0;
  }
  get value() {
    const getter = this._getter;
    if (getter !== void 0) {
      this._value = getter();
      this._getter = void 0;
    }
    return this._value;
  }
};
function cached(getter) {
  return new Cached(getter);
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function rawShape(def) {
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
  return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
  Object.defineProperty(target, key, {
    get() {
      const value = getter();
      assignProp(this, key, value);
      return value;
    },
    enumerable: true,
    configurable: true
  });
}
function putProp(target, key, value) {
  if (key in target)
    assignProp(target, key, value);
  else
    target[key] = value;
}
function mirrorShape(target, source, keys, wrap) {
  const raw = sourceShape(source);
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(raw, key);
    if (!desc.enumerable)
      continue;
    if (desc.get) {
      deferProp(target, key, () => {
        const value = source._zod.def.shape[key];
        return wrap ? wrap(value, key) : value;
      });
    } else
      putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
  }
}
function mirrorProps(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    const desc = Object.getOwnPropertyDescriptor(source, key);
    if (!desc.enumerable)
      continue;
    if (desc.get)
      deferProp(target, key, () => source[key]);
    else
      putProp(target, key, desc.value);
  }
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t2}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const newShape = {};
  mirrorShape(newShape, schema, maskedKeys(schema, mask));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function maskedKeys(schema, mask) {
  const raw = sourceShape(schema);
  const keys = [];
  for (const key of Reflect.ownKeys(mask)) {
    if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) {
      throw new Error(`Unrecognized key: "${String(key)}"`);
    }
    if (mask[key])
      keys.push(key);
  }
  return keys;
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const omitted = new Set(maskedKeys(schema, mask));
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = sourceShape(schema);
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
  mirrorProps(newShape, shape);
  return newShape;
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
  if (!b?._zod?.def) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const newShape = {};
  mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
  mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
  const def = mergeDefs(a._zod.def, {
    shape: newShape,
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class2, schema, mask, name = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
  }
  const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class2 && ((value, key) => selected && !selected.has(key) ? value : new Class2({ type: "optional", innerType: value })));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class2, schema, mask) {
  const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => (
    // overwrite with non-optional
    selected && !selected.has(key) ? value : new Class2({ type: "nonoptional", innerType: value })
  ));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a3;
    (_a3 = iss).path ?? (_a3.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message2) {
  return typeof message2 === "string" ? message2 : message2?.message;
}
function sizeCaps(defChecks) {
  const caps = [];
  for (const ch of defChecks ?? []) {
    const d = ch._zod.def;
    if (!/_(length|size)$|_equals$/.test(d.check))
      break;
    const max = d.maximum ?? d.length ?? d.size;
    if (max >= 0)
      caps.push([max, ch]);
  }
  return caps;
}
function attachSchema(issues, start, inst) {
  var _a3;
  for (let i = start; i < issues.length; i++) {
    (_a3 = issues[i]).schema ?? (_a3.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config2) {
  var _a3;
  const traits = iss.inst?._zod?.traits;
  if (traits?.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a3 = iss).schema ?? (_a3.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
  const message2 = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
  const full = {};
  for (const k of Object.keys(iss)) {
    if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__")
      continue;
    full[k] = iss[k];
  }
  full.path ?? (full.path = []);
  full.message = message2;
  if (ctx?.reportInput) {
    full.input = iss.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  const units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0; i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t2 = typeof data;
  switch (t2) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t2;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base642) {
  const binaryString = atob(base642);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url2) {
  const base642 = base64url2.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base642.length % 4) % 4);
  return base64ToUint8Array(base642 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};
function members(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide(inst, key, value) {
  return own(inst, key, value, false);
}
// @__NO_SIDE_EFFECTS__
function derived(computes, table) {
  for (const key in computes) {
    const compute = computes[key];
    Object.defineProperty(table, key, {
      configurable: true,
      enumerable: true,
      get() {
        return own(this, key, compute(this));
      },
      set(value) {
        own(this, key, value);
      }
    });
  }
  return table;
}
function defineBound(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn : own(this, key, fn.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? void 0 : proto;
}
var installing;
var broke = false;
var breaker = {
  configurable: true,
  get() {
    broke = true;
    return void 0;
  }
};
function defineLazyInternal(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = void 0;
    return;
  }
  installing = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker);
      const outer = broke;
      broke = false;
      try {
        const value = compute(this);
        if (broke)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke = broke || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke = broke || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  const proto = claim(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: void 0 };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
var CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  const fn = () => value;
  fn[CONSTANT_CATCH] = true;
  return fn;
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/core.js
var _a;
var _zodDesc = { value: void 0, enumerable: false };
var _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  const E = _E;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition();
      }
      try {
        return new Definition();
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _;
    this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = void 0;
      }
    } else if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer3(inst, def);
    if (initialized) {
      const own2 = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up = own2;
      while (up && up !== ctorProto)
        up = Object.getPrototypeOf(up);
      const target = up ?? own2;
      if (!initialized.has(target)) {
        initialized.add(target);
        members(target, protoMembers);
      }
    }
    const proto2 = _.prototype;
    for (const k in proto2) {
      if (!Object.prototype.hasOwnProperty.call(proto2, k))
        continue;
      if (!(k in inst)) {
        inst[k] = proto2[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    const inst = params?.Parent ? newError(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn of deferred) {
        fn();
      }
      inst._zod.deferred = void 0;
    }
    const pp = globalThis.__zod_globalConfig?.postProcessor;
    if (pp)
      pp(inst);
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $ZodAsyncError = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/errors.js
function _getMessage() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
  return internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
var _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: true,
  configurable: true
};
var _issuesDesc = { value: void 0, enumerable: false };
var _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  _issuesDesc.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc);
  _issuesDesc.value = void 0;
  Object.defineProperty(inst, "message", _messageDesc);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString.has(proto)) {
    _installedToString.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, void 0, {
  Parent: Error
});
function node(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error2.issues) {
    if (sub.path.length > 0) {
      node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error3, path = []) => {
    for (const issue2 of error3.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue2));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el)) {
              Object.defineProperty(curr, el, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node2 = curr[el];
            if (terminal) {
              node2._errors.push(mapper(issue2));
            }
            curr = node2;
            i++;
          }
        }
      }
    }
  };
  processError(error2);
  return fieldErrors;
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse = (_Err) => {
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _parseAsync = (_Err) => {
  const fn = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
function failure(Err, issues, ctx) {
  let error2;
  return {
    success: false,
    get error() {
      if (!error2) {
        error2 = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
        issues = void 0;
        ctx = void 0;
      }
      return error2;
    },
    set error(e) {
      error2 = e;
      issues = void 0;
      ctx = void 0;
    }
  };
}
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
var COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
var COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
var validate = ((schema, value, _ctx) => {
  const validator = schema._zod.bag.validator;
  if (validator !== void 0) {
    if (validator(value) !== COMPILE_INVALID)
      return true;
    if (validator.definite === true && _ctx === void 0)
      return false;
  }
  return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
  const ctx = _ctx ? { ..._ctx, async: false, abortEarly: true } : { async: false, abortEarly: true };
  const fallbackRun = schema._zod.bag.fallbackRun;
  let result;
  if (fallbackRun) {
    ctx[COMPILE_FALLBACK] = true;
    result = fallbackRun({ value, issues: [] }, ctx);
  } else {
    result = schema._zod.run({ value, issues: [] }, ctx);
  }
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length === 0;
}
var validateAsync = async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true, abortEarly: true } : { async: true, abortEarly: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length === 0;
};
var _encode = (_Err) => {
  const parse2 = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse2(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decode = (_Err) => {
  const parse2 = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    return parse2(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _encodeAsync = (_Err) => {
  const parseAsync2 = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync2(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decodeAsync = (_Err) => {
  const parseAsync2 = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    return await parseAsync2(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/regexes.js
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var anyString = /^[\s\S]{0,}$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a3;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
});
var _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== void 0;
};
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
    ) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a3, _b;
  $ZodCheck.init(inst, def);
  if (def.pattern)
    (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(fn) {
    this.indent += 1;
    try {
      fn(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = this?.content ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join("\n")}
};`);
    return factory(...Object.values(this.closed));
  }
};

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 6,
  patch: 7
};

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a3;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
});
var toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync2(inst, value) {
  const ctx = { async: true };
  return toStandardResult(await inst._zod.run({ value, issues: [] }, ctx), ctx);
}
function standardProps(inst) {
  return {
    validate: (value) => {
      const ctx = { async: false };
      try {
        const r = inst._zod.run({ value, issues: [] }, ctx);
        if (!(r instanceof Promise))
          return toStandardResult(r, ctx);
      } catch (_) {
      }
      return validateAsync2(inst, value);
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = def.pattern ?? anyString;
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var URL_BAD_FORMAT = 1;
var URL_UNPARSEABLE = 2;
function canParseURL(input) {
  try {
    if (typeof URL !== "undefined" && typeof URL.canParse === "function")
      return URL.canParse(input);
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
function validateURL(trimmed, def) {
  if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) {
    return canParseURL(trimmed) || URL_UNPARSEABLE;
  }
  return parseURLObject(trimmed, def);
}
function parseURLObject(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT;
  }
  try {
    if (typeof URL !== "undefined") {
      const URLStatic = URL;
      if (typeof URLStatic.parse === "function")
        return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
    }
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
  hostname.lastIndex = 0;
  return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = validateURL(trimmed, def);
      if (url === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === true) {
        payload.value = stripTabAndNewline(trimmed);
        return;
      }
      if (def.hostname && !urlHostnameOk(url, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk(url, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length));
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
});
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  if (!ipv6Alphabet.test(value))
    return false;
  return canParseURL(`http://[${value}]`);
}
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidIPv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv6(address);
}
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64Charset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
  if (!base64urlCharset.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64urlCharset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function capSize(inst, size) {
  const caps = sizeCaps(inst._zod.def.checks);
  if (!caps.length)
    return;
  const cap = Math.min(...caps.map((c) => c[0]));
  const parse2 = inst._zod.parse;
  inst._zod.parse = (payload, ctx) => {
    const n = size(payload.value);
    if (n > cap && !ctx?.skipChecks && ctx?.direction !== "backward") {
      for (const [max, ch] of sizeCaps(inst._zod.def.checks)) {
        if (n > max && ch._zod.def.when(payload)) {
          const start = payload.issues.length;
          ch._zod.check(payload);
          payload.issues[start].continue = false;
          attachSchema(payload.issues, start, inst);
          return payload;
        }
      }
    }
    return parse2(payload, ctx);
  };
}
var arraySize = (input) => Array.isArray(input) ? input.length : -1;
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  const memo2 = globalConfig.memoizer;
  memo2?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo2 ? memo2.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    const abortEarly = ctx?.abortEarly;
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
        if (abortEarly && result.issues.length !== 0 && aborted(result))
          break;
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
  capSize(inst, arraySize);
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== void 0 && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && optin === void 0) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent || optin === "defaulted" && !isOptionalOut) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k of allKeys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t2 = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  let seen = 0;
  for (const key in input) {
    if (abortEarly && payload.issues.length !== seen) {
      if (aborted(payload, seen))
        break;
      seen = payload.issues.length;
    }
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t2 === "never")
        unrecognized.push(key);
      continue;
    }
    if (t2 === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  const sh = desc?.get ? desc.get.raw : def.shape ?? {};
  if (sh) {
    const get = () => {
      const newSh = { ...sh };
      Object.defineProperty(def, "shape", { value: newSh });
      get.raw = newSh;
      return newSh;
    };
    get.raw = sh;
    Object.defineProperty(def, "shape", { get });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp(propValues, key, /* @__PURE__ */ new Set());
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== void 0)
          propValues[key].add(void 0);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  const memo2 = globalConfig.memoizer;
  memo2?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo2 ? memo2.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    const abortEarly = ctx?.abortEarly;
    let seen = payload.issues.length;
    for (const key of value.allKeys) {
      if (abortEarly && payload.issues.length !== seen) {
        if (aborted(payload, seen))
          break;
        seen = payload.issues.length;
      }
      if (key === "__proto__")
        continue;
      const el = shape[key];
      const optin = el._zod.optin;
      const optout = el._zod.optout;
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const memo2 = globalConfig.memoizer;
  const generateFastpass = (shape) => {
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc(["payload", "ctx"], { shape, inst, memo: memo2, syms });
    const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo2 ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id = ids[key];
      const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
      const isPresent = `${k} in input`;
      const schema = shape[key];
      const optin = schema?._zod?.optin;
      const isOptionalIn = optin !== void 0;
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(k)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
        if (optin === "defaulted") {
          doc.write(`newResult[${k}] = ${id}.value;`);
        } else {
          doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
        }
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
  defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  const keyIssues = /* @__PURE__ */ new Map();
  const collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      const k = String(iss.path[0]);
      if (!keyIssues.has(k))
        keyIssues.set(k, iss);
      keys = [k];
    } else {
      return false;
    }
    for (const k of keys) {
      if (!unrecKeys.has(k))
        unrecKeys.set(k, {});
      unrecKeys.get(k)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k of bothKeys) {
      if (!aggregated.includes(k) && keyIssues.has(k))
        result.issues.push(keyIssues.get(k));
    }
  }
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  defineLazyInternal(inst, "pattern", (zod) => {
    const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
    return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const values = new Set(def.values);
  inst._zod.values = values;
  defineLazyInternal(inst, "pattern", (zod) => {
    const vals = zod.def.values;
    return new RegExp(vals.length ? `^(${vals.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  globalConfig.memoizer?.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(payload, result) {
  payload.value = result.issues.length ? void 0 : result.value;
  return payload;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleOptionalResult(payload, result2));
      return handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazyInternal(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  });
  return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleCatchResult(payload, result2, def, ctx));
    }
    return handleCatchResult(payload, result, def, ctx);
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/memoizer.js
var $ZodCyclicError = class extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
};
var STATE = "~memo";
var NO_ISSUES = [];
function isRef(value) {
  return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive = /* @__PURE__ */ new WeakMap();
var NONE = 0;
var ASSUMED = 1;
var PROVEN = 2;
function isRecursive(inst, stack, resolve) {
  const cached2 = recursive.get(inst);
  if (cached2 !== void 0)
    return cached2 ? PROVEN : NONE;
  if (stack.has(inst))
    return PROVEN;
  stack.add(inst);
  let result = NONE;
  const check = (child) => {
    if (result !== PROVEN && child?._zod) {
      const answer = isRecursive(child, stack, resolve);
      if (answer > result)
        result = answer;
    }
  };
  const shape = (sh, spread) => {
    let answer = NONE;
    for (const key of Reflect.ownKeys(sh)) {
      const desc = Object.getOwnPropertyDescriptor(sh, key);
      if (spread && !desc.enumerable)
        continue;
      const child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack, resolve) : NONE;
      if (child > answer)
        answer = child;
    }
    return answer;
  };
  const merge2 = (answer) => {
    if (answer > result)
      result = answer;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      const raw = rawShape(def);
      merge2(raw ? shape(raw, true) : ASSUMED);
      check(def.catchall);
      break;
    }
    case "array":
      check(def.element);
      break;
    case "tuple":
      for (const el of def.items)
        check(el);
      check(def.rest);
      break;
    case "record":
    case "map":
      check(def.keyType);
      check(def.valueType);
      break;
    case "set":
      check(def.valueType);
      break;
    case "union":
      for (const el of def.options)
        check(el);
      break;
    case "intersection":
      check(def.left);
      check(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check(def.innerType);
      break;
    case "pipe":
      check(def.in);
      check(def.out);
      break;
    case "function":
      check(def.input);
      check(def.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : void 0);
      merge2(inner ? isRecursive(inner, stack, false) : ASSUMED);
      break;
    }
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      kind;
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check(value);
        else if (Array.isArray(value))
          for (const el of value)
            check(el);
      }
    }
  }
  stack.delete(inst);
  return settle(inst, result);
}
function settle(inst, answer) {
  if (answer !== ASSUMED)
    recursive.set(inst, answer === PROVEN);
  return answer;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = /* @__PURE__ */ new WeakMap();
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
var handoff;
var open = [];
var memo = {
  alloc(_inst, payload, empty) {
    const bucket = handoff;
    if (!bucket)
      return empty;
    handoff = void 0;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty;
  },
  guard(inst) {
    var _a3;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError();
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a3;
    let isRecursiveInst;
    let rechecked = false;
    let lastCtx;
    let lastBucket;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === void 0) {
          const walked = isRecursive(inst, /* @__PURE__ */ new Set(), false);
          if (walked === NONE) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
          if (walked === PROVEN || rechecked)
            isRecursiveInst = true;
          else
            rechecked = true;
        }
        const input = payload.value;
        if (!isRef(input))
          return base(payload, ctx);
        let state = ctx[STATE];
        if (!state) {
          state = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 };
          ctx[STATE] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = /* @__PURE__ */ new WeakSet());
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff = bucket;
        const depth = open.length;
        const result = base(payload, ctx);
        handoff = void 0;
        const entry = open.length > depth ? open.pop() : void 0;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  const backEdges = ctx[STATE]?.backEdges;
  return backEdges !== void 0 && isRef(value) && backEdges.has(value);
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/locales/en.js
var error = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = getTypeName(issue2.expected);
        const receivedType = parsedType(issue2.input);
        const received = getTypeName(receivedType, issue2.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
          const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue2.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error()
  };
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/registries.js
var _a2;
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta2 = _meta[0];
    this._map.set(schema, meta2);
    if (meta2 && typeof meta2 === "object" && "id" in meta2) {
      this._idmap.set(meta2.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta2 = this._map.get(schema);
    if (meta2 && typeof meta2 === "object" && "id" in meta2) {
      this._idmap.delete(meta2.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/api.js
function snapshotChecks(def) {
  if (def.checks)
    def.checks = [...def.checks];
  return def;
}
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2(snapshotChecks({ type: "number", checks: [], ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? void 0
  };
}
function handleUnrepresentable(schema, ctx, json, params, message2) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message: message2 }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === void 0 || result === "throw")
    throw new Error(message2);
  Object.assign(json, result);
  return true;
}
function processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a3;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = void 0;
  ctx.sharedEmitDoneFor = void 0;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      processSchema(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta2 = ctx.metadataRegistry.get(schema);
  if (meta2)
    assignProps(result.schema, meta2);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a3 = result.schema).default ?? (_a3.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]);
var UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  const extra = member.additionalProperties;
  if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects(members2) {
  const objects = [];
  for (const member of members2) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required2 = /* @__PURE__ */ new Set();
  for (const object2 of objects) {
    for (const key in object2.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = other.properties?.[key] ?? undeclaredConstraint(other);
        if (part === null || part === void 0)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (const key of object2.required ?? [])
      required2.add(key);
  }
  const folded = { type: "object", properties };
  if (required2.size)
    folded.required = [...required2];
  if (objects.every((object2) => object2.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object2 of objects) {
      const constraint = undeclaredConstraint(object2);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union2 = unions[0];
    const keyword = UNION_KEYS.find((k) => Array.isArray(union2[k]));
    if (Object.keys(union2).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union2);
    const branches = union2[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps(json, folded);
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps(schema2, refSchema);
      }
      assignProps(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = /* @__PURE__ */ new Map();
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/core/json-schema-processors.js
var narrowMin = (agg, key, value) => {
  if (agg[key] === void 0 || value > agg[key])
    agg[key] = value;
};
var narrowMax = (agg, key, value) => {
  if (agg[key] === void 0 || value < agg[key])
    agg[key] = value;
};
var narrowBoth = (agg, value) => {
  narrowMin(agg, "minimum", value);
  narrowMax(agg, "maximum", value);
};
var addDivisor = (agg, value) => {
  agg.multipleOf ?? (agg.multipleOf = []);
  if (!agg.multipleOf.includes(value))
    agg.multipleOf.push(value);
};
var addPattern = (agg, pattern) => {
  agg.patterns ?? (agg.patterns = /* @__PURE__ */ new Set());
  agg.patterns.add(pattern);
};
var intersectMime = (agg, mime) => {
  agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
var setFormat = (agg, format) => {
  agg.format = format;
  if (format.includes("int"))
    agg.isInt = true;
};
var minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
var maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
var formatContributor = (ranges) => (agg, def) => {
  setFormat(agg, def.format);
  const [minimum, maximum] = ranges[def.format];
  narrowMin(agg, "minimum", minimum);
  narrowMax(agg, "maximum", maximum);
};
var contributors = {
  greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
  less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
  multiple_of: (agg, def) => addDivisor(agg, def.value),
  number_format: formatContributor(NUMBER_FORMAT_RANGES),
  bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
  min_length: minContributor,
  max_length: maxContributor,
  length_equals: (agg, def) => narrowBoth(agg, def.length),
  min_size: minContributor,
  max_size: maxContributor,
  size_equals: (agg, def) => narrowBoth(agg, def.size),
  string_format: (agg, def) => {
    setFormat(agg, def.format);
    if (def.pattern)
      addPattern(agg, def.pattern);
    if (def.format === "base64" || def.format === "base64url")
      agg.contentEncoding = def.format;
    if (def.local || def.precision === -1)
      agg.laxFormat = true;
  },
  mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
  const agg = {};
  const def = schema._zod.def;
  const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (const ch of list)
    contributors[ch._zod.def.check]?.(agg, ch._zod.def);
  const bag = schema._zod.bag;
  if (bag.minimum !== void 0)
    narrowMin(agg, "minimum", bag.minimum);
  if (bag.exclusiveMinimum !== void 0)
    narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
  if (bag.maximum !== void 0)
    narrowMax(agg, "maximum", bag.maximum);
  if (bag.exclusiveMaximum !== void 0)
    narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
  if (bag.multipleOf !== void 0)
    addDivisor(agg, bag.multipleOf);
  if (bag.format !== void 0) {
    agg.format ?? (agg.format = bag.format);
    if (bag.format.includes("int"))
      agg.isInt = true;
  }
  if (bag.mime)
    intersectMime(agg, bag.mime);
  for (const pattern of bag.patterns ?? [])
    addPattern(agg, pattern);
  return agg;
}
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var exactPatterns = /* @__PURE__ */ new Map([
  [base64Charset, base64],
  [base64urlCharset, base64url]
]);
var exactPattern = (p) => exactPatterns.get(p) ?? p;
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns].map(exactPattern);
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
  json.type = isInt ? "integer" : "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json.maximum = maximum;
  }
  if (multipleOf) {
    const divisors = /* @__PURE__ */ new Set();
    for (const divisor of multipleOf) {
      if (Number.isFinite(divisor) && divisor !== 0)
        divisors.add(Math.abs(divisor));
      else
        handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
    }
    const [first, ...rest] = divisors;
    if (first !== void 0)
      json.multipleOf = first;
    if (rest.length)
      json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))];
  }
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  if (def.values.length === 0) {
    json.not = {};
    return;
  }
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val === "bigint") {
      if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = processSchema(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp(json.properties, key, processSchema(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const requiredKeys = [];
  for (const key of Object.keys(shape)) {
    const field = def.shape[key];
    if (ctx.io === "input" ? inputOptin(field) === void 0 : field._zod.optout === void 0) {
      requiredKeys.push(key);
    }
  }
  if (requiredKeys.length > 0) {
    json.required = requiredKeys;
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = processSchema(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = processSchema(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = processSchema(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT = /* @__PURE__ */ Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json.default = value;
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json._prefault = value;
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  processSchema(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos.has(proto))
    return;
  _installedErrorProtos.add(proto);
  _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
  _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
  _lazyMethod(proto, "addIssue", (self) => (issue2) => {
    self.issues.push(issue2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self) => (issues2) => {
    self.issues.push(...issues2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
var ZodError = /* @__PURE__ */ $constructor("ZodError", initializer2);
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, void 0, {
  Parent: Error
});

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
  if (!globalConfig.localeError)
    config(en_default());
}
function _ensureDefaultMemoizer() {
  if (!globalConfig.memoizer)
    config({ memoizer: memoizer() });
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  _ensureDefaultLocale();
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(util_exports.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta2) {
    reg.add(this, meta2);
    return this;
  },
  refine(check, params) {
    return this.check(refine(check, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    const cl = this.clone();
    globalRegistry.add(cl, { description });
    return cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    const cl = this.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return util_exports.hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    util_exports.own(this, "~standard", value);
  },
  parse: function _parse2(data, params) {
    return parse(this, data, params, { callee: _parse2 });
  },
  parseAsync: async function _parseAsync2(data, params) {
    return await parseAsync(this, data, params, { callee: _parseAsync2 });
  },
  safeParse(data, params) {
    return safeParse(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync(this, data, params);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    util_exports.own(this, "spa", value);
  },
  validate(data, params) {
    return validate(this, data, params);
  },
  validateAsync(data, params) {
    return validateAsync(this, data, params);
  },
  encode: function _encode2(data, params) {
    return encode(this, data, params, { callee: _encode2 });
  },
  decode: function _decode2(data, params) {
    return decode(this, data, params, { callee: _decode2 });
  },
  encodeAsync: async function _encodeAsync2(data, params) {
    return await encodeAsync(this, data, params, { callee: _encodeAsync2 });
  },
  decodeAsync: async function _decodeAsync2(data, params) {
    return await decodeAsync(this, data, params, { callee: _decodeAsync2 });
  },
  safeEncode(data, params) {
    return safeEncode(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return globalRegistry.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
});
var _ZodString = /* @__PURE__ */ $constructor(
  "_ZodString",
  (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
  },
  /* @__PURE__ */ util_exports.derived({
    format: (inst) => aggregateChecks(inst).format ?? null,
    minLength: (inst) => aggregateChecks(inst).minimum ?? null,
    maxLength: (inst) => aggregateChecks(inst).maximum ?? null
  }, {
    regex(...args) {
      return this.check(_regex(...args));
    },
    includes(...args) {
      return this.check(_includes(...args));
    },
    startsWith(...args) {
      return this.check(_startsWith(...args));
    },
    endsWith(...args) {
      return this.check(_endsWith(...args));
    },
    min(...args) {
      return this.check(_minLength(...args));
    },
    max(...args) {
      return this.check(_maxLength(...args));
    },
    length(...args) {
      return this.check(_length(...args));
    },
    nonempty(...args) {
      return this.check(_minLength(1, ...args));
    },
    lowercase(params) {
      return this.check(_lowercase(params));
    },
    uppercase(params) {
      return this.check(_uppercase(params));
    },
    trim() {
      return this.check(_trim());
    },
    normalize(...args) {
      return this.check(_normalize(...args));
    },
    toLowerCase() {
      return this.check(_toLowerCase());
    },
    toUpperCase() {
      return this.check(_toUpperCase());
    },
    slugify() {
      return this.check(_slugify());
    }
  })
);
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(_email(ZodEmail, params));
  },
  url(params) {
    return this.check(_url(ZodURL, params));
  },
  jwt(params) {
    return this.check(_jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(_emoji2(ZodEmoji, params));
  },
  guid(params) {
    return this.check(_guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(_uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(_uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(_uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(_uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(_nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(_cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(_cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(_ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(_base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(_base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(_xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(_ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(_ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(_ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(_cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(_cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(_e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(_isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(_isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(_isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(_isoDuration(ZodISODuration, params));
  }
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNumber = /* @__PURE__ */ $constructor(
  "ZodNumber",
  (inst, def) => {
    $ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
    inst.isFinite = true;
  },
  /* @__PURE__ */ util_exports.derived({
    minValue: (inst) => {
      const { minimum, exclusiveMinimum } = aggregateChecks(inst);
      return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (inst) => {
      const { maximum, exclusiveMaximum } = aggregateChecks(inst);
      return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
    },
    isInt: (inst) => {
      const { isInt, multipleOf } = aggregateChecks(inst);
      return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
    },
    format: (inst) => aggregateChecks(inst).format ?? null
  }, {
    gt(value, params) {
      return this.check(_gt(value, params));
    },
    gte(value, params) {
      return this.check(_gte(value, params));
    },
    min(value, params) {
      return this.check(_gte(value, params));
    },
    lt(value, params) {
      return this.check(_lt(value, params));
    },
    lte(value, params) {
      return this.check(_lte(value, params));
    },
    max(value, params) {
      return this.check(_lte(value, params));
    },
    int(params) {
      return this.check(int(params));
    },
    safe(params) {
      return this.check(int(params));
    },
    positive(params) {
      return this.check(_gt(0, params));
    },
    nonnegative(params) {
      return this.check(_gte(0, params));
    },
    negative(params) {
      return this.check(_lt(0, params));
    },
    nonpositive(params) {
      return this.check(_lte(0, params));
    },
    multipleOf(value, params) {
      return this.check(_multipleOf(value, params));
    },
    step(value, params) {
      return this.check(_multipleOf(value, params));
    },
    finite() {
      return this;
    }
  })
);
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength(n, params));
  },
  nonempty(params) {
    return this.check(_minLength(1, params));
  },
  max(n, params) {
    return this.check(_maxLength(n, params));
  },
  length(n, params) {
    return this.check(_length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  util_exports.installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall }));
  },
  passthrough() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  loose() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  strict() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: never() }));
  },
  strip() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: void 0 }));
  },
  extend(incoming) {
    return util_exports.extend(this, incoming);
  },
  safeExtend(incoming) {
    return util_exports.safeExtend(this, incoming);
  },
  merge(other) {
    return util_exports.merge(this, other);
  },
  pick(mask) {
    return util_exports.pick(this, mask);
  },
  omit(mask) {
    return util_exports.omit(this, mask);
  },
  partial(...args) {
    return util_exports.partial(ZodOptional, this, args[0]);
  },
  exactPartial(...args) {
    return util_exports.partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return util_exports.required(ZodNonOptional, this, args[0]);
  }
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = [...inst._zod.values];
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : util_exports.constantCatch(catchValue)
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
function date2(params) {
  return _isoDate(ZodISODate, params);
}
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// plugin/locales/en.json
var en_default2 = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Article properties must be a YAML object.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "The operation could not be completed. Your data remains saved locally.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia reading data",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Open reading data",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Mark as reading",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Mark as completed",
  \u958B\u59CB\u91CD\u8B80: "Start rereading",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Sync current article",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Sync changed reading data to cloud",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Unable to save plugin settings. Check write permissions for this vault.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "The API must use HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Enter the API host URL without a path or query parameters.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Enter a valid reader connection key.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Unable to connect. Local data has been kept. Try again manually later.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "The server returned invalid data.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Sync could not be completed. Try again later.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "This vault is linked to another reader. Use a separate vault.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Read and accept the profile notice first.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Accept the reading data upload notice first.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Profile and cloud permissions updated.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Open a Markdown article first.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Another operation changed this article's reading data. Reopen the form.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "Open an article first.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "This article already has this reading status. Start rereading before completing it again.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Reading data saved locally.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "Sync is in progress.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Upload reading data manually",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Cloud uploads are disabled. Reading data remains saved locally.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Save and upload your profile in settings first to apply cloud permissions.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Upload permissions or connection changed. Further uploads stopped.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Correct duplicate content IDs in the vault first.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "The server confirmed a different version. Sync has not been marked complete.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Saved in the cloud, but the local sync receipt could not be saved. You can sync again later.",
  \u53D6\u6D88: "Cancel",
  \u958B\u59CB\u4E0A\u50B3: "Start upload",
  \u540C\u6B65\u7D50\u679C: "Sync results",
  \u95DC\u9589: "Close",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Reading data is saved locally first. It is uploaded only when you sync manually.",
  \u8A08\u5283\u95B1\u8B80: "Planned reading",
  \u95B1\u8B80\u72C0\u614B: "Reading status",
  \u95B1\u8B80\u5C64\u6B21: "Reading depth",
  \u672A\u8A2D\u5B9A: "Not set",
  \u95B1\u8B80\u6B21\u6578: "Completed readings",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "The number of completed readings. Starting a reread does not increase it; completing one adds one.",
  \u95B1\u8B80\u65E5\u671F: "Reading dates",
  \u611F\u60F3\u8207\u8A55\u50F9: "Reflections and ratings",
  \u95B1\u8B80\u611F\u60F3: "Reading reflection",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "My recommendation",
  \u6211\u7684\u8A55\u5206: "My rating",
  \u672A\u8A55\u5206: "Not rated",
  \u6211\u7684\u5206\u985E: "My classifications",
  "\u6BCF\u884C\u4E00\u9805\u3002": "One item per line.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "My reader types: who is this article suitable for?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Save and sync",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Save locally",
  \u9023\u7DDA: "Connection",
  "API \u7DB2\u5740": "API URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Reader connection key",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Provided by your administrator; this is not the NocoDB administrator key.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Remember connection key locally",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Not saved by default. If enabled, the key is stored unencrypted in the plugin data file and may be copied by vault sync or backups.",
  \u6E2C\u8A66\u9023\u7DDA: "Test connection",
  \u5DF2\u958B\u555F: "Enabled",
  \u5DF2\u505C\u7528: "Disabled",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Reader profile",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Nickname (required)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "Email (optional, unverified)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisation (optional)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "Birth year (optional)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Birth month (optional)",
  \u672A\u63D0\u4F9B: "Not provided",
  \u6027\u5225: "Sex",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Country/region (optional)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "My reader type (optional)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "I accept the profile notice",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Manual upload permission",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "I accept the reading data upload notice",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Allow manual reading data uploads",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Turning this off immediately stops local uploads. Use Save and upload profile below to apply the cloud setting.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Cloud permissions still need confirmation or application.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Save profile locally",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profile saved locally.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Save and upload profile",
  \u624B\u52D5\u540C\u6B65: "Manual sync",
  \u60F3\u8B80\u65E5\u671F: "Want-to-read date",
  \u5728\u8B80\u65E5\u671F: "Reading start date",
  \u5DF2\u8B80\u65E5\u671F: "Completion date",
  \u4E0D\u8B80\u65E5\u671F: "Not-reading date",
  \u68C4\u8B80\u65E5\u671F: "Abandonment date",
  \u6211\u7684\u95DC\u9375\u8A5E: "My keywords",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "My reader types",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "My Buddhist knowledge level",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "My practice level",
  \u6211\u7684\u5B50\u4E3B\u984C: "My subtopics",
  \u9084\u6C92\u95B1\u8B80: "Unread",
  \u60F3\u8B80: "Want to read",
  \u5728\u8B80: "Reading",
  \u5DF2\u8B80: "Completed",
  \u4E0D\u8B80: "Not reading",
  \u68C4\u8B80: "Abandoned",
  \u7565\u8B80: "Skimming",
  \u901A\u8B80: "Full reading",
  \u7CBE\u8B80: "Close reading",
  \u6DF1\u5165\u7814\u8B80: "In-depth study",
  \u57FA\u790E\u95B1\u8B80: "Elementary reading",
  \u6AA2\u8996\u95B1\u8B80: "Inspectional reading",
  \u5206\u6790\u95B1\u8B80: "Analytical reading",
  \u4E3B\u984C\u95B1\u8B80: "Syntopical reading",
  \u63A8\u85A6: "Recommend",
  \u4E0D\u63A8\u85A6: "Do not recommend",
  \u672A\u6C7A\u5B9A: "Undecided",
  \u4E00\u822C\u8B80\u8005: "General reader",
  \u521D\u7688\u4F9D\u8005: "New Buddhist refuge taker",
  \u5B78\u4F5B\u8005: "Buddhist student",
  \u4FEE\u884C\u8005: "Practitioner",
  \u771F\u4F5B\u884C\u8005: "True Buddha School practitioner",
  \u5973: "Female",
  \u7537: "Male",
  \u5176\u4ED6: "Other",
  \u4E0D\u9858\u900F\u9732: "Prefer not to say",
  language: "UI language",
  languageHelp: "Changes apply to settings and new reading windows immediately. Command names update after reloading the plugin.",
  connected: "Hi {name} Connected successfully.",
  preview: "Pending: {pending}; unchanged: {unchanged}; needs correction: {invalid}. Only reading fields, including reflections, will be uploaded.",
  summary: "Saved: {saved}; unchanged: {unchanged}; invalid: {invalid}; incomplete: {remaining}.",
  changedDuringUpload: "Changes were made during upload. Sync again to upload them.",
  profileNotice: "Your profile is stored locally. Only Save and upload profile sends it to True Buddha Pedia Analytics database. It includes your nickname and your email, birth year/month, sex, country, reader type and organisation you provide, for reader management and future reading statistics. These fields are not written into articles. You can edit your profile or ask the administrator to delete cloud data. Each profile upload also sends your device type, plugin version, operating system and user-agent string for compatibility and troubleshooting. Only the device details from your latest profile upload are kept; no hardware identifiers are collected. Complete every profile field and select at least one reader type before saving or uploading.",
  readingNotice: "When I accepted the reading data upload notice, only reading data you manually sync is sent to True Buddha Pedia Analytics database in the cloud, including reading progress, dates, ratings, recommended for keywords, Sub topic, classification for reader type, Buddhist knowledge level and practice level. Article bodies and unrelated properties are not uploaded. Disabling uploads stops future uploads but does not delete existing cloud data. Reading records also include the installed collection series, edition, Tbpedia version, release ID, language code and title.",
  noticeUnavailable: "This server requires a newer privacy notice. Update the plugin before accepting it or uploading.",
  invalidField: "Check this field's value and format.",
  invalidChoice: "Choose one of the available options.",
  invalidType: "Enter a value of the expected type.",
  tooSmall: "The minimum is {limit}.",
  tooLarge: "The maximum is {limit}.",
  invalidDate: "Enter a valid calendar date (YYYY-MM-DD).",
  futureBirthYear: "Birth year cannot be in the future.",
  unknownCountry: "Choose a valid country or region.",
  birthYearRequired: "Provide a birth year when specifying a birth month.",
  invalidEmail: "Enter a valid email address.",
  validation: "Please correct the invalid fields.",
  "backend.UNAUTHENTICATED": "Unable to access this reader. Contact your administrator to restore the connection.",
  "backend.NOT_FOUND": "The requested endpoint was not found.",
  "backend.NOT_CONFIGURED": "Cloud storage is awaiting database configuration. Local reading is available.",
  "backend.BACKEND_ERROR": "The database operation could not be verified. Try again later or contact your administrator.",
  "backend.CONSENT_REQUIRED": "Review and accept the current profile and reading notices.",
  "backend.UPLOAD_DISABLED": "Cloud reading uploads are disabled.",
  "backend.CONTENT_NOT_FOUND": "This item is not in the approved catalogue.",
  "backend.VALIDATION_FAILED": "The submitted data is invalid or the catalogue item is inactive.",
  "backend.DUPLICATE_KEY": "Duplicate reading records require administrator repair.",
  "backend.METHOD_NOT_ALLOWED": "This request method is not allowed.",
  "backend.INTERNAL_ERROR": "The request could not be completed. Try again later.",
  "backend.PAYLOAD_TOO_LARGE": "The submitted data exceeds the size limit.",
  "backend.BAD_REQUEST": "The request must contain valid JSON data.",
  "backend.JSON_REQUIRED": "The request must use application/json.",
  "backend.RATE_LIMITED": "Too many requests. Try again later.",
  "field.nickname": "Nickname",
  "field.email": "Email",
  "field.birth_year": "Birth year",
  "field.birth_month": "Birth month",
  "field.sex": "Sex",
  "field.country_code": "Country/region",
  "field.reader_type": "Reader type",
  "field.organisation": "Organisation",
  "field.content_id": "Content ID",
  "field.schema_version": "Data version",
  "field.client_updated_at": "Last updated",
  "field.profile": "Profile",
  "field.values": "Reading data",
  "backend.BACKEND_TIMEOUT": "The database response timed out and the save status is uncertain. Retry manually after recovery.",
  followSystem: "Follow system",
  followSystemHelp: "Uses Obsidian's language setting, with English as the fallback.",
  updaterReadError: "Unable to read the Tbpedia updater settings. Check its data.json file, then retry. Reading data remains saved locally.",
  updaterChanged: "The installed collection changed during sync. Further uploads stopped. Preview and sync again.",
  updaterSyncNotice: "Reading records also include the installed collection series, edition, Tbpedia version, release ID, language code and title.",
  analyticsMetadataReadError: "Unable to read or verify the collection metadata saved in analytics data.json. Reload the plugin and try again.",
  connectionAvailable: "Connection successful. Cloud storage is available.",
  recordReading: "Record my reading data",
  syncReadingCloud: "Sync reading data to cloud",
  readingContentIdRequired: "This note needs a valid tbpedia_content_id in its frontmatter before you can record reading data.",
  requiredSuffix: "(required)",
  profileRequiredHelp: "Complete every profile field and select at least one reader type before saving or uploading.",
  readerTypesRequired: "Select at least one reader type.",
  readerId: "Reader ID",
  readerSetup: "Reader setup",
  newReader: "Register a new reader",
  existingReader: "Connect an existing reader",
  connectExistingReader: "Connect existing reader",
  newReaderHelp: "Complete the profile below, then choose Save and upload profile to register with a new reader ID.",
  readerAlreadyLinked: "This vault is already linked to a reader.",
  readerOperationBusy: "Another reader operation is in progress. Try again when it finishes.",
  readerIdInvalid: "Enter a valid reader ID.",
  readerRecoveryMismatch: "The cloud returned a different reader. Recovery was not saved.",
  readerIdHelp: "Enter your Reader ID to retrieve your profile. Keep it private: it grants access to your account.",
  reflectionRemaining: "{remaining} characters remaining (maximum {limit})",
  reflectionTooLong: "Shorten your reflection to {limit} characters before saving.",
  showReaderId: "Show Reader ID",
  hideReaderId: "Hide Reader ID"
};

// plugin/locales/ja.json
var ja_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\u8A18\u4E8B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F YAML \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30C7\u30FC\u30BF\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308A\u307E\u3059\u3002",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia \u8AAD\u66F8\u30C7\u30FC\u30BF",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\u30AA\u30FC\u30D7\u30F3\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30C7\u30FC\u30BF",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u65E2\u8AAD\u3068\u3057\u3066\u30DE\u30FC\u30AF",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u5B8C\u4E86\u3068\u3057\u3066\u30DE\u30FC\u30AF\u3059\u308B",
  \u958B\u59CB\u91CD\u8B80: "\u518D\u8AAD\u3092\u958B\u59CB\u3059\u308B",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u73FE\u5728\u306E\u8A18\u4E8B\u3092\u540C\u671F\u3059\u308B",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u5909\u66F4\u3055\u308C\u305F\u8AAD\u66F8\u30C7\u30FC\u30BF\u3092\u30AF\u30E9\u30A6\u30C9\u306B\u540C\u671F",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\u30D7\u30E9\u30B0\u30A4\u30F3\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u30DC\u30FC\u30EB\u30C8\u306E\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API \u306F HTTPS \u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "\u30D1\u30B9\u3084\u30AF\u30A8\u30EA \u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6307\u5B9A\u305B\u305A\u306B API \u30DB\u30B9\u30C8 URL \u3092\u5165\u529B\u3057\u307E\u3059\u3002",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\u6709\u52B9\u306A\u30EA\u30FC\u30C0\u30FC\u63A5\u7D9A\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u30ED\u30FC\u30AB\u30EB\u30C7\u30FC\u30BF\u306F\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u5F8C\u3067\u624B\u52D5\u3067\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\u30B5\u30FC\u30D0\u30FC\u304C\u7121\u52B9\u306A\u30C7\u30FC\u30BF\u3092\u8FD4\u3057\u307E\u3057\u305F\u3002",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\u540C\u671F\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\u3053\u306E\u30DC\u30FC\u30EB\u30C8\u306F\u5225\u306E\u30EA\u30FC\u30C0\u30FC\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u5225\u306E\u30DC\u30FC\u30EB\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u307E\u305A\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u901A\u77E5\u3092\u8AAD\u3093\u3067\u540C\u610F\u3057\u307E\u3059\u3002",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\u307E\u305A\u3001\u8AAD\u66F8\u30C7\u30FC\u30BF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u901A\u77E5\u306B\u540C\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3068\u30AF\u30E9\u30A6\u30C9\u6A29\u9650\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\u307E\u305A Markdown \u8A18\u4E8B\u3092\u958B\u304D\u307E\u3059\u3002",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\u5225\u306E\u64CD\u4F5C\u306B\u3088\u308A\u3001\u3053\u306E\u8A18\u4E8B\u306E\u95B2\u89A7\u30C7\u30FC\u30BF\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u30D5\u30A9\u30FC\u30E0\u3092\u518D\u5EA6\u958B\u304D\u307E\u3059\u3002",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\u307E\u305A\u306F\u8A18\u4E8B\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\u3053\u306E\u8A18\u4E8B\u306F\u3059\u3067\u306B\u3053\u306E\u95B2\u89A7\u30B9\u30C6\u30FC\u30BF\u30B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u3082\u3046\u4E00\u5EA6\u5B8C\u4E86\u3059\u308B\u524D\u306B\u8AAD\u307F\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u8AAD\u66F8\u307E\u3059\u3002",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u540C\u671F\u304C\u9032\u884C\u4E2D\u3067\u3059\u3002",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u8AAD\u66F8\u30C7\u30FC\u30BF\u3092\u624B\u52D5\u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u30AF\u30E9\u30A6\u30C9\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u8AAD\u66F8\u30C7\u30FC\u30BF\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308A\u307E\u3059\u3002",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\u30AF\u30E9\u30A6\u30C9\u6A29\u9650\u3092\u9069\u7528\u3059\u308B\u306B\u306F\u3001\u6700\u521D\u306B\u8A2D\u5B9A\u3067\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u6A29\u9650\u307E\u305F\u306F\u63A5\u7D9A\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u305D\u308C\u4EE5\u4E0A\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u505C\u6B62\u3055\u308C\u307E\u3057\u305F\u3002",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "\u307E\u305A\u3001Vault \u5185\u306E\u91CD\u8907\u3057\u305F\u30B3\u30F3\u30C6\u30F3\u30C4 ID \u3092\u4FEE\u6B63\u3057\u307E\u3059\u3002",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\u30B5\u30FC\u30D0\u30FC\u306F\u5225\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D\u3057\u307E\u3057\u305F\u3002\u540C\u671F\u306F\u5B8C\u4E86\u3068\u3057\u3066\u30DE\u30FC\u30AF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u30AF\u30E9\u30A6\u30C9\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u304C\u3001\u30ED\u30FC\u30AB\u30EB\u540C\u671F\u306E\u53D7\u4FE1\u78BA\u8A8D\u306F\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5F8C\u3067\u518D\u5EA6\u540C\u671F\u3067\u304D\u307E\u3059\u3002",
  \u53D6\u6D88: "\u30AD\u30E3\u30F3\u30BB\u30EB",
  \u958B\u59CB\u4E0A\u50B3: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3092\u958B\u59CB\u3059\u308B",
  \u540C\u6B65\u7D50\u679C: "\u540C\u671F\u7D50\u679C",
  \u95DC\u9589: "\u9589\u3058\u308B",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\u8AAD\u66F8\u30C7\u30FC\u30BF\u306F\u6700\u521D\u306B\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u624B\u52D5\u3067\u540C\u671F\u3057\u305F\u5834\u5408\u306B\u306E\u307F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002",
  \u8A08\u5283\u95B1\u8B80: "\u8AAD\u66F8\u4E88\u5B9A",
  \u95B1\u8B80\u72C0\u614B: "\u8AAD\u66F8\u30B9\u30C6\u30FC\u30BF\u30B9",
  \u95B1\u8B80\u5C64\u6B21: "\u8AAD\u66F8\u306E\u6DF1\u3055",
  \u672A\u8A2D\u5B9A: "\u672A\u8A2D\u5B9A",
  \u95B1\u8B80\u6B21\u6578: "\u5B8C\u4E86\u3057\u305F\u6E2C\u5B9A\u5024",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\u5B8C\u4E86\u3057\u305F\u8AAD\u66F8\u306E\u6570\u3002\u518D\u8AAD\u307F\u8FBC\u307F\u3092\u958B\u59CB\u3057\u3066\u3082\u5897\u52A0\u3057\u307E\u305B\u3093\u3002 1 \u3064\u5B8C\u4E86\u3059\u308B\u3068 1 \u3064\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002",
  \u95B1\u8B80\u65E5\u671F: "\u8AAD\u66F8\u65E5",
  \u611F\u60F3\u8207\u8A55\u50F9: "\u611F\u60F3\u3068\u8A55\u4FA1",
  \u95B1\u8B80\u611F\u60F3: "\u8AAD\u66F8\u611F\u60F3\u6587",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\u79C1\u306E\u304A\u3059\u3059\u3081",
  \u6211\u7684\u8A55\u5206: "\u79C1\u306E\u8A55\u4FA1",
  \u672A\u8A55\u5206: "\u8A55\u4FA1\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
  \u6211\u7684\u5206\u985E: "\u79C1\u306E\u5206\u985E",
  "\u6BCF\u884C\u4E00\u9805\u3002": "1 \u884C\u306B 1 \u3064\u306E\u9805\u76EE\u3002",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\u79C1\u306E\u8AAD\u8005\u306E\u30BF\u30A4\u30D7: \u3053\u306E\u8A18\u4E8B\u306F\u8AB0\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u304B?",
  \u5132\u5B58\u4E26\u540C\u6B65: "\u4FDD\u5B58\u3057\u3066\u540C\u671F\u3059\u308B",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58",
  \u9023\u7DDA: "\u63A5\u7D9A",
  "API \u7DB2\u5740": "API URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\u30EA\u30FC\u30C0\u30FC\u63A5\u7D9A\u30AD\u30FC",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u7BA1\u7406\u8005\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F NocoDB \u7BA1\u7406\u8005\u30AD\u30FC\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\u63A5\u7D9A\u30AD\u30FC\u3092\u30ED\u30FC\u30AB\u30EB\u306B\u8A18\u61B6\u3059\u308B",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u30AD\u30FC\u306F\u6697\u53F7\u5316\u3055\u308C\u305A\u306B\u30D7\u30E9\u30B0\u30A4\u30F3 \u30C7\u30FC\u30BF \u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3001Vault \u540C\u671F\u307E\u305F\u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306B\u3088\u3063\u3066\u30B3\u30D4\u30FC\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002",
  \u6E2C\u8A66\u9023\u7DDA: "\u30C6\u30B9\u30C8\u63A5\u7D9A",
  \u5DF2\u958B\u555F: "\u6709\u52B9",
  \u5DF2\u505C\u7528: "\u969C\u5BB3\u8005",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\u8AAD\u8005\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0 (\u5FC5\u9808)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\u96FB\u5B50\u30E1\u30FC\u30EB (\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u672A\u691C\u8A3C)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\u7D44\u7E54 (\u30AA\u30D7\u30B7\u30E7\u30F3)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\u8A95\u751F\u5E74 (\u30AA\u30D7\u30B7\u30E7\u30F3)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\u8A95\u751F\u6708\uFF08\u4EFB\u610F\uFF09",
  \u672A\u63D0\u4F9B: "\u63D0\u4F9B\u3055\u308C\u307E\u305B\u3093",
  \u6027\u5225: "\u6027\u5225",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\u56FD/\u5730\u57DF (\u30AA\u30D7\u30B7\u30E7\u30F3)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\u79C1\u306E\u30EA\u30FC\u30C0\u30FC\u306E\u30BF\u30A4\u30D7 (\u30AA\u30D7\u30B7\u30E7\u30F3)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u901A\u77E5\u3092\u627F\u8A8D\u3057\u307E\u3059",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\u624B\u52D5\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u8A31\u53EF",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\u8AAD\u66F8\u30C7\u30FC\u30BF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u901A\u77E5\u306B\u540C\u610F\u3057\u307E\u3059",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u624B\u52D5\u306B\u3088\u308B\u8AAD\u66F8\u30C7\u30FC\u30BF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3092\u8A31\u53EF\u3059\u308B",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\u3053\u308C\u3092\u30AA\u30D5\u306B\u3059\u308B\u3068\u3001\u30ED\u30FC\u30AB\u30EB \u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u304C\u76F4\u3061\u306B\u505C\u6B62\u3055\u308C\u307E\u3059\u3002\u30AF\u30E9\u30A6\u30C9\u8A2D\u5B9A\u3092\u9069\u7528\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306E\u4FDD\u5B58\u3068\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\u30AF\u30E9\u30A6\u30C9\u306E\u6A29\u9650\u306B\u306F\u307E\u3060\u78BA\u8A8D\u307E\u305F\u306F\u7533\u8ACB\u304C\u5FC5\u8981\u3067\u3059\u3002",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3059\u308B",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u3002",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u4FDD\u5B58\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B",
  \u624B\u52D5\u540C\u6B65: "\u624B\u52D5\u540C\u671F",
  \u60F3\u8B80\u65E5\u671F: "\u8AAD\u307F\u305F\u3044\u65E5\u4ED8",
  \u5728\u8B80\u65E5\u671F: "\u8AAD\u66F8\u958B\u59CB\u65E5",
  \u5DF2\u8B80\u65E5\u671F: "\u5B8C\u6210\u65E5",
  \u4E0D\u8B80\u65E5\u671F: "\u672A\u8AAD\u65E5",
  \u68C4\u8B80\u65E5\u671F: "\u653E\u68C4\u65E5",
  \u6211\u7684\u95DC\u9375\u8A5E: "\u79C1\u306E\u30AD\u30FC\u30EF\u30FC\u30C9",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\u79C1\u306E\u8AAD\u8005\u30BF\u30A4\u30D7",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\u79C1\u306E\u4ECF\u6559\u306E\u77E5\u8B58\u30EC\u30D9\u30EB",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\u79C1\u306E\u7DF4\u7FD2\u30EC\u30D9\u30EB",
  \u6211\u7684\u5B50\u4E3B\u984C: "\u79C1\u306E\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF",
  \u9084\u6C92\u95B1\u8B80: "\u672A\u8AAD",
  \u60F3\u8B80: "\u8AAD\u307F\u305F\u3044",
  \u5728\u8B80: "\u8AAD\u66F8\u4E2D",
  \u5DF2\u8B80: "\u5B8C\u4E86",
  \u4E0D\u8B80: "\u8AAD\u3093\u3067\u3044\u306A\u3044",
  \u68C4\u8B80: "\u8AAD\u66F8\u4E2D\u6B62",
  \u7565\u8B80: "\u62FE\u3044\u8AAD\u307F",
  \u901A\u8B80: "\u5168\u6587\u3092\u8AAD\u3080",
  \u7CBE\u8B80: "\u3088\u304F\u8AAD\u3080",
  \u6DF1\u5165\u7814\u8B80: "\u5FB9\u5E95\u7684\u306A\u7814\u7A76",
  \u57FA\u790E\u95B1\u8B80: "\u521D\u7D1A\u306E\u8AAD\u66F8",
  \u6AA2\u8996\u95B1\u8B80: "\u691C\u67FB\u8AAD\u66F8",
  \u5206\u6790\u95B1\u8B80: "\u5206\u6790\u7684\u306A\u8AAD\u66F8",
  \u4E3B\u984C\u95B1\u8B80: "\u30B7\u30F3\u30C8\u30D4\u30AB\u30EB\u306A\u8AAD\u66F8",
  \u63A8\u85A6: "\u304A\u3059\u3059\u3081",
  \u4E0D\u63A8\u85A6: "\u304A\u52E7\u3081\u3057\u307E\u305B\u3093",
  \u672A\u6C7A\u5B9A: "\u672A\u5B9A",
  \u4E00\u822C\u8B80\u8005: "\u4E00\u822C\u8AAD\u8005",
  \u521D\u7688\u4F9D\u8005: "\u521D\u3081\u3066\u5E30\u4F9D\u3057\u305F\u65B9",
  \u5B78\u4F5B\u8005: "\u4ECF\u6559\u3092\u5B66\u3076\u65B9",
  \u4FEE\u884C\u8005: "\u4FEE\u884C\u8005",
  \u771F\u4F5B\u884C\u8005: "\u771F\u4F5B\u5B97\u306E\u4FEE\u884C\u8005",
  \u5973: "\u5973\u6027",
  \u7537: "\u7537\u6027",
  \u5176\u4ED6: "\u305D\u306E\u4ED6",
  \u4E0D\u9858\u900F\u9732: "\u56DE\u7B54\u3057\u306A\u3044",
  language: "UI\u8A00\u8A9E",
  languageHelp: "\u5909\u66F4\u306F\u8A2D\u5B9A\u3068\u65B0\u3057\u3044\u8AAD\u66F8\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u3059\u3050\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u540D\u306F\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u30EA\u30ED\u30FC\u30C9\u3059\u308B\u3068\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002",
  connected: "\u3053\u3093\u306B\u3061\u306F {name}\u3001\u63A5\u7D9A\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002",
  preview: "\u4FDD\u7559\u4E2D: {pending};\u5909\u66F4\u306A\u3057: {unchanged};\u4FEE\u6B63\u304C\u5FC5\u8981\u3067\u3059: {invalid}\u3002\u611F\u60F3\u3092\u542B\u3080\u8AAD\u66F8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u307F\u304C\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002",
  summary: "\u4FDD\u5B58\u6E08\u307F: {saved};\u5909\u66F4\u306A\u3057: {unchanged};\u7121\u52B9: {invalid};\u4E0D\u5B8C\u5168: {remaining}\u3002",
  changedDuringUpload: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D\u306B\u5909\u66F4\u304C\u52A0\u3048\u3089\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u540C\u671F\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002",
  profileNotice: "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3060\u3051\u3067\u3001\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u304C True Buddha Pedia Analytics \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9 \u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u8AAD\u8005\u306E\u7BA1\u7406\u3068\u5C06\u6765\u306E\u8AAD\u66F8\u7D71\u8A08\u306E\u305F\u3081\u306B\u3001\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3068\u96FB\u5B50\u30E1\u30FC\u30EB\u3001\u8A95\u751F\u5E74/\u6708\u3001\u6027\u5225\u3001\u56FD\u3001\u8AAD\u8005\u306E\u7A2E\u985E\u3001\u7D44\u7E54\u304C\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u8A18\u4E8B\u306B\u306F\u66F8\u304D\u8FBC\u307E\u308C\u307E\u305B\u3093\u3002\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3057\u305F\u308A\u3001\u7BA1\u7406\u8005\u306B\u30AF\u30E9\u30A6\u30C9 \u30C7\u30FC\u30BF\u306E\u524A\u9664\u3092\u4F9D\u983C\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002 \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u305F\u3073\u306B\u3001\u4E92\u63DB\u6027\u306E\u78BA\u8A8D\u3068\u554F\u984C\u306E\u8ABF\u67FB\u306E\u305F\u3081\u3001\u7AEF\u672B\u306E\u7A2E\u985E\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3001OS\u3001\u30E6\u30FC\u30B6\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u6587\u5B57\u5217\u3082\u9001\u4FE1\u3057\u307E\u3059\u3002\u6700\u65B0\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u6642\u306E\u7AEF\u672B\u60C5\u5831\u306E\u307F\u3092\u4FDD\u6301\u3057\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u8B58\u5225\u5B50\u306F\u53CE\u96C6\u3057\u307E\u305B\u3093\u3002 \u4FDD\u5B58\u307E\u305F\u306F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u524D\u306B\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u9805\u76EE\u3092\u5165\u529B\u3057\u3001\u8AAD\u8005\u30BF\u30A4\u30D7\u30921\u3064\u4EE5\u4E0A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  readingNotice: "\u8AAD\u66F8\u30C7\u30FC\u30BF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u95A2\u3059\u308B\u8AAC\u660E\u306B\u540C\u610F\u3059\u308B\u3068\u3001\u624B\u52D5\u3067\u540C\u671F\u3057\u305F\u8AAD\u66F8\u30C7\u30FC\u30BF\u306E\u307F\u304C\u30AF\u30E9\u30A6\u30C9\u4E0A\u306E True Buddha Pedia Analytics \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u8AAD\u66F8\u306E\u9032\u6357\u3001\u65E5\u4ED8\u3001\u8A55\u4FA1\u3001\u304A\u3059\u3059\u3081\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3001\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF\u3001\u8AAD\u8005\u30BF\u30A4\u30D7\u306E\u5206\u985E\u3001\u4ECF\u6559\u77E5\u8B58\u30EC\u30D9\u30EB\u3001\u4FEE\u884C\u30EC\u30D9\u30EB\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u8A18\u4E8B\u672C\u6587\u3084\u95A2\u9023\u306E\u306A\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u307E\u305B\u3093\u3002\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3092\u7121\u52B9\u306B\u3059\u308B\u3068\u3001\u4ECA\u5F8C\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u505C\u6B62\u3055\u308C\u307E\u3059\u304C\u3001\u65E2\u5B58\u306E\u30AF\u30E9\u30A6\u30C9 \u30C7\u30FC\u30BF\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u8AAD\u66F8\u8A18\u9332\u306B\u306F\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30B7\u30EA\u30FC\u30BA\u3001\u30A8\u30C7\u30A3\u30B7\u30E7\u30F3\u3001Tbpedia\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3001\u30EA\u30EA\u30FC\u30B9ID\u3001\u8A00\u8A9E\u30B3\u30FC\u30C9\u3001\u30BF\u30A4\u30C8\u30EB\u3082\u542B\u307E\u308C\u307E\u3059\u3002",
  noticeUnavailable: "\u30B5\u30FC\u30D0\u30FC\u304C\u65B0\u3057\u3044\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u901A\u77E5\u3078\u306E\u540C\u610F\u3092\u6C42\u3081\u3066\u3044\u307E\u3059\u3002\u540C\u610F\u307E\u305F\u306F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u524D\u306B\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  invalidField: "\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5024\u3068\u5F62\u5F0F\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  invalidChoice: "\u5229\u7528\u53EF\u80FD\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u3044\u305A\u308C\u304B\u3092\u9078\u629E\u3057\u307E\u3059\u3002",
  invalidType: "\u671F\u5F85\u3055\u308C\u308B\u30BF\u30A4\u30D7\u306E\u5024\u3092\u5165\u529B\u3057\u307E\u3059\u3002",
  tooSmall: "\u6700\u5C0F\u5024\u306F {limit} \u3067\u3059\u3002",
  tooLarge: "\u6700\u5927\u5024\u306F {limit} \u3067\u3059\u3002",
  invalidDate: "\u6709\u52B9\u306A\u30AB\u30EC\u30F3\u30C0\u30FC\u65E5\u4ED8 (YYYY-MM-DD) \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  futureBirthYear: "\u8A95\u751F\u5E74\u3092\u672A\u6765\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
  unknownCountry: "\u6709\u52B9\u306A\u56FD\u307E\u305F\u306F\u5730\u57DF\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  birthYearRequired: "\u8A95\u751F\u6708\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u306F\u3001\u8A95\u751F\u5E74\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  invalidEmail: "\u6709\u52B9\u306A\u96FB\u5B50\u30E1\u30FC\u30EB \u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  validation: "\u7121\u52B9\u306A\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4FEE\u6B63\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "backend.UNAUTHENTICATED": "\u3053\u306E\u8AAD\u8005\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u3002\u63A5\u7D9A\u306E\u5FA9\u5143\u306B\u3064\u3044\u3066\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002",
  "backend.NOT_FOUND": "\u8981\u6C42\u3055\u308C\u305F\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "backend.NOT_CONFIGURED": "\u30AF\u30E9\u30A6\u30C9 \u30B9\u30C8\u30EC\u30FC\u30B8\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u69CB\u6210\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u3067\u306E\u8AAD\u66F8\u304C\u53EF\u80FD\u3067\u3059\u3002",
  "backend.BACKEND_ERROR": "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u52D5\u4F5C\u304C\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u8A66\u3059\u304B\u3001\u7BA1\u7406\u8005\u306B\u554F\u3044\u5408\u308F\u305B\u3066\u304F\u3060\u3055\u3044\u3002",
  "backend.CONSENT_REQUIRED": "\u73FE\u5728\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3068\u95B2\u89A7\u901A\u77E5\u3092\u78BA\u8A8D\u3057\u3066\u53D7\u3051\u5165\u308C\u307E\u3059\u3002",
  "backend.UPLOAD_DISABLED": "\u30AF\u30E9\u30A6\u30C9\u8AAD\u66F8\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",
  "backend.CONTENT_NOT_FOUND": "\u3053\u306E\u5546\u54C1\u306F\u627F\u8A8D\u3055\u308C\u305F\u30AB\u30BF\u30ED\u30B0\u306B\u306F\u63B2\u8F09\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  "backend.VALIDATION_FAILED": "\u9001\u4FE1\u3055\u308C\u305F\u30C7\u30FC\u30BF\u304C\u7121\u52B9\u3067\u3042\u308B\u304B\u3001\u30AB\u30BF\u30ED\u30B0 \u30A2\u30A4\u30C6\u30E0\u304C\u975E\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3059\u3002",
  "backend.DUPLICATE_KEY": "\u8AAD\u66F8\u8A18\u9332\u304C\u91CD\u8907\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u3088\u308B\u4FEE\u5FA9\u304C\u5FC5\u8981\u3067\u3059\u3002",
  "backend.METHOD_NOT_ALLOWED": "\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  "backend.INTERNAL_ERROR": "\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "backend.PAYLOAD_TOO_LARGE": "\u9001\u4FE1\u3055\u308C\u305F\u30C7\u30FC\u30BF\u304C\u30B5\u30A4\u30BA\u5236\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002",
  "backend.BAD_REQUEST": "\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u306F\u6709\u52B9\u306A JSON \u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  "backend.JSON_REQUIRED": "\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u306F application/json \u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  "backend.RATE_LIMITED": "\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u591A\u3059\u304E\u307E\u3059\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "field.nickname": "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0",
  "field.email": "\u96FB\u5B50\u30E1\u30FC\u30EB",
  "field.birth_year": "\u8A95\u751F\u5E74",
  "field.birth_month": "\u8A95\u751F\u6708",
  "field.sex": "\u6027\u5225",
  "field.country_code": "\u56FD\u30FB\u5730\u57DF",
  "field.reader_type": "\u30EA\u30FC\u30C0\u30FC\u306E\u7A2E\u985E",
  "field.organisation": "\u7D44\u7E54",
  "field.content_id": "\u30B3\u30F3\u30C6\u30F3\u30C4ID",
  "field.schema_version": "\u30C7\u30FC\u30BF\u30D0\u30FC\u30B8\u30E7\u30F3",
  "field.client_updated_at": "\u6700\u7D42\u66F4\u65B0\u65E5",
  "field.profile": "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",
  "field.values": "\u30C7\u30FC\u30BF\u306E\u8AAD\u66F8",
  "backend.BACKEND_TIMEOUT": "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FDC\u7B54\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u3001\u4FDD\u5B58\u72B6\u6CC1\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3002\u5FA9\u65E7\u5F8C\u306B\u624B\u52D5\u3067\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  followSystem: "\u30B7\u30B9\u30C6\u30E0\u306B\u5F93\u3046",
  followSystemHelp: "Obsidian\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u672A\u5BFE\u5FDC\u306E\u8A00\u8A9E\u306E\u5834\u5408\u306F\u82F1\u8A9E\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  updaterReadError: "Tbpedia\u66F4\u65B0\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8A2D\u5B9A\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3002data.json\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8AAD\u66F8\u30C7\u30FC\u30BF\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
  updaterChanged: "\u540C\u671F\u4E2D\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u5909\u66F4\u3055\u308C\u305F\u305F\u3081\u3001\u4EE5\u964D\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u30D7\u30EC\u30D3\u30E5\u30FC\u3057\u3066\u540C\u671F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  updaterSyncNotice: "\u8AAD\u66F8\u8A18\u9332\u306B\u306F\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30B7\u30EA\u30FC\u30BA\u3001\u30A8\u30C7\u30A3\u30B7\u30E7\u30F3\u3001Tbpedia\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3001\u30EA\u30EA\u30FC\u30B9ID\u3001\u8A00\u8A9E\u30B3\u30FC\u30C9\u3001\u30BF\u30A4\u30C8\u30EB\u3082\u542B\u307E\u308C\u307E\u3059\u3002",
  analyticsMetadataReadError: "analytics\u306Edata.json\u306B\u4FDD\u5B58\u3055\u308C\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u60C5\u5831\u3092\u8AAD\u307F\u53D6\u308A\u3001\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3002\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  connectionAvailable: "\u63A5\u7D9A\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002\u30AF\u30E9\u30A6\u30C9\u4FDD\u5B58\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002",
  recordReading: "\u81EA\u5206\u306E\u8AAD\u66F8\u30C7\u30FC\u30BF\u3092\u8A18\u9332",
  syncReadingCloud: "\u8AAD\u66F8\u30C7\u30FC\u30BF\u3092\u30AF\u30E9\u30A6\u30C9\u306B\u540C\u671F",
  readingContentIdRequired: "\u8AAD\u66F8\u30C7\u30FC\u30BF\u3092\u8A18\u9332\u3059\u308B\u306B\u306F\u3001\u30CE\u30FC\u30C8\u306E\u30D5\u30ED\u30F3\u30C8\u30DE\u30BF\u30FC\u306B\u6709\u52B9\u306A tbpedia_content_id \u304C\u5FC5\u8981\u3067\u3059\u3002",
  requiredSuffix: "\uFF08\u5FC5\u9808\uFF09",
  profileRequiredHelp: "\u4FDD\u5B58\u307E\u305F\u306F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u524D\u306B\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u9805\u76EE\u3092\u5165\u529B\u3057\u3001\u8AAD\u8005\u30BF\u30A4\u30D7\u30921\u3064\u4EE5\u4E0A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  readerTypesRequired: "\u8AAD\u8005\u30BF\u30A4\u30D7\u30921\u3064\u4EE5\u4E0A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  readerId: "\u8AAD\u8005ID",
  readerSetup: "\u8AAD\u8005\u306E\u8A2D\u5B9A",
  newReader: "\u65B0\u3057\u3044\u8AAD\u8005\u3092\u767B\u9332",
  existingReader: "\u65E2\u5B58\u306E\u8AAD\u8005\u306B\u63A5\u7D9A",
  connectExistingReader: "\u65E2\u5B58\u306E\u8AAD\u8005\u306B\u63A5\u7D9A",
  newReaderHelp: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u5165\u529B\u3057\u3001\u4FDD\u5B58\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3068\u65B0\u3057\u3044\u8AAD\u8005ID\u3067\u767B\u9332\u3055\u308C\u307E\u3059\u3002",
  readerAlreadyLinked: "\u3053\u306E\u4FDD\u7BA1\u5EAB\u306F\u3059\u3067\u306B\u8AAD\u8005\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
  readerOperationBusy: "\u51E6\u7406\u4E2D\u3067\u3059\u3002\u5B8C\u4E86\u5F8C\u306B\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  readerIdInvalid: "\u6709\u52B9\u306A\u8AAD\u8005ID\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  readerRecoveryMismatch: "\u5225\u306E\u8AAD\u8005\u60C5\u5831\u304C\u8FD4\u3055\u308C\u307E\u3057\u305F\u3002\u5FA9\u5143\u306F\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  readerIdHelp: "\u8AAD\u8005ID\u3092\u5165\u529B\u3057\u3066\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002ID\u3067\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u305F\u3081\u3001\u79D8\u5BC6\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  reflectionRemaining: "\u6B8B\u308A {remaining} \u6587\u5B57\uFF08\u6700\u5927 {limit} \u6587\u5B57\uFF09",
  reflectionTooLong: "\u4FDD\u5B58\u3059\u308B\u524D\u306B\u611F\u60F3\u3092 {limit} \u6587\u5B57\u4EE5\u5185\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  showReaderId: "\u8AAD\u8005ID\u3092\u8868\u793A",
  hideReaderId: "\u8AAD\u8005ID\u3092\u96A0\u3059"
};

// plugin/locales/fr.json
var fr_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Les propri\xE9t\xE9s de l'article doivent \xEAtre un objet YAML.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "L'op\xE9ration n'a pas pu \xEAtre compl\xE9t\xE9e. Vos donn\xE9es restent enregistr\xE9es localement.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Donn\xE9es de lecture Tbpedia",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Donn\xE9es de lecture ouvertes",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Marquer comme \xE9tant en cours de lecture",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Marquer comme termin\xE9",
  \u958B\u59CB\u91CD\u8B80: "Commencez \xE0 relire",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Synchroniser l'article actuel",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Synchroniser les donn\xE9es de lecture modifi\xE9es vers le cloud",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Impossible d'enregistrer les param\xE8tres du plugin. V\xE9rifiez les autorisations d'\xE9criture pour ce coffre-fort.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "L'API doit utiliser HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Saisissez l'URL de l'h\xF4te de l'API sans chemin ni param\xE8tres de requ\xEAte.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Saisissez une cl\xE9 de connexion de lecteur valide.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Impossible de se connecter. Les donn\xE9es locales ont \xE9t\xE9 conserv\xE9es. R\xE9essayez manuellement plus tard.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "Le serveur a renvoy\xE9 des donn\xE9es invalides.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "La synchronisation n'a pas pu \xEAtre termin\xE9e. R\xE9essayez plus tard.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Ce coffre-fort est li\xE9 \xE0 un autre lecteur. Utilisez un coffre-fort s\xE9par\xE9.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Lisez et acceptez d\u2019abord l\u2019avis de profil.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Acceptez d\u2019abord l\u2019avis de t\xE9l\xE9versement des donn\xE9es de lecture.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Profil et autorisations cloud mises \xE0 jour.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Ouvrez d\u2019abord un article Markdown.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Une autre op\xE9ration a modifi\xE9 les donn\xE9es de lecture de cet article. Rouvrez le formulaire.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "Ouvrez d'abord un article.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Cet article a d\xE9j\xE0 ce statut de lecture. Commencez \xE0 relire avant de le terminer \xE0 nouveau.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Lecture des donn\xE9es enregistr\xE9es localement.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "La synchronisation est en cours.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "T\xE9l\xE9verser manuellement les donn\xE9es de lecture",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Les t\xE9l\xE9versements vers le cloud sont d\xE9sactiv\xE9s. Les donn\xE9es de lecture restent enregistr\xE9es localement.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Enregistrez et t\xE9l\xE9chargez d'abord votre profil dans les param\xE8tres pour appliquer les autorisations cloud.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Les autorisations de t\xE9l\xE9versement ou la connexion ont \xE9t\xE9 modifi\xE9es. D'autres t\xE9l\xE9versements se sont arr\xEAt\xE9s.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Corrigez d'abord les ID de contenu en double dans le coffre-fort.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "Le serveur a confirm\xE9 une version diff\xE9rente. La synchronisation n'a pas \xE9t\xE9 marqu\xE9e comme termin\xE9e.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Enregistr\xE9 dans le cloud, mais le re\xE7u de synchronisation locale n'a pas pu \xEAtre enregistr\xE9. Vous pourrez synchroniser \xE0 nouveau plus tard.",
  \u53D6\u6D88: "Annuler",
  \u958B\u59CB\u4E0A\u50B3: "D\xE9marrer le t\xE9l\xE9versement",
  \u540C\u6B65\u7D50\u679C: "Synchroniser les r\xE9sultats",
  \u95DC\u9589: "Fermer",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Les donn\xE9es de lecture sont d'abord enregistr\xE9es localement. Il est t\xE9l\xE9vers\xE9 uniquement lorsque vous synchronisez manuellement.",
  \u8A08\u5283\u95B1\u8B80: "Lecture pr\xE9vue",
  \u95B1\u8B80\u72C0\u614B: "Statut de lecture",
  \u95B1\u8B80\u5C64\u6B21: "Profondeur de lecture",
  \u672A\u8A2D\u5B9A: "Non d\xE9fini",
  \u95B1\u8B80\u6B21\u6578: "Lectures termin\xE9es",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "Le nombre de lectures termin\xE9es. Entamer une relecture ne l'augmente pas ; en terminer un en ajoute un.",
  \u95B1\u8B80\u65E5\u671F: "Dates de lecture",
  \u611F\u60F3\u8207\u8A55\u50F9: "R\xE9flexions et notes",
  \u95B1\u8B80\u611F\u60F3: "R\xE9flexion sur la lecture",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Ma recommandation",
  \u6211\u7684\u8A55\u5206: "Ma note",
  \u672A\u8A55\u5206: "Non not\xE9",
  \u6211\u7684\u5206\u985E: "Mes classements",
  "\u6BCF\u884C\u4E00\u9805\u3002": "Un \xE9l\xE9ment par ligne.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Mes lecteurs tapent : \xE0 qui s\u2019adresse cet article ?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Enregistrer et synchroniser",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Enregistrer localement",
  \u9023\u7DDA: "Connexion",
  "API \u7DB2\u5740": "URL de l'API",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Cl\xE9 de connexion du lecteur",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Fourni par votre administrateur\xA0; ce n'est pas la cl\xE9 d'administrateur NocoDB.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "M\xE9moriser la cl\xE9 de connexion localement",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Non enregistr\xE9 par d\xE9faut. Si elle est activ\xE9e, la cl\xE9 est stock\xE9e non crypt\xE9e dans le fichier de donn\xE9es du plugin et peut \xEAtre copi\xE9e par synchronisation du coffre-fort ou par sauvegarde.",
  \u6E2C\u8A66\u9023\u7DDA: "Tester la connexion",
  \u5DF2\u958B\u555F: "Activ\xE9",
  \u5DF2\u505C\u7528: "D\xE9sactiv\xE9",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Profil de lecteur",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Pseudo (obligatoire)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "E-mail (facultatif, non v\xE9rifi\xE9)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisation (facultatif)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "Ann\xE9e de naissance (facultatif)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Mois de naissance (facultatif)",
  \u672A\u63D0\u4F9B: "Non fourni",
  \u6027\u5225: "Sexe",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Pays/r\xE9gion (facultatif)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Mon type de lecteur (facultatif)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "J'accepte l'avis de profil",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Autorisation de t\xE9l\xE9versement manuel",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "J'accepte l'avis de t\xE9l\xE9versement des donn\xE9es de lecture",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Autoriser les t\xE9l\xE9versements manuels de donn\xE9es de lecture",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "La d\xE9sactivation de cette option arr\xEAte imm\xE9diatement les t\xE9l\xE9versements locaux. Utilisez Enregistrer et t\xE9l\xE9verser le profil ci-dessous pour appliquer le param\xE8tre cloud.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Les autorisations cloud n\xE9cessitent toujours une confirmation ou une application.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Enregistrer le profil localement",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profil enregistr\xE9 localement.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Enregistrer et t\xE9l\xE9verser le profil",
  \u624B\u52D5\u540C\u6B65: "Synchronisation manuelle",
  \u60F3\u8B80\u65E5\u671F: "Date de lecture souhait\xE9e",
  \u5728\u8B80\u65E5\u671F: "Date de d\xE9but de lecture",
  \u5DF2\u8B80\u65E5\u671F: "Date d'ach\xE8vement",
  \u4E0D\u8B80\u65E5\u671F: "Date de non-lecture",
  \u68C4\u8B80\u65E5\u671F: "Date d'abandon",
  \u6211\u7684\u95DC\u9375\u8A5E: "Mes mots-cl\xE9s",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Mes types de lecteurs",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Mon niveau de connaissance bouddhiste",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "Mon niveau de pratique",
  \u6211\u7684\u5B50\u4E3B\u984C: "Mes sous-th\xE8mes",
  \u9084\u6C92\u95B1\u8B80: "Non lu",
  \u60F3\u8B80: "\xC0 lire",
  \u5728\u8B80: "En cours de lecture",
  \u5DF2\u8B80: "Termin\xE9",
  \u4E0D\u8B80: "Ne pas lire",
  \u68C4\u8B80: "Abandonn\xE9",
  \u7565\u8B80: "Lecture en survol",
  \u901A\u8B80: "Lecture compl\xE8te",
  \u7CBE\u8B80: "Lecture rapproch\xE9e",
  \u6DF1\u5165\u7814\u8B80: "Etude approfondie",
  \u57FA\u790E\u95B1\u8B80: "Lecture \xE9l\xE9mentaire",
  \u6AA2\u8996\u95B1\u8B80: "Lecture d'inspection",
  \u5206\u6790\u95B1\u8B80: "Lecture analytique",
  \u4E3B\u984C\u95B1\u8B80: "Lecture syntopique",
  \u63A8\u85A6: "Recommander",
  \u4E0D\u63A8\u85A6: "Ne recommande pas",
  \u672A\u6C7A\u5B9A: "Ind\xE9cis",
  \u4E00\u822C\u8B80\u8005: "Lecteur g\xE9n\xE9raliste",
  \u521D\u7688\u4F9D\u8005: "Personne ayant r\xE9cemment pris refuge dans le bouddhisme",
  \u5B78\u4F5B\u8005: "\xC9tudiant bouddhiste",
  \u4FEE\u884C\u8005: "Pratiquant bouddhiste",
  \u771F\u4F5B\u884C\u8005: "Praticien de l\u2019\xC9cole du V\xE9ritable Bouddha",
  \u5973: "Femme",
  \u7537: "Homme",
  \u5176\u4ED6: "Autre",
  \u4E0D\u9858\u900F\u9732: "Je pr\xE9f\xE8re ne pas dire",
  language: "Langue de l'interface utilisateur",
  languageHelp: "Les modifications s\u2019appliquent imm\xE9diatement aux param\xE8tres et aux nouvelles fen\xEAtres de lecture. Les noms des commandes sont mis \xE0 jour apr\xE8s le rechargement du plugin.",
  connected: "Bonjour {name}, connexion r\xE9ussie.",
  preview: "En attente\xA0: {pending}\xA0; inchang\xE9\xA0: {unchanged}\xA0; doit \xEAtre corrig\xE9\xA0: {invalid}. Seuls les champs de lecture, y compris les r\xE9flexions, seront t\xE9l\xE9vers\xE9s.",
  summary: "Enregistr\xE9\xA0: {saved}\xA0; inchang\xE9\xA0: {unchanged}\xA0; invalide\xA0: {invalid}\xA0; incomplet : {remaining}.",
  changedDuringUpload: "Des modifications ont \xE9t\xE9 apport\xE9es lors du t\xE9l\xE9versement. Synchronisez \xE0 nouveau pour les t\xE9l\xE9verser.",
  profileNotice: "Votre profil est conserv\xE9 localement. Seul le bouton \xAB Enregistrer et t\xE9l\xE9verser le profil \xBB l\u2019envoie \xE0 la base de donn\xE9es True Buddha Pedia Analytics. Il comprend votre pseudonyme et les renseignements fournis : courriel, ann\xE9e et mois de naissance, sexe, pays, type de lecteur et organisation. Ils servent \xE0 g\xE9rer les lecteurs et aux futures statistiques de lecture. Ces champs ne sont pas ajout\xE9s aux articles. Vous pouvez modifier votre profil ou demander \xE0 l\u2019administrateur de supprimer les donn\xE9es dans le cloud. Chaque t\xE9l\xE9versement du profil transmet aussi le type d\u2019appareil, la version du module, le syst\xE8me d\u2019exploitation et la cha\xEEne d\u2019agent utilisateur pour la compatibilit\xE9 et le d\xE9pannage. Seules les informations de l\u2019appareil du dernier t\xE9l\xE9versement du profil sont conserv\xE9es ; aucun identifiant mat\xE9riel n\u2019est collect\xE9. Remplissez tous les champs du profil et s\xE9lectionnez au moins un type de lecteur avant de sauvegarder ou de t\xE9l\xE9verser.",
  readingNotice: "Apr\xE8s acceptation de la notice de t\xE9l\xE9versement des donn\xE9es de lecture, seules les donn\xE9es que vous synchronisez manuellement sont envoy\xE9es \xE0 la base de donn\xE9es True Buddha Pedia Analytics dans le cloud : progression de lecture, dates, notes, recommandations, mots-cl\xE9s, sous-th\xE8mes, classifications par type de lecteur, niveau de connaissances bouddhiques et niveau de pratique. Les corps des articles et les propri\xE9t\xE9s non li\xE9es ne sont pas t\xE9l\xE9vers\xE9s. La d\xE9sactivation des t\xE9l\xE9versements arr\xEAte les futurs t\xE9l\xE9versements mais ne supprime pas les donn\xE9es cloud existantes. Les enregistrements de lecture incluent aussi la s\xE9rie, l\u2019\xE9dition, la version de Tbpedia, l\u2019identifiant de version, le code de langue et le titre de la collection install\xE9e.",
  noticeUnavailable: "Le serveur exige une nouvelle notice de confidentialit\xE9. Mettez \xE0 jour le module avant de donner votre accord ou de t\xE9l\xE9verser des donn\xE9es.",
  invalidField: "V\xE9rifiez la valeur et le format de ce champ.",
  invalidChoice: "Choisissez l'une des options disponibles.",
  invalidType: "Entrez une valeur du type attendu.",
  tooSmall: "Le minimum est {limit}.",
  tooLarge: "Le maximum est {limit}.",
  invalidDate: "Entrez une date de calendrier valide (AAAA-MM-JJ).",
  futureBirthYear: "L'ann\xE9e de naissance ne peut pas \xEAtre dans le futur.",
  unknownCountry: "Choisissez un pays ou une r\xE9gion valide.",
  birthYearRequired: "Indiquez une ann\xE9e de naissance lorsque vous sp\xE9cifiez un mois de naissance.",
  invalidEmail: "Entrez une adresse e-mail valide.",
  validation: "Veuillez corriger les champs invalides.",
  "backend.UNAUTHENTICATED": "Acc\xE8s \xE0 ce lecteur impossible. Contactez votre administrateur pour r\xE9tablir la connexion.",
  "backend.NOT_FOUND": "Le point de terminaison demand\xE9 n'a pas \xE9t\xE9 trouv\xE9.",
  "backend.NOT_CONFIGURED": "Le stockage cloud est en attente de configuration de la base de donn\xE9es. Des lectures locales sont disponibles.",
  "backend.BACKEND_ERROR": "Le fonctionnement de la base de donn\xE9es n'a pas pu \xEAtre v\xE9rifi\xE9. R\xE9essayez plus tard ou contactez votre administrateur.",
  "backend.CONSENT_REQUIRED": "Consultez et acceptez le profil actuel et les avis de lecture.",
  "backend.UPLOAD_DISABLED": "Les t\xE9l\xE9versements de lecture dans le cloud sont d\xE9sactiv\xE9s.",
  "backend.CONTENT_NOT_FOUND": "Cet article ne figure pas dans le catalogue approuv\xE9.",
  "backend.VALIDATION_FAILED": "Les donn\xE9es soumises ne sont pas valides ou l'\xE9l\xE9ment de catalogue est inactif.",
  "backend.DUPLICATE_KEY": "Les enregistrements de lecture en double n\xE9cessitent une r\xE9paration par l'administrateur.",
  "backend.METHOD_NOT_ALLOWED": "Cette m\xE9thode de demande n'est pas autoris\xE9e.",
  "backend.INTERNAL_ERROR": "La demande n'a pas pu \xEAtre compl\xE9t\xE9e. R\xE9essayez plus tard.",
  "backend.PAYLOAD_TOO_LARGE": "Les donn\xE9es soumises d\xE9passent la limite de taille.",
  "backend.BAD_REQUEST": "La requ\xEAte doit contenir des donn\xE9es JSON valides.",
  "backend.JSON_REQUIRED": "La requ\xEAte doit utiliser application/json.",
  "backend.RATE_LIMITED": "Trop de demandes. R\xE9essayez plus tard.",
  "field.nickname": "Surnom",
  "field.email": "Courriel",
  "field.birth_year": "Ann\xE9e de naissance",
  "field.birth_month": "Mois de naissance",
  "field.sex": "Sexe",
  "field.country_code": "Pays/r\xE9gion",
  "field.reader_type": "Type de lecteur",
  "field.organisation": "Organisation",
  "field.content_id": "ID de contenu",
  "field.schema_version": "Version des donn\xE9es",
  "field.client_updated_at": "Derni\xE8re mise \xE0 jour",
  "field.profile": "Profil",
  "field.values": "Lecture de donn\xE9es",
  "backend.BACKEND_TIMEOUT": "Le d\xE9lai de r\xE9ponse de la base de donn\xE9es est d\xE9pass\xE9 et l\u2019enregistrement reste incertain. R\xE9essayez manuellement apr\xE8s le r\xE9tablissement du service.",
  followSystem: "Suivre le syst\xE8me",
  followSystemHelp: "Utilise la langue d\xE9finie dans Obsidian, avec l\u2019anglais par d\xE9faut si elle n\u2019est pas prise en charge.",
  updaterReadError: "Impossible de lire les param\xE8tres du module de mise \xE0 jour Tbpedia. V\xE9rifiez son fichier data.json, puis r\xE9essayez. Les donn\xE9es de lecture restent enregistr\xE9es localement.",
  updaterChanged: "La collection install\xE9e a chang\xE9 pendant la synchronisation. Les t\xE9l\xE9versements suivants ont \xE9t\xE9 arr\xEAt\xE9s. V\xE9rifiez l\u2019aper\xE7u et relancez la synchronisation.",
  updaterSyncNotice: "Les enregistrements de lecture incluent aussi la s\xE9rie, l\u2019\xE9dition, la version de Tbpedia, l\u2019identifiant de version, le code de langue et le titre de la collection install\xE9e.",
  analyticsMetadataReadError: "Impossible de lire ou v\xE9rifier les informations de collection enregistr\xE9es dans le fichier data.json du module d\u2019analyse. Rechargez le module et r\xE9essayez.",
  connectionAvailable: "Connexion r\xE9ussie. Le stockage cloud est disponible.",
  recordReading: "Enregistrer mes donn\xE9es de lecture",
  syncReadingCloud: "Synchroniser les donn\xE9es de lecture vers le cloud",
  readingContentIdRequired: "Cette note doit contenir un tbpedia_content_id valide dans son frontmatter pour enregistrer les donn\xE9es de lecture.",
  requiredSuffix: "(obligatoire)",
  profileRequiredHelp: "Remplissez tous les champs du profil et s\xE9lectionnez au moins un type de lecteur avant de sauvegarder ou de t\xE9l\xE9verser.",
  readerTypesRequired: "S\xE9lectionnez au moins un type de lecteur.",
  readerId: "Identifiant du lecteur",
  readerSetup: "Configuration du lecteur",
  newReader: "Inscrire un nouveau lecteur",
  existingReader: "Connecter un lecteur existant",
  connectExistingReader: "Connecter le lecteur",
  newReaderHelp: "Remplissez le profil puis enregistrez et t\xE9l\xE9versez-le pour obtenir un nouvel identifiant.",
  readerAlreadyLinked: "Ce coffre est d\xE9j\xE0 li\xE9 \xE0 un lecteur.",
  readerOperationBusy: "Une op\xE9ration est en cours. R\xE9essayez apr\xE8s sa fin.",
  readerIdInvalid: "Saisissez un identifiant valide.",
  readerRecoveryMismatch: "Le serveur a renvoy\xE9 un autre lecteur. La restauration n\u2019a pas \xE9t\xE9 enregistr\xE9e.",
  readerIdHelp: "Saisissez votre identifiant pour r\xE9cup\xE9rer le profil. Gardez-le secret : il donne acc\xE8s au compte.",
  reflectionRemaining: "{remaining} caract\xE8res restants (maximum {limit})",
  reflectionTooLong: "R\xE9duisez votre r\xE9flexion \xE0 {limit} caract\xE8res avant de sauvegarder.",
  showReaderId: "Afficher l\u2019identifiant du lecteur",
  hideReaderId: "Masquer l\u2019identifiant du lecteur"
};

// plugin/locales/es.json
var es_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Las propiedades del art\xEDculo deben ser un objeto YAML.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "La operaci\xF3n no se pudo completar. Sus datos permanecen guardados localmente.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "datos de lectura de tbpedia",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Abrir datos de lectura",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Marcar como lectura",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Marcar como completado",
  \u958B\u59CB\u91CD\u8B80: "Empezar a releer",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Sincronizar el art\xEDculo actual",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Sincronizar los datos de lectura modificados con la nube",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "No se puede guardar la configuraci\xF3n del complemento. Verifique los permisos de escritura para esta b\xF3veda.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "La API debe utilizar HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Ingrese la URL del host de API sin ruta ni par\xE1metros de consulta.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Introduzca una clave de conexi\xF3n de lector v\xE1lida.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "No se puede conectar. Se han conservado los datos locales. Vuelva a intentarlo manualmente m\xE1s tarde.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "El servidor devolvi\xF3 datos no v\xE1lidos.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "No se pudo completar la sincronizaci\xF3n. Vuelve a intentarlo m\xE1s tarde.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Esta b\xF3veda est\xE1 vinculada a otro lector. Utilice una b\xF3veda separada.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Primero lea y acepte el aviso de perfil.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Acepte primero el aviso de carga de datos de lectura.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Permisos de perfil y nube actualizados.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Primero abra un art\xEDculo de Markdown.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Otra operaci\xF3n cambi\xF3 los datos de lectura de este art\xEDculo. Vuelva a abrir el formulario.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "Primero abra un art\xEDculo.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Este art\xEDculo ya tiene este estado de lectura. Comience a releer antes de completarlo nuevamente.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Lectura de datos guardados localmente.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "La sincronizaci\xF3n est\xE1 en curso.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Cargar datos de lectura manualmente",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Las cargas en la nube est\xE1n deshabilitadas. Los datos de lectura permanecen guardados localmente.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Primero guarde y cargue su perfil en la configuraci\xF3n para aplicar los permisos de la nube.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Permisos de carga o conexi\xF3n cambiadas. Se detuvieron m\xE1s cargas.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Primero corrija los ID de contenido duplicados en la b\xF3veda.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "El servidor confirm\xF3 una versi\xF3n diferente. La sincronizaci\xF3n no se ha marcado como completa.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Guardado en la nube, pero no se pudo guardar el recibo de sincronizaci\xF3n local. Puedes sincronizar nuevamente m\xE1s tarde.",
  \u53D6\u6D88: "Cancelar",
  \u958B\u59CB\u4E0A\u50B3: "Iniciar carga",
  \u540C\u6B65\u7D50\u679C: "Sincronizar resultados",
  \u95DC\u9589: "Cerrar",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Los datos de lectura se guardan localmente primero. Se carga solo cuando se sincroniza manualmente.",
  \u8A08\u5283\u95B1\u8B80: "Lectura planificada",
  \u95B1\u8B80\u72C0\u614B: "Estado de lectura",
  \u95B1\u8B80\u5C64\u6B21: "Profundidad de lectura",
  \u672A\u8A2D\u5B9A: "No establecido",
  \u95B1\u8B80\u6B21\u6578: "lecturas completadas",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "El n\xFAmero de lecturas completadas. Iniciar una relectura no la aumenta; completar uno agrega uno.",
  \u95B1\u8B80\u65E5\u671F: "fechas de lectura",
  \u611F\u60F3\u8207\u8A55\u50F9: "Reflexiones y valoraciones",
  \u95B1\u8B80\u611F\u60F3: "Reflexi\xF3n de lectura",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "mi recomendacion",
  \u6211\u7684\u8A55\u5206: "mi calificaci\xF3n",
  \u672A\u8A55\u5206: "No clasificado",
  \u6211\u7684\u5206\u985E: "Mis clasificaciones",
  "\u6BCF\u884C\u4E00\u9805\u3002": "Un art\xEDculo por l\xEDnea.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Mi lector escribe: \xBFpara qui\xE9n es adecuado este art\xEDculo?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Guardar y sincronizar",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Guardar localmente",
  \u9023\u7DDA: "Conexi\xF3n",
  "API \u7DB2\u5740": "URL de la API",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Clave de conexi\xF3n del lector",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Proporcionado por su administrador; esta no es la clave de administrador de NocoDB.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Recordar clave de conexi\xF3n localmente",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "No guardado por defecto. Si est\xE1 habilitada, la clave se almacena sin cifrar en el archivo de datos del complemento y se puede copiar mediante sincronizaci\xF3n de b\xF3veda o copias de seguridad.",
  \u6E2C\u8A66\u9023\u7DDA: "Conexi\xF3n de prueba",
  \u5DF2\u958B\u555F: "Habilitado",
  \u5DF2\u505C\u7528: "Discapacitado",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Perfil del lector",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Apodo (obligatorio)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "Correo electr\xF3nico (opcional, no verificado)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organizaci\xF3n (opcional)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "A\xF1o de nacimiento (opcional)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Mes de nacimiento (opcional)",
  \u672A\u63D0\u4F9B: "No proporcionado",
  \u6027\u5225: "Sexo",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Pa\xEDs/regi\xF3n (opcional)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Mi tipo de lector (opcional)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "Acepto el aviso de perfil",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Permiso de carga manual",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "Acepto el aviso de carga de datos de lectura",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Permitir cargas de datos de lectura manual",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Desactivar esto detiene inmediatamente las cargas locales. Utilice Guardar y cargar perfil a continuaci\xF3n para aplicar la configuraci\xF3n de la nube.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Los permisos de la nube a\xFAn necesitan confirmaci\xF3n o aplicaci\xF3n.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Guardar perfil localmente",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Perfil guardado localmente.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Guardar y cargar perfil",
  \u624B\u52D5\u540C\u6B65: "Sincronizaci\xF3n manual",
  \u60F3\u8B80\u65E5\u671F: "Fecha de deseo de lectura",
  \u5728\u8B80\u65E5\u671F: "Fecha de inicio de lectura",
  \u5DF2\u8B80\u65E5\u671F: "Fecha de finalizaci\xF3n",
  \u4E0D\u8B80\u65E5\u671F: "fecha de no lectura",
  \u68C4\u8B80\u65E5\u671F: "fecha de abandono",
  \u6211\u7684\u95DC\u9375\u8A5E: "Mis palabras clave",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Mi lector escribe",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Mi nivel de conocimiento budista",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "mi nivel de pr\xE1ctica",
  \u6211\u7684\u5B50\u4E3B\u984C: "Mis subtemas",
  \u9084\u6C92\u95B1\u8B80: "No le\xEDdo",
  \u60F3\u8B80: "Quiero leer",
  \u5728\u8B80: "Leyendo",
  \u5DF2\u8B80: "Completado",
  \u4E0D\u8B80: "no leer",
  \u68C4\u8B80: "Lectura abandonada",
  \u7565\u8B80: "hojeando",
  \u901A\u8B80: "lectura completa",
  \u7CBE\u8B80: "Cerrar lectura",
  \u6DF1\u5165\u7814\u8B80: "estudio en profundidad",
  \u57FA\u790E\u95B1\u8B80: "Lectura elemental",
  \u6AA2\u8996\u95B1\u8B80: "Lectura de inspecci\xF3n",
  \u5206\u6790\u95B1\u8B80: "Lectura anal\xEDtica",
  \u4E3B\u984C\u95B1\u8B80: "Lectura sint\xF3pica",
  \u63A8\u85A6: "Recomendar",
  \u4E0D\u63A8\u85A6: "No lo recomiendo",
  \u672A\u6C7A\u5B9A: "indeciso",
  \u4E00\u822C\u8B80\u8005: "Lector general",
  \u521D\u7688\u4F9D\u8005: "Persona que acaba de tomar refugio budista",
  \u5B78\u4F5B\u8005: "estudiante budista",
  \u4FEE\u884C\u8005: "Practicante budista",
  \u771F\u4F5B\u884C\u8005: "Verdadero practicante de la Escuela del Buda",
  \u5973: "Mujer",
  \u7537: "masculino",
  \u5176\u4ED6: "Otro",
  \u4E0D\u9858\u900F\u9732: "Prefiero no decir",
  language: "Idioma de la interfaz de usuario",
  languageHelp: "Los cambios se aplican inmediatamente a la configuraci\xF3n y a las nuevas ventanas de lectura. Los nombres de los comandos se actualizan despu\xE9s de recargar el complemento.",
  connected: "Hola {name}, conexi\xF3n correcta.",
  preview: "Pendiente: {pending}; sin cambios: {unchanged}; necesita correcci\xF3n: {invalid}. S\xF3lo se cargar\xE1n campos de lectura, incluidas las reflexiones.",
  summary: "Guardado: {saved}; sin cambios: {unchanged}; no v\xE1lido: {invalid}; incompleto: {remaining}.",
  changedDuringUpload: "Se realizaron cambios durante la carga. Sincroniza nuevamente para subirlos.",
  profileNotice: "Su perfil se almacena localmente. Solo Guardar y cargar el perfil lo env\xEDa a la base de datos True Buddha Pedia Analytics. Incluye su apodo y su correo electr\xF3nico, a\xF1o/mes de nacimiento, sexo, pa\xEDs, tipo de lector y organizaci\xF3n que proporcione, para la gesti\xF3n de lectores y estad\xEDsticas de lectura futuras. Estos campos no est\xE1n escritos en art\xEDculos. Puede editar su perfil o pedirle al administrador que elimine los datos de la nube. Cada carga del perfil tambi\xE9n env\xEDa el tipo de dispositivo, la versi\xF3n del complemento, el sistema operativo y la cadena de agente de usuario para comprobar la compatibilidad y resolver problemas. Solo se conservan los datos del dispositivo de la \xFAltima carga del perfil; no se recopilan identificadores de hardware. Completa todos los campos del perfil y selecciona al menos un tipo de lector antes de guardar o subir.",
  readingNotice: "Tras aceptar el aviso de carga de datos de lectura, solo los datos que sincroniza manualmente se env\xEDan a la base de datos True Buddha Pedia Analytics en la nube, incluidos el progreso de lectura, las fechas, las valoraciones, las recomendaciones, las palabras clave, los subtemas, las clasificaciones por tipo de lector, el nivel de conocimientos budistas y el nivel de pr\xE1ctica. Los cuerpos de los art\xEDculos y las propiedades no relacionadas no se cargan. Deshabilitar las cargas detiene las cargas futuras pero no elimina los datos existentes en la nube. Los registros de lectura tambi\xE9n incluyen la serie, edici\xF3n, versi\xF3n de Tbpedia, identificador de publicaci\xF3n, c\xF3digo de idioma y t\xEDtulo de la colecci\xF3n instalada.",
  noticeUnavailable: "Este servidor requiere un aviso de privacidad m\xE1s reciente. Actualice el complemento antes de aceptarlo o cargarlo.",
  invalidField: "Verifique el valor y el formato de este campo.",
  invalidChoice: "Elija una de las opciones disponibles.",
  invalidType: "Introduzca un valor del tipo esperado.",
  tooSmall: "El m\xEDnimo es {limit}.",
  tooLarge: "El m\xE1ximo es {limit}.",
  invalidDate: "Introduzca una fecha de calendario v\xE1lida (AAAA-MM-DD).",
  futureBirthYear: "El a\xF1o de nacimiento no puede ser en el futuro.",
  unknownCountry: "Elija un pa\xEDs o regi\xF3n v\xE1lido.",
  birthYearRequired: "Proporcione un a\xF1o de nacimiento al especificar el mes de nacimiento.",
  invalidEmail: "Ingrese una direcci\xF3n de correo electr\xF3nico v\xE1lida.",
  validation: "Por favor corrija los campos no v\xE1lidos.",
  "backend.UNAUTHENTICATED": "No se puede acceder a este lector. Contacte con su administrador para restablecer la conexi\xF3n.",
  "backend.NOT_FOUND": "No se encontr\xF3 el punto final solicitado.",
  "backend.NOT_CONFIGURED": "El almacenamiento en la nube est\xE1 a la espera de la configuraci\xF3n de la base de datos. La lectura local est\xE1 disponible.",
  "backend.BACKEND_ERROR": "No se pudo verificar el funcionamiento de la base de datos. Vuelva a intentarlo m\xE1s tarde o comun\xEDquese con su administrador.",
  "backend.CONSENT_REQUIRED": "Revisar y aceptar el perfil actual y avisos de lectura.",
  "backend.UPLOAD_DISABLED": "Las cargas de lecturas en la nube est\xE1n deshabilitadas.",
  "backend.CONTENT_NOT_FOUND": "Este art\xEDculo no est\xE1 en el cat\xE1logo aprobado.",
  "backend.VALIDATION_FAILED": "Los datos enviados no son v\xE1lidos o el art\xEDculo del cat\xE1logo est\xE1 inactivo.",
  "backend.DUPLICATE_KEY": "Los registros de lectura duplicados requieren reparaci\xF3n por parte del administrador.",
  "backend.METHOD_NOT_ALLOWED": "Este m\xE9todo de solicitud no est\xE1 permitido.",
  "backend.INTERNAL_ERROR": "La solicitud no se pudo completar. Vuelve a intentarlo m\xE1s tarde.",
  "backend.PAYLOAD_TOO_LARGE": "Los datos enviados exceden el l\xEDmite de tama\xF1o.",
  "backend.BAD_REQUEST": "La solicitud debe contener datos JSON v\xE1lidos.",
  "backend.JSON_REQUIRED": "La solicitud debe utilizar application/json.",
  "backend.RATE_LIMITED": "Demasiadas solicitudes. Vuelve a intentarlo m\xE1s tarde.",
  "field.nickname": "Apodo",
  "field.email": "Correo electr\xF3nico",
  "field.birth_year": "a\xF1o de nacimiento",
  "field.birth_month": "Mes de nacimiento",
  "field.sex": "sexo",
  "field.country_code": "Pa\xEDs/regi\xF3n",
  "field.reader_type": "Tipo de lector",
  "field.organisation": "Organizaci\xF3n",
  "field.content_id": "Identificaci\xF3n de contenido",
  "field.schema_version": "Versi\xF3n de datos",
  "field.client_updated_at": "\xDAltima actualizaci\xF3n",
  "field.profile": "Perfil",
  "field.values": "Leyendo datos",
  "backend.BACKEND_TIMEOUT": "La base de datos no respondi\xF3 a tiempo y no se puede confirmar si se guardaron los datos. Vuelva a intentarlo manualmente cuando se restablezca el servicio.",
  followSystem: "Seguir el sistema",
  followSystemHelp: "Usa el idioma configurado en Obsidian; si no est\xE1 disponible, usa ingl\xE9s.",
  updaterReadError: "No se pudo leer la configuraci\xF3n del actualizador de Tbpedia. Revise su archivo data.json y vuelva a intentarlo. Los datos de lectura siguen guardados localmente.",
  updaterChanged: "La colecci\xF3n instalada cambi\xF3 durante la sincronizaci\xF3n. Se detuvieron las cargas restantes. Revise la vista previa y vuelva a sincronizar.",
  updaterSyncNotice: "Los registros de lectura tambi\xE9n incluyen la serie, edici\xF3n, versi\xF3n de Tbpedia, identificador de publicaci\xF3n, c\xF3digo de idioma y t\xEDtulo de la colecci\xF3n instalada.",
  analyticsMetadataReadError: "No se pueden leer o verificar los datos de la colecci\xF3n guardados en data.json del complemento de an\xE1lisis. Recargue el complemento y vuelva a intentarlo.",
  connectionAvailable: "Conexi\xF3n correcta. El almacenamiento en la nube est\xE1 disponible.",
  recordReading: "Registrar mis datos de lectura",
  syncReadingCloud: "Sincronizar datos de lectura con la nube",
  readingContentIdRequired: "Esta nota necesita un tbpedia_content_id v\xE1lido en su frontmatter para registrar datos de lectura.",
  requiredSuffix: "(obligatorio)",
  profileRequiredHelp: "Completa todos los campos del perfil y selecciona al menos un tipo de lector antes de guardar o subir.",
  readerTypesRequired: "Selecciona al menos un tipo de lector.",
  readerId: "ID de lector",
  readerSetup: "Configuraci\xF3n del lector",
  newReader: "Registrar un lector nuevo",
  existingReader: "Conectar un lector existente",
  connectExistingReader: "Conectar lector existente",
  newReaderHelp: "Completa el perfil y gu\xE1rdalo y s\xFAbelo para registrarte con un ID nuevo.",
  readerAlreadyLinked: "Esta b\xF3veda ya est\xE1 vinculada a un lector.",
  readerOperationBusy: "Hay una operaci\xF3n en curso. Int\xE9ntalo cuando termine.",
  readerIdInvalid: "Introduce un ID de lector v\xE1lido.",
  readerRecoveryMismatch: "La nube devolvi\xF3 otro lector. No se guard\xF3 la recuperaci\xF3n.",
  readerIdHelp: "Introduce tu ID de lector para recuperar el perfil. Mantenlo en secreto: permite acceder a tu cuenta.",
  reflectionRemaining: "Quedan {remaining} caracteres (m\xE1ximo {limit})",
  reflectionTooLong: "Acorta tu reflexi\xF3n a {limit} caracteres antes de guardar.",
  showReaderId: "Mostrar ID de lector",
  hideReaderId: "Ocultar ID de lector"
};

// plugin/locales/de.json
var de_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Artikeleigenschaften m\xFCssen ein YAML-Objekt sein.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Der Vorgang konnte nicht abgeschlossen werden. Ihre Daten bleiben lokal gespeichert.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia liest Daten",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Lesedaten \xF6ffnen",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Als lesen markieren",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Als abgeschlossen markieren",
  \u958B\u59CB\u91CD\u8B80: "Beginnen Sie noch einmal mit dem Lesen",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Aktuellen Artikel synchronisieren",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Ge\xE4nderte Lesedaten mit der Cloud synchronisieren",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Plugin-Einstellungen k\xF6nnen nicht gespeichert werden. \xDCberpr\xFCfen Sie die Schreibberechtigungen f\xFCr diesen Tresor.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "Die API muss HTTPS verwenden.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Geben Sie die API-Host-URL ohne Pfad oder Abfrageparameter ein.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Geben Sie einen g\xFCltigen Leser-Verbindungsschl\xFCssel ein.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Es kann keine Verbindung hergestellt werden. Lokale Daten wurden gespeichert. Versuchen Sie es sp\xE4ter noch einmal manuell.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "Der Server hat ung\xFCltige Daten zur\xFCckgegeben.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Die Synchronisierung konnte nicht abgeschlossen werden. Versuchen Sie es sp\xE4ter noch einmal.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Dieser Tresor ist mit einem anderen Leser verkn\xFCpft. Verwenden Sie einen separaten Tresor.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Lesen und akzeptieren Sie zun\xE4chst den Profilhinweis.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Akzeptieren Sie zun\xE4chst den Hinweis zum Hochladen der Lesedaten.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Profil- und Cloud-Berechtigungen aktualisiert.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\xD6ffnen Sie zuerst einen Markdown-Artikel.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Durch einen weiteren Vorgang wurden die Lesedaten dieses Artikels ge\xE4ndert. \xD6ffnen Sie das Formular erneut.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\xD6ffnen Sie zuerst einen Artikel.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Dieser Artikel hat bereits diesen Lesestatus. Beginnen Sie noch einmal mit dem Lesen, bevor Sie es erneut zu Ende lesen.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Lokal gespeicherte Daten auslesen.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "Die Synchronisierung l\xE4uft.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Lesedaten manuell hochladen",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Cloud-Uploads sind deaktiviert. Die Lesedaten bleiben lokal gespeichert.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Speichern und laden Sie zun\xE4chst Ihr Profil in den Einstellungen hoch, um Cloud-Berechtigungen anzuwenden.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Upload-Berechtigungen oder Verbindung ge\xE4ndert. Weitere Uploads wurden gestoppt.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Korrigieren Sie zun\xE4chst doppelte Inhalts-IDs im Tresor.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "Der Server hat eine andere Version best\xE4tigt. Die Synchronisierung wurde nicht als abgeschlossen markiert.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "In der Cloud gespeichert, aber der lokale Synchronisierungsbeleg konnte nicht gespeichert werden. Sie k\xF6nnen die Synchronisierung sp\xE4ter erneut durchf\xFChren.",
  \u53D6\u6D88: "Abbrechen",
  \u958B\u59CB\u4E0A\u50B3: "Starten Sie den Upload",
  \u540C\u6B65\u7D50\u679C: "Ergebnisse synchronisieren",
  \u95DC\u9589: "Schlie\xDFen",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Lesedaten werden zun\xE4chst lokal gespeichert. Es wird nur hochgeladen, wenn Sie manuell synchronisieren.",
  \u8A08\u5283\u95B1\u8B80: "Geplante Lekt\xFCre",
  \u95B1\u8B80\u72C0\u614B: "Lesestatus",
  \u95B1\u8B80\u5C64\u6B21: "Lesetiefe",
  \u672A\u8A2D\u5B9A: "Nicht festgelegt",
  \u95B1\u8B80\u6B21\u6578: "Abgeschlossene Lesungen",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "Die Anzahl der abgeschlossenen Lesungen. Das Starten eines erneuten Lesens f\xFChrt nicht zu einer Erh\xF6hung; Durch das Vervollst\xE4ndigen eines wird eins hinzugef\xFCgt.",
  \u95B1\u8B80\u65E5\u671F: "Lesetermine",
  \u611F\u60F3\u8207\u8A55\u50F9: "Reflexionen und Bewertungen",
  \u95B1\u8B80\u611F\u60F3: "Reflexion lesen",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Meine Empfehlung",
  \u6211\u7684\u8A55\u5206: "Meine Bewertung",
  \u672A\u8A55\u5206: "Nicht bewertet",
  \u6211\u7684\u5206\u985E: "Meine Klassifizierungen",
  "\u6BCF\u884C\u4E00\u9805\u3002": "Ein Artikel pro Zeile.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Meine Lesertypen: F\xFCr wen ist dieser Artikel geeignet?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Speichern und synchronisieren",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Lokal speichern",
  \u9023\u7DDA: "Verbindung",
  "API \u7DB2\u5740": "API-URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Verbindungsschl\xFCssel des Lesers",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Von Ihrem Administrator bereitgestellt; Dies ist nicht der NocoDB-Administratorschl\xFCssel.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Merken Sie sich den Verbindungsschl\xFCssel lokal",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Standardm\xE4\xDFig nicht gespeichert. Wenn diese Option aktiviert ist, wird der Schl\xFCssel unverschl\xFCsselt in der Plugin-Datendatei gespeichert und kann durch Tresorsynchronisierung oder Backups kopiert werden.",
  \u6E2C\u8A66\u9023\u7DDA: "Testverbindung",
  \u5DF2\u958B\u555F: "Aktiviert",
  \u5DF2\u505C\u7528: "Deaktiviert",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Leserprofil",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Spitzname (erforderlich)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "E-Mail (optional, nicht best\xE4tigt)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisation (optional)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "Geburtsjahr (optional)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Geburtsmonat (optional)",
  \u672A\u63D0\u4F9B: "Nicht bereitgestellt",
  \u6027\u5225: "Geschlecht",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Land/Region (optional)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Mein Lesertyp (optional)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "Ich akzeptiere den Profilhinweis",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Manuelle Upload-Berechtigung",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "Ich akzeptiere den Lesedaten-Upload-Hinweis",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Manuelles Hochladen von Lesedaten zulassen",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Wenn Sie dies deaktivieren, werden lokale Uploads sofort gestoppt. Verwenden Sie unten \u201EProfil speichern und hochladen\u201C, um die Cloud-Einstellung anzuwenden.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Cloud-Berechtigungen m\xFCssen noch best\xE4tigt oder beantragt werden.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Profil lokal speichern",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profil lokal gespeichert.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Profil speichern und hochladen",
  \u624B\u52D5\u540C\u6B65: "Manuelle Synchronisierung",
  \u60F3\u8B80\u65E5\u671F: "Wunschdatum lesen",
  \u5728\u8B80\u65E5\u671F: "Startdatum der Lekt\xFCre",
  \u5DF2\u8B80\u65E5\u671F: "Fertigstellungsdatum",
  \u4E0D\u8B80\u65E5\u671F: "Nicht gelesenes Datum",
  \u68C4\u8B80\u65E5\u671F: "Datum der Aufgabe",
  \u6211\u7684\u95DC\u9375\u8A5E: "Meine Schl\xFCsselw\xF6rter",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Meine Lesertypen",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Mein buddhistischer Wissensstand",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "Mein \xDCbungsniveau",
  \u6211\u7684\u5B50\u4E3B\u984C: "Meine Unterthemen",
  \u9084\u6C92\u95B1\u8B80: "Ungelesen",
  \u60F3\u8B80: "M\xF6chte ich lesen",
  \u5728\u8B80: "Wird gelesen",
  \u5DF2\u8B80: "Abgeschlossen",
  \u4E0D\u8B80: "Nicht lesen",
  \u68C4\u8B80: "Abgebrochen",
  \u7565\u8B80: "\xDCberfliegen",
  \u901A\u8B80: "Vollst\xE4ndige Lekt\xFCre",
  \u7CBE\u8B80: "Enge Lekt\xFCre",
  \u6DF1\u5165\u7814\u8B80: "Eingehende Studie",
  \u57FA\u790E\u95B1\u8B80: "Grundlegende Lekt\xFCre",
  \u6AA2\u8996\u95B1\u8B80: "Inspektionslesung",
  \u5206\u6790\u95B1\u8B80: "Analytische Lekt\xFCre",
  \u4E3B\u984C\u95B1\u8B80: "Syntopische Lekt\xFCre",
  \u63A8\u85A6: "Empfehlen",
  \u4E0D\u63A8\u85A6: "Nicht empfehlen",
  \u672A\u6C7A\u5B9A: "Unentschlossen",
  \u4E00\u822C\u8B80\u8005: "Allgemeiner Leser",
  \u521D\u7688\u4F9D\u8005: "Neu zum Buddhismus Zuflucht genommen",
  \u5B78\u4F5B\u8005: "Buddhistischer Student",
  \u4FEE\u884C\u8005: "Buddhistisch Praktizierende",
  \u771F\u4F5B\u884C\u8005: "Wahrer Praktiker der Buddha-Schule",
  \u5973: "Weiblich",
  \u7537: "M\xE4nnlich",
  \u5176\u4ED6: "Andere",
  \u4E0D\u9858\u900F\u9732: "Sag es lieber nicht",
  language: "UI-Sprache",
  languageHelp: "\xC4nderungen gelten sofort f\xFCr Einstellungen und neue Lesefenster. Befehlsnamen werden nach dem Neuladen des Plugins aktualisiert.",
  connected: "Hallo {name}, erfolgreich verbunden.",
  preview: "Ausstehend: {pending}; unver\xE4ndert: {unchanged}; Korrekturbedarf: {invalid}. Es werden nur Lesefelder inklusive Reflexionen hochgeladen.",
  summary: "Gespeichert: {saved}; unver\xE4ndert: {unchanged}; ung\xFCltig: {invalid}; unvollst\xE4ndig: {remaining}.",
  changedDuringUpload: "Beim Hochladen wurden \xC4nderungen vorgenommen. Synchronisieren Sie erneut, um sie hochzuladen.",
  profileNotice: "Ihr Profil wird lokal gespeichert. Nur \u201EProfil speichern und hochladen\u201C sendet es an die True Buddha Pedia Analytics-Datenbank. Dazu geh\xF6ren Ihr Spitzname und Ihre E-Mail-Adresse, Geburtsjahr/-monat, Geschlecht, Land, Lesertyp und Organisation, die Sie f\xFCr die Leserverwaltung und zuk\xFCnftige Lesestatistiken angeben. Diese Felder werden nicht in Artikel geschrieben. Sie k\xF6nnen Ihr Profil bearbeiten oder den Administrator bitten, Cloud-Daten zu l\xF6schen. Bei jedem Profil-Upload werden auch Ger\xE4tetyp, Plugin-Version, Betriebssystem und User-Agent-Zeichenfolge zur Kompatibilit\xE4tspr\xFCfung und Fehlerbehebung gesendet. Gespeichert werden nur die Ger\xE4tedaten des letzten Profil-Uploads; Hardware-Kennungen werden nicht erfasst. F\xFCllen Sie vor dem Speichern oder Hochladen alle Profilfelder aus und w\xE4hlen Sie mindestens einen Lesertyp.",
  readingNotice: "Nach Zustimmung zum Hinweis zum Hochladen von Lesedaten werden nur die manuell synchronisierten Lesedaten an die True Buddha Pedia Analytics-Datenbank in der Cloud gesendet. Dazu geh\xF6ren Lesefortschritt, Datumsangaben, Bewertungen, Empfehlungen, Schl\xFCsselw\xF6rter, Unterthemen, Einordnungen nach Lesertyp, buddhistischer Wissensstand und Praxisniveau. Artikeltexte und nicht verwandte Eigenschaften werden nicht hochgeladen. Durch das Deaktivieren von Uploads werden zuk\xFCnftige Uploads gestoppt, vorhandene Cloud-Daten werden jedoch nicht gel\xF6scht. Lesedatens\xE4tze enthalten au\xDFerdem Serie, Edition, Tbpedia-Version, Release-ID, Sprachcode und Titel der installierten Sammlung.",
  noticeUnavailable: "F\xFCr diesen Server ist eine neuere Datenschutzerkl\xE4rung erforderlich. Aktualisieren Sie das Plugin, bevor Sie es akzeptieren oder hochladen.",
  invalidField: "\xDCberpr\xFCfen Sie den Wert und das Format dieses Feldes.",
  invalidChoice: "W\xE4hlen Sie eine der verf\xFCgbaren Optionen.",
  invalidType: "Geben Sie einen Wert des erwarteten Typs ein.",
  tooSmall: "Das Minimum ist {limit}.",
  tooLarge: "Das Maximum ist {limit}.",
  invalidDate: "Geben Sie ein g\xFCltiges Kalenderdatum ein (JJJJ-MM-TT).",
  futureBirthYear: "Das Geburtsjahr darf nicht in der Zukunft liegen.",
  unknownCountry: "W\xE4hlen Sie ein g\xFCltiges Land oder eine g\xFCltige Region.",
  birthYearRequired: "Geben Sie bei der Angabe eines Geburtsmonats ein Geburtsjahr an.",
  invalidEmail: "Geben Sie eine g\xFCltige E-Mail-Adresse ein.",
  validation: "Bitte korrigieren Sie die ung\xFCltigen Felder.",
  "backend.UNAUTHENTICATED": "Kein Zugriff auf diesen Leser. Wenden Sie sich an Ihren Administrator, um die Verbindung wiederherzustellen.",
  "backend.NOT_FOUND": "Der angeforderte Endpunkt wurde nicht gefunden.",
  "backend.NOT_CONFIGURED": "Der Cloud-Speicher wartet auf die Datenbankkonfiguration. Lokale Lekt\xFCre ist verf\xFCgbar.",
  "backend.BACKEND_ERROR": "Der Datenbankvorgang konnte nicht \xFCberpr\xFCft werden. Versuchen Sie es sp\xE4ter noch einmal oder wenden Sie sich an Ihren Administrator.",
  "backend.CONSENT_REQUIRED": "\xDCberpr\xFCfen und akzeptieren Sie das aktuelle Profil und die Lesehinweise.",
  "backend.UPLOAD_DISABLED": "Das Hochladen von Leseinhalten in die Cloud ist deaktiviert.",
  "backend.CONTENT_NOT_FOUND": "Dieser Artikel ist nicht im genehmigten Katalog enthalten.",
  "backend.VALIDATION_FAILED": "Die \xFCbermittelten Daten sind ung\xFCltig oder das Katalogelement ist inaktiv.",
  "backend.DUPLICATE_KEY": "Doppelte Lesedatens\xE4tze erfordern eine Reparatur durch den Administrator.",
  "backend.METHOD_NOT_ALLOWED": "Diese Anfragemethode ist nicht zul\xE4ssig.",
  "backend.INTERNAL_ERROR": "Die Anfrage konnte nicht abgeschlossen werden. Versuchen Sie es sp\xE4ter noch einmal.",
  "backend.PAYLOAD_TOO_LARGE": "Die \xFCbermittelten Daten \xFCberschreiten die Gr\xF6\xDFenbeschr\xE4nkung.",
  "backend.BAD_REQUEST": "Die Anfrage muss g\xFCltige JSON-Daten enthalten.",
  "backend.JSON_REQUIRED": "Die Anfrage muss application/json verwenden.",
  "backend.RATE_LIMITED": "Zu viele Anfragen. Versuchen Sie es sp\xE4ter noch einmal.",
  "field.nickname": "Spitzname",
  "field.email": "E-Mail",
  "field.birth_year": "Geburtsjahr",
  "field.birth_month": "Geburtsmonat",
  "field.sex": "Geschlecht",
  "field.country_code": "Land/Region",
  "field.reader_type": "Lesertyp",
  "field.organisation": "Organisation",
  "field.content_id": "Inhalts-ID",
  "field.schema_version": "Datenversion",
  "field.client_updated_at": "Zuletzt aktualisiert",
  "field.profile": "Profil",
  "field.values": "Daten lesen",
  "backend.BACKEND_TIMEOUT": "Die Datenbankantwort hat das Zeitlimit \xFCberschritten. Ob gespeichert wurde, ist unklar. Versuchen Sie es nach der Wiederherstellung manuell erneut.",
  followSystem: "Systemsprache verwenden",
  followSystemHelp: "Verwendet die Spracheinstellung von Obsidian. Nicht unterst\xFCtzte Sprachen werden durch Englisch ersetzt.",
  updaterReadError: "Die Einstellungen des Tbpedia-Updaters konnten nicht gelesen werden. Pr\xFCfen Sie dessen data.json und versuchen Sie es erneut. Lesedaten bleiben lokal gespeichert.",
  updaterChanged: "Die installierte Sammlung wurde w\xE4hrend der Synchronisierung ge\xE4ndert. Weitere Uploads wurden gestoppt. Pr\xFCfen Sie die Vorschau und synchronisieren Sie erneut.",
  updaterSyncNotice: "Lesedatens\xE4tze enthalten au\xDFerdem Serie, Edition, Tbpedia-Version, Release-ID, Sprachcode und Titel der installierten Sammlung.",
  analyticsMetadataReadError: "Die in der data.json des Analyse-Plugins gespeicherten Sammlungsdaten konnten nicht gelesen oder best\xE4tigt werden. Laden Sie das Plugin neu und versuchen Sie es erneut.",
  connectionAvailable: "Verbindung erfolgreich. Cloud-Speicher ist verf\xFCgbar.",
  recordReading: "Meine Lesedaten erfassen",
  syncReadingCloud: "Lesedaten mit der Cloud synchronisieren",
  readingContentIdRequired: "Diese Notiz ben\xF6tigt eine g\xFCltige tbpedia_content_id im Frontmatter, bevor Lesedaten erfasst werden k\xF6nnen.",
  requiredSuffix: "(erforderlich)",
  profileRequiredHelp: "F\xFCllen Sie vor dem Speichern oder Hochladen alle Profilfelder aus und w\xE4hlen Sie mindestens einen Lesertyp.",
  readerTypesRequired: "W\xE4hlen Sie mindestens einen Lesertyp.",
  readerId: "Leser-ID",
  readerSetup: "Lesereinrichtung",
  newReader: "Neuen Leser registrieren",
  existingReader: "Bestehenden Leser verbinden",
  connectExistingReader: "Bestehenden Leser verbinden",
  newReaderHelp: "F\xFCllen Sie das Profil aus und speichern und laden Sie es hoch, um eine neue Leser-ID zu erhalten.",
  readerAlreadyLinked: "Dieser Vault ist bereits mit einem Leser verkn\xFCpft.",
  readerOperationBusy: "Ein Vorgang l\xE4uft. Versuchen Sie es danach erneut.",
  readerIdInvalid: "Geben Sie eine g\xFCltige Leser-ID ein.",
  readerRecoveryMismatch: "Die Cloud hat einen anderen Leser zur\xFCckgegeben. Die Wiederherstellung wurde nicht gespeichert.",
  readerIdHelp: "Geben Sie Ihre Leser-ID ein, um das Profil abzurufen. Halten Sie sie geheim: Sie gew\xE4hrt Kontozugriff.",
  reflectionRemaining: "Noch {remaining} Zeichen (maximal {limit})",
  reflectionTooLong: "K\xFCrze deine Reflexion vor dem Speichern auf {limit} Zeichen.",
  showReaderId: "Leser-ID anzeigen",
  hideReaderId: "Leser-ID verbergen"
};

// plugin/locales/nl.json
var nl_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Artikeleigenschappen moeten een YAML-object zijn.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "De operatie kon niet worden voltooid. Uw gegevens blijven lokaal bewaard.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia leest gegevens",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Leesgegevens openen",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Markeer als gelezen",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Markeer als voltooid",
  \u958B\u59CB\u91CD\u8B80: "Begin met herlezen",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Synchroniseer het huidige artikel",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Gewijzigde leesgegevens met de cloud synchroniseren",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Kan plug-ininstellingen niet opslaan. Controleer de schrijfrechten voor deze kluis.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "De API moet HTTPS gebruiken.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Voer de API-host-URL in zonder pad of queryparameters.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Voer een geldige lezerverbindingssleutel in.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Kan geen verbinding maken. Lokale gegevens zijn bewaard gebleven. Probeer het later opnieuw handmatig.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "De server heeft ongeldige gegevens geretourneerd.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Synchronisatie kon niet worden voltooid. Probeer het later opnieuw.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Deze kluis is gekoppeld aan een andere lezer. Gebruik een aparte kluis.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Lees en accepteer eerst de profielkennisgeving.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Accepteer eerst de melding voor het uploaden van leesgegevens.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Profiel- en cloudrechten bijgewerkt.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Open eerst een Markdown-artikel.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Een andere bewerking veranderde de leesgegevens van dit artikel. Open het formulier opnieuw.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "Open eerst een artikel.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Dit artikel heeft al deze leesstatus. Begin met herlezen voordat u het opnieuw voltooit.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Gegevens lezen die lokaal zijn opgeslagen.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "Synchronisatie is bezig.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Handmatig leesgegevens uploaden",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Clouduploads zijn uitgeschakeld. Uitleesgegevens blijven lokaal opgeslagen.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Bewaar en upload uw profiel eerst in de instellingen om cloudrechten toe te passen.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Uploadrechten of verbinding gewijzigd. Verdere uploads stopten.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Corrigeer eerst dubbele inhouds-ID's in de kluis.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "De server heeft een andere versie bevestigd. Synchronisatie is niet gemarkeerd als voltooid.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Opgeslagen in de cloud, maar het lokale synchronisatiebewijs kon niet worden opgeslagen. U kunt later opnieuw synchroniseren.",
  \u53D6\u6D88: "Annuleer",
  \u958B\u59CB\u4E0A\u50B3: "Begin met uploaden",
  \u540C\u6B65\u7D50\u679C: "Synchroniseer resultaten",
  \u95DC\u9589: "Sluiten",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Uitleesgegevens worden eerst lokaal opgeslagen. Het wordt alleen ge\xFCpload als u handmatig synchroniseert.",
  \u8A08\u5283\u95B1\u8B80: "Geplande lectuur",
  \u95B1\u8B80\u72C0\u614B: "Leesstatus",
  \u95B1\u8B80\u5C64\u6B21: "Diepte lezen",
  \u672A\u8A2D\u5B9A: "Niet ingesteld",
  \u95B1\u8B80\u6B21\u6578: "Voltooide lezingen",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "Het aantal voltooide metingen. Het starten van een herlezing verhoogt het niet; als je er \xE9\xE9n voltooit, wordt er \xE9\xE9n toegevoegd.",
  \u95B1\u8B80\u65E5\u671F: "Data lezen",
  \u611F\u60F3\u8207\u8A55\u50F9: "Reflecties en beoordelingen",
  \u95B1\u8B80\u611F\u60F3: "Reflectie lezen",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Mijn aanbeveling",
  \u6211\u7684\u8A55\u5206: "Mijn beoordeling",
  \u672A\u8A55\u5206: "Niet beoordeeld",
  \u6211\u7684\u5206\u985E: "Mijn classificaties",
  "\u6BCF\u884C\u4E00\u9805\u3002": "E\xE9n artikel per regel.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Mijn lezerstypes: voor wie is dit artikel geschikt?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Opslaan en synchroniseren",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Lokaal opslaan",
  \u9023\u7DDA: "Verbinding",
  "API \u7DB2\u5740": "API-URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Verbindingssleutel van lezer",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Aangeleverd door uw beheerder; dit is niet de NocoDB-beheerderssleutel.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Onthoud de verbindingssleutel lokaal",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Niet standaard opgeslagen. Indien ingeschakeld, wordt de sleutel onversleuteld opgeslagen in het gegevensbestand van de plug-in en kan deze worden gekopieerd via kluissynchronisatie of back-ups.",
  \u6E2C\u8A66\u9023\u7DDA: "Verbinding testen",
  \u5DF2\u958B\u555F: "Ingeschakeld",
  \u5DF2\u505C\u7528: "Uitgeschakeld",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Lezersprofiel",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Bijnaam (verplicht)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "E-mail (optioneel, niet geverifieerd)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisatie (optioneel)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "Geboortejaar (optioneel)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Geboortemaand (optioneel)",
  \u672A\u63D0\u4F9B: "Niet voorzien",
  \u6027\u5225: "Geslacht",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Land/regio (optioneel)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Mijn lezertype (optioneel)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "Ik accepteer de profielkennisgeving",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Handmatige uploadtoestemming",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "Ik accepteer de melding van het uploaden van leesgegevens",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Handmatige leesgegevensuploads toestaan",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Als u dit uitschakelt, worden lokale uploads onmiddellijk stopgezet. Gebruik Profiel opslaan en uploaden hieronder om de cloudinstelling toe te passen.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Cloudmachtigingen moeten nog steeds worden bevestigd of toegepast.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Profiel lokaal opslaan",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profiel lokaal opgeslagen.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Profiel opslaan en uploaden",
  \u624B\u52D5\u540C\u6B65: "Handmatige synchronisatie",
  \u60F3\u8B80\u65E5\u671F: "Datum om te lezen",
  \u5728\u8B80\u65E5\u671F: "Startdatum lezen",
  \u5DF2\u8B80\u65E5\u671F: "Voltooiingsdatum",
  \u4E0D\u8B80\u65E5\u671F: "Niet-lezen datum",
  \u68C4\u8B80\u65E5\u671F: "Datum van stopzetting",
  \u6211\u7684\u95DC\u9375\u8A5E: "Mijn trefwoorden",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Mijn lezer typt",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Mijn boeddhistische kennisniveau",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "Mijn oefenniveau",
  \u6211\u7684\u5B50\u4E3B\u984C: "Mijn subonderwerpen",
  \u9084\u6C92\u95B1\u8B80: "Ongelezen",
  \u60F3\u8B80: "Wil lezen",
  \u5728\u8B80: "Lezen",
  \u5DF2\u8B80: "Voltooid",
  \u4E0D\u8B80: "Niet lezen",
  \u68C4\u8B80: "Afgebroken",
  \u7565\u8B80: "Skimmen",
  \u901A\u8B80: "Volledige lezing",
  \u7CBE\u8B80: "Nauwkeurig lezen",
  \u6DF1\u5165\u7814\u8B80: "Diepgaande studie",
  \u57FA\u790E\u95B1\u8B80: "Elementair lezen",
  \u6AA2\u8996\u95B1\u8B80: "Inspectielezing",
  \u5206\u6790\u95B1\u8B80: "Analytisch lezen",
  \u4E3B\u984C\u95B1\u8B80: "Syntopisch lezen",
  \u63A8\u85A6: "Aanbevelen",
  \u4E0D\u63A8\u85A6: "Niet aanbevelen",
  \u672A\u6C7A\u5B9A: "Onbeslist",
  \u4E00\u822C\u8B80\u8005: "Algemene lezer",
  \u521D\u7688\u4F9D\u8005: "Onlangs boeddhistische toevlucht genomen",
  \u5B78\u4F5B\u8005: "Boeddhistische student",
  \u4FEE\u884C\u8005: "Boeddhistisch beoefenaar",
  \u771F\u4F5B\u884C\u8005: "Echte beoefenaar van de Boeddha School",
  \u5973: "Vrouw",
  \u7537: "Mannetje",
  \u5176\u4ED6: "Anders",
  \u4E0D\u9858\u900F\u9732: "Zeg het liever niet",
  language: "UI-taal",
  languageHelp: "Wijzigingen zijn onmiddellijk van toepassing op instellingen en nieuwe leesvensters. Commandonamen worden bijgewerkt nadat de plug-in opnieuw is geladen.",
  connected: "Hallo {name}, verbinding geslaagd.",
  preview: "In behandeling: {pending}; ongewijzigd: {unchanged}; correctie nodig: {invalid}. Alleen leesvelden, inclusief reflecties, worden ge\xFCpload.",
  summary: "Opgeslagen: {saved}; ongewijzigd: {unchanged}; ongeldig: {invalid}; onvolledig: {remaining}.",
  changedDuringUpload: "Er zijn wijzigingen aangebracht tijdens het uploaden. Synchroniseer opnieuw om ze te uploaden.",
  profileNotice: "Uw profiel wordt lokaal opgeslagen. Alleen het profiel Opslaan en uploaden stuurt het naar de True Buddha Pedia Analytics-database. Het omvat uw bijnaam en uw e-mail, geboortejaar/maand, geslacht, land, lezerstype en organisatie die u opgeeft, voor lezersbeheer en toekomstige leesstatistieken. Deze velden worden niet in artikelen geschreven. U kunt uw profiel bewerken of de beheerder vragen cloudgegevens te verwijderen. Bij elke profielupload worden ook het apparaattype, de plug-inversie, het besturingssysteem en de user-agenttekenreeks verzonden voor compatibiliteit en probleemoplossing. Alleen de apparaatgegevens van de laatste profielupload worden bewaard; er worden geen hardware-identificatoren verzameld. Vul alle profielvelden in en selecteer minstens \xE9\xE9n lezerstype voordat u opslaat of uploadt.",
  readingNotice: "Na acceptatie van de kennisgeving over het uploaden van leesgegevens worden alleen de gegevens die u handmatig synchroniseert naar de True Buddha Pedia Analytics-database in de cloud verzonden, waaronder leesvoortgang, datums, beoordelingen, aanbevelingen, trefwoorden, subonderwerpen, indelingen naar lezerstype, boeddhistisch kennisniveau en beoefeningsniveau. Artikelteksten en niet-gerelateerde eigenschappen worden niet ge\xFCpload. Als u uploads uitschakelt, worden toekomstige uploads gestopt, maar worden bestaande cloudgegevens niet verwijderd. Leesrecords bevatten ook de serie, editie, Tbpedia-versie, release-ID, taalcode en titel van de ge\xEFnstalleerde collectie.",
  noticeUnavailable: "Voor deze server is een nieuwere privacyverklaring vereist. Update de plug-in voordat u deze accepteert of uploadt.",
  invalidField: "Controleer de waarde en indeling van dit veld.",
  invalidChoice: "Kies een van de beschikbare opties.",
  invalidType: "Voer een waarde van het verwachte type in.",
  tooSmall: "Het minimum is {limit}.",
  tooLarge: "Het maximum is {limit}.",
  invalidDate: "Voer een geldige kalenderdatum in (JJJJ-MM-DD).",
  futureBirthYear: "Het geboortejaar kan niet in de toekomst liggen.",
  unknownCountry: "Kies een geldig land of regio.",
  birthYearRequired: "Geef bij het opgeven van een geboortemaand een geboortejaar op.",
  invalidEmail: "Voer een geldig e-mailadres in.",
  validation: "Corrigeer de ongeldige velden.",
  "backend.UNAUTHENTICATED": "Geen toegang tot deze lezer. Neem contact op met uw beheerder om de verbinding te herstellen.",
  "backend.NOT_FOUND": "Het aangevraagde eindpunt is niet gevonden.",
  "backend.NOT_CONFIGURED": "Cloudopslag wacht op databaseconfiguratie. Lokale lectuur is beschikbaar.",
  "backend.BACKEND_ERROR": "De databasebewerking kan niet worden geverifieerd. Probeer het later opnieuw of neem contact op met uw beheerder.",
  "backend.CONSENT_REQUIRED": "Controleer en accepteer het huidige profiel en de leesmeldingen.",
  "backend.UPLOAD_DISABLED": "Uploads van cloud-leesbestanden zijn uitgeschakeld.",
  "backend.CONTENT_NOT_FOUND": "Dit artikel staat niet in de goedgekeurde catalogus.",
  "backend.VALIDATION_FAILED": "De ingediende gegevens zijn ongeldig of het catalogusitem is inactief.",
  "backend.DUPLICATE_KEY": "Dubbele leesrecords vereisen reparatie door de beheerder.",
  "backend.METHOD_NOT_ALLOWED": "Deze verzoekmethode is niet toegestaan.",
  "backend.INTERNAL_ERROR": "Het verzoek kon niet worden voltooid. Probeer het later opnieuw.",
  "backend.PAYLOAD_TOO_LARGE": "De ingediende gegevens overschrijden de maximale grootte.",
  "backend.BAD_REQUEST": "Het verzoek moet geldige JSON-gegevens bevatten.",
  "backend.JSON_REQUIRED": "De aanvraag moet application/json gebruiken.",
  "backend.RATE_LIMITED": "Te veel verzoeken. Probeer het later opnieuw.",
  "field.nickname": "Bijnaam",
  "field.email": "E-mail",
  "field.birth_year": "Geboorte jaar",
  "field.birth_month": "Geboorte maand",
  "field.sex": "Geslacht",
  "field.country_code": "Land/regio",
  "field.reader_type": "Type lezer",
  "field.organisation": "Organisatie",
  "field.content_id": "Inhouds-ID",
  "field.schema_version": "Gegevensversie",
  "field.client_updated_at": "Laatst bijgewerkt",
  "field.profile": "Profiel",
  "field.values": "Gegevens lezen",
  "backend.BACKEND_TIMEOUT": "De database reageerde niet op tijd. Het is onzeker of de gegevens zijn opgeslagen. Probeer het na herstel handmatig opnieuw.",
  followSystem: "Systeem volgen",
  followSystemHelp: "Gebruikt de taalinstelling van Obsidian, met Engels als terugvaltaal.",
  updaterReadError: "De instellingen van de Tbpedia-updater kunnen niet worden gelezen. Controleer het bestand data.json en probeer opnieuw. Leesgegevens blijven lokaal opgeslagen.",
  updaterChanged: "De ge\xEFnstalleerde collectie is tijdens het synchroniseren gewijzigd. Verdere uploads zijn gestopt. Bekijk het voorbeeld en synchroniseer opnieuw.",
  updaterSyncNotice: "Leesrecords bevatten ook de serie, editie, Tbpedia-versie, release-ID, taalcode en titel van de ge\xEFnstalleerde collectie.",
  analyticsMetadataReadError: "De collectiegegevens in data.json van de analyseplug-in kunnen niet worden gelezen of gecontroleerd. Herlaad de plug-in en probeer opnieuw.",
  connectionAvailable: "Verbinding geslaagd. Cloudopslag is beschikbaar.",
  recordReading: "Mijn leesgegevens vastleggen",
  syncReadingCloud: "Leesgegevens synchroniseren met de cloud",
  readingContentIdRequired: "Deze notitie heeft een geldige tbpedia_content_id in de frontmatter nodig om leesgegevens vast te leggen.",
  requiredSuffix: "(verplicht)",
  profileRequiredHelp: "Vul alle profielvelden in en selecteer minstens \xE9\xE9n lezerstype voordat u opslaat of uploadt.",
  readerTypesRequired: "Selecteer minstens \xE9\xE9n lezerstype.",
  readerId: "Lezer-ID",
  readerSetup: "Lezer instellen",
  newReader: "Nieuwe lezer registreren",
  existingReader: "Bestaande lezer verbinden",
  connectExistingReader: "Bestaande lezer verbinden",
  newReaderHelp: "Vul het profiel in en sla het op en upload het om een nieuwe lezer-ID te krijgen.",
  readerAlreadyLinked: "Deze kluis is al gekoppeld aan een lezer.",
  readerOperationBusy: "Er loopt een bewerking. Probeer het daarna opnieuw.",
  readerIdInvalid: "Voer een geldige lezer-ID in.",
  readerRecoveryMismatch: "De cloud gaf een andere lezer terug. Het herstel is niet opgeslagen.",
  readerIdHelp: "Voer uw lezer-ID in om uw profiel op te halen. Houd deze geheim: deze geeft toegang tot uw account.",
  reflectionRemaining: "Nog {remaining} tekens (maximaal {limit})",
  reflectionTooLong: "Kort je reflectie in tot {limit} tekens voordat je opslaat.",
  showReaderId: "Lezers-ID tonen",
  hideReaderId: "Lezers-ID verbergen"
};

// plugin/locales/sv.json
var sv_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Artikelegenskaper m\xE5ste vara ett YAML-objekt.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\xC5tg\xE4rden kunde inte slutf\xF6ras. Din data f\xF6rblir sparad lokalt.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia l\xE4ser data",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\xD6ppna l\xE4sdata",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Markera som l\xE4sning",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Markera som slutf\xF6rt",
  \u958B\u59CB\u91CD\u8B80: "B\xF6rja l\xE4sa om",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Synkronisera aktuell artikel",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Synkronisera \xE4ndrade l\xE4sdata till molnet",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Det gick inte att spara plugin-inst\xE4llningarna. Kontrollera skrivbeh\xF6righeterna f\xF6r detta valv.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API:t m\xE5ste anv\xE4nda HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Ange API-v\xE4rdens URL utan s\xF6kv\xE4g eller fr\xE5geparametrar.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Ange en giltig l\xE4saranslutningsnyckel.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Det g\xE5r inte att ansluta. Lokala uppgifter har sparats. F\xF6rs\xF6k igen manuellt senare.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "Servern returnerade ogiltiga data.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Synkroniseringen kunde inte slutf\xF6ras. F\xF6rs\xF6k igen senare.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Detta valv \xE4r l\xE4nkat till en annan l\xE4sare. Anv\xE4nd ett separat valv.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "L\xE4s och acceptera profilmeddelandet f\xF6rst.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Acceptera meddelandet om uppladdning av l\xE4sdata f\xF6rst.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Profil- och molnbeh\xF6righeter uppdaterade.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\xD6ppna en Markdown-artikel f\xF6rst.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "En annan operation \xE4ndrade den h\xE4r artikelns l\xE4sdata. \xD6ppna formul\xE4ret igen.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\xD6ppna en artikel f\xF6rst.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Den h\xE4r artikeln har redan denna l\xE4sstatus. B\xF6rja l\xE4sa om innan du slutf\xF6r den igen.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "L\xE4ser data som sparats lokalt.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "Synkronisering p\xE5g\xE5r.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Ladda upp l\xE4sdata manuellt",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Molnuppladdningar \xE4r inaktiverade. L\xE4sdata f\xF6rblir sparade lokalt.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Spara och ladda upp din profil i inst\xE4llningarna f\xF6rst f\xF6r att till\xE4mpa molnbeh\xF6righeter.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Uppladdningsbeh\xF6righeter eller anslutning har \xE4ndrats. Ytterligare uppladdningar stoppades.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Korrigera dubbletter av inneh\xE5lls-ID:n i valvet f\xF6rst.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "Servern bekr\xE4ftade en annan version. Synkronisering har inte markerats som slutf\xF6rd.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Sparades i molnet, men det lokala synkroniseringskvittot kunde inte sparas. Du kan synkronisera igen senare.",
  \u53D6\u6D88: "Avbryt",
  \u958B\u59CB\u4E0A\u50B3: "B\xF6rja ladda upp",
  \u540C\u6B65\u7D50\u679C: "Synkronisera resultat",
  \u95DC\u9589: "St\xE4ng",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "L\xE4sdata sparas lokalt f\xF6rst. Den laddas bara upp n\xE4r du synkroniserar manuellt.",
  \u8A08\u5283\u95B1\u8B80: "Planerad l\xE4sning",
  \u95B1\u8B80\u72C0\u614B: "L\xE4sstatus",
  \u95B1\u8B80\u5C64\u6B21: "L\xE4sdjup",
  \u672A\u8A2D\u5B9A: "Inte inst\xE4llt",
  \u95B1\u8B80\u6B21\u6578: "Genomf\xF6rda avl\xE4sningar",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "Antalet genomf\xF6rda avl\xE4sningar. Att starta en oml\xE4sning \xF6kar den inte; slutf\xF6ra en l\xE4gger till en.",
  \u95B1\u8B80\u65E5\u671F: "L\xE4sdatum",
  \u611F\u60F3\u8207\u8A55\u50F9: "Reflektioner och betyg",
  \u95B1\u8B80\u611F\u60F3: "L\xE4sreflektion",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Min rekommendation",
  \u6211\u7684\u8A55\u5206: "Mitt betyg",
  \u672A\u8A55\u5206: "Inte betygsatt",
  \u6211\u7684\u5206\u985E: "Mina klassificeringar",
  "\u6BCF\u884C\u4E00\u9805\u3002": "En artikel per rad.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Mina l\xE4sare skriver: vem \xE4r den h\xE4r artikeln l\xE4mplig f\xF6r?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Spara och synkronisera",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Spara lokalt",
  \u9023\u7DDA: "Anslutning",
  "API \u7DB2\u5740": "API URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "L\xE4sarens anslutningsnyckel",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Tillhandah\xE5lls av din administrat\xF6r; detta \xE4r inte NocoDB-administrat\xF6rsnyckeln.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Kom ih\xE5g anslutningsnyckel lokalt",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Sparas inte som standard. Om den \xE4r aktiverad lagras nyckeln okrypterad i plugindatafilen och kan kopieras genom valvsynkronisering eller s\xE4kerhetskopior.",
  \u6E2C\u8A66\u9023\u7DDA: "Testa anslutningen",
  \u5DF2\u958B\u555F: "Aktiverad",
  \u5DF2\u505C\u7528: "Inaktiverad",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "L\xE4sarprofil",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Smeknamn (obligatoriskt)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "E-post (valfritt, ej verifierat)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisation (valfritt)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "F\xF6delse\xE5r (valfritt)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "F\xF6delsem\xE5nad (valfritt)",
  \u672A\u63D0\u4F9B: "Ej tillhandah\xE5llen",
  \u6027\u5225: "K\xF6n",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Land/region (valfritt)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Min l\xE4sartyp (valfritt)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "Jag accepterar profilmeddelandet",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Manuell uppladdningsbeh\xF6righet",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "Jag accepterar meddelandet om uppladdning av l\xE4sdata",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Till\xE5t manuell uppladdning av data",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Om du st\xE4nger av detta stoppas lokala uppladdningar omedelbart. Anv\xE4nd Spara och ladda upp profilen nedan f\xF6r att till\xE4mpa molninst\xE4llningen.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Molnbeh\xF6righeter beh\xF6ver fortfarande bekr\xE4ftelse eller ans\xF6kan.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Spara profil lokalt",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profilen har sparats lokalt.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Spara och ladda upp profil",
  \u624B\u52D5\u540C\u6B65: "Manuell synkronisering",
  \u60F3\u8B80\u65E5\u671F: "Vill l\xE4sa dejt",
  \u5728\u8B80\u65E5\u671F: "Startdatum f\xF6r l\xE4sning",
  \u5DF2\u8B80\u65E5\u671F: "Slutdatum",
  \u4E0D\u8B80\u65E5\u671F: "Ej l\xE4sdatum",
  \u68C4\u8B80\u65E5\u671F: "Datum f\xF6r avbruten l\xE4sning",
  \u6211\u7684\u95DC\u9375\u8A5E: "Mina nyckelord",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Mina l\xE4sartyper",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Min buddhistiska kunskapsniv\xE5",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "Min ut\xF6vningsniv\xE5",
  \u6211\u7684\u5B50\u4E3B\u984C: "Mina del\xE4mnen",
  \u9084\u6C92\u95B1\u8B80: "Ol\xE4st",
  \u60F3\u8B80: "Vill l\xE4sa",
  \u5728\u8B80: "L\xE4ser",
  \u5DF2\u8B80: "Avslutad",
  \u4E0D\u8B80: "L\xE4ser inte",
  \u68C4\u8B80: "Avbruten",
  \u7565\u8B80: "\xD6versiktsl\xE4sning",
  \u901A\u8B80: "Full l\xE4sning",
  \u7CBE\u8B80: "N\xE4rl\xE4sning",
  \u6DF1\u5165\u7814\u8B80: "F\xF6rdjupad studie",
  \u57FA\u790E\u95B1\u8B80: "Element\xE4r l\xE4sning",
  \u6AA2\u8996\u95B1\u8B80: "Inspektionsavl\xE4sning",
  \u5206\u6790\u95B1\u8B80: "Analytisk l\xE4sning",
  \u4E3B\u984C\u95B1\u8B80: "Syntopisk l\xE4sning",
  \u63A8\u85A6: "Rekommendera",
  \u4E0D\u63A8\u85A6: "Rekommenderar inte",
  \u672A\u6C7A\u5B9A: "Obest\xE4md",
  \u4E00\u822C\u8B80\u8005: "Allm\xE4n l\xE4sare",
  \u521D\u7688\u4F9D\u8005: "Nyligen tagit buddhistisk tillflykt",
  \u5B78\u4F5B\u8005: "Buddhistisk student",
  \u4FEE\u884C\u8005: "Buddhistisk ut\xF6vare",
  \u771F\u4F5B\u884C\u8005: "Sann Buddha School-ut\xF6vare",
  \u5973: "Kvinna",
  \u7537: "Hane",
  \u5176\u4ED6: "Annat",
  \u4E0D\u9858\u900F\u9732: "F\xF6redrar att inte s\xE4ga",
  language: "UI-spr\xE5k",
  languageHelp: "\xC4ndringar g\xE4ller inst\xE4llningar och nya l\xE4sf\xF6nster omedelbart. Kommandonamn uppdateras efter att plugin-programmet laddats om.",
  connected: "Hej {name}, anslutningen lyckades.",
  preview: "V\xE4ntande: {pending}; of\xF6r\xE4ndrad: {unchanged}; beh\xF6ver korrigering: {invalid}. Endast l\xE4sf\xE4lt, inklusive reflektioner, kommer att laddas upp.",
  summary: "Sparad: {saved}; of\xF6r\xE4ndrad: {unchanged}; ogiltig: {invalid}; ofullst\xE4ndig: {remaining}.",
  changedDuringUpload: "\xC4ndringar gjordes under uppladdningen. Synkronisera igen f\xF6r att ladda upp dem.",
  profileNotice: "Din profil lagras lokalt. Endast Spara och ladda upp profil skickar den till databasen True Buddha Pedia Analytics. Det inkluderar ditt smeknamn och e-post, f\xF6delse\xE5r/m\xE5nad, k\xF6n, land, l\xE4sartyp och organisation du tillhandah\xE5ller, f\xF6r l\xE4sarhantering och framtida l\xE4sstatistik. Dessa f\xE4lt \xE4r inte inskrivna i artiklar. Du kan redigera din profil eller be administrat\xF6ren att radera molndata. Varje profiluppladdning skickar \xE4ven enhetstyp, till\xE4ggsversion, operativsystem och anv\xE4ndaragentstr\xE4ng f\xF6r kompatibilitet och fels\xF6kning. Endast enhetsuppgifterna fr\xE5n den senaste profiluppladdningen sparas; inga maskinvaruidentifierare samlas in. Fyll i alla profilf\xE4lt och v\xE4lj minst en l\xE4sartyp innan du sparar eller laddar upp.",
  readingNotice: "N\xE4r du har godk\xE4nt informationen om uppladdning av l\xE4sdata skickas endast de l\xE4sdata som du synkroniserar manuellt till databasen True Buddha Pedia Analytics i molnet. Detta omfattar l\xE4sframsteg, datum, betyg, rekommendationer, nyckelord, under\xE4mnen, klassificeringar efter l\xE4sartyp, buddhistisk kunskapsniv\xE5 och ut\xF6vningsniv\xE5. Artikeltexter och icke-relaterade egenskaper laddas inte upp. Om du inaktiverar uppladdningar stoppas framtida uppladdningar men befintlig molndata raderas inte. L\xE4sposter inneh\xE5ller \xE4ven den installerade samlingens serie, utg\xE5va, Tbpedia-version, versions-ID, spr\xE5kkod och titel.",
  noticeUnavailable: "Den h\xE4r servern kr\xE4ver ett nyare sekretessmeddelande. Uppdatera plugin-programmet innan du accepterar det eller laddar upp det.",
  invalidField: "Kontrollera detta f\xE4lts v\xE4rde och format.",
  invalidChoice: "V\xE4lj ett av de tillg\xE4ngliga alternativen.",
  invalidType: "Ange ett v\xE4rde av den f\xF6rv\xE4ntade typen.",
  tooSmall: "Minimum \xE4r {limit}.",
  tooLarge: "Maxv\xE4rdet \xE4r {limit}.",
  invalidDate: "Ange ett giltigt kalenderdatum (\xC5\xC5\xC5\xC5-MM-DD).",
  futureBirthYear: "F\xF6delse\xE5r kan inte ligga i framtiden.",
  unknownCountry: "V\xE4lj ett giltigt land eller omr\xE5de.",
  birthYearRequired: "Ange ett f\xF6delse\xE5r n\xE4r du anger en f\xF6delsem\xE5nad.",
  invalidEmail: "Ange en giltig e-postadress.",
  validation: "V\xE4nligen korrigera de ogiltiga f\xE4lten.",
  "backend.UNAUTHENTICATED": "Det g\xE5r inte att komma \xE5t l\xE4saren. Kontakta administrat\xF6ren f\xF6r att \xE5terst\xE4lla anslutningen.",
  "backend.NOT_FOUND": "Den beg\xE4rda slutpunkten hittades inte.",
  "backend.NOT_CONFIGURED": "Molnlagring v\xE4ntar p\xE5 databaskonfiguration. Lokal l\xE4sning \xE4r tillg\xE4nglig.",
  "backend.BACKEND_ERROR": "Databas\xE5tg\xE4rden kunde inte verifieras. F\xF6rs\xF6k igen senare eller kontakta din administrat\xF6r.",
  "backend.CONSENT_REQUIRED": "Granska och acceptera den aktuella profilen och l\xE4smeddelanden.",
  "backend.UPLOAD_DISABLED": "Molnl\xE4sningsuppladdningar \xE4r inaktiverade.",
  "backend.CONTENT_NOT_FOUND": "Denna artikel finns inte i den godk\xE4nda katalogen.",
  "backend.VALIDATION_FAILED": "De inl\xE4mnade uppgifterna \xE4r ogiltiga eller s\xE5 \xE4r katalogobjektet inaktivt.",
  "backend.DUPLICATE_KEY": "Duplicerade l\xE4sposter kr\xE4ver administrat\xF6rsreparation.",
  "backend.METHOD_NOT_ALLOWED": "Denna beg\xE4ranmetod \xE4r inte till\xE5ten.",
  "backend.INTERNAL_ERROR": "Beg\xE4ran kunde inte slutf\xF6ras. F\xF6rs\xF6k igen senare.",
  "backend.PAYLOAD_TOO_LARGE": "De inl\xE4mnade uppgifterna \xF6verskrider storleksgr\xE4nsen.",
  "backend.BAD_REQUEST": "Beg\xE4ran m\xE5ste inneh\xE5lla giltig JSON-data.",
  "backend.JSON_REQUIRED": "F\xF6rfr\xE5gan m\xE5ste anv\xE4nda application/json.",
  "backend.RATE_LIMITED": "F\xF6r m\xE5nga f\xF6rfr\xE5gningar. F\xF6rs\xF6k igen senare.",
  "field.nickname": "Smeknamn",
  "field.email": "E-post",
  "field.birth_year": "F\xF6delse\xE5r",
  "field.birth_month": "F\xF6delsem\xE5nad",
  "field.sex": "K\xF6n",
  "field.country_code": "Land/region",
  "field.reader_type": "L\xE4sartyp",
  "field.organisation": "Organisation",
  "field.content_id": "Inneh\xE5lls-ID",
  "field.schema_version": "Dataversion",
  "field.client_updated_at": "Senast uppdaterad",
  "field.profile": "Profil",
  "field.values": "L\xE4ser data",
  "backend.BACKEND_TIMEOUT": "Databasens svar tog f\xF6r l\xE5ng tid och det \xE4r os\xE4kert om uppgifterna sparades. F\xF6rs\xF6k igen manuellt n\xE4r tj\xE4nsten fungerar.",
  followSystem: "F\xF6lj systemet",
  followSystemHelp: "Anv\xE4nder Obsidians spr\xE5kinst\xE4llning, med engelska som reservspr\xE5k.",
  updaterReadError: "Det gick inte att l\xE4sa inst\xE4llningarna f\xF6r Tbpedia-uppdateraren. Kontrollera dess data.json och f\xF6rs\xF6k igen. L\xE4sdata \xE4r fortfarande sparade lokalt.",
  updaterChanged: "Den installerade samlingen \xE4ndrades under synkroniseringen. Ytterligare uppladdningar stoppades. Granska f\xF6rhandsvisningen och synkronisera igen.",
  updaterSyncNotice: "L\xE4sposter inneh\xE5ller \xE4ven den installerade samlingens serie, utg\xE5va, Tbpedia-version, versions-ID, spr\xE5kkod och titel.",
  analyticsMetadataReadError: "Det gick inte att l\xE4sa eller verifiera samlingsuppgifterna i analysmodulens data.json. Ladda om till\xE4gget och f\xF6rs\xF6k igen.",
  connectionAvailable: "Anslutningen lyckades. Molnlagring \xE4r tillg\xE4nglig.",
  recordReading: "Registrera mina l\xE4sdata",
  syncReadingCloud: "Synkronisera l\xE4sdata till molnet",
  readingContentIdRequired: "Anteckningen beh\xF6ver ett giltigt tbpedia_content_id i frontmatter innan l\xE4sdata kan registreras.",
  requiredSuffix: "(obligatoriskt)",
  profileRequiredHelp: "Fyll i alla profilf\xE4lt och v\xE4lj minst en l\xE4sartyp innan du sparar eller laddar upp.",
  readerTypesRequired: "V\xE4lj minst en l\xE4sartyp.",
  readerId: "L\xE4sar-ID",
  readerSetup: "L\xE4sarinst\xE4llning",
  newReader: "Registrera ny l\xE4sare",
  existingReader: "Anslut befintlig l\xE4sare",
  connectExistingReader: "Anslut befintlig l\xE4sare",
  newReaderHelp: "Fyll i profilen och spara och ladda upp den f\xF6r att f\xE5 ett nytt l\xE4sar-ID.",
  readerAlreadyLinked: "Valvet \xE4r redan kopplat till en l\xE4sare.",
  readerOperationBusy: "En \xE5tg\xE4rd p\xE5g\xE5r. F\xF6rs\xF6k igen n\xE4r den \xE4r klar.",
  readerIdInvalid: "Ange ett giltigt l\xE4sar-ID.",
  readerRecoveryMismatch: "Molnet returnerade en annan l\xE4sare. \xC5terst\xE4llningen sparades inte.",
  readerIdHelp: "Ange ditt l\xE4sar-ID f\xF6r att h\xE4mta profilen. H\xE5ll det hemligt: det ger \xE5tkomst till kontot.",
  reflectionRemaining: "{remaining} tecken kvar (h\xF6gst {limit})",
  reflectionTooLong: "Korta din reflektion till {limit} tecken innan du sparar.",
  showReaderId: "Visa l\xE4sar-ID",
  hideReaderId: "D\xF6lj l\xE4sar-ID"
};

// plugin/locales/ko.json
var ko_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\uAE30\uC0AC \uC18D\uC131\uC740 YAML \uAC1C\uCCB4\uC5EC\uC57C \uD569\uB2C8\uB2E4.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\uC791\uC5C5\uC744 \uC644\uB8CC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADC0\uD558\uC758 \uB370\uC774\uD130\uB294 \uB85C\uCEEC\uC5D0 \uACC4\uC18D \uC800\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "\uD2F0\uBE44\uD53C\uB514\uC544\uC5D0\uC11C \uC77D\uB294 \uB370\uC774\uD130",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\uC77D\uAE30 \uB370\uC774\uD130 \uC5F4\uAE30",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\uC77D\uB294 \uC911\uC73C\uB85C \uD45C\uC2DC",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\uC644\uB8CC\uB85C \uD45C\uC2DC",
  \u958B\u59CB\u91CD\u8B80: "\uB2E4\uC2DC \uC77D\uAE30 \uC2DC\uC791",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\uD604\uC7AC \uAE30\uC0AC \uB3D9\uAE30\uD654",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\uBCC0\uACBD\uB41C \uB3C5\uC11C \uB370\uC774\uD130\uB97C \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uB3D9\uAE30\uD654",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\uD50C\uB7EC\uADF8\uC778 \uC124\uC815\uC744 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uBCFC\uD2B8\uC5D0 \uB300\uD55C \uC4F0\uAE30 \uAD8C\uD55C\uC744 \uD655\uC778\uD558\uC138\uC694.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API\uB294 HTTPS\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "\uACBD\uB85C\uB098 \uCFFC\uB9AC \uB9E4\uAC1C\uBCC0\uC218 \uC5C6\uC774 API \uD638\uC2A4\uD2B8 URL\uC744 \uC785\uB825\uD558\uC138\uC694.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\uC720\uD6A8\uD55C \uB9AC\uB354 \uC5F0\uACB0 \uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB85C\uCEEC \uB370\uC774\uD130\uAC00 \uC720\uC9C0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uC218\uB3D9\uC73C\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\uC11C\uBC84\uAC00 \uC798\uBABB\uB41C \uB370\uC774\uD130\uB97C \uBC18\uD658\uD588\uC2B5\uB2C8\uB2E4.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\uB3D9\uAE30\uD654\uB97C \uC644\uB8CC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\uC774 Vault\uB294 \uB2E4\uB978 \uB9AC\uB354\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uBCC4\uB3C4\uC758 \uBCFC\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\uBA3C\uC800 \uD504\uB85C\uD544 \uACF5\uC9C0\uB97C \uC77D\uACE0 \uB3D9\uC758\uD558\uC138\uC694.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\uC77D\uAE30 \uB370\uC774\uD130 \uC5C5\uB85C\uB4DC \uC54C\uB9BC\uC744 \uBA3C\uC800 \uC218\uB77D\uD558\uC138\uC694.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\uD504\uB85C\uD544 \uBC0F \uD074\uB77C\uC6B0\uB4DC \uAD8C\uD55C\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\uBA3C\uC800 Markdown \uAE30\uC0AC\uB97C \uC5FD\uB2C8\uB2E4.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\uB610 \uB2E4\uB978 \uC791\uC5C5\uC73C\uB85C \uC778\uD574 \uC774 \uAE30\uC0AC\uC758 \uC77D\uAE30 \uB370\uC774\uD130\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC591\uC2DD\uC744 \uB2E4\uC2DC \uC5FD\uB2C8\uB2E4.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\uBA3C\uC800 \uAE30\uC0AC\uB97C \uC5F4\uC5B4\uBCF4\uC138\uC694.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\uC774 \uAE30\uC0AC\uC5D0\uB294 \uC774\uBBF8 \uC774 \uC77D\uAE30 \uC0C1\uD0DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC644\uB8CC\uD558\uAE30 \uC804\uC5D0 \uB2E4\uC2DC \uC77D\uAE30 \uC2DC\uC791\uD558\uC138\uC694.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\uB85C\uCEEC\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB97C \uC77D\uB294 \uC911\uC785\uB2C8\uB2E4.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\uB3D9\uAE30\uD654\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\uC218\uB3D9\uC73C\uB85C \uD310\uB3C5 \uB370\uC774\uD130 \uC5C5\uB85C\uB4DC",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\uD074\uB77C\uC6B0\uB4DC \uC5C5\uB85C\uB4DC\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC77D\uC740 \uB370\uC774\uD130\uB294 \uB85C\uCEEC\uC5D0 \uACC4\uC18D \uC800\uC7A5\uB429\uB2C8\uB2E4.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\uD074\uB77C\uC6B0\uB4DC \uAD8C\uD55C\uC744 \uC801\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 \uC124\uC815\uC5D0\uC11C \uD504\uB85C\uD544\uC744 \uC800\uC7A5\uD558\uACE0 \uC5C5\uB85C\uB4DC\uD558\uC138\uC694.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\uC5C5\uB85C\uB4DC \uAD8C\uD55C \uB610\uB294 \uC5F0\uACB0\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCD94\uAC00 \uC5C5\uB85C\uB4DC\uAC00 \uC911\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "\uBA3C\uC800 Vault\uC5D0\uC11C \uC911\uBCF5\uB41C \uCF58\uD150\uCE20 ID\uB97C \uC218\uC815\uD558\uC138\uC694.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\uC11C\uBC84\uC5D0\uC11C \uB2E4\uB978 \uBC84\uC804\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. \uB3D9\uAE30\uD654\uAC00 \uC644\uB8CC\uB85C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5\uD588\uC9C0\uB9CC \uB85C\uCEEC \uB3D9\uAE30\uD654 \uC601\uC218\uC99D\uC744 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uB3D9\uAE30\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  \u53D6\u6D88: "\uCDE8\uC18C",
  \u958B\u59CB\u4E0A\u50B3: "\uC5C5\uB85C\uB4DC \uC2DC\uC791",
  \u540C\u6B65\u7D50\u679C: "\uACB0\uACFC \uB3D9\uAE30\uD654",
  \u95DC\u9589: "\uB2EB\uAE30",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\uC77D\uC740 \uB370\uC774\uD130\uB294 \uBA3C\uC800 \uB85C\uCEEC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC218\uB3D9\uC73C\uB85C \uB3D9\uAE30\uD654\uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC5C5\uB85C\uB4DC\uB429\uB2C8\uB2E4.",
  \u8A08\u5283\u95B1\u8B80: "\uC608\uC815\uB41C \uB3C5\uC11C",
  \u95B1\u8B80\u72C0\u614B: "\uC77D\uAE30 \uC0C1\uD0DC",
  \u95B1\u8B80\u5C64\u6B21: "\uC77D\uAE30 \uAE4A\uC774",
  \u672A\u8A2D\u5B9A: "\uC124\uC815\uB418\uC9C0 \uC54A\uC74C",
  \u95B1\u8B80\u6B21\u6578: "\uC644\uB8CC\uB41C \uD310\uB3C5\uAC12",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\uC644\uB8CC\uB41C \uD310\uB3C5 \uD69F\uC218\uC785\uB2C8\uB2E4. \uB2E4\uC2DC \uC77D\uAE30\uB97C \uC2DC\uC791\uD574\uB3C4 \uC99D\uAC00\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD558\uB098\uB97C \uC644\uC131\uD558\uBA74 \uD558\uB098\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",
  \u95B1\u8B80\u65E5\u671F: "\uC77D\uAE30 \uB0A0\uC9DC",
  \u611F\u60F3\u8207\u8A55\u50F9: "\uBC18\uC0AC \uBC0F \uD3C9\uAC00",
  \u95B1\u8B80\u611F\u60F3: "\uB3C5\uC11C \uBC18\uC131",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\uB0B4 \uCD94\uCC9C",
  \u6211\u7684\u8A55\u5206: "\uB0B4 \uD3C9\uAC00",
  \u672A\u8A55\u5206: "\uD3C9\uAC00\uB418\uC9C0 \uC54A\uC74C",
  \u6211\u7684\u5206\u985E: "\uB0B4 \uBD84\uB958",
  "\u6BCF\u884C\u4E00\u9805\u3002": "\uD55C \uC904\uC5D0 \uD558\uB098\uC758 \uD56D\uBAA9\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\uB0B4 \uB3C5\uC790 \uC720\uD615: \uC774 \uAE30\uC0AC\uB294 \uB204\uAD6C\uC5D0\uAC8C \uC801\uD569\uD569\uB2C8\uAE4C?",
  \u5132\u5B58\u4E26\u540C\u6B65: "\uC800\uC7A5 \uBC0F \uB3D9\uAE30\uD654",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\uB85C\uCEEC\uC5D0 \uC800\uC7A5",
  \u9023\u7DDA: "\uC5F0\uACB0",
  "API \u7DB2\u5740": "API URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\uB9AC\uB354 \uC5F0\uACB0 \uD0A4",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\uAD00\uB9AC\uC790\uAC00 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB294 NocoDB \uAD00\uB9AC\uC790 \uD0A4\uAC00 \uC544\uB2D9\uB2C8\uB2E4.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\uB85C\uCEEC\uC5D0\uC11C \uC5F0\uACB0 \uD0A4 \uAE30\uC5B5",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\uAE30\uBCF8\uC801\uC73C\uB85C \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD65C\uC131\uD654\uB41C \uACBD\uC6B0 \uD0A4\uB294 \uD50C\uB7EC\uADF8\uC778 \uB370\uC774\uD130 \uD30C\uC77C\uC5D0 \uC554\uD638\uD654\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB85C \uC800\uC7A5\uB418\uBA70 \uBCFC\uD2B8 \uB3D9\uAE30\uD654 \uB610\uB294 \uBC31\uC5C5\uC744 \uD1B5\uD574 \uBCF5\uC0AC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  \u6E2C\u8A66\u9023\u7DDA: "\uD14C\uC2A4\uD2B8 \uC5F0\uACB0",
  \u5DF2\u958B\u555F: "\uD65C\uC131\uD654\uB428",
  \u5DF2\u505C\u7528: "\uC7A5\uC560\uC778",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\uB3C5\uC790 \uD504\uB85C\uD544",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\uB2C9\uB124\uC784 (\uD544\uC218)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\uC774\uBA54\uC77C(\uC120\uD0DD\uC0AC\uD56D, \uD655\uC778\uB418\uC9C0 \uC54A\uC74C)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\uC870\uC9C1(\uC120\uD0DD\uC0AC\uD56D)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\uCD9C\uC0DD\uC5F0\uB3C4(\uC120\uD0DD\uC0AC\uD56D)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\uD0DC\uC5B4\uB09C \uB2EC(\uC120\uD0DD)",
  \u672A\u63D0\u4F9B: "\uC81C\uACF5\uB418\uC9C0 \uC54A\uC74C",
  \u6027\u5225: "\uC131\uBCC4",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\uAD6D\uAC00/\uC9C0\uC5ED(\uC120\uD0DD\uC0AC\uD56D)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\uB0B4 \uB3C5\uC790 \uC720\uD615(\uC120\uD0DD \uC0AC\uD56D)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\uD504\uB85C\uD544 \uC54C\uB9BC\uC744 \uC218\uB77D\uD569\uB2C8\uB2E4.",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\uC218\uB3D9 \uC5C5\uB85C\uB4DC \uAD8C\uD55C",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\uC77D\uAE30 \uB370\uC774\uD130 \uC5C5\uB85C\uB4DC \uC54C\uB9BC\uC744 \uC218\uB77D\uD569\uB2C8\uB2E4.",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\uC218\uB3D9 \uC77D\uAE30 \uB370\uC774\uD130 \uC5C5\uB85C\uB4DC \uD5C8\uC6A9",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\uC774 \uAE30\uB2A5\uC744 \uB044\uBA74 \uB85C\uCEEC \uC5C5\uB85C\uB4DC\uAC00 \uC989\uC2DC \uC911\uC9C0\uB429\uB2C8\uB2E4. \uD074\uB77C\uC6B0\uB4DC \uC124\uC815\uC744 \uC801\uC6A9\uD558\uB824\uBA74 \uC544\uB798 \uD504\uB85C\uD544 \uC800\uC7A5 \uBC0F \uC5C5\uB85C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\uD074\uB77C\uC6B0\uB4DC \uAD8C\uD55C\uC740 \uC544\uC9C1 \uD655\uC778\uC774\uB098 \uC2E0\uCCAD\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\uD504\uB85C\uD544\uC744 \uB85C\uCEEC\uC5D0 \uC800\uC7A5",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\uD504\uB85C\uD544\uC774 \uB85C\uCEEC\uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\uD504\uB85C\uD544 \uC800\uC7A5 \uBC0F \uC5C5\uB85C\uB4DC",
  \u624B\u52D5\u540C\u6B65: "\uC218\uB3D9 \uB3D9\uAE30\uD654",
  \u60F3\u8B80\u65E5\u671F: "\uC77D\uACE0 \uC2F6\uC740 \uB0A0\uC9DC",
  \u5728\u8B80\u65E5\u671F: "\uC77D\uAE30 \uC2DC\uC791\uC77C",
  \u5DF2\u8B80\u65E5\u671F: "\uC644\uB8CC\uC77C",
  \u4E0D\u8B80\u65E5\u671F: "\uC77D\uC9C0 \uC54A\uC740 \uB0A0\uC9DC",
  \u68C4\u8B80\u65E5\u671F: "\uD3EC\uAE30\uC77C",
  \u6211\u7684\u95DC\u9375\u8A5E: "\uB0B4 \uD0A4\uC6CC\uB4DC",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\uB0B4 \uB3C5\uC790 \uC720\uD615",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\uB098\uC758 \uBD88\uAD50 \uC9C0\uC2DD \uC218\uC900",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\uB098\uC758 \uC5F0\uC2B5 \uC218\uC900",
  \u6211\u7684\u5B50\u4E3B\u984C: "\uB0B4 \uD558\uC704 \uC8FC\uC81C",
  \u9084\u6C92\u95B1\u8B80: "\uC77D\uC9C0 \uC54A\uC74C",
  \u60F3\u8B80: "\uC77D\uACE0 \uC2F6\uB2E4",
  \u5728\u8B80: "\uB3C5\uC11C",
  \u5DF2\u8B80: "\uC644\uB8CC\uB428",
  \u4E0D\u8B80: "\uC77D\uC9C0 \uC54A\uC74C",
  \u68C4\u8B80: "\uC77D\uAE30 \uC911\uB2E8",
  \u7565\u8B80: "\uC2A4\uD0A4\uBC0D",
  \u901A\u8B80: "\uC804\uCCB4 \uC77D\uAE30",
  \u7CBE\u8B80: "\uC790\uC138\uD788 \uC77D\uAE30",
  \u6DF1\u5165\u7814\u8B80: "\uC2EC\uCE35 \uC5F0\uAD6C",
  \u57FA\u790E\u95B1\u8B80: "\uCD08\uB4F1 \uB3C5\uC11C",
  \u6AA2\u8996\u95B1\u8B80: "\uAC80\uC0AC \uD310\uB3C5",
  \u5206\u6790\u95B1\u8B80: "\uBD84\uC11D\uC801 \uB3C5\uC11C",
  \u4E3B\u984C\u95B1\u8B80: "\uC2E0\uD1A0\uD53C\uCEEC \uB3C5\uC11C",
  \u63A8\u85A6: "\uCD94\uCC9C",
  \u4E0D\u63A8\u85A6: "\uCD94\uCC9C\uD558\uC9C0 \uC54A\uC74C",
  \u672A\u6C7A\u5B9A: "\uBBF8\uC815",
  \u4E00\u822C\u8B80\u8005: "\uC77C\uBC18 \uB3C5\uC790",
  \u521D\u7688\u4F9D\u8005: "\uCC98\uC74C \uADC0\uC758\uD55C \uC0AC\uB78C",
  \u5B78\u4F5B\u8005: "\uBD88\uAD50\uD559\uC0DD",
  \u4FEE\u884C\u8005: "\uC218\uD589\uC790",
  \u771F\u4F5B\u884C\u8005: "\uC9C4\uBD88\uC885 \uC218\uD589\uC790",
  \u5973: "\uC5EC\uC131",
  \u7537: "\uB0A8\uC131",
  \u5176\u4ED6: "\uAE30\uD0C0",
  \u4E0D\u9858\u900F\u9732: "\uB9D0\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4",
  language: "UI \uC5B8\uC5B4",
  languageHelp: "\uBCC0\uACBD\uC0AC\uD56D\uC740 \uC124\uC815 \uBC0F \uC0C8 \uC77D\uAE30 \uCC3D\uC5D0 \uC989\uC2DC \uC801\uC6A9\uB429\uB2C8\uB2E4. \uD50C\uB7EC\uADF8\uC778\uC744 \uB2E4\uC2DC \uB85C\uB4DC\uD55C \uD6C4 \uBA85\uB839 \uC774\uB984\uC774 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.",
  connected: "\uC548\uB155\uD558\uC138\uC694 {name}, \uC5F0\uACB0\uC5D0 \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4.",
  preview: "\uBCF4\uB958 \uC911: {pending}; \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC74C: {unchanged}; \uC218\uC815 \uD544\uC694: {invalid}. \uBC18\uC131\uC744 \uD3EC\uD568\uD55C \uC77D\uAE30 \uD544\uB4DC\uB9CC \uC5C5\uB85C\uB4DC\uB429\uB2C8\uB2E4.",
  summary: "\uC800\uC7A5\uB428: {saved}; \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC74C: {unchanged}; \uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C: {invalid}; \uBD88\uC644\uC804: {remaining}.",
  changedDuringUpload: "\uC5C5\uB85C\uB4DC \uC911\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC5C5\uB85C\uB4DC\uD558\uB824\uBA74 \uB2E4\uC2DC \uB3D9\uAE30\uD654\uD558\uC138\uC694.",
  profileNotice: "\uADC0\uD558\uC758 \uD504\uB85C\uD544\uC740 \uB85C\uCEEC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uD504\uB85C\uD544 \uC800\uC7A5 \uBC0F \uC5C5\uB85C\uB4DC\uB9CC True Buddha Pedia Analytics \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB85C \uBCF4\uB0C5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uB3C5\uC790 \uAD00\uB9AC \uBC0F \uD5A5\uD6C4 \uB3C5\uC11C \uD1B5\uACC4\uB97C \uC704\uD574 \uADC0\uD558\uC758 \uB2C9\uB124\uC784\uACFC \uC774\uBA54\uC77C, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uAD6D\uAC00, \uB3C5\uC790 \uC720\uD615 \uBC0F \uADC0\uD558\uAC00 \uC81C\uACF5\uD558\uB294 \uC870\uC9C1\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD544\uB4DC\uB294 \uAE30\uC0AC\uC5D0 \uAE30\uB85D\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uD544\uC744 \uD3B8\uC9D1\uD558\uAC70\uB098 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uD074\uB77C\uC6B0\uB4DC \uB370\uC774\uD130 \uC0AD\uC81C\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uD544\uC744 \uC5C5\uB85C\uB4DC\uD560 \uB54C\uB9C8\uB2E4 \uD638\uD658\uC131 \uD655\uC778\uACFC \uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD574 \uAE30\uAE30 \uC720\uD615, \uD50C\uB7EC\uADF8\uC778 \uBC84\uC804, \uC6B4\uC601 \uCCB4\uC81C \uBC0F \uC0AC\uC6A9\uC790 \uC5D0\uC774\uC804\uD2B8 \uBB38\uC790\uC5F4\uB3C4 \uC804\uC1A1\uD569\uB2C8\uB2E4. \uAC00\uC7A5 \uCD5C\uADFC \uD504\uB85C\uD544 \uC5C5\uB85C\uB4DC\uC758 \uAE30\uAE30 \uC815\uBCF4\uB9CC \uC800\uC7A5\uD558\uBA70 \uD558\uB4DC\uC6E8\uC5B4 \uC2DD\uBCC4\uC790\uB294 \uC218\uC9D1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC800\uC7A5\uD558\uAC70\uB098 \uC5C5\uB85C\uB4DC\uD558\uAE30 \uC804\uC5D0 \uBAA8\uB4E0 \uD504\uB85C\uD544 \uD56D\uBAA9\uC744 \uC791\uC131\uD558\uACE0 \uB3C5\uC790 \uC720\uD615\uC744 \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD558\uC138\uC694.",
  readingNotice: "\uB3C5\uC11C \uB370\uC774\uD130 \uC5C5\uB85C\uB4DC \uC548\uB0B4\uC5D0 \uB3D9\uC758\uD558\uBA74 \uC9C1\uC811 \uB3D9\uAE30\uD654\uD55C \uB3C5\uC11C \uB370\uC774\uD130\uB9CC \uD074\uB77C\uC6B0\uB4DC\uC758 True Buddha Pedia Analytics \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uB3C5\uC11C \uC9C4\uD589 \uC0C1\uD669, \uB0A0\uC9DC, \uD3C9\uC810, \uCD94\uCC9C, \uD0A4\uC6CC\uB4DC, \uD558\uC704 \uC8FC\uC81C, \uB3C5\uC790 \uC720\uD615 \uBD84\uB958, \uBD88\uAD50 \uC9C0\uC2DD \uC218\uC900 \uBC0F \uC218\uD589 \uC218\uC900\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uAE00 \uBCF8\uBB38\uC774\uB098 \uAD00\uB828 \uC5C6\uB294 \uC18D\uC131\uC740 \uC5C5\uB85C\uB4DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC5C5\uB85C\uB4DC\uB97C \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uC774\uD6C4 \uC5C5\uB85C\uB4DC\uB294 \uC911\uC9C0\uB418\uC9C0\uB9CC \uAE30\uC874 \uD074\uB77C\uC6B0\uB4DC \uB370\uC774\uD130\uB294 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB3C5\uC11C \uAE30\uB85D\uC5D0\uB294 \uC124\uCE58\uB41C \uCEEC\uB809\uC158\uC758 \uC2DC\uB9AC\uC988, \uC5D0\uB514\uC158, Tbpedia \uBC84\uC804, \uB9B4\uB9AC\uC2A4 ID, \uC5B8\uC5B4 \uCF54\uB4DC \uBC0F \uC81C\uBAA9\uB3C4 \uD3EC\uD568\uB429\uB2C8\uB2E4.",
  noticeUnavailable: "\uC774 \uC11C\uBC84\uC5D0\uB294 \uCD5C\uC2E0 \uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638 \uC815\uCC45\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uD50C\uB7EC\uADF8\uC778\uC744 \uC218\uB77D\uD558\uAC70\uB098 \uC5C5\uB85C\uB4DC\uD558\uAE30 \uC804\uC5D0 \uD50C\uB7EC\uADF8\uC778\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694.",
  invalidField: "\uC774 \uD544\uB4DC\uC758 \uAC12\uACFC \uD615\uC2DD\uC744 \uD655\uC778\uD558\uC138\uC694.",
  invalidChoice: "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624.",
  invalidType: "\uC608\uC0C1\uB418\uB294 \uC720\uD615\uC758 \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.",
  tooSmall: "\uCD5C\uC18C\uAC12\uC740 {limit}\uC785\uB2C8\uB2E4.",
  tooLarge: "\uCD5C\uB300\uAC12\uC740 {limit}\uC785\uB2C8\uB2E4.",
  invalidDate: "\uC720\uD6A8\uD55C \uB2EC\uB825 \uB0A0\uC9DC(YYYY-MM-DD)\uB97C \uC785\uB825\uD558\uC138\uC694.",
  futureBirthYear: "\uCD9C\uC0DD \uC5F0\uB3C4\uB294 \uBBF8\uB798 \uB0A0\uC9DC\uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
  unknownCountry: "\uC720\uD6A8\uD55C \uAD6D\uAC00 \uB610\uB294 \uC9C0\uC5ED\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
  birthYearRequired: "\uCD9C\uC0DD \uC6D4\uC744 \uC9C0\uC815\uD560 \uB54C \uCD9C\uC0DD \uC5F0\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694.",
  invalidEmail: "\uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.",
  validation: "\uC798\uBABB\uB41C \uD544\uB4DC\uB97C \uC218\uC815\uD558\uC138\uC694.",
  "backend.UNAUTHENTICATED": "\uC774 \uB3C5\uC790\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5F0\uACB0\uC744 \uBCF5\uC6D0\uD558\uB824\uBA74 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694.",
  "backend.NOT_FOUND": "\uC694\uCCAD\uD55C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
  "backend.NOT_CONFIGURED": "\uD074\uB77C\uC6B0\uB4DC \uC2A4\uD1A0\uB9AC\uC9C0\uAC00 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uAD6C\uC131\uC744 \uAE30\uB2E4\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uC5ED \uB3C5\uC11C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
  "backend.BACKEND_ERROR": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC791\uC5C5\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uAC70\uB098 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694.",
  "backend.CONSENT_REQUIRED": "\uD604\uC7AC \uD504\uB85C\uD544\uACFC \uB3C5\uC11C \uACF5\uC9C0\uB97C \uAC80\uD1A0\uD558\uACE0 \uC218\uB77D\uD558\uC138\uC694.",
  "backend.UPLOAD_DISABLED": "\uD074\uB77C\uC6B0\uB4DC \uC77D\uAE30 \uC5C5\uB85C\uB4DC\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  "backend.CONTENT_NOT_FOUND": "\uC774 \uD56D\uBAA9\uC740 \uC2B9\uC778\uB41C \uCE74\uD0C8\uB85C\uADF8\uC5D0 \uC5C6\uC2B5\uB2C8\uB2E4.",
  "backend.VALIDATION_FAILED": "\uC81C\uCD9C\uB41C \uB370\uC774\uD130\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uAC70\uB098 \uCE74\uD0C8\uB85C\uADF8 \uD56D\uBAA9\uC774 \uBE44\uD65C\uC131 \uC0C1\uD0DC\uC785\uB2C8\uB2E4.",
  "backend.DUPLICATE_KEY": "\uC911\uBCF5\uB41C \uC77D\uAE30 \uAE30\uB85D\uC740 \uAD00\uB9AC\uC790\uC758 \uC218\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",
  "backend.METHOD_NOT_ALLOWED": "\uC774 \uC694\uCCAD \uBC29\uBC95\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
  "backend.INTERNAL_ERROR": "\uC694\uCCAD\uC744 \uC644\uB8CC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  "backend.PAYLOAD_TOO_LARGE": "\uC81C\uCD9C\uB41C \uB370\uC774\uD130\uAC00 \uD06C\uAE30 \uC81C\uD55C\uC744 \uCD08\uACFC\uD569\uB2C8\uB2E4.",
  "backend.BAD_REQUEST": "\uC694\uCCAD\uC5D0\uB294 \uC720\uD6A8\uD55C JSON \uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.",
  "backend.JSON_REQUIRED": "\uC694\uCCAD\uC740 application/json\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.",
  "backend.RATE_LIMITED": "\uC694\uCCAD\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  "field.nickname": "\uBCC4\uBA85",
  "field.email": "\uC774\uBA54\uC77C",
  "field.birth_year": "\uCD9C\uC0DD\uC5F0\uB3C4",
  "field.birth_month": "\uD0DC\uC5B4\uB09C \uB2EC",
  "field.sex": "\uC131\uBCC4",
  "field.country_code": "\uAD6D\uAC00/\uC9C0\uC5ED",
  "field.reader_type": "\uB9AC\uB354 \uC720\uD615",
  "field.organisation": "\uC870\uC9C1",
  "field.content_id": "\uCF58\uD150\uCE20 ID",
  "field.schema_version": "\uB370\uC774\uD130 \uBC84\uC804",
  "field.client_updated_at": "\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8",
  "field.profile": "\uD504\uB85C\uD544",
  "field.values": "\uB370\uC774\uD130 \uC77D\uAE30",
  "backend.BACKEND_TIMEOUT": "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC751\uB2F5 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5B4 \uC800\uC7A5 \uC5EC\uBD80\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC11C\uBE44\uC2A4 \uBCF5\uAD6C \uD6C4 \uC218\uB3D9\uC73C\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  followSystem: "\uC2DC\uC2A4\uD15C \uC124\uC815 \uB530\uB974\uAE30",
  followSystemHelp: "Obsidian\uC758 \uC5B8\uC5B4 \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uBA70, \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC5B8\uC5B4\uB294 \uC601\uC5B4\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
  updaterReadError: "Tbpedia \uC5C5\uB370\uC774\uD2B8 \uD50C\uB7EC\uADF8\uC778\uC758 \uC124\uC815\uC744 \uC77D\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. data.json \uD30C\uC77C\uC744 \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694. \uB3C5\uC11C \uB370\uC774\uD130\uB294 \uB85C\uCEEC\uC5D0 \uBCF4\uAD00\uB429\uB2C8\uB2E4.",
  updaterChanged: "\uB3D9\uAE30\uD654 \uC911 \uC124\uCE58\uB41C \uCEEC\uB809\uC158\uC774 \uBCC0\uACBD\uB418\uC5B4 \uC774\uD6C4 \uC5C5\uB85C\uB4DC\uB97C \uC911\uC9C0\uD588\uC2B5\uB2C8\uB2E4. \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uB3D9\uAE30\uD654\uD558\uC138\uC694.",
  updaterSyncNotice: "\uB3C5\uC11C \uAE30\uB85D\uC5D0\uB294 \uC124\uCE58\uB41C \uCEEC\uB809\uC158\uC758 \uC2DC\uB9AC\uC988, \uC5D0\uB514\uC158, Tbpedia \uBC84\uC804, \uB9B4\uB9AC\uC2A4 ID, \uC5B8\uC5B4 \uCF54\uB4DC \uBC0F \uC81C\uBAA9\uB3C4 \uD3EC\uD568\uB429\uB2C8\uB2E4.",
  analyticsMetadataReadError: "\uBD84\uC11D \uD50C\uB7EC\uADF8\uC778\uC758 data.json\uC5D0 \uC800\uC7A5\uB41C \uCEEC\uB809\uC158 \uC815\uBCF4\uB97C \uC77D\uAC70\uB098 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD50C\uB7EC\uADF8\uC778\uC744 \uB2E4\uC2DC \uBD88\uB7EC\uC628 \uB4A4 \uC7AC\uC2DC\uB3C4\uD558\uC138\uC694.",
  connectionAvailable: "\uC5F0\uACB0\uC5D0 \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4. \uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC18C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  recordReading: "\uB0B4 \uB3C5\uC11C \uB370\uC774\uD130 \uAE30\uB85D",
  syncReadingCloud: "\uB3C5\uC11C \uB370\uC774\uD130\uB97C \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uB3D9\uAE30\uD654",
  readingContentIdRequired: "\uB3C5\uC11C \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD558\uB824\uBA74 \uB178\uD2B8\uC758 \uD504\uB7F0\uD2B8\uB9E4\uD130\uC5D0 \uC720\uD6A8\uD55C tbpedia_content_id\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",
  requiredSuffix: "(\uD544\uC218)",
  profileRequiredHelp: "\uC800\uC7A5\uD558\uAC70\uB098 \uC5C5\uB85C\uB4DC\uD558\uAE30 \uC804\uC5D0 \uBAA8\uB4E0 \uD504\uB85C\uD544 \uD56D\uBAA9\uC744 \uC791\uC131\uD558\uACE0 \uB3C5\uC790 \uC720\uD615\uC744 \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD558\uC138\uC694.",
  readerTypesRequired: "\uB3C5\uC790 \uC720\uD615\uC744 \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD558\uC138\uC694.",
  readerId: "\uB3C5\uC790 ID",
  readerSetup: "\uB3C5\uC790 \uC124\uC815",
  newReader: "\uC0C8 \uB3C5\uC790 \uB4F1\uB85D",
  existingReader: "\uAE30\uC874 \uB3C5\uC790 \uC5F0\uACB0",
  connectExistingReader: "\uAE30\uC874 \uB3C5\uC790 \uC5F0\uACB0",
  newReaderHelp: "\uD504\uB85C\uD544\uC744 \uC791\uC131\uD558\uACE0 \uC800\uC7A5 \uBC0F \uC5C5\uB85C\uB4DC\uD558\uBA74 \uC0C8 \uB3C5\uC790 ID\uB85C \uB4F1\uB85D\uB429\uB2C8\uB2E4.",
  readerAlreadyLinked: "\uC774 \uBCF4\uAD00\uD568\uC740 \uC774\uBBF8 \uB3C5\uC790\uC640 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
  readerOperationBusy: "\uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \uC644\uB8CC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",
  readerIdInvalid: "\uC720\uD6A8\uD55C \uB3C5\uC790 ID\uB97C \uC785\uB825\uD558\uC138\uC694.",
  readerRecoveryMismatch: "\uD074\uB77C\uC6B0\uB4DC\uAC00 \uB2E4\uB978 \uB3C5\uC790\uB97C \uBC18\uD658\uD588\uC2B5\uB2C8\uB2E4. \uBCF5\uAD6C\uB97C \uC800\uC7A5\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
  readerIdHelp: "\uB3C5\uC790 ID\uB97C \uC785\uB825\uD558\uC5EC \uD504\uB85C\uD544\uC744 \uBD88\uB7EC\uC624\uC138\uC694. ID\uB85C \uACC4\uC815\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C \uBE44\uBC00\uB85C \uBCF4\uAD00\uD558\uC138\uC694.",
  reflectionRemaining: "{remaining}\uC790 \uB0A8\uC74C (\uCD5C\uB300 {limit}\uC790)",
  reflectionTooLong: "\uC800\uC7A5\uD558\uAE30 \uC804\uC5D0 \uAC10\uC0C1\uC744 {limit}\uC790 \uC774\uB0B4\uB85C \uC904\uC5EC \uC8FC\uC138\uC694.",
  showReaderId: "\uB3C5\uC790 ID \uD45C\uC2DC",
  hideReaderId: "\uB3C5\uC790 ID \uC228\uAE30\uAE30"
};

// plugin/locales/zh-TW.json
var zh_TW_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia \u95B1\u8B80\u8CC7\u6599",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\u958B\u555F\u95B1\u8B80\u8CC7\u6599",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u6A19\u8A18\u70BA\u5728\u8B80",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u6A19\u8A18\u70BA\u5DF2\u8B80",
  \u958B\u59CB\u91CD\u8B80: "\u958B\u59CB\u91CD\u8B80",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u540C\u6B65\u76EE\u524D\u6587\u7AE0",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u540C\u6B65\u5DF2\u8B8A\u66F4\u7684\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002",
  \u53D6\u6D88: "\u53D6\u6D88",
  \u958B\u59CB\u4E0A\u50B3: "\u958B\u59CB\u4E0A\u50B3",
  \u540C\u6B65\u7D50\u679C: "\u540C\u6B65\u7D50\u679C",
  \u95DC\u9589: "\u95DC\u9589",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002",
  \u8A08\u5283\u95B1\u8B80: "\u8A08\u5283\u95B1\u8B80",
  \u95B1\u8B80\u72C0\u614B: "\u95B1\u8B80\u72C0\u614B",
  \u95B1\u8B80\u5C64\u6B21: "\u95B1\u8B80\u5C64\u6B21",
  \u672A\u8A2D\u5B9A: "\u672A\u8A2D\u5B9A",
  \u95B1\u8B80\u6B21\u6578: "\u95B1\u8B80\u6B21\u6578",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002",
  \u95B1\u8B80\u65E5\u671F: "\u95B1\u8B80\u65E5\u671F",
  \u611F\u60F3\u8207\u8A55\u50F9: "\u611F\u60F3\u8207\u8A55\u50F9",
  \u95B1\u8B80\u611F\u60F3: "\u95B1\u8B80\u611F\u60F3",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\u6211\u7684\u95B1\u8B80\u63A8\u85A6",
  \u6211\u7684\u8A55\u5206: "\u6211\u7684\u8A55\u5206",
  \u672A\u8A55\u5206: "\u672A\u8A55\u5206",
  \u6211\u7684\u5206\u985E: "\u6211\u7684\u5206\u985E",
  "\u6BCF\u884C\u4E00\u9805\u3002": "\u6BCF\u884C\u4E00\u9805\u3002",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F",
  \u5132\u5B58\u4E26\u540C\u6B65: "\u5132\u5B58\u4E26\u540C\u6B65",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\u5132\u5B58\u65BC\u672C\u6A5F",
  \u9023\u7DDA: "\u9023\u7DDA",
  "API \u7DB2\u5740": "API \u7DB2\u5740",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\u8B80\u8005\u9023\u7DDA\u91D1\u9470",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002",
  \u6E2C\u8A66\u9023\u7DDA: "\u6E2C\u8A66\u9023\u7DDA",
  \u5DF2\u958B\u555F: "\u5DF2\u958B\u555F",
  \u5DF2\u505C\u7528: "\u5DF2\u505C\u7528",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\u8B80\u8005\u500B\u4EBA\u8CC7\u6599",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09",
  \u672A\u63D0\u4F9B: "\u672A\u63D0\u4F9B",
  \u6027\u5225: "\u6027\u5225",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\u624B\u52D5\u4E0A\u50B3\u6B0A\u9650",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599",
  \u624B\u52D5\u540C\u6B65: "\u624B\u52D5\u540C\u6B65",
  \u60F3\u8B80\u65E5\u671F: "\u60F3\u8B80\u65E5\u671F",
  \u5728\u8B80\u65E5\u671F: "\u5728\u8B80\u65E5\u671F",
  \u5DF2\u8B80\u65E5\u671F: "\u5DF2\u8B80\u65E5\u671F",
  \u4E0D\u8B80\u65E5\u671F: "\u4E0D\u8B80\u65E5\u671F",
  \u68C4\u8B80\u65E5\u671F: "\u68C4\u8B80\u65E5\u671F",
  \u6211\u7684\u95DC\u9375\u8A5E: "\u6211\u7684\u95DC\u9375\u8A5E",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\u6211\u7684\u8B80\u8005\u985E\u578B",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\u6211\u7684\u4F5B\u5B78\u7D1A\u5225",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\u6211\u7684\u4FEE\u884C\u7D1A\u5225",
  \u6211\u7684\u5B50\u4E3B\u984C: "\u6211\u7684\u5B50\u4E3B\u984C",
  \u9084\u6C92\u95B1\u8B80: "\u9084\u6C92\u95B1\u8B80",
  \u60F3\u8B80: "\u60F3\u8B80",
  \u5728\u8B80: "\u5728\u8B80",
  \u5DF2\u8B80: "\u5DF2\u8B80",
  \u4E0D\u8B80: "\u4E0D\u8B80",
  \u68C4\u8B80: "\u68C4\u8B80",
  \u7565\u8B80: "\u7565\u8B80",
  \u901A\u8B80: "\u901A\u8B80",
  \u7CBE\u8B80: "\u7CBE\u8B80",
  \u6DF1\u5165\u7814\u8B80: "\u6DF1\u5165\u7814\u8B80",
  \u57FA\u790E\u95B1\u8B80: "\u57FA\u790E\u95B1\u8B80",
  \u6AA2\u8996\u95B1\u8B80: "\u6AA2\u8996\u95B1\u8B80",
  \u5206\u6790\u95B1\u8B80: "\u5206\u6790\u95B1\u8B80",
  \u4E3B\u984C\u95B1\u8B80: "\u4E3B\u984C\u95B1\u8B80",
  \u63A8\u85A6: "\u63A8\u85A6",
  \u4E0D\u63A8\u85A6: "\u4E0D\u63A8\u85A6",
  \u672A\u6C7A\u5B9A: "\u672A\u6C7A\u5B9A",
  \u4E00\u822C\u8B80\u8005: "\u4E00\u822C\u8B80\u8005",
  \u521D\u7688\u4F9D\u8005: "\u521D\u7688\u4F9D\u8005",
  \u5B78\u4F5B\u8005: "\u5B78\u4F5B\u8005",
  \u4FEE\u884C\u8005: "\u4FEE\u884C\u8005",
  \u771F\u4F5B\u884C\u8005: "\u771F\u4F5B\u884C\u8005",
  \u5973: "\u5973",
  \u7537: "\u7537",
  \u5176\u4ED6: "\u5176\u4ED6",
  \u4E0D\u9858\u900F\u9732: "\u4E0D\u9858\u900F\u9732",
  language: "\u4ECB\u9762\u8A9E\u8A00",
  languageHelp: "\u8B8A\u66F4\u6703\u7ACB\u5373\u5957\u7528\u81F3\u8A2D\u5B9A\u548C\u65B0\u7684\u95B1\u8B80\u8996\u7A97\u3002\u91CD\u65B0\u8F09\u5165\u63D2\u4EF6\u5F8C\u547D\u4EE4\u540D\u7A31\u6703\u66F4\u65B0\u3002",
  connected: "\u60A8\u597D {name}\uFF0C\u9023\u7DDA\u6210\u529F\u3002",
  preview: "{pending} \u7BC7\u5F85\u4E0A\u50B3\u3001{unchanged} \u7BC7\u672A\u8B8A\u66F4\u3001{invalid} \u7BC7\u9700\u4FEE\u6B63\u3002\u53EA\u6709\u95B1\u8B80\u6B04\u4F4D\u6703\u4E0A\u50B3\uFF0C\u5305\u62EC\u95B1\u8B80\u611F\u60F3\u3002",
  summary: "{saved} \u7BC7\u5DF2\u5132\u5B58\u3001{unchanged} \u7BC7\u672A\u8B8A\u66F4\u3001{invalid} \u7BC7\u7121\u6548\u3001{remaining} \u7BC7\u672A\u5B8C\u6210\u3002",
  changedDuringUpload: "\u4E0A\u50B3\u671F\u9593\u6709\u65B0\u4FEE\u6539\uFF0C\u4ECD\u9700\u518D\u6B21\u540C\u6B65\u3002",
  profileNotice: "\u8B80\u8005\u8CC7\u6599\u4FDD\u5B58\u5728\u672C\u6A5F\uFF0C\u53EA\u6709\u6309\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u6703\u50B3\u9001\u81F3 True Buddha Pedia Analytics \u8CC7\u6599\u5EAB\u3002\u8CC7\u6599\u5305\u62EC\u66B1\u7A31\uFF0C\u96FB\u90F5\u3001\u51FA\u751F\u5E74/\u6708\u3001\u6027\u5225\u3001\u570B\u5BB6\u3001\u8B80\u8005\u985E\u578B\u548C\u6A5F\u69CB\uFF0C\u7528\u65BC\u7BA1\u7406\u8B80\u8005\u53CA\u672A\u4F86\u7684\u95B1\u8B80\u7D71\u8A08\u3002\u6BCF\u6B21\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u4EA6\u6703\u50B3\u9001\u88DD\u7F6E\u985E\u578B\u3001\u5916\u639B\u7248\u672C\u3001\u4F5C\u696D\u7CFB\u7D71\u53CA\u4F7F\u7528\u8005\u4EE3\u7406\u5B57\u4E32\uFF0C\u7528\u65BC\u76F8\u5BB9\u6027\u8207\u554F\u984C\u6392\u67E5\uFF1B\u6BCF\u4F4D\u8B80\u8005\u53EA\u4FDD\u7559\u6700\u8FD1\u4E00\u6B21\u4E0A\u50B3\u7684\u88DD\u7F6E\u8CC7\u6599\uFF0C\u4E0D\u6536\u96C6\u786C\u9AD4\u8B58\u5225\u78BC\u3002\u9019\u4E9B\u6B04\u4F4D\u4E0D\u6703\u5BEB\u5165\u6587\u7AE0\u3002\u60A8\u53EF\u4EE5\u4FEE\u6539\u8CC7\u6599\uFF0C\u6216\u806F\u7D61\u7BA1\u7406\u54E1\u8981\u6C42\u522A\u9664\u96F2\u7AEF\u8CC7\u6599\u3002 \u5132\u5B58\u6216\u4E0A\u50B3\u524D\uFF0C\u8ACB\u586B\u5BEB\u6240\u6709\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\uFF0C\u4E26\u81F3\u5C11\u52FE\u9078\u4E00\u7A2E\u8B80\u8005\u985E\u578B\u3002",
  readingNotice: "\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u5F8C\uFF0C\u53EA\u6709\u60A8\u624B\u52D5\u540C\u6B65\u7684\u95B1\u8B80\u8CC7\u6599\u6703\u50B3\u9001\u81F3\u96F2\u7AEF\u7684 True Buddha Pedia Analytics \u8CC7\u6599\u5EAB\uFF0C\u5305\u62EC\u95B1\u8B80\u9032\u5EA6\u3001\u65E5\u671F\u3001\u8A55\u5206\u3001\u95B1\u8B80\u63A8\u85A6\u3001\u95DC\u9375\u8A5E\u3001\u5B50\u4E3B\u984C\u3001\u8B80\u8005\u985E\u578B\u5206\u985E\u3001\u4F5B\u5B78\u7D1A\u5225\u53CA\u4FEE\u884C\u7D1A\u5225\u3002 \u6587\u7AE0\u6B63\u6587\u53CA\u7121\u95DC\u5C6C\u6027\u4E0D\u6703\u4E0A\u50B3\u3002\u505C\u7528\u6703\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\uFF0C\u4F46\u4E0D\u6703\u522A\u9664\u65E2\u6709\u96F2\u7AEF\u8CC7\u6599\u3002 \u95B1\u8B80\u8A18\u9304\u4EA6\u5305\u542B\u5DF2\u5B89\u88DD\u6587\u96C6\u7684\u7CFB\u5217\u3001\u7248\u672C\u985E\u578B\u3001Tbpedia \u7248\u672C\u3001\u767C\u884C\u7DE8\u865F\u3001\u8A9E\u8A00\u4EE3\u78BC\u53CA\u6A19\u984C\u3002",
  noticeUnavailable: "\u8A72\u4F3A\u670D\u5668\u9700\u8981\u66F4\u65B0\u7684\u96B1\u79C1\u6B0A\u8072\u660E\u3002\u5728\u63A5\u53D7\u6216\u4E0A\u50B3\u4E4B\u524D\u66F4\u65B0\u5916\u639B\u7A0B\u5F0F\u3002",
  invalidField: "\u6AA2\u67E5\u8A72\u6B04\u4F4D\u7684\u503C\u548C\u683C\u5F0F\u3002",
  invalidChoice: "\u9078\u64C7\u53EF\u7528\u9078\u9805\u4E4B\u4E00\u3002",
  invalidType: "\u8F38\u5165\u9810\u671F\u985E\u578B\u7684\u503C\u3002",
  tooSmall: "\u6700\u5C0F\u503C\u70BA {limit}\u3002",
  tooLarge: "\u6700\u5927\u503C\u70BA {limit}\u3002",
  invalidDate: "\u8F38\u5165\u6709\u6548\u7684\u65E5\u66C6\u65E5\u671F (YYYY-MM-DD)\u3002",
  futureBirthYear: "\u51FA\u751F\u5E74\u4EFD\u4E0D\u80FD\u662F\u672A\u4F86\u7684\u5E74\u4EFD\u3002",
  unknownCountry: "\u9078\u64C7\u6709\u6548\u7684\u570B\u5BB6\u6216\u5730\u5340\u3002",
  birthYearRequired: "\u6307\u5B9A\u51FA\u751F\u6708\u4EFD\u6642\u63D0\u4F9B\u51FA\u751F\u5E74\u4EFD\u3002",
  invalidEmail: "\u8F38\u5165\u6709\u6548\u7684\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3002",
  validation: "\u8ACB\u66F4\u6B63\u7121\u6548\u6B04\u4F4D\u3002",
  "backend.UNAUTHENTICATED": "\u7121\u6CD5\u5B58\u53D6\u6B64\u8B80\u8005\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u6062\u5FA9\u9023\u7DDA\u3002",
  "backend.NOT_FOUND": "\u672A\u627E\u5230\u8ACB\u6C42\u7684\u7AEF\u9EDE\u3002",
  "backend.NOT_CONFIGURED": "\u96F2\u7AEF\u5132\u5B58\u6B63\u5728\u7B49\u5F85\u8CC7\u6599\u5EAB\u914D\u7F6E\u3002\u53EF\u4EE5\u672C\u5730\u95B1\u8B80\u3002",
  "backend.BACKEND_ERROR": "\u7121\u6CD5\u9A57\u8B49\u8CC7\u6599\u5EAB\u64CD\u4F5C\u3002\u8ACB\u7A0D\u5F8C\u518D\u8A66\u6216\u806F\u7D61\u60A8\u7684\u7BA1\u7406\u54E1\u3002",
  "backend.CONSENT_REQUIRED": "\u67E5\u770B\u4E26\u63A5\u53D7\u76EE\u524D\u7684\u500B\u4EBA\u8CC7\u6599\u548C\u95B1\u8B80\u901A\u77E5\u3002",
  "backend.UPLOAD_DISABLED": "\u96F2\u7AEF\u95B1\u8B80\u4E0A\u50B3\u5DF2\u505C\u7528\u3002",
  "backend.CONTENT_NOT_FOUND": "\u8A72\u7522\u54C1\u4E0D\u5728\u6838\u51C6\u76EE\u9304\u4E2D\u3002",
  "backend.VALIDATION_FAILED": "\u63D0\u4EA4\u7684\u8CC7\u6599\u7121\u6548\u6216\u76EE\u9304\u9805\u76EE\u7121\u6548\u3002",
  "backend.DUPLICATE_KEY": "\u91CD\u8907\u7684\u95B1\u8B80\u8A18\u9304\u9700\u8981\u7BA1\u7406\u54E1\u4FEE\u5FA9\u3002",
  "backend.METHOD_NOT_ALLOWED": "\u4E0D\u5141\u8A31\u4F7F\u7528\u6B64\u8ACB\u6C42\u65B9\u6CD5\u3002",
  "backend.INTERNAL_ERROR": "\u8ACB\u6C42\u7121\u6CD5\u5B8C\u6210\u3002\u7A0D\u5F8C\u518D\u8A66\u3002",
  "backend.PAYLOAD_TOO_LARGE": "\u63D0\u4EA4\u7684\u8CC7\u6599\u8D85\u51FA\u5927\u5C0F\u9650\u5236\u3002",
  "backend.BAD_REQUEST": "\u8ACB\u6C42\u5FC5\u9808\u5305\u542B\u6709\u6548\u7684 JSON \u8CC7\u6599\u3002",
  "backend.JSON_REQUIRED": "\u8ACB\u6C42\u5FC5\u9808\u4F7F\u7528 application/json\u3002",
  "backend.RATE_LIMITED": "\u8ACB\u6C42\u592A\u591A\u3002\u7A0D\u5F8C\u518D\u8A66\u3002",
  "field.nickname": "\u66B1\u7A31",
  "field.email": "\u96FB\u5B50\u90F5\u4EF6",
  "field.birth_year": "\u51FA\u751F\u5E74\u4EFD",
  "field.birth_month": "\u51FA\u751F\u6708\u4EFD",
  "field.sex": "\u6027\u5225",
  "field.country_code": "\u570B\u5BB6/\u5730\u5340",
  "field.reader_type": "\u8B80\u5361\u5668\u985E\u578B",
  "field.organisation": "\u7D44\u7E54\u6A5F\u69CB",
  "field.content_id": "\u5167\u5BB9ID",
  "field.schema_version": "\u6578\u64DA\u7248\u672C",
  "field.client_updated_at": "\u6700\u5F8C\u66F4\u65B0",
  "field.profile": "\u516C\u53F8\u7C21\u4ECB",
  "field.values": "\u8B80\u53D6\u6578\u64DA",
  "backend.BACKEND_TIMEOUT": "\u8CC7\u6599\u5EAB\u56DE\u61C9\u903E\u6642\uFF0C\u5C1A\u7121\u6CD5\u78BA\u8A8D\u662F\u5426\u5132\u5B58\u3002\u670D\u52D9\u6062\u5FA9\u5F8C\u8ACB\u624B\u52D5\u91CD\u8A66\u3002",
  followSystem: "\u8DDF\u96A8\u7CFB\u7D71",
  followSystemHelp: "\u4F7F\u7528 Obsidian \u7684\u8A9E\u8A00\u8A2D\u5B9A\uFF1B\u4E0D\u652F\u63F4\u7684\u8A9E\u8A00\u6703\u4F7F\u7528\u82F1\u6587\u3002",
  updaterReadError: "\u7121\u6CD5\u8B80\u53D6 Tbpedia \u66F4\u65B0\u5916\u639B\u8A2D\u5B9A\u3002\u8ACB\u6AA2\u67E5\u5176 data.json \u5F8C\u518D\u8A66\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002",
  updaterChanged: "\u540C\u6B65\u671F\u9593\u5DF2\u5B89\u88DD\u7684\u6587\u96C6\u7248\u672C\u767C\u751F\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002\u8ACB\u91CD\u65B0\u9810\u89BD\u4E26\u540C\u6B65\u3002",
  updaterSyncNotice: "\u95B1\u8B80\u8A18\u9304\u4EA6\u5305\u542B\u5DF2\u5B89\u88DD\u6587\u96C6\u7684\u7CFB\u5217\u3001\u7248\u672C\u985E\u578B\u3001Tbpedia \u7248\u672C\u3001\u767C\u884C\u7DE8\u865F\u3001\u8A9E\u8A00\u4EE3\u78BC\u53CA\u6A19\u984C\u3002",
  analyticsMetadataReadError: "\u7121\u6CD5\u8B80\u53D6\u6216\u6838\u5C0D analytics data.json \u4E2D\u5132\u5B58\u7684\u6587\u96C6\u8CC7\u6599\u3002\u8ACB\u91CD\u65B0\u8F09\u5165\u5916\u639B\u5F8C\u518D\u8A66\u3002",
  connectionAvailable: "\u9023\u7DDA\u6210\u529F\uFF0C\u96F2\u7AEF\u5132\u5B58\u53EF\u4F9B\u4F7F\u7528\u3002",
  recordReading: "\u8A18\u9304\u6211\u7684\u95B1\u8B80\u8CC7\u6599",
  syncReadingCloud: "\u540C\u6B65\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF",
  readingContentIdRequired: "\u6B64\u7B46\u8A18\u7684 frontmatter \u5FC5\u9808\u5305\u542B\u6709\u6548\u7684 tbpedia_content_id\uFF0C\u624D\u80FD\u8A18\u9304\u95B1\u8B80\u8CC7\u6599\u3002",
  requiredSuffix: "\uFF08\u5FC5\u586B\uFF09",
  profileRequiredHelp: "\u5132\u5B58\u6216\u4E0A\u50B3\u524D\uFF0C\u8ACB\u586B\u5BEB\u6240\u6709\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\uFF0C\u4E26\u81F3\u5C11\u52FE\u9078\u4E00\u7A2E\u8B80\u8005\u985E\u578B\u3002",
  readerTypesRequired: "\u8ACB\u81F3\u5C11\u52FE\u9078\u4E00\u7A2E\u8B80\u8005\u985E\u578B\u3002",
  readerId: "\u8B80\u8005 ID",
  readerSetup: "\u8B80\u8005\u8A2D\u5B9A",
  newReader: "\u8A3B\u518A\u65B0\u8B80\u8005",
  existingReader: "\u9023\u7D50\u73FE\u6709\u8B80\u8005",
  connectExistingReader: "\u9023\u7D50\u73FE\u6709\u8B80\u8005",
  newReaderHelp: "\u8ACB\u586B\u59A5\u4E0B\u65B9\u500B\u4EBA\u8CC7\u6599\uFF0C\u518D\u6309\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\uFF0C\u5373\u53EF\u8A3B\u518A\u4E26\u53D6\u5F97\u65B0\u7684\u8B80\u8005 ID\u3002",
  readerAlreadyLinked: "\u6B64 Vault \u5DF2\u9023\u7D50\u8B80\u8005\u3002",
  readerOperationBusy: "\u8B80\u8005\u64CD\u4F5C\u6B63\u5728\u9032\u884C\uFF0C\u8ACB\u5B8C\u6210\u5F8C\u518D\u8A66\u3002",
  readerIdInvalid: "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005 ID\u3002",
  readerRecoveryMismatch: "\u96F2\u7AEF\u56DE\u50B3\u7684\u8B80\u8005\u4E0D\u7B26\uFF0C\u5C1A\u672A\u5132\u5B58\u6062\u5FA9\u8CC7\u6599\u3002",
  readerIdHelp: "\u8F38\u5165\u8B80\u8005 ID \u5373\u53EF\u53D6\u5F97\u500B\u4EBA\u8CC7\u6599\u3002\u6B64 ID \u53EF\u7528\u65BC\u5B58\u53D6\u60A8\u7684\u5E33\u6236\uFF0C\u8ACB\u59A5\u5584\u4FDD\u5BC6\u3002",
  reflectionRemaining: "\u9084\u53EF\u8F38\u5165 {remaining} \u5B57\uFF08\u6700\u591A {limit} \u5B57\uFF09",
  reflectionTooLong: "\u8ACB\u5C07\u95B1\u8B80\u611F\u60F3\u7E2E\u77ED\u81F3 {limit} \u5B57\u4EE5\u5167\u518D\u5132\u5B58\u3002",
  showReaderId: "\u986F\u793A\u8B80\u8005 ID",
  hideReaderId: "\u96B1\u85CF\u8B80\u8005 ID"
};

// plugin/locales/zh-CN.json
var zh_CN_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\u6587\u7AE0\u5C5E\u6027\u5FC5\u987B\u662F YAML \u5BF9\u8C61\u3002",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u64CD\u4F5C\u65E0\u6CD5\u5B8C\u6210\u3002\u60A8\u7684\u6570\u636E\u4ECD\u4FDD\u5B58\u5728\u672C\u5730\u3002",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia\u8BFB\u53D6\u6570\u636E",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\u6253\u5F00\u8BFB\u53D6\u6570\u636E",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210",
  \u958B\u59CB\u91CD\u8B80: "\u5F00\u59CB\u91CD\u8BFB",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u540C\u6B65\u5F53\u524D\u6587\u7AE0",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u5C06\u5DF2\u66F4\u6539\u7684\u9605\u8BFB\u6570\u636E\u540C\u6B65\u5230\u4E91\u7AEF",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\u65E0\u6CD5\u4FDD\u5B58\u63D2\u4EF6\u8BBE\u7F6E\u3002\u68C0\u67E5\u6B64\u4FDD\u7BA1\u5E93\u7684\u5199\u5165\u6743\u9650\u3002",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API \u5FC5\u987B\u4F7F\u7528 HTTPS\u3002",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "\u8F93\u5165\u4E0D\u5E26\u8DEF\u5F84\u6216\u67E5\u8BE2\u53C2\u6570\u7684 API \u4E3B\u673A URL\u3002",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\u8F93\u5165\u6709\u6548\u7684\u8BFB\u5361\u5668\u8FDE\u63A5\u5BC6\u94A5\u3002",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\u65E0\u6CD5\u8FDE\u63A5\u3002\u672C\u5730\u6570\u636E\u5DF2\u4FDD\u7559\u3002\u7A0D\u540E\u518D\u624B\u52A8\u5C1D\u8BD5\u3002",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\u670D\u52A1\u5668\u8FD4\u56DE\u65E0\u6548\u6570\u636E\u3002",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\u540C\u6B65\u65E0\u6CD5\u5B8C\u6210\u3002\u7A0D\u540E\u518D\u8BD5\u3002",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\u8BE5\u5E93\u5DF2\u94FE\u63A5\u5230\u53E6\u4E00\u4E2A\u8BFB\u8005\u3002\u4F7F\u7528\u5355\u72EC\u7684\u4FDD\u7BA1\u5E93\u3002",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u9996\u5148\u9605\u8BFB\u5E76\u63A5\u53D7\u4E2A\u4EBA\u8D44\u6599\u901A\u77E5\u3002",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\u5148\u63A5\u53D7\u9605\u8BFB\u6570\u636E\u4E0A\u4F20\u901A\u77E5\u3002",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u66F4\u65B0\u4E86\u914D\u7F6E\u6587\u4EF6\u548C\u4E91\u6743\u9650\u3002",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\u9996\u5148\u6253\u5F00\u4E00\u7BC7 Markdown \u6587\u7AE0\u3002",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6539\u53D8\u4E86\u8FD9\u7BC7\u6587\u7AE0\u7684\u9605\u8BFB\u6570\u636E\u3002\u91CD\u65B0\u6253\u5F00\u8868\u5355\u3002",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\u5148\u6253\u5F00\u4E00\u7BC7\u6587\u7AE0\u3002",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\u8FD9\u7BC7\u6587\u7AE0\u5DF2\u7ECF\u8FBE\u5230\u4E86\u9605\u8BFB\u72B6\u6001\u3002\u5728\u518D\u6B21\u5B8C\u6210\u4E4B\u524D\u5F00\u59CB\u91CD\u8BFB\u3002",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u8BFB\u53D6\u672C\u5730\u4FDD\u5B58\u7684\u6570\u636E\u3002",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u540C\u6B65\u6B63\u5728\u8FDB\u884C\u4E2D\u3002",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u624B\u52A8\u4E0A\u4F20\u8BFB\u6570\u6570\u636E",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u4E91\u4E0A\u4F20\u5DF2\u7981\u7528\u3002\u8BFB\u53D6\u7684\u6570\u636E\u4ECD\u4FDD\u5B58\u5728\u672C\u5730\u3002",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\u9996\u5148\u5728\u8BBE\u7F6E\u4E2D\u4FDD\u5B58\u5E76\u4E0A\u4F20\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u4EE5\u5E94\u7528\u4E91\u6743\u9650\u3002",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\u4E0A\u4F20\u6743\u9650\u6216\u8FDE\u63A5\u5DF2\u66F4\u6539\u3002\u8FDB\u4E00\u6B65\u4E0A\u4F20\u5DF2\u505C\u6B62\u3002",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "\u9996\u5148\u66F4\u6B63\u4FDD\u7BA1\u5E93\u4E2D\u91CD\u590D\u7684\u5185\u5BB9 ID\u3002",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\u670D\u52A1\u5668\u786E\u8BA4\u4E86\u4E0D\u540C\u7684\u7248\u672C\u3002\u540C\u6B65\u5C1A\u672A\u6807\u8BB0\u4E3A\u5B8C\u6210\u3002",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u5DF2\u4FDD\u5B58\u5728\u4E91\u7AEF\uFF0C\u4F46\u65E0\u6CD5\u4FDD\u5B58\u672C\u5730\u540C\u6B65\u56DE\u6267\u3002\u60A8\u53EF\u4EE5\u7A0D\u540E\u518D\u6B21\u540C\u6B65\u3002",
  \u53D6\u6D88: "\u53D6\u6D88",
  \u958B\u59CB\u4E0A\u50B3: "\u5F00\u59CB\u4E0A\u4F20",
  \u540C\u6B65\u7D50\u679C: "\u540C\u6B65\u7ED3\u679C",
  \u95DC\u9589: "\u5173\u95ED",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\u8BFB\u53D6\u6570\u636E\u9996\u5148\u4FDD\u5B58\u5728\u672C\u5730\u3002\u4EC5\u5F53\u60A8\u624B\u52A8\u540C\u6B65\u65F6\u624D\u4F1A\u4E0A\u4F20\u3002",
  \u8A08\u5283\u95B1\u8B80: "\u8BA1\u5212\u9605\u8BFB",
  \u95B1\u8B80\u72C0\u614B: "\u9605\u8BFB\u72B6\u6001",
  \u95B1\u8B80\u5C64\u6B21: "\u9605\u8BFB\u6DF1\u5EA6",
  \u672A\u8A2D\u5B9A: "\u672A\u8BBE\u7F6E",
  \u95B1\u8B80\u6B21\u6578: "\u5DF2\u5B8C\u6210\u7684\u9605\u8BFB",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\u5DF2\u5B8C\u6210\u7684\u9605\u8BFB\u6570\u3002\u5F00\u59CB\u91CD\u8BFB\u5E76\u4E0D\u4F1A\u589E\u52A0\u5B83\uFF1B\u800C\u662F\u4F1A\u589E\u52A0\u5B83\u3002\u5B8C\u6210\u4E00\u9879\u52A0\u4E00\u3002",
  \u95B1\u8B80\u65E5\u671F: "\u9605\u8BFB\u65E5\u671F",
  \u611F\u60F3\u8207\u8A55\u50F9: "\u53CD\u601D\u548C\u8BC4\u7EA7",
  \u95B1\u8B80\u611F\u60F3: "\u8BFB\u4E66\u53CD\u601D",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\u6211\u7684\u63A8\u8350",
  \u6211\u7684\u8A55\u5206: "\u6211\u7684\u8BC4\u4EF7",
  \u672A\u8A55\u5206: "\u672A\u8BC4\u7EA7",
  \u6211\u7684\u5206\u985E: "\u6211\u7684\u5206\u7C7B",
  "\u6BCF\u884C\u4E00\u9805\u3002": "\u6BCF\u884C\u4E00\u9879\u3002",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\u6211\u7684\u8BFB\u8005\u7C7B\u578B\uFF1A\u8FD9\u7BC7\u6587\u7AE0\u9002\u5408\u8C01\uFF1F",
  \u5132\u5B58\u4E26\u540C\u6B65: "\u4FDD\u5B58\u5E76\u540C\u6B65",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\u4FDD\u5B58\u5728\u672C\u5730",
  \u9023\u7DDA: "\u8FDE\u63A5\u65B9\u5F0F",
  "API \u7DB2\u5740": "API\u7F51\u5740",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\u8BFB\u5361\u5668\u8FDE\u63A5\u5BC6\u94A5",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u7531\u60A8\u7684\u7BA1\u7406\u5458\u63D0\u4F9B\uFF1B\u8FD9\u4E0D\u662F NocoDB \u7BA1\u7406\u5458\u5BC6\u94A5\u3002",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\u672C\u5730\u8BB0\u4F4F\u8FDE\u63A5\u5BC6\u94A5",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\u9ED8\u8BA4\u4E0D\u4FDD\u5B58\u3002\u5982\u679C\u542F\u7528\uFF0C\u5BC6\u94A5\u5C06\u4EE5\u672A\u52A0\u5BC6\u7684\u65B9\u5F0F\u5B58\u50A8\u5728\u63D2\u4EF6\u6570\u636E\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u4FDD\u7BA1\u5E93\u540C\u6B65\u6216\u5907\u4EFD\u8FDB\u884C\u590D\u5236\u3002",
  \u6E2C\u8A66\u9023\u7DDA: "\u6D4B\u8BD5\u8FDE\u63A5",
  \u5DF2\u958B\u555F: "\u542F\u7528",
  \u5DF2\u505C\u7528: "\u6B8B\u75BE\u4EBA",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\u8BFB\u8005\u7B80\u4ECB",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\u6635\u79F0\uFF08\u5FC5\u586B\uFF09",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\u7535\u5B50\u90AE\u4EF6\uFF08\u53EF\u9009\uFF0C\u672A\u7ECF\u9A8C\u8BC1\uFF09",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\u7EC4\u7EC7\uFF08\u53EF\u9009\uFF09",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\u51FA\u751F\u5E74\u4EFD\uFF08\u53EF\u9009\uFF09",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\u51FA\u751F\u6708\u4EFD\uFF08\u53EF\u9009\uFF09",
  \u672A\u63D0\u4F9B: "\u672A\u63D0\u4F9B",
  \u6027\u5225: "\u6027\u522B",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\u56FD\u5BB6/\u5730\u533A\uFF08\u53EF\u9009\uFF09",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\u6211\u7684\u8BFB\u8005\u7C7B\u578B\uFF08\u53EF\u9009\uFF09",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\u6211\u63A5\u53D7\u4E2A\u4EBA\u8D44\u6599\u901A\u77E5",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\u624B\u52A8\u4E0A\u4F20\u6743\u9650",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\u6211\u63A5\u53D7\u9605\u8BFB\u6570\u636E\u4E0A\u4F20\u901A\u77E5",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u5141\u8BB8\u624B\u52A8\u8BFB\u53D6\u6570\u636E\u4E0A\u4F20",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\u5173\u95ED\u6B64\u529F\u80FD\u4F1A\u7ACB\u5373\u505C\u6B62\u672C\u5730\u4E0A\u4F20\u3002\u4F7F\u7528\u4E0B\u9762\u7684\u4FDD\u5B58\u5E76\u4E0A\u4F20\u914D\u7F6E\u6587\u4EF6\u6765\u5E94\u7528\u4E91\u8BBE\u7F6E\u3002",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\u4E91\u6743\u9650\u4ECD\u9700\u786E\u8BA4\u6216\u7533\u8BF7\u3002",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\u5728\u672C\u5730\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u914D\u7F6E\u6587\u4EF6\u4FDD\u5B58\u5728\u672C\u5730\u3002",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\u4FDD\u5B58\u5E76\u4E0A\u4F20\u4E2A\u4EBA\u8D44\u6599",
  \u624B\u52D5\u540C\u6B65: "\u624B\u52A8\u540C\u6B65",
  \u60F3\u8B80\u65E5\u671F: "\u60F3\u8981\u9605\u8BFB\u7684\u65E5\u671F",
  \u5728\u8B80\u65E5\u671F: "\u9605\u8BFB\u5F00\u59CB\u65E5\u671F",
  \u5DF2\u8B80\u65E5\u671F: "\u5B8C\u6210\u65E5\u671F",
  \u4E0D\u8B80\u65E5\u671F: "\u672A\u8BFB\u65E5\u671F",
  \u68C4\u8B80\u65E5\u671F: "\u653E\u5F03\u65E5\u671F",
  \u6211\u7684\u95DC\u9375\u8A5E: "\u6211\u7684\u5173\u952E\u8BCD",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\u6211\u7684\u8BFB\u8005\u7C7B\u578B",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\u6211\u7684\u4F5B\u5B66\u77E5\u8BC6\u6C34\u5E73",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\u6211\u7684\u7EC3\u4E60\u6C34\u5E73",
  \u6211\u7684\u5B50\u4E3B\u984C: "\u6211\u7684\u526F\u4E3B\u9898",
  \u9084\u6C92\u95B1\u8B80: "\u672A\u8BFB",
  \u60F3\u8B80: "\u60F3\u8BFB",
  \u5728\u8B80: "\u5728\u8BFB",
  \u5DF2\u8B80: "\u5DF2\u8BFB",
  \u4E0D\u8B80: "\u4E0D\u8BFB",
  \u68C4\u8B80: "\u5F03\u8BFB",
  \u7565\u8B80: "\u7565\u8BFB",
  \u901A\u8B80: "\u5B8C\u6574\u9605\u8BFB",
  \u7CBE\u8B80: "\u7EC6\u8BFB",
  \u6DF1\u5165\u7814\u8B80: "\u6DF1\u5165\u7814\u7A76",
  \u57FA\u790E\u95B1\u8B80: "\u521D\u7EA7\u9605\u8BFB",
  \u6AA2\u8996\u95B1\u8B80: "\u68C0\u89C6\u9605\u8BFB",
  \u5206\u6790\u95B1\u8B80: "\u5206\u6790\u9605\u8BFB",
  \u4E3B\u984C\u95B1\u8B80: "\u4E3B\u9898\u9605\u8BFB",
  \u63A8\u85A6: "\u63A8\u8350",
  \u4E0D\u63A8\u85A6: "\u4E0D\u63A8\u8350",
  \u672A\u6C7A\u5B9A: "\u672A\u5B9A",
  \u4E00\u822C\u8B80\u8005: "\u666E\u901A\u8BFB\u8005",
  \u521D\u7688\u4F9D\u8005: "\u521D\u7688\u4F9D\u8005",
  \u5B78\u4F5B\u8005: "\u5B66\u4F5B\u8005",
  \u4FEE\u884C\u8005: "\u4FEE\u884C\u8005",
  \u771F\u4F5B\u884C\u8005: "\u771F\u4F5B\u5B97\u4FEE\u884C\u8005",
  \u5973: "\u5973",
  \u7537: "\u7537",
  \u5176\u4ED6: "\u5176\u4ED6",
  \u4E0D\u9858\u900F\u9732: "\u5B81\u613F\u4E0D\u8BF4",
  language: "\u7528\u6237\u754C\u9762\u8BED\u8A00",
  languageHelp: "\u66F4\u6539\u4F1A\u7ACB\u5373\u5E94\u7528\u4E8E\u8BBE\u7F6E\u548C\u65B0\u7684\u9605\u8BFB\u7A97\u53E3\u3002\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6\u540E\u547D\u4EE4\u540D\u79F0\u4F1A\u66F4\u65B0\u3002",
  connected: "\u60A8\u597D {name}\uFF0C\u8FDE\u63A5\u6210\u529F\u3002",
  preview: "\u5F85\u5B9A\uFF1A{pending}\uFF1B\u4E0D\u53D8\uFF1A{unchanged}\uFF1B\u9700\u8981\u66F4\u6B63\uFF1A{invalid}\u3002\u4EC5\u4E0A\u4F20\u9605\u8BFB\u5B57\u6BB5\uFF0C\u5305\u62EC\u53CD\u601D\u3002",
  summary: "\u5DF2\u4FDD\u5B58\uFF1A{saved}\uFF1B\u4E0D\u53D8\uFF1A{unchanged}\uFF1B\u65E0\u6548\uFF1A{invalid}\uFF1B\u4E0D\u5B8C\u6574\uFF1A{remaining}\u3002",
  changedDuringUpload: "\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u8FDB\u884C\u4E86\u66F4\u6539\u3002\u518D\u6B21\u540C\u6B65\u4EE5\u4E0A\u4F20\u5B83\u4EEC\u3002",
  profileNotice: "\u8BFB\u8005\u8D44\u6599\u4FDD\u5B58\u5728\u672C\u5730\uFF0C\u53EA\u6709\u6309\u201C\u4FDD\u5B58\u5E76\u4E0A\u4F20\u4E2A\u4EBA\u8D44\u6599\u201D\u624D\u4F1A\u4F20\u9001\u81F3 True Buddha Pedia Analytics \u6570\u636E\u5E93\u3002\u8D44\u6599\u5305\u62EC\u6635\u79F0\uFF0C\u90AE\u7BB1\u3001\u51FA\u751F\u5E74/\u6708\u3001\u6027\u522B\u3001\u56FD\u5BB6\u3001\u8BFB\u8005\u7C7B\u578B\u548C\u673A\u6784\uFF0C\u7528\u4E8E\u7BA1\u7406\u8BFB\u8005\u53CA\u672A\u6765\u7684\u9605\u8BFB\u7EDF\u8BA1\u3002\u8FD9\u4E9B\u5B57\u6BB5\u4E0D\u4F1A\u5199\u5165\u6587\u7AE0\u3002\u60A8\u53EF\u4EE5\u4FEE\u6539\u8D44\u6599\uFF0C\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u8981\u6C42\u5220\u9664\u4E91\u7AEF\u8D44\u6599\u3002 \u6BCF\u6B21\u4E0A\u4F20\u4E2A\u4EBA\u8D44\u6599\u4E5F\u4F1A\u53D1\u9001\u8BBE\u5907\u7C7B\u578B\u3001\u63D2\u4EF6\u7248\u672C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u7528\u6237\u4EE3\u7406\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u517C\u5BB9\u6027\u68C0\u67E5\u548C\u6545\u969C\u6392\u67E5\u3002\u6BCF\u4F4D\u8BFB\u8005\u53EA\u4FDD\u7559\u6700\u8FD1\u4E00\u6B21\u4E0A\u4F20\u7684\u8BBE\u5907\u8D44\u6599\uFF0C\u4E0D\u6536\u96C6\u786C\u4EF6\u6807\u8BC6\u7B26\u3002 \u4FDD\u5B58\u6216\u4E0A\u4F20\u524D\uFF0C\u8BF7\u586B\u5199\u6240\u6709\u4E2A\u4EBA\u8D44\u6599\u5B57\u6BB5\uFF0C\u5E76\u81F3\u5C11\u52FE\u9009\u4E00\u79CD\u8BFB\u8005\u7C7B\u578B\u3002",
  readingNotice: "\u540C\u610F\u9605\u8BFB\u8D44\u6599\u4E0A\u4F20\u8BF4\u660E\u540E\uFF0C\u53EA\u6709\u60A8\u624B\u52A8\u540C\u6B65\u7684\u9605\u8BFB\u8D44\u6599\u4F1A\u4F20\u9001\u81F3\u4E91\u7AEF\u7684 True Buddha Pedia Analytics \u6570\u636E\u5E93\uFF0C\u5305\u62EC\u9605\u8BFB\u8FDB\u5EA6\u3001\u65E5\u671F\u3001\u8BC4\u5206\u3001\u9605\u8BFB\u63A8\u8350\u3001\u5173\u952E\u8BCD\u3001\u5B50\u4E3B\u9898\u3001\u8BFB\u8005\u7C7B\u578B\u5206\u7C7B\u3001\u4F5B\u5B66\u7EA7\u522B\u53CA\u4FEE\u884C\u7EA7\u522B\u3002 \u6587\u7AE0\u6B63\u6587\u53CA\u65E0\u5173\u5C5E\u6027\u4E0D\u4F1A\u4E0A\u4F20\u3002\u505C\u7528\u4F1A\u505C\u6B62\u540E\u7EED\u4E0A\u4F20\uFF0C\u4F46\u4E0D\u4F1A\u5220\u9664\u65E2\u6709\u4E91\u7AEF\u8D44\u6599\u3002 \u9605\u8BFB\u8BB0\u5F55\u4E5F\u5305\u542B\u5DF2\u5B89\u88C5\u6587\u96C6\u7684\u7CFB\u5217\u3001\u7248\u672C\u7C7B\u578B\u3001Tbpedia \u7248\u672C\u3001\u53D1\u884C\u7F16\u53F7\u3001\u8BED\u8A00\u4EE3\u7801\u53CA\u6807\u9898\u3002",
  noticeUnavailable: "\u8BE5\u670D\u52A1\u5668\u9700\u8981\u66F4\u65B0\u7684\u9690\u79C1\u58F0\u660E\u3002\u5728\u63A5\u53D7\u6216\u4E0A\u4F20\u4E4B\u524D\u66F4\u65B0\u63D2\u4EF6\u3002",
  invalidField: "\u68C0\u67E5\u8BE5\u5B57\u6BB5\u7684\u503C\u548C\u683C\u5F0F\u3002",
  invalidChoice: "\u9009\u62E9\u53EF\u7528\u9009\u9879\u4E4B\u4E00\u3002",
  invalidType: "\u8F93\u5165\u9884\u671F\u7C7B\u578B\u7684\u200B\u200B\u503C\u3002",
  tooSmall: "\u6700\u5C0F\u503C\u4E3A {limit}\u3002",
  tooLarge: "\u6700\u5927\u503C\u4E3A {limit}\u3002",
  invalidDate: "\u8F93\u5165\u6709\u6548\u7684\u65E5\u5386\u65E5\u671F (YYYY-MM-DD)\u3002",
  futureBirthYear: "\u51FA\u751F\u5E74\u4EFD\u4E0D\u80FD\u662F\u5C06\u6765\u7684\u5E74\u4EFD\u3002",
  unknownCountry: "\u9009\u62E9\u6709\u6548\u7684\u56FD\u5BB6\u6216\u5730\u533A\u3002",
  birthYearRequired: "\u6307\u5B9A\u51FA\u751F\u6708\u4EFD\u65F6\u63D0\u4F9B\u51FA\u751F\u5E74\u4EFD\u3002",
  invalidEmail: "\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
  validation: "\u8BF7\u66F4\u6B63\u65E0\u6548\u5B57\u6BB5\u3002",
  "backend.UNAUTHENTICATED": "\u65E0\u6CD5\u8BBF\u95EE\u6B64\u8BFB\u8005\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u6062\u590D\u8FDE\u63A5\u3002",
  "backend.NOT_FOUND": "\u672A\u627E\u5230\u8BF7\u6C42\u7684\u7AEF\u70B9\u3002",
  "backend.NOT_CONFIGURED": "\u4E91\u5B58\u50A8\u6B63\u5728\u7B49\u5F85\u6570\u636E\u5E93\u914D\u7F6E\u3002\u53EF\u4EE5\u672C\u5730\u9605\u8BFB\u3002",
  "backend.BACKEND_ERROR": "\u65E0\u6CD5\u9A8C\u8BC1\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u60A8\u7684\u7BA1\u7406\u5458\u3002",
  "backend.CONSENT_REQUIRED": "\u67E5\u770B\u5E76\u63A5\u53D7\u5F53\u524D\u7684\u4E2A\u4EBA\u8D44\u6599\u548C\u9605\u8BFB\u901A\u77E5\u3002",
  "backend.UPLOAD_DISABLED": "\u4E91\u9605\u8BFB\u4E0A\u4F20\u5DF2\u7981\u7528\u3002",
  "backend.CONTENT_NOT_FOUND": "\u8BE5\u4EA7\u54C1\u4E0D\u5728\u6279\u51C6\u76EE\u5F55\u4E2D\u3002",
  "backend.VALIDATION_FAILED": "\u63D0\u4EA4\u7684\u6570\u636E\u65E0\u6548\u6216\u76EE\u5F55\u9879\u65E0\u6548\u3002",
  "backend.DUPLICATE_KEY": "\u91CD\u590D\u7684\u9605\u8BFB\u8BB0\u5F55\u9700\u8981\u7BA1\u7406\u5458\u4FEE\u590D\u3002",
  "backend.METHOD_NOT_ALLOWED": "\u4E0D\u5141\u8BB8\u4F7F\u7528\u6B64\u8BF7\u6C42\u65B9\u6CD5\u3002",
  "backend.INTERNAL_ERROR": "\u8BF7\u6C42\u65E0\u6CD5\u5B8C\u6210\u3002\u7A0D\u540E\u518D\u8BD5\u3002",
  "backend.PAYLOAD_TOO_LARGE": "\u63D0\u4EA4\u7684\u6570\u636E\u8D85\u51FA\u5927\u5C0F\u9650\u5236\u3002",
  "backend.BAD_REQUEST": "\u8BF7\u6C42\u5FC5\u987B\u5305\u542B\u6709\u6548\u7684 JSON \u6570\u636E\u3002",
  "backend.JSON_REQUIRED": "\u8BF7\u6C42\u5FC5\u987B\u4F7F\u7528 application/json\u3002",
  "backend.RATE_LIMITED": "\u8BF7\u6C42\u592A\u591A\u3002\u7A0D\u540E\u518D\u8BD5\u3002",
  "field.nickname": "\u6635\u79F0",
  "field.email": "\u7535\u5B50\u90AE\u4EF6",
  "field.birth_year": "\u51FA\u751F\u5E74\u4EFD",
  "field.birth_month": "\u51FA\u751F\u6708\u4EFD",
  "field.sex": "\u6027\u522B",
  "field.country_code": "\u56FD\u5BB6/\u5730\u533A",
  "field.reader_type": "\u8BFB\u5361\u5668\u7C7B\u578B",
  "field.organisation": "\u7EC4\u7EC7\u673A\u6784",
  "field.content_id": "\u5185\u5BB9ID",
  "field.schema_version": "\u6570\u636E\u7248\u672C",
  "field.client_updated_at": "\u6700\u540E\u66F4\u65B0",
  "field.profile": "\u516C\u53F8\u7B80\u4ECB",
  "field.values": "\u8BFB\u53D6\u6570\u636E",
  "backend.BACKEND_TIMEOUT": "\u6570\u636E\u5E93\u54CD\u5E94\u8D85\u65F6\uFF0C\u5C1A\u65E0\u6CD5\u786E\u8BA4\u662F\u5426\u4FDD\u5B58\u3002\u670D\u52A1\u6062\u590D\u540E\u8BF7\u624B\u52A8\u91CD\u8BD5\u3002",
  followSystem: "\u8DDF\u968F\u7CFB\u7EDF",
  followSystemHelp: "\u4F7F\u7528 Obsidian \u7684\u8BED\u8A00\u8BBE\u7F6E\uFF1B\u4E0D\u652F\u6301\u7684\u8BED\u8A00\u4F1A\u4F7F\u7528\u82F1\u6587\u3002",
  updaterReadError: "\u65E0\u6CD5\u8BFB\u53D6 Tbpedia \u66F4\u65B0\u63D2\u4EF6\u8BBE\u7F6E\u3002\u8BF7\u68C0\u67E5\u5176 data.json \u540E\u91CD\u8BD5\u3002\u9605\u8BFB\u8D44\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u5730\u3002",
  updaterChanged: "\u540C\u6B65\u671F\u95F4\u5DF2\u5B89\u88C5\u7684\u6587\u96C6\u7248\u672C\u53D1\u751F\u53D8\u5316\uFF0C\u5DF2\u505C\u6B62\u540E\u7EED\u4E0A\u4F20\u3002\u8BF7\u91CD\u65B0\u9884\u89C8\u5E76\u540C\u6B65\u3002",
  updaterSyncNotice: "\u9605\u8BFB\u8BB0\u5F55\u4E5F\u5305\u542B\u5DF2\u5B89\u88C5\u6587\u96C6\u7684\u7CFB\u5217\u3001\u7248\u672C\u7C7B\u578B\u3001Tbpedia \u7248\u672C\u3001\u53D1\u884C\u7F16\u53F7\u3001\u8BED\u8A00\u4EE3\u7801\u53CA\u6807\u9898\u3002",
  analyticsMetadataReadError: "\u65E0\u6CD5\u8BFB\u53D6\u6216\u6838\u5BF9 analytics data.json \u4E2D\u4FDD\u5B58\u7684\u6587\u96C6\u8D44\u6599\u3002\u8BF7\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6\u540E\u91CD\u8BD5\u3002",
  connectionAvailable: "\u8FDE\u63A5\u6210\u529F\uFF0C\u4E91\u7AEF\u5B58\u50A8\u53EF\u4F9B\u4F7F\u7528\u3002",
  recordReading: "\u8BB0\u5F55\u6211\u7684\u9605\u8BFB\u6570\u636E",
  syncReadingCloud: "\u540C\u6B65\u9605\u8BFB\u6570\u636E\u81F3\u4E91\u7AEF",
  readingContentIdRequired: "\u6B64\u7B14\u8BB0\u7684 frontmatter \u5FC5\u987B\u5305\u542B\u6709\u6548\u7684 tbpedia_content_id\uFF0C\u624D\u80FD\u8BB0\u5F55\u9605\u8BFB\u6570\u636E\u3002",
  requiredSuffix: "\uFF08\u5FC5\u586B\uFF09",
  profileRequiredHelp: "\u4FDD\u5B58\u6216\u4E0A\u4F20\u524D\uFF0C\u8BF7\u586B\u5199\u6240\u6709\u4E2A\u4EBA\u8D44\u6599\u5B57\u6BB5\uFF0C\u5E76\u81F3\u5C11\u52FE\u9009\u4E00\u79CD\u8BFB\u8005\u7C7B\u578B\u3002",
  readerTypesRequired: "\u8BF7\u81F3\u5C11\u52FE\u9009\u4E00\u79CD\u8BFB\u8005\u7C7B\u578B\u3002",
  readerId: "\u8BFB\u8005 ID",
  readerSetup: "\u8BFB\u8005\u8BBE\u7F6E",
  newReader: "\u6CE8\u518C\u65B0\u8BFB\u8005",
  existingReader: "\u8FDE\u63A5\u73B0\u6709\u8BFB\u8005",
  connectExistingReader: "\u8FDE\u63A5\u73B0\u6709\u8BFB\u8005",
  newReaderHelp: "\u8BF7\u586B\u59A5\u4E0B\u65B9\u4E2A\u4EBA\u8D44\u6599\uFF0C\u518D\u6309\u201C\u4FDD\u5B58\u5E76\u4E0A\u4F20\u4E2A\u4EBA\u8D44\u6599\u201D\uFF0C\u5373\u53EF\u6CE8\u518C\u5E76\u53D6\u5F97\u65B0\u7684\u8BFB\u8005 ID\u3002",
  readerAlreadyLinked: "\u6B64 Vault \u5DF2\u8FDE\u63A5\u8BFB\u8005\u3002",
  readerOperationBusy: "\u8BFB\u8005\u64CD\u4F5C\u6B63\u5728\u8FDB\u884C\uFF0C\u8BF7\u5B8C\u6210\u540E\u518D\u8BD5\u3002",
  readerIdInvalid: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u8BFB\u8005 ID\u3002",
  readerRecoveryMismatch: "\u4E91\u7AEF\u8FD4\u56DE\u7684\u8BFB\u8005\u4E0D\u7B26\uFF0C\u5C1A\u672A\u4FDD\u5B58\u6062\u590D\u8D44\u6599\u3002",
  readerIdHelp: "\u8F93\u5165\u8BFB\u8005 ID \u5373\u53EF\u83B7\u53D6\u4E2A\u4EBA\u8D44\u6599\u3002\u6B64 ID \u53EF\u7528\u4E8E\u8BBF\u95EE\u60A8\u7684\u8D26\u6237\uFF0C\u8BF7\u59A5\u5584\u4FDD\u5BC6\u3002",
  reflectionRemaining: "\u8FD8\u53EF\u8F93\u5165 {remaining} \u5B57\uFF08\u6700\u591A {limit} \u5B57\uFF09",
  reflectionTooLong: "\u8BF7\u5C06\u9605\u8BFB\u611F\u60F3\u7F29\u77ED\u81F3 {limit} \u5B57\u4EE5\u5185\u518D\u4FDD\u5B58\u3002",
  showReaderId: "\u663E\u793A\u8BFB\u8005 ID",
  hideReaderId: "\u9690\u85CF\u8BFB\u8005 ID"
};

// plugin/locales/vi.json
var vi_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Thu\u1ED9c t\xEDnh b\xE0i vi\u1EBFt ph\u1EA3i l\xE0 \u0111\u1ED1i t\u01B0\u1EE3ng YAML.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Ho\u1EA1t \u0111\u1ED9ng kh\xF4ng th\u1EC3 ho\xE0n th\xE0nh. D\u1EEF li\u1EC7u c\u1EE7a b\u1EA1n v\u1EABn \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "D\u1EEF li\u1EC7u \u0111\u1ECDc Tbpedia",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "M\u1EDF d\u1EEF li\u1EC7u \u0111\u1ECDc",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u0110\xE1nh d\u1EA5u l\xE0 \u0111\xE3 \u0111\u1ECDc",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u0110\xE1nh d\u1EA5u l\xE0 \u0111\xE3 ho\xE0n th\xE0nh",
  \u958B\u59CB\u91CD\u8B80: "B\u1EAFt \u0111\u1EA7u \u0111\u1ECDc l\u1EA1i",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u0110\u1ED3ng b\u1ED9 h\xF3a b\xE0i vi\u1EBFt hi\u1EC7n t\u1EA1i",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u \u0111\u1ECDc \u0111\xE3 thay \u0111\u1ED5i l\xEAn \u0111\xE1m m\xE2y",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Kh\xF4ng th\u1EC3 l\u01B0u c\xE0i \u0111\u1EB7t plugin. Ki\u1EC3m tra quy\u1EC1n ghi cho vault n\xE0y.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API ph\u1EA3i s\u1EED d\u1EE5ng HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Nh\u1EADp URL m\xE1y ch\u1EE7 API kh\xF4ng c\xF3 \u0111\u01B0\u1EDDng d\u1EABn ho\u1EB7c tham s\u1ED1 truy v\u1EA5n.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Nh\u1EADp kh\xF3a k\u1EBFt n\u1ED1i \u0111\u1EA7u \u0111\u1ECDc h\u1EE3p l\u1EC7.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i. D\u1EEF li\u1EC7u c\u1EE5c b\u1ED9 \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u gi\u1EEF. H\xE3y th\u1EED l\u1EA1i theo c\xE1ch th\u1EE7 c\xF4ng sau.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "M\xE1y ch\u1EE7 tr\u1EA3 v\u1EC1 d\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Kh\xF4ng th\u1EC3 ho\xE0n t\u1EA5t \u0111\u1ED3ng b\u1ED9 h\xF3a. H\xE3y th\u1EED l\u1EA1i sau.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Vault n\xE0y \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt v\u1EDBi m\u1ED9t \u0111\u1EA7u \u0111\u1ECDc kh\xE1c. S\u1EED d\u1EE5ng m\u1ED9t kho ti\u1EC1n ri\xEAng.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u0110\u1ECDc v\xE0 ch\u1EA5p nh\u1EADn th\xF4ng b\xE1o h\u1ED3 s\u01A1 tr\u01B0\u1EDBc.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Ch\u1EA5p nh\u1EADn th\xF4ng b\xE1o t\u1EA3i l\xEAn d\u1EEF li\u1EC7u \u0111\u1ECDc tr\u01B0\u1EDBc.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u0110\xE3 c\u1EADp nh\u1EADt quy\u1EC1n h\u1ED3 s\u01A1 v\xE0 \u0111\xE1m m\xE2y.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Tr\u01B0\u1EDBc ti\xEAn h\xE3y m\u1EDF m\u1ED9t b\xE0i vi\u1EBFt Markdown.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "M\u1ED9t thao t\xE1c kh\xE1c \u0111\xE3 thay \u0111\u1ED5i d\u1EEF li\u1EC7u \u0111\u1ECDc c\u1EE7a b\xE0i vi\u1EBFt n\xE0y. M\u1EDF l\u1EA1i bi\u1EC3u m\u1EABu.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "M\u1EDF m\u1ED9t b\xE0i vi\u1EBFt \u0111\u1EA7u ti\xEAn.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "B\xE0i vi\u1EBFt n\xE0y \u0111\xE3 c\xF3 tr\u1EA1ng th\xE1i \u0111\u1ECDc n\xE0y. B\u1EAFt \u0111\u1EA7u \u0111\u1ECDc l\u1EA1i tr\u01B0\u1EDBc khi ho\xE0n th\xE0nh n\xF3 m\u1ED9t l\u1EA7n n\u1EEFa.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u0110\u1ECDc d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u0110ang \u0111\u1ED3ng b\u1ED9 h\xF3a.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "T\u1EA3i l\xEAn d\u1EEF li\u1EC7u \u0111\u1ECDc theo c\xE1ch th\u1EE7 c\xF4ng",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "T\u1EA3i l\xEAn \u0111\xE1m m\xE2y b\u1ECB v\xF4 hi\u1EC7u h\xF3a. D\u1EEF li\u1EC7u \u0111\u1ECDc v\u1EABn \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Tr\u01B0\u1EDBc ti\xEAn h\xE3y l\u01B0u v\xE0 t\u1EA3i l\xEAn h\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n trong c\xE0i \u0111\u1EB7t \u0111\u1EC3 \xE1p d\u1EE5ng c\xE1c quy\u1EC1n tr\xEAn \u0111\xE1m m\xE2y.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Quy\u1EC1n t\u1EA3i l\xEAn ho\u1EB7c k\u1EBFt n\u1ED1i \u0111\xE3 thay \u0111\u1ED5i. Vi\u1EC7c t\u1EA3i l\xEAn ti\u1EBFp theo \u0111\xE3 d\u1EEBng l\u1EA1i.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Tr\u01B0\u1EDBc ti\xEAn, h\xE3y s\u1EEDa ID n\u1ED9i dung tr\xF9ng l\u1EB7p trong vault.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "M\xE1y ch\u1EE7 \u0111\xE3 x\xE1c nh\u1EADn m\u1ED9t phi\xEAn b\u1EA3n kh\xE1c. \u0110\u1ED3ng b\u1ED9 h\xF3a ch\u01B0a \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u l\xE0 ho\xE0n t\u1EA5t.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u0110\xE3 l\u01B0u tr\xEAn \u0111\xE1m m\xE2y nh\u01B0ng kh\xF4ng th\u1EC3 l\u01B0u bi\xEAn nh\u1EADn \u0111\u1ED3ng b\u1ED9 h\xF3a c\u1EE5c b\u1ED9. B\u1EA1n c\xF3 th\u1EC3 \u0111\u1ED3ng b\u1ED9 l\u1EA1i sau.",
  \u53D6\u6D88: "H\u1EE7y b\u1ECF",
  \u958B\u59CB\u4E0A\u50B3: "B\u1EAFt \u0111\u1EA7u t\u1EA3i l\xEAn",
  \u540C\u6B65\u7D50\u679C: "\u0110\u1ED3ng b\u1ED9 h\xF3a k\u1EBFt qu\u1EA3",
  \u95DC\u9589: "\u0110\xF3ng",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Vi\u1EC7c \u0111\u1ECDc d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9 tr\u01B0\u1EDBc ti\xEAn. N\xF3 ch\u1EC9 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn khi b\u1EA1n \u0111\u1ED3ng b\u1ED9 h\xF3a th\u1EE7 c\xF4ng.",
  \u8A08\u5283\u95B1\u8B80: "\u0110\u1ECDc theo k\u1EBF ho\u1EA1ch",
  \u95B1\u8B80\u72C0\u614B: "Tr\u1EA1ng th\xE1i \u0111\u1ECDc",
  \u95B1\u8B80\u5C64\u6B21: "\u0110\u1ED9 s\xE2u \u0111\u1ECDc",
  \u672A\u8A2D\u5B9A: "Ch\u01B0a \u0111\u1EB7t",
  \u95B1\u8B80\u6B21\u6578: "B\xE0i \u0111\u1ECDc \u0111\xE3 ho\xE0n th\xE0nh",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "S\u1ED1 l\u01B0\u1EE3ng b\xE0i \u0111\u1ECDc \u0111\xE3 ho\xE0n th\xE0nh. B\u1EAFt \u0111\u1EA7u \u0111\u1ECDc l\u1EA1i kh\xF4ng l\xE0m t\u0103ng n\xF3; ho\xE0n th\xE0nh m\u1ED9t th\xEAm m\u1ED9t.",
  \u95B1\u8B80\u65E5\u671F: "Ng\xE0y \u0111\u1ECDc",
  \u611F\u60F3\u8207\u8A55\u50F9: "Ph\u1EA3n \xE1nh v\xE0 x\u1EBFp h\u1EA1ng",
  \u95B1\u8B80\u611F\u60F3: "\u0110\u1ECDc suy ng\u1EABm",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Khuy\u1EBFn ngh\u1ECB c\u1EE7a t\xF4i",
  \u6211\u7684\u8A55\u5206: "\u0110\xE1nh gi\xE1 c\u1EE7a t\xF4i",
  \u672A\u8A55\u5206: "Kh\xF4ng \u0111\u01B0\u1EE3c x\u1EBFp h\u1EA1ng",
  \u6211\u7684\u5206\u985E: "Ph\xE2n lo\u1EA1i c\u1EE7a t\xF4i",
  "\u6BCF\u884C\u4E00\u9805\u3002": "M\u1ED9t m\u1EE5c tr\xEAn m\u1ED7i d\xF2ng.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Ng\u01B0\u1EDDi \u0111\u1ECDc c\u1EE7a t\xF4i thu\u1ED9c lo\u1EA1i: b\xE0i vi\u1EBFt n\xE0y ph\xF9 h\u1EE3p v\u1EDBi ai?",
  \u5132\u5B58\u4E26\u540C\u6B65: "L\u01B0u v\xE0 \u0111\u1ED3ng b\u1ED9 h\xF3a",
  \u5132\u5B58\u65BC\u672C\u6A5F: "L\u01B0u c\u1EE5c b\u1ED9",
  \u9023\u7DDA: "K\u1EBFt n\u1ED1i",
  "API \u7DB2\u5740": "URL API",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Ph\xEDm k\u1EBFt n\u1ED1i \u0111\u1EA7u \u0111\u1ECDc",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u0110\u01B0\u1EE3c cung c\u1EA5p b\u1EDFi qu\u1EA3n tr\u1ECB vi\xEAn c\u1EE7a b\u1EA1n; \u0111\xE2y kh\xF4ng ph\u1EA3i l\xE0 kh\xF3a qu\u1EA3n tr\u1ECB vi\xEAn NocoDB.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Ghi nh\u1EDB kh\xF3a k\u1EBFt n\u1ED1i c\u1EE5c b\u1ED9",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Kh\xF4ng \u0111\u01B0\u1EE3c l\u01B0u theo m\u1EB7c \u0111\u1ECBnh. N\u1EBFu \u0111\u01B0\u1EE3c b\u1EADt, kh\xF3a s\u1EBD \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF kh\xF4ng \u0111\u01B0\u1EE3c m\xE3 h\xF3a trong t\u1EC7p d\u1EEF li\u1EC7u plugin v\xE0 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c sao ch\xE9p b\u1EB1ng c\xE1ch \u0111\u1ED3ng b\u1ED9 h\xF3a ho\u1EB7c sao l\u01B0u vault.",
  \u6E2C\u8A66\u9023\u7DDA: "Ki\u1EC3m tra k\u1EBFt n\u1ED1i",
  \u5DF2\u958B\u555F: "\u0110\xE3 b\u1EADt",
  \u5DF2\u505C\u7528: "\u0110\xE3 t\u1EAFt",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "H\u1ED3 s\u01A1 \u0111\u1ED9c gi\u1EA3",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Bi\u1EC7t danh (b\u1EAFt bu\u1ED9c)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "Email (t\xF9y ch\u1ECDn, ch\u01B0a \u0111\u01B0\u1EE3c x\xE1c minh)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "T\u1ED5 ch\u1EE9c (t\xF9y ch\u1ECDn)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "N\u0103m sinh (t\xF9y ch\u1ECDn)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Th\xE1ng sinh (t\xF9y ch\u1ECDn)",
  \u672A\u63D0\u4F9B: "Kh\xF4ng \u0111\u01B0\u1EE3c cung c\u1EA5p",
  \u6027\u5225: "Gi\u1EDBi t\xEDnh",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Qu\u1ED1c gia/khu v\u1EF1c (t\xF9y ch\u1ECDn)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Lo\u1EA1i tr\xECnh \u0111\u1ECDc c\u1EE7a t\xF4i (t\xF9y ch\u1ECDn)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "T\xF4i ch\u1EA5p nh\u1EADn th\xF4ng b\xE1o h\u1ED3 s\u01A1",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Quy\u1EC1n t\u1EA3i l\xEAn th\u1EE7 c\xF4ng",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "T\xF4i ch\u1EA5p nh\u1EADn th\xF4ng b\xE1o t\u1EA3i l\xEAn d\u1EEF li\u1EC7u \u0111\u1ECDc",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Cho ph\xE9p t\u1EA3i l\xEAn d\u1EEF li\u1EC7u \u0111\u1ECDc th\u1EE7 c\xF4ng",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Vi\u1EC7c t\u1EAFt t\xEDnh n\u0103ng n\xE0y ngay l\u1EADp t\u1EE9c d\u1EEBng t\u1EA3i l\xEAn c\u1EE5c b\u1ED9. S\u1EED d\u1EE5ng L\u01B0u v\xE0 t\u1EA3i l\xEAn h\u1ED3 s\u01A1 b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 \xE1p d\u1EE5ng c\xE0i \u0111\u1EB7t \u0111\xE1m m\xE2y.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Quy\u1EC1n tr\xEAn \u0111\xE1m m\xE2y v\u1EABn c\u1EA7n x\xE1c nh\u1EADn ho\u1EB7c \u1EE9ng d\u1EE5ng.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "L\u01B0u h\u1ED3 s\u01A1 c\u1EE5c b\u1ED9",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "H\u1ED3 s\u01A1 \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "L\u01B0u v\xE0 t\u1EA3i l\xEAn h\u1ED3 s\u01A1",
  \u624B\u52D5\u540C\u6B65: "\u0110\u1ED3ng b\u1ED9 h\xF3a th\u1EE7 c\xF4ng",
  \u60F3\u8B80\u65E5\u671F: "Ng\xE0y mu\u1ED1n \u0111\u1ECDc",
  \u5728\u8B80\u65E5\u671F: "Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1ECDc",
  \u5DF2\u8B80\u65E5\u671F: "Ng\xE0y ho\xE0n th\xE0nh",
  \u4E0D\u8B80\u65E5\u671F: "Ng\xE0y ch\u01B0a \u0111\u1ECDc",
  \u68C4\u8B80\u65E5\u671F: "ng\xE0y t\u1EEB b\u1ECF",
  \u6211\u7684\u95DC\u9375\u8A5E: "T\u1EEB kh\xF3a c\u1EE7a t\xF4i",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "C\xE1c lo\u1EA1i \u0111\u1ED9c gi\u1EA3 c\u1EE7a t\xF4i",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Tr\xECnh \u0111\u1ED9 hi\u1EC3u bi\u1EBFt Ph\u1EADt gi\xE1o c\u1EE7a t\xF4i",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "M\u1EE9c \u0111\u1ED9 th\u1EF1c h\xE0nh c\u1EE7a t\xF4i",
  \u6211\u7684\u5B50\u4E3B\u984C: "ch\u1EE7 \u0111\u1EC1 ph\u1EE5 c\u1EE7a t\xF4i",
  \u9084\u6C92\u95B1\u8B80: "Ch\u01B0a \u0111\u1ECDc",
  \u60F3\u8B80: "Mu\u1ED1n \u0111\u1ECDc",
  \u5728\u8B80: "\u0110\u1ECDc",
  \u5DF2\u8B80: "\u0110\xE3 ho\xE0n th\xE0nh",
  \u4E0D\u8B80: "Kh\xF4ng \u0111\u1ECDc",
  \u68C4\u8B80: "\u0110\xE3 ng\u1EEBng \u0111\u1ECDc",
  \u7565\u8B80: "\u0110\u1ECDc l\u01B0\u1EDBt",
  \u901A\u8B80: "\u0110\u1ECDc \u0111\u1EA7y \u0111\u1EE7",
  \u7CBE\u8B80: "\u0110\xF3ng \u0111\u1ECDc",
  \u6DF1\u5165\u7814\u8B80: "Nghi\xEAn c\u1EE9u chuy\xEAn s\xE2u",
  \u57FA\u790E\u95B1\u8B80: "\u0110\u1ECDc s\u01A1 c\u1EA5p",
  \u6AA2\u8996\u95B1\u8B80: "\u0110\u1ECDc ki\u1EC3m tra",
  \u5206\u6790\u95B1\u8B80: "\u0110\u1ECDc ph\xE2n t\xEDch",
  \u4E3B\u984C\u95B1\u8B80: "\u0110\u1ECDc t\u1ED5ng h\u1EE3p",
  \u63A8\u85A6: "\u0110\u1EC1 xu\u1EA5t",
  \u4E0D\u63A8\u85A6: "kh\xF4ng khuy\u1EBFn kh\xEDch",
  \u672A\u6C7A\u5B9A: "Ch\u01B0a quy\u1EBFt \u0111\u1ECBnh",
  \u4E00\u822C\u8B80\u8005: "Ng\u01B0\u1EDDi \u0111\u1ECDc t\u1ED5ng h\u1EE3p",
  \u521D\u7688\u4F9D\u8005: "Ng\u01B0\u1EDDi m\u1EDBi quy y",
  \u5B78\u4F5B\u8005: "Ph\u1EADt h\u1ECDc sinh",
  \u4FEE\u884C\u8005: "Ng\u01B0\u1EDDi tu h\xE0nh",
  \u771F\u4F5B\u884C\u8005: "H\xE0nh gi\u1EA3 Ch\xE2n Ph\u1EADt T\xF4ng",
  \u5973: "N\u1EEF",
  \u7537: "Nam",
  \u5176\u4ED6: "Kh\xE1c",
  \u4E0D\u9858\u900F\u9732: "Kh\xF4ng mu\u1ED1n n\xF3i",
  language: "ng\xF4n ng\u1EEF giao di\u1EC7n ng\u01B0\u1EDDi d\xF9ng",
  languageHelp: "C\xE1c thay \u0111\u1ED5i s\u1EBD \xE1p d\u1EE5ng ngay l\u1EADp t\u1EE9c cho c\xE0i \u0111\u1EB7t v\xE0 c\u1EEDa s\u1ED5 \u0111\u1ECDc m\u1EDBi. C\u1EADp nh\u1EADt t\xEAn l\u1EC7nh sau khi t\u1EA3i l\u1EA1i plugin.",
  connected: "Ch\xE0o {name}, k\u1EBFt n\u1ED1i th\xE0nh c\xF4ng.",
  preview: "\u0110ang ch\u1EDD x\u1EED l\xFD: {pending}; kh\xF4ng thay \u0111\u1ED5i: {unchanged}; c\u1EA7n ch\u1EC9nh s\u1EEDa: {invalid}. Ch\u1EC9 c\xE1c tr\u01B0\u1EDDng \u0111\u1ECDc, bao g\u1ED3m c\u1EA3 ph\u1EA3n \xE1nh, m\u1EDBi \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn.",
  summary: "\u0110\xE3 l\u01B0u: {saved}; kh\xF4ng thay \u0111\u1ED5i: {unchanged}; kh\xF4ng h\u1EE3p l\u1EC7: {invalid}; ch\u01B0a ho\xE0n thi\u1EC7n: {remaining}.",
  changedDuringUpload: "Nh\u1EEFng thay \u0111\u1ED5i \u0111\xE3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n trong qu\xE1 tr\xECnh t\u1EA3i l\xEAn. \u0110\u1ED3ng b\u1ED9 h\xF3a l\u1EA1i \u0111\u1EC3 t\u1EA3i ch\xFAng l\xEAn.",
  profileNotice: "H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF c\u1EE5c b\u1ED9. Ch\u1EC9 L\u01B0u v\xE0 t\u1EA3i l\xEAn h\u1ED3 s\u01A1 m\u1EDBi g\u1EEDi n\xF3 t\u1EDBi c\u01A1 s\u1EDF d\u1EEF li\u1EC7u True Buddha Pedia Analytics. N\xF3 bao g\u1ED3m bi\u1EC7t hi\u1EC7u c\u1EE7a b\u1EA1n v\xE0 email, n\u0103m/th\xE1ng sinh, gi\u1EDBi t\xEDnh, qu\u1ED1c gia, lo\u1EA1i ng\u01B0\u1EDDi \u0111\u1ECDc v\xE0 t\u1ED5 ch\u1EE9c m\xE0 b\u1EA1n cung c\u1EA5p \u0111\u1EC3 qu\u1EA3n l\xFD ng\u01B0\u1EDDi \u0111\u1ECDc v\xE0 th\u1ED1ng k\xEA vi\u1EC7c \u0111\u1ECDc trong t\u01B0\u01A1ng lai. Nh\u1EEFng tr\u01B0\u1EDDng n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c vi\u1EBFt th\xE0nh b\xE0i vi\u1EBFt. B\u1EA1n c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa h\u1ED3 s\u01A1 c\u1EE7a m\xECnh ho\u1EB7c y\xEAu c\u1EA7u qu\u1EA3n tr\u1ECB vi\xEAn x\xF3a d\u1EEF li\u1EC7u \u0111\xE1m m\xE2y. M\u1ED7i l\u1EA7n t\u1EA3i h\u1ED3 s\u01A1 l\xEAn c\u0169ng g\u1EEDi lo\u1EA1i thi\u1EBFt b\u1ECB, phi\xEAn b\u1EA3n ph\u1EA7n b\u1ED5 tr\u1EE3, h\u1EC7 \u0111i\u1EC1u h\xE0nh v\xE0 chu\u1ED7i t\xE1c nh\xE2n ng\u01B0\u1EDDi d\xF9ng \u0111\u1EC3 ki\u1EC3m tra t\xEDnh t\u01B0\u01A1ng th\xEDch v\xE0 kh\u1EAFc ph\u1EE5c s\u1EF1 c\u1ED1. Ch\u1EC9 l\u01B0u th\xF4ng tin thi\u1EBFt b\u1ECB c\u1EE7a l\u1EA7n t\u1EA3i h\u1ED3 s\u01A1 l\xEAn g\u1EA7n nh\u1EA5t; kh\xF4ng thu th\u1EADp m\xE3 \u0111\u1ECBnh danh ph\u1EA7n c\u1EE9ng. \u0110i\u1EC1n t\u1EA5t c\u1EA3 c\xE1c tr\u01B0\u1EDDng h\u1ED3 s\u01A1 v\xE0 ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t lo\u1EA1i \u0111\u1ED9c gi\u1EA3 tr\u01B0\u1EDBc khi l\u01B0u ho\u1EB7c t\u1EA3i l\xEAn.",
  readingNotice: "Sau khi ch\u1EA5p nh\u1EADn th\xF4ng b\xE1o t\u1EA3i d\u1EEF li\u1EC7u \u0111\u1ECDc l\xEAn, ch\u1EC9 d\u1EEF li\u1EC7u b\u1EA1n \u0111\u1ED3ng b\u1ED9 th\u1EE7 c\xF4ng m\u1EDBi \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn c\u01A1 s\u1EDF d\u1EEF li\u1EC7u True Buddha Pedia Analytics tr\xEAn \u0111\xE1m m\xE2y, bao g\u1ED3m ti\u1EBFn tr\xECnh \u0111\u1ECDc, ng\xE0y th\xE1ng, \u0111\xE1nh gi\xE1, \u0111\u1EC1 xu\u1EA5t, t\u1EEB kh\xF3a, ch\u1EE7 \u0111\u1EC1 ph\u1EE5, ph\xE2n lo\u1EA1i theo lo\u1EA1i \u0111\u1ED9c gi\u1EA3, tr\xECnh \u0111\u1ED9 ki\u1EBFn th\u1EE9c Ph\u1EADt h\u1ECDc v\xE0 tr\xECnh \u0111\u1ED9 tu t\u1EADp. N\u1ED9i dung b\xE0i vi\u1EBFt v\xE0 c\xE1c thu\u1ED9c t\xEDnh kh\xF4ng li\xEAn quan kh\xF4ng \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn. Vi\u1EC7c t\u1EAFt t\u1EA3i l\xEAn s\u1EBD d\u1EEBng t\u1EA3i l\xEAn trong t\u01B0\u01A1ng lai nh\u01B0ng kh\xF4ng x\xF3a d\u1EEF li\u1EC7u \u0111\xE1m m\xE2y hi\u1EC7n c\xF3. B\u1EA3n ghi \u0111\u1ECDc c\u0169ng bao g\u1ED3m lo\u1EA1t, \u1EA5n b\u1EA3n, phi\xEAn b\u1EA3n Tbpedia, m\xE3 b\u1EA3n ph\xE1t h\xE0nh, m\xE3 ng\xF4n ng\u1EEF v\xE0 ti\xEAu \u0111\u1EC1 c\u1EE7a b\u1ED9 s\u01B0u t\u1EADp \u0111\xE3 c\xE0i \u0111\u1EB7t.",
  noticeUnavailable: "M\xE1y ch\u1EE7 n\xE0y y\xEAu c\u1EA7u th\xF4ng b\xE1o b\u1EA3o m\u1EADt m\u1EDBi h\u01A1n. C\u1EADp nh\u1EADt plugin tr\u01B0\u1EDBc khi ch\u1EA5p nh\u1EADn ho\u1EB7c t\u1EA3i l\xEAn.",
  invalidField: "Ki\u1EC3m tra gi\xE1 tr\u1ECB v\xE0 \u0111\u1ECBnh d\u1EA1ng c\u1EE7a tr\u01B0\u1EDDng n\xE0y.",
  invalidChoice: "Ch\u1ECDn m\u1ED9t trong c\xE1c t\xF9y ch\u1ECDn c\xF3 s\u1EB5n.",
  invalidType: "Nh\u1EADp gi\xE1 tr\u1ECB c\u1EE7a lo\u1EA1i d\u1EF1 ki\u1EBFn.",
  tooSmall: "T\u1ED1i thi\u1EC3u l\xE0 {limit}.",
  tooLarge: "T\u1ED1i \u0111a l\xE0 {limit}.",
  invalidDate: "Nh\u1EADp ng\xE0y theo l\u1ECBch h\u1EE3p l\u1EC7 (YYYY-MM-DD).",
  futureBirthYear: "N\u0103m sinh kh\xF4ng th\u1EC3 \u1EDF trong t\u01B0\u01A1ng lai.",
  unknownCountry: "Ch\u1ECDn m\u1ED9t qu\u1ED1c gia ho\u1EB7c khu v\u1EF1c h\u1EE3p l\u1EC7.",
  birthYearRequired: "Cung c\u1EA5p n\u0103m sinh khi ch\u1EC9 \u0111\u1ECBnh th\xE1ng sinh.",
  invalidEmail: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email h\u1EE3p l\u1EC7.",
  validation: "Vui l\xF2ng s\u1EEDa c\xE1c tr\u01B0\u1EDDng kh\xF4ng h\u1EE3p l\u1EC7.",
  "backend.UNAUTHENTICATED": "Kh\xF4ng th\u1EC3 truy c\u1EADp ng\u01B0\u1EDDi \u0111\u1ECDc n\xE0y. H\xE3y li\xEAn h\u1EC7 qu\u1EA3n tr\u1ECB vi\xEAn \u0111\u1EC3 kh\xF4i ph\u1EE5c k\u1EBFt n\u1ED1i.",
  "backend.NOT_FOUND": "Kh\xF4ng t\xECm th\u1EA5y \u0111i\u1EC3m cu\u1ED1i \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u.",
  "backend.NOT_CONFIGURED": "B\u1ED9 nh\u1EDB \u0111\xE1m m\xE2y \u0111ang ch\u1EDD c\u1EA5u h\xECnh c\u01A1 s\u1EDF d\u1EEF li\u1EC7u. \u0110\u1ECDc \u0111\u1ECBa ph\u01B0\u01A1ng c\xF3 s\u1EB5n.",
  "backend.BACKEND_ERROR": "Ho\u1EA1t \u0111\u1ED9ng c\u01A1 s\u1EDF d\u1EEF li\u1EC7u kh\xF4ng th\u1EC3 \u0111\u01B0\u1EE3c x\xE1c minh. H\xE3y th\u1EED l\u1EA1i sau ho\u1EB7c li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn c\u1EE7a b\u1EA1n.",
  "backend.CONSENT_REQUIRED": "Xem x\xE9t v\xE0 ch\u1EA5p nh\u1EADn h\u1ED3 s\u01A1 hi\u1EC7n t\u1EA1i v\xE0 \u0111\u1ECDc th\xF4ng b\xE1o.",
  "backend.UPLOAD_DISABLED": "T\u1EA3i l\xEAn \u0111\u1ECDc tr\xEAn \u0111\xE1m m\xE2y b\u1ECB v\xF4 hi\u1EC7u h\xF3a.",
  "backend.CONTENT_NOT_FOUND": "M\u1EB7t h\xE0ng n\xE0y kh\xF4ng c\xF3 trong danh m\u1EE5c \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t.",
  "backend.VALIDATION_FAILED": "D\u1EEF li\u1EC7u \u0111\xE3 g\u1EEDi kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c m\u1EE5c danh m\u1EE5c kh\xF4ng ho\u1EA1t \u0111\u1ED9ng.",
  "backend.DUPLICATE_KEY": "H\u1ED3 s\u01A1 \u0111\u1ECDc tr\xF9ng l\u1EB7p y\xEAu c\u1EA7u qu\u1EA3n tr\u1ECB vi\xEAn s\u1EEDa ch\u1EEFa.",
  "backend.METHOD_NOT_ALLOWED": "Ph\u01B0\u01A1ng th\u1EE9c y\xEAu c\u1EA7u n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c ph\xE9p.",
  "backend.INTERNAL_ERROR": "Y\xEAu c\u1EA7u kh\xF4ng th\u1EC3 \u0111\u01B0\u1EE3c ho\xE0n th\xE0nh. H\xE3y th\u1EED l\u1EA1i sau.",
  "backend.PAYLOAD_TOO_LARGE": "D\u1EEF li\u1EC7u \u0111\xE3 g\u1EEDi v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n k\xEDch th\u01B0\u1EDBc.",
  "backend.BAD_REQUEST": "Y\xEAu c\u1EA7u ph\u1EA3i ch\u1EE9a d\u1EEF li\u1EC7u JSON h\u1EE3p l\u1EC7.",
  "backend.JSON_REQUIRED": "Y\xEAu c\u1EA7u ph\u1EA3i s\u1EED d\u1EE5ng application/json.",
  "backend.RATE_LIMITED": "Qu\xE1 nhi\u1EC1u y\xEAu c\u1EA7u. H\xE3y th\u1EED l\u1EA1i sau.",
  "field.nickname": "Bi\u1EC7t hi\u1EC7u",
  "field.email": "Email",
  "field.birth_year": "N\u0103m sinh",
  "field.birth_month": "th\xE1ng sinh",
  "field.sex": "Gi\u1EDBi t\xEDnh",
  "field.country_code": "Qu\u1ED1c gia/khu v\u1EF1c",
  "field.reader_type": "Lo\u1EA1i \u0111\u1EA7u \u0111\u1ECDc",
  "field.organisation": "T\u1ED5 ch\u1EE9c",
  "field.content_id": "ID n\u1ED9i dung",
  "field.schema_version": "Phi\xEAn b\u1EA3n d\u1EEF li\u1EC7u",
  "field.client_updated_at": "C\u1EADp nh\u1EADt l\u1EA7n cu\u1ED1i",
  "field.profile": "H\u1ED3 s\u01A1",
  "field.values": "\u0110\u1ECDc d\u1EEF li\u1EC7u",
  "backend.BACKEND_TIMEOUT": "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u ph\u1EA3n h\u1ED3i qu\xE1 th\u1EDDi gian ch\u1EDD, ch\u01B0a th\u1EC3 x\xE1c nh\u1EADn \u0111\xE3 l\u01B0u. H\xE3y th\u1EED l\u1EA1i th\u1EE7 c\xF4ng sau khi d\u1ECBch v\u1EE5 ph\u1EE5c h\u1ED3i.",
  followSystem: "Theo h\u1EC7 th\u1ED1ng",
  followSystemHelp: "S\u1EED d\u1EE5ng ng\xF4n ng\u1EEF \u0111\u01B0\u1EE3c \u0111\u1EB7t trong Obsidian; d\xF9ng ti\u1EBFng Anh n\u1EBFu ng\xF4n ng\u1EEF \u0111\xF3 kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.",
  updaterReadError: "Kh\xF4ng th\u1EC3 \u0111\u1ECDc c\xE0i \u0111\u1EB7t c\u1EE7a tr\xECnh c\u1EADp nh\u1EADt Tbpedia. Ki\u1EC3m tra t\u1EC7p data.json r\u1ED3i th\u1EED l\u1EA1i. D\u1EEF li\u1EC7u \u0111\u1ECDc v\u1EABn \u0111\u01B0\u1EE3c l\u01B0u c\u1EE5c b\u1ED9.",
  updaterChanged: "B\u1ED9 s\u01B0u t\u1EADp \u0111\xE3 c\xE0i \u0111\u1EB7t thay \u0111\u1ED5i trong khi \u0111\u1ED3ng b\u1ED9. \u0110\xE3 d\u1EEBng c\xE1c l\u01B0\u1EE3t t\u1EA3i l\xEAn ti\u1EBFp theo. Xem tr\u01B0\u1EDBc v\xE0 \u0111\u1ED3ng b\u1ED9 l\u1EA1i.",
  updaterSyncNotice: "B\u1EA3n ghi \u0111\u1ECDc c\u0169ng bao g\u1ED3m lo\u1EA1t, \u1EA5n b\u1EA3n, phi\xEAn b\u1EA3n Tbpedia, m\xE3 b\u1EA3n ph\xE1t h\xE0nh, m\xE3 ng\xF4n ng\u1EEF v\xE0 ti\xEAu \u0111\u1EC1 c\u1EE7a b\u1ED9 s\u01B0u t\u1EADp \u0111\xE3 c\xE0i \u0111\u1EB7t.",
  analyticsMetadataReadError: "Kh\xF4ng th\u1EC3 \u0111\u1ECDc ho\u1EB7c x\xE1c minh th\xF4ng tin b\u1ED9 s\u01B0u t\u1EADp \u0111\xE3 l\u01B0u trong data.json c\u1EE7a ph\u1EA7n b\u1ED5 tr\u1EE3 ph\xE2n t\xEDch. T\u1EA3i l\u1EA1i ph\u1EA7n b\u1ED5 tr\u1EE3 r\u1ED3i th\u1EED l\u1EA1i.",
  connectionAvailable: "K\u1EBFt n\u1ED1i th\xE0nh c\xF4ng. C\xF3 th\u1EC3 s\u1EED d\u1EE5ng l\u01B0u tr\u1EEF \u0111\xE1m m\xE2y.",
  recordReading: "Ghi l\u1EA1i d\u1EEF li\u1EC7u \u0111\u1ECDc c\u1EE7a t\xF4i",
  syncReadingCloud: "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u \u0111\u1ECDc l\xEAn \u0111\xE1m m\xE2y",
  readingContentIdRequired: "Ghi ch\xFA c\u1EA7n c\xF3 tbpedia_content_id h\u1EE3p l\u1EC7 trong frontmatter \u0111\u1EC3 ghi l\u1EA1i d\u1EEF li\u1EC7u \u0111\u1ECDc.",
  requiredSuffix: "(b\u1EAFt bu\u1ED9c)",
  profileRequiredHelp: "\u0110i\u1EC1n t\u1EA5t c\u1EA3 c\xE1c tr\u01B0\u1EDDng h\u1ED3 s\u01A1 v\xE0 ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t lo\u1EA1i \u0111\u1ED9c gi\u1EA3 tr\u01B0\u1EDBc khi l\u01B0u ho\u1EB7c t\u1EA3i l\xEAn.",
  readerTypesRequired: "Ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t lo\u1EA1i \u0111\u1ED9c gi\u1EA3.",
  readerId: "ID \u0111\u1ED9c gi\u1EA3",
  readerSetup: "Thi\u1EBFt l\u1EADp \u0111\u1ED9c gi\u1EA3",
  newReader: "\u0110\u0103ng k\xFD \u0111\u1ED9c gi\u1EA3 m\u1EDBi",
  existingReader: "K\u1EBFt n\u1ED1i \u0111\u1ED9c gi\u1EA3 hi\u1EC7n c\xF3",
  connectExistingReader: "K\u1EBFt n\u1ED1i \u0111\u1ED9c gi\u1EA3 hi\u1EC7n c\xF3",
  newReaderHelp: "\u0110i\u1EC1n h\u1ED3 s\u01A1 r\u1ED3i l\u01B0u v\xE0 t\u1EA3i l\xEAn \u0111\u1EC3 \u0111\u0103ng k\xFD v\u1EDBi ID \u0111\u1ED9c gi\u1EA3 m\u1EDBi.",
  readerAlreadyLinked: "Kho n\xE0y \u0111\xE3 li\xEAn k\u1EBFt v\u1EDBi m\u1ED9t \u0111\u1ED9c gi\u1EA3.",
  readerOperationBusy: "M\u1ED9t thao t\xE1c \u0111ang di\u1EC5n ra. Th\u1EED l\u1EA1i sau khi ho\xE0n t\u1EA5t.",
  readerIdInvalid: "Nh\u1EADp ID \u0111\u1ED9c gi\u1EA3 h\u1EE3p l\u1EC7.",
  readerRecoveryMismatch: "\u0110\xE1m m\xE2y tr\u1EA3 v\u1EC1 \u0111\u1ED9c gi\u1EA3 kh\xE1c. Ch\u01B0a l\u01B0u kh\xF4i ph\u1EE5c.",
  readerIdHelp: "Nh\u1EADp ID \u0111\u1ED9c gi\u1EA3 \u0111\u1EC3 l\u1EA5y h\u1ED3 s\u01A1. Gi\u1EEF b\xED m\u1EADt v\xEC ID cho ph\xE9p truy c\u1EADp t\xE0i kho\u1EA3n.",
  reflectionRemaining: "C\xF2n {remaining} k\xFD t\u1EF1 (t\u1ED1i \u0111a {limit})",
  reflectionTooLong: "H\xE3y r\xFAt ng\u1EAFn c\u1EA3m ngh\u0129 xu\u1ED1ng c\xF2n {limit} k\xFD t\u1EF1 tr\u01B0\u1EDBc khi l\u01B0u.",
  showReaderId: "Hi\u1EC7n ID \u0111\u1ED9c gi\u1EA3",
  hideReaderId: "\u1EA8n ID \u0111\u1ED9c gi\u1EA3"
};

// plugin/locales/id.json
var id_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "Properti artikel harus berupa objek YAML.",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Operasi tidak dapat diselesaikan. Data Anda tetap disimpan secara lokal.",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Data bacaan Tbpedia",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "Buka data bacaan",
  \u6A19\u8A18\u70BA\u5728\u8B80: "Tandai sebagai sedang membaca",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "Tandai sebagai selesai",
  \u958B\u59CB\u91CD\u8B80: "Mulailah membaca ulang",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "Sinkronkan artikel saat ini",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "Sinkronkan data bacaan yang berubah ke cloud",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "Tidak dapat menyimpan pengaturan plugin. Periksa izin menulis untuk brankas ini.",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API harus menggunakan HTTPS.",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "Masukkan URL host API tanpa jalur atau parameter kueri.",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "Masukkan kunci koneksi pembaca yang valid.",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "Tidak dapat terhubung. Data lokal telah disimpan. Coba lagi secara manual nanti.",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "Server mengembalikan data yang tidak valid.",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "Sinkronisasi tidak dapat diselesaikan. Coba lagi nanti.",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "Gudang ini tertaut ke pembaca lain. Gunakan brankas terpisah.",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "Baca dan terima pemberitahuan profil terlebih dahulu.",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "Terima pemberitahuan unggahan data bacaan terlebih dahulu.",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "Izin profil dan cloud diperbarui.",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "Buka artikel Markdown terlebih dahulu.",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "Operasi lain mengubah data bacaan artikel ini. Buka kembali formulir.",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "Buka artikel terlebih dahulu.",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "Artikel ini sudah berstatus bacaan ini. Mulailah membaca ulang sebelum menyelesaikannya lagi.",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Membaca data yang disimpan secara lokal.",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "Sinkronisasi sedang berlangsung.",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Unggah data bacaan secara manual",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "Unggahan cloud dinonaktifkan. Data bacaan tetap disimpan secara lokal.",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "Simpan dan unggah profil Anda di pengaturan terlebih dahulu untuk menerapkan izin cloud.",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "Izin unggah atau koneksi diubah. Unggahan lebih lanjut dihentikan.",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "Perbaiki ID konten duplikat di brankas terlebih dahulu.",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "Server mengonfirmasi versi yang berbeda. Sinkronisasi belum ditandai selesai.",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "Disimpan di cloud, namun tanda terima sinkronisasi lokal tidak dapat disimpan. Anda dapat melakukan sinkronisasi lagi nanti.",
  \u53D6\u6D88: "Batalkan",
  \u958B\u59CB\u4E0A\u50B3: "Mulai unggah",
  \u540C\u6B65\u7D50\u679C: "Sinkronkan hasil",
  \u95DC\u9589: "Tutup",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "Data bacaan disimpan secara lokal terlebih dahulu. Itu diunggah hanya ketika Anda menyinkronkan secara manual.",
  \u8A08\u5283\u95B1\u8B80: "Bacaan yang direncanakan",
  \u95B1\u8B80\u72C0\u614B: "Status membaca",
  \u95B1\u8B80\u5C64\u6B21: "Kedalaman membaca",
  \u672A\u8A2D\u5B9A: "Tidak disetel",
  \u95B1\u8B80\u6B21\u6578: "Bacaan selesai",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "Jumlah pembacaan yang selesai. Memulai membaca ulang tidak menambahnya; menyelesaikan satu menambah satu.",
  \u95B1\u8B80\u65E5\u671F: "Tanggal membaca",
  \u611F\u60F3\u8207\u8A55\u50F9: "Refleksi dan penilaian",
  \u95B1\u8B80\u611F\u60F3: "Membaca refleksi",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "Rekomendasi saya",
  \u6211\u7684\u8A55\u5206: "Peringkat saya",
  \u672A\u8A55\u5206: "Tidak dinilai",
  \u6211\u7684\u5206\u985E: "Klasifikasi saya",
  "\u6BCF\u884C\u4E00\u9805\u3002": "Satu item per baris.",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "Pembaca saya mengetik: artikel ini cocok untuk siapa?",
  \u5132\u5B58\u4E26\u540C\u6B65: "Simpan dan sinkronkan",
  \u5132\u5B58\u65BC\u672C\u6A5F: "Simpan secara lokal",
  \u9023\u7DDA: "Koneksi",
  "API \u7DB2\u5740": "URL API",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "Kunci koneksi pembaca",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "Disediakan oleh administrator Anda; ini bukan kunci administrator NocoDB.",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "Ingat kunci koneksi secara lokal",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "Tidak disimpan secara default. Jika diaktifkan, kunci disimpan tidak terenkripsi dalam file data plugin dan dapat disalin melalui sinkronisasi vault atau pencadangan.",
  \u6E2C\u8A66\u9023\u7DDA: "Uji koneksi",
  \u5DF2\u958B\u555F: "Diaktifkan",
  \u5DF2\u505C\u7528: "Dengan disabilitas",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "Profil pembaca",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "Nama panggilan (wajib)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "Email (opsional, belum terverifikasi)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "Organisasi (opsional)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "Tahun lahir (opsional)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "Bulan lahir (opsional)",
  \u672A\u63D0\u4F9B: "Tidak disediakan",
  \u6027\u5225: "Jenis kelamin",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "Negara/wilayah (opsional)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "Jenis pembaca saya (opsional)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "Saya menerima pemberitahuan profil",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "Izin unggah manual",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "Saya menerima pemberitahuan unggahan data bacaan",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "Izinkan unggahan data pembacaan manual",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "Menonaktifkan ini akan segera menghentikan upload lokal. Gunakan Simpan dan unggah profil di bawah untuk menerapkan pengaturan cloud.",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "Izin cloud masih memerlukan konfirmasi atau permohonan.",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "Simpan profil secara lokal",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "Profil disimpan secara lokal.",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "Simpan dan unggah profil",
  \u624B\u52D5\u540C\u6B65: "Sinkronisasi manual",
  \u60F3\u8B80\u65E5\u671F: "Tanggal ingin membaca",
  \u5728\u8B80\u65E5\u671F: "Tanggal mulai membaca",
  \u5DF2\u8B80\u65E5\u671F: "Tanggal penyelesaian",
  \u4E0D\u8B80\u65E5\u671F: "Tanggal tidak membaca",
  \u68C4\u8B80\u65E5\u671F: "Tanggal pengabaian",
  \u6211\u7684\u95DC\u9375\u8A5E: "Kata kunci saya",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "Tipe pembaca saya",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "Tingkat pengetahuan Buddha saya",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "Tingkat latihan saya",
  \u6211\u7684\u5B50\u4E3B\u984C: "Subtopik saya",
  \u9084\u6C92\u95B1\u8B80: "Belum dibaca",
  \u60F3\u8B80: "Ingin membaca",
  \u5728\u8B80: "Membaca",
  \u5DF2\u8B80: "Selesai",
  \u4E0D\u8B80: "Tidak membaca",
  \u68C4\u8B80: "Berhenti membaca",
  \u7565\u8B80: "Membaca sekilas",
  \u901A\u8B80: "Bacaan penuh",
  \u7CBE\u8B80: "Tutup bacaan",
  \u6DF1\u5165\u7814\u8B80: "Studi mendalam",
  \u57FA\u790E\u95B1\u8B80: "Membaca dasar",
  \u6AA2\u8996\u95B1\u8B80: "Pembacaan inspeksi",
  \u5206\u6790\u95B1\u8B80: "Pembacaan analitis",
  \u4E3B\u984C\u95B1\u8B80: "Bacaan sintopikal",
  \u63A8\u85A6: "Merekomendasikan",
  \u4E0D\u63A8\u85A6: "Jangan rekomendasikan",
  \u672A\u6C7A\u5B9A: "Belum memutuskan",
  \u4E00\u822C\u8B80\u8005: "Pembaca umum",
  \u521D\u7688\u4F9D\u8005: "Baru mengambil perlindungan Buddhis",
  \u5B78\u4F5B\u8005: "Siswa Budha",
  \u4FEE\u884C\u8005: "Praktisi Buddhis",
  \u771F\u4F5B\u884C\u8005: "Praktisi Sekolah Buddha Sejati",
  \u5973: "Perempuan",
  \u7537: "Laki-laki",
  \u5176\u4ED6: "Lainnya",
  \u4E0D\u9858\u900F\u9732: "Memilih untuk tidak mengatakannya",
  language: "bahasa UI",
  languageHelp: "Perubahan segera berlaku pada pengaturan dan jendela baca baru. Nama perintah diperbarui setelah memuat ulang plugin.",
  connected: "Hai {name}, berhasil terhubung.",
  preview: "Tertunda: {pending}; tidak berubah: {unchanged}; perlu koreksi: {invalid}. Hanya bidang bacaan, termasuk refleksi, yang akan diunggah.",
  summary: "Disimpan: {saved}; tidak berubah: {unchanged}; tidak valid: {invalid}; tidak lengkap: {remaining}.",
  changedDuringUpload: "Perubahan dilakukan saat pengunggahan. Sinkronkan lagi untuk mengunggahnya.",
  profileNotice: "Profil Anda disimpan secara lokal. Hanya Simpan dan unggah profil yang mengirimkannya ke database True Buddha Pedia Analytics. Ini mencakup nama panggilan Anda dan email, tahun/bulan lahir, jenis kelamin, negara, jenis pembaca, dan organisasi yang Anda berikan, untuk manajemen pembaca dan statistik bacaan di masa mendatang. Bidang-bidang ini tidak ditulis menjadi artikel. Anda dapat mengedit profil Anda atau meminta administrator untuk menghapus data cloud. Setiap unggahan profil juga mengirim jenis perangkat, versi plugin, sistem operasi, dan string agen pengguna untuk kompatibilitas dan pemecahan masalah. Hanya detail perangkat dari unggahan profil terbaru yang disimpan; pengenal perangkat keras tidak dikumpulkan. Lengkapi semua kolom profil dan pilih setidaknya satu jenis pembaca sebelum menyimpan atau mengunggah.",
  readingNotice: "Setelah menyetujui pemberitahuan unggahan data bacaan, hanya data yang Anda sinkronkan secara manual yang dikirim ke database True Buddha Pedia Analytics di cloud, termasuk kemajuan membaca, tanggal, penilaian, rekomendasi, kata kunci, subtopik, klasifikasi jenis pembaca, tingkat pengetahuan Buddhis, dan tingkat praktik. Badan artikel dan properti yang tidak terkait tidak diunggah. Menonaktifkan unggahan akan menghentikan unggahan berikutnya tetapi tidak menghapus data cloud yang ada. Catatan bacaan juga menyertakan seri, edisi, versi Tbpedia, ID rilis, kode bahasa, dan judul koleksi yang terpasang.",
  noticeUnavailable: "Server ini memerlukan pemberitahuan privasi yang lebih baru. Perbarui plugin sebelum menerimanya atau mengunggahnya.",
  invalidField: "Periksa nilai dan format bidang ini.",
  invalidChoice: "Pilih salah satu opsi yang tersedia.",
  invalidType: "Masukkan nilai tipe yang diharapkan.",
  tooSmall: "Minimumnya adalah {limit}.",
  tooLarge: "Maksimumnya adalah {limit}.",
  invalidDate: "Masukkan tanggal kalender yang valid (YYYY-MM-DD).",
  futureBirthYear: "Tahun lahir tidak bisa di masa depan.",
  unknownCountry: "Pilih negara atau wilayah yang valid.",
  birthYearRequired: "Berikan tahun lahir saat menentukan bulan lahir.",
  invalidEmail: "Masukkan alamat email yang valid.",
  validation: "Harap perbaiki kolom yang tidak valid.",
  "backend.UNAUTHENTICATED": "Tidak dapat mengakses pembaca ini. Hubungi administrator untuk memulihkan koneksi.",
  "backend.NOT_FOUND": "Titik akhir yang diminta tidak ditemukan.",
  "backend.NOT_CONFIGURED": "Penyimpanan cloud sedang menunggu konfigurasi database. Bacaan lokal tersedia.",
  "backend.BACKEND_ERROR": "Operasi database tidak dapat diverifikasi. Coba lagi nanti atau hubungi administrator Anda.",
  "backend.CONSENT_REQUIRED": "Tinjau dan terima profil terkini dan pemberitahuan bacaan.",
  "backend.UPLOAD_DISABLED": "Unggahan bacaan cloud dinonaktifkan.",
  "backend.CONTENT_NOT_FOUND": "Item ini tidak ada dalam katalog yang disetujui.",
  "backend.VALIDATION_FAILED": "Data yang dikirimkan tidak valid atau item katalog tidak aktif.",
  "backend.DUPLICATE_KEY": "Catatan pembacaan duplikat memerlukan perbaikan administrator.",
  "backend.METHOD_NOT_ALLOWED": "Metode permintaan ini tidak diperbolehkan.",
  "backend.INTERNAL_ERROR": "Permintaan tersebut tidak dapat diselesaikan. Coba lagi nanti.",
  "backend.PAYLOAD_TOO_LARGE": "Data yang dikirimkan melebihi batas ukuran.",
  "backend.BAD_REQUEST": "Permintaan harus berisi data JSON yang valid.",
  "backend.JSON_REQUIRED": "Permintaan harus menggunakan application/json.",
  "backend.RATE_LIMITED": "Terlalu banyak permintaan. Coba lagi nanti.",
  "field.nickname": "Nama panggilan",
  "field.email": "Surel",
  "field.birth_year": "Tahun lahir",
  "field.birth_month": "Bulan lahir",
  "field.sex": "Jenis kelamin",
  "field.country_code": "Negara/wilayah",
  "field.reader_type": "Tipe pembaca",
  "field.organisation": "Organisasi",
  "field.content_id": "ID Konten",
  "field.schema_version": "Versi data",
  "field.client_updated_at": "Terakhir diperbarui",
  "field.profile": "Profil",
  "field.values": "Membaca data",
  "backend.BACKEND_TIMEOUT": "Respons basis data melewati batas waktu dan status penyimpanan belum pasti. Coba lagi secara manual setelah layanan pulih.",
  followSystem: "Ikuti sistem",
  followSystemHelp: "Menggunakan pengaturan bahasa Obsidian, dengan bahasa Inggris sebagai cadangan.",
  updaterReadError: "Tidak dapat membaca pengaturan pembaru Tbpedia. Periksa berkas data.json, lalu coba lagi. Data bacaan tetap tersimpan secara lokal.",
  updaterChanged: "Koleksi yang terpasang berubah saat sinkronisasi. Unggahan berikutnya dihentikan. Periksa pratinjau dan sinkronkan kembali.",
  updaterSyncNotice: "Catatan bacaan juga menyertakan seri, edisi, versi Tbpedia, ID rilis, kode bahasa, dan judul koleksi yang terpasang.",
  analyticsMetadataReadError: "Tidak dapat membaca atau memverifikasi informasi koleksi yang disimpan dalam data.json plugin analitik. Muat ulang plugin lalu coba lagi.",
  connectionAvailable: "Koneksi berhasil. Penyimpanan cloud tersedia.",
  recordReading: "Catat data bacaan saya",
  syncReadingCloud: "Sinkronkan data bacaan ke cloud",
  readingContentIdRequired: "Catatan ini memerlukan tbpedia_content_id yang valid di frontmatter sebelum data bacaan dapat dicatat.",
  requiredSuffix: "(wajib)",
  profileRequiredHelp: "Lengkapi semua kolom profil dan pilih setidaknya satu jenis pembaca sebelum menyimpan atau mengunggah.",
  readerTypesRequired: "Pilih setidaknya satu jenis pembaca.",
  readerId: "ID pembaca",
  readerSetup: "Pengaturan pembaca",
  newReader: "Daftar pembaca baru",
  existingReader: "Hubungkan pembaca lama",
  connectExistingReader: "Hubungkan pembaca lama",
  newReaderHelp: "Lengkapi profil lalu simpan dan unggah untuk mendaftar dengan ID pembaca baru.",
  readerAlreadyLinked: "Vault ini sudah terhubung ke pembaca.",
  readerOperationBusy: "Operasi sedang berlangsung. Coba lagi setelah selesai.",
  readerIdInvalid: "Masukkan ID pembaca yang valid.",
  readerRecoveryMismatch: "Cloud mengembalikan pembaca lain. Pemulihan tidak disimpan.",
  readerIdHelp: "Masukkan ID pembaca untuk mengambil profil. Jaga kerahasiaannya karena ID memberikan akses akun.",
  reflectionRemaining: "Tersisa {remaining} karakter (maksimal {limit})",
  reflectionTooLong: "Persingkat refleksi menjadi {limit} karakter sebelum menyimpan.",
  showReaderId: "Tampilkan ID pembaca",
  hideReaderId: "Sembunyikan ID pembaca"
};

// plugin/locales/th.json
var th_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E31\u0E15\u0E16\u0E38 YAML",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19\u0E44\u0E14\u0E49 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E04\u0E07\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 Tbpedia",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\u0E40\u0E1B\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u0E17\u0E33\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E27\u0E48\u0E32\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u0E17\u0E33\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E27\u0E48\u0E32\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
  \u958B\u59CB\u91CD\u8B80: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E0B\u0E49\u0E33",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E44\u0E14\u0E49 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E23\u0E20\u0E31\u0E22\u0E19\u0E35\u0E49",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49 HTTPS",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "\u0E1B\u0E49\u0E2D\u0E19 URL \u0E42\u0E2E\u0E2A\u0E15\u0E4C API \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E32\u0E23\u0E32\u0E21\u0E34\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\u0E1B\u0E49\u0E2D\u0E19\u0E04\u0E35\u0E22\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E14\u0E49 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E16\u0E39\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19\u0E44\u0E14\u0E49 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E23\u0E20\u0E31\u0E22\u0E19\u0E35\u0E49\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E23\u0E32\u0E22\u0E2D\u0E37\u0E48\u0E19 \u0E43\u0E0A\u0E49\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E23\u0E20\u0E31\u0E22\u0E41\u0E22\u0E01\u0E15\u0E48\u0E32\u0E07\u0E2B\u0E32\u0E01",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E25\u0E30\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E01\u0E48\u0E2D\u0E19",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E01\u0E48\u0E2D\u0E19",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E41\u0E25\u0E49\u0E27",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 Markdown \u0E01\u0E48\u0E2D\u0E19",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49 \u0E40\u0E1B\u0E34\u0E14\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E01\u0E48\u0E2D\u0E19",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E19\u0E35\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E0B\u0E49\u0E33\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E22\u0E31\u0E07\u0E04\u0E07\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07 \u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E2B\u0E22\u0E38\u0E14\u0E25\u0E07",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "\u0E41\u0E01\u0E49\u0E44\u0E02 ID \u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E0B\u0E49\u0E33\u0E01\u0E31\u0E19\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E23\u0E20\u0E31\u0E22\u0E01\u0E48\u0E2D\u0E19",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19\u0E2D\u0E37\u0E48\u0E19 \u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E16\u0E39\u0E01\u0E17\u0E33\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E27\u0E48\u0E32\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C \u0E41\u0E15\u0E48\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E44\u0E14\u0E49 \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
  \u53D6\u6D88: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  \u958B\u59CB\u4E0A\u50B3: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14",
  \u540C\u6B65\u7D50\u679C: "\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
  \u95DC\u9589: "\u0E1B\u0E34\u0E14",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E48\u0E2D\u0E19 \u0E08\u0E30\u0E16\u0E39\u0E01\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
  \u8A08\u5283\u95B1\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E1A\u0E1A\u0E21\u0E35\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19",
  \u95B1\u8B80\u72C0\u614B: "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u95B1\u8B80\u5C64\u6B21: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01",
  \u672A\u8A2D\u5B9A: "\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  \u95B1\u8B80\u6B21\u6578: "\u0E2D\u0E48\u0E32\u0E19\u0E08\u0E1A\u0E41\u0E25\u0E49\u0E27",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C \u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E0B\u0E49\u0E33\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19 \u0E01\u0E23\u0E2D\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
  \u95B1\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19",
  \u611F\u60F3\u8207\u8A55\u50F9: "\u0E01\u0E32\u0E23\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19",
  \u95B1\u8B80\u611F\u60F3: "\u0E01\u0E32\u0E23\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u6211\u7684\u8A55\u5206: "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u672A\u8A55\u5206: "\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A",
  \u6211\u7684\u5206\u985E: "\u0E01\u0E32\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "\u6BCF\u884C\u4E00\u9805\u3002": "\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19: \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E04\u0E23?",
  \u5132\u5B58\u4E26\u540C\u6B65: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E0B\u0E34\u0E07\u0E04\u0E4C",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  \u9023\u7DDA: "\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D",
  "API \u7DB2\u5740": "URL \u0E02\u0E2D\u0E07\u0E40\u0E2D\u0E1E\u0E35\u0E44\u0E2D",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\u0E04\u0E35\u0E22\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u0E08\u0E31\u0E14\u0E17\u0E33\u0E42\u0E14\u0E22\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E19\u0E35\u0E48\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A NocoDB",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\u0E08\u0E33\u0E23\u0E2B\u0E31\u0E2A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 \u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E04\u0E35\u0E22\u0E4C\u0E08\u0E30\u0E16\u0E39\u0E01\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19 \u0E41\u0E25\u0E30\u0E2D\u0E32\u0E08\u0E16\u0E39\u0E01\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E23\u0E20\u0E31\u0E22",
  \u6E2C\u8A66\u9023\u7DDA: "\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D",
  \u5DF2\u958B\u555F: "\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27",
  \u5DF2\u505C\u7528: "\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19 (\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\u0E2D\u0E35\u0E40\u0E21\u0E25 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E40\u0E01\u0E34\u0E14 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
  \u672A\u63D0\u4F9B: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E43\u0E2B\u0E49",
  \u6027\u5225: "\u0E40\u0E1E\u0E28",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28/\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19 (\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E43\u0E0A\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E22\u0E31\u0E07\u0E04\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E19",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  \u624B\u52D5\u540C\u6B65: "\u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07",
  \u60F3\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E2D\u0E48\u0E32\u0E19",
  \u5728\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u5DF2\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
  \u4E0D\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E2D\u0E48\u0E32\u0E19",
  \u68C4\u8B80\u65E5\u671F: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E30\u0E17\u0E34\u0E49\u0E07",
  \u6211\u7684\u95DC\u9375\u8A5E: "\u0E04\u0E33\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E17\u0E32\u0E07\u0E1E\u0E23\u0E30\u0E1E\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E19\u0E32\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u6211\u7684\u5B50\u4E3B\u984C: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  \u9084\u6C92\u95B1\u8B80: "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E48\u0E32\u0E19",
  \u60F3\u8B80: "\u0E2D\u0E22\u0E32\u0E01\u0E2D\u0E48\u0E32\u0E19",
  \u5728\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
  \u5DF2\u8B80: "\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",
  \u4E0D\u8B80: "\u0E44\u0E21\u0E48\u0E2D\u0E48\u0E32\u0E19",
  \u68C4\u8B80: "\u0E40\u0E25\u0E34\u0E01\u0E2D\u0E48\u0E32\u0E19",
  \u7565\u8B80: "\u0E01\u0E32\u0E23\u0E2A\u0E01\u0E34\u0E21\u0E21\u0E34\u0E07",
  \u901A\u8B80: "\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E15\u0E47\u0E21",
  \u7CBE\u8B80: "\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E04\u0E23\u0E31\u0E1A",
  \u6DF1\u5165\u7814\u8B80: "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01",
  \u57FA\u790E\u95B1\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32",
  \u6AA2\u8996\u95B1\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E1A\u0E1A\u0E2A\u0E33\u0E23\u0E27\u0E08",
  \u5206\u6790\u95B1\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C",
  \u4E3B\u984C\u95B1\u8B80: "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E1A\u0E1A\u0E2A\u0E31\u0E07\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C",
  \u63A8\u85A6: "\u0E41\u0E19\u0E30\u0E19\u0E33\u0E04\u0E23\u0E31\u0E1A",
  \u4E0D\u63A8\u85A6: "\u0E44\u0E21\u0E48\u0E41\u0E19\u0E30\u0E19\u0E33",
  \u672A\u6C7A\u5B9A: "\u0E44\u0E21\u0E48\u0E41\u0E19\u0E48\u0E43\u0E08",
  \u4E00\u822C\u8B80\u8005: "\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B",
  \u521D\u7688\u4F9D\u8005: "\u0E1C\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E16\u0E36\u0E07\u0E1E\u0E23\u0E30\u0E23\u0E31\u0E15\u0E19\u0E15\u0E23\u0E31\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E48\u0E07",
  \u5B78\u4F5B\u8005: "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E38\u0E17\u0E18",
  \u4FEE\u884C\u8005: "\u0E1C\u0E39\u0E49\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21",
  \u771F\u4F5B\u884C\u8005: "\u0E1C\u0E39\u0E49\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21\u0E43\u0E19\u0E19\u0E34\u0E01\u0E32\u0E22\u0E40\u0E08\u0E34\u0E19\u0E1D\u0E2D",
  \u5973: "\u0E2B\u0E0D\u0E34\u0E07",
  \u7537: "\u0E0A\u0E32\u0E22",
  \u5176\u4ED6: "\u0E2D\u0E37\u0E48\u0E19\u0E46",
  \u4E0D\u9858\u900F\u9732: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E21\u0E48\u0E1E\u0E39\u0E14",
  language: "\u0E20\u0E32\u0E29\u0E32 UI",
  languageHelp: "\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E08\u0E30\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E08\u0E30\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E42\u0E2B\u0E25\u0E14\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E0B\u0E49\u0E33",
  connected: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35 {name} \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  preview: "\u0E23\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23: {pending}; \u0E44\u0E21\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07: {unchanged}; \u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02: {invalid}. \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E16\u0E39\u0E01\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  summary: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27: {saved}; \u0E44\u0E21\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07: {unchanged}; \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: {invalid}; \u0E44\u0E21\u0E48\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C: {remaining}",
  changedDuringUpload: "\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  profileNotice: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 True Buddha Pedia Analytics \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14/\u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E40\u0E1E\u0E28 \u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E23\u0E30\u0E1A\u0E38 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E43\u0E19\u0E2D\u0E19\u0E32\u0E04\u0E15 \u0E0A\u0E48\u0E2D\u0E07\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E02\u0E35\u0E22\u0E19\u0E25\u0E07\u0E43\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E44\u0E14\u0E49 \u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E23\u0E31\u0E49\u0E07\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C \u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19 \u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E41\u0E25\u0E30\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E14\u0E49\u0E27\u0E22 \u0E42\u0E14\u0E22\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E04\u0E23\u0E31\u0E49\u0E07\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 \u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E2E\u0E32\u0E23\u0E4C\u0E14\u0E41\u0E27\u0E23\u0E4C \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E38\u0E01\u0E0A\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E48\u0E2D\u0E19\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  readingNotice: "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 True Buddha Pedia Analytics \u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C \u0E0B\u0E36\u0E48\u0E07\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E37\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33 \u0E04\u0E33\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22 \u0E01\u0E32\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E17\u0E32\u0E07\u0E1E\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E19\u0E32 \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E2D\u0E07\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E08\u0E30\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E08\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E19\u0E2D\u0E19\u0E32\u0E04\u0E15 \u0E41\u0E15\u0E48\u0E08\u0E30\u0E44\u0E21\u0E48\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E08\u0E30\u0E23\u0E27\u0E21\u0E0B\u0E35\u0E23\u0E35\u0E2A\u0E4C \u0E09\u0E1A\u0E31\u0E1A \u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19 Tbpedia \u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E38\u0E48\u0E19 \u0E23\u0E2B\u0E31\u0E2A\u0E20\u0E32\u0E29\u0E32 \u0E41\u0E25\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E25\u0E40\u0E25\u0E01\u0E0A\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E14\u0E49\u0E27\u0E22",
  noticeUnavailable: "\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E21\u0E48\u0E01\u0E27\u0E48\u0E32 \u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  invalidField: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E48\u0E32\u0E41\u0E25\u0E30\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E19\u0E35\u0E49",
  invalidChoice: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E21\u0E35",
  invalidType: "\u0E1B\u0E49\u0E2D\u0E19\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23",
  tooSmall: "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E48\u0E33\u0E04\u0E37\u0E2D {limit}",
  tooLarge: "\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E04\u0E37\u0E2D {limit}",
  invalidDate: "\u0E1B\u0E49\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (\u0E1B\u0E1B\u0E1B\u0E1B-\u0E14\u0E14-\u0E27\u0E27)",
  futureBirthYear: "\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E44\u0E14\u0E49",
  unknownCountry: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E2B\u0E23\u0E37\u0E2D\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  birthYearRequired: "\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E40\u0E01\u0E34\u0E14",
  invalidEmail: "\u0E1B\u0E49\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  validation: "\u0E42\u0E1B\u0E23\u0E14\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1F\u0E34\u0E25\u0E14\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "backend.UNAUTHENTICATED": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D",
  "backend.NOT_FOUND": "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07\u0E17\u0E35\u0E48\u0E23\u0E49\u0E2D\u0E07\u0E02\u0E2D",
  "backend.NOT_CONFIGURED": "\u0E17\u0E35\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E01\u0E33\u0E25\u0E31\u0E07\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E21\u0E35\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E43\u0E19\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19",
  "backend.BACKEND_ERROR": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E14\u0E49 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "backend.CONSENT_REQUIRED": "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28",
  "backend.UPLOAD_DISABLED": "\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
  "backend.CONTENT_NOT_FOUND": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E41\u0E04\u0E47\u0E15\u0E15\u0E32\u0E25\u0E47\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",
  "backend.VALIDATION_FAILED": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E04\u0E47\u0E15\u0E15\u0E32\u0E25\u0E47\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19",
  "backend.DUPLICATE_KEY": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E0B\u0E49\u0E33\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E0B\u0E48\u0E2D\u0E21\u0E41\u0E0B\u0E21\u0E42\u0E14\u0E22\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A",
  "backend.METHOD_NOT_ALLOWED": "\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E23\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E19\u0E35\u0E49",
  "backend.INTERNAL_ERROR": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E04\u0E33\u0E02\u0E2D\u0E44\u0E14\u0E49 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
  "backend.PAYLOAD_TOO_LARGE": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E40\u0E01\u0E34\u0E19\u0E02\u0E19\u0E32\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14",
  "backend.BAD_REQUEST": "\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 JSON \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "backend.JSON_REQUIRED": "\u0E04\u0E33\u0E02\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49 application/json",
  "backend.RATE_LIMITED": "\u0E04\u0E33\u0E02\u0E2D\u0E21\u0E32\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
  "field.nickname": "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19",
  "field.email": "\u0E2D\u0E35\u0E40\u0E21\u0E25",
  "field.birth_year": "\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14",
  "field.birth_month": "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E40\u0E01\u0E34\u0E14",
  "field.sex": "\u0E40\u0E1E\u0E28",
  "field.country_code": "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28/\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04",
  "field.reader_type": "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19",
  "field.organisation": "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
  "field.content_id": "\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
  "field.schema_version": "\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "field.client_updated_at": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14",
  "field.profile": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "field.values": "\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "backend.BACKEND_TIMEOUT": "\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E22\u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E08\u0E36\u0E07\u0E22\u0E31\u0E07\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49",
  followSystem: "\u0E15\u0E32\u0E21\u0E23\u0E30\u0E1A\u0E1A",
  followSystemHelp: "\u0E43\u0E0A\u0E49\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E20\u0E32\u0E29\u0E32\u0E02\u0E2D\u0E07 Obsidian \u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E32\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  updaterReadError: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15 Tbpedia \u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E44\u0E1F\u0E25\u0E4C data.json \u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E22\u0E31\u0E07\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07",
  updaterChanged: "\u0E04\u0E2D\u0E25\u0E40\u0E25\u0E01\u0E0A\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E0B\u0E34\u0E07\u0E04\u0E4C \u0E08\u0E36\u0E07\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D \u0E42\u0E1B\u0E23\u0E14\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
  updaterSyncNotice: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E08\u0E30\u0E23\u0E27\u0E21\u0E0B\u0E35\u0E23\u0E35\u0E2A\u0E4C \u0E09\u0E1A\u0E31\u0E1A \u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19 Tbpedia \u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E38\u0E48\u0E19 \u0E23\u0E2B\u0E31\u0E2A\u0E20\u0E32\u0E29\u0E32 \u0E41\u0E25\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E25\u0E40\u0E25\u0E01\u0E0A\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E14\u0E49\u0E27\u0E22",
  analyticsMetadataReadError: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E48\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E2D\u0E25\u0E40\u0E25\u0E01\u0E0A\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E43\u0E19 data.json \u0E02\u0E2D\u0E07\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C\u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E42\u0E2B\u0E25\u0E14\u0E1B\u0E25\u0E31\u0E4A\u0E01\u0E2D\u0E34\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
  connectionAvailable: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E44\u0E14\u0E49",
  recordReading: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  syncReadingCloud: "\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C",
  readingContentIdRequired: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E19\u0E35\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 tbpedia_content_id \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 frontmatter \u0E01\u0E48\u0E2D\u0E19\u0E08\u0E36\u0E07\u0E08\u0E30\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49",
  requiredSuffix: "(\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19)",
  profileRequiredHelp: "\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E38\u0E01\u0E0A\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E48\u0E2D\u0E19\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  readerTypesRequired: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17",
  readerId: "ID \u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19",
  readerSetup: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19",
  newReader: "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48",
  existingReader: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21",
  connectExistingReader: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21",
  newReaderHelp: "\u0E01\u0E23\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E25\u0E49\u0E27\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E14\u0E49\u0E27\u0E22 ID \u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48",
  readerAlreadyLinked: "\u0E04\u0E25\u0E31\u0E07\u0E19\u0E35\u0E49\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27",
  readerOperationBusy: "\u0E21\u0E35\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E39\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",
  readerIdInvalid: "\u0E1B\u0E49\u0E2D\u0E19 ID \u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  readerRecoveryMismatch: "\u0E04\u0E25\u0E32\u0E27\u0E14\u0E4C\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32 \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19",
  readerIdHelp: "\u0E1B\u0E49\u0E2D\u0E19 ID \u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E36\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E40\u0E01\u0E47\u0E1A ID \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E25\u0E31\u0E1A\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E43\u0E0A\u0E49\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E44\u0E14\u0E49",
  reflectionRemaining: "\u0E40\u0E2B\u0E25\u0E37\u0E2D {remaining} \u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30 (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 {limit})",
  reflectionTooLong: "\u0E42\u0E1B\u0E23\u0E14\u0E22\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 {limit} \u0E2D\u0E31\u0E01\u0E02\u0E23\u0E30\u0E01\u0E48\u0E2D\u0E19\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  showReaderId: "\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19",
  hideReaderId: "\u0E0B\u0E48\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E2D\u0E48\u0E32\u0E19"
};

// plugin/locales/bo.json
var bo_default = {
  "\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002": "\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F0B\u0F46\u0F0B\u0F53\u0F72\u0F0BYAML\u0F51\u0F44\u0F7C\u0F66\u0F0B\u0F54\u0F7C\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F61\u0F72\u0F53\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u0F56\u0F64\u0F42\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F58\u0F47\u0F74\u0F42\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F63\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  "Tbpedia \u95B1\u8B80\u8CC7\u6599": "Tbpedia \u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u958B\u555F\u95B1\u8B80\u8CC7\u6599: "\u0F41\u0F0B\u0F55\u0FB1\u0F7A\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u6A19\u8A18\u70BA\u5728\u8B80: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F56\u0F5E\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0B\u0F56\u0F40\u0F7C\u0F51\u0F0D",
  \u6A19\u8A18\u70BA\u5DF2\u8B80: "\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F54\u0F62\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0D",
  \u958B\u59CB\u91CD\u8B80: "\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F42\u0F7C\u0F0B\u0F56\u0F62\u0FA9\u0F58\u0F66\u0F0D",
  \u540C\u6B65\u76EE\u524D\u6587\u7AE0: "\u0F51\u0F0B\u0F63\u0F9F\u0F60\u0F72\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F0B\u0F62\u0FA3\u0F58\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  "\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002": "\u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F56\u0F44\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F60\u0F51\u0F72\u0F60\u0F72\u0F0B\u0F60\u0F56\u0FB2\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002": "API \u0F61\u0F72\u0F66\u0F0BHTTPS \u0F56\u0F7A\u0F51\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002": "\u0F60\u0F42\u0FB2\u0F7C\u0F0B\u0F63\u0F58\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F60\u0F51\u0FB2\u0F72\u0F0B\u0F62\u0FA9\u0F51\u0F0B\u0F5A\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F62\u0F0BAPI\u0F42\u0F59\u0F7C\u0F0B\u0F56\u0F7C\u0F60\u0F72\u0F0BURL\u0F56\u0F59\u0F74\u0F42\u0F66\u0F0D",
  "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u8B80\u8005\u9023\u7DDA\u91D1\u9470\u3002": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F63\u0FA1\u0F7A\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F56\u0FB3\u0F74\u0F42\u0F66\u0F0D",
  "\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002": "\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002": "\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F66\u0F0B\u0F53\u0F74\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F55\u0FB1\u0F72\u0F62\u0F0B\u0F63\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  "\u540C\u6B65\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002": "\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F58\u0F47\u0F74\u0F42\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F63\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002": "\u0F56\u0F44\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0F5E\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F51\u0F44\u0F0B\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F56\u0F44\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F66\u0F7C\u0F0B\u0F66\u0F7C\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F56\u0F7A\u0F51\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002": "\u0F50\u0F7C\u0F42\u0F0B\u0F58\u0F62\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F56\u0F66\u0F92\u0FB2\u0F42\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F56\u0F62\u0FA1\u0F0B\u0F50\u0F7C\u0F0B\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F63\u0F0B\u0F51\u0F44\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002": "\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F51\u0F44\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F97\u0F7A\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  "\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002": "\u0F51\u0F44\u0F0B\u0F54\u0F7C\u0F0BMarkdown\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F41\u0F0B\u0F55\u0FB1\u0F7A\u0F0D",
  "\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002": "\u0F56\u0F40\u0F7C\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F42\u0F5E\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F42\u0F72\u0F66\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F72\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F60\u0F42\u0F7A\u0F44\u0F66\u0F0B\u0F64\u0F7C\u0F42\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F41\u0F0B\u0F55\u0FB1\u0F7A\u0F0D",
  "\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002": "\u0F50\u0F7C\u0F42\u0F0B\u0F58\u0F62\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F45\u0F72\u0F42\u0F0B\u0F41\u0F0B\u0F55\u0FB1\u0F7A\u0F0D",
  "\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002": "\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F63\u0F0B\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F53\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F56\u0F56\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F58\u0F0B\u0F5A\u0F62\u0F0B\u0F42\u0F7C\u0F44\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F42\u0F7C\u0F0B\u0F5A\u0F74\u0F42\u0F66\u0F0D",
  "\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0D",
  "\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002": "\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F56\u0F5E\u0F72\u0F53\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  \u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0D",
  "\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002": "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F55\u0F56\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  "\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002": "\u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F62\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F51\u0F7A\u0F0B\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F63\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F53\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F53\u0F66\u0F0B\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F63\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002": "\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F41\u0F0B\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F58\u0F74\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F58\u0F5A\u0F58\u0F66\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  "Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002": "\u0F51\u0F44\u0F0B\u0F54\u0F7C\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F41\u0F44\u0F0B\u0F53\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F53\u0F44\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F60\u0F51\u0FB2\u0F0B\u0F58\u0F5A\u0F74\u0F44\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0BID\u0F56\u0F51\u0F7A\u0F53\u0F0B\u0F51\u0F54\u0F44\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002": "\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F66\u0F0B\u0F50\u0F7C\u0F53\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F42\u0F5E\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F42\u0F4F\u0F53\u0F0B\u0F60\u0F41\u0F7A\u0F63\u0F0B\u0F56\u0FB1\u0F66\u0F0D \u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F58\u0F47\u0F74\u0F42\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F63\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0B\u0F56\u0F40\u0F7C\u0F51\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  "\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002": "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F53\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F44\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F74\u0F44\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F51\u0F7A\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F41\u0FB1\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F66\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F50\u0F74\u0F56\u0F0D",
  \u53D6\u6D88: "\u0F46\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F56\u0F0D",
  \u958B\u59CB\u4E0A\u50B3: "\u0F61\u0F62\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B\u0F60\u0F42\u0F7C\u0F0B\u0F56\u0F59\u0F74\u0F42\u0F66\u0F0D",
  \u540C\u6B65\u7D50\u679C: "\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F60\u0F56\u0FB2\u0F66\u0F0D",
  \u95DC\u9589: "\u0F66\u0F92\u0F7C\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F56\u0F0D",
  "\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F63\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D \u0F41\u0FB1\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F66\u0F0B\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F58\u0F0B\u0F42\u0F4F\u0F7C\u0F42\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  \u8A08\u5283\u95B1\u8B80: "\u0F60\u0F46\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0D",
  \u95B1\u8B80\u72C0\u614B: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0D",
  \u95B1\u8B80\u5C64\u6B21: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F4F\u0F72\u0F44\u0F0B\u0F5A\u0F51\u0F0D",
  \u672A\u8A2D\u5B9A: "\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  \u95B1\u8B80\u6B21\u6578: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F5A\u0F62\u0F0B\u0F56\u0F0D",
  "\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F5A\u0F62\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F60\u0F56\u0F7C\u0F62\u0F0D \u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F42\u0F7C\u0F0B\u0F5A\u0F74\u0F42\u0F66\u0F0B\u0F54\u0F0B\u0F51\u0F7A\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F60\u0F55\u0F62\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F42\u0F45\u0F72\u0F42\u0F0B\u0F58\u0F47\u0F74\u0F42\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F63\u0F0B\u0F53\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F56\u0F66\u0FA3\u0F53\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  \u95B1\u8B80\u65E5\u671F: "\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u611F\u60F3\u8207\u8A55\u50F9: "\u0F56\u0F66\u0F58\u0F0B\u0F42\u0F5E\u0F72\u0F42\u0F0B\u0F51\u0F44\u0F0B\u0F5A\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0D",
  \u95B1\u8B80\u611F\u60F3: "\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F56\u0F66\u0F58\u0F0B\u0F42\u0F5E\u0F72\u0F42\u0F66\u0F0D",
  \u6211\u7684\u95B1\u8B80\u63A8\u85A6: "\u0F44\u0F60\u0F72\u0F0B\u0F44\u0F7C\u0F66\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0D",
  \u6211\u7684\u8A55\u5206: "\u0F44\u0F60\u0F72\u0F0B\u0F5A\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0D",
  \u672A\u8A55\u5206: "\u0F51\u0F54\u0FB1\u0F51\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  \u6211\u7684\u5206\u985E: "\u0F44\u0F60\u0F72\u0F0B\u0F51\u0F56\u0FB1\u0F7A\u0F0B\u0F56\u0F0D",
  "\u6BCF\u884C\u4E00\u9805\u3002": "\u0F5A\u0F72\u0F42\u0F0B\u0F55\u0FB2\u0F7A\u0F44\u0F0B\u0F62\u0F7A\u0F62\u0F0B\u0F62\u0FA3\u0F58\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F45\u0F72\u0F42",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F": "\u0F44\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0D \u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F66\u0F74\u0F0B\u0F63\u0F0B\u0F60\u0F5A\u0F58\u0F0B\u0F54\u0F7C\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F51\u0F58\u0F0D",
  \u5132\u5B58\u4E26\u540C\u6B65: "\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F51\u0F74\u0F66\u0F0B\u0F58\u0F5A\u0F74\u0F44\u0F66\u0F0D",
  \u5132\u5B58\u65BC\u672C\u6A5F: "\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u9023\u7DDA: "\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0D",
  "API \u7DB2\u5740": "API URL",
  \u8B80\u8005\u9023\u7DDA\u91D1\u9470: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F63\u0FA1\u0F7A\u0F0B\u0F58\u0F72\u0F42",
  "\u7531\u7BA1\u7406\u54E1\u63D0\u4F9B\uFF1B\u4E0D\u662F NocoDB \u7BA1\u7406\u91D1\u9470\u3002": "\u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F44\u0F0B\u0F54\u0F66\u0F0B\u0F58\u0F41\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F66\u0F0D \u0F60\u0F51\u0F72\u0F0B\u0F53\u0F72\u0F0BNocoDB\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F44\u0F0B\u0F63\u0FA1\u0F7A\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F58\u0F72\u0F53\u0F0D",
  \u5728\u672C\u6A5F\u8A18\u4F4F\u9023\u7DDA\u91D1\u9470: "\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F63\u0FA1\u0F7A\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F51\u0FB2\u0F53\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "\u9810\u8A2D\u4E0D\u5132\u5B58\u3002\u555F\u7528\u5F8C\u6703\u5B58\u65BC\u672A\u52A0\u5BC6\u7684\u5916\u639B\u8CC7\u6599\u6A94\uFF0C\u53EF\u80FD\u88AB Vault \u540C\u6B65\u6216\u5099\u4EFD\u8907\u88FD\u3002": "\u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F63\u0F9F\u0F62\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0D \u0F42\u0F63\u0F0B\u0F4F\u0F7A\u0F0B\u0F63\u0F95\u0F7C\u0F42\u0F66\u0F0B\u0F45\u0F53\u0F0B\u0F56\u0F5F\u0F7C\u0F66\u0F0B\u0F53\u0F0B\u0F63\u0FA1\u0F7A\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F7A\u0F0B\u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F60\u0F72\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F46\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0B\u0F42\u0F66\u0F44\u0F0B\u0F56\u0F5F\u0F7C\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F62\u0F0B\u0F42\u0F66\u0F7C\u0F42\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0B\u0F51\u0F44\u0F0B\u0F0D",
  \u6E2C\u8A66\u9023\u7DDA: "\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F60\u0F72\u0F0B\u0F66\u0FA6\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0D",
  \u5DF2\u958B\u555F: "\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F56\u0F5F\u0F7C\u0F66\u0F0D",
  \u5DF2\u505C\u7528: "\u0F51\u0F56\u0F44\u0F0B\u0F54\u0F7C\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F53\u0F0B\u0F45\u0F53\u0F0D",
  \u8B80\u8005\u500B\u4EBA\u8CC7\u6599: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F44\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0D",
  "\u66B1\u7A31\uFF08\u5FC5\u586B\uFF09": "\u0F58\u0F72\u0F44\u0F0B\u0F60\u0F51\u0F7C\u0F42\u0F66\u0F0B (\u0F51\u0F42\u0F7C\u0F66\u0F0B\u0F58\u0F41\u0F7C\u0F0D)",
  "\u96FB\u90F5\uFF08\u9078\u586B\uFF0C\u4E0D\u9700\u9A57\u8B49\uFF09": "\u0F42\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F55\u0FB2\u0F72\u0F53\u0F0B(\u0F60\u0F51\u0F58\u0F0B\u0F40\u0F0D \u0F56\u0F51\u0F7A\u0F53\u0F0B\u0F51\u0F54\u0F44\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54)",
  "\u6240\u5C6C\u6A5F\u69CB\uFF08\u9078\u586B\uFF09": "\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F60\u0F5B\u0F74\u0F42\u0F66\u0F0D (\u0F42\u0F51\u0F58\u0F0B\u0F40\u0F0D)",
  "\u51FA\u751F\u5E74\u4EFD\uFF08\u9078\u586B\uFF09": "\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F63\u0F7C\u0F0B(\u0F60\u0F51\u0F58\u0F0B\u0F40)\u0F0D",
  "\u51FA\u751F\u6708\u4EFD\uFF08\u9078\u586B\uFF09": "\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F5F\u0FB3\u0F0B(\u0F60\u0F51\u0F58\u0F0B\u0F40)\u0F0D",
  \u672A\u63D0\u4F9B: "\u0F58\u0F41\u0F7C\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  \u6027\u5225: "\u0F55\u0F7C\u0F0B\u0F58\u0F7C\u0F0D",
  "\u570B\u5BB6\uFF0F\u5730\u5340\uFF08\u9078\u586B\uFF09": "\u0F62\u0F92\u0FB1\u0F63\u0F0B\u0F41\u0F56\u0F0D/\u0F66\u0F0B\u0F41\u0F74\u0F63\u0F0D(\u0F60\u0F51\u0F58\u0F0B\u0F40)",
  "\u6211\u7684\u8B80\u8005\u985E\u578B\uFF08\u9078\u586B\uFF09": "\u0F44\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B(\u0F60\u0F51\u0F58\u0F0B\u0F40)",
  \u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E: "\u0F44\u0F66\u0F0B\u0F44\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F56\u0F62\u0FA1\u0F0B\u0F41\u0FB1\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  \u624B\u52D5\u4E0A\u50B3\u6B0A\u9650: "\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0D",
  \u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E: "\u0F44\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F56\u0F62\u0FA1\u0F0B\u0F50\u0F7C\u0F0B\u0F51\u0F44\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  \u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599: "\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B\u0F54\u0F0D",
  "\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002": "\u0F60\u0F51\u0F72\u0F0B\u0F41\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F56\u0F0B\u0F53\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F55\u0F56\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F51\u0F7A\u0F0B\u0F60\u0F55\u0FB2\u0F63\u0F0B\u0F58\u0F62\u0F0B\u0F58\u0F5A\u0F58\u0F66\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F62\u0F7A\u0F51\u0F0D \u0F42\u0F64\u0F58\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F42\u0F66\u0F7C\u0F42\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F51\u0F44\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F56\u0F7A\u0F51\u0F0B\u0F66\u0FA4\u0FB1\u0F51\u0F0B\u0F53\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F56\u0F40\u0F7C\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  "\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002": "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F63\u0F0B\u0F51\u0F0B\u0F51\u0F74\u0F44\u0F0B\u0F42\u0F4F\u0F53\u0F0B\u0F60\u0F41\u0F7A\u0F63\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F63\u0F42\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  \u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F: "\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  "\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002": "\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  \u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599: "\u0F44\u0F7C\u0F0B\u0F51\u0F7A\u0F56\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0D",
  \u624B\u52D5\u540C\u6B65: "\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0D",
  \u60F3\u8B80\u65E5\u671F: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u5728\u8B80\u65E5\u671F: "\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F42\u0F7C\u0F0B\u0F60\u0F5B\u0F74\u0F42\u0F66\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u5DF2\u8B80\u65E5\u671F: "\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F60\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F56\u0FB1\u0F74\u0F44\u0F0B\u0F5A\u0F7A\u0F66\u0F0D",
  \u4E0D\u8B80\u65E5\u671F: "\u0F58\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u68C4\u8B80\u65E5\u671F: "\u0F66\u0FA4\u0F44\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D",
  \u6211\u7684\u95DC\u9375\u8A5E: "\u0F44\u0F60\u0F72\u0F0B\u0F42\u0F53\u0F51\u0F0B\u0F60\u0F42\u0F42\u0F0B\u0F5A\u0F72\u0F42\u0F0D",
  \u6211\u7684\u8B80\u8005\u985E\u578B: "\u0F44\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0D",
  \u6211\u7684\u4F5B\u5B78\u7D1A\u5225: "\u0F44\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F64\u0F7A\u0F66\u0F0B\u0F56\u0FB1\u0F60\u0F72\u0F0B\u0F46\u0F74\u0F0B\u0F5A\u0F51\u0F0D",
  \u6211\u7684\u4FEE\u884C\u7D1A\u5225: "\u0F44\u0F60\u0F72\u0F0B\u0F63\u0F42\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F46\u0F74\u0F0B\u0F5A\u0F51\u0F0D",
  \u6211\u7684\u5B50\u4E3B\u984C: "\u0F44\u0F60\u0F72\u0F0B\u0F61\u0F53\u0F0B\u0F63\u0F42\u0F0B\u0F56\u0F62\u0F97\u0F7C\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0D",
  \u9084\u6C92\u95B1\u8B80: "\u0F58\u0F0B\u0F56\u0F40\u0FB3\u0F42\u0F66\u0F0D",
  \u60F3\u8B80: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F51\u0F0D",
  \u5728\u8B80: "\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u5DF2\u8B80: "\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F60\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F56\u0FB1\u0F74\u0F44\u0F0B\u0F0D",
  \u4E0D\u8B80: "\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F72\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u68C4\u8B80: "\u0F51\u0F7C\u0F62\u0F0B\u0F66\u0F7C\u0F44\u0F0B\u0F0D",
  \u7565\u8B80: "\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F60\u0F47\u0F63\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u901A\u8B80: "\u0F46\u0F0B\u0F5A\u0F44\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0D",
  \u7CBE\u8B80: "\u0F49\u0F7A\u0F0B\u0F56\u0F62\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0D",
  \u6DF1\u5165\u7814\u8B80: "\u0F66\u0FB3\u0F7C\u0F56\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F44\u0F0B\u0F42\u0F4F\u0F72\u0F44\u0F0B\u0F5F\u0F56\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u57FA\u790E\u95B1\u8B80: "\u0F42\u0F5E\u0F72\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0D",
  \u6AA2\u8996\u95B1\u8B80: "\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F63\u0F9F\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0D",
  \u5206\u6790\u95B1\u8B80: "\u0F51\u0F56\u0FB1\u0F7A\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0D",
  \u4E3B\u984C\u95B1\u8B80: "\u0F66\u0FA1\u0F7A\u0F56\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F62\u0FA9\u0F63\u0F0D",
  \u63A8\u85A6: "\u0F60\u0F7C\u0F66\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0D",
  \u4E0D\u63A8\u85A6: "\u0F60\u0F7C\u0F66\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0B\u0F58\u0F72\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  \u672A\u6C7A\u5B9A: "\u0F50\u0F42\u0F0B\u0F42\u0F45\u0F7C\u0F51\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F0D",
  \u4E00\u822C\u8B80\u8005: "\u0F66\u0FA4\u0FB1\u0F72\u0F62\u0F0B\u0F56\u0F4F\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0D",
  \u521D\u7688\u4F9D\u8005: "\u0F42\u0F66\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F66\u0F90\u0FB1\u0F56\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F66\u0F7C\u0F44\u0F0B\u0F56\u0F0D",
  \u5B78\u4F5B\u8005: "\u0F53\u0F44\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F66\u0FB3\u0F7C\u0F56\u0F0B\u0F58\u0F0D",
  \u4FEE\u884C\u8005: "\u0F49\u0F58\u0F66\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F54\u0F0D",
  \u771F\u4F5B\u884C\u8005: "\u0F56\u0F51\u0F7A\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F66\u0F44\u0F66\u0F0B\u0F62\u0F92\u0FB1\u0F66\u0F0B\u0F66\u0FB3\u0F7C\u0F56\u0F0B\u0F42\u0FB2\u0FAD\u0F60\u0F72\u0F0B\u0F49\u0F58\u0F66\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F54\u0F0D",
  \u5973: "\u0F56\u0F74\u0F51\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  \u7537: "\u0F55\u0F7C\u0F0D",
  \u5176\u4ED6: "\u0F42\u0F5E\u0F53\u0F0D",
  \u4E0D\u9858\u900F\u9732: "\u0F58\u0F0B\u0F56\u0F64\u0F51\u0F0B\u0F54\u0F62\u0F0B\u0F51\u0F42\u0F60\u0F0D",
  language: "UI\u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42",
  languageHelp: "\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F60\u0F55\u0FB2\u0F63\u0F0B\u0F58\u0F62\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F66\u0F92\u0F7A\u0F60\u0F74\u0F0B\u0F41\u0F74\u0F44\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F54\u0F62\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F56\u0F62\u0FA1\u0F0B\u0F56\u0F40\u0F7C\u0F51\u0F0B\u0F58\u0F72\u0F44\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F97\u0F7A\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F53\u0F66\u0F0B\u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F56\u0FB3\u0F74\u0F42\u0F66\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0D",
  connected: "{name} \u0F63\u0F42\u0F66\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F58\u0F7C\u0F0D \u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0D",
  preview: "\u0F66\u0F92\u0F74\u0F42\u0F0B\u0F56\u0F5E\u0F72\u0F53\u0F0B\u0F54\u0F0D: {pending}; \u0F60\u0F42\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F0D: {unchanged}; \u0F53\u0F7C\u0F62\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D {invalid}. \u0F56\u0F66\u0F58\u0F0B\u0F42\u0F5E\u0F72\u0F42\u0F0B\u0F5A\u0F74\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F41\u0F74\u0F63\u0F0B\u0F41\u0F7C\u0F0B\u0F53\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F0B\u0F62\u0F7A\u0F51\u0F0D",
  summary: "\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0D: {saved}; \u0F60\u0F42\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F0D: {unchanged}; \u0F53\u0F74\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0B: {invalid}; \u0F58\u0F0B\u0F5A\u0F44\u0F0B\u0F56\u0F0D: {remaining}.",
  changedDuringUpload: "\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F56\u0F66\u0F92\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F51\u0F7A\u0F0B\u0F51\u0F42\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F46\u0F7A\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  profileNotice: "\u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F51\u0F7A\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F42\u0F66\u0F7C\u0F42\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F41\u0F7C\u0F0B\u0F53\u0F0B\u0F61\u0F72\u0F66\u0F0BTrue Buddha Pedia Analytics \u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F63\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F56\u0F0B\u0F62\u0F7A\u0F51\u0F0D \u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F58\u0F72\u0F44\u0F0B\u0F60\u0F51\u0F7C\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F42\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F55\u0FB2\u0F72\u0F53\u0F0B\u0F51\u0F44\u0F0B\u0F0D \u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F63\u0F7C\u0F0D \u0F5F\u0FB3\u0F0B\u0F56\u0F0D \u0F55\u0F7C\u0F0B\u0F58\u0F7C\u0F0D \u0F62\u0F92\u0FB1\u0F63\u0F0B\u0F41\u0F56\u0F0D \u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F66\u0F0B\u0F58\u0F41\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F60\u0F5B\u0F74\u0F42\u0F66\u0F0B\u0F56\u0F45\u0F66\u0F0B\u0F5A\u0F74\u0F51\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F61\u0F72\u0F42\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F51\u0F42\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F4F\u0F74\u0F0B\u0F56\u0FB2\u0F72\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0D \u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F66\u0F0B\u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F62\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F50\u0F74\u0F56\u0F0B\u0F54\u0F60\u0F58\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F44\u0F0B\u0F54\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F66\u0F74\u0F56\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F56\u0F40\u0F60\u0F0B\u0F56\u0F4F\u0F44\u0F0B\u0F46\u0F7C\u0F42 \u0F66\u0F92\u0F7A\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F50\u0F7A\u0F44\u0F66\u0F0B\u0F62\u0F7A\u0F62\u0F0D \u0F58\u0F50\u0F74\u0F53\u0F0B\u0F60\u0F42\u0FB2\u0F72\u0F42\u0F0B\u0F51\u0F44\u0F0B\u0F51\u0F40\u0F60\u0F0B\u0F44\u0F63\u0F0B\u0F66\u0F7A\u0F63\u0F0B\u0F46\u0F7A\u0F51\u0F0D \u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F46\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F0D \u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F54\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0D \u0F56\u0F40\u0F7C\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F58\u0F0B\u0F63\u0F42 \u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F44\u0F7C\u0F0B\u0F5A\u0F56\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F55\u0FB2\u0F7A\u0F44\u0F0B\u0F56\u0F45\u0F66\u0F0B\u0F40\u0FB1\u0F44\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F46\u0F7A\u0F66\u0F0B\u0F58\u0F50\u0F60\u0F0B\u0F58\u0F60\u0F72\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F46\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F41\u0F7C\u0F0B\u0F53\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D \u0F66\u0FB2\u0F0B\u0F46\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F44\u0F7C\u0F66\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F68\u0F44\u0F0B\u0F58\u0F72\u0F0B\u0F56\u0F66\u0FA1\u0F74\u0F0D \u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F66\u0F58\u0F0B\u0F61\u0F62\u0F0B\u0F66\u0F90\u0FB1\u0F7A\u0F63\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F42\u0F7C\u0F44\u0F0B\u0F62\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F5A\u0F44\u0F0B\u0F58\u0F0B\u0F56\u0F40\u0F44\u0F0B\u0F53\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F49\u0F74\u0F44\u0F0B\u0F58\u0F50\u0F62\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F7A\u0F58\u0F66\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  readingNotice: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F42\u0F66\u0F63\u0F0B\u0F56\u0F64\u0F51\u0F0B\u0F63\u0F0B\u0F58\u0F7C\u0F66\u0F0B\u0F58\u0F50\u0F74\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0D \u0F41\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F66\u0F0B\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F41\u0F7C\u0F0B\u0F53\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F53\u0F44\u0F0B\u0F42\u0F72\u0F0BTrue Buddha Pedia Analytics \u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F51\u0F7A\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F60\u0F55\u0F7A\u0F63\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F51\u0F44\u0F0B\u0F0D \u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D \u0F66\u0F90\u0F62\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0D \u0F60\u0F7C\u0F66\u0F0B\u0F66\u0FA6\u0FB1\u0F7C\u0F62\u0F0D \u0F42\u0F53\u0F51\u0F0B\u0F5A\u0F72\u0F42 \u0F56\u0F62\u0F97\u0F7C\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F55\u0F63\u0F0B\u0F54\u0F0D \u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F51\u0F56\u0FB1\u0F7A\u0F0D \u0F53\u0F44\u0F0B\u0F46\u0F7C\u0F66\u0F0B\u0F64\u0F7A\u0F66\u0F0B\u0F56\u0FB1\u0F60\u0F72\u0F0B\u0F5A\u0F51\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F51\u0F44\u0F0B\u0F49\u0F58\u0F66\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F5A\u0F51\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F56\u0F45\u0F66\u0F0B\u0F5A\u0F74\u0F51\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F55\u0F74\u0F44\u0F0B\u0F54\u0F7C\u0F0B\u0F51\u0F44\u0F0B\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F56\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F0B\u0F53\u0F7C\u0F62\u0F0B\u0F55\u0F56\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0D \u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F63\u0F95\u0F7C\u0F42\u0F66\u0F0B\u0F58\u0F72\u0F53\u0F0B\u0F56\u0F5F\u0F7C\u0F66\u0F0B\u0F53\u0F0B\u0F58\u0F0B\u0F60\u0F7C\u0F44\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F58\u0F5A\u0F58\u0F66\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F40\u0FB1\u0F44\u0F0B\u0F51\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F66\u0F74\u0F56\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F5F\u0F72\u0F53\u0F0B\u0F50\u0F7C\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0B\u0F56\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F5A\u0F7C\u0F42\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F56\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F51\u0F44\u0F0B\u0F0D \u0F54\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0D Tbpedia \u0F54\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0D \u0F60\u0F42\u0FB2\u0F7A\u0F58\u0F0B\u0F66\u0FA4\u0F7A\u0F63\u0F0B\u0F44\u0F7C\u0F66\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F68\u0F44\u0F0B\u0F0D \u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F68\u0F44\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F41\u0F0B\u0F56\u0FB1\u0F44\u0F0B\u0F61\u0F44\u0F0B\u0F5A\u0F74\u0F51\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  noticeUnavailable: "\u0F42\u0F66\u0F56\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F63\u0F0B\u0F66\u0F92\u0F7A\u0F62\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F56\u0F62\u0FA1\u0F0B\u0F50\u0F7C\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F54\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D \u0F44\u0F7C\u0F66\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F60\u0F58\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F51\u0F7A\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F97\u0F7A\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  invalidField: "\u0F61\u0F72\u0F42\u0F0B\u0F51\u0F74\u0F58\u0F0B\u0F60\u0F51\u0F72\u0F60\u0F72\u0F0B\u0F62\u0F72\u0F53\u0F0B\u0F50\u0F44\u0F0B\u0F51\u0F44\u0F0B\u0F62\u0FA3\u0F58\u0F0B\u0F42\u0F5E\u0F42\u0F0B\u0F63\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  invalidChoice: "\u0F61\u0F7C\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F51\u0F58\u0F0B\u0F42\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F7A\u0F58\u0F66\u0F0D",
  invalidType: "\u0F62\u0F7A\u0F0B\u0F56\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F53\u0F0B\u0F50\u0F44\u0F0B\u0F53\u0F44\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
  tooSmall: "\u0F46\u0F74\u0F44\u0F0B\u0F64\u0F7C\u0F66\u0F0B\u0F53\u0F72\u0F0B{limit}\u0F61\u0F72\u0F53\u0F0D",
  tooLarge: "\u0F58\u0F50\u0F7C\u0F0B\u0F64\u0F7C\u0F66\u0F0B\u0F53\u0F72\u0F0B{limit}\u0F61\u0F72\u0F53\u0F0D",
  invalidDate: "\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F50\u0F7C\u0F60\u0F72\u0F0B\u0F5A\u0F7A\u0F66\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B(YYYY-MM-DD)\u0F56\u0FB3\u0F74\u0F42\u0F66\u0F0D",
  futureBirthYear: "\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F63\u0F7C\u0F0B\u0F58\u0F0B\u0F60\u0F7C\u0F44\u0F66\u0F0B\u0F54\u0F62\u0F0B\u0F58\u0F72\u0F0B\u0F62\u0F74\u0F44\u0F0B\u0F0D",
  unknownCountry: "\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B\u0F62\u0F92\u0FB1\u0F63\u0F0B\u0F41\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F66\u0F0B\u0F41\u0F74\u0F63\u0F0B\u0F60\u0F51\u0F7A\u0F58\u0F66\u0F0D",
  birthYearRequired: "\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F5F\u0FB3\u0F0B\u0F42\u0F4F\u0F53\u0F0B\u0F60\u0F41\u0F7A\u0F63\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F63\u0F7C\u0F0B\u0F58\u0F41\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  invalidEmail: "\u0F42\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F55\u0FB2\u0F72\u0F53\u0F0B\u0F41\u0F0B\u0F56\u0FB1\u0F44\u0F0B\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F56\u0FB3\u0F74\u0F42\u0F66\u0F0D",
  validation: "\u0F53\u0F7C\u0F62\u0F0B\u0F60\u0F41\u0FB2\u0F74\u0F63\u0F0B\u0F45\u0F53\u0F0B\u0F51\u0F42\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0D",
  "backend.UNAUTHENTICATED": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F60\u0F51\u0F72\u0F62\u0F0B\u0F60\u0F5B\u0F74\u0F63\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F66\u0FB3\u0F62\u0F0B\u0F42\u0F66\u0F7C\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F62\u0F0B\u0F51\u0F7C\u0F0B\u0F51\u0F58\u0F0B\u0F54\u0F62\u0F0B\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F56\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "backend.NOT_FOUND": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F58\u0F50\u0F60\u0F0B\u0F66\u0FA3\u0F7A\u0F0B\u0F51\u0F7A\u0F0B\u0F62\u0F99\u0F7A\u0F51\u0F0B\u0F58\u0F0B\u0F66\u0F7C\u0F44\u0F0B\u0F0D",
  "backend.NOT_CONFIGURED": "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F66\u0F7C\u0F42\u0F0B\u0F60\u0F47\u0F7C\u0F42\u0F0B\u0F51\u0F7A\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0FA1\u0F74\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0F40\u0F7C\u0F51\u0F0B\u0F63\u0F0B\u0F66\u0F92\u0F74\u0F42\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F51\u0F54\u0F7A\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  "backend.BACKEND_ERROR": "\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F56\u0F40\u0F7C\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F63\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F60\u0F58\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F51\u0F7C\u0F0B\u0F51\u0F58\u0F0B\u0F54\u0F0B\u0F63\u0F0B\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F56\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "backend.CONSENT_REQUIRED": "\u0F58\u0F72\u0F42\u0F0B\u0F66\u0F94\u0F60\u0F72\u0F0B\u0F44\u0F7C\u0F0B\u0F51\u0F7A\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F56\u0F62\u0FA1\u0F0B\u0F50\u0F7C\u0F0B\u0F63\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "backend.UPLOAD_DISABLED": "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F58\u0F72\u0F0B\u0F50\u0F74\u0F56\u0F0D",
  "backend.CONTENT_NOT_FOUND": "\u0F62\u0FA3\u0F58\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F58\u0F46\u0F53\u0F0B\u0F50\u0F7C\u0F56\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F51\u0F40\u0F62\u0F0B\u0F46\u0F42\u0F0B\u0F53\u0F44\u0F0B\u0F58\u0F7A\u0F51\u0F0D",
  "backend.VALIDATION_FAILED": "\u0F55\u0F74\u0F63\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F53\u0F74\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F61\u0F72\u0F53\u0F0B\u0F54\u0F60\u0F58\u0F0B\u0F61\u0F44\u0F0B\u0F53\u0F0B\u0F50\u0F7C\u0F0B\u0F42\u0F5E\u0F74\u0F44\u0F0B\u0F62\u0FA3\u0F58\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F64\u0F74\u0F42\u0F66\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F61\u0F72\u0F53\u0F0D",
  "backend.DUPLICATE_KEY": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F51\u0FB2\u0F53\u0F0B\u0F50\u0F7C\u0F0B\u0F60\u0F51\u0FB2\u0F0B\u0F58\u0F5A\u0F74\u0F44\u0F66\u0F0B\u0F63\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F44\u0F0B\u0F54\u0F66\u0F0B\u0F56\u0F5F\u0F7C\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "backend.METHOD_NOT_ALLOWED": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F50\u0F56\u0F66\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F58\u0F72\u0F0B\u0F46\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F62\u0F7A\u0F51\u0F0D",
  "backend.INTERNAL_ERROR": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F51\u0F7A\u0F0B\u0F66\u0F92\u0FB2\u0F74\u0F56\u0F0B\u0F50\u0F74\u0F56\u0F0B\u0F58\u0F0B\u0F66\u0F7C\u0F44\u0F0B\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "backend.PAYLOAD_TOO_LARGE": "\u0F55\u0F74\u0F63\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F51\u0F7A\u0F0B\u0F5A\u0F51\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F63\u0F66\u0F0B\u0F56\u0F62\u0F92\u0F63\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  "backend.BAD_REQUEST": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F51\u0F7A\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0BJSON\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F53\u0F74\u0F66\u0F0B\u0F63\u0FA1\u0F53\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "backend.JSON_REQUIRED": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F51\u0F7A\u0F66\u0F0B\u0F58\u0F49\u0F7A\u0F53\u0F0B\u0F46\u0F66\u0F0B/json \u0F56\u0F7A\u0F51\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  "backend.RATE_LIMITED": "\u0F62\u0F7A\u0F0B\u0F60\u0F51\u0F74\u0F53\u0F0B\u0F58\u0F44\u0F0B\u0F51\u0FB2\u0F42\u0F66\u0F0B\u0F54\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  "field.nickname": "\u0F58\u0F72\u0F44\u0F0B\u0F60\u0F51\u0F7C\u0F42\u0F66\u0F0B\u0F54\u0F0D",
  "field.email": "\u0F42\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F55\u0FB2\u0F72\u0F53\u0F0D",
  "field.birth_year": "\u0F60\u0F41\u0FB2\u0F74\u0F44\u0F66\u0F0B\u0F63\u0F7C\u0F0D",
  "field.birth_month": "\u0F66\u0F90\u0FB1\u0F7A\u0F66\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0D",
  "field.sex": "\u0F55\u0F7C\u0F0B\u0F58\u0F7C\u0F0D",
  "field.country_code": "\u0F62\u0F92\u0FB1\u0F63\u0F0B\u0F41\u0F56/\u0F66\u0F0B\u0F41\u0F74\u0F63\u0F0D",
  "field.reader_type": "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F41\u0F53\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0D",
  "field.organisation": "\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F60\u0F5B\u0F74\u0F42\u0F66\u0F0D",
  "field.content_id": "\u0F53\u0F44\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F68\u0F44\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0D",
  "field.schema_version": "\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F53\u0F0B\u0F62\u0F72\u0F58\u0F0D",
  "field.client_updated_at": "\u0F58\u0F50\u0F60\u0F0B\u0F58\u0F60\u0F72\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F56\u0F45\u0F7C\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F54\u0F0D",
  "field.profile": "\u0F44\u0F7C\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0D",
  "field.values": "\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0D",
  "backend.BACKEND_TIMEOUT": "\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F63\u0F53\u0F0B\u0F60\u0F51\u0F7A\u0F56\u0F66\u0F0B\u0F51\u0F74\u0F66\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F56\u0F62\u0F92\u0F63\u0F0B\u0F66\u0F7C\u0F44\u0F0B\u0F0D \u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F58\u0F72\u0F53\u0F0B\u0F44\u0F7A\u0F66\u0F0B\u0F42\u0F4F\u0F53\u0F0B\u0F58\u0F7A\u0F51\u0F0D \u0F5E\u0F56\u0F66\u0F0B\u0F5E\u0F74\u0F0B\u0F66\u0FB3\u0F62\u0F0B\u0F42\u0F66\u0F7C\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F63\u0F42\u0F0B\u0F50\u0F7C\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  followSystem: "\u0F58\u0F0B\u0F63\u0F42\u0F0B\u0F63\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F60\u0F56\u0FB2\u0F44\u0F0B\u0F0D",
  followSystemHelp: "Obsidian \u0F42\u0FB1\u0F72\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0D \u0F62\u0F92\u0FB1\u0F56\u0F0B\u0F66\u0F90\u0FB1\u0F7C\u0F62\u0F0B\u0F58\u0F7A\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F61\u0F72\u0F53\u0F0B\u0F53\u0F0B\u0F51\u0F56\u0FB1\u0F72\u0F53\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0D",
  updaterReadError: "Tbpedia \u0F42\u0F66\u0F62\u0F0B\u0F56\u0F62\u0F97\u0F7A\u0F60\u0F72\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F9F\u0F44\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D data.json \u0F61\u0F72\u0F42\u0F0B\u0F46\u0F62\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F53\u0F66\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D \u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F49\u0F62\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  updaterChanged: "\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F56\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F5A\u0F7C\u0F42\u0F66\u0F0B\u0F63\u0F0B\u0F60\u0F42\u0FB1\u0F74\u0F62\u0F0B\u0F56\u0F0B\u0F56\u0FB1\u0F74\u0F44\u0F0B\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F61\u0F62\u0F0B\u0F56\u0F66\u0F90\u0F74\u0F62\u0F0B\u0F58\u0F5A\u0F58\u0F66\u0F0B\u0F56\u0F5E\u0F42\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F66\u0F94\u0F7C\u0F53\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F53\u0F66\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  updaterSyncNotice: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F5F\u0F72\u0F53\u0F0B\u0F50\u0F7C\u0F60\u0F72\u0F0B\u0F53\u0F44\u0F0B\u0F56\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F66\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F5A\u0F7C\u0F42\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F56\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F51\u0F44\u0F0B\u0F0D \u0F54\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0D Tbpedia \u0F54\u0F62\u0F0B\u0F42\u0F5E\u0F72\u0F0D \u0F60\u0F42\u0FB2\u0F7A\u0F58\u0F0B\u0F66\u0FA4\u0F7A\u0F63\u0F0B\u0F44\u0F7C\u0F66\u0F0B\u0F60\u0F5B\u0F72\u0F53\u0F0B\u0F68\u0F44\u0F0B\u0F0D \u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F72\u0F0B\u0F68\u0F44\u0F0B\u0F62\u0F9F\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F41\u0F0B\u0F56\u0FB1\u0F44\u0F0B\u0F61\u0F44\u0F0B\u0F5A\u0F74\u0F51\u0F0B\u0F61\u0F7C\u0F51\u0F0D",
  analyticsMetadataReadError: "\u0F51\u0F56\u0FB1\u0F7A\u0F0B\u0F5E\u0F72\u0F56\u0F0B\u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0Bdata.json \u0F53\u0F44\u0F0B\u0F49\u0F62\u0F0B\u0F56\u0F60\u0F72\u0F0B\u0F62\u0FA9\u0F7C\u0F58\u0F0B\u0F5A\u0F7C\u0F42\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F60\u0F58\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F58\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F54\u0F0B\u0F63\u0F42\u0F0B\u0F68\u0F72\u0F53\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F56\u0FB3\u0F74\u0F42\u0F66\u0F0B\u0F53\u0F66\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0D",
  connectionAvailable: "\u0F60\u0F56\u0FB2\u0F7A\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0D \u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F56\u0F7A\u0F51\u0F0B\u0F66\u0FA4\u0FB1\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F0B\u0F50\u0F74\u0F56\u0F0D",
  recordReading: "\u0F44\u0F60\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F60\u0F42\u0F7C\u0F51\u0F0D",
  syncReadingCloud: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F51\u0F74\u0F0B\u0F58\u0F49\u0F58\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42",
  readingContentIdRequired: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F42\u0F5E\u0F72\u0F0B\u0F42\u0FB2\u0F44\u0F66\u0F0B\u0F50\u0F7C\u0F0B\u0F60\u0F42\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F54\u0F62\u0F0B\u0F5F\u0F72\u0F53\u0F0B\u0F56\u0FB2\u0F72\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B frontmatter \u0F53\u0F44\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B tbpedia_content_id \u0F61\u0F7C\u0F51\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  requiredSuffix: "(\u0F44\u0F7A\u0F66\u0F0B\u0F54\u0F62\u0F0B\u0F51\u0F74\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D)",
  profileRequiredHelp: "\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F66\u0F58\u0F0B\u0F61\u0F62\u0F0B\u0F66\u0F90\u0FB1\u0F7A\u0F63\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F42\u0F7C\u0F44\u0F0B\u0F62\u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F5A\u0F44\u0F0B\u0F58\u0F0B\u0F56\u0F40\u0F44\u0F0B\u0F53\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F49\u0F74\u0F44\u0F0B\u0F58\u0F50\u0F62\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F7A\u0F58\u0F66\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  readerTypesRequired: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B\u0F62\u0F72\u0F42\u0F66\u0F0B\u0F49\u0F74\u0F44\u0F0B\u0F58\u0F50\u0F62\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F60\u0F51\u0F7A\u0F58\u0F66\u0F0B\u0F51\u0F42\u0F7C\u0F66\u0F0D",
  readerId: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B ID",
  readerSetup: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B\u0F66\u0F92\u0FB2\u0F72\u0F42\u0F0B\u0F60\u0F42\u0F7C\u0F51",
  newReader: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0B\u0F42\u0F66\u0F62\u0F0B\u0F54\u0F0B\u0F50\u0F7C\u0F0B\u0F60\u0F42\u0F7C\u0F51",
  existingReader: "\u0F66\u0F94\u0F62\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F54\u0F0D",
  connectExistingReader: "\u0F66\u0F94\u0F62\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F54\u0F0D",
  newReaderHelp: "\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F56\u0F40\u0F44\u0F0B\u0F53\u0F66\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F51\u0F44\u0F0B\u0F61\u0F62\u0F0B\u0F66\u0F90\u0FB1\u0F7A\u0F63\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F53\u0F0B ID \u0F42\u0F66\u0F62\u0F0B\u0F54\u0F0B\u0F50\u0F7C\u0F56\u0F0D",
  readerAlreadyLinked: "\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F60\u0F51\u0F72\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0B\u0F51\u0F44\u0F0B\u0F58\u0F50\u0F74\u0F51\u0F0B\u0F5F\u0F72\u0F53\u0F0D",
  readerOperationBusy: "\u0F63\u0F66\u0F0B\u0F40\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F56\u0F5E\u0F72\u0F53\u0F0B\u0F61\u0F7C\u0F51\u0F0D \u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F66\u0F74\u0F0B\u0F66\u0FB3\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0D",
  readerIdInvalid: "\u0F5A\u0F74\u0F63\u0F0B\u0F58\u0F50\u0F74\u0F53\u0F0B\u0F42\u0FB1\u0F72\u0F0B ID \u0F60\u0F47\u0F74\u0F42\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0D",
  readerRecoveryMismatch: "\u0F66\u0FA4\u0FB2\u0F72\u0F53\u0F0B\u0F58\u0F5B\u0F7C\u0F51\u0F0B\u0F53\u0F66\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F0B\u0F42\u0F5E\u0F53\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F63\u0F7C\u0F42\u0F0B\u0F56\u0FB1\u0F74\u0F44\u0F0B\u0F0D \u0F66\u0FB3\u0F62\u0F0B\u0F42\u0F66\u0F7C\u0F0B\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F66\u0F0D",
  readerIdHelp: "\u0F62\u0F44\u0F0B\u0F42\u0F72\u0F0B ID \u0F56\u0F45\u0F74\u0F42\u0F0B\u0F53\u0F66\u0F0B\u0F42\u0F53\u0F66\u0F0B\u0F5A\u0F74\u0F63\u0F0B\u0F63\u0F7A\u0F53\u0F0B\u0F50\u0F74\u0F56\u0F0D \u0F51\u0F7A\u0F66\u0F0B\u0F62\u0FA9\u0F72\u0F66\u0F0B\u0F41\u0FB2\u0F62\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B\u0F50\u0F74\u0F56\u0F0B\u0F54\u0F66\u0F0B\u0F42\u0F66\u0F44\u0F0B\u0F56\u0F62\u0F0B\u0F49\u0F62\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0D",
  reflectionRemaining: "\u0F61\u0F72\u0F42\u0F0B\u0F60\u0F56\u0FB2\u0F74\u0F0B {remaining} \u0F63\u0FB7\u0F42\u0F0B\u0F61\u0F7C\u0F51\u0F0D (\u0F58\u0F44\u0F0B\u0F58\u0F50\u0F60\u0F0B {limit})",
  reflectionTooLong: "\u0F49\u0F62\u0F0B\u0F5A\u0F42\u0F66\u0F0B\u0F58\u0F0B\u0F56\u0FB1\u0F66\u0F0B\u0F42\u0F7C\u0F44\u0F0B\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F5A\u0F7C\u0F62\u0F0B\u0F61\u0F72\u0F42\u0F0B\u0F60\u0F56\u0FB2\u0F74\u0F0B {limit} \u0F53\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F50\u0F74\u0F44\u0F0B\u0F51\u0F74\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0D",
  showReaderId: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B ID \u0F66\u0F9F\u0F7C\u0F53\u0F0D",
  hideReaderId: "\u0F40\u0FB3\u0F7C\u0F42\u0F0B\u0F54\u0F0B\u0F54\u0F7C\u0F60\u0F72\u0F0B ID \u0F66\u0FA6\u0F7A\u0F51\u0F0D"
};

// plugin/i18n.ts
var LANGUAGES = {
  en: "English",
  ja: "\u65E5\u672C\u8A9E",
  fr: "Fran\xE7ais",
  es: "Espa\xF1ol",
  de: "Deutsch",
  nl: "Nederlands",
  sv: "Svenska",
  ko: "\uD55C\uAD6D\uC5B4",
  "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  vi: "Ti\u1EBFng Vi\u1EC7t",
  id: "Bahasa Indonesia",
  th: "\u0E44\u0E17\u0E22",
  bo: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
};
var catalogs = { en: en_default2, ja: ja_default, fr: fr_default, es: es_default, de: de_default, nl: nl_default, sv: sv_default, ko: ko_default, "zh-TW": zh_TW_default, "zh-CN": zh_CN_default, vi: vi_default, id: id_default, th: th_default, bo: bo_default };
var locale = "en";
function resolveLocale(value) {
  if (typeof value !== "string") return "en";
  const code = value.replaceAll("_", "-").toLowerCase();
  if (/^zh(?:-|$)/.test(code)) return /(?:tw|hk|mo|hant)/.test(code) ? "zh-TW" : "zh-CN";
  return Object.keys(LANGUAGES).find((key) => key.toLowerCase() === code) ?? Object.keys(LANGUAGES).find((key) => key === code.split("-")[0]) ?? "en";
}
function languagePreference(value) {
  return value === void 0 || value === null || value === "system" ? "system" : resolveLocale(value);
}
function setLocale(value, systemLanguage) {
  const preference = languagePreference(value);
  locale = resolveLocale(preference === "system" ? systemLanguage : preference);
  return locale;
}
function intlLocale() {
  return locale === "zh-TW" ? "zh-Hant" : locale === "zh-CN" ? "zh-Hans" : locale;
}
function number3(value) {
  return new Intl.NumberFormat(intlLocale()).format(value);
}
function t(key, params = {}) {
  const text = catalogs[locale][key] ?? catalogs.en[key];
  if (text === void 0) throw new Error(`Unknown translation key: ${key}`);
  return text.replace(/\{([a-zA-Z]+)\}/g, (token, name) => {
    const value = params[name];
    return value === void 0 ? token : typeof value === "number" ? number3(value) : value;
  });
}
function labels(values) {
  return Object.fromEntries(Object.entries(values).map(([code, label]) => [code, t(label)]));
}
function monthName(month) {
  return new Intl.DateTimeFormat(intlLocale(), { month: "long", timeZone: "UTC" }).format(new Date(Date.UTC(2e3, month - 1, 1)));
}
function regionName(code) {
  try {
    return new Intl.DisplayNames([intlLocale()], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}
var UiError = class extends Error {
};
function backendMessage(code) {
  const key = `backend.${code}`;
  return t(Object.hasOwn(en_default2, key) ? key : "backend.INTERNAL_ERROR");
}
function fieldLabel(path) {
  const field = String(path.filter((part) => typeof part !== "number").at(-1) ?? "");
  return t(Object.hasOwn(en_default2, `field.${field}`) ? `field.${field}` : "validation");
}
function validationReason(issue2) {
  const custom = {
    "Select at least one reader type": "readerTypesRequired",
    "Invalid calendar date": "invalidDate",
    "Birth year cannot be in the future": "futureBirthYear",
    "Unknown country code": "unknownCountry",
    "Birth year is required when birth month is supplied": "birthYearRequired"
  };
  if (custom[issue2.message]) return t(custom[issue2.message]);
  if (issue2.code === "too_small") return t("tooSmall", { limit: Number(issue2.minimum) });
  if (issue2.code === "too_big") return t("tooLarge", { limit: Number(issue2.maximum) });
  if (issue2.code === "invalid_value") return t("invalidChoice");
  if (issue2.code === "invalid_type") return t("invalidType");
  if (issue2.format === "email") return t("invalidEmail");
  return t("invalidField");
}

// shared/client-metadata.ts
var clientMetadataSchema = object({
  device_type: _enum(["desktop", "tablet", "mobile", "unknown"]),
  Client_version: string2().trim().min(1).max(64),
  os: string2().trim().min(1).max(100).nullable(),
  user_agent: string2().trim().min(1).max(2048).nullable()
}).strict();
function collectClientMetadata(platform, version2, userAgent) {
  const os = platform.isIosApp ? "iOS" : platform.isAndroidApp ? "Android" : platform.isWin ? "Windows" : platform.isMacOS ? "macOS" : platform.isLinux ? "Linux" : null;
  const device_type = platform.isTablet ? "tablet" : platform.isPhone || platform.isMobileApp ? "mobile" : platform.isDesktopApp ? "desktop" : "unknown";
  return clientMetadataSchema.parse({ device_type, Client_version: version2, os, user_agent: userAgent?.trim().slice(0, 2048) || null });
}

// shared/updater-metadata.ts
var identifier = string2().trim().min(1).max(256).nullable().default(null);
var languageCode = string2().trim().min(1).max(64).nullable().default(null);
var title = string2().trim().min(1).max(1e3).nullable().default(null);
var updaterMetadataSchema = object({ seriesId: identifier, editionId: identifier, tbpedia: identifier, releaseId: identifier, languageCode, title }).strict();
var UPDATER_METADATA_KEYS = ["seriesId", "editionId", "tbpedia", "releaseId", "languageCode", "title"];
var updaterDataSchema = object({
  seriesId: identifier,
  editionId: identifier,
  tbpedia: identifier,
  releaseId: identifier,
  languageCode,
  title,
  installed: object({ releaseId: identifier }).nullish()
});
function extractUpdaterMetadata(value) {
  const parsed = updaterDataSchema.parse(value);
  return updaterMetadataSchema.parse({ seriesId: parsed.seriesId, editionId: parsed.editionId, tbpedia: parsed.tbpedia, releaseId: parsed.installed?.releaseId ?? parsed.releaseId, languageCode: parsed.languageCode, title: parsed.title });
}
function readUpdaterMetadata(fields) {
  return updaterMetadataSchema.parse(Object.fromEntries(UPDATER_METADATA_KEYS.map((key) => [key, fields[key] ?? null])));
}

// shared/schema.ts
var PROFILE_NOTICE_VERSION = "profile-v2";
var READING_NOTICE_VERSION = "reading-v1";
var STATUS_LABELS = { UNREAD: "\u9084\u6C92\u95B1\u8B80", WANT_TO_READ: "\u60F3\u8B80", READING: "\u5728\u8B80", COMPLETED: "\u5DF2\u8B80", NOT_READING: "\u4E0D\u8B80", ABANDONED: "\u68C4\u8B80" };
var DEPTH_LABELS = { SKIM: "\u7565\u8B80", FULL: "\u901A\u8B80", CLOSE: "\u7CBE\u8B80", STUDY: "\u6DF1\u5165\u7814\u8B80", BASIC: "\u57FA\u790E\u95B1\u8B80", INSPECTIONAL: "\u6AA2\u8996\u95B1\u8B80", ANALYTICAL: "\u5206\u6790\u95B1\u8B80", SYNTOPICAL: "\u4E3B\u984C\u95B1\u8B80" };
var RECOMMENDATION_LABELS = { RECOMMEND: "\u63A8\u85A6", NOT_RECOMMEND: "\u4E0D\u63A8\u85A6", UNDECIDED: "\u672A\u6C7A\u5B9A" };
var READER_LABELS = { GENERAL: "\u4E00\u822C\u8B80\u8005", NEW_REFUGE: "\u521D\u7688\u4F9D\u8005", BUDDHIST_STUDENT: "\u5B78\u4F5B\u8005", PRACTITIONER: "\u4FEE\u884C\u8005", TBS_PRACTITIONER: "\u771F\u4F5B\u884C\u8005" };
var SEX_LABELS = { FEMALE: "\u5973", MALE: "\u7537", OTHER: "\u5176\u4ED6", PREFER_NOT_TO_SAY: "\u4E0D\u9858\u900F\u9732" };
var codeEnum = (values) => _enum(Object.keys(values));
var contentIdSchema = string2().regex(/^[A-Za-z0-9_-]{1,80}$/);
var dateSchema = string2().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const d = /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}, "Invalid calendar date");
var nullableText = (max) => string2().max(max).nullable();
var wordList = array(string2().trim().min(1).max(100)).max(50).transform((items) => [...new Set(items)]);
var readingSchema = object({
  planned_reading: boolean2(),
  reading_status: codeEnum(STATUS_LABELS),
  reading_depth: codeEnum(DEPTH_LABELS).nullable(),
  reading_count: number2().int().min(0).max(2147483647),
  want_to_read_date: dateSchema.nullable(),
  reading_start_date: dateSchema.nullable(),
  completed_date: dateSchema.nullable(),
  not_reading_date: dateSchema.nullable(),
  abandoned_date: dateSchema.nullable(),
  reading_reflection: nullableText(1e4),
  my_recommendation: codeEnum(RECOMMENDATION_LABELS).nullable(),
  my_rating: number2().int().min(1).max(5).nullable(),
  my_keywords: wordList,
  my_reader_types: array(codeEnum(READER_LABELS)).max(5).transform((items) => [...new Set(items)]),
  my_buddhist_level: number2().int().min(0).max(3).nullable(),
  my_practice_level: number2().int().min(0).max(3).nullable(),
  my_subtopics: wordList
}).strict();
var READING_KEYS = Object.keys(readingSchema.shape);
var FRONTMATTER_KEYS = {
  planned_reading: "\u8A08\u5283\u95B1\u8B80",
  reading_status: "\u95B1\u8B80\u72C0\u614B",
  reading_depth: "\u95B1\u8B80\u5C64\u6B21",
  reading_count: "\u95B1\u8B80\u6B21\u6578",
  want_to_read_date: "\u60F3\u8B80\u65E5\u671F",
  reading_start_date: "\u5728\u8B80\u65E5\u671F",
  completed_date: "\u5DF2\u8B80\u65E5\u671F",
  not_reading_date: "\u4E0D\u8B80\u65E5\u671F",
  abandoned_date: "\u68C4\u8B80\u65E5\u671F",
  reading_reflection: "\u95B1\u8B80\u611F\u60F3",
  my_recommendation: "\u6211\u7684\u95B1\u8B80\u63A8\u85A6",
  my_rating: "\u6211\u7684\u8A55\u5206",
  my_keywords: "\u6211\u7684\u95DC\u9375\u8A5E",
  my_reader_types: "\u6211\u7684\u8B80\u8005\u985E\u578B",
  my_buddhist_level: "\u6211\u7684\u4F5B\u5B78\u7D1A\u5225",
  my_practice_level: "\u6211\u7684\u4FEE\u884C\u7D1A\u5225",
  my_subtopics: "\u6211\u7684\u5B50\u4E3B\u984C"
};
var defaults = () => ({ planned_reading: false, reading_status: "UNREAD", reading_depth: null, reading_count: 0, want_to_read_date: null, reading_start_date: null, completed_date: null, not_reading_date: null, abandoned_date: null, reading_reflection: null, my_recommendation: null, my_rating: null, my_keywords: [], my_reader_types: [], my_buddhist_level: null, my_practice_level: null, my_subtopics: [] });
var COUNTRY_CODES = new Set("AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW".split(" "));
var profileReaderTypesSchema = union([codeEnum(READER_LABELS), array(codeEnum(READER_LABELS)).max(5)]).nullable().transform((value) => {
  if (value === null) return null;
  const values = Array.isArray(value) ? value : [value];
  const selected = Object.keys(READER_LABELS).filter((code) => values.includes(code));
  return selected.length ? selected : null;
});
var profileSchema = object({
  nickname: string2().trim().min(1).max(100),
  email: email2().max(254).nullable(),
  // Workers can freeze the module-initialization clock; evaluate the year per validation.
  birth_year: number2().int().min(1900).refine((year) => year <= (/* @__PURE__ */ new Date()).getUTCFullYear(), "Birth year cannot be in the future").nullable(),
  birth_month: number2().int().min(1).max(12).nullable(),
  sex: codeEnum(SEX_LABELS),
  country_code: string2().refine((s) => COUNTRY_CODES.has(s), "Unknown country code").nullable(),
  reader_type: profileReaderTypesSchema,
  organisation: string2().trim().max(200).nullable()
}).strict().refine((p) => p.birth_month === null || p.birth_year !== null, { path: ["birth_month"], message: "Birth year is required when birth month is supplied" });
var emptyProfile = () => ({ nickname: "", email: null, birth_year: null, birth_month: null, sex: "PREFER_NOT_TO_SAY", country_code: null, reader_type: null, organisation: null });
var completeProfileSchema = profileSchema.safeExtend({
  email: email2().max(254),
  birth_year: profileSchema.shape.birth_year.unwrap(),
  birth_month: profileSchema.shape.birth_month.unwrap(),
  country_code: profileSchema.shape.country_code.unwrap(),
  organisation: string2().trim().min(1).max(200),
  reader_type: profileReaderTypesSchema.refine((value) => value !== null && value.length > 0, "Select at least one reader type")
});
var profileRequestSchema = object({ schema_version: literal(1), profile: completeProfileSchema, profile_notice_version: string2().max(40), cloud_sync_enabled: boolean2(), reading_notice_version: string2().max(40).nullable(), client_metadata: clientMetadataSchema.optional() }).strict();
var syncRequestSchema = object({ schema_version: literal(1), content_id: contentIdSchema, client_updated_at: iso_exports.datetime({ offset: true }), values: readingSchema, updater_metadata: updaterMetadataSchema.optional() }).strict();
function canonicalSnapshot(contentId, values, updaterMetadata) {
  const normalized = readingSchema.parse(values);
  const ordered = Object.fromEntries(READING_KEYS.map((key) => [key, normalized[key]]));
  return JSON.stringify({ schema_version: 1, content_id: contentIdSchema.parse(contentId), values: ordered, ...updaterMetadata === void 0 ? {} : { updater_metadata: updaterMetadataSchema.parse(updaterMetadata) } });
}
async function sha256(value) {
  const data = new TextEncoder().encode(value);
  return [...new Uint8Array(await crypto.subtle.digest("SHA-256", data))].map((b) => b.toString(16).padStart(2, "0")).join("");
}
var snapshotHash = (id, values, updaterMetadata) => sha256(canonicalSnapshot(id, values, updaterMetadata));
function localDate(d = /* @__PURE__ */ new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function statusAction(current, status, day = localDate()) {
  if (current.reading_status === status) return { ...current };
  const next = { ...current, reading_status: status };
  const dates = { WANT_TO_READ: "want_to_read_date", READING: "reading_start_date", COMPLETED: "completed_date", NOT_READING: "not_reading_date", ABANDONED: "abandoned_date" };
  if (status !== "UNREAD") next[dates[status]] = day;
  if (status === "COMPLETED") next.reading_count += 1;
  return readingSchema.parse(next);
}

// shared/frontmatter.ts
function one(value) {
  return Array.isArray(value) && value.length === 1 ? value[0] : value;
}
function mapped(value, labels2, aliases2 = {}) {
  value = one(value);
  if (value === void 0 || value === null || value === "") return null;
  if (typeof value !== "string") return value;
  return aliases2[value] ?? Object.entries(labels2).find(([, label]) => label === value)?.[0] ?? value;
}
var aliases = { my_recommendation: ["\u95B1\u8B80\u63A8\u85A6", "\u6587\u7AE0\u63A8\u85A6"], my_rating: ["\u95B1\u8B80\u8A55\u5206", "\u6587\u7AE0\u8A55\u5206", "\u8A55\u5206"] };
function fromFrontmatter(fm) {
  const base = { ...defaults() };
  for (const key of READING_KEYS) {
    const canonical = FRONTMATTER_KEYS[key];
    const alias = aliases[key]?.find((name) => fm[name] !== void 0 && fm[name] !== null && fm[name] !== "");
    const isLegacy = !Object.hasOwn(fm, canonical) && alias !== void 0;
    const raw = fm[canonical] ?? (isLegacy && alias ? fm[alias] : void 0);
    if (raw === void 0 || raw === null || raw === "") continue;
    let value = raw;
    if (key === "reading_status") value = mapped(raw, STATUS_LABELS, { "\u6C92\u8B80": "UNREAD", "\u672A\u8B80": "UNREAD" });
    if (key === "reading_depth") value = mapped(raw, DEPTH_LABELS);
    if (key === "my_recommendation") value = mapped(raw, RECOMMENDATION_LABELS, { "\u6C92\u63A8\u85A6": "UNDECIDED", "\u672A\u63A8\u85A6": "UNDECIDED" });
    if (key === "my_rating" && isLegacy && raw === 0) value = null;
    if (key === "my_reader_types" && Array.isArray(raw)) value = raw.map((v) => mapped(v, READER_LABELS));
    if (key === "reading_reflection" && Array.isArray(raw) && raw.every((v) => typeof v === "string")) value = raw.join("\n") || null;
    if (key.endsWith("_date") && raw instanceof Date && !Number.isNaN(raw.getTime())) value = raw.toISOString().slice(0, 10);
    base[key] = value;
  }
  return readingSchema.parse(base);
}
function toFrontmatter(values) {
  const parsed = readingSchema.parse(values);
  const result = {};
  for (const key of READING_KEYS) result[FRONTMATTER_KEYS[key]] = parsed[key];
  result["\u95B1\u8B80\u72C0\u614B"] = STATUS_LABELS[parsed.reading_status];
  result["\u95B1\u8B80\u5C64\u6B21"] = parsed.reading_depth === null ? null : DEPTH_LABELS[parsed.reading_depth];
  result["\u6211\u7684\u95B1\u8B80\u63A8\u85A6"] = parsed.my_recommendation === null ? null : RECOMMENDATION_LABELS[parsed.my_recommendation];
  result["\u6211\u7684\u8B80\u8005\u985E\u578B"] = parsed.my_reader_types.map((code) => READER_LABELS[code]);
  return result;
}
function trackedFingerprint(fm) {
  return JSON.stringify({ id: fm.tbpedia_content_id ?? null, values: fromFrontmatter(fm) });
}
function readingUpdatedAt(fm) {
  const value = fm.tbpedia_reading_updated_at;
  return syncRequestSchema.shape.client_updated_at.parse(value instanceof Date ? value.toISOString() : value);
}
function markReadingSynced(fm, expectedFingerprint, expectedUpdatedAt, syncedAt, hash) {
  if (trackedFingerprint(fm) !== expectedFingerprint || readingUpdatedAt(fm) !== expectedUpdatedAt) return false;
  const timestamp = syncRequestSchema.shape.client_updated_at.parse(syncedAt);
  if (!/^[a-f0-9]{64}$/.test(hash)) throw new Error("Invalid sync receipt hash");
  fm.tbpedia_reading_sync_at = timestamp;
  fm.tbpedia_reading_sync_hash = hash;
  return true;
}

// plugin/updater.ts
async function loadUpdaterMetadata(adapter, configDir) {
  const path = `${configDir.replace(/\/+$/, "")}/plugins/tbpedia-update/data.json`;
  try {
    let text;
    try {
      text = await adapter.read(path);
    } catch (error2) {
      if (typeof error2 === "object" && error2 !== null && "code" in error2 && error2.code === "ENOENT") return null;
      if (!await adapter.exists(path)) return null;
      throw error2;
    }
    if (text.length > 1024 * 1024) throw new Error("Updater settings exceed the read limit");
    return extractUpdaterMetadata(JSON.parse(text.replace(/^\uFEFF/, "")));
  } catch {
    throw new UiError(t("updaterReadError"));
  }
}
async function loadSavedUpdaterMetadata(loadData) {
  try {
    const saved = await loadData();
    if (typeof saved !== "object" || saved === null || Array.isArray(saved)) throw new Error("Invalid analytics settings");
    return readUpdaterMetadata(saved);
  } catch {
    throw new UiError(t("analyticsMetadataReadError"));
  }
}

// plugin/settings-migrations.ts
function migrateInterfaceLanguage(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return { data: value, changed: false };
  const source = value;
  const data = { ...source };
  const legacy = Object.hasOwn(source, "language");
  const canonical = Object.hasOwn(source, "interface_language");
  if (!canonical) data.interface_language = source.language ?? "system";
  delete data.language;
  return { data, changed: legacy || !canonical };
}

// plugin/scan-scope.ts
var SCAN_FOLDERS = [
  "01 \u6587\u96C6\u90E8",
  "02 \u958B\u793A\u90E8",
  "02 \u5F00\u793A\u90E8",
  "03 \u7D93\u85CF\u90E8",
  "03 \u7ECF\u85CF\u90E8",
  "04 \u980C\u8207\u6212\u5F8B",
  "04 \u9882\u4E0E\u6212\u5F8B",
  "05 \u50B3\u6CD5\u90E8",
  "05 \u4F20\u6CD5\u90E8",
  "06 \u5BC6\u6CD5\u5100\u8ECC",
  "06 \u5BC6\u6CD5\u4EEA\u8F68",
  "07 \u4F5B\u8A9E\u5178\u85CF",
  "07 \u4F5B\u8BED\u5178\u85CF",
  "08 \u5176\u4ED6\u985E\u5225",
  "08 \u5176\u4ED6\u7C7B\u522B",
  "09 \u84EE\u9999\u4E0A\u5E2B",
  "09 \u83B2\u9999\u4E0A\u5E08",
  "10 \u771F\u4F5B\u5B97"
];
var folders = new Set(SCAN_FOLDERS);
function inScanScope(path) {
  const [root, ...parts] = path.replace(/\\/g, "/").split("/");
  return parts.length > 0 && folders.has((root ?? "").replace(/[\u200B-\u200D\uFEFF]/g, "").trim());
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/unicode-segmenter/core.js
function decodeUnicodeData(data, cats, emit) {
  let len = data.length, i = 0, j = 0, p = -1;
  let read = () => {
    let n = 0, shift = 0, d;
    do {
      d = parseInt(data[i++], 36);
      n += (d & 15) << shift;
      shift += 4;
    } while (d & 16);
    return n;
  };
  while (i < len) {
    let from = p + 1 + read();
    emit(from, p = from + read(), cats ? parseInt(cats[j++], 36) : 0);
  }
}
function findUnicodeRangeCategory(cp, starts, ends) {
  let lo = 0, hi = starts.length - 1;
  while (lo <= hi) {
    let mid = lo + hi >>> 1, end = ends[mid];
    if (cp < starts[mid]) hi = mid - 1;
    else if (cp > end >>> 5) lo = mid + 1;
    else return end & 31;
  }
  return 0;
}

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/unicode-segmenter/_grapheme_data.js
var grapheme_data = (
  /** @type {UnicodeDataEncoding} */
  "090001000h1v5g2903000hl2v6jh16ng1s210111110o35aa10u2k1g10l6600152113h2010u1q1r5aq3890o13181214r22k3158q2n1000v100h1k20000001207030001160721k171001h1j11610332010010321210090411021c1c02100o301201412230u1130b100h1j116111420120411001100k11l10051001h1j11611142011000321210072411021d0g10r3000000132120090o200200g1j11f2012031213711271t1001o301001000001121371b1f0c101h1l2011001031212000080a1t1001m40400102101600i11t301006c7i601008b6p41r10101041h3d0004115a1j290p3q223000511010100g1501010302003172030c0010016000e0i6v50n40n5tl12ir33s12t11u11cj30100060700010a90t220000l71i20m7203010241000502rd101004k300000006101027050920g3t22bk1300616g209030207u18c1000t10003010501b2o20000102000004g37070101o921c000640602001mcv3rg20000001o16d0c0m1fg6g2h30m10q55f1vm11c0ma0p1a42nc0ne1a090q3314902021204020112030318250105bb1201110i1021i15101131502141b15120511011k1155132040202510201010603060a1f02040104210b1g3290e0e0kn11vs12j11j3040pp12t80g6v1qi2500c0r51ktl7319g21g51gh103040n11010040j51i3f01q1h1d0m27p1a0000cs13200523j200010301010100v140018a4q2501010101c08000i1f12601011g3012215110u1a0001015000pcq181000100011000iji5fvc0u91g5bhg20ie0l94lo6002115303121s12240la1tj23h44tj11t45m4ah33q700000l3ep2021a200t220301012040a0i320j2040007f00100r20c100g3208000011531000s520201036020t900207l1101n311000000321210090a12634b910201l22001051020120011020000e1i520701020000n10h5001050000010000010001re0010323010001r11i520701000001q6000000107l600000230004gg12080001lc62027111n1000411230000000000t820321030030r10090n205001380800501020n2050c0001mc00002000000nc006150000i5l1100600010001q753011160000i441111000000rl11019100000c1h201043102n10ltk1f006eoss2b0202gs94r36si2033ku101m373h50b1rqs4113sli1t22m1uh2435070726u13k92rr7m34h380e0m141egl561g1261114k60ga6nn10t33sv13uf1jf0207150qt16t66pr60n23k6bf1f0e1l29g71c1e029j1n30p11ea0k1028139m16rb2v621122i52213040tf1u3b51n17127c0232041d120819052c28220104060306l5g3l4572g130152cqdl2c3o37a5o27u11c32d9m2cu2191obo57eh9gg1tv3"
);
var grapheme_cats = "262122424333333393233393339333333333393393bf3b3b3b3b3f3f3bffff33b3bb33ff3f33b3b3333333bffff3b33bb33f33bffff33b3bb33ff3f33b3bbb333b3ff33b333f33b3b3b3b3333b3bf33b3bb39333b33b33b3b3b333b333333b3b33333f3b33b3ffb3f3fff3f3b33f35dc33333f3b3b3b33323333b3bb3b33b3fb3b3333b33333bff3b3f33bfb3b3ff3b3b3b3b3b333b333b3323e224423444444444444444444444444444444444444444444444444444444444444444444444444444444433334433333333b3b3bb33333b353bff3b3b3b3f3ff3b3b333bfff3f33333fb3bb3fb3b3bb33232333f333fff333333333b3b3333bb3b39393f3b3fbf33bb3b393b3b3b3333b33b33b3bbb33b33ffff3b3333bb3933b3b3b333b3b3b3b3b33b3b3b33b3b3b33b3b33b33b3b3b3fffff3bb39b9b3b33b3bf3f3b33f3b3f93b33b3b3bb33b33b3b3b3333393b3b3b33b39bffb3b332333b333dd3b3333233332333333333333333333333333333444444444444a4444444444444344444444444444444444444444444444444444444444";
var grapheme_pairs = "0001000000010010000000100000000000000000000000000001000000010018000100000001001000010101100101100000000000000000000100000001111000010000000110101001110111111111000100000021001000010000000100100001000000011010000100000001111000014000000100180001000000010010";

// ../../../../../../tbpedia-analytic/outputs/tbpedia-analytics/node_modules/unicode-segmenter/grapheme.js
var T0 = new Uint8Array(12448);
var T1 = new Uint8Array(1440);
var T2 = new Uint8Array(2816);
var TAIL_S;
var TAIL_E;
{
  let fill = (t2, lo, from, to, cat2) => {
    let end = to - lo + 1, len = t2.length;
    if (end > 0 && from - lo < len) {
      t2.fill(cat2, from > lo ? from - lo : 0, end > len ? len : end);
    }
  };
  let starts = new Uint32Array(320), ends = new Uint32Array(320), n = 0;
  decodeUnicodeData(grapheme_data, grapheme_cats, (from, to, cat2) => {
    fill(T0, 0, from, to, cat2);
    fill(T1, 42592, from, to, cat2);
    fill(T2, 126976, from, to, cat2);
    if (to >= 65040 && !(from >= 126976 && to <= 129791)) {
      starts[n] = from;
      ends[n++] = to << 5 | cat2;
    }
  });
  TAIL_S = starts.slice(0, n);
  TAIL_E = ends.slice(0, n);
}
function cat(cp) {
  if (cp < 12448) return T0[cp];
  if (cp < 42592) return cp === 12951 || cp === 12953 ? 4 : 0;
  if (cp < 44032) return T1[cp - 42592];
  if (cp < 55204) return (cp - 44032) % 28 ? 8 : 7;
  if (cp >= 126976 && cp < 129792) return T2[cp - 126976];
  if (cp >>> 4 === 4064) return 3;
  return catRare(cp);
}
function catRare(cp) {
  if (cp < 57344) {
    if (cp <= 55238) return cp >= 55216 ? 13 : 0;
    return cp >= 55243 && cp <= 55291 ? 12 : 0;
  }
  if (cp < 65024) return cp === 64286 ? 3 : 0;
  if (cp >= 917504) {
    if (cp > 921599) return 0;
    return cp >= 917536 && cp < 917632 || cp >= 917760 && cp < 918e3 ? 3 : 2;
  }
  return findUnicodeRangeCategory(cp, TAIL_S, TAIL_E);
}
var PAIR = Uint8Array.from(grapheme_pairs);
function isLinker(cp) {
  return cp === 2381 || cp === 2509 || cp === 2765 || cp === 2893 || cp === 3149 || cp === 3405 || cp === 4153 || cp === 6098 || cp === 6752 || cp === 6980 || cp === 7083 || cp === 43456 || cp === 43766 || cp === 68159 || cp === 69939 || cp === 70608 || cp === 71998 || cp === 72263 || cp === 72345 || cp === 73538;
}
function nextExtend(st, cp) {
  if (cp === 8204) return st & 21;
  if (st & 8 || isLinker(cp)) return st & 21 | 40;
  return st & 21 | 32;
}
function nextState(st, c, cp) {
  if (c === 3) return st & 32 ? nextExtend(st, cp) : st & 21;
  if (c === 4) return 17;
  if (c === 10) return st & 2 ^ 3;
  if (c === 14) return (st & 16) >> 2 | st & 41;
  if (c === 15) return 33;
  return 1;
}
function* graphemeSegments(input) {
  let len = input.length;
  if (len === 0) return;
  let cp = (
    /** @type {number} */
    input.codePointAt(0)
  );
  let cursor = cp > 65535 ? 2 : 1;
  let catBefore = cat(cp);
  let st = nextState(1, catBefore, cp);
  let index = 0;
  let hd = cp;
  let catBegin = catBefore;
  while (cursor < len) {
    cp = /** @type {number} */
    input.codePointAt(cursor);
    let catAfter = cat(cp);
    let boundary = !(st & PAIR[catBefore << 4 | catAfter]);
    st = nextState(st, catAfter, cp);
    if (boundary) {
      yield {
        segment: input.slice(index, cursor),
        index,
        input,
        _hd: hd,
        _catBegin: (
          /** @type {GraphemeCategoryNum} */
          catBegin === 15 ? 0 : catBegin
        ),
        _catEnd: (
          /** @type {GraphemeCategoryNum} */
          catBefore === 15 ? 0 : catBefore
        )
      };
      index = cursor;
      hd = cp;
      catBegin = catAfter;
    }
    cursor += cp > 65535 ? 2 : 1;
    catBefore = catAfter;
  }
  yield {
    segment: input.slice(index),
    index,
    input,
    _hd: hd,
    _catBegin: (
      /** @type {GraphemeCategoryNum} */
      catBegin === 15 ? 0 : catBegin
    ),
    _catEnd: (
      /** @type {GraphemeCategoryNum} */
      catBefore === 15 ? 0 : catBefore
    )
  };
}

// plugin/reading-reflection.ts
var REFLECTION_LIMIT = 300;
var characters = (value) => Array.from(graphemeSegments(value), (part) => part.segment);
var reflectionLength = (value) => characters(value).length;
function bindReflectionInput(input, update) {
  let composing = false;
  const refresh = (limit) => {
    const parts = characters(input.value);
    if (limit && parts.length > REFLECTION_LIMIT) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = parts.slice(0, REFLECTION_LIMIT).join("");
      input.setSelectionRange(Math.min(start, input.value.length), Math.min(end, input.value.length));
    }
    update(input.value, REFLECTION_LIMIT - reflectionLength(input.value));
  };
  input.addEventListener("compositionstart", () => {
    composing = true;
  });
  input.addEventListener("compositionend", () => {
    composing = false;
    refresh(true);
  });
  input.addEventListener("input", () => refresh(!composing));
  refresh(false);
}

// shared/api.ts
var DEFAULT_API = "https://cfanalytics.tbpedia.org";
var LEGACY_API = "https://tbpedia-analytics.tbspedia.workers.dev";
function migrateApiUrl(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return { data: value, changed: false };
  const source = value;
  if (typeof source.api_url !== "string" || source.api_url.replace(/\/$/, "") !== LEGACY_API) return { data: value, changed: false };
  const data = { ...source, api_url: DEFAULT_API };
  if (typeof source.receipts === "object" && source.receipts !== null && !Array.isArray(source.receipts)) {
    const receipts = { ...source.receipts };
    for (const key of Object.keys(receipts)) {
      if (!key.startsWith(LEGACY_API + "|")) continue;
      const replacement = DEFAULT_API + key.slice(LEGACY_API.length);
      if (!Object.hasOwn(receipts, replacement)) receipts[replacement] = receipts[key];
      delete receipts[key];
    }
    Object.assign(data, { receipts });
  }
  return { data, changed: true };
}

// plugin/main.ts
var dataSchema = object({ ...updaterMetadataSchema.shape, interface_language: string2().default("system"), api_url: string2().default(DEFAULT_API), reader_id: string2().nullable().default(null), profile: profileSchema.safeExtend({ nickname: string2().max(100) }).default(emptyProfile), profile_notice_version: string2().nullable().default(PROFILE_NOTICE_VERSION), reading_notice_version: string2().nullable().default(READING_NOTICE_VERSION), local_upload_enabled: boolean2().default(true), remember_token: boolean2().default(false), stored_token: string2().default(""), profile_uploaded_hash: string2().nullable().default(null) });
var meSchema = object({ reader_id: uuid2(), profile: profileSchema, cloud_sync_enabled: boolean2(), profile_consent_version: string2().nullable(), reading_consent_version: string2().nullable(), required_notices: object({ profile_version: string2(), reading_version: string2(), profile_text: string2(), reading_text: string2() }) });
var savedSchema = object({ content_id: contentIdSchema, status: literal("saved"), snapshot_hash: string2().regex(/^[a-f0-9]{64}$/), synced_at: iso_exports.datetime() });
var GatewayError = class extends Error {
  constructor(status, code) {
    super(backendMessage(code));
    this.status = status;
    this.code = code;
  }
  status;
  code;
};
function noticeSupported(version2, current) {
  return version2 === void 0 || version2 === current;
}
function record(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function noteFrontmatter(text) {
  const info = (0, import_obsidian.getFrontMatterInfo)(text);
  if (!info.exists) return {};
  const parsed = (0, import_obsidian.parseYaml)(info.frontmatter);
  if (parsed === null || parsed === void 0) return {};
  if (!record(parsed)) throw new UiError(t("\u6587\u7AE0\u5C6C\u6027\u5FC5\u9808\u662F YAML \u7269\u4EF6\u3002"));
  return parsed;
}
function message(error2) {
  if (error2 instanceof ZodError) return error2.issues.map((i) => `${FRONTMATTER_KEYS[i.path.at(-1)] ? t(FRONTMATTER_KEYS[i.path.at(-1)]) : fieldLabel(i.path)}: ${validationReason(i)}`).join("\n");
  return error2 instanceof GatewayError ? backendMessage(error2.code) : error2 instanceof UiError ? error2.message : t("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002");
}
var TbpediaAnalytics = class extends import_obsidian.Plugin {
  data = dataSchema.parse({});
  token = "";
  me = null;
  busy = false;
  persistTail = Promise.resolve();
  profileUpload;
  restoringReader = false;
  readingActions = /* @__PURE__ */ new Map();
  async onload() {
    const loaded = await this.loadData();
    const languageMigration = migrateInterfaceLanguage(loaded ?? {});
    const apiMigration = migrateApiUrl(languageMigration.data);
    const migration = { data: apiMigration.data, changed: languageMigration.changed || apiMigration.changed || record(apiMigration.data) && Object.hasOwn(apiMigration.data, "folders") };
    this.data = dataSchema.parse(migration.data);
    setLocale(this.data.interface_language, (0, import_obsidian.getLanguage)());
    this.token = this.data.remember_token ? this.data.stored_token : "";
    await this.migrateReceipts(migration.data);
    this.addSettingTab(new AnalyticsSettings(this.app, this));
    this.addRibbonIcon("book-open-check", t("recordReading"), () => {
      void this.openReading();
    });
    this.addRibbonIcon("cloud-upload", t("syncReadingCloud"), () => {
      void this.previewSync();
    });
    this.app.workspace.onLayoutReady(() => this.refreshReadingActions());
    this.registerEvent(this.app.workspace.on("layout-change", () => this.refreshReadingActions()));
    this.register(() => {
      for (const action of this.readingActions.values()) action.remove();
      this.readingActions.clear();
    });
    this.addCommand({ id: "open-reading", name: t("recordReading"), callback: () => {
      void this.openReading();
    } });
    this.addCommand({ id: "mark-reading", name: t("\u6A19\u8A18\u70BA\u5728\u8B80"), callback: () => {
      void this.quickStatus("READING");
    } });
    this.addCommand({ id: "mark-completed", name: t("\u6A19\u8A18\u70BA\u5DF2\u8B80"), callback: () => {
      void this.quickStatus("COMPLETED");
    } });
    this.addCommand({ id: "reread", name: t("\u958B\u59CB\u91CD\u8B80"), callback: () => {
      void this.quickStatus("READING");
    } });
    this.addCommand({ id: "sync-note", name: t("\u540C\u6B65\u76EE\u524D\u6587\u7AE0"), callback: () => {
      const f = this.app.workspace.getActiveFile();
      if (f) void this.runSync([f], true);
    } });
    this.addCommand({ id: "sync-changed", name: t("\u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF"), callback: () => {
      void this.previewSync();
    } });
    try {
      if (migration.changed) await this.persist();
      await this.refreshUpdaterMetadata();
    } catch (e) {
      new import_obsidian.Notice(message(e), 1e4);
    }
  }
  async refreshUpdaterMetadata() {
    const metadata = await loadUpdaterMetadata(this.app.vault.adapter, this.app.vault.configDir);
    if (metadata !== null && JSON.stringify(readUpdaterMetadata(this.data)) !== JSON.stringify(metadata)) {
      Object.assign(this.data, metadata);
      await this.persist();
    }
    return readUpdaterMetadata(this.data);
  }
  async metadataForSync() {
    const current = await this.refreshUpdaterMetadata();
    await this.persistTail;
    const saved = await loadSavedUpdaterMetadata(() => this.loadData());
    if (JSON.stringify(saved) !== JSON.stringify(current)) throw new UiError(t("analyticsMetadataReadError"));
    return saved;
  }
  async persist() {
    const snapshot = structuredClone({ ...this.data, stored_token: this.data.remember_token ? this.token : "" });
    const task = this.persistTail.then(() => this.saveData(snapshot));
    this.persistTail = task.catch(() => void 0);
    await task;
  }
  persistQuiet() {
    void this.persist().catch(() => new import_obsidian.Notice(t("\u5916\u639B\u8A2D\u5B9A\u7121\u6CD5\u5132\u5B58\uFF0C\u8ACB\u6AA2\u67E5 Vault \u7684\u5BEB\u5165\u6B0A\u9650\u3002")));
  }
  async api(path, method = "GET", body, authenticated = true, credential = this.token) {
    let url;
    try {
      url = new URL(this.data.api_url);
    } catch {
      throw new UiError(t("API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002"));
    }
    if (url.protocol !== "https:" && !(url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname))) throw new UiError(t("API \u5FC5\u9808\u4F7F\u7528 HTTPS\u3002"));
    if (url.username || url.password || url.search || url.hash || url.pathname !== "/") throw new UiError(t("API \u8ACB\u586B\u5BEB\u4E3B\u6A5F\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u6216\u67E5\u8A62\u53C3\u6578\u3002"));
    if (authenticated && !/^[A-Za-z0-9_-]{43}$/.test(credential) && !uuid2().safeParse(credential).success) throw new GatewayError(401, "UNAUTHENTICATED");
    let response;
    try {
      response = await (0, import_obsidian.requestUrl)({ url: new URL(path, url).toString(), method, headers: { ...authenticated ? { Authorization: `Bearer ${credential}` } : {}, "Content-Type": "application/json" }, body: body === void 0 ? void 0 : JSON.stringify(body), throw: false });
    } catch {
      throw new UiError(t("\u7121\u6CD5\u9023\u7DDA\uFF1B\u672C\u6A5F\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002\u8ACB\u7A0D\u5F8C\u624B\u52D5\u518D\u8A66\u3002"));
    }
    let value;
    try {
      value = response.json;
    } catch {
      throw new UiError(t("\u4F3A\u670D\u5668\u672A\u56DE\u50B3\u6709\u6548\u8CC7\u6599\u3002"));
    }
    if (response.status < 200 || response.status >= 300) {
      const error2 = record(value) && record(value.error) ? value.error : {};
      throw new GatewayError(response.status, typeof error2.code === "string" ? error2.code : "API_ERROR");
    }
    return value;
  }
  async connect() {
    const me = meSchema.parse(await this.api("/v1/me"));
    if (this.data.reader_id && this.data.reader_id !== me.reader_id) throw new UiError(t("\u6B64 Vault \u5DF2\u9023\u7D50\u53E6\u4E00\u4F4D\u8B80\u8005\u3002\u8ACB\u4F7F\u7528\u7368\u7ACB Vault\u3002"));
    this.data.reader_id = me.reader_id;
    this.me = me;
    await this.persist();
    new import_obsidian.Notice(t("connected", { name: me.profile.nickname }));
  }
  async testConnection() {
    const health = object({ application: literal("tbpedia-analytics"), configured: boolean2() }).parse(await this.api("/health", "GET", void 0, false));
    if (!health.configured) throw new GatewayError(503, "NOT_CONFIGURED");
    if (this.data.reader_id && this.token) {
      await this.connect();
      return;
    }
    const nickname = this.data.profile.nickname.trim();
    new import_obsidian.Notice(nickname ? t("connected", { name: nickname }) : t("connectionAvailable"));
  }
  async restoreExistingReader(readerId) {
    if (this.data.reader_id) throw new UiError(t("readerAlreadyLinked"));
    if (this.busy || this.profileUpload || this.restoringReader) throw new UiError(t("readerOperationBusy"));
    const id = uuid2().safeParse(readerId.trim().toLowerCase());
    if (!id.success) throw new UiError(t("readerIdInvalid"));
    const token = id.data;
    this.restoringReader = true;
    try {
      const me = meSchema.parse(await this.api("/v1/me", "GET", void 0, true, token));
      if (me.reader_id !== id.data) throw new UiError(t("readerRecoveryMismatch"));
      const previous = { data: this.data, token: this.token, me: this.me };
      this.data = { ...this.data, reader_id: me.reader_id, profile: { ...me.profile }, remember_token: true };
      this.token = token;
      this.me = me;
      try {
        await this.persist();
      } catch (error2) {
        this.data = previous.data;
        this.token = previous.token;
        this.me = previous.me;
        throw error2;
      }
      new import_obsidian.Notice(t("connected", { name: me.profile.nickname }));
    } finally {
      this.restoringReader = false;
    }
  }
  uploadProfile() {
    return this.profileUpload ??= this.performProfileUpload().finally(() => {
      this.profileUpload = void 0;
    });
  }
  async performProfileUpload() {
    if (this.restoringReader) throw new UiError(t("readerOperationBusy"));
    if (this.data.reader_id && !this.me) await this.connect();
    const required2 = this.me?.required_notices ?? { profile_version: PROFILE_NOTICE_VERSION, reading_version: READING_NOTICE_VERSION };
    if (!noticeSupported(required2.profile_version, PROFILE_NOTICE_VERSION) || !noticeSupported(required2.reading_version, READING_NOTICE_VERSION)) throw new UiError(t("noticeUnavailable"));
    if (this.data.profile_notice_version !== required2.profile_version) throw new UiError(t("\u8ACB\u5148\u95B1\u8B80\u4E26\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E\u3002"));
    if (this.data.local_upload_enabled && this.data.reading_notice_version !== required2.reading_version) throw new UiError(t("\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002"));
    const profile = completeProfileSchema.parse(this.data.profile);
    if (!this.token) {
      const bytes = crypto.getRandomValues(new Uint8Array(32));
      this.token = btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
    }
    this.data.remember_token = true;
    await this.persist();
    const client_metadata = collectClientMetadata(import_obsidian.Platform, this.manifest.version, typeof navigator === "undefined" ? void 0 : navigator.userAgent);
    await this.api("/v1/me", "PATCH", { schema_version: 1, profile, profile_notice_version: this.data.profile_notice_version, cloud_sync_enabled: this.data.local_upload_enabled, reading_notice_version: this.data.reading_notice_version, client_metadata });
    this.data.profile_uploaded_hash = JSON.stringify(profile);
    await this.persist();
    this.me = null;
    await this.connect();
    new import_obsidian.Notice(t("\u500B\u4EBA\u8CC7\u6599\u53CA\u96F2\u7AEF\u6B0A\u9650\u5DF2\u66F4\u65B0\u3002"));
  }
  refreshReadingActions() {
    const views = /* @__PURE__ */ new Set();
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (!(leaf.view instanceof import_obsidian.MarkdownView)) return;
      const view = leaf.view;
      views.add(view);
      if (!this.readingActions.has(view)) this.readingActions.set(view, view.addAction("book-open-check", t("recordReading"), () => {
        if (view.file) void this.openReading(view.file);
      }));
    });
    for (const [view, action] of this.readingActions) if (!views.has(view)) {
      action.remove();
      this.readingActions.delete(view);
    }
  }
  requireReadingContentId(fm) {
    if (!Object.hasOwn(fm, "tbpedia_content_id") || !contentIdSchema.safeParse(fm.tbpedia_content_id).success) throw new UiError(t("readingContentIdRequired"));
  }
  async readNote(file) {
    return noteFrontmatter(await this.app.vault.read(file));
  }
  async openReading(target) {
    try {
      const file = target ?? this.app.workspace.getActiveFile();
      if (!file || file.extension !== "md") throw new UiError(t("\u8ACB\u5148\u958B\u555F Markdown \u6587\u7AE0\u3002"));
      const fm = await this.readNote(file);
      this.requireReadingContentId(fm);
      new ReadingModal(this, file, fm).open();
    } catch (e) {
      new import_obsidian.Notice(message(e), 1e4);
    }
  }
  async saveReading(file, values, expected) {
    const normalized = readingSchema.parse(values);
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      const current = record(fm) ? fm : {};
      this.requireReadingContentId(current);
      if (trackedFingerprint(current) !== expected) throw new UiError(t("\u6587\u7AE0\u95B1\u8B80\u8CC7\u6599\u5DF2\u88AB\u5176\u4ED6\u64CD\u4F5C\u4FEE\u6539\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F\u8868\u55AE\u3002"));
      Object.assign(fm, toFrontmatter(normalized));
      fm.tbpedia_reading_updated_at = (/* @__PURE__ */ new Date()).toISOString();
    });
  }
  async quickStatus(status) {
    try {
      const file = this.app.workspace.getActiveFile();
      if (!file || file.extension !== "md") throw new UiError(t("\u8ACB\u5148\u958B\u555F\u6587\u7AE0\u3002"));
      const fm = await this.readNote(file);
      this.requireReadingContentId(fm);
      const values = fromFrontmatter(fm);
      const next = statusAction(values, status);
      if (JSON.stringify(next) === JSON.stringify(values)) {
        new import_obsidian.Notice(t("\u6B64\u6587\u7AE0\u5DF2\u662F\u6B64\u95B1\u8B80\u72C0\u614B\uFF1B\u5982\u8981\u518D\u6B21\u5B8C\u6210\uFF0C\u8ACB\u5148\u958B\u59CB\u91CD\u8B80\u3002"));
        return;
      }
      await this.saveReading(file, next, trackedFingerprint(fm));
      new import_obsidian.Notice(t("\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002"));
    } catch (e) {
      new import_obsidian.Notice(message(e), 1e4);
    }
  }
  inScope(path) {
    return inScanScope(path);
  }
  async scan() {
    const result = [];
    for (const file of this.app.vault.getMarkdownFiles()) {
      if (!this.inScope(file.path)) continue;
      const text = await this.app.vault.read(file);
      if (!text.includes("tbpedia_content_id:")) continue;
      try {
        const fm = noteFrontmatter(text);
        const id = contentIdSchema.parse(fm.tbpedia_content_id);
        result.push({ file, fm, id });
      } catch (e) {
        result.push({ file, error: message(e) });
      }
    }
    return result;
  }
  async migrateReceipts(loaded) {
    if (!record(loaded) || !Object.hasOwn(loaded, "receipts")) return;
    const receipts = record(loaded.receipts) ? loaded.receipts : {};
    const prefix = `${this.data.api_url.replace(/\/$/, "")}|${this.data.reader_id ?? "local"}|`;
    if (Object.keys(receipts).length) {
      const notes = await this.scan();
      const counts = /* @__PURE__ */ new Map();
      for (const note of notes) if (note.id) counts.set(note.id, (counts.get(note.id) ?? 0) + 1);
      for (const note of notes) {
        if (!note.id || !note.fm || counts.get(note.id) !== 1 || note.fm.tbpedia_reading_sync_hash !== void 0) continue;
        const receipt = receipts[prefix + note.id];
        if (!record(receipt) || typeof receipt.hash !== "string" || !/^[a-f0-9]{64}$/.test(receipt.hash) || !iso_exports.datetime().safeParse(receipt.synced_at).success) continue;
        const fingerprint = trackedFingerprint(note.fm);
        const updatedAt = readingUpdatedAt(note.fm);
        await this.app.fileManager.processFrontMatter(note.file, (fm) => {
          if (fm.tbpedia_reading_sync_hash === void 0 && fm.tbpedia_content_id === note.id) {
            if (!markReadingSynced(fm, fingerprint, updatedAt, receipt.synced_at, receipt.hash)) throw new Error("Article changed during receipt migration");
          }
        });
      }
    }
    await this.persist();
  }
  async pendingNotes() {
    const updaterMetadata = await this.metadataForSync();
    const notes = (await this.scan()).filter((n) => this.inScope(n.file.path));
    const pending = [];
    let unchanged = 0, invalid = 0;
    for (const note of notes) {
      try {
        if (!note.id || !note.fm) throw new UiError(note.error);
        if (!Object.hasOwn(note.fm, "tbpedia_reading_updated_at")) continue;
        readingUpdatedAt(note.fm);
        const hash = await snapshotHash(note.id, fromFrontmatter(note.fm), updaterMetadata);
        if (note.fm.tbpedia_reading_sync_hash === hash) unchanged++;
        else pending.push(note.file);
      } catch {
        invalid++;
      }
    }
    return { pending, unchanged, invalid };
  }
  async previewSync() {
    try {
      if (this.busy) throw new UiError(t("\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002"));
      const result = await this.pendingNotes();
      new ConfirmModal(this.app, t("\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599"), `${t("preview", { pending: result.pending.length, unchanged: result.unchanged, invalid: result.invalid })} ${t("updaterSyncNotice")}`, () => this.runSync(result.pending, false), result.pending).open();
    } catch (e) {
      new import_obsidian.Notice(message(e), 1e4);
    }
  }
  async runSync(files, force) {
    if (this.restoringReader) {
      new import_obsidian.Notice(t("readerOperationBusy"));
      return;
    }
    if (this.busy) {
      new import_obsidian.Notice(t("\u540C\u6B65\u6B63\u5728\u9032\u884C\u3002"));
      return;
    }
    this.busy = true;
    let saved = 0, unchanged = 0, invalid = 0, attempted = 0;
    const issues = [];
    try {
      if (!this.data.local_upload_enabled) throw new UiError(t("\u96F2\u7AEF\u4E0A\u50B3\u5DF2\u505C\u7528\u3002\u95B1\u8B80\u8CC7\u6599\u4ECD\u4FDD\u5B58\u5728\u672C\u6A5F\u3002"));
      await this.connect();
      if (!noticeSupported(this.me?.required_notices.profile_version, PROFILE_NOTICE_VERSION) || !noticeSupported(this.me?.required_notices.reading_version, READING_NOTICE_VERSION)) throw new UiError(t("noticeUnavailable"));
      if (!this.me?.cloud_sync_enabled) throw new UiError(t("\u8ACB\u5148\u5728\u8A2D\u5B9A\u4E2D\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\uFF0C\u4EE5\u5957\u7528\u96F2\u7AEF\u6B0A\u9650\u3002"));
      const uploadTarget = this.data.api_url;
      const uploadReader = this.data.reader_id;
      const updaterMetadata = await this.metadataForSync();
      const all = await this.scan();
      const counts = /* @__PURE__ */ new Map();
      for (const n of all) if (n.id) counts.set(n.id, (counts.get(n.id) ?? 0) + 1);
      for (const file of files) {
        if (!this.data.local_upload_enabled || this.data.api_url !== uploadTarget || this.data.reader_id !== uploadReader) {
          issues.push(t("\u4E0A\u50B3\u6B0A\u9650\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\uFF1B\u5DF2\u505C\u6B62\u5F8C\u7E8C\u4E0A\u50B3\u3002"));
          break;
        }
        if (JSON.stringify(await this.metadataForSync()) !== JSON.stringify(updaterMetadata)) {
          issues.push(t("updaterChanged"));
          break;
        }
        let id, values, hash, clientUpdatedAt, fingerprint, syncedHash;
        try {
          const fm = await this.readNote(file);
          syncedHash = fm.tbpedia_reading_sync_hash;
          if (!Object.hasOwn(fm, "tbpedia_reading_updated_at")) {
            unchanged++;
            attempted++;
            continue;
          }
          clientUpdatedAt = readingUpdatedAt(fm);
          fingerprint = trackedFingerprint(fm);
          id = contentIdSchema.parse(fm.tbpedia_content_id);
          if (counts.get(id) !== 1) throw new UiError(t("Vault \u4E2D\u6709\u91CD\u8907\u5167\u5BB9\u7DE8\u865F\uFF0C\u8ACB\u5148\u4FEE\u6B63\u3002"));
          values = fromFrontmatter(fm);
          hash = await snapshotHash(id, values, updaterMetadata);
        } catch (e) {
          invalid++;
          attempted++;
          issues.push(`${file.basename}: ${message(e)}`);
          continue;
        }
        if (!force && syncedHash === hash) {
          unchanged++;
          attempted++;
          continue;
        }
        try {
          const result = savedSchema.parse(await this.api("/v1/reading/sync", "POST", { schema_version: 1, content_id: id, client_updated_at: clientUpdatedAt, values, updater_metadata: updaterMetadata }));
          if (result.content_id !== id || result.snapshot_hash !== hash) throw new UiError(t("\u4F3A\u670D\u5668\u78BA\u8A8D\u8207\u9001\u51FA\u7684\u7248\u672C\u4E0D\u540C\uFF1B\u5C1A\u672A\u6A19\u8A18\u5B8C\u6210\u3002"));
          let marked = false;
          try {
            await this.app.fileManager.processFrontMatter(file, (fm) => {
              marked = markReadingSynced(fm, fingerprint, clientUpdatedAt, result.synced_at, hash);
            });
          } catch {
            throw new UiError(t("\u96F2\u7AEF\u5DF2\u5132\u5B58\uFF0C\u4F46\u672C\u6A5F\u540C\u6B65\u8A18\u9304\u7121\u6CD5\u5132\u5B58\uFF1B\u4E0B\u6B21\u53EF\u4EE5\u91CD\u65B0\u540C\u6B65\u3002"));
          }
          if (!marked) issues.push(`${file.basename}: ${t("changedDuringUpload")}`);
          saved++;
          attempted++;
          if (await snapshotHash(id, fromFrontmatter(await this.readNote(file)), await this.metadataForSync()) !== hash) issues.push(`${file.basename}: ${t("changedDuringUpload")}`);
        } catch (e) {
          issues.push(`${file.basename}: ${message(e)}`);
          break;
        }
      }
      const summary = t("summary", { saved, unchanged, invalid, remaining: files.length - attempted });
      new ResultModal(this.app, summary, issues).open();
    } catch (e) {
      new import_obsidian.Notice(message(e), 12e3);
    } finally {
      this.busy = false;
    }
  }
};
var ConfirmModal = class extends import_obsidian.Modal {
  constructor(app, titleText, detail, action, pendingFiles = []) {
    super(app);
    this.titleText = titleText;
    this.detail = detail;
    this.action = action;
    this.pendingFiles = pendingFiles;
  }
  titleText;
  detail;
  action;
  pendingFiles;
  onOpen() {
    this.contentEl.lang = intlLocale();
    this.contentEl.createEl("h2", { text: this.titleText });
    this.contentEl.createEl("p", { text: this.detail });
    if (this.pendingFiles.length) {
      const list = this.contentEl.createEl("ol", { cls: "tbpa-pending-articles", attr: { tabindex: "0" } });
      for (const file of this.pendingFiles) {
        const item = list.createEl("li");
        item.createEl("div", { text: file.basename });
        item.createEl("small", { text: file.path, cls: "setting-item-description" });
      }
    }
    new import_obsidian.Setting(this.contentEl).addButton((b) => b.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())).addButton((b) => b.setCta().setButtonText(t("\u958B\u59CB\u4E0A\u50B3")).onClick(() => {
      this.close();
      void this.action();
    }));
  }
};
var ResultModal = class extends import_obsidian.Modal {
  constructor(app, summary, issues) {
    super(app);
    this.summary = summary;
    this.issues = issues;
  }
  summary;
  issues;
  onOpen() {
    this.contentEl.lang = intlLocale();
    this.contentEl.createEl("h2", { text: t("\u540C\u6B65\u7D50\u679C") });
    this.contentEl.createEl("p", { text: this.summary });
    for (const issue2 of this.issues) this.contentEl.createEl("p", { text: issue2, cls: "tbpa-error" });
    new import_obsidian.Setting(this.contentEl).addButton((b) => b.setButtonText(t("\u95DC\u9589")).onClick(() => this.close()));
  }
};
var ReadingModal = class extends import_obsidian.Modal {
  constructor(plugin, file, fm) {
    super(plugin.app);
    this.plugin = plugin;
    this.file = file;
    this.values = fromFrontmatter(fm);
    this.expected = trackedFingerprint(fm);
  }
  plugin;
  file;
  values;
  expected;
  saving = false;
  countEdited = false;
  explicitDates = /* @__PURE__ */ new Set();
  onOpen() {
    this.modalEl.addClass("tbpa-reading-modal");
    this.render();
  }
  render() {
    const el = this.contentEl;
    el.empty();
    el.lang = intlLocale();
    el.addClass("tbpa-reading");
    el.createEl("h2", { text: this.file.basename });
    el.createEl("p", { text: t("\u95B1\u8B80\u8CC7\u6599\u5148\u5132\u5B58\u65BC\u672C\u6A5F\u3002\u53EA\u6709\u624B\u52D5\u540C\u6B65\u624D\u6703\u4E0A\u50B3\u3002"), cls: "setting-item-description" });
    const error2 = el.createDiv({ cls: "tbpa-error" });
    new import_obsidian.Setting(el).setName(t("\u8A08\u5283\u95B1\u8B80")).addToggle((t2) => t2.setValue(this.values.planned_reading).onChange((v) => {
      this.values.planned_reading = v;
    }));
    new import_obsidian.Setting(el).setName(t("\u95B1\u8B80\u72C0\u614B")).addDropdown((d) => {
      d.addOptions(labels(STATUS_LABELS)).setValue(this.values.reading_status).onChange((v) => {
        const before = this.values;
        const status = readingSchema.shape.reading_status.parse(v);
        const next = statusAction(before, status);
        if (this.countEdited) next.reading_count = before.reading_count;
        for (const key of this.explicitDates) Object.assign(next, { [key]: before[key] });
        this.values = next;
        this.render();
      });
    });
    new import_obsidian.Setting(el).setName(t("\u95B1\u8B80\u5C64\u6B21")).addDropdown((d) => d.addOption("", t("\u672A\u8A2D\u5B9A")).addOptions(labels(DEPTH_LABELS)).setValue(this.values.reading_depth ?? "").onChange((v) => {
      this.values.reading_depth = v ? readingSchema.shape.reading_depth.parse(v) : null;
    }));
    new import_obsidian.Setting(el).setName(t("\u95B1\u8B80\u6B21\u6578")).setDesc(t("\u5DF2\u5B8C\u6210\u7684\u95B1\u8B80\u6B21\u6578\u3002\u958B\u59CB\u91CD\u8B80\u4E0D\u6703\u589E\u52A0\uFF1B\u5B8C\u6210\u6642\u589E\u52A0\u4E00\u6B21\u3002")).addText((t2) => {
      t2.inputEl.type = "number";
      t2.inputEl.min = "0";
      t2.inputEl.step = "1";
      t2.setValue(String(this.values.reading_count)).onChange((v) => {
        this.values.reading_count = Number(v);
        this.countEdited = true;
      });
    });
    el.createEl("h3", { text: t("\u95B1\u8B80\u65E5\u671F") });
    for (const key of ["want_to_read_date", "reading_start_date", "completed_date", "not_reading_date", "abandoned_date"]) new import_obsidian.Setting(el).setName(t(FRONTMATTER_KEYS[key])).addText((t2) => {
      t2.inputEl.type = "date";
      t2.setValue(this.values[key] ?? "").onChange((v) => {
        this.values[key] = v || null;
        this.explicitDates.add(key);
      });
    });
    el.createEl("h3", { text: t("\u611F\u60F3\u8207\u8A55\u50F9") });
    const reflection = new import_obsidian.Setting(el).setName(t("\u95B1\u8B80\u611F\u60F3"));
    reflection.controlEl.addClass("tbpa-reflection-control");
    reflection.addTextArea((t2) => {
      t2.setValue(this.values.reading_reflection ?? "");
      const counter = reflection.controlEl.createEl("small", { cls: "setting-item-description tbpa-reflection-counter", attr: { id: "tbpa-reflection-counter", "aria-live": "polite", "aria-atomic": "true" } });
      t2.inputEl.setAttribute("aria-label", t("\u95B1\u8B80\u611F\u60F3"));
      t2.inputEl.setAttribute("aria-describedby", "tbpa-reflection-counter");
      bindReflectionInput(t2.inputEl, (value, remaining) => {
        this.values.reading_reflection = value || null;
        counter.setText(remaining >= 0 ? t("reflectionRemaining", { remaining, limit: REFLECTION_LIMIT }) : t("reflectionTooLong", { limit: REFLECTION_LIMIT }));
        t2.inputEl.setAttribute("aria-invalid", String(remaining < 0));
      });
    });
    new import_obsidian.Setting(el).setName(t("\u6211\u7684\u95B1\u8B80\u63A8\u85A6")).addDropdown((d) => d.addOption("", t("\u672A\u8A2D\u5B9A")).addOptions(labels(RECOMMENDATION_LABELS)).setValue(this.values.my_recommendation ?? "").onChange((v) => {
      this.values.my_recommendation = v ? readingSchema.shape.my_recommendation.parse(v) : null;
    }));
    new import_obsidian.Setting(el).setName(t("\u6211\u7684\u8A55\u5206")).addDropdown((d) => {
      d.addOption("", t("\u672A\u8A55\u5206"));
      for (let n = 1; n <= 5; n++) d.addOption(String(n), `${number3(n)} / ${number3(5)}`);
      d.setValue(this.values.my_rating === null ? "" : String(this.values.my_rating)).onChange((v) => {
        this.values.my_rating = v ? Number(v) : null;
      });
    });
    el.createEl("h3", { text: t("\u6211\u7684\u5206\u985E") });
    for (const key of ["my_keywords", "my_subtopics"]) new import_obsidian.Setting(el).setName(t(FRONTMATTER_KEYS[key])).setDesc(t("\u6BCF\u884C\u4E00\u9805\u3002")).addTextArea((t2) => t2.setValue(this.values[key].join("\n")).onChange((v) => {
      this.values[key] = v.split("\n").map((s) => s.trim()).filter(Boolean);
    }));
    const readerTypes = el.createEl("fieldset", { cls: "tbpa-reader-types" });
    readerTypes.createEl("legend", { text: t("\u6211\u7684\u8B80\u8005\u985E\u578B\uFF1A\u6B64\u6587\u7AE0\u9069\u5408\u54EA\u4E9B\u8B80\u8005\uFF1F") });
    for (const [code, label] of Object.entries(labels(READER_LABELS))) {
      const parsed = readingSchema.shape.my_reader_types.parse([code])[0];
      const option = readerTypes.createEl("label", { cls: "tbpa-reader-type-option" });
      const checkbox = option.createEl("input", { type: "checkbox" });
      checkbox.checked = this.values.my_reader_types.includes(parsed);
      option.createSpan({ text: label });
      checkbox.addEventListener("change", () => {
        this.values.my_reader_types = checkbox.checked ? [.../* @__PURE__ */ new Set([...this.values.my_reader_types, parsed])] : this.values.my_reader_types.filter((c) => c !== parsed);
      });
    }
    for (const key of ["my_buddhist_level", "my_practice_level"]) new import_obsidian.Setting(el).setName(t(FRONTMATTER_KEYS[key])).addDropdown((d) => {
      d.addOption("", t("\u672A\u8A2D\u5B9A"));
      for (let n = 0; n <= 3; n++) d.addOption(String(n), number3(n));
      d.setValue(this.values[key] === null ? "" : String(this.values[key])).onChange((v) => {
        this.values[key] = v ? Number(v) : null;
      });
    });
    const save = async (sync) => {
      if (this.saving) return;
      this.saving = true;
      try {
        if (reflectionLength(this.values.reading_reflection ?? "") > REFLECTION_LIMIT) throw new UiError(t("reflectionTooLong", { limit: REFLECTION_LIMIT }));
        const values = readingSchema.parse(this.values);
        await this.plugin.saveReading(this.file, values, this.expected);
        this.close();
        new import_obsidian.Notice(t("\u95B1\u8B80\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002"));
        if (sync) await this.plugin.runSync([this.file], true);
      } catch (e) {
        error2.setText(message(e));
      } finally {
        this.saving = false;
      }
    };
    new import_obsidian.Setting(el).addButton((b) => b.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())).addButton((b) => b.setButtonText(t("\u5132\u5B58\u4E26\u540C\u6B65")).setDisabled(!this.plugin.data.local_upload_enabled).onClick(() => {
      void save(true);
    })).addButton((b) => b.setCta().setButtonText(t("\u5132\u5B58\u65BC\u672C\u6A5F")).onClick(() => {
      void save(false);
    }));
  }
};
var AnalyticsSettings = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  plugin;
  existingReader = false;
  readerIdInput = "";
  maskReaderId = () => {
  };
  hide() {
    this.maskReaderId();
  }
  display() {
    this.maskReaderId();
    this.maskReaderId = () => {
    };
    setLocale(this.plugin.data.interface_language, (0, import_obsidian.getLanguage)());
    const el = this.containerEl;
    el.empty();
    el.addClass("tbpa-settings");
    el.lang = intlLocale();
    el.createEl("h2", { text: "True Buddha Pedia Analytics" });
    const p = this.plugin;
    new import_obsidian.Setting(el).setName(t("language")).setDesc(`${t("languageHelp")} ${t("followSystemHelp")}`).addDropdown((d) => d.addOption("system", t("followSystem")).addOptions(LANGUAGES).setValue(languagePreference(p.data.interface_language)).onChange((v) => {
      p.data.interface_language = languagePreference(v);
      setLocale(p.data.interface_language, (0, import_obsidian.getLanguage)());
      p.persistQuiet();
      this.display();
    }));
    const run = (action) => {
      void action().then(() => this.display()).catch((e) => new import_obsidian.Notice(message(e), 12e3));
    };
    el.createEl("h3", { text: t("\u9023\u7DDA") });
    new import_obsidian.Setting(el).addButton((b) => b.setButtonText(t("\u6E2C\u8A66\u9023\u7DDA")).onClick(() => run(() => p.testConnection())));
    el.createEl("h3", { text: t("\u8B80\u8005\u500B\u4EBA\u8CC7\u6599") });
    if (p.data.reader_id) {
      let revealed = false;
      let updateValue = () => {
      };
      new import_obsidian.Setting(el).setName(t("readerId")).setDesc(t("readerIdHelp")).addText((t2) => {
        t2.inputEl.readOnly = true;
        t2.inputEl.autocomplete = "off";
        t2.inputEl.spellcheck = false;
        t2.inputEl.setAttribute("aria-label", t("readerId"));
        updateValue = () => {
          t2.setValue(revealed ? p.data.reader_id : "*".repeat(36));
        };
        updateValue();
      }).addButton((b) => {
        const update = () => {
          updateValue();
          b.setButtonText(t(revealed ? "hideReaderId" : "showReaderId"));
          b.buttonEl.setAttribute("aria-pressed", String(revealed));
        };
        this.maskReaderId = () => {
          revealed = false;
          update();
        };
        b.onClick(() => {
          revealed = !revealed;
          update();
        });
        update();
      });
    } else {
      new import_obsidian.Setting(el).setName(t("readerSetup")).addDropdown((d) => d.addOption("new", t("newReader")).addOption("existing", t("existingReader")).setValue(this.existingReader ? "existing" : "new").onChange((value) => {
        this.existingReader = value === "existing";
        this.display();
      }));
      if (this.existingReader) {
        new import_obsidian.Setting(el).setName(t("readerId")).addText((t2) => t2.setValue(this.readerIdInput).onChange((value) => {
          this.readerIdInput = value;
        }));
        new import_obsidian.Setting(el).addButton((b) => b.setCta().setButtonText(t("connectExistingReader")).onClick(() => run(async () => {
          await p.restoreExistingReader(this.readerIdInput);
        })));
        return;
      }
      el.createEl("p", { text: t("newReaderHelp"), cls: "setting-item-description" });
    }
    const profile = p.data.profile;
    el.createEl("p", { text: t("profileRequiredHelp"), cls: "setting-item-description" });
    const requiredLabel = (field) => `${t(`field.${field}`)} ${t("requiredSuffix")}`;
    for (const [key, label] of [["nickname", requiredLabel("nickname")], ["email", requiredLabel("email")], ["organisation", requiredLabel("organisation")]]) new import_obsidian.Setting(el).setName(label).addText((t2) => {
      t2.inputEl.required = true;
      if (key === "email") t2.inputEl.type = "email";
      t2.setValue(profile[key] ?? "").onChange((v) => {
        if (key === "nickname") profile.nickname = v;
        else profile[key] = v.trim() || null;
      });
    });
    new import_obsidian.Setting(el).setName(requiredLabel("birth_year")).addText((t2) => {
      t2.inputEl.required = true;
      t2.inputEl.type = "number";
      t2.inputEl.min = "1900";
      t2.inputEl.max = String((/* @__PURE__ */ new Date()).getFullYear());
      t2.setValue(profile.birth_year === null ? "" : String(profile.birth_year)).onChange((v) => {
        profile.birth_year = v === "" ? null : Number(v);
      });
    });
    new import_obsidian.Setting(el).setName(requiredLabel("birth_month")).addDropdown((d) => {
      d.selectEl.required = true;
      d.addOption("", t("\u672A\u63D0\u4F9B"));
      for (let m = 1; m <= 12; m++) d.addOption(String(m), monthName(m));
      d.setValue(profile.birth_month === null ? "" : String(profile.birth_month)).onChange((v) => {
        profile.birth_month = v ? Number(v) : null;
      });
    });
    new import_obsidian.Setting(el).setName(requiredLabel("sex")).addDropdown((d) => {
      d.selectEl.required = true;
      d.addOptions(labels(SEX_LABELS)).setValue(profile.sex).onChange((v) => {
        profile.sex = profileSchema.shape.sex.parse(v);
      });
    });
    new import_obsidian.Setting(el).setName(requiredLabel("country_code")).addDropdown((d) => {
      d.selectEl.required = true;
      d.addOption("", t("\u672A\u63D0\u4F9B"));
      for (const code of [...COUNTRY_CODES].sort((a, b) => regionName(a).localeCompare(regionName(b), intlLocale()))) d.addOption(code, `${regionName(code)} (${code})`);
      d.setValue(profile.country_code ?? "").onChange((v) => {
        profile.country_code = v || null;
      });
    });
    const types = el.createEl("fieldset", { cls: "tbpa-reader-types" });
    types.createEl("legend", { text: requiredLabel("reader_type") });
    for (const [code, label] of Object.entries(labels(READER_LABELS))) {
      const selected = profileSchema.shape.reader_type.parse(code)[0];
      const option = types.createEl("label", { cls: "tbpa-reader-type-option" });
      const checkbox = option.createEl("input", { type: "checkbox" });
      checkbox.checked = profile.reader_type?.includes(selected) ?? false;
      option.createSpan({ text: label });
      const updateValidity = () => {
        for (const input of types.querySelectorAll("input")) input.setCustomValidity(profile.reader_type?.length ? "" : t("readerTypesRequired"));
      };
      checkbox.addEventListener("change", () => {
        const values = profile.reader_type ?? [];
        profile.reader_type = profileSchema.shape.reader_type.parse(checkbox.checked ? [...values, selected] : values.filter((value) => value !== selected));
        updateValidity();
      });
      updateValidity();
    }
    const required2 = p.me?.required_notices;
    el.createEl("p", { text: noticeSupported(required2?.profile_version, PROFILE_NOTICE_VERSION) ? t("profileNotice") : t("noticeUnavailable"), cls: "tbpa-notice" });
    const profileVersion = required2?.profile_version ?? PROFILE_NOTICE_VERSION;
    const profileSupported = noticeSupported(profileVersion, PROFILE_NOTICE_VERSION);
    new import_obsidian.Setting(el).setName(t("\u6211\u540C\u610F\u500B\u4EBA\u8CC7\u6599\u8AAA\u660E")).addToggle((t2) => t2.setDisabled(!profileSupported).setValue(profileSupported && p.data.profile_notice_version === profileVersion).onChange((v) => {
      p.data.profile_notice_version = v ? profileVersion : null;
    }));
    el.createEl("h3", { text: t("\u624B\u52D5\u4E0A\u50B3\u6B0A\u9650") });
    el.createEl("p", { text: noticeSupported(required2?.reading_version, READING_NOTICE_VERSION) ? t("readingNotice") : t("noticeUnavailable"), cls: "tbpa-notice" });
    const readingVersion = required2?.reading_version ?? READING_NOTICE_VERSION;
    const readingSupported = noticeSupported(readingVersion, READING_NOTICE_VERSION);
    new import_obsidian.Setting(el).setName(t("\u6211\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E")).addToggle((t2) => t2.setDisabled(!readingSupported).setValue(readingSupported && p.data.reading_notice_version === readingVersion).onChange((v) => {
      p.data.reading_notice_version = v ? readingVersion : null;
      if (!v) p.data.local_upload_enabled = false;
      p.persistQuiet();
    }));
    new import_obsidian.Setting(el).setName(t("\u5141\u8A31\u624B\u52D5\u4E0A\u50B3\u95B1\u8B80\u8CC7\u6599")).setDesc(t("\u95DC\u9589\u6703\u7ACB\u5373\u505C\u6B62\u672C\u6A5F\u4E0A\u50B3\uFF1B\u6309\u4E0B\u65B9\u300C\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599\u300D\u624D\u5957\u7528\u96F2\u7AEF\u8A2D\u5B9A\u3002")).addToggle((t2) => t2.setValue(p.data.local_upload_enabled).onChange((v) => {
      if (v && p.data.reading_notice_version !== readingVersion) {
        t2.setValue(false);
        new import_obsidian.Notice(t("\u8ACB\u5148\u540C\u610F\u95B1\u8B80\u8CC7\u6599\u4E0A\u50B3\u8AAA\u660E\u3002"));
        return;
      }
      p.data.local_upload_enabled = v;
      p.persistQuiet();
    }));
    if (!p.me || p.me.cloud_sync_enabled !== p.data.local_upload_enabled) el.createEl("p", { text: t("\u96F2\u7AEF\u6B0A\u9650\u5C1A\u5F85\u78BA\u8A8D\u6216\u5957\u7528\u3002"), cls: "setting-item-description" });
    new import_obsidian.Setting(el).addButton((b) => b.setButtonText(t("\u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u65BC\u672C\u6A5F")).onClick(() => run(async () => {
      completeProfileSchema.parse(p.data.profile);
      await p.persist();
      new import_obsidian.Notice(t("\u500B\u4EBA\u8CC7\u6599\u5DF2\u5132\u5B58\u65BC\u672C\u6A5F\u3002"));
    }))).addButton((b) => b.setCta().setButtonText(t("\u5132\u5B58\u4E26\u4E0A\u50B3\u500B\u4EBA\u8CC7\u6599")).onClick(() => run(() => p.uploadProfile())));
    new import_obsidian.Setting(el).setName(t("\u624B\u52D5\u540C\u6B65")).addButton((b) => b.setButtonText(t("\u540C\u6B65\u5DF2\u8B8A\u66F4\u95B1\u8B80\u8CC7\u6599\u81F3\u96F2\u7AEF")).onClick(() => {
      void p.previewSync();
    }));
  }
};
