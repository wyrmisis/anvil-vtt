export default (config, env, helpers, options) => {
  config.resolve.modules.push(`${__dirname}/src`)

  console.log(config)

  return config
}
