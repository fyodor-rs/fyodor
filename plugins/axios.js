export default function({$axios}){
    // console.log($axios);
    console.log('i come in');
    $axios.onRequest(config=>{
        console.log(234234234);
       console.log(config);
    });
    $axios.onRequestError(err=>{
        console.log(err);
    })
}