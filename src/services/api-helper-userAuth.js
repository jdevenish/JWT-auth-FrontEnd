import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mighty-tundra-18136.herokuapp.com/api/'
});

export const checkToken = async () => {
    // const resp = await api.get('/checkToken');
    // return resp.data
    return "success"
};


export const registerNewUser = async (user) => {
    const resp  = await api.post(`/register`, user);
    console.log("register new user resp: ", resp)
    return resp.data
};

export const authenticateUser = async (user) => {
    const resp = await api.post('/authenticate', user);
    console.log("authenticate new user resp: ", resp.headers)
    return resp.data
};

export const logUserOut = async (user) => {
    return "Loging user out ..."
};

// export const withAuth = async(ComponentToProtect) => {
//
//     // return class extends Component {
//     //   constructor() {
//     //     super();
//     //     this.state = {
//     //       loading: true,
//     //       redirect: false,
//     //     };
//     //   }
//     //   componentDidMount() {
//     //     fetch('/checkToken')
//     //       .then(res => {
//     //         if (res.status === 200) {
//     //           this.setState({ loading: false });
//     //         } else {
//     //           const error = new Error(res.error);
//     //           throw error;
//     //         }
//     //       })
//     //       .catch(err => {
//     //         console.error(err);
//     //         this.setState({ loading: false, redirect: true });
//     //       });
//     //   }
//
//
//     // const resp = await api.get('/checkToken');
//     // if (resp.status === 200) {
//     //     return <ComponentToProtect {...this.props} />;
//     // }
// }
