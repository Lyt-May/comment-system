webpackJsonp([1],{N60V:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Dd8w"),r=o.n(n),s=o("NYxO"),i={data:function(){return{loginForm:{phone:"",password:""},param:{username:"admin",password:"123123"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:r()({},Object(s.b)(["changeLogin"]),{goToRegister:function(){this.$router.push("/register")},loginByPassword:function(){var e=this,t=this;""===this.loginForm.phone||""===this.loginForm.password?alert("邮箱或验证码不能为空"):this.tnApi.userApi.login(t.loginForm).then(function(o){200===o.status&&(console.log(o),t.userToken="Bearer "+o.token,t.changeLogin({Authorization:t.userToken}),e.$router.push("/"))}).catch(function(e){console.log(e),alert("账号或密码错误")})},loginBySms:function(){var e=this,t=this;""===this.loginForm.phone||""===this.loginForm.password?alert("邮箱或验证码不能为空"):this.tnApi.userApi.login(t.loginForm).then(function(o){200===o.status&&(console.log(o),t.userToken="Bearer "+o.token,t.changeLogin({Authorization:t.userToken}),e.$router.push("/"))}).catch(function(e){console.log(e),alert("账号或密码错误")})},getVerifyCode:function(){this.tnApi.userApi.getVerifyCode(this.loginForm.phone)}})},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-wrap"},[o("div",{staticClass:"ms-login"},[o("div",{staticClass:"ms-title"},[e._v("登录一下吧！")]),e._v(" "),o("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.loginForm,"label-width":"0px"}},[o("el-form-item",{staticClass:"el_form_item",attrs:{prop:"username"}},[o("el-input",{staticClass:"input email",attrs:{placeholder:"邮箱"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),e._v(" "),o("el-form-item",{staticClass:"el_form_item",attrs:{prop:"username"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"密码"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),e._v(" "),o("el-form-item",{staticClass:"el_form_item",attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"忘记密码？那获取验证码登录吧！"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getVerifyCode()}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},on:{click:function(t){return e.getVerifyCode()}},slot:"prepend"},[e._v("获取验证码")])],1)],1),e._v(" "),o("div",{staticClass:"login-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.loginByPassword()}}},[e._v("登录")])],1),e._v(" "),o("div",[o("p",{staticClass:"login-tips"},[e._v("Tips: 请输入邮箱和验证码。")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.goToRegister()}}},[e._v("注册")])],1)],1)],1)])},staticRenderFns:[]};var a=o("VU/8")(i,l,!1,function(e){o("O1aV")},"data-v-4dae404c",null);t.default=a.exports},O1aV:function(e,t){}});
//# sourceMappingURL=1.2a9f32b376723d7f68be.js.map