(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);n(40);var r,a,o=n(0),c=n.n(o),s=n(17),i=n.n(s),u=n(43),l=n(2),d=n(3),h=n(5),m=n(4),p=n(6),f="https://frozen-peak-86835.herokuapp.com",g="blogful-client-auth-token",E=n(18),b=n.n(E),v={saveAuthToken:function(e){window.localStorage.setItem(g,e)},getAuthToken:function(){return window.localStorage.getItem(g)},clearAuthToken:function(){window.localStorage.removeItem(g)},hasAuthToken:function(){return!!v.getAuthToken()},parseJwt:function(e){return b()(e)},parseAuthToken:function(){var e=v.getAuthToken();return e?v.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=v._getMsUntilExpiry(v.parseAuthToken());r=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(r)}},w=v,C={postUser:function(e){return fetch("".concat(f,"/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(f,"/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(f,"/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},y=null,k=["mousedown","mousemove","keypress","scroll","touchstart"],j={setIdleCallback:function(e){y=e},resetIdleTimer:function(e){clearTimeout(a),a=setTimeout(y,3e5)},regiserIdleTimerResets:function(){k.forEach(function(e){return document.addEventListener(e,j.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(a),k.forEach(function(e){return document.removeEventListener(e,j.resetIdleTimer,!0)})}},O=j,S=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),T=S,x=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.processLogin=function(e){w.saveAuthToken(e);var t=w.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),O.regiserIdleTimerResets(),w.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){w.clearAuthToken(),w.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){w.clearAuthToken(),w.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){C.refreshToken().then(function(e){w.saveAuthToken(e.authToken),w.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var r={user:{},error:null},a=w.parseAuthToken();return a&&(r.user={id:a.user_id,name:a.name,username:a.sub}),n.state=r,O.setIdleCallback(n.logoutBecauseIdle),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.hasAuthToken()&&(O.regiserIdleTimerResets(),w.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){O.unRegisterIdleResets(),w.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(S.Provider,{value:e},this.props.children)}}]),t}(o.Component),W=c.a.createContext({words:[],language:{},error:null,currentWord:"here",correctCount:0,incorrectCount:0,nextWord:0,totalScore:0,setCurrentWord:function(){},setCorrectCount:function(){},setIncorrectCount:function(){},setNextWord:function(){},setTotalScore:function(){}}),N=W,I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={words:[],language:{},error:null,currentWord:"here",correctCount:0,incorrectCount:0,nextWord:0,totalScore:0},n.setContextStats=function(e){n.setState({currentword:e.currentWord,correctCount:e.correctCount,incorrectCount:e.incorrectCount,nextWord:e.nextWord,totalScore:e.totalScore})},n.setWords=function(e){n.setState({words:e})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={words:this.state.words,language:this.state.language,error:this.state.error,currentWord:this.state.currentWord,correctCount:this.state.correctCount,incorrectCount:this.state.incorrectCount,nextWord:this.state.nextWord,totalScore:this.state.totalScore,setWords:this.setWords,setCurrentWord:this.setCurrentWord,setCorrectCount:this.setCorrectCount,setIncorrectCount:this.setIncorrectCount,setNextWord:this.setNextWord,setTotalScore:this.setTotalScore};return c.a.createElement(W.Provider,{value:e},this.props.children)}}]),t}(o.Component),L=n(44),A=n(45),R=n(41),P=(n(27),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"log-out-user"},c.a.createElement("div",{className:"logged-in-user"},this.context.user.name),c.a.createElement(R.a,{className:"log-out-user-link",onClick:this.handleLogoutClick,to:"/login"},"Logout")))}},{key:"renderLoginLink",value:function(){return c.a.createElement("nav",{className:"heading login-page-heading"},c.a.createElement(R.a,{className:"heading login-page-login",to:"/login"},"Login")," ",c.a.createElement(R.a,{className:"heading login-page-register",to:"/register"},"Sign up"))}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",{className:"heading login-page-header"},c.a.createElement(R.a,{className:"heading login-page-link",to:"/login"},"Spaced repetition")),w.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink())}}]),t}(o.Component));P.contextType=T;var B=P,D=n(10),U=n(42);function q(e){var t=e.component,n=Object(D.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return c.a.createElement(N.Consumer,null,function(n){return t.user.id?c.a.createElement(r,Object.assign({},e,{user:t,content:n})):c.a.createElement(U.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})})}}))}function G(e){var t=e.component,n=Object(D.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return t.user.id?c.a.createElement(U.a,{to:"/"}):c.a.createElement(r,e)})}}))}var _=n(13),F=n.n(_);n(31);function J(e){var t=e.className,n=Object(D.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:F()("Label",t)},n))}var M=c.a.forwardRef(function(e,t){var n=e.className,r=Object(D.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:F()("Input",n),type:"text",ref:t},r))});function z(e){var t=e.className,n=Object(D.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:F()("Required",t)},n),"*")}n(32);var Y=c.a.forwardRef(function(e,t){var n=e.className,r=Object(D.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:F()("Button",n),ref:t},r))}),H=(n(33),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.username,o=t.password;C.postUser({name:r.value,username:a.value,password:o.value}).then(function(e){r.value="",a.value="",o.value="",n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{id:"sign-up-form",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("section",{id:"sign-up-container"},c.a.createElement("div",null,c.a.createElement(J,{className:"name-label",htmlFor:"registration-name-input"},"Enter your name",c.a.createElement(z,null)),c.a.createElement("br",null),c.a.createElement(M,{ref:this.firstInput,id:"registration-name-input",className:"name-input",name:"name",required:!0})),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"registration-username-input"},"Choose a username",c.a.createElement(z,null)),c.a.createElement("br",null),c.a.createElement(M,{id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"registration-password-input"},"Choose a password",c.a.createElement(z,null)),c.a.createElement("br",null),c.a.createElement(M,{id:"registration-password-input",name:"password",type:"password",required:!0}))),c.a.createElement("footer",null,c.a.createElement(Y,{id:"sign-up-button",type:"submit"},"Sign up")," ",c.a.createElement("br",null),c.a.createElement(R.a,{className:"already-have-an-account-link",to:"/login"},"Already have an account?")))}}]),t}(o.Component));H.defaultProps={onRegistrationSuccess:function(){}};var $=H,K=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"sign-up-heading-container"},c.a.createElement("h2",{id:"sign-up-heading"},"Sign up"),c.a.createElement("p",{id:"sign-up-desc"},"Practice learning a language with the spaced repetition revision technique."),c.a.createElement($,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);K.defaultProps={history:{push:function(){}}};var Q=K,V=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.username,a=t.password;n.setState({error:null}),C.postLogin({username:r.value,password:a.value}).then(function(e){r.value="",a.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{className:"LoginForm heading",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",null,c.a.createElement(J,{className:"heading login-page-username",htmlFor:"login-username-input"},"Username"),c.a.createElement(M,{ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement(J,{className:"heading login-page-password",htmlFor:"login-password-input"},"Password"),c.a.createElement(M,{id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement("br",null),c.a.createElement(Y,{className:"heading login-page-submit",type:"submit"},"Login"))}}]),t}(o.Component);V.defaultProps={onLoginSuccess:function(){}},V.contextType=T;var X=V,Z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleLoginSuccess=function(){var e=n.props,t=e.location,r=e.history,a=(t.state||{}).from||"/";r.push(a)},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",{className:"heading login-page-login-h2"},"Login"),c.a.createElement(X,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);Z.defaultProps={location:{},history:{push:function(){}}};var ee=Z,te=(n(34),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"renderWords",value:function(){console.log("key is",this.props.words);for(var e=this.props.words,t=[],n=0;n<e.length;n++)t.push(c.a.createElement("li",{key:this.props.words[n].id,className:"dashboard-individual-word-container"},c.a.createElement("h4",{className:"word-dashboard"},e[n].original),"correct answer count: ",e[n].correct_count,c.a.createElement("br",null),"incorrect answer count: ",e[n].incorrect_count,c.a.createElement("br",null),c.a.createElement("h4",{className:"attempts-dashboard"},c.a.createElement("p",null,console.log("wordarrtorender",t)),c.a.createElement("p",null,console.log("words to practice",this.words)))));return console.log(e),console.log("wordarrtorender",t),t}},{key:"render",value:function(){return c.a.createElement("section",{id:"words-to-practice-container"},c.a.createElement("ul",null,c.a.createElement("div",{id:"list-of-words-and-attempts"},this.renderWords())))}}]),t}(o.Component));te.contextType=N,te.defaultProps={words:[]};var ne=te,re=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={words:[],totalScore:null,language:"",key:null},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getWords()}},{key:"getWords",value:function(){var e=this;return fetch("".concat(f,"/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.json()}).then(function(t){console.log("data is",t),e.setState({words:t.words,totalScore:t.language.total_score,language:t.language.name,key:t.words.id})})}},{key:"render",value:function(){var e=this.state.words,t=this.state.key;return console.log("totalscore is",this.state.totalScore),console.log("words is",e),console.log("look at dashboard line 46+ for text fixing"),c.a.createElement("section",null,c.a.createElement("section",{id:"dashboard-container"},c.a.createElement("h2",{id:"welcome-message"},this.context.user.name," is learning ",this.state.language,"!",c.a.createElement("p",{id:"total-score-dashboard"},"Total correct answers: ",this.state.totalScore)),c.a.createElement(R.a,{to:"/learn",id:"button-lets-learn",type:"submit"},c.a.createElement("div",{id:"learn-button-text"},"Start practicing")),c.a.createElement("h3",{id:"words-header-dashboard"},"Words to practice"),c.a.createElement(ne,{words:e,id:t}),c.a.createElement("section",{className:"stats"})))}}]),t}(o.Component);re.contextType=T;var ae=re,oe={getWords:function(){var e=this;return fetch("".concat(f,"/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.json()}).then(function(t){console.log("data is",t),e.setState({words:t.words,totalScore:t.language.total_score})})},getWord:function(){return fetch("".concat(f,"/language/head"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postGuess:function(e){var t=w.getAuthToken(),n=JSON.stringify({guess:e}),r="".concat(f,"/language/guess");return fetch(r,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:n}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},ce=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),n.setState({currentGuess:e.target.value})},n.postGuessHandler=function(e){e.preventDefault(),console.log("props is",n.props);var t=n.state.currentGuess;oe.postGuess(t).then(function(e){console.log("data is post",e),n.tempSpace.wordCorrectCount=e.wordCorrectCount,n.tempSpace.wordIncorrectCount=e.wordIncorrectCount,n.setState({isCorrect:e.isCorrect,totalScore:e.totalScore,nextWord:e.nextWord,answer:e.answer}),!0===n.state.isCorrect?n.setState({wordCorrectCount:n.state.wordCorrectCount+1}):n.setState({wordIncorrectCount:n.state.wordIncorrectCount+1})})},n.setNextWordOnClick=function(){console.log("on second click, this.state.nextword is",n.state.nextWord),n.setState({isCorrect:null,wordCorrectCount:n.tempSpace.wordCorrectCount,wordIncorrectCount:n.tempSpace.wordIncorrectCount}),console.log("this state is",n.state)},n.state={currentWord:"",isCorrect:null,wordCorrectCount:n.props.wordCorrectCount,wordIncorrectCount:n.props.wordIncorrectCount,totalScore:n.props.totalScore,nextWord:n.props.nextWord,currentGuess:"",answer:null},n.tempSpace={wordCorrectCount:0,wordIncorrectCount:0},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return console.log("uuuuugh",this.state.currentWord,this.state.nextWord),c.a.createElement("section",{id:"translate-page-container"},c.a.createElement("div",{className:"learning_stats"},c.a.createElement("h4",{className:"learning_correct"},"You have answered this word correctly ",this.state.wordCorrectCount," ","times."),c.a.createElement("h4",{className:"learning_incorrect"},"You have answered this word incorrectly"," ",this.state.wordIncorrectCount," times.")),c.a.createElement("section",{className:"DisplayScore"},c.a.createElement("p",null,"Your total score is: ",this.state.totalScore)),!0===this.state.isCorrect&&c.a.createElement("section",{id:"correct-answer-feedback",className:"DisplayFeedback"},c.a.createElement("h2",null,"You were correct! :D"),c.a.createElement("p",null,"The correct translation for ",this.state.currentWord," was"," ",this.state.answer," and you chose ",this.state.currentGuess,"!")),!1===this.state.isCorrect&&c.a.createElement("section",{id:"incorrect-answer-feedback",className:"DisplayFeedback"},c.a.createElement("h2",null,"Good try, but not quite right :("),c.a.createElement("p",null,"The correct translation for ",this.state.currentWord," was"," ",this.state.answer," and you chose ",this.state.currentGuess,"!")),null===this.state.isCorrect&&c.a.createElement("form",{id:"translation-guess-form",onSubmit:function(t){return e.setState({currentWord:e.state.nextWord}),e.postGuessHandler(t)}},c.a.createElement("h2",null,"Translate the word:")," ",c.a.createElement("span",null,this.state.nextWord),c.a.createElement("label",{htmlFor:"learn-guess-input"},c.a.createElement("p",null,"What's the translation for this word?")),c.a.createElement("input",{type:"text",name:"guess",required:!0,onChange:this.handleInput.bind(this),id:"learn-guess-input"}),c.a.createElement(Y,{id:"button-show-form",type:"submit",onClick:this.updateCounts},"Submit your answer")),null!==this.state.isCorrect&&c.a.createElement(Y,{id:"button-show-form",type:"submit",onClick:this.setNextWordOnClick},"Try another word!"),c.a.createElement(R.a,{to:"/",className:"button-to-dashboard",type:"submit"},c.a.createElement("div",{className:"button-to-dashboard-text"},"Dashboard")))}}]),t}(o.Component),se=(n(35),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={wordCorrectCount:0,wordIncorrectCount:0,nextWord:"",totalScore:0},n.handleSetState=function(e){return n.setState({nextWord:e.nextWord,wordCorrectCount:e.wordCorrectCount,wordIncorrectCount:e.wordIncorrectCount,totalScore:e.totalScore})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;oe.getWord().then(function(t){console.log("data learning is",t),e.handleSetState(t)})}},{key:"getWord",value:function(){return console.log("this.state.wordcorrectcount in learning route is",this.state.wordCorrectCount),""!==this.state.nextWord?c.a.createElement("section",null,c.a.createElement(ce,{nextWord:this.state.nextWord,wordCorrectCount:this.state.wordCorrectCount,wordIncorrectCount:this.state.wordIncorrectCount,totalScore:this.state.totalScore})):c.a.createElement("div",null)}},{key:"render",value:function(){return c.a.createElement("section",null,this.getWord())}}]),t}(o.Component));se.contextType=N;var ie=se,ue=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(o.Component),le=(n(36),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return c.a.createElement("div",{className:"App"},c.a.createElement(B,null),c.a.createElement("main",null,e&&c.a.createElement("p",null,"There was an error! Oh no!"),c.a.createElement(L.a,null,c.a.createElement(q,{exact:!0,path:"/",component:ae}),c.a.createElement(q,{path:"/learn",component:ie}),c.a.createElement(G,{path:"/register",component:Q}),c.a.createElement(G,{path:"/login",component:ee}),c.a.createElement(A.a,{component:ue}))))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component));n(37),n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u.a,null,c.a.createElement(x,null,c.a.createElement(I,null,c.a.createElement(le,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.dae85382.chunk.js.map