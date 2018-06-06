export default {
  entities: {
    user: {
      data : {
        token: '',
        message:'',
        authenticated: false,
      },
      request: {
        loading: false,
        error: '',
      }
    },
    events: {
      data: [],
      request: {
        error: '',
        message: '',
        isSearch:'',
        pages:'',
        nextPage: '',
        prevPage: '',
        authenticated:false,
      },
      rsvp:{
        info:[],
        error:'',
        message:''
      }  
    },
  }
};  
  
