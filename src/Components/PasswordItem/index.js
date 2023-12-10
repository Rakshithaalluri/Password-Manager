import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, checkBoxClicked} = props
  const {website, userName, id, password} = passwordDetails

  const onDeletePassword = () => {
    deletePassword(id)
  }

  const passwordImages = checkBoxClicked ? (
    <p>{password} </p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="users-password"
    />
  )

  const firstLetter = website.slice(0, 1).toUpperCase()

  return (
    <li className="password-listItem">
      <p className="starting-letter"> {firstLetter} </p>
      <div className="users-passWard">
        <p className="users-website"> {website} </p>
        <p className="users-name"> {userName} </p>
        {passwordImages}
      </div>
      <button
        type="button"
        className="button"
        onClick={onDeletePassword}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
