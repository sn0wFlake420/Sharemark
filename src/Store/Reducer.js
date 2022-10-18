const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SOCKET_CONNECT":
      return { ...state, socket: payload.socket };

    default:
      return { ...state };
  }
};

export default Reducer;
