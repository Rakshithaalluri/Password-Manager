import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    userName: '',
    password: '',
    checkBoxClicked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onDeleteButton = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        password => password.id !== id,
      ),
    }))
  }

  searchResults = () => {
    const {passwordsList, searchInput} = this.state

    const searchResults = passwordsList.filter(eachPasswordItem =>
      eachPasswordItem.website
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  renderPasswordsListItems = () => {
    const {passwordsList, checkBoxClicked} = this.state

    return passwordsList.map(eachPassword => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        deletePassword={this.onDeleteButton}
        checkBoxClicked={checkBoxClicked}
      />
    ))
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      checkBoxClicked: !prevState.checkBoxClicked,
    }))
  }

  onAddPasswordDetails = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const newPassword = {
      id: v4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      userName: '',
      password: '',
      searchInput: '',
    }))
  }

  onTogglePassword = () => {
    this.setState(prevState => ({
      checkBoxClicked: !prevState.checkBoxClicked,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, passwordsList, website, userName, password} = this.state

    return (
      <div className="bg-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="new-password-container">
            <div className="image-password-container">
              <div className="user-password-container">
                <form
                  className="user-input-container"
                  onSubmit={this.onAddPasswordDetails}
                >
                  <h1 className="password-heading"> Add New Password </h1>
                  <div className="website-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="logo"
                    />
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Website"
                      value={website}
                      onChange={this.onChangeWebsite}
                    />
                  </div>
                  <div className="website-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="logo"
                    />
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Username"
                      value={userName}
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="website-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="logo"
                    />
                    <input
                      type="password"
                      className="input"
                      placeholder="Enter Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="button-container">
                    <button className="add-button" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-img"
              />
            </div>
          </div>

          <div className="adding-password-container">
            <div className="inner-container">
              <div className="your-password-search-container">
                <div className="your-password-count-value">
                  <h1 className="your-password-heading"> Your Passwords </h1>
                  <p className="password-count"> {passwordsList.length} </p>
                </div>
                <div className="search-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-logo"
                  />
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="show-passwords">
                <label className="show-password-text" htmlFor="show-pass">
                  {' '}
                  <input
                    type="checkbox"
                    id="show-pass"
                    className="input-checkbox"
                    onClick={this.onTogglePassword}
                  />
                  Show Passwords{' '}
                </label>
              </div>
              {passwordsList.length > 0 ? (
                <ul className="password-items-container">
                  {' '}
                  {this.renderPasswordsListItems()}
                </ul>
              ) : (
                <div className="no-password-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-image"
                  />
                  <p className="no-passwords-heading"> No Passwords </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
