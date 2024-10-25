import{bc as m}from"./index-Blkmi4zg.js";import{z as s}from"./form-provider-owZ2kEHF.js";const g={phoneNumber:e=>{var i,u;return s.string().min(1,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Phone number is required!"}).refine(d=>{var n;return(n=e==null?void 0:e.isValidPhoneNumber)==null?void 0:n.call(e,d)},{message:((u=e==null?void 0:e.message)==null?void 0:u.invalid_type_error)??"Invalid phone number!"})},date:e=>s.coerce.date().nullable().transform((i,u)=>{var r,a;const d=m(i).format(),n=s.string().pipe(s.coerce.date());return i?(n.safeParse(d).success||u.addIssue({code:s.ZodIssueCode.invalid_date,message:((a=e==null?void 0:e.message)==null?void 0:a.invalid_type_error)??"Invalid Date!!"}),d):(u.addIssue({code:s.ZodIssueCode.custom,message:((r=e==null?void 0:e.message)==null?void 0:r.required_error)??"Date is required!"}),null)}).pipe(s.union([s.number(),s.string(),s.date(),s.null()])),editor:e=>{var i;return s.string().min(8,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Editor is required!"})},objectOrNull:e=>{var i,u;return s.custom().refine(d=>d!==null,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Field is required!"}).refine(d=>d!=="",{message:((u=e==null?void 0:e.message)==null?void 0:u.required_error)??"Field is required!"})},boolean:e=>{var i;return s.coerce.boolean().refine(u=>u===!0,{message:((i=e==null?void 0:e.message)==null?void 0:i.required_error)??"Switch is required!"})},file:e=>s.custom().transform((i,u)=>{var n;return i instanceof File||typeof i=="string"&&!!i.length?i:(u.addIssue({code:s.ZodIssueCode.custom,message:((n=e==null?void 0:e.message)==null?void 0:n.required_error)??"File is required!"}),null)}),files:e=>s.array(s.custom()).transform((i,u)=>{var n;const d=(e==null?void 0:e.minFiles)??2;return i.length?i.length<d&&u.addIssue({code:s.ZodIssueCode.custom,message:`Must have at least ${d} items!`}):u.addIssue({code:s.ZodIssueCode.custom,message:((n=e==null?void 0:e.message)==null?void 0:n.required_error)??"Files is required!"}),i})};export{g as s};
