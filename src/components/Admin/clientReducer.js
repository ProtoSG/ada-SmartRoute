export const clientReducer = (initialState, action) => {
  switch (action.type) {
    case '[CLIENT] add':
      return [...initialState, action.payload]
  }
}