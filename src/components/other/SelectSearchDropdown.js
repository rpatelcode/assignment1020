import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
// import { updateYourDetails } from "../../actions/yourDetails";
// import useForm from "react-hook-form";
// import { useStateMachine } from "little-state-machine";
// import _ from "lodash";

const getOptions = () => [
  {
    key: "1",
    value: "Assistant Deputy City Solictors",
    text: "Assistant Deputy City Solictors"
  },
  {
    key: "2",
    value: "Board Of Railway Commissioners",
    text: "Board Of Railway Commissioners"
  },
  { key: "3", value: "City Auditor", text: "City Auditor" },
  { key: "4", value: "City Clerks", text: "City Clerks" },
  { key: "5", value: "City Solicitors", text: "City Solicitors" },
  {
    key: "6",
    value: "Council Of Borough Of York",
    text: "Council Of Borough Of York"
  },
  {
    key: "7",
    value: "Department of Financial And Commercial Affairs",
    text: "Department of Financial And Commercial Affairs"
  },
  {
    key: "8",
    value: "Department of Highways",
    text: "Department of Highways"
  },
  {
    key: "9",
    value: "Department of Municipal Affairs",
    text: "Department of Municipal Affairs"
  },
  {
    key: "10",
    value: "Department of Transport",
    text: "Department of Transport"
  }
];

const SelectSearchDropdown = props => {
  // useEffect(() => {
  //   register({ name: "selectSearchDropDown" }, { required: false });
  //   setValue("selectSearchDropDown", state.selectSearchDropDown);
  // }, []);

  const [localState, setLocalState] = useState({
    isFetching: false,
    multiple: true,
    search: true,
    searchQuery: null,
    value: [],
    options: getOptions()
  });
  // const { register, setValue } = useForm({ mode: "onChange" });
  // const { state } = useStateMachine(updateYourDetails);

  const { multiple, options, isFetching, search, value } = localState;

  const handleChange = (e, value) => {
    setLocalState(value);
    // action({
    //   // Still need work on here
    //   ..._.merge(state, value.value)
    // });
  };

  const handleSearchChange = (e, searchQuery) => setLocalState(searchQuery);

  return (
    <Dropdown
      name="selectSearchDropDown"
      id="selectSearchDropDown"
      fluid
      selection
      multiple={multiple}
      search={search}
      options={options}
      value={value}
      placeholder="Available Agencies"
      onChange={handleChange}
      onSearchChange={handleSearchChange}
      disabled={isFetching}
      loading={isFetching}
      style={{ marginBottom: "3em" }}
    />
  );
};

export default SelectSearchDropdown;

// import _ from "lodash";
// import React, { Component } from "react";
// import { Dropdown } from "semantic-ui-react";

// const getOptions = () => [
//   {
//     key: "1",
//     value: "Assistant Deputy City Solictors",
//     text: "Assistant Deputy City Solictors"
//   },
//   {
//     key: "2",
//     value: "Board Of Railway Commissioners",
//     text: "Board Of Railway Commissioners"
//   },
//   { key: "3", value: "City Auditor", text: "City Auditor" },
//   { key: "4", value: "City Clerks", text: "City Clerks" },
//   { key: "5", value: "City Solicitors", text: "City Solicitors" },
//   {
//     key: "6",
//     value: "Council Of Borough Of York",
//     text: "Council Of Borough Of York"
//   },
//   {
//     key: "7",
//     value: "Department of Financial And Commercial Affairs",
//     text: "Department of Financial And Commercial Affairs"
//   },
//   {
//     key: "8",
//     value: "Department of Highways",
//     text: "Department of Highways"
//   },
//   {
//     key: "9",
//     value: "Department of Municipal Affairs",
//     text: "Department of Municipal Affairs"
//   },
//   {
//     key: "10",
//     value: "Department of Transport",
//     text: "Department of Transport"
//   }
// ];

// class SelectSearchDropdown extends Component {
//   state = {
//     isFetching: false,
//     multiple: true,
//     search: true,
//     searchQuery: null,
//     value: [],
//     options: getOptions()
//   };

//   handleChange = (e, { value }) => this.setState({ value });
//   handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

//   fetchOptions = () => {
//     this.setState({ isFetching: true });

//     setTimeout(() => {
//       this.setState({ isFetching: false, options: getOptions() });
//       this.selectRandom();
//     }, 500);
//   };

//   selectRandom = () => {
//     const { multiple, options } = this.state;
//     const value = _.sample(options).value;
//     this.setState({ value: multiple ? [value] : value });
//   };

//   toggleSearch = e => this.setState({ search: e.target.checked });

//   toggleMultiple = e => {
//     const { value } = this.state;
//     const multiple = e.target.checked;
//     // convert the value to/from an array
//     const newValue = multiple ? _.compact([value]) : _.head(value) || "";
//     this.setState({ multiple, value: newValue });
//   };

//   render() {
//     const { multiple, options, isFetching, search, value } = this.state;

//     return (
//       <Dropdown
//         fluid
//         selection
//         multiple={multiple}
//         search={search}
//         options={options}
//         value={value}
//         placeholder="Available Agencies"
//         onChange={this.handleChange}
//         onSearchChange={this.handleSearchChange}
//         disabled={isFetching}
//         loading={isFetching}
//         style={{ marginBottom: "3em" }}
//       />
//     );
//   }
// }

// export default SelectSearchDropdown;
