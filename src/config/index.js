// 正式域名
const DOMAIN_P = {
}
// 测试域名
const DOMAIN_Q = {
}

const nodeEnv = process.env.NODE_ENV
// 默认 测试环境配置
let service = DOMAIN_Q
let environment = 'qa'
if (nodeEnv === 'production') {
  service = DOMAIN_P
  environment = 'production'
} else if (nodeEnv === 'development') {
  // 获取当前环境
  service = DOMAIN_Q
  environment = 'qa'
} else {
  // 测试环境
  service = DOMAIN_Q
  environment = 'qa'
}
module.exports = {
  service,
  environment,
}
