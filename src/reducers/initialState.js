export default {
  entities: {
    user: {
      token: '',
      message:'',
      authenticated:false,
      error: ''
    },
    request: {
      loading:false,
      error: '',
    }
  },
  eventState: {
    data: [],
    event : {
      token:'',
      authenticated: false,
      createEvent:false,
    },
    request: {
      error: '',
    }
  }
}
