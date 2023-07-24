(function (_0x5a7cfd, _0x391520) {
  const _0x34a78e = _0x5643,
    _0x398cfc = _0x5a7cfd();
  while (!![]) {
    try {
      const _0x1012ad =
        parseInt(_0x34a78e(0x176)) / 0x1 +
        (parseInt(_0x34a78e(0x163)) / 0x2) *
          (parseInt(_0x34a78e(0x198)) / 0x3) +
        (parseInt(_0x34a78e(0x195)) / 0x4) *
          (parseInt(_0x34a78e(0x183)) / 0x5) +
        (parseInt(_0x34a78e(0x168)) / 0x6) *
          (-parseInt(_0x34a78e(0x182)) / 0x7) +
        (parseInt(_0x34a78e(0x180)) / 0x8) *
          (-parseInt(_0x34a78e(0x16b)) / 0x9) +
        -parseInt(_0x34a78e(0x184)) / 0xa +
        parseInt(_0x34a78e(0x17c)) / 0xb;
      if (_0x1012ad === _0x391520) break;
      else _0x398cfc["push"](_0x398cfc["shift"]());
    } catch (_0x2bfcf5) {
      _0x398cfc["push"](_0x398cfc["shift"]());
    }
  }
})(_0x85d3, 0xd9b45),
  (async () => {
    const _0x46cb4e = _0x5643,
      { initializeApp: _0x5a0706 } = await import(_0x46cb4e(0x18b)),
      { getAnalytics: _0x5a8441 } = await import(_0x46cb4e(0x17a)),
      { getAuth: _0x2627f8 } = await import(_0x46cb4e(0x167)),
      {
        getFirestore: _0x48d4b8,
        doc: _0x4f974b,
        getDocs: _0x4adaf9,
        collection: _0x56d188,
        deleteDoc: _0xba531f,
        query: _0x1b310e,
        where: _0x4d2fca,
        updateDoc: _0x659b23,
        serverTimestamp: _0x34c0fb,
        arrayUnion: _0x44f192,
      } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
      ),
      _0x35179d = {
        apiKey: _0x46cb4e(0x18d),
        authDomain: _0x46cb4e(0x194),
        projectId: _0x46cb4e(0x171),
        storageBucket: "eventsdb-b6aaf.appspot.com",
        messagingSenderId: _0x46cb4e(0x187),
        appId: _0x46cb4e(0x172),
        measurementId: _0x46cb4e(0x16d),
      },
      _0x4c8be6 = _0x5a0706(_0x35179d),
      _0x51bff1 = _0x5a8441(_0x4c8be6),
      _0x68df6 = _0x48d4b8(),
      _0x53a1dd = document[_0x46cb4e(0x16e)](_0x46cb4e(0x197)),
      _0x3a2118 = document[_0x46cb4e(0x16e)](_0x46cb4e(0x16c)),
      _0x573d29 = document["getElementById"](_0x46cb4e(0x16a)),
      _0x2ac868 = document["getElementById"](_0x46cb4e(0x192)),
      _0x26fbe6 = document["getElementById"]("refresh"),
      _0x4d2775 = document[_0x46cb4e(0x16e)](_0x46cb4e(0x179)),
      _0x24801a = document[_0x46cb4e(0x16e)](_0x46cb4e(0x190)),
      _0x27838b = document[_0x46cb4e(0x16e)](_0x46cb4e(0x199)),
      _0x26915a = new ZXing[_0x46cb4e(0x178)](),
      _0xc8a8eb = async () => {
        const _0x8f4ad4 = _0x46cb4e,
          _0x7e21a1 = await navigator[_0x8f4ad4(0x174)]["enumerateDevices"](),
          _0x4b0f10 = _0x7e21a1[_0x8f4ad4(0x186)](
            (_0x544aba) => _0x544aba[_0x8f4ad4(0x165)] === _0x8f4ad4(0x166)
          ),
          _0x31d90a = _0x4b0f10[0x0];
        return {
          deviceId: _0x31d90a[_0x8f4ad4(0x19b)],
          width: { ideal: 0x780 },
          height: { ideal: 0x438 },
          facingMode: _0x8f4ad4(0x196),
          focusMode: "continuous",
        };
      };
    _0xc8a8eb()[_0x46cb4e(0x18e)]((_0x26aae0) => {
      const _0x413884 = _0x46cb4e;
      _0x26915a[_0x413884(0x181)](
        undefined,
        _0x53a1dd,
        async (_0x4b50ae, _0x516e8a) => {
          const _0x354abf = _0x413884;
          if (_0x4b50ae) {
            const _0x3126fa = _0x4b50ae[_0x354abf(0x175)],
              _0x248c16 = _0x3126fa,
              _0x1b4b7e = _0x27838b[_0x354abf(0x177)],
              _0x113601 = _0x1b310e(
                _0x56d188(
                  _0x68df6,
                  _0x354abf(0x18c),
                  _0x248c16,
                  _0x354abf(0x185)
                ),
                _0x4d2fca(_0x354abf(0x199), "==", _0x1b4b7e)
              ),
              _0x179714 = await _0x4adaf9(_0x113601);
            if (_0x179714[_0x354abf(0x193)]) {
              console["log"]("No\x20matching\x20employers\x20found."),
                (_0x4d2775["style"][_0x354abf(0x162)] = _0x354abf(0x18a));
              return;
            }
            _0x3126fa[_0x354abf(0x173)](_0x248c16)
              ? _0x179714["forEach"]((_0x2eb478) => {
                  const _0x2d6db4 = _0x354abf,
                    _0x220923 = _0x2eb478[_0x2d6db4(0x169)](),
                    _0x56aeea = new Date();
                  if (
                    _0x220923[_0x2d6db4(0x18f)] === _0x2d6db4(0x17e) ||
                    !_0x220923["lastEvent"]
                  ) {
                    console[_0x2d6db4(0x16f)](_0x2d6db4(0x17d)),
                      alert(_0x2d6db4(0x189)),
                      (_0x4d2775[_0x2d6db4(0x191)][_0x2d6db4(0x162)] = "none");
                    const _0x58151a = _0x220923["checkInTimes"] || [];
                    _0x659b23(_0x2eb478[_0x2d6db4(0x164)], {
                      lastCheckInTime: _0x34c0fb(),
                      checkInTimes: [..._0x58151a, _0x56aeea],
                      lastEvent: _0x2d6db4(0x161),
                    });
                  } else {
                    if (_0x220923[_0x2d6db4(0x18f)] === _0x2d6db4(0x161)) {
                      console[_0x2d6db4(0x16f)](_0x2d6db4(0x188)),
                        alert(_0x2d6db4(0x17f)),
                        (_0x4d2775["style"][_0x2d6db4(0x162)] =
                          _0x2d6db4(0x170));
                      const _0x42f2a9 = _0x220923[_0x2d6db4(0x19a)] || [];
                      _0x659b23(_0x2eb478["ref"], {
                        lastCheckOutTime: _0x34c0fb(),
                        checkOutTimes: [..._0x42f2a9, _0x56aeea],
                        lastEvent: "checkOut",
                      });
                    }
                  }
                })
              : console["log"](
                  "Invalid\x20QR\x20code.\x20Please\x20scan\x20a\x20QR\x20code\x20that\x20includes\x20your\x20company\x20name."
                );
          }
          _0x516e8a &&
            !(_0x516e8a instanceof ZXing[_0x354abf(0x17b)]) &&
            console[_0x354abf(0x179)](_0x516e8a);
        },
        _0x26aae0
      );
    });
  })();
function _0x5643(_0x53a3b7, _0x2c978c) {
  const _0x85d3a2 = _0x85d3();
  return (
    (_0x5643 = function (_0x564365, _0x56594a) {
      _0x564365 = _0x564365 - 0x161;
      let _0x47246a = _0x85d3a2[_0x564365];
      return _0x47246a;
    }),
    _0x5643(_0x53a3b7, _0x2c978c)
  );
}
function _0x85d3() {
  const _0x444b39 = [
    "companyName",
    "style",
    "nonevalid",
    "empty",
    "eventsdb-b6aaf.firebaseapp.com",
    "135212UTkRtk",
    "environment",
    "video",
    "669IQpdhK",
    "phoneNumber",
    "checkOutTimes",
    "deviceId",
    "checkIn",
    "display",
    "13202jXmgBf",
    "ref",
    "kind",
    "videoinput",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js",
    "6mujNAA",
    "data",
    "valid",
    "27ylKgrI",
    "outputData",
    "G-J0DC7YW8J4",
    "getElementById",
    "log",
    "none",
    "eventsdb-b6aaf",
    "1:995789907234:web:54edcc689b1c894594717b",
    "includes",
    "mediaDevices",
    "text",
    "697989QfCWHC",
    "value",
    "BrowserMultiFormatReader",
    "error",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js",
    "NotFoundException",
    "22094435sOpgfS",
    "Check-in\x20timestamp\x20has\x20been\x20updated",
    "checkOut",
    "Shaqada\x20waad\x20ka\x20baxday",
    "3773576KdIHYj",
    "decodeFromVideoDevice",
    "11929505KQUGGd",
    "110bAWWhT",
    "9112400evHAlc",
    "employers",
    "filter",
    "995789907234",
    "Check-out\x20timestamp\x20has\x20been\x20updated",
    "Shaqada\x20waad\x20bilaawday",
    "block",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js",
    "companies",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "then",
    "lastEvent",
  ];
  _0x85d3 = function () {
    return _0x444b39;
  };
  return _0x85d3();
}
