import { Form } from "./constants";

const initialFormState = {
  openFrom: false,
  formData: {},
};

const formReducer = (state = initialFormState, action) => {
  // console.log(action);
  switch (action.type) {
    case Form.SHOW_FORM: {
      return {
        ...state,
        openFrom: action.payload,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
