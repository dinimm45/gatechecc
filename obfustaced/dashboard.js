function _0x5945() {
  const _0x322984 = [
    "default",
    "1155624XxVdIO",
    "70qnAKeK",
    "textContent",
    "Total\x20for\x20the\x20month:",
    "tbody",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "14319qQBkfy",
    "data",
    "G-J0DC7YW8J4",
    "insertRow",
    "desc",
    "createTHead",
    "88KPQpNh",
    "get",
    "appendChild",
    "amountPaid",
    "trim",
    "toLowerCase",
    "toLocaleString",
    "long",
    "innerHTML",
    "createElement",
    "You\x20made",
    "toDate",
    "Date\x20&\x20Time",
    "paymentsSections",
    "promoCodeInput",
    "Error\x20fetching\x20data:\x20",
    "empty",
    "No\x20records\x20found\x20for\x20the\x20provided\x20promo\x20code.",
    "collection",
    "12HrAfGT",
    "insertCell",
    "colSpan",
    "295746EIsWXM",
    "code",
    "2432omeEDo",
    "983175SerXnt",
    "orderBy",
    "then",
    "1344245CPILXq",
    "forEach",
    "table",
    "getMonth",
    "368315RstWYd",
    "timestamp",
    "getElementById",
    "firestore",
  ];
  _0x5945 = function () {
    return _0x322984;
  };
  return _0x5945();
}
function _0x3089(_0x48e6d5, _0x577bc5) {
  const _0x5945bf = _0x5945();
  return (
    (_0x3089 = function (_0x30897f, _0x2b611a) {
      _0x30897f = _0x30897f - 0x153;
      let _0x443bb7 = _0x5945bf[_0x30897f];
      return _0x443bb7;
    }),
    _0x3089(_0x48e6d5, _0x577bc5)
  );
}
const _0x434692 = _0x3089;
(function (_0x191e44, _0x51baac) {
  const _0x1b2738 = _0x3089,
    _0xd43055 = _0x191e44();
  while (!![]) {
    try {
      const _0x49ac0c =
        (parseInt(_0x1b2738(0x15c)) / 0x1) *
          (-parseInt(_0x1b2738(0x174)) / 0x2) +
        parseInt(_0x1b2738(0x175)) / 0x3 +
        (parseInt(_0x1b2738(0x16f)) / 0x4) *
          (parseInt(_0x1b2738(0x17c)) / 0x5) +
        parseInt(_0x1b2738(0x172)) / 0x6 +
        -parseInt(_0x1b2738(0x178)) / 0x7 +
        -parseInt(_0x1b2738(0x181)) / 0x8 +
        (parseInt(_0x1b2738(0x156)) / 0x9) * (parseInt(_0x1b2738(0x182)) / 0xa);
      if (_0x49ac0c === _0x51baac) break;
      else _0xd43055["push"](_0xd43055["shift"]());
    } catch (_0x205bb4) {
      _0xd43055["push"](_0xd43055["shift"]());
    }
  }
})(_0x5945, 0x2870e);
const firebaseConfig = {
  apiKey: _0x434692(0x155),
  authDomain: "eventsdb-b6aaf.firebaseapp.com",
  projectId: "eventsdb-b6aaf",
  storageBucket: "eventsdb-b6aaf.appspot.com",
  messagingSenderId: "995789907234",
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: _0x434692(0x158),
};
firebase["initializeApp"](firebaseConfig);
const db = firebase[_0x434692(0x17f)]();
function fetchData() {
  const _0x8deaf2 = _0x434692,
    _0x4d132e = document[_0x8deaf2(0x17e)](_0x8deaf2(0x16a))
      ["value"][_0x8deaf2(0x160)]()
      [_0x8deaf2(0x161)](),
    _0xb9b278 = document[_0x8deaf2(0x17e)](_0x8deaf2(0x169));
  (_0xb9b278[_0x8deaf2(0x164)] = ""),
    db[_0x8deaf2(0x16e)]("promotionCodes")
      ["where"](_0x8deaf2(0x173), "==", _0x4d132e)
      [_0x8deaf2(0x176)](_0x8deaf2(0x17d), _0x8deaf2(0x15a))
      [_0x8deaf2(0x15d)]()
      [_0x8deaf2(0x177)]((_0x17d64e) => {
        const _0x5d9f18 = _0x8deaf2;
        if (!_0x17d64e[_0x5d9f18(0x16c)]) {
          let _0x2610af = null,
            _0x503fa5 = null,
            _0x544112 = null,
            _0x2e4e0d = 0x0;
          const _0x53fbf1 = () => {
            const _0x1fdf4c = _0x5d9f18;
            if (_0x544112) {
              const _0x397f90 = _0x544112[_0x1fdf4c(0x159)](),
                _0x2c05b2 = _0x397f90[_0x1fdf4c(0x170)]();
              (_0x2c05b2["textContent"] = _0x1fdf4c(0x153)),
                (_0x2c05b2[_0x1fdf4c(0x171)] = 0x1),
                (_0x397f90[_0x1fdf4c(0x170)]()[_0x1fdf4c(0x183)] = _0x2e4e0d);
            }
          };
          _0x17d64e[_0x5d9f18(0x179)]((_0x6323bd) => {
            const _0x19d223 = _0x5d9f18,
              _0x60fb5d = _0x6323bd[_0x19d223(0x157)](),
              _0x195f5b = _0x60fb5d[_0x19d223(0x17d)][_0x19d223(0x167)](),
              _0x2926eb = _0x195f5b[_0x19d223(0x17b)](),
              _0x4061c3 = _0x195f5b["getFullYear"]();
            if (_0x2926eb !== _0x2610af || _0x4061c3 !== _0x503fa5) {
              _0x53fbf1(),
                (_0x2610af = _0x2926eb),
                (_0x503fa5 = _0x4061c3),
                (_0x2e4e0d = 0x0);
              const _0x56243e = document[_0x19d223(0x165)]("h3");
              (_0x56243e["textContent"] =
                _0x195f5b["toLocaleString"](_0x19d223(0x180), {
                  month: _0x19d223(0x163),
                }) +
                "\x20" +
                _0x4061c3),
                _0xb9b278[_0x19d223(0x15e)](_0x56243e);
              const _0x3064db = document["createElement"](_0x19d223(0x17a)),
                _0x2a88bd = _0x3064db[_0x19d223(0x15b)](),
                _0x59b891 = _0x2a88bd[_0x19d223(0x159)]();
              (_0x59b891[_0x19d223(0x170)]()["textContent"] = _0x19d223(0x166)),
                (_0x59b891[_0x19d223(0x170)]()[_0x19d223(0x183)] =
                  _0x19d223(0x168)),
                _0xb9b278["appendChild"](_0x3064db),
                (_0x544112 = document[_0x19d223(0x165)](_0x19d223(0x154))),
                _0x3064db[_0x19d223(0x15e)](_0x544112);
            }
            if (_0x60fb5d["amountPaid"]) {
              _0x2e4e0d += parseFloat(_0x60fb5d[_0x19d223(0x15f)]);
              const _0x5d82a1 = _0x544112[_0x19d223(0x159)]();
              (_0x5d82a1[_0x19d223(0x170)]()["textContent"] =
                _0x60fb5d[_0x19d223(0x15f)]),
                (_0x5d82a1["insertCell"]()[_0x19d223(0x183)] =
                  _0x195f5b[_0x19d223(0x162)]());
            }
          }),
            _0x53fbf1();
        } else alert(_0x5d9f18(0x16d));
      })
      ["catch"]((_0x1f054d) => {
        const _0x4f20a4 = _0x8deaf2;
        console["error"](_0x4f20a4(0x16b), _0x1f054d);
      });
}
