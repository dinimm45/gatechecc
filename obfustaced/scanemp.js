(function (_0x891a56, _0x51067f) {
  const _0xf8a318 = _0x1315,
    _0x385b37 = _0x891a56();
  while (!![]) {
    try {
      const _0x4bc1cc =
        (parseInt(_0xf8a318(0x16e)) / 0x1) *
          (-parseInt(_0xf8a318(0x175)) / 0x2) +
        (parseInt(_0xf8a318(0x180)) / 0x3) *
          (parseInt(_0xf8a318(0x173)) / 0x4) +
        (parseInt(_0xf8a318(0x186)) / 0x5) *
          (parseInt(_0xf8a318(0x1a3)) / 0x6) +
        (parseInt(_0xf8a318(0x18e)) / 0x7) *
          (parseInt(_0xf8a318(0x19c)) / 0x8) +
        -parseInt(_0xf8a318(0x191)) / 0x9 +
        (-parseInt(_0xf8a318(0x183)) / 0xa) *
          (parseInt(_0xf8a318(0x19b)) / 0xb) +
        (parseInt(_0xf8a318(0x194)) / 0xc) * (parseInt(_0xf8a318(0x1a6)) / 0xd);
      if (_0x4bc1cc === _0x51067f) break;
      else _0x385b37["push"](_0x385b37["shift"]());
    } catch (_0x29f17c) {
      _0x385b37["push"](_0x385b37["shift"]());
    }
  }
})(_0xce9e, 0x920d0),
  (async () => {
    const _0x1beb84 = _0x1315,
      { initializeApp: _0x223b89 } = await import(_0x1beb84(0x199)),
      { getAnalytics: _0x65f32e } = await import(_0x1beb84(0x18d)),
      { getAuth: _0xba8915 } = await import(_0x1beb84(0x17f)),
      {
        getFirestore: _0x5193b8,
        doc: _0x2a9a93,
        getDocs: _0x2a4999,
        collection: _0x71ca03,
        deleteDoc: _0x3600fc,
        query: _0x3916dc,
        where: _0x30ea5c,
        updateDoc: _0x275003,
        serverTimestamp: _0x5024f0,
        arrayUnion: _0x3b39f6,
      } = await import(
        "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
      ),
      _0xf495bc = {
        apiKey: _0x1beb84(0x1a8),
        authDomain: _0x1beb84(0x16d),
        projectId: _0x1beb84(0x17c),
        storageBucket: "eventsdb-b6aaf.appspot.com",
        messagingSenderId: _0x1beb84(0x18a),
        appId: _0x1beb84(0x171),
        measurementId: _0x1beb84(0x179),
      },
      _0x39c704 = _0x223b89(_0xf495bc),
      _0x1aa5b3 = _0x65f32e(_0x39c704),
      _0x532d93 = _0x5193b8(),
      _0x47ae08 = document[_0x1beb84(0x197)](_0x1beb84(0x172)),
      _0x185781 = document[_0x1beb84(0x197)](_0x1beb84(0x1ac)),
      _0x418d94 = document[_0x1beb84(0x197)]("valid"),
      _0x2510cb = document[_0x1beb84(0x197)](_0x1beb84(0x170)),
      _0x1460d1 = document[_0x1beb84(0x197)](_0x1beb84(0x17e)),
      _0x4478f4 = document[_0x1beb84(0x197)](_0x1beb84(0x1ae)),
      _0x1b96d1 = document["getElementById"]("companyName"),
      _0x25a674 = document["getElementById"](_0x1beb84(0x181)),
      _0x3bef11 = document[_0x1beb84(0x197)]("notes"),
      _0x535b70 = document[_0x1beb84(0x197)](_0x1beb84(0x187)),
      _0x13b805 = document[_0x1beb84(0x197)](_0x1beb84(0x178)),
      _0x1a650e = new ZXing[_0x1beb84(0x1a5)](),
      _0x43cf4e = async () => {
        const _0x298d3f = _0x1beb84,
          _0x5850a4 = await navigator[_0x298d3f(0x190)][_0x298d3f(0x19f)](),
          _0x1c8e9f = _0x5850a4[_0x298d3f(0x177)](
            (_0xe21d36) => _0xe21d36[_0x298d3f(0x1aa)] === _0x298d3f(0x195)
          ),
          _0xdd89c5 = _0x1c8e9f[0x0];
        return {
          deviceId: _0xdd89c5[_0x298d3f(0x192)],
          width: { ideal: 0x780 },
          height: { ideal: 0x438 },
          facingMode: _0x298d3f(0x1ad),
          focusMode: _0x298d3f(0x18c),
        };
      };
    _0x43cf4e()["then"]((_0x482fe8) => {
      _0x1a650e["decodeFromVideoDevice"](
        undefined,
        _0x47ae08,
        async (_0x486787, _0x4d4c54) => {
          const _0x28a9b4 = _0x1315;
          _0x535b70["style"][_0x28a9b4(0x18b)] = "none";
          if (_0x486787) {
            _0x1a650e[_0x28a9b4(0x17b)](),
              (_0x1460d1[_0x28a9b4(0x184)][_0x28a9b4(0x18b)] =
                _0x28a9b4(0x176)),
              (_0x13b805["style"][_0x28a9b4(0x18b)] = _0x28a9b4(0x176));
            const _0x453495 = _0x486787[_0x28a9b4(0x188)],
              [_0x491906, _0x3e4f8d] = _0x453495[_0x28a9b4(0x174)]("-"),
              _0x2d4dcf = _0x25a674[_0x28a9b4(0x17a)],
              _0x629f94 = _0x3bef11["value"],
              _0x72b376 = _0x3916dc(
                _0x71ca03(_0x532d93, "companies", _0x491906, _0x28a9b4(0x198)),
                _0x30ea5c(_0x28a9b4(0x181), "==", _0x2d4dcf)
              ),
              _0x12c3fb = await _0x2a4999(_0x72b376);
            if (_0x12c3fb[_0x28a9b4(0x19a)]) {
              console["log"]("No\x20matching\x20employers\x20found."),
                (_0x4478f4["style"][_0x28a9b4(0x18b)] = _0x28a9b4(0x176));
              return;
            }
            _0x12c3fb[_0x28a9b4(0x182)]((_0x2f98f1) => {
              const _0x37755f = _0x28a9b4,
                _0x20dc15 = _0x2f98f1[_0x37755f(0x1a0)](),
                _0x2caffe = new Date(),
                _0x549128 = {
                  time: _0x2caffe,
                  location: _0x3e4f8d,
                  note: _0x629f94,
                };
              if (
                _0x20dc15[_0x37755f(0x1ab)] === _0x37755f(0x189) ||
                !_0x20dc15[_0x37755f(0x1ab)]
              ) {
                console["log"](
                  "Check-in\x20timestamp\x20has\x20been\x20updated"
                ),
                  setTimeout(() => {
                    const _0x483ca9 = _0x37755f;
                    alert(_0x483ca9(0x1a1));
                  }, 0x9c4),
                  (_0x4478f4["style"][_0x37755f(0x18b)] = _0x37755f(0x19d));
                const _0x14f1ec = _0x20dc15[_0x37755f(0x185)] || [];
                _0x275003(_0x2f98f1["ref"], {
                  lastCheckInTime: _0x5024f0(),
                  checkInTimes: [..._0x14f1ec, _0x549128],
                  lastEvent: _0x37755f(0x1a2),
                  note: _0x629f94,
                });
              } else {
                if (_0x20dc15[_0x37755f(0x1ab)] === "checkIn") {
                  console[_0x37755f(0x1a4)](_0x37755f(0x193)),
                    setTimeout(() => {
                      const _0x8b7ab7 = _0x37755f;
                      alert(_0x8b7ab7(0x1a7));
                    }, 0x9c4),
                    (_0x4478f4[_0x37755f(0x184)][_0x37755f(0x18b)] =
                      _0x37755f(0x19d));
                  const _0x33c3a5 = _0x20dc15[_0x37755f(0x1a9)] || [];
                  _0x275003(_0x2f98f1[_0x37755f(0x17d)], {
                    lastCheckOutTime: _0x5024f0(),
                    checkOutTimes: [..._0x33c3a5, _0x549128],
                    lastEvent: _0x37755f(0x189),
                    note: _0x629f94,
                  });
                }
              }
            });
          }
          _0x4d4c54 &&
            !(_0x4d4c54 instanceof ZXing[_0x28a9b4(0x18f)]) &&
            console["error"](_0x4d4c54);
        },
        _0x482fe8
      );
    }),
      _0x1460d1[_0x1beb84(0x19e)](_0x1beb84(0x16f), function () {
        const _0x3788b7 = _0x1beb84;
        location[_0x3788b7(0x196)]();
      });
  })();
function _0x1315(_0x99b109, _0x391cdf) {
  const _0xce9ec5 = _0xce9e();
  return (
    (_0x1315 = function (_0x131584, _0x1cafd0) {
      _0x131584 = _0x131584 - 0x16d;
      let _0x2f8e62 = _0xce9ec5[_0x131584];
      return _0x2f8e62;
    }),
    _0x1315(_0x99b109, _0x391cdf)
  );
}
function _0xce9e() {
  const _0x14b8be = [
    "245oMVUwA",
    "NotFoundException",
    "mediaDevices",
    "8975106BBUhBy",
    "deviceId",
    "Check-out\x20timestamp\x20has\x20been\x20updated",
    "15763596ymczRz",
    "videoinput",
    "reload",
    "getElementById",
    "employers",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js",
    "empty",
    "528495rHPnql",
    "74864dwhlmT",
    "none",
    "addEventListener",
    "enumerateDevices",
    "data",
    "Shaqada\x20waad\x20bilaawday",
    "checkIn",
    "9726baVUnN",
    "log",
    "BrowserMultiFormatReader",
    "13axdwMB",
    "Shaqada\x20waad\x20ka\x20baxday",
    "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
    "checkOutTimes",
    "kind",
    "lastEvent",
    "outputData",
    "environment",
    "error",
    "eventsdb-b6aaf.firebaseapp.com",
    "106234anrzGp",
    "click",
    "nonevalid",
    "1:995789907234:web:54edcc689b1c894594717b",
    "video",
    "3841196rgxAmy",
    "split",
    "18lAnKBA",
    "block",
    "filter",
    "loader",
    "G-J0DC7YW8J4",
    "value",
    "reset",
    "eventsdb-b6aaf",
    "ref",
    "refresh",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js",
    "3yudSZf",
    "phoneNumber",
    "forEach",
    "200Exibjb",
    "style",
    "checkInTimes",
    "2810HOexTo",
    "loading",
    "text",
    "checkOut",
    "995789907234",
    "display",
    "continuous",
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js",
  ];
  _0xce9e = function () {
    return _0x14b8be;
  };
  return _0xce9e();
}
