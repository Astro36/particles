(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(n,e,t){"use strict";t.r(e),t.d(e,"__wbg_random_7f3cbaed87c9c079",function(){return r}),t.d(e,"__widl_instanceof_CanvasRenderingContext2D",function(){return c}),t.d(e,"__widl_f_begin_path_CanvasRenderingContext2D",function(){return f}),t.d(e,"__widl_f_fill_CanvasRenderingContext2D",function(){return _}),t.d(e,"__widl_f_stroke_CanvasRenderingContext2D",function(){return g}),t.d(e,"__widl_f_set_line_width_CanvasRenderingContext2D",function(){return v}),t.d(e,"__widl_f_arc_CanvasRenderingContext2D",function(){return y}),t.d(e,"__widl_f_line_to_CanvasRenderingContext2D",function(){return R}),t.d(e,"__widl_f_move_to_CanvasRenderingContext2D",function(){return E}),t.d(e,"__widl_f_clear_rect_CanvasRenderingContext2D",function(){return M}),t.d(e,"__widl_f_get_context_HTMLCanvasElement",function(){return j}),t.d(e,"__widl_f_width_HTMLCanvasElement",function(){return J}),t.d(e,"__widl_f_height_HTMLCanvasElement",function(){return W}),t.d(e,"ParticleManager",function(){return q}),t.d(e,"__wbindgen_object_drop_ref",function(){return z}),t.d(e,"__wbindgen_number_get",function(){return B}),t.d(e,"__wbindgen_is_null",function(){return F}),t.d(e,"__wbindgen_is_undefined",function(){return G}),t.d(e,"__wbindgen_boolean_get",function(){return I}),t.d(e,"__wbindgen_is_symbol",function(){return K}),t.d(e,"__wbindgen_string_get",function(){return S}),t.d(e,"__wbindgen_throw",function(){return V});var o=t(2);function r(){return Math.random()}const i=new Array(32);i.fill(void 0),i.push(void 0,null,!0,!1);let u=i.length;function a(n){u===i.length&&i.push(i.length+1);const e=u;return u=i[e],i[e]=n,e}function d(n){return i[n]}function c(n){return d(n)instanceof CanvasRenderingContext2D?1:0}const s="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.beginPath||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.beginPath does not exist")};function f(n){s.call(d(n))}const l="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.fill||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.fill does not exist")};function _(n){l.call(d(n))}const C="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.stroke||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.stroke does not exist")};function g(n){C.call(d(n))}function w(n,e){for(;n;){let t=Object.getOwnPropertyDescriptor(n,e);if(t)return t;n=Object.getPrototypeOf(n)}return{}}const p=w("undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype,"lineWidth").set||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.lineWidth does not exist")};function v(n,e){p.call(d(n),e)}const x="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.arc||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.arc does not exist")};let b=null;function h(){return null!==b&&b.buffer===o.c.buffer||(b=new Uint32Array(o.c.buffer)),b}function y(n,e,t,o,r,i,u){try{x.call(d(n),e,t,o,r,i)}catch(n){const e=h();e[u/4]=1,e[u/4+1]=a(n)}}const D="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.lineTo||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.lineTo does not exist")};function R(n,e,t){D.call(d(n),e,t)}const m="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.moveTo||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.moveTo does not exist")};function E(n,e,t){m.call(d(n),e,t)}const T="undefined"==typeof CanvasRenderingContext2D?null:CanvasRenderingContext2D.prototype.clearRect||function(){throw new Error("wasm-bindgen: CanvasRenderingContext2D.clearRect does not exist")};function M(n,e,t,o,r){T.call(d(n),e,t,o,r)}let H=new TextDecoder("utf-8"),L=null;function k(){return null!==L&&L.buffer===o.c.buffer||(L=new Uint8Array(o.c.buffer)),L}function P(n,e){return H.decode(k().subarray(n,n+e))}const O="undefined"==typeof HTMLCanvasElement?null:HTMLCanvasElement.prototype.getContext||function(){throw new Error("wasm-bindgen: HTMLCanvasElement.getContext does not exist")};function j(n,e,t,o){let r=P(e,t);try{const e=O.call(d(n),r);return null==e?0:a(e)}catch(n){const e=h();e[o/4]=1,e[o/4+1]=a(n)}}const A=w("undefined"==typeof HTMLCanvasElement?null:HTMLCanvasElement.prototype,"width").get||function(){throw new Error("wasm-bindgen: HTMLCanvasElement.width does not exist")};function J(n){return A.call(d(n))}const U=w("undefined"==typeof HTMLCanvasElement?null:HTMLCanvasElement.prototype,"height").get||function(){throw new Error("wasm-bindgen: HTMLCanvasElement.height does not exist")};function W(n){return U.call(d(n))}class q{free(){const n=this.ptr;this.ptr=0,function(n){o.a(n)}(n)}constructor(n,e){this.ptr=o.d(a(n),e)}update(){return o.e(this.ptr)}}function z(n){var e;(e=n)<36||(i[e]=u,u=e)}function B(n,e){let t=d(n);return"number"==typeof t?t:(k()[e]=1,0)}function F(n){return null===d(n)?1:0}function G(n){return void 0===d(n)?1:0}function I(n){let e=d(n);return"boolean"==typeof e?e?1:0:2}function K(n){return"symbol"==typeof d(n)?1:0}let N=new TextEncoder("utf-8"),Q=0;function S(n,e){let t=d(n);if("string"!=typeof t)return 0;const r=function(n){const e=N.encode(n),t=o.b(e.length);return k().set(e,t),Q=e.length,t}(t);return h()[e/4]=Q,r}function V(n,e){throw new Error(P(n,e))}},function(n,e,t){"use strict";var o=t.w[n.i];n.exports=o;t(1);o.f()}]]);