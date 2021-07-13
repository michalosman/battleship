(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,s,d,h,u,l,b,f,m,j,p,g,O,v,y,x,k,w,S,C,z,H,P=t(1),M=t.n(P),A=t(11),G=t.n(A),F=t(3),E=t(2),R=t(15),B=t(0),L=E.d.footer(r||(r=Object(F.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: ",";\n  font-size: 2.4rem;\n"])),(function(n){return n.theme.padding.sm})),U=E.d.a(i||(i=Object(F.a)(["\n  display: flex;\n  margin-left: 1rem;\n  color: ",";\n  transition: transform 0.15s ease-in-out;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"])),(function(n){return n.theme.colors.dark.primary})),T=function(){return Object(B.jsxs)(L,{children:["Copyright \xa9 2021 michalosman",Object(B.jsx)(U,{href:"https://github.com/michalosman",target:"_blank",rel:"noopener",children:Object(B.jsx)(R.a,{})})]})},V=E.d.header(o||(o=Object(F.a)(["\n  padding: ",";\n  font-family: 'Big Shoulders Stencil Text', cursive;\n  font-size: 12rem;\n  font-weight: 900;\n  letter-spacing: 1rem;\n  line-height: 1;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    font-size: 7rem;\n  }\n"])),(function(n){return n.theme.padding.lg})),I=function(){return Object(B.jsx)(V,{children:"BATTLESHIP"})},J=t(4),D=t(5),W=t(6),Y=function(){function n(e){Object(D.a)(this,n),this.length=void 0,this.hits=void 0,this.length=e,this.hits=[]}return Object(W.a)(n,[{key:"hit",value:function(n){this.hits.includes(n)||n<0||n>=this.length||this.hits.push(n)}},{key:"isSunk",value:function(){return this.hits.length===this.length}}]),n}(),_=10,q=function(){function n(){Object(D.a)(this,n),this.board=void 0,this.missedShots=void 0,this.board=[],this.missedShots=[],this.initialize()}return Object(W.a)(n,[{key:"initialize",value:function(){for(var n=0;n<_;n++){this.board[n]=[],this.missedShots[n]=[];for(var e=0;e<_;e++)this.board[n][e]=null,this.missedShots[n][e]=!1}}},{key:"placeShip",value:function(n,e,t,r){if(!this.isPlacementPossible(n,e,t,r))return!1;if(r)for(var i=0;i<n.length;i++)this.board[e+i][t]=n;else for(var o=0;o<n.length;o++)this.board[e][t+o]=n;return!0}},{key:"placeShipsRandomly",value:function(){if(this.isEmpty()){var n=[],e=new Y(5),t=new Y(4),r=new Y(3),i=new Y(3),o=new Y(2);n.push(e,t,r,i,o);for(var a=0;a<5;){var c=Math.floor(10*Math.random()),s=Math.floor(10*Math.random()),d=1===Math.floor(2*Math.random());this.placeShip(n[a],c,s,d)&&a++}}}},{key:"isPlacementPossible",value:function(n,e,t,r){if(e<0||e>9||t<0||t>9)return!1;if(r){if(e+n.length>_)return!1}else if(t+n.length>_)return!1;if(r){for(var i=0;i<n.length;i++)if(this.board[e+i][t])return!1}else for(var o=0;o<n.length;o++)if(this.board[e][t+o])return!1;if(r){for(var a=0;a<n.length;a++)for(var c=-1;c<=1;c++)for(var s=-1;s<=1;s++)if(!(e+c+a<0||e+c+a>=_||t+s<0||t+s>=_)&&this.board[e+c+a][t+s])return!1}else for(var d=0;d<n.length;d++)for(var h=-1;h<=1;h++)for(var u=-1;u<=1;u++)if(!(e+h<0||e+h>=_||t+u+d<0||t+u+d>=_)&&this.board[e+h][t+u+d])return!1;return!0}},{key:"receiveAttack",value:function(n,e){if(n<0||n>=_||e<0||e>=_)return!1;if(this.board[n][e]){var t=0;if(e>0&&this.board[n][e-1])for(var r=1;e-r>=0&&this.board[n][e-r];)t++,r++;else if(n>0&&this.board[n-1][e])for(var i=1;n-i>=0&&this.board[n-i][e];)t++,i++;return this.board[n][e].hit(t),!0}return this.missedShots[n][e]=!0,!1}},{key:"isGameOver",value:function(){for(var n=!0,e=0;e<_;e++)for(var t=0;t<_;t++)if(this.board[e][t]&&(n=!1,!this.board[e][t].isSunk()))return!1;return!n}},{key:"isEmpty",value:function(){for(var n=0;n<_;n++)for(var e=0;e<_;e++)if(null!==this.board[n][e])return!1;return!0}},{key:"getEmptyFieldsAmount",value:function(){for(var n=0,e=0;e<_;e++)for(var t=0;t<_;t++)null===this.board[e][t]&&n++;return n}}]),n}(),K=function(){function n(e){Object(D.a)(this,n),this.name=void 0,this.alreadyHitCoords=void 0,this.name=e,this.alreadyHitCoords=[]}return Object(W.a)(n,[{key:"attack",value:function(n,e,t){this.hasAlreadyHit(n,e)||(this.alreadyHitCoords.push([n,e]),t.receiveAttack(n,e))}},{key:"randomAttack",value:function(n){if(100!==this.alreadyHitCoords.length){for(var e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());this.hasAlreadyHit(e,t);)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());this.alreadyHitCoords.push([e,t]),n.receiveAttack(e,t)}}},{key:"hasAlreadyHit",value:function(n,e){for(var t=0;t<this.alreadyHitCoords.length;t++)if(this.alreadyHitCoords[t][0]===n&&this.alreadyHitCoords[t][1]===e)return!0;return!1}}]),n}(),N=t(27),Q=E.d.div(a||(a=Object(F.a)(["\n  display: grid;\n  width: 40rem;\n  height: 40rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.dark.primary})),X=E.d.div(c||(c=Object(F.a)(["\n  border: 1px solid ",";\n\n  ","\n\n  ","\n  \n  ","\n\n  ","\n"])),(function(n){return n.theme.colors.dark.primary}),(function(n){return"default"===n.status&&Object(E.c)(s||(s=Object(F.a)(["\n      background-color: ",";\n\n      ","\n    "])),(function(n){return n.theme.colors.light.primary}),(function(n){return"Computer"===n.owner.name&&Object(E.c)(d||(d=Object(F.a)(["\n          cursor: pointer;\n\n          &:hover {\n            background-color: ",";\n          }\n        "])),(function(n){return n.theme.colors.light.secondary}))}))}),(function(n){return"ship"===n.status&&Object(E.c)(h||(h=Object(F.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.colors.dark.secondary}))}),(function(n){return"missed"===n.status&&Object(E.c)(u||(u=Object(F.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.colors.green}))}),(function(n){return"hit"===n.status&&Object(E.c)(l||(l=Object(F.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.colors.red}))})),Z=function(n){var e=n.gameboard,t=n.owner,r=n.enemy,i=n.onFieldClick;return Object(B.jsx)(Q,{children:function(){for(var n=[],o=function(o){for(var a=function(a){var c="default";e.board[o][a]?("Computer"!==t.name&&(c="ship"),r.hasAlreadyHit(o,a)&&(c="hit")):e.missedShots[o][a]&&(c="missed");var s=Object(B.jsx)(X,{});s="Computer"===t.name?Object(B.jsx)(X,{status:c,owner:t,onClick:function(){return i(o,a)}},Object(N.a)()):Object(B.jsx)(X,{status:c,owner:t},Object(N.a)()),n.push(s)},c=0;c<e.board[o].length;c++)a(c)},a=0;a<e.board.length;a++)o(a);return n}()})},$=E.d.button(b||(b=Object(F.a)(["\n  padding: "," ",";\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  transition: transform 0.1s ease-in-out;\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.padding.sm}),(function(n){return n.theme.padding.md}),(function(n){return n.theme.borderRadius.md}),(function(n){return n.theme.colors.dark.primary}),(function(n){return n.theme.colors.light.primary})),nn=function(n){var e=n.content,t=n.onClick;return Object(B.jsx)($,{onClick:t,children:e})},en=E.d.div(f||(f=Object(F.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"]))),tn=E.d.div(m||(m=Object(F.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 500px;\n  height: 300px;\n  background-color: ",";\n  z-index: 2;\n  padding: ",";\n  border-radius: ","; ;\n"])),(function(n){return n.theme.colors.light.primary}),(function(n){return n.theme.padding.md}),(function(n){return n.theme.borderRadius.md})),rn=E.d.div(j||(j=Object(F.a)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.6;\n"]))),on=function(n){var e=n.message,t=n.resetGame;return Object(B.jsxs)(en,{children:[Object(B.jsxs)(tn,{children:[Object(B.jsx)("p",{children:e}),Object(B.jsx)(nn,{content:"Play again",onClick:t})]}),Object(B.jsx)(rn,{})]})},an=E.d.div(p||(p=Object(F.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 3rem;\n"]))),cn=E.d.div(g||(g=Object(F.a)(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 50rem;\n  height: 80rem;\n  padding: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.padding.md}),(function(n){return n.theme.colors.light.secondary})),sn=E.d.div(O||(O=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(10, 4rem);\n  grid-template-rows: repeat(10, 4rem);\n  width: 40.2rem;\n  height: 40.2rem;\n  border: 0.1rem solid ",";\n"])),(function(n){return n.theme.colors.dark.primary})),dn=E.d.div(v||(v=Object(F.a)(["\n  border: 0.1rem solid ",";\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.theme.colors.dark.primary}),(function(n){return n.isFilled&&Object(E.c)(y||(y=Object(F.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.colors.dark.secondary}))})),hn=E.d.div(x||(x=Object(F.a)(["\n  position: relative;\n  height: 3.8rem;\n  width: 3.8rem;\n\n  &:hover {\n    background-color: ",";\n\n    ","\n\n    ","\n  }\n"])),(function(n){return n.theme.colors.green}),(function(n){var e=n.isVertical,t=n.shipLength;return e&&Object(E.c)(k||(k=Object(F.a)(["\n        height: calc(3.8rem + 4rem * ",");\n      "])),t-1)}),(function(n){var e=n.isVertical,t=n.shipLength;return!e&&Object(E.c)(w||(w=Object(F.a)(["\n        width: calc(3.8rem + 4rem * ","); ;\n      "])),t-1)})),un=E.d.div(S||(S=Object(F.a)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.6;\n"]))),ln=function(n){var e=n.gameboard,t=n.setUserGameboard,r=n.setHasGameStarted,i=[new Y(5),new Y(4),new Y(3),new Y(3),new Y(2)],o=["Carrier","Battleship","Destroyer","Submarine","Patrol Boat"],a=Object(P.useState)(0),c=Object(J.a)(a,2),s=c[0],d=c[1],h=Object(P.useState)(o[0]),u=Object(J.a)(h,2),l=u[0],b=u[1],f=Object(P.useState)(i[0]),m=Object(J.a)(f,2),j=m[0],p=m[1],g=Object(P.useState)(!1),O=Object(J.a)(g,2),v=O[0],y=O[1];return Object(B.jsxs)(an,{children:[Object(B.jsxs)(cn,{children:[Object(B.jsx)("p",{children:Object(B.jsx)("strong",{children:"Welcome to battleship game"})}),Object(B.jsxs)("p",{children:["Place your ",Object(B.jsx)("u",{children:l})]}),Object(B.jsx)(nn,{content:"Rotate",onClick:function(){y(!v)}}),Object(B.jsx)(sn,{children:function(){for(var n=[],a=function(a){for(var c=function(c){n.push(Object(B.jsx)(dn,{isFilled:!!e.board[a][c],onClick:function(){return function(n,a){var c=Object.assign(Object.create(Object.getPrototypeOf(e)),e);c.isPlacementPossible(j,n,a,v)&&(c.placeShip(j,n,a,v),t(c),d(s+1),p(i[s+1]),b(o[s+1]),s>3&&r(!0))}(a,c)},children:Object(B.jsx)(hn,{shipLength:j.length,isVertical:v})},Object(N.a)()))},h=0;h<e.board[a].length;h++)c(h)},c=0;c<e.board.length;c++)a(c);return n}()})]}),Object(B.jsx)(un,{})]})},bn=E.d.div(C||(C=Object(F.a)(["\n  font-size: 5rem;\n"]))),fn=E.d.div(z||(z=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),mn=function(){var n=Object(P.useState)(new K("User")),e=Object(J.a)(n,2),t=e[0],r=e[1],i=Object(P.useState)(new q),o=Object(J.a)(i,2),a=o[0],c=o[1],s=Object(P.useState)(new K("Computer")),d=Object(J.a)(s,2),h=d[0],u=d[1],l=Object(P.useState)(new q),b=Object(J.a)(l,2),f=b[0],m=b[1],j=Object(P.useState)(!1),p=Object(J.a)(j,2),g=p[0],O=p[1],v=Object(P.useState)(!1),y=Object(J.a)(v,2),x=y[0],k=y[1],w=Object(P.useState)(""),S=Object(J.a)(w,2),C=S[0],z=S[1];Object(P.useEffect)((function(){H()}),[]);var H=function(){var n=new q;n.placeShipsRandomly(),m(n)};return Object(B.jsxs)(bn,{children:[g?"":Object(B.jsx)(ln,{gameboard:a,setUserGameboard:c,setHasGameStarted:O}),x?Object(B.jsx)(on,{message:C,resetGame:function(){r(new K("User")),c(new q),u(new K("Computer")),H(),O(!1),k(!1)}}):"",Object(B.jsxs)(fn,{children:[Object(B.jsx)(Z,{gameboard:a,owner:t,enemy:h}),Object(B.jsx)(Z,{gameboard:f,owner:h,enemy:t,onFieldClick:function(n,e){if(!t.hasAlreadyHit(n,e)){var i=Object.assign(Object.create(Object.getPrototypeOf(t)),t),o=Object.assign(Object.create(Object.getPrototypeOf(h)),h),s=Object.assign(Object.create(Object.getPrototypeOf(a)),a),d=Object.assign(Object.create(Object.getPrototypeOf(f)),f);return i.attack(n,e,d),r(i),m(d),f.isGameOver()?(z("You won"),void k(!0)):(o.randomAttack(s),u(o),c(s),a.isGameOver()?(z("Computer won"),void k(!0)):void 0)}}})]})]})},jn=E.d.main(H||(H=Object(F.a)(["\n  padding: ",";\n"])),(function(n){return n.theme.padding.lg})),pn=function(){return Object(B.jsx)(jn,{children:Object(B.jsx)(mn,{})})};var gn,On=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(I,{}),Object(B.jsx)(pn,{}),Object(B.jsx)(T,{})]})},vn={colors:{light:{primary:"#eee",secondary:"#ddd"},dark:{primary:"#222",secondary:"#444"},red:"#ff8585",green:"#85ffb3"},padding:{sm:"1rem",md:"2rem",lg:"4rem"},width:{sm:"500px",md:"1000px",lg:"1500px"},borderRadius:{sm:"5px",md:"10px",lg:"20px"}},yn=E.b(gn||(gn=Object(F.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n    line-height: 1.6;\n    /* Footer support */\n    position: relative;\n    min-height: 100%;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.6rem;\n    background-color: ",";\n    color: ",";\n    /* Footer support */\n    margin-bottom: 5.2rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    line-height: 1.2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n  }\n\n  button,\n  input,\n  textarea {\n    border: none;\n    outline: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  @media (max-width: 1600px) {\n    html {\n      font-size: 55%;\n    }\n  }\n\n  @media (max-width: 1400px) {\n    html {\n      font-size: 45%;\n    }\n  }\n"])),(function(n){return n.theme.colors.light.primary}),(function(n){return n.theme.colors.dark.primary}));G.a.render(Object(B.jsx)(M.a.StrictMode,{children:Object(B.jsxs)(E.a,{theme:vn,children:[Object(B.jsx)(yn,{}),Object(B.jsx)(On,{})]})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f12d6c5b.chunk.js.map