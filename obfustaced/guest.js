function _0x14dd() {
  const _0x45b7fe = [
    "log",
    "qrCode",
    "createElement",
    "eventsdb-b6aaf",
    "DOMContentLoaded",
    "src",
    "trim",
    "qrCodeCard",
    "get",
    "data",
    "cardImage",
    "appendChild",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "image",
    "code",
    "errorMessage",
    "block",
    "7898495EPTmYv",
    "28SUnpvE",
    "1:995789907234:web:54edcc689b1c894594717b",
    "docs",
    "style",
    "Error\x20getting\x20documents:\x20",
    "eventsdb-b6aaf.firebaseapp.com",
    "289090zKKfpn",
    "search",
    "619594zMHljt",
    "none",
    "value",
    "display",
    "_el",
    "html,\x20body",
    "417464QiRnlj",
    "collection",
    "qrCodeImage",
    "firestore",
    "9JsMELs",
    "eventsdb-b6aaf.appspot.com",
    "45lqguSP",
    "getElementById",
    "location",
    "addEventListener",
    "animate",
    "272772gRLnez",
    "qrCodeContainer",
    "645819ObGxXd",
    "height",
    "610864Qdbqyl",
    "2DqtkSH",
  ];
  _0x14dd = function () {
    return _0x45b7fe;
  };
  return _0x14dd();
}
const _0x3485df = _0x49b9;
(function (_0x49f501, _0x4c3430) {
  const _0x547015 = _0x49b9,
    _0x4ba2aa = _0x49f501();
  while (!![]) {
    try {
      const _0x30bfc8 =
        -parseInt(_0x547015(0x156)) / 0x1 +
        (-parseInt(_0x547015(0x16c)) / 0x2) *
          (parseInt(_0x547015(0x169)) / 0x3) +
        -parseInt(_0x547015(0x15c)) / 0x4 +
        (-parseInt(_0x547015(0x162)) / 0x5) *
          (-parseInt(_0x547015(0x167)) / 0x6) +
        (parseInt(_0x547015(0x17f)) / 0x7) *
          (parseInt(_0x547015(0x16b)) / 0x8) +
        (-parseInt(_0x547015(0x160)) / 0x9) *
          (-parseInt(_0x547015(0x154)) / 0xa) +
        parseInt(_0x547015(0x17e)) / 0xb;
      if (_0x30bfc8 === _0x4c3430) break;
      else _0x4ba2aa["push"](_0x4ba2aa["shift"]());
    } catch (_0xa865e0) {
      _0x4ba2aa["push"](_0x4ba2aa["shift"]());
    }
  }
})(_0x14dd, 0x7f847);
const firebaseConfig = {
  apiKey: _0x3485df(0x179),
  authDomain: _0x3485df(0x153),
  projectId: _0x3485df(0x170),
  storageBucket: _0x3485df(0x161),
  messagingSenderId: "995789907234",
  appId: _0x3485df(0x14f),
  measurementId: "G-J0DC7YW8J4",
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x3485df(0x15f)]();
function _0x49b9(_0x510daf, _0x168ea9) {
  const _0x14dd12 = _0x14dd();
  return (
    (_0x49b9 = function (_0x49b984, _0x4b4873) {
      _0x49b984 = _0x49b984 - 0x14f;
      let _0x4812de = _0x14dd12[_0x49b984];
      return _0x4812de;
    }),
    _0x49b9(_0x510daf, _0x168ea9)
  );
}
function showQRCode() {
  const _0x3af7f8 = _0x3485df,
    _0x45432e = document[_0x3af7f8(0x163)](_0x3af7f8(0x16e)),
    _0x3ba751 = _0x45432e[_0x3af7f8(0x158)][_0x3af7f8(0x173)](),
    _0x40526e = document[_0x3af7f8(0x163)](_0x3af7f8(0x168)),
    _0x675775 = document[_0x3af7f8(0x163)](_0x3af7f8(0x174)),
    _0x4788dc = document[_0x3af7f8(0x163)](_0x3af7f8(0x177)),
    _0x17a841 = document[_0x3af7f8(0x163)](_0x3af7f8(0x15e)),
    _0x402682 = document[_0x3af7f8(0x163)]("qrCodeText"),
    _0x3db087 = document[_0x3af7f8(0x163)]("ads");
  (_0x3db087[_0x3af7f8(0x151)][_0x3af7f8(0x159)] = _0x3af7f8(0x157)),
    $(_0x3af7f8(0x15b))[_0x3af7f8(0x166)](
      { scrollTop: $(document)[_0x3af7f8(0x16a)]() },
      0x3e8
    ),
    db[_0x3af7f8(0x15d)]("codes")
      ["where"](_0x3af7f8(0x17b), "==", _0x3ba751)
      [_0x3af7f8(0x175)]()
      ["then"]((_0x427a20) => {
        const _0x84d997 = _0x3af7f8;
        _0x40526e[_0x84d997(0x151)][_0x84d997(0x159)] = _0x84d997(0x17d);
        if (_0x427a20["empty"])
          (_0x675775[_0x84d997(0x151)][_0x84d997(0x159)] = _0x84d997(0x157)),
            (document[_0x84d997(0x163)](_0x84d997(0x17c))[_0x84d997(0x151)][
              _0x84d997(0x159)
            ] = _0x84d997(0x17d));
        else {
          const _0x2cced4 = _0x427a20[_0x84d997(0x150)][0x0],
            _0x2aa404 = _0x2cced4[_0x84d997(0x176)](),
            _0xaa98df = _0x2aa404[_0x84d997(0x17a)];
          _0x4788dc[_0x84d997(0x172)] = _0xaa98df;
          const _0x40e5af = new QRCode(document[_0x84d997(0x16f)]("div"), {
            text: _0x3ba751,
            width: 0x4e,
            height: 0x4e,
          });
          (_0x17a841["innerHTML"] = ""),
            _0x17a841[_0x84d997(0x178)](_0x40e5af[_0x84d997(0x15a)]),
            (_0x675775[_0x84d997(0x151)][_0x84d997(0x159)] = _0x84d997(0x17d)),
            (document[_0x84d997(0x163)]("errorMessage")[_0x84d997(0x151)][
              _0x84d997(0x159)
            ] = "none");
        }
      })
      ["catch"]((_0x1f955d) => {
        const _0x31fc9a = _0x3af7f8;
        console[_0x31fc9a(0x16d)](_0x31fc9a(0x152), _0x1f955d);
      });
}
document[_0x3485df(0x165)](_0x3485df(0x171), function () {
  const _0x278bd1 = _0x3485df,
    _0x1624aa = new URLSearchParams(window[_0x278bd1(0x164)][_0x278bd1(0x155)]),
    _0x1ed193 = _0x1624aa[_0x278bd1(0x175)](_0x278bd1(0x17b));
  _0x1ed193 &&
    ((document["getElementById"](_0x278bd1(0x16e))[_0x278bd1(0x158)] =
      _0x1ed193),
    showQRCode());
});
