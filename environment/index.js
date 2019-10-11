

/**
 * 获取环境变量
 */
 const environment =process.env;
 const NODE_ENV=environment.NODE_ENV;
 const isDevMode = Object.is(NODE_ENV, 'development')
const isProdMode = Object.is(NODE_ENV, 'production')

const isStatic = process && process.static
const isServer = process && process.server
const isClient = process && process.client 


module.exports={
    environment,
    NODE_ENV,
    isDevMode,
    isProdMode,
    isStatic,
    isServer,
    isClient
}