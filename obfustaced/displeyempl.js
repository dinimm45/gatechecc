const _0x2d49e5 = _0x43df;
function _0x5bff() {
  const _0x288057 = [
    "511678oaVCfZ",
    "sort",
    "isArray",
    "card-body",
    "Last\x20check-in:\x20",
    "length",
    "empty",
    "errorMessage",
    "details",
    "toDate",
    "appendChild",
    "get",
    "span",
    "textContent",
    "\x20:Total\x20working\x20hours:\x20",
    "firestore",
    "Check-ins",
    "value",
    "995789907234",
    "checkInTimes",
    "employer-item",
    "3609579oxiCjw",
    "1:995789907234:web:54edcc689b1c894594717b",
    "display",
    "none",
    "Check-outs",
    "ads",
    "3707735MMuXBM",
    "1612824GEUPQi",
    "catch",
    "15024546jjvlUM",
    "summary",
    "data",
    "companyName",
    "div",
    "4KrUihH",
    "G-J0DC7YW8J4",
    "fromNow",
    "collection",
    "doc",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "card",
    "getElementById",
    "log",
    "style",
    "createElement",
    "12KkEuTa",
    "1840208nNFCNe",
    "checkOutTimes",
    "forEach",
    "className",
    "eventsdb-b6aaf",
    "companies",
    "then",
    "firstName",
    "5449045OkIGLN",
    "eventsdb-b6aaf.appspot.com",
    "block",
    "toFixed",
    "lastCheckInTime",
    "innerHTML",
  ];
  _0x5bff = function () {
    return _0x288057;
  };
  return _0x5bff();
}
function _0x43df(_0x9381d6, _0x26eeee) {
  const _0x5bff44 = _0x5bff();
  return (
    (_0x43df = function (_0x43df3a, _0x32a4ca) {
      _0x43df3a = _0x43df3a - 0x8f;
      let _0x2a8f85 = _0x5bff44[_0x43df3a];
      return _0x2a8f85;
    }),
    _0x43df(_0x9381d6, _0x26eeee)
  );
}
(function (_0x458d7a, _0x5c2ec1) {
  const _0x223bfd = _0x43df,
    _0x56fe19 = _0x458d7a();
  while (!![]) {
    try {
      const _0x2c4c44 =
        (-parseInt(_0x223bfd(0x9c)) / 0x1) * (parseInt(_0x223bfd(0xbf)) / 0x2) +
        parseInt(_0x223bfd(0xb1)) / 0x3 +
        -parseInt(_0x223bfd(0xcb)) / 0x4 +
        (parseInt(_0x223bfd(0xb7)) / 0x5) * (-parseInt(_0x223bfd(0xca)) / 0x6) +
        parseInt(_0x223bfd(0x96)) / 0x7 +
        parseInt(_0x223bfd(0xb8)) / 0x8 +
        parseInt(_0x223bfd(0xba)) / 0x9;
      if (_0x2c4c44 === _0x5c2ec1) break;
      else _0x56fe19["push"](_0x56fe19["shift"]());
    } catch (_0x44490e) {
      _0x56fe19["push"](_0x56fe19["shift"]());
    }
  }
})(_0x5bff, 0xd856b);
const firebaseConfig = {
  apiKey: _0x2d49e5(0xc4),
  authDomain: "eventsdb-b6aaf.firebaseapp.com",
  projectId: _0x2d49e5(0x92),
  storageBucket: _0x2d49e5(0x97),
  messagingSenderId: _0x2d49e5(0xae),
  appId: _0x2d49e5(0xb2),
  measurementId: _0x2d49e5(0xc0),
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x2d49e5(0xab)]();
function showEmployers() {
  const _0x559731 = _0x2d49e5,
    _0x59a9b5 = document[_0x559731(0xc6)](_0x559731(0xbd))[_0x559731(0xad)][
      "toLowerCase"
    ](),
    _0x54329a = document["getElementById"]("employersList");
  _0x54329a[_0x559731(0x9b)] = "";
  const _0x2f0f13 = document["getElementById"](_0x559731(0xb6));
  (_0x2f0f13[_0x559731(0xc8)]["display"] = _0x559731(0xb4)),
    db[_0x559731(0xc2)](_0x559731(0x93))
      [_0x559731(0xc3)](_0x59a9b5)
      [_0x559731(0xc2)]("employers")
      [_0x559731(0xa7)]()
      [_0x559731(0x94)]((_0x3fa40a) => {
        const _0x4d0d64 = _0x559731;
        if (_0x3fa40a[_0x4d0d64(0xa2)])
          document[_0x4d0d64(0xc6)](_0x4d0d64(0xa3))[_0x4d0d64(0xc8)][
            _0x4d0d64(0xb3)
          ] = _0x4d0d64(0x98);
        else {
          const _0x26f3ea = [];
          _0x3fa40a[_0x4d0d64(0x90)]((_0x17b260) => {
            const _0xed2eff = _0x4d0d64,
              _0x5f4ade = _0x17b260[_0xed2eff(0xbc)]();
            (_0x5f4ade["id"] = _0x17b260["id"]), _0x26f3ea["push"](_0x5f4ade);
          }),
            _0x26f3ea[_0x4d0d64(0x9d)]((_0x5f37ac, _0x40b1ef) => {
              const _0x460847 = _0x4d0d64;
              if (_0x5f37ac[_0x460847(0x9a)] < _0x40b1ef["lastCheckInTime"])
                return 0x1;
              if (_0x5f37ac[_0x460847(0x9a)] > _0x40b1ef["lastCheckInTime"])
                return -0x1;
              return 0x0;
            }),
            _0x26f3ea[_0x4d0d64(0x90)]((_0x44c8fe) => {
              const _0x547205 = _0x4d0d64,
                _0x3c0e6d = document[_0x547205(0xc9)]("li");
              _0x3c0e6d[_0x547205(0x91)] = _0x547205(0xb0);
              const _0x160e25 = document[_0x547205(0xc9)](_0x547205(0xbe));
              _0x160e25[_0x547205(0x91)] = _0x547205(0xc5);
              const _0x3e6560 = document[_0x547205(0xc9)](_0x547205(0xbe));
              _0x3e6560[_0x547205(0x91)] = _0x547205(0x9f);
              const _0x47762c = document[_0x547205(0xc9)](_0x547205(0xa8));
              (_0x47762c[_0x547205(0xa9)] =
                "Name:\x20" +
                _0x44c8fe[_0x547205(0x95)] +
                "\x20" +
                _0x44c8fe["lastName"]),
                (_0x47762c["className"] = "mr-3"),
                _0x3e6560["appendChild"](_0x47762c);
              if (_0x44c8fe[_0x547205(0x9a)]) {
                const _0x3ef637 = document[_0x547205(0xc9)](_0x547205(0xa8));
                (_0x3ef637["textContent"] =
                  _0x547205(0xa0) +
                  moment(_0x44c8fe[_0x547205(0x9a)][_0x547205(0xa5)]())[
                    _0x547205(0xc1)
                  ]()),
                  _0x3e6560[_0x547205(0xa6)](_0x3ef637);
              }
              const _0x5f0bcc = document["createElement"](_0x547205(0xa4)),
                _0x201d48 = document["createElement"]("summary");
              (_0x201d48[_0x547205(0xa9)] = _0x547205(0xac)),
                _0x5f0bcc[_0x547205(0xa6)](_0x201d48);
              const _0x44652c = document[_0x547205(0xc9)](_0x547205(0xa4)),
                _0xd84664 = document["createElement"](_0x547205(0xbb));
              (_0xd84664["textContent"] = _0x547205(0xb5)),
                _0x44652c["appendChild"](_0xd84664);
              if (Array[_0x547205(0x9e)](_0x44c8fe[_0x547205(0xaf)])) {
                const _0x480dda = document[_0x547205(0xc9)]("ul");
                _0x44c8fe[_0x547205(0xaf)][_0x547205(0x90)]((_0x4ba074) => {
                  const _0x2bc972 = _0x547205,
                    _0x1eccae = document[_0x2bc972(0xc9)]("li");
                  (_0x1eccae["textContent"] = _0x4ba074["toDate"]()),
                    _0x480dda[_0x2bc972(0xa6)](_0x1eccae);
                }),
                  _0x5f0bcc[_0x547205(0xa6)](_0x480dda);
              }
              if (Array[_0x547205(0x9e)](_0x44c8fe[_0x547205(0x8f)])) {
                const _0x3cbb38 = document[_0x547205(0xc9)]("ul");
                _0x44c8fe[_0x547205(0x8f)]["forEach"]((_0x59dd84) => {
                  const _0x49047e = _0x547205,
                    _0x12ba97 = document[_0x49047e(0xc9)]("li");
                  (_0x12ba97[_0x49047e(0xa9)] = _0x59dd84[_0x49047e(0xa5)]()),
                    _0x3cbb38["appendChild"](_0x12ba97);
                }),
                  _0x44652c[_0x547205(0xa6)](_0x3cbb38);
              }
              let _0x512939 = 0x0;
              if (
                Array["isArray"](_0x44c8fe[_0x547205(0xaf)]) &&
                Array[_0x547205(0x9e)](_0x44c8fe[_0x547205(0x8f)])
              )
                for (
                  let _0x377e07 = 0x0;
                  _0x377e07 < _0x44c8fe["checkInTimes"][_0x547205(0xa1)];
                  _0x377e07++
                ) {
                  const _0x5aa5b0 =
                      _0x44c8fe[_0x547205(0xaf)][_0x377e07][_0x547205(0xa5)](),
                    _0x1ddc0c = _0x44c8fe["checkOutTimes"][_0x377e07]
                      ? _0x44c8fe["checkOutTimes"][_0x377e07][_0x547205(0xa5)]()
                      : new Date(),
                    _0x379c8f = (_0x1ddc0c - _0x5aa5b0) / (0x3e8 * 0x3c * 0x3c);
                  _0x512939 += _0x379c8f;
                }
              const _0x50f726 = document["createElement"](_0x547205(0xa8));
              (_0x50f726[_0x547205(0xa9)] =
                _0x547205(0xaa) + _0x512939[_0x547205(0x99)](0x2)),
                _0x3e6560["appendChild"](_0x50f726),
                _0x3e6560["appendChild"](_0x5f0bcc),
                _0x3e6560[_0x547205(0xa6)](_0x44652c),
                _0x160e25[_0x547205(0xa6)](_0x3e6560),
                _0x3c0e6d[_0x547205(0xa6)](_0x160e25),
                _0x54329a["appendChild"](_0x3c0e6d);
            }),
            (document["getElementById"]("errorMessage")["style"][
              _0x4d0d64(0xb3)
            ] = _0x4d0d64(0xb4));
        }
      })
      [_0x559731(0xb9)]((_0x130b72) => {
        const _0x35862d = _0x559731;
        console[_0x35862d(0xc7)](
          "Error\x20getting\x20documents:\x20",
          _0x130b72
        );
      });
}
