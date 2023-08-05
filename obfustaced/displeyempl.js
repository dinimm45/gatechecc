const _0x18db8c = _0x4ec2;
(function (_0x25b602, _0x3faa7c) {
  const _0x186906 = _0x4ec2,
    _0x2b511c = _0x25b602();
  while (!![]) {
    try {
      const _0x54a082 =
        -parseInt(_0x186906(0x23d)) / 0x1 +
        -parseInt(_0x186906(0x201)) / 0x2 +
        (parseInt(_0x186906(0x20b)) / 0x3) *
          (-parseInt(_0x186906(0x202)) / 0x4) +
        (-parseInt(_0x186906(0x227)) / 0x5) *
          (-parseInt(_0x186906(0x20e)) / 0x6) +
        -parseInt(_0x186906(0x206)) / 0x7 +
        -parseInt(_0x186906(0x22e)) / 0x8 +
        parseInt(_0x186906(0x238)) / 0x9;
      if (_0x54a082 === _0x3faa7c) break;
      else _0x2b511c["push"](_0x2b511c["shift"]());
    } catch (_0x353a48) {
      _0x2b511c["push"](_0x2b511c["shift"]());
    }
  }
})(_0x4f22, 0x4d1c7);
const firebaseConfig = {
  apiKey: _0x18db8c(0x1dc),
  authDomain: _0x18db8c(0x221),
  projectId: _0x18db8c(0x1db),
  storageBucket: _0x18db8c(0x228),
  messagingSenderId: _0x18db8c(0x23c),
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: _0x18db8c(0x1e6),
};
function _0x4ec2(_0x46389b, _0x54f6bf) {
  const _0x4f22ba = _0x4f22();
  return (
    (_0x4ec2 = function (_0x4ec259, _0x2569ec) {
      _0x4ec259 = _0x4ec259 - 0x1d4;
      let _0x31eea2 = _0x4f22ba[_0x4ec259];
      return _0x31eea2;
    }),
    _0x4ec2(_0x46389b, _0x54f6bf)
  );
}
firebase[_0x18db8c(0x1da)](firebaseConfig);
function _0x4f22() {
  const _0x838e4a = [
    "isArray",
    "mr-3",
    "set",
    "time",
    "location",
    "5eeRIuW",
    "eventsdb-b6aaf.appspot.com",
    "createElement",
    ",\x20Check-out:\x20",
    "toFixed",
    "log",
    "Phone\x20:\x20",
    "2785296BmkqHr",
    "checkInLocation",
    "MMMM\x20YYYY",
    "className",
    "sort",
    "doc",
    "month",
    "innerHTML",
    "click",
    "reverse",
    "16212447ZSJegN",
    "details",
    "summary",
    "appendChild",
    "995789907234",
    "530625pJXYDG",
    "data",
    "phoneNumber",
    "New\x20company\x20created\x20and\x20check-in\x20location\x20added:\x20",
    "Error\x20getting\x20documents:\x20",
    "employers",
    "Please\x20enter\x20the\x20name\x20of\x20the\x20new\x20check-in\x20location\x20(no\x20spaces):",
    "none",
    "initializeApp",
    "eventsdb-b6aaf",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "getFullYear",
    "Name\x20:\x20",
    "lastCheckInTime",
    "\x20hours",
    ",\x20Check-in\x20location:\x20",
    "getElementById",
    "span",
    "checkInTime",
    "checkOutLocation",
    "G-J0DC7YW8J4",
    "toDate",
    "catch",
    "firestore",
    "addEventListener",
    "YYYY-MM",
    "getMonth",
    "card",
    "companyName",
    "employersList",
    "FieldValue",
    "empty",
    "then",
    ",\x20Working\x20hours:\x20",
    "Total\x20for\x20",
    "style",
    "length",
    "textContent",
    "toLowerCase",
    "resetButton",
    "push",
    "checkOutTimes",
    "New\x20check-in\x20location\x20successfully\x20added:\x20",
    "\x20Total\x20working\x20hours\x20(current\x20month):\x20",
    "LLL",
    "Error\x20adding\x20new\x20check-in\x20location:\x20",
    "addcheckpoint",
    "209378TDqGLW",
    "2103812rOpiXV",
    "keys",
    "showEmployersButton",
    "fromNow",
    "347368ukSnWI",
    "N/A",
    "block",
    "checkInTimes",
    "display",
    "3hmJxoi",
    "errorMessage",
    "forEach",
    "441102JxnSJk",
    "exists",
    "error",
    "workingHours",
    "lastName",
    "get",
    "employer-item",
    "searchButton",
    "firstName",
    "searchEmployersInput",
    "companies",
    "value",
    "div",
    "format",
    "isSame",
    "\x20Last\x20check-in\x20:\x20",
    "collection",
    "includes",
    "card-body",
    "eventsdb-b6aaf.firebaseapp.com",
  ];
  _0x4f22 = function () {
    return _0x838e4a;
  };
  return _0x4f22();
}
const db = firebase[_0x18db8c(0x1e9)]();
let allEmployers = [];
function getYearMonth(_0x2fb12c) {
  const _0x491c0d = _0x18db8c,
    _0x168b4c = _0x2fb12c[_0x491c0d(0x1dd)](),
    _0x37eee0 = _0x2fb12c[_0x491c0d(0x1ec)]() + 0x1;
  return _0x168b4c + "-" + (_0x37eee0 < 0xa ? "0" + _0x37eee0 : _0x37eee0);
}
function createAndAppendEmployers(_0x5696ab, _0x4f33ff) {
  const _0x434d46 = _0x18db8c;
  _0x5696ab[_0x434d46(0x20d)]((_0x1be7b0) => {
    const _0x581e66 = _0x434d46,
      _0x2f0a27 = document[_0x581e66(0x229)]("li");
    _0x2f0a27[_0x581e66(0x231)] = _0x581e66(0x214);
    const _0xcceee = document[_0x581e66(0x229)](_0x581e66(0x21a));
    _0xcceee[_0x581e66(0x231)] = _0x581e66(0x1ed);
    const _0x53a9ef = document[_0x581e66(0x229)](_0x581e66(0x21a));
    _0x53a9ef["className"] = _0x581e66(0x220);
    const _0x43e6ce = document[_0x581e66(0x229)](_0x581e66(0x1e3));
    (_0x43e6ce["textContent"] =
      _0x581e66(0x1de) +
      _0x1be7b0[_0x581e66(0x216)] +
      "\x20" +
      _0x1be7b0[_0x581e66(0x212)]),
      (_0x43e6ce["className"] = _0x581e66(0x223)),
      _0x53a9ef["appendChild"](_0x43e6ce);
    const _0x1b66de = document[_0x581e66(0x229)]("span");
    (_0x1b66de[_0x581e66(0x1f7)] =
      _0x581e66(0x22d) + _0x1be7b0[_0x581e66(0x1d4)]),
      _0x53a9ef[_0x581e66(0x23b)](_0x1b66de);
    if (_0x1be7b0[_0x581e66(0x1df)]) {
      const _0x8d76f0 = document[_0x581e66(0x229)]("span");
      (_0x8d76f0["textContent"] =
        _0x581e66(0x21d) +
        moment(_0x1be7b0[_0x581e66(0x1df)][_0x581e66(0x1e7)]())[
          _0x581e66(0x205)
        ]()),
        _0x53a9ef[_0x581e66(0x23b)](_0x8d76f0);
    }
    if (
      Array[_0x581e66(0x222)](_0x1be7b0[_0x581e66(0x209)]) &&
      Array[_0x581e66(0x222)](_0x1be7b0[_0x581e66(0x1fb)])
    ) {
      let _0xccc4f4 = 0x0;
      const _0xd5fba4 = {};
      for (
        let _0x379b0d = 0x0;
        _0x379b0d < _0x1be7b0[_0x581e66(0x209)][_0x581e66(0x1f6)];
        _0x379b0d++
      ) {
        const _0x3332e8 =
            _0x1be7b0[_0x581e66(0x209)][_0x379b0d]["time"]["toDate"](),
          _0x313e6b = _0x1be7b0[_0x581e66(0x209)][_0x379b0d][_0x581e66(0x226)],
          _0x514f5b = _0x1be7b0[_0x581e66(0x1fb)][_0x379b0d]
            ? _0x1be7b0[_0x581e66(0x1fb)][_0x379b0d][_0x581e66(0x225)][
                _0x581e66(0x1e7)
              ]()
            : new Date(),
          _0x3bd9a9 = _0x1be7b0[_0x581e66(0x1fb)][_0x379b0d]
            ? _0x1be7b0[_0x581e66(0x1fb)][_0x379b0d][_0x581e66(0x226)]
            : _0x581e66(0x207),
          _0x3ed322 = (_0x514f5b - _0x3332e8) / (0x3e8 * 0x3c * 0x3c),
          _0x49cbd7 = getYearMonth(_0x3332e8);
        !_0xd5fba4[_0x49cbd7] &&
          (_0xd5fba4[_0x49cbd7] = { workingHours: 0x0, checkIns: [] }),
          (_0xd5fba4[_0x49cbd7][_0x581e66(0x211)] += _0x3ed322),
          _0xd5fba4[_0x49cbd7]["checkIns"]["push"]({
            checkInTime: _0x3332e8,
            checkOutTime: _0x514f5b,
            workingHours: _0x3ed322,
            checkInLocation: _0x313e6b,
            checkOutLocation: _0x3bd9a9,
          }),
          moment(_0x3332e8)[_0x581e66(0x21c)](new Date(), _0x581e66(0x234)) &&
            (_0xccc4f4 += _0x3ed322);
      }
      const _0x436569 = document[_0x581e66(0x229)]("span");
      (_0x436569[_0x581e66(0x1f7)] =
        _0x581e66(0x1fd) + _0xccc4f4[_0x581e66(0x22b)](0x2) + _0x581e66(0x1e0)),
        _0x53a9ef[_0x581e66(0x23b)](_0x436569);
      const _0x541dd5 = document["createElement"]("details"),
        _0x4b467d = document[_0x581e66(0x229)](_0x581e66(0x23a));
      (_0x4b467d[_0x581e66(0x1f7)] = "Monthly\x20Working\x20Hours\x20Record"),
        _0x541dd5[_0x581e66(0x23b)](_0x4b467d);
      const _0xbb105c = Object[_0x581e66(0x203)](_0xd5fba4)
        [_0x581e66(0x232)]()
        [_0x581e66(0x237)]();
      _0xbb105c[_0x581e66(0x20d)]((_0x465d06) => {
        const _0x2213a0 = _0x581e66,
          _0x5e3134 = _0xd5fba4[_0x465d06],
          _0x30da5f = document[_0x2213a0(0x229)](_0x2213a0(0x239)),
          _0x3537c6 = document[_0x2213a0(0x229)](_0x2213a0(0x23a));
        (_0x3537c6["textContent"] =
          _0x2213a0(0x1f4) +
          moment(_0x465d06, _0x2213a0(0x1eb))[_0x2213a0(0x21b)](
            _0x2213a0(0x230)
          ) +
          ":\x20" +
          _0x5e3134[_0x2213a0(0x211)][_0x2213a0(0x22b)](0x2) +
          _0x2213a0(0x1e0)),
          _0x30da5f[_0x2213a0(0x23b)](_0x3537c6),
          _0x5e3134["checkIns"]["forEach"]((_0x483290) => {
            const _0x5f1aa0 = _0x2213a0,
              _0x216512 = document["createElement"]("li");
            (_0x216512[_0x5f1aa0(0x1f7)] =
              "Check-in:\x20" +
              moment(_0x483290[_0x5f1aa0(0x1e4)])[_0x5f1aa0(0x21b)](
                _0x5f1aa0(0x1fe)
              ) +
              _0x5f1aa0(0x1e1) +
              _0x483290[_0x5f1aa0(0x22f)] +
              _0x5f1aa0(0x22a) +
              moment(_0x483290["checkOutTime"])["format"]("LLL") +
              ",\x20Check-out\x20location:\x20" +
              _0x483290[_0x5f1aa0(0x1e5)] +
              _0x5f1aa0(0x1f3) +
              _0x483290[_0x5f1aa0(0x211)][_0x5f1aa0(0x22b)](0x2) +
              _0x5f1aa0(0x1e0)),
              _0x30da5f[_0x5f1aa0(0x23b)](_0x216512);
          }),
          _0x541dd5[_0x2213a0(0x23b)](_0x30da5f);
      }),
        _0x53a9ef[_0x581e66(0x23b)](_0x541dd5);
    }
    _0xcceee[_0x581e66(0x23b)](_0x53a9ef),
      _0x2f0a27[_0x581e66(0x23b)](_0xcceee),
      _0x4f33ff[_0x581e66(0x23b)](_0x2f0a27);
  });
}
document[_0x18db8c(0x1e2)](_0x18db8c(0x200))[_0x18db8c(0x1ea)](
  _0x18db8c(0x236),
  addCheck
);
function hideShowBtn() {
  const _0x4d2f50 = _0x18db8c;
  (document[_0x4d2f50(0x1e2)](_0x4d2f50(0x1ee))["style"]["display"] = "none"),
    (document[_0x4d2f50(0x1e2)](_0x4d2f50(0x204))["style"][_0x4d2f50(0x20a)] =
      "none"),
    (document[_0x4d2f50(0x1e2)]("searchEmployersInput")[_0x4d2f50(0x1f5)][
      _0x4d2f50(0x20a)
    ] = _0x4d2f50(0x208)),
    (document["getElementById"]("searchButton")[_0x4d2f50(0x1f5)][
      _0x4d2f50(0x20a)
    ] = _0x4d2f50(0x208)),
    (document[_0x4d2f50(0x1e2)](_0x4d2f50(0x1f9))[_0x4d2f50(0x1f5)][
      _0x4d2f50(0x20a)
    ] = "block"),
    (document[_0x4d2f50(0x1e2)](_0x4d2f50(0x200))[_0x4d2f50(0x1f5)][
      _0x4d2f50(0x20a)
    ] = _0x4d2f50(0x208));
}
function showEmployers() {
  const _0x431746 = _0x18db8c,
    _0x5afb29 =
      document[_0x431746(0x1e2)]("companyName")[_0x431746(0x219)][
        "toLowerCase"
      ](),
    _0x218edd = document[_0x431746(0x1e2)](_0x431746(0x1ef));
  _0x218edd[_0x431746(0x235)] = "";
  const _0x2e8192 = document[_0x431746(0x1e2)]("ads");
  (_0x2e8192[_0x431746(0x1f5)][_0x431746(0x20a)] = "none"),
    db["collection"](_0x431746(0x218))
      [_0x431746(0x233)](_0x5afb29)
      ["collection"](_0x431746(0x1d7))
      [_0x431746(0x213)]()
      ["then"]((_0x3ecb8a) => {
        const _0x350b11 = _0x431746;
        if (_0x3ecb8a[_0x350b11(0x1f1)])
          document[_0x350b11(0x1e2)](_0x350b11(0x20c))[_0x350b11(0x1f5)][
            _0x350b11(0x20a)
          ] = _0x350b11(0x208);
        else {
          const _0x597fb7 = [];
          _0x3ecb8a[_0x350b11(0x20d)]((_0xf7136) => {
            const _0x3d6369 = _0x350b11,
              _0x446581 = _0xf7136[_0x3d6369(0x23e)]();
            (_0x446581["id"] = _0xf7136["id"]),
              _0x597fb7[_0x3d6369(0x1fa)](_0x446581);
          }),
            (allEmployers = _0x597fb7),
            _0x597fb7[_0x350b11(0x232)]((_0x1da37f, _0x2fa03e) => {
              const _0x1f2932 = _0x350b11;
              if (_0x1da37f[_0x1f2932(0x1df)] < _0x2fa03e[_0x1f2932(0x1df)])
                return 0x1;
              if (_0x1da37f[_0x1f2932(0x1df)] > _0x2fa03e[_0x1f2932(0x1df)])
                return -0x1;
              return 0x0;
            }),
            createAndAppendEmployers(_0x597fb7, _0x218edd),
            (document[_0x350b11(0x1e2)](_0x350b11(0x20c))[_0x350b11(0x1f5)][
              _0x350b11(0x20a)
            ] = _0x350b11(0x1d9)),
            (document[_0x350b11(0x1e2)](_0x350b11(0x1ee))[_0x350b11(0x1f5)][
              _0x350b11(0x20a)
            ] = "none"),
            (document[_0x350b11(0x1e2)](_0x350b11(0x204))["style"][
              _0x350b11(0x20a)
            ] = _0x350b11(0x1d9)),
            (document[_0x350b11(0x1e2)](_0x350b11(0x217))[_0x350b11(0x1f5)][
              "display"
            ] = _0x350b11(0x208)),
            (document["getElementById"](_0x350b11(0x215))[_0x350b11(0x1f5)][
              _0x350b11(0x20a)
            ] = _0x350b11(0x208)),
            (document["getElementById"](_0x350b11(0x1f9))[_0x350b11(0x1f5)][
              _0x350b11(0x20a)
            ] = _0x350b11(0x208)),
            (document[_0x350b11(0x1e2)](_0x350b11(0x200))[_0x350b11(0x1f5)][
              "display"
            ] = _0x350b11(0x208));
        }
      })
      ["catch"]((_0x14f0d1) => {
        const _0x573571 = _0x431746;
        console[_0x573571(0x22c)](_0x573571(0x1d6), _0x14f0d1);
      });
}
let isAddingCheck = ![];
function addCheck() {
  const _0xc1a14a = _0x18db8c;
  if (isAddingCheck) return;
  isAddingCheck = !![];
  let _0x53fe8f = "";
  do {
    _0x53fe8f = prompt(_0xc1a14a(0x1d8));
  } while (_0x53fe8f == null || _0x53fe8f[_0xc1a14a(0x21f)]("\x20"));
  let _0x24ffe9 = document[_0xc1a14a(0x1e2)](_0xc1a14a(0x1ee))[
      _0xc1a14a(0x219)
    ][_0xc1a14a(0x1f8)](),
    _0x3486ab = db[_0xc1a14a(0x21e)](_0xc1a14a(0x218))[_0xc1a14a(0x233)](
      _0x24ffe9
    );
  _0x3486ab[_0xc1a14a(0x213)]()[_0xc1a14a(0x1f2)]((_0x10052e) => {
    const _0x402a79 = _0xc1a14a;
    _0x10052e[_0x402a79(0x20f)]
      ? _0x3486ab["update"]({
          checkinLocations:
            firebase["firestore"][_0x402a79(0x1f0)]["arrayUnion"](_0x53fe8f),
        })
          [_0x402a79(0x1f2)](function () {
            const _0x84e4f3 = _0x402a79;
            console[_0x84e4f3(0x22c)](_0x84e4f3(0x1fc), _0x53fe8f),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          [_0x402a79(0x1e8)](function (_0x3e6651) {
            const _0x5751f7 = _0x402a79;
            console[_0x5751f7(0x210)](_0x5751f7(0x1ff), _0x3e6651),
              (isAddingCheck = ![]);
          })
      : _0x3486ab[_0x402a79(0x224)]({ checkinLocations: [_0x53fe8f] })
          [_0x402a79(0x1f2)](function () {
            const _0x32eddf = _0x402a79;
            console[_0x32eddf(0x22c)](_0x32eddf(0x1d5), _0x53fe8f),
              showEmployers(),
              (isAddingCheck = ![]);
          })
          ["catch"](function (_0x42d6c1) {
            const _0x4b2e30 = _0x402a79;
            console[_0x4b2e30(0x210)](
              "Error\x20creating\x20company\x20and\x20adding\x20check-in\x20location:\x20",
              _0x42d6c1
            ),
              (isAddingCheck = ![]);
          });
  });
}
function searchEmployers() {
  const _0x22959f = _0x18db8c,
    _0xd3b621 = document["getElementById"](_0x22959f(0x217))[_0x22959f(0x219)][
      _0x22959f(0x1f8)
    ](),
    _0x154dec = document[_0x22959f(0x1e2)](_0x22959f(0x1ef));
  _0x154dec["innerHTML"] = "";
  const _0x2cc3b0 = allEmployers["filter"](
    (_0x36252a) =>
      (_0x36252a["firstName"]["toLowerCase"]() +
        "\x20" +
        _0x36252a[_0x22959f(0x212)]["toLowerCase"]())["includes"](_0xd3b621) ||
      _0x36252a[_0x22959f(0x216)]
        [_0x22959f(0x1f8)]()
        [_0x22959f(0x21f)](_0xd3b621) ||
      _0x36252a[_0x22959f(0x212)]
        [_0x22959f(0x1f8)]()
        [_0x22959f(0x21f)](_0xd3b621) ||
      _0x36252a[_0x22959f(0x1d4)][_0x22959f(0x21f)](_0xd3b621)
  );
  createAndAppendEmployers(_0x2cc3b0, _0x154dec),
    _0x2cc3b0[_0x22959f(0x1f6)] === 0x0
      ? (document[_0x22959f(0x1e2)](_0x22959f(0x20c))[_0x22959f(0x1f5)][
          _0x22959f(0x20a)
        ] = _0x22959f(0x208))
      : (document[_0x22959f(0x1e2)](_0x22959f(0x20c))[_0x22959f(0x1f5)][
          "display"
        ] = _0x22959f(0x1d9));
}
function reset() {
  const _0xc5d000 = _0x18db8c,
    _0x240b5c = document[_0xc5d000(0x1e2)](_0xc5d000(0x1ef));
  (_0x240b5c[_0xc5d000(0x235)] = ""),
    createAndAppendEmployers(allEmployers, _0x240b5c),
    (document[_0xc5d000(0x1e2)](_0xc5d000(0x217))["value"] = "");
}
