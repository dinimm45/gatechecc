const _0x229475 = _0x15b2;
(function (_0x11fe95, _0xdc4529) {
  const _0x146940 = _0x15b2,
    _0x105e2e = _0x11fe95();
  while (!![]) {
    try {
      const _0x1881e6 =
        (-parseInt(_0x146940(0x1b4)) / 0x1) *
          (parseInt(_0x146940(0x198)) / 0x2) +
        (-parseInt(_0x146940(0x1b2)) / 0x3) *
          (-parseInt(_0x146940(0x19c)) / 0x4) +
        (-parseInt(_0x146940(0x1a1)) / 0x5) *
          (-parseInt(_0x146940(0x1b9)) / 0x6) +
        (parseInt(_0x146940(0x1b6)) / 0x7) *
          (parseInt(_0x146940(0x19d)) / 0x8) +
        (parseInt(_0x146940(0x1aa)) / 0x9) *
          (-parseInt(_0x146940(0x1af)) / 0xa) +
        -parseInt(_0x146940(0x1b1)) / 0xb +
        (-parseInt(_0x146940(0x1a9)) / 0xc) *
          (-parseInt(_0x146940(0x1a0)) / 0xd);
      if (_0x1881e6 === _0xdc4529) break;
      else _0x105e2e["push"](_0x105e2e["shift"]());
    } catch (_0x55c07b) {
      _0x105e2e["push"](_0x105e2e["shift"]());
    }
  }
})(_0x3827, 0x6ead9);
const firebaseConfig = {
  apiKey: _0x229475(0x1c1),
  authDomain: _0x229475(0x195),
  projectId: _0x229475(0x1c4),
  storageBucket: _0x229475(0x1a8),
  messagingSenderId: _0x229475(0x1be),
  appId: _0x229475(0x197),
  measurementId: _0x229475(0x1b8),
};
firebase[_0x229475(0x1bb)](firebaseConfig);
const db = firebase[_0x229475(0x19a)]();
function _0x15b2(_0x510590, _0x24f007) {
  const _0x3827c4 = _0x3827();
  return (
    (_0x15b2 = function (_0x15b24f, _0x4717bb) {
      _0x15b24f = _0x15b24f - 0x193;
      let _0x3537dc = _0x3827c4[_0x15b24f];
      return _0x3537dc;
    }),
    _0x15b2(_0x510590, _0x24f007)
  );
}
function _0x3827() {
  const _0x57dc4a = [
    "appendChild",
    "initializeApp",
    "getElementById",
    "get",
    "995789907234",
    "getFullYear",
    "textContent",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "Total\x20for\x20the\x20month:",
    "promoCodeInput",
    "eventsdb-b6aaf",
    "desc",
    "amountPaid",
    "eventsdb-b6aaf.firebaseapp.com",
    "value",
    "1:995789907234:web:54edcc689b1c894594717b",
    "2IleYJV",
    "paymentsSections",
    "firestore",
    "insertCell",
    "1438068agZYWG",
    "24632hBbPjN",
    "toLocaleString",
    "data",
    "3010631tHuYbp",
    "6865hfmXWR",
    "then",
    "You\x20made",
    "toLowerCase",
    "code",
    "trim",
    "createElement",
    "eventsdb-b6aaf.appspot.com",
    "12AWqzwS",
    "99603cbuOQn",
    "No\x20records\x20found\x20for\x20the\x20provided\x20promo\x20code.",
    "empty",
    "default",
    "timestamp",
    "510mQhvvk",
    "insertRow",
    "1824284EEClMh",
    "3YYBKAB",
    "table",
    "576835yzxamf",
    "error",
    "1491eFltBy",
    "tbody",
    "G-J0DC7YW8J4",
    "2244Epfknt",
  ];
  _0x3827 = function () {
    return _0x57dc4a;
  };
  return _0x3827();
}
function fetchData() {
  const _0x397ae1 = _0x229475,
    _0x3c3abc = document[_0x397ae1(0x1bc)](_0x397ae1(0x1c3))
      [_0x397ae1(0x196)][_0x397ae1(0x1a6)]()
      [_0x397ae1(0x1a4)](),
    _0xee6edb = document[_0x397ae1(0x1bc)](_0x397ae1(0x199));
  (_0xee6edb["innerHTML"] = ""),
    db["collection"]("promotionCodes")
      ["where"](_0x397ae1(0x1a5), "==", _0x3c3abc)
      ["orderBy"](_0x397ae1(0x1ae), _0x397ae1(0x193))
      [_0x397ae1(0x1bd)]()
      [_0x397ae1(0x1a2)]((_0x44d59f) => {
        const _0x203cd5 = _0x397ae1;
        if (!_0x44d59f[_0x203cd5(0x1ac)]) {
          let _0x5ed8eb = null,
            _0x221ba9 = null,
            _0x19aec0 = null,
            _0x54d2e7 = 0x0;
          const _0x1cd16c = () => {
            const _0x1a4f32 = _0x203cd5;
            if (_0x19aec0) {
              const _0x2fdd48 = _0x19aec0["insertRow"](),
                _0x2178ca = _0x2fdd48["insertCell"]();
              (_0x2178ca[_0x1a4f32(0x1c0)] = _0x1a4f32(0x1c2)),
                (_0x2178ca["colSpan"] = 0x1),
                (_0x2fdd48[_0x1a4f32(0x19b)]()[_0x1a4f32(0x1c0)] = _0x54d2e7);
            }
          };
          _0x44d59f["forEach"]((_0x3985d) => {
            const _0x34dc81 = _0x203cd5,
              _0x18a903 = _0x3985d[_0x34dc81(0x19f)](),
              _0xb2615c = _0x18a903["timestamp"]["toDate"](),
              _0x144330 = _0xb2615c["getMonth"](),
              _0x20c164 = _0xb2615c[_0x34dc81(0x1bf)]();
            if (_0x144330 !== _0x5ed8eb || _0x20c164 !== _0x221ba9) {
              _0x1cd16c(),
                (_0x5ed8eb = _0x144330),
                (_0x221ba9 = _0x20c164),
                (_0x54d2e7 = 0x0);
              const _0x3756da = document[_0x34dc81(0x1a7)]("h3");
              (_0x3756da[_0x34dc81(0x1c0)] =
                _0xb2615c[_0x34dc81(0x19e)](_0x34dc81(0x1ad), {
                  month: "long",
                }) +
                "\x20" +
                _0x20c164),
                _0xee6edb[_0x34dc81(0x1ba)](_0x3756da);
              const _0x10050e = document[_0x34dc81(0x1a7)](_0x34dc81(0x1b3)),
                _0x1421b6 = _0x10050e["createTHead"](),
                _0x41843e = _0x1421b6["insertRow"]();
              (_0x41843e["insertCell"]()[_0x34dc81(0x1c0)] = _0x34dc81(0x1a3)),
                (_0x41843e[_0x34dc81(0x19b)]()[_0x34dc81(0x1c0)] =
                  "Date\x20&\x20Time"),
                _0xee6edb[_0x34dc81(0x1ba)](_0x10050e),
                (_0x19aec0 = document[_0x34dc81(0x1a7)](_0x34dc81(0x1b7))),
                _0x10050e["appendChild"](_0x19aec0);
            }
            if (_0x18a903[_0x34dc81(0x194)]) {
              _0x54d2e7 += parseFloat(_0x18a903[_0x34dc81(0x194)]);
              const _0x33cf81 = _0x19aec0[_0x34dc81(0x1b0)]();
              (_0x33cf81["insertCell"]()[_0x34dc81(0x1c0)] =
                _0x18a903[_0x34dc81(0x194)]),
                (_0x33cf81["insertCell"]()[_0x34dc81(0x1c0)] =
                  _0xb2615c[_0x34dc81(0x19e)]());
            }
          }),
            _0x1cd16c();
        } else alert(_0x203cd5(0x1ab));
      })
      ["catch"]((_0x2db329) => {
        const _0x139d33 = _0x397ae1;
        console[_0x139d33(0x1b5)]("Error\x20fetching\x20data:\x20", _0x2db329);
      });
}
