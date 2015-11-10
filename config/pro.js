//config
exports.app = {
  port: 80
}

exports.db = {
  host: "10.170.42.56",//公网ip 120.24.228.66
  port: "27017",
  dbName: "blog",
  options: {}
}


exports.encode = {
  pwdSecret: 'MoJE9TbQjvqN9tkzSW0qxY98ZDNcv1'
}

exports.oss = {
  host: 'oss-cn-hangzhou-internal.aliyuncs.com'
}
