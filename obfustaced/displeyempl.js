const _0x2968f3 = _0x1db5;
function _0x1db5(_0x346369, _0x34c44f) {
  const _0x2eb121 = _0x2eb1();
  return (
    (_0x1db5 = function (_0x1db593, _0x37dbfc) {
      _0x1db593 = _0x1db593 - 0x100;
      let _0x2c5af7 = _0x2eb121[_0x1db593];
      return _0x2c5af7;
    }),
    _0x1db5(_0x346369, _0x34c44f)
  );
}
(function (_0xdcba6d, _0x24dfea) {
  const _0x306e97 = _0x1db5,
    _0x40c520 = _0xdcba6d();
  while (!![]) {
    try {
      const _0x179f92 =
        -parseInt(_0x306e97(0x15c)) / 0x1 +
        -parseInt(_0x306e97(0x14f)) / 0x2 +
        (parseInt(_0x306e97(0x139)) / 0x3) *
          (-parseInt(_0x306e97(0x114)) / 0x4) +
        (-parseInt(_0x306e97(0x16b)) / 0x5) *
          (-parseInt(_0x306e97(0x128)) / 0x6) +
        -parseInt(_0x306e97(0x15d)) / 0x7 +
        (parseInt(_0x306e97(0x10a)) / 0x8) *
          (parseInt(_0x306e97(0x16c)) / 0x9) +
        (-parseInt(_0x306e97(0x134)) / 0xa) *
          (-parseInt(_0x306e97(0x122)) / 0xb);
      if (_0x179f92 === _0x24dfea) break;
      else _0x40c520["push"](_0x40c520["shift"]());
    } catch (_0xb2aa2d) {
      _0x40c520["push"](_0x40c520["shift"]());
    }
  }
})(_0x2eb1, 0x43b59);
const firebaseConfig = {
  apiKey: _0x2968f3(0x12a),
  authDomain: _0x2968f3(0x110),
  projectId: _0x2968f3(0x168),
  storageBucket: _0x2968f3(0x137),
  messagingSenderId: _0x2968f3(0x141),
  appId: _0x2968f3(0x131),
  measurementId: _0x2968f3(0x11f),
};
firebase[_0x2968f3(0x169)](firebaseConfig);
const db = firebase[_0x2968f3(0x13d)]();
let allEmployers = [];
function getYearMonth(_0xcb519b) {
  const _0x68f2be = _0x2968f3,
    _0x2cad86 = _0xcb519b[_0x68f2be(0x109)](),
    _0x1a0b63 = _0xcb519b[_0x68f2be(0x12c)]() + 0x1;
  return _0x2cad86 + "-" + (_0x1a0b63 < 0xa ? "0" + _0x1a0b63 : _0x1a0b63);
}
function createAndAppendEmployers(_0x36c8db, _0x4b596d) {
  _0x36c8db["forEach"]((_0x5778ff) => {
    const _0x346318 = _0x1db5,
      _0x172f27 = document["createElement"]("li");
    _0x172f27[_0x346318(0x11e)] = _0x346318(0x125);
    const _0x391944 = document[_0x346318(0x13e)](_0x346318(0x132));
    _0x391944[_0x346318(0x11e)] = _0x346318(0x11b);
    const _0xe1a3a3 = document[_0x346318(0x13e)](_0x346318(0x132));
    _0xe1a3a3[_0x346318(0x11e)] = _0x346318(0x13f);
    const _0x4d0e45 = document[_0x346318(0x13e)](_0x346318(0x106));
    (_0x4d0e45["textContent"] =
      "Name\x20:\x20" +
      _0x5778ff[_0x346318(0x158)] +
      "\x20" +
      _0x5778ff[_0x346318(0x100)]),
      (_0x4d0e45[_0x346318(0x11e)] = _0x346318(0x127)),
      _0xe1a3a3[_0x346318(0x151)](_0x4d0e45);
    const _0x3bc0b5 = document[_0x346318(0x13e)](_0x346318(0x106));
    (_0x3bc0b5[_0x346318(0x15e)] = _0x346318(0x155) + _0x5778ff["phoneNumber"]),
      _0xe1a3a3["appendChild"](_0x3bc0b5);
    if (_0x5778ff[_0x346318(0x11a)]) {
      const _0x1a332e = document[_0x346318(0x13e)](_0x346318(0x106));
      (_0x1a332e[_0x346318(0x15e)] =
        _0x346318(0x165) +
        moment(_0x5778ff[_0x346318(0x11a)][_0x346318(0x112)]())[
          _0x346318(0x129)
        ]()),
        _0xe1a3a3["appendChild"](_0x1a332e);
    }
    if (
      Array[_0x346318(0x10e)](_0x5778ff["checkInTimes"]) &&
      Array["isArray"](_0x5778ff["checkOutTimes"])
    ) {
      let _0x8b2b93 = 0x0;
      const _0x3f251b = {};
      for (
        let _0x52017f = 0x0;
        _0x52017f < _0x5778ff[_0x346318(0x166)][_0x346318(0x152)];
        _0x52017f++
      ) {
        const _0x3f1bd7 =
            _0x5778ff[_0x346318(0x166)][_0x52017f][_0x346318(0x118)][
              _0x346318(0x112)
            ](),
          _0x4df278 = _0x5778ff[_0x346318(0x166)][_0x52017f][_0x346318(0x133)],
          _0xced985 = _0x5778ff[_0x346318(0x120)][_0x52017f]
            ? _0x5778ff["checkOutTimes"][_0x52017f][_0x346318(0x118)][
                _0x346318(0x112)
              ]()
            : new Date(),
          _0x50adf0 = _0x5778ff["checkOutTimes"][_0x52017f]
            ? _0x5778ff[_0x346318(0x120)][_0x52017f]["location"]
            : "N/A",
          _0x2be40c = (_0xced985 - _0x3f1bd7) / (0x3e8 * 0x3c * 0x3c),
          _0x25a195 = getYearMonth(_0x3f1bd7);
        !_0x3f251b[_0x25a195] &&
          (_0x3f251b[_0x25a195] = { workingHours: 0x0, checkIns: [] }),
          (_0x3f251b[_0x25a195]["workingHours"] += _0x2be40c),
          _0x3f251b[_0x25a195][_0x346318(0x147)][_0x346318(0x14c)]({
            checkInTime: _0x3f1bd7,
            checkOutTime: _0xced985,
            workingHours: _0x2be40c,
            checkInLocation: _0x4df278,
            checkOutLocation: _0x50adf0,
          }),
          moment(_0x3f1bd7)["isSame"](new Date(), _0x346318(0x108)) &&
            (_0x8b2b93 += _0x2be40c);
      }
      const _0x4f3a15 = document["createElement"](_0x346318(0x106));
      (_0x4f3a15[_0x346318(0x15e)] =
        "\x20Total\x20working\x20hours\x20(current\x20month):\x20" +
        _0x8b2b93[_0x346318(0x10d)](0x2) +
        _0x346318(0x162)),
        _0xe1a3a3[_0x346318(0x151)](_0x4f3a15);
      const _0x1c7047 = document["createElement"](_0x346318(0x130)),
        _0x20ef71 = document["createElement"](_0x346318(0x13c));
      (_0x20ef71[_0x346318(0x15e)] = _0x346318(0x111)),
        _0x1c7047[_0x346318(0x151)](_0x20ef71);
      const _0x5f4d8c = Object[_0x346318(0x16a)](_0x3f251b)
        [_0x346318(0x150)]()
        [_0x346318(0x12f)]();
      _0x5f4d8c["forEach"]((_0x5018f4) => {
        const _0x295d64 = _0x346318,
          _0x5d6f37 = _0x3f251b[_0x5018f4],
          _0x47369e = document["createElement"](_0x295d64(0x130)),
          _0xbe91d3 = document[_0x295d64(0x13e)](_0x295d64(0x13c));
        (_0xbe91d3[_0x295d64(0x15e)] =
          _0x295d64(0x138) +
          moment(_0x5018f4, _0x295d64(0x142))[_0x295d64(0x14d)](
            _0x295d64(0x124)
          ) +
          ":\x20" +
          _0x5d6f37[_0x295d64(0x153)][_0x295d64(0x10d)](0x2) +
          _0x295d64(0x162)),
          _0x47369e[_0x295d64(0x151)](_0xbe91d3),
          _0x5d6f37[_0x295d64(0x147)]["forEach"]((_0x7c2ae8) => {
            const _0x506434 = _0x295d64,
              _0x29c11b = document[_0x506434(0x13e)]("li");
            (_0x29c11b[_0x506434(0x15e)] =
              "Check-in:\x20" +
              moment(_0x7c2ae8[_0x506434(0x140)])[_0x506434(0x14d)](
                _0x506434(0x163)
              ) +
              _0x506434(0x15a) +
              _0x7c2ae8[_0x506434(0x13b)] +
              ",\x20Check-out:\x20" +
              moment(_0x7c2ae8[_0x506434(0x103)])[_0x506434(0x14d)]("LLL") +
              _0x506434(0x11c) +
              _0x7c2ae8["checkOutLocation"] +
              _0x506434(0x148) +
              _0x7c2ae8["workingHours"][_0x506434(0x10d)](0x2) +
              _0x506434(0x162)),
              _0x47369e["appendChild"](_0x29c11b);
          }),
          _0x1c7047["appendChild"](_0x47369e);
      }),
        _0xe1a3a3[_0x346318(0x151)](_0x1c7047);
    }
    _0x391944["appendChild"](_0xe1a3a3),
      _0x172f27[_0x346318(0x151)](_0x391944),
      _0x4b596d[_0x346318(0x151)](_0x172f27);
  });
}
document["getElementById"]("addcheckpoint")[_0x2968f3(0x161)](
  _0x2968f3(0x136),
  addCheck
);
function hideShowBtn() {
  const _0x3e7a04 = _0x2968f3;
  (document["getElementById"](_0x3e7a04(0x15f))[_0x3e7a04(0x113)][
    _0x3e7a04(0x157)
  ] = _0x3e7a04(0x154)),
    (document[_0x3e7a04(0x119)](_0x3e7a04(0x159))["style"][_0x3e7a04(0x157)] =
      _0x3e7a04(0x154)),
    (document["getElementById"]("searchEmployersInput")[_0x3e7a04(0x113)][
      _0x3e7a04(0x157)
    ] = "block"),
    (document[_0x3e7a04(0x119)](_0x3e7a04(0x14a))["style"][_0x3e7a04(0x157)] =
      _0x3e7a04(0x156)),
    (document["getElementById"](_0x3e7a04(0x121))[_0x3e7a04(0x113)][
      _0x3e7a04(0x157)
    ] = _0x3e7a04(0x156)),
    (document["getElementById"](_0x3e7a04(0x12d))[_0x3e7a04(0x113)]["display"] =
      _0x3e7a04(0x156));
}
function showEmployers() {
  const _0x741c5b = _0x2968f3,
    _0x4d2bb7 = document[_0x741c5b(0x119)](_0x741c5b(0x15f))["value"][
      _0x741c5b(0x126)
    ](),
    _0x41c643 = document["getElementById"](_0x741c5b(0x107));
  _0x41c643[_0x741c5b(0x146)] = "";
  const _0x303188 = document[_0x741c5b(0x119)](_0x741c5b(0x101));
  (_0x303188[_0x741c5b(0x113)][_0x741c5b(0x157)] = _0x741c5b(0x154)),
    db["collection"](_0x741c5b(0x102))
      [_0x741c5b(0x10c)](_0x4d2bb7)
      [_0x741c5b(0x116)](_0x741c5b(0x117))
      [_0x741c5b(0x144)]()
      [_0x741c5b(0x11d)]((_0x3caa86) => {
        const _0x2aa9ed = _0x741c5b;
        if (_0x3caa86[_0x2aa9ed(0x14e)])
          document[_0x2aa9ed(0x119)]("errorMessage")[_0x2aa9ed(0x113)][
            _0x2aa9ed(0x157)
          ] = _0x2aa9ed(0x156);
        else {
          const _0x30dd3a = [];
          _0x3caa86["forEach"]((_0x15742c) => {
            const _0x492b66 = _0x15742c["data"]();
            (_0x492b66["id"] = _0x15742c["id"]), _0x30dd3a["push"](_0x492b66);
          }),
            (allEmployers = _0x30dd3a),
            _0x30dd3a[_0x2aa9ed(0x150)]((_0x3cc4a8, _0x4bb6ab) => {
              const _0x4dbdb1 = _0x2aa9ed;
              if (_0x3cc4a8["lastCheckInTime"] < _0x4bb6ab[_0x4dbdb1(0x11a)])
                return 0x1;
              if (_0x3cc4a8[_0x4dbdb1(0x11a)] > _0x4bb6ab[_0x4dbdb1(0x11a)])
                return -0x1;
              return 0x0;
            }),
            createAndAppendEmployers(_0x30dd3a, _0x41c643),
            (document[_0x2aa9ed(0x119)]("errorMessage")[_0x2aa9ed(0x113)][
              "display"
            ] = "none"),
            (document[_0x2aa9ed(0x119)](_0x2aa9ed(0x15f))["style"]["display"] =
              _0x2aa9ed(0x154)),
            (document[_0x2aa9ed(0x119)](_0x2aa9ed(0x159))[_0x2aa9ed(0x113)][
              _0x2aa9ed(0x157)
            ] = _0x2aa9ed(0x154)),
            (document["getElementById"](_0x2aa9ed(0x135))[_0x2aa9ed(0x113)][
              _0x2aa9ed(0x157)
            ] = "block"),
            (document["getElementById"](_0x2aa9ed(0x14a))["style"][
              _0x2aa9ed(0x157)
            ] = _0x2aa9ed(0x156)),
            (document[_0x2aa9ed(0x119)](_0x2aa9ed(0x121))[_0x2aa9ed(0x113)][
              _0x2aa9ed(0x157)
            ] = _0x2aa9ed(0x156)),
            (document["getElementById"](_0x2aa9ed(0x12d))[_0x2aa9ed(0x113)][
              _0x2aa9ed(0x157)
            ] = _0x2aa9ed(0x156));
        }
      })
      [_0x741c5b(0x14b)]((_0x5391db) => {
        const _0xb80494 = _0x741c5b;
        console["log"](_0xb80494(0x105), _0x5391db);
      });
}
function _0x2eb1() {
  const _0x1d085d = [
    "toDate",
    "style",
    "2145820DOYUuu",
    "Error\x20adding\x20new\x20check-in\x20location:\x20",
    "collection",
    "employers",
    "time",
    "getElementById",
    "lastCheckInTime",
    "card",
    ",\x20Check-out\x20location:\x20",
    "then",
    "className",
    "G-J0DC7YW8J4",
    "checkOutTimes",
    "resetButton",
    "11550IcbrNW",
    "set",
    "MMMM\x20YYYY",
    "employer-item",
    "toLowerCase",
    "mr-3",
    "1992VYKZQF",
    "fromNow",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "Please\x20enter\x20the\x20name\x20of\x20the\x20new\x20check-in\x20location\x20(no\x20spaces):",
    "getMonth",
    "addcheckpoint",
    "log",
    "reverse",
    "details",
    "1:995789907234:web:54edcc689b1c894594717b",
    "div",
    "location",
    "11290IghdIa",
    "searchEmployersInput",
    "click",
    "eventsdb-b6aaf.appspot.com",
    "Total\x20for\x20",
    "3lelUbO",
    "New\x20check-in\x20location\x20successfully\x20added:\x20",
    "checkInLocation",
    "summary",
    "firestore",
    "createElement",
    "card-body",
    "checkInTime",
    "995789907234",
    "YYYY-MM",
    "value",
    "get",
    "error",
    "innerHTML",
    "checkIns",
    ",\x20Working\x20hours:\x20",
    "FieldValue",
    "searchButton",
    "catch",
    "push",
    "format",
    "empty",
    "935364VyEcLb",
    "sort",
    "appendChild",
    "length",
    "workingHours",
    "none",
    "Phone\x20:\x20",
    "block",
    "display",
    "firstName",
    "showEmployersButton",
    ",\x20Check-in\x20location:\x20",
    "includes",
    "181672xwlhgi",
    "2428398TKFSDc",
    "textContent",
    "companyName",
    "some",
    "addEventListener",
    "\x20hours",
    "LLL",
    "Error\x20creating\x20company\x20and\x20adding\x20check-in\x20location:\x20",
    "\x20Last\x20check-in\x20:\x20",
    "checkInTimes",
    "arrayUnion",
    "eventsdb-b6aaf",
    "initializeApp",
    "keys",
    "4560hPcMit",
    "333VKhMyr",
    "lastName",
    "ads",
    "companies",
    "checkOutTime",
    "errorMessage",
    "Error\x20getting\x20documents:\x20",
    "span",
    "employersList",
    "month",
    "getFullYear",
    "69584FzcwKu",
    "filter",
    "doc",
    "toFixed",
    "isArray",
    "phoneNumber",
    "eventsdb-b6aaf.firebaseapp.com",
    "Monthly\x20Working\x20Hours\x20Record",
  ];
  _0x2eb1 = function () {
    return _0x1d085d;
  };
  return _0x2eb1();
}
let isAddingCheck = ![];
function addCheck() {
  const _0x106160 = _0x2968f3;
  if (isAddingCheck) return;
  isAddingCheck = !![];
  let _0x329cfa = "";
  do {
    _0x329cfa = prompt(_0x106160(0x12b));
  } while (_0x329cfa == null || _0x329cfa["includes"]("\x20"));
  let _0x46155a = document[_0x106160(0x119)](_0x106160(0x15f))["value"][
      _0x106160(0x126)
    ](),
    _0x252534 = db[_0x106160(0x116)]("companies")[_0x106160(0x10c)](_0x46155a);
  _0x252534["get"]()["then"]((_0x12c904) => {
    const _0x203522 = _0x106160;
    _0x12c904["exists"]
      ? _0x252534["update"]({
          checkinLocations:
            firebase[_0x203522(0x13d)][_0x203522(0x149)][_0x203522(0x167)](
              _0x329cfa
            ),
        })
          ["then"](function () {
            const _0x5c8640 = _0x203522;
            console[_0x5c8640(0x12e)](_0x5c8640(0x13a), _0x329cfa),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          [_0x203522(0x14b)](function (_0x1b94cf) {
            const _0x1fa380 = _0x203522;
            console[_0x1fa380(0x145)](_0x1fa380(0x115), _0x1b94cf),
              (isAddingCheck = ![]);
          })
      : _0x252534[_0x203522(0x123)]({ checkinLocations: [_0x329cfa] })
          [_0x203522(0x11d)](function () {
            const _0x5ab4ad = _0x203522;
            console[_0x5ab4ad(0x12e)](
              "New\x20company\x20created\x20and\x20check-in\x20location\x20added:\x20",
              _0x329cfa
            ),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          [_0x203522(0x14b)](function (_0x10bae8) {
            const _0x27260f = _0x203522;
            console[_0x27260f(0x145)](_0x27260f(0x164), _0x10bae8),
              (isAddingCheck = ![]);
          });
  });
}
function searchEmployers() {
  const _0x58ba27 = _0x2968f3,
    _0x18e112 = document[_0x58ba27(0x119)]("searchEmployersInput")[
      _0x58ba27(0x143)
    ][_0x58ba27(0x126)](),
    _0x30a0de = document[_0x58ba27(0x119)](_0x58ba27(0x107));
  _0x30a0de[_0x58ba27(0x146)] = "";
  const _0x5ad4c8 = allEmployers[_0x58ba27(0x10b)]((_0x6e4d48) => {
    const _0xdaadc8 = _0x58ba27,
      _0xdf4da9 = _0x6e4d48["checkInTimes"][_0xdaadc8(0x160)](
        (_0x393e8b, _0x219c3d) => {
          const _0x532726 = _0xdaadc8,
            _0x21acbf = _0x393e8b[_0x532726(0x133)][_0x532726(0x126)](),
            _0x16df34 =
              _0x6e4d48[_0x532726(0x120)][_0x219c3d]?.["location"]?.[
                _0x532726(0x126)
              ]() || "";
          return (
            _0x21acbf[_0x532726(0x15b)](_0x18e112) ||
            _0x16df34[_0x532726(0x15b)](_0x18e112)
          );
        }
      );
    return (
      (_0x6e4d48[_0xdaadc8(0x158)]["toLowerCase"]() +
        "\x20" +
        _0x6e4d48[_0xdaadc8(0x100)]["toLowerCase"]())["includes"](_0x18e112) ||
      _0x6e4d48[_0xdaadc8(0x158)]
        [_0xdaadc8(0x126)]()
        [_0xdaadc8(0x15b)](_0x18e112) ||
      _0x6e4d48[_0xdaadc8(0x100)]
        [_0xdaadc8(0x126)]()
        [_0xdaadc8(0x15b)](_0x18e112) ||
      _0x6e4d48[_0xdaadc8(0x10f)][_0xdaadc8(0x15b)](_0x18e112) ||
      _0xdf4da9
    );
  });
  createAndAppendEmployers(_0x5ad4c8, _0x30a0de),
    _0x5ad4c8[_0x58ba27(0x152)] === 0x0
      ? (document[_0x58ba27(0x119)](_0x58ba27(0x104))[_0x58ba27(0x113)][
          _0x58ba27(0x157)
        ] = _0x58ba27(0x156))
      : (document["getElementById"]("errorMessage")[_0x58ba27(0x113)][
          "display"
        ] = _0x58ba27(0x154));
}
function reset() {
  const _0x23dec0 = _0x2968f3,
    _0x2c52fc = document["getElementById"](_0x23dec0(0x107));
  (_0x2c52fc[_0x23dec0(0x146)] = ""),
    createAndAppendEmployers(allEmployers, _0x2c52fc),
    (document["getElementById"](_0x23dec0(0x135))[_0x23dec0(0x143)] = "");
}
