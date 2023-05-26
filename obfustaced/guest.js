function _0x1b4f(_0x19d90f, _0x2d300b) {
  const _0x8bccd1 = _0x8bcc();
  return (
    (_0x1b4f = function (_0x1b4f69, _0x5ea710) {
      _0x1b4f69 = _0x1b4f69 - 0x11c;
      let _0x2740a8 = _0x8bccd1[_0x1b4f69];
      return _0x2740a8;
    }),
    _0x1b4f(_0x19d90f, _0x2d300b)
  );
}
function _0x8bcc() {
  const _0x3e269a = [
    "src",
    "1231170PpHaMU",
    "none",
    "9177JPxJIA",
    "get",
    "trim",
    "ads",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "eventsdb-b6aaf",
    "1:995789907234:web:54edcc689b1c894594717b",
    "appendChild",
    "div",
    "block",
    "qrCodeImage",
    "223144rxVUYE",
    "then",
    "eventsdb-b6aaf.firebaseapp.com",
    "createElement",
    "getElementById",
    "value",
    "20vZBUcx",
    "197349UJabPH",
    "display",
    "log",
    "eventsdb-b6aaf.appspot.com",
    "330ThTGOt",
    "230322fKtDws",
    "animate",
    "docs",
    "995789907234",
    "cardImage",
    "catch",
    "Error\x20getting\x20documents:\x20",
    "image",
    "codes",
    "empty",
    "style",
    "54ziyTjR",
    "html,\x20body",
    "height",
    "qrCode",
    "2yWmSGx",
    "521213qDDmVt",
    "firestore",
    "G-J0DC7YW8J4",
    "qrCodeContainer",
    "errorMessage",
    "255372NmTreh",
  ];
  _0x8bcc = function () {
    return _0x3e269a;
  };
  return _0x8bcc();
}
const _0x18cf3a = _0x1b4f;
(function (_0xe3de48, _0x261c24) {
  const _0x50be1d = _0x1b4f,
    _0x29e52b = _0xe3de48();
  while (!![]) {
    try {
      const _0x4737c9 =
        parseInt(_0x50be1d(0x143)) / 0x1 +
        (-parseInt(_0x50be1d(0x122)) / 0x2) *
          (-parseInt(_0x50be1d(0x13e)) / 0x3) +
        -parseInt(_0x50be1d(0x128)) / 0x4 +
        parseInt(_0x50be1d(0x12a)) / 0x5 +
        (-parseInt(_0x50be1d(0x142)) / 0x6) *
          (parseInt(_0x50be1d(0x12c)) / 0x7) +
        (-parseInt(_0x50be1d(0x137)) / 0x8) *
          (parseInt(_0x50be1d(0x11e)) / 0x9) +
        (-parseInt(_0x50be1d(0x13d)) / 0xa) *
          (parseInt(_0x50be1d(0x123)) / 0xb);
      if (_0x4737c9 === _0x261c24) break;
      else _0x29e52b["push"](_0x29e52b["shift"]());
    } catch (_0x2af8ec) {
      _0x29e52b["push"](_0x29e52b["shift"]());
    }
  }
})(_0x8bcc, 0x2338b);
const firebaseConfig = {
  apiKey: _0x18cf3a(0x130),
  authDomain: _0x18cf3a(0x139),
  projectId: _0x18cf3a(0x131),
  storageBucket: _0x18cf3a(0x141),
  messagingSenderId: _0x18cf3a(0x146),
  appId: _0x18cf3a(0x132),
  measurementId: _0x18cf3a(0x125),
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x18cf3a(0x124)]();
function showQRCode() {
  const _0xc4238d = _0x18cf3a,
    _0x3dadd6 = document[_0xc4238d(0x13b)](_0xc4238d(0x121)),
    _0x162cf2 = _0x3dadd6[_0xc4238d(0x13c)][_0xc4238d(0x12e)](),
    _0x37b269 = document[_0xc4238d(0x13b)](_0xc4238d(0x126)),
    _0x1eb818 = document[_0xc4238d(0x13b)]("qrCodeCard"),
    _0x2caf98 = document[_0xc4238d(0x13b)](_0xc4238d(0x147)),
    _0x2ee392 = document[_0xc4238d(0x13b)](_0xc4238d(0x136)),
    _0x599461 = document["getElementById"]("qrCodeText"),
    _0x369e2a = document[_0xc4238d(0x13b)](_0xc4238d(0x12f));
  (_0x369e2a[_0xc4238d(0x11d)][_0xc4238d(0x13f)] = _0xc4238d(0x12b)),
    $(_0xc4238d(0x11f))[_0xc4238d(0x144)](
      { scrollTop: $(document)[_0xc4238d(0x120)]() },
      0x3e8
    ),
    db["collection"](_0xc4238d(0x14b))
      ["where"]("code", "==", _0x162cf2)
      [_0xc4238d(0x12d)]()
      [_0xc4238d(0x138)]((_0x3af78e) => {
        const _0x416c3f = _0xc4238d;
        _0x37b269[_0x416c3f(0x11d)]["display"] = _0x416c3f(0x135);
        if (_0x3af78e[_0x416c3f(0x11c)])
          (_0x1eb818[_0x416c3f(0x11d)]["display"] = _0x416c3f(0x12b)),
            (document["getElementById"](_0x416c3f(0x127))["style"][
              _0x416c3f(0x13f)
            ] = "block");
        else {
          const _0xdec7ff = _0x3af78e[_0x416c3f(0x145)][0x0],
            _0x30e3fe = _0xdec7ff["data"](),
            _0x2f4986 = _0x30e3fe[_0x416c3f(0x14a)];
          _0x2caf98[_0x416c3f(0x129)] = _0x2f4986;
          const _0x250cb4 = new QRCode(
            document[_0x416c3f(0x13a)](_0x416c3f(0x134)),
            { text: _0x162cf2, width: 0x3a, height: 0x3a }
          );
          (_0x2ee392["innerHTML"] = ""),
            _0x2ee392[_0x416c3f(0x133)](_0x250cb4["_el"]),
            (_0x1eb818[_0x416c3f(0x11d)][_0x416c3f(0x13f)] = "block"),
            (document[_0x416c3f(0x13b)](_0x416c3f(0x127))["style"][
              _0x416c3f(0x13f)
            ] = _0x416c3f(0x12b));
        }
      })
      [_0xc4238d(0x148)]((_0x58f0a9) => {
        const _0x5767c2 = _0xc4238d;
        console[_0x5767c2(0x140)](_0x5767c2(0x149), _0x58f0a9);
      });
}
