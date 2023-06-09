function _0x33ef(_0x51fa6b, _0xc56a39) {
  const _0x3156e5 = _0x3156();
  return (
    (_0x33ef = function (_0x33ef97, _0x58e98d) {
      _0x33ef97 = _0x33ef97 - 0x1de;
      let _0x59f142 = _0x3156e5[_0x33ef97];
      return _0x59f142;
    }),
    _0x33ef(_0x51fa6b, _0xc56a39)
  );
}
const _0x145f16 = _0x33ef;
function _0x3156() {
  const _0x15424b = [
    "innerHTML",
    "createElement",
    "6836420UsaEhq",
    "forEach",
    "span",
    "collection",
    "clipboard",
    "546RZGfME",
    "\x20times",
    "110bnnPUa",
    "doc",
    "eventsdb-b6aaf.appspot.com",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "card-body",
    "ads",
    "addEventListener",
    "textContent",
    "Error\x20fetching\x20updated\x20document:\x20",
    "phoneNumber",
    "data",
    "1831743wRMfVH",
    "?code=",
    "style",
    "block",
    "67084BWcvar",
    "18CVUjjZ",
    "29424IyDMLe",
    "errorMessage",
    "div",
    "Error\x20getting\x20documents:\x20",
    "415618FpOrmk",
    "click",
    "3960496VLURVk",
    "Copy",
    "increment",
    "You\x20are\x20cordially\x20invited\x20to\x20my\x20event!\x20kindly\x20visit\x20the\x20website\x20https://gatechecc.com/guest\x20and\x20enter\x20the\x20following\x20code:",
    "appendChild",
    "get",
    "code-item",
    "Error\x20copying\x20code:\x20",
    "copyCount",
    "1YNLtsF",
    "log",
    "className",
    "display",
    "Error\x20updating\x20document:\x20",
    "8290513qNFpCS",
    "codes",
    "G-J0DC7YW8J4",
    "none",
    "catch",
    "then",
    "empty",
    "getElementById",
    "\x20Follow\x20this\x20link\x20to\x20view\x20the\x20QR\x20Code\x20and\x20Image:\x20",
    "where",
    "mr-3",
    "eventsdb-b6aaf.firebaseapp.com",
    "\x20.We\x20look\x20forward\x20to\x20your\x20presence\x20at\x20this\x20extraordinary\x20gathering.",
    "card",
    "codesList",
  ];
  _0x3156 = function () {
    return _0x15424b;
  };
  return _0x3156();
}
(function (_0xfb57d0, _0x435bb2) {
  const _0xa3dbe9 = _0x33ef,
    _0x377160 = _0xfb57d0();
  while (!![]) {
    try {
      const _0x5e9514 =
        (parseInt(_0xa3dbe9(0x1e7)) / 0x1) *
          (-parseInt(_0xa3dbe9(0x219)) / 0x2) +
        parseInt(_0xa3dbe9(0x20f)) / 0x3 +
        (-parseInt(_0xa3dbe9(0x213)) / 0x4) *
          (parseInt(_0xa3dbe9(0x204)) / 0x5) +
        (parseInt(_0xa3dbe9(0x215)) / 0x6) *
          (-parseInt(_0xa3dbe9(0x202)) / 0x7) +
        (parseInt(_0xa3dbe9(0x1de)) / 0x8) *
          (parseInt(_0xa3dbe9(0x214)) / 0x9) +
        parseInt(_0xa3dbe9(0x1fd)) / 0xa +
        -parseInt(_0xa3dbe9(0x1ec)) / 0xb;
      if (_0x5e9514 === _0x435bb2) break;
      else _0x377160["push"](_0x377160["shift"]());
    } catch (_0x1ab1c0) {
      _0x377160["push"](_0x377160["shift"]());
    }
  }
})(_0x3156, 0x8b7f5);
const firebaseConfig = {
  apiKey: _0x145f16(0x207),
  authDomain: _0x145f16(0x1f7),
  projectId: "eventsdb-b6aaf",
  storageBucket: _0x145f16(0x206),
  messagingSenderId: "995789907234",
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: _0x145f16(0x1ee),
};
firebase["initializeApp"](firebaseConfig);
const db = firebase["firestore"]();
function showCodes() {
  const _0x247aec = _0x145f16,
    _0x59814a = document[_0x247aec(0x1f3)]("phoneNumber")["value"],
    _0x54855f = document["getElementById"](_0x247aec(0x1fa));
  _0x54855f[_0x247aec(0x1fb)] = "";
  const _0x2dc906 = document[_0x247aec(0x1f3)](_0x247aec(0x209));
  (_0x2dc906[_0x247aec(0x211)]["display"] = _0x247aec(0x1ef)),
    db[_0x247aec(0x200)](_0x247aec(0x1ed))
      [_0x247aec(0x1f5)](_0x247aec(0x20d), "==", _0x59814a)
      [_0x247aec(0x1e3)]()
      [_0x247aec(0x1f1)]((_0xec7f3a) => {
        const _0x3a10b9 = _0x247aec;
        _0xec7f3a[_0x3a10b9(0x1f2)]
          ? (document[_0x3a10b9(0x1f3)](_0x3a10b9(0x216))[_0x3a10b9(0x211)][
              _0x3a10b9(0x1ea)
            ] = _0x3a10b9(0x212))
          : (_0xec7f3a[_0x3a10b9(0x1fe)]((_0x5c73e8) => {
              const _0x1b4d05 = _0x3a10b9,
                _0x25e0e5 = _0x5c73e8["data"]()["code"],
                _0x1d8e17 = document["createElement"]("li");
              _0x1d8e17[_0x1b4d05(0x1e9)] = _0x1b4d05(0x1e4);
              const _0x547bb8 = document[_0x1b4d05(0x1fc)](_0x1b4d05(0x217));
              _0x547bb8[_0x1b4d05(0x1e9)] = _0x1b4d05(0x1f9);
              const _0x150dc9 = document[_0x1b4d05(0x1fc)](_0x1b4d05(0x217));
              _0x150dc9["className"] = _0x1b4d05(0x208);
              const _0x2c7e39 = document[_0x1b4d05(0x1fc)](_0x1b4d05(0x1ff));
              (_0x2c7e39["textContent"] = _0x25e0e5),
                (_0x2c7e39[_0x1b4d05(0x1e9)] = _0x1b4d05(0x1f6));
              const _0x8ebe = _0x1b4d05(0x1e1),
                _0x2ea0c9 = _0x1b4d05(0x1f8),
                _0x1a4d8a = document["createElement"]("button");
              (_0x1a4d8a[_0x1b4d05(0x1e9)] = "btn\x20btn-secondary"),
                (_0x1a4d8a[_0x1b4d05(0x20b)] =
                  _0x5c73e8[_0x1b4d05(0x20e)]()[_0x1b4d05(0x1e6)] > 0x0
                    ? "Copied\x20" +
                      _0x5c73e8["data"]()["copyCount"] +
                      "\x20times"
                    : _0x1b4d05(0x1df)),
                _0x1a4d8a[_0x1b4d05(0x20a)](_0x1b4d05(0x21a), () => {
                  copyCode(
                    _0x25e0e5,
                    _0x1a4d8a,
                    _0x8ebe,
                    _0x2ea0c9,
                    _0x5c73e8["id"]
                  );
                }),
                _0x150dc9["appendChild"](_0x2c7e39),
                _0x150dc9[_0x1b4d05(0x1e2)](_0x1a4d8a),
                _0x547bb8[_0x1b4d05(0x1e2)](_0x150dc9),
                _0x1d8e17[_0x1b4d05(0x1e2)](_0x547bb8),
                _0x54855f["appendChild"](_0x1d8e17);
            }),
            (document["getElementById"](_0x3a10b9(0x216))[_0x3a10b9(0x211)][
              _0x3a10b9(0x1ea)
            ] = _0x3a10b9(0x1ef)));
      })
      [_0x247aec(0x1f0)]((_0x4011a3) => {
        const _0x41c29f = _0x247aec;
        console[_0x41c29f(0x1e8)](_0x41c29f(0x218), _0x4011a3);
      });
}
function copyCode(_0x254aaa, _0x45070b, _0x3a73da, _0x4729e0, _0x3999df) {
  const _0x181286 = _0x145f16,
    _0x47b07d = "https://gatechecc.com/guest.html",
    _0x562c6e = _0x47b07d + _0x181286(0x210) + _0x254aaa;
  navigator[_0x181286(0x201)]
    ["writeText"](
      "" + _0x3a73da + _0x254aaa + _0x4729e0 + _0x181286(0x1f4) + _0x562c6e
    )
    [_0x181286(0x1f1)](() => {
      const _0xab05d9 = _0x181286;
      db[_0xab05d9(0x200)](_0xab05d9(0x1ed))
        [_0xab05d9(0x205)](_0x3999df)
        ["update"]({
          copyCount: firebase["firestore"]["FieldValue"][_0xab05d9(0x1e0)](0x1),
        })
        [_0xab05d9(0x1f1)](() => {
          const _0xb50be0 = _0xab05d9;
          db[_0xb50be0(0x200)](_0xb50be0(0x1ed))
            [_0xb50be0(0x205)](_0x3999df)
            ["get"]()
            [_0xb50be0(0x1f1)]((_0x5346ef) => {
              const _0x2e1d60 = _0xb50be0;
              _0x45070b[_0x2e1d60(0x20b)] =
                "Copied\x20" +
                _0x5346ef[_0x2e1d60(0x20e)]()[_0x2e1d60(0x1e6)] +
                _0x2e1d60(0x203);
            })
            [_0xb50be0(0x1f0)]((_0x3c136b) => {
              const _0x255ce1 = _0xb50be0;
              console[_0x255ce1(0x1e8)](_0x255ce1(0x20c), _0x3c136b);
            });
        })
        ["catch"]((_0x1f7296) => {
          const _0xa9052b = _0xab05d9;
          console[_0xa9052b(0x1e8)](_0xa9052b(0x1eb), _0x1f7296);
        });
    })
    [_0x181286(0x1f0)]((_0x4ffbf3) => {
      const _0x4a69f6 = _0x181286;
      console[_0x4a69f6(0x1e8)](_0x4a69f6(0x1e5), _0x4ffbf3);
    });
}
