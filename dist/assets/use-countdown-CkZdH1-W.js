import{r}from"./index-DyaX_SWt.js";function m(n){const[t,o]=r.useState({days:"00",hours:"00",minutes:"00",seconds:"00"});r.useEffect(()=>{e();const c=setInterval(e,1e3);return()=>clearInterval(c)},[]);const e=()=>{const c=n,u=new Date,s=c.valueOf()-u.valueOf(),a=Math.floor(s/(1e3*60*60*24)),l=`0${Math.floor(s%(1e3*60*60*24)/(1e3*60*60))}`.slice(-2),d=`0${Math.floor(s%(1e3*60*60)/(1e3*60))}`.slice(-2),f=`0${Math.floor(s%(1e3*60)/1e3)}`.slice(-2);o({days:a<10?`0${a}`:`${a}`,hours:l,minutes:d,seconds:f})};return t}function v(n){const[t,o]=r.useState(n),e=r.useRef(t),c=r.useCallback(()=>{e.current=t;const s=setInterval(()=>{e.current-=1,e.current===0?(clearInterval(s),o(n)):o(e.current)},1e3)},[n,t]);return{counting:n>t,countdown:t,startCountdown:c,setCountdown:o}}export{m as a,v as u};
