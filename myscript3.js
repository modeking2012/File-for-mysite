/*<![CDATA[*/
$(function () {
     
                                $["ajax"]({
                                        url: _0x5efbx2
                                        , method: "GET"
                                        , dataType: "jsonp"
                                        , success: function (_0x5efbx8) {
                                                var _0x5efbx9 = ""
                                                        , _0x5efbxa, _0x5efbxb;
                                                for (_0x5efbxa = 0; _0x5efbxa < _0x5efbx8["feed"]["entry"][
                                                                "length"]; _0x5efbxa = _0x5efbxa + 1) {
                                                        for (_0x5efbxb = 0; _0x5efbxb < _0x5efbx8["feed"][
                                                                        "entry"][_0x5efbxa]["link"]["length"]; _0x5efbxb =
                                                                _0x5efbxb + 1) {
                                                                var _0x5efbxc = _0x5efbx8["feed"]["entry"][
                                                                        _0x5efbxa]["link"][_0x5efbxb];
                                                                if (_0x5efbxc["rel"] == "alternate") {
                                                                        var _0x5efbxd = _0x5efbxc["href"];
                                                                        break
                                                                }
                                                        };
                                                        var _0x5efbxe = _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                "summary"]["$t"]["replace"](
                                                                /<\S[^>]*>/g, "");
                                                        var _0x5efbxf = _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                "title"]["$t"];
                                                        if ($("#b-author")["length"] > 0 && $("#b-author")[
                                                                        "text"]()["match"]("false")) {
                                                                var _0x5efbx10 = ""
                                                        } else {
                                                                if ($("#b-author-link")["length"] > 0 && $(
                                                                                "#b-author-link")["text"]()[
                                                                                "match"]("false")) {
                                                                        var _0x5efbx10 =
                                                                                "<span class=\'Author\'>" +
                                                                                _0x5efbx8["feed"]["entry"][
                                                                                        _0x5efbxa]["author"][0]
                                                                                ["name"]["$t"] + "</span>"
                                                                } else {
                                                                        if (_0x5efbx8["feed"]["entry"][
                                                                                        _0x5efbxa]["author"][0]
                                                                                ["uri"] !== undefined) {
                                                                                var _0x5efbx10 = "<a href=\'" +
                                                                                        _0x5efbx8["feed"][
                                                                                                "entry"][
                                                                                                _0x5efbxa][
                                                                                                "author"][0][
                                                                                                "uri"]["$t"] +
                                                                                        "\' class=\'Author\' target=\'_blank\'>" +
                                                                                        _0x5efbx8["feed"][
                                                                                                "entry"][
                                                                                                _0x5efbxa][
                                                                                                "author"][0][
                                                                                                "name"]["$t"] +
                                                                                        "</a>"
                                                                        } else {
                                                                                var _0x5efbx10 =
                                                                                        "<span class=\'Author\'>" +
                                                                                        _0x5efbx8["feed"][
                                                                                                "entry"][
                                                                                                _0x5efbxa][
                                                                                                "author"][0][
                                                                                                "name"]["$t"] +
                                                                                        "</span>"
                                                                        }
                                                                }
                                                        };
                                                        var _0x5efbx11 = _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                "published"]["$t"]["substr"](5, 2);
                                                        var _0x5efbx12 = [];
                                                        _0x5efbx12[1] = "يناير";
                                                        _0x5efbx12[2] = "فبراير";
                                                        _0x5efbx12[3] = "مارس";
                                                        _0x5efbx12[4] = "أبريل";
                                                        _0x5efbx12[5] = "مايو";
                                                        _0x5efbx12[6] = "يونيه";
                                                        _0x5efbx12[7] = "يوليو";
                                                        _0x5efbx12[8] = "أغسطس";
                                                        _0x5efbx12[9] = "سبتمبر";
                                                        _0x5efbx12[10] = "أكتوبر";
                                                        _0x5efbx12[11] = "نوفمبر";
                                                        _0x5efbx12[12] = "ديسمبر";
                                                        if (_0x5efbx11["indexOf"]("0") === 0) {
                                                                var _0x5efbx13 = _0x5efbx12[_0x5efbx11[
                                                                        "replace"]("0", "")]
                                                        } else {
                                                                var _0x5efbx13 = _0x5efbx12[_0x5efbx11]
                                                        };
                                                        var _0x5efbx14 = _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                        "published"]["$t"]["substr"](8, 2) +
                                                                " " + _0x5efbx13 + " " + _0x5efbx8["feed"][
                                                                        "entry"][_0x5efbxa]["published"]["$t"][
                                                                        "substr"](0, 4);
                                                        var _0x5efbx15 = "/" + _0x5efbx8["feed"]["entry"][
                                                                        _0x5efbxa]["published"]["$t"]["substr"]
                                                                (0, 10)["replace"](/\-/g, "_") +
                                                                "_archive.html";
                                                        var _0x5efbx16 = $(_0x5efbx8["feed"]["entry"][_0x5efbxa]
                                                                        ["media$thumbnail"])["length"] > 0 ?
                                                                _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                        "media$thumbnail"]["url"]["replace"](
                                                                        "s72-c", "s90-c") : (alt_Img["indexOf"]
                                                                        ("s1600-r") != -1 ? alt_Img["replace"](
                                                                                "s1600-r", "s90-c") : alt_Img);
                                                        var _0x5efbx17 = $(_0x5efbx8["feed"]["entry"][_0x5efbxa]
                                                                        ["media$thumbnail"])["length"] > 0 ?
                                                                _0x5efbx8["feed"]["entry"][_0x5efbxa][
                                                                        "media$thumbnail"]["url"]["replace"](
                                                                        "s72-c", "s300") : (alt_Img["indexOf"](
                                                                                "s1600-r") != -1 ? alt_Img[
                                                                                "replace"]("s1600-r", "s300") :
                                                                        alt_Img);
                                                        var _0x5efbx18 = _0x5efbxe["length"] > 300 ? _0x5efbxe[
                                                                        "substring"](0, 300) + "..." :
                                                                _0x5efbxe;
                                                        var _0x5efbx19 = _0x5efbxe["length"] > 100 ? _0x5efbxe[
                                                                        "substring"](0, 100) + "..." :
                                                                _0x5efbxe;
                                                        if (_0x5efbx0["hasClass"]("list")) {
                                                                _0x5efbx9 +=
                                                                        "<div class=\'Post\'><a class=\'Thumb\' href=\'" +
                                                                        _0x5efbxd +
                                                                        "\'><h7 style=\'background:url(" +
                                                                        _0x5efbx16 +
                                                                        ")\'/><div class=\'boxs\'/></a><a class=\'Title\' href=\'" +
                                                                        _0x5efbxd + "\'>" + _0x5efbxf +
                                                                        "</a><div class=\'details\'>" +
                                                                        _0x5efbx10 +
                                                                        "<a class=\'Date\' href=\'" +
                                                                        _0x5efbx15 + "\'>" + _0x5efbx14 +
                                                                        "</a></div></div>"
                                                        } else {
                                                                if (_0x5efbx0["hasClass"]("cover")) {
                                                                        _0x5efbx9 +=
                                                                                "<div class=\'Post\'><a class=\'Thumb\' href=\'" +
                                                                                _0x5efbxd + "\'>";
                                                                        if (_0x5efbxa == 0) {
                                                                                _0x5efbx9 +=
                                                                                        "<h7 style=\'background:url(" +
                                                                                        _0x5efbx17 + ")\'/>"
                                                                        } else {
                                                                                _0x5efbx9 +=
                                                                                        "<h7 style=\'background:url(" +
                                                                                        _0x5efbx16 + ")\'/>"
                                                                        };
                                                                        _0x5efbx9 +=
                                                                                "<div class=\'boxs\'/></a><a class=\'Title\' href=\'" +
                                                                                _0x5efbxd + "\'>" + _0x5efbxf +
                                                                                "</a><div class=\'details\'>" +
                                                                                _0x5efbx10 +
                                                                                "<a class=\'Date\' href=\'" +
                                                                                _0x5efbx15 + "\'>" + _0x5efbx14 +
                                                                                "</a></div><p class=\'Snippet\'>" +
                                                                                _0x5efbx18 + "</p></div>"
                                                                } else {
                                                                        if (_0x5efbx0["hasClass"]("vcover")) {
                                                                                _0x5efbx9 +=
                                                                                        "<div class=\'Post\'><a class=\'Thumb\' href=\'" +
                                                                                        _0x5efbxd + "\'>";
                                                                                if (_0x5efbxa == 0) {
                                                                                        _0x5efbx9 +=
                                                                                                "<h7 style=\'background:url(" +
                                                                                                _0x5efbx17 +
                                                                                                ")\'/>"
                                                                                } else {
                                                                                        _0x5efbx9 +=
                                                                                                "<h7 style=\'background:url(" +
                                                                                                _0x5efbx16 +
                                                                                                ")\'/>"
                                                                                };
                                                                                _0x5efbx9 +=
                                                                                        "<div class=\'boxs\'/></a><a class=\'Title\' href=\'" +
                                                                                        _0x5efbxd + "\'>" +
                                                                                        _0x5efbxf +
                                                                                        "</a><div class=\'details\'>" +
                                                                                        _0x5efbx10 +
                                                                                        "<a class=\'Date\' href=\'" +
                                                                                        _0x5efbx15 + "\'>" +
                                                                                        _0x5efbx14 +
                                                                                        "</a></div><p class=\'Snippet\'>" +
                                                                                        _0x5efbx18 +
                                                                                        "</p></div>"
                                                                        } else {
                                                                                if (_0x5efbx0["hasClass"](
                                                                                                "sided")) {
                                                                                        _0x5efbx9 +=
                                                                                                "<div class=\'Post\'><a class=\'Thumb\' href=\'" +
                                                                                                _0x5efbxd +
                                                                                                "\'>";
                                                                                        if (_0x5efbxa == 0) {
                                                                                                _0x5efbx9 +=
                                                                                                        "<h7 style=\'background:url(" +
                                                                                                        _0x5efbx17 +
                                                                                                        ")\'/>"
                                                                                        } else {
                                                                                                _0x5efbx9 +=
                                                                                                        "<h7 style=\'background:url(" +
                                                                                                        _0x5efbx16 +
                                                                                                        ")\'/>"
                                                                                        };
                                                                                        _0x5efbx9 +=
                                                                                                "<div class=\'boxs\'/></a><a class=\'Title\' href=\'" +
                                                                                                _0x5efbxd +
                                                                                                "\'>" +
                                                                                                _0x5efbxf +
                                                                                                "</a><div class=\'details\'>" +
                                                                                                _0x5efbx10 +
                                                                                                "<a class=\'Date\' href=\'" +
                                                                                                _0x5efbx15 +
                                                                                                "\'>" +
                                                                                                _0x5efbx14 +
                                                                                                "</a></div><p class=\'Snippet\'>" +
                                                                                                _0x5efbx19 +
                                                                                                "</p></div>"
                                                                                } else {
                                                                                        if (_0x5efbx0[
                                                                                                        "hasClass"
                                                                                                        ](
                                                                                                        "broadcast"
                                                                                                )) {
                                                                                                _0x5efbx9 +=
                                                                                                        "<div class=\'Post current\'><a class=\'Thumb\' href=\'" +
                                                                                                        _0x5efbxd +
                                                                                                        "\'>";
                                                                                                if (_0x5efbxa ==
                                                                                                        0) {
                                                                                                        _0x5efbx9
                                                                                                                +=
                                                                                                                "<h7 style=\'background:url(" +
                                                                                                                _0x5efbx17 +
                                                                                                                ")\'/>"
                                                                                                } else {
                                                                                                        _0x5efbx9
                                                                                                                +=
                                                                                                                "<h7 style=\'background:url(" +
                                                                                                                _0x5efbx16 +
                                                                                                                ")\'/>"
                                                                                                };
                                                                                                _0x5efbx9 +=
                                                                                                        "</a><a class=\'Title\' href=\'" +
                                                                                                        _0x5efbxd +
                                                                                                        "\'>" +
                                                                                                        _0x5efbxf +
                                                                                                        "</a></div><div class=\'Post\'><a class=\'Thumb\'><h7 data-thumb=\'" +
                                                                                                        _0x5efbx17 +
                                                                                                        "\' style=\'background:url(" +
                                                                                                        _0x5efbx16 +
                                                                                                        ")\'/></a><a class=\'Title\' data-url=\'" +
                                                                                                        _0x5efbxd +
                                                                                                        "\'>" +
                                                                                                        _0x5efbxf +
                                                                                                        "</a></div>"
                                                                                        } else {
                                                                                                if (_0x5efbx0[
                                                                                                                "hasClass"
                                                                                                                ]
                                                                                                        (
                                                                                                                "cards"
                                                                                                        )) {
                                                                                                        _0x5efbx9
                                                                                                                +=
                                                                                                                "<div class=\'Post\'><a class=\'Thumb\' href=\'" +
                                                                                                                _0x5efbxd +
                                                                                                                "\'><h7 style=\'background:url(" +
                                                                                                                _0x5efbx17 +
                                                                                                                ")\'/><div class=\'boxs\'/></a><a class=\'Title\' href=\'" +
                                                                                                                _0x5efbxd +
                                                                                                                "\'>" +
                                                                                                                _0x5efbxf +
                                                                                                                "</a><div class=\'details\'>" +
                                                                                                                _0x5efbx10 +
                                                                                                                "<a class=\'Date\' href=\'" +
                                                                                                                _0x5efbx15 +
                                                                                                                "\'>" +
                                                                                                                _0x5efbx14 +
                                                                                                                "</a></div><p class=\'Snippet\'>" +
                                                                                                                _0x5efbx19 +
                                                                                                                "</p></div>"
                                                                                                }
                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                };
                                                _0x5efbx0["html"](_0x5efbx9)
                                        }
                                        , complete: function () {
                                                $(".cover .Post:not(:first)")["addClass"]("cov");
                                                $(
                                                        ".sided:eq(1) .Post:not(:first) .Snippet, .sided:eq(0) .Post:not(:first) .Snippet"
                                                )["remove"]();
                                                $(".broadcast")["each"](function () {
                                                        $(this)["find"](".current:not(:first)")[
                                                                "remove"]()
                                                })
                                        }
                                })
                        } else {
                                _0x5efbx0["parent"]()["remove"]()
                        }
                });
                $(document)["ajaxStop"](function () {
                        $(".broadcast")["each"](function () {
                                var _0x5efbx1a = 0;
                                var _0x5efbx1b;
                                var _0x5efbx1c;
                                var _0x5efbx1d = $(this);

                                function _0x5efbx1e() {
                                        if (_0x5efbx1a == _0x5efbx1d["find"](".Post:last")["index"]()) {
                                                _0x5efbx1a = 1
                                        } else {
                                                _0x5efbx1a++
                                        };
                                        var _0x5efbx1f = _0x5efbx1d["find"](".Post:eq(" + _0x5efbx1a + ")");
                                        _0x5efbx1d["find"](".b-current")["removeClass"]("b-current");
                                        _0x5efbx1f["addClass"]("b-current");
                                        _0x5efbx1d["find"](".current a")["attr"]("href", _0x5efbx1f["find"](".Title")[
                                                "attr"]("data-url"));
                                        _0x5efbx1d["find"](".current .Title")["text"](_0x5efbx1f["find"](".Title")[
                                                "text"]());
                                        _0x5efbx1d["find"](".current h7")["attr"]("style", "background:url(" +
                                                _0x5efbx1f["find"]("h7")["attr"]("data-thumb") + ")")
                                }
                                _0x5efbx1b = setInterval(_0x5efbx1e, 3000);
                                $(this)["mouseenter"](function () {
                                        clearInterval(_0x5efbx1b)
                                });
                                $(this)["mouseleave"](function () {
                                        _0x5efbx1b = setInterval(_0x5efbx1e, 3000)
                                });
                                _0x5efbx1d["on"]("click", ".Post:not(.current)", function () {
                                        $(this)["addClass"]("b-current")["siblings"]()["removeClass"](
                                                "b-current");
                                        _0x5efbx1d["find"](".current a")["attr"]("href", $(this)["find"]
                                                (".Title")["attr"]("data-url"));
                                        _0x5efbx1d["find"](".current .Title")["text"]($(this)["find"](
                                                ".Title")["text"]());
                                        _0x5efbx1d["find"](".current h7")["attr"]("style"
                                                , "background:url(" + $(this)["find"]("h7")[
                                                        "attr"]("data-thumb") + ")");
                                        _0x5efbx1a = $(this)["index"]()
                                })
                        })
                })
        })
        /*]]>*/

