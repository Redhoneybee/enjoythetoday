(this.webpackJsonpenjoythetoday=this.webpackJsonpenjoythetoday||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"cat":"\uace0\uc591\uc774","dog":"\uac15\uc544\uc9c0","rabbit":"\ud1a0\ub07c","snake":"\ubc40","turtle":"\uac70\ubd81\uc774"}')},38:function(e){e.exports=JSON.parse('{"cat":{"0":"cat-1151519_640.jpg","1":"cat-2536662_640.jpg","2":"cat-323262_640.jpg","3":"cat-339400_640.jpg","4":"cat-3535404_640.jpg","5":"cat-4611189_640.jpg"},"rabbit":{"0":"rabbit-1149060_640.jpg","1":"rabbit-1845263_640.jpg","2":"rabbit-1882699_640.jpg","3":"rabbit-2174679_640.jpg","4":"rabbit-3204589_640.jpg","5":"rabbit-828994_640.jpg"},"snake":{"0":"snake-226553_640.jpg","1":"snake-3237_640.jpg","2":"snake-3295605_640.jpg","3":"snake-3979601_640.jpg","4":"snake-419043_640.jpg","5":"snake-653642_640.jpg"},"dog":{"0":"dog-1903313_640.jpg","1":"dog-2561134_640.jpg","2":"dog-2785074_640.jpg","3":"dog-2810484_640.jpg","4":"dog-4390885_640.jpg","5":"dog-5357794_640.jpg"},"turtle":{"0":"turtle-1661554_640.jpg","1":"turtle-1850190_640.jpg","2":"turtle-3315158_640.jpg","3":"turtle-3986922_640.jpg","4":"turtle-411853_640.jpg","5":"turtle-69600_640.jpg"}}')},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(24),r=n.n(a),s=n(18),i=n(2),j=n(26),o=n(6),b=n(35),d=n(36),l=function(){var e=Object(o.f)();return Object(i.jsx)("nav",{children:Object(i.jsx)(b.a,{className:"btn home",icon:d.a,onClick:function(){e.push("/")}})})},u=n(20),p=Object(u.b)({name:"user",initialState:"",reducers:{setUser:function(e,t){return t.payload}}}),O=p.actions.setUser,h=p,x=n.p+"static/media/game01.5b770aa0.jpg",g=function(){return Object(i.jsx)("img",{src:x,width:"240px",height:"240px"})},m=function(e){var t=e.userObj,n=Object(s.b)();return Object(c.useEffect)((function(){document.querySelector(".homeContainer").classList.add("visible")}),[]),Object(i.jsxs)("div",{className:"flex homeContainer",style:{marginTop:100},children:[Object(i.jsx)("div",{className:"namePlace",children:Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{className:"strong",children:t}),"\ub2d8 \uc5b4\uc11c\uc624\uc138\uc694."]})}),Object(i.jsx)("span",{id:"edit",className:"btn",onClick:function(){return n(O(""))},style:{marginTop:20},children:"\uc218\uc815\ud558\uae30"}),Object(i.jsx)("div",{class:"listPlace",children:Object(i.jsx)(j.b,{to:"game01",children:Object(i.jsx)(g,{})})})]})},f=n(12),v=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(s.b)();return Object(c.useEffect)((function(){document.querySelector(".nameForm").classList.add("visible")}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==n.length&&r(O(n))},className:"nameForm",children:[Object(i.jsx)("input",{type:"text",placeholder:"\ub108\uc758 \uc774\ub984\uc740?",required:!0,value:n,onChange:function(e){var t=e.target.value;a(t)},className:"formInput"}),Object(i.jsx)("input",{className:"formSubmit",type:"submit",value:"\uc2dc\uc791"})]})})},y=n(27);n(54),n(53);y.a.initializeApp({apiKey:"AIzaSyC2Xkmj4DZ_PaJxew5G0DyX5sgvYXJ-fFQ",authDomain:"enjoythetoday-ad23d.firebaseapp.com",projectId:"enjoythetoday-ad23d",storageBucket:"enjoythetoday-ad23d.appspot.com",messagingSenderId:"63282346666",appId:"1:63282346666:web:ab052f562f06c5eca3aed3",measurementId:"G-PEGRYK109L"});y.a.firestore();var _=y.a.storage(),k=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"gameTitle",children:Object(i.jsx)("span",{children:"\uc815\ud655\ud558\uace0 \ube60\ub974\uac8c"})}),Object(i.jsx)("div",{style:{backgroundColor:"white",borderRadius:20,color:"#f21170",maxWidth:280,marginTop:30},children:Object(i.jsxs)("div",{style:{padding:"10px 15px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)("span",{style:{marginBottom:0,fontWeight:"bold"},children:"\uac8c\uc784\uaddc\uce59"}),Object(i.jsxs)("div",{className:"gameRules",children:[Object(i.jsx)("h5",{children:"1. \uc0ac\uc9c4\uc744 \ubcf4\uace0 \uc815\ub2f5\uc744 \ube60\ub974\uac8c \ud074\ub9ad \ud574 \uc8fc\uc138\uc694."}),Object(i.jsx)("h5",{children:"2. \ube60\ub974\uac8c \ub204\ub97c\uc218\ub85d \ub192\uc740 \uc810\uc218\ub97c \uc5bb\uc2b5\ub2c8\ub2e4."}),Object(i.jsx)("h5",{children:"3. \ube60\ub974\uac8c \ub20c\ub7ec\ub3c4 \uc815\ub2f5\uc774 \uc544\ub2d0 \uacbd\uc6b0 0\uc810 \ucc98\ub9ac\ub429\ub2c8\ub2e4."}),Object(i.jsx)("h5",{children:"4. \uac8c\uc784\uc740 \ucd1d 10 \ub77c\uc6b4\ub4dc \uc9c4\ud589\ud569\ub2c8\ub2e4."})]})]})})]})},S=n(23),N=n.n(S),w=n(33),C=n(37),I=n(38),D=function(e){var t=e.accuracy,n=e.speed;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:"\uac8c\uc784 \uacb0\uacfc"})}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["\uc815\ud655\ub3c4 : ",t]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["\uc18d\ub3c4 : ",n]})}),Object(i.jsxs)("span",{children:["\ucd1d \uc810 : ",t+n]})]})},F=function(){var e=Object(c.useState)(1),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(f.a)(r,2),j=s[0],o=s[1],b=Object(c.useState)([]),d=Object(f.a)(b,2),l=d[0],u=d[1],p=Object(c.useState)(""),O=Object(f.a)(p,2),h=O[0],x=O[1],g=Object(c.useState)(!1),m=Object(f.a)(g,2),v=m[0],y=m[1],k=Object(c.useState)(0),S=Object(f.a)(k,2),F=S[0],M=S[1],L=Object(c.useState)(0),T=Object(f.a)(L,2),E=T[0],J=T[1],q=Object(c.useState)(0),R=Object(f.a)(q,2),B=R[0],P=R[1],W=_.ref(),A=["cat","dog","rabbit","turtle","snake"],G=A.length,U=function(e){for(;;){var t=Math.floor(Math.random()*(G-1))+1;if(e.indexOf(t)<=-1&&e.push(t),3===e.length)return e}},X=function(e){var t=Math.floor(5*Math.random()).toString();return I[e][t]},z=function(e){for(var t,n=e.length,c=0;c<n;++c){var a=Math.floor(Math.random()*(c+1)),r=(t=Array.from(e))[c];t[c]=t[a],t[a]=r}u(t)},K=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n,c,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Math.random()*(G-1))+1,n=U(n=[t]),u(n),z(n),x(c=A[t]),a=X(c),e.next=10,W.child("".concat(c,"/").concat(a)).getDownloadURL();case 10:return r=e.sent,o(r),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!1),e.next=3,K();case 3:t=e.sent,(n=new Image).src=t,n.onload=function(){y(!0),document.querySelector(".gameContainer").classList.add("visible"),P(new Date)};case 7:case"end":return e.stop()}}),e)}))),[n]);var Y=function(e){var t=e.target.name;h===t&&M(F+5);var c=(new Date-B)/1e3;c<.3?J(E+5):c>1.5?J(E+1):c>1?J(E+2):c>.7?J(E+3):c>=.3&&J(E+4),a(n+1)};return Object(i.jsx)(i.Fragment,{children:n<11?Object(i.jsx)(i.Fragment,{children:v?Object(i.jsxs)("div",{className:"gameBoard",style:{marginTop:50,backgroundColor:"white",padding:"20px 30px",borderRadius:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)("div",{className:"roundTitle",children:Object(i.jsxs)("h3",{children:["\ub77c\uc6b4\ub4dc ",n]})}),Object(i.jsx)("img",{src:j,width:"150px",height:"150px"}),l&&l.map((function(e){return Object(i.jsx)("button",{name:A[e],className:"btn",onClick:Y,children:C[A[e]]})}))]}):Object(i.jsx)("span",{children:"Loading..."})}):Object(i.jsx)(D,{accuracy:F,speed:E})})},M=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(f.a)(n,2),r=a[0],s=a[1],j=Object(o.f)();Object(c.useEffect)((function(){t||j.push("/"),document.querySelector(".gameContainer").classList.add("visible")}),[]);var b=function(e){var t=e.target.name;s(t)};return Object(i.jsx)("div",{className:"flex gameContainer",style:{maxWidth:310,marginTop:70},children:r?Object(i.jsx)(F,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{}),Object(i.jsx)("button",{id:"beginner",name:"beginner",onClick:b,className:"btn",children:"\ucd08\ubcf4\uc790 \ubaa8\ub4dc"}),Object(i.jsx)("button",{id:"expert",name:"expert",onClick:b,className:"btn",children:"\uc219\ub828\uc790 \ubaa8\ub4dc"})]})})},L=function(e){var t=e.userObj;return Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(o.c,{children:Object(i.jsx)("div",{style:{width:"100%",maxWidth:980,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:""!==t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(m,{userObj:t})}),Object(i.jsx)(o.a,{exact:!0,path:"/game01",children:Object(i.jsx)(M,{userObj:t})})]}):Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(v,{})})})})]})},T=function(){var e=Object(s.c)((function(e){return e.user}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(L,{userObj:e})})},E=n(16),J=Object(E.b)({user:h.reducer}),q=Object(u.a)({reducer:J});n(51);r.a.render(Object(i.jsx)(s.a,{store:q,children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.919eb1ab.chunk.js.map