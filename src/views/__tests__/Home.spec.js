import { shallowMount } from '@vue/test-utils';
import Home from '../Home.vue';

describe('Home.vue', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Home, {
      propsData: { 
        toggle: false,
       },
    });
  });
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should change the state of the postToggle', () => {
    const context = { toggle: false };
    Home.options.methods.togglePost.call(context);
    expect(context.toggle).toBeTruthy();
  });
  it('should return the value of postToggle', () => {
    const context = { toggle: false };
    const postToggle = Home.options.computed.postToggle.get.call(context);
    expect(postToggle).toBeFalsy();
  });
});
