const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/TechStack-jD2Lk2vs.js",
      "assets/index-CjB5_JDO.js",
      "assets/index-BJawqST2.css",
      "assets/RGBELoader-CRHepzIQ.js",
    ]),
) => i.map((i) => d[i]);
import { j as e, R as u, r as d, _ as A } from "./index-CjB5_JDO.js";
import { g as x, S as g } from "./ScrollTrigger-0lJgtTtq.js";
import { H as C, S as b, a as T, N as z } from "./Navbar-BjS5dbZ6.js";
const O = () =>
    e.jsx("div", {
      className: "about-section",
      id: "about",
      children: e.jsxs("div", {
        className: "about-me",
        children: [
          e.jsx("h3", { className: "title", children: "About Me" }),
          e.jsx("p", {
            className: "para",
            children:
              "I'm a Computer Science student at KIIT University with a passion for building full-stack systems, geospatial tools, and ML pipelines. Recently completed a research internship at IIT Kharagpur on seismic hazard simulation and AI-enhanced disaster nowcasting - turning raw sensor data into real-time emergency insights.",
          }),
        ],
      }),
    }),
  R = () =>
    e.jsx("div", {
      className: "career-section section-container",
      children: e.jsxs("div", {
        className: "career-container",
        children: [
          e.jsxs("h2", {
            children: [
              "My career ",
              e.jsx("span", { children: "&" }),
              e.jsx("br", {}),
              " experience",
            ],
          }),
          e.jsxs("div", {
            className: "career-info",
            children: [
              e.jsx("div", {
                className: "career-timeline",
                children: e.jsx("div", { className: "career-dot" }),
              }),
              e.jsxs("div", {
                className: "career-info-box",
                children: [
                  e.jsxs("div", {
                    className: "career-info-in",
                    children: [
                      e.jsxs("div", {
                        className: "career-role",
                        children: [
                          e.jsx("h4", { children: "Research Intern" }),
                          e.jsx("h5", { children: "IIT Kharagpur" }),
                        ],
                      }),
                      e.jsx("h3", { children: "NOW" }),
                    ],
                  }),
                  e.jsx("p", {
                    children:
                      "Seismic Hazard Simulation & AI-Enhanced Rapid Nowcasting Project. Building interactive geospatial maps for real-time seismic visualization using MapLibre GL JS and Leaflet.js. Managing PostGIS/PostgreSQL databases and contributing to a multi-task AI/ML framework fusing smartphone, fiber-optic, and SAR satellite data for disaster response.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "career-info-box",
                children: [
                  e.jsxs("div", {
                    className: "career-info-in",
                    children: [
                      e.jsxs("div", {
                        className: "career-role",
                        children: [
                          e.jsx("h4", { children: "B.Tech CSE" }),
                          e.jsx("h5", { children: "KIIT University" }),
                        ],
                      }),
                      e.jsx("h3", { children: "2023–27" }),
                    ],
                  }),
                  e.jsx("p", {
                    children:
                      "Computer Science & Engineering at KIIT University, Bhubaneswar. Currently maintaining a CGPA of 8.10. Building projects in full-stack web, geospatial systems, and machine learning while competing in hackathons and growing DSA problem-solving skills.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "career-info-box",
                children: [
                  e.jsxs("div", {
                    className: "career-info-in",
                    children: [
                      e.jsxs("div", {
                        className: "career-role",
                        children: [
                          e.jsx("h4", { children: "Grade 12" }),
                          e.jsx("h5", {
                            children: "Delhi Public School, Varanasi",
                          }),
                        ],
                      }),
                      e.jsx("h3", { children: "2019–22" }),
                    ],
                  }),
                  e.jsx("p", {
                    children:
                      "Completed Class 12 (CBSE) with 80.6% and Class 10 (CBSE) with 86.2%. Foundation in Mathematics and Computer Science that led to a passion for building technology solutions.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
var L = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  S = u.createContext && u.createContext(L),
  D = ["attr", "size", "title"];
function _(s, t) {
  if (s == null) return {};
  var a,
    r,
    n = B(s, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    for (r = 0; r < i.length; r++)
      ((a = i[r]),
        t.indexOf(a) === -1 &&
          {}.propertyIsEnumerable.call(s, a) &&
          (n[a] = s[a]));
  }
  return n;
}
function B(s, t) {
  if (s == null) return {};
  var a = {};
  for (var r in s)
    if ({}.hasOwnProperty.call(s, r)) {
      if (t.indexOf(r) !== -1) continue;
      a[r] = s[r];
    }
  return a;
}
function v() {
  return (
    (v = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a) ({}).hasOwnProperty.call(a, r) && (s[r] = a[r]);
          }
          return s;
        }),
    v.apply(null, arguments)
  );
}
function E(s, t) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    (t &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(s, n).enumerable;
      })),
      a.push.apply(a, r));
  }
  return a;
}
function p(s) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? E(Object(a), !0).forEach(function (r) {
          W(s, r, a[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
        : E(Object(a)).forEach(function (r) {
            Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(a, r));
          });
  }
  return s;
}
function W(s, t, a) {
  return (
    (t = G(t)) in s
      ? Object.defineProperty(s, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[t] = a),
    s
  );
}
function G(s) {
  var t = F(s, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F(s, t) {
  if (typeof s != "object" || !s) return s;
  var a = s[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(s, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(s);
}
function P(s) {
  return (
    s &&
    s.map((t, a) => u.createElement(t.tag, p({ key: a }, t.attr), P(t.child)))
  );
}
function h(s) {
  return (t) => u.createElement(H, v({ attr: p({}, s.attr) }, t), P(s.child));
}
function H(s) {
  var t = (a) => {
    var { attr: r, size: n, title: i } = s,
      c = _(s, D),
      l = n || a.size || "1em",
      o;
    return (
      a.className && (o = a.className),
      s.className && (o = (o ? o + " " : "") + s.className),
      u.createElement(
        "svg",
        v(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          r,
          c,
          {
            className: o,
            style: p(p({ color: s.color || a.color }, a.style), s.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && u.createElement("title", null, i),
        s.children,
      )
    );
  };
  return S !== void 0 ? u.createElement(S.Consumer, null, (a) => t(a)) : t(L);
}
function V(s) {
  return h({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" },
        child: [],
      },
    ],
  })(s);
}
function U(s) {
  return h({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        },
        child: [],
      },
    ],
  })(s);
}
function K(s) {
  return h({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
        },
        child: [],
      },
    ],
  })(s);
}
function q(s) {
  return h({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
        },
        child: [],
      },
    ],
  })(s);
}
function N(s) {
  return h({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" },
        child: [],
      },
    ],
  })(s);
}
const $ = () =>
    e.jsx("div", {
      className: "contact-section section-container",
      id: "contact",
      children: e.jsxs("div", {
        className: "contact-container",
        children: [
          e.jsx("h3", { children: "Contact" }),
          e.jsxs("div", {
            className: "contact-flex",
            children: [
              e.jsxs("div", {
                className: "contact-box",
                children: [
                  e.jsx("h4", { children: "Connect" }),
                  e.jsx("p", {
                    children: e.jsx("a", {
                      href: "https://www.linkedin.com/in/anshumaan-anand-a08a29238",
                      target: "_blank",
                      rel: "noreferrer",
                      "data-cursor": "disable",
                      children: "LinkedIn — anshumaananand",
                    }),
                  }),
                  e.jsx("h4", { children: "Education" }),
                  e.jsx("p", {
                    children:
                      "B.Tech Computer Science & Engineering, KIIT University, Bhubaneswar — Expected 2027",
                  }),
                  e.jsx("p", {
                    children:
                      "Delhi Public School, Varanasi — Grade 12 (CBSE): 80.6%",
                  }),
                  e.jsx("h4", { children: "Email" }),
                  e.jsx("p", {
                    children: e.jsx("a", {
                      href: "mailto:anshumaananand2005@gmail.com",
                      "data-cursor": "disable",
                      children: "anshumaananand2005@gmail.com",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "contact-box",
                children: [
                  e.jsx("h4", { children: "Social" }),
                  e.jsxs("a", {
                    href: "https://github.com/ANSHUMAAN2023",
                    target: "_blank",
                    rel: "noreferrer",
                    "data-cursor": "disable",
                    className: "contact-social",
                    children: ["GitHub ", e.jsx(N, {})],
                  }),
                  e.jsxs("a", {
                    href: "https://www.linkedin.com/in/anshumaan-anand-a08a29238",
                    target: "_blank",
                    rel: "noreferrer",
                    "data-cursor": "disable",
                    className: "contact-social",
                    children: ["LinkedIn ", e.jsx(N, {})],
                  }),
                  e.jsx("h4", { children: "Location" }),
                  e.jsxs("p", {
                    style: { fontWeight: 300, marginTop: 8 },
                    children: [
                      "Bhubaneswar, India",
                      e.jsx("br", {}),
                      "+91 8630600086",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "contact-box",
                children: [
                  e.jsxs("h2", {
                    children: [
                      "Designed and Developed ",
                      e.jsx("br", {}),
                      " by ",
                      e.jsx("span", { children: "Anshumaan Anand" }),
                    ],
                  }),
                  e.jsxs("h5", { children: [e.jsx(q, {}), " 2026"] }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  J = () => {
    const s = d.useRef(null);
    return (
      d.useEffect(() => {
        let t = !1;
        const a = s.current,
          r = { x: 0, y: 0 },
          n = { x: 0, y: 0 };
        (document.addEventListener("mousemove", (i) => {
          ((r.x = i.clientX), (r.y = i.clientY));
        }),
          requestAnimationFrame(function i() {
            (t ||
              ((n.x += (r.x - n.x) / 6),
              (n.y += (r.y - n.y) / 6),
              x.to(a, { x: n.x, y: n.y, duration: 0.1 })),
              requestAnimationFrame(i));
          }),
          document.querySelectorAll("[data-cursor]").forEach((i) => {
            const c = i;
            (c.addEventListener("mouseover", (l) => {
              const m = l.currentTarget.getBoundingClientRect();
              (c.dataset.cursor === "icons" &&
                (a.classList.add("cursor-icons"),
                x.to(a, { x: m.left, y: m.top, duration: 0.1 }),
                a.style.setProperty("--cursorH", `${m.height}px`),
                (t = !0)),
                c.dataset.cursor === "disable" &&
                  a.classList.add("cursor-disable"));
            }),
              c.addEventListener("mouseout", () => {
                (a.classList.remove("cursor-disable", "cursor-icons"),
                  (t = !1));
              }));
          }));
      }, []),
      e.jsx("div", { className: "cursor-main", ref: s })
    );
  },
  X = ({ children: s }) =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "landing-section",
        id: "landingDiv",
        children: [
          e.jsxs("div", {
            className: "landing-container",
            children: [
              e.jsxs("div", {
                className: "landing-intro",
                children: [
                  e.jsx("h2", { children: "Hello! I'm" }),
                  e.jsxs("h1", {
                    children: [
                      "ANSHUMAAN",
                      e.jsx("br", {}),
                      e.jsx("span", { children: "ANAND" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "landing-info",
                children: [
                  e.jsx("h3", { children: "Software Engineer &" }),
                  e.jsxs("h2", {
                    className: "landing-info-h2",
                    children: [
                      e.jsx("div", {
                        className: "landing-h2-1",
                        children: "Full-Stack",
                      }),
                      e.jsx("div", {
                        className: "landing-h2-2",
                        children: "GeoSpatial",
                      }),
                    ],
                  }),
                  e.jsxs("h2", {
                    children: [
                      e.jsx("div", {
                        className: "landing-h2-info",
                        children: "GeoSpatial",
                      }),
                      e.jsx("div", {
                        className: "landing-h2-info-1",
                        children: "Full-Stack",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s,
        ],
      }),
    });
function Y(s) {
  return h({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(s);
}
function Q(s) {
  return h({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(s);
}
function Z(s) {
  return h({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M9 7l6 0" }, child: [] },
      { tag: "path", attr: { d: "M9 11l6 0" }, child: [] },
      { tag: "path", attr: { d: "M9 15l4 0" }, child: [] },
    ],
  })(s);
}
const ee = () => (
    d.useEffect(() => {
      document
        .getElementById("social")
        .querySelectorAll("span")
        .forEach((t) => {
          const a = t,
            r = a.querySelector("a"),
            n = a.getBoundingClientRect();
          let i = n.width / 2,
            c = n.height / 2,
            l = 0,
            o = 0;
          const m = () => {
              ((l += (i - l) * 0.1),
                (o += (c - o) * 0.1),
                r.style.setProperty("--siLeft", `${l}px`),
                r.style.setProperty("--siTop", `${o}px`),
                requestAnimationFrame(m));
            },
            y = (k) => {
              const f = k.clientX - n.left,
                w = k.clientY - n.top;
              f < 40 && f > 10 && w < 40 && w > 5
                ? ((i = f), (c = w))
                : ((i = n.width / 2), (c = n.height / 2));
            };
          return (
            document.addEventListener("mousemove", y),
            m(),
            () => {
              a.removeEventListener("mousemove", y);
            }
          );
        });
    }, []),
    e.jsxs("div", {
      className: "icons-section",
      children: [
        e.jsxs("div", {
          className: "social-icons",
          "data-cursor": "icons",
          id: "social",
          children: [
            e.jsx("span", {
              children: e.jsx("a", {
                href: "https://github.com/ANSHUMAAN2023",
                target: "_blank",
                rel: "noreferrer",
                children: e.jsx(Q, {}),
              }),
            }),
            e.jsx("span", {
              children: e.jsx("a", {
                href: "https://www.linkedin.com/in/anshumaan-anand-a08a29238",
                target: "_blank",
                rel: "noreferrer",
                children: e.jsx(Y, {}),
              }),
            }),
            e.jsx("span", {
              children: e.jsx("a", {
                href: "mailto:anshumaananand2005@gmail.com",
                children: e.jsx(K, {}),
              }),
            }),
          ],
        }),
        e.jsxs("a", {
          className: "resume-button",
          href: "/Anshumaan_Anand_Resume_v3.docx",
          target: "_blank",
          rel: "noreferrer",
          children: [
            e.jsx(C, { text: "RESUME" }),
            e.jsx("span", { children: e.jsx(Z, {}) }),
          ],
        }),
      ],
    })
  ),
  se = () => {
    const s = d.useRef([]),
      t = (a, r) => {
        s.current[r] = a;
      };
    return (
      d.useEffect(
        () => (
          g.isTouch &&
            s.current.forEach((a) => {
              a &&
                (a.classList.remove("what-noTouch"),
                a.addEventListener("click", () => I(a)));
            }),
          () => {
            s.current.forEach((a) => {
              a && a.removeEventListener("click", () => I(a));
            });
          }
        ),
        [],
      ),
      e.jsxs("div", {
        className: "whatIDO",
        children: [
          e.jsx("div", {
            className: "what-box",
            children: e.jsxs("h2", {
              className: "title",
              children: [
                "W",
                e.jsx("span", { className: "hat-h2", children: "HAT" }),
                e.jsxs("div", {
                  children: [
                    "I",
                    e.jsx("span", { className: "do-h2", children: " DO" }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "what-box",
            children: e.jsxs("div", {
              className: "what-box-in",
              children: [
                e.jsx("div", {
                  className: "what-border2",
                  children: e.jsxs("svg", {
                    width: "100%",
                    children: [
                      e.jsx("line", {
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "100%",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeDasharray: "7,7",
                      }),
                      e.jsx("line", {
                        x1: "100%",
                        y1: "0",
                        x2: "100%",
                        y2: "100%",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeDasharray: "7,7",
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "what-content what-noTouch",
                  ref: (a) => t(a, 0),
                  children: [
                    e.jsx("div", {
                      className: "what-border1",
                      children: e.jsxs("svg", {
                        height: "100%",
                        children: [
                          e.jsx("line", {
                            x1: "0",
                            y1: "0",
                            x2: "100%",
                            y2: "0",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeDasharray: "6,6",
                          }),
                          e.jsx("line", {
                            x1: "0",
                            y1: "100%",
                            x2: "100%",
                            y2: "100%",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeDasharray: "6,6",
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", { className: "what-corner" }),
                    e.jsxs("div", {
                      className: "what-content-in",
                      children: [
                        e.jsx("h3", { children: "GEOSPATIAL & GIS" }),
                        e.jsx("h4", {
                          children: "Real-Time Disaster & Mapping Systems",
                        }),
                        e.jsx("p", {
                          children:
                            "Building interactive geospatial dashboards and real-time disaster response tools — from seismic hazard maps to spatial data pipelines using satellite and sensor data.",
                        }),
                        e.jsx("h5", { children: "Skillset & tools" }),
                        e.jsxs("div", {
                          className: "what-content-flex",
                          children: [
                            e.jsx("div", {
                              className: "what-tags",
                              children: "MapLibre GL JS",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "Leaflet.js",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "PostGIS",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "GeoJSON / Turf.js",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "GeoTIFF",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "Socket.IO",
                            }),
                          ],
                        }),
                        e.jsx("div", { className: "what-arrow" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "what-content what-noTouch",
                  ref: (a) => t(a, 1),
                  children: [
                    e.jsx("div", {
                      className: "what-border1",
                      children: e.jsx("svg", {
                        height: "100%",
                        children: e.jsx("line", {
                          x1: "0",
                          y1: "100%",
                          x2: "100%",
                          y2: "100%",
                          stroke: "white",
                          strokeWidth: "2",
                          strokeDasharray: "6,6",
                        }),
                      }),
                    }),
                    e.jsx("div", { className: "what-corner" }),
                    e.jsxs("div", {
                      className: "what-content-in",
                      children: [
                        e.jsx("h3", { children: "FULL-STACK & ML" }),
                        e.jsx("h4", {
                          children: "End-to-End Web Apps & AI Pipelines",
                        }),
                        e.jsx("p", {
                          children:
                            "I build full-stack MERN applications and machine learning pipelines — from REST APIs and real-time backends to trained models deployed with FastAPI for real-world predictions.",
                        }),
                        e.jsx("h5", { children: "Skillset & tools" }),
                        e.jsxs("div", {
                          className: "what-content-flex",
                          children: [
                            e.jsx("div", {
                              className: "what-tags",
                              children: "React / Node.js",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "Python / FastAPI",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "scikit-learn",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "TensorFlow",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "PostgreSQL / MongoDB",
                            }),
                            e.jsx("div", {
                              className: "what-tags",
                              children: "Docker",
                            }),
                          ],
                        }),
                        e.jsx("div", { className: "what-arrow" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
function I(s) {
  (s.classList.toggle("what-content-active"),
    s.classList.remove("what-sibling"),
    s.parentElement &&
      Array.from(s.parentElement.children).forEach((a) => {
        a !== s &&
          (a.classList.remove("what-content-active"),
          a.classList.toggle("what-sibling"));
      }));
}
const ae = (s) => {
    const [t, a] = d.useState(!1),
      [r, n] = d.useState(""),
      i = async () => {
        if (s.video) {
          a(!0);
          const l = await (await fetch(`src/assets/${s.video}`)).blob(),
            o = URL.createObjectURL(l);
          n(o);
        }
      };
    return e.jsx("div", {
      className: "work-image",
      children: e.jsxs("a", {
        className: "work-image-in",
        href: s.link,
        onMouseEnter: i,
        onMouseLeave: () => a(!1),
        target: "_blank",
        "data-cursor": "disable",
        children: [
          s.link &&
            e.jsx("div", { className: "work-link", children: e.jsx(N, {}) }),
          e.jsx("img", { src: s.image, alt: s.alt }),
          t &&
            e.jsx("video", {
              src: r,
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              loop: !0,
            }),
        ],
      }),
    });
  },
  j = [
    {
      title: "AI Agent with Memory & Tool Use",
      category: "AI/ML Application",
      tools:
        "Python, FastAPI, LangGraph, Groq (Llama 3), PostgreSQL, React 19, Vite",
      image: "/images/placeholder.webp",
      link: "https://github.com/ANSHUMAAN2023",
    },
    {
      title: "Hazard Map",
      category: "Real-Time Disaster Response GIS Dashboard",
      tools:
        "React 19, Vite, FastAPI, MapLibre GL JS, PostgreSQL/PostGIS, WebSocket, Docker",
      image: "/images/placeholder.webp",
      link: "https://github.com/ANSHUMAAN2023",
    },
    {
      title: "Attendance Risk Prediction System",
      category: "ML-Powered Student Analytics",
      tools: "Python, Pandas, scikit-learn, FastAPI",
      image: "/images/placeholder.webp",
      link: "https://github.com/ANSHUMAAN2023",
    },
  ],
  te = () => {
    const [s, t] = d.useState(0),
      [a, r] = d.useState(!1),
      n = d.useCallback(
        (l) => {
          a || (r(!0), t(l), setTimeout(() => r(!1), 500));
        },
        [a],
      ),
      i = d.useCallback(() => {
        const l = s === 0 ? j.length - 1 : s - 1;
        n(l);
      }, [s, n]),
      c = d.useCallback(() => {
        const l = s === j.length - 1 ? 0 : s + 1;
        n(l);
      }, [s, n]);
    return e.jsx("div", {
      className: "work-section",
      id: "work",
      children: e.jsxs("div", {
        className: "work-container section-container",
        children: [
          e.jsxs("h2", {
            children: ["My ", e.jsx("span", { children: "Work" })],
          }),
          e.jsxs("div", {
            className: "carousel-wrapper",
            children: [
              e.jsx("button", {
                className: "carousel-arrow carousel-arrow-left",
                onClick: i,
                "aria-label": "Previous project",
                "data-cursor": "disable",
                children: e.jsx(U, {}),
              }),
              e.jsx("button", {
                className: "carousel-arrow carousel-arrow-right",
                onClick: c,
                "aria-label": "Next project",
                "data-cursor": "disable",
                children: e.jsx(V, {}),
              }),
              e.jsx("div", {
                className: "carousel-track-container",
                children: e.jsx("div", {
                  className: "carousel-track",
                  style: { transform: `translateX(-${s * 100}%)` },
                  children: j.map((l, o) =>
                    e.jsx(
                      "div",
                      {
                        className: "carousel-slide",
                        children: e.jsxs("div", {
                          className: "carousel-content",
                          children: [
                            e.jsxs("div", {
                              className: "carousel-info",
                              children: [
                                e.jsx("div", {
                                  className: "carousel-number",
                                  children: e.jsxs("h3", {
                                    children: ["0", o + 1],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "carousel-details",
                                  children: [
                                    e.jsx("h4", { children: l.title }),
                                    e.jsx("p", {
                                      className: "carousel-category",
                                      children: l.category,
                                    }),
                                    e.jsxs("div", {
                                      className: "carousel-tools",
                                      children: [
                                        e.jsx("span", {
                                          className: "tools-label",
                                          children: "Tools & Stack",
                                        }),
                                        e.jsx("p", { children: l.tools }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      o,
                    ),
                  ),
                }),
              }),
              e.jsx("div", {
                className: "carousel-dots",
                children: j.map((l, o) =>
                  e.jsx(
                    "button",
                    {
                      className: `carousel-dot ${o === s ? "carousel-dot-active" : ""}`,
                      onClick: () => n(o),
                      "aria-label": `Go to project ${o + 1}`,
                      "data-cursor": "disable",
                    },
                    o,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    });
  };
x.registerPlugin(g, T, b);
function M() {
  if ((g.config({ ignoreMobileResize: !0 }), window.innerWidth < 900)) return;
  const s = document.querySelectorAll(".para"),
    t = document.querySelectorAll(".title"),
    a = window.innerWidth <= 1024 ? "top 60%" : "20% 60%",
    r = "play pause resume reverse";
  (s.forEach((n) => {
    var i, c;
    (n.classList.add("visible"),
      n.anim &&
        (n.anim.progress(1).kill(), (i = n.split) == null || i.revert()),
      (n.split = new b(n, { type: "lines,words", linesClass: "split-line" })),
      (n.anim = x.fromTo(
        n.split.words,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: (c = n.parentElement) == null ? void 0 : c.parentElement,
            toggleActions: r,
            start: a,
          },
          duration: 1,
          ease: "power3.out",
          y: 0,
          stagger: 0.02,
        },
      )));
  }),
    t.forEach((n) => {
      var i, c;
      (n.anim &&
        (n.anim.progress(1).kill(), (i = n.split) == null || i.revert()),
        (n.split = new b(n, { type: "chars,lines", linesClass: "split-line" })),
        (n.anim = x.fromTo(
          n.split.chars,
          { autoAlpha: 0, y: 80, rotate: 10 },
          {
            autoAlpha: 1,
            scrollTrigger: {
              trigger: (c = n.parentElement) == null ? void 0 : c.parentElement,
              toggleActions: r,
              start: a,
            },
            duration: 0.8,
            ease: "power2.inOut",
            y: 0,
            rotate: 0,
            stagger: 0.03,
          },
        )));
    }),
    g.addEventListener("refresh", () => M()));
}
const re = d.lazy(() =>
    A(() => import("./TechStack-jD2Lk2vs.js"), __vite__mapDeps([0, 1, 2, 3])),
  ),
  ce = ({ children: s }) => {
    const [t, a] = d.useState(window.innerWidth > 1024);
    return (
      d.useEffect(() => {
        const r = () => {
          (M(), a(window.innerWidth > 1024));
        };
        return (
          r(),
          window.addEventListener("resize", r),
          () => {
            window.removeEventListener("resize", r);
          }
        );
      }, [t]),
      e.jsxs("div", {
        className: "container-main",
        children: [
          e.jsx(J, {}),
          e.jsx(z, {}),
          e.jsx(ee, {}),
          t && s,
          e.jsx("div", {
            id: "smooth-wrapper",
            children: e.jsx("div", {
              id: "smooth-content",
              children: e.jsxs("div", {
                className: "container-main",
                children: [
                  e.jsx(X, { children: !t && s }),
                  e.jsx(O, {}),
                  e.jsx(se, {}),
                  e.jsx(R, {}),
                  e.jsx(te, {}),
                  t &&
                    e.jsx(d.Suspense, {
                      fallback: e.jsx("div", { children: "Loading...." }),
                      children: e.jsx(re, {}),
                    }),
                  e.jsx($, {}),
                ],
              }),
            }),
          }),
        ],
      })
    );
  };
export { ce as default };
