

export default function({$axios}){
    $axios.onRequest(config=>{
    });
    $axios.onRequestError(err=>{
    });
    $axios.onResponse(data => {
    })
    //接口500无法访问，错误拦截
    $axios.onResponseError(error => {
    })
    $axios.onError(error => {
    })
}