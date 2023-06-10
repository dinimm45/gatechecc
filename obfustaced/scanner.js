function _0x4505(_0x3edf3d, _0x214379) {
  const _0x5b9a1c = _0x5b9a();
  return (
    (_0x4505 = function (_0x4505cf, _0x1503fc) {
      _0x4505cf = _0x4505cf - 0x19d;
      let _0x228101 = _0x5b9a1c[_0x4505cf];
      return _0x228101;
    }),
    _0x4505(_0x3edf3d, _0x214379)
  );
}
(function (_0x424cc4, _0x494c5b) {
  const _0x2f40b1 = _0x4505,
    _0x1046fa = _0x424cc4();
  while (!![]) {
    try {
      const _0x1137e0 =
        (-parseInt(_0x2f40b1(0x19e)) / 0x1) *
          (-parseInt(_0x2f40b1(0x1c0)) / 0x2) +
        (parseInt(_0x2f40b1(0x1b0)) / 0x3) *
          (-parseInt(_0x2f40b1(0x1a4)) / 0x4) +
        (parseInt(_0x2f40b1(0x1b7)) / 0x5) *
          (-parseInt(_0x2f40b1(0x1a9)) / 0x6) +
        parseInt(_0x2f40b1(0x1c3)) / 0x7 +
        parseInt(_0x2f40b1(0x1ba)) / 0x8 +
        (parseInt(_0x2f40b1(0x1bb)) / 0x9) *
          (-parseInt(_0x2f40b1(0x1af)) / 0xa) +
        (parseInt(_0x2f40b1(0x19d)) / 0xb) * (parseInt(_0x2f40b1(0x1b1)) / 0xc);
      if (_0x1137e0 === _0x494c5b) break;
      else _0x1046fa["push"](_0x1046fa["shift"]());
    } catch (_0x58d2c6) {
      _0x1046fa["push"](_0x1046fa["shift"]());
    }
  }
})(_0x5b9a, 0xcf841),
  (async () => {
    const _0x4ebd7e = _0x4505,
      { initializeApp: _0x4cc7a2 } = await import(_0x4ebd7e(0x1a8)),
      { getAnalytics: _0xe83bb7 } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js"
      ),
      { getAuth: _0x7dce55 } = await import(_0x4ebd7e(0x1c2)),
      {
        getFirestore: _0x373a01,
        doc: _0x31ea26,
        getDoc: _0x77fae3,
        setDoc: _0x179be2,
        collection: _0x22c1d6,
        addDoc: _0x4880fa,
        updateDoc: _0xeef3b9,
        deleteDoc: _0x5d419e,
        deleteField: _0x90acf5,
        arrayRemove: _0x288af2,
        query: _0x57146e,
        where: _0x1b06cc,
        getDocs: _0x24d8a6,
      } = await import(_0x4ebd7e(0x1bd)),
      _0x509b1f = {
        apiKey: _0x4ebd7e(0x1aa),
        authDomain: _0x4ebd7e(0x1b9),
        projectId: "eventsdb-b6aaf",
        storageBucket: _0x4ebd7e(0x1c5),
        messagingSenderId: _0x4ebd7e(0x1c1),
        appId: _0x4ebd7e(0x1be),
        measurementId: _0x4ebd7e(0x1a6),
      },
      _0x43115a = _0x4cc7a2(_0x509b1f),
      _0x53da42 = _0xe83bb7(_0x43115a),
      _0x7977e = _0x373a01(),
      _0x206a55 = document[_0x4ebd7e(0x1ad)]("video"),
      _0x1395b8 = document[_0x4ebd7e(0x1ad)](_0x4ebd7e(0x1a2)),
      _0x25fa1b = document[_0x4ebd7e(0x1ad)]("outputData"),
      _0x1a99e7 = document[_0x4ebd7e(0x1ad)]("valid"),
      _0x4dff5d = document[_0x4ebd7e(0x1ad)](_0x4ebd7e(0x1b2)),
      _0x14754b = document[_0x4ebd7e(0x1ad)]("refresh"),
      _0x3c703d = { video: { facingMode: _0x4ebd7e(0x1b8) } };
    let _0x287869 = [];
    const _0x563681 = await _0x24d8a6(_0x22c1d6(_0x7977e, "codes"));
    _0x563681["forEach"]((_0xfea183) => {
      const _0x58379e = _0x4ebd7e;
      _0x287869[_0x58379e(0x1a3)]({
        id: _0xfea183["id"],
        code: _0xfea183[_0x58379e(0x1ae)]()[_0x58379e(0x1ac)],
      });
    });
    const _0x1d40a5 = await navigator[_0x4ebd7e(0x1b6)][_0x4ebd7e(0x1ab)](
      _0x3c703d
    );
    (_0x206a55[_0x4ebd7e(0x19f)] = _0x1d40a5), _0x206a55["play"]();
    const _0x29000d = new BarcodeDetector(),
      _0x31f250 = async () => {
        const _0x302b46 = _0x4ebd7e;
        try {
          const _0x85e92a = await _0x29000d[_0x302b46(0x1a5)](_0x206a55);
          for (const _0x7ec88 of _0x85e92a) {
            const _0xb56d00 = _0x7ec88[_0x302b46(0x1bc)],
              _0x30df18 = _0x287869[_0x302b46(0x1c4)](
                (_0x51cfb1) => _0x51cfb1[_0x302b46(0x1ac)] === _0xb56d00
              );
            if (_0x30df18) {
              (_0x25fa1b["innerText"] = _0xb56d00),
                (_0x1a99e7[_0x302b46(0x1b3)][_0x302b46(0x1b5)] =
                  _0x302b46(0x1c6)),
                (_0x14754b[_0x302b46(0x1b3)][_0x302b46(0x1b5)] =
                  _0x302b46(0x1c6)),
                _0x14754b["addEventListener"]("click", () => {
                  const _0x398138 = _0x302b46;
                  location[_0x398138(0x1a0)]();
                });
              const _0x165775 = async () => {
                const _0x93e02c = _0x302b46;
                try {
                  await _0x5d419e(
                    _0x31ea26(_0x7977e, "codes", _0x30df18["id"])
                  );
                } catch (_0x346e09) {
                  console[_0x93e02c(0x1a1)](_0x346e09);
                }
              };
              _0x165775(), (_0x1395b8[_0x302b46(0x1a7)] = ![]);
            } else
              (_0x4dff5d["style"][_0x302b46(0x1b5)] = _0x302b46(0x1c6)),
                (_0x14754b[_0x302b46(0x1b3)][_0x302b46(0x1b5)] =
                  _0x302b46(0x1c6)),
                _0x14754b[_0x302b46(0x1b4)](_0x302b46(0x1bf), () => {
                  const _0x455ec5 = _0x302b46;
                  location[_0x455ec5(0x1a0)]();
                });
          }
          requestAnimationFrame(_0x31f250);
        } catch (_0x142129) {
          console[_0x302b46(0x1a1)](_0x142129),
            requestAnimationFrame(_0x31f250);
        }
      };
    requestAnimationFrame(_0x31f250);
  })();
function _0x5b9a() {
  const _0x3cff5c = [
    "6xxonAk",
    "995789907234",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js",
    "2591785hKFWoK",
    "find",
    "eventsdb-b6aaf.appspot.com",
    "block",
    "33GVrksX",
    "43ombGxA",
    "srcObject",
    "reload",
    "log",
    "qr-result",
    "push",
    "261988XADGvS",
    "detect",
    "G-J0DC7YW8J4",
    "hidden",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js",
    "522tVYThM",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "getUserMedia",
    "code",
    "getElementById",
    "data",
    "50WvfMnJ",
    "39ddfvxB",
    "8274828LdBOWa",
    "nonevalid",
    "style",
    "addEventListener",
    "display",
    "mediaDevices",
    "21295jmZnkW",
    "environment",
    "eventsdb-b6aaf.firebaseapp.com",
    "1788624aRmwIh",
    "1063242uenaPk",
    "rawValue",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js",
    "1:995789907234:web:54edcc689b1c894594717b",
    "click",
  ];
  _0x5b9a = function () {
    return _0x3cff5c;
  };
  return _0x5b9a();
}
