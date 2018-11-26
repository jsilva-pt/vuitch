import axios from 'axios'

axios.defaults.headers.common['Client-ID'] = process.env.VUE_APP_TWITCH_CLIENT_ID

const apiSearchStreams = ({
  link,
  params }) => {
  return new Promise((resolve, reject) => {
    var url = link || `${process.env.VUE_APP_TWITCH_API_BASE_URL}kraken/search/streams`

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

        let {
          next
        } = response.data._links

        resolve({
          streams,
          next
        })
      })
      .catch(() => {
        reject(new Error('fail'))
      })
  })
}

const apiGetStream = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.VUE_APP_TWITCH_API_BASE_URL}kraken/streams/${id}`)
      .then(response => {
        var {
          channel: {
            status,
            views,
            display_name: name
          } = {},
          viewers,
          game
        } = response.data.stream

        resolve({
          viewers,
          views,
          status,
          game,
          name
        })
      })
      .catch(() => {
        reject(new Error('fail'))
      })
  })
}

export {
  apiSearchStreams,
  apiGetStream
}
