import HyperHTMLElement from 'hyperhtml-element';


export default class BioComponent<TProps extends object, TState> extends HyperHTMLElement<TState> {

    private _props: TProps; 
    
    get props(): TProps {
        return {...(<any>this.defaultProps), ...(<any>this.propsFromAttributes), ...(<any>this._props)};
    }

    set props(value) {
        debugger;
        this._props = value;
        this.onPropsChanged();
    }

    get propsFromAttributes(): TProps {
        return null;
    }

    get defaultProps(): TProps {
        return null;
    }

    // overwrite if you eg need to merge into your state
    onPropsChanged() {
        this.render();
    }
}