(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{735:function(t,e,o){var content=o(750);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(157).default)("1d6b67a6",content,!1,{sourceMap:!1})},740:function(t){t.exports=JSON.parse('{"a":{"Data":"Data de cadastro","TipoPedido":"Tipo de pedido","SubSetor":"Sub-setor","Certidao":"Certidão","Interessado":"Interessado","Licenciamento":"Licenciamento","Sei":"PA / SEI","AreaAdResidencial":"Área adicional residencial","AreaAdNaoResidencial":"Área adicional não residencial","CepacAreaAdicional":"CEPAC área adicional","CepacModUso":"CEPAC - Modo de uso","Email":"e-mail","Telefone":"Telefone","Procurador":"Procurador","CepacObjeto":"CEPAC - Objeto","Endereco":"Endereço","AreaTerreno":"Área do terreno","Zona":"Zona (Lei 16.402/16,)","Uso":"Tipo de uso","CAProjeto":"C.A. do projeto","Obs":"Observação","CodigoProposta":"Código da proposta","UsuarioAlteracao":"Usuário responsável pela última alteração","DataAlteracao":"Última alteração","IdStatus":"Situação","IdSetor":"Setor","Id":"Cadastro"},"b":{"1":"Checklist","2":"Em análise","3":"Indeferido","4":"Aprovado"}}')},741:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var r={methods:{pluralize:function(t,e){return e?"".concat(t,"s"):t},isNotEmpty:function(t){switch(t){case"":case"-":case null:return!1;default:return!0}}}}},749:function(t,e,o){"use strict";o(735)},750:function(t,e,o){var r=o(156)(!1);r.push([t.i,".main[data-v-16356c86]{display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:2fr;grid-column-gap:16px}.main footer[data-v-16356c86]{grid-area:2/1/3/13}@media (max-width:1200px){.main[data-v-16356c86]{display:block}}.a4[data-v-16356c86]{grid-area:1/4/2/10;margin-top:3rem;margin-bottom:3rem;height:70.5vw;background:#fff;border:1px solid #ebe6e6;box-shadow:4px 4px 8px rgba(125,124,124,.25)}@media (max-width:1600px){.a4[data-v-16356c86]{height:unset;padding-bottom:2rem}}@media (max-width:1200px){.a4[data-v-16356c86]{border:0;margin-top:0;box-shadow:unset}}.a4__header[data-v-16356c86],.a4__report[data-v-16356c86]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:1rem;margin-left:6.25vw;margin-right:6.25vw}.a4__header[data-v-16356c86]{grid-template-rows:1fr 1px;margin-top:2.77778vw;margin-bottom:.73529vw}.a4__header .logo[data-v-16356c86]{width:10.30928vw}@media (max-width:1200px){.a4__header .logo[data-v-16356c86]{display:none}}.a4__report[data-v-16356c86]{margin-bottom:.5rem;padding-top:.5rem;border-top:1px solid #666}.a4__report .item__text--big[data-v-16356c86]{font-size:1.5rem}@media (max-width:800px){.a4__report .item__text--big[data-v-16356c86]{font-size:1rem}}.a4__report .item__text--small[data-v-16356c86],.a4__report h3[data-v-16356c86]{font-size:12px}.a4__report.one-column[data-v-16356c86]{grid-template-columns:1fr}.a4__report.two-columns[data-v-16356c86]{grid-template-columns:1fr 1fr}.a4__report.two-columns li[data-v-16356c86]:last-child{grid-area:1/2/2/3;text-align:right}.a4__report.four-columns[data-v-16356c86]{grid-template-columns:repeat(4,1fr)}.a4__report.four-columns h3[data-v-16356c86]{grid-area:1/1/2/5}@media (max-width:800px){.a4__report.four-columns[data-v-16356c86]{grid-template-columns:repeat(3,1fr)}.a4__report.four-columns h3[data-v-16356c86]{grid-area:1/1/2/4}}.a4__report .four-column--exception[data-v-16356c86]{grid-area:1/2/2/5}.report__item p[data-v-16356c86]{margin-bottom:.35rem}",""]),t.exports=r},771:function(t,e,o){"use strict";o.r(e);var r=o(740),_=o(345),l=o(741),d={name:"Cadastro",components:{LogoSpurb:_.default},mixins:[l.a],props:{fila:{type:Object,required:!0},sqls:{type:Array,required:!0}},data:function(){return{glossarioFila:r.a,statusDescription:r.b}}},c=(o(749),o(108)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Cadastro main"},[o("div",{staticClass:"a4"},[o("div",{staticClass:"a4__header"},[o("logo-spurb",{attrs:{"fill-type":"#1D1D1B","fill-brand":"#038375"}})],1),t._v(" "),o("ul",{staticClass:"a4__report"},[o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.Id))]),t._v(" "),o("p",[t._v(t._s(t.fila.Id))]),t._v(" "),t.isNotEmpty(t.fila.TipoPedido)?[o("h3",[t._v(t._s(t.glossarioFila.TipoPedido))]),t._v(" "),o("p",[t._v(t._s(t.fila.TipoPedido))])]:t._e()],2),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.IdStatus))]),t._v(" "),o("p",{staticClass:"item__text--big"},[t._v("\n          "+t._s(t.statusDescription[t.fila.IdStatus])+"\n        ")])]),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.Sei))]),t._v(" "),o("p",[t._v(t._s(t.fila.Sei))]),t._v(" "),o("h3",[t._v(t._s(t.glossarioFila.CodigoProposta))]),t._v(" "),o("p",[t._v(t._s(t.fila.CodigoProposta))])])]),t._v(" "),o("ul",{staticClass:"a4__report"},[o("li",{staticClass:"report__item"},[o("h3",[t._v("Operação Urbana")]),t._v(" "),o("p",[t._v(t._s(t.fila.SetorObj.OperacaoUrbana.Nome))]),t._v(" "),o("h3",[t._v("Zona")]),t._v(" "),o("p",[t._v(t._s(t.fila.Zona))])]),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.IdSetor))]),t._v(" "),o("p",[t._v(t._s(t.fila.SetorObj.Nome))]),t._v(" "),o("h3",[t._v(t._s(t.glossarioFila.Uso))]),t._v(" "),o("p",[t._v(t._s(t.fila.Uso))])]),t._v(" "),t.isNotEmpty(t.fila.SubSetor)?o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.SubSetor))]),t._v(" "),o("p",[t._v(t._s(t.fila.SubSetor))]),t._v(" "),o("h3",[t._v(t._s(t.glossarioFila.AreaTerreno))]),t._v(" "),o("p",[t._v(t._s(t.fila.AreaTerreno))])]):t._e()]),t._v(" "),o("ul",{staticClass:"a4__report one-column"},[t.isNotEmpty(t.fila.Certidao)?o("li",{staticClass:"report__item"},[o("h3",[t._v("Certidão")]),t._v(" "),o("p",[t._v(t._s(t.fila.Certidao))])]):t._e(),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v("Interessado")]),t._v(" "),o("p",[t._v(t._s(t.fila.Interessado))])]),t._v(" "),t.isNotEmpty(t.fila.Procurador)?o("li",{staticClass:"report__item"},[o("h3",[t._v("Procurador")]),t._v(" "),o("p",[t._v(t._s(t.fila.Procurador))])]):t._e(),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v("Endereço")]),t._v(" "),o("p",[t._v(t._s(t.fila.Endereco))])]),t._v(" "),t.isNotEmpty(t.fila.Licenciamento)?o("li",{staticClass:"report__item"},[o("h3",[t._v("Licenciamento")]),t._v(" "),o("p",[t._v(t._s(t.fila.Licenciamento))])]):t._e(),t._v(" "),t.isNotEmpty(t.fila.Zona)?o("li",{staticClass:"report__item"}):t._e()]),t._v(" "),o("ul",{staticClass:"a4__report four-columns"},[o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.AreaAdResidencial))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.AreaAdResidencial)+"\n        ")])]),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.AreaAdNaoResidencial))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.AreaAdNaoResidencial)+"\n        ")])]),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.CepacAreaAdicional))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.CepacAreaAdicional)+"\n        ")])]),t._v(" "),o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.CAProjeto))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.CAProjeto)+"\n        ")])])]),t._v(" "),o("ul",{staticClass:"a4__report four-columns"},[o("h3",[t._v(t._s(t.pluralize("IPTU",t.fila.sqls.length>1)))]),t._v(" "),t.sqls.length?t._l(t.fila.sqls,(function(e,r){return o("li",{key:r,staticClass:"report__item"},[o("p",{staticClass:"item__text--small"},[t._v("\n            "+t._s(e.NumeroSql)+"\n          ")])])})):o("p",{staticClass:"item__text--small four-column--exception"},[t._v("\n        Nenhum SQL está associado a este cadastro\n      ")])],2),t._v(" "),o("ul",{staticClass:"a4__report two-columns"},[t.isNotEmpty(t.fila.Data)?o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.Data))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.Data.replace("T"," "))+"\n        ")])]):t._e(),t._v(" "),t.isNotEmpty(t.fila.DataAlteracao)?o("li",{staticClass:"report__item"},[o("h3",[t._v(t._s(t.glossarioFila.DataAlteracao))]),t._v(" "),o("p",{staticClass:"item__text--small"},[t._v("\n          "+t._s(t.fila.DataAlteracao.replace("T"," "))+"\n        ")])]):t._e()])])])}),[],!1,null,"16356c86",null);e.default=component.exports}}]);