const _0x1fe808 = _0x31f0;
(function (_0x34c848, _0xddab1f) {
  const _0x123074 = _0x31f0,
    _0x198ef0 = _0x34c848();
  while (!![]) {
    try {
      const _0xcbec73 =
        -parseInt(_0x123074(0xee)) / 0x1 +
        -parseInt(_0x123074(0xf5)) / 0x2 +
        (-parseInt(_0x123074(0xd6)) / 0x3) *
          (-parseInt(_0x123074(0xf4)) / 0x4) +
        (parseInt(_0x123074(0xc5)) / 0x5) * (-parseInt(_0x123074(0xd5)) / 0x6) +
        parseInt(_0x123074(0xc8)) / 0x7 +
        -parseInt(_0x123074(0xd9)) / 0x8 +
        parseInt(_0x123074(0xf2)) / 0x9;
      if (_0xcbec73 === _0xddab1f) break;
      else _0x198ef0["push"](_0x198ef0["shift"]());
    } catch (_0x41c9ee) {
      _0x198ef0["push"](_0x198ef0["shift"]());
    }
  }
})(_0x5135, 0x962b4);
function _0x5135() {
  const _0x16c7a7 = [
    "div",
    "Error\x20getting\x20documents:\x20",
    "phoneNumber",
    "14193324qmPkej",
    "doc",
    "4OgHuOz",
    "1470060IwTiqH",
    "G-J0DC7YW8J4",
    "\x20.We\x20look\x20forward\x20to\x20your\x20presence\x20at\x20this\x20extraordinary\x20gathering.",
    "createElement",
    "display",
    "codes",
    "catch",
    "eventsdb-b6aaf.appspot.com",
    "where",
    "firestore",
    "code-item",
    "then",
    "addEventListener",
    "14805VVMcmq",
    "Copy",
    "data",
    "6960394zcZswN",
    "copyCount",
    "forEach",
    "none",
    "update",
    "eventsdb-b6aaf.firebaseapp.com",
    "card",
    "empty",
    "Error\x20copying\x20code:\x20",
    "className",
    "value",
    "textContent",
    "You\x20are\x20cordially\x20invited\x20to\x20my\x20event!\x20kindly\x20visit\x20the\x20website\x20https://gatechecc.com/guest\x20and\x20enter\x20the\x20following\x20code:",
    "492mlbZjY",
    "174387ZbcHxX",
    "getElementById",
    "block",
    "471320iDrxVG",
    "btn\x20btn-secondary",
    "innerHTML",
    "errorMessage",
    "style",
    "\x20times",
    "FieldValue",
    "clipboard",
    "initializeApp",
    "card-body",
    "Copied\x20",
    "log",
    "ads",
    "get",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "collection",
    "995789907234",
    "eventsdb-b6aaf",
    "Error\x20fetching\x20updated\x20document:\x20",
    "appendChild",
    "increment",
    "977668qktHMT",
  ];
  _0x5135 = function () {
    return _0x16c7a7;
  };
  return _0x5135();
}
const firebaseConfig = {
  apiKey: _0x1fe808(0xe7),
  authDomain: _0x1fe808(0xcd),
  projectId: _0x1fe808(0xea),
  storageBucket: _0x1fe808(0xbf),
  messagingSenderId: _0x1fe808(0xe9),
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: _0x1fe808(0xf6),
};
firebase[_0x1fe808(0xe1)](firebaseConfig);
const db = firebase[_0x1fe808(0xc1)]();
function _0x31f0(_0x367c9c, _0x5b924d) {
  const _0x51352d = _0x5135();
  return (
    (_0x31f0 = function (_0x31f0ce, _0x2ee89e) {
      _0x31f0ce = _0x31f0ce - 0xbd;
      let _0x28220f = _0x51352d[_0x31f0ce];
      return _0x28220f;
    }),
    _0x31f0(_0x367c9c, _0x5b924d)
  );
}
function showCodes() {
  const _0x24b7d9 = _0x1fe808,
    _0x2b8132 = document[_0x24b7d9(0xd7)](_0x24b7d9(0xf1))[_0x24b7d9(0xd2)],
    _0x12e05f = document[_0x24b7d9(0xd7)]("codesList");
  _0x12e05f[_0x24b7d9(0xdb)] = "";
  const _0xf90d77 = document[_0x24b7d9(0xd7)](_0x24b7d9(0xe5));
  (_0xf90d77["style"][_0x24b7d9(0xf9)] = _0x24b7d9(0xcb)),
    db["collection"]("codes")
      [_0x24b7d9(0xc0)](_0x24b7d9(0xf1), "==", _0x2b8132)
      [_0x24b7d9(0xe6)]()
      [_0x24b7d9(0xc3)]((_0x26caa4) => {
        const _0x4075f0 = _0x24b7d9;
        _0x26caa4[_0x4075f0(0xcf)]
          ? (document[_0x4075f0(0xd7)](_0x4075f0(0xdc))[_0x4075f0(0xdd)][
              "display"
            ] = _0x4075f0(0xd8))
          : (_0x26caa4[_0x4075f0(0xca)]((_0x51c89a) => {
              const _0x199cc9 = _0x4075f0,
                _0x32bbab = _0x51c89a[_0x199cc9(0xc7)]()["code"],
                _0x1e939c = document[_0x199cc9(0xf8)]("li");
              _0x1e939c[_0x199cc9(0xd1)] = _0x199cc9(0xc2);
              const _0x5c1f93 = document[_0x199cc9(0xf8)](_0x199cc9(0xef));
              _0x5c1f93["className"] = _0x199cc9(0xce);
              const _0x53d82b = document[_0x199cc9(0xf8)](_0x199cc9(0xef));
              _0x53d82b[_0x199cc9(0xd1)] = _0x199cc9(0xe2);
              const _0x137512 = document[_0x199cc9(0xf8)]("span");
              (_0x137512["textContent"] = _0x32bbab),
                (_0x137512["className"] = "mr-3");
              const _0x455de0 = _0x199cc9(0xd4),
                _0x139512 = _0x199cc9(0xf7),
                _0x356ff0 = document[_0x199cc9(0xf8)]("button");
              (_0x356ff0[_0x199cc9(0xd1)] = _0x199cc9(0xda)),
                (_0x356ff0["textContent"] =
                  _0x51c89a[_0x199cc9(0xc7)]()[_0x199cc9(0xc9)] > 0x0
                    ? _0x199cc9(0xe3) +
                      _0x51c89a["data"]()[_0x199cc9(0xc9)] +
                      _0x199cc9(0xde)
                    : _0x199cc9(0xc6)),
                _0x356ff0[_0x199cc9(0xc4)]("click", () => {
                  copyCode(
                    _0x32bbab,
                    _0x356ff0,
                    _0x455de0,
                    _0x139512,
                    _0x51c89a["id"]
                  );
                }),
                _0x53d82b[_0x199cc9(0xec)](_0x137512),
                _0x53d82b[_0x199cc9(0xec)](_0x356ff0),
                _0x5c1f93[_0x199cc9(0xec)](_0x53d82b),
                _0x1e939c[_0x199cc9(0xec)](_0x5c1f93),
                _0x12e05f[_0x199cc9(0xec)](_0x1e939c);
            }),
            (document[_0x4075f0(0xd7)](_0x4075f0(0xdc))[_0x4075f0(0xdd)][
              _0x4075f0(0xf9)
            ] = _0x4075f0(0xcb)));
      })
      [_0x24b7d9(0xbe)]((_0x35df25) => {
        const _0x27ecd8 = _0x24b7d9;
        console[_0x27ecd8(0xe4)](_0x27ecd8(0xf0), _0x35df25);
      });
}
function copyCode(_0x468fb5, _0x4e3482, _0x222510, _0xf72ef, _0x2f6bd9) {
  const _0x3238ac = _0x1fe808;
  navigator[_0x3238ac(0xe0)]
    ["writeText"]("" + _0x222510 + _0x468fb5 + _0xf72ef)
    [_0x3238ac(0xc3)](() => {
      const _0x33e8a0 = _0x3238ac;
      db["collection"](_0x33e8a0(0xbd))
        [_0x33e8a0(0xf3)](_0x2f6bd9)
        [_0x33e8a0(0xcc)]({
          copyCount:
            firebase[_0x33e8a0(0xc1)][_0x33e8a0(0xdf)][_0x33e8a0(0xed)](0x1),
        })
        [_0x33e8a0(0xc3)](() => {
          const _0x41b99a = _0x33e8a0;
          db[_0x41b99a(0xe8)]("codes")
            [_0x41b99a(0xf3)](_0x2f6bd9)
            [_0x41b99a(0xe6)]()
            [_0x41b99a(0xc3)]((_0x32d7e8) => {
              const _0x288ae7 = _0x41b99a;
              _0x4e3482[_0x288ae7(0xd3)] =
                _0x288ae7(0xe3) +
                _0x32d7e8["data"]()[_0x288ae7(0xc9)] +
                _0x288ae7(0xde);
            })
            [_0x41b99a(0xbe)]((_0x113ee5) => {
              const _0x57a79d = _0x41b99a;
              console[_0x57a79d(0xe4)](_0x57a79d(0xeb), _0x113ee5);
            });
        })
        ["catch"]((_0x21ebf7) => {
          const _0x42372c = _0x33e8a0;
          console[_0x42372c(0xe4)](
            "Error\x20updating\x20document:\x20",
            _0x21ebf7
          );
        });
    })
    ["catch"]((_0x4e96ad) => {
      const _0x13967b = _0x3238ac;
      console["log"](_0x13967b(0xd0), _0x4e96ad);
    });
}
