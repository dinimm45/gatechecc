const _0x55aa05 = _0x370a;
(function (_0x3d748c, _0x55c701) {
  const _0x27eb5d = _0x370a,
    _0x5d1603 = _0x3d748c();
  while (!![]) {
    try {
      const _0x347ae0 =
        -parseInt(_0x27eb5d(0xe7)) / 0x1 +
        parseInt(_0x27eb5d(0xd8)) / 0x2 +
        parseInt(_0x27eb5d(0xd2)) / 0x3 +
        (-parseInt(_0x27eb5d(0xce)) / 0x4) *
          (-parseInt(_0x27eb5d(0xb3)) / 0x5) +
        -parseInt(_0x27eb5d(0xb6)) / 0x6 +
        -parseInt(_0x27eb5d(0xde)) / 0x7 +
        -parseInt(_0x27eb5d(0xb9)) / 0x8;
      if (_0x347ae0 === _0x55c701) break;
      else _0x5d1603["push"](_0x5d1603["shift"]());
    } catch (_0x24f979) {
      _0x5d1603["push"](_0x5d1603["shift"]());
    }
  }
})(_0x3d9c, 0xd87fa);
const firebaseConfig = {
  apiKey: _0x55aa05(0xcf),
  authDomain: "eventsdb-b6aaf.firebaseapp.com",
  projectId: "eventsdb-b6aaf",
  storageBucket: "eventsdb-b6aaf.appspot.com",
  messagingSenderId: _0x55aa05(0xca),
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: _0x55aa05(0xfa),
};
function _0x370a(_0x1fb096, _0x13923f) {
  const _0x3d9c3a = _0x3d9c();
  return (
    (_0x370a = function (_0x370a16, _0x431ea5) {
      _0x370a16 = _0x370a16 - 0xb2;
      let _0x378152 = _0x3d9c3a[_0x370a16];
      return _0x378152;
    }),
    _0x370a(_0x1fb096, _0x13923f)
  );
}
function _0x3d9c() {
  const _0x2218d1 = [
    "20VGIrdm",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "appendChild",
    "length",
    "3237735ygiRmD",
    "phoneNumber",
    "then",
    "\x20Total\x20working\x20hours\x20(current\x20month):\x20",
    ",\x20Check-out:\x20",
    "className",
    "1379610LJccUP",
    "card-body",
    "display",
    "div",
    "month",
    "textContent",
    "908600WRlVRk",
    "summary",
    "innerHTML",
    "style",
    "isArray",
    "lastCheckInTime",
    "isSame",
    "lastName",
    "block",
    "703607DPAiOH",
    "workingHours",
    "format",
    "initializeApp",
    "none",
    "checkInTime",
    "employersList",
    "toFixed",
    "Check-in:\x20",
    "getFullYear",
    "forEach",
    "ads",
    "MMMM\x20YYYY",
    "checkIns",
    "employer-item",
    "get",
    "\x20hours",
    "fromNow",
    "checkOutTimes",
    "G-J0DC7YW8J4",
    "toLowerCase",
    "empty",
    "Monthly\x20Working\x20Hours\x20Record",
    "1004355bJTAgG",
    "firestore",
    "log",
    "3351972akOjJk",
    "firstName",
    "getElementById",
    "3956464ECJoFp",
    "Phone\x20:\x20",
    "checkInTimes",
    "LLL",
    "catch",
    "YYYY-MM",
    "createElement",
    "reverse",
    "details",
    "\x20Last\x20check-in\x20:\x20",
    "collection",
    "checkOutTime",
    "employers",
    "span",
    "Name\x20:\x20",
    "value",
    "sort",
    "995789907234",
    "doc",
    "toDate",
    "getMonth",
  ];
  _0x3d9c = function () {
    return _0x2218d1;
  };
  return _0x3d9c();
}
firebase[_0x55aa05(0xea)](firebaseConfig);
const db = firebase[_0x55aa05(0xb4)]();
function getYearMonth(_0x42d1b5) {
  const _0x21d12f = _0x55aa05,
    _0x3619c6 = _0x42d1b5[_0x21d12f(0xf0)](),
    _0x49d401 = _0x42d1b5[_0x21d12f(0xcd)]() + 0x1;
  return _0x3619c6 + "-" + (_0x49d401 < 0xa ? "0" + _0x49d401 : _0x49d401);
}
function showEmployers() {
  const _0x44be68 = _0x55aa05,
    _0x41d281 =
      document["getElementById"]("companyName")[_0x44be68(0xc8)][
        _0x44be68(0xfb)
      ](),
    _0x1bd670 = document["getElementById"](_0x44be68(0xed));
  _0x1bd670[_0x44be68(0xe0)] = "";
  const _0x179dba = document[_0x44be68(0xb8)](_0x44be68(0xf2));
  (_0x179dba[_0x44be68(0xe1)][_0x44be68(0xda)] = _0x44be68(0xeb)),
    db[_0x44be68(0xc3)]("companies")
      [_0x44be68(0xcb)](_0x41d281)
      ["collection"](_0x44be68(0xc5))
      [_0x44be68(0xf6)]()
      [_0x44be68(0xd4)]((_0x44ea3c) => {
        const _0xa1c63d = _0x44be68;
        if (_0x44ea3c[_0xa1c63d(0xfc)])
          document["getElementById"]("errorMessage")[_0xa1c63d(0xe1)][
            _0xa1c63d(0xda)
          ] = _0xa1c63d(0xe6);
        else {
          const _0xe8e583 = [];
          _0x44ea3c[_0xa1c63d(0xf1)]((_0x740456) => {
            const _0x561086 = _0x740456["data"]();
            (_0x561086["id"] = _0x740456["id"]), _0xe8e583["push"](_0x561086);
          }),
            _0xe8e583["sort"]((_0x5f247c, _0x4f1a4c) => {
              const _0x587d58 = _0xa1c63d;
              if (_0x5f247c[_0x587d58(0xe3)] < _0x4f1a4c[_0x587d58(0xe3)])
                return 0x1;
              if (_0x5f247c["lastCheckInTime"] > _0x4f1a4c[_0x587d58(0xe3)])
                return -0x1;
              return 0x0;
            }),
            _0xe8e583["forEach"]((_0x57365c) => {
              const _0x4e7f91 = _0xa1c63d,
                _0x4c25e3 = document[_0x4e7f91(0xbf)]("li");
              _0x4c25e3[_0x4e7f91(0xd7)] = _0x4e7f91(0xf5);
              const _0x27c9a1 = document[_0x4e7f91(0xbf)]("div");
              _0x27c9a1[_0x4e7f91(0xd7)] = "card";
              const _0x5a0920 = document["createElement"](_0x4e7f91(0xdb));
              _0x5a0920[_0x4e7f91(0xd7)] = _0x4e7f91(0xd9);
              const _0x1a3857 = document["createElement"](_0x4e7f91(0xc6));
              (_0x1a3857["textContent"] =
                _0x4e7f91(0xc7) +
                _0x57365c[_0x4e7f91(0xb7)] +
                "\x20" +
                _0x57365c[_0x4e7f91(0xe5)]),
                (_0x1a3857[_0x4e7f91(0xd7)] = "mr-3"),
                _0x5a0920[_0x4e7f91(0xd0)](_0x1a3857);
              const _0x21e7f9 = document[_0x4e7f91(0xbf)](_0x4e7f91(0xc6));
              (_0x21e7f9[_0x4e7f91(0xdd)] =
                _0x4e7f91(0xba) + _0x57365c[_0x4e7f91(0xd3)]),
                _0x5a0920[_0x4e7f91(0xd0)](_0x21e7f9);
              if (_0x57365c[_0x4e7f91(0xe3)]) {
                const _0x2d5050 = document[_0x4e7f91(0xbf)](_0x4e7f91(0xc6));
                (_0x2d5050[_0x4e7f91(0xdd)] =
                  _0x4e7f91(0xc2) +
                  moment(_0x57365c[_0x4e7f91(0xe3)][_0x4e7f91(0xcc)]())[
                    _0x4e7f91(0xf8)
                  ]()),
                  _0x5a0920[_0x4e7f91(0xd0)](_0x2d5050);
              }
              if (
                Array[_0x4e7f91(0xe2)](_0x57365c[_0x4e7f91(0xbb)]) &&
                Array[_0x4e7f91(0xe2)](_0x57365c["checkOutTimes"])
              ) {
                let _0x50cc52 = 0x0;
                const _0x376dee = {};
                for (
                  let _0x136a5c = 0x0;
                  _0x136a5c < _0x57365c[_0x4e7f91(0xbb)][_0x4e7f91(0xd1)];
                  _0x136a5c++
                ) {
                  const _0x30e2ee =
                      _0x57365c[_0x4e7f91(0xbb)][_0x136a5c][_0x4e7f91(0xcc)](),
                    _0x5901b6 = _0x57365c[_0x4e7f91(0xf9)][_0x136a5c]
                      ? _0x57365c[_0x4e7f91(0xf9)][_0x136a5c][_0x4e7f91(0xcc)]()
                      : new Date(),
                    _0x36291f = (_0x5901b6 - _0x30e2ee) / (0x3e8 * 0x3c * 0x3c),
                    _0x2b971f = getYearMonth(_0x30e2ee);
                  !_0x376dee[_0x2b971f] &&
                    (_0x376dee[_0x2b971f] = {
                      workingHours: 0x0,
                      checkIns: [],
                    }),
                    (_0x376dee[_0x2b971f][_0x4e7f91(0xe8)] += _0x36291f),
                    _0x376dee[_0x2b971f][_0x4e7f91(0xf4)]["push"]({
                      checkInTime: _0x30e2ee,
                      checkOutTime: _0x5901b6,
                      workingHours: _0x36291f,
                    }),
                    moment(_0x30e2ee)[_0x4e7f91(0xe4)](
                      new Date(),
                      _0x4e7f91(0xdc)
                    ) && (_0x50cc52 += _0x36291f);
                }
                const _0x36aa40 = document[_0x4e7f91(0xbf)]("span");
                (_0x36aa40[_0x4e7f91(0xdd)] =
                  _0x4e7f91(0xd5) +
                  _0x50cc52["toFixed"](0x2) +
                  _0x4e7f91(0xf7)),
                  _0x5a0920["appendChild"](_0x36aa40);
                const _0x33e805 = document[_0x4e7f91(0xbf)](_0x4e7f91(0xc1)),
                  _0x4ae3c9 = document[_0x4e7f91(0xbf)](_0x4e7f91(0xdf));
                (_0x4ae3c9[_0x4e7f91(0xdd)] = _0x4e7f91(0xb2)),
                  _0x33e805[_0x4e7f91(0xd0)](_0x4ae3c9);
                const _0x1ddbc8 = Object["keys"](_0x376dee)
                  [_0x4e7f91(0xc9)]()
                  [_0x4e7f91(0xc0)]();
                _0x1ddbc8[_0x4e7f91(0xf1)]((_0x269af9) => {
                  const _0x2f4e4c = _0x4e7f91,
                    _0xc92996 = _0x376dee[_0x269af9],
                    _0x17737d = document[_0x2f4e4c(0xbf)](_0x2f4e4c(0xc1)),
                    _0x131c7a = document["createElement"]("summary");
                  (_0x131c7a[_0x2f4e4c(0xdd)] =
                    "Total\x20for\x20" +
                    moment(_0x269af9, _0x2f4e4c(0xbe))[_0x2f4e4c(0xe9)](
                      _0x2f4e4c(0xf3)
                    ) +
                    ":\x20" +
                    _0xc92996["workingHours"][_0x2f4e4c(0xee)](0x2) +
                    _0x2f4e4c(0xf7)),
                    _0x17737d["appendChild"](_0x131c7a),
                    _0xc92996[_0x2f4e4c(0xf4)][_0x2f4e4c(0xf1)]((_0x1c2802) => {
                      const _0x10a89b = _0x2f4e4c,
                        _0x506f97 = document[_0x10a89b(0xbf)]("li");
                      (_0x506f97[_0x10a89b(0xdd)] =
                        _0x10a89b(0xef) +
                        moment(_0x1c2802[_0x10a89b(0xec)])["format"](
                          _0x10a89b(0xbc)
                        ) +
                        _0x10a89b(0xd6) +
                        moment(_0x1c2802[_0x10a89b(0xc4)])[_0x10a89b(0xe9)](
                          _0x10a89b(0xbc)
                        ) +
                        ",\x20Working\x20hours:\x20" +
                        _0x1c2802[_0x10a89b(0xe8)][_0x10a89b(0xee)](0x2) +
                        _0x10a89b(0xf7)),
                        _0x17737d[_0x10a89b(0xd0)](_0x506f97);
                    }),
                    _0x33e805["appendChild"](_0x17737d);
                }),
                  _0x5a0920["appendChild"](_0x33e805);
              }
              _0x27c9a1["appendChild"](_0x5a0920),
                _0x4c25e3[_0x4e7f91(0xd0)](_0x27c9a1),
                _0x1bd670[_0x4e7f91(0xd0)](_0x4c25e3);
            }),
            (document["getElementById"]("errorMessage")[_0xa1c63d(0xe1)][
              _0xa1c63d(0xda)
            ] = _0xa1c63d(0xeb));
        }
      })
      [_0x44be68(0xbd)]((_0x5ca85d) => {
        const _0x557b0f = _0x44be68;
        console[_0x557b0f(0xb5)](
          "Error\x20getting\x20documents:\x20",
          _0x5ca85d
        );
      });
}
