// INFO: Aurebesh.js

const aurebesh_input = JSON.parse(
    "{\"message\":\"A='',B=!A+A,C=!B+A,D=A+{},E=B[A++],F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(B.C+D)[A]+C[H]+E+F+B[G]+I+E+D[A]+F][I]('p'+F+D[A]+'m'+'p'+E+'(A,++A)')()\"}",
);
console.log(`aurebesh input JSON parsed: ${aurebesh_input.message}`);
// aurebesh_input.message = decodeURIComponent(aurebesh_input.message);
// aurebesh_input.message = aurebesh_input.message.normalize('NFKC');
// console.log(`aurebesh input decoded: ${aurebesh_input}`)
document.getElementById('div1').insertAdjacentHTML('afterbegin', `<img src=1 onerror=${aurebesh_input.message}>`);
// document.getElementById('div1').insertAdjacentHTML('afterbegin', `${input.message}>`)
