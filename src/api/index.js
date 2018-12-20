import axios from 'axios'

axios.defaults.headers.common['Client-ID'] = process.env.VUE_APP_TWITCH_CLIENT_ID

const apiSearchStreams = ({ link, params }) => {
  var url = link || `${process.env.VUE_APP_TWITCH_API_BASE_URL}kraken/search/streams`

  return axios.get(url, { params })
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

      return {
        streams,
        next
      }
    })
    .catch(() => {
      return new Error('fail')
    })
}

const apiGetStream = (id) => {
  return axios.get(`${process.env.VUE_APP_TWITCH_API_BASE_URL}kraken/streams/${id}`)
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

      return {
        viewers,
        views,
        status,
        game,
        name
      }
    })
    .catch(() => {
      return new Error('fail')
    })
}

export {
  apiSearchStreams,
  apiGetStream
}
