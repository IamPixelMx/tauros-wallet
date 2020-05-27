const setLoadingState = ({ state, isLoading }) => {
  return {
    ...state,
    loading: isLoading,
  };
};

export default setLoadingState;
