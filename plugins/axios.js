

export default function({$axios}){
    $axios.onRequest(config=>{
    //     console.log(234234234);
    //    console.log(config);
    });
    $axios.onRequestError(err=>{
        console.log(err);
    })
}