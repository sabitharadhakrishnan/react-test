import checkPropTypes from "check-prop-types";

export const findBtTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component,conformingProps)=>{
    const propError = checkPropTypes(component.propTypes, conformingProps,'props', component.name);
    expect(propError).toBeUndefined();
}