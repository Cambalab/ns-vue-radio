module.exports = (env) => {
  const extraEnvs = {
    API_BASE: 'http://www.ahijuna.fm'
  }
  return {...env, ...extraEnvs}
}
