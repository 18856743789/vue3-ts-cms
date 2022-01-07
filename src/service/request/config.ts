// let BASE_URL = ''
// const TIME_OUT = 10000

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = '/api'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://coderwhy.org/prod'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
// }
// export { BASE_URL, TIME_OUT }

// 3.区分环境变量方式三: 加载.env文件
export const API_BASE_URL = process.env.VUE_APP_BASE_URL

export const TIME_OUT = 1000
