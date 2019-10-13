export default async ({app,$axios},inject)=>{
   await $axios.$get('/wallpapper').then(res => {
        inject('getBingPic',()=>res)
    })
}