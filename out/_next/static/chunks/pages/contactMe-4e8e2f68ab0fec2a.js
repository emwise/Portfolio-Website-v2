(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{7219:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contactMe",function(){return a(4102)}])},2584:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),i=a(9008),s=a.n(i);function l(){return(0,n.jsxs)(s(),{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"Personal website for Emma Wise - Software Engineer"})]})}},1127:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5893),i=a(1664),s=a.n(i),l=a(8484),r=a.n(l),c=a(5675),o=a.n(c),m=a(7294);function u(){var e=(0,m.useState)(!1),t=e[0],a=e[1],i=t?r().listItemDropdown:r().listItemDropdownCollapse,l=t?r().navbarCollapse:r().navbar;return(0,n.jsx)("nav",{className:l,children:(0,n.jsx)("div",{className:r().container,children:(0,n.jsxs)("ul",{className:r().list,children:[(0,n.jsx)("li",{className:r().listItemBrand,children:(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})})}),(0,n.jsx)("li",{className:r().listItem,children:(0,n.jsx)(s(),{href:"/aboutMe",children:(0,n.jsx)("a",{children:"About Me "})})}),(0,n.jsx)("li",{className:r().listItem,children:(0,n.jsx)(s(),{href:"/blog",children:(0,n.jsx)("a",{children:"Blog "})})}),(0,n.jsx)("li",{className:r().listItem,children:(0,n.jsx)(s(),{href:"/contactMe",children:(0,n.jsx)("a",{children:"Contact Me "})})}),(0,n.jsx)("li",{className:r().hamburger,children:(0,n.jsx)("button",{className:r().hamburgerButton,onClick:function(){a(!t)},children:(0,n.jsx)(o(),{priority:!0,src:"/images/hamburger.png",height:25,width:25,alt:"hamburger icon"})})}),(0,n.jsx)("li",{className:i,children:(0,n.jsx)(s(),{href:"/aboutMe",children:(0,n.jsx)("a",{children:"About Me "})})}),(0,n.jsx)("li",{className:i,children:(0,n.jsx)(s(),{href:"/blog",children:(0,n.jsx)("a",{children:"Blog "})})}),(0,n.jsx)("li",{className:i,children:(0,n.jsx)(s(),{href:"/contactMe",children:(0,n.jsx)("a",{children:"Contact Me "})})}),(0,n.jsx)("li",{className:r().listItemLinkList,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:r().listItemLink,children:(0,n.jsx)("a",{href:"https://www.linkedin.com/in/emma-wise-23802014a/",target:"_blank",children:(0,n.jsx)(o(),{priority:!0,src:"/images/linkedin.png",height:20,width:20,alt:"LinkedIn Logo"})})}),(0,n.jsx)("li",{className:r().listItemLink,children:(0,n.jsx)("a",{href:"https://github.com/emwise",target:"_blank",children:(0,n.jsx)(o(),{priority:!0,src:"/images/github.png",height:20,width:20,alt:"Github Logo"})})}),(0,n.jsx)("li",{className:r().listItemLink,children:(0,n.jsx)("a",{href:"mailto:emma9wise@gmail.com",children:(0,n.jsx)(o(),{priority:!0,src:"/images/email.png",height:20,width:20,alt:"Email Emma"})})})]})})]})})})}},4102:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(5893),i=a(1127),s=a(7297),l=a.n(s),r=a(7294);function c(){var e=(0,r.useState)(""),t=e[0],a=e[1],i=(0,r.useState)(""),s=i[0],c=i[1],o=(0,r.useState)(""),m=o[0],u=o[1],h=(0,r.useState)(""),d=h[0],_=h[1],x=(0,r.useState)(!1),j=(x[0],x[1]);return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"Contact"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Craft a Message"}),(0,n.jsxs)("form",{children:[(0,n.jsx)("label",{className:l().label,children:"Your Name "}),(0,n.jsx)("input",{className:l().input,type:"text",name:"name",value:t,onChange:function(e){a(e.target.value)},required:!0}),(0,n.jsx)("br",{}),(0,n.jsx)("label",{className:l().label,children:"Email "}),(0,n.jsx)("input",{className:l().input,type:"text",name:"email",value:s,onChange:function(e){c(e.target.value)},required:!0}),(0,n.jsx)("br",{}),(0,n.jsx)("label",{className:l().label,children:"Subject "}),(0,n.jsx)("input",{className:l().input,type:"text",name:"subject",value:m,onChange:function(e){u(e.target.value)},required:!0}),(0,n.jsx)("br",{}),(0,n.jsx)("label",{className:l().label,children:"Message "}),(0,n.jsx)("textarea",{className:l().textarea,type:"text",name:"message",value:d,onChange:function(e){_(e.target.value)},required:!0}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{className:l().button,type:"submit",value:"Submit",onClick:function(e){!function(e){e.preventDefault(),console.log("Sending");var n={name:t,subject:m,email:s,message:d};fetch("https://4pc6wve37j.execute-api.us-east-1.amazonaws.com/prod/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Origin:"https://emmanwise.com"},body:JSON.stringify(n)}).then((function(e){console.log("Response received"),200===e.status&&(console.log("Response succeeded!"),j(!0),a(""),u(""),c(""),_(""))}))}(e)}})]})]})]})}var o=a(6195),m=a.n(o);function u(){return(0,n.jsxs)("div",{className:m().column,children:[(0,n.jsx)("p",{children:"I'm currently living in Chicago, IL, USA."}),(0,n.jsx)("iframe",{className:m().iframe,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33982423937!2d-87.87239008007295!3d41.83390324886063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1660332039040!5m2!1sen!2sus",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})}var h=a(5794),d=a.n(h),_=a(2584),x=a(9008),j=a.n(x);function b(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(_.Z,{}),(0,n.jsx)(j(),{children:(0,n.jsx)("title",{children:"Contact Me"})}),(0,n.jsx)(i.Z,{}),(0,n.jsxs)("div",{className:d().contactPage,children:[(0,n.jsx)(c,{}),(0,n.jsx)(u,{})]})]})}},7297:function(e){e.exports={container:"contactForm_container__nBQEC",label:"contactForm_label__zhkkm",input:"contactForm_input___eN_u",button:"contactForm_button__vtfO3",textarea:"contactForm_textarea__96yry"}},6195:function(e){e.exports={column:"locationMap_column__4VdrK",iframe:"locationMap_iframe__L963b"}},8484:function(e){e.exports={navbar:"navbar_navbar__9q1fQ",navbarCollapse:"navbar_navbarCollapse__m_8yI",list:"navbar_list__t_NcW",listItem:"navbar_listItem__shqSB",listItemDropdown:"navbar_listItemDropdown__S9Z1C",listItemDropdownCollapse:"navbar_listItemDropdownCollapse__NIyXQ",listItemBrand:"navbar_listItemBrand__bdveN",listItemLinkList:"navbar_listItemLinkList__yp9tS",listItemLink:"navbar_listItemLink__Ox3QT",hamburger:"navbar_hamburger__9Y66y",hamburgerButton:"navbar_hamburgerButton__1iL2a"}},5794:function(e){e.exports={borderCircle:"utils_borderCircle__s2nTm",mainContainer:"utils_mainContainer___Q5i1",mainContainerFlex:"utils_mainContainerFlex__vjctB",aboutMeImageContainer:"utils_aboutMeImageContainer__0BKwz",aboutMeImage:"utils_aboutMeImage___7xpG",imageRadius:"utils_imageRadius__fTlX7",caption:"utils_caption__aCk4n",contactPage:"utils_contactPage__1ewK_",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i"}}},function(e){e.O(0,[247,774,888,179],(function(){return t=7219,e(e.s=t);var t}));var t=e.O();_N_E=t}]);