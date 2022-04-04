export default ({ $axios }) => {
  $axios.onRequest((config) => {

    console.log(config.url)
  })


}
