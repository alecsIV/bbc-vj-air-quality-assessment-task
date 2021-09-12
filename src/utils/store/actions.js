// Set the actions for the state changes (act like events in Preact/React)
const actions = store => ({
    toggle: state => ({animated: !state.animated}),
    changeLanguage: (state, value) => ({selectedLanguage: value})
})

export default actions;
