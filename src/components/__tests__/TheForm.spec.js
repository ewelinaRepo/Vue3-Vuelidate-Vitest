import { mount } from "@vue/test-utils";
import { describe, expect, beforeEach, test } from "vitest";
import TheForm from "@/components/TheForm.vue";

describe("TheForm", () => {
  let wrapper;

  beforeEach(() => {

    wrapper = mount(TheForm, {
      global: {
        fakeApp: true,
      },
    });
  });

  describe.each([
    ['', 'Value is required'],
    ['mockFirstNameIsTooLong', 'The maximum length allowed is 20'],
  ])('#submitForm method - check validation error message for first name input value', (inputValue, expected) => {
    test(`validation firstName error message should return ${expected}`, () => {
  
      wrapper.vm.form.firstName = inputValue

      wrapper.vm.submitForm()
      expect(wrapper.vm.$v.firstName.$errors[0].$message).toEqual(expected)
    })
  })

  describe.each([
    ['', 'Value is required'],
    ['mockLastNameIsTooLong', 'The maximum length allowed is 20']
  ])('#submitForm method - check validation error message for lastName input value', (inputValue, expected) => {
    test(`validation lastName error message should return ${expected}`, () => {
  
      wrapper.vm.form.lastName = inputValue

      wrapper.vm.submitForm()
      expect(wrapper.vm.$v.lastName.$errors[0].$message).toEqual(expected)
    })
  })

  describe.each([
    ['', 'Value is required'],
    ['phoneValueIsNotNumeric', 'Value must be numeric']
  ])('#submitForm method - check validation error message for lastName input value', (inputValue, expected) => {
    test(`validation lastName error message should return ${expected}`, () => {
  
      wrapper.vm.form.phone = inputValue

      wrapper.vm.submitForm()
      expect(wrapper.vm.$v.phone.$errors[0].$message).toEqual(expected)
    })
  })

  describe.each([
    ['', 'Value is required'],
    ['emailValueIsNotValid', 'Value is not a valid email address']
  ])('#submitForm method - check validation error message for email input value', (inputValue, expected) => {
    test(`validation email error message should return ${expected}`, () => {
  
      wrapper.vm.form.email = inputValue

      wrapper.vm.submitForm()
      expect(wrapper.vm.$v.email.$errors[0].$message).toEqual(expected)
    })
  })

  test('check validation error message for lastName input value', async () => {
    wrapper.vm.form.firstName = 'mockFirstName'
    wrapper.vm.form.lastName = 'mockLastName'
    wrapper.vm.form.phone = '987456121'
    wrapper.vm.form.email = 'email@mock.com'

    wrapper.vm.submitForm()

    expect(wrapper.vm.$v.$invalid).toBeFalsy()
    expect(wrapper.vm.$v.$error).toBeFalsy()
    expect(wrapper.vm.$v.$errors).toEqual([])
  })
})

