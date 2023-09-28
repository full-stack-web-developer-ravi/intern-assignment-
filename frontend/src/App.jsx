import { Component } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import axios from "axios";
import { v4 as uuidv4, v4 } from "uuid";

class App extends Component {
  state = { theme: false, username: "", email: "", age: "", location: "" };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };
  onChangeLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, age, location } = this.state;
    const id = v4();
    const userDetails = { id, username, email, age, location };
    try {
      // Send the user profile data to Service A
      const response = await axios.post(
        "http://localhost:3001/users/save-user",
        userDetails
      );
      alert(`UserId: ${response.data.userId}`);
    } catch (error) {
      alert(error.response.data.error);
    }
    this.setState({
      username: "",
      email: "",
      age: "",
      location: "",
    });
  };

  changeTheme = () => {
    this.setState((prevState) => ({ theme: !prevState.theme }));
    document.documentElement.classList.toggle("dark");
  };

  render() {
    const { theme, username, email, age, location } = this.state;
    return (
      <div className=" bg-[#0A1A56] min-h-screen  dark:bg-slate-900 dark:text-slate-500 font-robo ">
        <div className=" flex items-center justify-center pt-5 text-white ">
          <button
            type="button"
            className=" text-2xl outline-none w-[130px] border-[1px] p-2 rounded-full hover:bg-[#8C8CDA] duration-300 ease-in-out"
            onClick={this.changeTheme}
          >
            {theme ? (
              <div className="flex items-center">
                <BsSun className=" mr-3" />
                <p className=" text-sm">Blue Mode</p>
              </div>
            ) : (
              <div className=" flex items-center">
                <BsMoonStarsFill className=" mr-3" />
                <p className=" text-sm">Dark Mode</p>
              </div>
            )}
          </button>
        </div>
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={this.onSubmit}
            className=" bg-[#2A255E] p-5 flex flex-col w-[90%] md:w-[500px] rounded-lg dark:bg-[#2A255E] dark:text-white"
          >
            <label htmlFor="username" className=" text-lg pb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className=" bg-transparent border-[1px] border-[#E2E1E0] outline-none p-2 rounded-lg mb-2 text-white"
              id="username"
              onChange={this.onChangeUsername}
              value={username}
            />
            <label htmlFor="email" className=" text-lg pb-1">
              E-mail
            </label>
            <input
              value={email}
              type="text"
              placeholder="E-mail"
              className="bg-transparent border-[1px] border-[#E2E1E0] outline-none p-2 rounded-lg mb-2 text-white"
              id="email"
              onChange={this.onChangeEmail}
            />
            <label htmlFor="age" className=" text-lg pb-1">
              Age
            </label>
            <input
              type="number"
              placeholder="Your Age"
              className="bg-transparent border-[1px] border-[#E2E1E0] outline-none p-2 rounded-lg mb-2 text-white"
              id="age"
              min="1"
              max="45"
              onChange={this.onChangeAge}
              value={age}
            />
            <label htmlFor="location" className=" text-lg pb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent border-[1px] border-[#E2E1E0] outline-none p-2 rounded-lg mb-2 text-white"
              id="location"
              onChange={this.onChangeLocation}
              value={location}
            />
            <button
              className=" self-center bg-[#8C8CDA] w-[100px] h-[50px] rounded-lg text-white mt-3 text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
