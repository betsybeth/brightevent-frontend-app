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
        authenticated:true,
        id:[],
        error: '',
        message: '',
        isSearch:'',
        pages:'',
        nextPage: '',
        prevPage: '',
      },
      rsvp:{
        data:[],
        error:'',
        message:''
      }  
    },
  }
};  
  
