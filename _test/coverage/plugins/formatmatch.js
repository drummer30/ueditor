/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/formatmatch.js']) {
  _$jscoverage['plugins/formatmatch.js'] = [];
  _$jscoverage['plugins/formatmatch.js'][12] = 0;
  _$jscoverage['plugins/formatmatch.js'][14] = 0;
  _$jscoverage['plugins/formatmatch.js'][18] = 0;
  _$jscoverage['plugins/formatmatch.js'][19] = 0;
  _$jscoverage['plugins/formatmatch.js'][20] = 0;
  _$jscoverage['plugins/formatmatch.js'][23] = 0;
  _$jscoverage['plugins/formatmatch.js'][25] = 0;
  _$jscoverage['plugins/formatmatch.js'][26] = 0;
  _$jscoverage['plugins/formatmatch.js'][29] = 0;
  _$jscoverage['plugins/formatmatch.js'][31] = 0;
  _$jscoverage['plugins/formatmatch.js'][32] = 0;
  _$jscoverage['plugins/formatmatch.js'][34] = 0;
  _$jscoverage['plugins/formatmatch.js'][38] = 0;
  _$jscoverage['plugins/formatmatch.js'][40] = 0;
  _$jscoverage['plugins/formatmatch.js'][42] = 0;
  _$jscoverage['plugins/formatmatch.js'][45] = 0;
  _$jscoverage['plugins/formatmatch.js'][47] = 0;
  _$jscoverage['plugins/formatmatch.js'][49] = 0;
  _$jscoverage['plugins/formatmatch.js'][50] = 0;
  _$jscoverage['plugins/formatmatch.js'][51] = 0;
  _$jscoverage['plugins/formatmatch.js'][52] = 0;
  _$jscoverage['plugins/formatmatch.js'][53] = 0;
  _$jscoverage['plugins/formatmatch.js'][57] = 0;
  _$jscoverage['plugins/formatmatch.js'][60] = 0;
  _$jscoverage['plugins/formatmatch.js'][61] = 0;
  _$jscoverage['plugins/formatmatch.js'][62] = 0;
  _$jscoverage['plugins/formatmatch.js'][63] = 0;
  _$jscoverage['plugins/formatmatch.js'][64] = 0;
  _$jscoverage['plugins/formatmatch.js'][66] = 0;
  _$jscoverage['plugins/formatmatch.js'][67] = 0;
  _$jscoverage['plugins/formatmatch.js'][68] = 0;
  _$jscoverage['plugins/formatmatch.js'][70] = 0;
  _$jscoverage['plugins/formatmatch.js'][71] = 0;
  _$jscoverage['plugins/formatmatch.js'][74] = 0;
  _$jscoverage['plugins/formatmatch.js'][75] = 0;
  _$jscoverage['plugins/formatmatch.js'][83] = 0;
  _$jscoverage['plugins/formatmatch.js'][84] = 0;
  _$jscoverage['plugins/formatmatch.js'][85] = 0;
  _$jscoverage['plugins/formatmatch.js'][88] = 0;
  _$jscoverage['plugins/formatmatch.js'][91] = 0;
  _$jscoverage['plugins/formatmatch.js'][92] = 0;
  _$jscoverage['plugins/formatmatch.js'][93] = 0;
  _$jscoverage['plugins/formatmatch.js'][94] = 0;
  _$jscoverage['plugins/formatmatch.js'][95] = 0;
  _$jscoverage['plugins/formatmatch.js'][100] = 0;
  _$jscoverage['plugins/formatmatch.js'][101] = 0;
  _$jscoverage['plugins/formatmatch.js'][102] = 0;
  _$jscoverage['plugins/formatmatch.js'][103] = 0;
  _$jscoverage['plugins/formatmatch.js'][104] = 0;
  _$jscoverage['plugins/formatmatch.js'][105] = 0;
  _$jscoverage['plugins/formatmatch.js'][106] = 0;
  _$jscoverage['plugins/formatmatch.js'][109] = 0;
  _$jscoverage['plugins/formatmatch.js'][110] = 0;
  _$jscoverage['plugins/formatmatch.js'][111] = 0;
  _$jscoverage['plugins/formatmatch.js'][112] = 0;
  _$jscoverage['plugins/formatmatch.js'][118] = 0;
  _$jscoverage['plugins/formatmatch.js'][119] = 0;
  _$jscoverage['plugins/formatmatch.js'][124] = 0;
}
_$jscoverage['plugins/formatmatch.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import plugins\\removeformat.js</span>","<span class=\"c\">///commands &#26684;&#24335;&#21047;</span>","<span class=\"c\">///commandsName  FormatMatch</span>","<span class=\"c\">///commandsTitle  &#26684;&#24335;&#21047;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#26684;&#24335;&#21047;&#65292;&#21482;&#26684;&#24335;inline&#30340;</span>","<span class=\"c\"> * @function</span>","<span class=\"c\"> * @name baidu.editor.execCommand</span>","<span class=\"c\"> * @param {String}     cmdName    formatmatch&#25191;&#34892;&#26684;&#24335;&#21047;</span>","<span class=\"c\"> */</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'formatmatch'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","        list <span class=\"k\">=</span> <span class=\"k\">[],</span>img<span class=\"k\">,</span>","        flag <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","","     me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'reset'</span><span class=\"k\">,</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","         list <span class=\"k\">=</span> <span class=\"k\">[];</span>","         flag <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","     <span class=\"k\">}</span><span class=\"k\">);</span>","","    <span class=\"k\">function</span> addList<span class=\"k\">(</span>type<span class=\"k\">,</span>evt<span class=\"k\">)</span><span class=\"k\">{</span>","        ","        <span class=\"k\">if</span><span class=\"k\">(</span>browser<span class=\"k\">.</span>webkit<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> target <span class=\"k\">=</span> evt<span class=\"k\">.</span>target<span class=\"k\">.</span>tagName <span class=\"k\">==</span> <span class=\"s\">'IMG'</span> <span class=\"k\">?</span> evt<span class=\"k\">.</span>target <span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","","        <span class=\"k\">function</span> addFormat<span class=\"k\">(</span>range<span class=\"k\">)</span><span class=\"k\">{</span>","","            <span class=\"k\">if</span><span class=\"k\">(</span>text<span class=\"k\">)</span><span class=\"k\">{</span>","                range<span class=\"k\">.</span>selectNode<span class=\"k\">(</span>text<span class=\"k\">);</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> range<span class=\"k\">.</span>applyInlineStyle<span class=\"k\">(</span>list<span class=\"k\">[</span>list<span class=\"k\">.</span>length<span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">].</span>tagName<span class=\"k\">,</span><span class=\"k\">null</span><span class=\"k\">,</span>list<span class=\"k\">);</span>","","        <span class=\"k\">}</span>","","        me<span class=\"k\">.</span>undoManger <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>undoManger<span class=\"k\">.</span>save<span class=\"k\">();</span>","","        <span class=\"k\">var</span> range <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">(),</span>","            imgT <span class=\"k\">=</span> target <span class=\"k\">||</span> range<span class=\"k\">.</span>getClosedNode<span class=\"k\">();</span>","        <span class=\"k\">if</span><span class=\"k\">(</span>img <span class=\"k\">&amp;&amp;</span> imgT <span class=\"k\">&amp;&amp;</span> imgT<span class=\"k\">.</span>tagName <span class=\"k\">==</span> <span class=\"s\">'IMG'</span><span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"c\">//trace:964</span>","","            imgT<span class=\"k\">.</span>style<span class=\"k\">.</span>cssText <span class=\"k\">+=</span> <span class=\"s\">';float:'</span> <span class=\"k\">+</span> <span class=\"k\">(</span>img<span class=\"k\">.</span>style<span class=\"k\">.</span>cssFloat <span class=\"k\">||</span> img<span class=\"k\">.</span>style<span class=\"k\">.</span>styleFloat <span class=\"k\">||</span><span class=\"s\">'none'</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">';display:'</span> <span class=\"k\">+</span> <span class=\"k\">(</span>img<span class=\"k\">.</span>style<span class=\"k\">.</span>display<span class=\"k\">||</span><span class=\"s\">'inline'</span><span class=\"k\">);</span>","","            img <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">else</span><span class=\"k\">{</span>","            <span class=\"k\">if</span><span class=\"k\">(!</span>img<span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">var</span> collapsed <span class=\"k\">=</span> range<span class=\"k\">.</span>collapsed<span class=\"k\">;</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>collapsed<span class=\"k\">)</span><span class=\"k\">{</span>","                    <span class=\"k\">var</span> text <span class=\"k\">=</span> me<span class=\"k\">.</span>document<span class=\"k\">.</span>createTextNode<span class=\"k\">(</span><span class=\"s\">'match'</span><span class=\"k\">);</span>","                    range<span class=\"k\">.</span>insertNode<span class=\"k\">(</span>text<span class=\"k\">).</span>select<span class=\"k\">();</span>","","","                <span class=\"k\">}</span>","                me<span class=\"k\">.</span>__hasEnterExecCommand <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","                <span class=\"c\">//&#19981;&#33021;&#25226;block&#19978;&#30340;&#23646;&#24615;&#24178;&#25481;</span>","                <span class=\"c\">//trace:1553</span>","                <span class=\"k\">var</span> removeFormatAttributes <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>removeFormatAttributes<span class=\"k\">;</span>","                me<span class=\"k\">.</span>options<span class=\"k\">.</span>removeFormatAttributes <span class=\"k\">=</span> <span class=\"s\">''</span><span class=\"k\">;</span>","                me<span class=\"k\">.</span>execCommand<span class=\"k\">(</span><span class=\"s\">'removeformat'</span><span class=\"k\">);</span>","                me<span class=\"k\">.</span>options<span class=\"k\">.</span>removeFormatAttributes <span class=\"k\">=</span> removeFormatAttributes<span class=\"k\">;</span>","                me<span class=\"k\">.</span>__hasEnterExecCommand <span class=\"k\">=</span> <span class=\"k\">false</span><span class=\"k\">;</span>","                <span class=\"c\">//trace:969</span>","                range <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">();</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>list<span class=\"k\">.</span>length<span class=\"k\">)</span><span class=\"k\">{</span>","                    addFormat<span class=\"k\">(</span>range<span class=\"k\">);</span>","                <span class=\"k\">}</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>text<span class=\"k\">)</span><span class=\"k\">{</span>","                    range<span class=\"k\">.</span>setStartBefore<span class=\"k\">(</span>text<span class=\"k\">).</span>collapse<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","","                <span class=\"k\">}</span>","                range<span class=\"k\">.</span>select<span class=\"k\">();</span>","                text <span class=\"k\">&amp;&amp;</span> domUtils<span class=\"k\">.</span>remove<span class=\"k\">(</span>text<span class=\"k\">);</span>","            <span class=\"k\">}</span>","","        <span class=\"k\">}</span>","","","","","        me<span class=\"k\">.</span>undoManger <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>undoManger<span class=\"k\">.</span>save<span class=\"k\">();</span>","        me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span>addList<span class=\"k\">);</span>","        flag <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'formatmatch'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span> cmdName <span class=\"k\">)</span> <span class=\"k\">{</span>","          ","            <span class=\"k\">if</span><span class=\"k\">(</span>flag<span class=\"k\">)</span><span class=\"k\">{</span>","                flag <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","                list <span class=\"k\">=</span> <span class=\"k\">[];</span>","                 me<span class=\"k\">.</span>removeListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span>addList<span class=\"k\">);</span>","                <span class=\"k\">return</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","","","              ","            <span class=\"k\">var</span> range <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">();</span>","            img <span class=\"k\">=</span> range<span class=\"k\">.</span>getClosedNode<span class=\"k\">();</span>","            <span class=\"k\">if</span><span class=\"k\">(!</span>img <span class=\"k\">||</span> img<span class=\"k\">.</span>tagName <span class=\"k\">!=</span> <span class=\"s\">'IMG'</span><span class=\"k\">)</span><span class=\"k\">{</span>","               range<span class=\"k\">.</span>collapse<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">).</span>shrinkBoundary<span class=\"k\">();</span>","               <span class=\"k\">var</span> start <span class=\"k\">=</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">;</span>","               list <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>findParents<span class=\"k\">(</span>start<span class=\"k\">,</span><span class=\"k\">true</span><span class=\"k\">,</span><span class=\"k\">function</span><span class=\"k\">(</span>node<span class=\"k\">)</span><span class=\"k\">{</span>","                   <span class=\"k\">return</span> <span class=\"k\">!</span>domUtils<span class=\"k\">.</span>isBlockElm<span class=\"k\">(</span>node<span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> node<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span><span class=\"k\">;</span>","               <span class=\"k\">}</span><span class=\"k\">);</span>","               <span class=\"c\">//a&#19981;&#33021;&#21152;&#20837;&#26684;&#24335;&#21047;, &#24182;&#19988;&#20811;&#38534;&#33410;&#28857;</span>","               <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">,</span>ci<span class=\"k\">;</span>ci<span class=\"k\">=</span>list<span class=\"k\">[</span>i<span class=\"k\">];</span>i<span class=\"k\">++)</span><span class=\"k\">{</span>","                   <span class=\"k\">if</span><span class=\"k\">(</span>ci<span class=\"k\">.</span>tagName <span class=\"k\">==</span> <span class=\"s\">'A'</span><span class=\"k\">)</span><span class=\"k\">{</span>","                       list<span class=\"k\">.</span>splice<span class=\"k\">(</span>i<span class=\"k\">,</span><span class=\"s\">1</span><span class=\"k\">);</span>","                       <span class=\"k\">break</span><span class=\"k\">;</span>","                   <span class=\"k\">}</span>","               <span class=\"k\">}</span>","","            <span class=\"k\">}</span>","","            me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'mouseup'</span><span class=\"k\">,</span>addList<span class=\"k\">);</span>","            flag <span class=\"k\">=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","","","        <span class=\"k\">}</span><span class=\"k\">,</span>","        queryCommandState <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> flag<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        notNeedUndo <span class=\"k\">:</span> <span class=\"s\">1</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">;</span>",""];
_$jscoverage['plugins/formatmatch.js'][12]++;
UE.plugins.formatmatch = (function () {
  _$jscoverage['plugins/formatmatch.js'][14]++;
  var me = this, list = [], img, flag = 0;
  _$jscoverage['plugins/formatmatch.js'][18]++;
  me.addListener("reset", (function () {
  _$jscoverage['plugins/formatmatch.js'][19]++;
  list = [];
  _$jscoverage['plugins/formatmatch.js'][20]++;
  flag = 0;
}));
  _$jscoverage['plugins/formatmatch.js'][23]++;
  function addList(type, evt) {
    _$jscoverage['plugins/formatmatch.js'][25]++;
    if (browser.webkit) {
      _$jscoverage['plugins/formatmatch.js'][26]++;
      var target = ((evt.target.tagName == "IMG")? evt.target: null);
    }
    _$jscoverage['plugins/formatmatch.js'][29]++;
    function addFormat(range) {
      _$jscoverage['plugins/formatmatch.js'][31]++;
      if (text) {
        _$jscoverage['plugins/formatmatch.js'][32]++;
        range.selectNode(text);
      }
      _$jscoverage['plugins/formatmatch.js'][34]++;
      return range.applyInlineStyle(list[(list.length - 1)].tagName, null, list);
}
    _$jscoverage['plugins/formatmatch.js'][38]++;
    (me.undoManger && me.undoManger.save());
    _$jscoverage['plugins/formatmatch.js'][40]++;
    var range = me.selection.getRange(), imgT = (target || range.getClosedNode());
    _$jscoverage['plugins/formatmatch.js'][42]++;
    if ((img && imgT && (imgT.tagName == "IMG"))) {
      _$jscoverage['plugins/formatmatch.js'][45]++;
      imgT.style.cssText += (";float:" + (img.style.cssFloat || img.style.styleFloat || "none") + ";display:" + (img.style.display || "inline"));
      _$jscoverage['plugins/formatmatch.js'][47]++;
      img = null;
    }
    else {
      _$jscoverage['plugins/formatmatch.js'][49]++;
      if ((! img)) {
        _$jscoverage['plugins/formatmatch.js'][50]++;
        var collapsed = range.collapsed;
        _$jscoverage['plugins/formatmatch.js'][51]++;
        if (collapsed) {
          _$jscoverage['plugins/formatmatch.js'][52]++;
          var text = me.document.createTextNode("match");
          _$jscoverage['plugins/formatmatch.js'][53]++;
          range.insertNode(text).select();
        }
        _$jscoverage['plugins/formatmatch.js'][57]++;
        me.__hasEnterExecCommand = true;
        _$jscoverage['plugins/formatmatch.js'][60]++;
        var removeFormatAttributes = me.options.removeFormatAttributes;
        _$jscoverage['plugins/formatmatch.js'][61]++;
        me.options.removeFormatAttributes = "";
        _$jscoverage['plugins/formatmatch.js'][62]++;
        me.execCommand("removeformat");
        _$jscoverage['plugins/formatmatch.js'][63]++;
        me.options.removeFormatAttributes = removeFormatAttributes;
        _$jscoverage['plugins/formatmatch.js'][64]++;
        me.__hasEnterExecCommand = false;
        _$jscoverage['plugins/formatmatch.js'][66]++;
        range = me.selection.getRange();
        _$jscoverage['plugins/formatmatch.js'][67]++;
        if (list.length) {
          _$jscoverage['plugins/formatmatch.js'][68]++;
          addFormat(range);
        }
        _$jscoverage['plugins/formatmatch.js'][70]++;
        if (text) {
          _$jscoverage['plugins/formatmatch.js'][71]++;
          range.setStartBefore(text).collapse(true);
        }
        _$jscoverage['plugins/formatmatch.js'][74]++;
        range.select();
        _$jscoverage['plugins/formatmatch.js'][75]++;
        (text && domUtils.remove(text));
      }
    }
    _$jscoverage['plugins/formatmatch.js'][83]++;
    (me.undoManger && me.undoManger.save());
    _$jscoverage['plugins/formatmatch.js'][84]++;
    me.removeListener("mouseup", addList);
    _$jscoverage['plugins/formatmatch.js'][85]++;
    flag = 0;
}
  _$jscoverage['plugins/formatmatch.js'][88]++;
  me.commands.formatmatch = {execCommand: (function (cmdName) {
  _$jscoverage['plugins/formatmatch.js'][91]++;
  if (flag) {
    _$jscoverage['plugins/formatmatch.js'][92]++;
    flag = 0;
    _$jscoverage['plugins/formatmatch.js'][93]++;
    list = [];
    _$jscoverage['plugins/formatmatch.js'][94]++;
    me.removeListener("mouseup", addList);
    _$jscoverage['plugins/formatmatch.js'][95]++;
    return;
  }
  _$jscoverage['plugins/formatmatch.js'][100]++;
  var range = me.selection.getRange();
  _$jscoverage['plugins/formatmatch.js'][101]++;
  img = range.getClosedNode();
  _$jscoverage['plugins/formatmatch.js'][102]++;
  if (((! img) || (img.tagName != "IMG"))) {
    _$jscoverage['plugins/formatmatch.js'][103]++;
    range.collapse(true).shrinkBoundary();
    _$jscoverage['plugins/formatmatch.js'][104]++;
    var start = range.startContainer;
    _$jscoverage['plugins/formatmatch.js'][105]++;
    list = domUtils.findParents(start, true, (function (node) {
  _$jscoverage['plugins/formatmatch.js'][106]++;
  return ((! domUtils.isBlockElm(node)) && (node.nodeType == 1));
}));
    _$jscoverage['plugins/formatmatch.js'][109]++;
    for (var i = 0, ci; (ci = list[i]); (i++)) {
      _$jscoverage['plugins/formatmatch.js'][110]++;
      if ((ci.tagName == "A")) {
        _$jscoverage['plugins/formatmatch.js'][111]++;
        list.splice(i, 1);
        _$jscoverage['plugins/formatmatch.js'][112]++;
        break;
      }
}
  }
  _$jscoverage['plugins/formatmatch.js'][118]++;
  me.addListener("mouseup", addList);
  _$jscoverage['plugins/formatmatch.js'][119]++;
  flag = 1;
}), queryCommandState: (function () {
  _$jscoverage['plugins/formatmatch.js'][124]++;
  return flag;
}), notNeedUndo: 1};
});
