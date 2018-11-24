import axios from 'axios'

// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.headers.common['Client-ID'] = process.env.VUE_APP_TWITCH_CLIENT_ID

const apiSearchStreams = ({
  link,
  params }) => {
  return new Promise((resolve, reject) => {
    var url = link || `${process.env.VUE_APP_API_BASE_URL}kraken/search/streams`
    axios.get(url, { params })
      .then(response => {
        var streams = response.data.streams.map(x => {
          let {
            _id: id,
            channel: {
              name: channelName
            } = {},
            preview: {
              medium: thumb
            } = {}
          } = x

          return {
            id,
            channelName,
            thumb
          }
        })

        resolve({
          streams,
          next: response.data._links.next
        })
      })
      .catch(() => {
        reject(new Error('fail'))
      })
  })
}

export {
  apiSearchStreams
}
