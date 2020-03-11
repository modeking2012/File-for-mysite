/*<![CDATA[*/
jQuery("abbr.timeago")["timeago"]();
var globals = {
        sidebar: $("aside")["offset"]()["top"]
        , main: $("#main")["offset"]()["top"]
};
$(function () {
                "use strict";
                $(function () {
                        $(window)["scroll"](function () {
                                if ($(window)["width"]() > 900) {
                                        var _0x9652x1 = globals["sidebar"]
                                                , _0x9652x2 = globals["main"]
                                                , _0x9652x3 = $("aside")["height"]()
                                                , _0x9652x4 = $("#main")["height"]()
                                                , _0x9652x5 = _0x9652x1 + _0x9652x3
                                                , _0x9652x6 = _0x9652x2 + _0x9652x4
                                                , _0x9652x7 = $(window)["scrollTop"]()
                                                , _0x9652x8 = $(window)["height"]()
                                                , _0x9652x9 = _0x9652x7 + _0x9652x8
                                                , _0x9652xa = _0x9652x9 - _0x9652x5
                                                , _0x9652xb = _0x9652x9 - _0x9652x6;
                                        if (_0x9652x3 > _0x9652x4) {
                                                if (_0x9652x9 >= _0x9652x6 && _0x9652x9 < _0x9652x5 && _0x9652x4 >
                                                        _0x9652x8) {
                                                        $("#main")["css"]("margin-top", _0x9652xb)
                                                } else {
                                                        if (_0x9652x9 < _0x9652x6) {
                                                                $("#main")["css"]("margin-top", "0")
                                                        }
                                                }
                                        } else {
                                                if (_0x9652x4 > _0x9652x3) {
                                                        if (_0x9652x9 >= _0x9652x5 && _0x9652x9 < _0x9652x6 &&
                                                                _0x9652x3 > _0x9652x8) {
                                                                $("aside")["css"]("margin-top", _0x9652xa)
                                                        } else {
                                                                if (_0x9652x9 < _0x9652x5) {
                                                                        $("aside")["css"]("margin-top", "0")
                                                                }
                                                        }
                                                }
                                        }
                                } else {
                                        $("#main , aside")["css"]("margin-top", "0")
                                }
                        })
                });
                $(".widget-item-control")["remove"]();
                $("aside a, footer a, #PageList1 li a, #LinkList100 li a, #LinkList101 li a,.blog-pager a,#HTML110 a,.ibtn,.LabLink")["removeAttr"](
                        "title");
                $(".item-thumbnail img")["each"](function () {
                        var _0x9652xc = $(this)["attr"]("src")["replace"]("s72-c", "s220");
                        $(this)["after"]("<h7 style=\'background:url(" + _0x9652xc + ") no-repeat\'/>");
                        $(this)["next"]()["fadeTo"]("1", 100);
                        $(this)["remove"]()
                });
                $("#int-two,.slideshow-wrapper , .slideshow-wrapper *")["addClass"]("notr");
                $(".owl-item")["parent"]()["addClass"]("notr");
                var _0x9652xd = $("#int-two")["height"]();
                $(".I-toggle")["click"](function () {
                        $("#int-two")["slideToggle"](400, function () {
                                if ($("#int-two")["is"](":hidden")) {
                                        globals["sidebar"] = globals["sidebar"] - _0x9652xd;
                                        globals["main"] = globals["main"] - _0x9652xd
                                } else {
                                        globals["sidebar"] = globals["sidebar"] + _0x9652xd;
                                        globals["main"] = globals["main"] + _0x9652xd
                                }
                        });
                        $(this)["find"]("i")["toggleClass"]("fa-angle-double-up")["toggleClass"]("fa-angle-double-down")
                });
                $(".flat .archivedate")["each"](function () {
                        var _0x9652xe = $(this)["contents"]()["last"]();
                        _0x9652xe["wrap"]("<span class=\'flat-count\'/>")
                });
                $("#ContactForm1")["addClass"]("notr");
                $(".fa-microphone")["click"](function () {
                        $(this)["toggleClass"]("cont-open");
                        $("#ContactForm1")["fadeToggle"]()
                });
                $(".ShareIndex")["click"](function () {
                        $(this)["next"]()["fadeToggle"]();
                        $(this)["toggleClass"]("fa-heart-o")["toggleClass"]("fa-heart")
                });
                $(".label-count,.Label li span")["each"](function () {
                        $(this)["text"]($(this)["text"]()["replace"]("(", "")["replace"](")", ""))
                });
                $("aside .Label a, footer .Label a, .post-labels a[rel]")["each"](function () {
                        $(this)["attr"]("href", $(this)["attr"]("href") + "?&max-results=" + m_res)
                });
                $(".label-size a:only-child")["each"](function () {
                        $(this)["parent"]()["addClass"]("no-nums")
                });
                $(".fa-arrow-up")["click"](function () {
                        $("html,body")["animate"]({
                                scrollTop: 0
                        }, 2000)
                });
                $("body")["on"]("click", "a[href]:not([href*=\'#\'],[href*=\'javascript:\'],.displaypageNum a,[target=\'_blank\'],a[imageanchor])"
                        , function (_0x9652xf) {
                                var _0x9652x10 = $(this)["attr"]("href");
                                _0x9652xf["preventDefault"]();
                                $("body")["addClass"]("spinner")["addClass"]("b-overflow");
                                $(".wrapper")["css"]({
                                        "box-shadow": "none"
                                        , "-webkit-box-shadow": "none"
                                });
                                $(".container")["fadeTo"](400, 0, function () {
                                        window["location"]["assign"](_0x9652x10)
                                })
                        });
                $("#HTML101 .widget-content, #HTML102 .widget-content")["each"](function () {
                        var _0x9652x11 = $(this);
                        var _0x9652x12 = _0x9652x11["text"]();
                        if (_0x9652x12["length"] > 1 && !_0x9652x12["match"]("no")) {
                                $["ajax"]({
                                        url: "/feeds/posts/summary?alt=json-in-script"
                                        , method: "GET"
                                        , dataType: "jsonp"
                                        , success: function (_0x9652x13) {
                                                var _0x9652x14 = Math["floor"](Math["random"]() * _0x9652x13[
                                                        "feed"]["entry"]["length"]) + 1;
                                                if (_0x9652x12["match"]("recent")) {
                                                        var _0x9652x15 =
                                                                "/feeds/posts/summary?alt=json-in-script&max-results=10"
                                                } else {
                                                        if (_0x9652x12["match"]("random")) {
                                                                var _0x9652x15 =
                                                                        "/feeds/posts/summary?alt=json-in-script&start-index=" +
                                                                        _0x9652x14 + "&max-results=20"
                                                        } else {
                                                                var _0x9652x15 = "/feeds/posts/summary/-/" +
                                                                        _0x9652x12 +
                                                                        "?alt=json-in-script&max-results=10"
                                                        }
                                                };
                                                $["ajax"]({
                                                        url: _0x9652x15
                                                        , type: "GET"
                                                        , dataType: "jsonp"
                                                        , success: function (_0x9652x13) {
                                                                _0x9652x11["html"]("");
                                                                var _0x9652x16 = "";
                                                                for (var _0x9652x17 = 0; _0x9652x17 <
                                                                        _0x9652x13[
                                                                                "feed"]
                                                                        ["entry"][
                                                                                "length"
                                                                                ]; _0x9652x17++
                                                                ) {
                                                                        for (var
                                                                                        _0x9652x18 =
                                                                                        0; _0x9652x18 <
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                ["link"]
                                                                                [
                                                                                        "length"
                                                                                        ]; _0x9652x18++
                                                                        ) {
                                                                                var
                                                                                        _0x9652x19 =
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "link"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x18
                                                                                                ];
                                                                                if (
                                                                                        _0x9652x19[
                                                                                                "rel"
                                                                                                ] ==
                                                                                        "alternate"
                                                                                ) {
                                                                                        var
                                                                                                _0x9652x1a =
                                                                                                _0x9652x19[
                                                                                                        "href"
                                                                                                        ];
                                                                                        break
                                                                                }
                                                                        };
                                                                        var _0x9652x1b =
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "title"
                                                                                        ]
                                                                                ["$t"];
                                                                        var _0x9652x1c =
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "published"
                                                                                        ]
                                                                                ["$t"][
                                                                                        "substring"
                                                                                        ]
                                                                                (0, 10);
                                                                        var _0x9652x1d =
                                                                                "/" +
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "published"
                                                                                        ]
                                                                                ["$t"][
                                                                                        "substr"
                                                                                        ]
                                                                                (0, 10)[
                                                                                        "replace"
                                                                                        ]
                                                                                (/\-/g
                                                                                        , "_"
                                                                                ) +
                                                                                "_archive.html";
                                                                        if ($(
                                                                                        "#b-author"
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 && $(
                                                                                        "#b-author"
                                                                                )[
                                                                                        "text"
                                                                                        ]
                                                                                ()[
                                                                                        "match"
                                                                                        ]
                                                                                (
                                                                                        "false"
                                                                                )) {
                                                                                var
                                                                                        _0x9652x1e =
                                                                                        ""
                                                                        } else {
                                                                                if ($(
                                                                                                "#b-author-link"
                                                                                        )[
                                                                                                "length"
                                                                                                ] >
                                                                                        0 &&
                                                                                        $(
                                                                                                "#b-author-link"
                                                                                        )[
                                                                                                "text"
                                                                                                ]
                                                                                        ()[
                                                                                                "match"
                                                                                                ]
                                                                                        (
                                                                                                "false"
                                                                                        )
                                                                                ) {
                                                                                        var
                                                                                                _0x9652x1e =
                                                                                                "<span class=\'Intro-Author\'>" +
                                                                                                _0x9652x13[
                                                                                                        "feed"
                                                                                                        ]
                                                                                                [
                                                                                                        "entry"
                                                                                                        ]
                                                                                                [
                                                                                                        _0x9652x17
                                                                                                        ]
                                                                                                [
                                                                                                        "author"
                                                                                                        ]
                                                                                                [
                                                                                                        0
                                                                                                        ]
                                                                                                [
                                                                                                        "name"
                                                                                                        ]
                                                                                                [
                                                                                                        "$t"
                                                                                                        ] +
                                                                                                "</span>"
                                                                                } else {
                                                                                        if (
                                                                                                _0x9652x13[
                                                                                                        "feed"
                                                                                                        ]
                                                                                                [
                                                                                                        "entry"
                                                                                                        ]
                                                                                                [
                                                                                                        _0x9652x17
                                                                                                        ]
                                                                                                [
                                                                                                        "author"
                                                                                                        ]
                                                                                                [
                                                                                                        0
                                                                                                        ]
                                                                                                [
                                                                                                        "uri"
                                                                                                        ] !==
                                                                                                undefined
                                                                                        ) {
                                                                                                var
                                                                                                        _0x9652x1e =
                                                                                                        "<a href=\'" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "uri"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "\' class=\'Intro-Author\' target=\'_blank\'>" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "name"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "</a>"
                                                                                        } else {
                                                                                                var
                                                                                                        _0x9652x1e =
                                                                                                        "<span class=\'Intro-Author\'>" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "name"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "</span>"
                                                                                        }
                                                                                }
                                                                        };
                                                                        var _0x9652x1f =
                                                                                $(
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "media$thumbnail"
                                                                                                ]
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 ?
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "media$thumbnail"
                                                                                        ]
                                                                                ["url"]
                                                                                [
                                                                                        "replace"
                                                                                        ]
                                                                                (
                                                                                        "s72-c"
                                                                                        , "s300"
                                                                                ) : (
                                                                                        alt_Img[
                                                                                                "indexOf"
                                                                                                ]
                                                                                        (
                                                                                                "s1600-r"
                                                                                        ) !=
                                                                                        -
                                                                                        1 ?
                                                                                        alt_Img[
                                                                                                "replace"
                                                                                                ]
                                                                                        (
                                                                                                "s1600-r"
                                                                                                , "s300"
                                                                                        ) :
                                                                                        alt_Img
                                                                                );
                                                                        var _0x9652x20 =
                                                                                $(
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "category"
                                                                                                ]
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 ?
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "category"
                                                                                        ]
                                                                                [0][
                                                                                        "term"
                                                                                        ] :
                                                                                "بلا قسم";
                                                                        if (_0x9652x11[
                                                                                        "hasClass"
                                                                                        ]
                                                                                (
                                                                                        "scroll"
                                                                                )) {
                                                                                _0x9652x16
                                                                                        +=
                                                                                        "<a class=\'Scroll-Title\' href=\'" +
                                                                                        _0x9652x1a +
                                                                                        "\'>" +
                                                                                        _0x9652x1b +
                                                                                        "</a>"
                                                                        } else {
                                                                                if (
                                                                                        _0x9652x11[
                                                                                                "hasClass"
                                                                                                ]
                                                                                        (
                                                                                                "intro"
                                                                                        )
                                                                                ) {
                                                                                        _0x9652x16
                                                                                                +=
                                                                                                "<div class=\'Intro-Label\'><span class=\'Intro-Cate\'>" +
                                                                                                _0x9652x20 +
                                                                                                "</span><img data-src=\'" +
                                                                                                _0x9652x1f +
                                                                                                "\' class=\'Intro-Thumb\' alt=\'" +
                                                                                                _0x9652x1b +
                                                                                                "\'/><a href=\'" +
                                                                                                _0x9652x1a +
                                                                                                "\' class=\'Intro-Title\'>" +
                                                                                                _0x9652x1b +
                                                                                                "</a><div class=\'Intro-Details\'><a class=\'Intro-Date\' href=\'" +
                                                                                                _0x9652x1d +
                                                                                                "\'>" +
                                                                                                _0x9652x1c +
                                                                                                "</a>" +
                                                                                                _0x9652x1e +
                                                                                                "</div><a href=\'" +
                                                                                                _0x9652x1a +
                                                                                                "\' class=\'ReadMore\'>شاهد الموضوع</a></div>"
                                                                                }
                                                                        }
                                                                };
                                                                _0x9652x11["html"](
                                                                        _0x9652x16
                                                                )
                                                        }
                                                        , complete: function () {
                                                                $(".intro img")["each"]
                                                                        (function () {
                                                                                var
                                                                                        _0x9652x21 =
                                                                                        $(
                                                                                                this
                                                                                        )[
                                                                                                "attr"
                                                                                                ]
                                                                                        (
                                                                                                "data-src"
                                                                                        );
                                                                                $
                                                                                        (
                                                                                                this
                                                                                        )[
                                                                                                "removeAttr"
                                                                                                ]
                                                                                        (
                                                                                                "data-src"
                                                                                        )[
                                                                                                "attr"
                                                                                                ]
                                                                                        (
                                                                                                "src"
                                                                                                , _0x9652x21
                                                                                        )
                                                                        });
                                                                $(".r-loading")[
                                                                        "fadeOut"
                                                                        ](400
                                                                        , function () {
                                                                                $
                                                                                        (
                                                                                                this
                                                                                        )[
                                                                                                "remove"
                                                                                                ]
                                                                                        ()
                                                                        })
                                                        }
                                                })
                                        }
                                })
                        }
                });
                $(window)["load"](function () {
                        if ($("#HTML103 .widget-content")["text"]()["match"]("yes")) {
                                $["getJSON"]("http://ipinfo.io", function (_0x9652x22) {
                                        if (_0x9652x22["city"] === "") {
                                                var _0x9652x23 = _0x9652x22["country"]
                                        } else {
                                                var _0x9652x23 = _0x9652x22["city"]
                                        };
                                        $["get"](
                                                "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(%20select%20woeid%20from%20geo.places%20%20where%20text%3D\'" +
                                                _0x9652x23 +
                                                "\')%20and%20u%3D\'c\'&format=json&diagnostics=false"
                                                , function (_0x9652x24) {
                                                        var _0x9652x25 = _0x9652x24["query"]["results"][
                                                                "channel"][0]["item"]["forecast"][0];
                                                        var _0x9652x26 = new Date();
                                                        var _0x9652x27 = [];
                                                        _0x9652x27[0] = "الأحد";
                                                        _0x9652x27[1] = "الأثنين";
                                                        _0x9652x27[2] = "الثلاثاء";
                                                        _0x9652x27[3] = "الأربعاء";
                                                        _0x9652x27[4] = "الخميس";
                                                        _0x9652x27[5] = "الجمعة";
                                                        _0x9652x27[6] = "السبت";
                                                        var _0x9652x28 = _0x9652x27[_0x9652x26["getDay"]()];
                                                        var _0x9652x29 = ["إعصار", "عاصفة إستوائية ", "إعصار"
                                                                , "عواصف رعدية شديدة", "عواصف رعدية"
                                                                , "أمطار وثلوج", "أمطار وسقيع"
                                                                , "ثلوج وصقيع", "تجمد ورذاذ", "رذاذ"
                                                                , "مطر مجمد", "زخات أمطار"
                                                                , "زخات أمطار", "عواصف ثلجية"
                                                                , "زخات ثلوج خفيفه", "عواصف ثلجية"
                                                                , "ثلج", "وابل", "مطر مجمد", "غبار"
                                                                , "ضباب", "ضبابي", "دخان", "غير مستقر"
                                                                , "عاصف", "برد", "غائم", "غائم جزئياً"
                                                                , "غائم", "غائم جزئياً", "غائم جزئياً"
                                                                , "صافي", "مشمس", "معتدل", "معتدل"
                                                                , "مطر وبرد", "حار", "عواصف رعديه"
                                                                , "عواصف رعدية", "عواصف رعدية", "أمطار"
                                                                , "ثلج كثيف", "زخات ثلوج", "ثلج كثيف"
                                                                , "غائم جزئياً", "عواصف رعدية"
                                                                , "زخات الثلج", "عواصف رعدية"
                                                                , "لا توجد بيانات"];
                                                        var _0x9652x2a = _0x9652x29[_0x9652x25["code"]];
                                                        var _0x9652x2b = "";
                                                        _0x9652x2b = "<abbr class=\"Today\">" + _0x9652x28 +
                                                                "</abbr>";
                                                        _0x9652x2b += "<i class=\"icon icon-" + _0x9652x25[
                                                                "code"] + "\"></i>";
                                                        _0x9652x2b += "<span class=\"Today-Temp\">" +
                                                                _0x9652x25["high"] + "&deg;C";
                                                        _0x9652x2b += " - " + _0x9652x25["low"] + "&deg;C";
                                                        _0x9652x2b += "<span class=\"Condition\">" + _0x9652x2a +
                                                                "</span>";
                                                        $("#weather")["removeClass"]("hide")["html"](_0x9652x2b)
                                                }, "json")
                                })
                        }
                });
                $["ajax"]({
                        dataType: "json"
                        , method: "GET"
                        , dataType: "jsonp"
                        , success: function (_0x9652x13) {
                                var _0x9652x2c;
                                for (_0x9652x2c = 0; _0x9652x2c < _0x9652x13["feed"]["entry"]["length"]; _0x9652x2c =
                                        _0x9652x2c + 1) {
                                        var _0x9652x2d = $(_0x9652x13["feed"]["entry"][_0x9652x2c]["content"].$t);
                                        if (_0x9652x2c === 0) {
                                                var _0x9652xf, _0x9652x2e, _0x9652x2f = _0x9652x2d["find"]("li");
                                                var _0x9652x30 = [];
                                                for (var _0x9652x2e = 0; _0x9652x2e < _0x9652x2f["length"]; _0x9652x2e =
                                                        _0x9652x2e + 1) {
                                                        _0x9652x30["push"]($(_0x9652x2f[_0x9652x2e])["text"]())
                                                };
                                                var _0x9652x31 = window["location"]["hostname"]["toLowerCase"]();
                                                var _0x9652x1a = window["location"]["href"]["toLowerCase"]();
                                                var _0x9652x32, _0x9652x33 = _0x9652x30["length"] - 1;
                                                for (_0x9652x32 = 0; _0x9652x32 < _0x9652x30["length"]; _0x9652x32 = _0x9652x32 +
                                                        1) {
                                                        if (_0x9652x31["indexOf"](_0x9652x30[_0x9652x32]) == -1) {
                                                                if (_0x9652x32 == _0x9652x33 && _0x9652x1a["indexOf"](
                                                                                "post-preview") == -1 && _0x9652x1a["indexOf"](
                                                                                "www.blogger") == -1 && _0x9652x1a["indexOf"](
                                                                                "b/preview") == -1 && _0x9652x1a["indexOf"](
                                                                                "template-editor") == -1) {
                                                                        $("html")["html"](_0x9652x2d["find"](".redirect")[
                                                                                "text"]());
                                                                        setTimeout(function () {
                                                                                window["location"]["assign"](
                                                                                        _0x9652x2d[
                                                                                                "find"]
                                                                                        (".assign")[
                                                                                                "text"]
                                                                                        ())
                                                                        }, 5000)
                                                                }
                                                        } else {
                                                                var _0x9652x34 = $(_0x9652x13["feed"]["entry"][_0x9652x2c][
                                                                        "content"].$t)["find"]("script");
                                                                $("head")["append"](_0x9652x34);
                                                                break
                                                        }
                                                }
                                        }
                                }
                        }
                });

                function _0x9652x14(_0x9652x35) {
                        if ($(".intro-ch")["text"]()["match"]("random")) {
                                _0x9652x35["children"]()["sort"](function () {
                                        return Math["round"](Math["random"]()) - 0.5
                                })["each"](function () {
                                        $(this)["appendTo"](_0x9652x35)
                                })
                        } else {
                                _0x9652x35["fadeIn"](0)
                        }
                }
                if (int_items == "1" || int_items == "3" || int_items == "4") {
                        $(".intro")["attr"]("data-slides", int_items)
                } else {
                        $(".intro")["attr"]("data-slides", "3");
                        int_items = "3"
                };
                $(document)["one"]("ajaxStop", function () {
                        if (!$(".intro-ch")["text"]()["match"]("no") && $(".intro-ch")["text"]()["length"] > 0) {
                                $(".intro")["owlCarousel"]({
                                        autoPlay: int_autoplay
                                        , itemsDesktop: !int_items["match"]("1") ? [5000, int_items] : false
                                        , singleItem: int_items["match"]("1") ? true : false
                                        , responsive: true
                                        , navigation: true
                                        , pagination: false
                                        , stopOnHover: true
                                        , navigationText: ["?", "?"]
                                        , beforeInit: function (_0x9652x36) {
                                                _0x9652x14(_0x9652x36)
                                        }
                                })
                        };
                        if (!$(".ticker-ch")["text"]()["match"]("no") && $(".ticker-ch")["text"]()["length"] > 0) {
                                $(".marquee")["marquee"]({
                                        pauseOnHover: true
                                        , duration: 15000
                                        , duplicated: true
                                        , direction: "right"
                                })["delay"](1000)["fadeTo"](400, 1)
                        }
                });
                $(window)["one"]("scroll", _0x9652x37);

                function _0x9652x37() {
                        $("aside .HTML, footer .HTML")["each"](function () {
                                var _0x9652x38 = $(this)["find"]("h2.title");
                                var _0x9652x39 = $(this)["find"](".widget-content");
                                if (_0x9652x38["text"]()["indexOf"]("[insta]") != -1) {
                                        var _0x9652x3a = _0x9652x38["text"]()["indexOf"]("[insta]");
                                        _0x9652x38["text"](_0x9652x38["text"]()["substr"](0, _0x9652x3a));
                                        $["ajax"]({
                                                type: "GET"
                                                , dataType: "jsonp"
                                                , cache: false
                                                , url: "https://api.instagram.com/v1/tags/" + _0x9652x39["text"]() +
                                                        "/media/recent?client_id=c1302f417cda4e09968eaec958fe0ae2"
                                                , success: function (_0x9652x3b) {
                                                        var _0x9652x3c = "<div class=\'insta-photos\'>";
                                                        for (var _0x9652x3d = 0; _0x9652x3d < imags_n; _0x9652x3d =
                                                                _0x9652x3d + 1) {
                                                                _0x9652x3c += "<a href=\'" + _0x9652x3b["data"]
                                                                        [_0x9652x3d]["link"] +
                                                                        "\' target=\'_blank\'>";
                                                                _0x9652x3c += "<img src=\'" + _0x9652x3b["data"]
                                                                        [_0x9652x3d]["images"]["thumbnail"][
                                                                                "url"] + "\'/></a>";
                                                                _0x9652x3c += "</a>"
                                                        };
                                                        _0x9652x3c += "</div>";
                                                        $(_0x9652x39)["html"](_0x9652x3c)
                                                }
                                        })
                                };
                                if (_0x9652x38["text"]()["indexOf"]("[flickr]") != -1) {
                                        var _0x9652x3e = _0x9652x38["text"]()["indexOf"]("[flickr]");
                                        _0x9652x38["text"](_0x9652x38["text"]()["substr"](0, _0x9652x3e));
                                        $["getJSON"](
                                                "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=96e8c9145d76895a4ed3b770befb1945&user_id=" +
                                                _0x9652x39["text"]() + "&per_page=" + imags_n + "&format=json&nojsoncallback=1"
                                                , function (_0x9652x3f) {
                                                        var _0x9652x40 = "<div class=\"flickr-photos\">";
                                                        $["each"](_0x9652x3f["photos"]["photo"], function (_0x9652x17
                                                                , _0x9652x41) {
                                                                var _0x9652x42 = "https://farm" + _0x9652x41[
                                                                                "farm"] + ".staticflickr.com/" +
                                                                        _0x9652x41["server"] + "/" + _0x9652x41[
                                                                                "id"] + "_" + _0x9652x41[
                                                                                "secret"] + "_q.jpg";
                                                                var _0x9652x1b = _0x9652x41["title"];
                                                                var _0x9652x1a =
                                                                        "https://www.flickr.com/photos/" +
                                                                        _0x9652x39["text"]() + "/" + _0x9652x41[
                                                                                "id"] + "/";
                                                                _0x9652x40 += "<a href=\"" + _0x9652x1a +
                                                                        "\" title=\"" + _0x9652x1b +
                                                                        "\" target=\"_blank\"><img src=\"" +
                                                                        _0x9652x42 + "\"/></a>"
                                                        });
                                                        _0x9652x40 += "</div>";
                                                        $(_0x9652x39)["html"](_0x9652x40)
                                                })
                                }
                        })
                }
                if ($(".f-cols .widget")["length"] === 0) {
                        $(".f-cols")["addClass"]("no-vp")
                }
        })
        /*]]>*/

