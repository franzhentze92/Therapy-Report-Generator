const _0x22e629 = _0x3eb8;
(function (_0x2a9dc9, _0x59240d) {
    const _0x6e76be = _0x3eb8,
        _0x2a5f52 = _0x2a9dc9();
    while (!![]) {
        try {
            const _0x3ddfe2 =
                -parseInt(_0x6e76be(0x22f)) / 0x1 +
                (-parseInt(_0x6e76be(0x2a5)) / 0x2) * (parseInt(_0x6e76be(0x271)) / 0x3) +
                -parseInt(_0x6e76be(0x253)) / 0x4 +
                parseInt(_0x6e76be(0x291)) / 0x5 +
                parseInt(_0x6e76be(0x1c8)) / 0x6 +
                parseInt(_0x6e76be(0x19c)) / 0x7 +
                parseInt(_0x6e76be(0x20c)) / 0x8;
            if (_0x3ddfe2 === _0x59240d) break;
            else _0x2a5f52["push"](_0x2a5f52["shift"]());
        } catch (_0x13b7a5) {
            _0x2a5f52["push"](_0x2a5f52["shift"]());
        }
    }
})(_0x4cf6, 0xc0a73);
const selectedMatchingManagementPaddocks = new Set();
let paddock = { table: "", tae_table: "", base_saturation_lower_table: "", dataset_processed: {}, recommendations: { explanation: "", form_data: {} } },
    userData = { date: "", name: "", address: "", land: "", sample_rec: "", email: "" },
    report = {};
(report["title"] = "Soil\x20Therapy\x20Report"),
    (report[_0x22e629(0x23b)] = userData),
    (report["include_nutrients_explanation"] = ![]),
    (report[_0x22e629(0x258)] = null),
    (report[_0x22e629(0x213)] = null),
    (report["sample_paddock_farm_assignments"] = []),
    (report[_0x22e629(0x228)] = {}),
    (report[_0x22e629(0x281)] = {});
let farmsManagementData = {};
function reset() {
    const _0x176be8 = _0x22e629;
    report &&
        typeof report === _0x176be8(0x223) &&
        Object["keys"](report)["forEach"]((_0x3833f5) => {
            const _0x28ff15 = _0x176be8;
            (!report[_0x28ff15(0x228)][_0x3833f5] || !report[_0x28ff15(0x228)][_0x3833f5][_0x28ff15(0x2aa)](_0x28ff15(0x1b7))) && delete report["paddocks"][_0x3833f5];
        }),
        (paddock = { table: "", tae_table: "", base_saturation_lower_table: "", dataset_processed: {}, recommendations: { explanation: "", form_data: {} } }),
        (userData = { date: "", name: "", address: "", land: "", sample_rec: "", email: "" }),
        (report = {}),
        (report[_0x176be8(0x296)] = _0x176be8(0x1cd)),
        (document["title"] = report["title"]),
        (report[_0x176be8(0x23b)] = userData),
        (report["include_nutrients_explanation"] = ![]),
        (report[_0x176be8(0x258)] = null),
        (report[_0x176be8(0x213)] = null),
        (report[_0x176be8(0x284)] = []),
        (report["paddocks"] = {}),
        (report[_0x176be8(0x281)] = {}),
        (farmsManagementData = {});
}
function populateTableSelectionDropdown(_0x34f6c1) {
    const _0x3d1393 = _0x22e629,
        _0x335425 = document[_0x3d1393(0x1b8)](_0x3d1393(0x1d8));
    (_0x335425["innerHTML"] = ""),
        Object[_0x3d1393(0x28b)](_0x34f6c1)[_0x3d1393(0x2a7)]((_0x441883) => {
            const _0x5be795 = _0x3d1393,
                _0x349b78 = document["createElement"](_0x5be795(0x1d0));
            (_0x349b78[_0x5be795(0x1bc)] = _0x441883), (_0x349b78[_0x5be795(0x1df)] = _0x441883), _0x335425["appendChild"](_0x349b78);
        });
}
function getSelectedPaddock() {
    const _0x2468a3 = _0x22e629;
    let _0x503e83 = document[_0x2468a3(0x1b8)](_0x2468a3(0x1d8))[_0x2468a3(0x1bc)];
    return _0x503e83;
}
async function processJSONData(_0x26c983, _0x5516ff) {
    const _0x27e368 = _0x22e629;
    try {
        let _0xe54c4f = {};
        (_0xe54c4f["albrecht"] = {}), (_0xe54c4f[_0x27e368(0x260)] = {});
        let { calculated_results: _0xe56c12, lamotte_data: _0xb3487c, tae_data: _0x2ff92f } = _0x26c983,
            _0x54fa19 = _0xe56c12[_0x5516ff],
            _0x3600ec = _0xb3487c[_0x5516ff],
            _0x582273 = _0x2ff92f[_0x5516ff],
            _0x2ed962 = ["Calcium", _0x27e368(0x1e6), _0x27e368(0x1bf), _0x27e368(0x205), _0x27e368(0x1d5)],
            _0x25ab5b = [];
        Object[_0x27e368(0x1a5)](_0x54fa19[_0x27e368(0x237)])[_0x27e368(0x2a7)](([_0x4b35e, _0x114c4e]) => {
            const _0x5e44ef = _0x27e368;
            let _0xb451b7 = _0x114c4e[_0x5e44ef(0x1bc)][_0x5e44ef(0x264)]();
            _0x2ed962[_0x5e44ef(0x19d)](_0x114c4e["name"]) && _0xb451b7["startsWith"]("<") && (_0xb451b7 = "0");
            let _0x59ccaa = [
                _0x114c4e?.["name"],
                _0x114c4e?.["identification"],
                _0xb451b7,
                _0x114c4e?.[_0x5e44ef(0x227)]?.[_0x5e44ef(0x264)](),
                _0x114c4e?.[_0x5e44ef(0x1b5)]?.[_0x5e44ef(0x264)](),
                _0x114c4e?.["deficient"]?.[_0x5e44ef(0x264)]() || "",
                _0x114c4e?.[_0x5e44ef(0x199)]?.["toString"]() || "",
                "",
            ];
            _0x25ab5b[_0x5e44ef(0x1dc)](_0x59ccaa);
        }),
            (_0xe54c4f[_0x27e368(0x198)][_0x27e368(0x1bd)] = _0x25ab5b);
        let _0x3e4c31 = [];
        Object["entries"](_0x54fa19[_0x27e368(0x24c)])["forEach"](([_0x5ef49b, _0x2f39b4]) => {
            const _0x32fc31 = _0x27e368;
            let _0x163a73 = _0x2f39b4?.[_0x32fc31(0x1bc)]?.[_0x32fc31(0x264)]();
            _0x2ed962[_0x32fc31(0x19d)](_0x2f39b4[_0x32fc31(0x1f3)]) && _0x163a73["startsWith"]("<") && (_0x163a73 = "0");
            let _0x3ae885 = [
                _0x2f39b4?.["full_name"],
                _0x2f39b4?.[_0x32fc31(0x278)],
                _0x163a73,
                _0x2f39b4?.[_0x32fc31(0x227)]?.[_0x32fc31(0x264)](),
                _0x2f39b4?.[_0x32fc31(0x1b5)]?.[_0x32fc31(0x264)](),
                _0x2f39b4?.[_0x32fc31(0x191)]?.[_0x32fc31(0x264)]() || "",
                _0x2f39b4?.[_0x32fc31(0x199)]?.[_0x32fc31(0x264)]() || "",
                "",
            ];
            _0x3e4c31[_0x32fc31(0x1dc)](_0x3ae885);
        }),
            (_0xe54c4f[_0x27e368(0x198)][_0x27e368(0x24c)] = _0x3e4c31);
        let _0x24af5e = [];
        (!_0x3600ec || Object[_0x27e368(0x28b)](_0x3600ec)[_0x27e368(0x23a)] === 0x0) && (_0x3600ec = _0x54fa19[_0x27e368(0x29a)]);
        Object[_0x27e368(0x1a5)](_0x3600ec)["forEach"](([_0x541f0, _0x483424]) => {
            const _0x599e43 = _0x27e368;
            let _0xc81ecd = _0x483424?.[_0x599e43(0x1bc)];
            _0x2ed962[_0x599e43(0x19d)](_0x483424[_0x599e43(0x265)]) && String(_0xc81ecd)[_0x599e43(0x25b)]("<") && (_0xc81ecd = "0");
            let _0x29e881 = _0x483424?.[_0x599e43(0x1b5)] || _0x483424?.[_0x599e43(0x244)] || "",
                _0x294ee6 = [_0x483424[_0x599e43(0x265)], "", _0xc81ecd, _0x483424?.[_0x599e43(0x227)], _0x29e881, _0x483424?.["deficient"]?.[_0x599e43(0x264)]() || "", _0x483424?.[_0x599e43(0x199)]?.[_0x599e43(0x264)]() || "", ""];
            _0x24af5e[_0x599e43(0x1dc)](_0x294ee6);
        }),
            (_0xe54c4f["lamotte"] = _0x24af5e);
        let _0x452716 = _0x54fa19["tec"],
            _0x106bca = _0x54fa19[_0x27e368(0x22e)] || _0x452716;
        (_0xe54c4f[_0x27e368(0x1fd)] = _0x452716), (_0xe54c4f[_0x27e368(0x22e)] = _0x106bca);
        let _0x307390 = _0x54fa19["ideal_ratio_levels"]["find"]((_0x1ee791) => _0x1ee791["name"] === "Ca/Mg\x20Ratio") || {};
        return (_0xe54c4f[_0x27e368(0x212)] = _0x307390), (_0xe54c4f[_0x27e368(0x254)] = _0x582273), _0xe54c4f;
    } catch (_0xddec0e) {
        console[_0x27e368(0x221)]("Error\x20processing\x20JSON\x20data:\x20", _0xddec0e);
    }
}
function createRow(_0x299d6d, _0xc0519b = "", _0x88c20a = "", _0x1a6001 = "", _0x27e10e = "", _0x2999e5 = "", _0x2251aa = "", _0x2cb3b1 = "", _0x2f2994 = "", _0x150ebd, _0x3bf96f, _0x235d1e = "", _0x3fd92f = 0x0) {
    const _0x511688 = _0x22e629;
    let _0x5b7761 = "";
    if (_0x299d6d == _0x511688(0x219)) {
        const _0x33eeeb = [_0x511688(0x194), _0x511688(0x1e6), _0x511688(0x1bf), _0x511688(0x205), _0x511688(0x1d5)];
        let _0x3d8a7c, _0xff5977, _0x42b56a;
        typeof _0x1a6001 === _0x511688(0x223)
            ? ((_0x3d8a7c = _0x1a6001["display_value"] || _0x1a6001[_0x511688(0x1bc)]),
              (_0xff5977 = _0x1a6001[_0x511688(0x1f0)] || (_0x1a6001[_0x511688(0x28c)] && _0x1a6001[_0x511688(0x28c)][_0x511688(0x19d)]("<"))),
              (_0x42b56a = _0x1a6001[_0x511688(0x1bc)]))
            : ((_0xff5977 = String(_0x1a6001)[_0x511688(0x19d)]("<")), _0xff5977 && _0x33eeeb[_0x511688(0x19d)](_0xc0519b) ? ((_0x42b56a = 0x0), (_0x3d8a7c = "0")) : ((_0x42b56a = _0x1a6001), (_0x3d8a7c = _0x1a6001)));
        !_0xff5977 && !isNaN(Number(_0x3d8a7c)) && (_0x3d8a7c = Number(_0x3d8a7c)[_0x511688(0x1f9)](0x2) || _0x3d8a7c);
        const _0x5a4b6b = extractAndJoinNumbers(String(_0x27e10e)),
            _0xa64c0a = extractAndJoinNumbers(String(_0x2999e5)),
            _0x40134a = extractAndJoinNumbers(String(_0x2cb3b1)) || _0xa64c0a * 1.15,
            _0x10cd9c = extractAndJoinNumbers(String(_0x2251aa)) || _0x5a4b6b * 0.75,
            _0x54b44f = extractAndJoinNumbers(String(_0x3fd92f)) || 0x0,
            _0x3bfe00 = typeof _0x1a6001 === _0x511688(0x223) ? !_0xff5977 : !![];
        let { percentage: _0x309f67, className: _0x455a99 } = _0x3bfe00 ? calculateProgress(_0x235d1e, _0xc0519b, _0x42b56a, _0x5a4b6b, _0xa64c0a, _0x10cd9c, _0x40134a, _0x54b44f) : { percentage: 0x0, className: "" };
        if (_0xc0519b == "pH-level") {
            if (Number(_0x42b56a) < 0x6) _0x455a99 = _0x511688(0x191);
            else Number(_0x42b56a) > 6.9 && (_0x455a99 = _0x511688(0x199));
        }
        let _0x40f473 = "";
        if (!_0xff5977)
            switch (_0x455a99) {
                case "deficient":
                    _0x40f473 = _0x511688(0x1ac);
                    break;
                case _0x511688(0x25a):
                    _0x40f473 = _0x511688(0x206);
                    break;
                case _0x511688(0x283):
                    _0x40f473 = _0x511688(0x206);
                    break;
                case _0x511688(0x18e):
                    _0x40f473 = _0x511688(0x206);
                    break;
                case _0x511688(0x199):
                    _0x40f473 = _0x511688(0x21f);
                    break;
            }
        (_0x309f67 = _0x309f67 < 0.1 ? _0x511688(0x204) : _0x309f67),
            _0x5a4b6b == 0x0 && _0xa64c0a == 0x0 && ((_0x309f67 = 0x0), (_0x455a99 = _0x511688(0x191)), (_0x40f473 = _0x511688(0x1ac))),
            (_0x5b7761 =
                _0x511688(0x1b2) +
                _0x235d1e +
                "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22m-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22m-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                _0xc0519b +
                "\x20" +
                (_0x88c20a != "" ? "<span\x20class=\x22parenthetical-text\x22>(" + _0x88c20a + _0x511688(0x268) : "") +
                _0x511688(0x1c6) +
                _0x3d8a7c +
                _0x511688(0x207) +
                _0x2f2994 +
                _0x511688(0x242) +
                (![_0x511688(0x19f), "Texture"][_0x511688(0x19d)](_0xc0519b)
                    ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20padding-right:\x2010px;\x20vertical-align:\x20middle;\x20\x22><span\x20style=\x22width:\x2070%;\x20text-align:\x20right;\x22>" +
                      (_0x27e10e != "" ? _0x27e10e + _0x511688(0x1a6) : "") +
                      "\x20" +
                      _0x2999e5 +
                      _0x511688(0x207) +
                      _0x2f2994 +
                      _0x511688(0x22d)
                    : "<span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20padding-right:\x2010px;\x20vertical-align:\x20middle;\x20\x22></span>") +
                _0x511688(0x1dd) +
                (_0x3bfe00 && _0x42b56a != 0x0 && !isNaN(_0x42b56a) && _0x2999e5 != ""
                    ? "" +
                      (_0x309f67 == "Extremely\x20Low"
                          ? _0x511688(0x1f5) + _0x455a99 + "\x22\x20style=\x22background:\x20none;\x20height:\x2015px;\x20text-align:\x20left;\x20margin-left:\x205px;\x22>" + _0x309f67 + "</span>"
                          : _0x511688(0x1f5) + _0x455a99 + _0x511688(0x29f) + _0x40f473 + _0x511688(0x1fa) + _0x309f67 + _0x511688(0x1b3))
                    : "") +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (_0x150ebd != _0x3bf96f - 0x1 ? _0x511688(0x1c5) : _0x511688(0x1a7)) +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>");
    } else _0x299d6d == _0x511688(0x280) && (_0x5b7761 = "");
    return _0x5b7761;
}
function reverseBoundsFromMidpoint(_0x4be080, _0x3907bd, _0x770010, _0x3bfc35) {
    const _0x30ee2c = _0x22e629;
    let _0x3f7497, _0x11592c;
    if (_0x770010 === "Ca") (_0x3f7497 = 0.7515), (_0x11592c = 1.25);
    else {
        if (_0x770010 === "Mg") (_0x3f7497 = 0.7515), (_0x11592c = 1.25);
        else throw new Error(_0x30ee2c(0x276));
    }
    const _0x1f9ad8 = (_0x3f7497 + _0x11592c) / 0x2,
        _0x32ce62 = _0x4be080 / ((_0x1f9ad8 / 0x64) * _0x3907bd * _0x3bfc35),
        _0x46c24c = Math[_0x30ee2c(0x279)](((_0x32ce62 * _0x3f7497) / 0x64) * _0x3907bd * _0x3bfc35),
        _0x4395ee = Math[_0x30ee2c(0x279)](((_0x32ce62 * _0x11592c) / 0x64) * _0x3907bd * _0x3bfc35);
    return [_0x46c24c, _0x4395ee];
}
function getBaseSaturationIdealRanges(_0x4e4c1b, _0x11d2cf) {
    const _0x54d24a = _0x22e629,
        _0x491983 = [
            { min: 0x1, max: 0x3, ratio: 0x3, Ca: 0x3c, Mg: 0x14, K: [0x5, 0x7] },
            { min: 0x3, max: 0x5, ratio: 3.4, Ca: 0x3e, Mg: 0x12, K: [0x5, 0x7] },
            { min: 0x5, max: 0x7, ratio: 0x4, Ca: 0x40, Mg: 0x10, K: [0x4, 0x5] },
            { min: 0x7, max: 0x9, ratio: 4.3, Ca: 0x41, Mg: 0xf, K: [3.5, 0x5] },
            { min: 0x9, max: 0xb, ratio: 5.2, Ca: 0x43, Mg: 0xd, K: [0x3, 0x5] },
            { min: 0xb, max: 0x1e, ratio: 5.7, Ca: 0x44, Mg: 0xc, K: [0x3, 0x5] },
            { min: 0x1e, max: 0x186a0, ratio: 0x7, Ca: 0x46, Mg: 0xa, K: [0x2, 0x5] },
        ];
    let _0x58bb2d = {};
    for (let _0x5ab87c of _0x491983) {
        if (_0x11d2cf >= _0x5ab87c[_0x54d24a(0x1a9)] && _0x11d2cf < _0x5ab87c[_0x54d24a(0x299)])
            return (
                _0x11d2cf < 0x4
                    ? ((_0x58bb2d["Ca"] = [46.5, 77.5]), (_0x58bb2d["Mg"] = [13.5, 22.5]), (_0x58bb2d["K"] = [0x5, 0x7]))
                    : ((_0x58bb2d["Ca"] = [_0x5ab87c["Ca"] * 0.7515, _0x5ab87c["Ca"] * 1.25]), (_0x58bb2d["Mg"] = [_0x5ab87c["Mg"] * 0.7515, _0x5ab87c["Mg"] * 1.25]), (_0x58bb2d["K"] = _0x5ab87c["K"])),
                _0x58bb2d[_0x4e4c1b]
            );
    }
    return null;
}
function calculateProgress(_0x16ebc1, _0xbd0c06, _0x15fdf3, _0x1a7d63, _0x18163f, _0x20a4e8, _0x4c7eb5, _0x4a1eef) {
    const _0x9e901f = _0x22e629;
    let _0x4caa64, _0x4545ba;
    const _0x3a8f27 = 0x3;
    if (_0x15fdf3 === 0x0) return { percentage: (33.33 / 0x64) * _0x3a8f27, className: _0x9e901f(0x191) };
    _0xbd0c06 == _0x9e901f(0x194) && Number[_0x9e901f(0x1b9)](_0x1a7d63) && _0x16ebc1 == "Available_Nutrients" && ([_0x1a7d63, _0x18163f] = reverseBoundsFromMidpoint(_0x18163f, _0x4a1eef, "Ca", 0xc8));
    _0xbd0c06 == _0x9e901f(0x1e6) && Number["isNaN"](_0x1a7d63) && _0x16ebc1 == _0x9e901f(0x1ef) && ([_0x1a7d63, _0x18163f] = reverseBoundsFromMidpoint(_0x18163f, _0x4a1eef, "Mg", 0x78));
    _0xbd0c06 == _0x9e901f(0x194) && _0x16ebc1 == _0x9e901f(0x1d9) && ([_0x1a7d63, _0x18163f] = getBaseSaturationIdealRanges("Ca", _0x4a1eef));
    _0xbd0c06 == _0x9e901f(0x1e6) && _0x16ebc1 == _0x9e901f(0x1d9) && ([_0x1a7d63, _0x18163f] = getBaseSaturationIdealRanges("Mg", _0x4a1eef));
    _0xbd0c06 == _0x9e901f(0x224) && _0x16ebc1 == _0x9e901f(0x1d9) && ([_0x1a7d63, _0x18163f] = [0.375, 0.625]);
    _0xbd0c06 == _0x9e901f(0x239) && _0x16ebc1 == _0x9e901f(0x1d9) && ([_0x1a7d63, _0x18163f] = [7.5, 12.5]);
    _0xbd0c06 == "Other\x20Bases" && _0x16ebc1 == _0x9e901f(0x1d9) && ([_0x1a7d63, _0x18163f] = [0x0, 0x5]);
    const _0x1d72ed = _0x1a7d63 || _0x15fdf3 * 0.8,
        _0x2c300a = _0x18163f || _0x15fdf3 * 1.8,
        _0x37c633 = _0x20a4e8 || _0x1d72ed * 0.65,
        _0x141cdd = _0x4c7eb5 || _0x2c300a * 1.35;
    if (_0x15fdf3 < _0x1d72ed * 0.95) return (_0x4545ba = (_0x15fdf3 / _0x1d72ed) * (33.33 / 0x64) * _0x3a8f27), { percentage: Math[_0x9e901f(0x1a9)](_0x4545ba, 0x64), className: _0x9e901f(0x191) };
    if (_0x15fdf3 < _0x1d72ed) return (_0x4545ba = (_0x15fdf3 / _0x1d72ed) * (33.33 / 0x64) * _0x3a8f27), { percentage: Math[_0x9e901f(0x1a9)](_0x4545ba, 0x64), className: _0x9e901f(0x25a) };
    if (_0x15fdf3 <= _0x2c300a)
        return (_0x4545ba = (33.33 / 0x64) * _0x3a8f27 + ((_0x15fdf3 - _0x1d72ed) / (_0x2c300a - _0x1d72ed)) * (33.33 / 0x64) * _0x3a8f27), { percentage: Math[_0x9e901f(0x1a9)](_0x4545ba, 0x64), className: _0x9e901f(0x283) };
    if (_0x15fdf3 <= _0x2c300a * 1.8) {
        let _0x24e1d4 = 0x4,
            _0x154b99 = Math[_0x9e901f(0x1fe)]((_0x15fdf3 - _0x2c300a) / (_0x24e1d4 * (_0x141cdd - _0x2c300a)));
        return (_0x4545ba = (66.66 / 0x64) * _0x3a8f27 + _0x154b99 * (33.33 / 0x64)), { percentage: Math[_0x9e901f(0x1a9)](_0x4545ba, 0x64), className: "partial-excessive" };
    }
    let _0x47d43c = Math["sqrt"]((_0x15fdf3 - _0x2c300a) / (_0x141cdd - _0x2c300a));
    return (_0x4545ba = (66.66 / 0x64) * _0x3a8f27 + _0x47d43c * (33.33 / 0x64)), { percentage: Math[_0x9e901f(0x1a9)](_0x4545ba, 0x64), className: "excessive" };
}
function updateUserDetailsHeader(_0x3ff1d7) {
    const _0x1af7a3 = _0x22e629,
        _0x114ff1 = _0x3ff1d7["id"],
        _0x111d6d = _0x3ff1d7[_0x1af7a3(0x1bc)],
        _0x10440d = _0x114ff1[_0x1af7a3(0x1e0)]("__")[_0x1af7a3(0x1af)](0x1);
    _0x114ff1 == _0x1af7a3(0x1c7) && (document["getElementById"](_0x1af7a3(0x259))[_0x1af7a3(0x1bc)] = _0x111d6d), (report[_0x1af7a3(0x23b)][_0x10440d] = _0x111d6d);
}
function extractAndJoinNumbers(_0x54dd69) {
    const _0x5d00da = _0x22e629;
    if (typeof _0x54dd69 !== _0x5d00da(0x255)) return "";
    let _0x34f437 = _0x54dd69[_0x5d00da(0x1ca)](/[\d.]+/g);
    return _0x34f437 ? parseFloat(_0x34f437[_0x5d00da(0x1d3)]("")) : NaN;
}
async function generateTable(_0x4a2033, _0x14c598) {
    const _0xc9fae1 = _0x22e629;
    let _0x108391 = await processJSONData(_0x4a2033, _0x14c598),
        _0x3701ba = _0xc9fae1(0x214),
        _0x2c80ec =
            _0xc9fae1(0x1ec) +
            _0x108391[_0xc9fae1(0x22e)] +
            _0xc9fae1(0x236) +
            _0x108391[_0xc9fae1(0x1fd)] +
            "</span>\x20<span\x20style=\x22width:\x2023%;\x22></span></span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20";
    const _0x57e4eb = [
        { name: "Paramagnetism", parenthetical: "", metric: "" },
        { name: _0xc9fae1(0x24f), parenthetical: _0xc9fae1(0x1ea), metric: "" },
        { name: _0xc9fae1(0x1c3), parenthetical: _0xc9fae1(0x2ab), metric: "%" },
        { name: "Organic\x20Carbon", parenthetical: "LECO", metric: "%" },
        { name: _0xc9fae1(0x26a), parenthetical: _0xc9fae1(0x1ea), metric: _0xc9fae1(0x241) },
        { name: "Ca/Mg\x20Ratio", parenthetical: "", metric: ":1" },
        { name: _0xc9fae1(0x1fb), parenthetical: _0xc9fae1(0x1e9), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1f7), parenthetical: "KCl", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x23c), parenthetical: "Mehlich\x20III", metric: "ppm" },
        { name: _0xc9fae1(0x1d7), parenthetical: "", metric: _0xc9fae1(0x243) },
        { name: _0xc9fae1(0x28e), parenthetical: "", metric: "" },
        { name: _0xc9fae1(0x1cb), parenthetical: "", metric: _0xc9fae1(0x243) },
        { name: "Calcium", parenthetical: "Mehlich\x20III", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1e6), parenthetical: _0xc9fae1(0x21e), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1bf), parenthetical: _0xc9fae1(0x21e), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x205), parenthetical: _0xc9fae1(0x21e), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1c0), parenthetical: _0xc9fae1(0x1e9), metric: "ppm" },
        { name: _0xc9fae1(0x20a), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1d5), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1c4), parenthetical: _0xc9fae1(0x1e5), metric: "ppm" },
        { name: _0xc9fae1(0x24d), parenthetical: _0xc9fae1(0x210), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x218), parenthetical: "DTPA", metric: "ppm" },
        { name: _0xc9fae1(0x1e2), parenthetical: _0xc9fae1(0x197), metric: "ppm" },
        { name: _0xc9fae1(0x1ae), parenthetical: _0xc9fae1(0x197), metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x2a3), parenthetical: _0xc9fae1(0x197), metric: _0xc9fae1(0x275) },
        { name: "Texture", parenthetical: "", metric: "" },
        { name: _0xc9fae1(0x19f), parenthetical: "", metric: "" },
        { name: _0xc9fae1(0x215), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: "Molybdenum", parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1c9), parenthetical: "", metric: "ppm" },
        { name: _0xc9fae1(0x293), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x2a4), parenthetical: "", metric: _0xc9fae1(0x275) },
    ];
    _0x57e4eb[_0xc9fae1(0x2a7)]((_0xd711d8) => {
        const _0x37bc0d = _0xc9fae1;
        if (_0xd711d8[_0x37bc0d(0x265)] === _0x37bc0d(0x24e))
            _0x2c80ec += createRow(
                (format = _0x37bc0d(0x219)),
                (category = _0x108391[_0x37bc0d(0x212)]["name"]),
                (parenthetical = _0xd711d8[_0x37bc0d(0x263)]),
                (your_level = _0x108391["caMgRatio"][_0x37bc0d(0x1bc)]),
                (ideal_level_min = _0x108391[_0x37bc0d(0x212)][_0x37bc0d(0x227)]),
                (ideal_level_max = _0x108391["caMgRatio"][_0x37bc0d(0x244)]),
                (deficient = ""),
                (excessive = ""),
                (metric = _0xd711d8[_0x37bc0d(0x25e)]),
                (row_idx = -0x270f),
                (n_rows = -0x270f),
                (table_category = "Available_Nutrients"),
                (tec_value = _0x108391[_0x37bc0d(0x1fd)])
            );
        else {
            const _0x2e72ea = _0x108391[_0x37bc0d(0x198)][_0x37bc0d(0x1bd)]["find"]((_0x50e249) => {
                const _0x273ec8 = _0x37bc0d;
                if (_0xd711d8[_0x273ec8(0x265)] === "Boron") return _0x50e249[0x0] === _0x273ec8(0x24d);
                if (_0xd711d8[_0x273ec8(0x265)][_0x273ec8(0x19d)]("DTPA")) return _0x50e249[0x0] === _0xd711d8[_0x273ec8(0x265)] || _0x50e249[0x0][_0x273ec8(0x19d)](_0xd711d8[_0x273ec8(0x265)]);
                const _0x38845b = [_0xd711d8[_0x273ec8(0x265)], _0xd711d8[_0x273ec8(0x265)]["replace"](_0x273ec8(0x1a6), "\x20("), _0xd711d8[_0x273ec8(0x265)][_0x273ec8(0x220)](_0x273ec8(0x1a6), "(")];
                return _0x38845b[_0x273ec8(0x19d)](_0x50e249[0x0]);
            });
            if (_0x2e72ea) {
                if (_0x2e72ea[0x0] == "Molybdenum") _0xd711d8[_0x37bc0d(0x265)] = _0x37bc0d(0x215);
                else _0x2e72ea[0x0] == _0x37bc0d(0x293) && (_0xd711d8[_0x37bc0d(0x265)] = _0x37bc0d(0x1c9));
                _0x2c80ec += createRow(
                    (format = _0x37bc0d(0x219)),
                    (category = _0xd711d8["name"]),
                    (parenthetical = _0xd711d8["parenthetical"]),
                    (your_level = _0x2e72ea[0x2]),
                    (ideal_level_min = _0x2e72ea[0x3]),
                    (ideal_level_max = _0x2e72ea[0x4]),
                    (deficient = _0x2e72ea[0x5]),
                    (excessive = _0x2e72ea[0x6]),
                    (metric = _0xd711d8[_0x37bc0d(0x25e)]),
                    (row_idx = -0x270f),
                    (n_rows = -0x270f),
                    (table_category = _0x37bc0d(0x1ef)),
                    (tec_value = _0x108391[_0x37bc0d(0x1fd)])
                );
            }
        }
    });
    const _0x485a85 = [
        { name: "Calcium", parenthetical: "", metric: "%" },
        { name: "Magnesium", parenthetical: "", metric: "%" },
        { name: _0xc9fae1(0x1bf), parenthetical: "", metric: "%" },
        { name: _0xc9fae1(0x205), parenthetical: "", metric: "%" },
        { name: _0xc9fae1(0x224), parenthetical: "", metric: "%" },
        { name: _0xc9fae1(0x239), parenthetical: "", metric: "%" },
        { name: _0xc9fae1(0x1cf), parenthetical: "", metric: "%" },
    ];
    if (_0x108391[_0xc9fae1(0x2aa)](_0xc9fae1(0x198)) && _0x108391[_0xc9fae1(0x198)]["hasOwnProperty"](_0xc9fae1(0x24c))) {
        const _0x48c6f2 = _0x485a85[_0xc9fae1(0x2a1)]((_0x48f741) => _0x108391[_0xc9fae1(0x260)][_0xc9fae1(0x2a1)]((_0x679027) => _0x679027[0x0] === _0x48f741[_0xc9fae1(0x265)]));
        if (_0x485a85) {
            let _0x3441d = _0xc9fae1(0x232);
            (_0x2c80ec += _0x3441d),
                _0x485a85[_0xc9fae1(0x2a7)]((_0x39585c) => {
                    const _0x16a79a = _0xc9fae1,
                        _0x58c90a = _0x108391[_0x16a79a(0x198)][_0x16a79a(0x24c)][_0x16a79a(0x20b)]((_0x34546f) => _0x34546f[0x0] === _0x39585c[_0x16a79a(0x265)]);
                    if (_0x58c90a) {
                        let _0x2a1c53 = createRow(
                            (format = _0x16a79a(0x219)),
                            (category = _0x58c90a[0x0]),
                            (parenthetical = _0x39585c[_0x16a79a(0x263)]),
                            (your_level = _0x58c90a[0x2]),
                            (ideal_level_min = _0x58c90a[0x3]),
                            (ideal_level_max = _0x58c90a[0x4]),
                            (deficient = _0x58c90a[0x5]),
                            (excessive = _0x58c90a[0x6]),
                            (metric = _0x39585c[_0x16a79a(0x25e)]),
                            (row_idx = -0x270f),
                            (n_rows = -0x270f),
                            (table_category = "Base_Saturation"),
                            (tec_value = _0x108391[_0x16a79a(0x1fd)])
                        );
                        _0x2c80ec += _0x2a1c53;
                    }
                });
        }
    }
    let _0x1e944f = "";
    const _0x475418 = [
        { name: _0xc9fae1(0x194), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1e6), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x23c), parenthetical: "", metric: _0xc9fae1(0x275) },
        { name: _0xc9fae1(0x1bf), parenthetical: "", metric: "ppm" },
    ];
    if (_0x108391[_0xc9fae1(0x2aa)](_0xc9fae1(0x260)) && _0x108391["lamotte"]["length"] > 0x0) {
        const _0x13df03 = _0x475418[_0xc9fae1(0x2a1)]((_0x36f1d4) => _0x108391[_0xc9fae1(0x260)][_0xc9fae1(0x2a1)]((_0x3d0058) => _0x3d0058[0x0] === _0x36f1d4[_0xc9fae1(0x265)]));
        if (_0x13df03) {
            let _0x381a03 = _0xc9fae1(0x29d);
            (_0x1e944f += _0x381a03),
                _0x475418[_0xc9fae1(0x2a7)]((_0x5c9064) => {
                    const _0x4fd303 = _0xc9fae1,
                        _0x4a8b67 = _0x108391["lamotte"][_0x4fd303(0x20b)]((_0x1a8121) => _0x1a8121[0x0] === _0x5c9064[_0x4fd303(0x265)]);
                    if (_0x4a8b67) {
                        let _0x1c1941 = createRow(
                            (format = _0x4fd303(0x219)),
                            (category = _0x5c9064[_0x4fd303(0x265)]),
                            (parenthetical = _0x5c9064[_0x4fd303(0x263)]),
                            (your_level = _0x4a8b67[0x2]),
                            (ideal_level_min = _0x4a8b67[0x3]),
                            (ideal_level_max = _0x4a8b67[0x4]),
                            (deficient = _0x4a8b67[0x5]),
                            (excessive = _0x4a8b67[0x6]),
                            (metric = _0x5c9064[_0x4fd303(0x25e)]),
                            (row_idx = -0x270f),
                            (n_rows = -0x270f),
                            (table_category = _0x4fd303(0x208)),
                            (tec_value = _0x108391["tec"])
                        );
                        _0x1e944f += _0x1c1941;
                    }
                });
            let _0x576825 = _0xc9fae1(0x1a2);
            _0x1e944f += _0x576825;
        }
    }
    (_0x3701ba += _0x2c80ec),
        (_0x3701ba += _0x1e944f),
        (_0x3701ba += _0xc9fae1(0x272)),
        (_0x1e944f = "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-bordered\x20mb-0\x22\x20id=\x22table-component\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" + _0x1e944f + _0xc9fae1(0x262));
    let _0x58825c = "";
    Array[_0xc9fae1(0x2a2)](_0x108391[_0xc9fae1(0x254)]) &&
        _0x108391[_0xc9fae1(0x254)][_0xc9fae1(0x23a)] > 0x0 &&
        ((_0x58825c = _0xc9fae1(0x225)),
        _0x108391[_0xc9fae1(0x254)]["forEach"]((_0x234dba) => {
            const _0x3fea6d = _0xc9fae1;
            let _0x26d885 = createRow(
                (format = "rowFormat3Col1Empty4th"),
                (category = _0x234dba["name"]),
                (parenthetical = ""),
                (your_level = { value: _0x234dba[_0x3fea6d(0x1bc)], display_value: _0x234dba[_0x3fea6d(0x28c)], has_less_than: _0x234dba["has_less_than"] }),
                (ideal_level_min = _0x234dba[_0x3fea6d(0x227)]),
                (ideal_level_max = _0x234dba["upper"]),
                (deficient = ""),
                (excessive = ""),
                (metric = _0x3fea6d(0x275)),
                (row_idx = -0x1),
                (n_rows = _0x108391[_0x3fea6d(0x254)][_0x3fea6d(0x23a)]),
                (table_category = _0x3fea6d(0x1d1)),
                (tec_value = _0x108391["tec"])
            );
            _0x58825c += _0x26d885;
        }),
        (_0x58825c += _0xc9fae1(0x29b)),
        (_0x58825c += _0xc9fae1(0x24b)));
    let _0x42e9f1 = "";
    return (
        document["getElementById"](_0xc9fae1(0x213))[_0xc9fae1(0x1bc)] == 0x3 &&
            (!Array[_0xc9fae1(0x2a2)](_0x108391[_0xc9fae1(0x254)]) || _0x108391[_0xc9fae1(0x254)]["length"] === 0x0) &&
            Array[_0xc9fae1(0x2a2)](_0x108391[_0xc9fae1(0x260)]) &&
            _0x108391[_0xc9fae1(0x260)]["length"] > 0x0 &&
            ((_0x42e9f1 =
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-bordered\x20mb-0\x22\x20id=\x22table-component\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22\x20class=\x22text-center\x22>Your\x20Albrecht\x20(CEC)\x20Nutrient\x20Ratios:</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22\x20class=\x22text-center\x22>NUTRIENT\x20STATUS</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Nutrient\x20<br>\x20Ratios</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Your\x20<br>\x20Level</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable\x20<br>\x20Range</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Deficient</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Excessive\x20or\x20<br>\x20Toxic</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x226\x22\x20class=\x22text-center\x22>CEC\x20Ratios</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22element-table-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"),
            _0x108391[_0xc9fae1(0x260)]["forEach"]((_0x3c7953) => {
                const _0x259631 = _0xc9fae1;
                let _0xc05cc3 = createRow(
                    (format = _0x259631(0x219)),
                    (category = _0x3c7953[0x0]),
                    (parenthetical = _0x3c7953[0x1]),
                    (your_level = _0x3c7953[0x2]),
                    (ideal_level_min = ""),
                    (ideal_level_max = _0x3c7953[0x4]),
                    (deficient = _0x3c7953[0x5]),
                    (excessive = _0x3c7953[0x6]),
                    (metric = ":1"),
                    (row_idx = -0x1),
                    (n_rows = _0x108391[_0x259631(0x260)][_0x259631(0x23a)]),
                    (table_category = "Nutrient_Ratios"),
                    (tec_value = _0x108391[_0x259631(0x1fd)])
                );
                _0x42e9f1 += _0xc05cc3;
            }),
            (_0x42e9f1 += _0xc9fae1(0x25d))),
        { table: _0x3701ba, tae_table: _0x58825c, base_saturation_lower_table: _0x1e944f, nutrient_ratios_table: _0x42e9f1, dataset: _0x108391 }
    );
}
function handleChangeEvent() {
    const _0x3cd5a7 = _0x22e629;
    reset(),
        (document["getElementById"](_0x3cd5a7(0x22b))[_0x3cd5a7(0x216)][_0x3cd5a7(0x19e)] = _0x3cd5a7(0x1a8)),
        (document[_0x3cd5a7(0x1b8)]("recommendationFormResponse")["innerHTML"] = ""),
        (document["querySelector"](_0x3cd5a7(0x1eb))[_0x3cd5a7(0x1ee)] = ![]);
    const _0xc933a8 = document[_0x3cd5a7(0x1b8)]("sample-assignment-tbody");
    _0xc933a8 && ((_0xc933a8[_0x3cd5a7(0x1d2)] = ""), (document[_0x3cd5a7(0x1b8)]("sampleAssignmentContent")[_0x3cd5a7(0x216)]["display"] = _0x3cd5a7(0x1a8))),
        (document[_0x3cd5a7(0x1b8)](_0x3cd5a7(0x222))[_0x3cd5a7(0x1d2)] = _0x3cd5a7(0x267));
}
async function downloadAllPDF() {
    const _0x57f53e = _0x22e629;
    let _0x1b2aaa = _0x57f53e(0x27b),
        _0x51a1d5 = Object["entries"](report[_0x57f53e(0x228)])[_0x57f53e(0x2a6)](([_0x240bfb, _0x17b2c6]) => _0x17b2c6["hasOwnProperty"](_0x57f53e(0x1b7)));
    for (let _0xe13de3 = 0x0; _0xe13de3 < _0x51a1d5[_0x57f53e(0x23a)]; _0xe13de3++) {
        const [_0x1bf52b, _0x621e6a] = _0x51a1d5[_0xe13de3];
        let _0x3062e6 = new DOMParser(),
            _0x5a0397 = _0x3062e6[_0x57f53e(0x248)](_0x621e6a[_0x57f53e(0x1b7)], _0x57f53e(0x28d)),
            _0x17d6ed = _0x3062e6[_0x57f53e(0x248)](_0x621e6a[_0x57f53e(0x20d)], _0x57f53e(0x28d)),
            _0x3765c5 = _0x621e6a[_0x57f53e(0x1ab)] && _0x621e6a[_0x57f53e(0x1ab)][_0x57f53e(0x251)]() ? _0x3062e6[_0x57f53e(0x248)](_0x621e6a[_0x57f53e(0x1ab)], _0x57f53e(0x28d)) : null,
            _0x35f7e6 = _0x5a0397[_0x57f53e(0x297)]("table") || "<table></table>",
            _0x13ac2b = _0x3765c5 ? _0x3765c5[_0x57f53e(0x297)]("table") : document[_0x57f53e(0x27c)](_0x57f53e(0x1b7)),
            _0x3ff5e0 = _0x35f7e6["querySelectorAll"](_0x57f53e(0x1b4)),
            _0x32ed70 = _0x35f7e6[_0x57f53e(0x247)](_0x57f53e(0x25f)),
            _0x4ee9a2 = _0x3765c5 ? _0x13ac2b[_0x57f53e(0x247)]("#element-table-body\x20tr") : [],
            _0x385d14 = [];
        if (report[_0x57f53e(0x249)]) {
            let _0x20943d = new FormData();
            _0x20943d[_0x57f53e(0x1f8)](_0x57f53e(0x234), report[_0x57f53e(0x258)]);
            let _0x169182 = { deficient: [], optimal: [], excess: [] };
            _0x3ff5e0["forEach"]((_0x23fd29) => {
                const _0x1b6b52 = _0x57f53e;
                let _0x5edf07 = _0x23fd29[_0x1b6b52(0x297)](".bar");
                if (_0x5edf07) {
                    let _0x1967c1 = _0x5edf07[_0x1b6b52(0x216)][_0x1b6b52(0x19b)][_0x1b6b52(0x1a1)](),
                        _0x379d35 = _0x23fd29["querySelector"]("td"),
                        _0x2b47f8 = _0x379d35["textContent"][_0x1b6b52(0x251)]()[_0x1b6b52(0x1e0)]("\x20(")[0x0],
                        _0x983786 = _0x23fd29["id"][_0x1b6b52(0x220)]("_", "\x20");
                    if (_0x2b47f8 == _0x1b6b52(0x1c3)) _0x983786 = "Organic\x20Matter";
                    else _0x2b47f8 == "pH-level" && (_0x983786 = _0x1b6b52(0x1a0));
                    (_0x1967c1 === _0x1b6b52(0x1ac) || _0x5edf07[_0x1b6b52(0x1d2)] == "Extremely\x20Low") && _0x169182[_0x1b6b52(0x191)]["push"]({ category: _0x983786, value: _0x2b47f8 }),
                        _0x1967c1 == _0x1b6b52(0x1d4) && _0x169182["optimal"][_0x1b6b52(0x1dc)]({ category: _0x983786, value: _0x2b47f8 }),
                        _0x1967c1 === _0x1b6b52(0x196) && _0x169182[_0x1b6b52(0x211)][_0x1b6b52(0x1dc)]({ category: _0x983786, value: _0x2b47f8 });
                } else {
                    let _0x545a11 = _0x23fd29[_0x1b6b52(0x297)]("td"),
                        _0x549022 = _0x545a11[_0x1b6b52(0x1df)][_0x1b6b52(0x251)]()[_0x1b6b52(0x1e0)]("\x20(")[0x0];
                    if (_0x549022 == _0x1b6b52(0x289)) {
                        category = _0x1b6b52(0x289);
                        let _0x365be2 = _0x23fd29[_0x1b6b52(0x247)]("td")[0x1],
                            _0x26344f = extractAndJoinNumbers(_0x365be2[_0x1b6b52(0x1df)]["trim"]());
                        if (_0x26344f < 0x14) _0x169182[_0x1b6b52(0x191)]["push"]({ category: category, value: _0x549022 });
                        else {
                            if (_0x26344f >= 0x14 && _0x26344f <= 0x1e) _0x169182[_0x1b6b52(0x21b)][_0x1b6b52(0x1dc)]({ category: category, value: _0x549022 });
                            else _0x26344f > 0x1e && _0x169182[_0x1b6b52(0x211)][_0x1b6b52(0x1dc)]({ category: category, value: _0x549022 });
                        }
                    }
                }
            }),
                _0x32ed70["forEach"]((_0x467ef2) => {
                    const _0x5761c5 = _0x57f53e;
                    let _0x3c2d6a = _0x467ef2[_0x5761c5(0x297)](_0x5761c5(0x24a));
                    if (_0x3c2d6a) {
                        let _0xf9c8d8 = _0x3c2d6a[_0x5761c5(0x216)][_0x5761c5(0x19b)]["toLowerCase"](),
                            _0x53699f = _0x467ef2[_0x5761c5(0x297)]("td"),
                            _0x49b6e4 = _0x53699f[_0x5761c5(0x1df)][_0x5761c5(0x251)]()[_0x5761c5(0x1e0)]("\x20(")[0x0],
                            _0x200513 = _0x5761c5(0x273);
                        (_0xf9c8d8 === _0x5761c5(0x1ac) || _0x3c2d6a["innerHTML"] == "Extremely\x20Low") && _0x169182[_0x5761c5(0x191)][_0x5761c5(0x1dc)]({ category: _0x200513, value: _0x49b6e4 }),
                            _0xf9c8d8 == _0x5761c5(0x1d4) && _0x169182[_0x5761c5(0x21b)]["push"]({ category: _0x200513, value: _0x49b6e4 }),
                            _0xf9c8d8 === _0x5761c5(0x196) && _0x169182["excess"]["push"]({ category: _0x200513, value: _0x49b6e4 });
                    }
                }),
                _0x4ee9a2[_0x57f53e(0x2a7)]((_0x4ebcc1) => {
                    const _0x3cc33a = _0x57f53e;
                    let _0x1429f6 = _0x4ebcc1[_0x3cc33a(0x297)](_0x3cc33a(0x24a));
                    if (_0x1429f6) {
                        let _0x58e7f4 = _0x1429f6[_0x3cc33a(0x216)][_0x3cc33a(0x19b)][_0x3cc33a(0x1a1)](),
                            _0x19c4e0 = _0x4ebcc1[_0x3cc33a(0x297)]("td"),
                            _0xee19ad = _0x19c4e0["textContent"][_0x3cc33a(0x251)]()[_0x3cc33a(0x1e0)]("\x20(")[0x0],
                            _0x42fd0e = _0x3cc33a(0x1d1);
                        (_0x58e7f4 === _0x3cc33a(0x1ac) || _0x1429f6[_0x3cc33a(0x1d2)] == _0x3cc33a(0x204)) && _0x169182[_0x3cc33a(0x191)][_0x3cc33a(0x1dc)]({ category: _0x42fd0e, value: _0xee19ad }),
                            _0x58e7f4 == _0x3cc33a(0x1d4) && _0x169182[_0x3cc33a(0x21b)][_0x3cc33a(0x1dc)]({ category: _0x42fd0e, value: _0xee19ad }),
                            _0x58e7f4 === _0x3cc33a(0x196) && _0x169182[_0x3cc33a(0x211)][_0x3cc33a(0x1dc)]({ category: _0x42fd0e, value: _0xee19ad });
                    }
                }),
                _0x20943d[_0x57f53e(0x1f8)]("nutrient_deficient", JSON[_0x57f53e(0x245)](_0x169182[_0x57f53e(0x191)])),
                _0x20943d["append"](_0x57f53e(0x1b0), JSON["stringify"](_0x169182[_0x57f53e(0x211)])),
                _0x20943d[_0x57f53e(0x1f8)]("nutrient_optimal", JSON[_0x57f53e(0x245)](_0x169182[_0x57f53e(0x21b)]));
            const _0x10829e = await fetch(urls["generateRecommendations"], { method: _0x57f53e(0x290), body: _0x20943d }),
                _0x42c374 = await _0x10829e[_0x57f53e(0x201)]();
            (report[_0x57f53e(0x228)][_0x1bf52b]["recommendations"][_0x57f53e(0x1e4)] = _0x42c374?.[_0x57f53e(0x1de)] || ""),
                (report[_0x57f53e(0x228)][_0x1bf52b][_0x57f53e(0x190)][_0x57f53e(0x230)] = {
                    crop_group: report["soilCrop"],
                    nutrient_deficient: _0x169182[_0x57f53e(0x191)],
                    nutrient_excess: _0x169182[_0x57f53e(0x211)],
                    nutrient_optimal: _0x169182["optimal"],
                });
            const _0x2a2a7e = ["Organic\x20Matter", _0x57f53e(0x289), _0x57f53e(0x1a0), _0x57f53e(0x203), "Available\x20Nutrients", _0x57f53e(0x273), "TAE"],
                _0x51b47a = {};
            _0x2a2a7e[_0x57f53e(0x2a7)]((_0x4e3cae) => {
                const _0x123338 = _0x57f53e;
                report[_0x123338(0x228)][_0x1bf52b][_0x123338(0x190)][_0x123338(0x1e4)]["hasOwnProperty"](_0x4e3cae) && (_0x51b47a[_0x4e3cae] = report[_0x123338(0x228)][_0x1bf52b][_0x123338(0x190)][_0x123338(0x1e4)][_0x4e3cae]);
            }),
                Object[_0x57f53e(0x28b)](report["paddocks"][_0x1bf52b]["recommendations"][_0x57f53e(0x1e4)])[_0x57f53e(0x2a7)]((_0x4c839b) => {
                    const _0x26c6ee = _0x57f53e;
                    !_0x51b47a[_0x26c6ee(0x2aa)](_0x4c839b) && (_0x51b47a[_0x4c839b] = report["paddocks"][_0x1bf52b]["recommendations"][_0x26c6ee(0x1e4)][_0x4c839b]);
                }),
                (report[_0x57f53e(0x228)][_0x1bf52b][_0x57f53e(0x190)][_0x57f53e(0x1e4)] = _0x51b47a);
            let _0x1a81a6 = report["paddocks"][_0x1bf52b][_0x57f53e(0x190)]["explanation"],
                _0x5c1663 = "";
            _0x385d14 = [];
            let _0x527fce = 0x1;
            for (const [_0x2b5748, _0x50f180] of Object[_0x57f53e(0x1a5)](_0x1a81a6)) {
                (_0x5c1663 += "<p\x20class=\x22m-0\x22\x20style=\x22text-align:\x20justify;\x22>" + _0x527fce + _0x57f53e(0x1f4) + _0x2b5748 + _0x57f53e(0x266) + _0x50f180 + _0x57f53e(0x26d)),
                    _0x527fce++,
                    _0x527fce == 0x4 && (_0x385d14["push"](_0x5c1663), (_0x5c1663 = ""));
            }
            if (_0x527fce < 0x4) _0x385d14[_0x57f53e(0x1dc)](_0x5c1663);
            else _0x5c1663 && _0x527fce > 0x4 && _0x385d14["push"](_0x5c1663);
        }
        let _0x3e7b4e =
            _0x57f53e(0x256) +
            generateUserDetails(report, _0x1bf52b, (logo = !![])) +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22\x20id=\x22soilAnalysisContainer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x35f7e6[_0x57f53e(0x257)] +
            _0x57f53e(0x1ba) +
            (_0x621e6a?.[_0x57f53e(0x1ab)] || _0x621e6a?.[_0x57f53e(0x1da)] || (_0x621e6a?.["recommendations"]?.[_0x57f53e(0x1e4)] && report["include_nutrients_explanation"])
                ? _0x57f53e(0x1fc) + generateUserDetails(report, _0x1bf52b, (logo = !![])) + _0x57f53e(0x2a8)
                : "") +
            _0x57f53e(0x277) +
            (_0x621e6a?.[_0x57f53e(0x1ab)] ? _0x57f53e(0x1f2) + _0x621e6a[_0x57f53e(0x1ab)] + _0x57f53e(0x1ad) : "") +
            _0x57f53e(0x277) +
            (_0x621e6a?.["nutrient_ratios_table"] ? _0x57f53e(0x1f2) + _0x621e6a[_0x57f53e(0x1da)] + _0x57f53e(0x1ad) : "") +
            _0x57f53e(0x277) +
            (_0x621e6a?.[_0x57f53e(0x190)]?.[_0x57f53e(0x1e4)] && report["include_nutrients_explanation"]
                ? _0x57f53e(0x1e7) +
                  (_0x385d14[0x0] || "") +
                  _0x57f53e(0x21c) +
                  (_0x385d14[_0x57f53e(0x23a)] > 0x1 ? _0x57f53e(0x2a0) + generateUserDetails(report, _0x1bf52b, (logo = !![])) + _0x57f53e(0x1db) + (_0x385d14[0x1] || "") + _0x57f53e(0x28f) : "") +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
            _0x57f53e(0x25c);
        _0xe13de3 !== _0x51a1d5[_0x57f53e(0x23a)] - 0x1 && (_0x3e7b4e += _0x57f53e(0x1e3)), (_0x1b2aaa += _0x3e7b4e);
    }
    _0x1b2aaa += "</div>";
    const _0x875b95 = _0x57f53e(0x1a3) + report[_0x57f53e(0x296)] + _0x57f53e(0x274) + _0x1b2aaa + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20",
        _0x7377c7 = document[_0x57f53e(0x27c)](_0x57f53e(0x269));
    (_0x7377c7["style"][_0x57f53e(0x19e)] = _0x57f53e(0x1a8)), document["body"][_0x57f53e(0x1c2)](_0x7377c7);
    const _0x28e5e2 = _0x7377c7["contentDocument"] || _0x7377c7[_0x57f53e(0x252)][_0x57f53e(0x22a)];
    _0x28e5e2[_0x57f53e(0x18f)](),
        _0x28e5e2[_0x57f53e(0x26e)](_0x875b95),
        _0x28e5e2[_0x57f53e(0x1aa)](),
        (_0x7377c7[_0x57f53e(0x27f)] = () => {
            const _0x57f816 = _0x57f53e;
            _0x7377c7[_0x57f816(0x252)][_0x57f816(0x292)](),
                _0x7377c7[_0x57f816(0x252)][_0x57f816(0x217)](),
                setTimeout(() => {
                    const _0x18d836 = _0x57f816;
                    document[_0x18d836(0x286)]["removeChild"](_0x7377c7);
                }, 0x12c);
        }),
        console[_0x57f53e(0x221)](report);
}
function _0x3eb8(_0x3afe65, _0xe3d013) {
    const _0x4cf670 = _0x4cf6();
    return (
        (_0x3eb8 = function (_0x3eb8a7, _0x41524c) {
            _0x3eb8a7 = _0x3eb8a7 - 0x18d;
            let _0x5e0d0b = _0x4cf670[_0x3eb8a7];
            return _0x5e0d0b;
        }),
        _0x3eb8(_0x3afe65, _0xe3d013)
    );
}
function downloadPDF() {
    const _0x97e290 = _0x22e629;
    let _0xcbf70c = _0x97e290(0x233);
    const _0x58b2d9 = getSelectedPaddock(),
        _0x279be9 = Object[_0x97e290(0x1a5)](report["paddocks"])[_0x97e290(0x2a6)](([_0x2dbf69, _0x30f928]) => _0x30f928[_0x97e290(0x2aa)](_0x97e290(0x1b7)) && _0x2dbf69 == _0x58b2d9);
    let _0x52faa2 = report[_0x97e290(0x228)][_0x58b2d9][_0x97e290(0x190)]["explanation"],
        _0x33612f = "",
        _0x5f0d5d = [],
        _0x4fa0c9 = 0x1;
    for (const [_0x19dd3a, _0x5f42ea] of Object[_0x97e290(0x1a5)](_0x52faa2)) {
        (_0x33612f += _0x97e290(0x21d) + _0x4fa0c9 + _0x97e290(0x1f4) + _0x19dd3a + _0x97e290(0x266) + _0x5f42ea + _0x97e290(0x26d)), _0x4fa0c9++, _0x4fa0c9 == 0x4 && (_0x5f0d5d["push"](_0x33612f), (_0x33612f = ""));
    }
    if (_0x4fa0c9 < 0x4) _0x5f0d5d[_0x97e290(0x1dc)](_0x33612f);
    else _0x33612f && _0x4fa0c9 > 0x4 && _0x5f0d5d[_0x97e290(0x1dc)](_0x33612f);
    _0x279be9[_0x97e290(0x2a7)](([_0x39fba0, _0x14f2f9], _0x287221) => {
        const _0x5cb909 = _0x97e290;
        let _0x5770bb = new DOMParser(),
            _0x8fb668 = _0x5770bb[_0x5cb909(0x248)](_0x14f2f9["table"], _0x5cb909(0x28d)),
            _0x6848c3 = _0x5770bb[_0x5cb909(0x248)](_0x14f2f9[_0x5cb909(0x20d)], "text/html"),
            _0x3c5164 = _0x8fb668[_0x5cb909(0x297)]("table"),
            _0x42d324 =
                _0x5cb909(0x2a9) +
                generateUserDetails(report, _0x39fba0, (logo = !![])) +
                _0x5cb909(0x298) +
                _0x3c5164[_0x5cb909(0x257)] +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (_0x14f2f9?.[_0x5cb909(0x1ab)] || _0x14f2f9?.[_0x5cb909(0x1da)] || (_0x14f2f9?.[_0x5cb909(0x190)]?.[_0x5cb909(0x1e4)] && report[_0x5cb909(0x249)])
                    ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22page-break\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                      generateUserDetails(report, _0x39fba0, (logo = !![])) +
                      _0x5cb909(0x2a8)
                    : "") +
                _0x5cb909(0x277) +
                (_0x14f2f9?.[_0x5cb909(0x1ab)]
                    ? _0x5cb909(0x1f2) +
                      _0x14f2f9[_0x5cb909(0x1ab)] +
                      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                    : "") +
                _0x5cb909(0x277) +
                (_0x14f2f9?.[_0x5cb909(0x1da)]
                    ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22\x20id=\x22soilAnalysisContainer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                      _0x14f2f9[_0x5cb909(0x1da)] +
                      _0x5cb909(0x1ad)
                    : "") +
                _0x5cb909(0x277) +
                (_0x14f2f9?.[_0x5cb909(0x190)]?.[_0x5cb909(0x1e4)]
                    ? _0x5cb909(0x1dd) +
                      (!(_0x14f2f9?.[_0x5cb909(0x1ab)] || _0x14f2f9?.[_0x5cb909(0x1da)] || (_0x14f2f9?.["recommendations"]?.["explanation"] && report[_0x5cb909(0x249)]))
                          ? _0x5cb909(0x2a0) + generateUserDetails(report, _0x39fba0, (logo = !![])) + _0x5cb909(0x28a)
                          : "") +
                      "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-justify\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22fw-b\x22><b>Nutrient\x20Explanation:</b></h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                      _0x5f0d5d[0x0] +
                      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                      (_0x5f0d5d["length"] > 0x1 ? _0x5cb909(0x2a0) + generateUserDetails(report, _0x39fba0, (logo = !![])) + _0x5cb909(0x1db) + _0x5f0d5d[0x1] + _0x5cb909(0x28f) : "") +
                      _0x5cb909(0x277)
                    : "") +
                _0x5cb909(0x29e);
        _0xcbf70c += _0x42d324;
    }),
        (_0xcbf70c += _0x97e290(0x195));
    const _0x45c89e = _0x97e290(0x1a3) + report["title"] + _0x97e290(0x23f) + _0xcbf70c + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20",
        _0x265abb = document[_0x97e290(0x27c)]("div");
    (_0x265abb["innerHTML"] = _0x45c89e),
        html2pdf()
            [_0x97e290(0x26b)](_0x265abb)
            [_0x97e290(0x22c)]({ margin: 0xa, filename: _0x97e290(0x282), html2canvas: { scale: 0x2 }, jsPDF: { unit: "mm", format: "a4", orientation: _0x97e290(0x235) }, pagebreak: { mode: ["css", _0x97e290(0x1be)] } })
            [_0x97e290(0x1ed)]()
            [_0x97e290(0x246)](_0x97e290(0x21a))
            [_0x97e290(0x192)](function (_0x5006a2) {
                const _0x1047da = _0x97e290,
                    _0x49801d = _0x5006a2[_0x1047da(0x1f1)]("bloburl"),
                    _0x15d2d = window[_0x1047da(0x18f)](_0x49801d, _0x1047da(0x288));
                _0x15d2d ? _0x15d2d[_0x1047da(0x292)]() : alert("Please\x20allow\x20popups\x20for\x20this\x20site.");
            })
            [_0x97e290(0x1d6)]();
}
function getQueryParam(_0x57e097) {
    const _0x234bbe = _0x22e629,
        _0xfc0463 = new URLSearchParams(window[_0x234bbe(0x19a)][_0x234bbe(0x294)]);
    return _0xfc0463[_0x234bbe(0x246)](_0x57e097);
}
function setCookie(_0x46fdc2, _0x22353d, _0x538e2d) {
    const _0x4f72f1 = _0x22e629;
    var _0x164f2e = "";
    if (_0x538e2d) {
        var _0x1fabe5 = new Date();
        _0x1fabe5["setTime"](_0x1fabe5["getTime"]() + _0x538e2d * 0x18 * 0x3c * 0x3c * 0x3e8), (_0x164f2e = _0x4f72f1(0x295) + _0x1fabe5[_0x4f72f1(0x27d)]());
    }
    document[_0x4f72f1(0x1cc)] = _0x46fdc2 + "=" + (_0x22353d || "") + _0x164f2e + _0x4f72f1(0x193);
}
function getCookie(_0x5df831) {
    const _0x25a9a6 = _0x22e629;
    var _0x5488e9 = _0x5df831 + "=",
        _0x1c9582 = document[_0x25a9a6(0x1cc)][_0x25a9a6(0x1e0)](";");
    for (var _0x58c21e = 0x0; _0x58c21e < _0x1c9582[_0x25a9a6(0x23a)]; _0x58c21e++) {
        var _0x574f6e = _0x1c9582[_0x58c21e];
        while (_0x574f6e["charAt"](0x0) == "\x20") _0x574f6e = _0x574f6e[_0x25a9a6(0x250)](0x1, _0x574f6e[_0x25a9a6(0x23a)]);
        if (_0x574f6e[_0x25a9a6(0x20f)](_0x5488e9) == 0x0) return _0x574f6e[_0x25a9a6(0x250)](_0x5488e9["length"], _0x574f6e[_0x25a9a6(0x23a)]);
    }
    return null;
}
async function populateSamplePairingFarmsPaddocksTable(_0x14c37f) {
    const _0x3970e8 = _0x22e629;
    await fetch(urls[_0x3970e8(0x285)], { method: "POST", headers: { "Content-Type": _0x3970e8(0x1ff) }, body: JSON[_0x3970e8(0x245)]({ token: getCookie("api_bearer") || getQueryParam("token") }) })
        [_0x3970e8(0x192)]((_0x208d94) => _0x208d94[_0x3970e8(0x201)]())
        [_0x3970e8(0x192)]((_0x3a320b) => {
            const _0x3e0329 = _0x3970e8;
            if (_0x3a320b[_0x3e0329(0x1f6)] === _0x3e0329(0x231)) {
                report[_0x3e0329(0x281)] = _0x3a320b?.[_0x3e0329(0x23b)] || {};
                for (let _0x48d6a2 = 0x0; _0x48d6a2 < _0x3a320b[_0x3e0329(0x1c1)][_0x3e0329(0x23a)]; _0x48d6a2++) {
                    const _0x3339bb = _0x3a320b[_0x3e0329(0x1c1)][_0x48d6a2],
                        _0x2cddf1 = _0x3339bb["PaddockName"],
                        _0x51a1ec = _0x3339bb[_0x3e0329(0x270)],
                        _0x9dda3c = _0x3a320b[_0x3e0329(0x18d)][_0x3e0329(0x2a6)]((_0x48e6e1) => _0x48e6e1[_0x3e0329(0x270)] === _0x51a1ec)[0x0]["FarmName"];
                    !farmsManagementData[_0x9dda3c] && (farmsManagementData[_0x9dda3c] = []), farmsManagementData[_0x9dda3c][_0x3e0329(0x1dc)](_0x2cddf1);
                }
            } else console[_0x3e0329(0x287)](_0x3e0329(0x1e8), _0x3a320b);
        })
        [_0x3970e8(0x1bb)]((_0x25625c) => {
            const _0x1fbb0e = _0x3970e8;
            console[_0x1fbb0e(0x287)](_0x1fbb0e(0x1ce), _0x25625c);
        });
    const _0x1c3e05 = document[_0x3970e8(0x1b8)]("sample-assignment-tbody");
    _0x1c3e05 &&
        _0x14c37f[_0x3970e8(0x2a7)]((_0x427ad9, _0x10c886) => {
            const _0x4a5922 = _0x3970e8,
                _0x214a71 = document[_0x4a5922(0x27c)]("tr"),
                _0x176fe3 = _0x4a5922(0x209) + _0x10c886,
                _0x2a8334 = _0x4a5922(0x29c) + _0x10c886;
            (_0x214a71[_0x4a5922(0x1d2)] =
                _0x4a5922(0x200) +
                _0x427ad9 +
                "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x22\x20id=\x22" +
                _0x176fe3 +
                _0x4a5922(0x23e) +
                _0x10c886 +
                _0x4a5922(0x27a) +
                Object[_0x4a5922(0x28b)](farmsManagementData)
                    ["map"]((_0x2ee4ea) => _0x4a5922(0x20e) + _0x2ee4ea + "\x22>" + _0x2ee4ea + _0x4a5922(0x229))
                    [_0x4a5922(0x1d3)]("") +
                _0x4a5922(0x202) +
                _0x2a8334 +
                _0x4a5922(0x261)),
                document[_0x4a5922(0x1b8)](_0x4a5922(0x1e1))["appendChild"](_0x214a71),
                report["sample_paddock_farm_assignments"][_0x4a5922(0x1dc)]({ sample: _0x427ad9, farm: null, paddock: null });
        }),
        (document[_0x3970e8(0x1b8)]("sampleAssignmentContent")[_0x3970e8(0x216)][_0x3970e8(0x19e)] = _0x3970e8(0x1a4));
}
function updateSamplePairingFarmsPaddocksTable(_0x38c8b6) {
    const _0x37a974 = _0x22e629,
        _0x4c44b7 = document[_0x37a974(0x1b8)](_0x37a974(0x209) + _0x38c8b6),
        _0x36a447 = document[_0x37a974(0x1b8)](_0x37a974(0x29c) + _0x38c8b6),
        _0x122539 = _0x4c44b7["value"],
        _0x4540bc = report[_0x37a974(0x284)][_0x38c8b6][_0x37a974(0x26f)];
    _0x4540bc && selectedMatchingManagementPaddocks[_0x37a974(0x240)](_0x4540bc);
    (report[_0x37a974(0x284)][_0x38c8b6][_0x37a974(0x226)] = _0x122539), (report[_0x37a974(0x284)][_0x38c8b6][_0x37a974(0x26f)] = null), (_0x36a447["innerHTML"] = "<option\x20selected\x20disabled>Select\x20Paddock</option>");
    const _0x4895e5 = farmsManagementData[_0x122539] || [];
    _0x4895e5[_0x37a974(0x2a7)]((_0x26da00) => {
        const _0x1e2b8a = _0x37a974;
        !selectedMatchingManagementPaddocks["has"](_0x26da00) && (_0x36a447[_0x1e2b8a(0x1d2)] += _0x1e2b8a(0x20e) + _0x26da00 + "\x22>" + _0x26da00 + _0x1e2b8a(0x229));
    }),
        (_0x36a447[_0x37a974(0x26c)] = function () {
            const _0x576d41 = _0x37a974,
                _0x39b34f = _0x36a447[_0x576d41(0x1bc)];
            _0x4540bc && selectedMatchingManagementPaddocks["delete"](_0x4540bc),
                (report[_0x576d41(0x284)][_0x38c8b6][_0x576d41(0x26f)] = _0x39b34f),
                selectedMatchingManagementPaddocks[_0x576d41(0x1b1)](_0x39b34f),
                refreshAllPaddockDropdowns();
        });
}
function _0x4cf6() {
    const _0x56f4d9 = [
        ";\x20path=/",
        "Calcium",
        "\x0a\x20\x20\x20\x20</div>",
        "rgb(0,\x20255,\x20255)",
        "DTPA",
        "albrecht",
        "excessive",
        "location",
        "background",
        "2855825oUUueP",
        "includes",
        "display",
        "Colour",
        "Soil\x20pH",
        "toLowerCase",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x221\x22\x20colspan=\x226\x22\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>\x20Explanatory\x20Notes</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-light\x22>The\x20La\x20Motte\x20test\x20gives\x20an\x20indication\x20of\x20the\x20amount\x20of\x20plant\x20available\x20nutrients\x20at\x20the\x20time\x20of\x20sampling.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<html\x20lang=\x22en\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>",
        "block",
        "entries",
        "\x20-\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-bottom:\x202px\x20solid\x20#000;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-bottom:\x202px\x20solid\x20#000;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-bottom:\x202px\x20solid\x20#000;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "none",
        "min",
        "close",
        "tae_table",
        "red",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "Copper",
        "slice",
        "nutrient_excess",
        "add",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20id=\x22",
        "\x20*\x20104%);\x22></span>",
        "#element-table-body\x20tr",
        "upper",
        "<option\x20selected\x20disabled>Select\x20Paddock</option>",
        "table",
        "getElementById",
        "isNaN",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "catch",
        "value",
        "has_comparison",
        "legacy",
        "Potassium",
        "Sulfur",
        "data1",
        "appendChild",
        "Organic\x20Matter",
        "Silicon",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22><span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20padding-right:\x2010px;\x20vertical-align:\x20middle;\x20\x20width:\x20100%\x22><span\x20style=\x22width:\x2070%;\x20text-align:\x20right;\x22>",
        "userData__address",
        "5518014MUYwnK",
        "Cobalt-\x20M3",
        "match",
        "Phosphorus\x20-\x20acid\x20extractable",
        "cookie",
        "Soil\x20Therapy\x20Report",
        "Error:",
        "Other\x20Bases",
        "option",
        "TAE",
        "innerHTML",
        "join",
        "rgb(51,\x20153,\x20102)",
        "Aluminium",
        "save",
        "Phosphorus\x20-\x20Colwell",
        "paddockDataSelect",
        "Base_Saturation",
        "nutrient_ratios_table",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-justify\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "push",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "combined_nutrients_explanation",
        "textContent",
        "split",
        "sample-assignment-tbody",
        "Manganese",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22page-break\x20m-0\x20p-0\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "explanation",
        "CaCl2",
        "Magnesium",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-justify\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22fw-b\x22><b>Nutrient\x20Explanation:</b></h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "Error\x20fetching\x20data:",
        "KCl",
        "1:5\x20water",
        ".switch\x20input[type=\x22checkbox\x22]",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-bottom-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22>CEC</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22><span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20padding-right:\x2010px;\x20vertical-align:\x20middle;\x20\x20width:\x20100%\x22><span\x20style=\x22width:\x2070%;\x20text-align:\x20right;\x22>",
        "toPdf",
        "checked",
        "Available_Nutrients",
        "has_less_than",
        "output",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22\x20id=\x22soilAnalysisContainer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "full_name",
        ".\x20<b>",
        "<span\x20class=\x22bar\x20",
        "status",
        "Ammonium-N",
        "append",
        "toFixed",
        ";\x20width:calc(",
        "Nitrate-N",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22page-break\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "tec",
        "sqrt",
        "application/json",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22vertical-align:\x20middle;\x20text-align:\x20center;\x22>",
        "json",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x22\x20id=\x22",
        "Base\x20Saturation",
        "Extremely\x20Low",
        "Sodium",
        "#339966",
        "</span>\x20<span\x20style=\x22width:\x2023%;\x22>",
        "Lamotte_Reams",
        "farm-",
        "Chloride",
        "find",
        "7688424zjgNRk",
        "base_saturation_lower_table",
        "<option\x20value=\x22",
        "indexOf",
        "Hot\x20CaCl2",
        "excess",
        "caMgRatio",
        "soilLabType",
        "\x0a\x20\x20\x20\x20<table\x20class=\x22table\x20table-bordered\x20mb-0\x22\x20id=\x22table-component\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-header\x20table-header-colored\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>ALBRECHT\x20<br>\x20Category</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Your\x20<br>\x20Level</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable\x20<br>\x20Range</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Deficient</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Excessive\x20or\x20<br>\x20Toxic</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22element-table-body\x22>\x0a\x20\x20\x20\x20",
        "Molybdenum-\x20M3",
        "style",
        "print",
        "Iron",
        "rowFormat3Col1Empty4th",
        "pdf",
        "optimal",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "<p\x20class=\x22m-0\x22\x20style=\x22text-align:\x20justify;\x22>",
        "Mehlich\x20III",
        "#00ffff",
        "replace",
        "log",
        "pdf-viewer",
        "object",
        "Aluminum",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-bordered\x20mb-0\x22\x20id=\x22table-component\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>T.A.E.\x20<br>\x20Category</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Your\x20<br>\x20Level</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable\x20<br>\x20Range</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Deficient</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Acceptable</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x221\x22\x20class=\x22text-center\x22>Excessive\x20or\x20<br>\x20Toxic</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22element-table-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "farm",
        "lower",
        "paddocks",
        "</option>",
        "document",
        "pdf-decription-dashboard",
        "set",
        "</span></span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "cec",
        "213538WRwuKJ",
        "form_data",
        "success",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-bottom-0\x20base-saturations-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-center\x20fw-bold\x20border-bottom-0\x22\x20colspan=\x223\x22\x20rowspan=\x221\x22>Base\x20Saturation</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-top-0\x20base-saturations-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-center\x20border-top-0\x22\x20colspan=\x223\x22\x20rowspan=\x221\x22>(Levels\x20are\x20not\x20relevant\x20in\x20soils\x20with\x20a\x20TEC\x20below\x205)</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x221\x22\x20rowspan=\x221\x22\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20<div\x20class=\x22pdf-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "crop_group",
        "portrait",
        "</span>\x20<span\x20style=\x22width:\x2023%;\x22></span></span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22border:0.001px\x20solid\x20transparent;\x20border-right:\x202px\x20solid\x20#000\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-bottom-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22>TEC</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22><span\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20flex-end;\x20gap:\x2010px;\x20padding-right:\x2010px;\x20vertical-align:\x20middle;\x20\x20width:\x20100%\x22><span\x20style=\x22width:\x2070%;\x20text-align:\x20right;\x22>",
        "final_values",
        "has",
        "Hydrogen",
        "length",
        "user",
        "Phosphorus",
        "role",
        "\x22\x20onchange=\x22updateSamplePairingFarmsPaddocksTable(",
        "</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20id=\x22bootstapCSS\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22{%\x20static\x20\x27css/table.css\x27\x20%}\x22\x20id=\x22tableCSS\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<body\x20class=\x22pdf-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x201000px\x20gray\x20!important;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.page-break{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-before:\x20always;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20border-collapse:\x20collapse\x20!important;\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20separate\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-spacing:\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tbody\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr,\x20table\x20td,\x20table\x20th,\x20table\x20tbody\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none\x20!important;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x202px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:first-child,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(2),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(3),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20boder-left:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tbody\x20td:nth-child(1),\x20tbody\x20td:nth-child(2),\x20tbody\x20td:nth-child(3)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tbody\x20td:nth-child(4),\x20tbody\x20td:nth-child(5),\x20tbody\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(1){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(2),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(3),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(4){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#userData__address_span{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20pre-wrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20max-content\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Arial\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20normal\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20input,\x20textarea,\x20#userData__address_span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20textarea#userData__address\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper\x20.field-name{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.user-details-header{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2060%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-bordered\x20>\x20tbody\x20>\x20tr\x20>\x20td,\x20.table-bordered\x20>\x20thead\x20>\x20tr\x20>\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px\x202px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-bordered\x20>\x20thead\x20>\x20tr\x20>\x20th,\x20.table-bordered\x20>\x20tbody,\x20.table-bordered\x20>\x20tfoot\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#000\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20104%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "delete",
        "mS/cm",
        "</span></span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22fw-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22td-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "mg/kg",
        "ideal",
        "stringify",
        "get",
        "querySelectorAll",
        "parseFromString",
        "include_nutrients_explanation",
        ".bar",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "base_saturation",
        "Boron",
        "Ca/Mg\x20Ratio",
        "pH-level",
        "substring",
        "trim",
        "contentWindow",
        "4509408giEJMC",
        "tae_data_selected",
        "string",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22m-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "outerHTML",
        "soilCrop",
        "userData__address_span",
        "partial-deficient",
        "startsWith",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20<div\x20class=\x22page-break\x20m-0\x20p-0\x22></div>\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x221\x22\x20colspan=\x226\x22\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>\x20Explanatory\x20Notes</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-light\x22>Nutrient\x20ratios\x20provide\x20insights\x20into\x20the\x20balance\x20between\x20different\x20nutrients\x20in\x20the\x20soil.</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "metric",
        "#lamotte-table-body\x20tr",
        "lamotte",
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20selected\x20disabled>Select\x20Paddock</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "parenthetical",
        "toString",
        "name",
        ":</b>\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22fw-bold\x22>This\x20section\x20will\x20display\x20the\x20tables\x20generated\x20for\x20all\x20of\x20the\x20paddocks\x20of\x20the\x20uploaded\x20files.\x20The\x20tables\x20displayed\x20here\x20will\x20automatically\x20be\x20re-formatted\x20to\x20match\x20the\x20PDF\x20template\x20when\x20exporting.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22fw-bold\x22>To\x20start,\x20please\x20upload\x20your\x20files\x20on\x20the\x20left\x20panel,\x20and\x20then\x20select\x20which\x20paddock\x20to\x20export.</p>\x0a\x20\x20\x20\x20",
        ")</span>",
        "iframe",
        "Conductivity",
        "from",
        "onchange",
        "<br></p>",
        "write",
        "paddock",
        "Farm_ID",
        "20094afjPqv",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "Lamotte\x20Reams",
        "</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20id=\x22bootstapCSS\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22{%\x20static\x20\x27css/table.css\x27\x20%}\x22\x20id=\x22tableCSS\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<body\x20class=\x22pdf-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x201000px\x20gray\x20!important;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#c0c0c0\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20print-color-adjust:\x20exact;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.page-break{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-before:\x20always;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20border-collapse:\x20collapse\x20!important;\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20separate\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-spacing:\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tbody\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr,\x20table\x20td,\x20table\x20th,\x20table\x20tbody\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none\x20!important;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x202px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:first-child,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(2),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(3),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20boder-left:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-header\x20th:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tbody\x20td:nth-child(1),\x20tbody\x20td:nth-child(2),\x20tbody\x20td:nth-child(3)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tbody\x20td:nth-child(4),\x20tbody\x20td:nth-child(5),\x20tbody\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:first-child\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(4),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(5),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20table\x20tr:last-child\x20td:nth-child(6)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(1){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(2),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(3),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tr.base-saturations-header\x20td:nth-child(4){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-right:\x201px\x20solid\x20#1b1c1d\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#userData__address_span{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20pre-wrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20max-content\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Arial\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20normal\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20input,\x20textarea,\x20#userData__address_span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20textarea#userData__address\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper\x20.field-name{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.user-details-header{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2060%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.document-header-details\x20.field-wrapper{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2090%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-bordered\x20>\x20tbody\x20>\x20tr\x20>\x20td,\x20.table-bordered\x20>\x20thead\x20>\x20tr\x20>\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px\x202px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.table-bordered\x20>\x20thead\x20>\x20tr\x20>\x20th,\x20.table-bordered\x20>\x20tbody,\x20.table-bordered\x20>\x20tfoot\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#000\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20104%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "ppm",
        "Unsupported\x20element",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "identification",
        "round",
        ")\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20selected\x20disabled>Select\x20Farm</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "<div\x20class=\x22pdf-container\x22>",
        "createElement",
        "toUTCString",
        "selected",
        "onload",
        "rowFormat2Col1Empty4th",
        "authenticated_user",
        "Soil_Analysis_Report.pdf",
        "acceptable",
        "sample_paddock_farm_assignments",
        "listPaddocks",
        "body",
        "error",
        "_blank",
        "CEC",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "keys",
        "display_value",
        "text/html",
        "Phosphorus\x20Buffer\x20Index",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "POST",
        "2789930ETFWKQ",
        "focus",
        "Cobalt",
        "search",
        ";\x20expires=",
        "title",
        "querySelector",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22\x20id=\x22soilAnalysisContainer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "max",
        "ideal_ratio_levels",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x221\x22\x20colspan=\x226\x22\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>\x20Explanatory\x20Notes</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-light\x22>T.A.E.\x20(Total\x20Acid\x20Extractable)\x20*Ideal\x20T.A.E.\x20levels\x20provided\x20by\x20Environmental\x20Analysis\x20Laboratory</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "paddock-",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-header\x22\x20id=\x22lamotte-table-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20rowspan=\x222\x22>Lamotte/Reams\x20<br>\x20CATEGORY</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20rowspan=\x222\x22>Your\x20<br>\x20Level</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20rowspan=\x222\x22>Ideal\x20<br>\x20Level</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>Nutrient\x20Status</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Low</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Medium</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22lamotte-table-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x22\x20style=\x22background:\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22page-break\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "some",
        "isArray",
        "Zinc",
        "Selenium-\x20M3",
        "214ALYBue",
        "filter",
        "forEach",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22m-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "hasOwnProperty",
        "Calc",
        "data",
        "partial-excessive",
        "open",
        "recommendations",
        "deficient",
        "then",
    ];
    _0x4cf6 = function () {
        return _0x56f4d9;
    };
    return _0x4cf6();
}
function refreshAllPaddockDropdowns() {
    const _0x317313 = _0x22e629;
    report[_0x317313(0x284)][_0x317313(0x2a7)]((_0x1df846, _0x1fbd51) => {
        const _0x21a87d = _0x317313,
            _0x218bcd = _0x1df846[_0x21a87d(0x226)],
            _0x2c14bb = _0x1df846[_0x21a87d(0x26f)],
            _0x5c4a4f = document[_0x21a87d(0x1b8)](_0x21a87d(0x29c) + _0x1fbd51);
        if (!_0x218bcd) return;
        (_0x5c4a4f["innerHTML"] = _0x21a87d(0x1b6)),
            farmsManagementData[_0x218bcd]["forEach"]((_0x3adfca) => {
                const _0x588093 = _0x21a87d;
                (!selectedMatchingManagementPaddocks[_0x588093(0x238)](_0x3adfca) || _0x3adfca === _0x2c14bb) &&
                    (_0x5c4a4f[_0x588093(0x1d2)] += _0x588093(0x20e) + _0x3adfca + "\x22\x20" + (_0x3adfca === _0x2c14bb ? _0x588093(0x27e) : "") + ">" + _0x3adfca + "</option>");
            });
    });
}
function saveAnalysis() {
    const _0x3d180f = _0x22e629;
    showLoader();
    let _0x30fd61 = { report: report, role: getQueryParam(_0x3d180f(0x23d)) };
    fetch(urls["saveAnalysis"], { method: _0x3d180f(0x290), headers: { "Content-Type": _0x3d180f(0x1ff) }, body: JSON["stringify"](_0x30fd61) })
        [_0x3d180f(0x192)]((_0x6aae7b) => _0x6aae7b[_0x3d180f(0x201)]())
        [_0x3d180f(0x192)]((_0x3c5fda) => {
            handleMessageCard(_0x3c5fda), hideLoader();
            if (_0x3c5fda["error"]) return;
        })
        ["catch"]((_0x25cedb) => {
            const _0x565b24 = _0x3d180f;
            let _0x1853c5 = { error: "Error\x20saving\x20analysis.\x20Please\x20try\x20again\x20later." };
            handleMessageCard(_0x1853c5), hideLoader(), console["error"](_0x565b24(0x1ce), _0x25cedb);
        });
}



function removeDuplicateRanges(cell, keepDisplaySpan) {
    // Remove all text nodes or elements that look like a range, except .bar, its descendants, and the keepDisplaySpan
    let walker = document.createTreeWalker(cell, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
    let nodesToRemove = [];
    while (walker.nextNode()) {
        let node = walker.currentNode;
        if (node === keepDisplaySpan) continue;
        // Don't remove if inside .bar (the colored bar) or is a .bar itself
        let insideBar = false;
        let parent = node.parentNode;
        while (parent && parent !== cell) {
            if (parent.classList && parent.classList.contains('bar')) {
                insideBar = true;
                break;
            }
            parent = parent.parentNode;
        }
        if (
            (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('bar')) ||
            insideBar
        ) {
            continue;
        }
        // Don't remove controls
        if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node.classList.contains('range-edit-btn') || node.classList.contains('range-input') || node.classList.contains('range-save-btn'))
        ) {
            continue;
        }
        // Remove any text node or element that looks like a range
        if (
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim().match(/\d+\s*-\s*\d+/)) ||
            (node.nodeType === Node.ELEMENT_NODE && node.textContent.trim().match(/\d+\s*-\s*\d+/))
        ) {
            // Only remove if not the keepDisplaySpan or inside it
            if (!keepDisplaySpan.contains(node)) {
                nodesToRemove.push(node);
            }
        }
    }
    nodesToRemove.forEach(node => {
        if (node.parentNode) node.parentNode.removeChild(node);
    });
}
let tableObserver = null;
function parseRange(text) {
    // Matches patterns like "6 - 8" or "4-10"
    let match = text.match(/([\d\.]+)\s*-\s*([\d\.]+)/);
    if (match) return { min: match[1], max: match[2] };
    return { min: '', max: '' };
}

// New function to update color bar based on values and range
function updateColorBar(row, barElem, min, max) {
    if (!barElem) return;

    // Get the actual value from the previous column (assuming it's the value column)
    let valueCell = row.querySelectorAll('td')[RANGE_COL_INDEX - 2]; // assuming value is in the previous column
    if (!valueCell) return;

    let value = parseFloat(valueCell.textContent);
    let minVal = parseFloat(min);
    let maxVal = parseFloat(max);

    if (isNaN(value) || isNaN(minVal) || isNaN(maxVal)) {
        // Hide bar if we don't have valid numbers
        barElem.style.display = 'none';
        barElem.className = "";
        return;
    }
    if ((value == 0) || (maxVal === 0)) {
        barElem.className = "";
        barElem.style.width = "0%";
        barElem.style.display = 'block';
        return;
    }
    // Set the bar color and width using the provided formula
    // For all cases, use background: #339966 and width: calc(VALUE * 104%);
    // VALUE should be proportional to the value's position in the range

    // Calculate the proportional value (between 0 and 1) of the value within the range
    let range = maxVal - minVal;
    let proportion = 0;
    if (range > 0) {
        proportion = (value - minVal) / range;
        // Clamp between 0 and 1
        proportion = Math.max(0, Math.min(1, proportion));
    }
    // The multiplier (1.669833...) in your example seems arbitrary, but let's use proportion for dynamic width
    // If you want a fixed multiplier, set it here, otherwise use proportion
    let widthMultiplier = proportion;

    // If you want to use a fixed multiplier (like 1.669833...), uncomment the next line:
    // let widthMultiplier = 1.6698330000000001;

    // Set the bar style
    barElem.className = 'bar';
    barElem.style.background = '#339966';
    barElem.style.left = '103%';
    barElem.style.width = `0%`;

    // Show the bar
    barElem.style.display = 'block';

    // Calculate position and color based on value relative to range
    if (value < minVal) {
        // Value is below minimum - show red bar at left
        barElem.className = 'bar deficient';
        barElem.style.background = '#ef4444'; // red
        barElem.style.left = '103%';
        barElem.style.width = '40%'; 


    } else if (value > maxVal) {
        // Value is above maximum - show blue bar at right
        barElem.className = 'bar excessive';
        barElem.style.background = '#2563eb'; // blue
        barElem.style.left = '103%';
        barElem.style.width = '220%'; // Small bar to indicate excess

        // Calculate width manually using calc function
        let range = maxVal - minVal;
        if (range > 0) {
            // For demonstration, let's make the width proportional to the value's position in the range, up to a max of 60%
            // (value - minVal) / range gives a 0-1 value, multiply by 60 for up to 60% width
            widthPercent = Math.max(10, Math.min(60, ((value - minVal) / range) * 60));
        }
        barElem.style.left = '103%';
        barElem.style.width = '250%';
    } else {
        // Value is within range - show green bar at appropriate position
        barElem.className = 'bar acceptable';
        barElem.style.background = '#22c55e'; // green

        // Calculate width manually using calc function
        let range = maxVal - minVal;
        let widthPercent = 10; // Default width for acceptable values
        if (range > 0) {
            // For demonstration, let's make the width proportional to the value's position in the range, up to a max of 60%
            // (value - minVal) / range gives a 0-1 value, multiply by 60 for up to 60% width
            widthPercent = Math.max(10, Math.min(60, ((value - minVal) / range) * 60));
        }
        barElem.style.left = '103%';
        barElem.style.width = `120%`;
    }
}
function patchTable(tableBodyId, rangeColIndex) {
    // Disconnect observer if it exists for this table
    if (window[`tableObserver_${tableBodyId}`]) window[`tableObserver_${tableBodyId}`].disconnect();

    const tableBody = document.getElementById(tableBodyId);
    if (!tableBody) return;

    tableBody.querySelectorAll('tr').forEach(function(row) {
        let tds = row.querySelectorAll('td');
        if (tds.length < rangeColIndex) return;
        let rangeCell = tds[rangeColIndex - 1];
        if (!rangeCell) return;

        // Ensure .td-bar flex container exists
        let barContainer = rangeCell.querySelector('.td-bar');
        if (barContainer) {
            Array.from(barContainer.querySelectorAll('.bar, .range-edit-btn, .range-save-btn, input[type="number"]')).forEach(e => e.remove());
        }

        if (!barContainer) {
            barContainer = document.createElement('span');
            barContainer.className = 'td-bar';
            barContainer.style.position = 'relative';
            barContainer.style.display = 'flex';
            barContainer.style.alignItems = 'center';

            // Move only the range text or .range-display into barContainer
            let rangeDisplay = rangeCell.querySelector('.range-display');
            if (rangeDisplay) {
                barContainer.appendChild(rangeDisplay);
            } else {
                let nodesToMove = [];
                for (let node of rangeCell.childNodes) {
                    if (
                        node.nodeType === Node.TEXT_NODE &&
                        node.textContent.trim() !== "" &&
                        !/^\d+(\.\d+)?$/.test(node.textContent.trim())
                    ) {
                        nodesToMove.push(node);
                    } else if (
                        node.nodeType === Node.ELEMENT_NODE &&
                        node.classList &&
                        node.classList.contains('range-display')
                    ) {
                        nodesToMove.push(node);
                    }
                }
                nodesToMove.forEach(n => barContainer.appendChild(n));
            }
            rangeCell.appendChild(barContainer);
        }

        // Find or create the range display span
        let displaySpan = barContainer.querySelector('.range-display');
        if (!displaySpan) {
            displaySpan = document.createElement('span');
            displaySpan.className = 'range-display';
            let cellText = barContainer.textContent.trim();
            let match = cellText.match(/([\d\.]+)\s*-\s*([\d\.]+)/);
            if (match) {
                displaySpan.textContent = `${match[1]} - ${match[2]}`;
            } else {
                displaySpan.textContent = '0 - 0';
            }
            barContainer.insertBefore(displaySpan, barContainer.firstChild);
        }
        if (typeof removeDuplicateRanges === "function") {
            removeDuplicateRanges(barContainer, displaySpan);
        }

        // Parse the range
        let min = 0, max = 0;
        if (typeof parseRange === "function") {
            let parsed = parseRange(displaySpan.textContent);
            min = parsed.min;
            max = parsed.max;
        } else {
            let match = displaySpan.textContent.match(/([\d\.]+)\s*-\s*([\d\.]+)/);
            min = match ? match[1] : 0;
            max = match ? match[2] : 0;
        }

        // Create the color bar
        let barElem = document.createElement('div');
        barElem.className = 'bar';
        barElem.style.position = 'absolute';
        barElem.style.height = '10px';
        barElem.style.top = '50%';
        barElem.style.transform = 'translateY(-50%)';
        barElem.style.zIndex = '0';
        barElem.style.borderRadius = '4px';
        barContainer.appendChild(barElem);

        // Update bar based on current values
        if (typeof updateColorBar === "function") {
            updateColorBar(row, barElem, min, max, rangeColIndex);
        } else {
            barElem.style.display = 'none';
        }

        // Create the edit button
        let editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'range-edit-btn';
        editBtn.title = 'Edit Range';
        editBtn.style = 'margin-left:4px;padding:0 4px;border:none;background:none;cursor:pointer;z-index:1;position:relative;';
        editBtn.innerHTML = '✏️';

        // Create input fields (hidden by default)
        let minInput = document.createElement('input');
        minInput.type = 'number';
        minInput.value = min;
        minInput.style = 'width:40px;margin-right:2px;display:none;z-index:1;position:relative;';
        let maxInput = document.createElement('input');
        maxInput.type = 'number';
        maxInput.value = max;
        maxInput.style = 'width:40px;display:none;z-index:1;position:relative;';
        let saveBtn = document.createElement('button');
        saveBtn.type = 'button';
        saveBtn.textContent = 'Save';
        saveBtn.className = 'range-save-btn';
        saveBtn.style = 'display:none;margin-left:4px;padding:0 4px;z-index:1;position:relative;';

        // Event handlers
        editBtn.onclick = function() {
            displaySpan.style.display = 'none';
            editBtn.style.display = 'none';
            minInput.style.display = '';
            maxInput.style.display = '';
            saveBtn.style.display = '';
        };
        saveBtn.onclick = function() {
            let newMin = minInput.value;
            let newMax = maxInput.value;
            displaySpan.textContent = `${newMin} - ${newMax}`;
            displaySpan.style.display = '';
            editBtn.style.display = '';
            minInput.style.display = 'none';
            maxInput.style.display = 'none';
            saveBtn.style.display = 'none';
            if (typeof removeDuplicateRanges === "function") {
                removeDuplicateRanges(barContainer, displaySpan);
            }
            if (typeof updateColorBar === "function") {
                updateColorBar(row, barElem, newMin, newMax, rangeColIndex);
            }
        };

        // Append controls in order
        barContainer.appendChild(editBtn);
        barContainer.appendChild(minInput);
        barContainer.appendChild(maxInput);
        barContainer.appendChild(saveBtn);
    });

    // Reconnect observer for this table
    if (window[`tableObserver_${tableBodyId}`]) {
        window[`tableObserver_${tableBodyId}`].observe(tableBody, { childList: true, subtree: true });
    }
}


const TABLE_BODY_ID = 'element-table-body';
const RANGE_COL_INDEX = 3;


function observeTable(tableBodyId, rangeColIndex) {
    const tableBody = document.getElementById(tableBodyId);
    if (!tableBody) {
        setTimeout(() => observeTable(tableBodyId, rangeColIndex), 500);
        return;
    }
    patchTable(tableBodyId, rangeColIndex);
    window[`tableObserver_${tableBodyId}`] = new MutationObserver(function() {
        patchTable(tableBodyId, rangeColIndex);
    });
    window[`tableObserver_${tableBodyId}`].observe(tableBody, { childList: true, subtree: true });
}

observeTable('element-table-body', 3);

observeTable('lamotte-table-body', 3);

observeTable('tae-table-body', 3);
