export default function ToggleView({ state, handler }) {
    return (
    <div className="l-toggle-view" data-display-list={state.displayList} onClick={() => handler(!state.displayList)}>
        <div className="l-toggle-view__row">
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
        </div>
        <div className="l-toggle-view__row">
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
        </div>
        <div className="l-toggle-view__row">
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
            <div className="l-toggle-view__item"/>
        </div>
    </div>);
}
