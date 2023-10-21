import './DropDown.css'

function ProfileDropDownMenu({ logout }: { logout: () => void }): JSX.Element {
  
  return (
    <div className='flex flex-col dropDownProfile'>
      <ul className='flex flex-col gap-3'>
        <li>Edit Profile</li>
        <li>Settings</li>
        <li onClick={logout} className='logout'>Logout</li> {/* Use onClick to trigger the logout function */}
      </ul>
    </div>
  )
}

export default ProfileDropDownMenu