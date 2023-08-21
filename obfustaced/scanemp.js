function _0x481e(_0x4783ea, _0x2cd058) {
  const _0x118b93 = _0x118b();
  return (
    (_0x481e = function (_0x481e9f, _0x23d698) {
      _0x481e9f = _0x481e9f - 0xf9;
      let _0x511d02 = _0x118b93[_0x481e9f];
      return _0x511d02;
    }),
    _0x481e(_0x4783ea, _0x2cd058)
  );
}
function _0x118b() {
  const _0x1064ed = [
    "phoneNumber",
    "decodeFromVideoDevice",
    "location",
    "792BytutI",
    "videoinput",
    "4683470iZqBSw",
    "reload",
    "refresh",
    "checkInTimes",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js",
    "checkIn",
    "display",
    "lastEvent",
    "9rhqNLJ",
    "No\x20matching\x20employers\x20found.",
    "forEach",
    "click",
    "2lYcYSU",
    "href",
    "800445vffGOj",
    "addEventListener",
    "10765727vFDGUR",
    "block",
    "G-J0DC7YW8J4",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js",
    "BrowserMultiFormatReader",
    "eventsdb-b6aaf.appspot.com",
    "error",
    "checkOut",
    "companyName",
    "checkout.html",
    "mediaDevices",
    "995789907234",
    "loading",
    "6UGczKl",
    "log",
    "eventsdb-b6aaf",
    "employers",
    "Check-in\x20timestamp\x20has\x20been\x20updated",
    "2456781OMMCDD",
    "style",
    "kind",
    "24036qmRibV",
    "environment",
    "701899yqjiAX",
    "value",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "915GBpJKQ",
    "getElementById",
    "ref",
    "2966008nWNVGd",
    "companies",
    "video",
    "Shaqada\x20waad\x20bilaawday",
    "none",
    "enumerateDevices",
    "NotFoundException",
    "1:995789907234:web:54edcc689b1c894594717b",
  ];
  _0x118b = function () {
    return _0x1064ed;
  };
  return _0x118b();
}
(function (_0x4dd773, _0x34b2fc) {
  const _0x2ea25d = _0x481e,
    _0x470d80 = _0x4dd773();
  while (!![]) {
    try {
      const _0x336e6a =
        -parseInt(_0x2ea25d(0x118)) / 0x1 +
        (parseInt(_0x2ea25d(0x116)) / 0x2) *
          (-parseInt(_0x2ea25d(0x12c)) / 0x3) +
        (parseInt(_0x2ea25d(0x12f)) / 0x4) *
          (-parseInt(_0x2ea25d(0xfa)) / 0x5) +
        (parseInt(_0x2ea25d(0x127)) / 0x6) *
          (-parseInt(_0x2ea25d(0x11a)) / 0x7) +
        (parseInt(_0x2ea25d(0xfd)) / 0x8) * (parseInt(_0x2ea25d(0x112)) / 0x9) +
        parseInt(_0x2ea25d(0x10a)) / 0xa +
        (-parseInt(_0x2ea25d(0x131)) / 0xb) *
          (-parseInt(_0x2ea25d(0x108)) / 0xc);
      if (_0x336e6a === _0x34b2fc) break;
      else _0x470d80["push"](_0x470d80["shift"]());
    } catch (_0x5c066b) {
      _0x470d80["push"](_0x470d80["shift"]());
    }
  }
})(_0x118b, 0xc1ba8),
  (async () => {
    const _0x23a846 = _0x481e,
      { initializeApp: _0x1342f0 } = await import(_0x23a846(0x10e)),
      { getAnalytics: _0x399717 } = await import(_0x23a846(0x11d)),
      { getAuth: _0x28e6d7 } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
      ),
      {
        getFirestore: _0x1c91a5,
        doc: _0x32eff6,
        getDocs: _0x167996,
        collection: _0x316c25,
        deleteDoc: _0x21561f,
        query: _0x383746,
        where: _0x31d688,
        updateDoc: _0xa9421a,
        serverTimestamp: _0x4a5ada,
        arrayUnion: _0x47f042,
      } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
      ),
      _0x20e229 = {
        apiKey: _0x23a846(0xf9),
        authDomain: "eventsdb-b6aaf.firebaseapp.com",
        projectId: _0x23a846(0x129),
        storageBucket: _0x23a846(0x11f),
        messagingSenderId: _0x23a846(0x125),
        appId: _0x23a846(0x104),
        measurementId: _0x23a846(0x11c),
      },
      _0x1ef39a = _0x1342f0(_0x20e229),
      _0x38dbad = _0x399717(_0x1ef39a),
      _0x111a8c = _0x1c91a5(),
      _0x181740 = document[_0x23a846(0xfb)](_0x23a846(0xff)),
      _0x32209f = document[_0x23a846(0xfb)]("outputData"),
      _0x25b0d6 = document[_0x23a846(0xfb)]("valid"),
      _0x2487c9 = document["getElementById"]("nonevalid"),
      _0x59db35 = document[_0x23a846(0xfb)](_0x23a846(0x10c)),
      _0xe3b675 = document[_0x23a846(0xfb)](_0x23a846(0x120)),
      _0xc9aa52 = document[_0x23a846(0xfb)](_0x23a846(0x122)),
      _0x4c836a = document[_0x23a846(0xfb)](_0x23a846(0x105)),
      _0x115d04 = document[_0x23a846(0xfb)]("notes"),
      _0x24c296 = document[_0x23a846(0xfb)](_0x23a846(0x126)),
      _0x4af187 = document[_0x23a846(0xfb)]("loader"),
      _0x15aeed = new ZXing[_0x23a846(0x11e)](),
      _0x3ce25b = async () => {
        const _0x28cce8 = _0x23a846,
          _0x22ea8d = await navigator[_0x28cce8(0x124)][_0x28cce8(0x102)](),
          _0x4af4dd = _0x22ea8d["filter"](
            (_0x548791) => _0x548791[_0x28cce8(0x12e)] === _0x28cce8(0x109)
          ),
          _0x3c5000 = _0x4af4dd[0x0];
        return {
          deviceId: _0x3c5000["deviceId"],
          width: { ideal: 0x780 },
          height: { ideal: 0x438 },
          facingMode: _0x28cce8(0x130),
          focusMode: "continuous",
        };
      };
    _0x3ce25b()["then"]((_0x109653) => {
      const _0x1c4eea = _0x23a846;
      _0x15aeed[_0x1c4eea(0x106)](
        undefined,
        _0x181740,
        async (_0x2de5a3, _0x1bea05) => {
          const _0x2dc8d5 = _0x1c4eea;
          _0x24c296["style"][_0x2dc8d5(0x110)] = "none";
          if (_0x2de5a3) {
            _0x15aeed["reset"](),
              (_0x59db35[_0x2dc8d5(0x12d)][_0x2dc8d5(0x110)] =
                _0x2dc8d5(0x11b)),
              (_0x4af187["style"][_0x2dc8d5(0x110)] = _0x2dc8d5(0x11b));
            const _0x50c8e9 = _0x2de5a3["text"],
              [_0x2a8a66, _0x5d2685] = _0x50c8e9["split"]("-"),
              _0x1c949e = _0x4c836a[_0x2dc8d5(0x132)],
              _0xd5449f = _0x115d04["value"],
              _0x42bb30 = _0x383746(
                _0x316c25(
                  _0x111a8c,
                  _0x2dc8d5(0xfe),
                  _0x2a8a66,
                  _0x2dc8d5(0x12a)
                ),
                _0x31d688(_0x2dc8d5(0x105), "==", _0x1c949e)
              ),
              _0x4733a8 = await _0x167996(_0x42bb30);
            if (_0x4733a8["empty"]) {
              console["log"](_0x2dc8d5(0x113)),
                (_0xe3b675[_0x2dc8d5(0x12d)][_0x2dc8d5(0x110)] =
                  _0x2dc8d5(0x11b));
              return;
            }
            _0x4733a8[_0x2dc8d5(0x114)]((_0x5bf9aa) => {
              const _0xd23063 = _0x2dc8d5,
                _0x528f61 = _0x5bf9aa["data"](),
                _0x62e0ab = new Date(),
                _0x1c24e7 = {
                  time: _0x62e0ab,
                  location: _0x5d2685,
                  note: _0xd5449f,
                };
              if (
                _0x528f61[_0xd23063(0x111)] === _0xd23063(0x121) ||
                !_0x528f61[_0xd23063(0x111)]
              ) {
                console[_0xd23063(0x128)](_0xd23063(0x12b)),
                  setTimeout(() => {
                    const _0x1f1c88 = _0xd23063;
                    alert(_0x1f1c88(0x100)),
                      (window[_0x1f1c88(0x107)][_0x1f1c88(0x117)] =
                        "checkedin.html");
                  }, 0x9c4),
                  (_0xe3b675[_0xd23063(0x12d)][_0xd23063(0x110)] =
                    _0xd23063(0x101));
                const _0x3013b5 = _0x528f61[_0xd23063(0x10d)] || [];
                _0xa9421a(_0x5bf9aa[_0xd23063(0xfc)], {
                  lastCheckInTime: _0x4a5ada(),
                  checkInTimes: [..._0x3013b5, _0x1c24e7],
                  lastEvent: _0xd23063(0x10f),
                  note: _0xd5449f,
                });
              } else {
                if (_0x528f61[_0xd23063(0x111)] === _0xd23063(0x10f)) {
                  console["log"](
                    "Check-out\x20timestamp\x20has\x20been\x20updated"
                  ),
                    setTimeout(() => {
                      const _0x1cc571 = _0xd23063;
                      alert("Shaqada\x20waad\x20ka\x20baxday"),
                        (window[_0x1cc571(0x107)]["href"] = _0x1cc571(0x123));
                    }, 0x9c4),
                    (_0xe3b675[_0xd23063(0x12d)][_0xd23063(0x110)] =
                      _0xd23063(0x101));
                  const _0x37d4bc = _0x528f61["checkOutTimes"] || [];
                  _0xa9421a(_0x5bf9aa[_0xd23063(0xfc)], {
                    lastCheckOutTime: _0x4a5ada(),
                    checkOutTimes: [..._0x37d4bc, _0x1c24e7],
                    lastEvent: _0xd23063(0x121),
                    note: _0xd5449f,
                  });
                }
              }
            });
          }
          _0x1bea05 &&
            !(_0x1bea05 instanceof ZXing[_0x2dc8d5(0x103)]) &&
            console[_0x2dc8d5(0x120)](_0x1bea05);
        },
        _0x109653
      );
    }),
      _0x59db35[_0x23a846(0x119)](_0x23a846(0x115), function () {
        const _0x59b86d = _0x23a846;
        location[_0x59b86d(0x10b)]();
      });
  })();
