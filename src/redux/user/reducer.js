// export const addUser = createAction('userReducer/addUser');
// export const delUser = createAction('userReducer/delUser');

// export const userReducer = createReducer(initialState, {
//   [addUser]: (state, action) => state.contacts.push(action.payload),
//   [delUser]: (state, action) => state.contacts.filter(el => el.id !== action.payload)
// })

// export const userReducer = (state = initialState, action) => {

//   if (action.type === 'addUser') {
//     return { ...state, contacts: [...state.contacts, action.payload] };
//   }

//   if (action.type === 'delUser') {
//     return { ...state, contacts: state.contacts.filter(el => el.id !== action.payload) };
//   }
//   return state;
// };
