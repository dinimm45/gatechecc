function _0x5bf1(_0x566b68, _0x2be9e2) {
  const _0x25101d = _0x2510();
  return (
    (_0x5bf1 = function (_0x5bf1f1, _0x352542) {
      _0x5bf1f1 = _0x5bf1f1 - 0xc5;
      let _0x43c7a3 = _0x25101d[_0x5bf1f1];
      return _0x43c7a3;
    }),
    _0x5bf1(_0x566b68, _0x2be9e2)
  );
}
function _0x2510() {
  const _0x312826 = [
    "continuous",
    "checkOut",
    "4604589cZLSLC",
    "getElementById",
    "forEach",
    "10BlwsIh",
    "data",
    "lastEvent",
    "text",
    "display",
    "valid",
    "kind",
    "61ZmzjIV",
    "NotFoundException",
    "eventsdb-b6aaf.firebaseapp.com",
    "BrowserMultiFormatReader",
    "environment",
    "none",
    "31647297pxSjJo",
    "36NGLorN",
    "video",
    "Check-out\x20timestamp\x20has\x20been\x20updated",
    "enumerateDevices",
    "log",
    "Shaqada\x20waad\x20ka\x20baxday",
    "then",
    "companyName",
    "7986560qiJEHP",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "46430iGhYYO",
    "refresh",
    "loading",
    "addEventListener",
    "checkOutTimes",
    "loader",
    "5uVUfvC",
    "ref",
    "Shaqada\x20waad\x20bilaawday",
    "3426336QlAFrw",
    "nonevalid",
    "value",
    "1:995789907234:web:54edcc689b1c894594717b",
    "268068EllapU",
    "click",
    "style",
    "995789907234",
    "videoinput",
    "checkIn",
    "checkInTimes",
    "deviceId",
    "Check-in\x20timestamp\x20has\x20been\x20updated",
    "employers",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js",
    "block",
    "eventsdb-b6aaf",
    "3201765rsZQZe",
  ];
  _0x2510 = function () {
    return _0x312826;
  };
  return _0x2510();
}
(function (_0xb81275, _0x14e3c6) {
  const _0x21a174 = _0x5bf1,
    _0x32dbdc = _0xb81275();
  while (!![]) {
    try {
      const _0x2696cb =
        (parseInt(_0x21a174(0xee)) / 0x1) * (parseInt(_0x21a174(0xc6)) / 0x2) +
        (-parseInt(_0x21a174(0xf5)) / 0x3) *
          (-parseInt(_0x21a174(0xd3)) / 0x4) +
        (parseInt(_0x21a174(0xcc)) / 0x5) * (-parseInt(_0x21a174(0xcf)) / 0x6) +
        parseInt(_0x21a174(0xe1)) / 0x7 +
        parseInt(_0x21a174(0xfd)) / 0x8 +
        parseInt(_0x21a174(0xe4)) / 0x9 +
        (parseInt(_0x21a174(0xe7)) / 0xa) * (-parseInt(_0x21a174(0xf4)) / 0xb);
      if (_0x2696cb === _0x14e3c6) break;
      else _0x32dbdc["push"](_0x32dbdc["shift"]());
    } catch (_0x53fc2d) {
      _0x32dbdc["push"](_0x32dbdc["shift"]());
    }
  }
})(_0x2510, 0xb48f4),
  (async () => {
    const _0x9d1b64 = _0x5bf1,
      { initializeApp: _0x39ba77 } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
      ),
      { getAnalytics: _0x400aed } = await import(_0x9d1b64(0xde)),
      { getAuth: _0x74d368 } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
      ),
      {
        getFirestore: _0x83be64,
        doc: _0x3c5946,
        getDocs: _0x23c423,
        collection: _0x4b78f8,
        deleteDoc: _0x5ed3df,
        query: _0x454aab,
        where: _0x57c842,
        updateDoc: _0x354fd1,
        serverTimestamp: _0x33ac10,
        arrayUnion: _0x2f89ea,
      } = await import(_0x9d1b64(0xdd)),
      _0x5665f2 = {
        apiKey: _0x9d1b64(0xc5),
        authDomain: _0x9d1b64(0xf0),
        projectId: _0x9d1b64(0xe0),
        storageBucket: "eventsdb-b6aaf.appspot.com",
        messagingSenderId: _0x9d1b64(0xd6),
        appId: _0x9d1b64(0xd2),
        measurementId: "G-J0DC7YW8J4",
      },
      _0x44db6d = _0x39ba77(_0x5665f2),
      _0x1a0026 = _0x400aed(_0x44db6d),
      _0x87f290 = _0x83be64(),
      _0x44f4b9 = document[_0x9d1b64(0xe5)](_0x9d1b64(0xf6)),
      _0x558c8d = document["getElementById"]("outputData"),
      _0x462118 = document["getElementById"](_0x9d1b64(0xec)),
      _0x47c8a2 = document[_0x9d1b64(0xe5)](_0x9d1b64(0xd0)),
      _0x484ffc = document["getElementById"](_0x9d1b64(0xc7)),
      _0x1ae878 = document["getElementById"]("error"),
      _0x1639af = document["getElementById"](_0x9d1b64(0xfc)),
      _0x4d3ec7 = document["getElementById"]("phoneNumber"),
      _0x33267b = document["getElementById"](_0x9d1b64(0xc8)),
      _0xe8af5 = document[_0x9d1b64(0xe5)](_0x9d1b64(0xcb)),
      _0x59145d = new ZXing[_0x9d1b64(0xf1)](),
      _0x501edf = async () => {
        const _0x3b87df = _0x9d1b64,
          _0x2fa1ef = await navigator["mediaDevices"][_0x3b87df(0xf8)](),
          _0x173e80 = _0x2fa1ef["filter"](
            (_0x55f533) => _0x55f533[_0x3b87df(0xed)] === _0x3b87df(0xd7)
          ),
          _0x4f6d5e = _0x173e80[0x0];
        return {
          deviceId: _0x4f6d5e[_0x3b87df(0xda)],
          width: { ideal: 0x780 },
          height: { ideal: 0x438 },
          facingMode: _0x3b87df(0xf2),
          focusMode: _0x3b87df(0xe2),
        };
      };
    _0x501edf()[_0x9d1b64(0xfb)]((_0x1329ff) => {
      _0x59145d["decodeFromVideoDevice"](
        undefined,
        _0x44f4b9,
        async (_0x465db1, _0x565448) => {
          const _0x21809c = _0x5bf1;
          _0x33267b[_0x21809c(0xd5)]["display"] = _0x21809c(0xf3);
          if (_0x465db1) {
            _0x59145d["reset"](),
              (_0x484ffc[_0x21809c(0xd5)][_0x21809c(0xeb)] = "block"),
              (_0xe8af5[_0x21809c(0xd5)][_0x21809c(0xeb)] = _0x21809c(0xdf));
            const _0x5dcd83 = _0x465db1[_0x21809c(0xea)],
              [_0x51c3a3, _0x1d7fa4] = _0x5dcd83["split"]("-"),
              _0x2f7cf8 = _0x4d3ec7[_0x21809c(0xd1)],
              _0x1c26d3 = _0x454aab(
                _0x4b78f8(_0x87f290, "companies", _0x51c3a3, _0x21809c(0xdc)),
                _0x57c842("phoneNumber", "==", _0x2f7cf8)
              ),
              _0x6ddb4d = await _0x23c423(_0x1c26d3);
            if (_0x6ddb4d["empty"]) {
              console[_0x21809c(0xf9)]("No\x20matching\x20employers\x20found."),
                (_0x1ae878[_0x21809c(0xd5)][_0x21809c(0xeb)] = "block");
              return;
            }
            _0x6ddb4d[_0x21809c(0xe6)]((_0x3b40e7) => {
              const _0xbb717 = _0x21809c,
                _0x5693b4 = _0x3b40e7[_0xbb717(0xe8)](),
                _0x4d02c7 = new Date(),
                _0x47464e = { time: _0x4d02c7, location: _0x1d7fa4 };
              if (
                _0x5693b4[_0xbb717(0xe9)] === _0xbb717(0xe3) ||
                !_0x5693b4[_0xbb717(0xe9)]
              ) {
                console[_0xbb717(0xf9)](_0xbb717(0xdb)),
                  setTimeout(() => {
                    const _0x28e560 = _0xbb717;
                    alert(_0x28e560(0xce));
                  }, 0x9c4),
                  (_0x1ae878[_0xbb717(0xd5)][_0xbb717(0xeb)] = _0xbb717(0xf3));
                const _0x32d49a = _0x5693b4[_0xbb717(0xd9)] || [];
                _0x354fd1(_0x3b40e7[_0xbb717(0xcd)], {
                  lastCheckInTime: _0x33ac10(),
                  checkInTimes: [..._0x32d49a, _0x47464e],
                  lastEvent: _0xbb717(0xd8),
                });
              } else {
                if (_0x5693b4[_0xbb717(0xe9)] === _0xbb717(0xd8)) {
                  console[_0xbb717(0xf9)](_0xbb717(0xf7)),
                    setTimeout(() => {
                      const _0x4b80e4 = _0xbb717;
                      alert(_0x4b80e4(0xfa));
                    }, 0x9c4),
                    (_0x1ae878[_0xbb717(0xd5)][_0xbb717(0xeb)] =
                      _0xbb717(0xf3));
                  const _0x20d9b7 = _0x5693b4[_0xbb717(0xca)] || [];
                  _0x354fd1(_0x3b40e7[_0xbb717(0xcd)], {
                    lastCheckOutTime: _0x33ac10(),
                    checkOutTimes: [..._0x20d9b7, _0x47464e],
                    lastEvent: "checkOut",
                  });
                }
              }
            });
          }
          _0x565448 &&
            !(_0x565448 instanceof ZXing[_0x21809c(0xef)]) &&
            console["error"](_0x565448);
        },
        _0x1329ff
      );
    }),
      _0x484ffc[_0x9d1b64(0xc9)](_0x9d1b64(0xd4), function () {
        location["reload"]();
      });
  })();
