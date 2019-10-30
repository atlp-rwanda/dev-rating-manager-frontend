import axios from 'axios';
import { CREATE_LF, CREATE_LF_ERROR, CLEAR_DATA } from './actionType';

export const createLF = data => (dispatch) => {
    const config = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ29vZ2xlSWQiOiIxMDc2MjAwMTI3NDE0MDU5Njg4MzciLCJmaXJzdE5hbWUiOiJTdXBlciIsImxhc3ROYW1lIjoiTEYiLCJlbWFpbCI6Im1hcnZlbGRldjUzQGdtYWlsLmNvbSIsInJvbGUiOiJTdXBlciBMRiIsImNyZWF0ZWRBdCI6IjIwMTktMTAtMjFUMTI6MTI6MTIuNDgyWiIsInVwZGF0ZWRBdCI6IjIwMTktMTAtMjFUMTI6MTI6MTIuNDgyWiIsImlhdCI6MTU3MjQ0MzU2OCwiZXhwIjoxNTcyNTI5OTY4fQ.8c9R5YKRPj-H3_sizXO7DFuQ4B8gRgCHdLDpvumN2Hg',
        }
    }
    axios.patch('https://dev-rating-manager-staging.herokuapp.com/api/v1/users/make-lf', data, config)
      .then((response) => {
        if(response.status === 200){
            dispatch({
                type: CREATE_LF,
                response: response.data.message,
            });
        } else {
            dispatch({
                type: CREATE_LF_ERROR,
                response: response.message,
            });
        }
      }).catch(error => {
            dispatch({
                type: CREATE_LF_ERROR,
                response: error.response.data.message,
            });
      });
   };
   
export const clearData = () => (dispatch) => {
    dispatch({
        type: CLEAR_DATA
    })
}