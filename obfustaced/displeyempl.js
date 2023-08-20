const _0x2e2e1b = _0xd1bb;
(function (_0x46b270, _0x4359b1) {
  const _0x36842d = _0xd1bb,
    _0x51162b = _0x46b270();
  while (!![]) {
    try {
      const _0x19f9ab =
        parseInt(_0x36842d(0x1e7)) / 0x1 +
        (parseInt(_0x36842d(0x246)) / 0x2) *
          (parseInt(_0x36842d(0x1f4)) / 0x3) +
        (-parseInt(_0x36842d(0x1fe)) / 0x4) *
          (-parseInt(_0x36842d(0x24e)) / 0x5) +
        -parseInt(_0x36842d(0x21f)) / 0x6 +
        parseInt(_0x36842d(0x21a)) / 0x7 +
        -parseInt(_0x36842d(0x1fd)) / 0x8 +
        parseInt(_0x36842d(0x22b)) / 0x9;
      if (_0x19f9ab === _0x4359b1) break;
      else _0x51162b["push"](_0x51162b["shift"]());
    } catch (_0x503cdc) {
      _0x51162b["push"](_0x51162b["shift"]());
    }
  }
})(_0x15ed, 0x7d05b);
const firebaseConfig = {
  apiKey: "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
  authDomain: _0x2e2e1b(0x1f8),
  projectId: _0x2e2e1b(0x208),
  storageBucket: "eventsdb-b6aaf.appspot.com",
  messagingSenderId: _0x2e2e1b(0x20d),
  appId: _0x2e2e1b(0x206),
  measurementId: _0x2e2e1b(0x202),
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x2e2e1b(0x1e9)]();
let allEmployers = [];
document[_0x2e2e1b(0x249)](_0x2e2e1b(0x252))[_0x2e2e1b(0x1e3)](
  _0x2e2e1b(0x240),
  function (_0xc723a) {
    const _0x16231d = _0x2e2e1b;
    this[_0x16231d(0x241)] = this[_0x16231d(0x241)][_0x16231d(0x239)](
      /\s/g,
      ""
    );
  }
),
  document["getElementById"](_0x2e2e1b(0x252))["addEventListener"](
    "keydown",
    function (_0x5277e1) {
      const _0x4f9d73 = _0x2e2e1b;
      (_0x5277e1[_0x4f9d73(0x218)] === _0x4f9d73(0x234) ||
        _0x5277e1["keyCode"] === 0xd) &&
        (_0x5277e1[_0x4f9d73(0x220)](), showEmployers());
    }
  ),
  document["getElementById"](_0x2e2e1b(0x215))[_0x2e2e1b(0x1e3)](
    _0x2e2e1b(0x23e),
    function (_0x40bef4) {
      const _0x5db7c7 = _0x2e2e1b;
      (_0x40bef4[_0x5db7c7(0x218)] === "Enter" ||
        _0x40bef4[_0x5db7c7(0x243)] === 0xd) &&
        (_0x40bef4[_0x5db7c7(0x220)](), searchEmployers());
    }
  );
function getYearMonth(_0xba3378) {
  const _0x371b13 = _0x2e2e1b,
    _0x5bf8d4 = _0xba3378[_0x371b13(0x1fb)](),
    _0x45a4be = _0xba3378[_0x371b13(0x23b)]() + 0x1;
  return _0x5bf8d4 + "-" + (_0x45a4be < 0xa ? "0" + _0x45a4be : _0x45a4be);
}
function _0x15ed() {
  const _0x35d5b4 = [
    "G-J0DC7YW8J4",
    "note-in",
    "checkOutLocation",
    "card",
    "1:995789907234:web:54edcc689b1c894594717b",
    "resetButton",
    "eventsdb-b6aaf",
    "block",
    "LLL",
    "appendChild",
    "Error\x20creating\x20company\x20and\x20adding\x20check-in\x20location:\x20",
    "995789907234",
    "catch",
    "<strong>Last\x20check-in:</strong>\x20",
    "lastCheckInTime",
    "New\x20company\x20created\x20and\x20check-in\x20location\x20added:\x20",
    "textContent",
    "log",
    "push",
    "searchEmployersInput",
    "some",
    "Please\x20enter\x20the\x20name\x20of\x20the\x20new\x20check-in\x20location\x20(no\x20spaces):",
    "key",
    "<strong>Phone:</strong>\x20",
    "780178fmsjIU",
    "doc",
    "isSame",
    "Total\x20for\x20",
    "checkInLocation",
    "5891706IHIdLI",
    "preventDefault",
    "reverse",
    "\x20Total\x20working\x20hours\x20(current\x20month):\x20",
    "checkIns",
    "sort",
    "div",
    "details",
    "toDate",
    "className",
    "companies",
    "length",
    "8283780IBniNO",
    "fromNow",
    "trim",
    "createElement",
    "<strong>Check-out:</strong>\x20",
    "note",
    "\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Location:</strong>\x20",
    "note-out",
    "forEach",
    "Enter",
    "arrayUnion",
    "includes",
    "click",
    "N/A",
    "replace",
    "month",
    "getMonth",
    "style",
    "firstName",
    "keydown",
    "toFixed",
    "input",
    "value",
    "set",
    "keyCode",
    "card-header",
    "searchButton",
    "26bEczrT",
    "<strong>Working\x20hours:</strong>\x20",
    "<strong>Check-in:</strong>\x20",
    "getElementById",
    "filter",
    "checkOutTime",
    "\x20hours",
    "working-hours",
    "45SzIcFp",
    "showEmployersButton",
    "location",
    "ads",
    "companyName",
    "format",
    "employersList",
    "then",
    "addcheckpoint",
    "none",
    "checkin-item",
    "workingHours",
    "addEventListener",
    "MMMM\x20YYYY",
    "<strong>Note\x20(Check-in):</strong>\x20",
    "checkout-info",
    "422035lYAdED",
    "checkOutTimes",
    "firestore",
    "checkInTimes",
    "checkin-info",
    "span",
    "error",
    "collection",
    "Monthly\x20Working\x20Hours\x20Record",
    "lastName",
    "card-body",
    "update",
    "innerHTML",
    "11409iGXnfx",
    "keys",
    "time",
    "display",
    "eventsdb-b6aaf.firebaseapp.com",
    "toLowerCase",
    "employer-item",
    "getFullYear",
    "errorMessage",
    "2708856ozLgBS",
    "146356PDKUPT",
    "phoneNumber",
    "<strong>Note\x20(Check-out):</strong>\x20",
    "Error\x20adding\x20new\x20check-in\x20location:\x20",
  ];
  _0x15ed = function () {
    return _0x35d5b4;
  };
  return _0x15ed();
}
function _0xd1bb(_0x1faed4, _0x483097) {
  const _0x15edc0 = _0x15ed();
  return (
    (_0xd1bb = function (_0xd1bbd3, _0x17990d) {
      _0xd1bbd3 = _0xd1bbd3 - 0x1dd;
      let _0x14d4c1 = _0x15edc0[_0xd1bbd3];
      return _0x14d4c1;
    }),
    _0xd1bb(_0x1faed4, _0x483097)
  );
}
function createAndAppendEmployers(_0x20337e, _0x4ee024) {
  const _0x15ab20 = _0x2e2e1b;
  _0x20337e[_0x15ab20(0x233)]((_0x150c16) => {
    const _0x83db49 = _0x15ab20,
      _0x6c0aad = document["createElement"]("li");
    _0x6c0aad["className"] = _0x83db49(0x1fa);
    const _0x494f36 = document[_0x83db49(0x22e)](_0x83db49(0x225));
    _0x494f36[_0x83db49(0x228)] = _0x83db49(0x205);
    const _0x24998f = document[_0x83db49(0x22e)](_0x83db49(0x225));
    (_0x24998f[_0x83db49(0x228)] = _0x83db49(0x244)),
      (_0x24998f[_0x83db49(0x212)] =
        _0x150c16["firstName"] + "\x20" + _0x150c16[_0x83db49(0x1f0)]),
      _0x494f36[_0x83db49(0x20b)](_0x24998f);
    const _0x6d1bae = document[_0x83db49(0x22e)](_0x83db49(0x225));
    _0x6d1bae[_0x83db49(0x228)] = _0x83db49(0x1f1);
    const _0x3d7f6a = document[_0x83db49(0x22e)]("span");
    (_0x3d7f6a[_0x83db49(0x228)] = "info-item"),
      (_0x3d7f6a[_0x83db49(0x1f3)] =
        _0x83db49(0x219) + _0x150c16[_0x83db49(0x1ff)]),
      _0x6d1bae[_0x83db49(0x20b)](_0x3d7f6a);
    if (_0x150c16["lastCheckInTime"]) {
      const _0x168f1b = document[_0x83db49(0x22e)](_0x83db49(0x1ec));
      (_0x168f1b["className"] = "info-item"),
        (_0x168f1b[_0x83db49(0x1f3)] =
          _0x83db49(0x20f) +
          moment(_0x150c16[_0x83db49(0x210)]["toDate"]())[_0x83db49(0x22c)]()),
        _0x6d1bae[_0x83db49(0x20b)](_0x168f1b);
    }
    if (
      Array["isArray"](_0x150c16[_0x83db49(0x1ea)]) &&
      Array["isArray"](_0x150c16[_0x83db49(0x1e8)])
    ) {
      let _0x5007da = 0x0;
      const _0x168c0f = {};
      for (
        let _0x24f1bc = 0x0;
        _0x24f1bc < _0x150c16[_0x83db49(0x1ea)][_0x83db49(0x22a)];
        _0x24f1bc++
      ) {
        const _0xa5a9b5 =
            _0x150c16[_0x83db49(0x1ea)][_0x24f1bc][_0x83db49(0x1f6)][
              _0x83db49(0x227)
            ](),
          _0x469c0f = _0x150c16[_0x83db49(0x1ea)][_0x24f1bc][_0x83db49(0x250)],
          _0x25eeb4 = _0x150c16["checkOutTimes"][_0x24f1bc]
            ? _0x150c16[_0x83db49(0x1e8)][_0x24f1bc][_0x83db49(0x1f6)][
                "toDate"
              ]()
            : new Date(),
          _0x5fc80d = _0x150c16[_0x83db49(0x1e8)][_0x24f1bc]
            ? _0x150c16["checkOutTimes"][_0x24f1bc][_0x83db49(0x250)]
            : _0x83db49(0x238),
          _0x566cbe = (_0x25eeb4 - _0xa5a9b5) / (0x3e8 * 0x3c * 0x3c),
          _0x20ad06 = getYearMonth(_0xa5a9b5);
        !_0x168c0f[_0x20ad06] &&
          (_0x168c0f[_0x20ad06] = { workingHours: 0x0, checkIns: [] }),
          (_0x168c0f[_0x20ad06][_0x83db49(0x1e2)] += _0x566cbe),
          _0x168c0f[_0x20ad06][_0x83db49(0x223)][_0x83db49(0x214)]({
            checkInTime: _0xa5a9b5,
            checkOutTime: _0x25eeb4,
            workingHours: _0x566cbe,
            checkInLocation: _0x469c0f,
            checkOutLocation: _0x5fc80d,
          }),
          moment(_0xa5a9b5)[_0x83db49(0x21c)](new Date(), _0x83db49(0x23a)) &&
            (_0x5007da += _0x566cbe);
      }
      const _0x5b19f9 = document[_0x83db49(0x22e)](_0x83db49(0x1ec));
      (_0x5b19f9[_0x83db49(0x212)] =
        _0x83db49(0x222) + _0x5007da[_0x83db49(0x23f)](0x2) + _0x83db49(0x24c)),
        _0x6d1bae[_0x83db49(0x20b)](_0x5b19f9);
      const _0x34ab88 = document[_0x83db49(0x22e)](_0x83db49(0x226)),
        _0x7afed1 = document[_0x83db49(0x22e)]("summary");
      (_0x7afed1["textContent"] = _0x83db49(0x1ef)),
        _0x34ab88[_0x83db49(0x20b)](_0x7afed1);
      const _0x12a3ca = Object[_0x83db49(0x1f5)](_0x168c0f)
        ["sort"]()
        [_0x83db49(0x221)]();
      _0x12a3ca["forEach"]((_0x1ba507) => {
        const _0x3dbda3 = _0x83db49,
          _0x36d34c = _0x168c0f[_0x1ba507],
          _0x4137a6 = document[_0x3dbda3(0x22e)](_0x3dbda3(0x226)),
          _0xd78ed0 = document["createElement"]("summary");
        (_0xd78ed0[_0x3dbda3(0x212)] =
          _0x3dbda3(0x21d) +
          moment(_0x1ba507, "YYYY-MM")["format"](_0x3dbda3(0x1e4)) +
          ":\x20" +
          _0x36d34c["workingHours"]["toFixed"](0x2) +
          _0x3dbda3(0x24c)),
          _0x4137a6[_0x3dbda3(0x20b)](_0xd78ed0),
          _0x36d34c[_0x3dbda3(0x223)][_0x3dbda3(0x233)](
            (_0xdca252, _0x530172) => {
              const _0x45e6e6 = _0x3dbda3,
                _0x525bcf = document[_0x45e6e6(0x22e)]("div");
              _0x525bcf[_0x45e6e6(0x228)] = _0x45e6e6(0x1e1);
              const _0x40816b = document[_0x45e6e6(0x22e)]("div"),
                _0x2e0f68 = document["createElement"](_0x45e6e6(0x225)),
                _0x55d1e8 = document[_0x45e6e6(0x22e)](_0x45e6e6(0x225));
              (_0x40816b[_0x45e6e6(0x228)] = _0x45e6e6(0x1eb)),
                (_0x40816b["innerHTML"] =
                  _0x45e6e6(0x248) +
                  moment(_0xdca252["checkInTime"])[_0x45e6e6(0x253)](
                    _0x45e6e6(0x20a)
                  ) +
                  _0x45e6e6(0x231) +
                  _0xdca252[_0x45e6e6(0x21e)]),
                (_0x2e0f68[_0x45e6e6(0x228)] = _0x45e6e6(0x1e6)),
                (_0x2e0f68[_0x45e6e6(0x1f3)] =
                  _0x45e6e6(0x22f) +
                  moment(_0xdca252[_0x45e6e6(0x24b)])["format"](
                    _0x45e6e6(0x20a)
                  ) +
                  "\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Location:</strong>\x20" +
                  _0xdca252[_0x45e6e6(0x204)]),
                (_0x55d1e8["className"] = _0x45e6e6(0x24d)),
                (_0x55d1e8[_0x45e6e6(0x1f3)] =
                  _0x45e6e6(0x247) +
                  _0xdca252[_0x45e6e6(0x1e2)][_0x45e6e6(0x23f)](0x2) +
                  _0x45e6e6(0x24c));
              const _0x512622 =
                _0x150c16[_0x45e6e6(0x1ea)][_0x530172]?.[_0x45e6e6(0x230)];
              if (_0x512622) {
                const _0x14a283 = document["createElement"](_0x45e6e6(0x225));
                (_0x14a283[_0x45e6e6(0x228)] = _0x45e6e6(0x203)),
                  (_0x14a283[_0x45e6e6(0x1f3)] = _0x45e6e6(0x1e5) + _0x512622),
                  _0x40816b["appendChild"](_0x14a283);
              }
              const _0x55e10b =
                _0x150c16[_0x45e6e6(0x1e8)][_0x530172]?.[_0x45e6e6(0x230)];
              if (_0x55e10b) {
                const _0x4fd93b = document["createElement"](_0x45e6e6(0x225));
                (_0x4fd93b["className"] = _0x45e6e6(0x232)),
                  (_0x4fd93b[_0x45e6e6(0x1f3)] = _0x45e6e6(0x200) + _0x55e10b),
                  _0x2e0f68[_0x45e6e6(0x20b)](_0x4fd93b);
              }
              _0x525bcf["appendChild"](_0x40816b),
                _0x525bcf[_0x45e6e6(0x20b)](_0x2e0f68),
                _0x525bcf[_0x45e6e6(0x20b)](_0x55d1e8),
                _0x4137a6["appendChild"](_0x525bcf);
            }
          ),
          _0x34ab88[_0x3dbda3(0x20b)](_0x4137a6);
      }),
        _0x6d1bae[_0x83db49(0x20b)](_0x34ab88);
    }
    _0x494f36[_0x83db49(0x20b)](_0x6d1bae),
      _0x6c0aad["appendChild"](_0x494f36),
      _0x4ee024[_0x83db49(0x20b)](_0x6c0aad);
  });
}
document["getElementById"](_0x2e2e1b(0x1df))[_0x2e2e1b(0x1e3)](
  _0x2e2e1b(0x237),
  addCheck
);
function hideShowBtn() {
  const _0x115a29 = _0x2e2e1b;
  (document[_0x115a29(0x249)](_0x115a29(0x252))[_0x115a29(0x23c)][
    _0x115a29(0x1f7)
  ] = _0x115a29(0x1e0)),
    (document[_0x115a29(0x249)](_0x115a29(0x24f))["style"][_0x115a29(0x1f7)] =
      _0x115a29(0x1e0)),
    (document[_0x115a29(0x249)](_0x115a29(0x215))[_0x115a29(0x23c)][
      _0x115a29(0x1f7)
    ] = _0x115a29(0x209)),
    (document[_0x115a29(0x249)](_0x115a29(0x245))[_0x115a29(0x23c)][
      _0x115a29(0x1f7)
    ] = _0x115a29(0x209)),
    (document[_0x115a29(0x249)](_0x115a29(0x207))["style"][_0x115a29(0x1f7)] =
      _0x115a29(0x209)),
    (document[_0x115a29(0x249)](_0x115a29(0x1df))["style"][_0x115a29(0x1f7)] =
      "block");
}
function showEmployers() {
  const _0x381529 = _0x2e2e1b,
    _0x155ac7 =
      document[_0x381529(0x249)]("companyName")[_0x381529(0x241)][
        _0x381529(0x1f9)
      ](),
    _0x4911ce = document[_0x381529(0x249)]("employersList");
  _0x4911ce["innerHTML"] = "";
  const _0x3a895e = document["getElementById"](_0x381529(0x251));
  (_0x3a895e[_0x381529(0x23c)][_0x381529(0x1f7)] = _0x381529(0x1e0)),
    db["collection"](_0x381529(0x229))
      [_0x381529(0x21b)](_0x155ac7)
      [_0x381529(0x1ee)]("employers")
      ["get"]()
      [_0x381529(0x1de)]((_0x57d678) => {
        const _0x46451b = _0x381529;
        if (_0x57d678["empty"])
          document["getElementById"](_0x46451b(0x1fc))[_0x46451b(0x23c)][
            "display"
          ] = _0x46451b(0x209);
        else {
          const _0x8be2cb = [];
          _0x57d678[_0x46451b(0x233)]((_0x2745b1) => {
            const _0xe9d968 = _0x46451b,
              _0x2dc486 = _0x2745b1["data"]();
            (_0x2dc486["id"] = _0x2745b1["id"]),
              _0x8be2cb[_0xe9d968(0x214)](_0x2dc486);
          }),
            (allEmployers = _0x8be2cb),
            _0x8be2cb[_0x46451b(0x224)]((_0x596827, _0xf540fe) => {
              const _0x23a0dd = _0x46451b;
              if (_0x596827[_0x23a0dd(0x210)] < _0xf540fe[_0x23a0dd(0x210)])
                return 0x1;
              if (_0x596827[_0x23a0dd(0x210)] > _0xf540fe["lastCheckInTime"])
                return -0x1;
              return 0x0;
            }),
            createAndAppendEmployers(_0x8be2cb, _0x4911ce),
            (document[_0x46451b(0x249)](_0x46451b(0x1fc))["style"]["display"] =
              _0x46451b(0x1e0)),
            (document["getElementById"](_0x46451b(0x252))[_0x46451b(0x23c)][
              _0x46451b(0x1f7)
            ] = "none"),
            (document[_0x46451b(0x249)](_0x46451b(0x24f))[_0x46451b(0x23c)][
              "display"
            ] = "none"),
            (document[_0x46451b(0x249)](_0x46451b(0x215))[_0x46451b(0x23c)][
              "display"
            ] = _0x46451b(0x209)),
            (document[_0x46451b(0x249)](_0x46451b(0x245))["style"][
              _0x46451b(0x1f7)
            ] = _0x46451b(0x209)),
            (document[_0x46451b(0x249)](_0x46451b(0x207))[_0x46451b(0x23c)][
              _0x46451b(0x1f7)
            ] = _0x46451b(0x209)),
            (document[_0x46451b(0x249)](_0x46451b(0x1df))[_0x46451b(0x23c)][
              _0x46451b(0x1f7)
            ] = _0x46451b(0x209));
        }
      })
      [_0x381529(0x20e)]((_0x1abc92) => {
        const _0x551abb = _0x381529;
        console[_0x551abb(0x213)](
          "Error\x20getting\x20documents:\x20",
          _0x1abc92
        );
      });
}
let isAddingCheck = ![];
function addCheck() {
  const _0x181148 = _0x2e2e1b;
  if (isAddingCheck) return;
  isAddingCheck = !![];
  let _0x1cf1b4 = prompt(_0x181148(0x217));
  _0x1cf1b4 && (_0x1cf1b4 = _0x1cf1b4[_0x181148(0x1f9)]()[_0x181148(0x22d)]());
  while (_0x1cf1b4 !== null && _0x1cf1b4[_0x181148(0x236)]("\x20")) {
    _0x1cf1b4 = prompt(_0x181148(0x217));
  }
  _0x1cf1b4 && (_0x1cf1b4 = _0x1cf1b4[_0x181148(0x1f9)]()[_0x181148(0x22d)]());
  if (_0x1cf1b4 === null) {
    isAddingCheck = ![];
    return;
  }
  let _0x37221e = document[_0x181148(0x249)](_0x181148(0x252))[
      _0x181148(0x241)
    ][_0x181148(0x1f9)](),
    _0x48cc5f = db[_0x181148(0x1ee)](_0x181148(0x229))[_0x181148(0x21b)](
      _0x37221e
    );
  _0x48cc5f["get"]()[_0x181148(0x1de)]((_0xc519b5) => {
    const _0xff8820 = _0x181148;
    _0xc519b5["exists"]
      ? _0x48cc5f[_0xff8820(0x1f2)]({
          checkinLocations:
            firebase["firestore"]["FieldValue"][_0xff8820(0x235)](_0x1cf1b4),
        })
          ["then"](function () {
            const _0x39cf34 = _0xff8820;
            console[_0x39cf34(0x213)](
              "New\x20check-in\x20location\x20successfully\x20added:\x20",
              _0x1cf1b4
            ),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          [_0xff8820(0x20e)](function (_0x4aeb23) {
            const _0x21054b = _0xff8820;
            console["error"](_0x21054b(0x201), _0x4aeb23),
              (isAddingCheck = ![]);
          })
      : _0x48cc5f[_0xff8820(0x242)]({ checkinLocations: [_0x1cf1b4] })
          [_0xff8820(0x1de)](function () {
            const _0x175d5f = _0xff8820;
            console[_0x175d5f(0x213)](_0x175d5f(0x211), _0x1cf1b4),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          [_0xff8820(0x20e)](function (_0x24c964) {
            const _0x38418b = _0xff8820;
            console[_0x38418b(0x1ed)](_0x38418b(0x20c), _0x24c964),
              (isAddingCheck = ![]);
          });
  });
}
function searchEmployers() {
  const _0x3659cf = _0x2e2e1b,
    _0x1ef488 = document["getElementById"](_0x3659cf(0x215))[_0x3659cf(0x241)][
      _0x3659cf(0x1f9)
    ](),
    _0x561237 = document[_0x3659cf(0x249)]("employersList");
  _0x561237[_0x3659cf(0x1f3)] = "";
  const _0xe4447f = allEmployers[_0x3659cf(0x24a)]((_0x5d76f0) => {
    const _0x19e299 = _0x3659cf,
      _0x402136 = _0x5d76f0[_0x19e299(0x1ea)][_0x19e299(0x216)](
        (_0x7376e4, _0x438821) => {
          const _0x18fde4 = _0x19e299,
            _0x37e242 = _0x7376e4[_0x18fde4(0x250)][_0x18fde4(0x1f9)](),
            _0x5dcff1 =
              _0x5d76f0["checkOutTimes"][_0x438821]?.[_0x18fde4(0x250)]?.[
                _0x18fde4(0x1f9)
              ]() || "";
          return (
            _0x37e242[_0x18fde4(0x236)](_0x1ef488) ||
            _0x5dcff1[_0x18fde4(0x236)](_0x1ef488)
          );
        }
      );
    return (
      (_0x5d76f0[_0x19e299(0x23d)]["toLowerCase"]() +
        "\x20" +
        _0x5d76f0["lastName"][_0x19e299(0x1f9)]())[_0x19e299(0x236)](
        _0x1ef488
      ) ||
      _0x5d76f0[_0x19e299(0x23d)]["toLowerCase"]()["includes"](_0x1ef488) ||
      _0x5d76f0[_0x19e299(0x1f0)]
        [_0x19e299(0x1f9)]()
        [_0x19e299(0x236)](_0x1ef488) ||
      _0x5d76f0[_0x19e299(0x1ff)][_0x19e299(0x236)](_0x1ef488) ||
      _0x402136
    );
  });
  createAndAppendEmployers(_0xe4447f, _0x561237),
    _0xe4447f["length"] === 0x0
      ? (document[_0x3659cf(0x249)](_0x3659cf(0x1fc))[_0x3659cf(0x23c)][
          _0x3659cf(0x1f7)
        ] = "block")
      : (document[_0x3659cf(0x249)](_0x3659cf(0x1fc))[_0x3659cf(0x23c)][
          _0x3659cf(0x1f7)
        ] = "none");
}
function reset() {
  const _0x18fb11 = _0x2e2e1b,
    _0x350689 = document[_0x18fb11(0x249)](_0x18fb11(0x1dd));
  (_0x350689[_0x18fb11(0x1f3)] = ""),
    createAndAppendEmployers(allEmployers, _0x350689),
    (document[_0x18fb11(0x249)]("searchEmployersInput")[_0x18fb11(0x241)] = "");
}
