import {
  Fragment,
  Transition,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  inject,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  provide,
  ref,
  render,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-JN5NFW2R.js";

// node_modules/.pnpm/zqs-ui3@2.0.0/node_modules/zqs-ui3/dist/zqs-ui3.es.js
var p = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of l)
    e[s] = n;
  return e;
};
var R = {
  name: "zqs-button"
};
var U = Object.assign(R, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = () => {
      s("click");
    };
    return (a, i) => (openBlock(), createElementBlock("button", {
      onClick: n,
      class: normalizeClass(["zqs-button", [
        `zqs-button-${e.type}`,
        { "is-plain": e.plain },
        { "is-round": e.round },
        { "is-circle": e.circle },
        { "is-disabled": e.disabled },
        `zqs-button-${e.size}`
      ]])
    }, [
      createBaseVNode("span", null, [
        renderSlot(a.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var k = p(U, [["__scopeId", "data-v-13895824"]]);
k.install = (t) => {
  t.component(k.name, k);
};
var Y = {
  name: "zqs-table"
};
var J = Object.assign(Y, {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: "600px"
    },
    stript: {
      type: Boolean,
      default: false
    }
  },
  setup(t) {
    const l = t, e = ref([]);
    e.value = l.columns.map((n) => n.value), watch(
      () => l.columns,
      () => {
        e.value = l.columns.map((n) => n.value);
      }
    );
    const s = ref(null);
    return onMounted(
      () => {
        s.value.style.width = l.width, s.value.style.height = l.height;
      }
    ), console.log(l.stript), (n, a) => (openBlock(), createElementBlock("table", {
      class: "zqs-table",
      ref_key: "tableRef",
      ref: s
    }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(t.columns, (i, u) => (openBlock(), createElementBlock("th", { key: u }, [
            createBaseVNode("span", null, toDisplayString(i.label || i.value), 1)
          ]))), 128))
        ])
      ]),
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.data, (i, u) => (openBlock(), createElementBlock("tr", {
          class: "tr",
          key: u,
          style: normalizeStyle(u % 2 != 0 && l.stript ? {
            "background-color": "#f5f7fa"
          } : { "background-color": "#fff" })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (b, d) => (openBlock(), createElementBlock("td", { key: d }, toDisplayString(i[b]), 1))), 128))
        ], 4))), 128))
      ])
    ], 512));
  }
});
var q = p(J, [["__scopeId", "data-v-ee72c0d3"]]);
q.install = (t) => {
  t.component(q.name, q);
};
var Q = { class: "zqs-input" };
var W = ["type", "placeholder", "disabled", "name", "value"];
var X = {
  name: "zqs-input"
};
var ee = Object.assign(X, {
  props: {
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = (a) => {
      s("update:modelValue", a.target.value);
    };
    return (a, i) => (openBlock(), createElementBlock("div", Q, [
      createBaseVNode("input", {
        class: normalizeClass(["zqs-input-inner", [{ "is-disabled": e.disabled }]]),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        name: t.name,
        value: e.modelValue,
        onInput: n
      }, null, 42, W)
    ]));
  }
});
var S = p(ee, [["__scopeId", "data-v-a36cabac"]]);
S.install = (t) => {
  t.component(S.name, S);
};
var te = {
  name: "zqs-alert",
  props: {
    type: {
      type: String,
      default: "info"
      // 类型：success, warning, info, error
    },
    size: {
      type: String,
      default: "medium",
      // 弹框大小：small, medium, large
      validator: (t) => ["small", "medium", "large"].includes(t)
    },
    message: {
      type: String,
      required: true
      // 提示内容
    },
    duration: {
      type: Number,
      default: 3e3
      // 自动关闭时间，单位毫秒
    }
  },
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.duration);
  },
  methods: {
    close() {
      this.visible = false, this.$emit("close");
    }
  }
};
var le = { class: "zqs-alert__content" };
function se(t, l, e, s, n, a) {
  return openBlock(), createBlock(Transition, { name: "el-fade-in-linear" }, {
    default: withCtx(() => [
      n.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["zqs-alert", [`zqs-alert--${e.type}`, `zqs-alert-${e.size}`]])
      }, [
        createBaseVNode("div", le, toDisplayString(e.message), 1)
      ], 2)) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var ne = p(te, [["render", se], ["__scopeId", "data-v-c6c18935"]]);
var L = (t) => {
  const l = document.createElement("div"), e = createVNode(ne, t);
  return render(e, l), document.body.appendChild(l.firstElementChild), {
    close: () => {
      render(null, l), document.body.removeChild(l.firstElementChild);
    }
  };
};
var ae = { class: "zqs-checkbox-label" };
var oe = {
  name: "zqs-checkbox"
};
var ie = Object.assign(oe, {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t;
    let s = inject("checkbox-group"), n = inject("checkbox-group-handleClick");
    const a = ref(false);
    console.log(s), (() => {
      if (s != null)
        for (let d = 0; d < s.length; d++)
          console.log(e.value), s[d] === e.value && (a.value = true, console.log(a.value));
    })();
    const u = l, b = () => {
      if (s != null) {
        if (e.disabled == true)
          return;
        s.includes(e.value) ? (s.splice(s.indexOf(e.value), 1), a.value = false) : (s.push(e.value), a.value = true), n(s);
      } else
        u("update:modelValue", !e.modelValue);
    };
    return (d, v) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["zqs-checkbox", [{ "is-checked": e.modelValue == false ? a.value : e.modelValue }, { "is-disabled": e.disabled }]])
    }, [
      createBaseVNode("span", { class: "zqs-checkbox-input" }, [
        v[0] || (v[0] = createBaseVNode("span", { class: "zqs-checkbox-inner" }, null, -1)),
        createBaseVNode("input", {
          type: "checkbox",
          class: "zqs-checkbox-original",
          onClick: b
        })
      ]),
      createBaseVNode("span", ae, [
        renderSlot(d.$slots, "default", {}, void 0, true),
        d.$slots.default ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
var z = p(ie, [["__scopeId", "data-v-71965916"]]);
z.install = (t) => {
  t.component(z.name, z);
};
var ce = { class: "zqs-select" };
var re = ["disabled", "value"];
var ue = { class: "zqs-position-box" };
var de = {
  name: "zqs-select"
};
var pe = Object.assign(de, {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = ref(false), s = {
      beforeMount(h) {
        document.addEventListener("click", (g) => {
          h.contains(g.target) ? (e.value = true, u.value = true) : (e.value = false, u.value = false, i.value = false);
        });
      }
    }, n = t, a = ref("Select"), i = ref(true), u = ref(false), b = l, d = (h, g) => {
      b("update:modelValue", h), n.disabled != true && (a.value = g || h || "", i.value = false);
    }, v = ref(n.modelValue);
    return watch(() => n.modelValue, () => {
      v.value = n.modelValue;
    }), provide("selectValue", v), provide("changeSelectValue", d), (h, g) => withDirectives((openBlock(), createElementBlock("div", ce, [
      createBaseVNode("input", {
        type: "text",
        disabled: n.disabled,
        value: a.value,
        readonly: "",
        style: normalizeStyle({
          color: i.value == false ? "black" : "silver"
        }),
        class: normalizeClass([{ border: u.value }])
      }, null, 14, re),
      createVNode(Transition, { name: "slide-fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", ue, [
            renderSlot(h.$slots, "default", {}, void 0, true)
          ], 512), [
            [vShow, e.value]
          ])
        ]),
        _: 3
      })
    ])), [
      [s]
    ]);
  }
});
var $ = p(pe, [["__scopeId", "data-v-686c536f"]]);
$.install = (t) => {
  t.component($.name, $);
};
var me = {
  name: "zqs-option"
};
var fe = Object.assign(me, {
  props: {
    label: {
      type: String || Number,
      default: ""
    },
    value: {
      type: String || Number,
      default: ""
    },
    customKey: {
      type: String || Number,
      default: ""
    }
  },
  setup(t) {
    const l = t, e = inject("changeSelectValue"), s = inject("selectValue"), n = () => {
      e(l.value, l.label);
    };
    return onMounted(() => {
      l.value == s.value && e(l.value, l.label);
    }), (a, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["zqs-option", [{ "is-selected": unref(s) == l.value }]]),
      key: l.customKey,
      onClick: n
    }, toDisplayString(l.label || l.value || ""), 3));
  }
});
var V = p(fe, [["__scopeId", "data-v-d1d9ed31"]]);
V.install = (t) => {
  t.component(V.name, V);
};
var he = {
  name: "zqs-backTop",
  props: {
    target: {
      type: String,
      default: ""
    },
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: String,
      default: "40px"
    },
    bottom: {
      type: String,
      default: "40px"
    }
  },
  data() {
    return {
      visible: false,
      container: null,
      scrollEvent: null
    };
  },
  mounted() {
    this.initContainer(), this.bindScroll();
  },
  beforeUnmount() {
    this.unbindScroll();
  },
  methods: {
    initContainer() {
      if (this.container = this.target ? document.querySelector(this.target) : window, !this.container)
        throw new Error(`Target element ${this.target} not found.`);
    },
    bindScroll() {
      this.container && (this.scrollEvent = this.throttle(this.handleScroll, 100), this.container.addEventListener("scroll", this.scrollEvent), this.handleScroll());
    },
    unbindScroll() {
      this.container && this.scrollEvent && this.container.removeEventListener("scroll", this.scrollEvent);
    },
    getScrollTop() {
      return this.container === window ? Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) : this.container.scrollTop;
    },
    setScrollTop(t) {
      this.container === window ? window.scrollTo(0, t) : this.container.scrollTop = t;
    },
    handleScroll() {
      const t = this.getScrollTop();
      this.visible = t >= this.visibilityHeight;
    },
    handleClick() {
      this.scrollToTop(), this.$emit("click");
    },
    scrollToTop() {
      const t = this.getScrollTop(), l = Date.now(), e = 500, s = () => {
        const n = Date.now(), a = Math.min(n - l, e), i = a / e, u = i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2;
        this.setScrollTop(t - t * u), a < e ? requestAnimationFrame(s) : this.setScrollTop(0);
      };
      requestAnimationFrame(s);
    },
    throttle(t, l) {
      let e = 0;
      return function(...s) {
        const n = Date.now();
        n - e >= l && (t.apply(this, s), e = n);
      };
    }
  }
};
function _e(t, l, e, s, n, a) {
  return openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        class: "zqs-backtop",
        onClick: l[0] || (l[0] = (...i) => a.handleClick && a.handleClick(...i)),
        style: normalizeStyle({ right: e.right, bottom: e.bottom })
      }, [
        renderSlot(t.$slots, "default", {}, () => [
          l[1] || (l[1] = createBaseVNode("div", { class: "zqs-backtop__content" }, [
            createBaseVNode("i", { class: "zqs-icon-caret-top" }, "Top")
          ], -1))
        ], true)
      ], 4), [
        [vShow, n.visible]
      ])
    ]),
    _: 3
  });
}
var C = p(he, [["render", _e], ["__scopeId", "data-v-eb413b17"]]);
C.install = (t) => {
  t.component(C.name, C);
};
var be = {
  name: "zqs-header",
  props: {
    logo: {
      type: String,
      required: true
      // 左侧 Logo 图片路径
    },
    systemName: {
      type: String,
      required: true
      // 系统名称
    },
    avatar: {
      type: String,
      required: true
      // 右侧头像图片路径
    },
    username: {
      type: String,
      required: true
      // 用户名
    }
  },
  methods: {
    handleLogout() {
      this.$emit("logout");
    }
  }
};
var ve = { class: "zqs-header" };
var ge = { class: "left" };
var ye = ["src"];
var ke = { class: "system-name" };
var qe = { class: "right" };
var Se = ["src"];
var ze = { class: "username" };
function $e(t, l, e, s, n, a) {
  return openBlock(), createElementBlock("header", ve, [
    createBaseVNode("div", ge, [
      createBaseVNode("img", {
        src: e.logo,
        alt: "Logo",
        class: "logo"
      }, null, 8, ye),
      createBaseVNode("span", ke, toDisplayString(e.systemName), 1)
    ]),
    createBaseVNode("div", qe, [
      createBaseVNode("img", {
        src: e.avatar,
        alt: "Avatar",
        class: "avatar"
      }, null, 8, Se),
      createBaseVNode("span", ze, toDisplayString(e.username), 1),
      createBaseVNode("button", {
        class: "logout-button",
        onClick: l[0] || (l[0] = (...i) => a.handleLogout && a.handleLogout(...i))
      }, "退出登录")
    ])
  ]);
}
var x = p(be, [["render", $e], ["__scopeId", "data-v-028efe54"]]);
x.install = (t) => {
  t.component(x.name, x);
};
var Ve = [
  k,
  q,
  S,
  z,
  $,
  V,
  C,
  x
];
var Ce = (t) => {
  Ve.forEach((l) => t.use(l)), t.config.globalProperties.$alert = L, t.provide("ZqsAlert", L);
};
var we = {
  install: Ce
};
export {
  L as ZqsAlert,
  C as ZqsBackTop,
  k as ZqsButton,
  z as ZqsCheckbox,
  x as ZqsHeader,
  S as ZqsInput,
  $ as ZqsSelect,
  V as ZqsSelectOption,
  q as ZqsTable,
  we as default
};
//# sourceMappingURL=zqs-ui3.js.map
