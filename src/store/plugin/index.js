export const saveInLocal = store => {
  // store.replaceState(JSON.parse(JSON.stringify(localStorage.getItem(''))))

  // 每次commit mutation都会调用这个回调
  store.subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
  });
};
