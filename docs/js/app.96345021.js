(function(e){function t(t){for(var a,r,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)r=s[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"07b9":function(e,t,o){},"1b81":function(e,t,o){},"483c":function(e,t,o){"use strict";var a=o("1b81"),n=o.n(a);n.a},5069:function(e,t,o){},5666:function(e,t,o){"use strict";var a=o("5069"),n=o.n(a);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header"),o("Intro"),o("Form")],1)},i=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:o("9b19")}}),a("img",{staticClass:"wordmark",attrs:{src:o("b627")}})])])}],l={name:"Header"},u=l,c=(o("5666"),o("2877")),d=Object(c["a"])(u,r,s,!1,null,"69dd4aae",null),p=d.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"intro"}},[o("h1",[e._v("News tools census")]),o("p",[o("a",{attrs:{href:"/"}},[e._v("News Catalyst")]),e._v(" is looking to understand what third-party software news professionals use to perform their jobs and how well that software works.")]),o("p",[e._v("Your feedback will help us begin our research. We plan to share our research with the public, but any data we release from this survey will be anonymized and aggregated. We appreciate you taking this brief survey.")])])}],g={name:"Intro"},f=g,b=(o("fb6e"),Object(c["a"])(f,h,m,!1,null,"489102aa",null)),y=b.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"form"}},[e.showValidationError?o("div",{staticClass:"validation"},[e._v("\n    Please fill out all required fields.\n  ")]):e._e(),e.showThankYouScreen?o("div",{staticClass:"thank-you"},[e._m(0)]):e._e(),e.showThankYouScreen?e._e():o("form",{staticClass:"boilerform",attrs:{id:"survey"}},[o("fieldset",{staticClass:"c-form"},[o("legend",{staticClass:"c-form__heading"},[e._v("Your job")]),o("SingleText",{attrs:{label:"What is your job title?",placeholder:"Example: News Apps Developer",uid:"job-title",value:e.jobTitle,changeMethod:e.updateJobTitle}}),o("Paragraph",{attrs:{label:"Briefly describe your duties in your job.",placeholder:"Example: As the news apps developer at my newspaper, I develop data-driven applications for investigative projects in our newsroom.",uid:"job-desc",value:e.jobDuties,changeMethod:e.updateJobDuties}}),o("SingleText",{attrs:{label:"What news organization do you work for? (optional)",placeholder:"The Middletown Gazette",uid:"news-org-name",value:e.newsOrgName,changeMethod:e.updateNewsOrgName}}),o("RadioGroup",{attrs:{question:"What type of news organization do you work for?",groupName:"newsOrgType",storeValue:e.newsOrgType,changeMethod:e.updateNewsOrgType,options:e.newsOrgTypeOptions,otherValue:e.newsOrgTypeOther,otherChangeMethod:e.updateNewsOrgTypeOther}}),o("RadioGroup",{attrs:{question:"How old is your news organization?",groupName:"newsOrgAge",storeValue:e.newsOrgAge,changeMethod:e.updateNewsOrgAge,options:e.newsOrgAgeOptions}})],1),o("fieldset",{staticClass:"c-form"},[o("legend",{staticClass:"c-form__heading"},[e._v("\n        Third-party software\n      ")]),o("ToolsSelector"),e.mostImportantTool?e._e():o("p",[e._v("Please answer the above questions to continue this section of the survey.")]),e.mostImportantTool?o("div",{staticClass:"dependent"},[o("CheckboxGroup",{attrs:{question:"What tasks do you use this software for (check all that apply)?",storeValue:e.tasksUsed,changeMethod:e.updateTasksUsed,options:e.toolUseOptions,otherValue:e.tasksUsedOther,otherChangeMethod:e.updateTasksUsedOther}}),o("RadioGroup",{attrs:{question:"How satisfied are you with this software?",groupName:"toolSatisfaction",storeValue:e.toolSatisfaction,changeMethod:e.updateToolSatisfaction,options:e.toolSatisfactionOptions}}),o("RadioGroup",{attrs:{question:"How strongly would you recommend this software to someone else performing your job?",groupName:"toolRecommendation",storeValue:e.toolRecommendation,changeMethod:e.updateToolRecommendation,options:e.toolRecommendationOptions}}),o("Paragraph",{attrs:{label:"If not, why not? (optional)",uid:"if-not-recommend",value:e.toolRecommendationWhyNot,changeMethod:e.updateToolRecommendationWhyNot}}),o("SingleText",{attrs:{label:"Is there any software you have recently stopped using? (optional)",uid:"stopped-using",placeholder:"name of software",value:e.stoppedUsing,changeMethod:e.updateStoppedUsing}}),o("Paragraph",{attrs:{label:"If so, why? (optional)",uid:"if-stopped-using",placeholder:"Why did you stop using the software?",value:e.whyStoppedUsing,changeMethod:e.updateWhyStoppedUsing}})],1):e._e()],1),o("fieldset",{staticClass:"c-form"},[o("legend",{staticClass:"c-form__heading"},[e._v("Organizational needs")]),o("RadioGroup",{attrs:{question:"Whether you work directly with this technology or not, where do you think your organization struggles most technologically?",storeValue:e.orgStruggles,changeMethod:e.updateOrgStruggles,options:e.struggleOptions,otherValue:e.orgStrugglesOther,otherChangeMethod:e.updateOrgStrugglesOther}}),o("RadioGroup",{attrs:{question:"How well do you think your organization’s digital product compares to its regional competitors?",groupName:"orgComparison",storeValue:e.orgComparison,changeMethod:e.updateOrgComparison,options:e.orgComparisonOptions}}),o("RadioGroup",{attrs:{question:"How well do you feel that leadership communicates your organization’s digital strategy to you?",groupName:"orgCommunication",storeValue:e.orgCommunication,changeMethod:e.updateOrgCommunication,options:e.orgCommunicationOptions}}),o("RadioGroup",{attrs:{question:"How confident are you that your organization’s digital strategy is sustainable?",groupName:"orgSustainability",storeValue:e.orgSustainability,changeMethod:e.updateOrgSustainability,options:e.orgSustainabilityOptions}})],1),o("fieldset",{staticClass:"c-form"},[o("legend",{staticClass:"c-form__heading"},[e._v("Wrapping up")]),o("RadioGroup",{attrs:{question:"Would you be willing to talk further with us about the software you use in your job?",groupName:"talkMore",storeValue:e.talkMore,changeMethod:e.updateTalkMore,options:e.talkMoreOptions}}),o("Email",{attrs:{uid:"email",label:"If so, please enter your email (optional)",value:e.email,changeMethod:e.updateEmail}}),o("div",{staticClass:"c-form__row"},[o("a",{staticClass:"submit",attrs:{href:"#"},on:{click:e.onSubmit}},[e._v("Submit")])])],1)])])},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("strong",[e._v("Thank you for completing this survey!")])])}],O=o("cebc"),S=o("2f62"),_=o("f499"),C=o.n(_),k=o("a4bb"),T=o.n(k),M=(o("ac6a"),["jobTitle","jobDuties","newsOrgType","newsOrgAge","tasksUsed","toolSatisfaction","toolRecommendation","orgStruggles","orgComparison","orgCommunication","orgSustainability","talkMore"]),N=function(e){var t=!0;return T()(e).forEach(function(o){M.indexOf(o)>=0&&!e[o]&&(console.log(o),t=!1)}),t};function j(e){var t=N(e);return!!t&&(fetch("https://powerful-everglades-82030.herokuapp.com/responses/api/responses/",{method:"POST",headers:{"Content-Type":"application/json"},body:C()(Object(O["a"])({},e))}).then(function(e){console.log(e)}).catch(function(e){return console.error(e)}),!0)}var P=j,x={struggleOptions:[{uid:"content-management",label:"Content management systems (CMS)"},{uid:"customer-relationship-management",label:"Customer relationship management (CRM)"},{uid:"data-visualization",label:"Data visualization"},{uid:"analytics-metrics",label:"Analytics or metrics"},{uid:"product",label:"Product"},{uid:"multimedia-production-editing",label:"Multimedia production or editing"},{uid:"struggle-other",label:"Other"}],toolUseOptions:[{uid:"advertising-marketing",label:"Advertising or marketing"},{uid:"analysis",label:"Analysis"},{uid:"audience-engagement",label:"Audience engagement"},{uid:"design",label:"Design"},{uid:"development",label:"Development"},{uid:"editing",label:"Editing"},{uid:"information-gathering",label:"Information gathering"},{uid:"project-management",label:"Project management"},{uid:"promoting-content",label:"Promoting content"},{uid:"publishing",label:"Publishing"},{uid:"storage-archiving",label:"Storage or archiving"},{uid:"writing-producing",label:"Writing or producing"},{uid:"use-other",label:"Other"}],newsOrgTypeOptions:[{uid:"newspaper",label:"Newspaper publisher"},{uid:"magazine",label:"Magazine"},{uid:"digital-only",label:"Digital-only"},{uid:"radio",label:"Commercial radio station or network"},{uid:"television",label:"Commercial television station or network"},{uid:"public-media",label:"Public media"},{uid:"wire-service",label:"Wire service"},{uid:"corporate-media",label:"Corporate chain/national team"},{uid:"other-news-org-type",label:"Other"}],newsOrgAgeOptions:[{uid:"baby",label:"0-9 years"},{uid:"teen",label:"10-19 years"},{uid:"young",label:"20-29 years"},{uid:"middle",label:"30-39 years"},{uid:"old",label:"40+ years"}],toolSatisfactionOptions:[{uid:"software-very-satisfied",label:"Very satisfied"},{uid:"software-somewhat-satisfied",label:"Somewhat satisfied"},{uid:"software-neither",label:"Neither satisfied nor dissatisfied"},{uid:"software-somewhat-dissatisfied",label:"Somewhat dissatisfied"},{uid:"software-very-dissatisfied",label:"Very dissatisfied"}],toolRecommendationOptions:[{uid:"recommend-very-enthusiastically",label:"Very enthusiastically"},{uid:"recommend-somewhat-enthusiastically",label:"Somewhat enthusiastically"},{uid:"recommend-neither",label:"Neither enthusiastically nor unhappy"},{uid:"recommend-nah",label:"I would not recommend this software"},{uid:"recommend-idk",label:"I don't know"}],orgComparisonOptions:[{uid:"comparison-very-favorably",label:"Very favorably"},{uid:"comparison-somewhat-favorably",label:"Somewhat favorably"},{uid:"comparison-neither",label:"Neither favorably nor unfavorably"},{uid:"comparison-somewhat-unfavorably",label:"Somewhat unfavorably"},{uid:"comparison-very-unfavorably",label:"Very unfavorably"}],orgCommunicationOptions:[{uid:"communication-very-clearly",label:"Very clearly"},{uid:"communication-somewhat-clearly",label:"Somewhat clearly"},{uid:"communication-not-very-clearly",label:"Not very clearly"},{uid:"communication-not-at-all-clearly",label:"Not at all clearly"},{uid:"communication-idk",label:"I don't know"}],orgSustainabilityOptions:[{uid:"sustainability-very-confident",label:"Very confident"},{uid:"sustainability-somewhat-confident",label:"Somewhat confident"},{uid:"sustainability-not-very-confident",label:"Not very confident"},{uid:"sustainability-not-at-all-confident",label:"Not at all confident"},{uid:"sustainability-idk",label:"I don't know"}],talkMoreOptions:[{uid:"talk-more-yes",label:"Yes"},{uid:"talk-more-no",label:"No"}]},A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label"},[e._v(e._s(e.question))]),e._l(e.options,function(t){return o("div",{staticClass:"c-check-field"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.storeSync,expression:"storeSync"}],staticClass:"c-check-field__input",attrs:{type:"checkbox",name:t.uid,id:t.uid},domProps:{value:t.label,checked:Array.isArray(e.storeSync)?e._i(e.storeSync,t.label)>-1:e.storeSync},on:{change:function(o){var a=e.storeSync,n=o.target,i=!!n.checked;if(Array.isArray(a)){var r=t.label,s=e._i(a,r);n.checked?s<0&&(e.storeSync=a.concat([r])):s>-1&&(e.storeSync=a.slice(0,s).concat(a.slice(s+1)))}else e.storeSync=i}}}),o("label",{staticClass:"c-check-field__decor",attrs:{for:t.uid,"aria-hidden":"true",role:"presentation"}}),o("label",{staticClass:"c-check-field__label",attrs:{for:t.uid}},[e._v("\n    "+e._s(t.label)+"\n    "),"Other"===t.label?o("input",{directives:[{name:"model",rawName:"v-model",value:e.otherSync,expression:"otherSync"}],staticClass:"c-input-field",attrs:{type:"text",name:t.uid,id:t.uid,placeholder:"Please specify"},domProps:{value:e.otherSync},on:{input:function(t){t.target.composing||(e.otherSync=t.target.value)}}}):e._e()])])})],2)},U=[],I={name:"CheckboxGroup",props:["question","options","storeValue","changeMethod","otherValue","otherChangeMethod"],computed:{storeSync:{get:function(){return this.storeValue},set:function(e){this.changeMethod(e)}},otherSync:{get:function(){return this.otherValue},set:function(e){this.otherChangeMethod(e)}}}},R=I,E=Object(c["a"])(R,A,U,!1,null,null,null),V=E.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label",attrs:{for:e.uid}},[e._v(e._s(e.label))]),o("input",{staticClass:"c-input-field",attrs:{type:"email",name:e.uid,id:e.uid,autocapitalize:"none",autocorrect:"off",placeholder:"user@email.com"},domProps:{value:e.value},on:{change:e.onChange}})])},W=[],D={name:"Email",props:["uid","label","value","changeMethod"],methods:{onChange:function(e){this.changeMethod(e.target.value)}}},q=D,$=Object(c["a"])(q,G,W,!1,null,null,null),z=$.exports,H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label",attrs:{for:e.uid}},[e._v(e._s(e.label))]),o("textarea",{staticClass:"c-input-field c-input-field--multiline",attrs:{name:e.uid,id:e.uid,placeholder:e.placeholder},on:{change:e.onChange}},[e._v(e._s(e.value))])])},J=[],F={name:"Paragraph",props:["label","uid","placeholder","value","changeMethod"],methods:{onChange:function(e){this.changeMethod(e.target.value)}}},L=F,B=Object(c["a"])(L,H,J,!1,null,null,null),Y=B.exports,Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label"},[e._v(e._s(e.question))]),e._l(e.options,function(t){return o("div",{staticClass:"c-check-field c-check-field--radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.storeSync,expression:"storeSync"}],staticClass:"c-check-field__input",attrs:{type:"radio",name:e.groupName,id:t.uid},domProps:{value:t.label,checked:e._q(e.storeSync,t.label)},on:{change:function(o){e.storeSync=t.label}}}),o("label",{staticClass:"c-check-field__decor",attrs:{for:t.uid,"aria-hidden":"true",role:"presentation"}}),o("label",{staticClass:"c-check-field__label",attrs:{for:t.uid}},[e._v("\n      "+e._s(t.label)+"\n      "),"Other"===t.label?o("input",{directives:[{name:"model",rawName:"v-model",value:e.otherSync,expression:"otherSync"}],staticClass:"c-input-field",attrs:{type:"text",name:e.groupName,id:t.uid,placeholder:"Please specify"},domProps:{value:e.otherSync},on:{input:function(t){t.target.composing||(e.otherSync=t.target.value)}}}):e._e()])])})],2)},Q=[],K={name:"RadioGroup",props:["question","options","groupName","storeValue","changeMethod","otherValue","otherChangeMethod"],computed:{storeSync:{get:function(){return this.storeValue},set:function(e){this.changeMethod(e)}},otherSync:{get:function(){return this.otherValue},set:function(e){this.otherChangeMethod(e)}}}},X=K,ee=Object(c["a"])(X,Z,Q,!1,null,null,null),te=ee.exports,oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label",attrs:{for:e.uid}},[e._v(e._s(e.label))]),o("input",{staticClass:"c-input-field",attrs:{type:"text",name:e.uid,id:e.uid,placeholder:e.placeholder},domProps:{value:e.value},on:{change:e.onChange}})])},ae=[],ne={name:"Single",props:["label","uid","placeholder","value","changeMethod"],methods:{onChange:function(e){this.changeMethod(e.target.value)}}},ie=ne,re=Object(c["a"])(ie,oe,ae,!1,null,null,null),se=re.exports,le=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tools-selector"},[o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label"},[e._v("\n      To the best you know it, please list the software, other than your newsroom’s content management systems, that you regularly use in your job.\n    ")]),o("multiselect",{attrs:{options:e.options,multiple:!0,taggable:!0,"tag-placeholder":"Press enter to add to your list","max-height":200,"close-on-select":!1},on:{tag:e.addTag},model:{value:e.toolsUsed,callback:function(t){e.toolsUsed=t},expression:"toolsUsed"}}),e._m(0)],1),o("div",{staticClass:"c-form__row"},[o("label",{staticClass:"c-label"},[e._v("\n      Which of these is the most essential for getting your job done? If you have equally important software, please pick one.\n    ")]),o("multiselect",{attrs:{options:e.toolsUsed,"max-height":200},model:{value:e.mostImportantTool,callback:function(t){e.mostImportantTool=t},expression:"mostImportantTool"}})],1),o("div",{staticClass:"c-form__row"},[e.mostImportantTool?o("p",[e._v("\n      Regarding "),o("strong",[e._v(e._s(e.mostImportantTool))]),e._v(", please answer the following:\n    ")]):e._e()])])},ue=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"extra"},[o("em",[e._v("If a tool you use is not in the dropdown, type the name in full and press enter.")])])}],ce=o("75fc"),de=(o("55dd"),o("8e5f")),pe=o.n(de),he=["Accurint","Adobe Creative Suite","Anima","ArcGIS","Asana","Atavist","Audiogram","AWS","Ballotopedia","Bootstrap","Brackets","Browserstack","CartoDB","CensusReporter","Chartbeat","Clickability","CometDocs","Coral Project Ask","Coral Project Talk","csvkit","D3","data.world","Datakit","Datawrapper","Dbpedia","Dedupe","Django","DocumentCloud","Elasticsearch","Envision","Microsoft Excel","Census FactFinder","Figma","Flourish","Freshbooks","Google Fusion Tables","geocode.io","GeoJSON.io","Github","Gitlab","Google Analytics","Google Civic Information API","Google Docs","Google Sheets","Google Slides","Hearken","Heroku","HighCharts","Adobe Indesign","Infogram","Intercom","Invision","JavaScript","Node.js","Jupyter Notebooks","JWPlayer","Leaflet","Mapbox","Merlin","Metrics for News","Microsoft Teams","Navicat","OpenRefine","OpenSecrets","Otter.ai","PACER","Panda","PostGIS","PostgreSQL","Postico","Python","QGIS","R","ProPublica Congress API","RMarkdown","RStudio","Ruby","Salesforce","SauceLabs","Scribble Live","Semaphore","Sentry","Sequel Pro","Sharepoint","Sketch","Skype","Slack","SoundCite","SoundCloud","Storefront","Stripe","Sublime Text","Tableau","Tabula","Temi","TimelineJS","TravisCI","Trello","Twitter","Tweetdeck","Visual Studio Code","WhatsApp","WordPress","Zamzar","Zeppelin","Zoom","Adobe Illustrator","Adobe Photoshop","Adobe Premiere Pro","Adobe After Effects","Adobe Audition","Adobe XD","Photo Mechanic","Trint","Parse.ly","Crowdtangle","Microsoft Word","Microsoft Office 365","Dropbox","Box","Google Drive","Facebook Pages","Headliner","Descript","MuckRock","FOIA Machine","Klaxon"],me={name:"ToolsSelector",components:{Multiselect:pe.a},data:function(){return{options:he.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0})}},computed:{toolsUsed:{get:function(){return this.$store.state.toolsUsed},set:function(e){this.updateToolsUsed(e)}},mostImportantTool:{get:function(){return this.$store.state.mostImportantTool},set:function(e){this.updateMostImportantTool(e)}}},methods:Object(O["a"])({addTag:function(e){this.options.push(e),this.updateToolsUsed([].concat(Object(ce["a"])(this.toolsUsed),[e]))}},Object(S["b"])(["updateToolsUsed","updateMostImportantTool"]))},ge=me,fe=(o("60bc"),o("483c"),Object(c["a"])(ge,le,ue,!1,null,null,null)),be=fe.exports,ye={name:"Form",components:{CheckboxGroup:V,Email:z,Paragraph:Y,RadioGroup:te,SingleText:se,ToolsSelector:be},data:function(){return Object(O["a"])({},x,{showValidationError:!1,showThankYouScreen:!1})},computed:Object(S["c"])(["jobTitle","jobDuties","newsOrgName","newsOrgType","newsOrgTypeOther","newsOrgAge","tasksUsed","tasksUsedOther","toolSatisfaction","toolRecommendation","toolRecommendationWhyNot","stoppedUsing","whyStoppedUsing","orgStruggles","orgStrugglesOther","orgComparison","orgCommunication","orgSustainability","talkMore","email","mostImportantTool"]),methods:Object(O["a"])({},Object(S["b"])(["updateJobTitle","updateJobDuties","updateNewsOrgName","updateNewsOrgType","updateNewsOrgTypeOther","updateNewsOrgAge","updateTasksUsed","updateTasksUsedOther","updateToolSatisfaction","updateToolRecommendation","updateToolRecommendationWhyNot","updateStoppedUsing","updateWhyStoppedUsing","updateOrgStruggles","updateOrgStrugglesOther","updateOrgComparison","updateOrgCommunication","updateOrgSustainability","updateTalkMore","updateEmail"]),{onSubmit:function(){var e=P(this.$store.state);e?(this.showValidationError=!1,this.showThankYouScreen=!0):this.showValidationError=!0}})},ve=ye,we=(o("c4e7"),Object(c["a"])(ve,v,w,!1,null,null,null)),Oe=we.exports,Se={name:"app",components:{Header:p,Intro:y,Form:Oe}},_e=Se,Ce=(o("5c0b"),Object(c["a"])(_e,n,i,!1,null,null,null)),ke=Ce.exports;a["a"].use(S["a"]);var Te=!1,Me=new S["a"].Store({state:{jobTitle:null,jobDuties:null,newsOrgName:null,newsOrgType:null,newsOrgTypeOther:null,newsOrgAge:null,toolsUsed:[],mostImportantTool:null,tasksUsed:[],tasksUsedOther:null,toolSatisfaction:null,toolRecommendation:null,toolRecommendationWhyNot:null,stoppedUsing:null,whyStoppedUsing:null,orgStruggles:null,orgStrugglesOther:null,orgComparison:null,orgCommunication:null,orgSustainability:null,talkMore:!1,email:null},mutations:{updateJobTitle:function(e,t){e.jobTitle=t},updateJobDuties:function(e,t){e.jobDuties=t},updateNewsOrgName:function(e,t){e.newsOrgName=t},updateNewsOrgType:function(e,t){e.newsOrgType=t},updateNewsOrgTypeOther:function(e,t){e.newsOrgTypeOther=t},updateNewsOrgAge:function(e,t){e.newsOrgAge=t},updateToolsUsed:function(e,t){e.toolsUsed=t},updateMostImportantTool:function(e,t){e.mostImportantTool=t},updateTasksUsed:function(e,t){e.tasksUsed=t},updateTasksUsedOther:function(e,t){e.tasksUsedOther=t},updateToolSatisfaction:function(e,t){e.toolSatisfaction=t},updateToolRecommendation:function(e,t){e.toolRecommendation=t},updateToolRecommendationWhyNot:function(e,t){e.toolRecommendationWhyNot=t},updateStoppedUsing:function(e,t){e.stoppedUsing=t},updateWhyStoppedUsing:function(e,t){e.whyStoppedUsing=t},updateOrgStruggles:function(e,t){e.orgStruggles=t},updateOrgStrugglesOther:function(e,t){e.orgStrugglesOther=t},updateOrgComparison:function(e,t){e.orgComparison=t},updateOrgCommunication:function(e,t){e.orgCommunication=t},updateOrgSustainability:function(e,t){e.orgSustainability=t},updateTalkMore:function(e,t){e.talkMore=t},updateEmail:function(e,t){e.email=t}},strict:Te});o("bbfa"),o("f5df");a["a"].config.productionTip=!1,new a["a"]({store:Me,render:function(e){return e(ke)}}).$mount("#app")},"5ae8":function(e,t,o){},"5c0b":function(e,t,o){"use strict";var a=o("5e27"),n=o.n(a);n.a},"5e27":function(e,t,o){},"9b19":function(e,t,o){e.exports=o.p+"img/logo.f1093aea.svg"},b627:function(e,t,o){e.exports=o.p+"img/wordmark.1ff6572f.svg"},c4e7:function(e,t,o){"use strict";var a=o("07b9"),n=o.n(a);n.a},fb6e:function(e,t,o){"use strict";var a=o("5ae8"),n=o.n(a);n.a}});
//# sourceMappingURL=app.96345021.js.map