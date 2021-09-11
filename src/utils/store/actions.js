const actions = store => ({
    toggle: state => ({animated: !state.animated}),
    changeLanguage: (state, value) => ({selectedLanguage: value})
})

export default actions;
