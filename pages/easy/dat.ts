let config: any = {};

let sign: any = {}

export const getConf = () => config;

export const setConf = (conf: any) => {
    config = conf
    return config
}

export const udtConf = (conf: any) => ({
    ...config,
    ...conf
})

export const getSign = () => sign;

export const setSign = (s: any) => {
    sign = s
    return sign
}

export const udtSign = (s: any) => ({
    ...sign,
    ...s
})