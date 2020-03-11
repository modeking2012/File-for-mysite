/*<![CDATA[*/
$(function () {
                "use strict";
                var _0x986ax0 = $(".author-profile span[itemprop=\'description\']");
                if (_0x986ax0["text"]()["length"] > 270) {
                        $(_0x986ax0)["text"](_0x986ax0["text"]()["substring"](0, 240) + " ...")
                };
                $(window)["one"]("scroll", _0x986ax1);

                function _0x986ax1() {
                        if ($(".post-labels a[rel=\'tag v:url\']")["length"] > 0) {
                                var _0x986ax2 = "/feeds/posts/summary/-/" + $(".post-labels a[rel=\'tag v:url\']:eq(0)")["text"]() +
                                        "?alt=json-in-script&max-results=10"
                        } else {
                                var _0x986ax2 = "/feeds/posts/summary?alt=json-in-script&max-results=10"
                        };
                        $["ajax"]({
                                url: _0x986ax2
                                , type: "get"
                                , dataType: "jsonp"
                                , success: function (_0x986ax3) {
                                        var _0x986ax4, _0x986ax5;
                                        for (_0x986ax4 = 0; _0x986ax4 < _0x986ax3["feed"]["entry"]["length"]; _0x986ax4 =
                                                _0x986ax4 + 1) {
                                                for (_0x986ax5 = 0; _0x986ax5 < _0x986ax3["feed"]["entry"][_0x986ax4]["link"][
                                                                "length"]; _0x986ax5 = _0x986ax5 + 1) {
                                                        var _0x986ax6 = _0x986ax3["feed"]["entry"][_0x986ax4]["link"][_0x986ax5];
                                                        if (_0x986ax6["rel"] === "alternate") {
                                                                var _0x986ax7 = _0x986ax6["href"];
                                                                break
                                                        }
                                                };
                                                var _0x986ax8 = _0x986ax3["feed"]["entry"][_0x986ax4]["title"]["$t"]
                                                        , _0x986ax9 = _0x986ax3["feed"]["entry"][_0x986ax4]["published"]["$t"];
                                                if ($("#b-author")["length"] > 0 && $("#b-author")["text"]()["match"]("false")) {
                                                        var _0x986axa = ""
                                                } else {
                                                        var _0x986axa = "<span class=\'r-author\'>" + _0x986ax3["feed"]["entry"]
                                                                [_0x986ax4]["author"][0]["name"]["$t"] + "</span>"
                                                };
                                                if ($(_0x986ax3["feed"]["entry"][_0x986ax4]["media$thumbnail"])["length"] > 0) {
                                                        var _0x986axb = _0x986ax3["feed"]["entry"][_0x986ax4]["media$thumbnail"]
                                                                ["url"]["replace"]("s72-c", "s200")
                                                } else {
                                                        var _0x986axb = alt_Img["indexOf"]("s1600-r") != -1 ? alt_Img["replace"]
                                                                ("s1600-r", "s200") : alt_Img
                                                };
                                                $(".related-posts")["append"](
                                                        "<div class=\'relate-p\'><h1 class=\'related-title\'>" +
                                                        _0x986ax8 + "</h1><a class=\'relate-Thumb\' href=\'" +
                                                        _0x986ax7 + "\'><img src=\'" + _0x986axb + "\' alt=\'" +
                                                        _0x986ax8 +
                                                        "\'/></a><div class=\'r-details\'><time class=\'r-date timeago\' datetime=\'" +
                                                        _0x986ax9 + "\'>" + _0x986ax9 + "</time>" + _0x986axa +
                                                        "</div></div>")
                                        }
                                }
                        });
                        $(document)["ajaxStop"](function () {
                                $(".related-posts")["owlCarousel"]({
                                        autoPlay: rel_autoplay
                                        , itemsDesktop: [5000, how_Many]
                                        , responsive: true
                                        , navigation: true
                                        , pagination: false
                                        , navigationText: ["?", "?"]
                                });
                                jQuery(".r-date.timeago")["timeago"]()
                        })
                }
        })
        /*]]>*/

