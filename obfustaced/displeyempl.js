const _0x5edfff = _0x53ed;
(function (_0x808c43, _0x2627f1) {
  const _0x4a179f = _0x53ed,
    _0x4c5257 = _0x808c43();
  while (!![]) {
    try {
      const _0x12238d =
        parseInt(_0x4a179f(0x195)) / 0x1 +
        parseInt(_0x4a179f(0x183)) / 0x2 +
        parseInt(_0x4a179f(0x170)) / 0x3 +
        parseInt(_0x4a179f(0x164)) / 0x4 +
        -parseInt(_0x4a179f(0x167)) / 0x5 +
        parseInt(_0x4a179f(0x175)) / 0x6 +
        (-parseInt(_0x4a179f(0x181)) / 0x7) *
          (parseInt(_0x4a179f(0x171)) / 0x8);
      if (_0x12238d === _0x2627f1) break;
      else _0x4c5257["push"](_0x4c5257["shift"]());
    } catch (_0x4f3342) {
      _0x4c5257["push"](_0x4c5257["shift"]());
    }
  }
})(_0x3143, 0x82be4);
const firebaseConfig = {
  apiKey: "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
  authDomain: _0x5edfff(0x154),
  projectId: _0x5edfff(0x169),
  storageBucket: _0x5edfff(0x159),
  messagingSenderId: "995789907234",
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: "G-J0DC7YW8J4",
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x5edfff(0x193)]();
let allEmployers = [];
function _0x3143() {
  const _0x4b6cb0 = [
    "isArray",
    "10409tyRhUp",
    "length",
    "866264auUhLo",
    "showEmployersButton",
    "companies",
    "resetButton",
    "checkOutTime",
    "empty",
    "lastName",
    "filter",
    "toLowerCase",
    "keys",
    "toFixed",
    "\x20hours",
    "checkIns",
    "push",
    "Name\x20:\x20",
    "getElementById",
    "firestore",
    "details",
    "317673LYowDz",
    "collection",
    "reverse",
    "Check-in:\x20",
    "errorMessage",
    "mr-3",
    "searchButton",
    "firstName",
    "catch",
    "lastCheckInTime",
    "month",
    ",\x20Working\x20hours:\x20",
    "checkOutTimes",
    "ads",
    "createElement",
    "employer-item",
    "summary",
    "display",
    "eventsdb-b6aaf.firebaseapp.com",
    "includes",
    "LLL",
    "employersList",
    "className",
    "eventsdb-b6aaf.appspot.com",
    "textContent",
    "format",
    "log",
    "value",
    "isSame",
    "card-body",
    "\x20Last\x20check-in\x20:\x20",
    "checkInTimes",
    "appendChild",
    "workingHours",
    "217728Vnyhsh",
    "doc",
    "div",
    "393135WszAVr",
    "companyName",
    "eventsdb-b6aaf",
    "toDate",
    "span",
    ",\x20Check-out:\x20",
    "searchEmployersInput",
    "none",
    "innerHTML",
    "1162125NSoFBy",
    "7400XLhsNz",
    "employers",
    "getMonth",
    "then",
    "4782084oMMIwP",
    "checkInTime",
    "MMMM\x20YYYY",
    "sort",
    "phoneNumber",
    "style",
    "block",
    "Monthly\x20Working\x20Hours\x20Record",
    "forEach",
    "fromNow",
    "data",
  ];
  _0x3143 = function () {
    return _0x4b6cb0;
  };
  return _0x3143();
}
function getYearMonth(_0x417da4) {
  const _0x271cbe = _0x5edfff,
    _0x38a883 = _0x417da4["getFullYear"](),
    _0x512a95 = _0x417da4[_0x271cbe(0x173)]() + 0x1;
  return _0x38a883 + "-" + (_0x512a95 < 0xa ? "0" + _0x512a95 : _0x512a95);
}
function createAndAppendEmployers(_0x4ce3b2, _0x17b0bc) {
  _0x4ce3b2["forEach"]((_0x3e172c) => {
    const _0x4b66de = _0x53ed,
      _0x3b381d = document["createElement"]("li");
    _0x3b381d[_0x4b66de(0x158)] = _0x4b66de(0x151);
    const _0x20fe1b = document[_0x4b66de(0x150)](_0x4b66de(0x166));
    _0x20fe1b["className"] = "card";
    const _0x226416 = document[_0x4b66de(0x150)](_0x4b66de(0x166));
    _0x226416[_0x4b66de(0x158)] = _0x4b66de(0x15f);
    const _0x4f15b1 = document[_0x4b66de(0x150)](_0x4b66de(0x16b));
    (_0x4f15b1[_0x4b66de(0x15a)] =
      _0x4b66de(0x191) +
      _0x3e172c["firstName"] +
      "\x20" +
      _0x3e172c[_0x4b66de(0x189)]),
      (_0x4f15b1[_0x4b66de(0x158)] = _0x4b66de(0x19a)),
      _0x226416["appendChild"](_0x4f15b1);
    const _0x1fe3e7 = document[_0x4b66de(0x150)]("span");
    (_0x1fe3e7[_0x4b66de(0x15a)] =
      "Phone\x20:\x20" + _0x3e172c[_0x4b66de(0x179)]),
      _0x226416["appendChild"](_0x1fe3e7);
    if (_0x3e172c[_0x4b66de(0x14b)]) {
      const _0x164c9f = document[_0x4b66de(0x150)]("span");
      (_0x164c9f[_0x4b66de(0x15a)] =
        _0x4b66de(0x160) +
        moment(_0x3e172c[_0x4b66de(0x14b)][_0x4b66de(0x16a)]())[
          _0x4b66de(0x17e)
        ]()),
        _0x226416[_0x4b66de(0x162)](_0x164c9f);
    }
    if (
      Array[_0x4b66de(0x180)](_0x3e172c["checkInTimes"]) &&
      Array["isArray"](_0x3e172c["checkOutTimes"])
    ) {
      let _0x29e287 = 0x0;
      const _0x15db09 = {};
      for (
        let _0x3332ac = 0x0;
        _0x3332ac < _0x3e172c[_0x4b66de(0x161)]["length"];
        _0x3332ac++
      ) {
        const _0x236a0d = _0x3e172c["checkInTimes"][_0x3332ac]["toDate"](),
          _0x548e61 = _0x3e172c[_0x4b66de(0x14e)][_0x3332ac]
            ? _0x3e172c[_0x4b66de(0x14e)][_0x3332ac]["toDate"]()
            : new Date(),
          _0x14aff1 = (_0x548e61 - _0x236a0d) / (0x3e8 * 0x3c * 0x3c),
          _0x30f9dd = getYearMonth(_0x236a0d);
        !_0x15db09[_0x30f9dd] &&
          (_0x15db09[_0x30f9dd] = { workingHours: 0x0, checkIns: [] }),
          (_0x15db09[_0x30f9dd][_0x4b66de(0x163)] += _0x14aff1),
          _0x15db09[_0x30f9dd]["checkIns"]["push"]({
            checkInTime: _0x236a0d,
            checkOutTime: _0x548e61,
            workingHours: _0x14aff1,
          }),
          moment(_0x236a0d)[_0x4b66de(0x15e)](new Date(), _0x4b66de(0x14c)) &&
            (_0x29e287 += _0x14aff1);
      }
      const _0x41d2c5 = document[_0x4b66de(0x150)](_0x4b66de(0x16b));
      (_0x41d2c5["textContent"] =
        "\x20Total\x20working\x20hours\x20(current\x20month):\x20" +
        _0x29e287[_0x4b66de(0x18d)](0x2) +
        _0x4b66de(0x18e)),
        _0x226416[_0x4b66de(0x162)](_0x41d2c5);
      const _0x26c43f = document["createElement"](_0x4b66de(0x194)),
        _0x4392c5 = document[_0x4b66de(0x150)](_0x4b66de(0x152));
      (_0x4392c5["textContent"] = _0x4b66de(0x17c)),
        _0x26c43f["appendChild"](_0x4392c5);
      const _0x215f48 = Object[_0x4b66de(0x18c)](_0x15db09)
        [_0x4b66de(0x178)]()
        [_0x4b66de(0x197)]();
      _0x215f48[_0x4b66de(0x17d)]((_0x44a324) => {
        const _0x58bf59 = _0x4b66de,
          _0x43bbab = _0x15db09[_0x44a324],
          _0x397615 = document["createElement"](_0x58bf59(0x194)),
          _0x8b36f2 = document[_0x58bf59(0x150)](_0x58bf59(0x152));
        (_0x8b36f2[_0x58bf59(0x15a)] =
          "Total\x20for\x20" +
          moment(_0x44a324, "YYYY-MM")[_0x58bf59(0x15b)](_0x58bf59(0x177)) +
          ":\x20" +
          _0x43bbab[_0x58bf59(0x163)][_0x58bf59(0x18d)](0x2) +
          _0x58bf59(0x18e)),
          _0x397615[_0x58bf59(0x162)](_0x8b36f2),
          _0x43bbab[_0x58bf59(0x18f)][_0x58bf59(0x17d)]((_0x2198f7) => {
            const _0x59de44 = _0x58bf59,
              _0xe1a334 = document[_0x59de44(0x150)]("li");
            (_0xe1a334[_0x59de44(0x15a)] =
              _0x59de44(0x198) +
              moment(_0x2198f7[_0x59de44(0x176)])["format"](_0x59de44(0x156)) +
              _0x59de44(0x16c) +
              moment(_0x2198f7[_0x59de44(0x187)])[_0x59de44(0x15b)]("LLL") +
              _0x59de44(0x14d) +
              _0x2198f7[_0x59de44(0x163)][_0x59de44(0x18d)](0x2) +
              "\x20hours"),
              _0x397615[_0x59de44(0x162)](_0xe1a334);
          }),
          _0x26c43f[_0x58bf59(0x162)](_0x397615);
      }),
        _0x226416[_0x4b66de(0x162)](_0x26c43f);
    }
    _0x20fe1b[_0x4b66de(0x162)](_0x226416),
      _0x3b381d["appendChild"](_0x20fe1b),
      _0x17b0bc["appendChild"](_0x3b381d);
  });
}
function hideShowBtn() {
  const _0x26b734 = _0x5edfff;
  (document[_0x26b734(0x192)]("companyName")[_0x26b734(0x17a)][
    _0x26b734(0x153)
  ] = _0x26b734(0x16e)),
    (document[_0x26b734(0x192)](_0x26b734(0x184))[_0x26b734(0x17a)]["display"] =
      "none"),
    (document[_0x26b734(0x192)](_0x26b734(0x16d))[_0x26b734(0x17a)]["display"] =
      "block"),
    (document[_0x26b734(0x192)](_0x26b734(0x19b))["style"][_0x26b734(0x153)] =
      _0x26b734(0x17b)),
    (document[_0x26b734(0x192)](_0x26b734(0x186))[_0x26b734(0x17a)][
      _0x26b734(0x153)
    ] = _0x26b734(0x17b));
}
function _0x53ed(_0x3f6dcf, _0x406d97) {
  const _0x314374 = _0x3143();
  return (
    (_0x53ed = function (_0x53ed59, _0x1947ca) {
      _0x53ed59 = _0x53ed59 - 0x14b;
      let _0x1c582a = _0x314374[_0x53ed59];
      return _0x1c582a;
    }),
    _0x53ed(_0x3f6dcf, _0x406d97)
  );
}
function showEmployers() {
  const _0x32830f = _0x5edfff,
    _0x572361 = document[_0x32830f(0x192)](_0x32830f(0x168))[_0x32830f(0x15d)][
      _0x32830f(0x18b)
    ](),
    _0xcf60f5 = document["getElementById"]("employersList");
  _0xcf60f5["innerHTML"] = "";
  const _0x2b7a9b = document[_0x32830f(0x192)](_0x32830f(0x14f));
  (_0x2b7a9b[_0x32830f(0x17a)][_0x32830f(0x153)] = _0x32830f(0x16e)),
    db[_0x32830f(0x196)](_0x32830f(0x185))
      [_0x32830f(0x165)](_0x572361)
      [_0x32830f(0x196)](_0x32830f(0x172))
      ["get"]()
      [_0x32830f(0x174)]((_0xd02e07) => {
        const _0x7f90c8 = _0x32830f;
        if (_0xd02e07[_0x7f90c8(0x188)])
          document["getElementById"](_0x7f90c8(0x199))[_0x7f90c8(0x17a)][
            "display"
          ] = "block";
        else {
          const _0x2fd9d0 = [];
          _0xd02e07[_0x7f90c8(0x17d)]((_0x465412) => {
            const _0x23c9d2 = _0x7f90c8,
              _0x3c81ca = _0x465412[_0x23c9d2(0x17f)]();
            (_0x3c81ca["id"] = _0x465412["id"]),
              _0x2fd9d0[_0x23c9d2(0x190)](_0x3c81ca);
          }),
            (allEmployers = _0x2fd9d0),
            _0x2fd9d0[_0x7f90c8(0x178)]((_0x1e7635, _0x4f757b) => {
              const _0x1c6f77 = _0x7f90c8;
              if (_0x1e7635["lastCheckInTime"] < _0x4f757b[_0x1c6f77(0x14b)])
                return 0x1;
              if (_0x1e7635[_0x1c6f77(0x14b)] > _0x4f757b[_0x1c6f77(0x14b)])
                return -0x1;
              return 0x0;
            }),
            createAndAppendEmployers(_0x2fd9d0, _0xcf60f5),
            (document[_0x7f90c8(0x192)]("errorMessage")[_0x7f90c8(0x17a)][
              _0x7f90c8(0x153)
            ] = _0x7f90c8(0x16e)),
            (document[_0x7f90c8(0x192)](_0x7f90c8(0x168))["style"][
              _0x7f90c8(0x153)
            ] = _0x7f90c8(0x16e)),
            (document[_0x7f90c8(0x192)](_0x7f90c8(0x184))[_0x7f90c8(0x17a)][
              _0x7f90c8(0x153)
            ] = "none"),
            (document["getElementById"]("searchEmployersInput")[
              _0x7f90c8(0x17a)
            ][_0x7f90c8(0x153)] = _0x7f90c8(0x17b)),
            (document[_0x7f90c8(0x192)](_0x7f90c8(0x19b))[_0x7f90c8(0x17a)][
              _0x7f90c8(0x153)
            ] = _0x7f90c8(0x17b)),
            (document[_0x7f90c8(0x192)](_0x7f90c8(0x186))[_0x7f90c8(0x17a)][
              _0x7f90c8(0x153)
            ] = "block");
        }
      })
      [_0x32830f(0x19d)]((_0x3f6ffb) => {
        const _0x216894 = _0x32830f;
        console[_0x216894(0x15c)](
          "Error\x20getting\x20documents:\x20",
          _0x3f6ffb
        );
      });
}
function searchEmployers() {
  const _0x400aaf = _0x5edfff,
    _0x27ce62 = document["getElementById"](_0x400aaf(0x16d))[_0x400aaf(0x15d)][
      _0x400aaf(0x18b)
    ](),
    _0x421649 = document[_0x400aaf(0x192)](_0x400aaf(0x157));
  _0x421649[_0x400aaf(0x16f)] = "";
  const _0x428f73 = allEmployers[_0x400aaf(0x18a)](
    (_0xe03d11) =>
      (_0xe03d11[_0x400aaf(0x19c)][_0x400aaf(0x18b)]() +
        "\x20" +
        _0xe03d11["lastName"][_0x400aaf(0x18b)]())[_0x400aaf(0x155)](
        _0x27ce62
      ) ||
      _0xe03d11[_0x400aaf(0x19c)]
        [_0x400aaf(0x18b)]()
        [_0x400aaf(0x155)](_0x27ce62) ||
      _0xe03d11["lastName"][_0x400aaf(0x18b)]()[_0x400aaf(0x155)](_0x27ce62) ||
      _0xe03d11[_0x400aaf(0x179)][_0x400aaf(0x155)](_0x27ce62)
  );
  createAndAppendEmployers(_0x428f73, _0x421649),
    _0x428f73[_0x400aaf(0x182)] === 0x0
      ? (document[_0x400aaf(0x192)]("errorMessage")[_0x400aaf(0x17a)][
          "display"
        ] = _0x400aaf(0x17b))
      : (document[_0x400aaf(0x192)](_0x400aaf(0x199))[_0x400aaf(0x17a)][
          "display"
        ] = "none");
}
function reset() {
  const _0x1d7550 = _0x5edfff,
    _0x36faf9 = document[_0x1d7550(0x192)]("employersList");
  (_0x36faf9[_0x1d7550(0x16f)] = ""),
    createAndAppendEmployers(allEmployers, _0x36faf9);
}
