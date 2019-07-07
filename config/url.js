import env from './env'

const DEV_URL = 'http://localhost:8080/'
const PRO_URL = 'http://118.190.63.177'

export default env === 'development' ? DEV_URL : PRO_URL
