import{aW as m}from"./index-BPWlAn8G.js";import{z as s}from"./form-provider-BjYdhHok.js";const g={phoneNumber:e=>{var i,u;return s.string().min(1,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Phone number is required!"}).refine(a=>{var d;return(d=e==null?void 0:e.isValidPhoneNumber)==null?void 0:d.call(e,a)},{message:((u=e==null?void 0:e.message)==null?void 0:u.invalid_type_error)??"Invalid phone number!"})},date:e=>s.coerce.date().nullable().transform((i,u)=>{var n,r;const a=m(i).format(),d=s.string().pipe(s.coerce.date());return i?(d.safeParse(a).success||u.addIssue({code:s.ZodIssueCode.invalid_date,message:((r=e==null?void 0:e.message)==null?void 0:r.invalid_type_error)??"Invalid Date!!"}),a):(u.addIssue({code:s.ZodIssueCode.custom,message:((n=e==null?void 0:e.message)==null?void 0:n.required_error)??"Date is required!"}),null)}).pipe(s.union([s.number(),s.string(),s.date(),s.null()])),editor:e=>{var i;return s.string().min(8,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Editor is required!"})},objectOrNull:e=>{var i,u;return s.custom().refine(a=>a!==null,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Field is required!"}).refine(a=>a!=="",{message:((u=e==null?void 0:e.message)==null?void 0:u.required_error)??"Field is required!"})},boolean:e=>{var i;return s.coerce.boolean().refine(u=>u===!0,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Switch is required!"})},file:e=>s.custom().transform((i,u)=>{var d;return i instanceof File||typeof i=="string"&&!!i.length?i:(u.addIssue({code:s.ZodIssueCode.custom,message:((d=e==null?void 0:e.message)==null?void 0:d.required_error)??"File is required!"}),null)}),files:e=>s.array(s.custom()).transform((i,u)=>{var d;const a=(e==null?void 0:e.minFiles)??2;return i.length?i.length<a&&u.addIssue({code:s.ZodIssueCode.custom,message:`Must have at least ${a} items!`}):u.addIssue({code:s.ZodIssueCode.custom,message:((d=e==null?void 0:e.message)==null?void 0:d.required_error)??"Files is required!"}),i})};export{g as s};
