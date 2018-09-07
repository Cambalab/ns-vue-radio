module.exports = (env) => {
  const extraEnvs = {
    API_BASE: 'http://10.0.2.2:8000'
  }
  return {...env, ...extraEnvs}
}
