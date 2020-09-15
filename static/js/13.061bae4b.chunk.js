(this.webpackJsonpr8cs=this.webpackJsonpr8cs||[]).push([[13],{199:function(e,t,a){"use strict";var n=a(206),i=a.n(n);t.a=i.a.create({baseURL:"https://cloud1.r8way.moph.go.th:3099/api",headers:{"Content-type":"application/json"}})},209:function(e,t,a){"use strict";var n=a(199);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.id?{Authorization:e.id}:{}}t.a={getAll:function(e,t){return n.a.get("/"+t,{headers:i(),params:e})},getCount:function(e,t){return console.log(t),console.log(e),n.a.get("/"+t+"/count",{headers:i(),params:e})},get:function(e,t){return n.a.get("/"+t+"/${id}",{headers:i()})},create:function(e,t){return n.a.post("/"+t,e,{headers:i()})},update:function(e,t,a){return n.a.put("/"+a+"/"+e,t,{headers:i()})},remove:function(e,t){return n.a.delete("/"+t+"/"+e,{headers:i()})},removeAll:function(e){return n.a.delete("/"+e,{headers:i()})},findByTitle:function(e,t){return n.a.get("/"+t+"?filter[where][title][like]=${title}",{headers:i()})}}},220:function(e,t,a){"use strict";var n={patients:{icon:"\ud83d\udc6a",title:"Child and Family",field:{cid:{type:"text",icon:"\ud83d\udcb3",show:"CID",validate:"STRING",table:!1,create:!1,option:[],edit:!1,default:""},pname:{type:"text",icon:"\ud83d\udcdb",show:"Pre Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},fname:{type:"text",icon:"\ud83d\udcdb",show:"First Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},lname:{type:"text",icon:"\ud83d\udcdb",show:"Last Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},sex:{type:"text",icon:"\ud83d\udc6b",show:"Sex",validate:"STRING",table:!0,create:!1,option:[],edit:!0,default:""},birthday:{type:"text",icon:"\ud83c\udf82",show:"Birthday (Age Years)",validate:"DATE",table:!0,create:!0,option:[],edit:!0,default:Date()},height:{type:"number",icon:"\ud83d\udccf",show:"Height (cm)",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:0},pttype:{type:"text",icon:"\ud83d\udcb0",show:"Insurance",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""}},relateTo:{}},opdscreens:{icon:"\ud83d\udc6a",title:"OPD Screen",field:{hn:{type:"text",icon:"\ud83d\udcb3",show:"Hospital Number",validate:"STRING",table:!0,create:!1,option:[],edit:!0,default:""},hcode:{type:"text",icon:"\ud83d\udcdb",show:"Hospital Code",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},cc:{type:"text",icon:"\ud83d\udcdb",show:"Chief Complaint",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},bpd:{type:"number",icon:"\ud83d\udcdb",show:"Diastolic BP",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0},bps:{type:"number",icon:"\ud83d\udc6b",show:"Systolic BP",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0},pulse:{type:"number",icon:"\ud83c\udf82",show:"Pulse",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0},temperature:{type:"number",icon:"\ud83d\udccf",show:"Temperature",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0}},relateTo:{}},persons:{icon:"\ud83d\udc6a",title:"Persons",field:{cid:{type:"text",icon:"\ud83d\udcb3",show:"CID",validate:"STRING",table:!1,create:!1,option:[],edit:!1,default:""},pname:{type:"text",icon:"\ud83d\udcdb",show:"Pre Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},fname:{type:"text",icon:"\ud83d\udcdb",show:"First Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},lname:{type:"text",icon:"\ud83d\udcdb",show:"Last Name",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},sex:{type:"text",icon:"\ud83d\udc6b",show:"Sex",validate:"STRING",table:!0,create:!1,option:[],edit:!0,default:""}},relateTo:{}},clinicmembers:{icon:"\ud83d\udc6a",title:"Clinic membrs",field:{hn:{type:"text",icon:"\ud83d\udcb3",show:"Hospital Number",validate:"STRING",table:!0,create:!1,option:[],edit:!0,default:""},hcode:{type:"text",icon:"\ud83d\udcdb",show:"Hospital Code",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},clinic:{type:"text",icon:"\ud83d\udcdb",show:"Hospital Code",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},modify_staff:{type:"text",icon:"\ud83d\udcdb",show:"Modified Staff",validate:"STRING",table:!0,create:!0,option:[],edit:!0,default:""},last_bp_bps_value:{type:"text",icon:"\ud83d\udcdb",show:"last Systolic BP",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0},last_bp_bpd_value:{type:"text",icon:"\ud83d\udcdb",show:"last diastolic BP",validate:"NUMBER",table:!0,create:!0,option:[],edit:!0,default:0}},relateTo:{}}};t.a=n},623:function(e,t,a){"use strict";a.r(t);var n=a(31),i=a(0),o=a.n(i),l=a(209),r=a(174),c=a(127),s=a(189),d=a(59),u=a(288),p=a(289),m=a(290),f=a(291),h=a(292),b=a(612),g=a(613),y=a(614),v=a(615),E=a(395),w=a(188),x=a(619),N=a(165),T=a(27),S=a(58),C=a(187),I=(a(103),a(37)),j=a(219),O=a(618),R=a(587),k=a(220),G=function e(t,a,n,i){var c=function(e){var n=e.target,i=n.name,o=n.value;a(Object(j.a)(Object(j.a)({},t),{},Object(I.a)({},i,o))),console.log(t,"currenttu")};return o.a.createElement("div",null,Object.keys(k.a[n].field).map((function(a,l){var d=k.a[n].field[a];if(!0===d.edit)return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{container:!0,spacing:2},o.a.createElement(r.a,{item:!0,xs:12,sm:12},"object"===typeof t[a]?e(t[a]):i&&o.a.createElement(O.a,{key:a,label:d.show,name:a,fullWidth:!0,defaultValue:t[a],variant:"outlined",onChange:c,InputProps:{startAdornment:o.a.createElement(R.a,{position:"start"},o.a.createElement(s.a,null," ",d.icon))}}))))})),i&&o.a.createElement("div",null,o.a.createElement(E.a,{color:"primary",onClick:function(){l.a.remove(t.id).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))}},"Delete"),o.a.createElement(E.a,{color:"primary",type:"submit",className:"badge badge-success",onClick:function(){l.a.update(t.id,t).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))}},"Update")))},P=function(e,t){return o.a.createElement("div",null,Object.keys(k.a[t].field).map((function(a,n){var i=k.a[t].field[a];if(!0===i.edit)return o.a.createElement(r.a,{item:!0,xs:12,sm:12,style:{margin:"2px"}},o.a.createElement(O.a,{key:a,label:i.show,name:a,value:e[a]?e[a]:"",variant:"outlined",InputProps:{readOnly:!0,startAdornment:o.a.createElement(R.a,{position:"start"},o.a.createElement(s.a,null," ",i.icon))}}))})))},B=Object(N.a)((function(e){return{popover:{pointerEvents:"none"},container:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},paper:{marginTop:e.spacing(2),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,2)},table:{minWidth:650}}}));t.default=function(e){var t=e.searchTitle,a=e.page,N=e.setPage,I=e.thisCollection,j=Object(C.a)().t,O=function(e){return Math.floor((new Date-new Date(e).getTime())/315576e5)},R=B(),D=Object(T.a)(),M=Object(i.useState)([]),A=Object(n.a)(M,2),U=A[0],_=A[1],z=Object(i.useState)(null),H=Object(n.a)(z,2),F=H[0],W=H[1],J=Object(i.useState)(-1),L=Object(n.a)(J,2),$=(L[0],L[1]),V=o.a.useState(!1),Y=Object(n.a)(V,2),q=Y[0],K=Y[1],Q=o.a.useState(!1),X=Object(n.a)(Q,2),Z=(X[0],X[1]),ee=o.a.useState(null),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],ie=function(e){ne(e.currentTarget),W(U[e.currentTarget.id]),$(e.currentTarget.id),console.log(e.currentTarget.id),console.log(e.currentTarget.key)},oe=function(){ne(null)},le=Boolean(ae),re=Object(i.useState)(0),ce=Object(n.a)(re,2),se=ce[0],de=ce[1],ue=Object(i.useState)(5),pe=Object(n.a)(ue,2),me=pe[0],fe=pe[1],he=function(e,t,a,n){var i={filter:{where:{}}},o={where:{}};return e&&(i.filter.where.$text={search:e},o.where.$text={search:e}),t&&(i.filter.skip=(t-1)*a),a&&(i.filter.limit=a),n?o:i},be=function(){var e=he(t,a,me,!0),n=he(t,a,me,!1);l.a.getCount(e,I).then((function(e){var t=e.data.count/me,a=t===parseInt(t)?t:parseInt(t)+1;de(a)})).catch((function(e){console.log(e)})),l.a.getAll(n,I).then((function(e){_(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};Object(i.useEffect)(be,[t,a,me]);var ge=function(){K(!1),Z(!1)};return o.a.createElement(r.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(c.a,{className:R.paper},o.a.createElement(r.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},o.a.createElement(s.a,{style:{width:D.spacing(7),height:D.spacing(7),backgroundColor:S.a[100]}},o.a.createElement(d.a,{variant:"h4",style:{color:S.a[800]}},k.a[I].icon&&k.a[I].icon))),o.a.createElement(r.a,{container:!0,direction:"column",spacing:2,alignItems:"center",justify:"flex-end"},o.a.createElement(u.a,{styles:{minWidth:650}},o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{align:"center",size:"medium",style:{backgroundColor:S.a[100]}},j("Avatar")),Object.keys(k.a[I].field).map((function(e,t){var a=k.a[I].field[e];if(!0===a.table)return o.a.createElement(f.a,{align:"center",size:"medium",style:{backgroundColor:S.a[100]}},j(a.show))})))),o.a.createElement(h.a,null,U.map((function(e,t){return o.a.createElement(m.a,{hover:!0,onClick:function(){return function(e,t){W(e),$(t),K(!0)}(e,t)},onMouseEnter:ie,onMouseLeave:oe,id:t,row:e,key:t},o.a.createElement(f.a,null,e.birthday?o.a.createElement(s.a,null,O(e.birthday)<=15&&("1"===e.sex?"\ud83d\udc66":"\ud83d\udc67"),O(e.birthday)>15&&O(e.birthday)<=60&&("1"===e.sex?"\ud83e\uddd1":"\ud83d\udc69"),O(e.birthday)>60&&("1"===e.sex?"\ud83d\udc74":"\ud83d\udc75")):o.a.createElement(s.a,{style:{backgroundColor:S.a[100*t]}},t)),Object.keys(k.a[I].field).map((function(t,a){var n=k.a[I].field[t];if(!0===n.table)return o.a.createElement(f.a,{conponent:"th",size:"medium"},"boolean"===n.type?JSON.stringify(e[t]):"birthday"===t?O(e[t]):e[t])})))})))),o.a.createElement(r.a,{item:!0},j("Items per Page")," :",o.a.createElement("select",{onChange:function(e){fe(e.target.value),N(1)},value:me},[5,10,15].map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))),o.a.createElement(r.a,{item:!0},o.a.createElement(x.a,{className:"my-3",count:se,page:a,siblingCount:1,boundaryCount:1,variant:"outlined",shape:"rounded",onChange:function(e,t){N(t)}})))),o.a.createElement("div",null,F&&o.a.createElement("div",null,o.a.createElement(b.a,{open:q,onClose:ge,fullWidth:!0,maxWidth:"xs","aria-labelledby":"form-dialog-title"},o.a.createElement(r.a,{container:!0,justify:"center",style:{marginTop:D.spacing(2)}},o.a.createElement(s.a,{style:{backgroundColor:S.a[800],color:S.a[100],width:D.spacing(7),height:D.spacing(7)}},o.a.createElement(d.a,{variant:"h4"},k.a[I].icon))),o.a.createElement(g.a,null,o.a.createElement(y.a,null,G(F,W,I,!0))),o.a.createElement(v.a,null,o.a.createElement(E.a,{onClick:ge,color:"primary"},"Close Dialog"))))),o.a.createElement("div",null,o.a.createElement(w.a,{id:"mouse-over-popover",className:R.popover,classes:{paper:R.paper},open:le,anchorReference:"anchorPosition",anchorPosition:{top:55,left:750},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:oe,disableRestoreFocus:!0},F&&o.a.createElement(r.a,{container:!0,justify:"center",style:{marginTop:D.spacing(2)}},F.birthday?o.a.createElement(s.a,null,O(F.birthday)<=15&&("1"===F.sex?"\ud83d\udc66":"\ud83d\udc67"),O(F.birthday)>15&&O(F.birthday)<=60&&("1"===F.sex?"\ud83e\uddd1":"\ud83d\udc69"),O(F.birthday)>60&&("1"===F.sex?"\ud83d\udc74":"\ud83d\udc75")):o.a.createElement(s.a,{style:{width:D.spacing(7),height:D.spacing(7),backgroundColor:S.a[100]}},o.a.createElement(d.a,{variant:"h4",style:{color:S.a[800]}},k.a[I].icon&&k.a[I].icon))),o.a.createElement("div",null,F&&P(F,I)))))}}}]);
//# sourceMappingURL=13.061bae4b.chunk.js.map