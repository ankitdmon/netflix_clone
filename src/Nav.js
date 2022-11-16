import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import "./Nav.css";

const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return() => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && `nav_black`}`}>
            <div className='nav_contents'>
                <img
                    onClick={() => history.push("/")}
                    className='nav_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix-logo"
                />

                <img
                    onClick={() => history.push("/profile")}
                    className='nav_avatar'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAYFBMVEUNfoD///8AeXsAdnj4+/vl8PAAcnVooaKWu7wegoSMurv0+vquzs/y9/c9j5DU5eV5qqtxpqgsiouMtLSawsK72NilyMlOl5nH3t7e6upKkZO30dGAs7RYnp9jo6RElZZkSTmBAAACI0lEQVR4nO3Y6XKCMBQFYLiXxSAkCLIJwvu/ZYNWBUbbUDI60znfz7a5HJKULI4DAAAAAAAAAACfRtpny7FIj7uDw5YCcJYfdyGtKUei8FzNK4WNvuCqHqu5SWRejQbf/aay7RGo39/KFcYhROPeqc3DQZn3KFcahuDSneg2j0Y9LVeZleNk2khtzXDaT8u1Rv1KlTsjtkWgdFat+Usjd+Os5GhWzTd6JQqtZqDuDxkc4U0b7bdFWL6S4fQK1PpJ9IPMn5aLzMpRP20kN0aYD4bhUOhWx0ejbvuSQcW9mmf4eRhb3eayt/0LNQ3hhyveiIdSuV5TZnaWbz7HvuepfOUKyEzE1jYQdGWrHAAAAMA7MdvbFo3WFyOR13VvLwTJYWUKcrrLQcPKLvlCn+ebPjDfqAdi933U8QM7Cai9nttCs20qO+f4fn7cW+oHcbuhUKn4ZZbp3bSMmskJtrHUD+JxS+K3vcMvukOfDlhG9ewOZH+21A8Uz8oWeSU4mCbRTw9YnLp4dt7VYkunplG7qJ2oNkrDk8yEEJk8hWnUqsRd/lE8WLrwvOBeLZ8w9kjijxLvye/cpJSWT1rEh2cpXlKdrUvfeQpZLof7VYBSmn9L1qYQh+K3GElTVo7dZeJJjFI9Hf9LB7SdtLxOvYjBTpXHtZ88PgR6ctbx7qz/Y9933h/vKsiRQxVqfTVk4vqT96O7DzwcAAAAAAAAAAAAAAD+hy8GnxMWuCtoBQAAAABJRU5ErkJggg=="
                    alt="Profile pic"
                />
            </div>

        </div>
    )
}

export default Nav