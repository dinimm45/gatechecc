const _0x3301b1 = _0x1abc;
function _0x1abc(_0x50bcbf, _0xaaa8ed) {
  const _0x488155 = _0x4881();
  return (
    (_0x1abc = function (_0x1abc98, _0x1d7103) {
      _0x1abc98 = _0x1abc98 - 0x179;
      let _0x1ed027 = _0x488155[_0x1abc98];
      return _0x1ed027;
    }),
    _0x1abc(_0x50bcbf, _0xaaa8ed)
  );
}
function _0x4881() {
  const _0x48c45b = [
    "log",
    "qrtextFont",
    "CorrectLevel",
    "snapshot",
    "catch",
    "codes",
    "put",
    "get",
    "\x20Tickets\x20have\x20been\x20made",
    "uploadProgress",
    "loading",
    "click",
    "data",
    "href",
    "name",
    "family",
    "228073tgWERW",
    "qrtextColor",
    "random",
    "#ffffff",
    "charAt",
    "length",
    "add",
    "createObjectURL",
    "totalBytes",
    "3225390yMDcAy",
    "3130rEuCHq",
    "3ZyzvAG",
    "Please\x20enter\x20a\x20phone\x20number.",
    "1:995789907234:web:54edcc689b1c894594717b",
    "target",
    "currentQRCode",
    "where",
    "\x27;\x20color:\x20",
    "child",
    "31983GMNbnO",
    "4424396RteBLR",
    "getElementById",
    "216RVZsnv",
    "bytesTransferred",
    "getDownloadURL",
    "#app",
    "createElement",
    "items",
    "Arial",
    "10025364SAYCKM",
    "selectedImage",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    "value",
    "push",
    "card.png",
    "phoneNumber",
    "fonts",
    "vol",
    "code",
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "FieldValue",
    "then",
    "Document\x20written\x20with\x20ID:\x20",
    "Error\x20getting\x20documents:\x20",
    "files",
    "storage",
    "collection",
    ".card-preview",
    "floor",
    "uniqueCodes",
    "eventsdb-b6aaf",
    "center\x20center",
    "uploadImage",
    "firestore",
    "url(",
    "image/png",
    "50733zEJtrx",
    "download",
    "isButtonDisabled",
    "ref",
    "Error\x20adding\x20document:\x20",
    "error",
    "6131590wyPDiD",
    "firebaseInitialized",
  ];
  _0x4881 = function () {
    return _0x48c45b;
  };
  return _0x4881();
}
(function (_0x45e263, _0x1cc8b4) {
  const _0x41e81f = _0x1abc,
    _0x3fdd58 = _0x45e263();
  while (!![]) {
    try {
      const _0x3c2d9 =
        parseInt(_0x41e81f(0x1b1)) / 0x1 +
        -parseInt(_0x41e81f(0x1ba)) / 0x2 +
        (parseInt(_0x41e81f(0x1bc)) / 0x3) *
          (parseInt(_0x41e81f(0x1c5)) / 0x4) +
        parseInt(_0x41e81f(0x19f)) / 0x5 +
        -parseInt(_0x41e81f(0x17e)) / 0x6 +
        (parseInt(_0x41e81f(0x1c4)) / 0x7) *
          (-parseInt(_0x41e81f(0x1c7)) / 0x8) +
        (parseInt(_0x41e81f(0x199)) / 0x9) * (parseInt(_0x41e81f(0x1bb)) / 0xa);
      if (_0x3c2d9 === _0x1cc8b4) break;
      else _0x3fdd58["push"](_0x3fdd58["shift"]());
    } catch (_0x33488c) {
      _0x3fdd58["push"](_0x3fdd58["shift"]());
    }
  }
})(_0x4881, 0xe019f),
  document[_0x3301b1(0x1c6)](_0x3301b1(0x19a))["addEventListener"](
    _0x3301b1(0x1ac),
    function () {
      const _0x43993c = _0x3301b1;
      html2canvas(document["querySelector"](_0x43993c(0x190)), {
        logging: !![],
      })[_0x43993c(0x18a)](function (_0x43b7e5) {
        const _0x2abe9d = _0x43993c;
        var _0x358429 = document[_0x2abe9d(0x17b)]("a");
        (_0x358429[_0x2abe9d(0x1ae)] = _0x43b7e5["toDataURL"](
          _0x2abe9d(0x198)
        )),
          (_0x358429[_0x2abe9d(0x19a)] = _0x2abe9d(0x183)),
          _0x358429[_0x2abe9d(0x1ac)]();
      });
    }
  ),
  new Vue({
    el: _0x3301b1(0x17a),
    data: {
      image: "",
      selectedImage: "",
      qrtextFont: _0x3301b1(0x17d),
      qrtextColor: "#000",
      qrtext: "",
      uploadProgress: 0x0,
      phoneNumber: "",
      uniqueCodes: [],
      firebaseInitialized: ![],
      db: null,
      storage: null,
      loading: ![],
      currentQRCode: null,
      isButtonDisabled: ![],
      rangeValue: 0x0,
    },
    created: function () {
      const _0x49730d = _0x3301b1,
        _0x3d7e75 = {
          apiKey: "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
          authDomain: "eventsdb-b6aaf.firebaseapp.com",
          projectId: _0x49730d(0x193),
          storageBucket: "eventsdb-b6aaf.appspot.com",
          messagingSenderId: "995789907234",
          appId: _0x49730d(0x1be),
          measurementId: "G-J0DC7YW8J4",
        },
        _0x78d0cf = firebase["initializeApp"](_0x3d7e75),
        _0x3f4bed = firebase[_0x49730d(0x196)](_0x78d0cf),
        _0x15cc37 = firebase[_0x49730d(0x18e)](_0x78d0cf);
      (this["db"] = _0x3f4bed),
        (this[_0x49730d(0x18e)] = _0x15cc37),
        (this[_0x49730d(0x1a0)] = !![]),
        axios["get"](_0x49730d(0x188))[_0x49730d(0x18a)]((_0x55e723) => {
          const _0x30be77 = _0x49730d;
          this[_0x30be77(0x185)] = _0x55e723[_0x30be77(0x1ad)][
            _0x30be77(0x17c)
          ]["map"]((_0x48fdd2) => _0x48fdd2[_0x30be77(0x1b0)]);
        });
    },
    methods: {
      handleFileUpload(_0x1942a5) {
        const _0x4d85e8 = _0x3301b1,
          _0x780026 = _0x1942a5[_0x4d85e8(0x1bf)][_0x4d85e8(0x18d)][0x0];
        (this[_0x4d85e8(0x17f)] = URL[_0x4d85e8(0x1b8)](_0x780026)),
          this[_0x4d85e8(0x195)](_0x780026)[_0x4d85e8(0x18a)]((_0x61e763) => {
            const _0x1cf3fa = _0x4d85e8;
            this[_0x1cf3fa(0x17f)] = _0x61e763;
          });
      },
      uploadImage(_0x2e978d) {
        const _0x8df1a7 = _0x3301b1,
          _0x3b1ed5 = this[_0x8df1a7(0x18e)][_0x8df1a7(0x19c)](),
          _0x1f554b = _0x3b1ed5[_0x8df1a7(0x1c3)](
            "images/" + _0x2e978d[_0x8df1a7(0x1af)]
          ),
          _0x323a21 = _0x1f554b[_0x8df1a7(0x1a7)](_0x2e978d);
        return (
          (this[_0x8df1a7(0x1ab)] = !![]),
          new Promise((_0x478e73, _0x331fec) => {
            _0x323a21["on"](
              "state_changed",
              (_0x24810b) => {
                const _0x4e592f = _0x1abc;
                this[_0x4e592f(0x1aa)] =
                  (_0x24810b[_0x4e592f(0x1c8)] / _0x24810b[_0x4e592f(0x1b9)]) *
                  0x64;
              },
              (_0x1f3bee) => {
                console["log"](_0x1f3bee), _0x331fec(_0x1f3bee);
              },
              () => {
                const _0x475ca3 = _0x1abc;
                _0x323a21[_0x475ca3(0x1a4)][_0x475ca3(0x19c)]
                  [_0x475ca3(0x179)]()
                  [_0x475ca3(0x18a)]((_0x23c1e9) => {
                    const _0x9ca69b = _0x475ca3;
                    (this[_0x9ca69b(0x1ab)] = ![]), _0x478e73(_0x23c1e9);
                  });
              }
            );
          })
        );
      },
      generateRandomString(_0x1709e2) {
        const _0x38f335 = _0x3301b1,
          _0x374958 = _0x38f335(0x180);
        let _0x5d6499 = "";
        for (let _0x112a5a = 0x0; _0x112a5a < _0x1709e2; _0x112a5a++) {
          _0x5d6499 += _0x374958[_0x38f335(0x1b5)](
            Math[_0x38f335(0x191)](
              Math[_0x38f335(0x1b3)]() * _0x374958[_0x38f335(0x1b6)]
            )
          );
        }
        return _0x5d6499;
      },
      generateQRCode() {
        const _0x5a54aa = _0x3301b1;
        if (this[_0x5a54aa(0x184)] === "") {
          alert(_0x5a54aa(0x1bd));
          return;
        }
        (this[_0x5a54aa(0x19b)] = !![]),
          setTimeout(() => {
            const _0x170042 = _0x5a54aa;
            this[_0x170042(0x19b)] = ![];
          }, 0xbb8);
        let _0x39de0c = Number(
          document["getElementById"](_0x5a54aa(0x186))[_0x5a54aa(0x181)]
        );
        alert(_0x39de0c + _0x5a54aa(0x1a9)),
          confetti({
            particleCount: 0x64,
            startVelocity: 0x1e,
            spread: 0x168,
            origin: { y: 0.6 },
          }),
          (this[_0x5a54aa(0x192)] = []);
        for (let _0xeb897 = 0x0; _0xeb897 < _0x39de0c; _0xeb897++) {
          const _0xba9c27 = this["generateRandomString"](0xa);
          this[_0x5a54aa(0x192)][_0x5a54aa(0x182)](_0xba9c27),
            this["db"]
              [_0x5a54aa(0x18f)](_0x5a54aa(0x1a6))
              [_0x5a54aa(0x1b7)]({
                code: _0xba9c27,
                phoneNumber: this[_0x5a54aa(0x184)],
                image: this[_0x5a54aa(0x17f)],
                createdAt:
                  firebase[_0x5a54aa(0x196)][_0x5a54aa(0x189)][
                    "serverTimestamp"
                  ](),
              })
              ["then"]((_0x577179) => {
                const _0x334de3 = _0x5a54aa;
                console[_0x334de3(0x1a1)](_0x334de3(0x18b), _0x577179["id"]);
              })
              [_0x5a54aa(0x1a5)]((_0x5337df) => {
                const _0x1d27ac = _0x5a54aa;
                console[_0x1d27ac(0x19e)](_0x1d27ac(0x19d), _0x5337df);
              });
        }
        this[_0x5a54aa(0x1c0)] = this["uniqueCodes"][0x0];
        let _0x18b82b = new QRCode(document[_0x5a54aa(0x1c6)]("qrcode"), {
          text: this[_0x5a54aa(0x1c0)],
          width: 0x46,
          height: 0x46,
          colorDark: "#000000",
          colorLight: _0x5a54aa(0x1b4),
          correctLevel: QRCode[_0x5a54aa(0x1a3)]["H"],
        });
      },
    },
    computed: {
      cardStyle() {
        const _0x152e80 = _0x3301b1;
        return this[_0x152e80(0x17f)]
          ? {
              "background-image":
                _0x152e80(0x197) + this[_0x152e80(0x17f)] + ")",
              "background-repeat": "no-repeat",
              "background-position": _0x152e80(0x194),
              "background-size": "contain",
            }
          : {};
      },
      qrtextStyle() {
        const _0xcce7ef = _0x3301b1;
        return (
          "font-family:\x20\x27" +
          this[_0xcce7ef(0x1a2)] +
          _0xcce7ef(0x1c2) +
          this[_0xcce7ef(0x1b2)] +
          ";"
        );
      },
    },
    watch: {
      phoneNumber(_0x41f2eb) {
        const _0x1f2a2d = _0x3301b1;
        _0x41f2eb !== ""
          ? this["db"]
              [_0x1f2a2d(0x18f)](_0x1f2a2d(0x1a6))
              [_0x1f2a2d(0x1c1)]("phoneNumber", "==", _0x41f2eb)
              [_0x1f2a2d(0x1a8)]()
              ["then"]((_0x148dd6) => {
                const _0x13a6d1 = _0x1f2a2d;
                this[_0x13a6d1(0x192)] = _0x148dd6["docs"]["map"](
                  (_0x3371bc) => _0x3371bc[_0x13a6d1(0x1ad)]()[_0x13a6d1(0x187)]
                );
              })
              ["catch"]((_0x48db0b) => {
                const _0x1a5410 = _0x1f2a2d;
                console[_0x1a5410(0x1a1)](_0x1a5410(0x18c), _0x48db0b);
              })
          : (this[_0x1f2a2d(0x192)] = []);
      },
    },
  });
