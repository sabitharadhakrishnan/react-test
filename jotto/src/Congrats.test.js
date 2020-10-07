import React from "react";
import Enzyme,{ shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";
import {findBtTestAttr} from "./testUtils";
import {checkProps} from "./testUtils";

Enzyme.configure({adapter : new EnzymeAdapter()});

const setup = (props)=>{
    return shallow(<Congrats {...props}/>)
}

test('renders without error', ()=>{
    const wrapper = setup();
    const component = findBtTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1)
} )

test('renders no text when `success` prop is false', ()=>{
    const wrapper = setup({success:false});
    const component = findBtTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe('');
})

test('renders congrats meassage when `success` prop is true', ()=>{
    const wrapper = setup({success:true});
    const message = findBtTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
})

test('does not throw warning wwith expected props', ()=> {
    const expectedProps = { success:false};
   checkProps(Congrats,expectedProps);
})