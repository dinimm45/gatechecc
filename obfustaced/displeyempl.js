function _0x2741(_0x54ef70, _0x246797) {
  const _0x974ea = _0x974e();
  return (
    (_0x2741 = function (_0x2741ea, _0x312431) {
      _0x2741ea = _0x2741ea - 0xe3;
      let _0x155f8f = _0x974ea[_0x2741ea];
      return _0x155f8f;
    }),
    _0x2741(_0x54ef70, _0x246797)
  );
}
const _0x7db985 = _0x2741;
function _0x974e() {
  const _0x5f3b36 = [
    "sort",
    "17857pZrknz",
    "Name:\x20",
    "toDate",
    "274PVnfcn",
    "doc",
    "errorMessage",
    "1:995789907234:web:54edcc689b1c894594717b",
    "5128GYoXtV",
    "summary",
    "initializeApp",
    "display",
    "lastCheckInTime",
    "firstName",
    "Check-ins",
    "className",
    "innerHTML",
    "fromNow",
    "eventsdb-b6aaf.appspot.com",
    "span",
    "199085OQojOW",
    "data",
    "textContent",
    "checkOutTimes",
    "toFixed",
    "appendChild",
    "card-body",
    "68gbrwvv",
    "createElement",
    "lastName",
    "checkInTimes",
    "firestore",
    "div",
    "employers",
    "Error\x20getting\x20documents:\x20",
    "forEach",
    "push",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "getElementById",
    "Check-outs",
    "isArray",
    "ads",
    "2396478xpXrbg",
    "empty",
    "none",
    "2893nUUQns",
    "details",
    "1476621pLLaRt",
    "mr-3",
    "card",
    "2418hrVnoM",
    "Last\x20check-in:\x20",
    "get",
    "eventsdb-b6aaf",
    "log",
    "eventsdb-b6aaf.firebaseapp.com",
    "6178496WwhulP",
    "995789907234",
    "22030WHuljE",
    "collection",
    "style",
  ];
  _0x974e = function () {
    return _0x5f3b36;
  };
  return _0x974e();
}
(function (_0x269b1d, _0x451e31) {
  const _0x6fb1f = _0x2741,
    _0x379fd1 = _0x269b1d();
  while (!![]) {
    try {
      const _0x2bdfcd =
        (-parseInt(_0x6fb1f(0xf3)) / 0x1) * (parseInt(_0x6fb1f(0xf7)) / 0x2) +
        parseInt(_0x6fb1f(0x119)) / 0x3 +
        (-parseInt(_0x6fb1f(0x10a)) / 0x4) *
          (-parseInt(_0x6fb1f(0x103)) / 0x5) +
        (-parseInt(_0x6fb1f(0xe4)) / 0x6) * (-parseInt(_0x6fb1f(0xf0)) / 0x7) +
        -parseInt(_0x6fb1f(0xea)) / 0x8 +
        parseInt(_0x6fb1f(0x11e)) / 0x9 +
        (parseInt(_0x6fb1f(0xec)) / 0xa) * (-parseInt(_0x6fb1f(0x11c)) / 0xb);
      if (_0x2bdfcd === _0x451e31) break;
      else _0x379fd1["push"](_0x379fd1["shift"]());
    } catch (_0x1c488c) {
      _0x379fd1["push"](_0x379fd1["shift"]());
    }
  }
})(_0x974e, 0x95ce0);
const firebaseConfig = {
  apiKey: _0x7db985(0x114),
  authDomain: _0x7db985(0xe9),
  projectId: _0x7db985(0xe7),
  storageBucket: _0x7db985(0x101),
  messagingSenderId: _0x7db985(0xeb),
  appId: _0x7db985(0xf6),
  measurementId: "G-J0DC7YW8J4",
};
firebase[_0x7db985(0xf9)](firebaseConfig);
const db = firebase[_0x7db985(0x10e)]();
function showEmployers() {
  const _0xf29fba = _0x7db985,
    _0x588db9 = document[_0xf29fba(0x115)]("companyName")["value"],
    _0x4651e7 = document["getElementById"]("employersList");
  _0x4651e7[_0xf29fba(0xff)] = "";
  const _0x297563 = document["getElementById"](_0xf29fba(0x118));
  (_0x297563[_0xf29fba(0xee)]["display"] = _0xf29fba(0x11b)),
    db[_0xf29fba(0xed)]("companies")
      [_0xf29fba(0xf4)](_0x588db9)
      [_0xf29fba(0xed)](_0xf29fba(0x110))
      [_0xf29fba(0xe6)]()
      ["then"]((_0x27e337) => {
        const _0x336e4b = _0xf29fba;
        if (_0x27e337[_0x336e4b(0x11a)])
          document[_0x336e4b(0x115)](_0x336e4b(0xf5))["style"][
            _0x336e4b(0xfa)
          ] = "block";
        else {
          const _0x1d2e8f = [];
          _0x27e337["forEach"]((_0xff34c4) => {
            const _0x1d5c43 = _0x336e4b,
              _0x527b5f = _0xff34c4[_0x1d5c43(0x104)]();
            (_0x527b5f["id"] = _0xff34c4["id"]),
              _0x1d2e8f[_0x1d5c43(0x113)](_0x527b5f);
          }),
            _0x1d2e8f[_0x336e4b(0xef)]((_0x4a9d51, _0xf7cbdb) => {
              const _0x62ec3d = _0x336e4b;
              if (_0x4a9d51[_0x62ec3d(0xfb)] < _0xf7cbdb["lastCheckInTime"])
                return 0x1;
              if (_0x4a9d51["lastCheckInTime"] > _0xf7cbdb[_0x62ec3d(0xfb)])
                return -0x1;
              return 0x0;
            }),
            _0x1d2e8f[_0x336e4b(0x112)]((_0x1e0a9e) => {
              const _0x41a86c = _0x336e4b,
                _0x4e479c = document[_0x41a86c(0x10b)]("li");
              _0x4e479c["className"] = "employer-item";
              const _0x94b797 = document[_0x41a86c(0x10b)](_0x41a86c(0x10f));
              _0x94b797["className"] = _0x41a86c(0xe3);
              const _0x1f1041 = document["createElement"]("div");
              _0x1f1041[_0x41a86c(0xfe)] = _0x41a86c(0x109);
              const _0x2dd1f7 = document[_0x41a86c(0x10b)]("span");
              (_0x2dd1f7[_0x41a86c(0x105)] =
                _0x41a86c(0xf1) +
                _0x1e0a9e[_0x41a86c(0xfc)] +
                "\x20" +
                _0x1e0a9e[_0x41a86c(0x10c)]),
                (_0x2dd1f7["className"] = _0x41a86c(0x11f)),
                _0x1f1041[_0x41a86c(0x108)](_0x2dd1f7);
              if (_0x1e0a9e[_0x41a86c(0xfb)]) {
                const _0x519200 = document[_0x41a86c(0x10b)](_0x41a86c(0x102));
                (_0x519200["textContent"] =
                  _0x41a86c(0xe5) +
                  moment(_0x1e0a9e[_0x41a86c(0xfb)][_0x41a86c(0xf2)]())[
                    _0x41a86c(0x100)
                  ]()),
                  _0x1f1041["appendChild"](_0x519200);
              }
              const _0x1e7f71 = document[_0x41a86c(0x10b)](_0x41a86c(0x11d)),
                _0x5a0bfb = document[_0x41a86c(0x10b)]("summary");
              (_0x5a0bfb["textContent"] = _0x41a86c(0xfd)),
                _0x1e7f71[_0x41a86c(0x108)](_0x5a0bfb);
              const _0x55639d = document[_0x41a86c(0x10b)](_0x41a86c(0x11d)),
                _0x1ce6bd = document[_0x41a86c(0x10b)](_0x41a86c(0xf8));
              (_0x1ce6bd["textContent"] = _0x41a86c(0x116)),
                _0x55639d[_0x41a86c(0x108)](_0x1ce6bd);
              if (Array[_0x41a86c(0x117)](_0x1e0a9e[_0x41a86c(0x10d)])) {
                const _0x358901 = document[_0x41a86c(0x10b)]("ul");
                _0x1e0a9e[_0x41a86c(0x10d)][_0x41a86c(0x112)]((_0x31edaa) => {
                  const _0x5a68fa = _0x41a86c,
                    _0x12ae76 = document[_0x5a68fa(0x10b)]("li");
                  (_0x12ae76[_0x5a68fa(0x105)] = _0x31edaa[_0x5a68fa(0xf2)]()),
                    _0x358901[_0x5a68fa(0x108)](_0x12ae76);
                }),
                  _0x1e7f71[_0x41a86c(0x108)](_0x358901);
              }
              if (Array[_0x41a86c(0x117)](_0x1e0a9e[_0x41a86c(0x106)])) {
                const _0x5cec3e = document[_0x41a86c(0x10b)]("ul");
                _0x1e0a9e[_0x41a86c(0x106)]["forEach"]((_0xb5d2ca) => {
                  const _0x3d9912 = _0x41a86c,
                    _0x50e324 = document["createElement"]("li");
                  (_0x50e324["textContent"] = _0xb5d2ca["toDate"]()),
                    _0x5cec3e[_0x3d9912(0x108)](_0x50e324);
                }),
                  _0x55639d["appendChild"](_0x5cec3e);
              }
              let _0x11adad = 0x0;
              if (
                Array[_0x41a86c(0x117)](_0x1e0a9e[_0x41a86c(0x10d)]) &&
                Array[_0x41a86c(0x117)](_0x1e0a9e[_0x41a86c(0x106)])
              )
                for (
                  let _0x21394e = 0x0;
                  _0x21394e < _0x1e0a9e[_0x41a86c(0x10d)]["length"];
                  _0x21394e++
                ) {
                  const _0x35c148 =
                      _0x1e0a9e[_0x41a86c(0x10d)][_0x21394e][_0x41a86c(0xf2)](),
                    _0x30c78b = _0x1e0a9e[_0x41a86c(0x106)][_0x21394e]
                      ? _0x1e0a9e[_0x41a86c(0x106)][_0x21394e]["toDate"]()
                      : new Date(),
                    _0xf0b80b = (_0x30c78b - _0x35c148) / (0x3e8 * 0x3c * 0x3c);
                  _0x11adad += _0xf0b80b;
                }
              const _0x514beb = document["createElement"](_0x41a86c(0x102));
              (_0x514beb[_0x41a86c(0x105)] =
                "\x20:Total\x20working\x20hours:\x20" +
                _0x11adad[_0x41a86c(0x107)](0x2)),
                _0x1f1041[_0x41a86c(0x108)](_0x514beb),
                _0x1f1041[_0x41a86c(0x108)](_0x1e7f71),
                _0x1f1041[_0x41a86c(0x108)](_0x55639d),
                _0x94b797[_0x41a86c(0x108)](_0x1f1041),
                _0x4e479c[_0x41a86c(0x108)](_0x94b797),
                _0x4651e7[_0x41a86c(0x108)](_0x4e479c);
            }),
            (document[_0x336e4b(0x115)]("errorMessage")[_0x336e4b(0xee)][
              _0x336e4b(0xfa)
            ] = _0x336e4b(0x11b));
        }
      })
      ["catch"]((_0x2e259e) => {
        const _0x1abc71 = _0xf29fba;
        console[_0x1abc71(0xe8)](_0x1abc71(0x111), _0x2e259e);
      });
}
