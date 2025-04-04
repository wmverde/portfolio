var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/core/index.js + 71 modules ***!
  \****************************************/

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// UNUSED EXPORTS: Anim, AnimKey, CglContext, Geometry, Link, Mesh, Op, Patch, PatchVariable, Port, Shader, Texture, Timer, Uniform, extendJs

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/common.js
var common_namespaceObject = {};
__webpack_require__.r(common_namespaceObject);
__webpack_require__.d(common_namespaceObject, {
  ARRAY_TYPE: () => (ARRAY_TYPE),
  EPSILON: () => (EPSILON),
  RANDOM: () => (RANDOM),
  equals: () => (equals),
  setMatrixArrayType: () => (setMatrixArrayType),
  toRadian: () => (toRadian)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2.js
var mat2_namespaceObject = {};
__webpack_require__.r(mat2_namespaceObject);
__webpack_require__.d(mat2_namespaceObject, {
  LDU: () => (LDU),
  add: () => (add),
  adjoint: () => (adjoint),
  clone: () => (clone),
  copy: () => (copy),
  create: () => (create),
  determinant: () => (determinant),
  equals: () => (mat2_equals),
  exactEquals: () => (exactEquals),
  frob: () => (frob),
  fromRotation: () => (fromRotation),
  fromScaling: () => (fromScaling),
  fromValues: () => (fromValues),
  identity: () => (identity),
  invert: () => (invert),
  mul: () => (mul),
  multiply: () => (multiply),
  multiplyScalar: () => (multiplyScalar),
  multiplyScalarAndAdd: () => (multiplyScalarAndAdd),
  rotate: () => (rotate),
  scale: () => (scale),
  set: () => (set),
  str: () => (str),
  sub: () => (sub),
  subtract: () => (subtract),
  transpose: () => (transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2d.js
var mat2d_namespaceObject = {};
__webpack_require__.r(mat2d_namespaceObject);
__webpack_require__.d(mat2d_namespaceObject, {
  add: () => (mat2d_add),
  clone: () => (mat2d_clone),
  copy: () => (mat2d_copy),
  create: () => (mat2d_create),
  determinant: () => (mat2d_determinant),
  equals: () => (mat2d_equals),
  exactEquals: () => (mat2d_exactEquals),
  frob: () => (mat2d_frob),
  fromRotation: () => (mat2d_fromRotation),
  fromScaling: () => (mat2d_fromScaling),
  fromTranslation: () => (fromTranslation),
  fromValues: () => (mat2d_fromValues),
  identity: () => (mat2d_identity),
  invert: () => (mat2d_invert),
  mul: () => (mat2d_mul),
  multiply: () => (mat2d_multiply),
  multiplyScalar: () => (mat2d_multiplyScalar),
  multiplyScalarAndAdd: () => (mat2d_multiplyScalarAndAdd),
  rotate: () => (mat2d_rotate),
  scale: () => (mat2d_scale),
  set: () => (mat2d_set),
  str: () => (mat2d_str),
  sub: () => (mat2d_sub),
  subtract: () => (mat2d_subtract),
  translate: () => (translate)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat3.js
var mat3_namespaceObject = {};
__webpack_require__.r(mat3_namespaceObject);
__webpack_require__.d(mat3_namespaceObject, {
  add: () => (mat3_add),
  adjoint: () => (mat3_adjoint),
  clone: () => (mat3_clone),
  copy: () => (mat3_copy),
  create: () => (mat3_create),
  determinant: () => (mat3_determinant),
  equals: () => (mat3_equals),
  exactEquals: () => (mat3_exactEquals),
  frob: () => (mat3_frob),
  fromMat2d: () => (fromMat2d),
  fromMat4: () => (fromMat4),
  fromQuat: () => (fromQuat),
  fromRotation: () => (mat3_fromRotation),
  fromScaling: () => (mat3_fromScaling),
  fromTranslation: () => (mat3_fromTranslation),
  fromValues: () => (mat3_fromValues),
  identity: () => (mat3_identity),
  invert: () => (mat3_invert),
  mul: () => (mat3_mul),
  multiply: () => (mat3_multiply),
  multiplyScalar: () => (mat3_multiplyScalar),
  multiplyScalarAndAdd: () => (mat3_multiplyScalarAndAdd),
  normalFromMat4: () => (normalFromMat4),
  projection: () => (projection),
  rotate: () => (mat3_rotate),
  scale: () => (mat3_scale),
  set: () => (mat3_set),
  str: () => (mat3_str),
  sub: () => (mat3_sub),
  subtract: () => (mat3_subtract),
  translate: () => (mat3_translate),
  transpose: () => (mat3_transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat4.js
var mat4_namespaceObject = {};
__webpack_require__.r(mat4_namespaceObject);
__webpack_require__.d(mat4_namespaceObject, {
  add: () => (mat4_add),
  adjoint: () => (mat4_adjoint),
  clone: () => (mat4_clone),
  copy: () => (mat4_copy),
  create: () => (mat4_create),
  determinant: () => (mat4_determinant),
  equals: () => (mat4_equals),
  exactEquals: () => (mat4_exactEquals),
  frob: () => (mat4_frob),
  fromQuat: () => (mat4_fromQuat),
  fromQuat2: () => (fromQuat2),
  fromRotation: () => (mat4_fromRotation),
  fromRotationTranslation: () => (fromRotationTranslation),
  fromRotationTranslationScale: () => (fromRotationTranslationScale),
  fromRotationTranslationScaleOrigin: () => (fromRotationTranslationScaleOrigin),
  fromScaling: () => (mat4_fromScaling),
  fromTranslation: () => (mat4_fromTranslation),
  fromValues: () => (mat4_fromValues),
  fromXRotation: () => (fromXRotation),
  fromYRotation: () => (fromYRotation),
  fromZRotation: () => (fromZRotation),
  frustum: () => (frustum),
  getRotation: () => (getRotation),
  getScaling: () => (getScaling),
  getTranslation: () => (getTranslation),
  identity: () => (mat4_identity),
  invert: () => (mat4_invert),
  lookAt: () => (lookAt),
  mul: () => (mat4_mul),
  multiply: () => (mat4_multiply),
  multiplyScalar: () => (mat4_multiplyScalar),
  multiplyScalarAndAdd: () => (mat4_multiplyScalarAndAdd),
  ortho: () => (ortho),
  perspective: () => (perspective),
  perspectiveFromFieldOfView: () => (perspectiveFromFieldOfView),
  rotate: () => (mat4_rotate),
  rotateX: () => (rotateX),
  rotateY: () => (rotateY),
  rotateZ: () => (rotateZ),
  scale: () => (mat4_scale),
  set: () => (mat4_set),
  str: () => (mat4_str),
  sub: () => (mat4_sub),
  subtract: () => (mat4_subtract),
  targetTo: () => (targetTo),
  translate: () => (mat4_translate),
  transpose: () => (mat4_transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec3.js
var vec3_namespaceObject = {};
__webpack_require__.r(vec3_namespaceObject);
__webpack_require__.d(vec3_namespaceObject, {
  add: () => (vec3_add),
  angle: () => (angle),
  bezier: () => (bezier),
  ceil: () => (ceil),
  clone: () => (vec3_clone),
  copy: () => (vec3_copy),
  create: () => (vec3_create),
  cross: () => (cross),
  dist: () => (dist),
  distance: () => (distance),
  div: () => (div),
  divide: () => (divide),
  dot: () => (vec3_dot),
  equals: () => (vec3_equals),
  exactEquals: () => (vec3_exactEquals),
  floor: () => (floor),
  forEach: () => (forEach),
  fromValues: () => (vec3_fromValues),
  hermite: () => (hermite),
  inverse: () => (inverse),
  len: () => (len),
  length: () => (vec3_length),
  lerp: () => (lerp),
  max: () => (max),
  min: () => (min),
  mul: () => (vec3_mul),
  multiply: () => (vec3_multiply),
  negate: () => (negate),
  normalize: () => (normalize),
  random: () => (random),
  rotateX: () => (vec3_rotateX),
  rotateY: () => (vec3_rotateY),
  rotateZ: () => (vec3_rotateZ),
  round: () => (round),
  scale: () => (vec3_scale),
  scaleAndAdd: () => (scaleAndAdd),
  set: () => (vec3_set),
  sqrDist: () => (sqrDist),
  sqrLen: () => (sqrLen),
  squaredDistance: () => (squaredDistance),
  squaredLength: () => (squaredLength),
  str: () => (vec3_str),
  sub: () => (vec3_sub),
  subtract: () => (vec3_subtract),
  transformMat3: () => (transformMat3),
  transformMat4: () => (transformMat4),
  transformQuat: () => (transformQuat),
  zero: () => (zero)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec4.js
var vec4_namespaceObject = {};
__webpack_require__.r(vec4_namespaceObject);
__webpack_require__.d(vec4_namespaceObject, {
  add: () => (vec4_add),
  ceil: () => (vec4_ceil),
  clone: () => (vec4_clone),
  copy: () => (vec4_copy),
  create: () => (vec4_create),
  cross: () => (vec4_cross),
  dist: () => (vec4_dist),
  distance: () => (vec4_distance),
  div: () => (vec4_div),
  divide: () => (vec4_divide),
  dot: () => (dot),
  equals: () => (vec4_equals),
  exactEquals: () => (vec4_exactEquals),
  floor: () => (vec4_floor),
  forEach: () => (vec4_forEach),
  fromValues: () => (vec4_fromValues),
  inverse: () => (vec4_inverse),
  len: () => (vec4_len),
  length: () => (vec4_length),
  lerp: () => (vec4_lerp),
  max: () => (vec4_max),
  min: () => (vec4_min),
  mul: () => (vec4_mul),
  multiply: () => (vec4_multiply),
  negate: () => (vec4_negate),
  normalize: () => (vec4_normalize),
  random: () => (vec4_random),
  round: () => (vec4_round),
  scale: () => (vec4_scale),
  scaleAndAdd: () => (vec4_scaleAndAdd),
  set: () => (vec4_set),
  sqrDist: () => (vec4_sqrDist),
  sqrLen: () => (vec4_sqrLen),
  squaredDistance: () => (vec4_squaredDistance),
  squaredLength: () => (vec4_squaredLength),
  str: () => (vec4_str),
  sub: () => (vec4_sub),
  subtract: () => (vec4_subtract),
  transformMat4: () => (vec4_transformMat4),
  transformQuat: () => (vec4_transformQuat),
  zero: () => (vec4_zero)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat.js
var quat_namespaceObject = {};
__webpack_require__.r(quat_namespaceObject);
__webpack_require__.d(quat_namespaceObject, {
  add: () => (quat_add),
  calculateW: () => (calculateW),
  clone: () => (quat_clone),
  conjugate: () => (conjugate),
  copy: () => (quat_copy),
  create: () => (quat_create),
  dot: () => (quat_dot),
  equals: () => (quat_equals),
  exactEquals: () => (quat_exactEquals),
  exp: () => (exp),
  fromEuler: () => (fromEuler),
  fromMat3: () => (fromMat3),
  fromValues: () => (quat_fromValues),
  getAngle: () => (getAngle),
  getAxisAngle: () => (getAxisAngle),
  identity: () => (quat_identity),
  invert: () => (quat_invert),
  len: () => (quat_len),
  length: () => (quat_length),
  lerp: () => (quat_lerp),
  ln: () => (ln),
  mul: () => (quat_mul),
  multiply: () => (quat_multiply),
  normalize: () => (quat_normalize),
  pow: () => (pow),
  random: () => (quat_random),
  rotateX: () => (quat_rotateX),
  rotateY: () => (quat_rotateY),
  rotateZ: () => (quat_rotateZ),
  rotationTo: () => (rotationTo),
  scale: () => (quat_scale),
  set: () => (quat_set),
  setAxes: () => (setAxes),
  setAxisAngle: () => (setAxisAngle),
  slerp: () => (slerp),
  sqlerp: () => (sqlerp),
  sqrLen: () => (quat_sqrLen),
  squaredLength: () => (quat_squaredLength),
  str: () => (quat_str)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat2.js
var quat2_namespaceObject = {};
__webpack_require__.r(quat2_namespaceObject);
__webpack_require__.d(quat2_namespaceObject, {
  add: () => (quat2_add),
  clone: () => (quat2_clone),
  conjugate: () => (quat2_conjugate),
  copy: () => (quat2_copy),
  create: () => (quat2_create),
  dot: () => (quat2_dot),
  equals: () => (quat2_equals),
  exactEquals: () => (quat2_exactEquals),
  fromMat4: () => (quat2_fromMat4),
  fromRotation: () => (quat2_fromRotation),
  fromRotationTranslation: () => (quat2_fromRotationTranslation),
  fromRotationTranslationValues: () => (fromRotationTranslationValues),
  fromTranslation: () => (quat2_fromTranslation),
  fromValues: () => (quat2_fromValues),
  getDual: () => (getDual),
  getReal: () => (getReal),
  getTranslation: () => (quat2_getTranslation),
  identity: () => (quat2_identity),
  invert: () => (quat2_invert),
  len: () => (quat2_len),
  length: () => (quat2_length),
  lerp: () => (quat2_lerp),
  mul: () => (quat2_mul),
  multiply: () => (quat2_multiply),
  normalize: () => (quat2_normalize),
  rotateAroundAxis: () => (rotateAroundAxis),
  rotateByQuatAppend: () => (rotateByQuatAppend),
  rotateByQuatPrepend: () => (rotateByQuatPrepend),
  rotateX: () => (quat2_rotateX),
  rotateY: () => (quat2_rotateY),
  rotateZ: () => (quat2_rotateZ),
  scale: () => (quat2_scale),
  set: () => (quat2_set),
  setDual: () => (setDual),
  setReal: () => (setReal),
  sqrLen: () => (quat2_sqrLen),
  squaredLength: () => (quat2_squaredLength),
  str: () => (quat2_str),
  translate: () => (quat2_translate)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec2.js
var vec2_namespaceObject = {};
__webpack_require__.r(vec2_namespaceObject);
__webpack_require__.d(vec2_namespaceObject, {
  add: () => (vec2_add),
  angle: () => (vec2_angle),
  ceil: () => (vec2_ceil),
  clone: () => (vec2_clone),
  copy: () => (vec2_copy),
  create: () => (vec2_create),
  cross: () => (vec2_cross),
  dist: () => (vec2_dist),
  distance: () => (vec2_distance),
  div: () => (vec2_div),
  divide: () => (vec2_divide),
  dot: () => (vec2_dot),
  equals: () => (vec2_equals),
  exactEquals: () => (vec2_exactEquals),
  floor: () => (vec2_floor),
  forEach: () => (vec2_forEach),
  fromValues: () => (vec2_fromValues),
  inverse: () => (vec2_inverse),
  len: () => (vec2_len),
  length: () => (vec2_length),
  lerp: () => (vec2_lerp),
  max: () => (vec2_max),
  min: () => (vec2_min),
  mul: () => (vec2_mul),
  multiply: () => (vec2_multiply),
  negate: () => (vec2_negate),
  normalize: () => (vec2_normalize),
  random: () => (vec2_random),
  rotate: () => (vec2_rotate),
  round: () => (vec2_round),
  scale: () => (vec2_scale),
  scaleAndAdd: () => (vec2_scaleAndAdd),
  set: () => (vec2_set),
  sqrDist: () => (vec2_sqrDist),
  sqrLen: () => (vec2_sqrLen),
  squaredDistance: () => (vec2_squaredDistance),
  squaredLength: () => (vec2_squaredLength),
  str: () => (vec2_str),
  sub: () => (vec2_sub),
  subtract: () => (vec2_subtract),
  transformMat2: () => (transformMat2),
  transformMat2d: () => (transformMat2d),
  transformMat3: () => (vec2_transformMat3),
  transformMat4: () => (vec2_transformMat4),
  zero: () => (vec2_zero)
});

;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/common.js
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2.js

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2d.js

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b, c,
 *  d, tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function mat2d_create() {
  var out = new ARRAY_TYPE(6);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function mat2d_clone(a) {
  var out = new ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function mat2d_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function mat2d_identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function mat2d_fromValues(a, b, c, d, tx, ty) {
  var out = new ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function mat2d_set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function mat2d_invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function mat2d_determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function mat2d_multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function mat2d_rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function mat2d_scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function mat2d_fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */

function mat2d_fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat2d_str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat2d_frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function mat2d_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function mat2d_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function mat2d_multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function mat2d_multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat2d_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat2d_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mat2d_mul = mat2d_multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var mat2d_sub = mat2d_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat3.js

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function mat3_create() {
  var out = new ARRAY_TYPE(9);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function mat3_clone(a) {
  var out = new ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function mat3_fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function mat3_set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function mat3_identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function mat3_determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function mat3_multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function mat3_translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function mat3_rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function mat3_scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function mat3_fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function mat3_fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function mat3_fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat3_str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat3_frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function mat3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function mat3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function mat3_multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function mat3_multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat3_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mat3_mul = mat3_multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var mat3_sub = mat3_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat4.js

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function mat4_create() {
  var out = new ARRAY_TYPE(16);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function mat4_clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function mat4_fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function mat4_set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function mat4_identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function mat4_determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function mat4_multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function mat4_translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function mat4_scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function mat4_rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function mat4_fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function mat4_fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function mat4_fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function mat4_fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return mat4_identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat4_str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat4_frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function mat4_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function mat4_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function mat4_multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function mat4_multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat4_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat4_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mat4_mul = mat4_multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var mat4_sub = mat4_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec3.js

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function vec3_create() {
  var out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function vec3_clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec3_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function vec3_fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function vec3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function vec3_set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function vec3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function vec3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function vec3_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function vec3_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function vec3_dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  var z = RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function vec3_rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function vec3_rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function vec3_rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = vec3_fromValues(a[0], a[1], a[2]);
  var tempB = vec3_fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = vec3_dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec3_str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var vec3_sub = vec3_subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var vec3_mul = vec3_multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = vec3_length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = vec3_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec4.js

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function vec4_create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function vec4_clone(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function vec4_fromValues(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function vec4_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function vec4_set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function vec4_ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function vec4_floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function vec4_max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function vec4_round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function vec4_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function vec4_scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function vec4_distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function vec4_squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec4_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function vec4_squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function vec4_negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function vec4_inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function vec4_normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function vec4_cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function vec4_lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function vec4_random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function vec4_transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function vec4_transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function vec4_zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec4_str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec4_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec4_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var vec4_sub = vec4_subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var vec4_mul = vec4_multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var vec4_div = vec4_divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var vec4_dist = vec4_distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var vec4_sqrDist = vec4_squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var vec4_len = vec4_length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var vec4_sqrLen = vec4_squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var vec4_forEach = function () {
  var vec = vec4_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat.js




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function quat_create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function quat_identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {quat} a     Origin unit quaternion 
 * @param  {quat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = quat_dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function quat_multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  quat_scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 * 
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function quat_random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function quat_invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function quat_str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var quat_clone = vec4_clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var quat_fromValues = vec4_fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var quat_copy = vec4_copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var quat_set = vec4_set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var quat_add = vec4_add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var quat_mul = quat_multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var quat_scale = vec4_scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var quat_dot = dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var quat_lerp = vec4_lerp;
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var quat_length = vec4_length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var quat_len = quat_length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var quat_squaredLength = vec4_squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var quat_sqrLen = quat_squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var quat_normalize = vec4_normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var quat_exactEquals = vec4_exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var quat_equals = vec4_equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = vec3_create();
  var xUnitVec3 = vec3_fromValues(1, 0, 0);
  var yUnitVec3 = vec3_fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = vec3_dot(a, b);

    if (dot < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return quat_normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = quat_create();
  var temp2 = quat_create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = mat3_create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return quat_normalize(out, fromMat3(out, matr));
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat2.js



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function quat2_create() {
  var dq = new ARRAY_TYPE(8);

  if (ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function quat2_clone(a) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function quat2_fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q a normalized quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function quat2_fromMat4(out, a) {
  //TODO Optimize this
  var outer = quat_create();
  getRotation(outer, a);
  var t = new ARRAY_TYPE(3);
  getTranslation(t, a);
  quat2_fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function quat2_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function quat2_identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function quat2_set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = quat_copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = quat_copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function quat2_getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */

function quat2_translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < EPSILON) {
    return quat2_copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function quat2_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */

function quat2_multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var quat2_mul = quat2_multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function quat2_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var quat2_dot = quat_dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function quat2_lerp(out, a, b, t) {
  var mt = 1 - t;
  if (quat2_dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function quat2_invert(out, a) {
  var sqlen = quat2_squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function quat2_conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var quat2_length = quat_length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var quat2_len = quat2_length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var quat2_squaredLength = quat_squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var quat2_sqrLen = quat2_squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function quat2_normalize(out, a) {
  var magnitude = quat2_squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function quat2_str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function quat2_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function quat2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec2.js

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function vec2_create() {
  var out = new ARRAY_TYPE(2);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function vec2_clone(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function vec2_fromValues(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function vec2_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function vec2_set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function vec2_ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function vec2_floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function vec2_max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function vec2_round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function vec2_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function vec2_scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function vec2_distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function vec2_squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec2_length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function vec2_squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function vec2_negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function vec2_inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function vec2_normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function vec2_dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function vec2_cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function vec2_lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function vec2_random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function vec2_transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function vec2_transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function vec2_rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function vec2_angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function vec2_zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec2_str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec2_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var vec2_len = vec2_length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var vec2_sub = vec2_subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var vec2_mul = vec2_multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var vec2_div = vec2_divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var vec2_dist = vec2_distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var vec2_sqrDist = vec2_squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var vec2_sqrLen = vec2_squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var vec2_forEach = function () {
  var vec = vec2_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }

    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param {string} n
     * @return {boolean}
     */
    isNumeric(n)
    {
        const nn = parseFloat(n);
        return !isNaN(nn) && isFinite(nn);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }

}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{

    /**
     * @param {any} initiator
     * @param {Object} options
     */
    constructor(initiator, options)
    {
        this.initiator = initiator;
        this._options = options;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.UI)
        {
            console.error("[" + this.initiator + "]", ...arguments);
        }

        if (this._options && this._options.onError)
        {
            this._options.onError(this.initiator, ...arguments);
            // console.log("emitevent onerror...");
            // CABLES.patch.emitEvent("onError", this.initiator, ...arguments);
            // CABLES.logErrorConsole("[" + this.initiator + "]", ...arguments);
        }
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    #eventLog;
    constructor()
    {
        this.#eventLog = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this._countErrorUnknowns = 0;
    }

    /**
     * add event listener
     * @param {string} which event name
     * @param {function} cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    on(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /** @deprecated */
    addEventListener(which, cb, idPrefix = "")
    {
        return this.on(which, cb, idPrefix);
    }

    /**
     * check event listener registration
     * @param {string} id event id
     * @param {function} cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this.#eventLog.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /** @deprecated */
    removeEventListener(id)
    {
        return this.off(id);
    }

    /**
     * remove event listener registration
     * @param {string} id event id
     * @return
     */
    off(id)
    {
        if (id === null || id === undefined)
        {
            this.#eventLog.warn("removeEventListener id null", id);
            return;
        }

        if (typeof id == "string") // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                if (this._countErrorUnknowns == 20) this.#eventLog.warn("stopped reporting unknown events");
                if (this._countErrorUnknowns < 20) this.#eventLog.warn("could not find event...", id);
                this._countErrorUnknowns++;
                return;
            }

            let removeCount = 0;

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                    removeCount++;
                }
            }

            if (removeCount == 0)console.log("no events removed", event.name, id);

            return;
        }
        else
        {
            console.log("old function signature: removeEventListener! use listener id");
        }
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null, param7 = null, param8 = null)
    {
        if (this._logEvents) this.#eventLog.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6, param7, param8);
                }
            }
        }
        else
        {
            if (this._logEvents) this.#eventLog.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


class AnimKey
{
    constructor(obj, an)
    {
        this.id = CABLES.shortId();
        this.time = 0.0;
        this.value = 0.0;
        this.selected = false;

        this.anim = obj.anim || an || null;

        // this.ui = null;
        this.onChange = null;
        this._easing = 0;
        // this.bezTangIn = 0;
        // this.bezTangOut = 0;
        // this.bezTime = 0.5;
        // this.bezValue = 0;
        // this.bezTimeIn = -0.5;
        // this.bezValueIn = 0;

        this.cb = null;
        this.cbTriggered = false;

        // const bezierAnim = null;
        // this._updateBezier = false;

        this.setEasing(Anim.EASING_LINEAR);
        this.set(obj);
    }

    delete()
    {
        if (this.anim) this.anim.remove(this);
        else console.log("animkey without anim...");
    }

    /**
     * @param {Number} e
     */
    setEasing(e)
    {
        this._easing = e;

        if (this._easing == Anim.EASING_LINEAR) this.ease = AnimKey.easeLinear;
        else if (this._easing == Anim.EASING_ABSOLUTE) this.ease = AnimKey.easeAbsolute;
        else if (this._easing == Anim.EASING_SMOOTHSTEP) this.ease = AnimKey.easeSmoothStep;
        else if (this._easing == Anim.EASING_SMOOTHERSTEP) this.ease = AnimKey.easeSmootherStep;
        else if (this._easing == Anim.EASING_CUBIC_IN) this.ease = AnimKey.easeCubicIn;
        else if (this._easing == Anim.EASING_CUBIC_OUT) this.ease = AnimKey.easeCubicOut;
        else if (this._easing == Anim.EASING_CUBIC_INOUT) this.ease = AnimKey.easeCubicInOut;
        else if (this._easing == Anim.EASING_EXPO_IN) this.ease = AnimKey.easeExpoIn;
        else if (this._easing == Anim.EASING_EXPO_OUT) this.ease = AnimKey.easeExpoOut;
        else if (this._easing == Anim.EASING_EXPO_INOUT) this.ease = AnimKey.easeExpoInOut;
        else if (this._easing == Anim.EASING_SIN_IN) this.ease = AnimKey.easeSinIn;
        else if (this._easing == Anim.EASING_SIN_OUT) this.ease = AnimKey.easeSinOut;
        else if (this._easing == Anim.EASING_SIN_INOUT) this.ease = AnimKey.easeSinInOut;
        else if (this._easing == Anim.EASING_BACK_OUT) this.ease = AnimKey.easeOutBack;
        else if (this._easing == Anim.EASING_BACK_IN) this.ease = AnimKey.easeInBack;
        else if (this._easing == Anim.EASING_BACK_INOUT) this.ease = AnimKey.easeInOutBack;
        else if (this._easing == Anim.EASING_ELASTIC_IN) this.ease = AnimKey.easeInElastic;
        else if (this._easing == Anim.EASING_ELASTIC_OUT) this.ease = AnimKey.easeOutElastic;
        // else if (this._easing == Anim.EASING_ELASTIC_INOUT) this.ease = AnimKey.easeElasticInOut;
        else if (this._easing == Anim.EASING_BOUNCE_IN) this.ease = AnimKey.easeInBounce;
        else if (this._easing == Anim.EASING_BOUNCE_OUT) this.ease = AnimKey.easeOutBounce;
        else if (this._easing == Anim.EASING_QUART_OUT) this.ease = AnimKey.easeOutQuart;
        else if (this._easing == Anim.EASING_QUART_IN) this.ease = AnimKey.easeInQuart;
        else if (this._easing == Anim.EASING_QUART_INOUT) this.ease = AnimKey.easeInOutQuart;
        else if (this._easing == Anim.EASING_QUINT_OUT) this.ease = AnimKey.easeOutQuint;
        else if (this._easing == Anim.EASING_QUINT_IN) this.ease = AnimKey.easeInQuint;
        else if (this._easing == Anim.EASING_QUINT_INOUT) this.ease = AnimKey.easeInOutQuint;
        else if (this._easing == Anim.EASING_CUBICSPLINE)
        {
            // this._updateBezier = true;
            this.ease = AnimKey.easeCubicSpline;
        }
        else
        {
            this._easing = Anim.EASING_LINEAR;
            this.ease = AnimKey.easeLinear;
        }
    }

    trigger()
    {
        this.cb();
        this.cbTriggered = true;
    }

    setValue(v)
    {
        this.value = v;
        if (this.onChange !== null) this.onChange();
    }

    set(obj)
    {
        if (obj)
        {
            if (obj.e) this.setEasing(obj.e);
            if (obj.cb)
            {
                this.cb = obj.cb;
                this.cbTriggered = false;
            }

            if (obj.b)
            {
                // this.bezTime = obj.b[0];
                // this.bezValue = obj.b[1];
                // this.bezTimeIn = obj.b[2];
                // this.bezValueIn = obj.b[3];
                // this._updateBezier = true;
            }

            if (obj.hasOwnProperty("t")) this.time = obj.t;
            if (obj.hasOwnProperty("time")) this.time = obj.time;
            if (obj.hasOwnProperty("v")) this.value = obj.v;
            else if (obj.hasOwnProperty("value")) this.value = obj.value;
        }
        if (this.onChange !== null) this.onChange();
    }

    /**
   * @returns {Object}
   */
    getSerialized()
    {
        const obj = {};
        obj.t = this.time;
        obj.v = this.value;
        obj.e = this._easing;

        return obj;
    }

    getEasing()
    {
        return this._easing;
    }
}

AnimKey.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

AnimKey.easeCubicSpline = function (perc, key2)
{
    return AnimKey.cubicSpline(perc, this, key2);
};

AnimKey.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

AnimKey.easeLinear = function (perc, key2)
{
    return AnimKey.linear(perc, this, key2);
};

AnimKey.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

AnimKey.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return AnimKey.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

AnimKey.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return AnimKey.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

AnimKey.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return AnimKey.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

AnimKey.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return AnimKey.linear(t, this, key2);
};

// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

AnimKey.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return AnimKey.linear(t, this, key2);
};
AnimKey.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return AnimKey.linear(t, this, key2);
};
AnimKey.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return AnimKey.linear(t, this, key2);
};

AnimKey.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

AnimKey.easeInBounce = function (t, key2)
{
    return AnimKey.linear(AnimKey.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

AnimKey.easeOutBounce = function (t, key2)
{
    return AnimKey.linear(AnimKey.bounce(t), this, key2);
};

AnimKey.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return AnimKey.linear(t, this, key2);
};

AnimKey.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return AnimKey.linear(t, this, key2);
};

AnimKey.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return AnimKey.linear(t, this, key2);
};

AnimKey.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return AnimKey.linear(t, this, key2);
};

AnimKey.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return AnimKey.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

AnimKey.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return AnimKey.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

AnimKey.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return AnimKey.linear(t, this, key2);
};

AnimKey.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return AnimKey.linear(perc, this, key2);
};

AnimKey.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return AnimKey.linear(perc, this, key2);
};

;// CONCATENATED MODULE: ./src/core/anim.js






/**
 * configuration object for loading a patch
 * @typedef {Object} AnimCfg
 * @property {number} [defaultEasing] use easing index as default
 * @property {string} [name] anim name
 */

/**
 * Keyframed interpolated animation.
 *
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

class Anim extends Events
{
    static EASING_LINEAR = 0;
    static EASING_ABSOLUTE = 1;
    static EASING_SMOOTHSTEP = 2;
    static EASING_SMOOTHERSTEP = 3;
    static EASING_CUBICSPLINE = 4;

    static EASING_CUBIC_IN = 5;
    static EASING_CUBIC_OUT = 6;
    static EASING_CUBIC_INOUT = 7;

    static EASING_EXPO_IN = 8;
    static EASING_EXPO_OUT = 9;
    static EASING_EXPO_INOUT = 10;

    static EASING_SIN_IN = 11;
    static EASING_SIN_OUT = 12;
    static EASING_SIN_INOUT = 13;

    static EASING_BACK_IN = 14;
    static EASING_BACK_OUT = 15;
    static EASING_BACK_INOUT = 16;

    static EASING_ELASTIC_IN = 17;
    static EASING_ELASTIC_OUT = 18;

    static EASING_BOUNCE_IN = 19;
    static EASING_BOUNCE_OUT = 21;

    static EASING_QUART_IN = 22;
    static EASING_QUART_OUT = 23;
    static EASING_QUART_INOUT = 24;

    static EASING_QUINT_IN = 25;
    static EASING_QUINT_OUT = 26;
    static EASING_QUINT_INOUT = 27;

    static EASINGNAMES = ["linear", "absolute", "smoothstep", "smootherstep", "Cubic In", "Cubic Out", "Cubic In Out", "Expo In", "Expo Out", "Expo In Out", "Sin In", "Sin Out", "Sin In Out", "Quart In", "Quart Out", "Quart In Out", "Quint In", "Quint Out", "Quint In Out", "Back In", "Back Out", "Back In Out", "Elastic In", "Elastic Out", "Bounce In", "Bounce Out"];

    /**
     * @param {AnimCfg} [cfg]
     */
    constructor(cfg = {})
    {
        super();
        cfg = cfg || {};
        this.id = uuid();
        this.keys = [];
        this.onChange = null;
        this.stayInTimeline = false;
        this.loop = false;
        this._log = new Logger("Anim");
        this._lastKeyIndex = 0;
        this._cachedIndex = 0;
        this.name = cfg.name || null;

        /**
         * @type {Number}
         */
        this.defaultEasing = cfg.defaultEasing || Anim.EASING_LINEAR;
        this.onLooped = null;

        this._timesLooped = 0;
        this._needsSort = false;
    }

    forceChangeCallback()
    {
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }

    getLoop()
    {
        return this.loop;
    }

    setLoop(target)
    {
        this.loop = target;
        this.emitEvent("onChange", this);
    }

    /**
     * returns true if animation has ended at @time
     * checks if last key time is < time
     * @param {Number} time
     * @returns {Boolean}
     * @memberof Anim
     * @instance
     * @function
     */
    hasEnded(time)
    {
        if (this.keys.length === 0) return true;
        if (this.keys[this._lastKeyIndex].time <= time) return true;
        return false;
    }

    /**
     * @param {number} time
     */
    isRising(time)
    {
        if (this.hasEnded(time)) return false;
        const ki = this.getKeyIndex(time);
        if (this.keys[ki].value < this.keys[ki + 1].value) return true;
        return false;
    }

    /**
     * remove all keys from animation before time
     * @param {Number} time
     * @memberof Anim
     * @instance
     * @function
     */
    clearBefore(time)
    {
        const v = this.getValue(time);
        const ki = this.getKeyIndex(time);

        this.setValue(time, v);

        if (ki > 1) this.keys.splice(0, ki);
        this._updateLastIndex();
    }

    /**
     * remove all keys from animation
     * @param {Number} [time=0] set a new key at time with the old value at time
     * @memberof Anim
     * @instance
     * @function
     */
    clear(time)
    {
        let v = 0;
        if (time) v = this.getValue(time);
        this.keys.length = 0;
        this._updateLastIndex();
        if (time) this.setValue(time, v);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }

    sortKeys()
    {
        this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
        this._updateLastIndex();
        this._needsSort = false;
        if (this.keys.length > 999 && this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
    }

    hasDuplicates()
    {
        const test = {};
        let count = 0;
        for (let i = 0; i < this.keys.length; i++)
        {
            test[this.keys[i].time] = 1;
            count++;
        }

        const keys = Object.keys(test);
        if (keys.length != count)
        {
            return true;
        }
        return false;
    }

    removeDuplicates()
    {
        if (this.hasDuplicates())
        {
            this.sortKeys();
            let count = 0;

            while (this.hasDuplicates())
            {
                for (let i = 0; i < this.keys.length - 1; i++)
                {
                    if (this.keys[i].time == this.keys[i + 1].time) this.keys.splice(i, 1);
                    count++;
                }
            }
            this._updateLastIndex();
        }
    }

    getLength()
    {
        if (this.keys.length === 0) return 0;
        return this.keys[this.keys.length - 1].time;
    }

    /**
     * @param {number} time
     */
    getKeyIndex(time)
    {
        let index = 0;
        let start = 0;
        if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
        for (let i = start; i < this.keys.length; i++)
        {
            if (time >= this.keys[i].time) index = i;
            if (this.keys[i].time > time)
            {
                if (time != 0) this._cachedIndex = index;
                return index;
            }
        }

        return index;
    }

    /**
     * set value at time
     * @function setValue
     * @memberof Anim
     * @instance
     * @param {Number} time
     * @param {Number} value
     * @param {Function} cb callback
     */
    setValue(time, value, cb = null)
    {
        let found = null;

        if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
            for (let i = 0; i < this.keys.length; i++)
                if (this.keys[i].time == time)
                {
                    found = this.keys[i];
                    this.keys[i].setValue(value);
                    this.keys[i].cb = cb;
                    break;
                }

        if (!found)
        {
            found = new AnimKey(
                {
                    "time": time,
                    "value": value,
                    "e": this.defaultEasing,
                    "cb": cb,
                    "anim": this
                });
            this.keys.push(found);

            // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
            this._updateLastIndex();
        }

        if (this.onChange) this.onChange();
        this.emitEvent("onChange", this);
        this._needsSort = true;
        return found;
    }

    /**
     * @param {number} index
     * @param {number} easing
     */
    setKeyEasing(index, easing)
    {
        if (this.keys[index])
        {
            this.keys[index].setEasing(easing);
            this.emitEvent("onChange", this);
        }
    }

    /**
     * @returns {Object}
     */
    getSerialized()
    {
        const obj = {};
        obj.keys = [];
        obj.loop = this.loop;

        for (let i = 0; i < this.keys.length; i++)
            obj.keys.push(this.keys[i].getSerialized());

        return obj;
    }

    /**
     * @param {number} time
     */
    getKey(time)
    {
        const index = this.getKeyIndex(time);
        return this.keys[index];
    }

    /**
     * @param {number} time
     */
    getNextKey(time)
    {
        let index = this.getKeyIndex(time) + 1;
        if (index >= this.keys.length) index = this.keys.length - 1;

        return this.keys[index];
    }

    /**
     * @param {number} time
     */
    isFinished(time)
    {
        if (this.keys.length <= 0) return true;
        return time > this.keys[this.keys.length - 1].time;
    }

    /**
     * @param {number} time
     */
    isStarted(time)
    {
        if (this.keys.length <= 0) return false;
        return time >= this.keys[0].time;
    }

    /**
     * @param {AnimKey} k
     */
    remove(k)
    {
        for (let i = 0; i < this.keys.length; i++)
        {
            if (this.keys[i] == k)
            {
                this.keys.splice(i, 1);
                this._updateLastIndex();
                return;
            }
        }
        console.log("key remove not found", k);
    }

    /**
     * get value at time
     * @function getValue
     * @memberof Anim
     * @instance
     * @param {Number} [time] time
     * @returns {Number} interpolated value at time
     */
    getValue(time)
    {
        if (this.keys.length === 0)
        {
            return 0;
        }
        if (this._needsSort) this.sortKeys();

        if (!this.loop && time > this.keys[this._lastKeyIndex].time)
        {
            if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

            return this.keys[this._lastKeyIndex].value;
        }

        if (time < this.keys[0].time)
        {
            return this.keys[0].value;
        }

        if (this.loop && time > this.keys[this._lastKeyIndex].time)
        {
            const currentLoop = time / this.keys[this._lastKeyIndex].time;
            if (currentLoop > this._timesLooped)
            {
                this._timesLooped++;
                if (this.onLooped) this.onLooped();
            }
            time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
            time += this.keys[0].time;
        }

        const index = this.getKeyIndex(time);
        if (index >= this._lastKeyIndex)
        {
            if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

            return this.keys[this._lastKeyIndex].value;
        }

        const index2 = index + 1;
        const key1 = this.keys[index];
        const key2 = this.keys[index2];

        if (key1.cb && !key1.cbTriggered) key1.trigger();

        if (!key2) return -1;

        const perc = (time - key1.time) / (key2.time - key1.time);

        return key1.ease(perc, key2);
    }

    _updateLastIndex()
    {
        this._lastKeyIndex = this.keys.length - 1;
    }

    /**
     * @param {AnimKey} k
     */
    addKey(k)
    {
        if (k.time === undefined)
        {
            this._log.warn("key time undefined, ignoring!");
        }
        else
        {
            this.keys.push(k);
            if (this.onChange !== null) this.onChange();
            this.emitEvent("onChange", this);
            this._needsSort = true;
        }
        this._updateLastIndex();
    }

    /**
     * @param {string} str
     */
    easingFromString(str)
    {
        // todo smarter way to map ?
        if (str == "linear") return Anim.EASING_LINEAR;
        if (str == "absolute") return Anim.EASING_ABSOLUTE;
        if (str == "smoothstep") return Anim.EASING_SMOOTHSTEP;
        if (str == "smootherstep") return Anim.EASING_SMOOTHERSTEP;

        if (str == "Cubic In") return Anim.EASING_CUBIC_IN;
        if (str == "Cubic Out") return Anim.EASING_CUBIC_OUT;
        if (str == "Cubic In Out") return Anim.EASING_CUBIC_INOUT;

        if (str == "Expo In") return Anim.EASING_EXPO_IN;
        if (str == "Expo Out") return Anim.EASING_EXPO_OUT;
        if (str == "Expo In Out") return Anim.EASING_EXPO_INOUT;

        if (str == "Sin In") return Anim.EASING_SIN_IN;
        if (str == "Sin Out") return Anim.EASING_SIN_OUT;
        if (str == "Sin In Out") return Anim.EASING_SIN_INOUT;

        if (str == "Back In") return Anim.EASING_BACK_IN;
        if (str == "Back Out") return Anim.EASING_BACK_OUT;
        if (str == "Back In Out") return Anim.EASING_BACK_INOUT;

        if (str == "Elastic In") return Anim.EASING_ELASTIC_IN;
        if (str == "Elastic Out") return Anim.EASING_ELASTIC_OUT;

        if (str == "Bounce In") return Anim.EASING_BOUNCE_IN;
        if (str == "Bounce Out") return Anim.EASING_BOUNCE_OUT;

        if (str == "Quart Out") return Anim.EASING_QUART_OUT;
        if (str == "Quart In") return Anim.EASING_QUART_IN;
        if (str == "Quart In Out") return Anim.EASING_QUART_INOUT;

        if (str == "Quint Out") return Anim.EASING_QUINT_OUT;
        if (str == "Quint In") return Anim.EASING_QUINT_IN;
        if (str == "Quint In Out") return Anim.EASING_QUINT_INOUT;

        console.log("unknown anim easing?", str);
    }

    /**
     * @param {Op} op
     * @param {string} title
     * @param {function} cb
     * @returns {Port}
     */
    createPort(op, title, cb)
    {
        const port = op.inDropDown(title, Anim.EASINGNAMES, "linear");
        port.set("linear");
        port.defaultValue = "linear";

        port.onChange = () =>
        {
            this.defaultEasing = this.easingFromString(port.get());
            this.emitEvent("onChangeDefaultEasing", this);

            if (cb) cb();
        };

        return port;
    }
}

// ------------------------------

/**
 * @param {number} time
 * @param {glMatrix.quat} q
 * @param {Anim} animx
 * @param {Anim} animy
 * @param {Anim} animz
 * @param {Anim} animw
 */
Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

;// CONCATENATED MODULE: ./src/core/constants.js


const CONSTANTS = {
    "ANIM": {
        "EASINGS": Anim.EASINGNAMES,
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15,
        "PACO_OP_RELOAD": 16
    },
};

;// CONCATENATED MODULE: ./src/core/extendjs.js
/**
 * extend javascript functionality
 */

/**
 * @external Math
 */

/**
 * set random seed for seededRandom()
 * @type Number
 * @static
 */
Math.randomSeed = 1;

/**
 * @function external:Math#setRandomSeed
 * @param {number} seed
 */
Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};

/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};

/**
     * @namespace String
     */

/**
 * append a linebreak to a string
 * @function endl
 * @extends String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

String.prototype.contains = function (str)
{
    console.warn("string.contains deprecated, use string.includes");
    console.log((new Error()).stack);
    return this.includes(str);

};

function extendJs()
{

}

;// CONCATENATED MODULE: ./src/core/utils.js
/**
 * @namespace external:CABLES#Utils
 */




extendJs();

/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
function float32Concat(first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
}

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.includes(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

/**
 * generate a short "relativly unique" id
 * @function shortId
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = shortId();
    _shortIds[str] = true;
    return str;
};

/**
 * @typedef {String} UUID
*/

/**
 * generate a UUID
 * @function uuid
 * @return {UUID} generated UUID
 * @static
 */
const uuid = function ()
{
    let d = new Date().getTime();
    const uuidStr = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuidStr;
};
const generateUUID = uuid;

function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}

/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @param {string} str
 * @param {string} prefix
 * @return {string}
 */
const prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (str.length > 0)
    {
        for (let i = 0; i < str.length; i++)
        {
            let character = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + character;
            hash &= hash; // Convert to 32bit integer
        }
    }
    return prefix + "" + hash;
};

/**
 * generate a simple ID
 * @function simpleId
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};

/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing = 0)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
function isNumeric(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * returns true if parameter is array
 * @function isArray
 * @param {any} v value Value to check
 * @return {Boolean}
 * @static
 */
function isArray(v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
}

// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.includes("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
        dst[i] = src[i];

    return dst;
};

/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.includes(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};

const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};

// ----------------------------------------------------------------

const logErrorConsole = function (initiator)
{
    CABLES.errorConsole = CABLES.errorConsole || { "log": [] };
    CABLES.errorConsole.log.push({ "initiator": initiator, "arguments": arguments });

    if (!CABLES.errorConsole.ele)
    {
        const ele = document.createElement("div");
        ele.id = "cablesErrorConsole";
        ele.style.width = "90%";
        ele.style.height = "300px";
        ele.style.zIndex = "9999999";
        ele.style.display = "inline-block";
        ele.style.position = "absolute";
        ele.style.padding = "10px";
        ele.style.fontFamily = "monospace";
        ele.style.color = "red";
        ele.style.backgroundColor = "#200";

        CABLES.errorConsole.ele = ele;
        document.body.appendChild(ele);
    }

    let logHtml = "ERROR<br/>for more info, open your browsers dev tools console (Ctrl+Shift+I or Command+Alt+I)<br/>";

    for (let l = 0; l < CABLES.errorConsole.log.length; l++)
    {
        logHtml += CABLES.errorConsole.log[l].initiator + " ";
        for (let i = 1; i < CABLES.errorConsole.log[l].arguments.length; i++)
        {
            if (i > 2)logHtml += ", ";
            let arg = CABLES.errorConsole.log[l].arguments[i];
            if (arg.constructor.name.indexOf("Error") > -1 || arg.constructor.name.indexOf("error") > -1)
            {
                let txt = "Uncaught ErrorEvent ";
                if (arg.message)txt += " message: " + arg.message;
                logHtml += txt;
            }
            else if (typeof arg == "string")
                logHtml += arg;
            else if (typeof arg == "number")
                logHtml += String(arg) + " ";
        }
        logHtml += "<br/>";
    }

    CABLES.errorConsole.ele.innerHTML = logHtml;
};

/**
 * @param {Array<any>} arr
 */
function uniqueArray(arr)
{
    const u = {}, a = [];
    for (let i = 0, l = arr.length; i < l; ++i)
    {
        if (!u.hasOwnProperty(arr[i]))
        {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

;// CONCATENATED MODULE: ./src/core/core_port.js








/**
 * @typedef PortUiAttribs
 * @property  {String} [title] overwrite title of port (by default this is portname)
 * @property  {String} [display] how the port is displayed and interacted in the paramerer panel
 * @property  {Boolean} [greyout] port paramater will appear greyed out, can not be
 * @property  {Boolean} [hidePort] port will be hidden from op
 * @property  {Boolean} [hideParam] port params will be hidden from parameter panel
 * @property  {Boolean} [showIndex] only for dropdowns - show value index (e.g. `0 - normal` )
 * @property  {String} [editorSyntax] set syntax highlighting theme for editor port
 * @property  {Boolean} [ignoreObjTypeErrors] do not auto check object types
 * @property  {string} [group] do not set manually - group ports, usually set by op.setPortGroup...
 * @property  {Boolean} [isAnimated] internal: do not set manually
 * @property  {Boolean} [useVariable] internal: do not set manually
 * @property  {string} [variableName] internal: do not set manually
 * @property  {Number} [order] internal: do not set manually
 * @property  {Number} [stride] internal: do not set manually
 * @property  {Boolean} [expose] internal: do not set manually
 * @property  {Boolean} [multiPortManual] internal: do not set manually
 * @property  {String} [increment] internal: do not set manually
 * @property  {Number} [multiPortNum] internal: do not set manually
 * @property  {String} [display] internal: do not set manually
 * @property  {String} [axis] internal: do not set manually
 * @property  {String} [type] internal: do not set manually
 * @property  {String} [objType] internal: do not set manually
 * @property  {String} [filter] internal: do not set manually
 * @property  {boolean} [preview] internal: do not set manually
 * @property  {Array<String>} [values] internal: do not set manually
 *
 */

/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @module Port
 * @class
 * @example
 * const myPort=op.inString("String Port");
 */
class Port extends Events
{
    static DIR_IN = 0;
    static DIR_OUT = 1;

    static TYPE_VALUE = 0;
    static TYPE_NUMBER = 0;
    static TYPE_FUNCTION = 1;
    static TYPE_TRIGGER = 1;
    static TYPE_OBJECT = 2;
    static TYPE_TEXTURE = 2;
    static TYPE_ARRAY = 3;
    static TYPE_DYNAMIC = 4;
    static TYPE_STRING = 5;

    #oldAnimVal = -5711;

    #uiActiveState = true;
    #valueBeforeLink = null;
    // #lastAnimFrame = -1;
    #animated = false;
    // #tempLastUiValue = null;
    #useVariableName = null;

    /**
     * @param {Op} ___op
     * @param {string} name
     * @param {number} type
     * @param {PortUiAttribs} uiAttribs
     */
    constructor(___op, name, type, uiAttribs = {})
    {
        super();
        this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
        this._log = new Logger("core_port");

        /**
         * @type {Number}
         * @name direction
         * @instance
         * @memberof Port
         * @description direction of port (input(0) or output(1))
         */
        this.direction = Port.DIR_IN;
        this.id = String(CABLES.simpleId());

        /** @type {Op} */
        this._op = ___op;

        /** @type {Array<Link>} */
        this.links = [];

        /** @type {any} */
        this.value = 0.0;

        this.name = name;

        /** @type {number} */
        this.type = type || Port.TYPE_VALUE;

        /** @type {PortUiAttribs} */
        this.uiAttribs = uiAttribs || {};

        /** @type {Anim} */
        this.anim = null;

        this.defaultValue = null;

        this.ignoreValueSerialize = false;
        this.onLinkChanged = null;
        this.crashed = false;

        this.onValueChanged = null;
        this.onTriggered = null;
        this.changeAlways = false;
        this.forceRefChange = false;

        this.activityCounter = 0;
        this.apf = 0;
        this.activityCounterStartFrame = 0;

        this.canLink = null; // function can be overwritten
        this.preserveLinks = null;
        this.indexPort = null;
    }

    get parent()
    {
        this._log.stack("use port.op, not .parent");
        return this.op;
    }

    get title()
    {
        return this.uiAttribs.title || this.name;
    }

    get op()
    {
        return this._op;
    }

    get val()
    {
        return this.get();
    }

    set val(v)
    {
        this.setValue(v);
    }

    /**
     * copy over a uiattrib from an external connected port to another port
     * @function copyLinkedUiAttrib
     * @memberof Port
     * @param {string} which attrib name
     * @param {Port} port source port
     * @instance
     * @example
     *
     *  inArray.onLinkChanged=()=>
     *  {
     *      if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
     *  };
     *
     */
    copyLinkedUiAttrib(which, port)
    {
        if (!CABLES.UI) return;
        if (!this.isLinked()) return;

        const attr = {};
        attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
        port.setUiAttribs(attr);
    }

    /*
     * sdjksdjklsd
     * TODO make extend class for ports, like for ops only for ui
     */
    getValueForDisplay()
    {
        let str = this.value;

        if (typeof this.value === "string" || this.value instanceof String)
        {
            if (str.length > 1000)
            {
                str = str.substring(0, 999);
                str += "...";
            }
            if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
            {
                str += " - ";

                if (!this.value) str += "false";
                else str += "true";
            }

            str = str.replace(/[\u00A0-\u9999<>\&]/g, function (/** @type {String} */ i)
            {
                return "&#" + i.charCodeAt(0) + ";";
            });

            if (str.length > 100) str = str.substring(0, 100);
        }
        else
        {
            str = this.value;
        }
        return str;
    }

    /**
     * change listener for input value ports, overwrite to react to changes
     * @function onChange
     * @memberof Port
     * @instance
     * @example
     * const myPort=op.inString("MyPort");
     * myPort.onChange=function()
     * {
     *   console.log("was changed to: ",myPort.get());
     * }
     *
     */
    onAnimToggle() {}

    _onAnimToggle()
    {
        this.onAnimToggle();
    }

    /**
     * @function remove
     * @memberof Port
     * @instance
     * @description remove port
     */
    remove()
    {
        this.removeLinks();
        this._op.removePort(this);
    }

    /**
     * set ui attributes
     * @function setUiAttribs
     * @memberof Port
     * @instance
     * @param {PortUiAttribs} newAttribs

     * @example
     * myPort.setUiAttribs({greyout:true});
     */
    setUiAttribs(newAttribs)
    {
        let changed = false;
        if (!this.uiAttribs) this.uiAttribs = {};

        for (const p in newAttribs)
        {
            if (newAttribs[p] === undefined)
            {
                delete this.uiAttribs[p];
                continue;
            }
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];

            if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
        }

        if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

        if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
    }

    /**
     * get ui attributes
     * @function getUiAttribs
     * @memberof Port
     * @example
     * myPort.getUiAttribs();
     */
    getUiAttribs()
    {
        return this.uiAttribs;
    }

    /**
     * get ui attribute
     * @function getUiAttrib
     * @memberof Port
     * @instance
     * @param {String} attribName
     * <pre>
     * attribName - return value of the ui-attribute, or null on unknown attribute
     * </pre>
     * @example
     * myPort.setUiAttribs("values");
     */
    getUiAttrib(attribName)
    {
        if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName)) return null;
        return this.uiAttribs[attribName];
    }

    /**
     * @function get
     * @memberof Port
     * @instance
     * @description get value of port
     */
    get()
    {
        if (this.#animated && this.lastAnimFrame != this._op.patch.getFrameNum())
        {
            this.lastAnimFrame = this._op.patch.getFrameNum();

            let animval = this.anim.getValue(this._op.patch.timer.getTime());

            if (this.value != animval)
            {
                this.value = animval;
                this.#oldAnimVal = this.value;
                this.forceChange();
            }
        }

        return this.value;
    }

    setRef(v)
    {
        this.forceRefChange = true;
        this.set(v);
    }

    /**
     * @function setValue
     * @memberof Port
     * @instance
     * @description set value of port / will send value to all linked ports (only for output ports)
     */
    set(v)
    {
        this.setValue(v);
    }

    setValue(v)
    {
        if (v === undefined) v = null;

        if (CABLES.UI && CABLES.UI.showDevInfos)
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT && this.type == Port.TYPE_OBJECT && v && !this.forceRefChange)
                this._log.warn("object port [" + this.name + "] uses .set [" + this.op.objName + "]");

        if (this._op.enabled && !this.crashed)
        {
            if (v !== this.value || this.changeAlways || this.type == Port.TYPE_TEXTURE || this.type == Port.TYPE_ARRAY)
            {
                if (this.#animated)
                {
                    this.anim.setValue(this._op.patch.timer.getTime(), v);
                }
                else
                {
                    try
                    {
                        this.value = v;
                        this.forceChange();
                    }
                    catch (ex)
                    {
                        this.crashed = true;

                        this.setValue = function (_v) {};
                        this.onTriggered = function (a) {};

                        this._log.error("exception in ", this._op);
                        this._log.error(ex);

                        this._op.patch.emitEvent("exception", ex, this._op);
                    }

                    if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == Port.TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
                }

                if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
            }
        }
    }

    updateAnim()
    {
        if (this.#animated)
        {
            this.value = this.get();

            if (this.#oldAnimVal != this.value || this.changeAlways)
            {
                this.#oldAnimVal = this.value;
                this.forceChange();
            }
            this.#oldAnimVal = this.value;
        }
    }

    forceChange()
    {
        if (this.onValueChanged || this.onChange)
        {

        /*
         * very temporary: deprecated warning!!!!!!!!!
         * if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
         */
        }
        this._activity();
        this.emitEvent("change", this.value, this);

        if (this.onChange) this.onChange(this, this.value);
        else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    }

    /**
     * @function getTypeString
     * @memberof Port
     * @instance
     * @description get port type as string, e.g. "Function","Value"...
     * @return {String} type
     */
    getTypeString()
    {
        if (this.type == Port.TYPE_VALUE) return "Number";
        if (this.type == Port.TYPE_FUNCTION) return "Trigger";
        if (this.type == Port.TYPE_OBJECT) return "Object";
        if (this.type == Port.TYPE_DYNAMIC) return "Dynamic";
        if (this.type == Port.TYPE_ARRAY) return "Array";
        if (this.type == Port.TYPE_STRING) return "String";
        return "Unknown";
    }

    /**
     * @param {Object} objPort
     */
    deSerializeSettings(objPort)
    {
        if (!objPort) return;
        if (objPort.animated) this.setAnimated(objPort.animated);
        if (objPort.useVariable) this.setVariableName(objPort.useVariable);
        if (objPort.title) this.setUiAttribs({ "title": objPort.title });
        if (objPort.expose) this.setUiAttribs({ "expose": true });
        if (objPort.order) this.setUiAttribs({ "order": objPort.order });

        if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
        if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

        if (objPort.anim)
        {
            if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
            this._op.hasAnimPort = true;
            this.anim.on("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
            if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
            for (const ani in objPort.anim.keys)
            {
                this.anim.keys.push(new CABLES.AnimKey(objPort.anim.keys[ani], this.anim));
            }
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);

            this.anim.sortKeys();
        }
    }

    /**
     * @param {any} v
     */
    setInitialValue(v)
    {
        if (this.op.preservedPortLinks[this.name])
        {
            for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
            {
                const lobj = this.op.preservedPortLinks[this.name][i];
                this.op.patch._addLink(
                    lobj.objIn,
                    lobj.objOut,
                    lobj.portIn,
                    lobj.portOut);
            }
        }

        if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
        {
            this.set(this.op.preservedPortValues[this.name]);
        }
        else
        if (v !== undefined) this.set(v);
        if (v !== undefined) this.defaultValue = v;
    }

    getSerialized()
    {
        let obj = { "name": this.getName() };

        if (!this.ignoreValueSerialize && this.links.length === 0)
        {
            if (this.type == Port.TYPE_OBJECT && this.value && this.value.tex) {}
            else obj.value = this.value;
        }
        if (this.#useVariableName) obj.useVariable = this.#useVariableName;
        if (this.#animated) obj.animated = true;
        if (this.anim) obj.anim = this.anim.getSerialized();
        if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
        if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

        if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
        if (this.uiAttribs.expose)
        {
            obj.expose = true;
            if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
        }
        if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
        if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
        {
            obj.links = [];
            for (const i in this.links)
            {
                if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
            }
        }

        if (this.direction == Port.DIR_IN && this.links.length > 0)
        {
            for (const i in this.links)
            {
                if (!this.links[i].portIn || !this.links[i].portOut) continue;

                const otherp = this.links[i].getOtherPort(this);
                // check if functions exist, are defined in core_extend_ops code in ui
                if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
                {
                    if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                    {
                        obj.links = obj.links || [];
                        obj.links.push(this.links[i].getSerialized());
                    }
                }
            }
        }

        if (obj.links && obj.links.length == 0) delete obj.links;
        if (this.type === Port.TYPE_FUNCTION) delete obj.value;
        if (this.type === Port.TYPE_FUNCTION && this.links.length == 0) obj = null;
        if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

        cleanJson(obj);

        return obj;
    }

    /**
     * will be overwritten in ui
     * @param {Port} port1
     * @param {Port} port2
     * @returns {boolean}
     */
    shouldLink(port1, port2)
    {
        return !!(port1 && port2);
    }

    /**
     * @function removeLinks
     * @memberof Port
     * @instance
     * @description remove all links from port
     */
    removeLinks()
    {
        let count = 0;
        while (this.links.length > 0)
        {
            count++;
            if (count > 5000)
            {
                this._log.warn("could not delete links... / infinite loop");
                this.links.length = 0;
                break;
            }
            this.links[0].remove();
        }
    }

    /**
     * @function removeLink
     * @memberof Port
     * @instance
     * @description remove all link from port
     * @param {Link} link
     */
    removeLink(link)
    {
        for (let i = 0; i < this.links.length; i++)
            if (this.links[i] == link)
                this.links.splice(i, 1);

        if (this.direction == Port.DIR_IN)
        {
            if (this.type == Port.TYPE_VALUE) this.setValue(this.#valueBeforeLink || 0);
            else this.setValue(this.#valueBeforeLink || null);
        }

        if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

        try
        {
            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            this._op.emitEvent("onLinkChanged");
        }
        catch (e)
        {
            this._log.error(e);
        }
    }

    /**
     * @function getName
     * @memberof Port
     * @instance
     * @description return port name
     */
    getName()
    {
        return this.name;
    }

    /**
     * @function getTitle
     * @memberof Port
     * @instance
     * @description return port name or title
     */
    getTitle()
    {
        if (this.uiAttribs.title) return this.uiAttribs.title;
        return this.name;
    }

    /**
     * @param {Link} l
     */
    addLink(l)
    {
        this.#valueBeforeLink = this.value;
        this.links.push(l);
        if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

        try
        {
            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this._op.emitEvent("onLinkChanged");
        }
        catch (e)
        {
            this._log.error(e);
        }
    }

    /**
     * @function getLinkTo
     * @memberof Port
     * @instance
     * @param {Port} p2 otherPort
     * @description return link, which is linked to otherPort
     */
    getLinkTo(p2)
    {
        for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
    }

    /**
     * @function removeLinkTo
     * @memberof Port
     * @instance
     * @param {Port} p2 otherPort
     * @description removes link, which is linked to otherPort
     */
    removeLinkTo(p2)
    {
        for (const i in this.links)
        {
            if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
            {
                this.links[i].remove();
                if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

                if (this.onLinkChanged) this.onLinkChanged();
                this.emitEvent("onLinkChanged");
                this.emitEvent("onLinkRemoved");
                return;
            }
        }
    }

    /**
     * @function isLinkedTo
     * @memberof Port
     * @instance
     * @param {Port} p2 otherPort
     * @description returns true if port is linked to otherPort
     */
    isLinkedTo(p2)
    {
        for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

        return false;
    }

    _activity()
    {
        this.activityCounter++;
    }

    /**
     * @function trigger
     * @memberof Port
     * @instance
     * @description trigger the linked port (usually invoked on an output function port)
     */
    trigger()
    {
        const linksLength = this.links.length;

        this._activity();
        if (linksLength === 0) return;
        if (!this._op.enabled) return;

        let portTriggered = null;
        try
        {
            for (let i = 0; i < linksLength; ++i)
            {
                if (this.links[i].portIn)
                {
                    portTriggered = this.links[i].portIn;

                    portTriggered.op.patch.pushTriggerStack(portTriggered);
                    if (!portTriggered._onTriggered)
                    {
                        console.log(portTriggered, portTriggered._onTriggered);
                    }
                    portTriggered._onTriggered(null);

                    portTriggered.op.patch.popTriggerStack();
                }
                if (this.links[i]) this.links[i].activity();
            }
        }
        catch (ex)
        {
            portTriggered.op.enabled = false;

            if (this._op.patch.isEditorMode())
            {
                if (portTriggered.op.onError) portTriggered.op.onError(ex);
            }
            this._log.error("exception in port: ", portTriggered.name, portTriggered.op.name, portTriggered.op);
            this._log.error(ex);
        }
    }

    call()
    {
        this._log.warn("call deprecated - use trigger() ");
        this.trigger();
    }

    execute()
    {
    }

    /**
     * @param {string} n
     */
    setVariableName(n)
    {
        this.#useVariableName = n;

        this._op.patch.on("variableRename", (oldname, newname) =>
        {
            if (oldname != this.#useVariableName) return;
            this.#useVariableName = newname;
        });
    }

    getVariableName()
    {
        return this.#useVariableName;
    }

    /**
     * @param {String} v
     */
    setVariable(v)
    {
        this.setAnimated(false);
        const attr = { "useVariable": false };

        if (this._variableIn && this._varChangeListenerId)
        {
            this._variableIn.off(this._varChangeListenerId);
            this._variableIn = null;
        }

        if (v)
        {
            this._variableIn = this._op.patch.getVar(v);

            if (!this._variableIn)
            {
                this._log.warn("PORT VAR NOT FOUND!!!", v);
            }
            else
            {
                if (this.type == Port.TYPE_OBJECT)
                {
                    this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
                }
                else
                {
                    this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
                }
                this.set(this._variableIn.getValue());
            }
            this.#useVariableName = v;
            attr.useVariable = true;
            attr.variableName = this.#useVariableName;
        }
        else
        {
            attr.variableName = this.#useVariableName = null;
            attr.useVariable = false;
        }

        this.setUiAttribs(attr);
        this._op.patch.emitEvent("portSetVariable", this._op, this, v);
    }

    /**
     * @param {boolean} a
     */
    _handleNoTriggerOpAnimUpdates(a)
    {
        let hasTriggerPort = false;
        // for (let i = 0; i < this._op.portsIn.length; i++)
        // {
        //     if (this._op.portsIn[i].type == Port.TYPE_FUNCTION)
        //     {
        //         hasTriggerPort = true;
        //         break;
        //     }
        // }

        if (!hasTriggerPort)
        {
            if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame", () =>
            {
                this.updateAnim();
            });
            else if (this._notriggerAnimUpdate) this._notriggerAnimUpdate = this._op.patch.off(this._notriggerAnimUpdate);
        }
    }

    /**
     * @param {boolean} a
     */
    setAnimated(a)
    {
        if (this.#animated != a)
        {
            this.#animated = a;
            this._op.hasAnimPort = true;

            if (this.#animated && !this.anim)
            {
                this.anim = new Anim({ "name": "port " + this.name });
                this.anim.on("onChange", () =>
                {
                    this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
                });
            }
            this._onAnimToggle();
        }

        this._handleNoTriggerOpAnimUpdates(a);
        if (!a)
        {
            this.anim = null;
        }

        this._op.patch.emitEvent("portAnimToggle", this._op, this, this.anim);

        this.setUiAttribs({ "isAnimated": this.#animated });
    }

    toggleAnim()
    {
        this.#animated = !this.#animated;
        if (this.#animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.on("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this.setAnimated(this.#animated);
        this._onAnimToggle();
        this.setUiAttribs({ "isAnimated": this.#animated });
        this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
    }

    /**
     * <pre>
     * CABLES.Port.TYPE_VALUE = 0;
     * CABLES.Port.TYPE_FUNCTION = 1;
     * CABLES.Port.TYPE_OBJECT = 2;
     * CABLES.Port.TYPE_TEXTURE = 2;
     * CABLES.Port.TYPE_ARRAY = 3;
     * CABLES.Port.TYPE_DYNAMIC = 4;
     * CABLES.Port.TYPE_STRING = 5;
     * </pre>
     * @function getType
     * @memberof Port
     * @instance
     * @return {Number} type of port
     */
    getType()
    {
        return this.type;
    }

    /**
     * @function isLinked
     * @memberof Port
     * @instance
     * @return {Boolean} true if port is linked
     */
    isLinked()
    {
        return this.links.length > 0 || this.#animated || this.#useVariableName != null;
    }

    isBoundToVar()
    {
        const b = this.#useVariableName != null;
        this.uiAttribs.boundToVar = b;
        return b;
    }

    /**
     * @return {Boolean} true if port is animated
     */
    isAnimated()
    {
        return this.#animated;
    }

    /**
     * @function isHidden
     * @memberof Port
     * @instance
     * @return {Boolean} true if port is hidden
     */
    isHidden()
    {
        return this.uiAttribs.hidePort;
    }

    /**
     * @function onTriggered
     * @memberof Port
     * @instance
     * @param {function} a onTriggeredCallback
     * @description set callback, which will be executed when port was triggered (usually output port)
     */
    _onTriggered(a)
    {
        this._activity();
        this._op.updateAnims();
        if (this._op.enabled && this.onTriggered) this.onTriggered(a);

        if (this._op.enabled) this.emitEvent("trigger");
    }

    /**
     * @param {any} v
     */
    _onSetProfiling(v) // used in editor: profiler tab
    {
        this._op.patch.profiler.add("port", this);
        this.setValue(v);
        this._op.patch.profiler.add("port", null);
    }

    _onTriggeredProfiling() // used in editor: profiler tab
    {
        if (this._op.enabled && this.onTriggered)
        {
            this._op.patch.profiler.add("port", this);
            this.onTriggered();
            this._op.patch.profiler.add("port", null);
        }
    }

    /**
     * @deprecated
     * @param {function} cb
     */
    onValueChange(cb)
    {
        this.onChange = cb;
    }

    /**
     * @deprecated
     */
    hidePort() {}
}

/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == Port.TYPE_VALUE) return "value";
    if (type == Port.TYPE_FUNCTION) return "function";
    if (type == Port.TYPE_OBJECT) return "object";
    if (type == Port.TYPE_ARRAY) return "array";
    if (type == Port.TYPE_STRING) return "string";
    if (type == Port.TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};

;// CONCATENATED MODULE: ./src/core/core_link.js




/**
 * @namespace external:CABLES#Link
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
class Link extends Events
{

    /**
     * @param {Patch} p
     */
    constructor(p)
    {
        super();

        this.id = CABLES.simpleId();

        /**
         * @type {Port}
         */
        this.portIn = null;

        /**
         * @type {Port}
         */
        this.portOut = null;

        /**
         * @type {Patch}
         */
        this._patch = p;
        this.activityCounter = 0;
        this.ignoreInSerialize = false;
    }

    /**
     * @param {any} v
     */
    setValue(v)
    {
        if (v === undefined) this._setValue();
        else this.portIn.set(v);
    }

    activity()
    {
        this.activityCounter++;
    }

    _setValue()
    {
        if (!this.portOut)
        {
            this.remove();
            return;
        }
        const v = this.portOut.get();

        if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
        {
            if (this.portIn.type != Port.TYPE_FUNCTION) this.activity();

            if (this.portIn.get() !== v)
            {
                this.portIn.set(v);
            }
            else
            {
                if (this.portIn.changeAlways) this.portIn.set(v);
                if (this.portOut.forceRefChange) this.portIn.forceChange();
            }
        }
    }

    /**
     * @function getOtherPort
     * @memberof Link
     * @instance
     * @param {Port} p port
     * @description returns the port of the link, which is not port
     */
    getOtherPort(p)
    {
        if (p == this.portIn) return this.portOut;
        return this.portIn;
    }

    /**
     * @function remove
     * @memberof Link
     * @instance
     * @description unlink/remove this link from all ports
     */
    remove()
    {
        if (this.portIn) this.portIn.removeLink(this);
        if (this.portOut) this.portOut.removeLink(this);
        if (this._patch)
        {
            this._patch.emitEvent("onUnLink", this.portIn, this.portOut, this);
        }

        if (this.portIn && (this.portIn.type == Port.TYPE_OBJECT || this.portIn.type == Port.TYPE_ARRAY))
        {
            this.portIn.set(null);
            if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
        }

        if (this.portIn) this.portIn.op._checkLinksNeededToWork();
        if (this.portOut) this.portOut.op._checkLinksNeededToWork();

        this.portIn = null;
        this.portOut = null;
        this._patch = null;
    }

    /**
     * @function link
     * @memberof Link
     * @instance
     * @description link those two ports
     * @param {Port} p1 port1
     * @param {Port} p2 port2
     */
    link(p1, p2)
    {
        if (!Link.canLink(p1, p2))
        {
            console.warn("[core_link] cannot link ports!", p1, p2);
            return false;
        }

        if (p1.direction == Port.DIR_IN)
        {
            this.portIn = p1;
            this.portOut = p2;
        }
        else
        {
            this.portIn = p2;
            this.portOut = p1;
        }

        p1.addLink(this);
        p2.addLink(this);

        this.setValue();

        p1.op._checkLinksNeededToWork();
        p2.op._checkLinksNeededToWork();
    }

    getSerialized()
    {
        const obj = {};

        obj.portIn = this.portIn.getName();
        obj.portOut = this.portOut.getName();
        obj.objIn = this.portIn.op.id;
        obj.objOut = this.portOut.op.id;

        return obj;
    }
}

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == Port.DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != Port.TYPE_DYNAMIC && p2.type != Port.TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == Port.TYPE_OBJECT && p2.type == Port.TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }

    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == Port.DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == Port.DIR_IN && p2.isAnimated()) return "can not link: is animated";

    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == Port.DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == Port.DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == Port.TYPE_OBJECT && p2.type == Port.TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != Port.TYPE_DYNAMIC && p2.type != Port.TYPE_DYNAMIC)) return false;
    if (p1.type == Port.TYPE_DYNAMIC || p2.type == Port.TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};

;// CONCATENATED MODULE: ./src/core/core_port_switch.js


class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}

;// CONCATENATED MODULE: ./src/core/core_port_select.js


class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}

;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, Port.TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || false;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};

                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];

                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && !gui.isRemoteClient && gui.patchView && gui.patchView.patchRenderer && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?");
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }

                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }

            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                if (po.multiPortChangeListener) po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                if (po.multiLinkChangeListener) po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));

                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == Port.TYPE_NUMBER) po.setInitialValue(0);
            else if (type == Port.TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });

        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_texture.js
const DEFAULT_TEXTURE_SIZE = 8;

/**
 * @typedef {Object} CglTextureOptions
 * @property {number} [width]
 * @property {number} [height]
 * @property {string} [pixelformat]
 */
class CgTexture
{

    /**
     * @param {CglTextureOptions} options={}
     */
    constructor(options = {})
    {
        this.id = CABLES.uuid();
        this.width = 0;
        this.height = 0;
        this.name = "unknown";

        options = options || {};
        this.pixelFormat = options.pixelFormat || CgTexture.PFORMATSTR_RGBA8UB;

        this.name = options.name || "unknown";

        if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
        if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;
    }
}

CgTexture.getDefaultTextureData = (name, size, options = {}) =>
{
    if (name == "empty")
    {
        return new Uint8Array(size * size * 4).fill(0);
    }
    else
    if (name == "color")
    {
        const data = new Uint8Array(size * size * 4);
        let r = options.r || 1;
        let g = options.g || 1;
        let b = options.b || 1;

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = r;
            data[x * 4 + 1] = g;
            data[x * 4 + 2] = b;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "randomUInt")
    {
        const data = new Uint8Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = Math.random() * 255;
            data[x * 4 + 1] = Math.random() * 255;
            data[x * 4 + 2] = Math.random() * 255;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "random" || name == "randomFloat")
    {
        const data = new Float32Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 3] = 1;
        }
        return data;
    }
    else
    if (name == "stripes")
    {
        const arr = [];

        let r = options.r;
        let g = options.g;
        let b = options.b;

        if (r === undefined)r = 1;
        if (g === undefined)g = 1;
        if (b === undefined)b = 1;

        for (let y = 0; y < size; y++)
        {
            for (let x = 0; x < size; x++)
            {
                if ((x + y) % 64 < 32)
                {
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
                }
                else
                {
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
                }
                arr.push(255);
            }
        }

        return new Uint8Array(arr);
    }
    else
    {
        console.warn("unknown default texture", name);
        return CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 });
    }
};

CgTexture.FILTER_NEAREST = 0;
CgTexture.FILTER_LINEAR = 1;
CgTexture.FILTER_MIPMAP = 2;

CgTexture.WRAP_REPEAT = 0;
CgTexture.WRAP_MIRRORED_REPEAT = 1;
CgTexture.WRAP_CLAMP_TO_EDGE = 2;

CgTexture.TYPE_DEFAULT = 0;
CgTexture.TYPE_DEPTH = 1;
CgTexture.TYPE_FLOAT = 2;

CgTexture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

CgTexture.PFORMATSTR_R8UB = "R 8bit ubyte";
CgTexture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
CgTexture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
CgTexture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

CgTexture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

CgTexture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

CgTexture.PFORMATSTR_R16F = "R 16bit float";
CgTexture.PFORMATSTR_RG16F = "RG 16bit float";
CgTexture.PFORMATSTR_RGB16F = "RGB 16bit float";
CgTexture.PFORMATSTR_RGBA16F = "RGBA 16bit float";

CgTexture.PFORMATSTR_R32F = "R 32bit float";
CgTexture.PFORMATSTR_RG32F = "RG 32bit float";
CgTexture.PFORMATSTR_RGB32F = "RGB 32bit float";
CgTexture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

CgTexture.PFORMATSTR_DEPTH = "DEPTH";

CgTexture.PIXELFORMATS = [

    CgTexture.PFORMATSTR_RGB565,

    CgTexture.PFORMATSTR_R8UB,
    CgTexture.PFORMATSTR_RG8UB,
    CgTexture.PFORMATSTR_RGB8UB,
    CgTexture.PFORMATSTR_RGBA8UB,

    CgTexture.PFORMATSTR_SRGBA8,

    CgTexture.PFORMATSTR_R11FG11FB10F,
    CgTexture.PFORMATSTR_R16F,
    CgTexture.PFORMATSTR_RG16F,
    CgTexture.PFORMATSTR_RGBA16F,

    CgTexture.PFORMATSTR_R32F,
    CgTexture.PFORMATSTR_RGBA32F

];

;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js





const cgl_texture_DEFAULT_TEXTURE_SIZE = 8;

const log = new Logger("cgl_texture");

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {CglContext} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
class Texture extends CgTexture
{

    /**
     * @param {CglContext} __cgl
     */
    constructor(__cgl, options = {})
    {
        super(options);
        if (!__cgl) throw new Error("no cgl");

        this._cgl = __cgl;
        this._log = new Logger("tex");
        this.tex = this._cgl.gl.createTexture();
        this.loading = false;
        this.flip = true;
        this.flipped = false;
        this.shadowMap = false;
        this.deleted = false;
        this.image = null;
        this.anisotropic = 0;
        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.texTarget = this._cgl.gl.TEXTURE_2D;
        if (options && options.type) this.texTarget = options.type;
        this.textureType = Texture.TYPE_DEFAULT;
        this.unpackAlpha = true;
        this._fromData = true;

        this._glDataType = -1;
        this._glInternalFormat = -1;
        this._glDataFormat = -1;

        if (options)
        {
            if (options.isDepthTexture) this.textureType = Texture.TYPE_DEPTH;
            if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

            if ("textureType" in options) this.textureType = options.textureType;
            if ("filter" in options) this.filter = options.filter;
            if ("wrap" in options) this.wrap = options.wrap;
            if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
            if ("flip" in options) this.flip = options.flip;
            if ("shadowMap" in options) this.shadowMap = options.shadowMap;
            if ("anisotropic" in options) this.anisotropic = options.anisotropic;
        }
        else
        {
            options = {};
        }

        if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

        if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;

        this._cgl.profileData.profileTextureNew++;

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
        this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

        this.setSize(options.width, options.height);
        this.getInfoOneLine();
    }

    isFloatingPoint()
    {
        return Texture.isPixelFormatFloat(this.pixelFormat);
    }

    /**
     * returns true if otherTexture has same options (width/height/filter/wrap etc)
     * @function compareSettings
     * @memberof Texture
     * @instance
     * @param {Texture} tex otherTexture
     * @returns {Boolean}
     */
    compareSettings(tex)
    {
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

        if (!tex) return false;
        return (
            tex.width == this.width &&
            tex.height == this.height &&
            tex.filter == this.filter &&
            tex.wrap == this.wrap &&
            tex.textureType == this.textureType &&
            tex.unpackAlpha == this.unpackAlpha &&
            tex.anisotropic == this.anisotropic &&
            tex.shadowMap == this.shadowMap &&
            tex.texTarget == this.texTarget &&
            tex.flip == this.flip
        );
    }

    /**
     * returns a new texture with the same settings (does not copy texture itself)
     * @function clone
     * @memberof Texture
     * @instance
     * @returns {Texture}
     */
    clone()
    {
        const newTex = new Texture(this._cgl, {
            "name": this.name,
            "filter": this.filter,
            "anisotropic": this.anisotropic,
            "wrap": this.wrap,
            "textureType": this.textureType,
            "pixelFormat": this.pixelFormat,
            "unpackAlpha": this.unpackAlpha,
            "flip": this.flip,
            "width": this.width,
            "height": this.height,
        });

        this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

        if (!this.compareSettings(newTex))
        {
            this._log.error("Cloned texture settings do not compare!");
            this._log.error(this);
            this._log.error(newTex);
        }

        return newTex;
    }

    /**
     * @param {object} o
     */
    setFormat(o)
    {
        this.pixelFormat = o.pixelFormat;
        this._glDataFormat = o.glDataFormat;
        this._glInternalFormat = o.glInternalFormat;
        this._glDataType = o.glDataType;
    }

    /**
     * set pixel size of texture
     * @function setSize
     * @memberof Texture
     * @instance
     * @param {Number} w width
     * @param {Number} h height
     */
    setSize(w, h)
    {
        if (this._cgl.aborted) return;
        if (w != w || w <= 0 || !w) w = cgl_texture_DEFAULT_TEXTURE_SIZE;
        if (h != h || h <= 0 || !h) h = cgl_texture_DEFAULT_TEXTURE_SIZE;

        if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

        w = Math.min(w, this._cgl.maxTexSize);
        h = Math.min(h, this._cgl.maxTexSize);

        w = Math.floor(w);
        h = Math.floor(h);
        if (this.width == w && this.height == h) return;

        w = this._cgl.checkTextureSize(w);
        h = this._cgl.checkTextureSize(h);

        this.width = w;
        this.height = h;
        this.deleted = false;

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

        this._cgl.gl.bindTexture(this.texTarget, this.tex);
        this._cgl.profileData.profileTextureResize++;

        const uarr = null;

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

        this._setFilter();

        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
    }

    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        this.filter = filter;
        this.wrap = wrap;
        if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
        if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.width = w;
        this.height = h;
        this._fromData = true;
        this.deleted = false;

        if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", this.width, this.height, this._cgl.maxTexSize);
            return;
        }

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

        this._setFilter();
        this.updateMipMap();

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
        this._cgl.gl.bindTexture(this.texTarget, null);
    }

    updateMipMap()
    {
        if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.generateMipmap(this.texTarget);
            this._cgl.profileData.profileGenMipMap++;
        }
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter = null)
    {
        this._cgl.printError("before initTexture");
        this._cgl.checkFrameStarted("texture inittexture");
        this._fromData = false;

        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
        if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

        if (filter !== null) this.filter = filter; // todo: can we remove this filter param?

        if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", img.width, img.height, this._cgl.maxTexSize);
            return;
        }

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.deleted = false;
        this.flipped = !this.flip;
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);

        this._setFilter();
        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

        this.getInfoOneLine();
        this._cgl.printError("initTexture");
    }

    /**
     * delete texture. use this when texture is no longer needed
     * @function delete
     * @memberof Texture
     * @instance
     */
    dispose()
    {
        this.delete();
    }

    delete()
    {
        if (this.loading)
        {
            // cant delete texture when still loading
            // setTimeout(this.delete.bind(this), 50);
            return;
        }

        this.deleted = true;
        this.width = 0;
        this.height = 0;
        this._cgl.profileData.profileTextureDelete++;
        this._cgl.gl.deleteTexture(this.tex);
        this.image = null;

        this.tex = null;
    }

    /**
     * @function isPowerOfTwo
     * @memberof Texture
     * @instance
     * @description return true if texture width and height are both power of two
     * @return {Boolean}
     */
    isPowerOfTwo()
    {
        return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
    }

    printInfo()
    {
        log.log(this.getInfo());
    }

    getInfoReadable()
    {
        const info = this.getInfo();
        let html = "";

        info.name = info.name.substr(0, info.name.indexOf("?rnd="));

        for (const i in info)
        {
            html += "* " + i + ":  **" + info[i] + "**\n";
        }

        return html;
    }

    getInfoOneLine()
    {
        let txt = "" + this.width + "x" + this.height;
        txt += " ";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += this.pixelFormat;

        if (this.filter === Texture.FILTER_NEAREST) txt += " nearest";
        if (this.filter === Texture.FILTER_LINEAR) txt += " linear";
        if (this.filter === Texture.FILTER_MIPMAP) txt += " mipmap";

        if (this.wrap === Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
        if (this.wrap === Texture.WRAP_REPEAT) txt += " repeat";
        if (this.wrap === Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

        this.shortInfoString = txt;

        return txt;
    }

    getInfoOneLineShort()
    {
        let txt = "" + this.width + "x" + this.height;
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += " ";
        txt += this.pixelFormat;

        this.shortInfoString = txt;

        return txt;
    }

    getInfo()
    {
        return Texture.getTexInfo(this);
    }

    _setFilter()
    {
        this._cgl.printError("before _setFilter");

        if (!this._fromData)
        {
            this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        }

        if (this.shadowMap)
        {
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
        }

        if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
        {
            this.filter = Texture.FILTER_LINEAR;
            this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
        }

        if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

            this.filter = Texture.FILTER_NEAREST;
            this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        }
        else
        {
            if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
            }
            else if (this.wrap == Texture.WRAP_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
            }
            else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
            }

            if (this.filter == Texture.FILTER_NEAREST)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
            }
            else if (this.filter == Texture.FILTER_LINEAR)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            }
            else if (this.filter == Texture.FILTER_MIPMAP)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
            }
            else
            {
                this._log.log("unknown texture filter!", this.filter);
                throw new Error("unknown texture filter!" + this.filter);
            }

            if (this.anisotropic)
            {
                const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");

                if (this._cgl.maxAnisotropic)
                {
                    const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                    this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
                }
            }
        }
        this.getInfoOneLine();
        this._cgl.printError("_setFilter");
    }
}

/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {CglContext} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};

/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 // * @param {CglContext} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {CglContext} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};

/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    let size = 8;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = Texture.getDefaultTextureData("empty", size);

    cgl.tempTextureEmpty.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};

/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomUInt", size);

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomFloat", size);

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param {CglContext} cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = Texture.getDefaultTextureData("color", size, { "r": 0, "g": 0, "b": 0 });

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};

/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;

    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }

    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};

Texture.getTempGradientTexture = function (cgl) // deprecated...
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");
    return Texture.getTempTexture(cgl);
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    const data = Texture.getDefaultTextureData("stripes", 256, { "r": r, "g": g, "b": b });
    const temptex = new Texture(cgl);
    temptex.initFromData(data, size, size, filter, wrap);
    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {CglContext} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};

Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log(new Error());
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;
    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.includes("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }

    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        log.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.includes("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }

    o.numColorChannels = Texture.getPixelFormatNumChannels(pixelFormatStr);

    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) log.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};

Texture.getPixelFormatNumChannels =
    (pxlFrmtStr) =>
    {
        if (pxlFrmtStr.startsWith("RGBA")) return 4;
        if (pxlFrmtStr.startsWith("RGB")) return 3;
        if (pxlFrmtStr.startsWith("RG")) return 2;
        return 1;
    };

Texture.isPixelFormatFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").includes("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").includes("float") && (pxlFrmtStr || "").includes("16bit");
    };

;// CONCATENATED MODULE: ./src/core/core_op.js










/**
 * @typedef Translation
 * @property {string} [x]
 * @property {string} [y]
 */

/**
 * configuration object for loading a patch
 * @typedef OpUiAttribs
 * @property {string} [title] overwrite op title
 * @property {string} [hidePort] hidePort
 * @property {string} [title] overwrite op title
 * @property {String} [title=''] overwrite title of port (by default this is portname)
 * @property {string} [extendTitle] extended op title, shown in grey next to op name
 * @property {object} [storage] internal - do not use manualy
 * @property {boolean} [working] internal - do not use manualy
 * @property {boolean} [bookmarked] internal - do not use manualy
 * @property {boolean} [selected] internal - do not use manualy
 * @property {boolean} [disabled] internal - do not use manualy
 * @property {object} [uierrors] internal - do not use manualy - use op.setUiError
 * @property {string} [color]
 * @property {string} [comment]
 * @property {Translation} [translate]
 * @property {string} [subPatch] internal - do not use manualy - use op.setUiError
 */

/**
 * @typedef CorePatch
 * @type Patch
 */

/**
 * @template {CorePatch} Patch
 */
class Op extends Events
{
    static OP_VERSION_PREFIX = "_v";

    #objName = "";
    _log = new Logger("core_op");
    #name = "";
    #shortOpName = "";

    opId = ""; // unique op id

    /** @type {Array<Port>} */
    portsOut = [];

    /** @type {Patch} */
    patch = null;

    data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    storage = {}; // op-specific data to be included in export

    /** @type {Array<Port>} */
    portsIn = [];
    portsInData = []; // original loaded patch data

    /** @type {OpUiAttribs} */
    uiAttribs = {};
    enabled = true;

    onAnimFrame = null;

    preservedPortTitles = {};
    preservedPortValues = {};
    preservedPortLinks = {};

    linkTimeRules = {
        "needsLinkedToWork": [],
        "needsStringToWork": [],
        "needsParentOp": null
    };

    shouldWork = {};
    hasUiErrors = 0;

    /** @type {Object} */
    uiErrors = {};
    hasAnimPort = false;

    /** @type {Port} */
    patchId = null; // will be defined by subpatchops

    /**
     * Description
     * @param {Patch} _patch
     * @param {String} _objName
     * @param {String} _id=null
    */
    constructor(_patch, _objName, _id = null)
    {
        super();

        this.#name = _objName;
        this.opId = _id;
        this.#objName = _objName;
        this.patch = _patch;

        this.#shortOpName = CABLES.getShortOpName(_objName);
        this.getTitle();

        this.id = _id || shortId(); // instance id
        this.onAddPort = null;
        this.onCreate = null;
        this.onResize = null;
        this.onLoaded = null;
        this.onDelete = null;
        this.onError = null;

        this._instances = null;

        /**
         * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
         * @function preRender
         * @memberof Op
         * @instance
         */
        this.preRender = null;

        /**
         * overwrite this to initialize your op
         * @function init
         * @memberof Op
         * @instance
         */
        this.init = null;

        /**
         * Implement to render 2d canvas based graphics from in an op - optionaly defined in op instance
         * @function renderVizLayer
         * @instance
         * @memberof Op
         * @param {CanvasRenderingContext2D} context of canvas 2d
         * @param {Object} layer info
         * @param {number} layer.x x position on canvas
         * @param {number} layer.y y position on canvas
         * @param {number} layer.width width of canvas
         * @param {number} layer.height height of canvas
         * @param {number} layer.scale current scaling of patchfield view
         */
        this.renderVizLayer = null;
    }

    isInBlueprint2() // will be overwritten in ui
    {
        return false;
    }

    get name()
    {
        return this.getTitle();
    }

    set name(n)
    {
        this.setTitle(n);
    }

    /**
     * @param {string} on
     */
    set _objName(on)
    {
        this.#objName = on;
        this._log = new Logger("op " + on);
    }

    get objName()
    {
        return this.#objName;
    }

    get shortName()
    {
        return this.#shortOpName;
    }

    /**
     * op.require
     *
     * @param {String} name - module name
     * @returns {Object}
     */
    require(name)
    {
        if (CABLES.platform && CABLES.StandaloneElectron && !CABLES.platform.frontendOptions.isElectron)
            this.setUiError("notstandalone", "This op will only work in cables standalone version", 3);

        return null;
    }

    checkMainloopExists()
    {
        if (!CABLES.UI) return;
        if (!this.patch.tempData.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    }

    /** @returns {string} */
    getTitle()
    {
        if (!this.uiAttribs) return "nouiattribs" + this.#name;

        /*
         * if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
         *     this.uiAttribs.title = this._shortOpName;
         */

        return this.uiAttribs.title || this.#shortOpName;
    }

    /**
     * @param {string} title
     */
    setTitle(title)
    {

        /*
         * this._log.log("settitle", title);
         * this._log.log(
         *     (new Error()).stack
         * );
         */

        if (title != this.getTitle()) this._setUiAttrib({ "title": title });
    }

    /**
     * @param {Object} newAttribs
     */
    setStorage(newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    }

    isSubPatchOp()
    {
        if (this.patchId && this.storage) return (this.storage.subPatchVer || this.storage.blueprintVer || 0);
        return false;
    }

    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {OpUiAttribs} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    setUiAttrib(newAttribs)
    {
        this._setUiAttrib(newAttribs);
    }

    /**
     * @deprecated
     * @param {OpUiAttribs} a
     */
    setUiAttribs(a)
    {
        this._setUiAttrib(a);
    }

    /**
     * @deprecated
     * @param {OpUiAttribs} a
     */
    uiAttr(a)
    {
        this._setUiAttrib(a);
    }

    /**
     * @param {OpUiAttribs} newAttribs
     */
    _setUiAttrib(newAttribs)
    {
        if (!newAttribs) return;

        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;

        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }

        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;

        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }

        if (emitMove) this.emitEvent("move");
    }

    getName()
    {
        if (this.uiAttribs.name)
        {
            console.log("uiattr name exist!");// otherwise delete
            return this.uiAttribs.name;
        }
        return this.#name;
    }

    /**
     * @param {Port} p
     */
    addOutPort(p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    }

    hasDynamicPort()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == Port.TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == Port.TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    }

    /**
     * @param {any|Port | MultiPort} p
     */
    addInPort(p)
    {
        // if (!(p instanceof Port)) throw new Error("parameter is not a port!", p);
        // if (!(p instanceof Port) && !(p instanceof MultiPort)) throw new Error("parameter is not a port!", p);

        // console.log("a", p.constructor.name);

        p.direction = Port.DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    }

    /**
     * @deprecated
     */
    inFunction(name, v)
    {
        return this.inTrigger(name, v);
    }

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} v
     * @return {Port} created port
     *
     */
    inTrigger(name, v)
    {
        const p = this.addInPort(new Port(this, name, Port.TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} v
     * @return {Port} created port
     */
    inTriggerButton(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @param {string} name
     * @param {any} v
     */
    inUiTriggerButtons(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @deprecated
     */
    inValueFloat(name, v)
    {
        return this.inFloat(name, v);
    }

    /**
     * @deprecated
     */
    inValue(name, v)
    {
        return this.inFloat(name, v);
    }

    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} v
     * @return {Port} created port
     */
    inFloat(name, v)
    {
        const p = this.addInPort(new Port(this, name, Port.TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    }

    /**
     * @deprecated
     */
    inValueBool(name, v)
    {
        return this.inBool(name, v);
    }

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean|number} v
     * @return {Port} created port
     */
    inBool(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    }

    /**
     * @param {string} name
     * @param {number} type
     */
    inMultiPort(name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            Port.DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    }

    /**
     * @param {string} name
     * @param {number} type
     */
    outMultiPort(name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    }

    /**
     * @param {string} name
     * @param {string} v
     */
    inValueString(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    }

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} v default value
     * @return {Port} created port
     */
    inString(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    }

    // /**
    //  * create a String value input port displayed as TextArea
    //  * @function inValueText
    //  * @instance
    //  * @memberof Op
    //  * @param {String} name
    //  * @param {String} v default value
    //  * @return {Port} created port
    //  */
    // inValueText(name, v)
    // {
    //     const p = this.addInPort(
    //         new Port(this, name, Port.TYPE_VALUE, {
    //             "type": "string",
    //             "display": "text"
    //         })
    //     );
    //     p.value = "";

    //     p.setInitialValue(v);

    //     /*
    //      * if (v !== undefined)
    //      * {
    //      *     p.set(v);
    //      *     p.defaultValue = v;
    //      * }
    //      */
    //     return p;
    // }

    /**
     * @param {string} name
     * @param {string} v
     */
    inTextarea(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} v default value
     * @param {String} syntax language
     * @param {Boolean} hideFormatButton
     * @return {Port} created port
     */
    inStringEditor(name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     *
     * @param {string} name
     * @param {String} v
     * @param {String} syntax
     */
    inValueEditor(name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * @deprecated
     * @param {string} name
     * @param {any[]} values
     * @param {string} v
     * @param {boolean} noindex
     */
    inValueSelect(name, values, v, noindex)
    {
        return this.inDropDown(name, values, v, noindex);
    }

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} v default value
     * @return {Port} created port
     * @param {boolean} [noindex]
     */
    inDropDown(name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", Port.TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                Port.TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n

            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (/** @type {any} */ val, /** @type {Port} */ thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = () =>
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, Port.TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                "values": values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    }

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} v default value
     * @param {boolean} noindex
     * @return {Port} created port
     */
    inSwitch(name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", Port.TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                Port.TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, Port.TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    }

    /**
     * @deprecated
     */
    inValueInt(name, v)
    {
        return this.inInt(name, v);
    }

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} v default value
     * @return {Port} created port
     */
    inInt(name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "increment": "integer" })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} filter
     * @param {String} v
     * @return {Port} created port
     */
    inFile(name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * @deprecated
     */
    inUrl(name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    inTexture(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Object} v
     * @param {String} objType
     * @return {Port} created port
     */
    inObject(name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, Port.TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @param {string} name
     * @param {string} v
     */
    inGradient(name, v)
    {
        const p = this.addInPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @param {Port} p
     * returns {number}
     */
    getPortVisibleIndex(p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    }

    /**
     * create a array input port
     * @param {String} name
     * @param {Array|Number} v
     * @param {Number} _stride
     * @return {Port} created port
     */
    inArray(name, v = undefined, _stride = undefined)
    {
        let stride = _stride;
        // @ts-ignore
        if (!_stride && CABLES.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, Port.TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        return p;
    }

    /**
     * @deprecated
     */
    inValueSlider(name, v, min, max)
    {
        return this.inFloatSlider(name, v, min, max);
    }

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} v
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    inFloatSlider(name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, Port.TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    /**
     * @deprecated
     */
    outFunction(name, v)
    {
        return this.outTrigger(name, v);
    }

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} v
     * @return {Port} created port
     */
    outTrigger(name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, Port.TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @deprecated
     */
    outValue(name, v)
    {
        return this.outNumber(name, v);
    }

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} v default value
     * @return {Port} created port
     */
    outNumber(name, v)
    {
        const p = this.addOutPort(new Port(this, name, Port.TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * @deprecated
     */
    outValueBool(name, v)
    {
        return this.outBool(name, v);
    }

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {boolean} v default value
     * @return {Port} created port
     */
    outBool(name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    }

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    outBoolNum(name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    }

    /**
     * @deprecated
     */
    outValueString(name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, Port.TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    }

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} v
     * @return {Port} created port
     */
    outString(name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, Port.TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    }

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    outObject(name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, Port.TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    }

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    outArray(name, v, stride)
    {
        if (!stride && CABLES.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, Port.TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    }

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    outTexture(name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, Port.TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.setRef(v || Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    }

    /**
     * @deprecated
     */
    inDynamic(name, filter, options, v)
    {
        const p = new Port(this, name, Port.TYPE_DYNAMIC, options);

        p.shouldLink = (p1, p2) =>
        {
            if (filter && CABLES.isArray(filter))
            {
                // for (let i = 0; i < filter.length; i++)
                // {
                // if (p1 == this && p2.type === filter[i]) return true;
                // if (p2 == this && p1.type === filter[i]) return true;
                // }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    }

    removeLinks()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    }

    getSerialized()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this.#shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this.#shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    }

    getFirstOutPortByType(type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    }

    getFirstInPortByType(type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    }

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {boolean} [lowerCase]
     * @return {Port}
     */
    getPort(name, lowerCase = false)
    {
        return this.getPortByName(name, lowerCase);
    }

    /**
     * @param {string} name
     * @param {boolean} [lowerCase]
     * @returns {Port}
     */
    getPortByName(name, lowerCase = false)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    }

    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    getPortById(id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    }

    updateAnims()
    {
        if (this.hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    }

    log()
    {
        this._log.log(...arguments);
    }

    /**
     * @deprecated
     */
    error()
    {
        this._log.error(...arguments);
    }

    logError()
    {
        this._log.error(...arguments);
    }

    /**
     * @deprecated
     */
    warn()
    {
        this._log.warn(...arguments);
    }

    logWarn()
    {
        this._log.warn(...arguments);
    }

    /**
     * @deprecated
     */
    verbose()
    {
        this._log.verbose(...arguments);
    }

    logVerbose()
    {
        this._log.verbose(...arguments);
    }

    profile()
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    }

    // findParent(objName)
    // {
    //     for (let ipi = 0; ipi < this.portsIn.length; ipi++)
    //     {
    //         if (this.portsIn[ipi].isLinked())
    //         {
    //             if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
    //                 return this.portsIn[ipi].links[0].portOut.parent;

    //             let found = null;
    //             found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
    //             if (found) return found;
    //         }
    //     }
    //     return null;
    // }

    // todo: check instancing stuff?
    cleanUp()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
                if (this._instances[i].onDelete) this._instances[i].onDelete();

            this._instances.length = 0;
        }

        for (let i = 0; i < this.portsIn.length; i++)
            this.portsIn[i].setAnimated(false);

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    }

    // todo: check instancing stuff?
    instanced(triggerPort)
    {
        return false;

        /*
         * this._log.log("instanced", this.patch.instancing.numCycles());
         * if (this.patch.instancing.numCycles() === 0) return false;
         */

        /*
         * let i = 0;
         * let ipi = 0;
         * if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
         * {
         *     if (!this._instances) this._instances = [];
         *     this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
         *     this._instances.length = this.patch.instancing.numCycles();
         */

        /*
         *     for (i = 0; i < this._instances.length; i++)
         *     {
         *         this._instances[i] = this.patch.createOp(this.objName, true);
         *         this._instances[i].instanced ()
         *         {
         *             return false;
         *         };
         *         this._instances[i].uiAttr(this.uiAttribs);
         */

        /*
         *         for (let ipo = 0; ipo < this.portsOut.length; ipo++)
         *         {
         *             if (this.portsOut[ipo].type == Port.TYPE_FUNCTION)
         *             {
         *                 this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
         *             }
         *         }
         *     }
         */

        /*
         *     for (ipi = 0; ipi < this.portsIn.length; ipi++)
         *     {
         *         this.portsIn[ipi].onChange = null;
         *         this.portsIn[ipi].onValueChanged = null;
         *     }
         * }
         */

        /*
         * const theTriggerPort = null;
         * for (ipi = 0; ipi < this.portsIn.length; ipi++)
         * {
         *     if (
         *         this.portsIn[ipi].type == Port.TYPE_VALUE ||
         *         this.portsIn[ipi].type == Port.TYPE_ARRAY
         *     )
         *     {
         *         this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
         *     }
         *     if (this.portsIn[ipi].type == Port.TYPE_FUNCTION)
         *     {
         *         // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
         *         // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
         *     }
         * }
         */

        // if (theTriggerPort) theTriggerPort.onTriggered();

        /*
         * for (ipi = 0; ipi < this.portsOut.length; ipi++)
         * {
         *     if (this.portsOut[ipi].type == Port.TYPE_VALUE)
         *     {
         *         this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
         *     }
         * }
         */

        // return true;
    }

    // todo: check instancing stuff?
    initInstancable()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==Port.TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==Port.TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    }

    // setValues(obj)
    // {
    //     for (const i in obj)
    //     {
    //         const port = this.getPortByName(i);
    //         if (port) port.set(obj[i]);
    //         else this._log.warn("op.setValues: port not found:", i);
    //     }
    // }

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @param {String} id
     * @returns {Boolean} - has id
     */
    hasUiError(id)
    {
        return this.uiErrors.hasOwnProperty(id) && this.uiErrors[id];
    }

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {string} id error id
     * @param {string} txt text message
     * @param {number} level level
     */
    setUiError(id, txt, level = 2, options = {})
    {
        // overwritten in ui: core_extend_op
    }

    // todo: remove
    // setError(id, txt)
    // {
    //     this._log.warn("old error message op.error() - use op.setUiError()");
    // }

    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean} b
     */
    setEnabled(b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    }

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    setPortGroup(name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else this._log.error("setPortGroup: invalid port!");
        }
    }

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} px
     * @param {Port} py
     * @param {Port} pz
     */
    setUiAxisPorts(px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    }

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    removePort(port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    }

    _checkLinksNeededToWork() {}

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    toWorkNeedsParent(parentOpName)
    {
        this.linkTimeRules.needsParentOp = parentOpName;
    }

    /**
     * show a warning of this op is a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    toWorkShouldNotBeChild(parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this.linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this.linkTimeRules.forbiddenParentType = type;
    }

    toWorkPortsNeedsString()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this.linkTimeRules.needsStringToWork.indexOf(arguments[i]) == -1) this.linkTimeRules.needsStringToWork.push(arguments[i]);
    }

    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Array<Port>} port
     */
    toWorkPortsNeedToBeLinked()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this.linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this.linkTimeRules.needsLinkedToWork.push(arguments[i]);
    }

    toWorkPortsNeedToBeLinkedReset()
    {
        if (!this.patch.isEditorMode()) return;
        this.linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    }

    initVarPorts()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    }

    checkLinkTimeWarnings() {}

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    refreshParams()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
            gui.opParams.show(this);
    }

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    isCurrentUiOp()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    }
}

;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */

class LoadingStatus extends Events
{

    /**
     * @param {Patch} patch
     */
    constructor(patch)
    {
        super();
        this._log = new Logger("LoadingStatus");
        this._loadingAssets = {};
        this._cbFinished = [];
        this._assetTasks = [];
        this._percent = 0;
        this._count = 0;
        this._countFinished = 0;
        this._order = 0;
        this._startTime = 0;
        this._patch = patch;
        this._wasFinishedPrinted = false;
        this._loadingAssetTaskCb = false;
    }

    setOnFinishedLoading(cb)
    {
        this._cbFinished.push(cb);
    }

    getNumAssets()
    {
        return this._countFinished;
    }

    getProgress()
    {
        return this._percent;
    }

    checkStatus()
    {
        this._countFinished = 0;
        this._count = 0;

        for (const i in this._loadingAssets)
        {
            this._count++;
            if (!this._loadingAssets[i].finished)
            {
                this._countFinished++;
            }
        }

        this._percent = (this._count - this._countFinished) / this._count;

        if (this._countFinished === 0)
        {
            for (let j = 0; j < this._cbFinished.length; j++)
            {
                if (this._cbFinished[j])
                {
                    const cb = this._cbFinished[j];
                    setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
                }
            }

            if (!this._wasFinishedPrinted)
            {
                this._wasFinishedPrinted = true;
                this.print();
            }
            this.emitEvent("finishedAll");
        }
    }

    getList()
    {
        let arr = [];
        for (const i in this._loadingAssets)
        {
            arr.push(this._loadingAssets[i]);
        }

        return arr;
    }

    getListJobs()
    {
        let arr = [];
        for (const i in this._loadingAssets)
        {
            if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
        }

        return arr;
    }

    print()
    {
        if (this._patch.config.silent) return;

        const rows = [];

        for (const i in this._loadingAssets)
        {
            rows.push([
                this._loadingAssets[i].order,
                this._loadingAssets[i].type,
                this._loadingAssets[i].name,
                (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
            ]);
        }

        this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
        this._log.table(rows);
        this._log.groupEnd();
    }

    finished(id)
    {
        const l = this._loadingAssets[id];
        if (l)
        {
            if (l.finished) this._log.warn("loading job was already finished", l);

            if (l.op) l.op.setUiAttribs({ "loading": false });
            l.finished = true;
            l.timeEnd = Date.now();
        }

        this.checkStatus();
        this.emitEvent("finishedTask");
        return null;
    }

    _startAssetTasks()
    {
        for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
        this._assetTasks.length = 0;
    }

    /**
     * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
     * @function addAssetLoadingTask
     * @instance
     * @memberof LoadingStatus
     * @param {function} cb callback
     */
    addAssetLoadingTask(cb)
    {
        if (this._patch.isEditorMode() && !CABLES.UI.loaded)
        {
            this._assetTasks.push(cb);

            if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
            this._loadingAssetTaskCb = true;
        }
        else
        {
            cb();
        }
        this.emitEvent("addAssetTask");
    }

    existByName(name)
    {
        for (let i in this._loadingAssets)
        {
            if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
                return true;
        }
    }

    start(type, name, op)
    {
        if (this._startTime == 0) this._startTime = Date.now();
        const id = generateUUID();

        name = name || "unknown";
        if (name.length > 100)name = name.substring(0, 100);

        if (op)op.setUiAttribs({ "loading": true });

        this._loadingAssets[id] = {
            "id": id,
            "op": op,
            "type": type,
            "name": name,
            "finished": false,
            "timeStart": Date.now(),
            "order": this._order,
        };
        this._order++;

        this.emitEvent("startTask");

        return id;
    }
}

;// CONCATENATED MODULE: ./src/core/timer.js


/**
 * @namespace CABLES
 */

const internalNow = function ()
{
    return window.performance.now();
};

/*
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 *
 */
const now = function ()
{
    return internalNow();
};

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
class Timer extends Events
{
    constructor()
    {
        super();

        /**
         * @private
         */
        this._timeStart = internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
        this._lastTime = 0;
        this._paused = true;
        this._delay = 0;
        this.overwriteTime = -1;
    }

    _internalNow()
    {
        if (this._ts) return this._ts;
        return internalNow();
    }

    _getTime()
    {
        this._lastTime = (this._internalNow() - this._timeStart) / 1000;
        return this._lastTime + this._timeOffset;
    }

    setDelay(d)
    {
        this._delay = d;
        this.emitEvent("timeChange");
    }

    /**
     * @function
     * @memberof Timer
     * @instance
     * @description returns true if timer is playing
     * @return {Boolean} value
     */
    isPlaying()
    {
        return !this._paused;
    }

    /**
     * @function
     * @memberof Timer
     * @instance
     * @param ts
     * @description update timer
     * @return {Number} time
     */
    update(ts)
    {
        if (ts) this._ts = ts;
        if (this._paused) return;
        this._currentTime = this._getTime();

        return this._currentTime;
    }

    /**
     * @function
     * @memberof Timer
     * @instance
     * @return {Number} time in milliseconds
     */
    getMillis()
    {
        return this.get() * 1000;
    }

    /**
     * @function
     * @memberof Timer
     * @instance
     * @return {Number} value time in seconds
     */
    get()
    {
        return this.getTime();
    }

    getTime()
    {
        if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
        return this._currentTime - this._delay;
    }

    /**
     * toggle between play/pause state
     * @function
     * @memberof Timer
     * @instance
     */
    togglePlay()
    {
        if (this._paused) this.play();
        else this.pause();
    }

    /**
     * set current time
     * @function
     * @memberof Timer
     * @instance
     * @param {Number} t
     */
    setTime(t)
    {
        if (isNaN(t) || t < 0) t = 0;
        this._timeStart = this._internalNow();
        this._timeOffset = t;
        this._currentTime = t;
        this.emitEvent("timeChange");
    }

    setOffset(val)
    {
        if (this._currentTime + val < 0)
        {
            this._timeStart = this._internalNow();
            this._timeOffset = 0;
            this._currentTime = 0;
        }
        else
        {
            this._timeOffset += val;
            this._currentTime = this._lastTime + this._timeOffset;
        }
        this.emitEvent("timeChange");
    }

    /**
     * (re)starts the timer
     * @function
     * @memberof Timer
     * @instance
     */
    play()
    {
        this._timeStart = this._internalNow();
        this._paused = false;
        this.emitEvent("playPause");
    }

    /**
     * pauses the timer
     * @function
     * @memberof Timer
     * @instance
     */
    pause()
    {
        this._timeOffset = this._currentTime;
        this._paused = true;
        this.emitEvent("playPause");
    }
}



;// CONCATENATED MODULE: ./src/core/core_profiler.js



class Profiler
{

    /**
     * @param {Patch} patch
     */
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}

;// CONCATENATED MODULE: ./src/core/core_variable.js


class PatchVariable extends Events
{

    /**
     * @param {String} name
     * @param {String|Number} val
     * @param {number} type
     */
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {any}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};

const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};



;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js





class CgUniform
{

    /**
     * Description
     * @param {Shader} __shader
     * @param {string} __type
     * @param {string} __name
     * @param {Number|Port} _value
     * @param {Port} _port2
     * @param {Port} _port3
     * @param {Port} _port4
     */
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;

        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "sampler")
        {
            if (this.setValueAny)
            {
                this.set = this.setValue = this.setValueAny.bind(this);
                this.updateValue = this.updateValueAny.bind(this);
            }
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else
        {
            // console.error("unknown");
            this._log.error("Unknown uniform type " + __type);
        }

        if (typeof _value == "object" && _value instanceof CABLES.Port)
        {
            this._port = _value;
            this._value = this._port.get();

            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof CABLES.Port) || !(_port3 instanceof CABLES.Port) || !(_port4 instanceof CABLES.Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof CABLES.Port) || !(_port3 instanceof CABLES.Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof CABLES.Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;

        if (this._value == undefined)
        {
            this._value = 0;
        }

        this.setValue(this._value);

        this.needsUpdate = true;
    }

    getType()
    {
        return this._type;
    }

    get type()
    {
        return this._type;
    }

    get name()
    {
        return this._name;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {CgShader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */

// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class cgl_shader_uniform_Uniform extends CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new cgl_shader_uniform_Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return cgl_shader_uniform_Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}

cgl_shader_uniform_Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};

/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */

;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




class TextureEffect
{
    constructor(cgl, options)
    {
        this._cgl = cgl;
        this._log = new Logger("cgl_TextureEffect");

        if (!cgl.TextureEffectMesh) this.createMesh();

        this._textureSource = null;
        this._options = options;
        this.name = options.name || "unknown";

        this.imgCompVer = 0;
        this.aspectRatio = 1;
        this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
        this._frameBuf = this._cgl.gl.createFramebuffer();
        this._frameBuf2 = this._cgl.gl.createFramebuffer();
        this._renderbuffer = this._cgl.gl.createRenderbuffer();
        this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
        this.switched = false;
        this.depth = false;
    }

    dispose()
    {
        if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
        if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
        if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
        if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
    }

    getWidth()
    {
        return this._textureSource.width;
    }

    getHeight()
    {
        return this._textureSource.height;
    }

    setSourceTexture(tex)
    {
        if (tex === null)
        {
            this._textureSource = new Texture(this._cgl);
            this._textureSource.setSize(16, 16);
        }
        else
        {
            this._textureSource = tex;
        }

        if (!this._textureSource.compareSettings(this._textureTarget))
        {
            if (this._textureTarget) this._textureTarget.delete();

            this._textureTarget = this._textureSource.clone();

            this._cgl.profileData.profileEffectBuffercreate++;

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

            // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
            // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

            if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
            if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

            // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

            // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
            // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

            if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

            if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

            // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
        }

        this.aspectRatio = this._textureSource.width / this._textureSource.height;
    }

    continueEffect()
    {
        this._cgl.pushDepthTest(false);
        this._cgl.pushModelMatrix();
        this._cgl.pushPMatrix();
        // todo why two pushs?

        this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);

        mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

        this._cgl.pushPMatrix();
        mat4.identity(this._cgl.pMatrix);

        this._cgl.pushViewMatrix();
        mat4.identity(this._cgl.vMatrix);

        this._cgl.pushModelMatrix();
        mat4.identity(this._cgl.mMatrix);
    }

    startEffect(bgTex)
    {
        if (!this._textureTarget)
        {
            this._log.warn("effect has no target");
            return;
        }

        this.switched = false;

        this.continueEffect();

        if (bgTex)
        {
            this._bgTex = bgTex;
        }
        this._countEffects = 0;
    }

    endEffect()
    {
        this._cgl.popDepthTest();
        this._cgl.popModelMatrix();

        this._cgl.popPMatrix();
        this._cgl.popModelMatrix();
        this._cgl.popViewMatrix();

        this._cgl.popPMatrix();
        this._cgl.popViewPort();
    }

    bind()
    {
        if (this._textureSource === null)
        {
            this._log.warn("no base texture set!");
            return;
        }

        if (!this.switched)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
            this._cgl.pushGlFrameBuffer(this._frameBuf);
        }
        else
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
            this._cgl.pushGlFrameBuffer(this._frameBuf2);
        }
    }

    finish()
    {
        if (this._textureSource === null)
        {
            this._log.warn("no base texture set!");
            return;
        }

        this._cgl.TextureEffectMesh.render(this._cgl.getShader());

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

        this._cgl.profileData.profileTextureEffect++;

        if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
        {
            if (!this.switched)
            {
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
                this._textureTarget.updateMipMap();
            }
            else
            {
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
                this._textureSource.updateMipMap();
            }

            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }

        this.switched = !this.switched;
        this._countEffects++;
    }

    getCurrentTargetTexture()
    {
        if (this.switched) return this._textureSource;
        return this._textureTarget;
    }

    getCurrentSourceTexture()
    {
        if (this._countEffects == 0 && this._bgTex) return this._bgTex;

        if (this.switched) return this._textureTarget;
        return this._textureSource;
    }

    delete()
    {
        if (this._textureTarget) this._textureTarget.delete();
        if (this._textureSource) this._textureSource.delete();
        this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuf);
    }

    createMesh()
    {
        this._cgl.TextureEffectMesh = CABLES.CGL.MESHES.getSimpleRect(this._cgl, "texEffectRect");
    }

    // ---------------------------------------------------------------------------------
}

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://cables.gl/docs/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()

        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);

    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js



/** @type {Object} */
const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },

    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },

    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";

        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new cgl_shader_uniform_Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            CABLES.CGL.Texture.getRandomTexture(cgl);
            cgl.setTexture(7, CABLES.CGL.Texture.getRandomTexture(cgl).tex);
        };
    }

};

;// CONCATENATED MODULE: ./src/core/cg/cg_mesh.js
class CgMesh
{
    _name = "unknown";

    constructor()
    {
    }

}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js









const MESH = {};
MESH.lastMesh = null;

/**
 * @typedef {Object} CglMeshAttributeOptions
 * @property {Number} [instanced]
 * @property {Function} [cb]
 * @property {Function} [type]
 */

/**
 * @type Object
 * @typedef CglMeshOptions
 * @property {Number} [glPrimitive]
 * @property {String} [opId]
 */

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 *
 */
class Mesh extends CgMesh
{

    /** @type {CglContext} */
    #cgl = null;

    /** @type {Geometry} */
    #geom = null;

    /** @type {WebGLBuffer} */
    #bufVerticesIndizes = null;

    /**
     * @param {CglContext} _cgl cgl
     * @param {Geometry} __geom geometry
     * @param {CglMeshOptions} _options
     */
    constructor(_cgl, __geom, _options = {})
    {
        super();
        this.#cgl = _cgl;

        let options = _options || {};
        if (CABLES.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
        this._log = new Logger("cgl_mesh");
        this._bufVertexAttrib = null;
        this.#bufVerticesIndizes = this.#cgl.gl.createBuffer();
        this._indexType = this.#cgl.gl.UNSIGNED_SHORT;
        this._attributes = [];
        this._attribLocs = {};

        this._lastShader = null;
        this._numInstances = 0;
        this._glPrimitive = options.glPrimitive;

        this.opId = options.opId || "";
        this._preWireframeGeom = null;
        this.addVertexNumbers = false;

        this.feedBackAttributes = [];
        this.setGeom(__geom);

        this._feedBacks = [];
        this._feedBacksChanged = false;
        this._transformFeedBackLoc = -1;
        this._lastAttrUpdate = 0;

        this.memFreed = false;

        this.#cgl.profileData.addHeavyEvent("mesh constructed", this._name);

        this._queryExt = null;
    }

    get geom()
    {
        return this.#geom;
    }

    get numInstances()
    {
        return this._numInstances;
    }

    set numInstances(v)
    {
        this.setNumInstances(v);
    }

    freeMem()
    {
        this.memFreed = true;

        for (let i = 0; i < this._attributes.length; i++)
            this._attributes[i].floatArray = null;
    }

    /**
     * @function updateVertices
     * @memberof Mesh
     * @instance
     * @description update vertices only from a geometry
     * @param {Geometry} geom
     */
    updateVertices(geom)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
        this._numVerts = geom.vertices.length / 3;
    }

    /**
     * @param {String} attrName
     * @param {String} name
     * @param {Number} stride
     * @param {Number} offset
      */
    setAttributePointer(attrName, name, stride, offset)
    {
        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].name == attrName)
            {
                if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

                this._attributes[i].pointer.push(
                    {
                        "loc": -1,
                        "name": name,
                        "stride": stride,
                        "offset": offset,
                        "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                    }
                );
            }
        }
    }

    /**
     * @param {String} name
     * @returns {AttributeObject}
     */
    getAttribute(name)
    {
        for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
    }

    setAttributeRange(attr, array, start, end)
    {
        if (!attr) return;
        if (!start && !end) return;

        if (!attr.name)
            this._log.stack("no attrname?!");

        const gl = this.#cgl.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, attr.buffer);
        this.#cgl.profileData.profileMeshAttributes += (end - start) || 0;

        this.#cgl.profileData.profileSingleMeshAttribute[this._name] = this.#cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
        this.#cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

        if (attr.numItems < array.length / attr.itemSize)
        {
            this._resizeAttr(array, attr);
        }

        if (end > array.length && !this.warned)
        {
            this.warned = true;
            this._log.warn(this.#cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
            return;
        }

        // if (glVersion == 1) gl.bufferSubData(gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
        // else
        gl.bufferSubData(gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
    }

    _resizeAttr(array, attr)
    {
        const gl = this.#cgl.gl;

        if (attr.buffer)
            gl.deleteBuffer(attr.buffer);

        attr.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, attr.buffer);
        this._bufferArray(array, attr);
        attr.numItems = array.length / attr.itemSize;// numItems;
    }

    _bufferArray(array, attr)
    {
        let floatArray = attr.floatArray || null;
        if (!array) return;

        if (this.#cgl.debugOneFrame)
        {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
        }

        if (!(array instanceof Float32Array))
        {
            if (attr && floatArray && floatArray.length == array.length)
            {
                floatArray.set(array);
            }
            else
            {
                floatArray = new Float32Array(array);

                if (this.#cgl.debugOneFrame)
                {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
                }

                if (array.length > 10000)
                {
                    this.#cgl.profileData.profileNonTypedAttrib++;
                    this.#cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
                }
            }
        }
        else floatArray = array;

        attr.arrayLength = floatArray.length;
        attr.floatArray = null;// floatArray;

        this.#cgl.gl.bufferData(this.#cgl.gl.ARRAY_BUFFER, floatArray, this.#cgl.gl.DYNAMIC_DRAW);
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name
     * @param {Array} array
     * @param {Number} itemSize
     * @param {Object} options
     */
    addAttribute(name, array, itemSize, options)
    {
        this.setAttribute(name, array, itemSize, options);
    }

    /**
     * @param {String} name
     * @param {Array} array
     * @param {Number} itemSize Integer
     * @param {CglMeshAttributeOptions} options
     */
    setAttribute(name, array, itemSize, options = {})
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }
        let cb = null;
        let instanced = false;
        let i = 0;
        const numItems = array.length / itemSize;

        this.#cgl.profileData.profileMeshAttributes += numItems || 0;

        if (typeof options == "function")
        {
            cb = options;
        }

        if (typeof options == "object")
        {
            if (options.cb) cb = options.cb;
            if (options.instanced) instanced = options.instanced;
        }

        if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;

        for (i = 0; i < this._attributes.length; i++)
        {
            const attr = this._attributes[i];
            if (attr.name == name)
            {
                if (attr.numItems === numItems)
                {
                }
                else
                {
                    this._resizeAttr(array, attr);
                }

                this.#cgl.gl.bindBuffer(this.#cgl.gl.ARRAY_BUFFER, attr.buffer);
                this._bufferArray(array, attr);

                return attr;
            }
        }

        // create new buffer...

        const buffer = this.#cgl.gl.createBuffer();

        this.#cgl.gl.bindBuffer(this.#cgl.gl.ARRAY_BUFFER, buffer);
        // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

        let type = this.#cgl.gl.FLOAT;
        if (options && options.type) type = options.type;
        const attr = {
            "buffer": buffer,
            "name": name,
            "cb": cb,
            "itemSize": itemSize,
            "numItems": numItems,
            "startItem": 0,
            "instanced": instanced,
            "type": type
        };

        this._bufferArray(array, attr);

        if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
        this._attributes.push(attr);
        this._attribLocs = {};

        return attr;
    }

    getAttributes()
    {
        return this._attributes;
    }

    /**
     * @function updateTexCoords
     * @description update texture coordinates only from a geometry
     * @memberof Mesh
     * @instance
     * @param {Geometry} geom
     */
    updateTexCoords(geom)
    {
        if (geom.texCoords && geom.texCoords.length > 0)
        {
            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
        }
        else
        {
            const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
        }
    }

    /**
     * @function updateNormals
     * @description update normals only from a geometry
     * @memberof Mesh
     * @instance
     * @param {Geometry} geom
     */
    updateNormals(geom)
    {
        if (geom.vertexNormals && geom.vertexNormals.length > 0)
        {
            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
        }
        else
        {
            const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
        }
    }

    /**
     * @param {Array} arr
     */
    _setVertexNumbers(arr)
    {
        if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
        {
            if (arr) this._verticesNumbers = arr;
            else
            {
                this._verticesNumbers = new Float32Array(this._numVerts);
                for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
            }

            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
            {
                if (!shader.uniformNumVertices) shader.uniformNumVertices = new cgl_shader_uniform_Uniform(shader, "f", "numVertices", this._numVerts);
                shader.uniformNumVertices.setValue(this._numVerts);
            });
        }
    }

    /**
     * @function setVertexIndices
     * @description update vertex indices / faces
     * @memberof Mesh
     * @instance
     * @param {array} vertIndices
     */
    setVertexIndices(vertIndices)
    {
        if (!this.#bufVerticesIndizes)
        {
            this._log.warn("no bufVerticesIndizes: " + this._name);
            return;
        }
        if (vertIndices.length > 0)
        {
            if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

            for (let i = 0; i < vertIndices.length; i++)
            {
                if (vertIndices[i] >= this._numVerts)
                {
                    this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                    return;
                }
            }

            this.#cgl.gl.bindBuffer(this.#cgl.gl.ELEMENT_ARRAY_BUFFER, this.#bufVerticesIndizes);

            /*
             * todo cache this ?
             * if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)
             */

            if (vertIndices.length > 65535)
            {
                this.vertIndicesTyped = new Uint32Array(vertIndices);
                this._indexType = this.#cgl.gl.UNSIGNED_INT;
            }
            else
            if (vertIndices instanceof Uint32Array)
            {
                this.vertIndicesTyped = vertIndices;
                this._indexType = this.#cgl.gl.UNSIGNED_INT;
            }
            else
            if (!(vertIndices instanceof Uint16Array))
            {
                this.vertIndicesTyped = new Uint16Array(vertIndices);
                this._indexType = this.#cgl.gl.UNSIGNED_SHORT;
            }
            else this.vertIndicesTyped = vertIndices;

            this.#cgl.gl.bufferData(this.#cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this.#cgl.gl.DYNAMIC_DRAW);
            this.#bufVerticesIndizes.itemSize = 1;
            this.#bufVerticesIndizes.numItems = vertIndices.length;
        }
        else this.#bufVerticesIndizes.numItems = 0;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef = false)
    {
        this.#geom = geom;
        if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
        if (this.#geom && this.#geom.name) this._name = "mesh " + this.#geom.name;

        MESH.lastMesh = null;
        this.#cgl.profileData.profileMeshSetGeom++;

        this._disposeAttributes();

        this.updateVertices(this.#geom);
        this.setVertexIndices(this.#geom.verticesIndices);

        if (this.addVertexNumbers) this._setVertexNumbers();

        const geomAttribs = this.#geom.getAttributes();

        const attribAssoc = {
            "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
            "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
            "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
            "tangents": "attrTangent",
            "biTangents": "attrBiTangent",
        };

        for (const index in geomAttribs)
            if (geomAttribs[index].data && geomAttribs[index].data.length)
                this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);

        if (removeRef)
        {
            this.#geom = null;
        }
    }

    _preBind(shader)
    {
        for (let i = 0; i < this._attributes.length; i++)
            if (this._attributes[i].cb)
                this._attributes[i].cb(this._attributes[i], this.#geom, shader);
    }

    _checkAttrLengths()
    {
        if (this.memFreed) return;
        // check length
        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
            {
                let name = "unknown";
                if (this.#geom)name = this.#geom.name;

            /*
             * this._log.warn(
             *     name + ": " + this._attributes[i].name +
             *     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
             *     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
             * );
             */
            }
        }
    }

    _bind(shader)
    {
        if (!shader) return;
        if (!shader.isValid()) return;

        let attrLocs = [];
        if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
        else this._attribLocs[shader.id] = attrLocs;

        this._lastShader = shader;
        if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
        {
            this._lastAttrUpdate = shader.lastCompile;
            for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
        }

        for (let i = 0; i < this._attributes.length; i++)
        {
            const attribute = this._attributes[i];
            if (attrLocs[i] == -1)
            {
                if (attribute._attrLocationLastShaderTime != shader.lastCompile)
                {
                    attribute._attrLocationLastShaderTime = shader.lastCompile;
                    attrLocs[i] = this.#cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                    // this._log.log('attribloc',attribute.name,attrLocs[i]);
                    this.#cgl.profileData.profileAttrLoc++;
                }
            }

            if (attrLocs[i] != -1)
            {
                this.#cgl.gl.enableVertexAttribArray(attrLocs[i]);
                this.#cgl.gl.bindBuffer(this.#cgl.gl.ARRAY_BUFFER, attribute.buffer);

                if (attribute.instanced)
                {
                // todo: easier way to fill mat4 attribs...
                    if (attribute.itemSize <= 4)
                    {
                        if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this.#geom.name, attribute);

                        this.#cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                        this.#cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    }
                    else if (attribute.itemSize == 16)
                    {
                        const stride = 16 * 4;

                        this.#cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                        this.#cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                        this.#cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                        this.#cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                        this.#cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                        this.#cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                        this.#cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                        this.#cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                        this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                        this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                        this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                    }
                    else
                    {
                        this._log.warn("unknown instance attrib size", attribute.name);
                    }
                }
                else
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                    this.#cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                    if (attribute.pointer)
                    {
                        for (let ip = 0; ip < attribute.pointer.length; ip++)
                        {
                            const pointer = attribute.pointer[ip];

                            if (pointer.loc == -1)
                                pointer.loc = this.#cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                            this.#cgl.profileData.profileAttrLoc++;

                            this.#cgl.gl.enableVertexAttribArray(pointer.loc);
                            this.#cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                        }
                    }
                    if (this.bindFeedback) this.bindFeedback(attribute);
                }
            }
        }

        if (this.#bufVerticesIndizes && this.#bufVerticesIndizes.numItems !== 0) this.#cgl.gl.bindBuffer(this.#cgl.gl.ELEMENT_ARRAY_BUFFER, this.#bufVerticesIndizes);
    }

    unBind()
    {
        const shader = this._lastShader;
        this._lastShader = null;
        if (!shader) return;

        let attrLocs = [];
        if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
        else this._attribLocs[shader.id] = attrLocs;

        MESH.lastMesh = null;

        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].instanced)
            {
            // todo: easier way to fill mat4 attribs...
                if (this._attributes[i].itemSize <= 4)
                {
                    if (attrLocs[i] != -1) this.#cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                    if (attrLocs[i] >= 0) this.#cgl.gl.disableVertexAttribArray(attrLocs[i]);
                }
                else
                {
                    this.#cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                    this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                    this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                    this.#cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                    this.#cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                    this.#cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                    this.#cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
                }
            }

            if (attrLocs[i] != -1) this.#cgl.gl.disableVertexAttribArray(attrLocs[i]);

        }
    }

    meshChanged()
    {
        return this.#cgl.lastMesh && this.#cgl.lastMesh != this;
    }

    printDebug(shader)
    {
        console.log("--attributes");
        for (let i = 0; i < this._attributes.length; i++)
        {
            console.log("attribute " + i + " " + this._attributes[i].name);
        }
    }

    /**
     * @param {Number} num
     */
    setNumVertices(num)
    {
        // this._bufVerticesIndizes.numItems = num;
        this._bufVertexAttrib.numItems = num;
    }

    /**
     * @returns {Number}
     */
    getNumVertices()
    {
        // return this._bufVerticesIndizes.numItems;
        return this._bufVertexAttrib.numItems;
    }

    /**
     * @param {Number} num
     */
    setNumIndices(num)
    {
        this.#bufVerticesIndizes.numItems = num;
    }

    /**
     * @returns {Number}
     */
    getNumIndices()
    {
        return this.#bufVerticesIndizes.numItems;
    }

    /**
     * @function render
     * @memberof Mesh
     * @instance
     * @description draw mesh to screen
     * @param {CgShader} shader
     */
    render(shader)
    {
        // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

        if (this.#cgl.aborted) return;
        shader = shader || this.#cgl.getShader();

        if (!shader)
        {
            return console.log("shadern not valid");
        }

        if (!shader.isValid())
        {
            shader = this.#cgl.getErrorShader();
        }

        this._checkAttrLengths();

        if (this.#geom)
        {
            if (this._preWireframeGeom && !shader.wireframe && !this.#geom.isIndexed())
            {
                this.setGeom(this._preWireframeGeom);
                this._preWireframeGeom = null;
            }

            if (shader.wireframe)
            {
                let changed = false;

                if (this.#geom.isIndexed())
                {
                    if (!this._preWireframeGeom)
                    {
                        this._preWireframeGeom = this.#geom;
                        this.#geom = this.#geom.copy();
                    }

                    this.#geom.unIndex();
                    changed = true;
                }

                if (!this.#geom.getAttribute("attrBarycentric"))
                {
                    if (!this._preWireframeGeom)
                    {
                        this._preWireframeGeom = this.#geom;
                        this.#geom = this.#geom.copy();
                    }
                    changed = true;

                    this.#geom.calcBarycentric();
                }
                if (changed) this.setGeom(this.#geom);
            }
        }

        let needsBind = false;
        if (MESH.lastMesh != this)
        {
            if (MESH.lastMesh) MESH.lastMesh.unBind();
            needsBind = true;
        }

        if (needsBind) this._preBind(shader);

        if (!shader.bind()) return;

        this._bind(shader);
        if (this.addVertexNumbers) this._setVertexNumbers();

        MESH.lastMesh = this;

        let prim = this.#cgl.gl.TRIANGLES;
        if (this._glPrimitive !== undefined) prim = this._glPrimitive;
        if (shader.glPrimitive !== null) prim = shader.glPrimitive;

        let elementDiv = 1;
        let doQuery = this.#cgl.profileData.doProfileGlQuery;
        let queryStarted = false;
        if (doQuery)
        {
            let id = this._name + " - " + shader.getName() + " #" + shader.id;
            if (this._numInstances) id += " instanced " + this._numInstances + "x";

            let queryProfilerData = this.#cgl.profileData.glQueryData[id];

            if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

            if (shader.opId)queryProfilerData.shaderOp = shader.opId;
            if (this.opId)queryProfilerData.meshOp = this.opId;

            this.#cgl.profileData.glQueryData[id] = queryProfilerData;

            if (!this._queryExt && this._queryExt !== false) this._queryExt = this.#cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
            if (this._queryExt)
            {
                if (queryProfilerData._drawQuery)
                {
                    const available = this.#cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this.#cgl.gl.QUERY_RESULT_AVAILABLE);
                    if (available)
                    {
                        const elapsedNanos = this.#cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this.#cgl.gl.QUERY_RESULT);
                        const currentTimeGPU = elapsedNanos / 1000000;

                        queryProfilerData._times = queryProfilerData._times || 0;
                        queryProfilerData._times += currentTimeGPU;
                        queryProfilerData._numcount++;
                        queryProfilerData.when = performance.now();
                        queryProfilerData._drawQuery = null;
                        queryProfilerData.queryStarted = false;
                    }
                }

                if (!queryProfilerData.queryStarted)
                {
                    queryProfilerData._drawQuery = this.#cgl.gl.createQuery();
                    this.#cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                    queryStarted = queryProfilerData.queryStarted = true;
                }
            }
        }

        if (this.hasFeedbacks && this.hasFeedbacks()) this.drawFeedbacks(shader, prim);
        else if (!this.#bufVerticesIndizes || this.#bufVerticesIndizes.numItems === 0)
        {

            /*
             * for (let i = 0; i < this._attributes.length; i++)
             * {
             *     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
             *     {
             *         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
             *         // this._log.log(this);
             *         // debugger;
             *         return;
             *     }
             * }
             */

            if (prim == this.#cgl.gl.TRIANGLES)elementDiv = 3;

            if (this._numInstances === 0) this.#cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
            else this.#cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
        }
        else
        {
            if (prim == this.#cgl.gl.TRIANGLES)elementDiv = 3;
            if (this._numInstances === 0)
            {
                this.#cgl.gl.drawElements(prim, this.#bufVerticesIndizes.numItems, this._indexType, 0);
            }
            else
            {
                this.#cgl.gl.drawElementsInstanced(prim, this.#bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
            }
        }

        if (this.#cgl.debugOneFrame && this.#cgl.gl.getError() != this.#cgl.gl.NO_ERROR)
        {
            this._log.error("mesh draw gl error");
            this._log.error("mesh", this);
            this._log.error("shader", shader);

            const attribNames = [];
            for (let i = 0; i < this.#cgl.gl.getProgramParameter(shader.getProgram(), this.#cgl.gl.ACTIVE_ATTRIBUTES); i++)
            {
                const name = this.#cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
                this._log.error("attrib ", name);
            }
        }

        this.#cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
        this.#cgl.profileData.profileMeshDraw++;

        if (doQuery && queryStarted)
        {
            this.#cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
        }

        this.#cgl.printError("mesh render " + this._name);

        this.unBind();
    }

    setNumInstances(n)
    {
        n = Math.max(0, n);
        if (this._numInstances != n)
        {
            this._numInstances = n;
            const indexArr = new Float32Array(n);
            for (let i = 0; i < n; i++) indexArr[i] = i;
            this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
        }
    }

    _disposeAttributes()
    {
        if (!this._attributes) return;

        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].buffer)
            {
                this.#cgl.gl.deleteBuffer(this._attributes[i].buffer);
                this._attributes[i].buffer = null;
            }
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this.#cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
        if (this.#bufVerticesIndizes) this.#cgl.gl.deleteBuffer(this.#bufVerticesIndizes);
        this.#bufVerticesIndizes = null;

        this._disposeAttributes();
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_shader.js




/**
 * @typedef ShaderModule
 * @property {String} title
 * @property {Number} id
 * @property {Number} numId
 * @property {String} group
 * @property {String} prefix
 * @property {Number} priority
 * @property {String} srcBodyFrag
 * @property {String} srcBodyVert
 */

class CgShader extends Events
{
    id = simpleId();
    _isValid = true;

    // this._defines.push([name, value]);

    /** @type {Array<Array<String>>} */
    _defines = [];

    /** @type {Array<String>} */
    _moduleNames = [];

    _moduleNumId = 0;
    _needsRecompile = true;
    _compileReason = "initial";

    /** @type {Array<ShaderModule>} */
    _modules = [];

    _compileCount = 0;

    logError = true;
    num = -1;

    constructor()
    {
        super();
    }

    /**
     * @param {string} reason
     */
    setWhyCompile(reason)
    {
        this._compileReason = reason;
        this._needsRecompile = true;
    }

    getWhyCompile()
    {
        return this._compileReason;
    }

    needsRecompile()
    {
        return this._needsRecompile;
    }

    /**
     * easily enable/disable a define without a value
     * @param {String} name
     * @param {Port} enabled value or port
     */
    toggleDefine(name, enabled)
    {
        if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
        {
            if (enabled.changeListener)enabled.off(enabled.changeListener);

            enabled.onToggleDefine = (v) =>
            {
                this.toggleDefine(name, v);
            };

            enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
            enabled = enabled.get();
        }

        if (enabled) this.define(name);
        else this.removeDefine(name);
    }

    /**
     * add a define to a shader, e.g.  #define DO_THIS_THAT 1
     * @param {String} name
     * @param {any} value (can be empty)
     */
    define(name, value = "")
    {
        if (value === null || value === undefined) value = "";

        if (typeof (value) == "object") // port
        {
            value.removeEventListener("change", value.onDefineChange);
            value.onDefineChange = (v) =>
            {
                this.define(name, v);
            };
            value.on("change", value.onDefineChange);

            value = value.get();
        }

        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name && this._defines[i][1] == value) return;
            if (this._defines[i][0] == name)
            {
                this._defines[i][1] = value;
                this.setWhyCompile("define " + name + " " + value);
                return;
            }
        }
        this.setWhyCompile("define " + name + " " + value);

        this._defines.push([name, value]);
    }

    getDefines()
    {
        return this._defines;
    }

    /**
     * @param {string} name
     */
    getDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return this._defines[i][1];
        return null;
    }

    /**
     * return true if shader has define
     * @function hasDefine
     * @memberof Shader
     * @instance
     * @param {String} name
     * @return {Boolean}
     */
    hasDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return true;
    }

    /**
     * remove a define from a shader
     * @param {string} name
     */
    removeDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name)
            {
                this._defines.splice(i, 1);

                this.setWhyCompile("define removed:" + name);

                return;
            }
        }
    }

    /**
     * @param {any} modId
     */
    hasModule(modId)
    {
        for (let i = 0; i < this._modules.length; i++)
            if (this._modules[i].id == modId) return true;

        return false;
    }

    /**
     *
     * @param {Array<String>} names
     */
    setModules(names)
    {
        this._moduleNames = names;
    }

    /**
     * remove a module from shader
     * @param {ShaderModule} mod the module to be removed
     */
    removeModule(mod)
    {
        for (let i = 0; i < this._modules.length; i++)
        {
            if (mod && mod.id)
            {
                if (this._modules[i].id == mod.id || !this._modules[i])
                {
                    let found = true;
                    while (found)
                    {
                        found = false;
                        for (let j = 0; j < this._uniforms.length; j++)
                        {
                            if (this._uniforms[j].getName().startsWith(mod.prefix))
                            {
                                this._uniforms.splice(j, 1);
                                found = true;
                                continue;
                            }
                        }
                    }

                    this.setWhyCompile("remove module " + mod.title);
                    this._modules.splice(i, 1);
                    break;
                }
            }
        }
    }

    getNumModules()
    {
        return this._modules.length;
    }

    getCurrentModules() { return this._modules; }

    /**
     * add a module
     * @param {ShaderModule} mod the module to be added
     * @param {ShaderModule} [sibling] sibling module, new module will share the same group
     */
    addModule(mod, sibling)
    {
        if (this.hasModule(mod.id)) return;
        if (!mod.id) mod.id = CABLES.simpleId();
        if (!mod.numId) mod.numId = this._moduleNumId;
        if (!mod.num)mod.num = this._modules.length;
        if (sibling && !sibling.group) sibling.group = simpleId();

        if (!mod.group)
            if (sibling) mod.group = sibling.group;
            else mod.group = simpleId();

        mod.prefix = "mod" + mod.group + "_";
        this._modules.push(mod);

        this.setWhyCompile("add module " + mod.title);
        this._moduleNumId++;

        return mod;
    }

    isValid()
    {
        return this._isValid;
    }

    // getAttributeSrc(mod, srcHeadVert, srcVert)
    // {
    //     if (mod.attributes)
    //         for (let k = 0; k < mod.attributes.length; k++)
    //         {
    //             const r = this._getAttrSrc(mod.attributes[k], false);
    //             if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
    //             if (r.srcVert)srcVert += r.srcVert;
    //         }

    //     return { "srcHeadVert": srcHeadVert, "srcVert": srcVert };
    // }

    // replaceModuleSrc()
    // {
    //     let srcHeadVert = "";

    //     for (let j = 0; j < this._modules.length; j++)
    //     {
    //         const mod = this._modules[j];
    //         if (mod.name == this._moduleNames[i])
    //         {
    //             srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

    //             srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

    //             if (mod.getAttributeSrc)
    //             {
    //                 const r = getAttributeSrc(mod, srcHeadVert, srcVert);
    //                 if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
    //                 if (r.srcVert)srcVert += r.srcVert;
    //             }

    //             srcHeadVert += mod.srcHeadVert || "";
    //             srcVert += mod.srcBodyVert || "";

    //             srcHeadVert += "\n//---- end mod ------\n";

    //             srcVert += "\n//---- end mod ------\n";

    //             srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
    //             srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

    //             srcVert = srcVert.replace(/MOD_/g, mod.prefix);
    //             srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
    //         }
    //     }

    //     vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
    // }
}



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\r\nIN vec3 vPosition; //!@\r\nIN vec2 attrTexCoord;\r\nIN vec3 attrVertNormal;\r\nIN vec3 attrTangent,attrBiTangent;\r\n\r\nIN float attrVertIndex;\r\n\r\nOUT vec2 texCoord;\r\nOUT vec3 norm;\r\nUNI mat4 projMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI mat4 modelMatrix;\r\n\r\nvoid main()\r\n{\r\n    texCoord=attrTexCoord;\r\n    norm=attrVertNormal;\r\n    vec4 pos=vec4(vPosition,  1.0);\r\n    vec3 tangent=attrTangent;\r\n    vec3 bitangent=attrBiTangent;\r\n    mat4 mMatrix=modelMatrix;\r\n    gl_PointSize=10.0;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\r\n    {{MODULE_VERTEX_MODELVIEW}}\r\n\r\n    gl_Position = projMatrix * modelViewMatrix * pos;\r\n}\r\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js












// ---------------------------------------------------------------------------

/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/

// ---------------------------------------------------------------------------

let materialIdCounter = 0;

function getDefaultVertexShader()
{
    return cgl_shader_default_glsl;
}

function getDefaultFragmentShader(r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
}

/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
class CglShader extends CgShader
{
    constructor(_cgl, _name, _op)
    {
        super();
        if (!_cgl) throw new Error("shader constructed without cgl " + _name);

        this._log = new Logger("cgl_shader");
        this._cgl = _cgl;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";

        if (_op) this.opId = _op.id;
        this.glslVersion = 0;
        if (_cgl.glVersion > 1) this.glslVersion = 300;

        this._materialId = ++materialIdCounter;

        this._program = null;
        this._uniforms = [];
        this._drawBuffers = [true];
        this.error = null;

        this.ignoreMissingUniforms = false;
        this._projMatrixUniform = null;
        this._mvMatrixUniform = null;
        this._mMatrixUniform = null;
        this._vMatrixUniform = null;
        this._camPosUniform = null;
        this._normalMatrixUniform = null;
        this._inverseViewMatrixUniform = null;
        this._fromUserInteraction = false;

        this._attrVertexPos = -1;
        this.precision = _cgl.patch.config.glslPrecision || "highp";

        this._pMatrixState = -1;
        this._vMatrixState = -1;

        this._countMissingUniforms = 0;
        this._modGroupCount = 0; // not needed anymore...
        this._feedBackNames = [];
        this._attributes = [];

        this.glPrimitive = null;
        this.offScreenPass = false;
        this._extensions = [];
        this.srcVert = getDefaultVertexShader();
        this.srcFrag = getDefaultFragmentShader();
        this.lastCompile = 0;

        this._libs = [];
        this._structNames = [];
        this._structUniformNames = [];
        this._textureStackUni = [];
        this._textureStackTex = [];
        this._textureStackType = [];
        this._textureStackTexCgl = [];

        this._tempNormalMatrix = mat4.create();
        this._tempCamPosMatrix = mat4.create();
        this._tempInverseViewMatrix = mat4.create();
        this._tempInverseProjMatrix = mat4.create();

        this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_NORMAL", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
    }

    isValid()
    {
        return this._isValid;
    }

    getCgl()
    {
        return this._cgl;
    }

    getName()
    {
        return this._name;
    }

    /**
     * @param {string} name
     */
    enableExtension(name)
    {
        this.setWhyCompile("enable extension " + name);

        this._extensions.push(name);
    }

    getAttrVertexPos()
    {
        return this._attrVertexPos;
    }

    hasTextureUniforms()
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getType() == "t") return true;
        return false;
    }

    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        // this._log.log(origShader._uniforms);
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }

            // this._log.log(origShader._uniforms[i].getName());
            // this.getUniform(origShader._uniforms[i].)
            // this._uniforms[i].set(origShader._uniforms[i].getValue());

            // if (origShader._uniforms[i].getName().includes("pathPoints"))
            //     this._log.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        this.popTextures();
        for (let i = 0; i < origShader._textureStackUni.length; i++)
        {
            this._textureStackUni[i] = origShader._textureStackUni[i];
            this._textureStackTex[i] = origShader._textureStackTex[i];
            this._textureStackType[i] = origShader._textureStackType[i];
            this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        }

        // this._textureStackUni = [];
        // this._textureStackTex = [];
        // this._textureStackType = [];
        // this._textureStackTexCgl = [];
    }

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new CglShader(this._cgl, this._name + " copy");
        shader.setSource(this.srcVert, this.srcFrag);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;
        shader.glPrimitive = this.glPrimitive;
        shader.offScreenPass = this.offScreenPass;
        shader._extensions = this._extensions;
        shader.wireframe = this.wireframe;
        shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++)
        {
            const u = this._uniforms[i].copy(shader);
            u.resetLoc();
        }

        shader.setWhyCompile("copy");
        return shader;
    }

    /**
     * set shader source code
     * @function setSource
     * @memberof Shader
     * @instance
     * @param {String} srcVert
     * @param {String} srcFrag
     * @param {Boolean} fromUserInteraction
     */
    setSource(srcVert, srcFrag, fromUserInteraction = false)
    {
        this._fromUserInteraction = fromUserInteraction;
        this.srcVert = srcVert;
        this.srcFrag = srcFrag;
        this.setWhyCompile("Source changed");
        this._isValid = true;
    }

    _addLibs(src)
    {
        for (const id in ShaderLibMods)
        {
            if (src.includes(id))
            {
                const lib = new ShaderLibMods[id]();
                src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
                this._libs.push(lib);
                if (lib.initUniforms)lib.initUniforms(this);
            }
        }

        return src;
    }

    createStructUniforms()
    {
        // * create structs
        let structStrFrag = "";
        let structStrVert = ""; // TODO: not used yet

        this._structNames = [];
        // * reset the arrays holding the value each recompile so we don't skip structs
        // * key value mapping so the same struct can be added twice (two times the same modifier)
        this._injectedStringsFrag = {};
        this._injectedStringsVert = {};

        this._structUniformNamesIndicesFrag = [];
        this._structUniformNamesIndicesVert = [];

        for (let i = 0; i < this._uniforms.length; i++)
        {
            // * only add uniforms to struct that are a member of a struct
            if (this._uniforms[i].isStructMember())
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

                // * check if struct is not already part of shader
                if (!this._structNames.includes(this._uniforms[i]._structName))
                {
                    // * create struct definition with placeholder string to inject
                    const structDefinition = "struct "
                        + this._uniforms[i]._structName + " {".endl()
                        + injectionString
                        + "};".endl().endl();

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                        structStrFrag = structStrFrag.concat(structDefinition);

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                        structStrVert = structStrVert.concat(structDefinition);

                    this._structNames.push(this._uniforms[i]._structName);
                    this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                    this._injectedStringsVert[this._uniforms[i]._structName] = [];
                }

                // * create member & comment
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                let stringToInsert = "";
                if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
                stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                        + " " + this._uniforms[i]._propertyName + ";"
                        + comment;

                if (this._uniforms[i].getShaderType() === "both")
                {
                    // * inject member before {injectionString}
                    if (
                        !this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)
                    && !this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "frag")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "vert")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                    {
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
            }
        }

        // * dedupe injected uni declarations
        this._uniDeclarationsFrag = [];
        this._uniDeclarationsVert = [];

        // * remove struct injection points and add uniform in fragment
        for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
        {
            const index = this._structUniformNamesIndicesFrag[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrFrag = structStrFrag.replace(injectionString, "");
                structStrFrag += uniDeclarationString;

                this._uniDeclarationsFrag.push(uniDeclarationString);
            }
        }

        // * remove struct injection points and add uniform in vertex
        for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
        {
            const index = this._structUniformNamesIndicesVert[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsVert.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrVert = structStrVert.replace(injectionString, "");
                structStrVert += uniDeclarationString;
                this._uniDeclarationsVert.push(uniDeclarationString);
            }
        }

        return [structStrVert, structStrFrag];
    }

    _getAttrSrc(attr, firstLevel)
    {
        const r = {};
        if (attr.name && attr.type)
        {
            r.srcHeadVert = "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            if (attr.nameFrag)
            {
                r.srcHeadVert += "";
                if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadVert += "#endif".endl();

                r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

                r.srcHeadFrag = "";
                if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadFrag += "#endif".endl();
            }
        }
        return r;
    }

    compile()
    {
        if (this._cgl.aborted) return;
        const startTime = performance.now();

        this._cgl.profileData.profileShaderCompiles++;
        this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

        let extensionString = "";
        if (this._extensions)
            for (let i = 0; i < this._extensions.length; i++)
                extensionString += "#extension " + this._extensions[i] + " : enable".endl();

        let definesStr = "";
        if (this._defines.length) definesStr = "\n// cgl generated".endl();
        for (let i = 0; i < this._defines.length; i++)
            definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

        const structStrings = this.createStructUniforms();
        this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
        this._compileReason = "";

        if (this._uniforms)
        {
            // * we create an array of the uniform names to check our indices & an array to save them
            const uniNames = this._uniforms.map((uni) => { return uni._name; });
            const indicesToRemove = [];

            // * we go through our uniforms and check if the same name is contained somewhere further in the array
            // * if so, we add the current index to be removed later
            for (let i = 0; i < this._uniforms.length; i++)
            {
                const uni = this._uniforms[i];
                const nextIndex = uniNames.indexOf(uni._name, i + 1);
                if (nextIndex > -1) indicesToRemove.push(i);
            }

            // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
            // * also, we reset the locations of all the other valid uniforms
            for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
            {
                if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
                else this._uniforms[j].resetLoc();
            }
        }

        this._cgl.printError("uniform resets");

        this._compileCount++;
        if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

        let vs = "";
        let fs = "";

        if (!this.srcFrag)
        {
            this._log.warn("[cgl shader] has no fragment source!", this._name, this);
            this.srcVert = getDefaultVertexShader();
            this.srcFrag = getDefaultFragmentShader();
        }

        vs = "#version 300 es"
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define UNI uniform"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl();

        fs = "#version 300 es"
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl() + "#define UNI uniform"
            .endl() + "{{DRAWBUFFER}}"

            .endl();

        let uniformsStrVert = "\n// cgl generated".endl();
        let uniformsStrFrag = "\n// cgl generated".endl();

        fs += "\n// active mods: --------------- ";
        vs += "\n// active mods: --------------- ";

        let foundModsFrag = false;
        let foundModsVert = false;
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            for (let j = 0; j < this._modules.length; j++)
            {
                if (this._modules[j].name == this._moduleNames[i])
                {
                    if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                    {
                        foundModsFrag = true;
                        fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    }
                    if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                    {
                        vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                        foundModsVert = true;
                    }
                }
            }
        }
        if (!foundModsVert)fs += "\n// no mods used...";
        if (!foundModsFrag)fs += "\n// no mods used...";
        fs += "\n";
        vs += "\n";

        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                let uniStr = "";
                if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
                uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                    if (!this.srcVert.includes(uniStr) && !this.srcVert.includes("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrVert += uniStr + ";" + comment.endl();

                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                    if (!this.srcFrag.includes(uniStr) && !this.srcFrag.includes("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrFrag += uniStr + ";" + comment.endl();
            }
        }

        let countUniFrag = 0;
        let countUniVert = 0;
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
            }
        }
        if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
        if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);

        if (!fs.includes("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
        if (!vs.includes("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            fs += "#define MOBILE".endl();
            vs += "#define MOBILE".endl();
        }
        vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
        fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;

        let srcHeadVert = "";
        let srcHeadFrag = "";

        this._modules.sort(function (a, b)
        {
            return a.priority || 0 - b.priority || 0;
        });

        let addedAttribs = false;

        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";
            let srcFrag = "";

            if (!addedAttribs)
            {
                addedAttribs = true;

                for (let k = 0; k < this._attributes.length; k++)
                {
                    const r = this._getAttrSrc(this._attributes[k], true);
                    if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                    if (r.srcVert)srcVert += r.srcVert;
                    if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                }
            }

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                    srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                    srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                            if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                        }

                    srcHeadVert += mod.srcHeadVert || "";
                    srcHeadFrag += mod.srcHeadFrag || "";
                    srcVert += mod.srcBodyVert || "";
                    srcFrag += mod.srcBodyFrag || "";

                    srcHeadVert += "\n//---- end mod ------\n";
                    srcHeadFrag += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";
                    srcFrag += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
                }
            }

            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
            fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
        }

        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);

        vs = this._addLibs(vs);
        fs = this._addLibs(fs);

        // SETUP draw buffers / multi texture render targets

        let drawBufferStr = "";
        for (let i = 0; i < 16; i++)
            if (fs.includes("outColor" + i)) this._drawBuffers[i] = true;

        if (this._drawBuffers.length == 1)
        {
            drawBufferStr = "out vec4 outColor;".endl();
            drawBufferStr += "#define gl_FragColor outColor".endl();
        }
        else
        {
            drawBufferStr += "#define MULTI_COLORTARGETS".endl();
            drawBufferStr += "vec4 outColor;".endl();

            let count = 0;
            for (let i = 0; i < this._drawBuffers.length; i++)
            {
                if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
                drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
                count++;
            }
        }

        fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
        // //////

        if (!this._program)
        {
            this._program = this._createProgram(vs, fs);
        }
        else
        {
            // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
            // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
            // linkProgram(program);
            this._program = this._createProgram(vs, fs);

            this._projMatrixUniform = null;

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
        }

        this.finalShaderFrag = fs;
        this.finalShaderVert = vs;

        MESH.lastMesh = null;
        MESH.lastShader = null;

        this._countMissingUniforms = 0;
        this._needsRecompile = false;
        this.lastCompile = now();

        this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
    }

    bind()
    {
        if (!this._isValid || this._cgl.aborted) return;

        MESH.lastShader = this;

        if (!this._program || this.needsRecompile()) this.compile();
        if (!this._isValid) return;

        if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
        {
            this._countMissingUniforms++;
            // if (this._countMissingUniforms == 10)this._log.log("stopping getlocation of missing uniforms...", this._name);
            if (this._countMissingUniforms < 10)
            {
                this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
                this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
                this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
                this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
                this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
                this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
                this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
                this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
                this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
                this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
                this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

                for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
            }
        }

        if (this._cgl.currentProgram != this._program)
        {
            this._cgl.profileData.profileShaderBinds++;
            this._cgl.gl.useProgram(this._program);
            this._cgl.currentProgram = this._program;
        }

        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

        if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
        {
            this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
            this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._objectIdUniform)
            this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.tempData.objectIdCounter);

        if (this._materialIdUniform)
            this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

        if (this._vMatrixUniform)
        {
            if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
            {
                this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
                this._vMatrixState = this._cgl.getViewMatrixStateCount();

                if (this._inverseViewMatrixUniform)
                {
                    mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
                if (this._inverseProjMatrixUniform)
                {
                    mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
            }
            this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;

            if (this._camPosUniform)
            {
                mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        else
        {
            // mvmatrix deprecated....
            const tempmv = mat4.create();

            mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
            this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._normalMatrixUniform)
        {
            // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
            mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

            this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        for (let i = 0; i < this._libs.length; i++)
        {
            if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
        }

        this._bindTextures();

        return this._isValid;
    }

    unBind()
    {
    }

    dispose()
    {
        if (this._program) this._cgl.gl.deleteProgram(this._program);
        this._program = null;
    }

    setDrawBuffers(arr)
    {
        this._log.warn("useless drawbuffers...?!");
        // if (this._drawBuffers.length !== arr.length)
        // {
        //     this._drawBuffers = arr;
        //     this._needsRecompile = true;
        //     this.setWhyCompile("setDrawBuffers");
        //     return;
        // }
        // for (let i = 0; i < arr.length; i++)
        // {
        //     if (arr[i] !== this._drawBuffers[i])
        //     {
        //         this._drawBuffers = arr;
        //         this._needsRecompile = true;
        //         this.setWhyCompile("setDrawBuffers");
        //         return;
        //     }
        // }
    }

    getUniforms()
    {
        return this._uniforms;
    }

    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getName() == name)
                return this._uniforms[i];
        return null;
    }

    removeAllUniforms()
    {
        this._uniforms = [];
        // for (let i = 0; i < this._uniforms.length; i++)
        //     this.removeUniform(this._uniforms[i].name);
    }

    removeUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name)
            {
                this._uniforms.splice(i, 1);
            }
        }
        this.setWhyCompile("remove uniform " + name);
    }

    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {CGL.Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {CGL.Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    }

    /**
     * add a uniform to both shaders
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformBoth
     * @returns {CGL.Uniform}
     */
    addUniformBoth(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }

    /**
     * add a struct & its uniforms to the fragment shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructFrag
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructFrag("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructFrag(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "frag";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    }

    /**
     * add a struct & its uniforms to the vertex shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructVert
     * @returns {CGL.Uniform}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructVert("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructVert(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "vert";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    }

    /**
     * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructBoth
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructBoth("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructBoth(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
                this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "both";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    }

    /**
     * @param {String} name
     */
    hasUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return true;
        }
        return false;
    }

    /**
     * @param {String} vstr
     * @param {String} fstr
     */
    _createProgram(vstr, fstr)
    {
        this._cgl.printError("before _createprogram");

        const program = this._cgl.gl.createProgram();

        this.vshader = CglShader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
        this.fshader = CglShader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);

        if (this.vshader && this.fshader)
        {
            this._cgl.gl.attachShader(program, this.vshader);
            this._cgl.gl.attachShader(program, this.fshader);

            this._linkProgram(program, vstr, fstr);
        }
        else
        {
            this._isValid = false;
            this._cgl.printError("shader _createProgram");
            this._log.error("could not link shaderprogram");
            return null;
        }

        this._cgl.printError("shader _createProgram");
        return program;
    }

    hasErrors()
    {
        return this._hasErrors;
    }

    _linkProgram(program, vstr, fstr)
    {
        this._cgl.printError("before _linkprogram");

        if (this._feedBackNames.length > 0)
        {
            this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
            // INTERLEAVED_ATTRIBS
            // SEPARATE_ATTRIBS
        }

        this._cgl.gl.linkProgram(program);
        this._cgl.printError("gl.linkprogram");
        this._isValid = true;
        this._hasErrors = false;

        if (this._cgl.patch.config.glValidateShader !== false)
        {
            this._cgl.gl.validateProgram(program);

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
            {
                // validation failed
                this._log.log("shaderprogram validation failed...");

                this._cgl.gl.getProgramInfoLog(program);
            }

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
            {
                this._hasErrors = true;

                const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
                const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

                if (this.logError)
                    this._log.error(this._name + " shader linking fail...");
                else
                    this._log.warn(this._name + " shader linking fail...");

                if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
                if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

                this._cgl.gl.getProgramInfoLog(program);
                if (!CABLES.UI) this._log.log(this);
                this._isValid = false;

                this._cgl.printError("shader link err");
            }
        }
    }

    getProgram()
    {
        return this._program;
    }

    setFeedbackNames(names)
    {
        this.setWhyCompile("setFeedbackNames");
        this._feedBackNames = names;
    }

    /**
      * adds attribute definition to shader header without colliding with other shader modules...
     * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
     * @function
     * @memberof Shader
     * @instance
     * @param {Object} attr {type:x,name:x,[nameFrag:x]}
     * @return {Object}
     */
    addAttribute(attr)
    {
        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
        }
        this._attributes.push(attr);

        this.setWhyCompile("addAttribute");
    }

    bindTextures()
    {
        this._bindTextures();
    }

    _bindTextures()
    {
        if (this._textureStackTex.length > this._cgl.maxTextureUnits)
        {
            this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
        }

        // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

        for (let i = 0; i < this._textureStackTex.length; i++)
        {
            // this._log.log(this._textureStackTex.length, i);
            if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
            {
                this._log.warn("no texture for pushtexture", this._name);
            }
            else
            {
                let t = this._textureStackTex[i];
                if (this._textureStackTexCgl[i])
                {
                    t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
                }

                let bindOk = true;

                if (!this._textureStackUni[i])
                {
                    // throw(new Error('no uniform given to texturestack'));
                    this._log.warn("no uniform for pushtexture", this._name);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
                }
                else
                {
                    this._textureStackUni[i].setValue(i);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                    // this._log.log(bindOk, i, t, this._textureStackType[i]);
                }
                if (!bindOk) this._log.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
            }
        }
    }

    setUniformTexture(uni, tex)
    {
        tex = tex || CGL.Texture.getTempTexture(this._cgl);
        for (let i = 0; i < this._textureStackUni.length; i++)
            if (this._textureStackUni[i] == uni)
            {
                const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
                if (tex.hasOwnProperty("tex"))
                {
                    this._textureStackTexCgl[i] = tex;
                    this._textureStackTex[i] = null;
                }
                else
                {
                    this._textureStackTexCgl[i] = null;
                    this._textureStackTex[i] = tex;
                }

                // this._textureStackTex[i] = tex;
                // this._cgl.setTexture(i, tex, this._textureStackType[i]);
                return old;
            }
        return null;
    }

    /**
     * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
     * @param {Uniform} uniform texture uniform
     * @param {Texture} t texture
     * @param {number} type texture type, can be ignored when TEXTURE_2D
     * @function pushTexture
     * @memberof Shader
     * @instance
     */
    pushTexture(uniform, t, type)
    {
        if (!uniform)
        {
            // this._log.log("pushtexture: no uniform given to texturestack", "shader:"+this._name,uniform,t,type);
            return;
        }
        if (!t)
        {
            // if(uniform)this._log.warn("pushtexture: no tex","shader:"+this._name," uniform:"+uniform.name);
            return;
        }
        if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
        {
            this._log.warn(new Error("invalid texture").stack);

            this._log.warn("[cgl_shader] invalid texture...", t);
            return;
        }

        this._textureStackUni.push(uniform);

        if (t.hasOwnProperty("tex"))
        {
            this._textureStackTexCgl.push(t);
            this._textureStackTex.push(null);
        }
        else
        {
            this._textureStackTexCgl.push(null);
            this._textureStackTex.push(t);
        }

        this._textureStackType.push(type);
    }

    /**
     * pop last texture
     * @function popTexture
     * @memberof Shader
     * @instance
     */
    popTexture()
    {
        this._textureStackUni.pop();
        this._textureStackTex.pop();
        this._textureStackTexCgl.pop();
        this._textureStackType.pop();
    }

    /**
     * pop all textures
     * @function popTextures
     * @memberof Shader
     * @instance
     */
    popTextures()
    {
        this._textureStackTex.length =
        this._textureStackTexCgl.length =
        this._textureStackType.length =
        this._textureStackUni.length = 0;
    }

    getMaterialId()
    {
        return this._materialId;
    }

    getInfo()
    {
        const info = {};
        info.name = this._name;
        // info.modules = JSON.parse(JSON.stringify(this._modules));
        // info.defines = JSON.parse(JSON.stringify(this._defines));
        info.defines = this.getDefines();
        info.hasErrors = this.hasErrors();

        return info;
    }

    getDefaultFragmentShader(r, g, b, a)
    {
        return getDefaultFragmentShader(r, g, b, a);
    }

    getDefaultVertexShader()
    {
        return getDefaultVertexShader();
    }
}

// --------------------------

CglShader.getDefaultVertexShader = getDefaultVertexShader;
CglShader.getDefaultFragmentShader = getDefaultFragmentShader;

CglShader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

/**
 * @param {CglContext} cgl
 * @param {String} str
 * @param {number} type
 * @param {CglShader} cglShader
 * @returns {CglShader}
 */
CglShader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        cglShader.error = { "str": str, "infoLog": cgl.gl.getShaderInfoLog(shader) };

        if (CABLES.UI) gui.emitEvent("ShaderError", cglShader);

        if (!cglShader.error.infoLog)
        {
            cglShader._log.warn("empty shader info log", this._name);
            return;
        }

        cglShader.setSource(CglShader.getDefaultVertexShader(), CglShader.getErrorFragmentShader());

        // CABLES.UI.showShaderError(shader);

    }
    return shader;
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js


class CgCanvas
{
    constructor(options)
    {
        this._log = new Logger("CgCanvas");
        if (!options)
        {
            this._log.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg) this._log.error("CgCanvas options has no cg");
        if (!options.canvasEle) this._log.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    /**
     * @param {Number} w
     * @param {Number} h
     * @param {any} ignorestyle
     * @returns {any}
     */
    setSize(w, h, ignorestyle = false)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        if (this._canvasEle) this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js


class MatrixStack
{
    constructor()
    {
        this._arr = [mat4_create()];
        this._index = 0;
        this.stateCounter = 0;
    }

    /**
     * @param {mat4} m
     */
    push(m)
    {
        this._index++;
        this.stateCounter++;

        if (this._index == this._arr.length)
        {
            const copy = mat4_create();
            this._arr.push(copy);
        }

        mat4_copy(this._arr[this._index], m || this._arr[this._index - 1]);

        return this._arr[this._index];
    }

    pop()
    {
        this.stateCounter++;

        this._index--;
        if (this._index < 0) this._index = 0;

        return this._arr[this._index];
    }

    length()
    {
        return this._index;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js





class CgContext extends Events
{

    static API_WEBGL = 0;
    static API_WEBGPU = 1;

    /**
     * Description
     * @param {Patch} _patch
     */
    constructor(_patch)
    {
        super();
        this.tempData = this.frameStore = this.frameStore || {};
        // this.canvas = null;
        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);
        this._onetimeCallbacks = [];
        this.maxTexSize = 2048;
        this._viewPort = [0, 0, 1, 1];
        this._viewPortStack = [];
        this.patch = _patch;
        this.autoReSize = true;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;

        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);

        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }

    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }

    get viewPort()
    {
        // TODO: add stack...
        return [0, 0, this.canvasWidth, this.canvasHeight];
    }

    /**
     * @param {HTMLElement} canvEle
     */
    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    /**
     * @param {number} w
     * @param {number} h
     * @param {boolean} ignorestyle
     */
    setSize(w, h, ignorestyle = false)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        if (this.autoReSize)
        {
            this.setSize(window.innerWidth, window.innerHeight);
            this.updateSize();
        }
    }

    _resizeToParentSize()
    {
        if (this.autoReSize)
        {
            const p = this.canvas.parentElement;
            if (!p)
            {
                this._log.error("cables: can not resize to container element");
                return;
            }

            this.setSize(p.clientWidth, p.clientHeight);
            this.updateSize();
        }
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }

    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    /**
     * @param {vec3} identTranslate
     * @param {vec3} identTranslateView
     */
    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }

    shouldDrawHelpers()
    {
        return false;
    }

    /**
     * execute the callback next frame, once
     * @function addNextFrameOnceCallback
     * @memberof Context
     * @instance
     * @param {function} cb
     */
    addNextFrameOnceCallback(cb)
    {
        if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
    }

    _execOneTimeCallbacks()
    {
        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }
    }

    checkTextureSize(x)
    {
        x = x || 1;
        x = Math.floor(x);
        x = Math.min(x, this.maxTexSize);
        x = Math.max(x, 1);
        return x;
    }

    // shnould be overwritten...
    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        console.log("no screenshot function implemented");
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();
        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this));
    }

}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js











const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class CglContext extends CgContext
{
    constructor(_patch)
    {
        super(_patch);

        this.gApi = CgContext.API_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context", { "onError": _patch.config.onError });

        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;
        this._stackBlendMode = [];
        this._stackBlendModePremul = [];
        this._stackBlend = [];
        this._stackDepthFunc = [];
        this._stackCullFaceFacing = [];
        this._stackCullFace = [];
        this._stackDepthWrite = [];
        this._stackDepthTest = [];
        this._stackStencil = [];

        this._simpleShader = new CglShader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
        this._simpleShader.setSource(CglShader.getDefaultVertexShader(), CglShader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;

        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};

        this.errorShader = null;
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }

    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }

    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }

    _setCanvas(canv)
    {
        if (!canv) this._log.stack("_setCanvas undef");

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);

        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this._log.error("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });

        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);

        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }

    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */
    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
        else
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }

    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    /**
     * @param {function} cb
     * @param {boolean} doScreenshotClearAlpha
     * @param {string} mimeType
     * @param {number} quality
     */
    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.tempData || ((this.tempData.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.tempData.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * @deprecated
     * @param {Shader} s
     */
    setShader(s)
    {
        this.pushShader(s);
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Shader} shader
     * @function
     */
    pushShader(shader)
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.tempData.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.tempData.forceShaderMods[i];
                shader = this.tempData.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.tempData.forceShaderMods[i].currentShader() && shader != this.tempData.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }

    popShader()
    {
        this.setPreviousShader();
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // const a =
                this.tempData.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer2} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer2} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer2} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        this._execOneTimeCallbacks();

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }

    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }

        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }

    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;

            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.includes("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }

    // state depthtest

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */

    pushDepthTest(enabled)
    {
        this._stackDepthTest.push(enabled);
        if (!enabled) this.gl.disable(this.gl.DEPTH_TEST);
        else this.gl.enable(this.gl.DEPTH_TEST);
    }

    /**
     * current state of depth testing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();

        if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
        else this.gl.enable(this.gl.DEPTH_TEST);
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthTest
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(enabled)
    {
        enabled = enabled || false;
        this._stackDepthWrite.push(enabled);
        this.gl.depthMask(enabled);
    }

    /**
     * current state of depth writing
     * @function stateDepthWrite
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popDepthWrite
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
        this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
    }

    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(enabled)
    {
        this._stackCullFace.push(enabled);

        if (enabled) this.gl.enable(this.gl.CULL_FACE);
        else this.gl.disable(this.gl.CULL_FACE);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
     * pop face culling enabled state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popCullFace()
    {
        this._stackCullFace.pop();

        if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
        else this.gl.disable(this.gl.CULL_FACE);
    }

    // --------------------------------------
    // state CullFace Facing

    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
     * @memberof Context
     * @instance
     */

    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
        this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
        if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
    }

    // --------------------------------------
    // state depthfunc

    /**
     * enable / disable depth testing
     * like `gl.depthFunc(boolean);`
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {Boolean} f depthtesting
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
        this.gl.depthFunc(f);
    }

    /**
     * current state of blend
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {Boolean} depth testing enabled/disabled
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth testing and set the previous state
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
        if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
    }

    // --------------------------------------
    // state blending

    /**
     * enable / disable blend
     * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
     * @function pushBlend
     * @memberof Context
     * @instance
     * @param {boolean} b blending
     */
    pushBlend(b)
    {
        this._stackBlend.push(b);
        if (!b) this.gl.disable(this.gl.BLEND);
        else this.gl.enable(this.gl.BLEND);
    }

    /**
     * pop blend state and set the previous state
     * @function popBlend
     * @memberof Context
     * @instance
     */
    popBlend()
    {
        this._stackBlend.pop();

        if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
        else this.gl.enable(this.gl.BLEND);
    }

    /**
     * current state of blend
     * @function stateBlend
     * @returns {boolean} blending enabled/disabled
     * @memberof Context
     * @instance
     */
    stateBlend()
    {
        return this._stackBlend[this._stackBlend.length - 1];
    }

    /**
     * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
     * @function pushBlendMode
     * @memberof Context
     * @instance
     * @param {Number} blendMode
     * @param {Boolean} premul premultiplied mode
     */
    pushBlendMode(blendMode, premul)
    {
        this._stackBlendMode.push(blendMode);
        this._stackBlendModePremul.push(premul);

        const n = this._stackBlendMode.length - 1;

        this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
        this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
    }

    /**
     * pop predefined blendmode / switch back to previous blendmode
     * @function popBlendMode
     * @memberof Context
     * @instance
     */
    popBlendMode()
    {
        this._stackBlendMode.pop();
        this._stackBlendModePremul.pop();

        const n = this._stackBlendMode.length - 1;

        this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

        if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
    }

    // --------------------------------------
    // state stencil

    /**
     * enable / disable stencil testing

    * @function pushStencil
    * @memberof Context
    * @instance
    * @param {Boolean} b enable
    */
    pushStencil(b)
    {
        this._stackStencil.push(b);
        if (!b) this.gl.disable(this.gl.STENCIL_TEST);
        else this.gl.enable(this.gl.STENCIL_TEST);
    }

    /**
     * pop stencil test state and set the previous state
     * @function popStencil
     * @memberof Context
     * @instance
     */
    popStencil()
    {
        this._stackStencil.pop();

        if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
        else this.gl.enable(this.gl.STENCIL_TEST);
    }

    // --------------------------------------

    glGetAttribLocation(prog, name)
    {
        const l = this.gl.getAttribLocation(prog, name);
        // if (l == -1)
        // {
        //     this._log.warn("get attr loc -1 ", name);
        // }
        return l;
    }

    /**
     * should an op now draw helpermeshes
     * @function shouldDrawHelpers
     * @memberof Context
     * @param op
     * @instance
     */
    shouldDrawHelpers(op)
    {
        if (this.tempData.shadowPass) return false;
        if (!op.patch.isEditorMode()) return false;

        // const fb = this.getCurrentFrameBuffer();
        // if (fb && fb.getWidth)
        // {
        //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
        //     if (!fbshould) return false;
        // }

        return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
    }

    _setBlendMode(blendMode, premul)
    {
        const gl = this.gl;

        if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
        {
            // this.gl.disable(this.gl.BLEND);
        }
        else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
        {
            if (premul)
            {
                gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
            }
            else
            {
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            }
        }
        else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
        {
            if (premul)
            {
                gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
            }
            else
            {
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
            }
        }
        else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
        {
            if (premul)
            {
                gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
            }
            else
            {
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
            }
        }
        else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
        {
            if (premul)
            {
                gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            }
            else
            {
                gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
                gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            }
        }
        else
        {
            this._log.log("setblendmode: unknown blendmode");
        }
    }

    /**
     * @param {Geometry} options
     * @param {CglMeshOptions} options
     */
    createMesh(geom, options)
    {
        if (CABLES.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
        return new Mesh(this, geom, options);
    }

    /**
     * set cursor
     * @function setCursor
     * @memberof Context
     * @instance
     * @param {String} str css cursor string
     */
    setCursor(str)
    {
        this._cursor = str;
    }

    /**
     * enable a webgl extension
     * @function enableExtension
     * @memberof Context
     * @instance
     * @param {String} name extension name
     * @returns {Object} extension object or null
     */
    enableExtension(name)
    {
        if (!this.gl) return null;

        if (this._enabledExtensions.hasOwnProperty(name))
            return this._enabledExtensions[name];

        const o = this.gl.getExtension(name);
        this._enabledExtensions[name] = o;

        if (!o) this._log.warn("[cgl_state] extension not available " + name);

        return o;
    }

    getErrorShader()
    {
        if (this.errorShader) return this.errorShader;

        this.errorShader = new CglShader(this, "errormaterial");
        this.errorShader.setSource(CglShader.getDefaultVertexShader(), CglShader.getErrorFragmentShader());
        return this.errorShader;
    }

}

;// CONCATENATED MODULE: ./src/core/core_patch.js











/** @global CABLES.OPS  */

/**
 * @typedef {import("./core_op.js").OpUiAttribs} OpUiAttribs
 */

/**
 * @typedef PatchConfig
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [glCanvasResizeToParent] resize canvas automatically to parent element
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 * @property {String} [prefixJsPath]
 * @property {Function} [onPatchLoaded]
 * @property {Object} [canvas]
 * @property {Object} [patch]
 * @property {String} [patchFile]
 * @property {String} [subPatch] internal use
 * @property {Number} [masterVolume] 0 for maximum possible frames per second
 * @property {HTMLCanvasElement} [glCanvas]
*/

/**
 * @typedef CoreOp
 * @type Op
 */

/**
 * @template {CoreOp} Op
 *
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */
class Patch extends Events
{
    static EVENT_OP_DELETED = "onOpDelete";
    static EVENT_OP_ADDED = "onOpAdd";
    static EVENT_PAUSE = "pause";
    static EVENT_RESUME = "resume";
    static EVENT_PATCHLOADEND = "patchLoadEnd";
    static EVENT_VARIABLES_CHANGED = "variablesChanged";

    #renderOneFrame = false;
    #initialDeserialize = true;

    /** @param {PatchConfig} cfg */
    constructor(cfg)
    {
        super();

        this._log = new Logger("core_patch", { "onError": cfg.onError });

        /** @type {Array<Op>} */
        this.ops = [];
        this.settings = {};

        /** @type {PatchConfig} */
        this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0,

        };

        this.timer = new Timer();
        this.freeTimer = new Timer();
        this.animFrameOps = [];
        this.animFrameCallbacks = [];
        this.gui = false;
        CABLES.logSilent = this.silent = true;
        this.profiler = null;
        this.aborted = false;
        this._crashedOps = [];

        this._animReq = null;
        this._opIdCache = {};
        this._triggerStack = [];
        this.storeObjNames = false; // remove after may release

        /** @type {LoadingStatus} */
        this.loading = new LoadingStatus(this);

        this._volumeListeners = [];
        this._paused = false;
        this._frameNum = 0;
        this.onOneFrameRendered = null;
        this.namedTriggers = {};

        this._origData = null;
        this._frameNext = 0;
        this._frameInterval = 0;
        this._lastFrameTime = 0;
        this._frameWasdelayed = true;
        this.tempData = this.frameStore = {};
        this.reqAnimTimeStamp = 0;

        this.cgCanvas = null;

        if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

        if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
        if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

        if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
        if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
        if (!this.config.masterVolume) this.config.masterVolume = 1.0;

        this._variables = {};

        this.vars = {};
        if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

        this.cgl = new CglContext(this);
        this.cgp = null;

        this._subpatchOpCache = {};

        this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
        if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
        if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
        this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

        if (this.cgl.aborted) this.aborted = true;
        if (this.cgl.silent) this.silent = true;

        if (!CABLES.OPS)
        {
            this.aborted = true;
            throw new Error("no CABLES.OPS found");
        }
        this.freeTimer.play();
        this.exec();

        if (!this.aborted)
        {
            if (this.config.patch)
            {
                this.deSerialize(this.config.patch);
            }
            else if (this.config.patchFile)
            {
                ajax(
                    this.config.patchFile,
                    (err, _data) =>
                    {
                        try
                        {
                            const data = JSON.parse(_data);
                            if (err)
                            {
                                const txt = "";
                                this._log.error("err", err);
                                this._log.error("data", data);
                                this._log.error("data", data.msg);
                                return;
                            }
                            this.deSerialize(data);
                        }
                        catch (e)
                        {
                            this._log.error("could not load/parse patch ", e);
                        }
                    }
                );
            }
            this.timer.play();
        }

        console.log("made with https://cables.gl"); // eslint-disable-line

    }

    isPlaying()
    {
        return !this._paused;
    }

    /** @deprecated */
    renderOneFrame()
    {
        this._paused = true;
        this._renderOneFrame = true;
        this.exec();
        this._renderOneFrame = false;
    }

    /**
     * returns true if patch is opened in editor/gui mode
     * @function isEditorMode
     * @memberof Patch
     * @instance
     * @return {Boolean} editor mode
     */
    isEditorMode()
    {
        return this.config.editorMode === true;
    }

    /**
     * pauses patch execution
     * @function pause
     * @memberof Patch
     * @instance
     */
    pause()
    {
        cancelAnimationFrame(this._animReq);
        this.emitEvent(Patch.EVENT_PAUSE);
        this._animReq = null;
        this._paused = true;
        this.freeTimer.pause();
    }

    /**
     * resumes patch execution
     * @function resume
     * @memberof Patch
     * @instance
     */
    resume()
    {
        if (this._paused)
        {
            cancelAnimationFrame(this._animReq);
            this._paused = false;
            this.freeTimer.play();
            this.emitEvent(Patch.EVENT_RESUME);
            this.exec();
        }
    }

    /**
     * set volume [0-1]
     * @function setVolume
     * @param {Number} v volume
     * @memberof Patch
     * @instance
     */
    setVolume(v)
    {
        this.config.masterVolume = v;
        for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
    }

    /**
     * get asset path
     * @function getAssetPath
     * @memberof Patch
     * @param patchId
     * @instance
     */
    getAssetPath(patchId = null)
    {
        if (this.config.hasOwnProperty("assetPath"))
        {
            return this.config.assetPath;
        }
        else if (this.isEditorMode())
        {
            let id = patchId || gui.project()._id;
            return "/assets/" + id + "/";
        }
        else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
        {
            const parts = document.location.pathname.split("/");
            let id = patchId || parts[parts.length - 1];
            return "/assets/" + id + "/";
        }
        else
        {
            return "assets/";
        }
    }

    /**
     * get js path
     * @function getJsPath
     * @memberof Patch
     * @instance
     */
    getJsPath()
    {
        if (this.config.hasOwnProperty("jsPath"))
        {
            return this.config.jsPath;
        }
        else
        {
            return "js/";
        }
    }

    /**
     * get url/filepath for a filename
     * this uses prefixAssetpath in exported patches
     * @function getFilePath
     * @memberof Patch
     * @instance
     * @param {String} filename
     * @return {String} url
     */
    getFilePath(filename)
    {
        if (!filename) return filename;
        filename = String(filename);
        if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
        if (filename.indexOf("data:") === 0) return filename;
        if (filename.indexOf("file:") === 0) return filename;
        filename = filename.replace("//", "/");
        if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
        return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || ""); //
    }

    clear()
    {
        this.emitEvent("patchClearStart");
        this.cgl.TextureEffectMesh = null;
        this.animFrameOps.length = 0;
        this.timer = new Timer();
        while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

        this._opIdCache = {};
        this.emitEvent("patchClearEnd");
    }

    /**
     * @param {string} identifier
     * @param {string} id
     * @param {string} [opName]
     * @returns {Op}
     */
    createOp(identifier, id, opName = null)
    {

        /**
         * @type {Op}
         */
        let op = null;
        let objName = "";

        try
        {
            if (!identifier)
            {
                console.error("createop identifier false", identifier);
                console.log((new Error()).stack);
                return;
            }
            if (identifier.indexOf("Ops.") === -1)
            {

                /*
                 * this should be a uuid, not a namespace
                 * creating ops by id should be the default way from now on!
                 */
                const opId = identifier;

                if (CABLES.OPS[opId])
                {
                    objName = CABLES.OPS[opId].objName;
                    op = new CABLES.OPS[opId].f(this, objName, id, opId);
                    op.opId = opId;
                }
                else
                {
                    if (opName)
                    {
                        identifier = opName;
                        this._log.warn("could not find op by id: " + opId);
                    }
                    else
                    {
                        throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                    }
                }
            }

            if (!op)
            {
                // fallback: create by objname!
                objName = identifier;
                const parts = identifier.split(".");
                const opObj = Patch.getOpClass(objName);

                if (!opObj)
                {
                    this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                    this._log.error("unknown op: " + objName);
                    throw new Error("unknown op: " + objName);
                }
                else
                {
                    if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                    else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                    else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                    else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                    else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                    else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                    else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                    else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                    else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                    else console.log("parts.length", parts.length);
                }

                if (op)
                {
                    op.opId = null;
                    for (const i in CABLES.OPS)
                    {
                        if (CABLES.OPS[i].objName == objName) op.opId = i;
                    }
                }
            }
        }
        catch (e)
        {
            this._crashedOps.push(objName);

            this._log.error("[instancing error] " + objName, e);

            if (!this.isEditorMode())
            {
                this._log.error("INSTANCE_ERR", "Instancing Error: " + objName, e);
                // throw new Error("instancing error 1" + objName);
            }
        }

        if (op)
        {
            op._objName = objName;
            op.patch = this;
        }
        else
        {
            this._log.log("no op was created!?", identifier, id);
        }
        return op;
    }

    /**
     * create a new op in patch
     * @function addOp
     * @memberof Patch
     * @instance
     * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
     * @param {OpUiAttribs} uiAttribs Attributes
     * @param {string} id
     * @param {boolean} [fromDeserialize]
     * @param {string} [opName] e.g. Ops.Math.Sum
     * @example
     * // add invisible op
     * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
     */
    addOp(opIdentifier, uiAttribs, id, fromDeserialize = false, opName = null)
    {
        const op = this.createOp(opIdentifier, id, opName);

        if (op)
        {
            uiAttribs = uiAttribs || {};
            if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
            if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
            uiAttribs.subPatch = uiAttribs.subPatch || 0;
            op.setUiAttribs(uiAttribs);
            if (op.onCreate) op.onCreate();

            if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
            if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

            if (this._opIdCache[op.id])
            {
                this._log.warn("opid with id " + op.id + " already exists in patch!");
                this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
                // return;
            }

            this.ops.push(op);
            this._opIdCache[op.id] = op;

            if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
            this.emitEvent(Patch.EVENT_OP_ADDED, op, fromDeserialize);

            if (op.init) op.init();

            op.emitEvent("init", fromDeserialize);
        }
        else
        {
            this._log.error("addop: op could not be created: ", opIdentifier);
        }

        return op;
    }

    addOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

        this.animFrameOps.push(op);
    }

    removeOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++)
        {
            if (this.animFrameOps[i] == op)
            {
                this.animFrameOps.splice(i, 1);
                return;
            }
        }
    }

    addOnAnimFrameCallback(cb)
    {
        this.animFrameCallbacks.push(cb);
    }

    removeOnAnimCallback(cb)
    {
        for (let i = 0; i < this.animFrameCallbacks.length; i++)
        {
            if (this.animFrameCallbacks[i] == cb)
            {
                this.animFrameCallbacks.splice(i, 1);
                return;
            }
        }
    }

    deleteOp(opid, tryRelink, reloadingOp)
    {
        let found = false;
        for (const i in this.ops)
        {
            if (this.ops[i].id == opid)
            {
                const op = this.ops[i];

                /** @type {Port} */
                let reLinkP1 = null;

                /** @type {Port} */
                let reLinkP2 = null;

                if (op)
                {
                    found = true;
                    if (tryRelink)
                    {
                        if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                        {
                            if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                            {
                                reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                                reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                            }
                        }
                    }

                    const opToDelete = this.ops[i];
                    opToDelete.removeLinks();

                    this.ops.splice(i, 1);
                    opToDelete.emitEvent("delete", opToDelete);
                    this.emitEvent(Patch.EVENT_OP_DELETED, opToDelete, reloadingOp);

                    if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                    if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                    opToDelete.cleanUp();

                    if (reLinkP1 !== null && reLinkP2 !== null)
                    {
                        this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                    }

                    delete this._opIdCache[opid];
                    break;
                }
            }
        }

        if (!found) this._log.warn("core patch deleteop: not found...", opid);
    }

    getFrameNum()
    {
        return this._frameNum;
    }

    emitOnAnimFrameEvent(time, delta)
    {
        time = time || this.timer.getTime();

        for (let i = 0; i < this.animFrameCallbacks.length; ++i)
            if (this.animFrameCallbacks[i])
                this.animFrameCallbacks[i](time, this._frameNum, delta);

        for (let i = 0; i < this.animFrameOps.length; ++i)
            if (this.animFrameOps[i].onAnimFrame)
                this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
    }

    renderFrame(timestamp)
    {
        this.timer.update(this.reqAnimTimeStamp);
        this.freeTimer.update(this.reqAnimTimeStamp);
        const time = this.timer.getTime();
        const startTime = performance.now();
        this.cgl.frameStartTime = this.timer.getTime();

        const delta = timestamp - this.reqAnimTimeStamp || timestamp;

        this.emitOnAnimFrameEvent(null, delta);

        this.cgl.profileData.profileFrameDelta = delta;
        this.reqAnimTimeStamp = timestamp;
        this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

        this.emitEvent("onRenderFrame", time);

        this._frameNum++;
        if (this._frameNum == 1)
        {
            if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
        }
    }

    /**
     * @param {number} [timestamp]
     */
    exec(timestamp)
    {
        if (!this.#renderOneFrame && (this._paused || this.aborted)) return;
        this.emitEvent("reqAnimFrame");
        cancelAnimationFrame(this._animReq);

        this.config.fpsLimit = this.config.fpsLimit || 0;
        if (this.config.fpsLimit)
        {
            this._frameInterval = 1000 / this.config.fpsLimit;
        }

        const now = CABLES.now();
        const frameDelta = now - this._frameNext;

        if (this.isEditorMode())
        {
            if (!this.#renderOneFrame)
            {
                if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
                {
                    this._lastFrameTime = 0;
                    setTimeout(this.exec.bind(this), 500);
                    this.emitEvent("renderDelayStart");
                    this._frameWasdelayed = true;
                    return;
                }
            }
        }

        if (this.#renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
        {
            this.renderFrame(timestamp);

            if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
        }

        if (this._frameWasdelayed)
        {
            this.emitEvent("renderDelayEnd");
            this._frameWasdelayed = false;
        }

        if (this.#renderOneFrame)
        {
            if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
            this.emitEvent("renderedOneFrame");
            this._renderOneFrame = false;
        }

        if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
    }

    /**
     * link two ops/ports
     * @function link
     * @memberof Patch
     * @instance
     * @param {Op} op1
     * @param {String} port1Name
     * @param {Op} op2
     * @param {String} port2Name
     * @param {boolean} lowerCase
     * @param {boolean} fromDeserialize
     */
    link(op1, port1Name, op2, port2Name, lowerCase = false, fromDeserialize = false)
    {
        if (!op1) return this._log.warn("link: op1 is null ");
        if (!op2) return this._log.warn("link: op2 is null");

        const port1 = op1.getPort(port1Name, lowerCase);
        const port2 = op2.getPort(port2Name, lowerCase);

        if (!port1) return this._log.warn("port1 not found! " + port1Name + " (" + op1.objName + ")");
        if (!port2) return this._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

        if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

        if (Link.canLink(port1, port2))
        {
            const link = new Link(this);
            link.link(port1, port2);

            this.emitEvent("onLink", port1, port2, link, fromDeserialize);
            return link;
        }
    }

    /**
     * @param {Object} options
     * @returns {Object|String}
     */
    serialize(options)
    {
        const obj = {};

        options = options || {};
        obj.ops = [];
        obj.settings = this.settings;
        for (const i in this.ops)
        {
            const op = this.ops[i];
            if (op && op.getSerialized)obj.ops.push(op.getSerialized());
        }

        cleanJson(obj);

        if (options.asObject) return obj;
        return JSON.stringify(obj);
    }

    getOpsByRefId(refId) // needed for instancing ops ?
    {
        const perf = gui.uiProfiler.start("[corepatchetend] getOpsByRefId");
        const refOps = [];
        const ops = gui.corePatch().ops;
        for (let i = 0; i < ops.length; i++)
            if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
        perf.finish();
        return refOps;
    }

    /**
     * @param {String} opid
     * @returns {Op}
     */
    getOpById(opid)
    {
        return this._opIdCache[opid];
    }

    /**
     * @param {String} name
     */
    getOpsByObjName(name)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].objName == name) arr.push(this.ops[i]);
        return arr;
    }

    /**
     * @param {String} opid
     */
    getOpsByOpId(opid)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].opId == opid) arr.push(this.ops[i]);
        return arr;
    }

    /**
     * @param {String} which
     */
    loadLib(which)
    {
        ajaxSync(
            "/ui/libs/" + which + ".js",
            (_err, res) =>
            {
                const se = document.createElement("script");
                se.type = "text/javascript";
                se.text = res;
                document.getElementsByTagName("head")[0].appendChild(se);
            },
            "GET",
        );
    }

    getSubPatchOpsByName(patchId, objName)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                arr.push(this.ops[i]);

        return arr;
    }

    getSubPatchOp(patchId, objName)
    {
        return this.getFirstSubPatchOpByName(patchId, objName);
    }

    /**
     * @param {string} patchId
     * @param {string} objName
     * @returns {Op}
     */
    getFirstSubPatchOpByName(patchId, objName)
    {
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                return this.ops[i];

        return false;
    }

    _addLink(opinid, opoutid, inName, outName)
    {
        return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
    }

    /**
     * @param {String} s
     */
    logStartup(s)
    {
        if (window.logStartup)window.logStartup(s);
    }

    /**
     * @typedef DeserializeOptions
     * @property {boolean} [genIds]
     * @property {boolean} [createRef]
     */

    /**
     * Description
     * @param {Object} obj
     * @param {DeserializeOptions} options
     * @returns {any}
     */
    deSerialize(obj, options = { "genIds": false, "createRef": false })
    {
        if (this.aborted) return;
        const newOps = [];
        const loadingId = this.loading.start("core", "deserialize");

        if (typeof obj === "string") obj = JSON.parse(obj);

        if (this.#initialDeserialize)
        {
            this.#initialDeserialize = false;
            this.namespace = obj.namespace || "";
            this.name = obj.name || "";
            this.settings = obj.settings;
        }

        this.emitEvent("patchLoadStart");

        obj.ops = obj.ops || [];

        this.logStartup("add " + obj.ops.length + " ops... ");

        const addedOps = [];

        // add ops...
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            const start = CABLES.now();
            const opData = obj.ops[iop];
            let op = null;

            try
            {
                if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
                else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
            }
            catch (e)
            {
                this._log.error("[instancing error] op data:", opData, e);
                // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
            }

            if (op)
            {
                addedOps.push(op);
                if (options.genIds) op.id = shortId();
                op.portsInData = opData.portsIn;
                op._origData = JSON.parse(JSON.stringify(opData));
                op.storage = opData.storage;
                // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

                for (const ipi in opData.portsIn)
                {
                    const objPort = opData.portsIn[ipi];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port = op.getPort(objPort.name);

                        if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                        if (port && objPort.value !== undefined && port.type != Port.TYPE_TEXTURE) port.set(objPort.value);

                        if (port)
                        {
                            port.deSerializeSettings(objPort);
                        }
                        else
                        {

                            /*
                             * if (port.uiAttribs.hasOwnProperty("title"))
                             * {
                             *     op.preservedPortTitles = op.preservedPortTitles || {};
                             *     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                             * }
                             */
                            op.preservedPortValues = op.preservedPortValues || {};
                            op.preservedPortValues[objPort.name] = objPort.value;
                        }
                    }
                }

                for (const ipo in opData.portsOut)
                {
                    const objPort = opData.portsOut[ipo];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port2 = op.getPort(objPort.name);

                        if (port2)
                        {
                            port2.deSerializeSettings(objPort);

                            if (port2.uiAttribs.hasOwnProperty("title"))
                            {
                                op.preservedPortTitles = op.preservedPortTitles || {};
                                op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                            }

                            if (port2.type != Port.TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                                port2.set(obj.ops[iop].portsOut[ipo].value);

                            if (objPort.expose) port2.setUiAttribs({ "expose": true });
                        }
                    }
                }
                newOps.push(op);
            }

            const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
            if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
        }
        this.logStartup("add ops done");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoadedValueSet)
            {
                this.ops[i].onLoadedValueSet(this.ops[i]._origData);
                this.ops[i].onLoadedValueSet = null;
                this.ops[i]._origData = null;
            }
            this.ops[i].emitEvent("loadedValueSet");
        }

        this.logStartup("creating links");

        if (options.opsCreated)options.opsCreated(addedOps);
        // create links...
        if (obj.ops)
        {
            for (let iop = 0; iop < obj.ops.length; iop++)
            {
                if (obj.ops[iop].portsIn)
                {
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                    {
                        if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                            {
                                this._addLink(
                                    obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                                /*
                                 * const took = performance.now - startTime;
                                 * if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                                 */
                            }
                        }
                    }
                }
                if (obj.ops[iop].portsOut)
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                        if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili])
                                {
                                    if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                    {
                                        // lost link
                                        const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                        let dstOp = null;
                                        let theSubPatch = 0;

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                                outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                            )
                                            {
                                                theSubPatch = this.ops[i].patchId.get();
                                                break;
                                            }
                                        }

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                                this.ops[i].uiAttribs.subPatch == theSubPatch)
                                            {
                                                dstOp = this.ops[i];
                                                break;
                                            }
                                        }

                                        if (!dstOp) this._log.warn("could not find op for lost link");
                                        else
                                        {
                                            this._addLink(
                                                dstOp.id,
                                                obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                                obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                                obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                        }
                                    }
                                    else
                                    {
                                        const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                        if (!l)
                                        {
                                            const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                            const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                            if (!op1)console.log("could not find link op1");
                                            if (!op2)console.log("could not find link op2");

                                            const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                            if (op1 && !op1.getPort(p1Name))
                                            {
                                                // console.log("PRESERVE port 1 not found", p1Name);

                                                op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                                op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }

                                            const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                            if (op2 && !op2.getPort(p2Name))
                                            {
                                                // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                                op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                                op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
            }
        }

        this.logStartup("calling ops onloaded");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoaded)
            {
                // TODO: deprecate!!!
                this.ops[i].onLoaded();
                this.ops[i].onLoaded = null;
            }
        }

        this.logStartup("initializing ops...");
        for (const i in this.ops)
        {
            if (this.ops[i].init)
            {
                try
                {
                    this.ops[i].init();
                    this.ops[i].init = null;
                }
                catch (e)
                {
                    console.error("op.init crash", e);
                }
            }
        }

        this.logStartup("initializing vars...");

        if (this.config.variables)
            for (const varName in this.config.variables)
                this.setVarValue(varName, this.config.variables[varName]);

        this.logStartup("initializing var ports");

        for (const i in this.ops)
        {
            this.ops[i].initVarPorts();
            delete this.ops[i].uiAttribs.pasted;
        }

        setTimeout(() => { this.loading.finished(loadingId); }, 100);

        if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

        this.emitEvent(Patch.EVENT_PATCHLOADEND, newOps, obj, options.genIds);
    }

    profile(enable)
    {
        this.profiler = new Profiler(this);
        for (const i in this.ops)
        {
            this.ops[i].profile(enable);
        }
    }

    // ----------------------

    /**
     * set variable value
     * @function setVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     * @param {Number|String|Boolean} val value
     */
    setVariable(name, val)
    {
        if (this._variables[name] !== undefined)
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._log.warn("variable " + name + " not found!");
        }
    }

    _sortVars()
    {
        if (!this.isEditorMode()) return;
        const ordered = {};
        Object.keys(this._variables).sort(
            (a, b) =>
            { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
        ).forEach((key) =>
        {
            ordered[key] = this._variables[key];
        });
        this._variables = ordered;
    }

    /**
     * has variable
     * @function hasVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     */
    hasVar(name)
    {
        return this._variables[name] !== undefined;
    }

    // used internally
    setVarValue(name, val, type)
    {
        if (this.hasVar(name))
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._variables[name] = new PatchVariable(name, val, type);
            this._sortVars();
            this.emitEvent(Patch.EVENT_VARIABLES_CHANGED);
        }
        return this._variables[name];
    }

    // old?
    getVarValue(name, val)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
    }

    /**
     * @function getVar
     * @memberof Patch
     * @instance
     * @param {String} name
     * @return {PatchVariable} variable
     */
    getVar(name)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name];
    }

    deleteVar(name)
    {
        for (let i = 0; i < this.ops.length; i++)
            for (let j = 0; j < this.ops[i].portsIn.length; j++)
                if (this.ops[i].portsIn[j].getVariableName() == name)
                    this.ops[i].portsIn[j].setVariable(null);

        delete this._variables[name];
        this.emitEvent("variableDeleted", name);
        this.emitEvent("variablesChanged");
    }

    /**
     * @param {number} t
     * @returns {Object}
     */
    getVars(t)
    {
        if (t === undefined) return this._variables;
        if (t === 1) return {};

        const perf = gui.uiProfiler.start("[corepatchetend] getVars");

        const vars = [];
        let tStr = "";
        if (t == Port.TYPE_STRING) tStr = "string";
        else if (t == Port.TYPE_VALUE) tStr = "number";
        else if (t == Port.TYPE_ARRAY) tStr = "array";
        else if (t == Port.TYPE_OBJECT) tStr = "object";
        else
        {
            console.log("unknown,,,", t);
            console.log(new Error().stack);
        }

        for (const i in this._variables)
        {
            if (!this._variables[i].type || this._variables[i].type == tStr || this._variables[i].type == t) vars.push(this._variables[i]);
        }

        perf.finish();

        return vars;
    }

    // getVars(t)
    // {
    //     if (t === undefined) return this._variables;

    //     const vars = [];
    //     let tStr = "";
    //     if (t == Port.TYPE_STRING) tStr = "string";
    //     if (t == Port.TYPE_VALUE) tStr = "number";
    //     if (t == Port.TYPE_ARRAY) tStr = "array";
    //     if (t == Port.TYPE_OBJECT) tStr = "object";

    //     for (const i in this._variables)
    //     {
    //         if (!this._variables[i].type || this._variables[i].type == tStr || this._variables[i].type == t) vars.push(this._variables[i]);
    //     }
    //     return vars;
    // }

    /**
     * @function preRenderOps
     * @memberof Patch
     * @instance
     * @description invoke pre rendering of ops
     * @function
     */
    preRenderOps()
    {
        this._log.log("prerendering...");

        for (let i = 0; i < this.ops.length; i++)
        {
            if (this.ops[i].preRender)
            {
                this.ops[i].preRender();
                this._log.log("prerender " + this.ops[i].objName);
            }
        }
    }

    /**
     * @function dispose
     * @memberof Patch
     * @instance
     * @description stop, dispose and cleanup patch
     */
    dispose()
    {
        this.pause();
        this.clear();
        this.cgl.dispose();
    }

    pushTriggerStack(p)
    {
        this._triggerStack.push(p);
    }

    popTriggerStack()
    {
        this._triggerStack.pop();
    }

    printTriggerStack()
    {
        if (this._triggerStack.length == 0)
        {
            // console.log("stack length", this._triggerStack.length); // eslint-disable-line
            return;
        }
        console.groupCollapsed( // eslint-disable-line
            "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
        );

        const rows = [];
        for (let i = 0; i < this._triggerStack.length; i++)
        {
            rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
        }

        console.table(rows); // eslint-disable-line
        console.groupEnd(); // eslint-disable-line
    }

    /**
     * returns document object of the patch could be != global document object when opening canvas ina popout window
     * @function getDocument
     * @memberof Patch
     * @instance
     * @return {Object} document
     */
    getDocument()
    {
        return this.cgl.canvas.ownerDocument;
    }
}

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};

Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};

/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {Object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new Patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */




const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        if (op.patch.config.onError)op.logError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {Op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    /*
     * port.onLinkChanged = function() {
     *   op.log("onLinkChanged");
     *   if(port.isLinked()) {
     *
     *       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
     *
     *       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
     *
     *       }
     *   } else { // unlinked
     *
     *   }
     * };
     */

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};

/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    if (!audioContext) onError(new Error("No Audiocontext"));

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();

    if (!url) return;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);

        audioContext.decodeAudioData(request.response, onFinished, onError).catch((e) =>
        {
            onError(e);
        });
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader_default.wgsl
/* harmony default export */ const cgp_shader_default = ("\r\nstruct MyVSInput\r\n{\r\n    @location(0) position: vec3<f32>,\r\n    @location(1) normal: vec3<f32>,\r\n    @location(2) texcoord: vec2<f32>,\r\n};\r\n\r\nstruct MyVSOutput\r\n{\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) normal: vec3<f32>,\r\n    @location(1) texcoord: vec2<f32>,\r\n};\r\n\r\n@vertex\r\nfn myVSMain(v: MyVSInput) -> MyVSOutput\r\n{\r\n    var vsOut: MyVSOutput;\r\n    var pos =vec4<f32>(v.position, 1.0);\r\n\r\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\r\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\r\n\r\n    vsOut.normal = v.normal;\r\n    vsOut.texcoord = v.texcoord;\r\n    return vsOut;\r\n}\r\n\r\n@fragment\r\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\r\n{\r\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\r\n}\r\n\r\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js



class CgpUniform extends CgUniform
{

    /** @type {CgpContext} */
    #cgp = null;

    /** @type {GPUBuffer} */
    gpuBuffer = null;

    gpuBufferChanged = false;

    constructor(__shader, __type, __name, _value, _port2, _port3, _port4)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4);
        this.#cgp = __shader._cgp;

        if (!_value || (_value.get && !_value.get()))
        {
            // if (this.getType() == "m4") this._value = mat4.create();
            if (this.getType() == "t")
            {
                this._value = this.#cgp.getEmptyTexture();
                console.log("TEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", this._value);
            }
            // else if (this.getType() == "2f") this._value = [0, 0];
            // else if (this.getType() == "4f") this._value = [0, 1, 0, 1];
            // else if (this.getType() == "3f") this._value = [0, 1, 0];
        }

    }

    getInfo()
    {
        return { "name": this.name, "type": this.type, "value": this.getValue() };
    }

    updateValueF() { }

    updateValueArrayF() {}

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        if (v[0] == undefined)
        {
            this._log.stack("uniform value undefined");
            console.error("uniform value undefined");
        }
        this.needsUpdate = true;
        this._value = v;
    }

    setValueT(v)
    {
        if (this._value != v)
            this._shader.needsPipelineUpdate = "texture changed"; // todo really needed ? change binding instead?

        this.needsUpdate = true;
        this._value = v;
    }

    updateValueM4(v) {}

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueAny(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueAny() {}

    updateValueT() {}

    /**
     * @param {GPUBuffer} b
     */
    setGpuBuffer(b)
    {
        this.gpuBufferChanged = true;
        this.gpuBuffer = b;
    }

    copyToBuffer(buff, pos = 0)
    {
        if (this._type == "f")
        {
            buff[pos] = this._value;
        }
        else if (this._type == "t")
        {
        }
        else if (this._type == "4f")
        {
            buff[pos] = this._value[0];
            buff[pos + 1] = this._value[1];
            buff[pos + 2] = this._value[2];
            buff[pos + 3] = this._value[3];
        }
        else if (this._type == "2f")
        {
            buff[pos] = this._value[0];
            buff[pos + 1] = this._value[1];
        }
        else if (this._type == "3f")
        {
            buff[pos] = this._value[0];
            buff[pos + 1] = this._value[1];
            buff[pos + 2] = this._value[2];
        }
        else if (this._type == "f[]")
        {
            for (let i = 0; i < this._value.length; i++)
                buff[pos + i] = this._value[i];
        }
        else if (this._type == "m4")
        {
            for (let i = 0; i < 16; i++)
                buff[pos + i] = this._value[i];
        }
        else
        {
            this._log.warn("uniform copy to buffer unknown", this._type);
        }
    }

    getWgslTypeStr()
    {
        if (this._type == "m4") return "mat4x4f";
        if (this._type == "4f") return "vec4f";
        if (this._type == "3f") return "vec3f";
        if (this._type == "2f") return "vec2f";
        if (this._type == "f") return "float";
        if (this._type == "f[]") return "array<vec4f>";
        if (this._type == "i") return "int";
        if (this._type == "sampler") return "sampler";
        if (this._type == "t") return "texture_2d<f32>";
        this._log.warn("unknown type getWgslTypeStr", this._type);
        return "???";
    }

    getSizeBytes()
    {
        const bytesPerFloat = 4;
        const bytesPerInt = 4;
        if (this._type == "t") return 4;
        if (this._type == "sampler") return 4;
        if (this._type == "f") return 1 * bytesPerFloat;
        if (this._type == "2f") return 2 * bytesPerFloat;
        if (this._type == "3f") return 3 * bytesPerFloat;
        if (this._type == "4f") return 4 * bytesPerFloat;
        if (this._type == "f[]") return this._value.length * bytesPerFloat;
        if (this._type == "m4") return 4 * 4 * bytesPerFloat;
        if (this._type == "i") return 1 * bytesPerInt;
        if (this._type == "2i") return 2 * bytesPerInt;

        this._log.warn("unknown type getSizeBytes", this._type);
        return 4;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4);
        uni.shaderType = this.shaderType;

        console.log(this._name, this._value, uni._value);

        return uni;
    }

}

;// CONCATENATED MODULE: ./src/core/cg/preproc.js
function preproc(str, vars)
{
    if (!str)
    {
        console.warn("shader preproc no shader code given");
    }
    str = str || "";
    const lines = str.split("\n");
    const outLines = [];
    let stack = [];

    for (let i = 0; i < lines.length; i++)
    {
        let line = lines[i].trim();
        let parts = line.split(" ");

        if (line.startsWith("#ifdef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": s });
            continue;
        }
        if (line.startsWith("#ifndef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": !s });
            continue;
        }
        if (line.startsWith("#endif"))
        {
            stack.pop();
            continue;
        }
        const state = stack[stack.length - 1];

        if (line.startsWith("#else"))
        {
            state.state = !state.state;
            continue;
        }

        if (!state || state.state)
        {
            outLines.push(lines[i]);
        }
    }

    return outLines.join("\n");
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_gpubuffer.js



/** @typedef GPUBufferOptions
 * @property {number} length
 * @property {GPUBufferDescriptor} [buffCfg]
*/

class CgpGguBuffer extends Events
{
    #name = "unknown";

    /** @type {CgpContext} */
    #cgp = null;

    /** @type {GPUBuffer} */
    #gpuBuffer = null;

    /** @type {GPUBufferDescriptor} */
    buffCfg = null;

    #length = 0;
    id = CABLES.shortId();
    floatArr = null;
    needsUpdate = true;
    #log;
    // presentationFormat = null;

    static BINDINGTYPE_STORAGE = "storage";
    static BINDINGTYPE_UNIFORM = "uniform";
    static BINDINGTYPE_READONLY_STORAGE = "read-only-storage";

    /**
     * Description
     * @param {CgpContext} cgp
     * @param {String} name
     * @param {Array} data=null
     * @param {GPUBufferOptions} options={}
     */
    constructor(cgp, name, data = null, options = null)
    {
        super();
        this.#log = new Logger("cgpGpubuffer");
        if (!cgp.supported) return;

        this.#name = name;
        this.setData([0, 0, 0, 0]);

        if (options.buffCfg) this.buffCfg = options.buffCfg;
        if (data) this.setData(data);
        if (options.length) this.setLength(options.length);

        this.updateGpuBuffer(cgp);
    }

    /**
     * @param {Array} arr
     */
    setData(arr)
    {
        this.floatArr = new Float32Array(arr);
        this.setLength(this.floatArr.length);

        this.needsUpdate = true;
    }

    /**
     * @param {number} s
     */
    setLength(s)
    {
        this.#length = s;
        if (!this.floatArr || s != this.floatArr.length)
        {
            this.floatArr = new Float32Array(this.#length);
            this.needsUpdate = true;
        }
    }

    /** @param {CgpContext} cgp */
    updateGpuBuffer(cgp = null)
    {
        if (cgp) this.#cgp = cgp;
        if (!this.#cgp || !this.#cgp.device)
        {
            this.#log.warn("no cgp...", this.#name, this.#cgp);
            return;
        }

        this.#cgp.pushErrorScope("updateGpuBuffer");
        if (!this.#gpuBuffer)
        {
            this.buffCfg = /** @type {GPUBufferDescriptor} */(this.buffCfg || {});
            this.buffCfg.label = "gpuBuffer-" + this.#name;
            if (!this.buffCfg.hasOwnProperty("size") && this.floatArr) this.buffCfg.size = this.floatArr.length * 4;
            this.buffCfg.usage = this.buffCfg.usage || (GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);

            this.#gpuBuffer = this.#cgp.device.createBuffer(this.buffCfg);
        }

        if (this.floatArr)
            this.#cgp.device.queue.writeBuffer(
                this.#gpuBuffer,
                0,
                this.floatArr.buffer,
                this.floatArr.byteOffset,
                this.floatArr.byteLength
            );

        this.#cgp.popErrorScope();

        this.needsUpdate = false;
    }

    get name()
    {
        return this.#name;
    }

    /** @returns {GPUBuffer} */
    get gpuBuffer()
    {
        if (!this.#gpuBuffer || this.needsUpdate) this.updateGpuBuffer();

        return this.#gpuBuffer;
    }

    get length()
    {
        return this.#length;
    }

    getSizeBytes()
    {
        return this.floatArr.length * 4;
    }

    dispose()
    {
        // setTimeout(() =>
        // {
        //     if (this._gpuBuffer) this._gpuBuffer.destroy();
        // }, 100);
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_binding.js






/**
 * @typedef CgpBindingOptions
 * @property {string} bindingType  "uniform", "storage", "read-only-storage","read-write-storage",
 * @property {string} [define]
 * @property {CgpShader} shader
 * @property {number} stage
 * @property {number} index
 */

class Binding
{
    #name = "";
    #options = {};
    #id = CABLES.simpleId();

    /** @type {CgpContext} */
    #cgp = null;

    /** @type {Array<CgpUniform>} */
    uniforms = [];

    /** @type {Array<CgpGguBuffer>} */
    cGpuBuffers = [];

    /** @type {CgpShader} */
    #shader = null;

    /** @type {Array<GPUBindGroupEntry>} */
    bindingInstances = [];

    bindingType = "uniform";
    isValid = true;
    changed = 0;
    #index = -1;

    define = "";

    /**
     * Description
     * @param {CgpContext} cgp
     * @param {String} name
     * @param {CgpBindingOptions} [options]
     */
    constructor(cgp, name, options)
    {
        this._log = new Logger("cgp_binding");
        if (!options) this._log.error("binding options is not an object", name);

        this.#name = name;
        this.#cgp = cgp;
        this.#options = options || {};
        this.define = this.#options.define || "";
        if (this.#options.bindingType) this.bindingType = this.#options.bindingType;
        this.stage = options.stage;
        // if (options.hasOwnProperty("index")) this.#index = options.index;
        this.#shader = options.shader;

        if (this.#shader)
        {
            if (this.stage == GPUShaderStage.FRAGMENT) this.#shader.bindingsFrag.push(this);
            else if (this.stage == GPUShaderStage.VERTEX) this.#shader.bindingsVert.push(this);
            else if (this.stage == GPUShaderStage.COMPUTE) this.#shader.bindingsCompute.push(this);
            else this._log.warn("unknown shader stage binding");

            // if (this.#index == -1) this.#index = this.shader.getNextBindingCounter();
        }

        // if (this.#index == -1) this._log.warn("binding could not get an index", this.#name);

        this.#cgp.on("deviceChange", () =>
        {
            // this.reInit();
        });
    }

    getStageString()
    {
        if (this.stage == GPUShaderStage.FRAGMENT) return "fragment";
        if (this.stage == GPUShaderStage.VERTEX) return "vertex";
        if (this.stage == GPUShaderStage.COMPUTE) return "compute";
        return "unknown";
    }

    getInfo()
    {
        return {
            "class": this.constructor.name,
            "name": this.#name,
            "id": this.#id,
            "stage": this.getStageString(),
            "bindingType": this.bindingType,
            "numUniforms": this.uniforms.length,
            "bindingIndex": this.getBindingIndex(),
            "numInstances": this.bindingInstances.length
        };
    }

    getBindingIndex()
    {
        if (this.#index == -1)
            this.#index = this.#shader.getNewBindingGroupIndex();

        return this.#index;
    }

    isStruct()
    {
        if (this.bindingType != "uniform") return false;
        if (this.uniforms.length == 0) return false;

        if (this.uniforms.length == 1)
        {
            if (this.uniforms[0].type == "t" || this.uniforms[0].type == "sampler") return false;
        }

        return true;
    }

    /**
     * @param {CgpShader} newShader
     * @returns {Binding}
     */
    copy(newShader)
    {
        const options = {};

        for (const i in this.#options)
            options[i] = this.#options[i];

        options.shader = newShader;

        let binding = new Binding(this.#cgp, this, this.#name);

        for (let i = 0; i < this.uniforms.length; i++)
        {
            binding.addUniform(newShader.getUniform(this.uniforms[i].name)); // .copy(newShader)
        }

        return binding;
    }

    /**
     * @param {CgpUniform} uni
     */
    addUniform(uni)
    {
        this.uniforms.push(uni);
    }

    getSizeBytes()
    {
        let size = 0;
        for (let i = 0; i < this.uniforms.length; i++)
        {
            // this._log.log("UNIFORM!!!", i, this.uniforms[i], this.uniforms[i].getSizeBytes());
            // this._log.log("getSizeBytes", this.uniforms[i], this.uniforms[i].getSizeBytes);
            size += this.uniforms[i].getSizeBytes();
        }
        // if (this.uniforms.length == 0)this._log.log("NO UNIFORMS!!!");

        if (this.uniforms.length == 0 && this.bindingType != "uniform")
        {
            return 300;
        }
        return size;
    }

    getShaderHeaderCode()
    {
        let str = "";
        let name = this.#name;
        let typeStr = "";

        if (!this.isActive)
        {
            str += "// " + typeStr + " " + this.#name + ": excluded because define " + this.#options.define + "\n";
            return str;
        }

        str += "// bindingType:" + this.bindingType + "\n";
        str += "// uniforms:" + this.uniforms.length + "\n";

        if (this.uniforms.length == 0 && this.bindingType == "uniform") return str + "// nothing.... \n\n";

        if (this.uniforms.length > 0)
        {
            typeStr = "strct_" + this.#name;
            str += "// " + this.uniforms.length + " uniforms\n";

            if (this.isStruct())
            {
                str += "struct " + typeStr + "\n";
                str += "{\n";
                for (let i = 0; i < this.uniforms.length; i++)
                {

                    str += "    " + this.uniforms[i].name + ": " + this.uniforms[i].getWgslTypeStr();
                    if (i != this.uniforms.length - 1)str += ",";
                    str += "\n";
                }
                str += "};\n";
            }
            else
            {
                typeStr = this.uniforms[0].getWgslTypeStr();
                name = this.uniforms[0].name;
            }
        }

        if (this.bindingType.includes("storage") && this.uniforms.length == 0)
        {
            typeStr = "array<f32>";
        }

        str += "@group(0) ";
        str += "@binding(" + this.getBindingIndex() + ") ";

        if (this.#options.gpuBuffer)
        {
            str += "var<storage,read_write> ";
        }
        else
        if (this.isStruct())
        {
            str += "var<" + this.bindingType + "> ";
        }
        else if (this.bindingType == "read-only-storage")str += "var<storage,read> ";
        else if (this.bindingType == "read-write")str += "var<storage,read_write> ";
        else
        {
            str += "var ";
            str += "/* unknown bindingtype: " + this.bindingType + " */";
        }

        str += name + ": " + typeStr + ";\n";

        // @group(0) @binding(0) var<storage, read_write> resultMatrix : array<f32>;

        // if (this.#options.define) str += "#endif\n";

        return str + "\n";
    }

    /** @returns {GPUBindGroupLayoutEntry} */
    getBindingGroupLayoutEntry()
    {

        if (!this.isActive)
        {
            console.log("binding", this.#name, "not active");
            return null;
        }

        let label = "layout " + this.#name + " [";
        for (let i = 0; i < this.uniforms.length; i++) label += this.uniforms[i].getName() + ",";
        label += "]";

        const o = {
            "label": label,
            "binding": this.getBindingIndex(),
            "visibility": this.stage,
            "size": this.getSizeBytes()
        };

        if (this.#options.gpuBuffer)
        {
            o.buffer = this.#options.gpuBuffer.gpuBuffer;
            o.buffer.type = this.bindingType;
        }
        else
        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            o.texture = {};
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            o.sampler = {};
        }
        else
        {
            o.buffer = {};
            o.buffer.type = this.bindingType;
        }

        return o;
    }

    get isActive()
    {
        if (!this.define) return true;
        if (this.define && !this.#shader.hasDefine(this.define)) return false;
        return true;
    }

    /**
     * @param {number} inst
     * @returns {GPUBindGroupEntry}
     */
    getBindingGroupEntry(inst)
    {

        if (!this.isActive) return null;
        this.isValid = false;

        /** @type {GPUBindGroupEntry} */
        const o = {
            "label": this.#name + " binding",
            "binding": this.getBindingIndex(),
            "size": this.getSizeBytes(),
            "visibility": this.stage
        };

        this.bindingInstances[inst] = o;
        // if (this.uniforms.length == 0)
        // {
        //     console.log("binding uniforms length 0", this);
        //     return;
        // }

        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this.uniforms[0].getValue() && this.uniforms[0].getValue().gpuTexture) o.resource = this.uniforms[0].getValue().gpuTexture.createView();
            else o.resource = this.#cgp.getEmptyTexture().createView();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            let smplDesc = {
                "addressModeU": "mirror-repeat",
                "addressModeV": "mirror-repeat",
                "magFilter": "linear",
                "minFilter": "linear",
                "mipmapFilter": "linear",
            };

            if (this.uniforms[0].getValue())
            {
                if (!this.uniforms[0].getValue().getSampler)
                {
                    this._log.error("uniform texture does not have function getSampler... not a WebGpu Texture?");
                }
                else
                {
                    smplDesc = this.uniforms[0].getValue().getSampler();
                    const sampler = this.#cgp.device.createSampler(smplDesc);
                    if (sampler)o.resource = sampler;
                }
            }
        }
        else
        {

            this._createCgpuBuffer(inst);
            o.resource = {
                "buffer": this.cGpuBuffers[inst].gpuBuffer,
                "minBindingSize": this.getSizeBytes(),
                "hasDynamicOffset": 0
            };
        }

        this.isValid = true;

        // if (o.hasOwnProperty("resource"))
        // {
        //     console.log("rrrrrr ", o.label, o.resource);
        // }

        return o;
    }

    /**
     * @param {any} inst
     */
    _createCgpuBuffer(inst)
    {
        let buffCfg = {
            "label": this.#name,
            "size": this.getSizeBytes(),
        };

        if (this.bindingType == "read-write-storage") buffCfg.usage = GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC;
        else if (this.bindingType == "read-only-storage" || this.bindingType == "storage") buffCfg.usage = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
        else if (this.bindingType == "uniform") buffCfg.usage = GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM;
        else this._log.warn("unknown binding type", this.bindingType);

        if (this.cGpuBuffers[inst]) this.cGpuBuffers[inst].dispose();

        // if (this.uniforms.length > 0 && this.uniforms[0].gpuBuffer) this.cGpuBuffers[inst] = this.uniforms[0].gpuBuffer;
        // else
        this.cGpuBuffers[inst] = new CgpGguBuffer(this.#cgp, this.#name + " buff", null, { "buffCfg": buffCfg });
    }

    /**
     * @param {Number} inst
     */
    update(inst)
    {
        if (!this.isActive) return;

        let b = this.bindingInstances[inst];
        if (!b) b = this.getBindingGroupEntry(inst);

        if (this.uniforms.length == 1 && this.uniforms[0].gpuBuffer)
        {
            if (this.uniforms[0].gpuBuffer != this.cGpuBuffers[inst])
            {
                this._log.log("changed?!");
                // this.#shader.setWhyCompile("binding update"); // TODO this should actually just rebuild the bindinggroup i guess ?
            }

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("binding update uni", this.uniforms[0].getName(), { "uni": this.uniforms[0].getInfo(), "data": this.cGpuBuffers[inst].floatArr });
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
        else
        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("binding update uni texture", "texture " + this.uniforms[0].getName(), { "uni": this.uniforms[0].getInfo() });
            if (this.uniforms[0].getValue())
                if (this.uniforms[0].getValue().gpuTexture)
                {
                    this.bindingInstances[inst] = this.getBindingGroupEntry(inst);
                }
                else
                {
                    this._log.log("uni t has no gputexture");
                    b.resource = this.#cgp.getErrorTexture().createView();
                }

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("binding update uni sampler");
            b.resource = this.uniforms[0].getValue();
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
        else
        {
            let info = { "name": this.uniforms.length + " uniforms", "stage ": CgpShader.getStageString(this.stage), "inst": inst, "uniforms": [] };

            // this._log.log("B",this.);
            // update uniform values to buffer
            const s = this.getSizeBytes() / 4;

            // if (!this.cGpuBuffers[inst])
            // this._createCgpuBuffer(inst);
            // this.cGpuBuffers[inst] = new GPUBuffer(this._cgp, "buff", null, { "buffCfg": buffCfg });

            if (!this.cGpuBuffers[inst])
            {
                console.log("no cpubuff? ", this.stage, this.#name);
                return;
            }
            this.cGpuBuffers[inst].setLength(s);

            let off = 0;
            for (let i = 0; i < this.uniforms.length; i++)
            {

                // console.log("o");
                // if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("copy to", this.getStageString() + " " + this.bindingType, { "info": info });

                this.uniforms[i].copyToBuffer(this.cGpuBuffers[inst].floatArr, off); // todo: check if uniform changed?

                if (this.uniforms[i].gpuBufferChanged)
                {
                    console.log("un changed", this.cGpuBuffers[inst].floatArr);
                }
                // if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();

                // console.log(this.cGpuBuffers[inst].floatArr);

                info.uniforms.push(this.uniforms[i].getInfo());

                // if (isNaN(this.cGpuBuffers[inst].floatArr[0]))
                // {
                // this._log.log("s", this.cGpuBuffers[inst].floatArr[0], this.uniforms[i].getName(), this.cGpuBuffers[inst].name, this.uniforms[i]);
                // }

                off += this.uniforms[i].getSizeBytes() / 4;
            }
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("binding update buff", this.getStageString() + " " + this.bindingType, { "info": info });

            // this._log.log("upodate", inst);

            this.cGpuBuffers[inst].updateGpuBuffer();
            // todo: only if changed...
            // cgp.device.queue.writeBuffer(
            //     b.resource.buffer,
            //     0,
            //     this._buffer.buffer,
            //     this._buffer.byteOffset,
            //     this._buffer.byteLength
            // );

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js







/** @typedef CgpShaderOptions
 * @property {Boolean} [compute]
 * @property {String} [entryPoint]
 */

class CgpShader extends CgShader
{

    #computePipeline;
    #lastCompileReason = "first";

    /**
     * @param {CgpContext} _cgp
     * @param {String} _name
     * @param {CgpShaderOptions} options={}
     */
    constructor(_cgp, _name, options = {})
    {
        super();
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];
        this.options = options;
        this.options.compute = this.options.compute || false;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this.gpuShaderModule = null;
        this.frameUsageCounter = 0;
        this.lastFrameUsageCounter = -2;
        this.frameUsageFrame = -1;

        this._bindingIndexCount = 0;
        this._compileCount = 0;

        /** @type {Array<Binding>} */
        this.bindingsFrag = [];

        /** @type {Array<Binding>} */
        this.bindingsVert = [];

        /** @type {Array<Binding>} */
        this.bindingsCompute = [];// this.defaultBindingCompute

        /** @type {Binding} */
        this.defaultBindingCompute = null;

        /** @type {Binding} */
        this.defaultBindingVert = null;

        /** @type {Binding} */
        this.defaultBindingFrag = null;

        if (!this.options.compute)
        {
            this.defaultBindingVert = new Binding(_cgp, "vsUniforms", { "shader": this, "stage": GPUShaderStage.VERTEX, "bindingType": "uniform", "index": this.getNewBindingGroupIndex() });
            this.defaultBindingFrag = new Binding(_cgp, "fsUniforms", { "shader": this, "stage": GPUShaderStage.FRAGMENT, "bindingType": "uniform", "index": this.getNewBindingGroupIndex() });
        }
        else
        {
            this.defaultBindingCompute = new Binding(_cgp, "computeUniforms", { "shader": this, "stage": GPUShaderStage.COMPUTE, "bindingType": "uniform", "index": this.getNewBindingGroupIndex() });
        }

        if (!this.options.compute)
        {
            this.uniModelMatrix = this.addUniformVert("m4", "modelMatrix");
            this.uniViewMatrix = this.addUniformVert("m4", "viewMatrix");
            this.uniProjMatrix = this.addUniformVert("m4", "projMatrix");
            this.uniNormalMatrix = this.addUniformVert("m4", "normalMatrix");
            this.uniModelViewMatrix = this.addUniformVert("m4", "modelViewMatrix");
            this._tempNormalMatrix = mat4.create();
            this._tempModelViewMatrix = mat4.create();
        }

        this._src = "";

        this._cgp.on("deviceChange", () =>
        {

            this.gpuShaderModule = null;
            this.setWhyCompile("device changed");

        });
    }

    reInit()
    {

    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    incFrameUsageCount()
    {
        if (this.frameUsageFrame != this._cgp.frame)
        {
            this.lastFrameUsageCounter = this.frameUsageCounter;
            this.frameUsageCounter = 0;
        }
        else this.frameUsageCounter++;
        this.frameUsageFrame = this._cgp.frame;

        return this.frameUsageCounter;
    }

    getNewBindingGroupIndex()
    {
        return ++this._bindingIndexCount;
    }

    /**
     * @param {String} src
     */
    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
    }

    /**
     * @param {String} vs
     */
    _replaceMods(vs)
    {
        let srcHeadVert = "";
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                        }

                    srcHeadVert += mod.srcHead || "";
                    srcVert += mod.srcBody || "";

                    srcHeadVert += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                }
            }

            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        }

        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        return vs;
    }

    getDefines()
    {
        return this._defines;
    }

    getProcessedSource()
    {
        const defs = {};
        for (let i = 0; i < this._defines.length; i++)
            defs[this._defines[i][0]] = this._defines[i][1] || true;

        let src = "";
        src += preproc(this._src, defs);

        let strDefs = "";
        for (let i = 0; i < this._defines.length; i++)
            strDefs += "// #define " + this._defines[i] + "\n";

        if (this.options.compute)
        {
            let bindingsHeadCompute = "";
            for (let i = 0; i < this.bindingsCompute.length; i++)
            {
                if (!this.bindingsCompute[i]) continue;
                bindingsHeadCompute += "// bindingsCompute " + i + "\n";
                bindingsHeadCompute += this.bindingsCompute[i].getShaderHeaderCode();
            }

            src = bindingsHeadCompute + "\n\n//////////////// \n\n" + src;
        }
        else
        {

            let bindingsHeadVert = "";
            for (let i = 0; i < this.bindingsFrag.length; i++)
                bindingsHeadVert += this.bindingsFrag[i].getShaderHeaderCode();

            let bindingsHeadFrag = "";
            for (let i = 0; i < this.bindingsVert.length; i++)
                bindingsHeadFrag += this.bindingsVert[i].getShaderHeaderCode();

            src = bindingsHeadFrag + "\n\n////////////////\n\n" + bindingsHeadVert + "\n\n////////////////\n\n" + src;

        }

        src = this._replaceMods(src);

        src = strDefs + "\n" + src;

        let srcHead = "//".endl() + "// ";
        if (this.options.compute)srcHead += "Compute ";
        else srcHead += "Render ";

        srcHead += "Shader: " + this._name.endl();
        srcHead += "//".endl().endl();

        return srcHead + src;
    }

    compile()
    {
        this._isValid = true;
        this._cgp.pushErrorScope("cgp_shader " + this._name);

        if (this._cgp.branchProfiler) this._cgp.branchProfiler.push("shadercompile", this._name, { "info": this.getInfo() });

        this.gpuShaderModule = this._cgp.device.createShaderModule({ "code": this.getProcessedSource(), "label": this._name });
        this._cgp.popErrorScope(this.error.bind(this));

        this.#lastCompileReason = this._compileReason;

        // console.log("#lastCompileReason", this.#lastCompileReason);

        this.emitEvent("compiled", this._compileReason);
        this._needsRecompile = false;
        this._compileReason = "none";
        this._compileCount++;
        if (this._cgp.branchProfiler) this._cgp.branchProfiler.pop();
    }

    error(e)
    {
        this._isValid = false;
    }

    bind()
    {

        this.incFrameUsageCount();
        if (!this.options.compute)
        {
            this.uniModelMatrix.setValue(this._cgp.mMatrix);
            this.uniViewMatrix.setValue(this._cgp.vMatrix);
            this.uniProjMatrix.setValue(this._cgp.pMatrix);

            // mat4.invert(this._tempNormalMatrix, this._cgp.mMatrix);
            // mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);
            mat4.mul(this._tempModelViewMatrix, this._cgp.vMatrix, this._cgp.mMatrix);
            this.uniModelViewMatrix.setValue(this._tempModelViewMatrix);

            mat4.copy(this._tempNormalMatrix, this._cgp.mMatrix);
            mat4.invert(this._tempNormalMatrix, this._tempNormalMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

            // cpu billboarding?
            // this._tempModelViewMatrix[0 * 4 + 0] = 1.0;
            // this._tempModelViewMatrix[0 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[0 * 4 + 2] = 0.0;

            // // #ifndef BILLBOARDING_CYLINDRIC
            // this._tempModelViewMatrix[1 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[1 * 4 + 1] = 1.0;
            // this._tempModelViewMatrix[1 * 4 + 2] = 0.0;
            // // #endif

            // this._tempModelViewMatrix[2 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 2] = 1.0;

            this.uniNormalMatrix.setValue(this._tempNormalMatrix);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {CgpUniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CgpUniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";

        this.defaultBindingFrag.addUniform(uni);
        this.needsPipelineUpdate = "add frag uniform";

        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {CgpUniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CgpUniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";

        this.defaultBindingVert.addUniform(uni);
        this.needsPipelineUpdate = "add vert uniform";

        return uni;
    }

    /**
     * @typedef UniformDescriptor
     * @property {String} name
     * @property {Number} shaderType GPUShaderStage.FRAGMENT
     * @property {String} type 4f,f, etc
     * @property {Array} values ports or numbers
    */

    /**
     * @param {UniformDescriptor} o
     */
    addUniformObject(o)
    {
        if (!o.type) this._log.warn("no uni type: ", o.type);
        if (!o.name) this._log.warn("no uni name: ", o.name);

        const uni = new CgpUniform(this, o.type, o.name, o.values[0]);

        if (o.shaderType == GPUShaderStage.COMPUTE)
        {
            this.defaultBindingCompute.addUniform(uni);
            uni.shaderType = "compute";
        }
        else if (o.shaderType == GPUShaderStage.VERTEX)
        {
            this.defaultBindingVert.addUniform(uni);
            uni.shaderType = "vert";
        }
        else if (o.shaderType == GPUShaderStage.FRAGMENT)
        {
            this.defaultBindingFrag.addUniform(uni);
            uni.shaderType = "frag";
        }
        else this._log.warn("unknown shaderType: ", o.shaderType);

        this.needsPipelineUpdate = "add " + o.shaderType + " uniform";
        return uni;
    }

    /**
     * @param {CgpUniform} uni
     */
    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
    }

    /**
     * @param {String} name
     */
    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return this._uniforms[i];
        }
    }

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new CgpShader(this._cgp, this._name + " copy");
        shader.setSource(this._src);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;

        // shader.glPrimitive = this.glPrimitive;
        // shader.offScreenPass = this.offScreenPass;
        // shader._extensions = this._extensions;
        // shader.wireframe = this.wireframe;
        // shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].copy(shader);

        shader.bindingsFrag = [];
        for (let i = 0; i < this.bindingsFrag.length; i++) this.bindingsFrag[i].copy(shader);
        shader.defaultBindingFrag = this.bindingsFrag[0];

        shader.bindingsVert = [];
        for (let i = 0; i < this.bindingsVert.length; i++) this.bindingsVert[i].copy(shader);
        shader.defaultBindingVert = this.bindingsVert[0];

        shader.bindingsCompute = [];
        for (let i = 0; i < this.bindingsCompute.length; i++) this.bindingsCompute[i].copy(shader);
        shader.defaultBindingComp = this.bindingsCompute[0];

        console.log("copyyyyyyyyyy", shader.bindingsVert, this.bindingsVert);

        this.setWhyCompile("copy");
        return shader;
    }

    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }
            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        // this.popTextures();
        // for (let i = 0; i < origShader._textureStackUni.length; i++)
        // {
        //     this._textureStackUni[i] = origShader._textureStackUni[i];
        //     this._textureStackTex[i] = origShader._textureStackTex[i];
        //     this._textureStackType[i] = origShader._textureStackType[i];
        //     this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        // }
    }

    dispose()
    {

    }

    /**
     * @param {number} stage
     */
    static getStageString(stage)
    {
        if (stage == GPUShaderStage.FRAGMENT) return "frag";
        if (stage == GPUShaderStage.VERTEX) return "vertex";
        if (stage == GPUShaderStage.COMPUTE) return "compute";

    }

    getInfo()
    {
        return {
            "class": this.constructor.name,
            "name": this._name,
            "frameUsageCounter": this.lastFrameUsageCounter,
            "lastCompileReason": this.#lastCompileReason,
            "compileCount": this._compileCount,
            "numUniforms": this.uniforms.length,
            "numDefines": this._defines.length,
            "isCompute": this.options.compute
        };
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js




class cgp_texture_Texture extends CgTexture
{
    #log = new Logger("cgp_texture");
    #cgp = null;
    gpuTexture = null;
    gpuTextureDescriptor = null;
    name = "unknown";
    width = 8;
    height = 8;
    textureType = "???";

    samplerDesc = {};

    /**
    * @param {CgpContext} _cgp
    * @param {Object} options={}
    */
    constructor(_cgp, options = {})
    {
        super(options);
        options = options || {};

        this.#cgp = _cgp;
        if (!this.#cgp) throw new Error("no cgp");

        if (options.name) this.name = options.name;
        if (options.height && options.width) this.setSize(options.width, options.height);

        this.#cgp.on("deviceChange", () =>
        {
        });
        this.samplerDesc = {
            "addressModeU": options.wrap || options.addressModeU || "clamp-to-edge",
            "addressModeV": options.wrap || options.addressModeV || "clamp-to-edge",
            "magFilter": options.magFilter || options.filter || "linear",
            "minFilter": options.minFilter || options.filter || "linear",
        };

    }

    /**
     * @param {Number} w
     * @param {Number} h
     */
    setSize(w, h)
    {
        this.width = w;
        this.height = h;
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        const textureType = "rgba8unorm";

        this.#cgp.pushErrorScope("inittexture", { "logger": this.#log });

        this.gpuTextureDescriptor = {

            "size": { "width": img.width, "height": img.height },
            "format": textureType,
            // "sampleCount": 4,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        };

        this.gpuTexture = this.#cgp.device.createTexture(this.gpuTextureDescriptor);
        this.#cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": this.gpuTexture }, this.gpuTextureDescriptor.size);

        this.#cgp.popErrorScope();

        return this.gpuTexture;
    }

    dispose()
    {
        console.log("todo dispose");
    }

    getInfo()
    {
        const obj = {};

        obj.name = this.name || "???";
        obj.size = this.width + " x " + this.height;

        obj.textureType = this.textureType;

        return obj;
    }

    createView()
    {
        if (!this.gpuTexture)
        {
            console.log("no gputexture...");
            return null;
        }
        return this.gpuTexture.createView();
    }

    getSampler()
    {
        // "clamp-to-edge"
        // "repeat"
        // "mirror-repeat"

        return this.samplerDesc;
    }

    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        if (!w || !h) this.#log.error("texture size is 0");
        this.width = w;
        this.height = h;
        this.gpuTexture = this.#cgp.device.createTexture(
            {
                "size": [w, h],
                "format": "rgba8unorm",
                "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });

        this.#cgp.device.queue.writeTexture(
            { "texture": this.gpuTexture },
            data,
            { "bytesPerRow": w * 4 },
            { "width": w, "height": h });
    }

    setWrap(v)
    {
        this.samplerDesc.addressModeU = this.samplerDesc.addressModeV = v;
    }

    setFilter(v)
    {
        this.samplerDesc.minFilter = this.samplerDesc.magFilter = v;
    }
}

/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        const texture = new cgp_texture_Texture(cgp, { "name": url });

        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            }).catch((err) =>
            {
                if (onFinished)onFinished(cgp.getErrorTexture());
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js
/// <reference types="@webgpu/types" />





class Pipeline
{
    static DEPTH_COMPARE_FUNCS_STRINGS = ["never", "less", "equal", "lessequal", "greater", "notequal", "greaterequal", "always"];

    static TYPE_RENDER = 0;
    static TYPE_COMPUTE = 1;

    #log = new Logger("pipeline");
    #name = "";

    /** @type {CgpContext} */
    #cgp = null;
    #isValid = true;

    /** @type {string} */
    presentationFormat = null;

    /** @type {GPURenderPipelineDescriptor|GPURenderPipelineDescriptor} */
    #pipeCfg = null;

    /** @type {GPURenderPipeline|GPUComputePipeline} */
    #renderPipeline = null;

    /** @type {GPUComputePipeline} */
    #computePipeline = null;

    /** @type {GPUBindGroupLayout} */
    bindGroupLayout = null;

    /** @type {GPUBindGroup} */
    #bindGroup = null;

    /** @type {GPURenderPassEncoder|GPUComputePassEncoder} */
    #passEncoder;

    #shaderListeners = [];
    #old = {};
    #errorCount = 0;
    #type = Pipeline.TYPE_RENDER;
    lastRebuildReason = "first";
    rebuildCount = 0;
    profile = false;
    #rebuildNumBindingGroups = false;

    profiler;

    /**
     * Description
     * @param {CgpContext} _cgp
     * @param {String} name
     * @param {Number} type
     */
    constructor(_cgp, name, type = 0)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + name);
        this.#name = name;
        this.#cgp = _cgp;
        this.#type = type;

        this.#cgp.on("deviceChange", () =>
        {
            this.#renderPipeline = null;
        });
    }

    get isValid() { return this.#isValid; }

    /**
     * @param {String} name
     */
    setName(name)
    {
        this.#name = name;
    }

    /**
     * @param {CgpShader} oldShader
     * @param {CgpShader} newShader
     */
    setShaderListener(oldShader, newShader)
    {
        for (let i = 0; i < this.#shaderListeners.length; i++) oldShader.off(this.#shaderListeners[i]);

        this.#shaderListeners.push(
            newShader.on("compiled", (reason) =>
            {
                // this._log.log("pipe update shader compileeeeeee");
                // this.needsRebuildReason = "shader changed";
                this.needsRebuildReason = "shader compiled: " + reason || 0;
            }));
    }

    getInfo()
    {
        const info = {
            "class": this.constructor.name,
            "name": this.#name,
            "rebuildReason": this.lastRebuildReason,
            "rebuildCount": this.rebuildCount,
            // "numBindgroups": this.#bindingInstances.length,
            "bindingGroupLayoutEntries": this.bindingGroupLayoutEntries,
        };

        if (this.#type == Pipeline.TYPE_COMPUTE)info.type = "COMPUTE";
        if (this.#type == Pipeline.TYPE_RENDER)info.type = "RENDER";

        return info;
    }

    pushDebug()
    {
        this.#cgp.currentPipeDebug =
        {
            "cfg": this.#pipeCfg,
            "bindingGroupLayoutEntries": this.bindingGroupLayoutEntries
        };
    }

    /**
     * @param {CgpShader} shader
     * @param {CgpMesh} mesh
     */
    setPipeline(shader, mesh = null,)
    {
        if (this.#type == Pipeline.TYPE_RENDER)
        {
            if (!mesh)
            {
                this.#log.log("pipeline unknown mesh");
                return;
            }
        }
        if (!shader)
        {
            this.#log.log("pipeline unknown shader");
            return;
        }

        if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("setPipeline", this.#name, { "info": this.getInfo(), "shader": shader.getInfo() });

        let needsRebuildReason = "";
        if (!this.#renderPipeline) needsRebuildReason = "no renderpipeline";
        if (!this.#pipeCfg)needsRebuildReason = "no pipecfg";
        if (this.#old.mesh != mesh)needsRebuildReason = "no mesh";
        if (this.#old.shader != shader)
        {
            this.setShaderListener(this.#old.shader, shader);
            console.log("shader changed?!@");
            needsRebuildReason = "shader changed";
        }

        if (shader.needsPipelineUpdate)
        {
            needsRebuildReason = "shader needs update: " + shader.needsPipelineUpdate;
            shader.needsPipelineUpdate = "";
        }

        if (this.#type == Pipeline.TYPE_RENDER && mesh.needsPipelineUpdate)
        {
            needsRebuildReason = "mesh needs update";
            mesh.needsPipelineUpdate = false;
        }

        if (this.#rebuildNumBindingGroups)
        {
            needsRebuildReason = "num bindgroups wrong...";
        }

        if (this.#pipeCfg)
        {
            if (this.#type == Pipeline.TYPE_RENDER)
            {
                this.#pipeCfg =/** @type {GPURenderPipelineDescriptor} */ (this.#pipeCfg || {});
                if (this.#pipeCfg.depthStencil.depthWriteEnabled != this.#cgp.stateDepthWrite())
                {
                    needsRebuildReason = "depth changed";
                    this.#pipeCfg.depthStencil.depthWriteEnabled = !!this.#cgp.stateDepthWrite();
                }

                if (this.#pipeCfg.fragment.targets[0].blend != this.#cgp.stateBlend())
                {
                    needsRebuildReason = "blend changed";
                    this.#pipeCfg.fragment.targets[0].blend = this.#cgp.stateBlend();
                }

                if (this.#cgp.stateDepthTest() === false)
                {
                    if (this.#pipeCfg.depthStencil.depthCompare != "never")
                    {
                        this.#pipeCfg.depthStencil.depthCompare = "never";
                        needsRebuildReason = "depth compare changed";
                    }
                }
                else
                if (this.#pipeCfg.depthStencil.depthCompare != this.#cgp.stateDepthFunc())
                {
                    needsRebuildReason = "depth state ";
                    this.#pipeCfg.depthStencil.depthCompare = this.#cgp.stateDepthFunc();
                }

                // if (this.#pipeCfg.primitive.cullMode != this.#cgp.stateCullFaceFacing())
                // {
                //     needsRebuildReason = "cullmode change";
                //     // this.#pipeCfg.primitive.cullMode = this.#cgp.stateCullFaceFacing();
                // console.log(this.#cgp.stateCullFaceFacing());
                // }

            }

        }

        this.pushDebug();

        if (needsRebuildReason != "")
        {
            this.lastRebuildReason = needsRebuildReason;
            this.rebuildCount++;
            // console.log("needsRebuildReason");
            console.log("rebuild pipe", needsRebuildReason);
            this.#cgp.pushErrorScope("createPipeline", { "logger": this.#log });

            // this.#bindingInstances = [];

            this.#rebuildNumBindingGroups = false;

            this.#pipeCfg = this.getPipelineObject(shader);
            console.log(this.#pipeCfg);

            this.#old.device = this.#cgp.device;
            this.#old.shader = shader;
            this.#old.mesh = mesh;
            this.#isValid = true;

            try
            {

                if (this.#type == Pipeline.TYPE_RENDER) this.#renderPipeline = this.#cgp.device.createRenderPipeline(this.#pipeCfg);
                else if (this.#type == Pipeline.TYPE_COMPUTE) this.#renderPipeline = this.#cgp.device.createComputePipeline(this.#pipeCfg);

                // if (this.#bindGroups[shader.bindingCounter])
                // {
                //     console.log("bindgroupppppppp", this.#bindGroups[shader.bindingCounter]);
                // }

                // this.#computePipeline = this._cgp.device.createComputePipeline({
                //     "layout": "auto",
                //     "compute": {
                //         "module": this.gpuShaderModule,
                //         "entryPoint": this.options.entryPoint || "main"
                //     }
                // });

            }
            catch (e)
            {

                console.error("pipe error catch...", e.message, this.#pipeCfg);
                this.#isValid = false;
            }

            this.#cgp.popErrorScope(
                () =>
                {
                    console.log("this.#pipeCfg", this.#pipeCfg);
                });
        }

        if (this.#renderPipeline && this.#isValid)
        {
            this.#cgp.pushErrorScope("setpipeline", { "logger": this.#log });

            let passEnc = this.#cgp.passEncoder;

            if (this.#type != Pipeline.TYPE_RENDER) passEnc = this.#passEncoder;

            // this.#passEncoder.setPipeline(this.#renderPipeline);
            // this.#cgp.passEncoder.setPipeline(this.#renderPipeline);
            // else

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("pipe updateUniforms", this.#name, { "shader": shader.getInfo() });

            // console.log("shader.frameUsageCounter", shader.frameUsageCounter);

            if (!this.#bindGroup)
            {
                console.log("create bindgroups....");
                const bindingGroupEntries = [];

                if (this.#type == Pipeline.TYPE_RENDER && shader.bindingsVert)
                    for (let i = 0; i < shader.bindingsVert.length; i++)
                    {
                        if (shader.bindingsVert[i] && shader.bindingsVert[i].getSizeBytes() > 0)
                        {
                            const entry = shader.bindingsVert[i].getBindingGroupEntry(shader.frameUsageCounter);
                            if (entry)bindingGroupEntries.push(entry);
                        }
                        else this.#log.log("shader defaultBindingVert size 0");
                    }

                if (this.#type == Pipeline.TYPE_RENDER && shader.bindingsFrag)
                    for (let i = 0; i < shader.bindingsFrag.length; i++)
                    {
                        if (shader.bindingsFrag[i] && shader.bindingsFrag[i].getSizeBytes() > 0)
                        {
                            const entry = shader.bindingsFrag[i].getBindingGroupEntry(shader.frameUsageCounter);
                            if (entry)bindingGroupEntries.push(entry);
                        }
                        else this.#log.log("shader defaultBindingFrag size 0");
                    }

                if (this.#type == Pipeline.TYPE_COMPUTE && shader.bindingsCompute)
                    for (let i = 0; i < shader.bindingsCompute.length; i++)
                    {
                        if (shader.bindingsCompute[i] && shader.bindingsCompute[i].getSizeBytes() > 0)
                        {
                            const entry = shader.bindingsCompute[i].getBindingGroupEntry(shader.frameUsageCounter);
                            if (entry)bindingGroupEntries.push(entry);
                        }
                        else this.#log.log("shader defaultBindingCompute size 0");
                    }

                /** @type {GPUBindGroupDescriptor} */
                const bg = {
                    "label": "pipe bg " + this.#name,
                    "layout": this.bindGroupLayout,
                    "entries": bindingGroupEntries
                };

                if (bindingGroupEntries.length != this.bindingGroupLayoutEntries.length)
                {
                    this.#log.error("bindingGroupEntries.length!= this.bindingGroupLayoutEntries.length", bindingGroupEntries.length, this.bindingGroupLayoutEntries.length);
                    this.#rebuildNumBindingGroups = true;
                    this.#isValid = false;
                    return;
                }

                try
                {
                    this.#bindGroup = this.#cgp.device.createBindGroup(bg);

                }
                catch (e)
                {
                    this.#errorCount++;
                    if (this.#errorCount == 3) console.log("stopping error logging for cgp pipeline");
                    if (this.#errorCount >= 3) return;

                    console.log(bg);
                    console.error(e);
                    console.log("error mesh:", this.#name);
                }

            }

            /// ///////////////////

            // console.log("shader.bindingCounter", shader.bindingCounter, this.#bindGroups.length);

            // for (let i = 0; i < this.#bindingInstances.length; i++)
            // {
            //     // console.log("stBG", i, this.#bindGroups[i]);
            //     if (!this.#bindingInstances[i])
            //     {
            //         console.log("bindgroup " + i + " is undefined?!");
            //         // return;
            //     }
            //     else
            //         this.#cgp.passEncoder.setBindGroup(i, this.#bindingInstances[i]);
            // }

            this.#cgp.passEncoder.setBindGroup(0, this.#bindGroup);

            if (!this.#bindGroup)
            {
                console.warn("No effing bindgroups...");
            }
            else
            {
                passEnc.setPipeline(this.#renderPipeline);

                this._bindUniforms(shader, shader.frameUsageCounter);
            }

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();

            this.#cgp.popErrorScope();
        }
        if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();

    }

    /**
     * @param {CgpShader} shader
     * @returns {GPUPipelineDescriptorBase|GPURenderPipelineDescriptor|GPUComputePipelineDescriptor}
     */
    getPipelineObject(shader)
    {

        /** @type {Array<GPUBindGroupLayoutEntry>} */
        this.bindingGroupLayoutEntries = [];

        if (!shader.bindingsVert)
        {
            console.error("shader has no bindingsvert...");
            return;
        }

        if (shader.bindingsVert)
            for (let i = 0; i < shader.bindingsVert.length; i++)
            {
                // if (shader.bindingsVert[i] && shader.bindingsVert[i].getSizeBytes() > 0)
                // {
                const entry = shader.bindingsVert[i].getBindingGroupLayoutEntry();
                if (entry) this.bindingGroupLayoutEntries.push(entry);
                // }
                // else this.#log.log("shader defaultBindingVert size 0");
            }

        if (shader.bindingsFrag)
            for (let i = 0; i < shader.bindingsFrag.length; i++)
            {
                // if (shader.bindingsFrag[i] && shader.bindingsFrag[i].getSizeBytes() > 0)
                // {
                const entry = shader.bindingsFrag[i].getBindingGroupLayoutEntry();
                if (entry) this.bindingGroupLayoutEntries.push(entry);
                // }
                // else this.#log.log("shader defaultBindingFrag size 0");
            }

        if (shader.bindingsCompute)
            for (let i = 0; i < shader.bindingsCompute.length; i++)
            {
                console.log("bindingsCompute", i, shader.bindingsCompute[i]);

                // if (shader.bindingsCompute[i] && shader.bindingsCompute[i].getSizeBytes() > 0)
                // {
                const entry = shader.bindingsCompute[i].getBindingGroupLayoutEntry();
                if (entry) this.bindingGroupLayoutEntries.push(entry);
                // }
                // else this.#log.log("shader defaultBindingCompute size 0");
            }
        // //////////

        /** @type {GPUBindGroupLayout} */
        this.bindGroupLayout = this.#cgp.device.createBindGroupLayout(
            {
                "label": "bindgrouplayout " + this.#name,
                "entries": this.bindingGroupLayoutEntries,
            });

        /** @type {GPUPipelineLayout} */
        const pipelineLayout = this.#cgp.device.createPipelineLayout({
            "label": "pipe layout " + this.#name,
            "bindGroupLayouts": [this.bindGroupLayout]
        });

        let buffers = [
            // position
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                ],
            },
            // texcoords
            {
                "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                ],
            },
            // normals
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                ],
            }];

        /** @type {GPUPipelineDescriptorBase} */
        let pipeCfg = {
            // "layout": "auto",
            "label": this.#name,
            "layout": pipelineLayout,

        };

        if (this.#type == Pipeline.TYPE_RENDER)
        {
            const renderCfg = /** @type {GPURenderPipelineDescriptor} */ (pipeCfg || {});
            renderCfg.primitive = {
                "topology": "triangle-list",
                "cullMode": "none", // this.#cgp.stateCullFaceFacing(), // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            };
            renderCfg.depthStencil = {
                "depthWriteEnabled": this.#cgp.stateDepthWrite(),
                "depthCompare": this.#cgp.stateDepthFunc(),
                "format": "depth24plus",
            };

            renderCfg.vertex =
            {
                "module": shader.gpuShaderModule,
                "entryPoint": "myVSMain",
                "buffers": buffers
            };

            renderCfg.fragment =
            {
                "module": shader.gpuShaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    {
                        "format": this.#cgp.presentationFormat,
                        "blend": this.#cgp.stateBlend()
                    },
                ],
            };
        }
        else if (this.#type == Pipeline.TYPE_COMPUTE)
        {
            const computeCfg = /** @type {GPUComputePipelineDescriptor} */ (pipeCfg || {});

            computeCfg.compute =
            {
                "module": shader.gpuShaderModule,
                "entryPoint": shader.options.entryPoint || "main"
            };
            console.log(computeCfg.compute);
        }

        console.log("bindgrouplayutEntries:", this.bindingGroupLayoutEntries.length);
        console.log("compute:", shader.bindingsCompute.length);
        console.log("frag:", shader.bindingsFrag.length);
        console.log("vert:", shader.bindingsVert.length);

        return pipeCfg;
    }

    getBindingsInfo(bings)
    {
        const arr = [];
        for (let i = 0; i < bings.length; i++)
        {
            arr.push(bings[i].getInfo());
        }
        return arr;
    }

    /**
     * @param {CgpShader} shader
     * @param {number} inst
     */
    _bindUniforms(shader, inst)
    {
        shader.bind();

        if (this.#type == Pipeline.TYPE_RENDER)
        {
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("bind uniforms vert", { "class": this.constructor.name, "name": this.#name, "instance": inst, "bindings": this.getBindingsInfo(shader.bindingsVert) });
            for (let i = 0; i < shader.bindingsVert.length; i++) shader.bindingsVert[i].update(inst);
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();

            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("bind uniforms frag", { "class": this.constructor.name, "name": this.#name, "instance": inst, "bindings": this.getBindingsInfo(shader.bindingsFrag) });
            for (let i = 0; i < shader.bindingsFrag.length; i++) shader.bindingsFrag[i].update(inst);
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
        if (this.#type == Pipeline.TYPE_COMPUTE)
        {
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.push("bind uniforms compute", { "class": this.constructor.name, "name": this.#name, "instance": inst, "bindings": this.getBindingsInfo(shader.bindingsFrag) });
            for (let i = 0; i < shader.bindingsCompute.length; i++) shader.bindingsCompute[i].update(inst);
            if (this.#cgp.branchProfiler) this.#cgp.branchProfiler.pop();
        }
    }

    /**
     * @param {CgpShader} shader
     * @param {Array} workGroups
     */
    compute(shader, workGroups = [8, 8])
    {

        if (this.#type != Pipeline.TYPE_COMPUTE)
        {
            this.#log.warn("no compute pipe");
            return;
        }

        if (!shader.gpuShaderModule) shader.compile();

        /** @type {GPUCommandEncoder} */
        const commandEncoder = this.#cgp.device.createCommandEncoder();

        this.#passEncoder = commandEncoder.beginComputePass({ "label": "computepass " + shader.getName() });

        if (!this.#renderPipeline) this.setPipeline(shader);
        if (!this.#renderPipeline)
        {
            this.#log.warn("no render pipe");
            return;
        }

        this.#passEncoder.setPipeline(this.#renderPipeline);

        // TODO BINDGROUPCOUNTER?!
        this.#passEncoder.setBindGroup(0, this.#bindGroup);

        if (workGroups.length == 1) this.#passEncoder.dispatchWorkgroups(workGroups[0] || 8);
        if (workGroups.length == 2) this.#passEncoder.dispatchWorkgroups(workGroups[0] || 8, workGroups[1] || 8);
        if (workGroups.length == 3) this.#passEncoder.dispatchWorkgroups(workGroups[0] || 8, workGroups[1] || 8, workGroups[2] || 8);

        this.#passEncoder.end();

        const gpuCommands = commandEncoder.finish();
        this.#cgp.device.queue.submit([gpuCommands]);
        this.pushDebug();
        // const entry = shader.bindingsVert[i].getBindingGroupEntry(shader.bindingCounter);
        // this._passEncoder = commandEncoder.beginComputePass();
        // this._passEncoder.setPipeline(computePipeline);
        // this._passEncoder.setBindGroup(0, bindGroup);
        // outBuff.setRef(gpuBuff);

    }

    dispose()
    {
        // todo...
    }

}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js






class CgpMesh extends CgMesh
{
    #log = new Logger("cgl_mesh");
    needsPipelineUpdate = false;

    /**
     * @param {any} _cgp
     * @param {any} __geom
     */
    constructor(_cgp, __geom)
    {
        super();

        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;
        this.instances = 1;

        this._pipe = new Pipeline(this._cgp, "pipe mesh " + __geom.name, Pipeline.TYPE_RENDER);
        this._numNonIndexed = 0;
        this._positionBuffer = null;

        this._attributes = [];

        if (__geom) this.setGeom(__geom);
    }

    /**
     * @param {GPUDevice} device
     * @param {any} data
     * @param {any} usage
     */
    _createBuffer(device, data, usage)
    {
        let bo = {
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        };
        const buffer = device.createBuffer(bo);
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     */
    setGeom(geom)
    {
        this.needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);

        this.setAttribute("normals", geom.vertexNormals, 3);
    }

    _disposeAttributes()
    {
        this.needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++) this._attributes[i].buffer.destroy();
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options = {})
    {
        if (!array)
        {
            this.#log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        let instanced = false;
        if (options.instanced) instanced = options.instanced;

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            "instanced": instanced,
        };
        this._attributes.push(attr);

        return attr;
    }

    /**
     * @param {CgpShader} shader
     */
    render(shader)
    {
        if (!this._positionBuffer) return;
        if (this.instances <= 0) return;

        if (this._cgp.branchProfiler) this._cgp.branchProfiler.push("mesh.render()", "geom " + this._geom.name);

        shader = shader || this._cgp.getShader();
        if (shader)shader.bind();

        if (!shader || !shader.isValid)
        {
            // this.status = "shader invalid";
            return;
        }

        this._pipe.setName("mesh.render " + this._geom.name + " " + shader.getName());
        this._pipe.setPipeline(shader, this);

        if (this._pipe.isValid)
        {
            if (this._cgp.branchProfiler) this._cgp.branchProfiler.push("mesh.render().draw", "geom " + this._geom.name, {
                "geom ": this._geom.getInfo(),
                "shader ": shader.getInfo(),
                "numAttributes": this._attributes.length
            });

            this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
            for (let i = 0; i < this._attributes.length; i++)
                this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);

            this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

            if (this._numNonIndexed)
                this._cgp.passEncoder.draw(this._numIndices, this.instances);
            else
                this._cgp.passEncoder.drawIndexed(this._numIndices, this.instances);

            if (this._cgp.branchProfiler) this._cgp.branchProfiler.pop();
        }
        else
        {
            if (this._cgp.branchProfiler)
            {
                this._cgp.branchProfiler.push("mesh invalid pipeline ", "geom " + this._geom.name);
                this._cgp.branchProfiler.pop();
            }
        }

        if (this._cgp.branchProfiler) this._cgp.branchProfiler.pop();

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js











// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/

/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
class CgpContext extends CgContext
{

    branchProfiler = null;

    /**
     * @param {Patch} _patch
     */
    constructor(_patch)
    {
        super(_patch);
        this.patch = _patch;

        this.lastErrorMsg = "";

        this._log = new Logger("WebGpuContext");
        this.gApi = CgContext.API_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;
        this.frame = 0;
        this.catchErrors = true;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];
        this._stackErrorScope = [];
        this._stackBlend = [];
        this._stackErrorScopeLogs = [];

        this.currentPipeDebug = null;
        this.canvasAttachments = [];

        /** @type {GPUDevice} */
        this.device = null;

        /** @type {GPURenderPassEncoder} */
        this.passEncoder = null;

        this._defaultBlend = {
            "color": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
            "alpha": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
        };

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }

    get supported()
    {
        return !!navigator.gpu;

    }

    /// ////////////////////

    /**
     * Description
     * @param {any} cgp
     * @param {any} identTranslate
     * @param {any} identTranslateView
     * @returns {any}
     */
    renderStart(cgp, identTranslate, identTranslateView)
    {

        this.frame++;
        this.pushErrorScope("cgpstate internal", { "scope": "internal" });
        this.pushErrorScope("cgpstate out-of-memory", { "scope": "out-of-memory" });

        if (!this._simpleShader)
        {
            this._simpleShader = new CgpShader(this, "simple default shader");
            this._simpleShader.setSource(cgp_shader_default);

            this._simpleShader.addUniformFrag("4f", "color", [1, 1, 0, 1]);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");

        this.pushBlend(this._defaultBlend);

        this._execOneTimeCallbacks();

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.popErrorScope();
        this.popErrorScope();

        if (this._stackErrorScope.length > 0)console.log("error scope stack length invalid...");
        this._stackErrorScope.length = 0;

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }

    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }

    /**
     * @param {Geometry} geom
     * @param {any} glPrimitive
     * @returns {CgpMesh}
     */
    createMesh(geom, glPrimitive)
    {
        return new CgpMesh(this, geom);
    }

    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */
    popViewPort()
    {
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
            this._viewPort = [0, 0, this.canvasWidth, this.canvasHeight];
        else
            this.setViewPort(this._viewPortStack[this._viewPort.length - 1]);
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push([x, y, w, h]);
        this._viewPort = [x, y, w, h];
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    /**
     * @param {GPUDevice} device
     */
    setDevice(device)
    {
        this.device = device;

        if (this._emptyTexture) this._emptyTexture = this._emptyTexture.dispose();
        if (this._defaultTexture) this._defaultTexture = this._defaultTexture.dispose();
        if (this._errorTexture) this._errorTexture = this._errorTexture.dispose();

        this.emitEvent("deviceChange");
    }

    /** @typedef ErrorScoprOptions
     * @property {string} scope
     */

    /**
     * @param {String} name
     * @param {ErrorScoprOptions} options
     */
    pushErrorScope(name, options = { "scope": "validation" })
    {
        if (this.catchErrors)
        {
            this._stackErrorScope.push(name);
            this._stackErrorScopeLogs.push(options.logger || null);
            this.device.pushErrorScope(options.scope || "validation");
        }
    }

    /**
     * @param {Function} [cb]
     */
    popErrorScope(cb)
    {
        if (this.catchErrors)
        {
            const name = this._stackErrorScope.pop();
            const logger = this._stackErrorScopeLogs.pop();
            this.device.popErrorScope().then((error) =>
            {
                if (error)
                {
                    if (this.lastErrorMsg == error.message)
                    {
                        // this._log.warn("last error once more...");
                    }
                    else
                    {
                        (logger || this._log).error(error.constructor.name, "in ERROR SCOPE:", name);
                        (logger || this._log).error(error.message);
                    }
                    this.lastErrorMsg = error.message;

                    if (cb)cb(error);
                }
            });
        }
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }

    // --------------------------------------
    // state depthfunc

    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {boolean}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }

    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
     * pop face culling enabled state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popCullFace()
    {
        this._stackCullFace.pop();
    }

    // --------------------------------------
    // state CullFace Facing

    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */
    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }

    pushBlend(b)
    {
        this._stackBlend.push(b);
    }

    popBlend()
    {
        this._stackBlend.pop();
    }

    stateBlend()
    {
        return this._stackBlend[this._stackBlend.length - 1];
    }

    getEmptyTexture()
    {
        if (this._emptyTexture) return this._emptyTexture;
        const size = 8;
        this._emptyTexture = new cgp_texture_Texture(this, {});
        this._emptyTexture.initFromData(CgTexture.getDefaultTextureData("empty", size), size, size);
        return this._emptyTexture;
    }

    getErrorTexture()
    {
        // if (this._errorTexture) return this._errorTexture;
        const size = 256;
        this._errorTexture = new cgp_texture_Texture(this, {});
        this._errorTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 }), size, size);
        return this._errorTexture;
    }

    getDefaultTexture()
    {
        if (this._defaultTexture) return this._defaultTexture;
        const size = 256;
        this._defaultTexture = new cgp_texture_Texture(this, {});
        this._defaultTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size), size, size);
        return this._defaultTexture;
    }

    /**
     * @param {function} cb
     * @param {boolean} doScreenshotClearAlpha
     * @param {string} mimeType
     * @param {number} quality
     */
    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }

    }

}

;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js




/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{

    /**
     * @param {Geometry} geom
     */
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-0, -0, -0];
        this._min = [0, 0, 0];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }

    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }

    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.isNumeric(x) || !CABLES.isNumeric(y) || !CABLES.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;

        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js




/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */

class Geometry
{

    /**
     * @param {String} name
     */
    constructor(name)
    {
        this.name = name || "unknown";
        this._log = new Logger("cgl_geometry");

        this.faceVertCount = 3;
        this.glPrimitive = null;
        this._attributes = {};

        /** @type {Array|Float32Array} */
        this._vertices = [];
        this.verticesIndices = [];

        this.isGeometry = true;

        this.morphTargets = [];
    }

    get vertices()
    {
        return this._vertices;
    }

    set vertices(v)
    {
        this.setVertices(v);
    }

    get texCoords()
    {
        const att = this.getAttribute("texCoords");
        if (!att) return [];
        return att.data;
    }

    set texCoords(v)
    {
        this.setAttribute("texCoords", v, 2);
    }

    get vertexNormals()
    {
        const att = this.getAttribute("vertexNormals");
        if (!att) return [];
        return att.data;
    }

    set vertexNormals(v)
    {
        this.setAttribute("vertexNormals", v, 3);
    }

    get tangents()
    {
        const att = this.getAttribute("tangents");
        if (!att) return [];
        return att.data;
    }

    set tangents(v)
    {
        this.setAttribute("tangents", v, 3);
    }

    get biTangents()
    {
        const att = this.getAttribute("biTangents");
        if (!att) return [];
        return att.data;
    }

    set biTangents(v)
    {
        this.setAttribute("biTangents", v, 3);
    }

    get vertexColors()
    {
        const att = this.getAttribute("vertexColors");
        if (!att) return [];
        return att.data;
    }

    set vertexColors(v)
    {
        this.setAttribute("vertexColors", v, 4);
    }

    /**
     * @function clear
     * @memberof Geometry
     * @instance
     * @description clear all buffers/set them to length 0
     */
    clear()
    {
        this._vertices = new Float32Array([]);
        this.verticesIndices = [];
        this.texCoords = new Float32Array([]);
        this.vertexNormals = new Float32Array([]);
        this.tangents = [];
        this.biTangents = [];
        this._attributes = {};
    }

    /**
     * @function getAttributes
     @memberof Geometry
    * @instance
    * @return {Array<Object>} returns array of attribute objects
    */
    getAttributes()
    {
        return this._attributes;
    }

    /**
     * @function getAttribute
     * @memberof Geometry
     * @instance
     * @param {String} name
     * @return {Object}
     */
    getAttribute(name)
    {
        for (const i in this._attributes)
        {
            if (this._attributes[i].name == name) return this._attributes[i];
        }
        return null;
    }

    /**
     * @function setAttribute
     * @description create an attribute
     * @memberof Geometry
     * @instance
     * @param {String} name
     * @param {Array} arr
     * @param {Number} itemSize
     */
    setAttribute(name, arr, itemSize)
    {
        let attrType = "";
        if (!itemSize || itemSize > 4)
        {
            this._log.warn("itemsize wrong?", itemSize, name);
            this._log.stack("itemsize");

            itemSize = 3;
        }

        if (itemSize == 1) attrType = "float";
        else if (itemSize == 2) attrType = "vec2";
        else if (itemSize == 3) attrType = "vec3";
        else if (itemSize == 4) attrType = "vec4";

        const attr = {
            "name": name,
            "data": arr,
            "itemSize": itemSize,
            "type": attrType,
        };

        this._attributes[name] = attr;
    }

    copyAttribute(name, newgeom)
    {
        const attr = this.getAttribute(name);
        newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
    }

    /**
     * @function setVertices
     * @memberof Geometry
     * @instance
     * @description set vertices
     * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
     */
    setVertices(arr)
    {
        if (arr instanceof Float32Array) this._vertices = arr;
        else this._vertices = new Float32Array(arr);
    }

    /**
     * @function setTexCoords
     * @memberof Geometry
     * @instance
     * @description set texcoords
     * @param {Array|Float32Array} arr [u,v,u,v,...]
     */
    setTexCoords(arr)
    {
        if (arr instanceof Float32Array) this.texCoords = arr;
        else this.texCoords = new Float32Array(arr);
    }

    // deprecated
    calcNormals(smooth)
    {
        const options = { "smooth": smooth };
        this.calculateNormals(options);
    }

    /**
     * @param x
     * @param y
     * @param z
     */
    flipNormals(x, y, z)
    {
        let vec = vec3_create();

        if (x == undefined)x = 1;
        if (y == undefined)y = 1;
        if (z == undefined)z = 1;

        for (let i = 0; i < this.vertexNormals.length; i += 3)
        {
            vec3_set(vec,
                this.vertexNormals[i + 0],
                this.vertexNormals[i + 1],
                this.vertexNormals[i + 2]);

            vec[0] *= -x;
            vec[1] *= -y;
            vec[2] *= -z;

            normalize(vec, vec);

            this.vertexNormals[i + 0] = vec[0];
            this.vertexNormals[i + 1] = vec[1];
            this.vertexNormals[i + 2] = vec[2];
        }
    }

    getNumTriangles()
    {
        if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
        return this.vertices.length / 3;
    }

    /**
     * @function flipVertDir
     * @description flip order of vertices in geom faces
     */
    flipVertDir()
    {
        const newInd = [];
        newInd.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            newInd[i] = this.verticesIndices[i + 2];
            newInd[i + 1] = this.verticesIndices[i + 1];
            newInd[i + 2] = this.verticesIndices[i];
        }
        this.verticesIndices = newInd;
    }

    /**
     * @param {Array} verts
     */
    setPointVertices(verts)
    {
        if (verts.length % 3 !== 0)
        {
            this._log.error("SetPointVertices: Array must be multiple of three.");
            return;
        }

        if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
        else this.vertices = verts;

        if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

        // this.texCoords.length=verts.length/3*2;
        this.verticesIndices.length = verts.length / 3;
        // this.verticesIndices=[];

        for (let i = 0; i < verts.length / 3; i++)
        {
            this.verticesIndices[i] = i;
            this.texCoords[i * 2] = 0;
            this.texCoords[i * 2 + 1] = 0;
        }
    }

    /**
     * merge a different geometry into the this geometry
     * @function merge
     * @param {Geometry} geom
     * @memberof Geometry
     * @instance
     */
    merge(geom)
    {
        if (!geom) return;

        if (this.isIndexed() != geom.isIndexed())
        {
            if (this.isIndexed())
            {
                this.unIndex(false, true);
            }
            if (geom.isIndexed())
            {
                const g = geom.copy();
                g.unIndex(false, true);
                geom = g;
            }
        }

        const oldIndizesLength = this.verticesIndices.length;
        const vertLength = this._vertices.length / 3;

        this.verticesIndices.length += geom.verticesIndices.length;
        for (let i = 0; i < geom.verticesIndices.length; i++)
            this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

        this.vertices = CABLES.float32Concat(this._vertices, geom.vertices);
        this.texCoords = CABLES.float32Concat(this.texCoords, geom.texCoords);
        this.vertexNormals = CABLES.float32Concat(this.vertexNormals, geom.vertexNormals);
        this.tangents = CABLES.float32Concat(this.tangents, geom.tangents);
        this.biTangents = CABLES.float32Concat(this.biTangents, geom.biTangents);
    }

    /**
     *   a copy of the geometry
     * @function copy
     * @memberof Geometry
     * @instance
     */
    copy()
    {
        const geom = new Geometry(this.name + " copy");
        geom.faceVertCount = this.faceVertCount;
        geom.glPrimitive = this.glPrimitive;

        geom.setVertices(this._vertices.slice(0));

        if (this.verticesIndices)
        {
            geom.verticesIndices.length = this.verticesIndices.length;
            for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
        }

        for (let i in this._attributes) this.copyAttribute(i, geom);

        geom.morphTargets.length = this.morphTargets.length;
        for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

        return geom;
    }

    /**
     * Calculaten normals
     * @function calculateNormals
     * @param options
     */
    calculateNormals(options)
    {
        // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
        options = options || {};
        if (options.smooth === false) this.unIndex();

        const u = vec3_create();
        const v = vec3_create();
        const n = vec3_create();

        function calcNormal(triangle)
        {
            vec3_subtract(u, triangle[0], triangle[1]);
            vec3_subtract(v, triangle[0], triangle[2]);
            cross(n, u, v);
            normalize(n, n);

            if (options && options.forceZUp)
            {
                if (n[2] < 0)
                {
                    n[0] *= -1;
                    n[1] *= -1;
                    n[2] *= -1;
                }
            }
            return n;
        }

        this.getVertexVec = function (which)
        {
            const vec = [0, 0, 0];
            vec[0] = this.vertices[which * 3 + 0];
            vec[1] = this.vertices[which * 3 + 1];
            vec[2] = this.vertices[which * 3 + 2];
            return vec;
        };

        if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

        for (let i = 0; i < this.vertices.length; i++)
        {
            this.vertexNormals[i] = 0;
        }

        if (!this.isIndexed())
        {
            const norms = [];
            for (let i = 0; i < this.vertices.length; i += 9)
            {
                const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
                const nn = calcNormal(triangle);
                norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
            }
            this.vertexNormals = norms;
        }
        else
        {
            const faceNormals = [];

            faceNormals.length = Math.floor(this.verticesIndices.length / 3);

            for (let i = 0; i < this.verticesIndices.length; i += 3)
            {
                const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

                faceNormals[i / 3] = calcNormal(triangle);

                this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
                this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
                this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

                this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
                this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
                this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

                this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
                this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
                this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
            }

            for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
            {
                for (let k = 0; k < 3; k++) // triangles
                {
                    const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                    normalize(vv, vv);
                    this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                    this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                    this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
                }
            }
        }
    }

    /**
     * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
     * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
     * Terathon Software 3D Graphics Library.
     * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
     *
     * @function calcTangentsBitangents
     */
    calcTangentsBitangents()
    {
        if (!this.vertices.length)
        {
            // this._log.error("Cannot calculate tangents/bitangents without vertices.");
            return;
        }
        if (!this.vertexNormals.length)
        {
            // this._log.error("Cannot calculate tangents/bitangents without normals.");
            return;
        }
        if (!this.texCoords.length)
        {
            const texCoordLength = (this.vertices.length / 3) * 2;
            this.texCoords = new Float32Array(texCoordLength);
            for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
        }
        if (!this.verticesIndices || !this.verticesIndices.length)
        {
            // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
            return;
        }
        // this code assumes that we have three indices per triangle
        if (this.verticesIndices.length % 3 !== 0)
        {
            this._log.error("Vertex indices mismatch!");
            return;
        }

        const triangleCount = this.verticesIndices.length / 3;
        const vertexCount = this.vertices.length / 3;

        this.tangents = new Float32Array(this.vertexNormals.length);
        this.biTangents = new Float32Array(this.vertexNormals.length);

        // temporary buffers
        const tempVertices = [];
        tempVertices.length = vertexCount * 2;
        const v1 = vec3_create();
        const v2 = vec3_create();
        const v3 = vec3_create();

        const w1 = vec2.create();
        const w2 = vec2.create();
        const w3 = vec2.create();

        const sdir = vec3_create();
        const tdir = vec3_create();

        // for details on calculation, see article referenced above
        for (let tri = 0; tri < triangleCount; tri += 1)
        {
            // indices of the three vertices for a triangle
            const i1 = this.verticesIndices[tri * 3];
            const i2 = this.verticesIndices[tri * 3 + 1];
            const i3 = this.verticesIndices[tri * 3 + 2];

            // vertex position as vec3
            vec3_set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
            vec3_set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
            vec3_set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

            // texture coordinate as vec2
            vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
            vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
            vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

            const x1 = v2[0] - v1[0];
            const x2 = v3[0] - v1[0];
            const y1 = v2[1] - v1[1];
            const y2 = v3[1] - v1[1];
            const z1 = v2[2] - v1[2];
            const z2 = v3[2] - v1[2];

            const s1 = w2[0] - w1[0];
            const s2 = w3[0] - w1[0];
            const t1 = w2[1] - w1[1];
            const t2 = w3[1] - w1[1];

            const r = 1.0 / (s1 * t2 - s2 * t1);

            vec3_set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
            vec3_set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

            tempVertices[i1] = sdir;
            tempVertices[i2] = sdir;
            tempVertices[i3] = sdir;

            tempVertices[i1 + vertexCount] = tdir;
            tempVertices[i2 + vertexCount] = tdir;
            tempVertices[i3 + vertexCount] = tdir;
        }

        const normal = vec3_create();
        const tempVert = vec3_create();
        const tan = vec3_create();
        const bitan = vec3_create();
        const temp1 = vec3_create();
        const temp2 = vec3_create();
        const crossPd = vec3_create();
        const normalized = vec3_create();

        for (let vert = 0; vert < vertexCount; vert += 1)
        {
            // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
            if (!tempVertices[vert]) continue;

            vec3_set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
            vec3_set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

            // Gram-Schmidt orthagonalize
            const _dp = vec3_dot(normal, tempVert);
            vec3_scale(temp1, normal, _dp);
            vec3_subtract(temp2, tempVert, temp1);

            normalize(normalized, temp2);
            cross(crossPd, normal, tempVert);

            // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
            const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

            vec3_scale(tan, normalized, 1 / w);
            cross(bitan, normal, tan);

            this.tangents[vert * 3 + 0] = tan[0];
            this.tangents[vert * 3 + 1] = tan[1];
            this.tangents[vert * 3 + 2] = tan[2];
            this.biTangents[vert * 3 + 0] = bitan[0];
            this.biTangents[vert * 3 + 1] = bitan[1];
            this.biTangents[vert * 3 + 2] = bitan[2];
        }
    }

    isIndexed()
    {
        if (this._vertices.length == 0) return true;
        return this.verticesIndices.length != 0;
    }

    /**
     * @function unIndex
     * @memberof Geometry
     * @instance
     * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
     * @param {boolean} reIndex
     * @param {boolean} dontCalcNormals
     */
    unIndex(reIndex = false, dontCalcNormals = false)
    {
        const newVerts = [];
        const newIndizes = [];
        let count = 0;

        for (let j in this._attributes)
        {
            const attr = this._attributes[j];
            let na = [];

            for (let i = 0; i < this.verticesIndices.length; i += 3)
            {
                for (let s = 0; s < 3; s++)
                {
                    if (attr.itemSize == 3)
                        na.push(
                            attr.data[this.verticesIndices[i + s] * 3 + 0],
                            attr.data[this.verticesIndices[i + s] * 3 + 1],
                            attr.data[this.verticesIndices[i + s] * 3 + 2]);
                    else if (attr.itemSize == 4)
                        na.push(
                            attr.data[this.verticesIndices[i + s] * 4 + 0],
                            attr.data[this.verticesIndices[i + s] * 4 + 1],
                            attr.data[this.verticesIndices[i + s] * 4 + 2],
                            attr.data[this.verticesIndices[i + s] * 4 + 3]);
                    else if (attr.itemSize == 2)
                        na.push(
                            attr.data[this.verticesIndices[i + s] * 2 + 0],
                            attr.data[this.verticesIndices[i + s] * 2 + 1]);
                    else if (attr.itemSize == 1)
                        na.push(
                            attr.data[this.verticesIndices[i + s]]);
                    else this._log.warn("unknown attr", attr);
                }
            }
            this.setAttribute(attr.name, na, attr.itemSize);
        }

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            newVerts.push(
                this.vertices[this.verticesIndices[i + 0] * 3 + 0],
                this.vertices[this.verticesIndices[i + 0] * 3 + 1],
                this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

            newIndizes.push(count);
            count++;

            newVerts.push(
                this.vertices[this.verticesIndices[i + 1] * 3 + 0],
                this.vertices[this.verticesIndices[i + 1] * 3 + 1],
                this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

            newIndizes.push(count);
            count++;

            newVerts.push(
                this.vertices[this.verticesIndices[i + 2] * 3 + 0],
                this.vertices[this.verticesIndices[i + 2] * 3 + 1],
                this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

            newIndizes.push(count);
            count++;
        }

        this.vertices = newVerts;

        this.verticesIndices = [];
        if (reIndex) this.verticesIndices = newIndizes;

        if (!dontCalcNormals) this.calculateNormals();
    }

    calcBarycentric()
    {
        let barycentrics = [];
        barycentrics.length = this.vertices.length;
        for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

        let count = 0;
        for (let i = 0; i < this.vertices.length; i += 3)
        {
            barycentrics[i + count] = 1;
            count++;
            if (count == 3) count = 0;
        }

        this.setAttribute("attrBarycentric", barycentrics, 3);
    }

    getBounds()
    {
        return new BoundingBox(this);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {Array} offset
     */
    center(x, y, z)
    {
        if (x === undefined)
        {
            x = true;
            y = true;
            z = true;
        }

        let i = 0;
        const bounds = this.getBounds();
        const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

        for (i = 0; i < this.vertices.length; i += 3)
        {
            if (this.vertices[i + 0] == this.vertices[i + 0])
            {
                if (x) this.vertices[i + 0] -= offset[0];
                if (y) this.vertices[i + 1] -= offset[1];
                if (z) this.vertices[i + 2] -= offset[2];
            }
        }

        return offset;
    }

    mapTexCoords2d()
    {
        const bounds = this.getBounds();
        const num = this.vertices.length / 3;

        this.texCoords = new Float32Array(num * 2);

        for (let i = 0; i < num; i++)
        {
            const vertX = this.vertices[i * 3 + 0];
            const vertY = this.vertices[i * 3 + 1];
            this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
            this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
        }
    }

    getInfoOneLine()
    {
        let txt = "";
        if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
        else txt += 0;

        txt += " tris ";

        if (this.vertices)txt += this.vertices.length / 3;
        else txt += 0;

        txt += " verts";

        return txt;
    }

    getInfo()
    {
        const info = {};

        info.name = this.name;
        info.class = this.constructor.name;

        if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
        else info.numFaces = 0;

        if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

        if (this.vertices)info.numVerts = this.vertices.length / 3;
        else info.numVerts = 0;

        if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
        else info.numNormals = 0;

        if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
        else info.numTexCoords = 0;

        if (this.tangents) info.numTangents = this.tangents.length / 3;
        else info.numTangents = 0;

        if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
        else info.numBiTangents = 0;

        if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
        else info.numBiTangents = 0;

        if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
        else info.numVertexColors = 0;

        if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
        else info.numAttribs = 0;

        info.isIndexed = this.isIndexed();

        return info;
    }

    // -----------------
}

// TODO : rewritwe circle op 1
/** @deprecated */
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js



const MESHES = {};

MESHES.getSimpleRect = function (cgl, name, size = 1.0)
{
    const geom = new Geometry(name);

    geom.vertices = [1.0 * size, 1.0 * size, 0.0, -1.0 * size, 1.0 * size, 0.0, 1.0 * size, -1.0 * size, 0.0, -1.0 * size, -1.0 * size, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return cgl.createMesh(geom);
};

MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};



;// CONCATENATED MODULE: ./src/core/cgp/cgp_canvasattachment.js


class WebGpuCanvasAttachment
{

    /** @type {canvas} */
    #canvas = null;

    /** @type {CgpContext} */
    #cgp = null;

    /** @type {CanvasContext} */
    #ctx = null;

    /**
     * @param {CgpContext} cgp
     */
    constructor(cgp)
    {
        this.#cgp = cgp;
        this.#canvas = document.createElement("canvas");
        this.#canvas.id = "webgpucanvasOut";
        this.#canvas.style.width = 128 + "px";
        this.#canvas.style.height = 128 + "px";
    }

    get canvas()
    {
        return this.#canvas;
    }

    /**
     * @param {function} cb
     */
    render(cb)
    {

        const canvas = this.#cgp.canvas;
        if (this.#canvas.width != canvas.width || this.#canvas.height != canvas.height)
        {
            this.#canvas.style.width = canvas.width + "px";
            this.#canvas.style.height = canvas.height + "px";
            this.#canvas.width = canvas.width;
            this.#canvas.height = canvas.height;
        }

        if (!this.#ctx)
        {
            this.#ctx = this.#canvas.getContext("webgpu");

            if (!this.#ctx)
                return console.log("no context", this.#canvas, this.#ctx);
            this.#ctx.configure({
                "device": this.#cgp.device,
                "format": this.#cgp.presentationFormat
            });

        }

        // const cgp = this.#cgp;
        // cgp.canvasInfo.depthTextureView = this.#ctx.createView();

        this.#cgp.renderPassDescriptor = {
            "label": "preview renderpass",
            "colorAttachments": [
                {
                    "view": this.#ctx.getCurrentTexture().createView(),
                    "loadOp": "clear",
                    "storeOp": "store",
                },

            ],
            "depthStencilAttachment": {
                "view": this.#cgp.canvasInfo.depthTextureView,
                "depthClearValue": 1,
                "depthLoadOp": "clear",
                "depthStoreOp": "store",
            },
        };

        // make a render pass encoder to encode render specific commands
        this.#cgp.passEncoder = this.#cgp.commandEncoder.beginRenderPass(this.#cgp.renderPassDescriptor);
        this.#cgp.textureView = this.#ctx.getCurrentTexture().createView();
        this.#cgp.renderStart();

        cb();

        this.#cgp.tempPrevCanvas = this.#canvas;

        this.#cgp.renderEnd();
        this.#cgp.passEncoder.end();

    }

}

;// CONCATENATED MODULE: ./src/core/cgp/index.js











const CGP = {
    "Context": CgpContext,
    "Shader": CgpShader,
    "Mesh": CgpMesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
    "Binding": Binding,
    "Uniform": CgpUniform,
    "MESHES": MESHES,
    "GPUBuffer": CgpGguBuffer
};

window.CABLES = window.CABLES || {};
window.CABLES.CGP = CGP;
window.CGP = CGP;
window.CGP.WebGpuCanvasAttachment = WebGpuCanvasAttachment;
window.CGP.Pipeline = Pipeline;



;// CONCATENATED MODULE: ./src/core/cg/cg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000) this.endSecond();
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,

    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js



class Framebuffer2
{
    constructor(cgl, w, h, options)
    {
        this._log = new Logger("cgl_framebuffer2");
        if (cgl.glVersion == 1) this._log.error("framebuffer2 used on webgl1");
        this.Framebuffer2DrawTargetsDefault = null;
        this.Framebuffer2BlittingFramebuffer = null;
        this.Framebuffer2FinalFramebuffer = null;
        this._cgl = cgl;

        this._cgl.printError("before framebuffer2 constructor");

        this._width = 0;
        this._height = 0;
        this.valid = true;

        this._depthRenderbuffer = null;
        this._frameBuffer = null;
        this._textureFrameBuffer = null;
        this._colorRenderbuffers = [];
        this._drawTargetArray = [];
        this._disposed = false;

        if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
        if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

        if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

        this._options = options || {
            "isFloatingPointTexture": false,
        };

        this.name = this._options.name || "unknown";

        this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

        if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
        if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
        if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
        if (!this._options.hasOwnProperty("multisampling"))
        {
            this._options.multisampling = false;
            this._options.multisamplingSamples = 0;
        }

        if (this._options.multisamplingSamples)
        {
            if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
            if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
            else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
        }

        if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
        if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

        this._numRenderBuffers = this._options.numRenderBuffers;
        this._colorTextures = [];

        this.clearColors = [];
        for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);

        if (!options.pixelFormat)
        {
            if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
            else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
        }

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._colorTextures[i] = new Texture(cgl, {
                "name": "fb2 " + this.name + " " + i,
                "isFloatingPointTexture": this._options.isFloatingPointTexture,
                "anisotropic": this._options.anisotropic || 0,
                "pixelFormat": this._options.pixelFormat,
                "filter": this._options.filter,
                "wrap": this._options.wrap,
            });
        }

        let fil = Texture.FILTER_NEAREST;
        if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

        const defaultTexSize = 512;

        if (this._options.depth)
        {
            this._textureDepth = new Texture(cgl,
                {
                    "name": "fb2 depth " + this.name,
                    "isDepthTexture": true,
                    "filter": fil,
                    "shadowMap": this._options.shadowMap || false,
                    "width": w || defaultTexSize,
                    "height": h || defaultTexSize,
                });
        }

        if (cgl.aborted) return;

        this.setSize(w || defaultTexSize, h || defaultTexSize);

        this._cgl.printError("framebuffer2 constructor");
    }

    getWidth()
    {
        return this._width;
    }

    getHeight()
    {
        return this._height;
    }

    getGlFrameBuffer()
    {
        return this._frameBuffer;
    }

    getDepthRenderBuffer()
    {
        return this._depthRenderbuffer;
    }

    getTextureColor()
    {
        return this._colorTextures[0];
    }

    getTextureColorNum(i)
    {
        return this._colorTextures[i];
    }

    getTextureDepth()
    {
        return this._textureDepth;
    }

    setFilter(f)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._colorTextures[i].filter = f;
            this._colorTextures[i].setSize(this._width, this._height);
        }
    }

    delete()
    {
        this.dispose();
    }

    dispose()
    {
        this._disposed = true;
        let i = 0;
        for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
        // this._texture.delete();
        if (this._textureDepth) this._textureDepth.delete();
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    setSize(w, h)
    {
        if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
        this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

        let i = 0;

        this._width = this._cgl.checkTextureSize(w);
        this._height = this._cgl.checkTextureSize(h);

        this._cgl.profileData.profileFrameBuffercreate++;

        if (this._frameBuffer)
        {
            for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
            // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
            this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
            this._cgl.gl.deleteFramebuffer(this._frameBuffer);
            this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
        }

        this._frameBuffer = this._cgl.gl.createFramebuffer();
        this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

        const depth = this._options.depth;

        for (i = 0; i < this._numRenderBuffers; i++)
        {
            this._colorTextures[i].setSize(this._width, this._height);
        }

        for (i = 0; i < this._numRenderBuffers; i++)
        {
            const renderBuffer = this._cgl.gl.createRenderbuffer();

            // color renderbuffer

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

            const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
            let internFormat = info.glInternalFormat;

            // if (this._options.isFloatingPointTexture)
            // {
            if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
            {
                if (!this._cgl.enableExtension("OES_texture_float_linear"))
                {
                    this._options.filter = Texture.FILTER_NEAREST;
                    this.setFilter(this._options.filter);
                }
            }
            else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
            {
                if (!this._cgl.enableExtension("OES_texture_float_linear"))
                {
                    this._log.warn("no linear pixelformat,using nearest");
                    this._options.filter = Texture.FILTER_NEAREST;
                    this.setFilter(this._options.filter);
                }
            }
            // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
            // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
            // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
            // {
            //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

            //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
            //     {
            //         console.log("no linear pixelformat,switching to nearest");
            //         this._options.filter = Texture.FILTER_NEAREST;
            //         this.setFilter(this._options.filter);
            //     }
            // }
            // }

            if (this._options.multisampling && this._options.multisamplingSamples)
            {
                this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
            }
            else
            {
                this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
            }

            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
            this._colorRenderbuffers[i] = renderBuffer;
        }

        // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

        for (i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        }

        if (this._options.depth)
        {
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
        }

        // depth renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

        let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

        if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
        if (depth)
        {
            this._textureDepth.setSize(this._width, this._height);
            this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
            if (this._options.isFloatingPointTexture)
            {
                if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
                else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
            }
            else if (this._options.multisampling)
            {
                this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
            }
            else
            {
                this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
            }

            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        }

        // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
        // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

        this._drawTargetArray.length = 0;
        for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

        // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
        const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

        if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
        {
            this._log.error("framebuffer incomplete: " + this.name, this);
            this._log.log("options", this._options);
            this._log.log("options pixelformat", this._options.pixelFormat);

            switch (status)
            {
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
                throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
                throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
                throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
                this._log.warn("FRAMEBUFFER_UNSUPPORTED");
                throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
            default:
                this.valid = false;
                this._log.error("incomplete framebuffer", status, this._frameBuffer);
                this._cgl.printError();

                this._frameBuffer = null;
                // debugger;
                throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
            }
        }

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
    }

    renderStart()
    {
        if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
        this._cgl.checkFrameStarted("fb2 renderstart");
        this._cgl.pushModelMatrix(); // needed ??

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.pushGlFrameBuffer(this._frameBuffer);
        this._cgl.pushFrameBuffer(this);

        this._cgl.pushPMatrix();
        this._cgl.pushViewPort(0, 0, this._width, this._height);

        this._cgl.gl.drawBuffers(this._drawTargetArray);

        if (this._options.clear)
        {
            this._cgl.gl.clearColor(0, 0, 0, 0);
            this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
        }
    }

    clear()
    {
        if (this._numRenderBuffers <= 1)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
        }
        else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

        this._cgl.gl.drawBuffers(this._drawTargetArray);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
            this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
        }
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    renderEnd()
    {
        if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
        this._cgl.popPMatrix();

        this._cgl.profileData.profileFramebuffer++;

        if (this._numRenderBuffers <= 1)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

            this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
        }
        else
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

            for (let i = 0; i < this._numRenderBuffers; i++)
            {
                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
                this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);

                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
                this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

                this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
                this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

                // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);

                let flags = this._cgl.gl.COLOR_BUFFER_BIT;
                if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

                this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
            }
        }

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
        this._cgl.popFrameBuffer();

        this._cgl.popModelMatrix();
        // this._cgl.resetViewPort();
        this._cgl.popViewPort();

        if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
        {
            for (let i = 0; i < this._numRenderBuffers; i++)
            {
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
                this._colorTextures[i].updateMipMap();
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
/** @type {function}
 * @deprecated
*/
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

/** @type {function}
 * @deprecated
*/
const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

/** @type {function}
 * @deprecated
*/
const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";

        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/**
 * @namespace CGL
 */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.includes("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cgl/index.js



















const cgl_CGL = {
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": CglShader,
    "Uniform": cgl_shader_uniform_Uniform,
    "MESHES": MESHES,
    "Context": CglContext,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;



;// CONCATENATED MODULE: ./src/core/index.js




























window.glMatrix = common_namespaceObject;
window.mat2 = mat2_namespaceObject;
window.mat2d = mat2d_namespaceObject;
window.mat3 = mat3_namespaceObject;
window.mat4 = mat4_namespaceObject;
window.quat = quat_namespaceObject;
window.quat2 = quat2_namespaceObject;
window.vec2 = vec2_namespaceObject;

window.vec3 = vec3_namespaceObject;
window.vec4 = vec4_namespaceObject;

window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = Patch;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;
CABLES.Anim = Anim;
CABLES.AnimKey = AnimKey;

CABLES.shortId = shortId;
CABLES.uuid = uuid;
CABLES.getShortOpName = getShortOpName;
CABLES.simpleId = simpleId;
CABLES.clamp = clamp;
CABLES.map = map;
CABLES.shuffleArray = shuffleArray;
CABLES.generateUUID = generateUUID;
CABLES.prefixedHash = prefixedHash;
CABLES.smoothStep = smoothStep;
CABLES.smootherStep = smootherStep;
CABLES.cacheBust = cacheBust;
CABLES.copyArray = copyArray;
CABLES.basename = basename;
CABLES.logStack = logStack;
CABLES.filename = filename;
CABLES.ajaxSync = ajaxSync;
CABLES.ajax = ajax;
CABLES.request = request;
CABLES.logErrorConsole = logErrorConsole;
CABLES.isNumeric = isNumeric;
CABLES.isArray = isArray;
CABLES.float32Concat = float32Concat;
CABLES.uniqueArray = uniqueArray;
CABLES.CGState = CgContext;
CABLES.CgContext = CgContext;

/** @type {Array<Op>} */
CABLES.OPS = [];

CABLES = Object.assign(CABLES,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);



if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1742839130342,"created":"2025-03-24T17:58:50.342Z","git":{"branch":"develop","commit":"f5adb5c822da6ec0730edd152b96d26c56e5c410","date":"1742838789","message":"constructor op"}};