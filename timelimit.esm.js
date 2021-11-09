/*!
 * revealjs-timelimit v0.2.1
 * URL: https://github.com/attakei/revealjs-timelimit#readme
 *
 * Copyright 2021 <%= pkg.author =>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 */

const e={timeout:300,content:"TIME IS OVER!!"},t=(e,t)=>{console.debug("Time is over!! Shutdown presentation");const i=(e=>{const t=document.createElement("section");return t.innerHTML=e.content,t})(t);for(document.getElementsByClassName("slides")[0].append(i);!e.isLastSlide();)e.next()},i=()=>({id:"timelimit",init:i=>{const o=i.getConfig().timelimit||{},n={...e,...o};let s=!0,l=null;i.on("slidechanged",(()=>{if(s)return null===l?(console.debug("Start timer of revealjs-timelimit"),void(l=setTimeout((()=>{s=!1,t(i,n)}),1e3*n.timeout))):i.isLastSlide()?(console.debug("Conguraturations!! You arrived at last of slide."),clearTimeout(l),void(s=!1)):void 0}))}});export{i as default};
