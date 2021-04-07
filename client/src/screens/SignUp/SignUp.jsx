import "./SignUp.css";
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { signUp, signIn } from '../../services/users'
import { useState } from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../../components/shared/Layout/Layout"
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#FFB332',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#00D680',
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function SignUp(props) {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: ''
  });

  const { email, username, password, passwordConfirmation } = form;
  const classes = useStyles();
  const history = useHistory();
  
  const handleChange = event =>
    setForm({
      ...form,
      [event.target.name]: event.target.value
  })

  const onSignUp = event => {
    event.preventDefault()
    console.log('clicked')
    const { setUser } = props

    signUp(form)
        .then((user) => setUser(user))
        .then(() => history.push('/'))
        .catch(error => {
            console.error(error)
            setForm({
                email: '',
                password: '',
                passwordConfirmation: '',
                isError: true,
                errorMsg: 'Sign Up Details Invalid'
            })
        })
}

  
  return (
    <Layout>
    <div className="signup-In-form-container">
        <form onSubmit={onSignUp}
        className="signup-In-form"
        >
        <h1>Sign-Up</h1>
          <input
            className="signup-In-input"
          required
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <br/>
          <input
            className="signup-In-input"
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br/>
          <input
            className="signup-In-input"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br/>
          <input
            className="signup-In-input"
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <br/>
        <ColorButton variant="contained" color="primary" type="submit" className={classes.margin} >
          Sign Up
        </ColorButton>
        
      </form>
      </div>
      </Layout>
  )
}
export default SignUp;