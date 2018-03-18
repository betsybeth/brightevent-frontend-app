export default {
  entities: {
    user: {
      token: '',
      message:'',
      authenticated:false,
      error: ''
    },
    request: {
      loading:true,
      error: '',
    }
  },
  eventState: {
    data: [],
    event : {
      createEvent:false,
      message:''
    },
    request: {
      error: '',
    }
  }
}
